"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[28967],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||c;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},17661:function(e,t,r){r.d(t,{Z:function(){return b}});var n=r(67294),o=r(86010),c=r(78259),i=r(83699),a=r(2735),u=r(97325),l="cardContainer_fWXF",s="cardTitle_rnsV",p="cardDescription_PWke";function f(e){var t=e.href,r=e.children;return n.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",l)},r)}function m(e){var t=e.href,r=e.icon,c=e.title,i=e.description;return n.createElement(f,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",s),title:c},r," ",c),i&&n.createElement("p",{className:(0,o.Z)("text--truncate",p),title:i},i))}function d(e){var t,r=e.item,o=(0,c.Wl)(r);return o?n.createElement(m,{href:o,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,u.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function y(e){var t,r,o=e.item,i=(0,a.Z)(o.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",u=(0,c.xz)(null!=(t=o.docId)?t:void 0);return n.createElement(m,{href:o.href,icon:i,title:o.label,description:null!=(r=o.description)?r:null==u?void 0:u.description})}function v(e){var t=e.item;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function h(e){var t=e.className,r=(0,c.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){var t=e.items,r=e.className;if(!t)return n.createElement(h,e);var i=(0,c.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},i.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(v,{item:e}))})))}},89141:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return f}});var n=r(87462),o=r(63366),c=(r(67294),r(3905)),i=r(17661),a=["components"],u={},l="\u4ea7\u54c1\u8fd0\u8425",s={unversionedId:"product-ops/index",id:"product-ops/index",title:"\u4ea7\u54c1\u8fd0\u8425",description:"",source:"@site/docs/product-ops/index.md",sourceDirName:"product-ops",slug:"/product-ops/",permalink:"/docs/product-ops/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u8ba1\u5212",permalink:"/docs/plan/"},next:{title:"\u4ea7\u54c1\u7ecf\u7406",permalink:"/docs/product-ops/product/"}},p={},f=[],m={toc:f};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"\u4ea7\u54c1\u8fd0\u8425"},"\u4ea7\u54c1\u8fd0\u8425"),(0,c.kt)(i.Z,{mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);