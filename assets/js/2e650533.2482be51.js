"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[4594],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return g}});var l=r(67294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,l)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,l,t=function(e,n){if(null==e)return{};var r,l,t={},o=Object.keys(e);for(l=0;l<o.length;l++)r=o[l],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)r=o[l],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var i=l.createContext({}),p=function(e){var n=l.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},s=function(e){var n=p(e.components);return l.createElement(i.Provider,{value:n},e.children)},u="mdxType",C={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=p(r),d=t,g=u["".concat(i,".").concat(d)]||u[d]||C[d]||o;return r?l.createElement(g,c(c({ref:n},s),{},{components:r})):l.createElement(g,c({ref:n},s))}));function g(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,c=new Array(o);c[0]=d;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a[u]="string"==typeof e?e:t,c[1]=a;for(var p=2;p<o;p++)c[p]=r[p];return l.createElement.apply(null,c)}return l.createElement.apply(null,r)}d.displayName="MDXCreateElement"},16311:function(e,n,r){r.r(n),r.d(n,{assets:function(){return s},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return u}});var l=r(83117),t=r(80102),o=(r(67294),r(3905)),c=["components"],a={},i="RPC \u5165\u95e8",p={unversionedId:"backend/go/base/rpc",id:"backend/go/base/rpc",title:"RPC \u5165\u95e8",description:"RPC \u662f\u8fdc\u7a0b\u8fc7\u7a0b\u8c03\u7528\u7684\u7b80\u79f0\uff0c\u662f\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e2d\u4e0d\u540c\u8282\u70b9\u95f4\u6d41\u884c\u7684\u901a\u4fe1\u65b9\u5f0f\u3002\u5728\u4e92\u8054\u7f51\u65f6\u4ee3\uff0cRPC \u5df2\u7ecf\u548c IPC \u4e00\u6837\u6210\u4e3a\u4e00\u4e2a\u4e0d\u53ef\u6216\u7f3a\u7684\u57fa\u7840\u6784\u4ef6\u3002\u56e0\u6b64 Go \u8bed\u8a00\u7684\u6807\u51c6\u5e93\u4e5f\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7b80\u5355\u7684 RPC \u5b9e\u73b0\uff0c\u6211\u4eec\u5c06\u4ee5\u6b64\u4e3a\u5165\u53e3\u5b66\u4e60 RPC \u7684\u5404\u79cd\u7528\u6cd5\u3002",source:"@site/docs/backend/go/base/rpc.md",sourceDirName:"backend/go/base",slug:"/backend/go/base/rpc",permalink:"/docs/backend/go/base/rpc",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Protobuf",permalink:"/docs/backend/go/base/pb"},next:{title:"Scheduler",permalink:"/docs/backend/go/base/scheduler"}},s={},u=[{value:"RPC \u7248 \u201cHello, World\u201d",id:"rpc-\u7248-hello-world",level:2},{value:"\u66f4\u5b89\u5168\u7684 RPC \u63a5\u53e3",id:"\u66f4\u5b89\u5168\u7684-rpc-\u63a5\u53e3",level:2},{value:"\u8de8\u8bed\u8a00\u7684 RPC",id:"\u8de8\u8bed\u8a00\u7684-rpc",level:2},{value:"Http \u4e0a\u7684 RPC",id:"http-\u4e0a\u7684-rpc",level:2}],C={toc:u},d="wrapper";function g(e){var n=e.components,r=(0,t.Z)(e,c);return(0,o.kt)(d,(0,l.Z)({},C,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rpc-\u5165\u95e8"},"RPC \u5165\u95e8"),(0,o.kt)("p",null,"RPC \u662f\u8fdc\u7a0b\u8fc7\u7a0b\u8c03\u7528\u7684\u7b80\u79f0\uff0c\u662f\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e2d\u4e0d\u540c\u8282\u70b9\u95f4\u6d41\u884c\u7684\u901a\u4fe1\u65b9\u5f0f\u3002\u5728\u4e92\u8054\u7f51\u65f6\u4ee3\uff0cRPC \u5df2\u7ecf\u548c IPC \u4e00\u6837\u6210\u4e3a\u4e00\u4e2a\u4e0d\u53ef\u6216\u7f3a\u7684\u57fa\u7840\u6784\u4ef6\u3002\u56e0\u6b64 Go \u8bed\u8a00\u7684\u6807\u51c6\u5e93\u4e5f\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7b80\u5355\u7684 RPC \u5b9e\u73b0\uff0c\u6211\u4eec\u5c06\u4ee5\u6b64\u4e3a\u5165\u53e3\u5b66\u4e60 RPC \u7684\u5404\u79cd\u7528\u6cd5\u3002"),(0,o.kt)("h2",{id:"rpc-\u7248-hello-world"},"RPC \u7248 \u201cHello, World\u201d"),(0,o.kt)("p",null,"Go \u8bed\u8a00\u7684 RPC \u5305\u7684\u8def\u5f84\u4e3a net/rpc\uff0c\u4e5f\u5c31\u662f\u653e\u5728\u4e86 net \u5305\u76ee\u5f55\u4e0b\u9762\u3002\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u731c\u6d4b\u8be5 RPC \u5305\u662f\u5efa\u7acb\u5728 net \u5305\u57fa\u7840\u4e4b\u4e0a\u7684\u3002\u5728\u7b2c\u4e00\u7ae0 \u201cHello, World\u201d \u9769\u547d\u4e00\u8282\u6700\u540e\uff0c\u6211\u4eec\u57fa\u4e8e http \u5b9e\u73b0\u4e86\u4e00\u4e2a\u6253\u5370\u4f8b\u5b50\u3002\u4e0b\u9762\u6211\u4eec\u5c1d\u8bd5\u57fa\u4e8e rpc \u5b9e\u73b0\u4e00\u4e2a\u7c7b\u4f3c\u7684\u4f8b\u5b50\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u5148\u6784\u9020\u4e00\u4e2a HelloService \u7c7b\u578b\uff0c\u5176\u4e2d\u7684 Hello \u65b9\u6cd5\u7528\u4e8e\u5b9e\u73b0\u6253\u5370\u529f\u80fd\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type HelloService struct {}\n\nfunc (p *HelloService) Hello(request string, reply *string) error {\n *reply = "hello:" + request\n return nil\n}\n')),(0,o.kt)("p",null,"\u5176\u4e2d Hello \u65b9\u6cd5\u5fc5\u987b\u6ee1\u8db3 Go \u8bed\u8a00\u7684 RPC \u89c4\u5219\uff1a\u65b9\u6cd5\u53ea\u80fd\u6709\u4e24\u4e2a\u53ef\u5e8f\u5217\u5316\u7684\u53c2\u6570\uff0c\u5176\u4e2d\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u6307\u9488\u7c7b\u578b\uff0c\u5e76\u4e14\u8fd4\u56de\u4e00\u4e2a error \u7c7b\u578b\uff0c\u540c\u65f6\u5fc5\u987b\u662f\u516c\u5f00\u7684\u65b9\u6cd5\u3002"),(0,o.kt)("p",null,"\u7136\u540e\u5c31\u53ef\u4ee5\u5c06 HelloService \u7c7b\u578b\u7684\u5bf9\u8c61\u6ce8\u518c\u4e3a\u4e00\u4e2a RPC \u670d\u52a1\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n rpc.RegisterName("HelloService", new(HelloService))\n\n listener, err := net.Listen("tcp", ":1234")\n if err != nil {\n  log.Fatal("ListenTCP error:", err)\n }\n\n conn, err := listener.Accept()\n if err != nil {\n  log.Fatal("Accept error:", err)\n }\n\n rpc.ServeConn(conn)\n}\n')),(0,o.kt)("p",null,"\u5176\u4e2d rpc.Register \u51fd\u6570\u8c03\u7528\u4f1a\u5c06\u5bf9\u8c61\u7c7b\u578b\u4e2d\u6240\u6709\u6ee1\u8db3 RPC \u89c4\u5219\u7684\u5bf9\u8c61\u65b9\u6cd5\u6ce8\u518c\u4e3a RPC \u51fd\u6570\uff0c\u6240\u6709\u6ce8\u518c\u7684\u65b9\u6cd5\u4f1a\u653e\u5728 \u201cHelloService\u201d \u670d\u52a1\u7a7a\u95f4\u4e4b\u4e0b\u3002\u7136\u540e\u6211\u4eec\u5efa\u7acb\u4e00\u4e2a\u552f\u4e00\u7684 TCP \u8fde\u63a5\uff0c\u5e76\u4e14\u901a\u8fc7 rpc.ServeConn \u51fd\u6570\u5728\u8be5 TCP \u8fde\u63a5\u4e0a\u4e3a\u5bf9\u65b9\u63d0\u4f9b RPC \u670d\u52a1\u3002"),(0,o.kt)("p",null,"\u4e0b\u9762\u662f\u5ba2\u6237\u7aef\u8bf7\u6c42 HelloService \u670d\u52a1\u7684\u4ee3\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n client, err := rpc.Dial("tcp", "localhost:1234")\n if err != nil {\n  log.Fatal("dialing:", err)\n }\n\n var reply string\n err = client.Call("HelloService.Hello", "hello", &reply)\n if err != nil {\n  log.Fatal(err)\n }\n\n fmt.Println(reply)\n}\n')),(0,o.kt)("p",null,"\u9996\u5148\u662f\u901a\u8fc7 rpc.Dial \u62e8\u53f7 RPC \u670d\u52a1\uff0c\u7136\u540e\u901a\u8fc7 client.Call \u8c03\u7528\u5177\u4f53\u7684 RPC \u65b9\u6cd5\u3002\u5728\u8c03\u7528 client.Call \u65f6\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u7528\u70b9\u53f7\u8fde\u63a5\u7684 RPC \u670d\u52a1\u540d\u5b57\u548c\u65b9\u6cd5\u540d\u5b57\uff0c\u7b2c\u4e8c\u548c\u7b2c\u4e09\u4e2a\u53c2\u6570\u5206\u522b\u6211\u4eec\u5b9a\u4e49 RPC \u65b9\u6cd5\u7684\u4e24\u4e2a\u53c2\u6570\u3002"),(0,o.kt)("p",null,"\u7531\u8fd9\u4e2a\u4f8b\u5b50\u53ef\u4ee5\u770b\u51fa RPC \u7684\u4f7f\u7528\u5176\u5b9e\u975e\u5e38\u7b80\u5355\u3002"),(0,o.kt)("h2",{id:"\u66f4\u5b89\u5168\u7684-rpc-\u63a5\u53e3"},"\u66f4\u5b89\u5168\u7684 RPC \u63a5\u53e3"),(0,o.kt)("p",null,"\u5728\u6d89\u53ca RPC \u7684\u5e94\u7528\u4e2d\uff0c\u4f5c\u4e3a\u5f00\u53d1\u4eba\u5458\u4e00\u822c\u81f3\u5c11\u6709\u4e09\u79cd\u89d2\u8272\uff1a\u9996\u5148\u662f\u670d\u52a1\u7aef\u5b9e\u73b0 RPC \u65b9\u6cd5\u7684\u5f00\u53d1\u4eba\u5458\uff0c\u5176\u6b21\u662f\u5ba2\u6237\u7aef\u8c03\u7528 RPC \u65b9\u6cd5\u7684\u4eba\u5458\uff0c\u6700\u540e\u4e5f\u662f\u6700\u91cd\u8981\u7684\u662f\u5236\u5b9a\u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef RPC \u63a5\u53e3\u89c4\u8303\u7684\u8bbe\u8ba1\u4eba\u5458\u3002\u5728\u524d\u9762\u7684\u4f8b\u5b50\u4e2d\u6211\u4eec\u4e3a\u4e86\u7b80\u5316\u5c06\u4ee5\u4e0a\u51e0\u79cd\u89d2\u8272\u7684\u5de5\u4f5c\u5168\u90e8\u653e\u5230\u4e86\u4e00\u8d77\uff0c\u867d\u7136\u770b\u4f3c\u5b9e\u73b0\u7b80\u5355\uff0c\u4f46\u662f\u4e0d\u5229\u4e8e\u540e\u671f\u7684\u7ef4\u62a4\u548c\u5de5\u4f5c\u7684\u5207\u5272\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u8981\u91cd\u6784 HelloService \u670d\u52a1\uff0c\u7b2c\u4e00\u6b65\u9700\u8981\u660e\u786e\u670d\u52a1\u7684\u540d\u5b57\u548c\u63a5\u53e3\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'const HelloServiceName = "path/to/pkg.HelloService"\n\ntype HelloServiceInterface interface {\n Hello(request string, reply *string) error\n}\n\nfunc RegisterHelloService(svc HelloServiceInterface) error {\n return rpc.RegisterName(HelloServiceName, svc)\n}\n')),(0,o.kt)("p",null,"\u6211\u4eec\u5c06 RPC \u670d\u52a1\u7684\u63a5\u53e3\u89c4\u8303\u5206\u4e3a\u4e09\u4e2a\u90e8\u5206\uff1a\u9996\u5148\u662f\u670d\u52a1\u7684\u540d\u5b57\uff0c\u7136\u540e\u662f\u670d\u52a1\u8981\u5b9e\u73b0\u7684\u8be6\u7ec6\u65b9\u6cd5\u5217\u8868\uff0c\u6700\u540e\u662f\u6ce8\u518c\u8be5\u7c7b\u578b\u670d\u52a1\u7684\u51fd\u6570\u3002\u4e3a\u4e86\u907f\u514d\u540d\u5b57\u51b2\u7a81\uff0c\u6211\u4eec\u5728 RPC \u670d\u52a1\u7684\u540d\u5b57\u4e2d\u589e\u52a0\u4e86\u5305\u8def\u5f84\u524d\u7f00\uff08\u8fd9\u4e2a\u662f RPC \u670d\u52a1\u62bd\u8c61\u7684\u5305\u8def\u5f84\uff0c\u5e76\u975e\u5b8c\u5168\u7b49\u4ef7 Go \u8bed\u8a00\u7684\u5305\u8def\u5f84\uff09\u3002RegisterHelloService \u6ce8\u518c\u670d\u52a1\u65f6\uff0c\u7f16\u8bd1\u5668\u4f1a\u8981\u6c42\u4f20\u5165\u7684\u5bf9\u8c61\u6ee1\u8db3 HelloServiceInterface \u63a5\u53e3\u3002"),(0,o.kt)("p",null,"\u5728\u5b9a\u4e49\u4e86 RPC \u670d\u52a1\u63a5\u53e3\u89c4\u8303\u4e4b\u540e\uff0c\u5ba2\u6237\u7aef\u5c31\u53ef\u4ee5\u6839\u636e\u89c4\u8303\u7f16\u5199 RPC \u8c03\u7528\u7684\u4ee3\u7801\u4e86\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n client, err := rpc.Dial("tcp", "localhost:1234")\n if err != nil {\n  log.Fatal("dialing:", err)\n }\n\n var reply string\n err = client.Call(HelloServiceName+".Hello", "hello", &reply)\n if err != nil {\n  log.Fatal(err)\n }\n}\n')),(0,o.kt)("p",null,'\u5176\u4e2d\u552f\u4e00\u7684\u53d8\u5316\u662f client.Call \u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u7528 HelloServiceName+".Hello" \u4ee3\u66ff\u4e86 "HelloService.Hello"\u3002\u7136\u800c\u901a\u8fc7 client.Call \u51fd\u6570\u8c03\u7528 RPC \u65b9\u6cd5\u4f9d\u7136\u6bd4\u8f83\u7e41\u7410\uff0c\u540c\u65f6\u53c2\u6570\u7684\u7c7b\u578b\u4f9d\u7136\u65e0\u6cd5\u5f97\u5230\u7f16\u8bd1\u5668\u63d0\u4f9b\u7684\u5b89\u5168\u4fdd\u969c\u3002'),(0,o.kt)("p",null,"\u4e3a\u4e86\u7b80\u5316\u5ba2\u6237\u7aef\u7528\u6237\u8c03\u7528 RPC \u51fd\u6570\uff0c\u6211\u4eec\u5728\u53ef\u4ee5\u5728\u63a5\u53e3\u89c4\u8303\u90e8\u5206\u589e\u52a0\u5bf9\u5ba2\u6237\u7aef\u7684\u7b80\u5355\u5305\u88c5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type HelloServiceClient struct {\n *rpc.Client\n}\n\nvar _ HelloServiceInterface = (*HelloServiceClient)(nil)\n\nfunc DialHelloService(network, address string) (*HelloServiceClient, error) {\n c, err := rpc.Dial(network, address)\n if err != nil {\n  return nil, err\n }\n return &HelloServiceClient{Client: c}, nil\n}\n\nfunc (p *HelloServiceClient) Hello(request string, reply *string) error {\n return p.Client.Call(HelloServiceName+".Hello", request, reply)\n}\n')),(0,o.kt)("p",null,"\u6211\u4eec\u5728\u63a5\u53e3\u89c4\u8303\u4e2d\u9488\u5bf9\u5ba2\u6237\u7aef\u65b0\u589e\u52a0\u4e86 HelloServiceClient \u7c7b\u578b\uff0c\u8be5\u7c7b\u578b\u4e5f\u5fc5\u987b\u6ee1\u8db3 HelloServiceInterface \u63a5\u53e3\uff0c\u8fd9\u6837\u5ba2\u6237\u7aef\u7528\u6237\u5c31\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u63a5\u53e3\u5bf9\u5e94\u7684\u65b9\u6cd5\u8c03\u7528 RPC \u51fd\u6570\u3002\u540c\u65f6\u63d0\u4f9b\u4e86\u4e00\u4e2a DialHelloService \u65b9\u6cd5\uff0c\u76f4\u63a5\u62e8\u53f7 HelloService \u670d\u52a1\u3002"),(0,o.kt)("p",null,"\u57fa\u4e8e\u65b0\u7684\u5ba2\u6237\u7aef\u63a5\u53e3\uff0c\u6211\u4eec\u53ef\u4ee5\u7b80\u5316\u5ba2\u6237\u7aef\u7528\u6237\u7684\u4ee3\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n client, err := DialHelloService("tcp", "localhost:1234")\n if err != nil {\n  log.Fatal("dialing:", err)\n }\n\n var reply string\n err = client.Hello("hello", &reply)\n if err != nil {\n  log.Fatal(err)\n }\n}\n')),(0,o.kt)("p",null,"\u73b0\u5728\u5ba2\u6237\u7aef\u7528\u6237\u4e0d\u7528\u518d\u62c5\u5fc3 RPC \u65b9\u6cd5\u540d\u5b57\u6216\u53c2\u6570\u7c7b\u578b\u4e0d\u5339\u914d\u7b49\u4f4e\u7ea7\u9519\u8bef\u7684\u53d1\u751f\u3002"),(0,o.kt)("p",null,"\u6700\u540e\u662f\u57fa\u4e8e RPC \u63a5\u53e3\u89c4\u8303\u7f16\u5199\u771f\u5b9e\u7684\u670d\u52a1\u7aef\u4ee3\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type HelloService struct {}\n\nfunc (p *HelloService) Hello(request string, reply *string) error {\n *reply = "hello:" + request\n return nil\n}\n\nfunc main() {\n RegisterHelloService(new(HelloService))\n\n listener, err := net.Listen("tcp", ":1234")\n if err != nil {\n  log.Fatal("ListenTCP error:", err)\n }\n\n for {\n  conn, err := listener.Accept()\n  if err != nil {\n   log.Fatal("Accept error:", err)\n  }\n\n  go rpc.ServeConn(conn)\n }\n}\n')),(0,o.kt)("p",null,"\u5728\u65b0\u7684 RPC \u670d\u52a1\u7aef\u5b9e\u73b0\u4e2d\uff0c\u6211\u4eec\u7528 RegisterHelloService \u51fd\u6570\u6765\u6ce8\u518c\u51fd\u6570\uff0c\u8fd9\u6837\u4e0d\u4ec5\u53ef\u4ee5\u907f\u514d\u547d\u540d\u670d\u52a1\u540d\u79f0\u7684\u5de5\u4f5c\uff0c\u540c\u65f6\u4e5f\u4fdd\u8bc1\u4e86\u4f20\u5165\u7684\u670d\u52a1\u5bf9\u8c61\u6ee1\u8db3\u4e86 RPC \u63a5\u53e3\u7684\u5b9a\u4e49\u3002\u6700\u540e\u6211\u4eec\u65b0\u7684\u670d\u52a1\u6539\u4e3a\u652f\u6301\u591a\u4e2a TCP \u8fde\u63a5\uff0c\u7136\u540e\u4e3a\u6bcf\u4e2a TCP \u8fde\u63a5\u63d0\u4f9b RPC \u670d\u52a1\u3002"),(0,o.kt)("h2",{id:"\u8de8\u8bed\u8a00\u7684-rpc"},"\u8de8\u8bed\u8a00\u7684 RPC"),(0,o.kt)("p",null,"\u6807\u51c6\u5e93\u7684 RPC \u9ed8\u8ba4\u91c7\u7528 Go \u8bed\u8a00\u7279\u6709\u7684 gob \u7f16\u7801\uff0c\u56e0\u6b64\u4ece\u5176\u5b83\u8bed\u8a00\u8c03\u7528 Go \u8bed\u8a00\u5b9e\u73b0\u7684 RPC \u670d\u52a1\u5c06\u6bd4\u8f83\u56f0\u96be\u3002\u5728\u4e92\u8054\u7f51\u7684\u5fae\u670d\u52a1\u65f6\u4ee3\uff0c\u6bcf\u4e2a RPC \u4ee5\u53ca\u670d\u52a1\u7684\u4f7f\u7528\u8005\u90fd\u53ef\u80fd\u91c7\u7528\u4e0d\u540c\u7684\u7f16\u7a0b\u8bed\u8a00\uff0c\u56e0\u6b64\u8de8\u8bed\u8a00\u662f\u4e92\u8054\u7f51\u65f6\u4ee3 RPC \u7684\u4e00\u4e2a\u9996\u8981\u6761\u4ef6\u3002\u5f97\u76ca\u4e8e RPC \u7684\u6846\u67b6\u8bbe\u8ba1\uff0cGo \u8bed\u8a00\u7684 RPC \u5176\u5b9e\u4e5f\u662f\u5f88\u5bb9\u6613\u5b9e\u73b0\u8de8\u8bed\u8a00\u652f\u6301\u7684\u3002"),(0,o.kt)("p",null,"Go \u8bed\u8a00\u7684 RPC \u6846\u67b6\u6709\u4e24\u4e2a\u6bd4\u8f83\u6709\u7279\u8272\u7684\u8bbe\u8ba1\uff1a\u4e00\u4e2a\u662f RPC \u6570\u636e\u6253\u5305\u65f6\u53ef\u4ee5\u901a\u8fc7\u63d2\u4ef6\u5b9e\u73b0\u81ea\u5b9a\u4e49\u7684\u7f16\u7801\u548c\u89e3\u7801\uff1b\u53e6\u4e00\u4e2a\u662f RPC \u5efa\u7acb\u5728\u62bd\u8c61\u7684 io.ReadWriteCloser \u63a5\u53e3\u4e4b\u4e0a\u7684\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06 RPC \u67b6\u8bbe\u5728\u4e0d\u540c\u7684\u901a\u8baf\u534f\u8bae\u4e4b\u4e0a\u3002\u8fd9\u91cc\u6211\u4eec\u5c06\u5c1d\u8bd5\u901a\u8fc7\u5b98\u65b9\u81ea\u5e26\u7684 net/rpc/jsonrpc \u6269\u5c55\u5b9e\u73b0\u4e00\u4e2a\u8de8\u8bed\u8a00\u7684 RPC\u3002"),(0,o.kt)("p",null,"\u9996\u5148\u662f\u57fa\u4e8e json \u7f16\u7801\u91cd\u65b0\u5b9e\u73b0 RPC \u670d\u52a1\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n rpc.RegisterName("HelloService", new(HelloService))\n\n listener, err := net.Listen("tcp", ":1234")\n if err != nil {\n  log.Fatal("ListenTCP error:", err)\n }\n\n for {\n  conn, err := listener.Accept()\n  if err != nil {\n   log.Fatal("Accept error:", err)\n  }\n\n  go rpc.ServeCodec(jsonrpc.NewServerCodec(conn))\n }\n}\n')),(0,o.kt)("p",null,"\u4ee3\u7801\u4e2d\u6700\u5927\u7684\u53d8\u5316\u662f\u7528 rpc.ServeCodec \u51fd\u6570\u66ff\u4ee3\u4e86 rpc.ServeConn \u51fd\u6570\uff0c\u4f20\u5165\u7684\u53c2\u6570\u662f\u9488\u5bf9\u670d\u52a1\u7aef\u7684 json \u7f16\u89e3\u7801\u5668\u3002"),(0,o.kt)("p",null,"\u7136\u540e\u662f\u5b9e\u73b0 json \u7248\u672c\u7684\u5ba2\u6237\u7aef\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n conn, err := net.Dial("tcp", "localhost:1234")\n if err != nil {\n  log.Fatal("net.Dial:", err)\n }\n\n client := rpc.NewClientWithCodec(jsonrpc.NewClientCodec(conn))\n\n var reply string\n err = client.Call("HelloService.Hello", "hello", &reply)\n if err != nil {\n  log.Fatal(err)\n }\n\n fmt.Println(reply)\n}\n')),(0,o.kt)("p",null,"\u5148\u624b\u5de5\u8c03\u7528 net.Dial \u51fd\u6570\u5efa\u7acb TCP \u8fde\u63a5\uff0c\u7136\u540e\u57fa\u4e8e\u8be5\u8fde\u63a5\u5efa\u7acb\u9488\u5bf9\u5ba2\u6237\u7aef\u7684 json \u7f16\u89e3\u7801\u5668\u3002"),(0,o.kt)("p",null,"\u5728\u786e\u4fdd\u5ba2\u6237\u7aef\u53ef\u4ee5\u6b63\u5e38\u8c03\u7528 RPC \u670d\u52a1\u7684\u65b9\u6cd5\u4e4b\u540e\uff0c\u6211\u4eec\u7528\u4e00\u4e2a\u666e\u901a\u7684 TCP \u670d\u52a1\u4ee3\u66ff Go \u8bed\u8a00\u7248\u672c\u7684 RPC \u670d\u52a1\uff0c\u8fd9\u6837\u53ef\u4ee5\u67e5\u770b\u5ba2\u6237\u7aef\u8c03\u7528\u65f6\u53d1\u9001\u7684\u6570\u636e\u683c\u5f0f\u3002\u6bd4\u5982\u901a\u8fc7 nc \u547d\u4ee4 ",(0,o.kt)("inlineCode",{parentName:"p"},"nc -l 1234")," \u5728\u540c\u6837\u7684\u7aef\u53e3\u542f\u52a8\u4e00\u4e2a TCP \u670d\u52a1\u3002\u7136\u540e\u518d\u6b21\u6267\u884c\u4e00\u6b21 RPC \u8c03\u7528\u5c06\u4f1a\u53d1\u73b0 nc \u8f93\u51fa\u4e86\u4ee5\u4e0b\u7684\u4fe1\u606f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"method":"HelloService.Hello","params":["hello"],"id":0}\n')),(0,o.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a json \u7f16\u7801\u7684\u6570\u636e\uff0c\u5176\u4e2d method \u90e8\u5206\u5bf9\u5e94\u8981\u8c03\u7528\u7684 rpc \u670d\u52a1\u548c\u65b9\u6cd5\u7ec4\u5408\u6210\u7684\u540d\u5b57\uff0cparams \u90e8\u5206\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\u4e3a\u53c2\u6570\uff0cid \u662f\u7531\u8c03\u7528\u7aef\u7ef4\u62a4\u7684\u4e00\u4e2a\u552f\u4e00\u7684\u8c03\u7528\u7f16\u53f7\u3002"),(0,o.kt)("p",null,"\u8bf7\u6c42\u7684 json \u6570\u636e\u5bf9\u8c61\u5728\u5185\u90e8\u5bf9\u5e94\u4e24\u4e2a\u7ed3\u6784\u4f53\uff1a\u5ba2\u6237\u7aef\u662f clientRequest\uff0c\u670d\u52a1\u7aef\u662f serverRequest\u3002clientRequest \u548c serverRequest \u7ed3\u6784\u4f53\u7684\u5185\u5bb9\u57fa\u672c\u662f\u4e00\u81f4\u7684\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type clientRequest struct {\n Method string         `json:"method"`\n Params [1]interface{} `json:"params"`\n Id     uint64         `json:"id"`\n}\n\ntype serverRequest struct {\n Method string           `json:"method"`\n Params *json.RawMessage `json:"params"`\n Id     *json.RawMessage `json:"id"`\n}\n')),(0,o.kt)("p",null,"\u5728\u83b7\u53d6\u5230 RPC \u8c03\u7528\u5bf9\u5e94\u7684 json \u6570\u636e\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u76f4\u63a5\u5411\u67b6\u8bbe\u4e86 RPC \u670d\u52a1\u7684 TCP \u670d\u52a1\u5668\u53d1\u9001 json \u6570\u636e\u6a21\u62df RPC \u65b9\u6cd5\u8c03\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'echo -e \'{"method":"HelloService.Hello","params":["hello"],"id":1}\' | nc localhost 1234\n')),(0,o.kt)("p",null,"\u8fd4\u56de\u7684\u7ed3\u679c\u4e5f\u662f\u4e00\u4e2a json \u683c\u5f0f\u7684\u6570\u636e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"id":1,"result":"hello:hello","error":null}\n')),(0,o.kt)("p",null,"\u5176\u4e2d id \u5bf9\u5e94\u8f93\u5165\u7684 id \u53c2\u6570\uff0cresult \u4e3a\u8fd4\u56de\u7684\u7ed3\u679c\uff0cerror \u90e8\u5206\u5728\u51fa\u95ee\u9898\u65f6\u8868\u793a\u9519\u8bef\u4fe1\u606f\u3002\u5bf9\u4e8e\u987a\u5e8f\u8c03\u7528\u6765\u8bf4\uff0cid \u4e0d\u662f\u5fc5\u987b\u7684\u3002\u4f46\u662f Go \u8bed\u8a00\u7684 RPC \u6846\u67b6\u652f\u6301\u5f02\u6b65\u8c03\u7528\uff0c\u5f53\u8fd4\u56de\u7ed3\u679c\u7684\u987a\u5e8f\u548c\u8c03\u7528\u7684\u987a\u5e8f\u4e0d\u4e00\u81f4\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7 id \u6765\u8bc6\u522b\u5bf9\u5e94\u7684\u8c03\u7528\u3002"),(0,o.kt)("p",null,"\u8fd4\u56de\u7684 json \u6570\u636e\u4e5f\u662f\u5bf9\u5e94\u5185\u90e8\u7684\u4e24\u4e2a\u7ed3\u6784\u4f53\uff1a\u5ba2\u6237\u7aef\u662f clientResponse\uff0c\u670d\u52a1\u7aef\u662f serverResponse\u3002\u4e24\u4e2a\u7ed3\u6784\u4f53\u7684\u5185\u5bb9\u540c\u6837\u4e5f\u662f\u7c7b\u4f3c\u7684\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type clientResponse struct {\n Id     uint64           `json:"id"`\n Result *json.RawMessage `json:"result"`\n Error  interface{}      `json:"error"`\n}\n\ntype serverResponse struct {\n Id     *json.RawMessage `json:"id"`\n Result interface{}      `json:"result"`\n Error  interface{}      `json:"error"`\n}\n')),(0,o.kt)("p",null,"\u56e0\u6b64\u65e0\u8bba\u91c7\u7528\u4f55\u79cd\u8bed\u8a00\uff0c\u53ea\u8981\u9075\u5faa\u540c\u6837\u7684 json \u7ed3\u6784\uff0c\u4ee5\u540c\u6837\u7684\u6d41\u7a0b\u5c31\u53ef\u4ee5\u548c Go \u8bed\u8a00\u7f16\u5199\u7684 RPC \u670d\u52a1\u8fdb\u884c\u901a\u4fe1\u3002\u8fd9\u6837\u6211\u4eec\u5c31\u5b9e\u73b0\u4e86\u8de8\u8bed\u8a00\u7684 RPC\u3002"),(0,o.kt)("h2",{id:"http-\u4e0a\u7684-rpc"},"Http \u4e0a\u7684 RPC"),(0,o.kt)("p",null,"Go \u8bed\u8a00\u5185\u5728\u7684 RPC \u6846\u67b6\u5df2\u7ecf\u652f\u6301\u5728 Http \u534f\u8bae\u4e0a\u63d0\u4f9b RPC \u670d\u52a1\u3002\u4f46\u662f\u6846\u67b6\u7684 http \u670d\u52a1\u540c\u6837\u91c7\u7528\u4e86\u5185\u7f6e\u7684 gob \u534f\u8bae\uff0c\u5e76\u4e14\u6ca1\u6709\u63d0\u4f9b\u91c7\u7528\u5176\u5b83\u534f\u8bae\u7684\u63a5\u53e3\uff0c\u56e0\u6b64\u4ece\u5176\u5b83\u8bed\u8a00\u4f9d\u7136\u65e0\u6cd5\u8bbf\u95ee\u7684\u3002\u5728\u524d\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5df2\u7ecf\u5b9e\u73b0\u4e86\u5728 TCP \u534f\u8bae\u4e4b\u4e0a\u8fd0\u884c jsonrpc \u670d\u52a1\uff0c\u5e76\u4e14\u901a\u8fc7 nc \u547d\u4ee4\u884c\u5de5\u5177\u6210\u529f\u5b9e\u73b0\u4e86 RPC \u65b9\u6cd5\u8c03\u7528\u3002\u73b0\u5728\u6211\u4eec\u5c1d\u8bd5\u5728 http \u534f\u8bae\u4e0a\u63d0\u4f9b jsonrpc \u670d\u52a1\u3002"),(0,o.kt)("p",null,"\u65b0\u7684 RPC \u670d\u52a1\u5176\u5b9e\u662f\u4e00\u4e2a\u7c7b\u4f3c REST \u89c4\u8303\u7684\u63a5\u53e3\uff0c\u63a5\u6536\u8bf7\u6c42\u5e76\u91c7\u7528\u76f8\u5e94\u5904\u7406\u6d41\u7a0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n rpc.RegisterName("HelloService", new(HelloService))\n\n http.HandleFunc("/jsonrpc", func(w http.ResponseWriter, r *http.Request) {\n  var conn io.ReadWriteCloser = struct {\n   io.Writer\n   io.ReadCloser\n  }{\n   ReadCloser: r.Body,\n   Writer:     w,\n  }\n\n  rpc.ServeRequest(jsonrpc.NewServerCodec(conn))\n })\n\n http.ListenAndServe(":1234", nil)\n}\n')),(0,o.kt)("p",null,"RPC \u7684\u670d\u52a1\u67b6\u8bbe\u5728 \u201c/jsonrpc\u201d \u8def\u5f84\uff0c\u5728\u5904\u7406\u51fd\u6570\u4e2d\u57fa\u4e8e http.ResponseWriter \u548c http.Request \u7c7b\u578b\u7684\u53c2\u6570\u6784\u9020\u4e00\u4e2a io.ReadWriteCloser \u7c7b\u578b\u7684 conn \u901a\u9053\u3002\u7136\u540e\u57fa\u4e8e conn \u6784\u5efa\u9488\u5bf9\u670d\u52a1\u7aef\u7684 json \u7f16\u7801\u89e3\u7801\u5668\u3002\u6700\u540e\u901a\u8fc7 rpc.ServeRequest \u51fd\u6570\u4e3a\u6bcf\u6b21\u8bf7\u6c42\u5904\u7406\u4e00\u6b21 RPC \u65b9\u6cd5\u8c03\u7528\u3002"),(0,o.kt)("p",null,"\u6a21\u62df\u4e00\u6b21 RPC \u8c03\u7528\u7684\u8fc7\u7a0b\u5c31\u662f\u5411\u8be5\u8fde\u63a5\u53d1\u9001\u4e00\u4e2a json \u5b57\u7b26\u4e32\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ curl localhost:1234/jsonrpc -X POST \\\n --data \'{"method":"HelloService.Hello","params":["hello"],"id":0}\'\n')),(0,o.kt)("p",null,"\u8fd4\u56de\u7684\u7ed3\u679c\u4f9d\u7136\u662f json \u5b57\u7b26\u4e32\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"id":0,"result":"hello:hello","error":null}\n')),(0,o.kt)("p",null,"\u8fd9\u6837\u5c31\u53ef\u4ee5\u5f88\u65b9\u4fbf\u5730\u4ece\u4e0d\u540c\u8bed\u8a00\u4e2d\u8bbf\u95ee RPC \u670d\u52a1\u4e86\u3002"))}g.isMDXComponent=!0}}]);