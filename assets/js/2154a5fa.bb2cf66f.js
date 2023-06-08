"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[96599],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=u(r),m=c,p=f["".concat(l,".").concat(m)]||f[m]||d[m]||o;return r?n.createElement(p,a(a({ref:t},s),{},{components:r})):n.createElement(p,a({ref:t},s))}));function m(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=r.length,a=new Array(o);a[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:c,a[1]=i;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},17661:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(67294),c=r(86010),o=r(54715),a=r(83699),i=r(2735),l=r(97325),u="cardContainer_fWXF",s="cardTitle_rnsV",d="cardDescription_PWke";function f(e){var t=e.href,r=e.children;return n.createElement(a.Z,{href:t,className:(0,c.Z)("card padding--lg",u)},r)}function m(e){var t=e.href,r=e.icon,o=e.title,a=e.description;return n.createElement(f,{href:t},n.createElement("h2",{className:(0,c.Z)("text--truncate",s),title:o},r," ",o),a&&n.createElement("p",{className:(0,c.Z)("text--truncate",d),title:a},a))}function p(e){var t,r=e.item,c=(0,o.Wl)(r);return c?n.createElement(m,{href:c,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function y(e){var t,r,c=e.item,a=(0,i.Z)(c.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,o.xz)(null!=(t=c.docId)?t:void 0);return n.createElement(m,{href:c.href,icon:a,title:c.label,description:null!=(r=c.description)?r:null==l?void 0:l.description})}function b(e){var t=e.item;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function k(e){var t=e.className,r=(0,o.jA)();return n.createElement(v,{items:r.items,className:t})}function v(e){var t=e.items,r=e.className;if(!t)return n.createElement(k,e);var a=(0,o.MN)(t);return n.createElement("section",{className:(0,c.Z)("row",r)},a.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(b,{item:e}))})))}},80924:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return f}});var n=r(87462),c=r(63366),o=(r(67294),r(3905)),a=r(17661),i=["components"],l={},u="docker",s={unversionedId:"backend/docker/index",id:"backend/docker/index",title:"docker",description:"",source:"@site/docs/backend/docker/index.md",sourceDirName:"backend/docker",slug:"/backend/docker/",permalink:"/docs/backend/docker/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6e90\u7801\u5b66\u4e60",permalink:"/docs/backend/database/redis/source/"},next:{title:"docker \u57fa\u7840\u77e5\u8bc6",permalink:"/docs/backend/docker/base"}},d={},f=[],m={toc:f};function p(e){var t=e.components,r=(0,c.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docker"},"docker"),(0,o.kt)(a.Z,{mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);