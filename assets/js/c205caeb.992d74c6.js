"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[24938],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,c=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=u(n),p=i,d=m["".concat(l,".").concat(p)]||m[p]||f[p]||c;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=n.length,o=new Array(c);o[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var u=2;u<c;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17661:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(67294),i=n(86010),c=n(78259),o=n(83699),a=n(2735),l=n(97325),u="cardContainer_fWXF",s="cardTitle_rnsV",f="cardDescription_PWke";function m(e){var t=e.href,n=e.children;return r.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",u)},n)}function p(e){var t=e.href,n=e.icon,c=e.title,o=e.description;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",s),title:c},n," ",c),o&&r.createElement("p",{className:(0,i.Z)("text--truncate",f),title:o},o))}function d(e){var t,n=e.item,i=(0,c.Wl)(n);return i?r.createElement(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:null!=(t=n.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function y(e){var t,n,i=e.item,o=(0,a.Z)(i.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,c.xz)(null!=(t=i.docId)?t:void 0);return r.createElement(p,{href:i.href,icon:o,title:i.label,description:null!=(n=i.description)?n:null==l?void 0:l.description})}function v(e){var t=e.item;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(d,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){var t=e.className,n=(0,c.jA)();return r.createElement(g,{items:n.items,className:t})}function g(e){var t=e.items,n=e.className;if(!t)return r.createElement(b,e);var o=(0,c.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},o.map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(v,{item:e}))})))}},5433:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var r=n(87462),i=n(63366),c=(n(67294),n(3905)),o=n(17661),a=["components"],l={},u="\u9762\u8bd5",s={unversionedId:"backend/go/interview/index",id:"backend/go/interview/index",title:"\u9762\u8bd5",description:"",source:"@site/docs/backend/go/interview/index.md",sourceDirName:"backend/go/interview",slug:"/backend/go/interview/",permalink:"/docs/backend/go/interview/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"utils",permalink:"/docs/backend/go/gin/source/1.7.7/utils"},next:{title:"Go \u9762\u8bd5\u57fa\u7840",permalink:"/docs/backend/go/interview/base"}},f={},m=[],p={toc:m};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"\u9762\u8bd5"},"\u9762\u8bd5"),(0,c.kt)(o.Z,{mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);