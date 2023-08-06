"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[96837],{3905:function(e,n,t){t.d(n,{Zo:function(){return f},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},f=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),l=u(t),m=o,d=l["".concat(p,".").concat(m)]||l[m]||s[m]||i;return t?r.createElement(d,a(a({ref:n},f),{},{components:t})):r.createElement(d,a({ref:n},f))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=l;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},59211:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],c={},p="Init \u51fd\u6570",u={unversionedId:"backend/go/base/init",id:"backend/go/base/init",title:"Init \u51fd\u6570",description:"1 init\u51fd\u6570\u662f\u7528\u4e8e\u7a0b\u5e8f\u6267\u884c\u524d\u505a\u5305\u7684\u521d\u59cb\u5316\u7684\u51fd\u6570\uff0c\u6bd4\u5982\u521d\u59cb\u5316\u5305\u91cc\u7684\u53d8\u91cf\u7b49",source:"@site/docs/backend/go/base/init.md",sourceDirName:"backend/go/base",slug:"/backend/go/base/init",permalink:"/docs/backend/go/base/init",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"iface \u548c eface \u533a\u522b",permalink:"/docs/backend/go/base/iface"},next:{title:"Go json tag",permalink:"/docs/backend/go/base/json"}},f={},s=[],l={toc:s};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"init-\u51fd\u6570"},"Init \u51fd\u6570"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"1 init\u51fd\u6570\u662f\u7528\u4e8e\u7a0b\u5e8f\u6267\u884c\u524d\u505a\u5305\u7684\u521d\u59cb\u5316\u7684\u51fd\u6570\uff0c\u6bd4\u5982\u521d\u59cb\u5316\u5305\u91cc\u7684\u53d8\u91cf\u7b49"),(0,i.kt)("p",{parentName:"admonition"},"2 \u6bcf\u4e2a\u5305\u53ef\u4ee5\u62e5\u6709\u591a\u4e2ainit\u51fd\u6570"),(0,i.kt)("p",{parentName:"admonition"},"3 \u5305\u7684\u6bcf\u4e2a\u6e90\u6587\u4ef6\u4e5f\u53ef\u4ee5\u62e5\u6709\u591a\u4e2ainit\u51fd\u6570"),(0,i.kt)("p",{parentName:"admonition"},"4 \u540c\u4e00\u4e2a\u5305\u4e2d\u591a\u4e2ainit\u51fd\u6570\u7684\u6267\u884c\u987a\u5e8fgo\u8bed\u8a00\u6ca1\u6709\u660e\u786e\u7684\u5b9a\u4e49(\u8bf4\u660e)"),(0,i.kt)("p",{parentName:"admonition"},"5 \u4e0d\u540c\u5305\u7684init\u51fd\u6570\u6309\u7167\u5305\u5bfc\u5165\u7684\u4f9d\u8d56\u5173\u7cfb\u51b3\u5b9a\u8be5\u521d\u59cb\u5316\u51fd\u6570\u7684\u6267\u884c\u987a\u5e8f"),(0,i.kt)("p",{parentName:"admonition"},"6 init\u51fd\u6570\u4e0d\u80fd\u88ab\u5176\u4ed6\u51fd\u6570\u8c03\u7528\uff0c\u800c\u662f\u5728main\u51fd\u6570\u6267\u884c\u4e4b\u524d\uff0c\u81ea\u52a8\u88ab\u8c03\u7528")))}m.isMDXComponent=!0}}]);