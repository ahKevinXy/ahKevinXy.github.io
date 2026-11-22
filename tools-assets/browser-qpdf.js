(()=>{"use strict";let e=String.raw`
    "use strict";
    let fatalPosted = false;
    const postFatal = (error, fallback = "qpdf worker failed.", files = []) => {
      if (fatalPosted) return;
      fatalPosted = true;
      const transfer = files.map((file) => file.data);
      self.postMessage({ type: "error", name: error?.name || "Error", message: error?.message || String(error || fallback), stack: error?.stack || "", files }, transfer);
    };
    self.addEventListener("error", (event) => { postFatal(event.error, event.message || "qpdf worker failed to initialize."); event.preventDefault(); });
    self.addEventListener("unhandledrejection", (event) => { postFatal(event.reason, "qpdf worker promise rejected unexpectedly."); event.preventDefault(); });
    const ensureParent = (FS, path) => { const i = path.lastIndexOf("/"); if (i <= 0) return; try { FS.mkdirTree(path.slice(0, i)); } catch (_) {} };
    const walkFiles = (FS, root) => {
      const out = [];
      const walk = (dir) => { let names; try { names = FS.readdir(dir); } catch (_) { return; }
        for (const name of names) { if (name === "." || name === "..") continue; const full = dir === "/" ? "/" + name : dir.replace(/\/$/, "") + "/" + name;
          let stat; try { stat = FS.stat(full); } catch (_) { continue; } if (FS.isDir(stat.mode)) walk(full); else if (FS.isFile(stat.mode)) out.push(full); }
      }; walk(root); return out;
    };
    self.onmessage = async (event) => {
      const { coreJsUrl, wasmBytes, args, files, outputs, collectDirs, dirs } = event.data;
      const recentLogs = [], stdoutLines = [], stderrLines = [];
      const sendLog = (stream, message) => { const text = String(message); recentLogs.push(stream + ": " + text); if (recentLogs.length > 100) recentLogs.shift(); if (stream === "stdout") stdoutLines.push(text); else stderrLines.push(text); self.postMessage({ type: "log", stream, message: text }); };
      let core = null;
      const collectRequestedFiles = () => { if (!core) return []; const names = new Set(outputs); for (const dir of collectDirs) for (const name of walkFiles(core.FS, dir)) names.add(name); const result = [];
        for (const name of names) { try { const bytes = core.FS.readFile(name); const copy = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength); result.push({ name, data: copy }); } catch (_) {} } return result; };
      try {
        importScripts(coreJsUrl);
        if (typeof createQpdfCore !== "function") throw new Error("createQpdfCore factory was not found.");
        core = await createQpdfCore({ wasmBinary: new Uint8Array(wasmBytes), thisProgram: "qpdf", locateFile: (name) => new URL(name, coreJsUrl).href, noInitialRun: true, print: (m) => sendLog("stdout", m), printErr: (m) => sendLog("stderr", m) });
        for (const dir of dirs) { try { core.FS.mkdirTree(dir); } catch (_) {} }
        for (const file of files) { ensureParent(core.FS, file.name); core.FS.writeFile(file.name, new Uint8Array(file.data)); }
        let exitCode = 0;
        try { const value = core.callMain(args); if (typeof value === "number") exitCode = value; }
        catch (error) { if (typeof error?.status === "number") exitCode = error.status; else throw error; }
        if (exitCode !== 0) { const detail = recentLogs.length ? "\nRecent CLI output:\n" + recentLogs.slice(-50).join("\n") : ""; throw new Error("qpdf CLI exited with code " + exitCode + detail); }
        const resultFiles = collectRequestedFiles(); const transfer = resultFiles.map((file) => file.data);
        self.postMessage({ type: "done", exitCode, stdout: stdoutLines.join("\n") + (stdoutLines.length ? "\n" : ""), stderr: stderrLines.join("\n") + (stderrLines.length ? "\n" : ""), files: resultFiles }, transfer);
      } catch (error) { postFatal(error, "qpdf worker failed.", collectRequestedFiles()); }
    };
  `,r=async e=>{if(e instanceof ArrayBuffer)return e.slice(0);if(ArrayBuffer.isView(e))return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength);if(e instanceof Blob)return e.arrayBuffer();throw TypeError("Input data must be Blob, File, ArrayBuffer, or TypedArray.")},t=()=>{if("u"<typeof Worker||"u"<typeof WebAssembly)throw Error("WASM Zoo QPDF browser-full requires Web Workers and WebAssembly support.")};class s{constructor({baseUrl:e,coreJsUrl:r,wasmUrl:t}){this.baseUrl=new URL(e,document.baseURI),this.coreJsUrl=new URL(r||"qpdf-core.js",this.baseUrl).href,this.wasmUrl=new URL(t||"qpdf-core.wasm",this.baseUrl).href,this.wasm=null,this.disposed=!1}async load(){if(t(),this.wasm)return;let e=await fetch(this.wasmUrl);if(!e.ok)throw Error(`Failed to load QPDF WASM: ${e.status} ${e.statusText}`);this.wasm=await e.arrayBuffer()}async exec(s=[],o={}){if(this.disposed)throw Error("qpdf runner has been disposed.");if(t(),!Array.isArray(s))throw TypeError("args must be an array of CLI arguments.");await this.load();let a=[],n=[];for(let e of Array.isArray(o.files)?o.files:[]){if(!e?.name)throw Error("Every input file needs a virtual filesystem path.");let t=await r(e.data);a.push({name:e.name,data:t}),n.push(t)}let i=this.wasm.slice(0);n.push(i);let l="function"==typeof o.onLog?o.onLog:()=>{};return new Promise((r,t)=>{let f,c,d=(c=new Worker(f=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))),setTimeout(()=>URL.revokeObjectURL(f),0),c),u=!1,m=Number(o.timeoutMs||0),p=null,y=()=>{p&&clearTimeout(p),d.terminate()},h=e=>{u||(u=!0,y(),t(e))};Number.isFinite(m)&&m>0&&(p=setTimeout(()=>{let e=Error(`qpdf CLI timed out after ${m} ms`);e.name="TimeoutError",h(e)},m)),d.onmessage=e=>{let t=e.data;if(t?.type==="log")return void l({stream:t.stream,message:t.message});if(t?.type==="done"){var s;return void(s={exitCode:t.exitCode,stdout:t.stdout||"",stderr:t.stderr||"",files:t.files.map(e=>({name:e.name,data:new Uint8Array(e.data)}))},!u&&(u=!0,y(),r(s)))}if(t?.type==="error"){let e=Error(t.message||"qpdf worker failed.");e.name=t.name||"Error",e.stack=t.stack||e.stack,e.files=Array.isArray(t.files)?t.files.map(e=>({name:e.name,data:new Uint8Array(e.data)})):[],h(e)}},d.onerror=e=>h(e.error instanceof Error?e.error:Error(e.message||"qpdf worker failed.")),d.postMessage({coreJsUrl:this.coreJsUrl,wasmBytes:i,args:[...s],files:a,outputs:Array.isArray(o.outputs)?[...o.outputs]:[],collectDirs:Array.isArray(o.collectDirs)?[...o.collectDirs]:[],dirs:Array.isArray(o.dirs)?[...o.dirs]:[]},n)})}dispose(){this.disposed=!0,this.wasm=null}}window.WasmZooQpdf=Object.freeze({loadHosted:({baseUrl:e,coreJsUrl:r,wasmUrl:t})=>new s({baseUrl:e,coreJsUrl:r,wasmUrl:t}),isSupported:()=>"u">typeof Worker&&"u">typeof WebAssembly})})();