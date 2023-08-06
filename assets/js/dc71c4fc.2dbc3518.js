"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[19642],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,b=f["".concat(u,".").concat(d)]||f[d]||l[d]||a;return r?n.createElement(b,c(c({ref:t},p),{},{components:r})):n.createElement(b,c({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},12104:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c=["components"],i={},u="Secure Remote Password (SRP)",s={unversionedId:"backend/base/srp",id:"backend/base/srp",title:"Secure Remote Password (SRP)",description:"\u5b89\u5168\u8fdc\u7a0b\u53e3\u4ee4",source:"@site/docs/backend/base/srp.md",sourceDirName:"backend/base",slug:"/backend/base/srp",permalink:"/docs/backend/base/srp",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RTMP \u670d\u52a1",permalink:"/docs/backend/base/rtmp"},next:{title:"\u7ebf\u7a0b",permalink:"/docs/backend/base/thread/"}},p={},l=[{value:"\u5b89\u5168\u8fdc\u7a0b\u53e3\u4ee4",id:"\u5b89\u5168\u8fdc\u7a0b\u53e3\u4ee4",level:2}],f={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"secure-remote-password-srp"},"Secure Remote Password (SRP)"),(0,a.kt)("h2",{id:"\u5b89\u5168\u8fdc\u7a0b\u53e3\u4ee4"},"\u5b89\u5168\u8fdc\u7a0b\u53e3\u4ee4"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"SRP\u662f\u4e00\u4e2a\u57fa\u4e8e\u53e3\u4ee4\u7684\u8eab\u4efd\u8ba4\u8bc1\u548c\u5bc6\u94a5\u4ea4\u6362\u534f\u8bae\u3002SRP\u7684\u4f18\u70b9\u5728\u4e8e\uff0c\u8ba4\u8bc1\u8fc7\u7a0b\u4e2d\u4e0d\u4f1a\u6709\u5bc6\u94a5\u660e\u6587\u4f20\u9012\u7684\u73b0\u8c61\uff0c\u7528\u6237\u53ea\u9700\u8981\u6301\u6709\u53e3\u4ee4\u5373\u53ef\uff0c\u6b64\u5916\uff0c\u670d\u52a1\u7aef\u5b58\u50a8\u7684\u975e\u7528\u6237\u7684\u53e3\u4ee4\uff0c\u800c\u662f\u4e0e\u53e3\u4ee4\u76f8\u5173\u7684\u4fe1\u606f\uff0c\u5373\u4fbf\u670d\u52a1\u5668\u88ab\u654c\u624b\u4fd8\u83b7\uff0c\u654c\u624b\u4e5f\u65e0\u6cd5\u4f2a\u9020\u4e00\u4e2a\u5408\u6cd5\u7684\u5ba2\u6237\u7aef(\u65e0\u6cd5\u62ff\u5230\u53e3\u4ee4) \u4ece\u800c\u4fdd\u8bc1\u4e86\u53cc\u65b9\u7684\u5b89\u5168\u3002\u4e0b\u9762\u4ecb\u7ecdSRP\u534f\u8bae\u7684\u5185\u5bb9")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://blog.csdn.net/haoranstone/article/details/46407959"},"\u53c2\u8003")))}d.isMDXComponent=!0}}]);