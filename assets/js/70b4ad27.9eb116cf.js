"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[88731],{81964:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(85893),l=t(11151);const o={title:"Go\u7684\u5185\u5b58\u5bf9\u9f50\u673a\u5236",tags:["Go"],authors:"ahKevinXy",description:"Go\u7684\u7ed3\u6784\u4f53\u5185\u5b58\u5bf9\u9f50\u673a\u5236",keywords:["\u5185\u5b58","\u4f18\u5316"],date:new Date("2023-03-06T15:17:31.000Z"),image:"https://www.dmoe.cc/random.php?type=2304065"},s=void 0,a={permalink:"/blog/2023/03/06/memory_struct",source:"@site/blog/2023/03/06/memory_struct.md",title:"Go\u7684\u5185\u5b58\u5bf9\u9f50\u673a\u5236",description:"Go\u7684\u7ed3\u6784\u4f53\u5185\u5b58\u5bf9\u9f50\u673a\u5236",date:"2023-03-06T15:17:31.000Z",formattedDate:"March 6, 2023",tags:[{label:"Go",permalink:"/blog/tags/go"}],readingTime:4.995,hasTruncateMarker:!0,authors:[{name:"ahKevinXy",title:"\u4f5c\u8005",url:"https://github.com/ahKevinXy",email:"ahkevinxy@gmail.com",imageURL:"/img/headers.png",key:"ahKevinXy"}],frontMatter:{title:"Go\u7684\u5185\u5b58\u5bf9\u9f50\u673a\u5236",tags:["Go"],authors:"ahKevinXy",description:"Go\u7684\u7ed3\u6784\u4f53\u5185\u5b58\u5bf9\u9f50\u673a\u5236",keywords:["\u5185\u5b58","\u4f18\u5316"],date:"2023-03-06T15:17:31.000Z",image:"https://www.dmoe.cc/random.php?type=2304065"},unlisted:!1,prevItem:{title:"\u9ad8\u6027\u80fd\u534f\u7a0b\u6c60ants\u6e90\u7801\u5256\u6790",permalink:"/blog/2023/03/06/ants"},nextItem:{title:"\u61c2\u79d2\u6740\u7cfb\u7edf",permalink:"/blog/2023/03/06/ms"}},r={authorsImageUrls:[void 0]},c=[{value:"\u4ec0\u4e48\u662f\u5185\u5b58\u5bf9\u9f50",id:"\u4ec0\u4e48\u662f\u5185\u5b58\u5bf9\u9f50",level:2},{value:"\u5bf9\u9f50\u7cfb\u6570",id:"\u5bf9\u9f50\u7cfb\u6570",level:2},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9",level:2},{value:"\u4f18\u70b9",id:"\u4f18\u70b9",level:2},{value:"\u7ed3\u6784\u4f53\u5bf9\u9f50\u539f\u5219",id:"\u7ed3\u6784\u4f53\u5bf9\u9f50\u539f\u5219",level:2}];function d(n){const e={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u4ec0\u4e48\u662f\u5185\u5b58\u5bf9\u9f50",children:"\u4ec0\u4e48\u662f\u5185\u5b58\u5bf9\u9f50"}),"\n",(0,i.jsxs)(e.p,{children:["\u4e3a\u4e86\u80fd\u8ba9CPU\u53ef\u4ee5\u66f4\u5feb\u7684\u5b58\u53d6\u5230\u5404\u4e2a\u5b57\u6bb5\uff0cGo\u7f16\u8bd1\u5668\u4f1a\u5e2e\u4f60\u628a",(0,i.jsx)(e.code,{children:"struct\u7ed3\u6784\u4f53"}),"\u505a\u6570\u636e\u7684\u5bf9\u9f50\u3002\u6240\u8c13\u7684\u6570\u636e\u5bf9\u9f50\uff0c\u662f\u6307\u5185\u5b58\u5730\u5740\u662f\u6240\u5b58\u50a8\u6570\u636e\u7684\u5927\u5c0f\uff08\u6309\u5b57\u8282\u4e3a\u5355\u4f4d\uff09\u7684\u6574\u6570\u500d\uff0c\u4ee5\u4fbfCU\u53ef\u4ee5\u4e00\u6b21\u5c06\u8be5\u6570\u636e\u4ece\u5185\u5b58\u4e2d\u8bfb\u53d6\u51fa\u6765\u3002\u7f16\u8bd1\u5668\u901a\u8fc7\u5728\u7ed3\u6784\u4f53\u7684\u5404\u4e2a\u5b57\u6bb5\u4e4b\u95f4\u586b\u5145\u4e00\u4e9b\u7a7a\u767d\u5df2\u8fbe\u5230\u5bf9\u9f50\u7684\u76ee\u7684\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u5bf9\u9f50\u7cfb\u6570",children:"\u5bf9\u9f50\u7cfb\u6570"}),"\n",(0,i.jsx)(e.p,{children:'\u4e0d\u540c\u786c\u4ef6\u5e73\u53f0\u5360\u7528\u7684\u5927\u5c0f\u548c\u5bf9\u9f50\u503c\u90fd\u53ef\u80fd\u662f\u4e0d\u4e00\u6837\u7684\uff0c\u6bcf\u4e2a\u7279\u5b9a\u5e73\u53f0\u4e0a\u7684\u7f16\u8bd1\u5668\u90fd\u6709\u81ea\u5df1\u7684\u9ed8\u8ba4"\u5bf9\u9f50\u7cfb\u6570"\uff0c32\u4f4d\u7cfb\u7edf\u5bf9\u9f50\u7cfb\u6570\u662f4\uff0c64\u4f4d\u7cfb\u7edf\u5bf9\u9f50\u7cfb\u6570\u662f8'}),"\n",(0,i.jsxs)(e.p,{children:["\u4e0d\u540c\u7c7b\u578b\u7684\u5bf9\u9f50\u7cfb\u6570\u4e5f\u53ef\u80fd\u4e0d\u4e00\u6837\uff0c\u4f7f\u7528Go\u8bed\u8a00\u4e2d\u7684",(0,i.jsx)(e.code,{children:"unsafe.Alignof"}),"\u51fd\u6570\u53ef\u4ee5\u8fd4\u56de\u76f8\u5e94\u7c7b\u578b\u7684\u5bf9\u9f50\u7cfb\u6570\uff0c\u5bf9\u9f50\u7cfb\u6570\u90fd\u7b26\u54082^n\u8fd9\u4e2a\u89c4\u5f8b\uff0c\u6700\u5927\u4e5f\u4e0d\u4f1a\u8d85\u8fc78"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "unsafe"\n)\n\nfunc main() {\n    fmt.Printf("bool alignof is %d\\n", unsafe.Alignof(bool(true)))\n    fmt.Printf("string alignof is %d\\n", unsafe.Alignof(string("a")))\n    fmt.Printf("int alignof is %d\\n", unsafe.Alignof(int(0)))\n    fmt.Printf("float alignof is %d\\n", unsafe.Alignof(float64(0)))\n    fmt.Printf("int32 alignof is %d\\n", unsafe.Alignof(int32(0)))\n    fmt.Printf("float32 alignof is %d\\n", unsafe.Alignof(float32(0)))\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u53ef\u4ee5\u67e5\u770b\u5230\u5404\u79cd\u7c7b\u578b\u5728Windows 64\u4f4d\u4e0a\u7684\u5bf9\u9f50\u7cfb\u6570\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"bool alignof is 1\nstring alignof is 8 \nint alignof is 8    \nfloat alignof is 8  \nint32 alignof is 4  \nfloat32 alignof is 4\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u7f3a\u70b9",children:"\u7f3a\u70b9"}),"\n",(0,i.jsx)(e.p,{children:"\u5b58\u5728\u5185\u5b58\u7a7a\u95f4\u7684\u6d6a\u8d39\uff0c\u5b9e\u9645\u4e0a\u662f\u7a7a\u95f4\u6362\u65f6\u95f4\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u4f18\u70b9",children:"\u4f18\u70b9"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u63d0\u9ad8\u53ef\u79fb\u690d\u6027\uff0c\u6709\u4e9bCPU\u53ef\u4ee5\u8bbf\u95ee\u4efb\u610f\u5730\u5740\u4e0a\u7684\u4efb\u610f\u6570\u636e\uff0c\u800c\u6709\u4e9bCPU\u53ea\u80fd\u5728\u7279\u5b9a\u5730\u5740\u8bbf\u95ee\u6570\u636e\uff0c\u56e0\u6b64\u4e0d\u540c\u786c\u4ef6\u5e73\u53f0\u5177\u6709\u5dee\u5f02\u6027\uff0c\u8fd9\u6837\u7684\u4ee3\u7801\u5c31\u4e0d\u5177\u6709\u79fb\u690d\u6027\uff0c\u5982\u679c\u5728\u7f16\u8bd1\u65f6\uff0c\u5c06\u5206\u914d\u7684\u5185\u5b58\u8fdb\u884c\u5bf9\u9f50\uff0c\u8fd9\u5c31\u5177\u6709\u5e73\u53f0\u53ef\u4ee5\u79fb\u690d\u6027\u4e86"}),"\n",(0,i.jsx)(e.li,{children:"\u63d0\u9ad8\u5185\u5b58\u7684\u8bbf\u95ee\u6548\u7387\uff0c32\u4f4dCPU\u4e0b\u4e00\u6b21\u53ef\u4ee5\u4ece\u5185\u5b58\u4e2d\u8bfb\u53d632\u4f4d\uff084\u4e2a\u5b57\u8282\uff09\u7684\u6570\u636e\uff0c64\u4f4dCPU\u4e0b\u4e00\u6b21\u53ef\u4ee5\u4ece\u5185\u5b58\u4e2d\u8bfb\u53d664\u4f4d\uff088\u4e2a\u5b57\u8282\uff09\u7684\u6570\u636e\uff0c\u8fd9\u4e2a\u957f\u5ea6\u4e5f\u79f0\u4e3aCPU\u7684\u5b57\u957f\u3002CPU\u4e00\u6b21\u53ef\u4ee5\u8bfb\u53d61\u4e2a\u5b57\u957f\u7684\u6570\u636e\u5230\u5185\u5b58\u4e2d\uff0c\u5982\u679c\u6240\u9700\u8981\u8bfb\u53d6\u7684\u6570\u636e\u6b63\u597d\u8de8\u4e861\u4e2a\u5b57\u957f\uff0c\u90a3\u5c31\u5f97\u82b1\u4e24\u4e2aCPU\u5468\u671f\u7684\u65f6\u95f4\u53bb\u8bfb\u53d6\u4e86\u3002\u56e0\u6b64\u5728\u5185\u5b58\u4e2d\u5b58\u653e\u6570\u636e\u65f6\u8fdb\u884c\u5bf9\u9f50\uff0c\u53ef\u4ee5\u63d0\u9ad8\u5185\u5b58\u8bbf\u95ee\u6548\u7387\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u7ed3\u6784\u4f53\u5bf9\u9f50\u539f\u5219",children:"\u7ed3\u6784\u4f53\u5bf9\u9f50\u539f\u5219"}),"\n",(0,i.jsx)(e.p,{children:"\u5bf9\u9f50\u539f\u5219\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u7b2c\u4e00\u4e2a\u6210\u5458\u5728\u7ed3\u6784\u4f53\u53d8\u91cf\u504f\u79fb\u5904\u4e3a0\u7684\u5730\u5740\u5904"}),"\n",(0,i.jsx)(e.li,{children:'\u5176\u4ed6\u6210\u5458\u8981\u5bf9\u9f50\u5230\u67d0\u4e2a\u6570\u5b57(\u5bf9\u9f50\u6570)\u7684\u6574\u6570\u500d\u7684\u5730\u5740\u5904\u3002\u5bf9\u9f50\u6570=\u7f16\u8bd1\u5668\u9ed8\u8ba4\u7684\u4e00\u4e2a\u5bf9\u9f50\u6570\u4e0e\u8be5\u6210\u5458\u5927\u5c0f\u7684\u8f83\u5c0f\u503c\u3002\u6bcf\u4e2a\u7279\u5b9a\u5e73\u53f0\u4e0a\u7684\u7f16\u8bd1\u5668\u90fd\u6709\u81ea\u5df1\u7684\u9ed8\u8ba4"\u5bf9\u9f50\u7cfb\u6570"\uff0c32\u4f4d\u7cfb\u7edf\u5bf9\u9f50\u7cfb\u6570\u662f4\uff0c64\u4f4d\u7cfb\u7edf\u5bf9\u9f50\u7cfb\u6570\u662f8\u3002'}),"\n",(0,i.jsx)(e.li,{children:"\u7ed3\u6784\u4f53\u603b\u5927\u5c0f\u4e3a\u6700\u5927\u5bf9\u9f50\u6570\u7684\u6574\u6570\u500d"}),"\n",(0,i.jsx)(e.li,{children:"\u5982\u679c\u5d4c\u5957\u4e86\u7ed3\u6784\u4f53\u7684\u60c5\u51b5\uff0c\u5d4c\u5957\u7684\u7ed3\u6784\u4f53\u5bf9\u9f50\u5230\u81ea\u5df1\u7684\u6700\u5927\u5bf9\u9f50\u6570\u7684\u6574\u6570\u500d\u5904\uff0c\u7ed3\u6784\u4f53\u6574\u4f53\u5c31\u662f\u6240\u6709\u6700\u5927\u5bf9\u9f50\u6570\u7684\u6574\u6570\u500d\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"type T1 struct {\n    i16  int16 // 2 byte\n    bool bool  // 1 byte\n}\n\ntype T2 struct {\n    i8  int8  // 1 byte\n    i64 int64 // 8 byte\n    i32 int32 // 4 byte\n}\n\ntype T3 struct {\n    i8  int8  // 1 byte\n    i32 int32 // 4 byte\n    i64 int64 // 8 byte\n}\n\nfunc main() {\n    fmt.Println(runtime.GOARCH) // amd64\n\n    t1 := T1{}\n    fmt.Println(unsafe.Sizeof(t1)) // 4 bytes\n\n    t2 := T2{}\n    fmt.Println(unsafe.Sizeof(t2)) // 24 bytes\n\n    t3 := T3{}\n    fmt.Println(unsafe.Sizeof(t3)) // 16 bytes\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u4ee5T1 \u7ed3\u6784\ni16\u5e76\u6ca1\u6709\u76f4\u63a5\u653e\u5728bool\u7684\u540e\u9762\uff0c\u800c\u662f\u5728bool\u4e2d\u586b\u5145\u4e86\u4e00\u4e2a\u7a7a\u767d\u540e\uff0c\u653e\u5230\u4e86\u504f\u79fb\u91cf\u4e3a2\u7684\u4f4d\u7f6e\u4e0a\u3002\u5982\u679ci16\u4ece\u504f\u79fb\u91cf\u4e3a1\u7684\u4f4d\u7f6e\u5f00\u59cb\u5360\u75282\u4e2a\u5b57\u8282\uff0c\u6839\u636e\u5bf9\u9f50\u539f\u52192\uff1a\u6784\u4f53\u53d8\u91cf\u4e2d\u6210\u5458\u7684\u504f\u79fb\u91cf\u5fc5\u987b\u662f\u6210\u5458\u5927\u5c0f\u7684\u6574\u6570\u500d\uff0c\u5957\u7528\u516c\u5f0f 1 % 2 = 1\uff0c\u5c31\u4e0d\u6ee1\u8db3\u5bf9\u9f50\u7684\u8981\u6c42\uff0c\u6240\u4ee5i16\u4ece\u504f\u79fb\u91cf\u4e3a2\u7684\u4f4d\u7f6e\u5f00\u59cb"})]})}function f(n={}){const{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>a,a:()=>s});var i=t(67294);const l={},o=i.createContext(l);function s(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:s(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);