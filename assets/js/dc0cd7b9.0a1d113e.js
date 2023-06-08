"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[69538],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41104:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),c=["components"],i={},l="\u7b2c\u4e00\u5929",u={unversionedId:"backend/go/day/base",id:"backend/go/day/base",title:"\u7b2c\u4e00\u5929",description:"- \u5206\u9694\u65ad\u7ebf",source:"@site/docs/backend/go/day/base.md",sourceDirName:"backend/go/day",slug:"/backend/go/day/base",permalink:"/docs/backend/go/day/base",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6bcf\u65e5\u4e00\u5e93",permalink:"/docs/backend/go/day/"},next:{title:"\u7b2c\u4e09\u65b9\u6587\u6863",permalink:"/docs/backend/go/doc/"}},p={},s=[{value:"Golang \u7684 sync.Map",id:"golang-\u7684-syncmap",level:2},{value:"Gorm",id:"gorm",level:2},{value:"jsontime",id:"jsontime",level:2},{value:"gopay",id:"gopay",level:2}],d={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u7b2c\u4e00\u5929"},"\u7b2c\u4e00\u5929"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5206\u9694\u65ad\u7ebf")),(0,o.kt)("h2",{id:"golang-\u7684-syncmap"},"Golang \u7684 sync.Map"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5e76\u53d1 map \u7684\u95ee\u9898")),(0,o.kt)("p",null,"sync.Map \u652f\u6301\u5e76\u53d1\u8bfb\u5199\uff0c\u91c7\u53d6\u4e86 \u201c\u7a7a\u95f4\u6362\u65f6\u95f4\u201d \u7684\u673a\u5236\uff0c\u5197\u4f59\u4e86\u4e24\u4e2a\u6570\u636e\u7ed3\u6784\uff0c\u5206\u522b\u662f\uff1aread \u548c dirty\u3002\u548c\u6211\u4eec\u7684\u7b2c\u4e00\u79cd\u65b9\u6848 map+RWMutex \u7684\u5b9e\u73b0\u5e76\u53d1\u7684\u65b9\u5f0f\u76f8\u6bd4\uff0c\u51cf\u5c11\u4e86\u52a0\u9501\u5bf9\u6027\u80fd\u7684\u5f71\u54cd\u3002"),(0,o.kt)("h2",{id:"gorm"},"Gorm"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://gorm.io/zh_CN/"},"The fantastic ORM library for Golang")),(0,o.kt)("h2",{id:"jsontime"},"jsontime"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/liamylian/jsontime\n")),(0,o.kt)("h2",{id:"gopay"},"gopay"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go get -u github.com/go-pay/gopay\n")))}m.isMDXComponent=!0}}]);