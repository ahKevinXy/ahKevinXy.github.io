"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[70079],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),f=u(r),m=c,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||i;return r?n.createElement(d,a(a({ref:t},s),{},{components:r})):n.createElement(d,a({ref:t},s))}));function d(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var i=r.length,a=new Array(i);a[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[f]="string"==typeof e?e:c,a[1]=o;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17661:function(e,t,r){r.d(t,{Z:function(){return b}});var n=r(67294),c=r(86010),i=r(78259),a=r(83699),o=r(2735),l=r(97325),u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function s(e){var t=e.href,r=e.children;return n.createElement(a.Z,{href:t,className:(0,c.Z)("card padding--lg",u.cardContainer)},r)}function f(e){var t=e.href,r=e.icon,i=e.title,a=e.description;return n.createElement(s,{href:t},n.createElement("h2",{className:(0,c.Z)("text--truncate",u.cardTitle),title:i},r," ",i),a&&n.createElement("p",{className:(0,c.Z)("text--truncate",u.cardDescription),title:a},a))}function p(e){var t,r=e.item,c=(0,i.Wl)(r);return c?n.createElement(f,{href:c,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function m(e){var t,r,c=e.item,a=(0,o.Z)(c.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,i.xz)(null!=(t=c.docId)?t:void 0);return n.createElement(f,{href:c.href,icon:a,title:c.label,description:null!=(r=c.description)?r:null==l?void 0:l.description})}function d(e){var t=e.item;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function y(e){var t=e.className,r=(0,i.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){var t=e.items,r=e.className;if(!t)return n.createElement(y,e);var a=(0,i.MN)(t);return n.createElement("section",{className:(0,c.Z)("row",r)},a.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(d,{item:e}))})))}},79088:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=r(87462),c=r(63366),i=(r(67294),r(3905)),a=r(17661),o=["components"],l={},u="\u533a\u5757\u94fe",s={unversionedId:"blockchain/index",id:"blockchain/index",title:"\u533a\u5757\u94fe",description:"",source:"@site/docs/blockchain/index.md",sourceDirName:"blockchain",slug:"/blockchain/",permalink:"/docs/blockchain/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u7840",permalink:"/docs/big-data/base"},next:{title:"FileCoin",permalink:"/docs/blockchain/filecoin/"}},f={},p=[],m={toc:p},d="wrapper";function y(e){var t=e.components,r=(0,c.Z)(e,o);return(0,i.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u533a\u5757\u94fe"},"\u533a\u5757\u94fe"),(0,i.kt)(a.Z,{mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);