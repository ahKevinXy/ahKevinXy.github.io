"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[61470],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function m(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),s=l(t),d=o,f=s["".concat(p,".").concat(d)]||s[d]||u[d]||a;return t?n.createElement(f,i(i({ref:r},c),{},{components:t})):n.createElement(f,i({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var m={};for(var p in r)hasOwnProperty.call(r,p)&&(m[p]=r[p]);m.originalType=e,m[s]="string"==typeof e?e:o,i[1]=m;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},18578:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return m},metadata:function(){return l},toc:function(){return s}});var n=t(83117),o=t(80102),a=(t(67294),t(3905)),i=["components"],m={},p="Node \u57fa\u7840",l={unversionedId:"front/node/base",id:"front/node/base",title:"Node \u57fa\u7840",description:"Node \u5b89\u88c5",source:"@site/docs/front/node/base.md",sourceDirName:"front/node",slug:"/front/node/base",permalink:"/docs/front/node/base",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Node",permalink:"/docs/front/node/"},next:{title:"\u5b98\u65b9\u6587\u6863",permalink:"/docs/front/node/official"}},c={},s=[{value:"Node \u5b89\u88c5",id:"node-\u5b89\u88c5",level:2},{value:"\u955c\u50cf\u914d\u7f6e",id:"\u955c\u50cf\u914d\u7f6e",level:2},{value:"yarn \u5b89\u88c5",id:"yarn-\u5b89\u88c5",level:2}],u={toc:s},d="wrapper";function f(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)(d,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"node-\u57fa\u7840"},"Node \u57fa\u7840"),(0,a.kt)("h2",{id:"node-\u5b89\u88c5"},"Node \u5b89\u88c5"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"node ubuntu \u5b89\u88c5"))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"windows \u5b89\u88c5"))),(0,a.kt)("h2",{id:"\u955c\u50cf\u914d\u7f6e"},"\u955c\u50cf\u914d\u7f6e"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5355\u6b21\u8bbe\u7f6e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install [name] --registry=https://registry.npmmirror.com\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5168\u5c40\u8bbe\u7f6e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm config set registry https://registry.npmmirror.com\n")),(0,a.kt)("h2",{id:"yarn-\u5b89\u88c5"},"yarn \u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," npm install -g yarn\n\n # \u8bbe\u7f6e\u955c\u50cf \n\n yarn config set registry https://registry.npmmirror.com/\n\n")),(0,a.kt)("p",null,"\u672c\u7cfb\u7edf\u8fd0\u884c\u5728 ",(0,a.kt)("a",{parentName:"p",href:"mailto:Node.js@v16.17.1"},"Node.js@v16.17.1")," \u4e0a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f00\u6e90\u955c\u50cf: ",(0,a.kt)("a",{parentName:"li",href:"https://npmmirror.com/mirrors/"},"https://npmmirror.com/mirrors/")),(0,a.kt)("li",{parentName:"ul"},"Node.js \u955c\u50cf: ",(0,a.kt)("a",{parentName:"li",href:"https://npmmirror.com/mirrors/node/"},"https://npmmirror.com/mirrors/node/")),(0,a.kt)("li",{parentName:"ul"},"alinode \u955c\u50cf: ",(0,a.kt)("a",{parentName:"li",href:"https://npmmirror.com/mirrors/alinode/"},"https://npmmirror.com/mirrors/alinode/")),(0,a.kt)("li",{parentName:"ul"},"ChromeDriver \u955c\u50cf: ",(0,a.kt)("a",{parentName:"li",href:"https://npmmirror.com/mirrors/chromedriver/"},"https://npmmirror.com/mirrors/chromedriver/")),(0,a.kt)("li",{parentName:"ul"},"OperaDriver \u955c\u50cf: ",(0,a.kt)("a",{parentName:"li",href:"https://npmmirror.com/mirrors/operadriver/"},"https://npmmirror.com/mirrors/operadriver/")),(0,a.kt)("li",{parentName:"ul"},"Selenium \u955c\u50cf: ",(0,a.kt)("a",{parentName:"li",href:"https://npmmirror.com/mirrors/selenium/"},"https://npmmirror.com/mirrors/selenium/")),(0,a.kt)("li",{parentName:"ul"},"electron \u955c\u50cf: ",(0,a.kt)("a",{parentName:"li",href:"https://npmmirror.com/mirrors/electron/"},"https://npmmirror.com/mirrors/electron/"))))}f.isMDXComponent=!0}}]);