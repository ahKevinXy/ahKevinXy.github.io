"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[6347],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return v}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),m=o,v=s["".concat(c,".").concat(m)]||s[m]||d[m]||i;return r?n.createElement(v,a(a({ref:t},u),{},{components:r})):n.createElement(v,a({ref:t},u))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},94275:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],l={},c="electron \u7b14\u8bb0",p={unversionedId:"cross-platform/electronjs/note/index",id:"cross-platform/electronjs/note/index",title:"electron \u7b14\u8bb0",description:"Main Process \u6a21\u5757",source:"@site/docs/cross-platform/electronjs/note/index.md",sourceDirName:"cross-platform/electronjs/note",slug:"/cross-platform/electronjs/note/",permalink:"/docs/cross-platform/electronjs/note/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"electronjs",permalink:"/docs/cross-platform/electronjs/"},next:{title:"\u8fdb\u7a0b\u95f4\u901a\u4fe1",permalink:"/docs/cross-platform/electronjs/note/process"}},u={},s=[{value:"Main Process \u6a21\u5757",id:"main-process-\u6a21\u5757",level:2},{value:"app \u63a7\u5236\u5e94\u7528\u7a0b\u5e8f\u7684\u4e8b\u4ef6\u751f\u547d\u5468\u671f",id:"app-\u63a7\u5236\u5e94\u7528\u7a0b\u5e8f\u7684\u4e8b\u4ef6\u751f\u547d\u5468\u671f",level:3},{value:"autoUpdater      \u4f7f\u5e94\u7528\u7a0b\u5e8f\u80fd\u591f\u81ea\u52a8\u66f4\u65b0",id:"autoupdater------\u4f7f\u5e94\u7528\u7a0b\u5e8f\u80fd\u591f\u81ea\u52a8\u66f4\u65b0",level:3},{value:"BrowserView \u7528\u6765\u8ba9 BrowserWindow \u5d4c\u5165\u66f4\u591a\u7684 web \u5185\u5bb9",id:"browserview-\u7528\u6765\u8ba9-browserwindow-\u5d4c\u5165\u66f4\u591a\u7684-web-\u5185\u5bb9",level:3},{value:"BrowserWindow      \u521b\u5efa\u5e76\u63a7\u5236\u6d4f\u89c8\u5668\u7a97\u53e3",id:"browserwindow------\u521b\u5efa\u5e76\u63a7\u5236\u6d4f\u89c8\u5668\u7a97\u53e3",level:3},{value:"clipboard      \u5728\u7cfb\u7edf\u526a\u8d34\u677f\u4e0a\u6267\u884c\u590d\u5236\u548c\u7c98\u8d34\u64cd\u4f5c",id:"clipboard------\u5728\u7cfb\u7edf\u526a\u8d34\u677f\u4e0a\u6267\u884c\u590d\u5236\u548c\u7c98\u8d34\u64cd\u4f5c",level:3},{value:"contentTracing      \u4eceChromium\u6536\u96c6\u8ffd\u8e2a\u6570\u636e\u4ee5\u627e\u5230\u6027\u80fd\u74f6\u9888\u548c\u6162\u64cd\u4f5c",id:"contenttracing------\u4ecechromium\u6536\u96c6\u8ffd\u8e2a\u6570\u636e\u4ee5\u627e\u5230\u6027\u80fd\u74f6\u9888\u548c\u6162\u64cd\u4f5c",level:3},{value:"crashReporter     \u5c06\u5d29\u6e83\u65e5\u5fd7\u63d0\u4ea4\u7ed9\u8fdc\u7a0b\u670d\u52a1\u5668",id:"crashreporter-----\u5c06\u5d29\u6e83\u65e5\u5fd7\u63d0\u4ea4\u7ed9\u8fdc\u7a0b\u670d\u52a1\u5668",level:3},{value:"desktopCapturer PI \u83b7\u53d6\u7684\u53ef\u4ee5\u7528\u6765\u4ece\u684c\u9762\u6355\u83b7\u97f3\u9891\u548c\u89c6\u9891\u7684\u5a92\u4f53\u6e90\u7684\u4fe1\u606f",id:"desktopcapturer-pi-\u83b7\u53d6\u7684\u53ef\u4ee5\u7528\u6765\u4ece\u684c\u9762\u6355\u83b7\u97f3\u9891\u548c\u89c6\u9891\u7684\u5a92\u4f53\u6e90\u7684\u4fe1\u606f",level:3},{value:"dialog     \u663e\u793a\u7528\u4e8e\u6253\u5f00\u548c\u4fdd\u5b58\u6587\u4ef6\u3001\u8b66\u62a5\u7b49\u7684\u672c\u673a\u7cfb\u7edf\u5bf9\u8bdd\u6846",id:"dialog-----\u663e\u793a\u7528\u4e8e\u6253\u5f00\u548c\u4fdd\u5b58\u6587\u4ef6\u8b66\u62a5\u7b49\u7684\u672c\u673a\u7cfb\u7edf\u5bf9\u8bdd\u6846",level:3},{value:"globalShortcut      \u5728\u5e94\u7528\u7a0b\u5e8f\u6ca1\u6709\u952e\u76d8\u7126\u70b9\u65f6\uff0c\u76d1\u542c\u952e\u76d8\u4e8b\u4ef6",id:"globalshortcut------\u5728\u5e94\u7528\u7a0b\u5e8f\u6ca1\u6709\u952e\u76d8\u7126\u70b9\u65f6\u76d1\u542c\u952e\u76d8\u4e8b\u4ef6",level:3},{value:"inAppPurchase      Mac App Store\u4e2d\u7684\u5e94\u7528\u5185\u8d2d\u4e70",id:"inapppurchase------mac-app-store\u4e2d\u7684\u5e94\u7528\u5185\u8d2d\u4e70",level:3},{value:"ipcMain      \u4ece\u4e3b\u8fdb\u7a0b\u5230\u6e32\u67d3\u8fdb\u7a0b\u7684\u5f02\u6b65\u901a\u4fe1",id:"ipcmain------\u4ece\u4e3b\u8fdb\u7a0b\u5230\u6e32\u67d3\u8fdb\u7a0b\u7684\u5f02\u6b65\u901a\u4fe1",level:3},{value:"Menu     \u521b\u5efa\u539f\u751f\u5e94\u7528\u83dc\u5355\u548c\u4e0a\u4e0b\u6587\u83dc\u5355",id:"menu-----\u521b\u5efa\u539f\u751f\u5e94\u7528\u83dc\u5355\u548c\u4e0a\u4e0b\u6587\u83dc\u5355",level:3},{value:"MessageChannelMain \u4e3b\u8fdb\u7a0b\u4e2d\u7528\u4e8e\u901a\u9053\u6d88\u606f\u4f20\u9012\u7684\u901a\u9053\u63a5\u53e3",id:"messagechannelmain-\u4e3b\u8fdb\u7a0b\u4e2d\u7528\u4e8e\u901a\u9053\u6d88\u606f\u4f20\u9012\u7684\u901a\u9053\u63a5\u53e3",level:3},{value:"nativeImage      \u4f7f\u7528 PNG \u6216 JPG \u6587\u4ef6\u521b\u5efa\u6258\u76d8\u3001dock\u548c\u5e94\u7528\u7a0b\u5e8f\u56fe\u6807",id:"nativeimage------\u4f7f\u7528-png-\u6216-jpg-\u6587\u4ef6\u521b\u5efa\u6258\u76d8dock\u548c\u5e94\u7528\u7a0b\u5e8f\u56fe\u6807",level:3},{value:"nativeTheme      \u8bfb\u53d6\u5e76\u54cd\u5e94Chromium\u672c\u5730\u8272\u5f69\u4e3b\u9898\u4e2d\u7684\u53d8\u5316",id:"nativetheme------\u8bfb\u53d6\u5e76\u54cd\u5e94chromium\u672c\u5730\u8272\u5f69\u4e3b\u9898\u4e2d\u7684\u53d8\u5316",level:3},{value:"net      \u4f7f\u7528Chromium\u7684\u539f\u751f\u7f51\u7edc\u5e93\u53d1\u51faHTTP / HTTPS\u8bf7\u6c42",id:"net------\u4f7f\u7528chromium\u7684\u539f\u751f\u7f51\u7edc\u5e93\u53d1\u51fahttp--https\u8bf7\u6c42",level:3},{value:"netLog      \u8bb0\u5f55\u4f1a\u8bdd\u7684\u7f51\u7edc",id:"netlog------\u8bb0\u5f55\u4f1a\u8bdd\u7684\u7f51\u7edc",level:3}],d={toc:s},m="wrapper";function v(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"electron-\u7b14\u8bb0"},"electron \u7b14\u8bb0"),(0,i.kt)("h2",{id:"main-process-\u6a21\u5757"},"Main Process \u6a21\u5757"),(0,i.kt)("h3",{id:"app-\u63a7\u5236\u5e94\u7528\u7a0b\u5e8f\u7684\u4e8b\u4ef6\u751f\u547d\u5468\u671f"},"app \u63a7\u5236\u5e94\u7528\u7a0b\u5e8f\u7684\u4e8b\u4ef6\u751f\u547d\u5468\u671f"),(0,i.kt)("h3",{id:"autoupdater------\u4f7f\u5e94\u7528\u7a0b\u5e8f\u80fd\u591f\u81ea\u52a8\u66f4\u65b0"},"autoUpdater      \u4f7f\u5e94\u7528\u7a0b\u5e8f\u80fd\u591f\u81ea\u52a8\u66f4\u65b0"),(0,i.kt)("h3",{id:"browserview-\u7528\u6765\u8ba9-browserwindow-\u5d4c\u5165\u66f4\u591a\u7684-web-\u5185\u5bb9"},"BrowserView \u7528\u6765\u8ba9 BrowserWindow \u5d4c\u5165\u66f4\u591a\u7684 web \u5185\u5bb9"),(0,i.kt)("h3",{id:"browserwindow------\u521b\u5efa\u5e76\u63a7\u5236\u6d4f\u89c8\u5668\u7a97\u53e3"},"BrowserWindow      \u521b\u5efa\u5e76\u63a7\u5236\u6d4f\u89c8\u5668\u7a97\u53e3"),(0,i.kt)("h3",{id:"clipboard------\u5728\u7cfb\u7edf\u526a\u8d34\u677f\u4e0a\u6267\u884c\u590d\u5236\u548c\u7c98\u8d34\u64cd\u4f5c"},"clipboard      \u5728\u7cfb\u7edf\u526a\u8d34\u677f\u4e0a\u6267\u884c\u590d\u5236\u548c\u7c98\u8d34\u64cd\u4f5c"),(0,i.kt)("h3",{id:"contenttracing------\u4ecechromium\u6536\u96c6\u8ffd\u8e2a\u6570\u636e\u4ee5\u627e\u5230\u6027\u80fd\u74f6\u9888\u548c\u6162\u64cd\u4f5c"},"contentTracing      \u4eceChromium\u6536\u96c6\u8ffd\u8e2a\u6570\u636e\u4ee5\u627e\u5230\u6027\u80fd\u74f6\u9888\u548c\u6162\u64cd\u4f5c"),(0,i.kt)("h3",{id:"crashreporter-----\u5c06\u5d29\u6e83\u65e5\u5fd7\u63d0\u4ea4\u7ed9\u8fdc\u7a0b\u670d\u52a1\u5668"},"crashReporter     \u5c06\u5d29\u6e83\u65e5\u5fd7\u63d0\u4ea4\u7ed9\u8fdc\u7a0b\u670d\u52a1\u5668"),(0,i.kt)("h3",{id:"desktopcapturer-pi-\u83b7\u53d6\u7684\u53ef\u4ee5\u7528\u6765\u4ece\u684c\u9762\u6355\u83b7\u97f3\u9891\u548c\u89c6\u9891\u7684\u5a92\u4f53\u6e90\u7684\u4fe1\u606f"},"desktopCapturer PI \u83b7\u53d6\u7684\u53ef\u4ee5\u7528\u6765\u4ece\u684c\u9762\u6355\u83b7\u97f3\u9891\u548c\u89c6\u9891\u7684\u5a92\u4f53\u6e90\u7684\u4fe1\u606f"),(0,i.kt)("h3",{id:"dialog-----\u663e\u793a\u7528\u4e8e\u6253\u5f00\u548c\u4fdd\u5b58\u6587\u4ef6\u8b66\u62a5\u7b49\u7684\u672c\u673a\u7cfb\u7edf\u5bf9\u8bdd\u6846"},"dialog     \u663e\u793a\u7528\u4e8e\u6253\u5f00\u548c\u4fdd\u5b58\u6587\u4ef6\u3001\u8b66\u62a5\u7b49\u7684\u672c\u673a\u7cfb\u7edf\u5bf9\u8bdd\u6846"),(0,i.kt)("h3",{id:"globalshortcut------\u5728\u5e94\u7528\u7a0b\u5e8f\u6ca1\u6709\u952e\u76d8\u7126\u70b9\u65f6\u76d1\u542c\u952e\u76d8\u4e8b\u4ef6"},"globalShortcut      \u5728\u5e94\u7528\u7a0b\u5e8f\u6ca1\u6709\u952e\u76d8\u7126\u70b9\u65f6\uff0c\u76d1\u542c\u952e\u76d8\u4e8b\u4ef6"),(0,i.kt)("h3",{id:"inapppurchase------mac-app-store\u4e2d\u7684\u5e94\u7528\u5185\u8d2d\u4e70"},"inAppPurchase      Mac App Store\u4e2d\u7684\u5e94\u7528\u5185\u8d2d\u4e70"),(0,i.kt)("h3",{id:"ipcmain------\u4ece\u4e3b\u8fdb\u7a0b\u5230\u6e32\u67d3\u8fdb\u7a0b\u7684\u5f02\u6b65\u901a\u4fe1"},"ipcMain      \u4ece\u4e3b\u8fdb\u7a0b\u5230\u6e32\u67d3\u8fdb\u7a0b\u7684\u5f02\u6b65\u901a\u4fe1"),(0,i.kt)("h3",{id:"menu-----\u521b\u5efa\u539f\u751f\u5e94\u7528\u83dc\u5355\u548c\u4e0a\u4e0b\u6587\u83dc\u5355"},"Menu     \u521b\u5efa\u539f\u751f\u5e94\u7528\u83dc\u5355\u548c\u4e0a\u4e0b\u6587\u83dc\u5355"),(0,i.kt)("h3",{id:"messagechannelmain-\u4e3b\u8fdb\u7a0b\u4e2d\u7528\u4e8e\u901a\u9053\u6d88\u606f\u4f20\u9012\u7684\u901a\u9053\u63a5\u53e3"},"MessageChannelMain \u4e3b\u8fdb\u7a0b\u4e2d\u7528\u4e8e\u901a\u9053\u6d88\u606f\u4f20\u9012\u7684\u901a\u9053\u63a5\u53e3"),(0,i.kt)("h3",{id:"nativeimage------\u4f7f\u7528-png-\u6216-jpg-\u6587\u4ef6\u521b\u5efa\u6258\u76d8dock\u548c\u5e94\u7528\u7a0b\u5e8f\u56fe\u6807"},"nativeImage      \u4f7f\u7528 PNG \u6216 JPG \u6587\u4ef6\u521b\u5efa\u6258\u76d8\u3001dock\u548c\u5e94\u7528\u7a0b\u5e8f\u56fe\u6807"),(0,i.kt)("h3",{id:"nativetheme------\u8bfb\u53d6\u5e76\u54cd\u5e94chromium\u672c\u5730\u8272\u5f69\u4e3b\u9898\u4e2d\u7684\u53d8\u5316"},"nativeTheme      \u8bfb\u53d6\u5e76\u54cd\u5e94Chromium\u672c\u5730\u8272\u5f69\u4e3b\u9898\u4e2d\u7684\u53d8\u5316"),(0,i.kt)("h3",{id:"net------\u4f7f\u7528chromium\u7684\u539f\u751f\u7f51\u7edc\u5e93\u53d1\u51fahttp--https\u8bf7\u6c42"},"net      \u4f7f\u7528Chromium\u7684\u539f\u751f\u7f51\u7edc\u5e93\u53d1\u51faHTTP / HTTPS\u8bf7\u6c42"),(0,i.kt)("h3",{id:"netlog------\u8bb0\u5f55\u4f1a\u8bdd\u7684\u7f51\u7edc"},"netLog      \u8bb0\u5f55\u4f1a\u8bdd\u7684\u7f51\u7edc"))}v.isMDXComponent=!0}}]);