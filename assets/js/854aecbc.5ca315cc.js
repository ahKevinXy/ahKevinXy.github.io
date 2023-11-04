"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[19347],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,c=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(r),d=i,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||c;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=r.length,a=new Array(c);a[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:i,a[1]=o;for(var s=2;s<c;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},17661:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(67294),i=r(86010),c=r(78259),a=r(83699),o=r(2735),l=r(97325);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",s.cardContainer)},r)}function p(e){let{href:t,icon:r,title:c,description:a}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",s.cardTitle),title:c},r," ",c),a&&n.createElement("p",{className:(0,i.Z)("text--truncate",s.cardDescription),title:a},a))}function m(e){var t;let{item:r}=e;const i=(0,c.Wl)(r);return i?n.createElement(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function d(e){var t,r;let{item:i}=e;const a=(0,o.Z)(i.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,c.xz)(null!=(t=i.docId)?t:void 0);return n.createElement(p,{href:i.href,icon:a,title:i.label,description:null!=(r=i.description)?r:null==l?void 0:l.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(d,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function y(e){let{className:t}=e;const r=(0,c.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const a=(0,c.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},98441:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(87462),i=(r(67294),r(3905)),c=r(17661);const a={},o="\u670d\u52a1",l={unversionedId:"internet/\u670d\u52a1/index",id:"internet/\u670d\u52a1/index",title:"\u670d\u52a1",description:"",source:"@site/docs/internet/\u670d\u52a1/index.md",sourceDirName:"internet/\u670d\u52a1",slug:"/internet/\u670d\u52a1/",permalink:"/docs/internet/\u670d\u52a1/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7f51\u7edc\u57fa\u7840",permalink:"/docs/internet/base"},next:{title:"DHCP \u670d\u52a1",permalink:"/docs/internet/\u670d\u52a1/DHCP"}},s={},u=[],p={toc:u},m="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u670d\u52a1"},"\u670d\u52a1"),(0,i.kt)(c.Z,{mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);