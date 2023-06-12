"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[83237],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79236:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],c={},l="Go json tag",s={unversionedId:"backend/go/base/json",id:"backend/go/base/json",title:"Go json tag",description:"json tag\u7684\u7528\u6cd5",source:"@site/docs/backend/go/base/json.md",sourceDirName:"backend/go/base",slug:"/backend/go/base/json",permalink:"/docs/backend/go/base/json",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Init \u51fd\u6570",permalink:"/docs/backend/go/base/init"},next:{title:"\u5206\u5e03\u5f0f\u9501",permalink:"/docs/backend/go/base/lock"}},u={},p=[{value:"json tag\u7684\u7528\u6cd5",id:"json-tag\u7684\u7528\u6cd5",level:2},{value:"todo \u81ea\u5b9a\u4e49tag",id:"todo-\u81ea\u5b9a\u4e49tag",level:2}],f={toc:p},d="wrapper";function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(d,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"go-json-tag"},"Go json tag"),(0,a.kt)("h2",{id:"json-tag\u7684\u7528\u6cd5"},"json tag\u7684\u7528\u6cd5"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},'json:"-"')," \u5ffd\u7565\u89e3\u6790"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},'json:"Key"')," \u6307\u5b9a\u89e3\u6790\u7684key\u540d\u5b57"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},'json:"Key,omitempty"')," \u4e3a\u7a7a\u7684\u65f6,json \u4e0d\u89e3\u6790"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},'json:",omitempty"')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},'json:",json"')," string \u9009\u9879 \u53ea\u4f7f\u7528\u5b57\u7b26\u4e32,\u6d6e\u70b9\u548c\u6574\u578b\u6570\u636e"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"json:name,string")," \u6574\u6570\u578b\u5b89\u88c5 string \u89e3\u6790")),(0,a.kt)("h2",{id:"todo-\u81ea\u5b9a\u4e49tag"},"todo \u81ea\u5b9a\u4e49tag"))}m.isMDXComponent=!0}}]);