"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[24172],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return p}});var n=r(67294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=l(r),p=c,d=m["".concat(s,".").concat(p)]||m[p]||f[p]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function p(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=r.length,i=new Array(o);i[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:c,i[1]=a;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17661:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(67294),c=r(86010),o=r(78259),i=r(83699),a=r(2735),s=r(97325),l="cardContainer_fWXF",u="cardTitle_rnsV",f="cardDescription_PWke";function m(e){var t=e.href,r=e.children;return n.createElement(i.Z,{href:t,className:(0,c.Z)("card padding--lg",l)},r)}function p(e){var t=e.href,r=e.icon,o=e.title,i=e.description;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,c.Z)("text--truncate",u),title:o},r," ",o),i&&n.createElement("p",{className:(0,c.Z)("text--truncate",f),title:i},i))}function d(e){var t,r=e.item,c=(0,o.Wl)(r);return c?n.createElement(p,{href:c,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function y(e){var t,r,c=e.item,i=(0,a.Z)(c.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,o.xz)(null!=(t=c.docId)?t:void 0);return n.createElement(p,{href:c.href,icon:i,title:c.label,description:null!=(r=c.description)?r:null==s?void 0:s.description})}function v(e){var t=e.item;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){var t=e.className,r=(0,o.jA)();return n.createElement(g,{items:r.items,className:t})}function g(e){var t=e.items,r=e.className;if(!t)return n.createElement(b,e);var i=(0,o.MN)(t);return n.createElement("section",{className:(0,c.Z)("row",r)},i.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(v,{item:e}))})))}},14241:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var n=r(87462),c=r(63366),o=(r(67294),r(3905)),i=r(17661),a=["components"],s={id:"css"},l="CSS",u={unversionedId:"front/css/css",id:"front/css/css",title:"CSS",description:"",source:"@site/docs/front/css/index.md",sourceDirName:"front/css",slug:"/front/css/",permalink:"/docs/front/css/",draft:!1,tags:[],version:"current",frontMatter:{id:"css"},sidebar:"tutorialSidebar",previous:{title:"\u535a\u5ba2",permalink:"/docs/front/blog/"},next:{title:"CSS2 \u57fa\u7840",permalink:"/docs/front/css/css2/"}},f={},m=[],p={toc:m};function d(e){var t=e.components,r=(0,c.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"css"},"CSS"),(0,o.kt)(i.Z,{mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);