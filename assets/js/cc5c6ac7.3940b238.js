"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[36176],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(t),g=o,m=s["".concat(l,".").concat(g)]||s[g]||d[g]||a;return t?r.createElement(m,c(c({ref:n},p),{},{components:t})):r.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=g;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[s]="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5198:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),c=["components"],i={},l="Context",u={unversionedId:"backend/go/base/context",id:"backend/go/base/context",title:"Context",description:"w\u4e3a\u4e86\u89e3\u51b3 \u4e0d\u540c\u7684goroutine\u4e4b\u95f4\u540c\u6b65\u7279\u5b9a\u6570\u636e\u3001\u53d6\u6d88\u4fe1\u53f7\u4ee5\u53ca\u5904\u7406\u8bf7\u6c42\u7684\u622a\u6b62\u65e5\u671f",source:"@site/docs/backend/go/base/context.md",sourceDirName:"backend/go/base",slug:"/backend/go/base/context",permalink:"/docs/backend/go/base/context",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5206\u5e03\u5f0f\u914d\u7f6e\u7ba1\u7406",permalink:"/docs/backend/go/base/config"},next:{title:"defer",permalink:"/docs/backend/go/base/defer"}},p={},s=[{value:"context.Context",id:"contextcontext",level:2},{value:"\u53d1\u9001\u53d6\u6d88\u4fe1\u53f7",id:"\u53d1\u9001\u53d6\u6d88\u4fe1\u53f7",level:2},{value:"\u8bbe\u7f6e\u8d85\u65f6\u65f6\u95f4",id:"\u8bbe\u7f6e\u8d85\u65f6\u65f6\u95f4",level:2},{value:"\u5b58\u50a8/\u68c0\u7d22\u8bf7\u6c42\u7684\u76f8\u5173\u503c",id:"\u5b58\u50a8\u68c0\u7d22\u8bf7\u6c42\u7684\u76f8\u5173\u503c",level:2}],d={toc:s},g="wrapper";function m(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)(g,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"context"},"Context"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"w\u4e3a\u4e86\u89e3\u51b3 \u4e0d\u540c\u7684goroutine\u4e4b\u95f4\u540c\u6b65\u7279\u5b9a\u6570\u636e\u3001\u53d6\u6d88\u4fe1\u53f7\u4ee5\u53ca\u5904\u7406\u8bf7\u6c42\u7684\u622a\u6b62\u65e5\u671f")),(0,a.kt)("h2",{id:"contextcontext"},"context.Context"),(0,a.kt)("p",null,"context \u7684\u4e09\u4e2a\u7528\u9014"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53d1\u9001\u53d6\u6d88\u4fe1\u53f7"),(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u8d85\u65f6\u65f6\u95f4"),(0,a.kt)("li",{parentName:"ul"},"\u5b58\u50a8/\u68c0\u7d22\u8bf7\u6c42\u7684\u76f8\u5173\u503c")),(0,a.kt)("h2",{id:"\u53d1\u9001\u53d6\u6d88\u4fe1\u53f7"},"\u53d1\u9001\u53d6\u6d88\u4fe1\u53f7"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"context.Context"),"\u63d0\u4f9b\u4e86\u4e00\u79cd\u673a\u5236\uff0c\u53ef\u4ee5\u53d1\u9001\u4e00\u4e2a\u4fe1\u53f7\uff0c\u544a\u8bc9\u6536\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"context"),"\u7684\u8fdb\u7a0b\u505c\u6b62\u3002"),(0,a.kt)("p",null,'\u5f53\u4e00\u4e2a\u670d\u52a1\u5668\u6536\u5230\u5173\u95ed\u4fe1\u53f7\u65f6\uff0c\u5b83\u9700\u8981"\u4f18\u96c5\u5730"\u505c\u6b62\uff1b\u5982\u679c\u5b83\u6b63\u5728\u5904\u7406\u4e00\u4e2a\u8bf7\u6c42\uff0c\u5b83\u9700\u8981\u5728\u5173\u95ed\u4e4b\u524d\u4e3a\u5176\u63d0\u4f9b\u670d\u52a1\u3002context\u5305\u63d0\u4f9b\u4e86context.WithCancel API\uff0c\u5b83\u8fd4\u56de\u4e00\u4e2a\u914d\u7f6e\u4e86cancel\u7684\u65b0\u4e0a\u4e0b\u6587\u548c\u4e00\u4e2a\u53d6\u6d88\u5b83\u7684\u51fd\u6570\u3002\u5982\u679c\u4f60\u8c03\u7528cancel\u51fd\u6570\uff0c\u4fe1\u53f7\u4f1a\u88ab\u53d1\u9001\u5230\u63a5\u6536\u8be5\u4e0a\u4e0b\u6587\u7684\u8fdb\u7a0b\u4e2d'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\nimport (\n    "fmt"\n    "time"\n    "syscall"\n    "context"\n    "log"\n     "os/signal"\n\n)\n    func main(){\n        ctx,cancel:= context.WithCancel(context.Background())\n\n        defer cancel()\n        go func(){\n            signChan:=make(chan os.Signal,1)\n            signal.Notify(signChan,syscall.SIGHUP,syscall.SIGNINT,sign.SIGTERM)\n            <-signChan\n            cancel()\n        }()\n        svr :=Run(ctx)\n        log.Println("\u670d\u52a1\u505c\u6b62")\n    }\n\nfunc Run(ctx context.Context){\n    for {\n        select{\n          case  ctx.Done():\n            log.Println("\u53d6\u6d88\u670d\u52a1")\n            return \n            default:\n            handleRequest()\n        }\n    }\n}\nfunc handleRequest(){\n    fmt.Println("\u670d\u52a1\u8fdb\u884c\u4e2d")\n}\n')),(0,a.kt)("h2",{id:"\u8bbe\u7f6e\u8d85\u65f6\u65f6\u95f4"},"\u8bbe\u7f6e\u8d85\u65f6\u65f6\u95f4"),(0,a.kt)("p",null,"\u64cd\u4f5c\u8bbe\u7f6e\u8d85\u65f6\u3002\u60f3\u8c61\u4e00\u4e0b\uff0c\u4f60\u6b63\u5728\u5411\u7b2c\u4e09\u65b9\u53d1\u9001",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP"),"\u8bf7\u6c42\u3002\u5982\u679c\u7531\u4e8e\u67d0\u4e9b\u539f\u56e0\uff0c\u5982\u7f51\u7edc\u4e2d\u65ad\uff0c\u8bf7\u6c42\u7684\u65f6\u95f4\u8d85\u8fc7\u9884\u671f\uff0c\u4f60\u53ef\u80fd\u60f3\u53d6\u6d88\u8bf7\u6c42\uff0c\u4ee5\u9632\u6b62\u6574\u4e2a\u8fc7\u7a0b\u6302\u8d77\u3002\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"context.WithTimeout"),"\uff0c\u4f60\u53ef\u4ee5\u4e3a\u8fd9\u4e9b\u60c5\u51b5\u8bbe\u7f6e\u8d85\u65f6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n        ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)\n        defer cancel() // \u2190 cancel should be called even if timeout didn\'t happen\n\n        SendRequest(ctx) // \u2190 subroutine that can get stuck\n}\n\n\nfunc SendRequest(ctx context.Context) {\n        respCh := make(chan interface{}, 1)\n        go sendRequest(respCh)\n\n        select {\n        case <-ctx.Done():\n                log.Println("operation timed out!")\n        case <-respCh:\n                log.Println("response received")\n        }\n}\n\nfunc sendRequest(ch chan<- interface{}) {\n        time.Sleep(60 * time.Second)\n        ch <- struct{}{}\n}\n\n\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"context"),"\u5305\u4e5f\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"context.WithDeadline()"),"\uff1b\u4e0d\u540c\u7684\u662f\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"context.WithTimeout"),"\u9700\u8981",(0,a.kt)("inlineCode",{parentName:"p"},"time.Duration"),"\uff0c\u800c",(0,a.kt)("inlineCode",{parentName:"p"},"context.WithDeadline()"),"\u9700\u8981",(0,a.kt)("inlineCode",{parentName:"p"},"time.Time")),(0,a.kt)("h2",{id:"\u5b58\u50a8\u68c0\u7d22\u8bf7\u6c42\u7684\u76f8\u5173\u503c"},"\u5b58\u50a8/\u68c0\u7d22\u8bf7\u6c42\u7684\u76f8\u5173\u503c"),(0,a.kt)("p",null,"\u4e0a\u4e0b\u6587\u7684\u6700\u540e\u4e00\u79cd\u7528\u6cd5\u662f\u5728\u4e0a\u4e0b\u6587\u4e2d\u5b58\u50a8\u548c\u68c0\u7d22\u4e0e\u8bf7\u6c42\u76f8\u5173\u7684\u503c\u3002\u4f8b\u5982\uff0c\u5982\u679c\u670d\u52a1\u5668\u6536\u5230\u4e00\u4e2a\u8bf7\u6c42\uff0c\u4f60\u53ef\u80fd\u5e0c\u671b\u5728\u8bf7\u6c42\u8fc7\u7a0b\u4e2d\u4ea7\u751f\u7684\u6240\u6709\u65e5\u5fd7\u884c\u90fd\u6709\u8bf7\u6c42\u4fe1\u606f\uff0c\u5982\u8def\u5f84\u548c\u65b9\u6cd5\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u65e5\u5fd7\u8bb0\u5f55\u5668\uff0c\u8bbe\u7f6e\u8bf7\u6c42\u76f8\u5173\u7684\u4fe1\u606f\uff0c\u5e76\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"context.WithValue"),"\u5c06\u5176\u5b58\u50a8\u5728\u4e0a\u4e0b\u6587\u4e2d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'\nvar logCtxKey = &struct{}{}\n\nfunc handleRequest(w http.ResponseWriter, r *http.Request) {\n        method, path := r.Method, r.URL.Path\n        logger := log.With().\n                Str("method", method).\n                Str("path", path).\n                Logger()\n        ctxWithLogger := context.WithValue(r.Context(), logCtxKey, logger)\n        ...\n        accessDatabase(ctxWithLogger)\n}\nfunc accessDatabase(ctx context.Context) {\n        logger := ctx.Value(logCtxKey).(zerolog.Logger)\n        logger.Debug().Msg("accessing database")\n}\n\n')))}m.isMDXComponent=!0}}]);