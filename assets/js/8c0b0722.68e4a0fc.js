"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[72024],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=l(r),p=o,m=d["".concat(u,".").concat(p)]||d[p]||f[p]||c;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[d]="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},17661:function(e,t,r){r.d(t,{Z:function(){return y}});var n=r(67294),o=r(86010),c=r(54715),i=r(83699),a=r(2735),u=r(97325),l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function s(e){var t=e.href,r=e.children;return n.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",l.cardContainer)},r)}function d(e){var t=e.href,r=e.icon,c=e.title,i=e.description;return n.createElement(s,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",l.cardTitle),title:c},r," ",c),i&&n.createElement("p",{className:(0,o.Z)("text--truncate",l.cardDescription),title:i},i))}function f(e){var t,r=e.item,o=(0,c.Wl)(r);return o?n.createElement(d,{href:o,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,u.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function p(e){var t,r,o=e.item,i=(0,a.Z)(o.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",u=(0,c.xz)(null!=(t=o.docId)?t:void 0);return n.createElement(d,{href:o.href,icon:i,title:o.label,description:null!=(r=o.description)?r:null==u?void 0:u.description})}function m(e){var t=e.item;switch(t.type){case"link":return n.createElement(p,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){var t=e.className,r=(0,c.jA)();return n.createElement(y,{items:r.items,className:t})}function y(e){var t=e.items,r=e.className;if(!t)return n.createElement(g,e);var i=(0,c.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},i.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(m,{item:e}))})))}},48239:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return f}});var n=r(87462),o=r(63366),c=(r(67294),r(3905)),i=r(17661),a=["components"],u={},l="Go 1.17",s={unversionedId:"backend/go/source/go_1.17/index",id:"backend/go/source/go_1.17/index",title:"Go 1.17",description:"",source:"@site/docs/backend/go/source/go_1.17/index.md",sourceDirName:"backend/go/source/go_1.17",slug:"/backend/go/source/go_1.17/",permalink:"/docs/backend/go/source/go_1.17/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"go 1.17 \u7248\u672c\u6e90\u7801\u5b66\u4e60",permalink:"/docs/backend/go/source/go1.17"},next:{title:"sync",permalink:"/docs/backend/go/source/go_1.17/sync"}},d={},f=[],p={toc:f},m="wrapper";function g(e){var t=e.components,r=(0,o.Z)(e,a);return(0,c.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"go-117"},"Go 1.17"),(0,c.kt)(i.Z,{mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);