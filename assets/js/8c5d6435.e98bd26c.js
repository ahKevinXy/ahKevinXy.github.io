"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[73080],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(r),b=a,f=d["".concat(l,".").concat(b)]||d[b]||u[b]||o;return r?n.createElement(f,c(c({ref:t},s),{},{components:r})):n.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},35409:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={},c="\u57fa\u7840",i={unversionedId:"backend/database/etcd/base/index",id:"backend/database/etcd/base/index",title:"\u57fa\u7840",description:"\u5206\u5e03\u5f0f\u7cfb\u7edf \u4e0e\u4e00\u81f4\u6027\u534f\u8bae",source:"@site/docs/backend/database/etcd/base/index.md",sourceDirName:"backend/database/etcd/base",slug:"/backend/database/etcd/base/",permalink:"/docs/backend/database/etcd/base/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"etcd",permalink:"/docs/backend/database/etcd/"},next:{title:"etcd \u5b89\u88c5",permalink:"/docs/backend/database/etcd/base/install"}},l={},p=[{value:"\u5206\u5e03\u5f0f\u7cfb\u7edf \u4e0e\u4e00\u81f4\u6027\u534f\u8bae",id:"\u5206\u5e03\u5f0f\u7cfb\u7edf-\u4e0e\u4e00\u81f4\u6027\u534f\u8bae",level:2},{value:"CAP \u539f\u7406",id:"cap-\u539f\u7406",level:2}],s={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u57fa\u7840"},"\u57fa\u7840"),(0,a.kt)("h2",{id:"\u5206\u5e03\u5f0f\u7cfb\u7edf-\u4e0e\u4e00\u81f4\u6027\u534f\u8bae"},"\u5206\u5e03\u5f0f\u7cfb\u7edf \u4e0e\u4e00\u81f4\u6027\u534f\u8bae"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u53ef\u7528\u6027: \u53ef\u7528\u6027\u662f\u5206\u5e03\u5f0f\u7cfb\u7edf\u7684\u6838\u5fc3\u9700\u6c42,\u5176\u7528\u4e8e\u8861\u91cf\u4e00\u4e2a\u5206\u5e03\u5f0f\u7cfb\u7edf\u6301\u7eed\u5bf9\u5916\u63d0\u4f9b\u670d\u52a1\u7684\u80fd\u529b"),(0,a.kt)("li",{parentName:"ol"},"\u53ef\u6269\u5c55\u6027: \u589e\u52a0\u673a\u5668\u540e \u4e0d\u4f1a\u6539\u53d8\u6216\u6781\u5c11\u6539\u53d8\u7cfb\u7edf\u7684\u884c\u4e3a,\u5e76\u4e14\u80fd\u83b7\u5f97\u8fd1\u4f3c\u7ebf\u6027\u7684\u6027\u80fd\u63d0\u5347"),(0,a.kt)("li",{parentName:"ol"},"\u5bb9\u9519\u6027: \u7cfb\u7edf\u53d1\u751f\u9519\u8bef\u65f6,\u5177\u6709\u5bf9\u9519\u8bef\u8fdb\u884c \u89c4\u907f\u4ee5\u53ca\u4ece\u9519\u8bef\u4e2d\u6062\u590d\u7684\u80fd\u529b"),(0,a.kt)("li",{parentName:"ol"},"\u6027\u80fd: \u5bf9\u5916\u670d\u52a1\u7684\u54cd\u5e94\u5ef6\u65f6\u548c\u541e\u5410\u7387\u80fd\u6ee1\u8db3\u7528\u6237\u7684\u9700\u6c42")),(0,a.kt)("h2",{id:"cap-\u539f\u7406"},"CAP \u539f\u7406"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C: Consistency(\u4e00\u81f4\u6027)"),(0,a.kt)("li",{parentName:"ul"},"A:  Availability(\u53ef\u7528\u6027)"),(0,a.kt)("li",{parentName:"ul"},"P: Tolerance to the partition of network (\u5206\u533a\u5bb9\u5fcd\u6027)")))}u.isMDXComponent=!0}}]);