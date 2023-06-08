"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[77691],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=s(r),m=c,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=r.length,i=new Array(a);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[f]="string"==typeof e?e:c,i[1]=o;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17661:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(67294),c=r(86010),a=r(54715),i=r(83699),o=r(2735),l=r(97325),s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){var t=e.href,r=e.children;return n.createElement(i.Z,{href:t,className:(0,c.Z)("card padding--lg",s.cardContainer)},r)}function f(e){var t=e.href,r=e.icon,a=e.title,i=e.description;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,c.Z)("text--truncate",s.cardTitle),title:a},r," ",a),i&&n.createElement("p",{className:(0,c.Z)("text--truncate",s.cardDescription),title:i},i))}function p(e){var t,r=e.item,c=(0,a.Wl)(r);return c?n.createElement(f,{href:c,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function m(e){var t,r,c=e.item,i=(0,o.Z)(c.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,a.xz)(null!=(t=c.docId)?t:void 0);return n.createElement(f,{href:c.href,icon:i,title:c.label,description:null!=(r=c.description)?r:null==l?void 0:l.description})}function d(e){var t=e.item;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function y(e){var t=e.className,r=(0,a.jA)();return n.createElement(g,{items:r.items,className:t})}function g(e){var t=e.items,r=e.className;if(!t)return n.createElement(y,e);var i=(0,a.MN)(t);return n.createElement("section",{className:(0,c.Z)("row",r)},i.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(d,{item:e}))})))}},37726:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=r(87462),c=r(63366),a=(r(67294),r(3905)),i=r(17661),o=["components"],l={},s="\u7ecf\u5178\u7b97\u6cd5",u={unversionedId:"algo/classic/index",id:"algo/classic/index",title:"\u7ecf\u5178\u7b97\u6cd5",description:"",source:"@site/docs/algo/classic/index.md",sourceDirName:"algo/classic",slug:"/algo/classic/",permalink:"/docs/algo/classic/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5",permalink:"/docs/algo/"},next:{title:"\u7ecf\u5178\u7b97\u6cd5",permalink:"/docs/algo/classic/base"}},f={},p=[],m={toc:p},d="wrapper";function y(e){var t=e.components,r=(0,c.Z)(e,o);return(0,a.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7ecf\u5178\u7b97\u6cd5"},"\u7ecf\u5178\u7b97\u6cd5"),(0,a.kt)(i.Z,{mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);