"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[29618],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=i,g=s["".concat(l,".").concat(m)]||s[m]||f[m]||o;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56172:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=["components"],c={title:"Spring \u542f\u52a8\u65f6\u6267\u884c\u6307\u5b9a\u65b9\u6cd5",tags:["Spring"],authors:"Flankx",description:"Spring \u542f\u52a8\u65f6\u6267\u884c\u6307\u5b9a\u65b9\u6cd5"},l="\u542f\u52a8\u65f6\u6267\u884c\u6307\u5b9a\u65b9\u6cd5",u={permalink:"/blog/2023/07/15/Spring-1 ",source:"@site/blog/2023/07/15/Spring-1 .md",title:"Spring \u542f\u52a8\u65f6\u6267\u884c\u6307\u5b9a\u65b9\u6cd5",description:"Spring \u542f\u52a8\u65f6\u6267\u884c\u6307\u5b9a\u65b9\u6cd5",date:"2023-07-15T00:00:00.000Z",formattedDate:"2023\u5e747\u670815\u65e5",tags:[{label:"Spring",permalink:"/blog/tags/spring"}],readingTime:3.235,hasTruncateMarker:!0,authors:[{name:"flankx",title:"\u4f5c\u8005",url:"https://github.com/flankx",email:"137472591@qq.com",imageURL:"https://avatars.githubusercontent.com/u/30172229",key:"Flankx"}],frontMatter:{title:"Spring \u542f\u52a8\u65f6\u6267\u884c\u6307\u5b9a\u65b9\u6cd5",tags:["Spring"],authors:"Flankx",description:"Spring \u542f\u52a8\u65f6\u6267\u884c\u6307\u5b9a\u65b9\u6cd5"},prevItem:{title:"Java\u63a5\u53e3\u4e0e\u62bd\u8c61\u7c7b\u7684\u533a\u522b",permalink:"/blog/2023/07/16/Java-1"},nextItem:{title:"\u5982\u4f55\u642d\u5efa\u5c5e\u4e8e\u4e00\u4e2a\u81ea\u5df1\u7684\u8def\u7531\u5668",permalink:"/blog/2023/07/15/router"}},p={authorsImageUrls:[void 0]},s=[{value:"\u4e00\u3001\u5b9e\u73b0\u65b9\u5f0f",id:"\u4e00\u5b9e\u73b0\u65b9\u5f0f",level:2},{value:"1. \u5b9e\u73b0 ServletContextListener \u7684 contextInitialized \u65b9\u6cd5",id:"1-\u5b9e\u73b0-servletcontextlistener-\u7684-contextinitialized-\u65b9\u6cd5",level:3}],f={toc:s},m="wrapper";function g(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)(m,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4e00\u5b9e\u73b0\u65b9\u5f0f"},"\u4e00\u3001\u5b9e\u73b0\u65b9\u5f0f"),(0,o.kt)("h3",{id:"1-\u5b9e\u73b0-servletcontextlistener-\u7684-contextinitialized-\u65b9\u6cd5"},"1. \u5b9e\u73b0 ServletContextListener \u7684 contextInitialized \u65b9\u6cd5"))}g.isMDXComponent=!0}}]);