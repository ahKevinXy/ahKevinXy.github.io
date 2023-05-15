"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[9002],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=u(r),p=o,m=f["".concat(l,".").concat(p)]||f[p]||d[p]||i;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[f]="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},17661:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(67294),o=r(86010),i=r(54715),c=r(83699),a=r(2735),l=r(97325),u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function s(e){var t=e.href,r=e.children;return n.createElement(c.Z,{href:t,className:(0,o.Z)("card padding--lg",u.cardContainer)},r)}function f(e){var t=e.href,r=e.icon,i=e.title,c=e.description;return n.createElement(s,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",u.cardTitle),title:i},r," ",i),c&&n.createElement("p",{className:(0,o.Z)("text--truncate",u.cardDescription),title:c},c))}function d(e){var t,r=e.item,o=(0,i.Wl)(r);return o?n.createElement(f,{href:o,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function p(e){var t,r,o=e.item,c=(0,a.Z)(o.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,i.xz)(null!=(t=o.docId)?t:void 0);return n.createElement(f,{href:o.href,icon:c,title:o.label,description:null!=(r=o.description)?r:null==l?void 0:l.description})}function m(e){var t=e.item;switch(t.type){case"link":return n.createElement(p,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function y(e){var t=e.className,r=(0,i.jA)();return n.createElement(v,{items:r.items,className:t})}function v(e){var t=e.items,r=e.className;if(!t)return n.createElement(y,e);var c=(0,i.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},c.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(m,{item:e}))})))}},46150:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),c=r(17661),a=["components"],l={},u="Node",s={unversionedId:"front/node/index",id:"front/node/index",title:"Node",description:"",source:"@site/docs/front/node/index.md",sourceDirName:"front/node",slug:"/front/node/",permalink:"/docs/front/node/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5b98\u65b9\u6587\u6863",permalink:"/docs/front/js/official"},next:{title:"Node \u57fa\u7840",permalink:"/docs/front/node/base"}},f={},d=[],p={toc:d},m="wrapper";function y(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"node"},"Node"),(0,i.kt)(c.Z,{mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);