"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[40827],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return p}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(r),p=o,d=m["".concat(l,".").concat(p)]||m[p]||f[p]||i;return r?n.createElement(d,a(a({ref:t},s),{},{components:r})):n.createElement(d,a({ref:t},s))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17661:function(e,t,r){r.d(t,{Z:function(){return b}});var n=r(67294),o=r(86010),i=r(78259),a=r(83699),c=r(2735),l=r(97325),u="cardContainer_fWXF",s="cardTitle_rnsV",f="cardDescription_PWke";function m(e){var t=e.href,r=e.children;return n.createElement(a.Z,{href:t,className:(0,o.Z)("card padding--lg",u)},r)}function p(e){var t=e.href,r=e.icon,i=e.title,a=e.description;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",s),title:i},r," ",i),a&&n.createElement("p",{className:(0,o.Z)("text--truncate",f),title:a},a))}function d(e){var t,r=e.item,o=(0,i.Wl)(r);return o?n.createElement(p,{href:o,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function y(e){var t,r,o=e.item,a=(0,c.Z)(o.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,i.xz)(null!=(t=o.docId)?t:void 0);return n.createElement(p,{href:o.href,icon:a,title:o.label,description:null!=(r=o.description)?r:null==l?void 0:l.description})}function h(e){var t=e.item;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function v(e){var t=e.className,r=(0,i.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){var t=e.items,r=e.className;if(!t)return n.createElement(v,e);var a=(0,i.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},a.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(h,{item:e}))})))}},65278:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=r(17661),c=["components"],l={},u="\u7b2c\u4e09\u65b9\u5e73\u53f0",s={unversionedId:"other_platform/index",id:"other_platform/index",title:"\u7b2c\u4e09\u65b9\u5e73\u53f0",description:"",source:"@site/docs/other_platform/index.md",sourceDirName:"other_platform",slug:"/other_platform/",permalink:"/docs/other_platform/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u64cd\u4f5c\u7cfb\u7edf\u57fa\u7840",permalink:"/docs/os/base/"},next:{title:"\u963f\u91cc\u7cfb",permalink:"/docs/other_platform/ali/"}},f={},m=[],p={toc:m};function d(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u7b2c\u4e09\u65b9\u5e73\u53f0"},"\u7b2c\u4e09\u65b9\u5e73\u53f0"),(0,i.kt)(a.Z,{mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);