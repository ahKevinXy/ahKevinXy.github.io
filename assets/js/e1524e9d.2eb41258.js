"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[99751],{96021:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var i=t(85893),r=t(11151);const l={title:"Gin \u6846\u67b6\u6570\u636e\u7ed3\u6784",authors:"ahKevinXy",description:"Gin \u6846\u67b6\u6570\u636e\u7ed3\u6784",image:"https://source.unsplash.com/random?people&60"},o="gin \u6846\u67b6\u5b66\u4e60",s={permalink:"/blog/2023/11/10/gin",source:"@site/blog/2023/11/10/gin.md",title:"Gin \u6846\u67b6\u6570\u636e\u7ed3\u6784",description:"Gin \u6846\u67b6\u6570\u636e\u7ed3\u6784",date:"2023-11-10T00:00:00.000Z",formattedDate:"2023\u5e7411\u670810\u65e5",tags:[],readingTime:4.995,hasTruncateMarker:!0,authors:[{name:"ahKevinXy",title:"\u4f5c\u8005",url:"https://github.com/ahKevinXy",email:"ahkevinxy@gmail.com",imageURL:"/img/headers.png",key:"ahKevinXy"}],frontMatter:{title:"Gin \u6846\u67b6\u6570\u636e\u7ed3\u6784",authors:"ahKevinXy",description:"Gin \u6846\u67b6\u6570\u636e\u7ed3\u6784",image:"https://source.unsplash.com/random?people&60"},unlisted:!1,nextItem:{title:"Uber Go Style Guide",permalink:"/blog/2023/11/10/golang"}},a={authorsImageUrls:[void 0]},d=[{value:"gin \u6846\u67b6\u7684\u6838\u5fc3",id:"gin-\u6846\u67b6\u7684\u6838\u5fc3",level:2},{value:"\u8def\u7531\u5904\u7406",id:"\u8def\u7531\u5904\u7406",level:3},{value:"\u4e2d\u95f4\u4ef6\u673a\u5236",id:"\u4e2d\u95f4\u4ef6\u673a\u5236",level:3},{value:"\u4e0a\u4e0b\u6587\u7ba1\u7406",id:"\u4e0a\u4e0b\u6587\u7ba1\u7406",level:3},{value:"\u5f02\u5e38\u5904\u7406",id:"\u5f02\u5e38\u5904\u7406",level:3},{value:"\u5e76\u53d1\u5904\u7406",id:"\u5e76\u53d1\u5904\u7406",level:3},{value:"Engine \u7ed3\u6784\u4f53",id:"engine-\u7ed3\u6784\u4f53",level:2},{value:"RouterGroup \u7ed3\u6784\u4f53",id:"routergroup-\u7ed3\u6784\u4f53",level:2},{value:"Use \u65b9\u6cd5\u4f7f\u7528\u4e2d\u95f4\u4ef6",id:"use-\u65b9\u6cd5\u4f7f\u7528\u4e2d\u95f4\u4ef6",level:3}];function c(n){const e={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:["Gin\u662f \u7528go \u8bed\u8a00\u5f00\u53d1\u7684",(0,i.jsx)(e.code,{children:"web"}),"\u6846\u67b6 \u63d0\u4f9b\u7c7b ",(0,i.jsx)(e.code,{children:"Martini"}),"\u7684api"]}),"\n",(0,i.jsx)(e.p,{children:"Gin\u4f18\u70b9"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u9ad8\u6027\u80fd:\u72b9\u5982\u91c7\u7528\u4e86 ",(0,i.jsx)(e.code,{children:"httprouter"})," \u5e93,gin\u7684\u6027\u80fd\u975e\u5e38\u51fa\u8272,\u6bd4\u540c\u7c7b\u6846\u67b6\u5feb\u4e8640\u500d"]}),"\n",(0,i.jsx)(e.li,{children:"\u6613\u7528\u6027: gin\u63d0\u4f9b\u4e86\u5185\u7f6e\u7684\u529f\u80fd,\u8f7b\u677e\u5b9e\u73b0web\u5f00\u53d1"}),"\n",(0,i.jsx)(e.li,{children:"\u6269\u5c55\u6027: gin \u5177\u6709\u63d2\u4ef6\u673a\u5236,\u53ef\u4ee5\u65b9\u4fbf\u6269\u5c55\u6846\u67b6\u7684\u529f\u80fd"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"gin-\u6846\u67b6\u7684\u6838\u5fc3",children:"gin \u6846\u67b6\u7684\u6838\u5fc3"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u8def\u7531\u5339\u914d\u5904\u7406"}),"\n",(0,i.jsx)(e.li,{children:"\u4e2d\u95f4\u4ef6\u673a\u5236"}),"\n",(0,i.jsx)(e.li,{children:"\u4e0a\u4e0b\u6587\u7ba1\u7406"}),"\n",(0,i.jsx)(e.li,{children:"\u5f02\u5e38\u5904\u7406"}),"\n",(0,i.jsx)(e.li,{children:"\u5e76\u53d1\u5904\u7406"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u8def\u7531\u5904\u7406",children:"\u8def\u7531\u5904\u7406"}),"\n",(0,i.jsxs)(e.p,{children:["gin \u4f7f\u7528\u4e86 ",(0,i.jsx)(e.code,{children:"\u57fa\u6570\u6811(Radix Tree)"})," \u6765\u7ba1\u7406\u8def\u7531,\u5c06\u8def\u7531\u5206\u89e3\u591a\u4e2a\u8282\u70b9,\u901a\u8fc7\u5339\u914d\u8def\u5f84\u7684\u524d\u7f00\u6765\u5feb\u901f\u627e\u5230\u5bf9\u5e94\u7684\u8def\u7531\u5904\u7406\u51fd\u6570,\u5f53\u6709\u65b0\u7684\u8def\u7531\u6ce8\u518c\u65f6,gin\u4f1a\u6839\u636e\u8def\u5f84\u6784\u5efa\u65b0\u7684\u8282\u70b9,\u5e76\u5c06\u5904\u7406\u7684\u51fd\u6570\u4e0e\u8282\u70b9\u7ed1\u5b9a.\u5728\u8bf7\u6c42\u5230\u6765\u65f6,gin\u4f1a\u4ece\u6839\u8282\u70b9\u5f00\u59cb\u904d\u5386\u8def\u7531\u6811,\u6839\u636e\u8bf7\u6c42\u8def\u5f84\u5339\u914d\u5230\u5bf9\u5e94\u7684\u5904\u7406\u51fd\u6570\u8fdb\u884c\u6267\u884c"]}),"\n",(0,i.jsx)(e.h3,{id:"\u4e2d\u95f4\u4ef6\u673a\u5236",children:"\u4e2d\u95f4\u4ef6\u673a\u5236"}),"\n",(0,i.jsx)(e.p,{children:"gin \u7684\u4e2d\u95f4\u4ef6\u673a\u5236\u662f\u901a\u8fc7\u65b9\u6cd5\u94fe\u5b9e\u73b0\u7684.\u6bcf\u4e2a\u4e2d\u95f4\u4ef6\u90fd\u662f\u4e00\u4e2a\u51fd\u6570,\u5b83\u63a5\u53d7\u4e0a\u4e0b\u6587\u5bf9\u8c61(context) \u548c\u51fd\u6570(next),\u5e76\u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\u53ef\u4ee5\u5904\u7406\u8bf7\u6c42\u548c\u54cd\u5e94,\u7136\u540e\u901a\u8fc7\u8c03\u7528next(),\u5c06\u51fd\u6570\u63a7\u5236\u6743\u4ea4\u7ed9\u4e0b\u4e00\u4e2a\u4e2d\u95f4\u4ef6.\u8fd9\u6837\u591a\u4e2a\u4e2d\u95f4\u4ef6\u53ef\u4ee5\u5f62\u6210\u4e00\u4e2a\u94fe\u5f0f\u8c03\u7528\u7684\u8fc7\u7a0b,\u4f9d\u6b21\u5bf9\u8bf7\u6c42\u8fdb\u884c\u5904\u7406"}),"\n",(0,i.jsx)(e.h3,{id:"\u4e0a\u4e0b\u6587\u7ba1\u7406",children:"\u4e0a\u4e0b\u6587\u7ba1\u7406"}),"\n",(0,i.jsx)(e.p,{children:"gin\u7684\u4e0a\u4e0b\u6587\u5bf9\u8c61(context)\u5c01\u88c5\u4e86\u4e00\u6b21http\u8bf7\u6c42\u7684\u4e0a\u4e0b\u6587\u4fe1\u606f,\u5305\u62ec\u8bf7\u6c42\u53c2\u6570,\u8bf7\u6c42\u5934,\u54cd\u5e94\u5185\u5bb9.\u5728\u5904\u7406\u8fc7\u7a0b\u4e2d,\u53ef\u4ee5\u901a\u8fc7\u4e0a\u4e0b\u6587\u5bf9\u8c61\u83b7\u53d6\u548c\u8bbe\u7f6e\u8fd9\u4e9b\u4fe1\u606f.gin\u5c06\u4e0a\u4e0b\u6587\u5bf9\u8c61\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u7ed9\u4e2d\u95f4\u4ef6\u548c\u8def\u7531\u5904\u7406\u51fd\u6570,\u5b9e\u73b0\u4e86\u8fd9\u4e9b\u51fd\u6570\u4e4b\u95f4\u5171\u4eab\u6570\u636e\u548c\u72b6\u6001\u7684\u80fd\u529b"}),"\n",(0,i.jsx)(e.h3,{id:"\u5f02\u5e38\u5904\u7406",children:"\u5f02\u5e38\u5904\u7406"}),"\n",(0,i.jsxs)(e.p,{children:["gin \u5185\u7f6e\u4e86\u5bf9\u5f02\u5e38\u5904\u7406\u7684\u673a\u5236,\u5f53\u53d1\u751f\u5f02\u5e38,gin\u4f1a\u6355\u83b7\u5f02\u5e38\u5e76\u8fd4\u56de\u4e00\u4e2a\u5408\u9002\u7684\u9519\u8bef\u54cd\u5e94,\u540c\u65f6 gin\u5185\u7f6e\u4e86\u4e00\u4e9b\u8f85\u52a9\u65b9\u6cd5, ",(0,i.jsx)(e.code,{children:"Abort()"})," ",(0,i.jsx)(e.code,{children:"AbortWithStatus()"})," \u7528\u4e8e\u5904\u7406\u8fc7\u7a0b\u4e2d\u7ec8\u6b62\u8bf7\u6c42\u5e76\u8fd4\u56de\u7279\u5b9a\u7684\u9519\u8bef\u54cd\u5e94"]}),"\n",(0,i.jsx)(e.h3,{id:"\u5e76\u53d1\u5904\u7406",children:"\u5e76\u53d1\u5904\u7406"}),"\n",(0,i.jsx)(e.p,{children:"gin\u6846\u67b6\u4f7f\u7528\u4e86goroutine\u6765\u5b9e\u73b0\u5e76\u53d1\u5904\u7406\u8bf7\u6c42,\u6bcf\u4e2a\u8bf7\u6c42\u90fd\u4f1a\u5728\u72ec\u7acb\u7684goroutine\u4e2d\u6267\u884c"}),"\n",(0,i.jsx)(e.h2,{id:"engine-\u7ed3\u6784\u4f53",children:"Engine \u7ed3\u6784\u4f53"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"package gin\n\ntype HandlerFunc func(*Context)\ntype RouteInfo struct {\n\tMethod      string\n\tPath        string\n\tHandler     string\n\tHandlerFunc HandlerFunc\n}\ntype Engine struct {\n\t\n\t// \u8def\u7531\u7ec4\n\tRouteGroup\n\t\n\t// \u542f\u7528\u81ea\u52a8\u91cd\u5b9a\u5411,\u5982\u679c\u5f53\u524d\u8def\u7531\u65e0\u6cd5\u5339\u914d\u4f46\u5b58\u5728\u6ca1\u6709\u5c3e\u90e8\u659c\u6746\u7684\u8def\u5f84\u7684\u5904\u7406\u7a0b\u5e8f\n\tRedirectTrailingSlash bool\n\t\n\t// \u5982\u679c\u542f\u7528,\u8def\u7531\u5668\u5c06\u5c1d\u8bd5\u4fee\u590d\u5f53\u524d\u8bf7\u6c42\u8def\u5f84\n\tRedirectFixedPath bool\n\t\n\t// \u5982\u679c\u542f\u7528,\u8def\u7531\u5668\u5c06\u68c0\u67e5\u5f53\u524d\u8def\u7531\u662f\u5426\u5141\u8bb8\u5176\u5b83\u4f7f\u7528\u65b9\u6cd5\n\tHandleMethodNotAllowed bool\n\t\n\t// \u5982\u679c\u542f\u7528,\u5c06\u4ece\u8bf7\u6c42\u5934\u4e2d\u89e3\u6790 \u5339\u914d\u5ba2\u6237\u7aefip\n\tForwardedByClientIP bool\n\t// \n\tAppEngine bool\n\t// \u5982\u679c\u542f\u7528 \u5c06\u4f7f\u7528 url.Path \n\tUseRawPath bool\n\t\n\t// \n\tUnescapePathValues bool\n\n\t// RemoveExtraSlash\u5373\u4f7f\u6709\u989d\u5916\u7684\u659c\u6760\uff0c\u4e5f\u53ef\u4ee5\u4eceURL\u4e2d\u89e3\u6790\u53c2\u6570\u3002\n\t// \u53c2\u89c1PR\uff031817\u548c\u95ee\u9898\uff031644\n\tRemoveExtraSlash bool\n\n\t// RemoteIPHeaders\u7528\u4e8e\u5728`(*gin.Engine).ForwardedByClientIP`\u4e3a`true`\u4e14\n\t// `(*gin.Context).Request.RemoteAddr`\u5339\u914d`(*gin.Engine).SetTrustedProxies()`\u5b9a\u4e49\u7684\u7f51\u7edc\u6e90\u5217\u8868\u4e4b\u4e00\u65f6\uff0c\n\t// \u83b7\u53d6\u5ba2\u6237\u7aefIP\u7684\u5934\u90e8\u5217\u8868\u3002\n\tRemoteIPHeaders []string\n\n\t// TrustedPlatform\u5982\u679c\u8bbe\u7f6e\u4e3a\u503c\u4e3agin.Platform*\u7684\u5e38\u6570\uff0c\u5c06\u4fe1\u4efb\u8be5\u5e73\u53f0\u8bbe\u7f6e\u7684\u5934\u90e8\uff0c\u4f8b\u5982\u7528\u4e8e\u786e\u5b9a\u5ba2\u6237\u7aefIP\n\tTrustedPlatform string\n\t\n    // MaxMultipartMemory\u662f\u4f20\u9012\u7ed9http.Request\u7684ParseMultipartForm\u65b9\u6cd5\u8c03\u7528\u7684'maxMemory'\u53c2\u6570\u7684\u503c\u3002\n\tMaxMultipartMemory int64\n\n\t// UseH2C\u542f\u7528h2c\u652f\u6301\u3002\n\tUseH2C bool\n\n\t// ContextWithFallback\u5728Context.Request.Context()\u4e0d\u4e3anil\u65f6\uff0c\u542f\u7528\u56de\u9000Context.Deadline()\uff0cContext.Done()\uff0cContext.Err()\u548cContext.Value()\u3002\n\tContextWithFallback bool\n\n\tdelims           render.Delims\n\tsecureJSONPrefix string\n\tHTMLRender       render.HTMLRender\n\tFuncMap          template.FuncMap\n\tallNoRoute       HandlersChain\n\tallNoMethod      HandlersChain\n\tnoRoute          HandlersChain\n\tnoMethod         HandlersChain\n\tpool             sync.Pool\n\t// \u65b9\u6cd5\u6811\u5217\u8868\n\ttrees            methodTrees\n\tmaxParams        uint16\n\tmaxSections      uint16\n\ttrustedProxies   []string\n\ttrustedCIDRs     []*net.IPNet\n\n\n\n}\n\n"})}),"\n",(0,i.jsx)(e.h2,{id:"routergroup-\u7ed3\u6784\u4f53",children:"RouterGroup \u7ed3\u6784\u4f53"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"package gin\n\ntype RouterGroup struct {\n\tHandlers HandlesChain // \u50a8\u5b58\u5c06\u8981\u6267\u884c\u7684\u51fd\u6570,\u5305\u62ec\u8def\u7531\u4e2d\u95f4\u4ef6\u548c\u8def\u7531\u51fd\u6570\n\tbasePath string // \u8def\u5f84\n\tengine *Engine // \u6307\u5411\u6839\u7ed3\u6784\u4f53\n\troot bool // \u6807\u5fd7\u662f\u5426\u662f\u6839\u7ed3\u6784\u4f53\n}\n\n"})}),"\n",(0,i.jsx)(e.h3,{id:"use-\u65b9\u6cd5\u4f7f\u7528\u4e2d\u95f4\u4ef6",children:"Use \u65b9\u6cd5\u4f7f\u7528\u4e2d\u95f4\u4ef6"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"Use"})," \u65b9\u6cd5,\u4e00\u822c\u4f7f\u7528",(0,i.jsx)(e.code,{children:"Use"})," \u51fd\u6570\u4f7f\u7528\u4e2d\u95f4\u4ef6"]})]})}function h(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>s,a:()=>o});var i=t(67294);const r={},l=i.createContext(r);function o(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);