"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[22751],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,c=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(n),p=i,m=d["".concat(l,".").concat(p)]||d[p]||f[p]||c;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=n.length,o=new Array(c);o[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:i,o[1]=a;for(var u=2;u<c;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},17661:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(67294),i=n(86010),c=n(54715),o=n(83699),a=n(2735),l=n(97325),u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function s(e){var t=e.href,n=e.children;return r.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",u.cardContainer)},n)}function d(e){var t=e.href,n=e.icon,c=e.title,o=e.description;return r.createElement(s,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",u.cardTitle),title:c},n," ",c),o&&r.createElement("p",{className:(0,i.Z)("text--truncate",u.cardDescription),title:o},o))}function f(e){var t,n=e.item,i=(0,c.Wl)(n);return i?r.createElement(d,{href:i,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:null!=(t=n.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function p(e){var t,n,i=e.item,o=(0,a.Z)(i.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,c.xz)(null!=(t=i.docId)?t:void 0);return r.createElement(d,{href:i.href,icon:o,title:i.label,description:null!=(n=i.description)?n:null==l?void 0:l.description})}function m(e){var t=e.item;switch(t.type){case"link":return r.createElement(p,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){var t=e.className,n=(0,c.jA)();return r.createElement(y,{items:n.items,className:t})}function y(e){var t=e.items,n=e.className;if(!t)return r.createElement(g,e);var o=(0,c.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},o.map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(m,{item:e}))})))}},50466:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return f}});var r=n(87462),i=n(63366),c=(n(67294),n(3905)),o=n(17661),a=["components"],l={},u="Gin \u6846\u67b6",s={unversionedId:"backend/go/gin/index",id:"backend/go/gin/index",title:"Gin \u6846\u67b6",description:"",source:"@site/docs/backend/go/gin/index.md",sourceDirName:"backend/go/gin",slug:"/backend/go/gin/",permalink:"/docs/backend/go/gin/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Swag Go",permalink:"/docs/backend/go/doc/swaggo"},next:{title:"gin \u5b66\u4e60",permalink:"/docs/backend/go/gin/base"}},d={},f=[],p={toc:f},m="wrapper";function g(e){var t=e.components,n=(0,i.Z)(e,a);return(0,c.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"gin-\u6846\u67b6"},"Gin \u6846\u67b6"),(0,c.kt)(o.Z,{mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);