"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[62142],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,p=m["".concat(l,".").concat(f)]||m[f]||d[f]||c;return r?n.createElement(p,i(i({ref:t},u),{},{components:r})):n.createElement(p,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<c;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17661:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(67294),a=r(86010),c=r(78259),i=r(83699),o=r(2735),l=r(97325),s="cardContainer_fWXF",u="cardTitle_rnsV",d="cardDescription_PWke";function m(e){var t=e.href,r=e.children;return n.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",s)},r)}function f(e){var t=e.href,r=e.icon,c=e.title,i=e.description;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",u),title:c},r," ",c),i&&n.createElement("p",{className:(0,a.Z)("text--truncate",d),title:i},i))}function p(e){var t,r=e.item,a=(0,c.Wl)(r);return a?n.createElement(f,{href:a,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function y(e){var t,r,a=e.item,i=(0,o.Z)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,c.xz)(null!=(t=a.docId)?t:void 0);return n.createElement(f,{href:a.href,icon:i,title:a.label,description:null!=(r=a.description)?r:null==l?void 0:l.description})}function b(e){var t=e.item;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function v(e){var t=e.className,r=(0,c.jA)();return n.createElement(h,{items:r.items,className:t})}function h(e){var t=e.items,r=e.className;if(!t)return n.createElement(v,e);var i=(0,c.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},i.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(b,{item:e}))})))}},40424:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var n=r(87462),a=r(63366),c=(r(67294),r(3905)),i=r(17661),o=["components"],l={},s="\u6e90\u7801\u5b66\u4e60",u={unversionedId:"backend/database/mysql/source/index",id:"backend/database/mysql/source/index",title:"\u6e90\u7801\u5b66\u4e60",description:"",source:"@site/docs/backend/database/mysql/source/index.md",sourceDirName:"backend/database/mysql/source",slug:"/backend/database/mysql/source/",permalink:"/docs/backend/database/mysql/source/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u51c6\u6d4b\u8bd5",permalink:"/docs/backend/database/mysql/optimize/test"},next:{title:"Redis",permalink:"/docs/backend/database/redis/"}},d={},m=[],f={toc:m};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"\u6e90\u7801\u5b66\u4e60"},"\u6e90\u7801\u5b66\u4e60"),(0,c.kt)(i.Z,{mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);