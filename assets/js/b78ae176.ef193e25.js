"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[3328],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return b}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),f=o,b=s["".concat(c,".").concat(f)]||s[f]||m[f]||a;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7491:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],l={title:"Websocket\u4f7f\u7528",tags:["ws"],authors:"Flankx",description:"\u5982\u4f55\u4f7f\u7528 java Websocket \u4f7f\u7528\u65b9\u5f0f",image:"https://source.unsplash.com/random?people&19"},c="Websocket\u4f7f\u7528",u={permalink:"/blog/2023/07/13/websocket-1",source:"@site/blog/2023/07/13/websocket-1.md",title:"Websocket\u4f7f\u7528",description:"\u5982\u4f55\u4f7f\u7528 java Websocket \u4f7f\u7528\u65b9\u5f0f",date:"2023-07-13T00:00:00.000Z",formattedDate:"2023\u5e747\u670813\u65e5",tags:[{label:"ws",permalink:"/blog/tags/ws"}],readingTime:1.86,hasTruncateMarker:!0,authors:[{name:"flankx",title:"\u4f5c\u8005",url:"https://github.com/flankx",email:"137472591@qq.com",imageURL:"https://avatars.githubusercontent.com/u/30172229",key:"Flankx"}],frontMatter:{title:"Websocket\u4f7f\u7528",tags:["ws"],authors:"Flankx",description:"\u5982\u4f55\u4f7f\u7528 java Websocket \u4f7f\u7528\u65b9\u5f0f",image:"https://source.unsplash.com/random?people&19"},prevItem:{title:"\u7ebf\u7a0b\u6c60\u7684\u4f7f\u7528",permalink:"/blog/2023/07/13/thread"},nextItem:{title:"\u5f00\u6e90\u7f51\u7edc\u8d27\u8fd0\u5e73\u53f0",permalink:"/blog/2023/07/11/opensource_network_freight"}},p={authorsImageUrls:[void 0]},s=[{value:"\u65b9\u5f0f1\uff1a\u539f\u751f\u6ce8\u89e3",id:"\u65b9\u5f0f1\u539f\u751f\u6ce8\u89e3",level:2}],m={toc:s},f="wrapper";function b(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(f,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u65b9\u5f0f1\u539f\u751f\u6ce8\u89e3"},"\u65b9\u5f0f1\uff1a\u539f\u751f\u6ce8\u89e3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u76d1\u542c\u8def\u5f84\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"@ServerEndpoint")),(0,a.kt)("li",{parentName:"ul"},"\u5efa\u7acb\u8fde\u63a5\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"@OnOpen")),(0,a.kt)("li",{parentName:"ul"},"\u63a5\u6536\u6d88\u606f\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"@OnMessage")),(0,a.kt)("li",{parentName:"ul"},"\u5173\u95ed\u8fde\u63a5\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"@OnClose")),(0,a.kt)("li",{parentName:"ul"},"\u8fde\u63a5\u9519\u8bef\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"@OnError"))))}b.isMDXComponent=!0}}]);