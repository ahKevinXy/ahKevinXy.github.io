"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[2655],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=s(r),m=a,p=f["".concat(l,".").concat(m)]||f[m]||d[m]||i;return r?n.createElement(p,c(c({ref:t},u),{},{components:r})):n.createElement(p,c({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},17661:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(67294),a=r(86010),i=r(78259),c=r(83699),o=r(2735),l=r(97325),s="cardContainer_fWXF",u="cardTitle_rnsV",d="cardDescription_PWke";function f(e){var t=e.href,r=e.children;return n.createElement(c.Z,{href:t,className:(0,a.Z)("card padding--lg",s)},r)}function m(e){var t=e.href,r=e.icon,i=e.title,c=e.description;return n.createElement(f,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",u),title:i},r," ",i),c&&n.createElement("p",{className:(0,a.Z)("text--truncate",d),title:c},c))}function p(e){var t,r=e.item,a=(0,i.Wl)(r);return a?n.createElement(m,{href:a,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function b(e){var t,r,a=e.item,c=(0,o.Z)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,i.xz)(null!=(t=a.docId)?t:void 0);return n.createElement(m,{href:a.href,icon:c,title:a.label,description:null!=(r=a.description)?r:null==l?void 0:l.description})}function y(e){var t=e.item;switch(t.type){case"link":return n.createElement(b,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function v(e){var t=e.className,r=(0,i.jA)();return n.createElement(h,{items:r.items,className:t})}function h(e){var t=e.items,r=e.className;if(!t)return n.createElement(v,e);var c=(0,i.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},c.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(y,{item:e}))})))}},51472:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return f}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),c=r(17661),o=["components"],l={},s="\u9762\u8bd5",u={unversionedId:"backend/database/redis/interview/index",id:"backend/database/redis/interview/index",title:"\u9762\u8bd5",description:"",source:"@site/docs/backend/database/redis/interview/index.md",sourceDirName:"backend/database/redis/interview",slug:"/backend/database/redis/interview/",permalink:"/docs/backend/database/redis/interview/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Redis",permalink:"/docs/backend/database/redis/"},next:{title:"\u5b98\u65b9\u6587\u6863",permalink:"/docs/backend/database/redis/offical"}},d={},f=[],m={toc:f};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u9762\u8bd5"},"\u9762\u8bd5"),(0,i.kt)(c.Z,{mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);