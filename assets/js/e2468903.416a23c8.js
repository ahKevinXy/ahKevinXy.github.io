"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[22715],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),f=o,y=s["".concat(c,".").concat(f)]||s[f]||m[f]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},57185:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"Electron \u5165\u95e8",tags:["Go"],authors:"ahKevinXy",description:"\u5982\u4f55\u4f7f\u7528 electron \u6784\u5efa\u5c5e\u4e8e\u81ea\u5df1\u7684 \u684c\u9762\u5e94\u7528",image:"https://source.unsplash.com/random?nature&23"},i="\u5982\u4f55\u4f7f\u7528 electron \u642d\u5efa\u5c5e\u4e8e\u81ea\u5df1\u7684 \u684c\u9762\u5e94\u7528",l={permalink:"/blog/2023/08/12/electron",source:"@site/blog/2023/08/12/electron.md",title:"Electron \u5165\u95e8",description:"\u5982\u4f55\u4f7f\u7528 electron \u6784\u5efa\u5c5e\u4e8e\u81ea\u5df1\u7684 \u684c\u9762\u5e94\u7528",date:"2023-08-12T00:00:00.000Z",formattedDate:"August 12, 2023",tags:[{label:"Go",permalink:"/blog/tags/go"}],readingTime:3.3,hasTruncateMarker:!0,authors:[{name:"ahKevinXy",title:"\u4f5c\u8005",url:"https://github.com/ahKevinXy",email:"ahkevinxy@gmail.com",imageURL:"/img/headers.png",key:"ahKevinXy"}],frontMatter:{title:"Electron \u5165\u95e8",tags:["Go"],authors:"ahKevinXy",description:"\u5982\u4f55\u4f7f\u7528 electron \u6784\u5efa\u5c5e\u4e8e\u81ea\u5df1\u7684 \u684c\u9762\u5e94\u7528",image:"https://source.unsplash.com/random?nature&23"},prevItem:{title:"google  \u6d4f\u89c8\u5668\u5feb\u6377\u952e",permalink:"/blog/2023/08/12/chrome"},nextItem:{title:"Go  File \u5904\u7406",permalink:"/blog/2023/08/08/go-file"}},c={authorsImageUrls:[void 0]},p=[],u={toc:p},s="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Electron\u662f\u7531Github\u5f00\u53d1\u7684\u5f00\u6e90\u6846\u67b6\uff0c\u5b83\u5141\u8bb8\u5f00\u53d1\u8005\u4f7f\u7528Web\u6280\u672f\u6784\u5efa\u8de8\u5e73\u53f0\u7684\u684c\u9762\u5e94\u7528\u3002Electron=Chromium+Node.js+Native API\uff0c\u5176\u4e2dChromium\u4e3aElectron\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684UI\u80fd\u529b\uff0c\u53ef\u4ee5\u4e0d\u8003\u8651\u517c\u5bb9\u6027\u7684\u60c5\u51b5\u4e0b\uff0c\u5229\u7528\u5f3a\u5927\u7684Web\u751f\u6001\u6765\u5f00\u53d1\u754c\u9762\uff1bNative API\u8ba9Electron\u6709\u4e86\u8de8\u5e73\u53f0\u548c\u684c\u9762\u7aef\u7684\u539f\u751f\u80fd\u529b\uff0c\u6bd4\u5982\u8bf4\u5b83\u6709\u7edf\u4e00\u7684\u539f\u751f\u754c\u9762\uff0c\u7a97\u53e3\u3001\u6258\u76d8\u8fd9\u4e9b"))}m.isMDXComponent=!0}}]);