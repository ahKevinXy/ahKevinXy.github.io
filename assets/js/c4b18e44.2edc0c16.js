"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[13377],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=u(n),m=c,p=f["".concat(l,".").concat(m)]||f[m]||d[m]||a;return n?r.createElement(p,o(o({ref:t},s),{},{components:n})):r.createElement(p,o({ref:t},s))}));function m(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=n.length,o=new Array(a);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:c,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},17661:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(67294),c=n(86010),a=n(78259),o=n(83699),i=n(2735),l=n(97325),u="cardContainer_fWXF",s="cardTitle_rnsV",d="cardDescription_PWke";function f(e){var t=e.href,n=e.children;return r.createElement(o.Z,{href:t,className:(0,c.Z)("card padding--lg",u)},n)}function m(e){var t=e.href,n=e.icon,a=e.title,o=e.description;return r.createElement(f,{href:t},r.createElement("h2",{className:(0,c.Z)("text--truncate",s),title:a},n," ",a),o&&r.createElement("p",{className:(0,c.Z)("text--truncate",d),title:o},o))}function p(e){var t,n=e.item,c=(0,a.Wl)(n);return c?r.createElement(m,{href:c,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:null!=(t=n.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function y(e){var t,n,c=e.item,o=(0,i.Z)(c.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,a.xz)(null!=(t=c.docId)?t:void 0);return r.createElement(m,{href:c.href,icon:o,title:c.label,description:null!=(n=c.description)?n:null==l?void 0:l.description})}function b(e){var t=e.item;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(p,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){var t=e.className,n=(0,a.jA)();return r.createElement(v,{items:n.items,className:t})}function v(e){var t=e.items,n=e.className;if(!t)return r.createElement(g,e);var o=(0,a.MN)(t);return r.createElement("section",{className:(0,c.Z)("row",n)},o.map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(b,{item:e}))})))}},66539:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return f}});var r=n(87462),c=n(63366),a=(n(67294),n(3905)),o=n(17661),i=["components"],l={},u="\u6bcf\u65e5\u4e00\u5e93",s={unversionedId:"backend/go/day/index",id:"backend/go/day/index",title:"\u6bcf\u65e5\u4e00\u5e93",description:"",source:"@site/docs/backend/go/day/index.md",sourceDirName:"backend/go/day",slug:"/backend/go/day/",permalink:"/docs/backend/go/day/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u65f6\u95f4\u8f6e",permalink:"/docs/backend/go/code/timingwheel/"},next:{title:"\u7b2c\u4e00\u5929",permalink:"/docs/backend/go/day/base"}},d={},f=[],m={toc:f};function p(e){var t=e.components,n=(0,c.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6bcf\u65e5\u4e00\u5e93"},"\u6bcf\u65e5\u4e00\u5e93"),(0,a.kt)(o.Z,{mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);