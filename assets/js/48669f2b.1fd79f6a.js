"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[3196],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=u(r),p=i,d=m["".concat(l,".").concat(p)]||m[p]||f[p]||o;return r?n.createElement(d,c(c({ref:t},s),{},{components:r})):n.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[m]="string"==typeof e?e:i,c[1]=a;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},17661:function(e,t,r){r.d(t,{Z:function(){return b}});var n=r(67294),i=r(86010),o=r(54715),c=r(83699),a=r(2735),l=r(97325),u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function s(e){var t=e.href,r=e.children;return n.createElement(c.Z,{href:t,className:(0,i.Z)("card padding--lg",u.cardContainer)},r)}function m(e){var t=e.href,r=e.icon,o=e.title,c=e.description;return n.createElement(s,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",u.cardTitle),title:o},r," ",o),c&&n.createElement("p",{className:(0,i.Z)("text--truncate",u.cardDescription),title:c},c))}function f(e){var t,r=e.item,i=(0,o.Wl)(r);return i?n.createElement(m,{href:i,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function p(e){var t,r,i=e.item,c=(0,a.Z)(i.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,o.xz)(null!=(t=i.docId)?t:void 0);return n.createElement(m,{href:i.href,icon:c,title:i.label,description:null!=(r=i.description)?r:null==l?void 0:l.description})}function d(e){var t=e.item;switch(t.type){case"link":return n.createElement(p,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function y(e){var t=e.className,r=(0,o.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){var t=e.items,r=e.className;if(!t)return n.createElement(y,e);var c=(0,o.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},c.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(d,{item:e}))})))}},65640:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return f}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),c=r(17661),a=["components"],l={},u="iOS",s={unversionedId:"mobile/ios/index",id:"mobile/ios/index",title:"iOS",description:"",source:"@site/docs/mobile/ios/index.md",sourceDirName:"mobile/ios",slug:"/mobile/ios/",permalink:"/docs/mobile/ios/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Android",permalink:"/docs/mobile/android/"},next:{title:"\u5c0f\u7a0b\u5e8f",permalink:"/docs/mobile/miniprog/"}},m={},f=[],p={toc:f},d="wrapper";function y(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ios"},"iOS"),(0,o.kt)(c.Z,{mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);