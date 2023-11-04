"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[96714],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6291:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={title:"Redis\u6570\u636e\u7ed3\u6784",tags:["Redis"],authors:"Flankx",description:"Redis\u6570\u636e\u7ed3\u6784 redis \u5e38\u7528\u6570\u636e\u5e93\u7ed3\u6784\u4e0e\u4f7f\u7528",image:"https://source.unsplash.com/random?people&29"},o="Redis\u6570\u636e\u7ed3\u6784",l={permalink:"/blog/2023/07/23/redis-3",source:"@site/blog/2023/07/23/redis-3.md",title:"Redis\u6570\u636e\u7ed3\u6784",description:"Redis\u6570\u636e\u7ed3\u6784 redis \u5e38\u7528\u6570\u636e\u5e93\u7ed3\u6784\u4e0e\u4f7f\u7528",date:"2023-07-23T00:00:00.000Z",formattedDate:"July 23, 2023",tags:[{label:"Redis",permalink:"/blog/tags/redis"}],readingTime:.245,hasTruncateMarker:!1,authors:[{name:"flankx",title:"\u4f5c\u8005",url:"https://github.com/flankx",email:"137472591@qq.com",imageURL:"https://avatars.githubusercontent.com/u/30172229",key:"Flankx"}],frontMatter:{title:"Redis\u6570\u636e\u7ed3\u6784",tags:["Redis"],authors:"Flankx",description:"Redis\u6570\u636e\u7ed3\u6784 redis \u5e38\u7528\u6570\u636e\u5e93\u7ed3\u6784\u4e0e\u4f7f\u7528",image:"https://source.unsplash.com/random?people&29"},prevItem:{title:"\u5982\u4f55\u4fdd\u8bc1 redis \u7f13\u5b58\u4e00\u81f4\u6027\uff1f",permalink:"/blog/2023/07/24/redis-4"},nextItem:{title:"Redis \u6dd8\u6c70\u673a\u5236",permalink:"/blog/2023/07/22/redis-2"}},s={authorsImageUrls:[void 0]},p=[{value:"5\u79cd\u57fa\u7840\u6570\u636e\u7ed3\u6784",id:"5\u79cd\u57fa\u7840\u6570\u636e\u7ed3\u6784",level:3},{value:"3\u79cd\u7279\u6b8a\u6570\u636e\u7ed3\u6784",id:"3\u79cd\u7279\u6b8a\u6570\u636e\u7ed3\u6784",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"5\u79cd\u57fa\u7840\u6570\u636e\u7ed3\u6784"},"5\u79cd\u57fa\u7840\u6570\u636e\u7ed3\u6784"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"String\u5b57\u7b26\u4e32"),(0,a.kt)("li",{parentName:"ul"},"List\u5217\u8868"),(0,a.kt)("li",{parentName:"ul"},"Set\u96c6\u5408"),(0,a.kt)("li",{parentName:"ul"},"Hash\u6563\u5217"),(0,a.kt)("li",{parentName:"ul"},"Zset\u6709\u5e8f\u96c6\u5408")),(0,a.kt)("h3",{id:"3\u79cd\u7279\u6b8a\u6570\u636e\u7ed3\u6784"},"3\u79cd\u7279\u6b8a\u6570\u636e\u7ed3\u6784"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HyperLogLogs\u57fa\u6570\u7edf\u8ba1"),(0,a.kt)("li",{parentName:"ul"},"Bitmap\u4f4d\u5b58\u50a8"),(0,a.kt)("li",{parentName:"ul"},"Geospatial\u5730\u7406\u4f4d\u7f6e")))}m.isMDXComponent=!0}}]);