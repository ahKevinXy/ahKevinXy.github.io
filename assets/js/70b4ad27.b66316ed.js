"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[88731],{3905:function(n,t,e){e.d(t,{Zo:function(){return p},kt:function(){return g}});var r=e(67294);function i(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function a(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function o(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?a(Object(e),!0).forEach((function(t){i(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function l(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}var u=r.createContext({}),f=function(n){var t=r.useContext(u),e=t;return n&&(e="function"==typeof n?n(t):o(o({},t),n)),e},p=function(n){var t=f(n.components);return r.createElement(u.Provider,{value:t},n.children)},s="mdxType",c={inlineCode:"code",wrapper:function(n){var t=n.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(n,t){var e=n.components,i=n.mdxType,a=n.originalType,u=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),s=f(e),m=i,g=s["".concat(u,".").concat(m)]||s[m]||c[m]||a;return e?r.createElement(g,o(o({ref:t},p),{},{components:e})):r.createElement(g,o({ref:t},p))}));function g(n,t){var e=arguments,i=t&&t.mdxType;if("string"==typeof n||i){var a=e.length,o=new Array(a);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=n,l[s]="string"==typeof n?n:i,o[1]=l;for(var f=2;f<a;f++)o[f]=e[f];return r.createElement.apply(null,o)}return r.createElement.apply(null,e)}m.displayName="MDXCreateElement"},72325:function(n,t,e){e.r(t),e.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return l},metadata:function(){return f},toc:function(){return s}});var r=e(87462),i=e(63366),a=(e(67294),e(3905)),o=["components"],l={title:"Go\u7684\u5185\u5b58\u5bf9\u9f50\u673a\u5236",tags:["Go"],authors:"ahKevinXy",description:"Go\u7684\u7ed3\u6784\u4f53\u5185\u5b58\u5bf9\u9f50\u673a\u5236",keywords:["\u5185\u5b58","\u4f18\u5316"],date:new Date("2023-03-06T15:17:31.000Z")},u=void 0,f={permalink:"/blog/2023/03/06/memory_struct",source:"@site/blog/2023/03/06/memory_struct.md",title:"Go\u7684\u5185\u5b58\u5bf9\u9f50\u673a\u5236",description:"Go\u7684\u7ed3\u6784\u4f53\u5185\u5b58\u5bf9\u9f50\u673a\u5236",date:"2023-03-06T15:17:31.000Z",formattedDate:"2023\u5e743\u67086\u65e5",tags:[{label:"Go",permalink:"/blog/tags/go"}],readingTime:5.01,hasTruncateMarker:!1,authors:[{name:"ahKevinXy",title:"\u4f5c\u8005",url:"https://github.com/ahKevinXy",email:"ahkevinxy@gmail.com",imageURL:"https://api.isoyu.com/mm_images.php",key:"ahKevinXy"}],frontMatter:{title:"Go\u7684\u5185\u5b58\u5bf9\u9f50\u673a\u5236",tags:["Go"],authors:"ahKevinXy",description:"Go\u7684\u7ed3\u6784\u4f53\u5185\u5b58\u5bf9\u9f50\u673a\u5236",keywords:["\u5185\u5b58","\u4f18\u5316"],date:"2023-03-06T15:17:31.000Z"},prevItem:{title:"\u9ad8\u6027\u80fd\u534f\u7a0b\u6c60ants\u6e90\u7801\u5256\u6790",permalink:"/blog/2023/03/06/ants"},nextItem:{title:"\u61c2\u79d2\u6740\u7cfb\u7edf",permalink:"/blog/2023/03/06/ms"}},p={authorsImageUrls:[void 0]},s=[{value:"\u4ec0\u4e48\u662f\u5185\u5b58\u5bf9\u9f50",id:"\u4ec0\u4e48\u662f\u5185\u5b58\u5bf9\u9f50",level:2},{value:"\u5bf9\u9f50\u7cfb\u6570",id:"\u5bf9\u9f50\u7cfb\u6570",level:2},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9",level:2},{value:"\u4f18\u70b9",id:"\u4f18\u70b9",level:2},{value:"\u7ed3\u6784\u4f53\u5bf9\u9f50\u539f\u5219",id:"\u7ed3\u6784\u4f53\u5bf9\u9f50\u539f\u5219",level:2}],c={toc:s},m="wrapper";function g(n){var t=n.components,e=(0,i.Z)(n,o);return(0,a.kt)(m,(0,r.Z)({},c,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.dmoe.cc/random.php"},(0,a.kt)("img",{parentName:"a",src:"https://www.dmoe.cc/random.php",alt:"\u968f\u673a\u56fe\u7247"}))),(0,a.kt)("h2",{id:"\u4ec0\u4e48\u662f\u5185\u5b58\u5bf9\u9f50"},"\u4ec0\u4e48\u662f\u5185\u5b58\u5bf9\u9f50"),(0,a.kt)("p",null,"\u4e3a\u4e86\u80fd\u8ba9CPU\u53ef\u4ee5\u66f4\u5feb\u7684\u5b58\u53d6\u5230\u5404\u4e2a\u5b57\u6bb5\uff0cGo\u7f16\u8bd1\u5668\u4f1a\u5e2e\u4f60\u628a",(0,a.kt)("inlineCode",{parentName:"p"},"struct\u7ed3\u6784\u4f53"),"\u505a\u6570\u636e\u7684\u5bf9\u9f50\u3002\u6240\u8c13\u7684\u6570\u636e\u5bf9\u9f50\uff0c\u662f\u6307\u5185\u5b58\u5730\u5740\u662f\u6240\u5b58\u50a8\u6570\u636e\u7684\u5927\u5c0f\uff08\u6309\u5b57\u8282\u4e3a\u5355\u4f4d\uff09\u7684\u6574\u6570\u500d\uff0c\u4ee5\u4fbfCU\u53ef\u4ee5\u4e00\u6b21\u5c06\u8be5\u6570\u636e\u4ece\u5185\u5b58\u4e2d\u8bfb\u53d6\u51fa\u6765\u3002\u7f16\u8bd1\u5668\u901a\u8fc7\u5728\u7ed3\u6784\u4f53\u7684\u5404\u4e2a\u5b57\u6bb5\u4e4b\u95f4\u586b\u5145\u4e00\u4e9b\u7a7a\u767d\u5df2\u8fbe\u5230\u5bf9\u9f50\u7684\u76ee\u7684\u3002"),(0,a.kt)("h2",{id:"\u5bf9\u9f50\u7cfb\u6570"},"\u5bf9\u9f50\u7cfb\u6570"),(0,a.kt)("p",null,'\u4e0d\u540c\u786c\u4ef6\u5e73\u53f0\u5360\u7528\u7684\u5927\u5c0f\u548c\u5bf9\u9f50\u503c\u90fd\u53ef\u80fd\u662f\u4e0d\u4e00\u6837\u7684\uff0c\u6bcf\u4e2a\u7279\u5b9a\u5e73\u53f0\u4e0a\u7684\u7f16\u8bd1\u5668\u90fd\u6709\u81ea\u5df1\u7684\u9ed8\u8ba4"\u5bf9\u9f50\u7cfb\u6570"\uff0c32\u4f4d\u7cfb\u7edf\u5bf9\u9f50\u7cfb\u6570\u662f4\uff0c64\u4f4d\u7cfb\u7edf\u5bf9\u9f50\u7cfb\u6570\u662f8'),(0,a.kt)("p",null,"\u4e0d\u540c\u7c7b\u578b\u7684\u5bf9\u9f50\u7cfb\u6570\u4e5f\u53ef\u80fd\u4e0d\u4e00\u6837\uff0c\u4f7f\u7528Go\u8bed\u8a00\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"unsafe.Alignof"),"\u51fd\u6570\u53ef\u4ee5\u8fd4\u56de\u76f8\u5e94\u7c7b\u578b\u7684\u5bf9\u9f50\u7cfb\u6570\uff0c\u5bf9\u9f50\u7cfb\u6570\u90fd\u7b26\u54082^n\u8fd9\u4e2a\u89c4\u5f8b\uff0c\u6700\u5927\u4e5f\u4e0d\u4f1a\u8d85\u8fc78"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "unsafe"\n)\n\nfunc main() {\n    fmt.Printf("bool alignof is %d\\n", unsafe.Alignof(bool(true)))\n    fmt.Printf("string alignof is %d\\n", unsafe.Alignof(string("a")))\n    fmt.Printf("int alignof is %d\\n", unsafe.Alignof(int(0)))\n    fmt.Printf("float alignof is %d\\n", unsafe.Alignof(float64(0)))\n    fmt.Printf("int32 alignof is %d\\n", unsafe.Alignof(int32(0)))\n    fmt.Printf("float32 alignof is %d\\n", unsafe.Alignof(float32(0)))\n}\n')),(0,a.kt)("p",null,"\u53ef\u4ee5\u67e5\u770b\u5230\u5404\u79cd\u7c7b\u578b\u5728Windows 64\u4f4d\u4e0a\u7684\u5bf9\u9f50\u7cfb\u6570\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"bool alignof is 1\nstring alignof is 8 \nint alignof is 8    \nfloat alignof is 8  \nint32 alignof is 4  \nfloat32 alignof is 4\n")),(0,a.kt)("h2",{id:"\u7f3a\u70b9"},"\u7f3a\u70b9"),(0,a.kt)("p",null,"\u5b58\u5728\u5185\u5b58\u7a7a\u95f4\u7684\u6d6a\u8d39\uff0c\u5b9e\u9645\u4e0a\u662f\u7a7a\u95f4\u6362\u65f6\u95f4\u3002"),(0,a.kt)("h2",{id:"\u4f18\u70b9"},"\u4f18\u70b9"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u63d0\u9ad8\u53ef\u79fb\u690d\u6027\uff0c\u6709\u4e9bCPU\u53ef\u4ee5\u8bbf\u95ee\u4efb\u610f\u5730\u5740\u4e0a\u7684\u4efb\u610f\u6570\u636e\uff0c\u800c\u6709\u4e9bCPU\u53ea\u80fd\u5728\u7279\u5b9a\u5730\u5740\u8bbf\u95ee\u6570\u636e\uff0c\u56e0\u6b64\u4e0d\u540c\u786c\u4ef6\u5e73\u53f0\u5177\u6709\u5dee\u5f02\u6027\uff0c\u8fd9\u6837\u7684\u4ee3\u7801\u5c31\u4e0d\u5177\u6709\u79fb\u690d\u6027\uff0c\u5982\u679c\u5728\u7f16\u8bd1\u65f6\uff0c\u5c06\u5206\u914d\u7684\u5185\u5b58\u8fdb\u884c\u5bf9\u9f50\uff0c\u8fd9\u5c31\u5177\u6709\u5e73\u53f0\u53ef\u4ee5\u79fb\u690d\u6027\u4e86"),(0,a.kt)("li",{parentName:"ol"},"\u63d0\u9ad8\u5185\u5b58\u7684\u8bbf\u95ee\u6548\u7387\uff0c32\u4f4dCPU\u4e0b\u4e00\u6b21\u53ef\u4ee5\u4ece\u5185\u5b58\u4e2d\u8bfb\u53d632\u4f4d\uff084\u4e2a\u5b57\u8282\uff09\u7684\u6570\u636e\uff0c64\u4f4dCPU\u4e0b\u4e00\u6b21\u53ef\u4ee5\u4ece\u5185\u5b58\u4e2d\u8bfb\u53d664\u4f4d\uff088\u4e2a\u5b57\u8282\uff09\u7684\u6570\u636e\uff0c\u8fd9\u4e2a\u957f\u5ea6\u4e5f\u79f0\u4e3aCPU\u7684\u5b57\u957f\u3002CPU\u4e00\u6b21\u53ef\u4ee5\u8bfb\u53d61\u4e2a\u5b57\u957f\u7684\u6570\u636e\u5230\u5185\u5b58\u4e2d\uff0c\u5982\u679c\u6240\u9700\u8981\u8bfb\u53d6\u7684\u6570\u636e\u6b63\u597d\u8de8\u4e861\u4e2a\u5b57\u957f\uff0c\u90a3\u5c31\u5f97\u82b1\u4e24\u4e2aCPU\u5468\u671f\u7684\u65f6\u95f4\u53bb\u8bfb\u53d6\u4e86\u3002\u56e0\u6b64\u5728\u5185\u5b58\u4e2d\u5b58\u653e\u6570\u636e\u65f6\u8fdb\u884c\u5bf9\u9f50\uff0c\u53ef\u4ee5\u63d0\u9ad8\u5185\u5b58\u8bbf\u95ee\u6548\u7387\u3002")),(0,a.kt)("h2",{id:"\u7ed3\u6784\u4f53\u5bf9\u9f50\u539f\u5219"},"\u7ed3\u6784\u4f53\u5bf9\u9f50\u539f\u5219"),(0,a.kt)("p",null,"\u5bf9\u9f50\u539f\u5219\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7b2c\u4e00\u4e2a\u6210\u5458\u5728\u7ed3\u6784\u4f53\u53d8\u91cf\u504f\u79fb\u5904\u4e3a0\u7684\u5730\u5740\u5904"),(0,a.kt)("li",{parentName:"ol"},'\u5176\u4ed6\u6210\u5458\u8981\u5bf9\u9f50\u5230\u67d0\u4e2a\u6570\u5b57(\u5bf9\u9f50\u6570)\u7684\u6574\u6570\u500d\u7684\u5730\u5740\u5904\u3002\u5bf9\u9f50\u6570=\u7f16\u8bd1\u5668\u9ed8\u8ba4\u7684\u4e00\u4e2a\u5bf9\u9f50\u6570\u4e0e\u8be5\u6210\u5458\u5927\u5c0f\u7684\u8f83\u5c0f\u503c\u3002\u6bcf\u4e2a\u7279\u5b9a\u5e73\u53f0\u4e0a\u7684\u7f16\u8bd1\u5668\u90fd\u6709\u81ea\u5df1\u7684\u9ed8\u8ba4"\u5bf9\u9f50\u7cfb\u6570"\uff0c32\u4f4d\u7cfb\u7edf\u5bf9\u9f50\u7cfb\u6570\u662f4\uff0c64\u4f4d\u7cfb\u7edf\u5bf9\u9f50\u7cfb\u6570\u662f8\u3002'),(0,a.kt)("li",{parentName:"ol"},"\u7ed3\u6784\u4f53\u603b\u5927\u5c0f\u4e3a\u6700\u5927\u5bf9\u9f50\u6570\u7684\u6574\u6570\u500d"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u5d4c\u5957\u4e86\u7ed3\u6784\u4f53\u7684\u60c5\u51b5\uff0c\u5d4c\u5957\u7684\u7ed3\u6784\u4f53\u5bf9\u9f50\u5230\u81ea\u5df1\u7684\u6700\u5927\u5bf9\u9f50\u6570\u7684\u6574\u6570\u500d\u5904\uff0c\u7ed3\u6784\u4f53\u6574\u4f53\u5c31\u662f\u6240\u6709\u6700\u5927\u5bf9\u9f50\u6570\u7684\u6574\u6570\u500d\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type T1 struct {\n    i16  int16 // 2 byte\n    bool bool  // 1 byte\n}\n\ntype T2 struct {\n    i8  int8  // 1 byte\n    i64 int64 // 8 byte\n    i32 int32 // 4 byte\n}\n\ntype T3 struct {\n    i8  int8  // 1 byte\n    i32 int32 // 4 byte\n    i64 int64 // 8 byte\n}\n\nfunc main() {\n    fmt.Println(runtime.GOARCH) // amd64\n\n    t1 := T1{}\n    fmt.Println(unsafe.Sizeof(t1)) // 4 bytes\n\n    t2 := T2{}\n    fmt.Println(unsafe.Sizeof(t2)) // 24 bytes\n\n    t3 := T3{}\n    fmt.Println(unsafe.Sizeof(t3)) // 16 bytes\n}\n")),(0,a.kt)("p",null,"\u4ee5T1 \u7ed3\u6784\ni16\u5e76\u6ca1\u6709\u76f4\u63a5\u653e\u5728bool\u7684\u540e\u9762\uff0c\u800c\u662f\u5728bool\u4e2d\u586b\u5145\u4e86\u4e00\u4e2a\u7a7a\u767d\u540e\uff0c\u653e\u5230\u4e86\u504f\u79fb\u91cf\u4e3a2\u7684\u4f4d\u7f6e\u4e0a\u3002\u5982\u679ci16\u4ece\u504f\u79fb\u91cf\u4e3a1\u7684\u4f4d\u7f6e\u5f00\u59cb\u5360\u75282\u4e2a\u5b57\u8282\uff0c\u6839\u636e\u5bf9\u9f50\u539f\u52192\uff1a\u6784\u4f53\u53d8\u91cf\u4e2d\u6210\u5458\u7684\u504f\u79fb\u91cf\u5fc5\u987b\u662f\u6210\u5458\u5927\u5c0f\u7684\u6574\u6570\u500d\uff0c\u5957\u7528\u516c\u5f0f 1 % 2 = 1\uff0c\u5c31\u4e0d\u6ee1\u8db3\u5bf9\u9f50\u7684\u8981\u6c42\uff0c\u6240\u4ee5i16\u4ece\u504f\u79fb\u91cf\u4e3a2\u7684\u4f4d\u7f6e\u5f00\u59cb"))}g.isMDXComponent=!0}}]);