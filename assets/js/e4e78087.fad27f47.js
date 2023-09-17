"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[79136],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,i=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=s(r),f=c,d=p["".concat(u,".").concat(f)]||p[f]||m[f]||i;return r?n.createElement(d,o(o({ref:t},l),{},{components:r})):n.createElement(d,o({ref:t},l))}));function d(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var i=r.length,o=new Array(i);o[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[p]="string"==typeof e?e:c,o[1]=a;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},17661:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(67294),c=r(86010),i=r(78259),o=r(83699),a=r(2735),u=r(97325),s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function l(e){var t=e.href,r=e.children;return n.createElement(o.Z,{href:t,className:(0,c.Z)("card padding--lg",s.cardContainer)},r)}function p(e){var t=e.href,r=e.icon,i=e.title,o=e.description;return n.createElement(l,{href:t},n.createElement("h2",{className:(0,c.Z)("text--truncate",s.cardTitle),title:i},r," ",i),o&&n.createElement("p",{className:(0,c.Z)("text--truncate",s.cardDescription),title:o},o))}function m(e){var t,r=e.item,c=(0,i.Wl)(r);return c?n.createElement(p,{href:c,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,u.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function f(e){var t,r,c=e.item,o=(0,a.Z)(c.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",u=(0,i.xz)(null!=(t=c.docId)?t:void 0);return n.createElement(p,{href:c.href,icon:o,title:c.label,description:null!=(r=c.description)?r:null==u?void 0:u.description})}function d(e){var t=e.item;switch(t.type){case"link":return n.createElement(f,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function y(e){var t=e.className,r=(0,i.jA)();return n.createElement(v,{items:r.items,className:t})}function v(e){var t=e.items,r=e.className;if(!t)return n.createElement(y,e);var o=(0,i.MN)(t);return n.createElement("section",{className:(0,c.Z)("row",r)},o.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(d,{item:e}))})))}},31977:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return m}});var n=r(87462),c=r(63366),i=(r(67294),r(3905)),o=r(17661),a=["components"],u={},s="PPT\u5927\u4f6c\u5de5\u7a0b\u5e08",l={unversionedId:"system-structure/ppt/index",id:"system-structure/ppt/index",title:"PPT\u5927\u4f6c\u5de5\u7a0b\u5e08",description:"",source:"@site/docs/system-structure/ppt/index.md",sourceDirName:"system-structure/ppt",slug:"/system-structure/ppt/",permalink:"/docs/system-structure/ppt/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u67b6\u6784\u5e08\u6587\u6863",permalink:"/docs/system-structure/docs/"},next:{title:"\u6d4b\u8bd5",permalink:"/docs/test/"}},p={},m=[],f={toc:m},d="wrapper";function y(e){var t=e.components,r=(0,c.Z)(e,a);return(0,i.kt)(d,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ppt\u5927\u4f6c\u5de5\u7a0b\u5e08"},"PPT\u5927\u4f6c\u5de5\u7a0b\u5e08"),(0,i.kt)(o.Z,{mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);