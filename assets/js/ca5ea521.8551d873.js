"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[19569],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},76109:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],l={title:"\u5982\u4f55\u4fdd\u8bc1 redis \u7f13\u5b58\u4e00\u81f4\u6027\uff1f",tags:["Redis"],authors:"Flankx",description:"Redis\u4e00\u81f4\u6027 redis \u5982\u4f55\u4f7f\u7528\u5230\u7f13\u5b58\u4e00\u81f4\u6027",image:"https://source.unsplash.com/random?people&22"},u=void 0,c={permalink:"/blog/2023/07/24/redis-4",source:"@site/blog/2023/07/24/redis-4.md",title:"\u5982\u4f55\u4fdd\u8bc1 redis \u7f13\u5b58\u4e00\u81f4\u6027\uff1f",description:"Redis\u4e00\u81f4\u6027 redis \u5982\u4f55\u4f7f\u7528\u5230\u7f13\u5b58\u4e00\u81f4\u6027",date:"2023-07-24T00:00:00.000Z",formattedDate:"2023\u5e747\u670824\u65e5",tags:[{label:"Redis",permalink:"/blog/tags/redis"}],readingTime:1.175,hasTruncateMarker:!1,authors:[{name:"flankx",title:"\u4f5c\u8005",url:"https://github.com/flankx",email:"137472591@qq.com",imageURL:"https://avatars.githubusercontent.com/u/30172229",key:"Flankx"}],frontMatter:{title:"\u5982\u4f55\u4fdd\u8bc1 redis \u7f13\u5b58\u4e00\u81f4\u6027\uff1f",tags:["Redis"],authors:"Flankx",description:"Redis\u4e00\u81f4\u6027 redis \u5982\u4f55\u4f7f\u7528\u5230\u7f13\u5b58\u4e00\u81f4\u6027",image:"https://source.unsplash.com/random?people&22"},prevItem:{title:"Transactional \u4ec0\u4e48\u60c5\u51b5\u4e0b\u4f1a\u5931\u6548\uff1f",permalink:"/blog/2023/07/25/spring-0725"},nextItem:{title:"Redis\u6570\u636e\u7ed3\u6784",permalink:"/blog/2023/07/23/redis-3"}},s={authorsImageUrls:[void 0]},p=[{value:"\u65b9\u6848\u4e00",id:"\u65b9\u6848\u4e00",level:2},{value:"\u91c7\u7528\u5ef6\u65f6\u53cc\u5220\u7b56\u7565",id:"\u91c7\u7528\u5ef6\u65f6\u53cc\u5220\u7b56\u7565",level:3},{value:"\u65b9\u6848\u4e8c",id:"\u65b9\u6848\u4e8c",level:2},{value:"\u4e00\u6b65\u66f4\u65b0\u7f13\u5b58\uff08\u57fa\u4e8e\u8ba2\u9605Binlog\u7684\u540c\u6b65\u673a\u5236\uff09",id:"\u4e00\u6b65\u66f4\u65b0\u7f13\u5b58\u57fa\u4e8e\u8ba2\u9605binlog\u7684\u540c\u6b65\u673a\u5236",level:3}],d={toc:p};function m(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u65b9\u6848\u4e00"},"\u65b9\u6848\u4e00"),(0,o.kt)("h3",{id:"\u91c7\u7528\u5ef6\u65f6\u53cc\u5220\u7b56\u7565"},"\u91c7\u7528\u5ef6\u65f6\u53cc\u5220\u7b56\u7565"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u57fa\u672c\u601d\u8def\uff1a \u5728\u5199\u5e93\u524d\u540e\u90fd\u8fdb\u884c\u5220\u9664\u7f13\u5b58\u64cd\u4f5c\uff0c\u5e76\u4e14\u8bbe\u7f6e\u5408\u7406\u7684\u8d85\u65f6\u65f6\u95f4"),(0,o.kt)("li",{parentName:"ul"},"\u57fa\u672c\u6b65\u9aa4\uff1a \u5148\u5220\u9664\u7f13\u5b58\u2013\u518d\u5199\u6570\u636e\u5e93\u2014\u4f11\u7720\u4e00\u6bb5\u65f6\u95f4\u2014\u518d\u6b21\u5220\u9664\u7f13\u5b58\n\u6ce8\uff1a\u4f11\u7720\u7684\u65f6\u95f4\u662f\u6839\u636e\u81ea\u5df1\u7684\u9879\u76ee\u7684\u8bfb\u6570\u636e\u4e1a\u52a1\u903b\u8f91\u7684\u8017\u65f6\u6765\u786e\u5b9a\u7684\u3002\u8fd9\u6837\u505a\u4e3b\u8981\u662f\u4e3a\u4e86\u4fdd\u8bc1\u5728\u5199\u8bf7\u6c42\u4e4b\u524d\u786e\u4fdd\u8bfb\u8bf7\u6c42\u7ed3\u675f\uff0c\u5199\u8bf7\u6c42\u53ef\u4ee5\u5220\u9664\u8bfb\u8bf7\u6c42\u9020\u6210\u7684\u7f13\u5b58\u810f\u6570\u636e\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u8be5\u65b9\u6848\u7684\u5f0a\u7aef\uff1a \u96c6\u5408\u53cc\u5220\u7b56\u7565+\u7f13\u5b58\u8d85\u65f6\u7b56\u7565\u8bbe\u7f6e\uff0c\u8fd9\u6837\u6700\u5dee\u7684\u7ed3\u679c\u5c31\u662f\u5728\u8d85\u65f6\u65f6\u95f4\u5185\u6570\u636e\u5b58\u5728\u4e0d\u4e00\u81f4\uff0c\u53c8\u589e\u52a0\u4e86\u5199\u8bf7\u6c42\u7684\u8017\u65f6\u3002")),(0,o.kt)("h2",{id:"\u65b9\u6848\u4e8c"},"\u65b9\u6848\u4e8c"),(0,o.kt)("h3",{id:"\u4e00\u6b65\u66f4\u65b0\u7f13\u5b58\u57fa\u4e8e\u8ba2\u9605binlog\u7684\u540c\u6b65\u673a\u5236"},"\u4e00\u6b65\u66f4\u65b0\u7f13\u5b58\uff08\u57fa\u4e8e\u8ba2\u9605Binlog\u7684\u540c\u6b65\u673a\u5236\uff09"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u57fa\u672c\u601d\u8def\uff1a ",(0,o.kt)("inlineCode",{parentName:"li"},"MySQL Binlog"),"\u589e\u5f3a\u8ba2\u9605\u6d88\u8d39 + \u6d88\u606f\u961f\u5217 + \u589e\u91cf\u6570\u636e\u66f4\u65b0\u5230",(0,o.kt)("inlineCode",{parentName:"li"},"Redis"),"\u3002")))}m.isMDXComponent=!0}}]);