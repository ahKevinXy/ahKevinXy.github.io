"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[39992],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,c=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||c;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=n.length,a=new Array(c);a[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var u=2;u<c;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},17661:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(67294),i=n(86010),c=n(54715),a=n(83699),o=n(2735),l=n(97325),u="cardContainer_fWXF",s="cardTitle_rnsV",f="cardDescription_PWke";function p(e){var t=e.href,n=e.children;return r.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",u)},n)}function d(e){var t=e.href,n=e.icon,c=e.title,a=e.description;return r.createElement(p,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",s),title:c},n," ",c),a&&r.createElement("p",{className:(0,i.Z)("text--truncate",f),title:a},a))}function m(e){var t,n=e.item,i=(0,c.Wl)(n);return i?r.createElement(d,{href:i,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:null!=(t=n.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function y(e){var t,n,i=e.item,a=(0,o.Z)(i.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,c.xz)(null!=(t=i.docId)?t:void 0);return r.createElement(d,{href:i.href,icon:a,title:i.label,description:null!=(n=i.description)?n:null==l?void 0:l.description})}function g(e){var t=e.item;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(m,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){var t=e.className,n=(0,c.jA)();return r.createElement(v,{items:n.items,className:t})}function v(e){var t=e.items,n=e.className;if(!t)return r.createElement(b,e);var a=(0,c.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},a.map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(g,{item:e}))})))}},42929:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(87462),i=n(63366),c=(n(67294),n(3905)),a=n(17661),o=["components"],l={},u="git",s={unversionedId:"backend/git/index",id:"backend/git/index",title:"git",description:"Git \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u5206\u5e03\u5f0f\u7248\u672c\u63a7\u5236\u7cfb\u7edf\uff0c\u7528\u4e8e\u654f\u6377\u9ad8\u6548\u5730\u5904\u7406\u4efb\u4f55\u6216\u5c0f\u6216\u5927\u7684\u9879\u76ee\u3002",source:"@site/docs/backend/git/index.md",sourceDirName:"backend/git",slug:"/backend/git/",permalink:"/docs/backend/git/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u7840",permalink:"/docs/backend/docs/base"},next:{title:"git \u57fa\u7840",permalink:"/docs/backend/git/base"}},f={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,c.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"git"},"git"),(0,c.kt)("p",null,"Git \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u5206\u5e03\u5f0f\u7248\u672c\u63a7\u5236\u7cfb\u7edf\uff0c\u7528\u4e8e\u654f\u6377\u9ad8\u6548\u5730\u5904\u7406\u4efb\u4f55\u6216\u5c0f\u6216\u5927\u7684\u9879\u76ee\u3002"),(0,c.kt)("p",null,"Git \u662f Linus Torvalds \u4e3a\u4e86\u5e2e\u52a9\u7ba1\u7406 Linux \u5185\u6838\u5f00\u53d1\u800c\u5f00\u53d1\u7684\u4e00\u4e2a\u5f00\u653e\u6e90\u7801\u7684\u7248\u672c\u63a7\u5236\u8f6f\u4ef6\u3002"),(0,c.kt)("p",null,"Git \u4e0e\u5e38\u7528\u7684\u7248\u672c\u63a7\u5236\u5de5\u5177 CVS, Subversion \u7b49\u4e0d\u540c\uff0c\u5b83\u91c7\u7528\u4e86\u5206\u5e03\u5f0f\u7248\u672c\u5e93\u7684\u65b9\u5f0f\uff0c\u4e0d\u5fc5\u670d\u52a1\u5668\u7aef\u8f6f\u4ef6\u652f\u6301\u3002"),(0,c.kt)(a.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);