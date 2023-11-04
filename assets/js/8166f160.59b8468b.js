"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[7216],{86243:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var a=e(85893),i=e(11151);const r={title:"\u516b\u5c0f\u65f6Golang\u5b66\u4e60\u7b14\u8bb0\ud83d\udcd2",tags:["go"],authors:"ahKevinXy",description:"go \u8bed\u8a00\u57fa\u7840  go\u8bed\u8a00\u664b\u7ea7 \u5982\u4f55\u5feb\u901f\u5165\u95e8 go \u8bed\u8a00",image:"https://source.unsplash.com/random?people&33"},l="go \u8bed\u8a00\u5b66\u4e60\u7b14\u8bb0",c={permalink:"/blog/2023/09/02/learn-go",source:"@site/blog/2023/09/02/learn-go.md",title:"\u516b\u5c0f\u65f6Golang\u5b66\u4e60\u7b14\u8bb0\ud83d\udcd2",description:"go \u8bed\u8a00\u57fa\u7840  go\u8bed\u8a00\u664b\u7ea7 \u5982\u4f55\u5feb\u901f\u5165\u95e8 go \u8bed\u8a00",date:"2023-09-02T00:00:00.000Z",formattedDate:"2023\u5e749\u67082\u65e5",tags:[{label:"go",permalink:"/blog/tags/go"}],readingTime:3.075,hasTruncateMarker:!0,authors:[{name:"ahKevinXy",title:"\u4f5c\u8005",url:"https://github.com/ahKevinXy",email:"ahkevinxy@gmail.com",imageURL:"/img/headers.png",key:"ahKevinXy"}],frontMatter:{title:"\u516b\u5c0f\u65f6Golang\u5b66\u4e60\u7b14\u8bb0\ud83d\udcd2",tags:["go"],authors:"ahKevinXy",description:"go \u8bed\u8a00\u57fa\u7840  go\u8bed\u8a00\u664b\u7ea7 \u5982\u4f55\u5feb\u901f\u5165\u95e8 go \u8bed\u8a00",image:"https://source.unsplash.com/random?people&33"},unlisted:!1,prevItem:{title:"ios",permalink:"/blog/2023/09/03/ios"},nextItem:{title:"jetbrains \u597d\u7528\u7684\u63d2\u4ef6",permalink:"/blog/2023/09/01/jetbrains"}},o={authorsImageUrls:[void 0]},s=[{value:"\u53d8\u91cf\u7684\u58f0\u660e",id:"\u53d8\u91cf\u7684\u58f0\u660e",level:2},{value:"const \u4e0e iota",id:"const-\u4e0e-iota",level:2},{value:"Golang \u4e2d\u51fd\u6570\u591a\u8fd4\u56de\u503c\u7684\u4e09\u79cd\u6a21\u5f0f",id:"golang-\u4e2d\u51fd\u6570\u591a\u8fd4\u56de\u503c\u7684\u4e09\u79cd\u6a21\u5f0f",level:2},{value:"defer \u8bed\u53e5\u8c03\u7528\u987a\u5e8f",id:"defer-\u8bed\u53e5\u8c03\u7528\u987a\u5e8f",level:2},{value:"\u6570\u7ec4\u4e0e\u52a8\u6001\u6570\u7ec4",id:"\u6570\u7ec4\u4e0e\u52a8\u6001\u6570\u7ec4",level:2},{value:"slice",id:"slice",level:2},{value:"map \u7684\u4e09\u79cd\u58f0\u660e\u5b9a\u4e49\u65b9\u5f0f",id:"map-\u7684\u4e09\u79cd\u58f0\u660e\u5b9a\u4e49\u65b9\u5f0f",level:2},{value:"\u653e\u5c04\u89e3\u6790\u7ed3\u6784\u4f53\u6807\u7b7e",id:"\u653e\u5c04\u89e3\u6790\u7ed3\u6784\u4f53\u6807\u7b7e",level:2},{value:"channel\u7684\u57fa\u672c\u5b9a\u4e49\u4e0e\u4f7f\u7528",id:"channel\u7684\u57fa\u672c\u5b9a\u4e49\u4e0e\u4f7f\u7528",level:2},{value:"channel \u6709\u7f13\u51b2\u548c\u65e0\u7f13\u51b2",id:"channel-\u6709\u7f13\u51b2\u548c\u65e0\u7f13\u51b2",level:2}];function m(n){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["from ",(0,a.jsx)(t.a,{href:"https://www.bilibili.com/video/BV1gf4y1r79E?p=10&vd_source=a86822017d9569c1898827cc698926aa",children:"\u30108\u5c0f\u65f6\u8f6c\u804cGolang\u5de5\u7a0b\u5e08(\u5982\u679c\u4f60\u60f3\u4f4e\u6210\u672c\u5b66\u4e60Go\u8bed\u8a00)\u3011"})]}),"\n",(0,a.jsx)(t.h2,{id:"\u53d8\u91cf\u7684\u58f0\u660e",children:"\u53d8\u91cf\u7684\u58f0\u660e"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\nfunc main() {\n\t// 1. \u4f7f\u7528 var \u58f0\u660e\n\tvar a int\n\tfmt.Println(a)\n\t// \u4f7f\u7528 b := \u6a21\u5f0f (\u53ea\u80fd\u5728\u51fd\u6570\u4f53\u5185\u4f7f\u7528)\n\tb :=1\n\tfmt.Println(b)\n\t\n\t// 3.\u6307\u5b9a\u9ed8\u8ba4\u503c\n\tvar c int = 10\n\tfmt.Println(c)\n\t\n\t// 4. var \u63a8\u65ad\u6a21\u5f0f (\u5168\u5c40\u53d8\u91cf\u901a\u5e38)\n\t\n\tvar d =4\n\tfmt.Println(d)\n\t\n\t// 5. \u591a\u4e2a\u53d8\u91cf\u58f0\u660e\n\tvar aa ,bb,cc int \n\t\n\tfmt.Println(aa,bb,cc)\n\tvar (\n\t\t\n    )\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"const-\u4e0e-iota",children:"const \u4e0e iota"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'package main\n\nimport "fmt"\nconst (\n\tBj= 0\n\tSh=1\n)\nconst (\n\tCity = iota // iota \u9ed8\u8ba4\u4e3a\u96f6\n\tAh\n\tJs\n\tSz\n)\n\nconst (\n\tB = 1 << (10*iota)\n\tKB\n\tMB\n\tGB\n)\n// error code \u9519\u8bef\u7801\u5e94\u7528\nconst (\n\tUserAuthErrorCode = 20000+iota \n\tUserPasswordErrorCode \n)\nfunc main() {\n\tconst length = 1\n\tfmt.Println(length)\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"golang-\u4e2d\u51fd\u6570\u591a\u8fd4\u56de\u503c\u7684\u4e09\u79cd\u6a21\u5f0f",children:"Golang \u4e2d\u51fd\u6570\u591a\u8fd4\u56de\u503c\u7684\u4e09\u79cd\u6a21\u5f0f"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:"package main\n\nfunc main() {\n\n}\n\nfunc HideName() (int, int) {\n\treturn 1, 2\n}\n\n// HaveName \u4f1a\u521d\u59cb\u5316\u9ed8\u8ba4\u503c\nfunc HaveName() (a int, b int) {\n\ta = 1\n\tb = 2\n\n\treturn\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"defer-\u8bed\u53e5\u8c03\u7528\u987a\u5e8f",children:"defer \u8bed\u53e5\u8c03\u7528\u987a\u5e8f"}),"\n",(0,a.jsx)(t.p,{children:"\u51fd\u6570\u7ed3\u675f\u524d\u7684\u6267\u884c\u7684\u7a0b\u5e8f"}),"\n",(0,a.jsxs)(t.p,{children:["\u6808\u6a21\u5f0f  ",(0,a.jsx)(t.code,{children:"\u5148\u8fdb\u5148\u51fa"})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\nfunc a() {\n\tfmt.Println(a)\n}\nfunc b()  {\n    fmt.Println(b)\n}\nfunc c()  {\n    fmt.Println(c)\n}\nfunc main() {\n\n\tdefer a()\n\tdefer b()\n\tdefer c()\n}\n\n// c , b, a \n'})}),"\n",(0,a.jsx)(t.h2,{id:"\u6570\u7ec4\u4e0e\u52a8\u6001\u6570\u7ec4",children:"\u6570\u7ec4\u4e0e\u52a8\u6001\u6570\u7ec4"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\nfunc main() {\n\tvar myArray1 [10]int\n\tmyArray2 := [10]int{1, 2, 3, 4}\n\tfmt.Println(myArray1)\n\tfmt.Println(myArray2)\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"slice",children:"slice"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"cap \u5bb9\u91cf(\u81ea\u52a8\u6269\u5bb9)"}),"\n",(0,a.jsx)(t.li,{children:"len \u957f\u5ea6"}),"\n",(0,a.jsx)(t.li,{children:"copy \u590d\u5236"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"map-\u7684\u4e09\u79cd\u58f0\u660e\u5b9a\u4e49\u65b9\u5f0f",children:"map \u7684\u4e09\u79cd\u58f0\u660e\u5b9a\u4e49\u65b9\u5f0f"}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"map \u662f\u5e76\u53d1\u4e0d\u5b89\u5168\u6a21\u5f0f"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\nfunc main() {\n\t//  \u58f0\u660e\u662f\u521d\u59cb\u5316 \u5fc5\u987b\u5f00\u8f9f\u7a7a\u95f4 \u4e0d\u7136\u7a7a\u6307\u9488\n\tvar mp1 map[string]string\n\n\tfmt.Println(mp1) // nil\n\t\n\t// \u5f00\u8f9f\u7a7a\u95f4\n\tmp1 = make(map[string]string,10) //\u5f00\u8f9f\u521d\u59cb 10\u4e2a\u5bb9\u91cf\n\t\n\t// make \u76f4\u63a5\u751f\u6210\n\tmp2 := make(map[string]string)\n\tmp2["1"]="1"\n\tfmt.Println(mp2)\n\t\n\t// \u521d\u59cb\u8d4b\u503c\n\tmp3 := map[string]string{\n\t\t"a":"1",\n    }\n\tfmt.Println(mp3)\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"\u653e\u5c04\u89e3\u6790\u7ed3\u6784\u4f53\u6807\u7b7e",children:"\u653e\u5c04\u89e3\u6790\u7ed3\u6784\u4f53\u6807\u7b7e"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"reflect"\n)\n\ntype Resume struct {\n\tName string `info:"name"`\n\tSex  string `info:"sex"`\n}\n\nfunc findTag(str interface{}) {\n\tt := reflect.TypeOf(str).Elem()\n\tfor i := 0; i < t.NumField(); i++ {\n\t\ttagsString := t.Field(i).Tag.Get("info")\n\t\tfmt.Println(tagsString)\n\t}\n}\nfunc main() {\n    var tags Resume\n\tfindTag(tags)\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"channel\u7684\u57fa\u672c\u5b9a\u4e49\u4e0e\u4f7f\u7528",children:"channel\u7684\u57fa\u672c\u5b9a\u4e49\u4e0e\u4f7f\u7528"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\nfunc main() {\n\n\t// \u65e0\u7f13\u51b2\u7ba1\u9053\n\tc := make(chan int)\n\tgo func() {\n\t\tdefer fmt.Println("stop channel")\n\t\t// \u5199\u5165\u901a\u9053\n\t\tc <- 666\n\t}()\n\t\n\t// \u8bfb\u53d6 \u963b\u585e\n\tnum := <-c\n\tdefer close(c)\n\tfmt.Println(num)\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"channel-\u6709\u7f13\u51b2\u548c\u65e0\u7f13\u51b2",children:"channel \u6709\u7f13\u51b2\u548c\u65e0\u7f13\u51b2"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"time"\n)\n\nfunc main() {\n\tc := make(chan int, 3)\n\n\t// \u83b7\u53d6\u5bb9\u91cf\u548c\u957f\u5ea6\n\tfmt.Printf("%v %v", len(c), cap(c))\n\tgo func() {\n\t\tfor i := 0; i < 30; i++ {\n\t\t\tc <- i\n\t\t\tfmt.Printf("%d %d", len(c), cap(c))\n\t\t}\n\t}()\n\ttime.Sleep(time.Second)\n\t\n}\n'})})]})}function d(n={}){const{wrapper:t}={...(0,i.a)(),...n.components};return t?(0,a.jsx)(t,{...n,children:(0,a.jsx)(m,{...n})}):m(n)}},11151:(n,t,e)=>{e.d(t,{Z:()=>c,a:()=>l});var a=e(67294);const i={},r=a.createContext(i);function l(n){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function c(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),a.createElement(r.Provider,{value:t},n.children)}}}]);