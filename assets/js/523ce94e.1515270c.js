"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[6570],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return f}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=t.createContext({}),c=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),g=c(r),m=o,f=g["".concat(i,".").concat(m)]||g[m]||s[m]||l;return r?t.createElement(f,p(p({ref:n},u),{},{components:r})):t.createElement(f,p({ref:n},u))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=r.length,p=new Array(l);p[0]=m;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a[g]="string"==typeof e?e:o,p[1]=a;for(var c=2;c<l;c++)p[c]=r[c];return t.createElement.apply(null,p)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},37119:function(e,n,r){r.r(n),r.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return g}});var t=r(87462),o=r(63366),l=(r(67294),r(3905)),p=["components"],a={},i="Protobuf",c={unversionedId:"backend/go/base/pb",id:"backend/go/base/pb",title:"Protobuf",description:"Protobuf \u662f Protocol Buffers \u7684\u7b80\u79f0\uff0c\u5b83\u662f Google \u516c\u53f8\u5f00\u53d1\u7684\u4e00\u79cd\u6570\u636e\u63cf\u8ff0\u8bed\u8a00\uff0c\u5e76\u4e8e 2008 \u5e74\u5bf9\u5916\u5f00\u6e90\u3002Protobuf \u521a\u5f00\u6e90\u65f6\u7684\u5b9a\u4f4d\u7c7b\u4f3c\u4e8e XML\u3001JSON \u7b49\u6570\u636e\u63cf\u8ff0\u8bed\u8a00\uff0c\u901a\u8fc7\u9644\u5e26\u5de5\u5177\u751f\u6210\u4ee3\u7801\u5e76\u5b9e\u73b0\u5c06\u7ed3\u6784\u5316\u6570\u636e\u5e8f\u5217\u5316\u7684\u529f\u80fd\u3002\u4f46\u662f\u6211\u4eec\u66f4\u5173\u6ce8\u7684\u662f Protobuf \u4f5c\u4e3a\u63a5\u53e3\u89c4\u8303\u7684\u63cf\u8ff0\u8bed\u8a00\uff0c\u53ef\u4ee5\u4f5c\u4e3a\u8bbe\u8ba1\u5b89\u5168\u7684\u8de8\u8bed\u8a00 PRC \u63a5\u53e3\u7684\u57fa\u7840\u5de5\u5177\u3002",source:"@site/docs/backend/go/base/pb.md",sourceDirName:"backend/go/base",slug:"/backend/go/base/pb",permalink:"/docs/backend/go/base/pb",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u73a9\u8f6c RPC",permalink:"/docs/backend/go/base/net_rpc"},next:{title:"RPC \u5165\u95e8",permalink:"/docs/backend/go/base/rpc"}},u={},g=[{value:"Protobuf \u5165\u95e8",id:"protobuf-\u5165\u95e8",level:2},{value:"\u5b9a\u5236\u4ee3\u7801\u751f\u6210\u63d2\u4ef6",id:"\u5b9a\u5236\u4ee3\u7801\u751f\u6210\u63d2\u4ef6",level:2},{value:"\u81ea\u52a8\u751f\u6210\u5b8c\u6574\u7684 RPC \u4ee3\u7801",id:"\u81ea\u52a8\u751f\u6210\u5b8c\u6574\u7684-rpc-\u4ee3\u7801",level:2}],s={toc:g},m="wrapper";function f(e){var n=e.components,r=(0,o.Z)(e,p);return(0,l.kt)(m,(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"protobuf"},"Protobuf"),(0,l.kt)("p",null,"Protobuf \u662f Protocol Buffers \u7684\u7b80\u79f0\uff0c\u5b83\u662f Google \u516c\u53f8\u5f00\u53d1\u7684\u4e00\u79cd\u6570\u636e\u63cf\u8ff0\u8bed\u8a00\uff0c\u5e76\u4e8e 2008 \u5e74\u5bf9\u5916\u5f00\u6e90\u3002Protobuf \u521a\u5f00\u6e90\u65f6\u7684\u5b9a\u4f4d\u7c7b\u4f3c\u4e8e XML\u3001JSON \u7b49\u6570\u636e\u63cf\u8ff0\u8bed\u8a00\uff0c\u901a\u8fc7\u9644\u5e26\u5de5\u5177\u751f\u6210\u4ee3\u7801\u5e76\u5b9e\u73b0\u5c06\u7ed3\u6784\u5316\u6570\u636e\u5e8f\u5217\u5316\u7684\u529f\u80fd\u3002\u4f46\u662f\u6211\u4eec\u66f4\u5173\u6ce8\u7684\u662f Protobuf \u4f5c\u4e3a\u63a5\u53e3\u89c4\u8303\u7684\u63cf\u8ff0\u8bed\u8a00\uff0c\u53ef\u4ee5\u4f5c\u4e3a\u8bbe\u8ba1\u5b89\u5168\u7684\u8de8\u8bed\u8a00 PRC \u63a5\u53e3\u7684\u57fa\u7840\u5de5\u5177\u3002"),(0,l.kt)("h2",{id:"protobuf-\u5165\u95e8"},"Protobuf \u5165\u95e8"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u6ca1\u6709\u7528\u8fc7 Protobuf \u7684\u8bfb\u8005\uff0c\u5efa\u8bae\u5148\u4ece\u5b98\u7f51\u4e86\u89e3\u4e0b\u57fa\u672c\u7528\u6cd5\u3002\u8fd9\u91cc\u6211\u4eec\u5c1d\u8bd5\u5c06 Protobuf \u548c RPC \u7ed3\u5408\u5728\u4e00\u8d77\u4f7f\u7528\uff0c\u901a\u8fc7 Protobuf \u6765\u6700\u7ec8\u4fdd\u8bc1 RPC \u7684\u63a5\u53e3\u89c4\u8303\u548c\u5b89\u5168\u3002Protobuf \u4e2d\u6700\u57fa\u672c\u7684\u6570\u636e\u5355\u5143\u662f message\uff0c\u662f\u7c7b\u4f3c Go \u8bed\u8a00\u4e2d\u7ed3\u6784\u4f53\u7684\u5b58\u5728\u3002\u5728 message \u4e2d\u53ef\u4ee5\u5d4c\u5957 message \u6216\u5176\u5b83\u7684\u57fa\u7840\u6570\u636e\u7c7b\u578b\u7684\u6210\u5458\u3002"),(0,l.kt)("p",null,"\u9996\u5148\u521b\u5efa hello.proto \u6587\u4ef6\uff0c\u5176\u4e2d\u5305\u88c5 HelloService \u670d\u52a1\u4e2d\u7528\u5230\u7684\u5b57\u7b26\u4e32\u7c7b\u578b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\npackage main;\n\nmessage String {\n string value = 1;\n}\n')),(0,l.kt)("p",null,"\u5f00\u5934\u7684 syntax \u8bed\u53e5\u8868\u793a\u91c7\u7528 proto3 \u7684\u8bed\u6cd5\u3002\u7b2c\u4e09\u7248\u7684 Protobuf \u5bf9\u8bed\u8a00\u8fdb\u884c\u4e86\u63d0\u70bc\u7b80\u5316\uff0c\u6240\u6709\u6210\u5458\u5747\u91c7\u7528\u7c7b\u4f3c Go \u8bed\u8a00\u4e2d\u7684\u96f6\u503c\u521d\u59cb\u5316\uff08\u4e0d\u518d\u652f\u6301\u81ea\u5b9a\u4e49\u9ed8\u8ba4\u503c\uff09\uff0c\u56e0\u6b64\u6d88\u606f\u6210\u5458\u4e5f\u4e0d\u518d\u9700\u8981\u652f\u6301 required \u7279\u6027\u3002\u7136\u540e package \u6307\u4ee4\u6307\u660e\u5f53\u524d\u662f main \u5305\uff08\u8fd9\u6837\u53ef\u4ee5\u548c Go \u7684\u5305\u540d\u4fdd\u6301\u4e00\u81f4\uff0c\u7b80\u5316\u4f8b\u5b50\u4ee3\u7801\uff09\uff0c\u5f53\u7136\u7528\u6237\u4e5f\u53ef\u4ee5\u9488\u5bf9\u4e0d\u540c\u7684\u8bed\u8a00\u5b9a\u5236\u5bf9\u5e94\u7684\u5305\u8def\u5f84\u548c\u540d\u79f0\u3002\u6700\u540e message \u5173\u952e\u5b57\u5b9a\u4e49\u4e00\u4e2a\u65b0\u7684 String \u7c7b\u578b\uff0c\u5728\u6700\u7ec8\u751f\u6210\u7684 Go \u8bed\u8a00\u4ee3\u7801\u4e2d\u5bf9\u5e94\u4e00\u4e2a String \u7ed3\u6784\u4f53\u3002String \u7c7b\u578b\u4e2d\u53ea\u6709\u4e00\u4e2a\u5b57\u7b26\u4e32\u7c7b\u578b\u7684 value \u6210\u5458\uff0c\u8be5\u6210\u5458\u7f16\u7801\u65f6\u7528 1 \u7f16\u53f7\u4ee3\u66ff\u540d\u5b57\u3002"),(0,l.kt)("p",null,"\u5728 XML \u6216 JSON \u7b49\u6570\u636e\u63cf\u8ff0\u8bed\u8a00\u4e2d\uff0c\u4e00\u822c\u901a\u8fc7\u6210\u5458\u7684\u540d\u5b57\u6765\u7ed1\u5b9a\u5bf9\u5e94\u7684\u6570\u636e\u3002\u4f46\u662f Protobuf \u7f16\u7801\u5374\u662f\u901a\u8fc7\u6210\u5458\u7684\u552f\u4e00\u7f16\u53f7\u6765\u7ed1\u5b9a\u5bf9\u5e94\u7684\u6570\u636e\uff0c\u56e0\u6b64 Protobuf \u7f16\u7801\u540e\u6570\u636e\u7684\u4f53\u79ef\u4f1a\u6bd4\u8f83\u5c0f\uff0c\u4f46\u662f\u4e5f\u975e\u5e38\u4e0d\u4fbf\u4e8e\u4eba\u7c7b\u67e5\u9605\u3002\u6211\u4eec\u76ee\u524d\u5e76\u4e0d\u5173\u6ce8 Protobuf \u7684\u7f16\u7801\u6280\u672f\uff0c\u6700\u7ec8\u751f\u6210\u7684 Go \u7ed3\u6784\u4f53\u53ef\u4ee5\u81ea\u7531\u91c7\u7528 JSON \u6216 gob \u7b49\u7f16\u7801\u683c\u5f0f\uff0c\u56e0\u6b64\u5927\u5bb6\u53ef\u4ee5\u6682\u65f6\u5ffd\u7565 Protobuf \u7684\u6210\u5458\u7f16\u7801\u90e8\u5206\u3002"),(0,l.kt)("p",null,"Protobuf \u6838\u5fc3\u7684\u5de5\u5177\u96c6\u662f C++ \u8bed\u8a00\u5f00\u53d1\u7684\uff0c\u5728\u5b98\u65b9\u7684 protoc \u7f16\u8bd1\u5668\u4e2d\u5e76\u4e0d\u652f\u6301 Go \u8bed\u8a00\u3002\u8981\u60f3\u57fa\u4e8e\u4e0a\u9762\u7684 hello.proto \u6587\u4ef6\u751f\u6210\u76f8\u5e94\u7684 Go \u4ee3\u7801\uff0c\u9700\u8981\u5b89\u88c5\u76f8\u5e94\u7684\u63d2\u4ef6\u3002\u9996\u5148\u662f\u5b89\u88c5\u5b98\u65b9\u7684 protoc \u5de5\u5177\uff0c\u53ef\u4ee5\u4ece ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/google/protobuf/releases"},"https://github.com/google/protobuf/releases")," \u4e0b\u8f7d\u3002\u7136\u540e\u662f\u5b89\u88c5\u9488\u5bf9 Go \u8bed\u8a00\u7684\u4ee3\u7801\u751f\u6210\u63d2\u4ef6\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"go get github.com/golang/protobuf/protoc-gen-go")," \u547d\u4ee4\u5b89\u88c5\u3002"),(0,l.kt)("p",null,"\u7136\u540e\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u751f\u6210\u76f8\u5e94\u7684 Go \u4ee3\u7801\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"protoc --go_out=. hello.proto\n")),(0,l.kt)("p",null,"\u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"go_out")," \u53c2\u6570\u544a\u77e5 protoc \u7f16\u8bd1\u5668\u53bb\u52a0\u8f7d\u5bf9\u5e94\u7684 protoc-gen-go \u5de5\u5177\uff0c\u7136\u540e\u901a\u8fc7\u8be5\u5de5\u5177\u751f\u6210\u4ee3\u7801\uff0c\u751f\u6210\u4ee3\u7801\u653e\u5230\u5f53\u524d\u76ee\u5f55\u3002\u6700\u540e\u662f\u4e00\u7cfb\u5217\u8981\u5904\u7406\u7684 protobuf \u6587\u4ef6\u7684\u5217\u8868\u3002"),(0,l.kt)("p",null,"\u8fd9\u91cc\u53ea\u751f\u6210\u4e86\u4e00\u4e2a hello.pb.go \u6587\u4ef6\uff0c\u5176\u4e2d String \u7ed3\u6784\u4f53\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'type String struct {\n Value string `protobuf:"bytes,1,opt,name=value" json:"value,omitempty"`\n}\n\nfunc (m *String) Reset()         { *m = String{} }\nfunc (m *String) String() string { return proto.CompactTextString(m) }\nfunc (*String) ProtoMessage()    {}\nfunc (*String) Descriptor() ([]byte, []int) {\n return fileDescriptor_hello_069698f99dd8f029, []int{0}\n}\n\nfunc (m *String) GetValue() string {\n if m != nil {\n  return m.Value\n }\n return ""\n}\n')),(0,l.kt)("p",null,"\u751f\u6210\u7684\u7ed3\u6784\u4f53\u4e2d\u8fd8\u4f1a\u5305\u542b\u4e00\u4e9b\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"XXX_")," \u4e3a\u540d\u5b57\u524d\u7f00\u7684\u6210\u5458\uff0c\u6211\u4eec\u5df2\u7ecf\u9690\u85cf\u4e86\u8fd9\u4e9b\u6210\u5458\u3002\u540c\u65f6 String \u7c7b\u578b\u8fd8\u81ea\u52a8\u751f\u6210\u4e86\u4e00\u7ec4\u65b9\u6cd5\uff0c\u5176\u4e2d ProtoMessage \u65b9\u6cd5\u8868\u793a\u8fd9\u662f\u4e00\u4e2a\u5b9e\u73b0\u4e86 proto.Message \u63a5\u53e3\u7684\u65b9\u6cd5\u3002\u6b64\u5916 Protobuf \u8fd8\u4e3a\u6bcf\u4e2a\u6210\u5458\u751f\u6210\u4e86\u4e00\u4e2a Get \u65b9\u6cd5\uff0cGet \u65b9\u6cd5\u4e0d\u4ec5\u53ef\u4ee5\u5904\u7406\u7a7a\u6307\u9488\u7c7b\u578b\uff0c\u800c\u4e14\u53ef\u4ee5\u548c Protobuf \u7b2c\u4e8c\u7248\u7684\u65b9\u6cd5\u4fdd\u6301\u4e00\u81f4\uff08\u7b2c\u4e8c\u7248\u7684\u81ea\u5b9a\u4e49\u9ed8\u8ba4\u503c\u7279\u6027\u4f9d\u8d56\u8fd9\u7c7b\u65b9\u6cd5\uff09\u3002"),(0,l.kt)("p",null,"\u57fa\u4e8e\u65b0\u7684 String \u7c7b\u578b\uff0c\u6211\u4eec\u53ef\u4ee5\u91cd\u65b0\u5b9e\u73b0 HelloService \u670d\u52a1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'type HelloService struct{}\n\nfunc (p *HelloService) Hello(request *String, reply *String) error {\n reply.Value = "hello:" + request.GetValue()\n return nil\n}\n')),(0,l.kt)("p",null,"\u5176\u4e2d Hello \u65b9\u6cd5\u7684\u8f93\u5165\u53c2\u6570\u548c\u8f93\u51fa\u7684\u53c2\u6570\u5747\u6539\u7528 Protobuf \u5b9a\u4e49\u7684 String \u7c7b\u578b\u8868\u793a\u3002\u56e0\u4e3a\u65b0\u7684\u8f93\u5165\u53c2\u6570\u4e3a\u7ed3\u6784\u4f53\u7c7b\u578b\uff0c\u56e0\u6b64\u6539\u7528\u6307\u9488\u7c7b\u578b\u4f5c\u4e3a\u8f93\u5165\u53c2\u6570\uff0c\u51fd\u6570\u7684\u5185\u90e8\u4ee3\u7801\u540c\u65f6\u4e5f\u505a\u4e86\u76f8\u5e94\u7684\u8c03\u6574\u3002"),(0,l.kt)("p",null,"\u81f3\u6b64\uff0c\u6211\u4eec\u521d\u6b65\u5b9e\u73b0\u4e86 Protobuf \u548c RPC \u7ec4\u5408\u5de5\u4f5c\u3002\u5728\u542f\u52a8 RPC \u670d\u52a1\u65f6\uff0c\u6211\u4eec\u4f9d\u7136\u53ef\u4ee5\u9009\u62e9\u9ed8\u8ba4\u7684 gob \u6216\u624b\u5de5\u6307\u5b9a json \u7f16\u7801\uff0c\u751a\u81f3\u53ef\u4ee5\u91cd\u65b0\u57fa\u4e8e protobuf \u7f16\u7801\u5b9e\u73b0\u4e00\u4e2a\u63d2\u4ef6\u3002\u867d\u7136\u505a\u4e86\u8fd9\u4e48\u591a\u5de5\u4f5c\uff0c\u4f46\u662f\u4f3c\u4e4e\u5e76\u6ca1\u6709\u770b\u5230\u4ec0\u4e48\u6536\u76ca\uff01"),(0,l.kt)("p",null,"\u56de\u987e\u7b2c\u4e00\u7ae0\u4e2d\u66f4\u5b89\u5168\u7684 RPC \u63a5\u53e3\u90e8\u5206\u7684\u5185\u5bb9\uff0c\u5f53\u65f6\u6211\u4eec\u82b1\u8d39\u4e86\u6781\u5927\u7684\u529b\u6c14\u53bb\u7ed9 RPC \u670d\u52a1\u589e\u52a0\u5b89\u5168\u7684\u4fdd\u969c\u3002\u6700\u7ec8\u5f97\u5230\u7684\u66f4\u5b89\u5168\u7684 RPC \u63a5\u53e3\u7684\u4ee3\u7801\u672c\u8eab\u5c31\u975e\u5e38\u7e41\u7410\u7684\u4f7f\u7528\u624b\u5de5\u7ef4\u62a4\uff0c\u540c\u65f6\u5168\u90e8\u5b89\u5168\u76f8\u5173\u7684\u4ee3\u7801\u53ea\u9002\u7528\u4e8e Go \u8bed\u8a00\u73af\u5883\uff01\u65e2\u7136\u4f7f\u7528\u4e86 Protobuf \u5b9a\u4e49\u7684\u8f93\u5165\u548c\u8f93\u51fa\u53c2\u6570\uff0c\u90a3\u4e48 RPC \u670d\u52a1\u63a5\u53e3\u662f\u5426\u4e5f\u53ef\u4ee5\u901a\u8fc7 Protobuf \u5b9a\u4e49\u5462\uff1f\u5176\u5b9e\u7528 Protobuf \u5b9a\u4e49\u8bed\u8a00\u65e0\u5173\u7684 RPC \u670d\u52a1\u63a5\u53e3\u624d\u662f\u5b83\u771f\u6b63\u7684\u4ef7\u503c\u6240\u5728\uff01"),(0,l.kt)("p",null,"\u4e0b\u9762\u66f4\u65b0 hello.proto \u6587\u4ef6\uff0c\u901a\u8fc7 Protobuf \u6765\u5b9a\u4e49 HelloService \u670d\u52a1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-protobuf"},"service HelloService {\n rpc Hello (String) returns (String);\n}\n")),(0,l.kt)("p",null,"\u4f46\u662f\u91cd\u65b0\u751f\u6210\u7684 Go \u4ee3\u7801\u5e76\u6ca1\u6709\u53d1\u751f\u53d8\u5316\u3002\u8fd9\u662f\u56e0\u4e3a\u4e16\u754c\u4e0a\u7684 RPC \u5b9e\u73b0\u6709\u5343\u4e07\u79cd\uff0cprotoc \u7f16\u8bd1\u5668\u5e76\u4e0d\u77e5\u9053\u8be5\u5982\u4f55\u4e3a HelloService \u670d\u52a1\u751f\u6210\u4ee3\u7801\u3002"),(0,l.kt)("p",null,"\u4e0d\u8fc7\u5728 protoc-gen-go \u5185\u90e8\u5df2\u7ecf\u96c6\u6210\u4e86\u4e00\u4e2a\u540d\u5b57\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"grpc")," \u7684\u63d2\u4ef6\uff0c\u53ef\u4ee5\u9488\u5bf9 gRPC \u751f\u6210\u4ee3\u7801\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"protoc --go_out=plugins=grpc:. hello.proto\n")),(0,l.kt)("p",null,"\u5728\u751f\u6210\u7684\u4ee3\u7801\u4e2d\u591a\u4e86\u4e00\u4e9b\u7c7b\u4f3c HelloServiceServer\u3001HelloServiceClient \u7684\u65b0\u7c7b\u578b\u3002\u8fd9\u4e9b\u7c7b\u578b\u662f\u4e3a gRPC \u670d\u52a1\u7684\uff0c\u5e76\u4e0d\u7b26\u5408\u6211\u4eec\u7684 RPC \u8981\u6c42\u3002"),(0,l.kt)("p",null,"\u4e0d\u8fc7 gRPC \u63d2\u4ef6\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u6539\u8fdb\u7684\u601d\u8def\uff0c\u4e0b\u9762\u6211\u4eec\u5c06\u63a2\u7d22\u5982\u4f55\u4e3a\u6211\u4eec\u7684 RPC \u751f\u6210\u5b89\u5168\u7684\u4ee3\u7801\u3002"),(0,l.kt)("h2",{id:"\u5b9a\u5236\u4ee3\u7801\u751f\u6210\u63d2\u4ef6"},"\u5b9a\u5236\u4ee3\u7801\u751f\u6210\u63d2\u4ef6"),(0,l.kt)("p",null,"Protobuf \u7684 protoc \u7f16\u8bd1\u5668\u662f\u901a\u8fc7\u63d2\u4ef6\u673a\u5236\u5b9e\u73b0\u5bf9\u4e0d\u540c\u8bed\u8a00\u7684\u652f\u6301\u3002\u6bd4\u5982 protoc \u547d\u4ee4\u51fa\u73b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"--xxx_out")," \u683c\u5f0f\u7684\u53c2\u6570\uff0c\u90a3\u4e48 protoc \u5c06\u9996\u5148\u67e5\u8be2\u662f\u5426\u6709\u5185\u7f6e\u7684 xxx \u63d2\u4ef6\uff0c\u5982\u679c\u6ca1\u6709\u5185\u7f6e\u7684 xxx \u63d2\u4ef6\u90a3\u4e48\u5c06\u7ee7\u7eed\u67e5\u8be2\u5f53\u524d\u7cfb\u7edf\u4e2d\u662f\u5426\u5b58\u5728 protoc-gen-xxx \u547d\u540d\u7684\u53ef\u6267\u884c\u7a0b\u5e8f\uff0c\u6700\u7ec8\u901a\u8fc7\u67e5\u8be2\u5230\u7684\u63d2\u4ef6\u751f\u6210\u4ee3\u7801\u3002\u5bf9\u4e8e Go \u8bed\u8a00\u7684 protoc-gen-go \u63d2\u4ef6\u6765\u8bf4\uff0c\u91cc\u9762\u53c8\u5b9e\u73b0\u4e86\u4e00\u5c42\u9759\u6001\u63d2\u4ef6\u7cfb\u7edf\u3002\u6bd4\u5982 protoc-gen-go \u5185\u7f6e\u4e86\u4e00\u4e2a gRPC \u63d2\u4ef6\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"--go_out=plugins=grpc")," \u53c2\u6570\u6765\u751f\u6210 gRPC \u76f8\u5173\u4ee3\u7801\uff0c\u5426\u5219\u53ea\u4f1a\u9488\u5bf9 message \u751f\u6210\u76f8\u5173\u4ee3\u7801\u3002"),(0,l.kt)("p",null,"\u53c2\u8003 gRPC \u63d2\u4ef6\u7684\u4ee3\u7801\uff0c\u53ef\u4ee5\u53d1\u73b0 generator.RegisterPlugin \u51fd\u6570\u53ef\u4ee5\u7528\u6765\u6ce8\u518c\u63d2\u4ef6\u3002\u63d2\u4ef6\u662f\u4e00\u4e2a generator.Plugin \u63a5\u53e3\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"// A Plugin provides functionality to add to the output during\n// Go code generation, such as to produce RPC stubs.\ntype Plugin interface {\n // Name identifies the plugin.\n Name() string\n // Init is called once after data structures are built but before\n // code generation begins.\n Init(g *Generator)\n // Generate produces the code generated by the plugin for this file,\n // except for the imports, by calling the generator's methods P, In,\n // and Out.\n Generate(file *FileDescriptor)\n // GenerateImports produces the import declarations for this file.\n // It is called after Generate.\n GenerateImports(file *FileDescriptor)\n}\n")),(0,l.kt)("p",null,"\u5176\u4e2d Name \u65b9\u6cd5\u8fd4\u56de\u63d2\u4ef6\u7684\u540d\u5b57\uff0c\u8fd9\u662f Go \u8bed\u8a00\u7684 Protobuf \u5b9e\u73b0\u7684\u63d2\u4ef6\u4f53\u7cfb\uff0c\u548c protoc \u63d2\u4ef6\u7684\u540d\u5b57\u5e76\u65e0\u5173\u7cfb\u3002\u7136\u540e Init \u51fd\u6570\u662f\u901a\u8fc7 g \u53c2\u6570\u5bf9\u63d2\u4ef6\u8fdb\u884c\u521d\u59cb\u5316\uff0cg \u53c2\u6570\u4e2d\u5305\u542b Proto \u6587\u4ef6\u7684\u6240\u6709\u4fe1\u606f\u3002\u6700\u540e\u7684 Generate \u548c GenerateImports \u65b9\u6cd5\u7528\u4e8e\u751f\u6210\u4e3b\u4f53\u4ee3\u7801\u548c\u5bf9\u5e94\u7684\u5bfc\u5165\u5305\u4ee3\u7801\u3002"),(0,l.kt)("p",null,"\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u8bbe\u8ba1\u4e00\u4e2a netrpcPlugin \u63d2\u4ef6\uff0c\u7528\u4e8e\u4e3a\u6807\u51c6\u5e93\u7684 RPC \u6846\u67b6\u751f\u6210\u4ee3\u7801\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'import (\n "github.com/golang/protobuf/protoc-gen-go/generator"\n)\n\ntype netrpcPlugin struct{*generator.Generator}\n\nfunc (p *netrpcPlugin) Name() string                { return "netrpc" }\nfunc (p *netrpcPlugin) Init(g *generator.Generator) { p.Generator = g }\n\nfunc (p *netrpcPlugin) GenerateImports(file *generator.FileDescriptor) {\n if len(file.Service) > 0 {\n  p.genImportCode(file)\n }\n}\n\nfunc (p *netrpcPlugin) Generate(file *generator.FileDescriptor) {\n for _, svc := range file.Service {\n  p.genServiceCode(svc)\n }\n}\n')),(0,l.kt)("p",null,"\u9996\u5148 Name \u65b9\u6cd5\u8fd4\u56de\u63d2\u4ef6\u7684\u540d\u5b57\u3002netrpcPlugin \u63d2\u4ef6\u5185\u7f6e\u4e86\u4e00\u4e2a\u533f\u540d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"*generator.Generator")," \u6210\u5458\uff0c\u7136\u540e\u5728 Init \u521d\u59cb\u5316\u7684\u65f6\u5019\u7528\u53c2\u6570 g \u8fdb\u884c\u521d\u59cb\u5316\uff0c\u56e0\u6b64\u63d2\u4ef6\u662f\u4ece g \u53c2\u6570\u5bf9\u8c61\u7ee7\u627f\u4e86\u5168\u90e8\u7684\u516c\u6709\u65b9\u6cd5\u3002\u5176\u4e2d GenerateImports \u65b9\u6cd5\u8c03\u7528\u81ea\u5b9a\u4e49\u7684 genImportCode \u51fd\u6570\u751f\u6210\u5bfc\u5165\u4ee3\u7801\u3002Generate \u65b9\u6cd5\u8c03\u7528\u81ea\u5b9a\u4e49\u7684 genServiceCode \u65b9\u6cd5\u751f\u6210\u6bcf\u4e2a\u670d\u52a1\u7684\u4ee3\u7801\u3002"),(0,l.kt)("p",null,"\u76ee\u524d\uff0c\u81ea\u5b9a\u4e49\u7684 genImportCode \u548c genServiceCode \u65b9\u6cd5\u53ea\u662f\u8f93\u51fa\u4e00\u884c\u7b80\u5355\u7684\u6ce8\u91ca\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'func (p *netrpcPlugin) genImportCode(file *generator.FileDescriptor) {\n p.P("// TODO: import code")\n}\n\nfunc (p *netrpcPlugin) genServiceCode(svc *descriptor.ServiceDescriptorProto) {\n p.P("// TODO: service code, Name =" + svc.GetName())\n}\n')),(0,l.kt)("p",null,"\u8981\u4f7f\u7528\u8be5\u63d2\u4ef6\u9700\u8981\u5148\u901a\u8fc7 generator.RegisterPlugin \u51fd\u6570\u6ce8\u518c\u63d2\u4ef6\uff0c\u53ef\u4ee5\u5728 init \u51fd\u6570\u4e2d\u5b8c\u6210\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func init() {\n generator.RegisterPlugin(new(netrpcPlugin))\n}\n")),(0,l.kt)("p",null,"\u56e0\u4e3a Go \u8bed\u8a00\u7684\u5305\u53ea\u80fd\u9759\u6001\u5bfc\u5165\uff0c\u6211\u4eec\u65e0\u6cd5\u5411\u5df2\u7ecf\u5b89\u88c5\u7684 protoc-gen-go \u6dfb\u52a0\u6211\u4eec\u65b0\u7f16\u5199\u7684\u63d2\u4ef6\u3002\u6211\u4eec\u5c06\u91cd\u65b0\u514b\u9686 protoc-gen-go \u5bf9\u5e94\u7684 main \u51fd\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n "io/ioutil"\n "os"\n\n "github.com/golang/protobuf/proto"\n "github.com/golang/protobuf/protoc-gen-go/generator"\n)\n\nfunc main() {\n g := generator.New()\n\n data, err := ioutil.ReadAll(os.Stdin)\n if err != nil {\n  g.Error(err, "reading input")\n }\n\n if err := proto.Unmarshal(data, g.Request); err != nil {\n  g.Error(err, "parsing input proto")\n }\n\n if len(g.Request.FileToGenerate) == 0 {\n  g.Fail("no files to generate")\n }\n\n g.CommandLineParameters(g.Request.GetParameter())\n\n // Create a wrapped version of the Descriptors and EnumDescriptors that\n // point to the file that defines them.\n g.WrapTypes()\n\n g.SetPackageNames()\n g.BuildTypeNameMap()\n\n g.GenerateAllFiles()\n\n // Send back the results.\n data, err = proto.Marshal(g.Response)\n if err != nil {\n  g.Error(err, "failed to marshal output proto")\n }\n _, err = os.Stdout.Write(data)\n if err != nil {\n  g.Error(err, "failed to write output proto")\n }\n}\n')),(0,l.kt)("p",null,"\u4e3a\u4e86\u907f\u514d\u5bf9 protoc-gen-go \u63d2\u4ef6\u9020\u6210\u5e72\u6270\uff0c\u6211\u4eec\u5c06\u6211\u4eec\u7684\u53ef\u6267\u884c\u7a0b\u5e8f\u547d\u540d\u4e3a protoc-gen-go-netrpc\uff0c\u8868\u793a\u5305\u542b\u4e86 netrpc \u63d2\u4ef6\u3002\u7136\u540e\u7528\u4ee5\u4e0b\u547d\u4ee4\u91cd\u65b0\u7f16\u8bd1 hello.proto \u6587\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"protoc --go-netrpc_out=plugins=netrpc:. hello.proto\n")),(0,l.kt)("p",null,"\u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"--go-netrpc_out")," \u53c2\u6570\u544a\u77e5 protoc \u7f16\u8bd1\u5668\u52a0\u8f7d\u540d\u4e3a protoc-gen-go-netrpc \u7684\u63d2\u4ef6\uff0c\u63d2\u4ef6\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"plugins=netrpc")," \u6307\u793a\u542f\u7528\u5185\u90e8\u552f\u4e00\u7684\u540d\u4e3a netrpc \u7684 netrpcPlugin \u63d2\u4ef6\u3002\u5728\u65b0\u751f\u6210\u7684 hello.pb.go \u6587\u4ef6\u4e2d\u5c06\u5305\u542b\u589e\u52a0\u7684\u6ce8\u91ca\u4ee3\u7801\u3002"),(0,l.kt)("p",null,"\u81f3\u6b64\uff0c\u624b\u5de5\u5b9a\u5236\u7684 Protobuf \u4ee3\u7801\u751f\u6210\u63d2\u4ef6\u7ec8\u4e8e\u53ef\u4ee5\u5de5\u4f5c\u4e86\u3002"),(0,l.kt)("h2",{id:"\u81ea\u52a8\u751f\u6210\u5b8c\u6574\u7684-rpc-\u4ee3\u7801"},"\u81ea\u52a8\u751f\u6210\u5b8c\u6574\u7684 RPC \u4ee3\u7801"),(0,l.kt)("p",null,"\u5728\u524d\u9762\u7684\u4f8b\u5b50\u4e2d\u6211\u4eec\u5df2\u7ecf\u6784\u5efa\u4e86\u6700\u5c0f\u5316\u7684 netrpcPlugin \u63d2\u4ef6\uff0c\u5e76\u4e14\u901a\u8fc7\u514b\u9686 protoc-gen-go \u7684\u4e3b\u7a0b\u5e8f\u521b\u5efa\u4e86\u65b0\u7684 protoc-gen-go-netrpc \u7684\u63d2\u4ef6\u7a0b\u5e8f\u3002\u73b0\u5728\u5f00\u59cb\u7ee7\u7eed\u5b8c\u5584 netrpcPlugin \u63d2\u4ef6\uff0c\u6700\u7ec8\u76ee\u6807\u662f\u751f\u6210 RPC \u5b89\u5168\u63a5\u53e3\u3002"),(0,l.kt)("p",null,"\u9996\u5148\u662f\u81ea\u5b9a\u4e49\u7684 genImportCode \u65b9\u6cd5\u4e2d\u751f\u6210\u5bfc\u5165\u5305\u7684\u4ee3\u7801\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'func (p *netrpcPlugin) genImportCode(file *generator.FileDescriptor) {\n p.P(`import "net/rpc"`)\n}\n')),(0,l.kt)("p",null,"\u7136\u540e\u8981\u5728\u81ea\u5b9a\u4e49\u7684 genServiceCode \u65b9\u6cd5\u4e2d\u4e3a\u6bcf\u4e2a\u670d\u52a1\u751f\u6210\u76f8\u5173\u7684\u4ee3\u7801\u3002\u5206\u6790\u53ef\u4ee5\u53d1\u73b0\u6bcf\u4e2a\u670d\u52a1\u6700\u91cd\u8981\u7684\u662f\u670d\u52a1\u7684\u540d\u5b57\uff0c\u7136\u540e\u6bcf\u4e2a\u670d\u52a1\u6709\u4e00\u7ec4\u65b9\u6cd5\u3002\u800c\u5bf9\u4e8e\u670d\u52a1\u5b9a\u4e49\u7684\u65b9\u6cd5\uff0c\u6700\u91cd\u8981\u7684\u662f\u65b9\u6cd5\u7684\u540d\u5b57\uff0c\u8fd8\u6709\u8f93\u5165\u53c2\u6570\u548c\u8f93\u51fa\u53c2\u6570\u7c7b\u578b\u7684\u540d\u5b57\u3002"),(0,l.kt)("p",null,"\u4e3a\u6b64\u6211\u4eec\u5b9a\u4e49\u4e86\u4e00\u4e2a ServiceSpec \u7c7b\u578b\uff0c\u7528\u4e8e\u63cf\u8ff0\u670d\u52a1\u7684\u5143\u4fe1\u606f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"type ServiceSpec struct {\n ServiceName string\n MethodList  []ServiceMethodSpec\n}\n\ntype ServiceMethodSpec struct {\n MethodName     string\n InputTypeName  string\n OutputTypeName string\n}\n")),(0,l.kt)("p",null,"\u7136\u540e\u6211\u4eec\u65b0\u5efa\u4e00\u4e2a buildServiceSpec \u65b9\u6cd5\u7528\u6765\u89e3\u6790\u6bcf\u4e2a\u670d\u52a1\u7684 ServiceSpec \u5143\u4fe1\u606f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func (p *netrpcPlugin) buildServiceSpec(\n svc *descriptor.ServiceDescriptorProto,\n) *ServiceSpec {\n spec := &ServiceSpec{\n  ServiceName: generator.CamelCase(svc.GetName()),\n }\n\n for _, m := range svc.Method {\n  spec.MethodList = append(spec.MethodList, ServiceMethodSpec{\n   MethodName:     generator.CamelCase(m.GetName()),\n   InputTypeName:  p.TypeName(p.ObjectNamed(m.GetInputType())),\n   OutputTypeName: p.TypeName(p.ObjectNamed(m.GetOutputType())),\n  })\n }\n\n return spec\n}\n")),(0,l.kt)("p",null,"\u5176\u4e2d\u8f93\u5165\u53c2\u6570\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"*descriptor.ServiceDescriptorProto")," \u7c7b\u578b\uff0c\u5b8c\u6574\u63cf\u8ff0\u4e86\u4e00\u4e2a\u670d\u52a1\u7684\u6240\u6709\u4fe1\u606f\u3002\u7136\u540e\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"svc.GetName()")," \u5c31\u53ef\u4ee5\u83b7\u53d6 Protobuf \u6587\u4ef6\u4e2d\u5b9a\u4e49\u7684\u670d\u52a1\u7684\u540d\u5b57\u3002Protobuf \u6587\u4ef6\u4e2d\u7684\u540d\u5b57\u8f6c\u4e3a Go \u8bed\u8a00\u7684\u540d\u5b57\u540e\uff0c\u9700\u8981\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"generator.CamelCase")," \u51fd\u6570\u8fdb\u884c\u4e00\u6b21\u8f6c\u6362\u3002\u7c7b\u4f3c\u7684\uff0c\u5728 for \u5faa\u73af\u4e2d\u6211\u4eec\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"m.GetName()")," \u83b7\u53d6\u65b9\u6cd5\u7684\u540d\u5b57\uff0c\u7136\u540e\u518d\u8f6c\u4e3a Go \u8bed\u8a00\u4e2d\u5bf9\u5e94\u7684\u540d\u5b57\u3002\u6bd4\u8f83\u590d\u6742\u7684\u662f\u5bf9\u8f93\u5165\u548c\u8f93\u51fa\u53c2\u6570\u540d\u5b57\u7684\u89e3\u6790\uff1a\u9996\u5148\u9700\u8981\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"m.GetInputType()")," \u83b7\u53d6\u8f93\u5165\u53c2\u6570\u7684\u7c7b\u578b\uff0c\u7136\u540e\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"p.ObjectNamed")," \u83b7\u53d6\u7c7b\u578b\u5bf9\u5e94\u7684\u7c7b\u5bf9\u8c61\u4fe1\u606f\uff0c\u6700\u540e\u83b7\u53d6\u7c7b\u5bf9\u8c61\u7684\u540d\u5b57\u3002"),(0,l.kt)("p",null,"\u7136\u540e\u6211\u4eec\u5c31\u53ef\u4ee5\u57fa\u4e8e buildServiceSpec \u65b9\u6cd5\u6784\u9020\u7684\u670d\u52a1\u7684\u5143\u4fe1\u606f\u751f\u6210\u670d\u52a1\u7684\u4ee3\u7801\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'func (p *netrpcPlugin) genServiceCode(svc *descriptor.ServiceDescriptorProto) {\n spec := p.buildServiceSpec(svc)\n\n var buf bytes.Buffer\n t := template.Must(template.New("").Parse(tmplService))\n err := t.Execute(&buf, spec)\n if err != nil {\n  log.Fatal(err)\n }\n\n p.P(buf.String())\n}\n')),(0,l.kt)("p",null,"\u4e3a\u4e86\u4fbf\u4e8e\u7ef4\u62a4\uff0c\u6211\u4eec\u57fa\u4e8e Go \u8bed\u8a00\u7684\u6a21\u677f\u6765\u751f\u6210\u670d\u52a1\u4ee3\u7801\uff0c\u5176\u4e2d tmplService \u662f\u670d\u52a1\u7684\u6a21\u677f\u3002"),(0,l.kt)("p",null,"\u5728\u7f16\u5199\u6a21\u677f\u4e4b\u524d\uff0c\u6211\u4eec\u5148\u67e5\u770b\u4e0b\u6211\u4eec\u671f\u671b\u751f\u6210\u7684\u6700\u7ec8\u4ee3\u7801\u5927\u6982\u662f\u4ec0\u4e48\u6837\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'type HelloServiceInterface interface {\n Hello(in String, out *String) error\n}\n\nfunc RegisterHelloService(srv *rpc.Server, x HelloService) error {\n if err := srv.RegisterName("HelloService", x); err != nil {\n  return err\n }\n return nil\n}\n\ntype HelloServiceClient struct {\n *rpc.Client\n}\n\nvar _ HelloServiceInterface = (*HelloServiceClient)(nil)\n\nfunc DialHelloService(network, address string) (*HelloServiceClient, error) {\n c, err := rpc.Dial(network, address)\n if err != nil {\n  return nil, err\n }\n return &HelloServiceClient{Client: c}, nil\n}\n\nfunc (p *HelloServiceClient) Hello(in String, out *String) error {\n return p.Client.Call("HelloService.Hello", in, out)\n}\n')),(0,l.kt)("p",null,"\u5176\u4e2d HelloService \u662f\u670d\u52a1\u540d\u5b57\uff0c\u540c\u65f6\u8fd8\u6709\u4e00\u7cfb\u5217\u7684\u65b9\u6cd5\u76f8\u5173\u7684\u540d\u5b57\u3002"),(0,l.kt)("p",null,"\u53c2\u8003\u6700\u7ec8\u8981\u751f\u6210\u7684\u4ee3\u7801\u53ef\u4ee5\u6784\u5efa\u5982\u4e0b\u6a21\u677f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'const tmplService = `\n{{$root := .}}\n\ntype {{.ServiceName}}Interface interface {\n {{- range $_, $m := .MethodList}}\n {{$m.MethodName}}(*{{$m.InputTypeName}}, *{{$m.OutputTypeName}}) error\n {{- end}}\n}\n\nfunc Register{{.ServiceName}}(\n srv *rpc.Server, x {{.ServiceName}}Interface,\n) error {\n if err := srv.RegisterName("{{.ServiceName}}", x); err != nil {\n  return err\n }\n return nil\n}\n\ntype {{.ServiceName}}Client struct {\n *rpc.Client\n}\n\nvar _ {{.ServiceName}}Interface = (*{{.ServiceName}}Client)(nil)\n\nfunc Dial{{.ServiceName}}(network, address string) (\n *{{.ServiceName}}Client, error,\n) {\n c, err := rpc.Dial(network, address)\n if err != nil {\n  return nil, err\n }\n return &{{.ServiceName}}Client{Client: c}, nil\n}\n\n{{range $_, $m := .MethodList}}\nfunc (p *{{$root.ServiceName}}Client) {{$m.MethodName}}(\n in *{{$m.InputTypeName}}, out *{{$m.OutputTypeName}},\n) error {\n return p.Client.Call("{{$root.ServiceName}}.{{$m.MethodName}}", in, out)\n}\n{{end}}\n`\n')),(0,l.kt)("p",null,"\u5f53 Protobuf \u7684\u63d2\u4ef6\u5b9a\u5236\u5de5\u4f5c\u5b8c\u6210\u540e\uff0c\u6bcf\u6b21 hello.proto \u6587\u4ef6\u4e2d RPC \u670d\u52a1\u7684\u53d8\u5316\u90fd\u53ef\u4ee5\u81ea\u52a8\u751f\u6210\u4ee3\u7801\u3002\u4e5f\u53ef\u4ee5\u901a\u8fc7\u66f4\u65b0\u63d2\u4ef6\u7684\u6a21\u677f\uff0c\u8c03\u6574\u6216\u589e\u52a0\u751f\u6210\u4ee3\u7801\u7684\u5185\u5bb9\u3002\u5728\u638c\u63e1\u4e86\u5b9a\u5236 Protobuf \u63d2\u4ef6\u6280\u672f\u540e\uff0c\u4f60\u5c06\u5f7b\u5e95\u62e5\u6709\u8fd9\u4e2a\u6280\u672f\u3002"))}f.isMDXComponent=!0}}]);