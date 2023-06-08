"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[48752],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(t),f=a,d=s["".concat(u,".").concat(f)]||s[f]||m[f]||o;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=s;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},77406:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return m}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],c={tags:["umi","antd"],authors:"ahKevinXy",description:"umi4 \u914d\u7f6e antd \u9ed8\u8ba4\u4e2d\u6587\u6a21\u5f0f",hide_table_of_contents:!1},u="umi4 \u914d\u7f6e antd \u9ed8\u8ba4\u4e2d\u6587\u6a21\u5f0f",l={permalink:"/blog/2023/02/24/index",source:"@site/blog/2023/02/24/index.md",title:"umi4 \u914d\u7f6e antd \u9ed8\u8ba4\u4e2d\u6587\u6a21\u5f0f",description:"umi4 \u914d\u7f6e antd \u9ed8\u8ba4\u4e2d\u6587\u6a21\u5f0f",date:"2023-02-24T00:00:00.000Z",formattedDate:"2023\u5e742\u670824\u65e5",tags:[{label:"umi",permalink:"/blog/tags/umi"},{label:"antd",permalink:"/blog/tags/antd"}],readingTime:.315,hasTruncateMarker:!0,authors:[{name:"ahKevinXy",title:"\u4f5c\u8005",url:"https://github.com/ahKevinXy",email:"ahkevinxy@gmail.com",imageURL:"/img/headers.png",key:"ahKevinXy"}],frontMatter:{tags:["umi","antd"],authors:"ahKevinXy",description:"umi4 \u914d\u7f6e antd \u9ed8\u8ba4\u4e2d\u6587\u6a21\u5f0f",hide_table_of_contents:!1},prevItem:{title:"\u5982\u4f55\u4f18\u96c5\u7684\u63a5\u53e3",permalink:"/blog/2023/03/05/index"},nextItem:{title:"\u4f18\u79c0\u535a\u5ba2",permalink:"/blog/stars"}},p={authorsImageUrls:[void 0]},m=[],s={toc:m};function f(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"2023\u5e7402\u670824\u65e517:32:20\n",(0,o.kt)("img",{parentName:"p",src:"https://www.dmoe.cc/random.php?type=2302231",alt:"\u968f\u673a\u56fe\u7247"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'\nimport { defineConfig } from "umi";\nimport zhCN from \'antd/locale/zh_CN\';\nexport default defineConfig({\n  plugins: [\'@umijs/plugins/dist/antd\'],\n\n\n\n  antd: {\n    configProvider: {\n      locale: zhCN\n    },\n  },\n\n  routes: [\n    { path: "/", component: "index" },\n    { path: "/docs", component: "docs" },\n  ],\n  npmClient: \'yarn\',\n  base: \'/\',\n  hash: true,\n\n\n});\n\n\n\n\n')))}f.isMDXComponent=!0}}]);