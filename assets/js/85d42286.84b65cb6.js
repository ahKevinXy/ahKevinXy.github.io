"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[8290],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},f="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=l(t),d=a,m=f["".concat(c,".").concat(d)]||f[d]||s[d]||i;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[f]="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},14087:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return f}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],p={},c="iface \u548c eface \u533a\u522b",l={unversionedId:"backend/go/base/iface",id:"backend/go/base/iface",title:"iface \u548c eface \u533a\u522b",description:"iface \u548ceface\u90fd\u662fgo\u4e2d\u63cf\u8ff0\u63a5\u53e3\u7684\u5e95\u5c42\u7ed3\u6784\u4f53",source:"@site/docs/backend/go/base/iface.md",sourceDirName:"backend/go/base",slug:"/backend/go/base/iface",permalink:"/docs/backend/go/base/iface",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"gRPC \u5165\u95e8",permalink:"/docs/backend/go/base/grpc"},next:{title:"Init \u51fd\u6570",permalink:"/docs/backend/go/base/init"}},u={},f=[],s={toc:f},d="wrapper";function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)(d,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"iface-\u548c-eface-\u533a\u522b"},"iface \u548c eface \u533a\u522b"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"iface")," \u548c",(0,i.kt)("inlineCode",{parentName:"p"},"eface"),"\u90fd\u662fgo\u4e2d\u63cf\u8ff0\u63a5\u53e3\u7684\u5e95\u5c42\u7ed3\u6784\u4f53"),(0,i.kt)("p",null,"\u533a\u522b\u5728\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"iface"),"\u63cf\u8ff0\u7684\u63a5\u53e3\u5305\u542b\u65b9\u6cd5\uff0c\u800c",(0,i.kt)("inlineCode",{parentName:"p"},"eface"),"\u5219\u4e0d\u5305\u542b\u4efb\u4f55\u65b9\u6cd5\u7684\u7a7a\u63a5\u53e3: interface{}"),(0,i.kt)("p",null,"\u5e95\u5c42\u6e90\u7801:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"}," type iface struct {\n    tab *iteb\n    data unsafe.Pointer\n}\n\ntype itab struct {\n    inter *interfacetype\n    _type *_type\n    link *itab\n    hash uint32\n    bad bool\n    inhash bool\n    unused [2]byte\n    fun [1]uintptr\n\n}\n\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"iface")," \u5185\u90e8\u7ef4\u62a4\u4e86\u4e24\u4e2a\u6307\u9488\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"tab")," \u6307\u5411\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"itab")," \u5b9e\u4f53,\u5b83\u8868\u793a\u63a5\u53e3\u7684\u7c7b\u578b\u4ee5\u53ca\u8d4b\u7ed9\u8fd9\u4e2a\u63a5\u53e3\u7684\u5b9e\u4f53\u7c7b\u578b\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"data")," \u5219\u6307\u5411\u63a5\u53e3\u7684\u5177\u4f53\u503c\uff0c\u4e00\u822c\u800c\u8a00\u4e0a\u4e00\u4e2a\u6307\u5411\u5806\u5185\u5b58\u7684\u6307\u9488"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"itab")," \u7ed3\u6784\u4f53: ",(0,i.kt)("inlineCode",{parentName:"p"},"_type")," \u5b57\u6bb5\u63cf\u8ff0\u4e86\u5b9e\u4f53\u7684\u7c7b\u578b\uff0c\u5305\u62ec\u5185\u5b58\u5bf9\u9f50\u7684\u65b9\u5f0f\uff0c\u5927\u5c0f\u7b49;",(0,i.kt)("inlineCode",{parentName:"p"},"inter")," \u5b57\u6bb5\u5219\u63cf\u8ff0\u4e86\u63a5\u53e3\u7684\u7c7b\u578b\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"fun")," \u5b57\u6bb5\u653e\u7f6e\u548c\u63a5\u53e3\u65b9\u6cd5\u5bf9\u5e94\u65b9\u6cd5\u5bf9\u5e94\u7684\u5177\u4f53\u6570\u636e\u7c7b\u578b\u7684\u65b9\u6cd5\u5730\u5740\uff0c\u5b9e\u73b0\u63a5\u53e3\u8c03\u7528\u65b9\u6cd5\u7684\u52a8\u6001\u5206\u6d3e\uff0c\u4e00\u822c\u5728\u6bcf\u6b21\u7ed9\u63a5\u53e3\u8d4b\u503c\u53d1\u751f\u8f6c\u6362\u65f6\u4f1a\u66f4\u65b0\u6b64\u8868\uff0c\u6216\u8005\u76f4\u63a5\u62ff\u7f13\u5b58\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"itab")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"interfacetype")," \u7c7b\u578b\uff0c\u5b83\u63cf\u8ff0\u7684\u662f\u63a5\u53e3\u7c7b\u578b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type interfacetype struct {\n\n    type _type // go\u8bed\u8a00\u5404\u79cd\u6570\u636e\u7c7b\u578b\u7684\u7ed3\u6784\u4f53\n    pkgath name // \u8bb0\u5f55\u4e86\u63a5\u53e3\u7684\u5305\u540d\n    mhdr []imethod //\u63a5\u53e3\u6240\u5b9a\u4e49\u7684\u51fd\u6570\u5217\u8868\n}\n\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"eface")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"}," type eface struct {\n\n    _type *_type //\u7a7a\u63a5\u53e3\u6240\u627f\u8f7d\u7684\u5177\u4f53\u7684\u5b9e\u4f53\u7c7b\u578b\n    data unsafe.Pointer // \u63cf\u8ff0\u4e86\u5177\u4f53\u7684\u503c\n}\n")),(0,i.kt)("p",null,"\u4f8b\u5b50:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\nfunc main(){\n    x:=200\n    var any interfacer{}=x\n    fmt.Println(any)\n    \n    g:=Gopher("go")\n\n    var c coder =g \n    \n    fmt.Println(g)\n\n\n}\n\ntype coder interface {\n    code()\n    debug()\n\n}\n\ntype Gopher struct {\n    language string\n}\n\nfunc (p Gopher) code() {\n\n fmt.Println("\u5199\u4ee3\u7801")\n}\n\nfunc (p Gopher) debug(){\n    fmt.Println("\u8c03\u8bd5")\n}\n\n')),(0,i.kt)("p",null,"\u6267\u884c\u547d\u4ee4"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," go tool compile -S main.go\n\n")),(0,i.kt)("p",null,"\u8865\u5145\u8bf4\u660e ",(0,i.kt)("inlineCode",{parentName:"p"},"_type")," \u7ed3\u6784\u4f53\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"\n type _type struct {\n    // \u7c7b\u578b\u5927\u5c0f\n    size uintptr\n    prtdata uintptr\n    \n    //hash\u503c\n    hash uint32\n\n    // \u7c7b\u578b\u7684flag \u548c\u53cd\u5c04\u76f8\u5173\n    tflag tflag\n    //\u5185\u5b58\u5bf9\u9f50\u76f8\u5173\n    align uint8\n    fieldalign uint8\n    // \u7c7b\u578b\u7684\u7f16\u53f7,\u6709 bool,slice,struct \u7b49\u7b49 \n    kind uint8\n    alg *typeAlg\n\n    //gc\u76f8\u5173\n    gcdata *byte\n    str nameOff\n    ptrToThis typeOff\n\n}\n\n")))}m.isMDXComponent=!0}}]);