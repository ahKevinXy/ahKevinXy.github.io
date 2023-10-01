"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[23476],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(r),p=a,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||i;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},17661:function(e,t,r){r.d(t,{Z:function(){return b}});var n=r(67294),a=r(86010),i=r(78259),c=r(83699),o=r(2735),l=r(97325),s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){var t=e.href,r=e.children;return n.createElement(c.Z,{href:t,className:(0,a.Z)("card padding--lg",s.cardContainer)},r)}function m(e){var t=e.href,r=e.icon,i=e.title,c=e.description;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",s.cardTitle),title:i},r," ",i),c&&n.createElement("p",{className:(0,a.Z)("text--truncate",s.cardDescription),title:c},c))}function d(e){var t,r=e.item,a=(0,i.Wl)(r);return a?n.createElement(m,{href:a,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function p(e){var t,r,a=e.item,c=(0,o.Z)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,i.xz)(null!=(t=a.docId)?t:void 0);return n.createElement(m,{href:a.href,icon:c,title:a.label,description:null!=(r=a.description)?r:null==l?void 0:l.description})}function f(e){var t=e.item;switch(t.type){case"link":return n.createElement(p,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function y(e){var t=e.className,r=(0,i.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){var t=e.items,r=e.className;if(!t)return n.createElement(y,e);var c=(0,i.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},c.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e}))})))}},15667:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),c=r(17661),o=["components"],l={},s="MySQL \u4f18\u5316",u={unversionedId:"backend/database/mysql/optimize/index",id:"backend/database/mysql/optimize/index",title:"MySQL \u4f18\u5316",description:"\u63d2\u4ef6\u5f0f",source:"@site/docs/backend/database/mysql/optimize/index.md",sourceDirName:"backend/database/mysql/optimize",slug:"/backend/database/mysql/optimize/",permalink:"/docs/backend/database/mysql/optimize/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5b98\u65b9\u6587\u6863",permalink:"/docs/backend/database/mysql/offical"},next:{title:"\u786c\u4ef6\u4f18\u5316",permalink:"/docs/backend/database/mysql/optimize/hardware"}},m={},d=[{value:"\u63d2\u4ef6\u5f0f",id:"\u63d2\u4ef6\u5f0f",level:2},{value:"MySQL \u4f53\u7cfb\u7ed3\u6784",id:"mysql-\u4f53\u7cfb\u7ed3\u6784",level:2}],p={toc:d},f="wrapper";function y(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)(f,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mysql-\u4f18\u5316"},"MySQL \u4f18\u5316"),(0,i.kt)("h2",{id:"\u63d2\u4ef6\u5f0f"},"\u63d2\u4ef6\u5f0f"),(0,i.kt)("h2",{id:"mysql-\u4f53\u7cfb\u7ed3\u6784"},"MySQL \u4f53\u7cfb\u7ed3\u6784"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5ba2\u6237\u7aef"),(0,i.kt)("li",{parentName:"ol"},"MySQL \u670d\u52a1\u5c42 \uff08\u8fde\u63a5\u7ba1\u7406  \u67e5\u8be2\u7f13\u5b58  \u67e5\u8be2\u89e3\u6790  \u67e5\u8be2\u4f18\u5316\u5668\uff09"),(0,i.kt)("li",{parentName:"ol"},"\u5b58\u50a8\u5f15\u64ce \uff08\u5b58\u50a8\u5f15\u64ce\u662f\u9488\u5bf9\u4e8e\u8868 \u800c\u4e0d\u662f\u9488\u5bf9\u5e93\uff0c\u4e00\u4e2a\u5e93\u53ef\u4ee5\u6709\u591a\u4e2a\u5b58\u50a8\u5f15\u64ce\uff09")),(0,i.kt)(c.Z,{mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);