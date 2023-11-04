"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[56095],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(n),s=r,f=u["".concat(p,".").concat(s)]||u[s]||d[s]||o;return n?a.createElement(f,l(l({ref:t},m),{},{components:n})):a.createElement(f,l({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},60144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},l="\u57fa\u7840\u77e5\u8bc6",i={unversionedId:"front/base",id:"front/base",title:"\u57fa\u7840\u77e5\u8bc6",description:"meta viewport \u76f8\u5173",source:"@site/docs/front/base.md",sourceDirName:"front",slug:"/front/base",permalink:"/docs/front/base",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u524d\u7aef",permalink:"/docs/front"},next:{title:"\u535a\u5ba2",permalink:"/docs/front/blog/"}},p={},c=[{value:"meta viewport \u76f8\u5173",id:"meta-viewport-\u76f8\u5173",level:2},{value:"\u83b7\u53d6\u5c4f\u5e55\u7684\u9ad8\u5ea6\u548c\u5bbd\u5ea6\uff08\u5c4f\u5e55\u5206\u8fa8\u7387\uff09",id:"\u83b7\u53d6\u5c4f\u5e55\u7684\u9ad8\u5ea6\u548c\u5bbd\u5ea6\u5c4f\u5e55\u5206\u8fa8\u7387",level:2},{value:"\u8fb9\u8ddd\u91cd\u53e0\u89e3\u51b3\u65b9\u6848(BFC) BFC \u539f\u7406",id:"\u8fb9\u8ddd\u91cd\u53e0\u89e3\u51b3\u65b9\u6848bfc-bfc-\u539f\u7406",level:2},{value:"HTTP",id:"http",level:2},{value:"\u5e38\u89c1\u72b6\u6001\u7801",id:"\u5e38\u89c1\u72b6\u6001\u7801",level:3},{value:"2 \u5f00\u5934 \uff08\u8bf7\u6c42\u6210\u529f\uff09\u8868\u793a\u6210\u529f\u5904\u7406\u4e86\u8bf7\u6c42\u7684\u72b6\u6001\u4ee3\u7801",id:"2-\u5f00\u5934-\u8bf7\u6c42\u6210\u529f\u8868\u793a\u6210\u529f\u5904\u7406\u4e86\u8bf7\u6c42\u7684\u72b6\u6001\u4ee3\u7801",level:4},{value:"\u5f00\u5934 \uff08\u8bf7\u6c42\u88ab\u91cd\u5b9a\u5411\uff09\u8868\u793a\u8981\u5b8c\u6210\u8bf7\u6c42\uff0c\u9700\u8981\u8fdb\u4e00\u6b65\u64cd\u4f5c\u3002 \u901a\u5e38\uff0c\u8fd9\u4e9b\u72b6\u6001\u4ee3\u7801\u7528\u6765\u91cd\u5b9a\u5411",id:"\u5f00\u5934-\u8bf7\u6c42\u88ab\u91cd\u5b9a\u5411\u8868\u793a\u8981\u5b8c\u6210\u8bf7\u6c42\u9700\u8981\u8fdb\u4e00\u6b65\u64cd\u4f5c-\u901a\u5e38\u8fd9\u4e9b\u72b6\u6001\u4ee3\u7801\u7528\u6765\u91cd\u5b9a\u5411",level:4},{value:"4 \u5f00\u5934 \uff08\u8bf7\u6c42\u9519\u8bef\uff09\u8fd9\u4e9b\u72b6\u6001\u4ee3\u7801\u8868\u793a\u8bf7\u6c42\u53ef\u80fd\u51fa\u9519\uff0c\u59a8\u788d\u4e86\u670d\u52a1\u5668\u7684\u5904\u7406",id:"4-\u5f00\u5934-\u8bf7\u6c42\u9519\u8bef\u8fd9\u4e9b\u72b6\u6001\u4ee3\u7801\u8868\u793a\u8bf7\u6c42\u53ef\u80fd\u51fa\u9519\u59a8\u788d\u4e86\u670d\u52a1\u5668\u7684\u5904\u7406",level:4},{value:"5 \u5f00\u5934\uff08\u670d\u52a1\u5668\u9519\u8bef\uff09\u8fd9\u4e9b\u72b6\u6001\u4ee3\u7801\u8868\u793a\u670d\u52a1\u5668\u5728\u5c1d\u8bd5\u5904\u7406\u8bf7\u6c42\u65f6\u53d1\u751f\u5185\u90e8\u9519\u8bef\u3002 \u8fd9\u4e9b\u9519\u8bef\u53ef\u80fd\u662f\u670d\u52a1\u5668\u672c\u8eab\u7684\u9519\u8bef\uff0c\u800c\u4e0d\u662f\u8bf7\u6c42\u51fa\u9519",id:"5-\u5f00\u5934\u670d\u52a1\u5668\u9519\u8bef\u8fd9\u4e9b\u72b6\u6001\u4ee3\u7801\u8868\u793a\u670d\u52a1\u5668\u5728\u5c1d\u8bd5\u5904\u7406\u8bf7\u6c42\u65f6\u53d1\u751f\u5185\u90e8\u9519\u8bef-\u8fd9\u4e9b\u9519\u8bef\u53ef\u80fd\u662f\u670d\u52a1\u5668\u672c\u8eab\u7684\u9519\u8bef\u800c\u4e0d\u662f\u8bf7\u6c42\u51fa\u9519",level:4},{value:"\u8bf7\u6c42\u884c\uff0c\u8bf7\u6c42\u5934\uff0c\u8bf7\u6c42\u4f53\u8be6\u89e3",id:"\u8bf7\u6c42\u884c\u8bf7\u6c42\u5934\u8bf7\u6c42\u4f53\u8be6\u89e3",level:3},{value:"osi \u6a21\u578b",id:"osi-\u6a21\u578b",level:2},{value:"http2.0 http1",id:"http20-http1",level:2}],m={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u57fa\u7840\u77e5\u8bc6"},"\u57fa\u7840\u77e5\u8bc6"),(0,r.kt)("h2",{id:"meta-viewport-\u76f8\u5173"},"meta viewport \u76f8\u5173"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html> H5\u6807\u51c6\u58f0\u660e\uff0c\u4f7f\u7528 HTML5 doctype\uff0c\u4e0d\u533a\u5206\u5927\u5c0f\u5199\n<head lang="\u201den\u201d">\n  \u6807\u51c6\u7684 lang \u5c5e\u6027\u5199\u6cd5\n  <meta charset="\u2019utf-8\u2032" />\n  \u58f0\u660e\u6587\u6863\u4f7f\u7528\u7684\u5b57\u7b26\u7f16\u7801\n  <meta http-equiv="\u201dX-UA-Compatible\u201d" content="\u201dIE" ="edge,chrome" ="1\u2033" />\n  \u4f18\u5148\u4f7f\u7528 IE \u6700\u65b0\u7248\u672c\u548c Chrome\n  <meta name="\u201ddescription\u201d" content="\u201d\u4e0d\u8d85\u8fc7150\u4e2a\u5b57\u7b26\u201d" />\n  \u9875\u9762\u63cf\u8ff0\n  <meta name="\u201dkeywords\u201d" content="\u201d\u201d" />\n  \u9875\u9762\u5173\u952e\u8bcd\n  <meta name="\u201dauthor\u201d" content="\u201dname," email@gmail.com\u201d />\n  \u7f51\u9875\u4f5c\u8005\n  <meta name="\u201drobots\u201d" content="\u201dindex,follow\u201d" />\n  \u641c\u7d22\u5f15\u64ce\u6293\u53d6\n  <meta\n    name="\u201dviewport\u201d"\n    content="\u201dinitial-scale"\n    ="1,"\n    maximum-scale="3,"\n    minimum-scale="1,"\n    user-scalable="no\u201d"\n  />\n  \u4e3a\u79fb\u52a8\u8bbe\u5907\u6dfb\u52a0 viewport\n  <meta name="\u201dapple-mobile-web-app-title\u201d" content="\u201d\u6807\u9898\u201d" />\n  iOS \u8bbe\u5907 begin\n  <meta name="\u201dapple-mobile-web-app-capable\u201d" content="\u201dyes\u201d" />\n  \u6dfb\u52a0\u5230\u4e3b\u5c4f\u540e\u7684\u6807\u9898\uff08iOS 6 \u65b0\u589e\uff09 \u662f\u5426\u542f\u7528 WebApp \u5168\u5c4f\u6a21\u5f0f\uff0c\u5220\u9664\u82f9\u679c\u9ed8\u8ba4\u7684\u5de5\u5177\u680f\u548c\u83dc\u5355\u680f\n  <meta\n    name="\u201dapple-itunes-app\u201d"\n    content="\u201dapp-id"\n    ="myAppStoreID,"\n    affiliate-data="myAffiliateData,"\n    app-argument="myURL\u201d"\n  />\n  \u6dfb\u52a0\u667a\u80fd App \u5e7f\u544a\u6761 Smart App Banner\uff08iOS 6+ Safari\uff09\n  <meta name="\u201dapple-mobile-web-app-status-bar-style\u201d" content="\u201dblack\u201d" />\n  <meta name="\u201dformat-detection\u201d" content="\u201dtelphone" ="no," email="no\u201d" />\n  \u8bbe\u7f6e\u82f9\u679c\u5de5\u5177\u680f\u989c\u8272\n  <meta name="\u201drenderer\u201d" content="\u201dwebkit\u201d" />\n  \u542f\u7528360\u6d4f\u89c8\u5668\u7684\u6781\u901f\u6a21\u5f0f(webkit)\n  <meta http-equiv="\u201dX-UA-Compatible\u201d" content="\u201dIE" ="edge\u201d" />\n  \u907f\u514dIE\u4f7f\u7528\u517c\u5bb9\u6a21\u5f0f\n  <meta http-equiv="\u201dCache-Control\u201d" content="\u201dno-siteapp\u201d" />\n  \u4e0d\u8ba9\u767e\u5ea6\u8f6c\u7801\n  <meta name="\u201dHandheldFriendly\u201d" content="\u201dtrue\u201d" />\n  \u9488\u5bf9\u624b\u6301\u8bbe\u5907\u4f18\u5316\uff0c\u4e3b\u8981\u662f\u9488\u5bf9\u4e00\u4e9b\u8001\u7684\u4e0d\u8bc6\u522bviewport\u7684\u6d4f\u89c8\u5668\uff0c\u6bd4\u5982\u9ed1\u8393\n  <meta name="\u201dMobileOptimized\u201d" content="\u201d320\u2033" />\n  \u5fae\u8f6f\u7684\u8001\u5f0f\u6d4f\u89c8\u5668\n  <meta name="\u201dscreen-orientation\u201d" content="\u201dportrait\u201d" />\n  uc\u5f3a\u5236\u7ad6\u5c4f\n  <meta name="\u201dx5-orientation\u201d" content="\u201dportrait\u201d" />\n  QQ\u5f3a\u5236\u7ad6\u5c4f\n  <meta name="\u201dfull-screen\u201d" content="\u201dyes\u201d" />\n  UC\u5f3a\u5236\u5168\u5c4f\n  <meta name="\u201dx5-fullscreen\u201d" content="\u201dtrue\u201d" />\n  QQ\u5f3a\u5236\u5168\u5c4f\n  <meta name="\u201dbrowsermode\u201d" content="\u201dapplication\u201d" />\n  UC\u5e94\u7528\u6a21\u5f0f\n  <meta name="\u201dx5-page-mode\u201d" content="\u201dapp\u201d" />\n  QQ\u5e94\u7528\u6a21\u5f0f\n  <meta name="\u201dmsapplication-tap-highlight\u201d" content="\u201dno\u201d" />\n  windows phone \u70b9\u51fb\u65e0\u9ad8\u5149 \u8bbe\u7f6e\u9875\u9762\u4e0d\u7f13\u5b58\n  <meta http-equiv="\u201dpragma\u201d" content="\u201dno-cache\u201d" />\n  <meta http-equiv="\u201dcache-control\u201d" content="\u201dno-cache\u201d" />\n  <meta http-equiv="\u201dexpires\u201d" content="\u201d0\u2033" />\n</head>\n')),(0,r.kt)("h2",{id:"\u83b7\u53d6\u5c4f\u5e55\u7684\u9ad8\u5ea6\u548c\u5bbd\u5ea6\u5c4f\u5e55\u5206\u8fa8\u7387"},"\u83b7\u53d6\u5c4f\u5e55\u7684\u9ad8\u5ea6\u548c\u5bbd\u5ea6\uff08\u5c4f\u5e55\u5206\u8fa8\u7387\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"window.screen.height/width \u83b7\u53d6\u5c4f\u5e55\u5de5\u4f5c\u533a\u57df\u7684\u9ad8\u5ea6\u548c\u5bbd\u5ea6\uff08\u53bb\u6389\u72b6\u6001\u680f\uff09\uff1a\nwindow.screen.availHeight/availWidth \u7f51\u9875\u5168\u6587\u7684\u9ad8\u5ea6\u548c\u5bbd\u5ea6\uff1a document.body.scrollHeight/Width\n\u6eda\u52a8\u6761\u5377\u4e0a\u53bb\u7684\u9ad8\u5ea6\u548c\u5411\u53f3\u5377\u7684\u5bbd\u5ea6\uff1a document.body.scrollTop/scrollLeft\n\u7f51\u9875\u53ef\u89c1\u533a\u57df\u7684\u9ad8\u5ea6\u548c\u5bbd\u5ea6\uff08\u4e0d\u52a0\u8fb9\u7ebf\uff09\uff1a document.body.clientHeight/clientWidth\n\u7f51\u9875\u53ef\u89c1\u533a\u57df\u7684\u9ad8\u5ea6\u548c\u5bbd\u5ea6\uff08\u52a0\u8fb9\u7ebf\uff09\uff1a document.body.offsetHeight/offsetWidth\n")),(0,r.kt)("h2",{id:"\u8fb9\u8ddd\u91cd\u53e0\u89e3\u51b3\u65b9\u6848bfc-bfc-\u539f\u7406"},"\u8fb9\u8ddd\u91cd\u53e0\u89e3\u51b3\u65b9\u6848(BFC) BFC \u539f\u7406"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5185\u90e8\u7684 box \u4f1a\u5728\u5782\u76f4\u65b9\u5411\uff0c\u4e00\u4e2a\u63a5\u4e00\u4e2a\u7684\u653e\u7f6e \u6bcf\u4e2a\u5143\u7d20\u7684 margin box \u7684\u5de6\u8fb9\uff0c\u4e0e\u5305\u542b\u5757 border box \u7684\u5de6\u8fb9\u76f8\u63a5\u89e6\uff08\u5bf9\u4e8e\u4ece\u505a\u5f80\u53f3\u7684\u683c\u5f0f\u5316\uff0c\u5426\u5219\u76f8\u53cd\uff09"),(0,r.kt)("li",{parentName:"ul"},"box \u5782\u76f4\u65b9\u5411\u7684\u8ddd\u79bb\u7531 margin \u51b3\u5b9a\uff0c\u5c5e\u4e8e\u540c\u4e00\u4e2a bfc \u7684\u4e24\u4e2a\u76f8\u90bb box \u7684 margin \u4f1a\u53d1\u751f\u91cd\u53e0"),(0,r.kt)("li",{parentName:"ul"},"bfc \u7684\u533a\u57df\u4e0d\u4f1a\u4e0e\u6d6e\u52a8\u533a\u57df\u7684 box \u91cd\u53e0"),(0,r.kt)("li",{parentName:"ul"},"bfc \u662f\u4e00\u4e2a\u9875\u9762\u4e0a\u7684\u72ec\u7acb\u7684\u5bb9\u5668\uff0c\u5916\u9762\u7684\u5143\u7d20\u4e0d\u4f1a\u5f71\u54cd bfc \u91cc\u7684\u5143\u7d20\uff0c\u53cd\u8fc7\u6765\uff0c\u91cc\u9762\u7684\u4e5f\u4e0d\u4f1a\u5f71\u54cd\u5916\u9762\u7684"),(0,r.kt)("li",{parentName:"ul"},"\u8ba1\u7b97 bfc \u9ad8\u5ea6\u7684\u65f6\u5019\uff0c\u6d6e\u52a8\u5143\u7d20\u4e5f\u4f1a\u53c2\u4e0e\u8ba1\u7b97 \u521b\u5efa bfc"),(0,r.kt)("li",{parentName:"ul"},"float \u5c5e\u6027\u4e0d\u4e3a none\uff08\u8131\u79bb\u6587\u6863\u6d41\uff09"),(0,r.kt)("li",{parentName:"ul"},"position \u4e3a absolute \u6216 fixed"),(0,r.kt)("li",{parentName:"ul"},"display \u4e3a inline-block,table-cell,table-caption,flex,inine-flex"),(0,r.kt)("li",{parentName:"ul"},"overflow \u4e0d\u4e3a visible")),(0,r.kt)("h2",{id:"http"},"HTTP"),(0,r.kt)("h3",{id:"\u5e38\u89c1\u72b6\u6001\u7801"},"\u5e38\u89c1\u72b6\u6001\u7801"),(0,r.kt)("h4",{id:"2-\u5f00\u5934-\u8bf7\u6c42\u6210\u529f\u8868\u793a\u6210\u529f\u5904\u7406\u4e86\u8bf7\u6c42\u7684\u72b6\u6001\u4ee3\u7801"},"2 \u5f00\u5934 \uff08\u8bf7\u6c42\u6210\u529f\uff09\u8868\u793a\u6210\u529f\u5904\u7406\u4e86\u8bf7\u6c42\u7684\u72b6\u6001\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"200   \uff08\u6210\u529f\uff09  \u670d\u52a1\u5668\u5df2\u6210\u529f\u5904\u7406\u4e86\u8bf7\u6c42\u3002 \u901a\u5e38\uff0c\u8fd9\u8868\u793a\u670d\u52a1\u5668\u63d0\u4f9b\u4e86\u8bf7\u6c42\u7684\u7f51\u9875\u3002\n201   \uff08\u5df2\u521b\u5efa\uff09  \u8bf7\u6c42\u6210\u529f\u5e76\u4e14\u670d\u52a1\u5668\u521b\u5efa\u4e86\u65b0\u7684\u8d44\u6e90\u3002\n202   \uff08\u5df2\u63a5\u53d7\uff09  \u670d\u52a1\u5668\u5df2\u63a5\u53d7\u8bf7\u6c42\uff0c\u4f46\u5c1a\u672a\u5904\u7406\u3002\n203   \uff08\u975e\u6388\u6743\u4fe1\u606f\uff09  \u670d\u52a1\u5668\u5df2\u6210\u529f\u5904\u7406\u4e86\u8bf7\u6c42\uff0c\u4f46\u8fd4\u56de\u7684\u4fe1\u606f\u53ef\u80fd\u6765\u81ea\u53e6\u4e00\u6765\u6e90\u3002\n204   \uff08\u65e0\u5185\u5bb9\uff09  \u670d\u52a1\u5668\u6210\u529f\u5904\u7406\u4e86\u8bf7\u6c42\uff0c\u4f46\u6ca1\u6709\u8fd4\u56de\u4efb\u4f55\u5185\u5bb9\u3002\n205   \uff08\u91cd\u7f6e\u5185\u5bb9\uff09 \u670d\u52a1\u5668\u6210\u529f\u5904\u7406\u4e86\u8bf7\u6c42\uff0c\u4f46\u6ca1\u6709\u8fd4\u56de\u4efb\u4f55\u5185\u5bb9\u3002\n206   \uff08\u90e8\u5206\u5185\u5bb9\uff09  \u670d\u52a1\u5668\u6210\u529f\u5904\u7406\u4e86\u90e8\u5206 GET \u8bf7\u6c42\u3002\n")),(0,r.kt)("h4",{id:"\u5f00\u5934-\u8bf7\u6c42\u88ab\u91cd\u5b9a\u5411\u8868\u793a\u8981\u5b8c\u6210\u8bf7\u6c42\u9700\u8981\u8fdb\u4e00\u6b65\u64cd\u4f5c-\u901a\u5e38\u8fd9\u4e9b\u72b6\u6001\u4ee3\u7801\u7528\u6765\u91cd\u5b9a\u5411"},"\u5f00\u5934 \uff08\u8bf7\u6c42\u88ab\u91cd\u5b9a\u5411\uff09\u8868\u793a\u8981\u5b8c\u6210\u8bf7\u6c42\uff0c\u9700\u8981\u8fdb\u4e00\u6b65\u64cd\u4f5c\u3002 \u901a\u5e38\uff0c\u8fd9\u4e9b\u72b6\u6001\u4ee3\u7801\u7528\u6765\u91cd\u5b9a\u5411"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," 300   \uff08\u591a\u79cd\u9009\u62e9\uff09  \u9488\u5bf9\u8bf7\u6c42\uff0c\u670d\u52a1\u5668\u53ef\u6267\u884c\u591a\u79cd\u64cd\u4f5c\u3002 \u670d\u52a1\u5668\u53ef\u6839\u636e\u8bf7\u6c42\u8005 (user agent) \u9009\u62e9\u4e00\u9879\u64cd\u4f5c\uff0c\u6216\u63d0\u4f9b\u64cd\u4f5c\u5217\u8868\u4f9b\u8bf7\u6c42\u8005\u9009\u62e9\u3002\n 301   \uff08\u6c38\u4e45\u79fb\u52a8\uff09  \u8bf7\u6c42\u7684\u7f51\u9875\u5df2\u6c38\u4e45\u79fb\u52a8\u5230\u65b0\u4f4d\u7f6e\u3002 \u670d\u52a1\u5668\u8fd4\u56de\u6b64\u54cd\u5e94\uff08\u5bf9 GET \u6216 HEAD \u8bf7\u6c42\u7684\u54cd\u5e94\uff09\u65f6\uff0c\u4f1a\u81ea\u52a8\u5c06\u8bf7\u6c42\u8005\u8f6c\u5230\u65b0\u4f4d\u7f6e\u3002\n 302   \uff08\u4e34\u65f6\u79fb\u52a8\uff09  \u670d\u52a1\u5668\u76ee\u524d\u4ece\u4e0d\u540c\u4f4d\u7f6e\u7684\u7f51\u9875\u54cd\u5e94\u8bf7\u6c42\uff0c\u4f46\u8bf7\u6c42\u8005\u5e94\u7ee7\u7eed\u4f7f\u7528\u539f\u6709\u4f4d\u7f6e\u6765\u8fdb\u884c\u4ee5\u540e\u7684\u8bf7\u6c42\u3002\n 303   \uff08\u67e5\u770b\u5176\u4ed6\u4f4d\u7f6e\uff09 \u8bf7\u6c42\u8005\u5e94\u5f53\u5bf9\u4e0d\u540c\u7684\u4f4d\u7f6e\u4f7f\u7528\u5355\u72ec\u7684 GET \u8bf7\u6c42\u6765\u68c0\u7d22\u54cd\u5e94\u65f6\uff0c\u670d\u52a1\u5668\u8fd4\u56de\u6b64\u4ee3\u7801\u3002\n 304   \uff08\u672a\u4fee\u6539\uff09 \u81ea\u4ece\u4e0a\u6b21\u8bf7\u6c42\u540e\uff0c\u8bf7\u6c42\u7684\u7f51\u9875\u672a\u4fee\u6539\u8fc7\u3002 \u670d\u52a1\u5668\u8fd4\u56de\u6b64\u54cd\u5e94\u65f6\uff0c\u4e0d\u4f1a\u8fd4\u56de\u7f51\u9875\u5185\u5bb9\u3002\n 305   \uff08\u4f7f\u7528\u4ee3\u7406\uff09 \u8bf7\u6c42\u8005\u53ea\u80fd\u4f7f\u7528\u4ee3\u7406\u8bbf\u95ee\u8bf7\u6c42\u7684\u7f51\u9875\u3002 \u5982\u679c\u670d\u52a1\u5668\u8fd4\u56de\u6b64\u54cd\u5e94\uff0c\u8fd8\u8868\u793a\u8bf7\u6c42\u8005\u5e94\u4f7f\u7528\u4ee3\u7406\u3002\n 307   \uff08\u4e34\u65f6\u91cd\u5b9a\u5411\uff09  \u670d\u52a1\u5668\u76ee\u524d\u4ece\u4e0d\u540c\u4f4d\u7f6e\u7684\u7f51\u9875\u54cd\u5e94\u8bf7\u6c42\uff0c\u4f46\u8bf7\u6c42\u8005\u5e94\u7ee7\u7eed\u4f7f\u7528\u539f\u6709\u4f4d\u7f6e\u6765\u8fdb\u884c\u4ee5\u540e\u7684\u8bf7\u6c42\u3002\n")),(0,r.kt)("h4",{id:"4-\u5f00\u5934-\u8bf7\u6c42\u9519\u8bef\u8fd9\u4e9b\u72b6\u6001\u4ee3\u7801\u8868\u793a\u8bf7\u6c42\u53ef\u80fd\u51fa\u9519\u59a8\u788d\u4e86\u670d\u52a1\u5668\u7684\u5904\u7406"},"4 \u5f00\u5934 \uff08\u8bf7\u6c42\u9519\u8bef\uff09\u8fd9\u4e9b\u72b6\u6001\u4ee3\u7801\u8868\u793a\u8bf7\u6c42\u53ef\u80fd\u51fa\u9519\uff0c\u59a8\u788d\u4e86\u670d\u52a1\u5668\u7684\u5904\u7406"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},' 400   \uff08\u9519\u8bef\u8bf7\u6c42\uff09 \u670d\u52a1\u5668\u4e0d\u7406\u89e3\u8bf7\u6c42\u7684\u8bed\u6cd5\u3002\n 401   \uff08\u672a\u6388\u6743\uff09 \u8bf7\u6c42\u8981\u6c42\u8eab\u4efd\u9a8c\u8bc1\u3002 \u5bf9\u4e8e\u9700\u8981\u767b\u5f55\u7684\u7f51\u9875\uff0c\u670d\u52a1\u5668\u53ef\u80fd\u8fd4\u56de\u6b64\u54cd\u5e94\u3002\n 403   \uff08\u7981\u6b62\uff09 \u670d\u52a1\u5668\u62d2\u7edd\u8bf7\u6c42\u3002\n 404   \uff08\u672a\u627e\u5230\uff09 \u670d\u52a1\u5668\u627e\u4e0d\u5230\u8bf7\u6c42\u7684\u7f51\u9875\u3002\n 405   \uff08\u65b9\u6cd5\u7981\u7528\uff09 \u7981\u7528\u8bf7\u6c42\u4e2d\u6307\u5b9a\u7684\u65b9\u6cd5\u3002\n 406   \uff08\u4e0d\u63a5\u53d7\uff09 \u65e0\u6cd5\u4f7f\u7528\u8bf7\u6c42\u7684\u5185\u5bb9\u7279\u6027\u54cd\u5e94\u8bf7\u6c42\u7684\u7f51\u9875\u3002\n 407   \uff08\u9700\u8981\u4ee3\u7406\u6388\u6743\uff09 \u6b64\u72b6\u6001\u4ee3\u7801\u4e0e 401\uff08\u672a\u6388\u6743\uff09\u7c7b\u4f3c\uff0c\u4f46\u6307\u5b9a\u8bf7\u6c42\u8005\u5e94\u5f53\u6388\u6743\u4f7f\u7528\u4ee3\u7406\u3002\n 408   \uff08\u8bf7\u6c42\u8d85\u65f6\uff09  \u670d\u52a1\u5668\u7b49\u5019\u8bf7\u6c42\u65f6\u53d1\u751f\u8d85\u65f6\u3002\n 409   \uff08\u51b2\u7a81\uff09  \u670d\u52a1\u5668\u5728\u5b8c\u6210\u8bf7\u6c42\u65f6\u53d1\u751f\u51b2\u7a81\u3002 \u670d\u52a1\u5668\u5fc5\u987b\u5728\u54cd\u5e94\u4e2d\u5305\u542b\u6709\u5173\u51b2\u7a81\u7684\u4fe1\u606f\u3002\n 410   \uff08\u5df2\u5220\u9664\uff09  \u5982\u679c\u8bf7\u6c42\u7684\u8d44\u6e90\u5df2\u6c38\u4e45\u5220\u9664\uff0c\u670d\u52a1\u5668\u5c31\u4f1a\u8fd4\u56de\u6b64\u54cd\u5e94\u3002\n 411   \uff08\u9700\u8981\u6709\u6548\u957f\u5ea6\uff09 \u670d\u52a1\u5668\u4e0d\u63a5\u53d7\u4e0d\u542b\u6709\u6548\u5185\u5bb9\u957f\u5ea6\u6807\u5934\u5b57\u6bb5\u7684\u8bf7\u6c42\u3002\n 412   \uff08\u672a\u6ee1\u8db3\u524d\u63d0\u6761\u4ef6\uff09 \u670d\u52a1\u5668\u672a\u6ee1\u8db3\u8bf7\u6c42\u8005\u5728\u8bf7\u6c42\u4e2d\u8bbe\u7f6e\u7684\u5176\u4e2d\u4e00\u4e2a\u524d\u63d0\u6761\u4ef6\u3002\n 413   \uff08\u8bf7\u6c42\u5b9e\u4f53\u8fc7\u5927\uff09 \u670d\u52a1\u5668\u65e0\u6cd5\u5904\u7406\u8bf7\u6c42\uff0c\u56e0\u4e3a\u8bf7\u6c42\u5b9e\u4f53\u8fc7\u5927\uff0c\u8d85\u51fa\u670d\u52a1\u5668\u7684\u5904\u7406\u80fd\u529b\u3002\n 414   \uff08\u8bf7\u6c42\u7684 URI \u8fc7\u957f\uff09 \u8bf7\u6c42\u7684 URI\uff08\u901a\u5e38\u4e3a\u7f51\u5740\uff09\u8fc7\u957f\uff0c\u670d\u52a1\u5668\u65e0\u6cd5\u5904\u7406\u3002\n 415   \uff08\u4e0d\u652f\u6301\u7684\u5a92\u4f53\u7c7b\u578b\uff09 \u8bf7\u6c42\u7684\u683c\u5f0f\u4e0d\u53d7\u8bf7\u6c42\u9875\u9762\u7684\u652f\u6301\u3002\n 416   \uff08\u8bf7\u6c42\u8303\u56f4\u4e0d\u7b26\u5408\u8981\u6c42\uff09 \u5982\u679c\u9875\u9762\u65e0\u6cd5\u63d0\u4f9b\u8bf7\u6c42\u7684\u8303\u56f4\uff0c\u5219\u670d\u52a1\u5668\u4f1a\u8fd4\u56de\u6b64\u72b6\u6001\u4ee3\u7801\u3002\n 417   \uff08\u672a\u6ee1\u8db3\u671f\u671b\u503c\uff09 \u670d\u52a1\u5668\u672a\u6ee1\u8db3"\u671f\u671b"\u8bf7\u6c42\u6807\u5934\u5b57\u6bb5\u7684\u8981\u6c42\u3002\n')),(0,r.kt)("h4",{id:"5-\u5f00\u5934\u670d\u52a1\u5668\u9519\u8bef\u8fd9\u4e9b\u72b6\u6001\u4ee3\u7801\u8868\u793a\u670d\u52a1\u5668\u5728\u5c1d\u8bd5\u5904\u7406\u8bf7\u6c42\u65f6\u53d1\u751f\u5185\u90e8\u9519\u8bef-\u8fd9\u4e9b\u9519\u8bef\u53ef\u80fd\u662f\u670d\u52a1\u5668\u672c\u8eab\u7684\u9519\u8bef\u800c\u4e0d\u662f\u8bf7\u6c42\u51fa\u9519"},"5 \u5f00\u5934\uff08\u670d\u52a1\u5668\u9519\u8bef\uff09\u8fd9\u4e9b\u72b6\u6001\u4ee3\u7801\u8868\u793a\u670d\u52a1\u5668\u5728\u5c1d\u8bd5\u5904\u7406\u8bf7\u6c42\u65f6\u53d1\u751f\u5185\u90e8\u9519\u8bef\u3002 \u8fd9\u4e9b\u9519\u8bef\u53ef\u80fd\u662f\u670d\u52a1\u5668\u672c\u8eab\u7684\u9519\u8bef\uff0c\u800c\u4e0d\u662f\u8bf7\u6c42\u51fa\u9519"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"500   \uff08\u670d\u52a1\u5668\u5185\u90e8\u9519\u8bef\uff09  \u670d\u52a1\u5668\u9047\u5230\u9519\u8bef\uff0c\u65e0\u6cd5\u5b8c\u6210\u8bf7\u6c42\u3002\n501   \uff08\u5c1a\u672a\u5b9e\u65bd\uff09 \u670d\u52a1\u5668\u4e0d\u5177\u5907\u5b8c\u6210\u8bf7\u6c42\u7684\u529f\u80fd\u3002 \u4f8b\u5982\uff0c\u670d\u52a1\u5668\u65e0\u6cd5\u8bc6\u522b\u8bf7\u6c42\u65b9\u6cd5\u65f6\u53ef\u80fd\u4f1a\u8fd4\u56de\u6b64\u4ee3\u7801\u3002\n502   \uff08\u9519\u8bef\u7f51\u5173\uff09 \u670d\u52a1\u5668\u4f5c\u4e3a\u7f51\u5173\u6216\u4ee3\u7406\uff0c\u4ece\u4e0a\u6e38\u670d\u52a1\u5668\u6536\u5230\u65e0\u6548\u54cd\u5e94\u3002\n503   \uff08\u670d\u52a1\u4e0d\u53ef\u7528\uff09 \u670d\u52a1\u5668\u76ee\u524d\u65e0\u6cd5\u4f7f\u7528\uff08\u7531\u4e8e\u8d85\u8f7d\u6216\u505c\u673a\u7ef4\u62a4\uff09\u3002 \u901a\u5e38\uff0c\u8fd9\u53ea\u662f\u6682\u65f6\u72b6\u6001\u3002\n504   \uff08\u7f51\u5173\u8d85\u65f6\uff09  \u670d\u52a1\u5668\u4f5c\u4e3a\u7f51\u5173\u6216\u4ee3\u7406\uff0c\u4f46\u662f\u6ca1\u6709\u53ca\u65f6\u4ece\u4e0a\u6e38\u670d\u52a1\u5668\u6536\u5230\u8bf7\u6c42\u3002\n505   \uff08HTTP \u7248\u672c\u4e0d\u53d7\u652f\u6301\uff09 \u670d\u52a1\u5668\u4e0d\u652f\u6301\u8bf7\u6c42\u4e2d\u6240\u7528\u7684 HTTP \u534f\u8bae\u7248\u672c\u3002\n")),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u884c\u8bf7\u6c42\u5934\u8bf7\u6c42\u4f53\u8be6\u89e3"},"\u8bf7\u6c42\u884c\uff0c\u8bf7\u6c42\u5934\uff0c\u8bf7\u6c42\u4f53\u8be6\u89e3"),(0,r.kt)("h2",{id:"osi-\u6a21\u578b"},"osi \u6a21\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u4e03\u5c42\u7ed3\u6784\uff1a\u7269\u7406\u5c42\u3001\u6570\u636e\u94fe\u8def\u5c42\u3001\u7f51\u7edc\u5c42\u3001\u4f20\u8f93\u5c42\u3001\u4f1a\u8bdd\u5c42\u3001\u8868\u793a\u5c42\u3001\u5e94\u7528\u5c42 tcp ucp\u5c5e\u4e8e\u4f20\u8f93\u5c42\uff1bhttp\u5c5e\u4e8e\u5e94\u7528\u5c42\n")),(0,r.kt)("h2",{id:"http20-http1"},"http2.0 http1"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"HTTP2.0 \u7684\u57fa\u672c\u5355\u4f4d\u4e3a\u4e8c\u8fdb\u5236\u5e27"),(0,r.kt)("li",{parentName:"ol"},"HTTP2.0 \u4e2d\u5e27\u5177\u6709\u4f18\u5148\u7ea7"),(0,r.kt)("li",{parentName:"ol"},"HTTP2.0 \u7684\u591a\u8def\u590d\u7528\uff08 1 \u6b21\u8fde\u63a5\uff09"),(0,r.kt)("li",{parentName:"ol"},"HTTP2.0 \u538b\u7f29\u6d88\u606f\u5934"),(0,r.kt)("li",{parentName:"ol"},"HTTP2.0 \u670d\u52a1\u7aef\u63a8\u9001"),(0,r.kt)("li",{parentName:"ol"},"HTTP2.0 \u53ea\u9002\u7528\u4e8e HTTPS \u7684\u573a\u666f")))}d.isMDXComponent=!0}}]);