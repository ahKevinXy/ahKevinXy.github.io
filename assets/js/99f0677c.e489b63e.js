"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[19463],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(r),m=i,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},37105:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var n=r(83117),i=r(80102),a=(r(67294),r(3905)),l=["components"],o={title:"Redis \u6dd8\u6c70\u673a\u5236",tags:["Redis"],authors:"Flankx",description:"Redis \u6dd8\u6c70\u673a\u5236"},s=void 0,c={permalink:"/blog/2023/07/22/redis-2",source:"@site/blog/2023/07/22/redis-2.md",title:"Redis \u6dd8\u6c70\u673a\u5236",description:"Redis \u6dd8\u6c70\u673a\u5236",date:"2023-07-22T00:00:00.000Z",formattedDate:"2023\u5e747\u670822\u65e5",tags:[{label:"Redis",permalink:"/blog/tags/redis"}],readingTime:1.425,hasTruncateMarker:!1,authors:[{name:"flankx",title:"\u4f5c\u8005",url:"https://github.com/flankx",email:"137472591@qq.com",imageURL:"https://avatars.githubusercontent.com/u/30172229",key:"Flankx"}],frontMatter:{title:"Redis \u6dd8\u6c70\u673a\u5236",tags:["Redis"],authors:"Flankx",description:"Redis \u6dd8\u6c70\u673a\u5236"},nextItem:{title:"Redis\u7f13\u5b58\u5f02\u5e38\u5904\u7406",permalink:"/blog/2023/07/21/redis-1"}},u={authorsImageUrls:[void 0]},p=[{value:"<code>Redis</code>\u63d0\u4f9b6\u79cd\u6570\u636e\u6dd8\u6c70\u7b56\u7565",id:"redis\u63d0\u4f9b6\u79cd\u6570\u636e\u6dd8\u6c70\u7b56\u7565",level:3},{value:"Redis\u6301\u4e45\u5316\u673a\u5236",id:"redis\u6301\u4e45\u5316\u673a\u5236",level:3}],d={toc:p},m="wrapper";function f(e){var t=e.components,r=(0,i.Z)(e,l);return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"redis\u63d0\u4f9b6\u79cd\u6570\u636e\u6dd8\u6c70\u7b56\u7565"},(0,a.kt)("inlineCode",{parentName:"h3"},"Redis"),"\u63d0\u4f9b6\u79cd\u6570\u636e\u6dd8\u6c70\u7b56\u7565"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"volatile-lru"),"\uff08least recently used\uff09\uff1a\u4ece\u5df2\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4\u7684\u6570\u636e\u96c6\uff08server.db","[i]",".expires\uff09\u4e2d\u6311\u9009\u6700\u8fd1\u6700\u5c11\u4f7f\u7528\u7684\u6570\u636e\u6dd8\u6c70"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"volatile-ttl"),"\uff1a\u4ece\u5df2\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4\u7684\u6570\u636e\u96c6\uff08server.db","[i]",".expires\uff09\u4e2d\u6311\u9009\u5c06\u8981\u8fc7\u671f\u7684\u6570\u636e\u6dd8\u6c70"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"volatile-random"),"\uff1a\u4ece\u5df2\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4\u7684\u6570\u636e\u96c6\uff08server.db","[i]",".expires\uff09\u4e2d\u4efb\u610f\u9009\u62e9\u6570\u636e\u6dd8\u6c70"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"allkeys-lru"),"\uff08least recently used\uff09\uff1a\u5f53\u5185\u5b58\u4e0d\u8db3\u4ee5\u5bb9\u7eb3\u65b0\u5199\u5165\u6570\u636e\u65f6\uff0c\u5728\u952e\u7a7a\u95f4\u4e2d\uff0c\u79fb\u9664\u6700\u8fd1\u6700\u5c11\u4f7f\u7528\u7684 key\uff08\u8fd9\u4e2a\u662f\u6700\u5e38\u7528\u7684\uff09"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"allkeys-random"),"\uff1a\u4ece\u6570\u636e\u96c6\uff08server.db","[i]",".dict\uff09\u4e2d\u4efb\u610f\u9009\u62e9\u6570\u636e\u6dd8\u6c70"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"no-eviction"),"\uff1a\u7981\u6b62\u9a71\u9010\u6570\u636e\uff0c\u4e5f\u5c31\u662f\u8bf4\u5f53\u5185\u5b58\u4e0d\u8db3\u4ee5\u5bb9\u7eb3\u65b0\u5199\u5165\u6570\u636e\u65f6\uff0c\u65b0\u5199\u5165\u64cd\u4f5c\u4f1a\u62a5\u9519\u3002\u8fd9\u4e2a\u5e94\u8be5\u6ca1\u4eba\u4f7f\u7528\u5427\uff01\n4.0 \u7248\u672c\u540e\u589e\u52a0\u4ee5\u4e0b\u4e24\u79cd\uff1a"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"volatile-lfu"),"\uff08least frequently used\uff09\uff1a\u4ece\u5df2\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4\u7684\u6570\u636e\u96c6\uff08server.db","[i]",".expires\uff09\u4e2d\u6311\u9009\u6700\u4e0d\u7ecf\u5e38\u4f7f\u7528\u7684\u6570\u636e\u6dd8\u6c70"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"allkeys-lfu"),"\uff08least frequently used\uff09\uff1a\u5f53\u5185\u5b58\u4e0d\u8db3\u4ee5\u5bb9\u7eb3\u65b0\u5199\u5165\u6570\u636e\u65f6\uff0c\u5728\u952e\u7a7a\u95f4\u4e2d\uff0c\u79fb\u9664\u6700\u4e0d\u7ecf\u5e38\u4f7f\u7528\u7684 key")),(0,a.kt)("h3",{id:"redis\u6301\u4e45\u5316\u673a\u5236"},"Redis\u6301\u4e45\u5316\u673a\u5236"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"RDB\u5feb\u7167"),(0,a.kt)("li",{parentName:"ol"},"AOF\u53ea\u8ffd\u52a0\u6587\u4ef6")))}f.isMDXComponent=!0}}]);