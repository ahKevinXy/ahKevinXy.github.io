"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[71607],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=c(n),d=a,k=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(k,o(o({ref:e},u),{},{components:n})):r.createElement(k,o({ref:e},u))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[m]="string"==typeof t?t:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20311:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"synchronized & ReentrantLock \u533a\u522b",tags:["Java"],authors:"Flankx",description:"Java \u9501\u7684\u533a\u522b \u5982\u4f55\u4f7f\u7528java \u9501",image:"https://source.unsplash.com/random?people&22"},o="synchronized \u4e0e ReentrantLock \u533a\u522b",i={permalink:"/blog/2023/07/19/lock-1",source:"@site/blog/2023/07/19/lock-1.md",title:"synchronized & ReentrantLock \u533a\u522b",description:"Java \u9501\u7684\u533a\u522b \u5982\u4f55\u4f7f\u7528java \u9501",date:"2023-07-19T00:00:00.000Z",formattedDate:"July 19, 2023",tags:[{label:"Java",permalink:"/blog/tags/java"}],readingTime:.86,hasTruncateMarker:!1,authors:[{name:"flankx",title:"\u4f5c\u8005",url:"https://github.com/flankx",email:"137472591@qq.com",imageURL:"https://avatars.githubusercontent.com/u/30172229",key:"Flankx"}],frontMatter:{title:"synchronized & ReentrantLock \u533a\u522b",tags:["Java"],authors:"Flankx",description:"Java \u9501\u7684\u533a\u522b \u5982\u4f55\u4f7f\u7528java \u9501",image:"https://source.unsplash.com/random?people&22"},prevItem:{title:"\u9501\u7684\u72b6\u6001",permalink:"/blog/2023/07/20/lock-2"},nextItem:{title:"SpringBoot\u81ea\u52a8\u914d\u7f6e\u5b9e\u73b0\u539f\u7406",permalink:"/blog/2023/07/18/autoconfig-1"}},p={authorsImageUrls:[void 0]},c=[],u={toc:c},m="wrapper";function s(t){let{components:e,...n}=t;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u522b"),(0,a.kt)("th",{parentName:"tr",align:null},"synchronized"),(0,a.kt)("th",{parentName:"tr",align:null},"ReentrantLock"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5b58\u5728\u5c42\u6b21"),(0,a.kt)("td",{parentName:"tr",align:null},"Java\u7684\u5173\u952e\u5b57\uff0cJVM\u5c42\u9762"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f\u4e00\u4e2a\u7c7b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u9501\u7684\u91ca\u653e"),(0,a.kt)("td",{parentName:"tr",align:null},"1.\u4ee5\u83b7\u53d6\u9501\u7684\u7ebf\u7a0b\u6267\u884c\u540c\u6b65\u4ee3\u7801\uff0c\u91ca\u653e\u9501 2.\u7ebf\u7a0b\u6267\u884c\u53d1\u751f\u4e00\u6b21\uff0cJVM\u4f1a\u8ba9\u7ebf\u7a0b\u91ca\u653e\u9501"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5728finally\u4e2d\u5fc5\u987b\u91ca\u653e\u9501\uff0c\u4e0d\u7136\u5bb9\u6613\u9020\u6210\u7ebf\u7a0b\u6b7b\u9501")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u9501\u7684\u83b7\u53d6"),(0,a.kt)("td",{parentName:"tr",align:null},"\u52a0\u9501A\u7ebf\u7a0b\u83b7\u5f97\u9501\uff0cB\u7ebf\u7a0b\u7b49\u5f85\uff0c\u5982\u679cA\u963b\u585e\uff0cB\u7ebf\u7a0b\u4f1a\u4e00\u76f4\u7b49\u5f85"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5206\u60c5\u51b5\u800c\u5b9a\uff0cLock\u6709\u591a\u79cd\u9501\u7684\u83b7\u53d6\u65b9\u5f0f condition")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u9501\u72b6\u6001"),(0,a.kt)("td",{parentName:"tr",align:null},"\u65e0\u6cd5\u5224\u65ad"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u5224\u65ad")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u9501\u7c7b\u578b"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u91cd\u5165\uff0c\u4e0d\u53ef\u5224\u65ad\uff0c\u975e\u516c\u5e73"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u91cd\u5165\uff0c\u53ef\u5224\u65ad\uff0c\u53ef\u516c\u5e73")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u6027\u80fd"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5c11\u91cf\u540c\u6b65"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5927\u91cf\u540c\u6b65")))))}s.isMDXComponent=!0}}]);