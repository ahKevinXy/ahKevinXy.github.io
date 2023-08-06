"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[82086],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,p=m["".concat(l,".").concat(d)]||m[d]||f[d]||i;return r?n.createElement(p,c(c({ref:t},s),{},{components:r})):n.createElement(p,c({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17661:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(67294),o=r(86010),i=r(78259),c=r(83699),a=r(2735),l=r(97325),u="cardContainer_fWXF",s="cardTitle_rnsV",f="cardDescription_PWke";function m(e){var t=e.href,r=e.children;return n.createElement(c.Z,{href:t,className:(0,o.Z)("card padding--lg",u)},r)}function d(e){var t=e.href,r=e.icon,i=e.title,c=e.description;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",s),title:i},r," ",i),c&&n.createElement("p",{className:(0,o.Z)("text--truncate",f),title:c},c))}function p(e){var t,r=e.item,o=(0,i.Wl)(r);return o?n.createElement(d,{href:o,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function y(e){var t,r,o=e.item,c=(0,a.Z)(o.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,i.xz)(null!=(t=o.docId)?t:void 0);return n.createElement(d,{href:o.href,icon:c,title:o.label,description:null!=(r=o.description)?r:null==l?void 0:l.description})}function v(e){var t=e.item;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){var t=e.className,r=(0,i.jA)();return n.createElement(g,{items:r.items,className:t})}function g(e){var t=e.items,r=e.className;if(!t)return n.createElement(b,e);var c=(0,i.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},c.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(v,{item:e}))})))}},6769:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),c=r(17661),a=["components"],l={id:"index",slug:"/front",keywords:["\u524d\u7aef"]},u="\u524d\u7aef",s={unversionedId:"front/index",id:"front/index",title:"\u524d\u7aef",description:"",source:"@site/docs/front/index.md",sourceDirName:"front",slug:"/front",permalink:"/docs/front",draft:!1,tags:[],version:"current",frontMatter:{id:"index",slug:"/front",keywords:["\u524d\u7aef"]},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u7840",permalink:"/docs/embedded/base"},next:{title:"\u57fa\u7840\u77e5\u8bc6",permalink:"/docs/front/base"}},f={},m=[],d={toc:m};function p(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u524d\u7aef"},"\u524d\u7aef"),(0,i.kt)(c.Z,{mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);