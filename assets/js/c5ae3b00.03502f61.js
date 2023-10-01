"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[21362],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return k}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),f=o,k=s["".concat(l,".").concat(f)]||s[f]||m[f]||a;return r?n.createElement(k,i(i({ref:t},p),{},{components:r})):n.createElement(k,i({ref:t},p))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},14628:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={title:"React hook \u8be6\u89e3",tags:["react"],authors:"ahKevinXy",description:"React hook \u5982\u4f55\u5de7\u5999\u4f7f\u7528",image:"https://source.unsplash.com/random?nature&27"},l="React hook \u8be6\u89e3",u={permalink:"/blog/2023/08/26/react-hook",source:"@site/blog/2023/08/26/react-hook.md",title:"React hook \u8be6\u89e3",description:"React hook \u5982\u4f55\u5de7\u5999\u4f7f\u7528",date:"2023-08-26T00:00:00.000Z",formattedDate:"2023\u5e748\u670826\u65e5",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:.9,hasTruncateMarker:!0,authors:[{name:"ahKevinXy",title:"\u4f5c\u8005",url:"https://github.com/ahKevinXy",email:"ahkevinxy@gmail.com",imageURL:"/img/headers.png",key:"ahKevinXy"}],frontMatter:{title:"React hook \u8be6\u89e3",tags:["react"],authors:"ahKevinXy",description:"React hook \u5982\u4f55\u5de7\u5999\u4f7f\u7528",image:"https://source.unsplash.com/random?nature&27"},prevItem:{title:"\u5982\u4f55\u5b89\u88c5 go grpc protoc-gen-go-grpc protoc-gen-go",permalink:"/blog/2023/08/29/grpc"},nextItem:{title:"html css \u57fa\u7840",permalink:"/blog/2023/08/18/website"}},p={authorsImageUrls:[void 0]},s=[{value:"hook \u4f18\u52bf",id:"hook-\u4f18\u52bf",level:2},{value:"\u4f7f\u7528\u89c4\u5219",id:"\u4f7f\u7528\u89c4\u5219",level:2},{value:"useState",id:"usestate",level:2}],m={toc:s},f="wrapper";function k(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)(f,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Hook \u662freact ",(0,a.kt)("inlineCode",{parentName:"p"},"16.8")," \u7684\u65b0\u589e\u7279\u6027\uff0c\u5b83\u53ef\u4ee5\u5728\u4e0d\u7f16\u5199class \u7684\u60c5\u51b5\u4e0b\u4f7f\u7528state \u4ee5\u53ca\u5176\u5b83react \u7279\u6027"),(0,a.kt)("h2",{id:"hook-\u4f18\u52bf"},"hook \u4f18\u52bf"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"hook \u5728\u65e0\u9700\u6539\u53d8\u7ec4\u4ef6\u7ed3\u6784\u7684\u60c5\u51b5\u4e0b\u590d\u7528\u72b6\u6001\u903b\u8f91"),(0,a.kt)("li",{parentName:"ul"},"hook \u5c06\u7ec4\u4ef6\u4e2d\u76f8\u4e92\u5173\u8054\u7684\u90e8\u5206\u62c6\u5206\u6210\u66f4\u5c0f\u7684\u51fd\u6570"),(0,a.kt)("li",{parentName:"ul"},"hook \u5728\u975eclass \u7684\u60c5\u51b5\u4e0b\u53ef\u4ee5\u4f7f\u7528\u66f4\u591a\u7684react \u7279\u6027 ")),(0,a.kt)("h2",{id:"\u4f7f\u7528\u89c4\u5219"},"\u4f7f\u7528\u89c4\u5219"),(0,a.kt)("p",null,"Hook \u5c31\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"javascript")," "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u53ea\u80fd\u5728\u51fd\u6570\u5916\u5c42\u8c03\u7528 hook,\u4e0d\u8981\u5728\u5faa\u73af\uff0c\u6761\u4ef6\u5224\u65ad\u6216\u5b50\u51fd\u6570\u4e2d\u8c03\u7528"),(0,a.kt)("li",{parentName:"ol"},"\u53ea\u80fd\u5728react\u7684\u51fd\u6570\u7ec4\u4ef6\u548c\u81ea\u5b9a\u4e49hook\u4e2d\u8c03\u7528hook")),(0,a.kt)("h2",{id:"usestate"},"useState"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useState")," \u7528\u4e8e\u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d\u8c03\u7528\u7ed9\u7ec4\u4ef6\u6dfb\u52a0\u4e00\u4e9b\u5185\u90e8\u72b6\u6001",(0,a.kt)("inlineCode",{parentName:"p"},"state")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const [state,setState] = useState(initialState)\n")))}k.isMDXComponent=!0}}]);