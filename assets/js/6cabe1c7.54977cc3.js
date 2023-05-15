"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[4762],{3905:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return d}});var o=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},a=Object.keys(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var u=o.createContext({}),c=function(n){var e=o.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},p=function(n){var e=c(n.components);return o.createElement(u.Provider,{value:e},n.children)},m="mdxType",s={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},g=o.forwardRef((function(n,e){var t=n.components,r=n.mdxType,a=n.originalType,u=n.parentName,p=i(n,["components","mdxType","originalType","parentName"]),m=c(t),g=r,d=m["".concat(u,".").concat(g)]||m[g]||s[g]||a;return t?o.createElement(d,l(l({ref:e},p),{},{components:t})):o.createElement(d,l({ref:e},p))}));function d(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var a=t.length,l=new Array(a);l[0]=g;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=n,i[m]="string"==typeof n?n:r,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},67983:function(n,e,t){t.r(e),t.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return m}});var o=t(87462),r=t(63366),a=(t(67294),t(3905)),l=["components"],i={},u="\u9762\u5411\u5e76\u53d1\u7684\u5185\u5b58\u6a21\u578b",c={unversionedId:"backend/go/base/concurrency_model",id:"backend/go/base/concurrency_model",title:"\u9762\u5411\u5e76\u53d1\u7684\u5185\u5b58\u6a21\u578b",description:"Goroutine\u548c\u7cfb\u7edf\u7ebf\u7a0b",source:"@site/docs/backend/go/base/concurrency_model.md",sourceDirName:"backend/go/base",slug:"/backend/go/base/concurrency_model",permalink:"/docs/backend/go/base/concurrency_model",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5e38\u89c1\u7684\u5e76\u53d1\u6a21\u5f0f",permalink:"/docs/backend/go/base/common_ complication"},next:{title:"\u5206\u5e03\u5f0f\u914d\u7f6e\u7ba1\u7406",permalink:"/docs/backend/go/base/config"}},p={},m=[{value:"Goroutine\u548c\u7cfb\u7edf\u7ebf\u7a0b",id:"goroutine\u548c\u7cfb\u7edf\u7ebf\u7a0b",level:2},{value:"\u539f\u5b50\u64cd\u4f5c",id:"\u539f\u5b50\u64cd\u4f5c",level:2},{value:"\u987a\u5e8f\u4e00\u81f4\u6027\u5185\u5b58\u6a21\u578b",id:"\u987a\u5e8f\u4e00\u81f4\u6027\u5185\u5b58\u6a21\u578b",level:2},{value:"\u521d\u59cb\u5316\u987a\u5e8f",id:"\u521d\u59cb\u5316\u987a\u5e8f",level:2},{value:"Goroutine\u7684\u521b\u5efa",id:"goroutine\u7684\u521b\u5efa",level:2},{value:"\u57fa\u4e8eChannel\u7684\u901a\u4fe1",id:"\u57fa\u4e8echannel\u7684\u901a\u4fe1",level:2},{value:"\u4e0d\u9760\u8c31\u7684\u540c\u6b65",id:"\u4e0d\u9760\u8c31\u7684\u540c\u6b65",level:2}],s={toc:m},g="wrapper";function d(n){var e=n.components,t=(0,r.Z)(n,l);return(0,a.kt)(g,(0,o.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u9762\u5411\u5e76\u53d1\u7684\u5185\u5b58\u6a21\u578b"},"\u9762\u5411\u5e76\u53d1\u7684\u5185\u5b58\u6a21\u578b"),(0,a.kt)("h2",{id:"goroutine\u548c\u7cfb\u7edf\u7ebf\u7a0b"},"Goroutine\u548c\u7cfb\u7edf\u7ebf\u7a0b"),(0,a.kt)("p",null,"\u6bcf\u4e2a\u7cfb\u7edf\u7ea7\u7ebf\u7a0b\u90fd\u4f1a\u6709\u4e00\u4e2a\u56fa\u5b9a\u5927\u5c0f\u7684\u6808\uff08\u4e00\u822c\u9ed8\u8ba4\u53ef\u80fd\u662f2MB\uff09\uff0c\u8fd9\u4e2a\u6808\u4e3b\u8981\u7528\u6765\u4fdd\u5b58\u51fd\u6570\u9012\u5f52\u8c03\u7528\u65f6\u53c2\u6570\u548c\u5c40\u90e8\u53d8\u91cf\u3002\u56fa\u5b9a\u4e86\u6808\u7684\u5927\u5c0f\u5bfc\u81f4\u4e86\u4e24\u4e2a\u95ee\u9898\uff1a\u4e00\u662f\u5bf9\u4e8e\u5f88\u591a\u53ea\u9700\u8981\u5f88\u5c0f\u7684\u6808\u7a7a\u95f4\u7684\u7ebf\u7a0b\u6765\u8bf4\u662f\u4e00\u4e2a\u5de8\u5927\u7684\u6d6a\u8d39\uff0c\u4e8c\u662f\u5bf9\u4e8e\u5c11\u6570\u9700\u8981\u5de8\u5927\u6808\u7a7a\u95f4\u7684\u7ebf\u7a0b\u6765\u8bf4\u53c8\u9762\u4e34\u6808\u6ea2\u51fa\u7684\u98ce\u9669\u3002\u9488\u5bf9\u8fd9\u4e24\u4e2a\u95ee\u9898\u7684\u89e3\u51b3\u65b9\u6848\u662f\uff1a\u8981\u4e48\u964d\u4f4e\u56fa\u5b9a\u7684\u6808\u5927\u5c0f\uff0c\u63d0\u5347\u7a7a\u95f4\u7684\u5229\u7528\u7387\uff1b\u8981\u4e48\u589e\u5927\u6808\u7684\u5927\u5c0f\u4ee5\u5141\u8bb8\u66f4\u6df1\u7684\u51fd\u6570\u9012\u5f52\u8c03\u7528\uff0c\u4f46\u8fd9\u4e24\u8005\u662f\u6ca1\u6cd5\u540c\u65f6\u517c\u5f97\u7684\u3002\u76f8\u53cd\uff0c\u4e00\u4e2aGoroutine\u4f1a\u4ee5\u4e00\u4e2a\u5f88\u5c0f\u7684\u6808\u542f\u52a8\uff08\u53ef\u80fd\u662f2KB\u62164KB\uff09\uff0c\u5f53\u9047\u5230\u6df1\u5ea6\u9012\u5f52\u5bfc\u81f4\u5f53\u524d\u6808\u7a7a\u95f4\u4e0d\u8db3\u65f6\uff0cGoroutine\u4f1a\u6839\u636e\u9700\u8981\u52a8\u6001\u5730\u4f38\u7f29\u6808\u7684\u5927\u5c0f\uff08\u4e3b\u6d41\u5b9e\u73b0\u4e2d\u6808\u7684\u6700\u5927\u503c\u53ef\u8fbe\u52301GB\uff09\u3002\u56e0\u4e3a\u542f\u52a8\u7684\u4ee3\u4ef7\u5f88\u5c0f\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u8f7b\u6613\u5730\u542f\u52a8\u6210\u5343\u4e0a\u4e07\u4e2aGoroutine\u3002"),(0,a.kt)("p",null,"Go\u7684\u8fd0\u884c\u65f6\u8fd8\u5305\u542b\u4e86\u5176\u81ea\u5df1\u7684\u8c03\u5ea6\u5668\uff0c\u8fd9\u4e2a\u8c03\u5ea6\u5668\u4f7f\u7528\u4e86\u4e00\u4e9b\u6280\u672f\u624b\u6bb5\uff0c\u53ef\u4ee5\u5728n\u4e2a\u64cd\u4f5c\u7cfb\u7edf\u7ebf\u7a0b\u4e0a\u591a\u5de5\u8c03\u5ea6m\u4e2aGoroutine\u3002Go\u8c03\u5ea6\u5668\u7684\u5de5\u4f5c\u548c\u5185\u6838\u7684\u8c03\u5ea6\u662f\u76f8\u4f3c\u7684\uff0c\u4f46\u662f\u8fd9\u4e2a\u8c03\u5ea6\u5668\u53ea\u5173\u6ce8\u5355\u72ec\u7684Go\u7a0b\u5e8f\u4e2d\u7684Goroutine\u3002Goroutine\u91c7\u7528\u7684\u662f\u534a\u62a2\u5360\u5f0f\u7684\u534f\u4f5c\u8c03\u5ea6\uff0c\u53ea\u6709\u5728\u5f53\u524dGoroutine\u53d1\u751f\u963b\u585e\u65f6\u624d\u4f1a\u5bfc\u81f4\u8c03\u5ea6\uff1b\u540c\u65f6\u53d1\u751f\u5728\u7528\u6237\u6001\uff0c\u8c03\u5ea6\u5668\u4f1a\u6839\u636e\u5177\u4f53\u51fd\u6570\u53ea\u4fdd\u5b58\u5fc5\u8981\u7684\u5bc4\u5b58\u5668\uff0c\u5207\u6362\u7684\u4ee3\u4ef7\u8981\u6bd4\u7cfb\u7edf\u7ebf\u7a0b\u4f4e\u5f97\u591a\u3002\u8fd0\u884c\u65f6\u6709\u4e00\u4e2aruntime.GOMAXPROCS\u53d8\u91cf\uff0c\u7528\u4e8e\u63a7\u5236\u5f53\u524d\u8fd0\u884c\u6b63\u5e38\u975e\u963b\u585eGoroutine\u7684\u7cfb\u7edf\u7ebf\u7a0b\u6570\u76ee\u3002"),(0,a.kt)("p",null,"\u5728Go\u8bed\u8a00\u4e2d\u542f\u52a8\u4e00\u4e2aGoroutine\u4e0d\u4ec5\u548c\u8c03\u7528\u51fd\u6570\u4e00\u6837\u7b80\u5355\uff0c\u800c\u4e14Goroutine\u4e4b\u95f4\u8c03\u5ea6\u4ee3\u4ef7\u4e5f\u5f88\u4f4e\uff0c\u8fd9\u4e9b\u56e0\u7d20\u6781\u5927\u5730\u4fc3\u8fdb\u4e86\u5e76\u53d1\u7f16\u7a0b\u7684\u6d41\u884c\u548c\u53d1\u5c55\u3002"),(0,a.kt)("h2",{id:"\u539f\u5b50\u64cd\u4f5c"},"\u539f\u5b50\u64cd\u4f5c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u539f\u5b50\u64cd\u4f5c\u5c31\u662f\u5e76\u53d1\u7f16\u7a0b\u4e2d\u201c\u6700\u5c0f\u7684\u4e14\u4e0d\u53ef\u5e76\u884c\u5316\u201d\u7684\u64cd\u4f5c\u3002\u901a\u5e38\uff0c\u5982\u679c\u591a\u4e2a\u5e76\u53d1\u4f53\u5bf9\u540c\u4e00\u4e2a\u5171\u4eab\u8d44\u6e90\u8fdb\u884c\u7684\u64cd\u4f5c\u662f\u539f\u5b50\u7684\u8bdd\uff0c\u90a3\u4e48\u540c\u4e00\u65f6\u523b\u6700\u591a\u53ea\u80fd\u6709\u4e00\u4e2a\u5e76\u53d1\u4f53\u5bf9\u8be5\u8d44\u6e90\u8fdb\u884c\u64cd\u4f5c\u3002\u4ece\u7ebf\u7a0b\u89d2\u5ea6\u770b\uff0c\u5728\u5f53\u524d\u7ebf\u7a0b\u4fee\u6539\u5171\u4eab\u8d44\u6e90\u671f\u95f4\uff0c\u5176\u5b83\u7684\u7ebf\u7a0b\u662f\u4e0d\u80fd\u8bbf\u95ee\u8be5\u8d44\u6e90\u7684\u3002\u539f\u5b50\u64cd\u4f5c\u5bf9\u4e8e\u591a\u7ebf\u7a0b\u5e76\u53d1\u7f16\u7a0b\u6a21\u578b\u6765\u8bf4\uff0c\u4e0d\u4f1a\u53d1\u751f\u6709\u522b\u4e8e\u5355\u7ebf\u7a0b\u7684\u610f\u5916\u60c5\u51b5\uff0c\u5171\u4eab\u8d44\u6e90\u7684\u5b8c\u6574\u6027\u53ef\u4ee5\u5f97\u5230\u4fdd\u8bc1\u3002\n\n\n\u539f\u5b50\u64cd\u4f5c\u90fd\u662f\u901a\u8fc7\u201c\u4e92\u65a5\u201d\u8bbf\u95ee\u6765\u4fdd\u8bc1\u7684\uff0c\u901a\u5e38\u7531\u7279\u6b8a\u7684CPU\u6307\u4ee4\u63d0\u4f9b\u4fdd\u62a4\u3002\u5f53\u7136\uff0c\u5982\u679c\u4ec5\u4ec5\u662f\u60f3\u6a21\u62df\u4e0b\u7c97\u7c92\u5ea6\u7684\u539f\u5b50\u64cd\u4f5c\uff0c\u6211\u4eec\u53ef\u4ee5\u501f\u52a9\u4e8esync.Mutex\u6765\u5b9e\u73b0\uff1a\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Go"},'import (\n    "sync"\n)\n\nvar total struct {\n    sync.Mutex\n    value int\n}\n\nfunc worker(wg *sync.WaitGroup) {\n    defer wg.Done()\n\n    for i := 0; i <= 100; i++ {\n        total.Lock()\n        total.value += i\n        total.Unlock()\n    }\n}\n\nfunc main() {\n    var wg sync.WaitGroup\n    wg.Add(2)\n    go worker(&wg)\n    go worker(&wg)\n    wg.Wait()\n\n    fmt.Println(total.value)\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u7528\u4e92\u65a5\u9501\u6765\u4fdd\u62a4\u4e00\u4e2a\u6570\u503c\u578b\u7684\u5171\u4eab\u8d44\u6e90\uff0c\u9ebb\u70e6\u4e14\u6548\u7387\u4f4e\u4e0b\u3002\u6807\u51c6\u5e93\u7684sync/atomic\u5305\u5bf9\u539f\u5b50\u64cd\u4f5c\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u652f\u6301\u3002\u6211\u4eec\u53ef\u4ee5\u91cd\u65b0\u5b9e\u73b0\u4e0a\u9762\u7684\u4f8b\u5b50")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "sync"\n    "sync/atomic"\n)\n\nvar total uint64\n\nfunc worker(wg *sync.WaitGroup) {\n    defer wg.Done()\n\n    var i uint64\n    for i = 0; i <= 100; i++ {\n        atomic.AddUint64(&total, i)\n    }\n}\n\nfunc main() {\n    var wg sync.WaitGroup\n    wg.Add(2)\n\n    go worker(&wg)\n    go worker(&wg)\n    wg.Wait()\n}\n\n')),(0,a.kt)("p",null,"atomic.AddUint64\u51fd\u6570\u8c03\u7528\u4fdd\u8bc1\u4e86total\u7684\u8bfb\u53d6\u3001\u66f4\u65b0\u548c\u4fdd\u5b58\u662f\u4e00\u4e2a\u539f\u5b50\u64cd\u4f5c\uff0c\u56e0\u6b64\u5728\u591a\u7ebf\u7a0b\u4e2d\u8bbf\u95ee\u4e5f\u662f\u5b89\u5168\u7684\u3002"),(0,a.kt)("p",null,"\u539f\u5b50\u64cd\u4f5c\u914d\u5408\u4e92\u65a5\u9501\u53ef\u4ee5\u5b9e\u73b0\u975e\u5e38\u9ad8\u6548\u7684\u5355\u4ef6\u6a21\u5f0f\u3002\u4e92\u65a5\u9501\u7684\u4ee3\u4ef7\u6bd4\u666e\u901a\u6574\u6570\u7684\u539f\u5b50\u8bfb\u5199\u9ad8\u5f88\u591a\uff0c\u5728\u6027\u80fd\u654f\u611f\u7684\u5730\u65b9\u53ef\u4ee5\u589e\u52a0\u4e00\u4e2a\u6570\u5b57\u578b\u7684\u6807\u5fd7\u4f4d\uff0c\u901a\u8fc7\u539f\u5b50\u68c0\u6d4b\u6807\u5fd7\u4f4d\u72b6\u6001\u964d\u4f4e\u4e92\u65a5\u9501\u7684\u4f7f\u7528\u6b21\u6570\u6765\u63d0\u9ad8\u6027\u80fd\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type singleton struct {}\n\nvar (\n    instance    *singleton\n    initialized uint32\n    mu          sync.Mutex\n)\n\nfunc Instance() *singleton {\n    if atomic.LoadUint32(&initialized) == 1 {\n        return instance\n    }\n\n    mu.Lock()\n    defer mu.Unlock()\n\n    if instance == nil {\n        defer atomic.StoreUint32(&initialized, 1)\n        instance = &singleton{}\n    }\n    return instance\n}\n")),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5c06\u901a\u7528\u7684\u4ee3\u7801\u63d0\u53d6\u51fa\u6765\uff0c\u5c31\u6210\u4e86\u6807\u51c6\u5e93\u4e2dsync.Once\u7684\u5b9e\u73b0\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type Once struct {\n    m    Mutex\n    done uint32\n}\n\nfunc (o *Once) Do(f func()) {\n    if atomic.LoadUint32(&o.done) == 1 {\n        return\n    }\n\n    o.m.Lock()\n    defer o.m.Unlock()\n\n    if o.done == 0 {\n        defer atomic.StoreUint32(&o.done, 1)\n        f()\n    }\n}\n")),(0,a.kt)("p",null,"\u57fa\u4e8esync.Once\u91cd\u65b0\u5b9e\u73b0\u5355\u4ef6\u6a21\u5f0f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"var (\n    instance *singleton\n    once     sync.Once\n)\n\nfunc Instance() *singleton {\n    once.Do(func() {\n        instance = &singleton{}\n    })\n    return instance\n}\n")),(0,a.kt)("p",null,"sync/atomic\u5305\u5bf9\u57fa\u672c\u7684\u6570\u503c\u7c7b\u578b\u53ca\u590d\u6742\u5bf9\u8c61\u7684\u8bfb\u5199\u90fd\u63d0\u4f9b\u4e86\u539f\u5b50\u64cd\u4f5c\u7684\u652f\u6301\u3002atomic.Value\u539f\u5b50\u5bf9\u8c61\u63d0\u4f9b\u4e86Load\u548cStore\u4e24\u4e2a\u539f\u5b50\u65b9\u6cd5\uff0c\u5206\u522b\u7528\u4e8e\u52a0\u8f7d\u548c\u4fdd\u5b58\u6570\u636e\uff0c\u8fd4\u56de\u503c\u548c\u53c2\u6570\u90fd\u662finterface{}\u7c7b\u578b\uff0c\u56e0\u6b64\u53ef\u4ee5\u7528\u4e8e\u4efb\u610f\u7684\u81ea\u5b9a\u4e49\u590d\u6742\u7c7b\u578b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"var config atomic.Value // \u4fdd\u5b58\u5f53\u524d\u914d\u7f6e\u4fe1\u606f\n\n// \u521d\u59cb\u5316\u914d\u7f6e\u4fe1\u606f\nconfig.Store(loadConfig())\n\n// \u542f\u52a8\u4e00\u4e2a\u540e\u53f0\u7ebf\u7a0b, \u52a0\u8f7d\u66f4\u65b0\u540e\u7684\u914d\u7f6e\u4fe1\u606f\ngo func() {\n    for {\n        time.Sleep(time.Second)\n        config.Store(loadConfig())\n    }\n}()\n\n// \u7528\u4e8e\u5904\u7406\u8bf7\u6c42\u7684\u5de5\u4f5c\u8005\u7ebf\u7a0b\u59cb\u7ec8\u91c7\u7528\u6700\u65b0\u7684\u914d\u7f6e\u4fe1\u606f\nfor i := 0; i < 10; i++ {\n    go func() {\n        for r := range requests() {\n            c := config.Load()\n            // ...\n        }\n    }()\n}\n")),(0,a.kt)("h2",{id:"\u987a\u5e8f\u4e00\u81f4\u6027\u5185\u5b58\u6a21\u578b"},"\u987a\u5e8f\u4e00\u81f4\u6027\u5185\u5b58\u6a21\u578b"),(0,a.kt)("p",null,"\u5982\u679c\u53ea\u662f\u60f3\u7b80\u5355\u5730\u5728\u7ebf\u7a0b\u4e4b\u95f4\u8fdb\u884c\u6570\u636e\u540c\u6b65\u7684\u8bdd\uff0c\u539f\u5b50\u64cd\u4f5c\u5df2\u7ecf\u4e3a\u7f16\u7a0b\u4eba\u5458\u63d0\u4f9b\u4e86\u4e00\u4e9b\u540c\u6b65\u4fdd\u969c\u3002\u4e0d\u8fc7\u8fd9\u79cd\u4fdd\u969c\u6709\u4e00\u4e2a\u524d\u63d0\uff1a\u987a\u5e8f\u4e00\u81f4\u6027\u7684\u5185\u5b58\u6a21\u578b\u3002\u8981\u4e86\u89e3\u987a\u5e8f\u4e00\u81f4\u6027\uff0c\u6211\u4eec\u5148\u770b\u770b\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'var a string\nvar done bool\n\nfunc setup() {\n    a = "hello, world"\n    done = true\n}\n\nfunc main() {\n    go setup()\n    for !done {}\n    print(a)\n}\n')),(0,a.kt)("p",null,"\u6211\u4eec\u521b\u5efa\u4e86setup\u7ebf\u7a0b\uff0c\u7528\u4e8e\u5bf9\u5b57\u7b26\u4e32a\u7684\u521d\u59cb\u5316\u5de5\u4f5c\uff0c\u521d\u59cb\u5316\u5b8c\u6210\u4e4b\u540e\u8bbe\u7f6edone\u6807\u5fd7\u4e3atrue\u3002main\u51fd\u6570\u6240\u5728\u7684\u4e3b\u7ebf\u7a0b\u4e2d\uff0c\u901a\u8fc7for !done {}\u68c0\u6d4bdone\u53d8\u4e3atrue\u65f6\uff0c\u8ba4\u4e3a\u5b57\u7b26\u4e32\u521d\u59cb\u5316\u5de5\u4f5c\u5b8c\u6210\uff0c\u7136\u540e\u8fdb\u884c\u5b57\u7b26\u4e32\u7684\u6253\u5370\u5de5\u4f5c\u3002"),(0,a.kt)("p",null,"\u4f46\u662fGo\u8bed\u8a00\u5e76\u4e0d\u4fdd\u8bc1\u5728main\u51fd\u6570\u4e2d\u89c2\u6d4b\u5230\u7684\u5bf9done\u7684\u5199\u5165\u64cd\u4f5c\u53d1\u751f\u5728\u5bf9\u5b57\u7b26\u4e32a\u7684\u5199\u5165\u7684\u64cd\u4f5c\u4e4b\u540e\uff0c\u56e0\u6b64\u7a0b\u5e8f\u5f88\u53ef\u80fd\u6253\u5370\u4e00\u4e2a\u7a7a\u5b57\u7b26\u4e32\u3002\u66f4\u7cdf\u7cd5\u7684\u662f\uff0c\u56e0\u4e3a\u4e24\u4e2a\u7ebf\u7a0b\u4e4b\u95f4\u6ca1\u6709\u540c\u6b65\u4e8b\u4ef6\uff0csetup\u7ebf\u7a0b\u5bf9done\u7684\u5199\u5165\u64cd\u4f5c\u751a\u81f3\u65e0\u6cd5\u88abmain\u7ebf\u7a0b\u770b\u5230\uff0cmain\u51fd\u6570\u6709\u53ef\u80fd\u9677\u5165\u6b7b\u5faa\u73af\u4e2d\u3002"),(0,a.kt)("p",null,"\u5728Go\u8bed\u8a00\u4e2d\uff0c\u540c\u4e00\u4e2aGoroutine\u7ebf\u7a0b\u5185\u90e8\uff0c\u987a\u5e8f\u4e00\u81f4\u6027\u5185\u5b58\u6a21\u578b\u662f\u5f97\u5230\u4fdd\u8bc1\u7684\u3002\u4f46\u662f\u4e0d\u540c\u7684Goroutine\u4e4b\u95f4\uff0c\u5e76\u4e0d\u6ee1\u8db3\u987a\u5e8f\u4e00\u81f4\u6027\u5185\u5b58\u6a21\u578b\uff0c\u9700\u8981\u901a\u8fc7\u660e\u786e\u5b9a\u4e49\u7684\u540c\u6b65\u4e8b\u4ef6\u6765\u4f5c\u4e3a\u540c\u6b65\u7684\u53c2\u8003\u3002\u5982\u679c\u4e24\u4e2a\u4e8b\u4ef6\u4e0d\u53ef\u6392\u5e8f\uff0c\u90a3\u4e48\u5c31\u8bf4\u8fd9\u4e24\u4e2a\u4e8b\u4ef6\u662f\u5e76\u53d1\u7684\u3002\u4e3a\u4e86\u6700\u5927\u5316\u5e76\u884c\uff0cGo\u8bed\u8a00\u7684\u7f16\u8bd1\u5668\u548c\u5904\u7406\u5668\u5728\u4e0d\u5f71\u54cd\u4e0a\u8ff0\u89c4\u5b9a\u7684\u524d\u63d0\u4e0b\u53ef\u80fd\u4f1a\u5bf9\u6267\u884c\u8bed\u53e5\u91cd\u65b0\u6392\u5e8f\uff08CPU\u4e5f\u4f1a\u5bf9\u4e00\u4e9b\u6307\u4ee4\u8fdb\u884c\u4e71\u5e8f\u6267\u884c\uff09"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u5982\u679c\u5728\u4e00\u4e2aGoroutine\u4e2d\u987a\u5e8f\u6267\u884ca = 1; b = 2;\u4e24\u4e2a\u8bed\u53e5\uff0c\u867d\u7136\u5728\u5f53\u524d\u7684Goroutine\u4e2d\u53ef\u4ee5\u8ba4\u4e3aa = 1;\u8bed\u53e5\u5148\u4e8eb = 2;\u8bed\u53e5\u6267\u884c\uff0c\u4f46\u662f\u5728\u53e6\u4e00\u4e2aGoroutine\u4e2db = 2;\u8bed\u53e5\u53ef\u80fd\u4f1a\u5148\u4e8ea = 1;\u8bed\u53e5\u6267\u884c\uff0c\u751a\u81f3\u5728\u53e6\u4e00\u4e2aGoroutine\u4e2d\u65e0\u6cd5\u770b\u5230\u5b83\u4eec\u7684\u53d8\u5316\uff08\u53ef\u80fd\u59cb\u7ec8\u5728\u5bc4\u5b58\u5668\u4e2d\uff09\u3002\u4e5f\u5c31\u662f\u8bf4\u5728\u53e6\u4e00\u4e2aGoroutine\u770b\u6765, a = 1; b = 2;\u4e24\u4e2a\u8bed\u53e5\u7684\u6267\u884c\u987a\u5e8f\u662f\u4e0d\u786e\u5b9a\u7684\u3002\u5982\u679c\u4e00\u4e2a\u5e76\u53d1\u7a0b\u5e8f\u65e0\u6cd5\u786e\u5b9a\u4e8b\u4ef6\u7684\u987a\u5e8f\u5173\u7cfb\uff0c\u90a3\u4e48\u7a0b\u5e8f\u7684\u8fd0\u884c\u7ed3\u679c\u5f80\u5f80\u4f1a\u6709\u4e0d\u786e\u5b9a\u7684\u7ed3\u679c\u3002\u6bd4\u5982\u4e0b\u9762\u8fd9\u4e2a\u7a0b\u5e8f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    go println("\u4f60\u597d, \u4e16\u754c")\n}\n')),(0,a.kt)("p",null,"\u6839\u636eGo\u8bed\u8a00\u89c4\u8303\uff0cmain\u51fd\u6570\u9000\u51fa\u65f6\u7a0b\u5e8f\u7ed3\u675f\uff0c\u4e0d\u4f1a\u7b49\u5f85\u4efb\u4f55\u540e\u53f0\u7ebf\u7a0b\u3002\u56e0\u4e3aGoroutine\u7684\u6267\u884c\u548cmain\u51fd\u6570\u7684\u8fd4\u56de\u4e8b\u4ef6\u662f\u5e76\u53d1\u7684\uff0c\u8c01\u90fd\u6709\u53ef\u80fd\u5148\u53d1\u751f\uff0c\u6240\u4ee5\u4ec0\u4e48\u65f6\u5019\u6253\u5370\uff0c\u80fd\u5426\u6253\u5370\u90fd\u662f\u672a\u77e5\u7684\u3002"),(0,a.kt)("p",null,"\u7528\u524d\u9762\u7684\u539f\u5b50\u64cd\u4f5c\u5e76\u4e0d\u80fd\u89e3\u51b3\u95ee\u9898\uff0c\u56e0\u4e3a\u6211\u4eec\u65e0\u6cd5\u786e\u5b9a\u4e24\u4e2a\u539f\u5b50\u64cd\u4f5c\u4e4b\u95f4\u7684\u987a\u5e8f\u3002\u89e3\u51b3\u95ee\u9898\u7684\u529e\u6cd5\u5c31\u662f\u901a\u8fc7\u540c\u6b65\u539f\u8bed\u6765\u7ed9\u4e24\u4e2a\u4e8b\u4ef6\u660e\u786e\u6392\u5e8f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    done := make(chan int)\n\n    go func(){\n        println("\u4f60\u597d, \u4e16\u754c")\n        done <- 1\n    }()\n\n    <-done\n}\n')),(0,a.kt)("p",null,'\u5f53<-done\u6267\u884c\u65f6\uff0c\u5fc5\u7136\u8981\u6c42done <- 1\u4e5f\u5df2\u7ecf\u6267\u884c\u3002\u6839\u636e\u540c\u4e00\u4e2aGorouine\u4f9d\u7136\u6ee1\u8db3\u987a\u5e8f\u4e00\u81f4\u6027\u89c4\u5219\uff0c\u6211\u4eec\u53ef\u4ee5\u5224\u65ad\u5f53done <- 1\u6267\u884c\u65f6\uff0cprintln("\u4f60\u597d, \u4e16\u754c")\u8bed\u53e5\u5fc5\u7136\u5df2\u7ecf\u6267\u884c\u5b8c\u6210\u4e86\u3002\u56e0\u6b64\uff0c\u73b0\u5728\u7684\u7a0b\u5e8f\u786e\u4fdd\u53ef\u4ee5\u6b63\u5e38\u6253\u5370\u7ed3\u679c\u3002'),(0,a.kt)("p",null,"\u5f53\u7136\uff0c\u901a\u8fc7sync.Mutex\u4e92\u65a5\u91cf\u4e5f\u662f\u53ef\u4ee5\u5b9e\u73b0\u540c\u6b65\u7684\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    var mu sync.Mutex\n\n    mu.Lock()\n    go func(){\n        println("\u4f60\u597d, \u4e16\u754c")\n        mu.Unlock()\n    }()\n\n    mu.Lock()\n}\n')),(0,a.kt)("p",null,'\u53ef\u4ee5\u786e\u5b9a\u540e\u53f0\u7ebf\u7a0b\u7684mu.Unlock()\u5fc5\u7136\u5728println("\u4f60\u597d, \u4e16\u754c")\u5b8c\u6210\u540e\u53d1\u751f\uff08\u540c\u4e00\u4e2a\u7ebf\u7a0b\u6ee1\u8db3\u987a\u5e8f\u4e00\u81f4\u6027\uff09\uff0cmain\u51fd\u6570\u7684\u7b2c\u4e8c\u4e2amu.Lock()\u5fc5\u7136\u5728\u540e\u53f0\u7ebf\u7a0b\u7684mu.Unlock()\u4e4b\u540e\u53d1\u751f\uff08sync.Mutex\u4fdd\u8bc1\uff09\uff0c\u6b64\u65f6\u540e\u53f0\u7ebf\u7a0b\u7684\u6253\u5370\u5de5\u4f5c\u5df2\u7ecf\u987a\u5229\u5b8c\u6210\u4e86\u3002'),(0,a.kt)("h2",{id:"\u521d\u59cb\u5316\u987a\u5e8f"},"\u521d\u59cb\u5316\u987a\u5e8f"),(0,a.kt)("p",null,"Go\u7a0b\u5e8f\u7684\u521d\u59cb\u5316\u548c\u6267\u884c\u603b\u662f\u4ecemain.main\u51fd\u6570\u5f00\u59cb\u7684\u3002\u4f46\u662f\u5982\u679cmain\u5305\u91cc\u5bfc\u5165\u4e86\u5176\u5b83\u7684\u5305\uff0c\u5219\u4f1a\u6309\u7167\u987a\u5e8f\u5c06\u5b83\u4eec\u5305\u542b\u8fdbmain\u5305\u91cc\uff08\u8fd9\u91cc\u7684\u5bfc\u5165\u987a\u5e8f\u4f9d\u8d56\u5177\u4f53\u5b9e\u73b0\uff0c\u4e00\u822c\u53ef\u80fd\u662f\u4ee5\u6587\u4ef6\u540d\u6216\u5305\u8def\u5f84\u540d\u7684\u5b57\u7b26\u4e32\u987a\u5e8f\u5bfc\u5165\uff09\u3002\u5982\u679c\u67d0\u4e2a\u5305\u88ab\u591a\u6b21\u5bfc\u5165\u7684\u8bdd\uff0c\u5728\u6267\u884c\u7684\u65f6\u5019\u53ea\u4f1a\u5bfc\u5165\u4e00\u6b21\u3002\u5f53\u4e00\u4e2a\u5305\u88ab\u5bfc\u5165\u65f6\uff0c\u5982\u679c\u5b83\u8fd8\u5bfc\u5165\u4e86\u5176\u5b83\u7684\u5305\uff0c\u5219\u5148\u5c06\u5176\u5b83\u7684\u5305\u5305\u542b\u8fdb\u6765\uff0c\u7136\u540e\u521b\u5efa\u548c\u521d\u59cb\u5316\u8fd9\u4e2a\u5305\u7684\u5e38\u91cf\u548c\u53d8\u91cf\u3002\u7136\u540e\u5c31\u662f\u8c03\u7528\u5305\u91cc\u7684init\u51fd\u6570\uff0c\u5982\u679c\u4e00\u4e2a\u5305\u6709\u591a\u4e2ainit\u51fd\u6570\u7684\u8bdd\uff0c\u5b9e\u73b0\u53ef\u80fd\u662f\u4ee5\u6587\u4ef6\u540d\u7684\u987a\u5e8f\u8c03\u7528\uff0c\u540c\u4e00\u4e2a\u6587\u4ef6\u5185\u7684\u591a\u4e2ainit\u5219\u662f\u4ee5\u51fa\u73b0\u7684\u987a\u5e8f\u4f9d\u6b21\u8c03\u7528\uff08init\u4e0d\u662f\u666e\u901a\u51fd\u6570\uff0c\u53ef\u4ee5\u5b9a\u4e49\u6709\u591a\u4e2a\uff0c\u6240\u4ee5\u4e0d\u80fd\u88ab\u5176\u5b83\u51fd\u6570\u8c03\u7528\uff09\u3002\u6700\u7ec8\uff0c\u5728main\u5305\u7684\u6240\u6709\u5305\u5e38\u91cf\u3001\u5305\u53d8\u91cf\u88ab\u521b\u5efa\u548c\u521d\u59cb\u5316\uff0c\u5e76\u4e14init\u51fd\u6570\u88ab\u6267\u884c\u540e\uff0c\u624d\u4f1a\u8fdb\u5165main.main\u51fd\u6570\uff0c\u7a0b\u5e8f\u5f00\u59cb\u6b63\u5e38\u6267\u884c\u3002"),(0,a.kt)("p",null,"\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5728main.main\u51fd\u6570\u6267\u884c\u4e4b\u524d\u6240\u6709\u4ee3\u7801\u90fd\u8fd0\u884c\u5728\u540c\u4e00\u4e2aGoroutine\u4e2d\uff0c\u4e5f\u662f\u8fd0\u884c\u5728\u7a0b\u5e8f\u7684\u4e3b\u7cfb\u7edf\u7ebf\u7a0b\u4e2d\u3002\u5982\u679c\u67d0\u4e2ainit\u51fd\u6570\u5185\u90e8\u7528go\u5173\u952e\u5b57\u542f\u52a8\u4e86\u65b0\u7684Goroutine\u7684\u8bdd\uff0c\u65b0\u7684Goroutine\u548cmain.main\u51fd\u6570\u662f\u5e76\u53d1\u6267\u884c\u7684\u3002"),(0,a.kt)("p",null,"\u56e0\u4e3a\u6240\u6709\u7684init\u51fd\u6570\u548cmain\u51fd\u6570\u90fd\u662f\u5728\u4e3b\u7ebf\u7a0b\u5b8c\u6210\uff0c\u5b83\u4eec\u4e5f\u662f\u6ee1\u8db3\u987a\u5e8f\u4e00\u81f4\u6027\u6a21\u578b\u7684\u3002"),(0,a.kt)("h2",{id:"goroutine\u7684\u521b\u5efa"},"Goroutine\u7684\u521b\u5efa"),(0,a.kt)("p",null,"go\u8bed\u53e5\u4f1a\u5728\u5f53\u524dGoroutine\u5bf9\u5e94\u51fd\u6570\u8fd4\u56de\u524d\u521b\u5efa\u65b0\u7684Goroutine. \u4f8b\u5982:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'var a string\n\nfunc f() {\n    print(a)\n}\n\nfunc hello() {\n    a = "hello, world"\n    go f()\n}\n')),(0,a.kt)("p",null,'\u6267\u884cgo f()\u8bed\u53e5\u521b\u5efaGoroutine\u548chello\u51fd\u6570\u662f\u5728\u540c\u4e00\u4e2aGoroutine\u4e2d\u6267\u884c, \u6839\u636e\u8bed\u53e5\u7684\u4e66\u5199\u987a\u5e8f\u53ef\u4ee5\u786e\u5b9aGoroutine\u7684\u521b\u5efa\u53d1\u751f\u5728hello\u51fd\u6570\u8fd4\u56de\u4e4b\u524d, \u4f46\u662f\u65b0\u521b\u5efaGoroutine\u5bf9\u5e94\u7684f()\u7684\u6267\u884c\u4e8b\u4ef6\u548chello\u51fd\u6570\u8fd4\u56de\u7684\u4e8b\u4ef6\u5219\u662f\u4e0d\u53ef\u6392\u5e8f\u7684\uff0c\u4e5f\u5c31\u662f\u5e76\u53d1\u7684\u3002\u8c03\u7528hello\u53ef\u80fd\u4f1a\u5728\u5c06\u6765\u7684\u67d0\u4e00\u65f6\u523b\u6253\u5370"hello, world"\uff0c\u4e5f\u5f88\u53ef\u80fd\u662f\u5728hello\u51fd\u6570\u6267\u884c\u5b8c\u6210\u540e\u624d\u6253\u5370\u3002'),(0,a.kt)("h2",{id:"\u57fa\u4e8echannel\u7684\u901a\u4fe1"},"\u57fa\u4e8eChannel\u7684\u901a\u4fe1"),(0,a.kt)("p",null,"Channel\u901a\u4fe1\u662f\u5728Goroutine\u4e4b\u95f4\u8fdb\u884c\u540c\u6b65\u7684\u4e3b\u8981\u65b9\u6cd5\u3002\u5728\u65e0\u7f13\u5b58\u7684Channel\u4e0a\u7684\u6bcf\u4e00\u6b21\u53d1\u9001\u64cd\u4f5c\u90fd\u6709\u4e0e\u5176\u5bf9\u5e94\u7684\u63a5\u6536\u64cd\u4f5c\u76f8\u914d\u5bf9\uff0c\u53d1\u9001\u548c\u63a5\u6536\u64cd\u4f5c\u901a\u5e38\u53d1\u751f\u5728\u4e0d\u540c\u7684Goroutine\u4e0a\uff08\u5728\u540c\u4e00\u4e2aGoroutine\u4e0a\u6267\u884c2\u4e2a\u64cd\u4f5c\u5f88\u5bb9\u6613\u5bfc\u81f4\u6b7b\u9501\uff09\u3002\u65e0\u7f13\u5b58\u7684Channel\u4e0a\u7684\u53d1\u9001\u64cd\u4f5c\u603b\u5728\u5bf9\u5e94\u7684\u63a5\u6536\u64cd\u4f5c\u5b8c\u6210\u524d\u53d1\u751f."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'var done = make(chan bool)\nvar msg string\n\nfunc aGoroutine() {\n    msg = "\u4f60\u597d, \u4e16\u754c"\n    done <- true\n}\n\nfunc main() {\n    go aGoroutine()\n    <-done\n    println(msg)\n}\n')),(0,a.kt)("p",null,"\u53ef\u4fdd\u8bc1\u6253\u5370\u51fa\u201chello, world\u201d\u3002\u8be5\u7a0b\u5e8f\u9996\u5148\u5bf9msg\u8fdb\u884c\u5199\u5165\uff0c\u7136\u540e\u5728done\u7ba1\u9053\u4e0a\u53d1\u9001\u540c\u6b65\u4fe1\u53f7\uff0c\u968f\u540e\u4ecedone\u63a5\u6536\u5bf9\u5e94\u7684\u540c\u6b65\u4fe1\u53f7\uff0c\u6700\u540e\u6267\u884cprintln\u51fd\u6570\u3002"),(0,a.kt)("p",null,"\u82e5\u5728\u5173\u95edChannel\u540e\u7ee7\u7eed\u4ece\u4e2d\u63a5\u6536\u6570\u636e\uff0c\u63a5\u6536\u8005\u5c31\u4f1a\u6536\u5230\u8be5Channel\u8fd4\u56de\u7684\u96f6\u503c\u3002\u56e0\u6b64\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u7528close(c)\u5173\u95ed\u7ba1\u9053\u4ee3\u66ffdone <- false\u4f9d\u7136\u80fd\u4fdd\u8bc1\u8be5\u7a0b\u5e8f\u4ea7\u751f\u76f8\u540c\u7684\u884c\u4e3a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'var done = make(chan bool)\nvar msg string\n\nfunc aGoroutine() {\n    msg = "\u4f60\u597d, \u4e16\u754c"\n    close(done)\n}\n\nfunc main() {\n    go aGoroutine()\n    <-done\n    println(msg)\n}\n')),(0,a.kt)("p",null,"\u5bf9\u4e8e\u4ece\u65e0\u7f13\u51b2Channel\u8fdb\u884c\u7684\u63a5\u6536\uff0c\u53d1\u751f\u5728\u5bf9\u8be5Channel\u8fdb\u884c\u7684\u53d1\u9001\u5b8c\u6210\u4e4b\u524d\u3002"),(0,a.kt)("p",null,"\u57fa\u4e8e\u4e0a\u9762\u8fd9\u4e2a\u89c4\u5219\u53ef\u77e5\uff0c\u4ea4\u6362\u4e24\u4e2aGoroutine\u4e2d\u7684\u63a5\u6536\u548c\u53d1\u9001\u64cd\u4f5c\u4e5f\u662f\u53ef\u4ee5\u7684\uff08\u4f46\u662f\u5f88\u5371\u9669\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'var done = make(chan bool)\nvar msg string\n\nfunc aGoroutine() {\n    msg = "hello, world"\n    <-done\n}\nfunc main() {\n    go aGoroutine()\n    done <- true\n    println(msg)\n}\n')),(0,a.kt)("p",null,'\u4e5f\u53ef\u4fdd\u8bc1\u6253\u5370\u51fa\u201chello, world\u201d\u3002\u56e0\u4e3amain\u7ebf\u7a0b\u4e2ddone <- true\u53d1\u9001\u5b8c\u6210\u524d\uff0c\u540e\u53f0\u7ebf\u7a0b<-done\u63a5\u6536\u5df2\u7ecf\u5f00\u59cb\uff0c\u8fd9\u4fdd\u8bc1msg = "hello, world"\u88ab\u6267\u884c\u4e86\uff0c\u6240\u4ee5\u4e4b\u540eprintln(msg)\u7684msg\u5df2\u7ecf\u88ab\u8d4b\u503c\u8fc7\u4e86\u3002\u7b80\u800c\u8a00\u4e4b\uff0c\u540e\u53f0\u7ebf\u7a0b\u9996\u5148\u5bf9msg\u8fdb\u884c\u5199\u5165\uff0c\u7136\u540e\u4ecedone\u4e2d\u63a5\u6536\u4fe1\u53f7\uff0c\u968f\u540emain\u7ebf\u7a0b\u5411done\u53d1\u9001\u5bf9\u5e94\u7684\u4fe1\u53f7\uff0c\u6700\u540e\u6267\u884cprintln\u51fd\u6570\u5b8c\u6210\u3002\u4f46\u662f\uff0c\u82e5\u8be5Channel\u4e3a\u5e26\u7f13\u51b2\u7684\uff08\u4f8b\u5982\uff0cdone = make(chan bool, 1)\uff09\uff0cmain\u7ebf\u7a0b\u7684done <- true\u63a5\u6536\u64cd\u4f5c\u5c06\u4e0d\u4f1a\u88ab\u540e\u53f0\u7ebf\u7a0b\u7684<-done\u63a5\u6536\u64cd\u4f5c\u963b\u585e\uff0c\u8be5\u7a0b\u5e8f\u5c06\u65e0\u6cd5\u4fdd\u8bc1\u6253\u5370\u51fa\u201chello, world\u201d\u3002'),(0,a.kt)("p",null,"\u5bf9\u4e8e\u5e26\u7f13\u51b2\u7684Channel\uff0c\u5bf9\u4e8eChannel\u7684\u7b2cK\u4e2a\u63a5\u6536\u5b8c\u6210\u64cd\u4f5c\u53d1\u751f\u5728\u7b2cK+C\u4e2a\u53d1\u9001\u64cd\u4f5c\u5b8c\u6210\u4e4b\u524d\uff0c\u5176\u4e2dC\u662fChannel\u7684\u7f13\u5b58\u5927\u5c0f\u3002 \u5982\u679c\u5c06C\u8bbe\u7f6e\u4e3a0\u81ea\u7136\u5c31\u5bf9\u5e94\u65e0\u7f13\u5b58\u7684Channel\uff0c\u4e5f\u5373\u4f7f\u7b2cK\u4e2a\u63a5\u6536\u5b8c\u6210\u5728\u7b2cK\u4e2a\u53d1\u9001\u5b8c\u6210\u4e4b\u524d\u3002\u56e0\u4e3a\u65e0\u7f13\u5b58\u7684Channel\u53ea\u80fd\u540c\u6b65\u53d11\u4e2a\uff0c\u4e5f\u5c31\u7b80\u5316\u4e3a\u524d\u9762\u65e0\u7f13\u5b58Channel\u7684\u89c4\u5219\uff1a\u5bf9\u4e8e\u4ece\u65e0\u7f13\u51b2Channel\u8fdb\u884c\u7684\u63a5\u6536\uff0c\u53d1\u751f\u5728\u5bf9\u8be5Channel\u8fdb\u884c\u7684\u53d1\u9001\u5b8c\u6210\u4e4b\u524d\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u6839\u636e\u63a7\u5236Channel\u7684\u7f13\u5b58\u5927\u5c0f\u6765\u63a7\u5236\u5e76\u53d1\u6267\u884c\u7684Goroutine\u7684\u6700\u5927\u6570\u76ee, \u4f8b\u5982:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"var limit = make(chan int, 3)\n\nfunc main() {\n    for _, w := range work {\n        go func() {\n            limit <- 1\n            w()\n            <-limit\n        }()\n    }\n    select{}\n}\n")),(0,a.kt)("p",null,"\u6700\u540e\u4e00\u53e5select{}\u662f\u4e00\u4e2a\u7a7a\u7684\u7ba1\u9053\u9009\u62e9\u8bed\u53e5\uff0c\u8be5\u8bed\u53e5\u4f1a\u5bfc\u81f4main\u7ebf\u7a0b\u963b\u585e\uff0c\u4ece\u800c\u907f\u514d\u7a0b\u5e8f\u8fc7\u65e9\u9000\u51fa\u3002\u8fd8\u6709for{}\u3001<-make(chan int)\u7b49\u8bf8\u591a\u65b9\u6cd5\u53ef\u4ee5\u8fbe\u5230\u7c7b\u4f3c\u7684\u6548\u679c\u3002\u56e0\u4e3amain\u7ebf\u7a0b\u88ab\u963b\u585e\u4e86\uff0c\u5982\u679c\u9700\u8981\u7a0b\u5e8f\u6b63\u5e38\u9000\u51fa\u7684\u8bdd\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528os.Exit(0)\u5b9e\u73b0\u3002"),(0,a.kt)("h2",{id:"\u4e0d\u9760\u8c31\u7684\u540c\u6b65"},"\u4e0d\u9760\u8c31\u7684\u540c\u6b65"),(0,a.kt)("p",null,"\u4e0b\u9762\u4ee3\u7801\u65e0\u6cd5\u4fdd\u8bc1\u6b63\u5e38\u6253\u5370\u7ed3\u679c\u3002\u5b9e\u9645\u7684\u8fd0\u884c\u6548\u679c\u4e5f\u662f\u5927\u6982\u7387\u4e0d\u80fd\u6b63\u5e38\u8f93\u51fa\u7ed3\u679c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    go println("\u4f60\u597d, \u4e16\u754c")\n}\n')),(0,a.kt)("p",null,"\u521a\u63a5\u89e6Go\u8bed\u8a00\u7684\u8bdd\uff0c\u53ef\u80fd\u5e0c\u671b\u901a\u8fc7\u52a0\u5165\u4e00\u4e2a\u968f\u673a\u7684\u4f11\u7720\u65f6\u95f4\u6765\u4fdd\u8bc1\u6b63\u5e38\u7684\u8f93\u51fa\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    go println("hello, world")\n    time.Sleep(time.Second)\n}\n')),(0,a.kt)("p",null,"\u56e0\u4e3a\u4e3b\u7ebf\u7a0b\u4f11\u7720\u4e861\u79d2\u949f\uff0c\u56e0\u6b64\u8fd9\u4e2a\u7a0b\u5e8f\u5927\u6982\u7387\u662f\u53ef\u4ee5\u6b63\u5e38\u8f93\u51fa\u7ed3\u679c\u7684\u3002\u56e0\u6b64\uff0c\u5f88\u591a\u4eba\u4f1a\u89c9\u5f97\u8fd9\u4e2a\u7a0b\u5e8f\u5df2\u7ecf\u6ca1\u6709\u95ee\u9898\u4e86\u3002\u4f46\u662f\u8fd9\u4e2a\u7a0b\u5e8f\u662f\u4e0d\u7a33\u5065\u7684\uff0c\u4f9d\u7136\u6709\u5931\u8d25\u7684\u53ef\u80fd\u6027\u3002\u6211\u4eec\u5148\u5047\u8bbe\u7a0b\u5e8f\u662f\u53ef\u4ee5\u7a33\u5b9a\u8f93\u51fa\u7ed3\u679c\u7684\u3002\u56e0\u4e3aGo\u7ebf\u7a0b\u7684\u542f\u52a8\u662f\u975e\u963b\u585e\u7684\uff0cmain\u7ebf\u7a0b\u663e\u5f0f\u4f11\u7720\u4e861\u79d2\u949f\u9000\u51fa\u5bfc\u81f4\u7a0b\u5e8f\u7ed3\u675f\uff0c\u6211\u4eec\u53ef\u4ee5\u8fd1\u4f3c\u5730\u8ba4\u4e3a\u7a0b\u5e8f\u603b\u5171\u6267\u884c\u4e861\u79d2\u591a\u65f6\u95f4\u3002\u73b0\u5728\u5047\u8bbeprintln\u51fd\u6570\u5185\u90e8\u5b9e\u73b0\u4f11\u7720\u7684\u65f6\u95f4\u5927\u4e8emain\u7ebf\u7a0b\u4f11\u7720\u7684\u65f6\u95f4\u7684\u8bdd\uff0c\u5c31\u4f1a\u5bfc\u81f4\u77db\u76fe\uff1a\u540e\u53f0\u7ebf\u7a0b\u65e2\u7136\u5148\u4e8emain\u7ebf\u7a0b\u5b8c\u6210\u6253\u5370\uff0c\u90a3\u4e48\u6267\u884c\u65f6\u95f4\u80af\u5b9a\u662f\u5c0f\u4e8emain\u7ebf\u7a0b\u6267\u884c\u65f6\u95f4\u7684\u3002\u5f53\u7136\u8fd9\u662f\u4e0d\u53ef\u80fd\u7684\u3002"),(0,a.kt)("p",null,"\u4e25\u8c28\u7684\u5e76\u53d1\u7a0b\u5e8f\u7684\u6b63\u786e\u6027\u4e0d\u5e94\u8be5\u662f\u4f9d\u8d56\u4e8eCPU\u7684\u6267\u884c\u901f\u5ea6\u548c\u4f11\u7720\u65f6\u95f4\u7b49\u4e0d\u9760\u8c31\u7684\u56e0\u7d20\u7684\u3002\u4e25\u8c28\u7684\u5e76\u53d1\u4e5f\u5e94\u8be5\u662f\u53ef\u4ee5\u9759\u6001\u63a8\u5bfc\u51fa\u7ed3\u679c\u7684\uff1a\u6839\u636e\u7ebf\u7a0b\u5185\u987a\u5e8f\u4e00\u81f4\u6027\uff0c\u7ed3\u5408Channel\u6216sync\u540c\u6b65\u4e8b\u4ef6\u7684\u53ef\u6392\u5e8f\u6027\u6765\u63a8\u5bfc\uff0c\u6700\u7ec8\u5b8c\u6210\u5404\u4e2a\u7ebf\u7a0b\u5404\u6bb5\u4ee3\u7801\u7684\u504f\u5e8f\u5173\u7cfb\u6392\u5e8f\u3002\u5982\u679c\u4e24\u4e2a\u4e8b\u4ef6\u65e0\u6cd5\u6839\u636e\u6b64\u89c4\u5219\u6765\u6392\u5e8f\uff0c\u90a3\u4e48\u5b83\u4eec\u5c31\u662f\u5e76\u53d1\u7684\uff0c\u4e5f\u5c31\u662f\u6267\u884c\u5148\u540e\u987a\u5e8f\u4e0d\u53ef\u9760\u7684\u3002"))}d.isMDXComponent=!0}}]);