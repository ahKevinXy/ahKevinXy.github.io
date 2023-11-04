"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[56710],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17661:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(67294),o=n(86010),a=n(78259),c=n(83699),i=n(2735),l=n(97325);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:n}=e;return r.createElement(c.Z,{href:t,className:(0,o.Z)("card padding--lg",s.cardContainer)},n)}function p(e){let{href:t,icon:n,title:a,description:c}=e;return r.createElement(u,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",s.cardTitle),title:a},n," ",a),c&&r.createElement("p",{className:(0,o.Z)("text--truncate",s.cardDescription),title:c},c))}function m(e){var t;let{item:n}=e;const o=(0,a.Wl)(n);return o?r.createElement(p,{href:o,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:null!=(t=n.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function d(e){var t,n;let{item:o}=e;const c=(0,i.Z)(o.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,a.xz)(null!=(t=o.docId)?t:void 0);return r.createElement(p,{href:o.href,icon:c,title:o.label,description:null!=(n=o.description)?n:null==l?void 0:l.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(d,{item:t});case"category":return r.createElement(m,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){let{className:t}=e;const n=(0,a.jA)();return r.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return r.createElement(g,e);const c=(0,a.MN)(t);return r.createElement("section",{className:(0,o.Z)("row",n)},c.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(f,{item:e})))))}},92869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905)),a=n(17661);const c={},i="Go",l={unversionedId:"backend/go/index",id:"backend/go/index",title:"Go",description:"go\u8bed\u8a00\u7b80\u4ecb",source:"@site/docs/backend/go/index.md",sourceDirName:"backend/go",slug:"/backend/go/",permalink:"/docs/backend/go/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"git \u63d0\u5347",permalink:"/docs/backend/git/up"},next:{title:"Go \u8bed\u8a00\u57fa\u7840",permalink:"/docs/backend/go/base/"}},s={},u=[{value:"go\u8bed\u8a00\u7b80\u4ecb",id:"go\u8bed\u8a00\u7b80\u4ecb",level:2}],p={toc:u},m="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"go"},"Go"),(0,o.kt)("h2",{id:"go\u8bed\u8a00\u7b80\u4ecb"},"go\u8bed\u8a00\u7b80\u4ecb"),(0,o.kt)("p",null,"Go \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u7f16\u7a0b\u8bed\u8a00\uff0c\u5b83\u80fd\u8ba9\u6784\u9020\u7b80\u5355\u3001\u53ef\u9760\u4e14\u9ad8\u6548\u7684\u8f6f\u4ef6\u53d8\u5f97\u5bb9\u6613\u3002"),(0,o.kt)("p",null,"Go \u662f\u4ece 2007 \u5e74\u672b\u7531 Robert Griesemer, Rob Pike, Ken Thompson \u4e3b\u6301\u5f00\u53d1\uff0c\u540e\u6765\u8fd8\u52a0\u5165\u4e86 Ian Lance Taylor, Russ Cox \u7b49\u4eba\uff0c\u5e76\u6700\u7ec8\u4e8e 2009 \u5e74 11 \u6708\u5f00\u6e90\uff0c\u5728 2012 \u5e74\u65e9\u4e9b\u65f6\u5019\u53d1\u5e03\u4e86 Go 1 \u7a33\u5b9a\u7248\u672c\u3002\u73b0\u5728 Go \u7684\u5f00\u53d1\u5df2\u7ecf\u662f\u5b8c\u5168\u5f00\u653e\u7684\uff0c\u5e76\u4e14\u62e5\u6709\u4e00\u4e2a\u6d3b\u8dc3\u7684\u793e\u533a\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/golang/go"},"github")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://studygolang.com/"},"Go \u4e2d\u6587\u7f51")),(0,o.kt)("p",null,"\u5b66\u4e60\u8d44\u6599\u6765\u6e90 :"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/qcrao/Go-Questions"},"Go-Questions")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://gin-gonic.com/zh-cn/"},"Gin Web Framework"))),(0,o.kt)(a.Z,{mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);