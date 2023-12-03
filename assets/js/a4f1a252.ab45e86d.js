"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[85739],{29059:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var l=r(85893),t=r(11151),a=r(73992),i=r(18679);const s={title:"Electron \u5165\u95e8",tags:["Go"],authors:"ahKevinXy",description:"\u5982\u4f55\u4f7f\u7528 electron \u6784\u5efa\u5c5e\u4e8e\u81ea\u5df1\u7684 \u684c\u9762\u5e94\u7528",image:"https://source.unsplash.com/random?nature&23"},o="\u5982\u4f55\u4f7f\u7528 electron \u642d\u5efa\u5c5e\u4e8e\u81ea\u5df1\u7684 \u684c\u9762\u5e94\u7528",c={permalink:"/blog/2023/08/12/electron",source:"@site/blog/2023/08/12/electron.md",title:"Electron \u5165\u95e8",description:"\u5982\u4f55\u4f7f\u7528 electron \u6784\u5efa\u5c5e\u4e8e\u81ea\u5df1\u7684 \u684c\u9762\u5e94\u7528",date:"2023-08-12T00:00:00.000Z",formattedDate:"2023\u5e748\u670812\u65e5",tags:[{label:"Go",permalink:"/blog/tags/go"}],readingTime:3.3,hasTruncateMarker:!0,authors:[{name:"ahKevinXy",title:"\u4f5c\u8005",url:"https://github.com/ahKevinXy",email:"ahkevinxy@gmail.com",imageURL:"/img/headers.png",key:"ahKevinXy"}],frontMatter:{title:"Electron \u5165\u95e8",tags:["Go"],authors:"ahKevinXy",description:"\u5982\u4f55\u4f7f\u7528 electron \u6784\u5efa\u5c5e\u4e8e\u81ea\u5df1\u7684 \u684c\u9762\u5e94\u7528",image:"https://source.unsplash.com/random?nature&23"},unlisted:!1,prevItem:{title:"google  \u6d4f\u89c8\u5668\u5feb\u6377\u952e",permalink:"/blog/2023/08/12/chrome"},nextItem:{title:"Go  File \u5904\u7406",permalink:"/blog/2023/08/08/go-file"}},u={authorsImageUrls:[void 0]},d=[{value:"electron \u5de5\u4f5c\u6d41",id:"electron-\u5de5\u4f5c\u6d41",level:2},{value:"\u542f\u52a8\u6d41\u7a0b",id:"\u542f\u52a8\u6d41\u7a0b",level:2},{value:"\u76f8\u5173\u5c5e\u4e8e\u8bf4\u660e",id:"\u76f8\u5173\u5c5e\u4e8e\u8bf4\u660e",level:2},{value:"\u73af\u5883\u642d\u5efa",id:"\u73af\u5883\u642d\u5efa",level:2},{value:"Electron \u751f\u547d\u5468\u671f",id:"electron-\u751f\u547d\u5468\u671f",level:2},{value:"\u521b\u5efa\u9879\u76ee",id:"\u521b\u5efa\u9879\u76ee",level:2},{value:"\u521d\u59cb\u5316\u5e94\u7528",id:"\u521d\u59cb\u5316\u5e94\u7528",level:3},{value:"\u5bfc\u5165\u6a21\u5757",id:"\u5bfc\u5165\u6a21\u5757",level:3},{value:"\u4f7f\u7528\u9884\u52a0\u8f7d\u811a\u672c",id:"\u4f7f\u7528\u9884\u52a0\u8f7d\u811a\u672c",level:2},{value:"\u4ec0\u4e48\u662f\u9884\u52a0\u8f7d\u811a\u672c",id:"\u4ec0\u4e48\u662f\u9884\u52a0\u8f7d\u811a\u672c",level:3},{value:"\u5728\u8fdb\u7a0b\u4e4b\u95f4\u901a\u4fe1",id:"\u5728\u8fdb\u7a0b\u4e4b\u95f4\u901a\u4fe1",level:3}];function h(e){const n={admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Electron\u662f\u7531Github\u5f00\u53d1\u7684\u5f00\u6e90\u6846\u67b6\uff0c\u5b83\u5141\u8bb8\u5f00\u53d1\u8005\u4f7f\u7528Web\u6280\u672f\u6784\u5efa\u8de8\u5e73\u53f0\u7684\u684c\u9762\u5e94\u7528\u3002Electron=Chromium+Node.js+Native API\uff0c\u5176\u4e2dChromium\u4e3aElectron\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684UI\u80fd\u529b\uff0c\u53ef\u4ee5\u4e0d\u8003\u8651\u517c\u5bb9\u6027\u7684\u60c5\u51b5\u4e0b\uff0c\u5229\u7528\u5f3a\u5927\u7684Web\u751f\u6001\u6765\u5f00\u53d1\u754c\u9762\uff1bNative API\u8ba9Electron\u6709\u4e86\u8de8\u5e73\u53f0\u548c\u684c\u9762\u7aef\u7684\u539f\u751f\u80fd\u529b\uff0c\u6bd4\u5982\u8bf4\u5b83\u6709\u7edf\u4e00\u7684\u539f\u751f\u754c\u9762\uff0c\u7a97\u53e3\u3001\u6258\u76d8\u8fd9\u4e9b"}),"\n",(0,l.jsx)(n.h2,{id:"electron-\u5de5\u4f5c\u6d41",children:"electron \u5de5\u4f5c\u6d41"}),"\n",(0,l.jsx)(n.mermaid,{value:"\nstateDiagram-v2\n    Electron\n    state Electron {\n       \n       \n        RenderProcess --\x3e MainProcess:ipc\n        MainProcess --\x3e RenderProcess:ipc\n     \n     \n       \n        state MainProcess{\n            NativeApi\n            state NativeApi{\n            Linux MacOS Windows\n            }  \n        }\n    }\n    \n    \n"}),"\n",(0,l.jsx)(n.h2,{id:"\u542f\u52a8\u6d41\u7a0b",children:"\u542f\u52a8\u6d41\u7a0b"}),"\n",(0,l.jsx)(n.mermaid,{value:"flowchart LR\n\n\u542f\u52a8APP --\x3e\n\n\u4e3b\u8fdb\u7a0b\u521b\u5efawindow --\x3e\n\nwind\u52a0\u8f7d\u754c\u9762 --\x3e\n\n\u751f\u6210\u5e94\u7528\u7a97\u53e3\n\n\n"}),"\n",(0,l.jsx)(n.h2,{id:"\u76f8\u5173\u5c5e\u4e8e\u8bf4\u660e",children:"\u76f8\u5173\u5c5e\u4e8e\u8bf4\u660e"}),"\n",(0,l.jsx)(n.p,{children:"\u4e3b\u8fdb\u7a0b"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"package.json"})," \u4e2d main \u5c5e\u6027\u5bf9\u5e94\u7684\u6587\u4ef6"]}),"\n",(0,l.jsx)(n.li,{children:"\u4e00\u4e2a\u5e94\u7528\u53ea\u4f1a\u6709\u4e00\u4e2a\u4e3b\u8fdb\u7a0b"}),"\n",(0,l.jsx)(n.li,{children:"\u53ea\u6709\u4e3b\u8fdb\u7a0b\u53ef\u4ee5\u8fdb\u884c gui\u7684api \u64cd\u4f5c"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u6e32\u67d3\u8fdb\u7a0b"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"windows \u4e2d\u5c55\u793a\u7684\u754c\u9762\u63d0\u4f9b\u6e32\u67d3\u8fdb\u7a0b\u8868\u73b0"}),"\n",(0,l.jsx)(n.li,{children:"\u4e00\u4e2a\u5e94\u7528\u53ef\u4ee5\u6709\u591a\u4e2a\u6e32\u67d3\u8fdb\u7a0b"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u73af\u5883\u642d\u5efa",children:"\u73af\u5883\u642d\u5efa"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u5de5\u5177"}),"\n"]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"vscode"}),"\n",(0,l.jsx)(n.li,{children:"\u547d\u4ee4\u884c\u5de5\u5177"}),"\n",(0,l.jsx)(n.li,{children:"git"}),"\n",(0,l.jsx)(n.li,{children:"node"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"\n#\u5728x64\u673a\u5668\u4e0a\u5b89\u88c5ia32\u4f4d\u7248\u672c\nnpm install --arch=ia32 electron\n\n# \u4f7f\u7528 --platform \u6765\u6307\u5b9a\u5f00\u53d1\u5e73\u53f0 (\u4f8b\u5982, win32\u3001linux \u7b49):\n\nnpm install --platform=win32 electron\n\n\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8bbe\u7f6e \u4e2d\u56fd\u4ee3\u7406"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'ELECTRON_MIRROR="https://npmmirror.com/mirrors/electron/"\n\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u8df3\u8fc7 \u4e8c\u8fdb\u5236\u4e0b\u8f7d"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"ELECTRON_SKIP_BINARY_DOWNLOAD=1 yarn install\n\n\n"})}),"\n",(0,l.jsx)(n.h2,{id:"electron-\u751f\u547d\u5468\u671f",children:"Electron \u751f\u547d\u5468\u671f"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["ready",":app"," \u521d\u59cb\u5316\u5b8c\u6210"]}),"\n",(0,l.jsx)(n.li,{children:"dom-ready \u4e00\u4e2a\u7a97\u53e3\u4e2d\u7684\u6587\u672c\u52a0\u8f7d\u5b8c\u6210"}),"\n",(0,l.jsx)(n.li,{children:"did-finish-load \u5bfc\u822a\u5b8c\u6210\u65f6\u89e6\u53d1"}),"\n",(0,l.jsx)(n.li,{children:"window-all-closed \u6240\u6709\u7a97\u53e3\u90fd\u88ab\u5173\u95ed\u65f6\u89e6\u53d1"}),"\n",(0,l.jsx)(n.li,{children:"before-quit \u5728\u5173\u95ed\u7a97\u53e3\u4e4b\u524d\u89e6\u53d1"}),"\n",(0,l.jsx)(n.li,{children:"will-quit \u5728\u7a97\u53e3\u5173\u95ed\u5e76\u4e14\u5e94\u7528\u9000\u51fa\u65f6\u89e6\u53d1"}),"\n",(0,l.jsx)(n.li,{children:"quit \u5f53\u7a97\u53e3\u5173\u95ed\u65f6\u89e6\u53d1 \u6b64\u65f6\u5220\u9664\u7a97\u53e3\u5f15\u7528"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u521b\u5efa\u9879\u76ee",children:"\u521b\u5efa\u9879\u76ee"}),"\n",(0,l.jsx)(n.h3,{id:"\u521d\u59cb\u5316\u5e94\u7528",children:"\u521d\u59cb\u5316\u5e94\u7528"}),"\n",(0,l.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,l.jsx)(i.Z,{value:"npm",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"\n# npm \nnpm init\n\n# yarn\nyarn init\n\n\n"})})}),(0,l.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"\n# npm \n# couldn't auto-convert command\nyarn init\n\n# yarn\nyarn init\n\n\n"})})})]}),"\n",(0,l.jsx)(n.p,{children:"\u6dfb\u52a0 electron DEVDEPENDENCY"}),"\n",(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsx)(n.p,{children:"\u5e94\u7528\u9700\u8981\u8fd0\u884c Electron API\uff0c\u56e0\u6b64\u8fd9\u542c\u4e0a\u53bb\u53ef\u80fd\u6709\u70b9\u53cd\u76f4\u89c9\u3002 \u5b9e\u9645\u4e0a\uff0c\u6253\u5305\u540e\u7684\u5e94\u7528\u672c\u8eab\u4f1a\u5305\u542b Electron \u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u56e0\u6b64\u4e0d\u9700\u8981\u5c06 Electron \u4f5c\u4e3a\u751f\u4ea7\u73af\u5883\u4f9d\u8d56\u3002"})}),"\n",(0,l.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,l.jsx)(i.Z,{value:"npm",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"\n# npm \nnpm install electron --save-dev\n\n# yarn \n\nyarn add electron --dev\n\n\n"})})}),(0,l.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"\n# npm \n# couldn't auto-convert command\nyarn add electron --dev\n\n# yarn \n\nyarn add electron --dev\n\n\n"})})})]}),"\n",(0,l.jsx)(n.h3,{id:"\u5bfc\u5165\u6a21\u5757",children:"\u5bfc\u5165\u6a21\u5757"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"app \u5e94\u7528\u7a0b\u5e8f\u7684\u4e8b\u4ef6\u751f\u547d\u5468\u671f"}),"\n",(0,l.jsx)(n.li,{children:"BrowerWindow \u8d1f\u8d23\u521b\u5efa\u548c\u7ba1\u7406\u5e94\u7528\u7a97\u53e3"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u4f7f\u7528\u9884\u52a0\u8f7d\u811a\u672c",children:"\u4f7f\u7528\u9884\u52a0\u8f7d\u811a\u672c"}),"\n",(0,l.jsx)(n.h3,{id:"\u4ec0\u4e48\u662f\u9884\u52a0\u8f7d\u811a\u672c",children:"\u4ec0\u4e48\u662f\u9884\u52a0\u8f7d\u811a\u672c"}),"\n",(0,l.jsx)(n.p,{children:"Electron \u7684\u4e3b\u8fdb\u7a0b\u662f \u4e00\u4e2a\u62e5\u6709\u7740\u5b8c\u5168\u64cd\u4f5c\u7cfb\u7edf\u8bbf\u95ee\u6743\u9650\u7684 Node.js \u73af\u5883\u3002 \u9664\u4e86 Electron \u6a21\u7ec4 \u4e4b\u5916\uff0c\u60a8\u4e5f\u53ef\u4ee5\u8bbf\u95ee Node.js \u5185\u7f6e\u6a21\u5757 \u548c\u6240\u6709\u901a\u8fc7 npm \u5b89\u88c5\u7684\u5305\u3002 \u53e6\u4e00\u65b9\u9762\uff0c\u51fa\u4e8e\u5b89\u5168\u539f\u56e0\uff0c\u6e32\u67d3\u8fdb\u7a0b\u9ed8\u8ba4\u8dd1\u5728\u7f51\u9875\u9875\u9762\u4e0a\uff0c\u800c\u5e76\u975e Node.js\u91cc\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"\u5728\u8fdb\u7a0b\u4e4b\u95f4\u901a\u4fe1",children:"\u5728\u8fdb\u7a0b\u4e4b\u95f4\u901a\u4fe1"}),"\n",(0,l.jsx)(n.p,{children:"\u53ef\u4ee5\u4f7f\u7528 Electron \u7684 ipcMain \u6a21\u5757\u548c ipcRenderer \u6a21\u5757\u6765\u8fdb\u884c\u8fdb\u7a0b\u95f4\u901a\u4fe1"})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},18679:(e,n,r)=>{r.d(n,{Z:()=>i});r(67294);var l=r(36905);const t={tabItem:"tabItem_Ymn6"};var a=r(85893);function i(e){let{children:n,hidden:r,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,l.Z)(t.tabItem,i),hidden:r,children:n})}},73992:(e,n,r)=>{r.d(n,{Z:()=>E});var l=r(67294),t=r(36905),a=r(72957),i=r(16550),s=r(81270),o=r(75238),c=r(33609),u=r(92560);function d(e){var n,r;return null!=(n=null==(r=l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function h(e){const{values:n,children:r}=e;return(0,l.useMemo)((()=>{const e=null!=n?n:function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:l,default:t}}=e;return{value:n,label:r,attributes:l,default:t}}))}(r);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function m(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:r}=e;const t=(0,i.k6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,o._X)(a),(0,l.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(t.location.search);n.set(a,e),t.replace({...t.location,search:n.toString()})}),[a,t])]}function v(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,a=h(e),[i,o]=(0,l.useState)((()=>function(e){var n;let{defaultValue:r,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:l}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+l.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}const t=null!=(n=l.find((e=>e.default)))?n:l[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[c,d]=p({queryString:r,groupId:t}),[v,x]=function(e){let{groupId:n}=e;const r=function(e){return e?"docusaurus.tab."+e:null}(n),[t,a]=(0,u.Nk)(r);return[t,(0,l.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:t}),j=(()=>{const e=null!=c?c:v;return m({value:e,tabValues:a})?e:null})();(0,s.Z)((()=>{j&&o(j)}),[j]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error("Can't select invalid tab value="+e);o(e),d(e),x(e)}),[d,x,a]),tabValues:a}}var x=r(51048);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(85893);function f(e){let{className:n,block:r,selectedValue:l,selectValue:i,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),u=e=>{const n=e.currentTarget,r=o.indexOf(n),t=s[r].value;t!==l&&(c(n),i(t))},d=e=>{var n;let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var l;const n=o.indexOf(e.currentTarget)+1;r=null!=(l=o[n])?l:o[0];break}case"ArrowLeft":{var t;const n=o.indexOf(e.currentTarget)-1;r=null!=(t=o[n])?t:o[o.length-1];break}}null==(n=r)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":r},n),children:s.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...a,className:(0,t.Z)("tabs__item",j.tabItem,null==a?void 0:a.className,{"tabs__item--active":l===n}),children:null!=r?r:n},n)}))})}function g(e){let{lazy:n,children:r,selectedValue:t}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===t));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=v(e);return(0,b.jsxs)("div",{className:(0,t.Z)("tabs-container",j.tabList),children:[(0,b.jsx)(f,{...e,...n}),(0,b.jsx)(g,{...e,...n})]})}function E(e){const n=(0,x.Z)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>i});var l=r(67294);const t={},a=l.createContext(t);function i(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);