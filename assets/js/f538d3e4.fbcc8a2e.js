"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[61129],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,s=d["".concat(c,".").concat(m)]||d[m]||f[m]||o;return t?r.createElement(s,i(i({ref:n},p),{},{components:t})):r.createElement(s,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},19912:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return f}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],l={},c="\u51fd\u6570",u={unversionedId:"backend/go/base/function",id:"backend/go/base/function",title:"\u51fd\u6570",description:"\u5c06\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570",source:"@site/docs/backend/go/base/function.md",sourceDirName:"backend/go/base",slug:"/backend/go/base/function",permalink:"/docs/backend/go/base/function",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u9519\u8bef\u548c\u5f02\u5e38",permalink:"/docs/backend/go/base/errors"},next:{title:"\u51fd\u6570\u3001\u65b9\u6cd5\u548c\u63a5\u53e3",permalink:"/docs/backend/go/base/function_interface_methods"}},p={},f=[{value:"\u5c06\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570",id:"\u5c06\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570",level:2},{value:"\u9012\u5f52\u51fd\u6570",id:"\u9012\u5f52\u51fd\u6570",level:2},{value:"\u5185\u7f6e\u51fd\u6570",id:"\u5185\u7f6e\u51fd\u6570",level:2},{value:"\u4f20\u9012\u53d8\u957f\u53c2\u6570",id:"\u4f20\u9012\u53d8\u957f\u53c2\u6570",level:2},{value:"defer \u548c\u8ffd\u8e2a",id:"defer-\u548c\u8ffd\u8e2a",level:2}],d={toc:f};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u51fd\u6570"},"\u51fd\u6570"),(0,o.kt)("h2",{id:"\u5c06\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570"},"\u5c06\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570"),(0,o.kt)("p",null,"\u51fd\u6570\u53ef\u4ee5\u4f5c\u4e3a\u5176\u5b83\u51fd\u6570\u7684\u53c2\u6570\u8fdb\u884c\u4f20\u9012\uff0c\u7136\u540e\u5728\u5176\u5b83\u51fd\u6570\u5185\u8c03\u7528\u6267\u884c\uff0c\u4e00\u822c\u79f0\u4e4b\u4e3a\u56de\u8c03\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u5c06\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\u7684\u7b80\u5355\u4f8b\u5b50\uff08function_parameter.go\uff09\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\nimport (\n    "fmt"\n)\nfunc main() {\n    callback(1, Add)\n}\nfunc Add(a, b int) {\n    fmt.Printf("The sum of %d and %d is: %d\\n", a, b, a+b)\n}\nfunc callback(y int, f func(int, int)) {\n    f(y, 2) // this becomes Add(1, 2)\n}\n')),(0,o.kt)("p",null,"\u5c06\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\u7684\u6700\u597d\u7684\u4f8b\u5b50\u662f\u51fd\u6570 ",(0,o.kt)("inlineCode",{parentName:"p"},"strings.IndexFunc()"),"\uff1a"),(0,o.kt)("h2",{id:"\u9012\u5f52\u51fd\u6570"},"\u9012\u5f52\u51fd\u6570"),(0,o.kt)("p",null,"\u5f53\u4e00\u4e2a\u51fd\u6570\u5728\u5176\u51fd\u6570\u4f53\u5185\u8c03\u7528\u81ea\u8eab\uff0c\u5219\u79f0\u4e4b\u4e3a\u9012\u5f52\u3002\u6700\u7ecf\u5178\u7684\u4f8b\u5b50\u4fbf\u662f\u8ba1\u7b97\u6590\u6ce2\u90a3\u5951\u6570\u5217\uff0c\u5373\u524d\u4e24\u4e2a\u6570\u4e3a1\uff0c\u4ece\u7b2c\u4e09\u4e2a\u6570\u5f00\u59cb\u6bcf\u4e2a\u6570\u5747\u4e3a\u524d\u4e24\u4e2a\u6570\u4e4b\u548c\u3002"),(0,o.kt)("p",null,"\u5728\u4f7f\u7528\u9012\u5f52\u51fd\u6570\u65f6\u7ecf\u5e38\u4f1a\u9047\u5230\u7684\u4e00\u4e2a\u91cd\u8981\u95ee\u9898\u5c31\u662f\u6808\u6ea2\u51fa\uff1a\u4e00\u822c\u51fa\u73b0\u5728\u5927\u91cf\u7684\u9012\u5f52\u8c03\u7528\u5bfc\u81f4\u7684\u7a0b\u5e8f\u6808\u5185\u5b58\u5206\u914d\u8017\u5c3d\u3002\u8fd9\u4e2a\u95ee\u9898\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e2a\u540d\u4e3a\u61d2\u60f0\u6c42\u503c\u7684\u6280\u672f\u89e3\u51b3\uff0c\u5728 Go \u8bed\u8a00\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u7ba1\u9053\uff08channel\uff09\u548c goroutine\uff09\u6765\u5b9e\u73b0"),(0,o.kt)("h2",{id:"\u5185\u7f6e\u51fd\u6570"},"\u5185\u7f6e\u51fd\u6570"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"close \u7528\u4e8e\u7ba1\u9053\u901a\u4fe1"),(0,o.kt)("li",{parentName:"ul"},"len\u3001cap  len \u7528\u4e8e\u8fd4\u56de\u67d0\u4e2a\u7c7b\u578b\u7684\u957f\u5ea6\u6216\u6570\u91cf\uff08\u5b57\u7b26\u4e32\u3001\u6570\u7ec4\u3001\u5207\u7247\u3001map \u548c\u7ba1\u9053\uff09\uff1bcap \u662f\u5bb9\u91cf\u7684\u610f\u601d\uff0c\u7528\u4e8e\u8fd4\u56de\u67d0\u4e2a\u7c7b\u578b\u7684\u6700\u5927\u5bb9\u91cf\uff08\u53ea\u80fd\u7528\u4e8e\u5207\u7247\u548c map\uff09"),(0,o.kt)("li",{parentName:"ul"},"new\u3001make\xa0new \u548c make \u5747\u662f\u7528\u4e8e\u5206\u914d\u5185\u5b58\uff1anew \u7528\u4e8e\u503c\u7c7b\u578b\u548c\u7528\u6237\u5b9a\u4e49\u7684\u7c7b\u578b\uff0c\u5982\u81ea\u5b9a\u4e49\u7ed3\u6784\uff0cmake \u7528\u4e8e\u5185\u7f6e\u5f15\u7528\u7c7b\u578b\uff08\u5207\u7247\u3001map \u548c\u7ba1\u9053\uff09\u3002\u5b83\u4eec\u7684\u7528\u6cd5\u5c31\u50cf\u662f\u51fd\u6570\uff0c\u4f46\u662f\u5c06\u7c7b\u578b\u4f5c\u4e3a\u53c2\u6570\uff1anew(type)\u3001make(type)\u3002new(T) \u5206\u914d\u7c7b\u578b T \u7684\u96f6\u503c\u5e76\u8fd4\u56de\u5176\u5730\u5740\uff0c\u4e5f\u5c31\u662f\u6307\u5411\u7c7b\u578b T \u7684\u6307\u9488\uff08\u8be6\u89c1\u7b2c 10.1 \u8282\uff09\u3002\u5b83\u4e5f\u53ef\u4ee5\u88ab\u7528\u4e8e\u57fa\u672c\u7c7b\u578b\uff1av := new(int)\u3002make(T) \u8fd4\u56de\u7c7b\u578b T \u7684\u521d\u59cb\u5316\u4e4b\u540e\u7684\u503c new() \u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u4e0d\u8981\u5fd8\u8bb0\u5b83\u7684\u62ec\u53f7"),(0,o.kt)("li",{parentName:"ul"},"copy\u3001append  \u7528\u4e8e\u590d\u5236\u548c\u8fde\u63a5\u5207\u7247"),(0,o.kt)("li",{parentName:"ul"},"panic\u3001recover \u4e24\u8005\u5747\u7528\u4e8e\u9519\u8bef\u5904\u7406\u673a\u5236"),(0,o.kt)("li",{parentName:"ul"},"print\u3001println \u5e95\u5c42\u6253\u5370\u51fd\u6570\uff0c\u5728\u90e8\u7f72\u73af\u5883\u4e2d\u5efa\u8bae\u4f7f\u7528 fmt \u5305"),(0,o.kt)("li",{parentName:"ul"},"complex\u3001real imag  \u7528\u4e8e\u521b\u5efa\u548c\u64cd\u4f5c\u590d\u6570")),(0,o.kt)("h2",{id:"\u4f20\u9012\u53d8\u957f\u53c2\u6570"},"\u4f20\u9012\u53d8\u957f\u53c2\u6570"),(0,o.kt)("p",null,"\u5982\u679c\u51fd\u6570\u7684\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u662f\u91c7\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"...type")," \u7684\u5f62\u5f0f\uff0c\u90a3\u4e48\u8fd9\u4e2a\u51fd\u6570\u5c31\u53ef\u4ee5\u5904\u7406\u4e00\u4e2a\u53d8\u957f\u7684\u53c2\u6570\uff0c\u8fd9\u4e2a\u957f\u5ea6\u53ef\u4ee5\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),"\uff0c\u8fd9\u6837\u7684\u51fd\u6570\u79f0\u4e3a\u53d8\u53c2\u51fd\u6570\u3002"),(0,o.kt)("h2",{id:"defer-\u548c\u8ffd\u8e2a"},"defer \u548c\u8ffd\u8e2a"),(0,o.kt)("p",null,"\u5173\u952e\u5b57 ",(0,o.kt)("inlineCode",{parentName:"p"},"defer")," \u5141\u8bb8\u6211\u4eec\u63a8\u8fdf\u5230\u51fd\u6570\u8fd4\u56de\u4e4b\u524d\uff08\u6216\u4efb\u610f\u4f4d\u7f6e\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"return")," \u8bed\u53e5\u4e4b\u540e\uff09\u4e00\u523b\u624d\u6267\u884c\u67d0\u4e2a\u8bed\u53e5\u6216\u51fd\u6570\uff08\u4e3a\u4ec0\u4e48\u8981\u5728\u8fd4\u56de\u4e4b\u540e\u624d\u6267\u884c\u8fd9\u4e9b\u8bed\u53e5\uff1f\u56e0\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"return")," \u8bed\u53e5\u540c\u6837\u53ef\u4ee5\u5305\u542b\u4e00\u4e9b\u64cd\u4f5c\uff0c\u800c\u4e0d\u662f\u5355\u7eaf\u5730\u8fd4\u56de\u67d0\u4e2a\u503c\uff09\u3002"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u5f53\u6709\u591a\u4e2a defer \u884c\u4e3a\u88ab\u6ce8\u518c\u65f6\uff0c\u5b83\u4eec\u4f1a\u4ee5\u9006\u5e8f\u6267\u884c\uff08\u7c7b\u4f3c\u6808\uff0c\u5373\u540e\u8fdb\u5148\u51fa\uff09\uff1a")))}m.isMDXComponent=!0}}]);