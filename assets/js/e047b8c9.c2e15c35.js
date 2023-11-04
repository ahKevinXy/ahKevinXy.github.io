"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[74973],{33141:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>f,frontMatter:()=>u,metadata:()=>h,toc:()=>b});var t=r(85893),s=r(11151),a=r(73992),l=r(18679),o=(r(67294),r(86010));const i={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function c(e){let{children:n,minHeight:r,url:s="https://ahkevinxy.github.io/"}=e;return(0,t.jsxs)("div",{className:i.browserWindow,style:{minHeight:r},children:[(0,t.jsxs)("div",{className:i.browserWindowHeader,children:[(0,t.jsxs)("div",{className:i.buttons,children:[(0,t.jsx)("span",{className:i.dot,style:{background:"#f25f58"}}),(0,t.jsx)("span",{className:i.dot,style:{background:"#fbbe3c"}}),(0,t.jsx)("span",{className:i.dot,style:{background:"#58cb42"}})]}),(0,t.jsx)("div",{className:(0,o.Z)(i.browserWindowAddressBar,"text--truncate"),children:s}),(0,t.jsx)("div",{className:i.browserWindowMenuIcon,children:(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:i.bar}),(0,t.jsx)("span",{className:i.bar}),(0,t.jsx)("span",{className:i.bar})]})})]}),(0,t.jsx)("div",{className:i.browserWindowBody,children:n})]})}const u={},d="\u8fdb\u7a0b\u95f4\u901a\u4fe1",h={id:"cross-platform/electronjs/note/process",title:"\u8fdb\u7a0b\u95f4\u901a\u4fe1",description:"ipc \u8fdb\u7a0b\u901a\u4fe1",source:"@site/docs/cross-platform/electronjs/note/process.mdx",sourceDirName:"cross-platform/electronjs/note",slug:"/cross-platform/electronjs/note/process",permalink:"/docs/cross-platform/electronjs/note/process",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"electron \u7b14\u8bb0",permalink:"/docs/cross-platform/electronjs/note/"},next:{title:"\u5b98\u65b9\u6587\u6863",permalink:"/docs/cross-platform/electronjs/official"}},p={},b=[{value:"ipc \u8fdb\u7a0b\u901a\u4fe1",id:"ipc-\u8fdb\u7a0b\u901a\u4fe1",level:2},{value:"IPC \u901a\u9053",id:"ipc-\u901a\u9053",level:3},{value:"\u4e86\u89e3\u4e0a\u4e0b\u6587\u9694\u79bb\u8fdb\u7a0b",id:"\u4e86\u89e3\u4e0a\u4e0b\u6587\u9694\u79bb\u8fdb\u7a0b",level:3},{value:"\u5355\u5411\u901a\u4fe1",id:"\u5355\u5411\u901a\u4fe1",level:3}];function m(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u8fdb\u7a0b\u95f4\u901a\u4fe1",children:"\u8fdb\u7a0b\u95f4\u901a\u4fe1"}),"\n",(0,t.jsx)(n.h2,{id:"ipc-\u8fdb\u7a0b\u901a\u4fe1",children:"ipc \u8fdb\u7a0b\u901a\u4fe1"}),"\n",(0,t.jsx)(n.p,{children:"\u8fdb\u7a0b\u95f4\u901a\u4fe1 (IPC) \u662f\u5728 Electron \u4e2d\u6784\u5efa\u529f\u80fd\u4e30\u5bcc\u7684\u684c\u9762\u5e94\u7528\u7a0b\u5e8f\u7684\u5173\u952e\u90e8\u5206\u4e4b\u4e00\u3002 \u7531\u4e8e\u4e3b\u8fdb\u7a0b\u548c\u6e32\u67d3\u5668\u8fdb\u7a0b\u5728 Electron \u7684\u8fdb\u7a0b\u6a21\u578b\u5177\u6709\u4e0d\u540c\u7684\u804c\u8d23\uff0c\u56e0\u6b64 IPC \u662f\u6267\u884c\u8bb8\u591a\u5e38\u89c1\u4efb\u52a1\u7684\u552f\u4e00\u65b9\u6cd5\uff0c\u4f8b\u5982\u4ece UI \u8c03\u7528\u539f\u751f API \u6216\u4ece\u539f\u751f\u83dc\u5355\u89e6\u53d1 Web \u5185\u5bb9\u7684\u66f4\u6539\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"ipc-\u901a\u9053",children:"IPC \u901a\u9053"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728 Electron \u4e2d\uff0c\u8fdb\u7a0b\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"ipcMain"})," \u548c ",(0,t.jsx)(n.code,{children:"ipcRenderer"})," \u6a21\u5757\uff0c\u901a\u8fc7\u5f00\u53d1\u4eba\u5458\u5b9a\u4e49\u7684\u201c\u901a\u9053\u201d\u4f20\u9012\u6d88\u606f\u6765\u8fdb\u884c\u901a\u4fe1\u3002 \u8fd9\u4e9b\u901a\u9053\u662f \u4efb\u610f \uff08\u60a8\u53ef\u4ee5\u968f\u610f\u547d\u540d\u5b83\u4eec\uff09\u548c \u53cc\u5411 \uff08\u60a8\u53ef\u4ee5\u5728\u4e24\u4e2a\u6a21\u5757\u4e2d\u4f7f\u7528\u76f8\u540c\u7684\u901a\u9053\u540d\u79f0\uff09\u7684\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u4e86\u89e3\u4e0a\u4e0b\u6587\u9694\u79bb\u8fdb\u7a0b",children:"\u4e86\u89e3\u4e0a\u4e0b\u6587\u9694\u79bb\u8fdb\u7a0b"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u5f00\u59cb\u5b9e\u73b0\u7ec6\u8282\u4e4b\u524d ,\u9700\u8981\u4e86\u89e3 ",(0,t.jsx)(n.a,{href:"/",children:"\u9884\u52a0\u8f7d\u811a\u672c"})," \u5728\u4e0a\u4e0b\u6587\u9694\u79bb\u6e32\u67d3\u5668\u8fdb\u7a0b\u4e2d\u5bfc\u5165 Node.js \u548c Electron \u6a21\u5757\u7684\u6982\u5ff5"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Electron \u8fdb\u7a0b\u6a21\u578b"}),"\n",(0,t.jsx)(n.li,{children:"contextBridge \u6a21\u5757\u4ece\u9884\u52a0\u8f7d\u811a\u672c\u66b4\u9732"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u5355\u5411\u901a\u4fe1",children:"\u5355\u5411\u901a\u4fe1"}),"\n",(0,t.jsx)(n.p,{children:"\u8981\u5c06\u5355\u5411ipc \u6d88\u606f\u4ece\u6e32\u67d3\u5668\u8fdb\u7a0b\u53d1\u9001\u5230\u4e3b\u8fdb\u7a0b,\u53ef\u4ee5\u4f7f\u7528 ipcMain.send api \u53d1\u9001\u6d88\u606f,\u7136\u540e\u4f7f\u7528 ipcMain.on api \u63a5\u6536"}),"\n",(0,t.jsx)(c,{children:(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(l.Z,{value:"docusaurus.config.js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  themeConfig: {\n    prism: {\n      magicComments: [\n        // Remember to extend the default highlight class name as well!\n        {\n          className: 'theme-code-block-highlighted-line',\n          line: 'highlight-next-line',\n          block: {start: 'highlight-start', end: 'highlight-end'},\n        },\n        // highlight-start\n        {\n          className: 'code-block-error-line',\n          line: 'This will error',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n"})})}),(0,t.jsx)(l.Z,{value:"src/css/custom.css",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",children:".code-block-error-line {\n  background-color: #ff000020;\n  display: block;\n  margin: 0 calc(-1 * var(--ifm-pre-padding));\n  padding: 0 var(--ifm-pre-padding);\n  border-left: 3px solid #ff000080;\n}\n"})})})]})})]})}function f(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},18679:(e,n,r)=>{r.d(n,{Z:()=>l});r(67294);var t=r(86010);const s={tabItem:"tabItem_Ymn6"};var a=r(85893);function l(e){let{children:n,hidden:r,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.Z)(s.tabItem,l),hidden:r,children:n})}},73992:(e,n,r)=>{r.d(n,{Z:()=>y});var t=r(67294),s=r(86010),a=r(72957),l=r(16550),o=r(81270),i=r(75238),c=r(33609),u=r(92560);function d(e){var n,r;return null!=(n=null==(r=t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=null!=n?n:function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:r}=e;const s=(0,l.k6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,i._X)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,a=h(e),[l,i]=(0,t.useState)((()=>function(e){var n;let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}const s=null!=(n=t.find((e=>e.default)))?n:t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[c,d]=b({queryString:r,groupId:s}),[m,f]=function(e){let{groupId:n}=e;const r=function(e){return e?"docusaurus.tab."+e:null}(n),[s,a]=(0,u.Nk)(r);return[s,(0,t.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),v=(()=>{const e=null!=c?c:m;return p({value:e,tabValues:a})?e:null})();(0,o.Z)((()=>{v&&i(v)}),[v]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error("Can't select invalid tab value="+e);i(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=r(51048);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(85893);function x(e){let{className:n,block:r,selectedValue:t,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),u=e=>{const n=e.currentTarget,r=i.indexOf(n),s=o[r].value;s!==t&&(c(n),l(s))},d=e=>{var n;let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var t;const n=i.indexOf(e.currentTarget)+1;r=null!=(t=i[n])?t:i[0];break}case"ArrowLeft":{var s;const n=i.indexOf(e.currentTarget)-1;r=null!=(s=i[n])?s:i[i.length-1];break}}null==(n=r)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.Z)("tabs__item",v.tabItem,null==a?void 0:a.className,{"tabs__item--active":t===n}),children:null!=r?r:n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:s}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,s.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...e,...n}),(0,g.jsx)(j,{...e,...n})]})}function y(e){const n=(0,f.Z)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>l});var t=r(67294);const s={},a=t.createContext(s);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);