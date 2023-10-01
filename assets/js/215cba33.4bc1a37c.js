"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[66208],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,c=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),f=u(r),m=i,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||c;return r?n.createElement(d,a(a({ref:t},s),{},{components:r})):n.createElement(d,a({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=r.length,a=new Array(c);a[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[f]="string"==typeof e?e:i,a[1]=o;for(var u=2;u<c;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17661:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(67294),i=r(86010),c=r(78259),a=r(83699),o=r(2735),l=r(97325),u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function s(e){var t=e.href,r=e.children;return n.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",u.cardContainer)},r)}function f(e){var t=e.href,r=e.icon,c=e.title,a=e.description;return n.createElement(s,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",u.cardTitle),title:c},r," ",c),a&&n.createElement("p",{className:(0,i.Z)("text--truncate",u.cardDescription),title:a},a))}function p(e){var t,r=e.item,i=(0,c.Wl)(r);return i?n.createElement(f,{href:i,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function m(e){var t,r,i=e.item,a=(0,o.Z)(i.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,c.xz)(null!=(t=i.docId)?t:void 0);return n.createElement(f,{href:i.href,icon:a,title:i.label,description:null!=(r=i.description)?r:null==l?void 0:l.description})}function d(e){var t=e.item;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function y(e){var t=e.className,r=(0,c.jA)();return n.createElement(v,{items:r.items,className:t})}function v(e){var t=e.items,r=e.className;if(!t)return n.createElement(y,e);var a=(0,c.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},a.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(d,{item:e}))})))}},11118:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=r(87462),i=r(63366),c=(r(67294),r(3905)),a=r(17661),o=["components"],l={},u="\u7f51\u7edc",s={unversionedId:"internet/index",id:"internet/index",title:"\u7f51\u7edc",description:"",source:"@site/docs/internet/index.md",sourceDirName:"internet",slug:"/internet/",permalink:"/docs/internet/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u7840",permalink:"/docs/hardware/base"},next:{title:"\u7f51\u7edc\u57fa\u7840",permalink:"/docs/internet/base"}},f={},p=[],m={toc:p},d="wrapper";function y(e){var t=e.components,r=(0,i.Z)(e,o);return(0,c.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"\u7f51\u7edc"},"\u7f51\u7edc"),(0,c.kt)(a.Z,{mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);