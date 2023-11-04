"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[33110],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(r),p=c,f=u["".concat(l,".").concat(p)]||u[p]||m[p]||i;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function f(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var i=r.length,a=new Array(i);a[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:c,a[1]=o;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},17661:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(67294),c=r(86010),i=r(78259),a=r(83699),o=r(2735),l=r(97325);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,c.Z)("card padding--lg",s.cardContainer)},r)}function u(e){let{href:t,icon:r,title:i,description:a}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,c.Z)("text--truncate",s.cardTitle),title:i},r," ",i),a&&n.createElement("p",{className:(0,c.Z)("text--truncate",s.cardDescription),title:a},a))}function m(e){var t;let{item:r}=e;const c=(0,i.Wl)(r);return c?n.createElement(u,{href:c,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function p(e){var t,r;let{item:c}=e;const a=(0,o.Z)(c.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,i.xz)(null!=(t=c.docId)?t:void 0);return n.createElement(u,{href:c.href,icon:a,title:c.label,description:null!=(r=c.description)?r:null==l?void 0:l.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(p,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function y(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const a=(0,i.MN)(t);return n.createElement("section",{className:(0,c.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},9608:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=r(87462),c=(r(67294),r(3905)),i=r(17661);const a={},o="\u5d4c\u5165\u5f0f",l={unversionedId:"embedded/index",id:"embedded/index",title:"\u5d4c\u5165\u5f0f",description:"",source:"@site/docs/embedded/index.md",sourceDirName:"embedded",slug:"/embedded/",permalink:"/docs/embedded/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5b98\u65b9\u6587\u6863",permalink:"/docs/cross-platform/uniapp/office"},next:{title:"\u57fa\u7840",permalink:"/docs/embedded/base"}},s={},d=[],u={toc:d},m="wrapper";function p(e){let{components:t,...r}=e;return(0,c.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"\u5d4c\u5165\u5f0f"},"\u5d4c\u5165\u5f0f"),(0,c.kt)(i.Z,{mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);