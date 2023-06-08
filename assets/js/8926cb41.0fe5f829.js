"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[23476],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),p=a,f=d["".concat(l,".").concat(p)]||d[p]||m[p]||i;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17661:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(67294),a=n(86010),i=n(54715),c=n(83699),o=n(2735),l=n(97325),s="cardContainer_fWXF",u="cardTitle_rnsV",m="cardDescription_PWke";function d(e){var t=e.href,n=e.children;return r.createElement(c.Z,{href:t,className:(0,a.Z)("card padding--lg",s)},n)}function p(e){var t=e.href,n=e.icon,i=e.title,c=e.description;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",u),title:i},n," ",i),c&&r.createElement("p",{className:(0,a.Z)("text--truncate",m),title:c},c))}function f(e){var t,n=e.item,a=(0,i.Wl)(n);return a?r.createElement(p,{href:a,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:null!=(t=n.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function y(e){var t,n,a=e.item,c=(0,o.Z)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,i.xz)(null!=(t=a.docId)?t:void 0);return r.createElement(p,{href:a.href,icon:c,title:a.label,description:null!=(n=a.description)?n:null==l?void 0:l.description})}function b(e){var t=e.item;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function v(e){var t=e.className,n=(0,i.jA)();return r.createElement(h,{items:n.items,className:t})}function h(e){var t=e.items,n=e.className;if(!t)return r.createElement(v,e);var c=(0,i.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},c.map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(b,{item:e}))})))}},15667:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),c=n(17661),o=["components"],l={},s="MySQL \u4f18\u5316",u={unversionedId:"backend/database/mysql/optimize/index",id:"backend/database/mysql/optimize/index",title:"MySQL \u4f18\u5316",description:"\u63d2\u4ef6\u5f0f",source:"@site/docs/backend/database/mysql/optimize/index.md",sourceDirName:"backend/database/mysql/optimize",slug:"/backend/database/mysql/optimize/",permalink:"/docs/backend/database/mysql/optimize/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5b98\u65b9\u6587\u6863",permalink:"/docs/backend/database/mysql/offical"},next:{title:"\u786c\u4ef6\u4f18\u5316",permalink:"/docs/backend/database/mysql/optimize/hardware"}},m={},d=[{value:"\u63d2\u4ef6\u5f0f",id:"\u63d2\u4ef6\u5f0f",level:2},{value:"MySQL \u4f53\u7cfb\u7ed3\u6784",id:"mysql-\u4f53\u7cfb\u7ed3\u6784",level:2}],p={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mysql-\u4f18\u5316"},"MySQL \u4f18\u5316"),(0,i.kt)("h2",{id:"\u63d2\u4ef6\u5f0f"},"\u63d2\u4ef6\u5f0f"),(0,i.kt)("h2",{id:"mysql-\u4f53\u7cfb\u7ed3\u6784"},"MySQL \u4f53\u7cfb\u7ed3\u6784"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5ba2\u6237\u7aef"),(0,i.kt)("li",{parentName:"ol"},"MySQL \u670d\u52a1\u5c42 \uff08\u8fde\u63a5\u7ba1\u7406  \u67e5\u8be2\u7f13\u5b58  \u67e5\u8be2\u89e3\u6790  \u67e5\u8be2\u4f18\u5316\u5668\uff09"),(0,i.kt)("li",{parentName:"ol"},"\u5b58\u50a8\u5f15\u64ce \uff08\u5b58\u50a8\u5f15\u64ce\u662f\u9488\u5bf9\u4e8e\u8868 \u800c\u4e0d\u662f\u9488\u5bf9\u5e93\uff0c\u4e00\u4e2a\u5e93\u53ef\u4ee5\u6709\u591a\u4e2a\u5b58\u50a8\u5f15\u64ce\uff09")),(0,i.kt)(c.Z,{mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);