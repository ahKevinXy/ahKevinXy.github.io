"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[56677],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(n),d=i,m=s["".concat(u,".").concat(d)]||s[d]||f[d]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36750:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=["components"],l={title:"\u5982\u4f55\u4fdd\u8bc1 redis \u7f13\u5b58\u4e00\u81f4\u6027\uff1f",tags:["Redis"],authors:"Flankx",description:"Redis\u4e00\u81f4\u6027"},u=void 0,c={permalink:"/blog/2023/07/24/redis-4",source:"@site/blog/2023/07/24/redis-4.md",title:"\u5982\u4f55\u4fdd\u8bc1 redis \u7f13\u5b58\u4e00\u81f4\u6027\uff1f",description:"Redis\u4e00\u81f4\u6027",date:"2023-07-24T00:00:00.000Z",formattedDate:"2023\u5e747\u670824\u65e5",tags:[{label:"Redis",permalink:"/blog/tags/redis"}],readingTime:1.175,hasTruncateMarker:!1,authors:[{name:"flankx",title:"\u4f5c\u8005",url:"https://github.com/flankx",email:"137472591@qq.com",imageURL:"https://avatars.githubusercontent.com/u/30172229",key:"Flankx"}],frontMatter:{title:"\u5982\u4f55\u4fdd\u8bc1 redis \u7f13\u5b58\u4e00\u81f4\u6027\uff1f",tags:["Redis"],authors:"Flankx",description:"Redis\u4e00\u81f4\u6027"},prevItem:{title:"Transactional \u4ec0\u4e48\u60c5\u51b5\u4e0b\u4f1a\u5931\u6548\uff1f",permalink:"/blog/2023/07/25/spring-0725"},nextItem:{title:"Redis\u6570\u636e\u7ed3\u6784",permalink:"/blog/2023/07/23/redis-3"}},p={authorsImageUrls:[void 0]},s=[{value:"\u65b9\u6848\u4e00",id:"\u65b9\u6848\u4e00",level:2},{value:"\u91c7\u7528\u5ef6\u65f6\u53cc\u5220\u7b56\u7565",id:"\u91c7\u7528\u5ef6\u65f6\u53cc\u5220\u7b56\u7565",level:3},{value:"\u65b9\u6848\u4e8c",id:"\u65b9\u6848\u4e8c",level:2},{value:"\u4e00\u6b65\u66f4\u65b0\u7f13\u5b58\uff08\u57fa\u4e8e\u8ba2\u9605Binlog\u7684\u540c\u6b65\u673a\u5236\uff09",id:"\u4e00\u6b65\u66f4\u65b0\u7f13\u5b58\u57fa\u4e8e\u8ba2\u9605binlog\u7684\u540c\u6b65\u673a\u5236",level:3}],f={toc:s},d="wrapper";function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)(d,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u65b9\u6848\u4e00"},"\u65b9\u6848\u4e00"),(0,a.kt)("h3",{id:"\u91c7\u7528\u5ef6\u65f6\u53cc\u5220\u7b56\u7565"},"\u91c7\u7528\u5ef6\u65f6\u53cc\u5220\u7b56\u7565"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u57fa\u672c\u601d\u8def\uff1a \u5728\u5199\u5e93\u524d\u540e\u90fd\u8fdb\u884c\u5220\u9664\u7f13\u5b58\u64cd\u4f5c\uff0c\u5e76\u4e14\u8bbe\u7f6e\u5408\u7406\u7684\u8d85\u65f6\u65f6\u95f4"),(0,a.kt)("li",{parentName:"ul"},"\u57fa\u672c\u6b65\u9aa4\uff1a \u5148\u5220\u9664\u7f13\u5b58\u2013\u518d\u5199\u6570\u636e\u5e93\u2014\u4f11\u7720\u4e00\u6bb5\u65f6\u95f4\u2014\u518d\u6b21\u5220\u9664\u7f13\u5b58\n\u6ce8\uff1a\u4f11\u7720\u7684\u65f6\u95f4\u662f\u6839\u636e\u81ea\u5df1\u7684\u9879\u76ee\u7684\u8bfb\u6570\u636e\u4e1a\u52a1\u903b\u8f91\u7684\u8017\u65f6\u6765\u786e\u5b9a\u7684\u3002\u8fd9\u6837\u505a\u4e3b\u8981\u662f\u4e3a\u4e86\u4fdd\u8bc1\u5728\u5199\u8bf7\u6c42\u4e4b\u524d\u786e\u4fdd\u8bfb\u8bf7\u6c42\u7ed3\u675f\uff0c\u5199\u8bf7\u6c42\u53ef\u4ee5\u5220\u9664\u8bfb\u8bf7\u6c42\u9020\u6210\u7684\u7f13\u5b58\u810f\u6570\u636e\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8be5\u65b9\u6848\u7684\u5f0a\u7aef\uff1a \u96c6\u5408\u53cc\u5220\u7b56\u7565+\u7f13\u5b58\u8d85\u65f6\u7b56\u7565\u8bbe\u7f6e\uff0c\u8fd9\u6837\u6700\u5dee\u7684\u7ed3\u679c\u5c31\u662f\u5728\u8d85\u65f6\u65f6\u95f4\u5185\u6570\u636e\u5b58\u5728\u4e0d\u4e00\u81f4\uff0c\u53c8\u589e\u52a0\u4e86\u5199\u8bf7\u6c42\u7684\u8017\u65f6\u3002")),(0,a.kt)("h2",{id:"\u65b9\u6848\u4e8c"},"\u65b9\u6848\u4e8c"),(0,a.kt)("h3",{id:"\u4e00\u6b65\u66f4\u65b0\u7f13\u5b58\u57fa\u4e8e\u8ba2\u9605binlog\u7684\u540c\u6b65\u673a\u5236"},"\u4e00\u6b65\u66f4\u65b0\u7f13\u5b58\uff08\u57fa\u4e8e\u8ba2\u9605Binlog\u7684\u540c\u6b65\u673a\u5236\uff09"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u57fa\u672c\u601d\u8def\uff1a ",(0,a.kt)("inlineCode",{parentName:"li"},"MySQL Binlog"),"\u589e\u5f3a\u8ba2\u9605\u6d88\u8d39 + \u6d88\u606f\u961f\u5217 + \u589e\u91cf\u6570\u636e\u66f4\u65b0\u5230",(0,a.kt)("inlineCode",{parentName:"li"},"Redis"),"\u3002")))}m.isMDXComponent=!0}}]);