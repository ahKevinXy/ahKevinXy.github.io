"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[97116],{20001:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>o});var l=c(74848),s=c(28453);const t={title:"Go select \u5b66\u4e60",tags:["Go"],authors:"ahKevinXy",description:"\u5982\u4f55\u4f7f\u7528 go select",hide_table_of_contents:!1,image:"https://source.unsplash.com/random?people&22"},i="Go select \u5982\u4f55\u4f7f\u7528",d={permalink:"/blog/2023/08/08/go-select",source:"@site/blog/2023/08/08/go-select.md",title:"Go select \u5b66\u4e60",description:"\u5982\u4f55\u4f7f\u7528 go select",date:"2023-08-08T00:00:00.000Z",formattedDate:"2023\u5e748\u67088\u65e5",tags:[{label:"Go",permalink:"/blog/tags/go"}],readingTime:3.805,hasTruncateMarker:!0,authors:[{name:"ahKevinXy",title:"\u4f5c\u8005",url:"https://github.com/ahKevinXy",email:"ahkevinxy@gmail.com",imageURL:"/img/headers.png",key:"ahKevinXy"}],frontMatter:{title:"Go select \u5b66\u4e60",tags:["Go"],authors:"ahKevinXy",description:"\u5982\u4f55\u4f7f\u7528 go select",hide_table_of_contents:!1,image:"https://source.unsplash.com/random?people&22"},unlisted:!1,prevItem:{title:"Go  json \u5904\u7406",permalink:"/blog/2023/08/08/go-json"},nextItem:{title:"JVM\u5e38\u7528\u547d\u4ee4",permalink:"/blog/2023/08/01/jvm-0801"}},a={authorsImageUrls:[void 0]},o=[{value:"\u57fa\u672c\u8bed\u6cd5",id:"\u57fa\u672c\u8bed\u6cd5",level:2},{value:"\u4f7f\u7528\u89c4\u5219",id:"\u4f7f\u7528\u89c4\u5219",level:2},{value:"\u591a\u8def\u590d\u7528",id:"\u591a\u8def\u590d\u7528",level:2},{value:"\u975e\u963b\u585e\u901a\u4fe1",id:"\u975e\u963b\u585e\u901a\u4fe1",level:2},{value:"\u8d85\u65f6\u5904\u7406",id:"\u8d85\u65f6\u5904\u7406",level:2}];function r(e){const n={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.img,{src:"https://source.unsplash.com/random?nature&22",alt:"\u9884\u89c8\u56fe"}),"\n\u5728 Go \u8bed\u8a00\u5185 ",(0,l.jsx)(n.code,{children:"select"})," \u662f\u4e00\u4e2a\u5173\u952e\u5b57,\u7528\u4e8e\u76d1\u542c \u548c",(0,l.jsx)(n.code,{children:"channel"})," \u6709\u5173\u7684IO \u64cd\u4f5c"]}),"\n",(0,l.jsxs)(n.p,{children:["\u901a\u8fc7 ",(0,l.jsx)(n.code,{children:"select"})," \u8bed\u53e5,\u53ef\u4ee5\u540c\u65f6\u76d1\u542c\u591a\u4e2achannel,\u5e76\u5728\u5176\u4e2d\u4efb\u610f\u4e00\u4e2a",(0,l.jsx)(n.code,{children:"channel"})," \u5c31\u7eea\u65f6\u8fdb\u884c\u5904\u7406"]}),"\n",(0,l.jsx)(n.h2,{id:"\u57fa\u672c\u8bed\u6cd5",children:"\u57fa\u672c\u8bed\u6cd5"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"select"})," \u8bed\u53e5\u57fa\u672c\u8bed\u6cd5:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:"select {\ncase <-channel1:\n\t\n\t// do channel1 \u903b\u8f91\ncase data:= <-channel2:\n\t// \u901a\u8fc7channel \u5c31\u7eea\u65f6\u5019\u5904\u7406\ndefault:\n\t// \u6ca1\u6709\u4efb\u4f55\u901a\u9053\u5c31\u7eea\u65f6\u8fdb\u884c\u5904\u7406\n}\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u8bed\u6cd5\u7c7b\u578b ",(0,l.jsx)(n.code,{children:"switch"})," \u76f8\u8bc6"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"switch"})," \u7528\u4e8e\u6761\u4ef6\u5224\u65ad \u800c ",(0,l.jsx)(n.code,{children:"select"})," \u7528\u4e8e\u901a\u9053\u64cd\u4f5c.\u4e0d\u80fd\u5728",(0,l.jsx)(n.code,{children:"select"}),"\u8bed\u53e5\u4e2d\u4f7f\u7528\u4efb\u610f\u7c7b\u578b\u7684\u6761\u4ef6\u8868\u8fbe\u5f0f\u53ea\u80fd\u5bf9\u901a\u9053\u8fdb\u884c\u64cd\u4f5c"]}),"\n",(0,l.jsx)(n.h2,{id:"\u4f7f\u7528\u89c4\u5219",children:"\u4f7f\u7528\u89c4\u5219"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"select"})," \u8bed\u53e5\u53ea\u80fd\u4f7f\u7528\u8fc7\u7a0b\u4e2d,\u7528\u4e8e\u591a\u4e2a\u901a\u9053\u4e4b\u95f4\u8fdb\u884c\u9009\u62e9,\u4ee5\u76d1\u542c\u901a\u9053\u7684\u5c31\u7eea\u6628\u5929,\u800c\u4e0d\u662f\u7528\u4e8e\u5176\u5b83\u7c7b\u578b\u7684\u6761\u4ef6\u5224\u65ad"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"select"})," \u8bed\u53e5\u53ef\u4ee5\u4fdd\u62a4\u591a\u4e2a",(0,l.jsx)(n.code,{children:"case"}),"\u8bed\u53e5,\u6bcf\u4e2a",(0,l.jsx)(n.code,{children:"case"}),"\u5b50\u53e5\u5bf9\u5e94\u4e00\u4e2a\u901a\u9053\u64cd\u4f5c,\u5f53\u5176\u4e2d\u4efb\u610f\u4e00\u4e2a\u901a\u9053\u5c31\u7eea\u65f6,\u76f8\u5e94\u7684",(0,l.jsx)(n.code,{children:"case"})," \u5b50\u53e5\u5c06\u4f1a\u6267\u884c"]}),"\n",(0,l.jsxs)(n.li,{children:["\u5982\u679c\u591a\u4e2a\u901a\u8def\u90fd\u5c31\u7eea,",(0,l.jsx)(n.code,{children:"select"})," \u8bed\u53e5\u4f1a\u968f\u673a\u4e00\u4e2a\u901a\u9053\u6267\u884c,\u8fd9\u6837\u4fdd\u8bc1\u591a\u4e2a\u901a\u9053\u516c\u5e73\u7ade\u4e89"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"select"})," \u8bed\u53e5\u7684\u6267\u884c\u53ef\u80fd\u662f\u963b\u585e,\u4e5f\u53ef\u4ee5\u662f\u975e\u963b\u585e.\u5982\u679c\u6ca1\u6709\u4efb\u4f55\u4e00\u4e2a\u901a\u9053\u5c31\u7eea\u6ca1\u6709\u9ed8\u8ba4\u7684 ",(0,l.jsx)(n.code,{children:"default"})," \u5b50\u53e5,",(0,l.jsx)(n.code,{children:"select"})," \u8bed\u53e5\u4f1a\u963b\u585e,\u76f4\u5230\u6709\u4e00\u4e2a\u901a\u9053\u6765\u6267\u884c,\u5982\u679c\u6ca1\u6709\u4efb\u4f55\u4e00\u4e2a\u901a\u9053\u5c31\u7eea\u4e14\u6ca1\u6709\u9ed8\u8ba4\u7684",(0,l.jsx)(n.code,{children:"default"}),"\u5b50\u53e5,",(0,l.jsx)(n.code,{children:"select"})," \u8bed\u53e5\u4f1a\u963b\u585e,\u76f4\u5230\u4e00\u4e2a\u901a\u9053\u5c31\u7eea.\u5982\u679c\u6709",(0,l.jsx)(n.code,{children:"default"})," \u5b50\u53e5,\u4e14\u6ca1\u6709\u4efb\u4f55\u901a\u9053\u5c31\u7eea,\u90a3\u4e48",(0,l.jsx)(n.code,{children:"select"})," \u8bed\u53e5\u4f1a\u6267\u884c",(0,l.jsx)(n.code,{children:"default"})," \u5b50\u53e5\uff0c\u4ece\u800c\u907f\u514d\u963b\u585e\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u591a\u8def\u590d\u7528",children:"\u591a\u8def\u590d\u7528"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"select"})," \u6700\u5e38\u89c1\u7684\u7528\u9014\u4e4b\u4e00\uff0c\u540c\u65f6\u76d1\u542c\u591a\u4e2a\u901a\u9053\uff0c\u5e76\u6839\u636e\u5b83\u4eec\u7684\u5c31\u7eea\u72b6\u6001\u6267\u884c\u4e0d\u540c\u7684\u64cd\u4f5c\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "time"\n)\n\nfunc main() {\n    c1 := make(chan string)\n    c2 := make(chan string)\n\n    go func() {\n        time.Sleep(3 * time.Second)\n        c1 <- "one"\n    }()\n\n    go func() {\n        time.Sleep(3 * time.Second)\n        c2 <- "two"\n    }()\n\n    select {\n    case msg := <-c1:\n        fmt.Println(msg)\n    case msg := <-c2:\n        fmt.Println(msg)\n    }\n}\n\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884c\u4e0a\u9762\u7684\u4ee3\u7801\uff0c\u7a0b\u5e8f\u4f1a\u968f\u673a\u6253\u5370 one \u6216\u8005 two\uff0c\u5982\u679c\u901a\u9053\u4e3a\u7a7a\u7684\u8bdd\uff0c\u7a0b\u5e8f\u5c31\u4f1a\u4e00\u76f4\u963b\u585e\u5728\u90a3\u91cc\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u975e\u963b\u585e\u901a\u4fe1",children:"\u975e\u963b\u585e\u901a\u4fe1"}),"\n",(0,l.jsx)(n.p,{children:"\u5f53\u901a\u9053\u4e2d\u6ca1\u6709\u6570\u636e\u53ef\u8bfb\u6216\u8005\u6ca1\u6709\u7f13\u51b2\u7a7a\u95f4\u53ef\u5199\u65f6\uff0c\u666e\u901a\u7684\u8bfb\u5199\u64cd\u4f5c\u5c06\u4f1a\u963b\u585e\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u4f46\u901a\u8fc7 ",(0,l.jsx)(n.code,{children:"select"})," \u8bed\u53e5\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u6ca1\u6709\u6570\u636e\u5c31\u7eea\u65f6\u6267\u884c\u9ed8\u8ba4\u7684\u903b\u8f91\uff0c\u907f\u514d\u7a0b\u5e8f\u9677\u5165\u65e0\u9650\u7b49\u5f85\u72b6\u6001\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n)\n\nfunc main() {\n    channel := make(chan int)\n\n    select {\n    case data := <-channel:\n        fmt.Println("Received:", data)\n    default:\n        fmt.Println("No data available.")\n    }\n}\n\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884c\u4e0a\u9762\u4ee3\u7801\uff0c\u7a0b\u5e8f\u4f1a\u6267\u884c default \u5206\u652f\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u8d85\u65f6\u5904\u7406",children:"\u8d85\u65f6\u5904\u7406"}),"\n",(0,l.jsxs)(n.p,{children:["\u901a\u8fc7\u7ed3\u5408 ",(0,l.jsx)(n.code,{children:"select"})," \u548c ",(0,l.jsx)(n.code,{children:"time.After"})," \u51fd\u6570\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u6307\u5b9a\u65f6\u95f4\u5185\u7b49\u5f85\u901a\u9053\u5c31\u7eea\uff0c\u8d85\u8fc7\u65f6\u95f4\u540e\u6267\u884c\u76f8\u5e94\u7684\u903b\u8f91\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "time"\n)\n\nfunc main() {\n    channel := make(chan int)\n\n    select {\n    case data := <-channel:\n        fmt.Println("Received:", data)\n    case <-time.After(3 * time.Second):\n        fmt.Println("Timeout occurred.")\n    }\n}\n\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u6267\u884c\u4e0a\u9762\u4ee3\u7801\uff0c\u5982\u679c ",(0,l.jsx)(n.code,{children:"channel"})," \u5728 3 \u79d2\u5185\u6ca1\u6709\u6570\u636e\u53ef\u8bfb\uff0c",(0,l.jsx)(n.code,{children:"select"})," \u4f1a\u6267\u884c ",(0,l.jsx)(n.code,{children:"time.After"})," \u5206\u652f\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(r,{...e})}):r(e)}},28453:(e,n,c)=>{c.d(n,{R:()=>i,x:()=>d});var l=c(96540);const s={},t=l.createContext(s);function i(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);