"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[76347],{18667:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=r(85893),t=r(11151);const o={},a="electron \u7b14\u8bb0",l={id:"cross-platform/electronjs/note/index",title:"electron \u7b14\u8bb0",description:"Main Process \u6a21\u5757",source:"@site/docs/cross-platform/electronjs/note/index.md",sourceDirName:"cross-platform/electronjs/note",slug:"/cross-platform/electronjs/note/",permalink:"/docs/cross-platform/electronjs/note/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"electronjs",permalink:"/docs/cross-platform/electronjs/"},next:{title:"\u8fdb\u7a0b\u95f4\u901a\u4fe1",permalink:"/docs/cross-platform/electronjs/note/process"}},s={},c=[{value:"Main Process \u6a21\u5757",id:"main-process-\u6a21\u5757",level:2},{value:"app \u63a7\u5236\u5e94\u7528\u7a0b\u5e8f\u7684\u4e8b\u4ef6\u751f\u547d\u5468\u671f",id:"app-\u63a7\u5236\u5e94\u7528\u7a0b\u5e8f\u7684\u4e8b\u4ef6\u751f\u547d\u5468\u671f",level:3},{value:"autoUpdater      \u4f7f\u5e94\u7528\u7a0b\u5e8f\u80fd\u591f\u81ea\u52a8\u66f4\u65b0",id:"autoupdater------\u4f7f\u5e94\u7528\u7a0b\u5e8f\u80fd\u591f\u81ea\u52a8\u66f4\u65b0",level:3},{value:"BrowserView \u7528\u6765\u8ba9 BrowserWindow \u5d4c\u5165\u66f4\u591a\u7684 web \u5185\u5bb9",id:"browserview-\u7528\u6765\u8ba9-browserwindow-\u5d4c\u5165\u66f4\u591a\u7684-web-\u5185\u5bb9",level:3},{value:"BrowserWindow      \u521b\u5efa\u5e76\u63a7\u5236\u6d4f\u89c8\u5668\u7a97\u53e3",id:"browserwindow------\u521b\u5efa\u5e76\u63a7\u5236\u6d4f\u89c8\u5668\u7a97\u53e3",level:3},{value:"clipboard      \u5728\u7cfb\u7edf\u526a\u8d34\u677f\u4e0a\u6267\u884c\u590d\u5236\u548c\u7c98\u8d34\u64cd\u4f5c",id:"clipboard------\u5728\u7cfb\u7edf\u526a\u8d34\u677f\u4e0a\u6267\u884c\u590d\u5236\u548c\u7c98\u8d34\u64cd\u4f5c",level:3},{value:"contentTracing      \u4eceChromium\u6536\u96c6\u8ffd\u8e2a\u6570\u636e\u4ee5\u627e\u5230\u6027\u80fd\u74f6\u9888\u548c\u6162\u64cd\u4f5c",id:"contenttracing------\u4ecechromium\u6536\u96c6\u8ffd\u8e2a\u6570\u636e\u4ee5\u627e\u5230\u6027\u80fd\u74f6\u9888\u548c\u6162\u64cd\u4f5c",level:3},{value:"crashReporter     \u5c06\u5d29\u6e83\u65e5\u5fd7\u63d0\u4ea4\u7ed9\u8fdc\u7a0b\u670d\u52a1\u5668",id:"crashreporter-----\u5c06\u5d29\u6e83\u65e5\u5fd7\u63d0\u4ea4\u7ed9\u8fdc\u7a0b\u670d\u52a1\u5668",level:3},{value:"desktopCapturer PI \u83b7\u53d6\u7684\u53ef\u4ee5\u7528\u6765\u4ece\u684c\u9762\u6355\u83b7\u97f3\u9891\u548c\u89c6\u9891\u7684\u5a92\u4f53\u6e90\u7684\u4fe1\u606f",id:"desktopcapturer-pi-\u83b7\u53d6\u7684\u53ef\u4ee5\u7528\u6765\u4ece\u684c\u9762\u6355\u83b7\u97f3\u9891\u548c\u89c6\u9891\u7684\u5a92\u4f53\u6e90\u7684\u4fe1\u606f",level:3},{value:"dialog     \u663e\u793a\u7528\u4e8e\u6253\u5f00\u548c\u4fdd\u5b58\u6587\u4ef6\u3001\u8b66\u62a5\u7b49\u7684\u672c\u673a\u7cfb\u7edf\u5bf9\u8bdd\u6846",id:"dialog-----\u663e\u793a\u7528\u4e8e\u6253\u5f00\u548c\u4fdd\u5b58\u6587\u4ef6\u8b66\u62a5\u7b49\u7684\u672c\u673a\u7cfb\u7edf\u5bf9\u8bdd\u6846",level:3},{value:"globalShortcut      \u5728\u5e94\u7528\u7a0b\u5e8f\u6ca1\u6709\u952e\u76d8\u7126\u70b9\u65f6\uff0c\u76d1\u542c\u952e\u76d8\u4e8b\u4ef6",id:"globalshortcut------\u5728\u5e94\u7528\u7a0b\u5e8f\u6ca1\u6709\u952e\u76d8\u7126\u70b9\u65f6\u76d1\u542c\u952e\u76d8\u4e8b\u4ef6",level:3},{value:"inAppPurchase      Mac App Store\u4e2d\u7684\u5e94\u7528\u5185\u8d2d\u4e70",id:"inapppurchase------mac-app-store\u4e2d\u7684\u5e94\u7528\u5185\u8d2d\u4e70",level:3},{value:"ipcMain      \u4ece\u4e3b\u8fdb\u7a0b\u5230\u6e32\u67d3\u8fdb\u7a0b\u7684\u5f02\u6b65\u901a\u4fe1",id:"ipcmain------\u4ece\u4e3b\u8fdb\u7a0b\u5230\u6e32\u67d3\u8fdb\u7a0b\u7684\u5f02\u6b65\u901a\u4fe1",level:3},{value:"Menu     \u521b\u5efa\u539f\u751f\u5e94\u7528\u83dc\u5355\u548c\u4e0a\u4e0b\u6587\u83dc\u5355",id:"menu-----\u521b\u5efa\u539f\u751f\u5e94\u7528\u83dc\u5355\u548c\u4e0a\u4e0b\u6587\u83dc\u5355",level:3},{value:"MessageChannelMain \u4e3b\u8fdb\u7a0b\u4e2d\u7528\u4e8e\u901a\u9053\u6d88\u606f\u4f20\u9012\u7684\u901a\u9053\u63a5\u53e3",id:"messagechannelmain-\u4e3b\u8fdb\u7a0b\u4e2d\u7528\u4e8e\u901a\u9053\u6d88\u606f\u4f20\u9012\u7684\u901a\u9053\u63a5\u53e3",level:3},{value:"nativeImage      \u4f7f\u7528 PNG \u6216 JPG \u6587\u4ef6\u521b\u5efa\u6258\u76d8\u3001dock\u548c\u5e94\u7528\u7a0b\u5e8f\u56fe\u6807",id:"nativeimage------\u4f7f\u7528-png-\u6216-jpg-\u6587\u4ef6\u521b\u5efa\u6258\u76d8dock\u548c\u5e94\u7528\u7a0b\u5e8f\u56fe\u6807",level:3},{value:"nativeTheme      \u8bfb\u53d6\u5e76\u54cd\u5e94Chromium\u672c\u5730\u8272\u5f69\u4e3b\u9898\u4e2d\u7684\u53d8\u5316",id:"nativetheme------\u8bfb\u53d6\u5e76\u54cd\u5e94chromium\u672c\u5730\u8272\u5f69\u4e3b\u9898\u4e2d\u7684\u53d8\u5316",level:3},{value:"net      \u4f7f\u7528Chromium\u7684\u539f\u751f\u7f51\u7edc\u5e93\u53d1\u51faHTTP / HTTPS\u8bf7\u6c42",id:"net------\u4f7f\u7528chromium\u7684\u539f\u751f\u7f51\u7edc\u5e93\u53d1\u51fahttp--https\u8bf7\u6c42",level:3},{value:"netLog      \u8bb0\u5f55\u4f1a\u8bdd\u7684\u7f51\u7edc",id:"netlog------\u8bb0\u5f55\u4f1a\u8bdd\u7684\u7f51\u7edc",level:3}];function d(e){const n={h1:"h1",h2:"h2",h3:"h3",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"electron-\u7b14\u8bb0",children:"electron \u7b14\u8bb0"}),"\n",(0,i.jsx)(n.h2,{id:"main-process-\u6a21\u5757",children:"Main Process \u6a21\u5757"}),"\n",(0,i.jsx)(n.h3,{id:"app-\u63a7\u5236\u5e94\u7528\u7a0b\u5e8f\u7684\u4e8b\u4ef6\u751f\u547d\u5468\u671f",children:"app \u63a7\u5236\u5e94\u7528\u7a0b\u5e8f\u7684\u4e8b\u4ef6\u751f\u547d\u5468\u671f"}),"\n",(0,i.jsx)(n.h3,{id:"autoupdater------\u4f7f\u5e94\u7528\u7a0b\u5e8f\u80fd\u591f\u81ea\u52a8\u66f4\u65b0",children:"autoUpdater      \u4f7f\u5e94\u7528\u7a0b\u5e8f\u80fd\u591f\u81ea\u52a8\u66f4\u65b0"}),"\n",(0,i.jsx)(n.h3,{id:"browserview-\u7528\u6765\u8ba9-browserwindow-\u5d4c\u5165\u66f4\u591a\u7684-web-\u5185\u5bb9",children:"BrowserView \u7528\u6765\u8ba9 BrowserWindow \u5d4c\u5165\u66f4\u591a\u7684 web \u5185\u5bb9"}),"\n",(0,i.jsx)(n.h3,{id:"browserwindow------\u521b\u5efa\u5e76\u63a7\u5236\u6d4f\u89c8\u5668\u7a97\u53e3",children:"BrowserWindow      \u521b\u5efa\u5e76\u63a7\u5236\u6d4f\u89c8\u5668\u7a97\u53e3"}),"\n",(0,i.jsx)(n.h3,{id:"clipboard------\u5728\u7cfb\u7edf\u526a\u8d34\u677f\u4e0a\u6267\u884c\u590d\u5236\u548c\u7c98\u8d34\u64cd\u4f5c",children:"clipboard      \u5728\u7cfb\u7edf\u526a\u8d34\u677f\u4e0a\u6267\u884c\u590d\u5236\u548c\u7c98\u8d34\u64cd\u4f5c"}),"\n",(0,i.jsx)(n.h3,{id:"contenttracing------\u4ecechromium\u6536\u96c6\u8ffd\u8e2a\u6570\u636e\u4ee5\u627e\u5230\u6027\u80fd\u74f6\u9888\u548c\u6162\u64cd\u4f5c",children:"contentTracing      \u4eceChromium\u6536\u96c6\u8ffd\u8e2a\u6570\u636e\u4ee5\u627e\u5230\u6027\u80fd\u74f6\u9888\u548c\u6162\u64cd\u4f5c"}),"\n",(0,i.jsx)(n.h3,{id:"crashreporter-----\u5c06\u5d29\u6e83\u65e5\u5fd7\u63d0\u4ea4\u7ed9\u8fdc\u7a0b\u670d\u52a1\u5668",children:"crashReporter     \u5c06\u5d29\u6e83\u65e5\u5fd7\u63d0\u4ea4\u7ed9\u8fdc\u7a0b\u670d\u52a1\u5668"}),"\n",(0,i.jsx)(n.h3,{id:"desktopcapturer-pi-\u83b7\u53d6\u7684\u53ef\u4ee5\u7528\u6765\u4ece\u684c\u9762\u6355\u83b7\u97f3\u9891\u548c\u89c6\u9891\u7684\u5a92\u4f53\u6e90\u7684\u4fe1\u606f",children:"desktopCapturer PI \u83b7\u53d6\u7684\u53ef\u4ee5\u7528\u6765\u4ece\u684c\u9762\u6355\u83b7\u97f3\u9891\u548c\u89c6\u9891\u7684\u5a92\u4f53\u6e90\u7684\u4fe1\u606f"}),"\n",(0,i.jsx)(n.h3,{id:"dialog-----\u663e\u793a\u7528\u4e8e\u6253\u5f00\u548c\u4fdd\u5b58\u6587\u4ef6\u8b66\u62a5\u7b49\u7684\u672c\u673a\u7cfb\u7edf\u5bf9\u8bdd\u6846",children:"dialog     \u663e\u793a\u7528\u4e8e\u6253\u5f00\u548c\u4fdd\u5b58\u6587\u4ef6\u3001\u8b66\u62a5\u7b49\u7684\u672c\u673a\u7cfb\u7edf\u5bf9\u8bdd\u6846"}),"\n",(0,i.jsx)(n.h3,{id:"globalshortcut------\u5728\u5e94\u7528\u7a0b\u5e8f\u6ca1\u6709\u952e\u76d8\u7126\u70b9\u65f6\u76d1\u542c\u952e\u76d8\u4e8b\u4ef6",children:"globalShortcut      \u5728\u5e94\u7528\u7a0b\u5e8f\u6ca1\u6709\u952e\u76d8\u7126\u70b9\u65f6\uff0c\u76d1\u542c\u952e\u76d8\u4e8b\u4ef6"}),"\n",(0,i.jsx)(n.h3,{id:"inapppurchase------mac-app-store\u4e2d\u7684\u5e94\u7528\u5185\u8d2d\u4e70",children:"inAppPurchase      Mac App Store\u4e2d\u7684\u5e94\u7528\u5185\u8d2d\u4e70"}),"\n",(0,i.jsx)(n.h3,{id:"ipcmain------\u4ece\u4e3b\u8fdb\u7a0b\u5230\u6e32\u67d3\u8fdb\u7a0b\u7684\u5f02\u6b65\u901a\u4fe1",children:"ipcMain      \u4ece\u4e3b\u8fdb\u7a0b\u5230\u6e32\u67d3\u8fdb\u7a0b\u7684\u5f02\u6b65\u901a\u4fe1"}),"\n",(0,i.jsx)(n.h3,{id:"menu-----\u521b\u5efa\u539f\u751f\u5e94\u7528\u83dc\u5355\u548c\u4e0a\u4e0b\u6587\u83dc\u5355",children:"Menu     \u521b\u5efa\u539f\u751f\u5e94\u7528\u83dc\u5355\u548c\u4e0a\u4e0b\u6587\u83dc\u5355"}),"\n",(0,i.jsx)(n.h3,{id:"messagechannelmain-\u4e3b\u8fdb\u7a0b\u4e2d\u7528\u4e8e\u901a\u9053\u6d88\u606f\u4f20\u9012\u7684\u901a\u9053\u63a5\u53e3",children:"MessageChannelMain \u4e3b\u8fdb\u7a0b\u4e2d\u7528\u4e8e\u901a\u9053\u6d88\u606f\u4f20\u9012\u7684\u901a\u9053\u63a5\u53e3"}),"\n",(0,i.jsx)(n.h3,{id:"nativeimage------\u4f7f\u7528-png-\u6216-jpg-\u6587\u4ef6\u521b\u5efa\u6258\u76d8dock\u548c\u5e94\u7528\u7a0b\u5e8f\u56fe\u6807",children:"nativeImage      \u4f7f\u7528 PNG \u6216 JPG \u6587\u4ef6\u521b\u5efa\u6258\u76d8\u3001dock\u548c\u5e94\u7528\u7a0b\u5e8f\u56fe\u6807"}),"\n",(0,i.jsx)(n.h3,{id:"nativetheme------\u8bfb\u53d6\u5e76\u54cd\u5e94chromium\u672c\u5730\u8272\u5f69\u4e3b\u9898\u4e2d\u7684\u53d8\u5316",children:"nativeTheme      \u8bfb\u53d6\u5e76\u54cd\u5e94Chromium\u672c\u5730\u8272\u5f69\u4e3b\u9898\u4e2d\u7684\u53d8\u5316"}),"\n",(0,i.jsx)(n.h3,{id:"net------\u4f7f\u7528chromium\u7684\u539f\u751f\u7f51\u7edc\u5e93\u53d1\u51fahttp--https\u8bf7\u6c42",children:"net      \u4f7f\u7528Chromium\u7684\u539f\u751f\u7f51\u7edc\u5e93\u53d1\u51faHTTP / HTTPS\u8bf7\u6c42"}),"\n",(0,i.jsx)(n.h3,{id:"netlog------\u8bb0\u5f55\u4f1a\u8bdd\u7684\u7f51\u7edc",children:"netLog      \u8bb0\u5f55\u4f1a\u8bdd\u7684\u7f51\u7edc"})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>a});var i=r(67294);const t={},o=i.createContext(t);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);