"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[3819],{3905:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return m}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),u=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},l=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(r),p=o,m=f["".concat(s,".").concat(p)]||f[p]||d[p]||i;return r?t.createElement(m,a(a({ref:n},l),{},{components:r})):t.createElement(m,a({ref:n},l))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[f]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},40843:function(e,n,r){r.r(n),r.d(n,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return f}});var t=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],c={},s="Recovery",u={unversionedId:"backend/go/gin/source/1.7.7/recovery",id:"backend/go/gin/source/1.7.7/recovery",title:"Recovery",description:"",source:"@site/docs/backend/go/gin/source/1.7.7/recovery.md",sourceDirName:"backend/go/gin/source/1.7.7",slug:"/backend/go/gin/source/1.7.7/recovery",permalink:"/docs/backend/go/gin/source/1.7.7/recovery",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"path",permalink:"/docs/backend/go/gin/source/1.7.7/path"},next:{title:"response_write",permalink:"/docs/backend/go/gin/source/1.7.7/reponse_writer"}},l={},f=[],d={toc:f},p="wrapper";function m(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)(p,(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"recovery"},"Recovery"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// Copyright 2014 Manu Martinez-Almeida.  All rights reserved.\n// Use of this source code is governed by a MIT style\n// license that can be found in the LICENSE file.\n\npackage gin\n\nimport (\n "bytes"\n "fmt"\n "io"\n "io/ioutil"\n "log"\n "net"\n "net/http"\n "net/http/httputil"\n "os"\n "runtime"\n "strings"\n "time"\n)\n\nvar (\n dunno     = []byte("???")\n centerDot = []byte("\xb7")\n dot       = []byte(".")\n slash     = []byte("/")\n)\n\n// RecoveryFunc defines the function passable to CustomRecovery.\ntype RecoveryFunc func(c *Context, err interface{})\n\n// Recovery returns a middleware that recovers from any panics and writes a 500 if there was one.\nfunc Recovery() HandlerFunc {\n return RecoveryWithWriter(DefaultErrorWriter)\n}\n\n//CustomRecovery returns a middleware that recovers from any panics and calls the provided handle func to handle it.\nfunc CustomRecovery(handle RecoveryFunc) HandlerFunc {\n return RecoveryWithWriter(DefaultErrorWriter, handle)\n}\n\n// RecoveryWithWriter returns a middleware for a given writer that recovers from any panics and writes a 500 if there was one.\nfunc RecoveryWithWriter(out io.Writer, recovery ...RecoveryFunc) HandlerFunc {\n if len(recovery) > 0 {\n  return CustomRecoveryWithWriter(out, recovery[0])\n }\n return CustomRecoveryWithWriter(out, defaultHandleRecovery)\n}\n\n// CustomRecoveryWithWriter returns a middleware for a given writer that recovers from any panics and calls the provided handle func to handle it.\nfunc CustomRecoveryWithWriter(out io.Writer, handle RecoveryFunc) HandlerFunc {\n var logger *log.Logger\n if out != nil {\n  logger = log.New(out, "\\n\\n\\x1b[31m", log.LstdFlags)\n }\n return func(c *Context) {\n  defer func() {\n   if err := recover(); err != nil {\n    // Check for a broken connection, as it is not really a\n    // condition that warrants a panic stack trace.\n    var brokenPipe bool\n    if ne, ok := err.(*net.OpError); ok {\n     if se, ok := ne.Err.(*os.SyscallError); ok {\n      if strings.Contains(strings.ToLower(se.Error()), "broken pipe") || strings.Contains(strings.ToLower(se.Error()), "connection reset by peer") {\n       brokenPipe = true\n      }\n     }\n    }\n    if logger != nil {\n     stack := stack(3)\n     httpRequest, _ := httputil.DumpRequest(c.Request, false)\n     headers := strings.Split(string(httpRequest), "\\r\\n")\n     for idx, header := range headers {\n      current := strings.Split(header, ":")\n      if current[0] == "Authorization" {\n       headers[idx] = current[0] + ": *"\n      }\n     }\n     headersToStr := strings.Join(headers, "\\r\\n")\n     if brokenPipe {\n      logger.Printf("%s\\n%s%s", err, headersToStr, reset)\n     } else if IsDebugging() {\n      logger.Printf("[Recovery] %s panic recovered:\\n%s\\n%s\\n%s%s",\n       timeFormat(time.Now()), headersToStr, err, stack, reset)\n     } else {\n      logger.Printf("[Recovery] %s panic recovered:\\n%s\\n%s%s",\n       timeFormat(time.Now()), err, stack, reset)\n     }\n    }\n    if brokenPipe {\n     // If the connection is dead, we can\'t write a status to it.\n     c.Error(err.(error)) // nolint: errcheck\n     c.Abort()\n    } else {\n     handle(c, err)\n    }\n   }\n  }()\n  c.Next()\n }\n}\n\nfunc defaultHandleRecovery(c *Context, err interface{}) {\n c.AbortWithStatus(http.StatusInternalServerError)\n}\n\n// stack returns a nicely formatted stack frame, skipping skip frames.\nfunc stack(skip int) []byte {\n buf := new(bytes.Buffer) // the returned data\n // As we loop, we open files and read them. These variables record the currently\n // loaded file.\n var lines [][]byte\n var lastFile string\n for i := skip; ; i++ { // Skip the expected number of frames\n  pc, file, line, ok := runtime.Caller(i)\n  if !ok {\n   break\n  }\n  // Print this much at least.  If we can\'t find the source, it won\'t show.\n  fmt.Fprintf(buf, "%s:%d (0x%x)\\n", file, line, pc)\n  if file != lastFile {\n   data, err := ioutil.ReadFile(file)\n   if err != nil {\n    continue\n   }\n   lines = bytes.Split(data, []byte{\'\\n\'})\n   lastFile = file\n  }\n  fmt.Fprintf(buf, "\\t%s: %s\\n", function(pc), source(lines, line))\n }\n return buf.Bytes()\n}\n\n// source returns a space-trimmed slice of the n\'th line.\nfunc source(lines [][]byte, n int) []byte {\n n-- // in stack trace, lines are 1-indexed but our array is 0-indexed\n if n < 0 || n >= len(lines) {\n  return dunno\n }\n return bytes.TrimSpace(lines[n])\n}\n\n// function returns, if possible, the name of the function containing the PC.\nfunc function(pc uintptr) []byte {\n fn := runtime.FuncForPC(pc)\n if fn == nil {\n  return dunno\n }\n name := []byte(fn.Name())\n // The name includes the path name to the package, which is unnecessary\n // since the file name is already included.  Plus, it has center dots.\n // That is, we see\n // runtime/debug.*T\xb7ptrmethod\n // and want\n // *T.ptrmethod\n // Also the package path might contains dot (e.g. code.google.com/...),\n // so first eliminate the path prefix\n if lastSlash := bytes.LastIndex(name, slash); lastSlash >= 0 {\n  name = name[lastSlash+1:]\n }\n if period := bytes.Index(name, dot); period >= 0 {\n  name = name[period+1:]\n }\n name = bytes.Replace(name, centerDot, dot, -1)\n return name\n}\n\nfunc timeFormat(t time.Time) string {\n timeString := t.Format("2006/01/02 - 15:04:05")\n return timeString\n}\n\n')))}m.isMDXComponent=!0}}]);