"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[5444],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=m(n),d=i,s=k["".concat(p,".").concat(d)]||k[d]||c[d]||r;return n?a.createElement(s,l(l({ref:t},u),{},{components:n})):a.createElement(s,l({ref:t},u))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[k]="string"==typeof e?e:i,l[1]=o;for(var m=2;m<r;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85199:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return k}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=["components"],o={},p="\u6807\u51c6\u5e93",m={unversionedId:"backend/go/base/standard",id:"backend/go/base/standard",title:"\u6807\u51c6\u5e93",description:"\u50cf fmt\u3001os \u7b49\u8fd9\u6837\u5177\u6709\u5e38\u7528\u529f\u80fd\u7684\u5185\u7f6e\u5305\u5728 Go \u8bed\u8a00\u4e2d\u6709 150 \u4e2a\u4ee5\u4e0a\uff0c\u5b83\u4eec\u88ab\u79f0\u4e3a\u6807\u51c6\u5e93\uff0c\u5927\u90e8\u5206(\u4e00\u4e9b\u5e95\u5c42\u7684\u9664\u5916)\u5185\u7f6e\u4e8e Go \u672c\u8eab",source:"@site/docs/backend/go/base/standard.md",sourceDirName:"backend/go/base",slug:"/backend/go/base/standard",permalink:"/docs/backend/go/base/standard",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5207\u7247",permalink:"/docs/backend/go/base/slice"},next:{title:"\u5b57\u7b26\u4e32",permalink:"/docs/backend/go/base/string"}},u={},k=[],c={toc:k},d="wrapper";function s(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6807\u51c6\u5e93"},"\u6807\u51c6\u5e93"),(0,r.kt)("p",null,"\u50cf fmt\u3001os \u7b49\u8fd9\u6837\u5177\u6709\u5e38\u7528\u529f\u80fd\u7684\u5185\u7f6e\u5305\u5728 Go \u8bed\u8a00\u4e2d\u6709 150 \u4e2a\u4ee5\u4e0a\uff0c\u5b83\u4eec\u88ab\u79f0\u4e3a\u6807\u51c6\u5e93\uff0c\u5927\u90e8\u5206(\u4e00\u4e9b\u5e95\u5c42\u7684\u9664\u5916)\u5185\u7f6e\u4e8e Go \u672c\u8eab"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unsafe"),": \u5305\u542b\u4e86\u4e00\u4e9b\u6253\u7834 Go \u8bed\u8a00\u201c\u7c7b\u578b\u5b89\u5168\u201d\u7684\u547d\u4ee4\uff0c\u4e00\u822c\u7684\u7a0b\u5e8f\u4e2d\u4e0d\u4f1a\u88ab\u4f7f\u7528\uff0c\u53ef\u7528\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"C/C++")," \u7a0b\u5e8f\u7684\u8c03\u7528\u4e2d\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"syscall"),"-",(0,r.kt)("inlineCode",{parentName:"li"},"os"),"-",(0,r.kt)("inlineCode",{parentName:"li"},"os/exec"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"os"),": \u63d0\u4f9b\u7ed9\u6211\u4eec\u4e00\u4e2a\u5e73\u53f0\u65e0\u5173\u6027\u7684\u64cd\u4f5c\u7cfb\u7edf\u529f\u80fd\u63a5\u53e3\uff0c\u91c7\u7528\u7c7bUnix\u8bbe\u8ba1\uff0c\u9690\u85cf\u4e86\u4e0d\u540c\u64cd\u4f5c\u7cfb\u7edf\u95f4\u5dee\u5f02\uff0c\u8ba9\u4e0d\u540c\u7684\u6587\u4ef6\u7cfb\u7edf\u548c\u64cd\u4f5c\u7cfb\u7edf\u5bf9\u8c61\u8868\u73b0\u4e00\u81f4\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"os/exec"),": \u63d0\u4f9b\u6211\u4eec\u8fd0\u884c\u5916\u90e8\u64cd\u4f5c\u7cfb\u7edf\u547d\u4ee4\u548c\u7a0b\u5e8f\u7684\u65b9\u5f0f"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"syscall"),": \u5e95\u5c42\u7684\u5916\u90e8\u5305\uff0c\u63d0\u4f9b\u4e86\u64cd\u4f5c\u7cfb\u7edf\u5e95\u5c42\u8c03\u7528\u7684\u57fa\u672c\u63a5\u53e3"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"archive/tar")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"/zip-compress"),"\uff1a\u538b\u7f29(\u89e3\u538b\u7f29)\u6587\u4ef6\u529f\u80fd"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fmt"),"-",(0,r.kt)("inlineCode",{parentName:"li"},"io"),"-",(0,r.kt)("inlineCode",{parentName:"li"},"bufio"),"-",(0,r.kt)("inlineCode",{parentName:"li"},"path/filepath"),"-",(0,r.kt)("inlineCode",{parentName:"li"},"flag"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fmt"),": \u63d0\u4f9b\u4e86\u683c\u5f0f\u5316\u8f93\u5165\u8f93\u51fa\u529f\u80fd"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"io"),": \u63d0\u4f9b\u4e86\u57fa\u672c\u8f93\u5165\u8f93\u51fa\u529f\u80fd\uff0c\u5927\u591a\u6570\u662f\u56f4\u7ed5\u7cfb\u7edf\u529f\u80fd\u7684\u5c01\u88c5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bufio"),": \u7f13\u51b2\u8f93\u5165\u8f93\u51fa\u529f\u80fd\u7684\u5c01\u88c5\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path/filepath"),": \u7528\u6765\u64cd\u4f5c\u5728\u5f53\u524d\u7cfb\u7edf\u4e2d\u7684\u76ee\u6807\u6587\u4ef6\u540d\u8def\u5f84"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"flag"),": \u5bf9\u547d\u4ee4\u884c\u53c2\u6570\u7684\u64cd\u4f5c"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"strings"),"-",(0,r.kt)("inlineCode",{parentName:"li"},"strconv"),"-",(0,r.kt)("inlineCode",{parentName:"li"},"unicode"),"-",(0,r.kt)("inlineCode",{parentName:"li"},"regexp"),"-",(0,r.kt)("inlineCode",{parentName:"li"},"bytes"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"strings"),": \u63d0\u4f9b\u5bf9\u5b57\u7b26\u4e32\u7684\u64cd\u4f5c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"strconv"),": \u63d0\u4f9b\u5c06\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u57fa\u7840\u7c7b\u578b\u7684\u529f\u80fd"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unicode"),": \u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"unicode")," \u578b\u7684\u5b57\u7b26\u4e32\u63d0\u4f9b\u7279\u6b8a\u7684\u529f\u80fd"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"regexp"),": \u6b63\u5219\u8868\u8fbe\u5f0f\u529f\u80fd"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bytes"),": \u63d0\u4f9b\u5bf9\u5b57\u7b26\u578b\u5206\u7247\u7684\u64cd\u4f5c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"index/suffixarray"),": \u5b50\u5b57\u7b26\u4e32\u5feb\u901f\u67e5\u8be2\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"math"),"-",(0,r.kt)("inlineCode",{parentName:"li"},"math/cmath"),"-",(0,r.kt)("inlineCode",{parentName:"li"},"math/big"),"-",(0,r.kt)("inlineCode",{parentName:"li"},"math/rand-sort"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"math"),": \u57fa\u672c\u7684\u6570\u5b66\u51fd\u6570"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"math/cmath"),": \u5bf9\u590d\u6570\u7684\u64cd\u4f5c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"math/rand"),": \u4f2a\u968f\u673a\u6570\u751f\u6210\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sort"),": \u4e3a\u6570\u7ec4\u6392\u5e8f\u548c\u81ea\u5b9a\u4e49\u96c6\u5408"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"math/big"),": \u5927\u6570\u7684\u5b9e\u73b0\u548c\u8ba1\u7b97"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"container"),"-",(0,r.kt)("inlineCode",{parentName:"li"},"/list-ring-heap"),": \u5b9e\u73b0\u5bf9\u96c6\u5408\u7684\u64cd\u4f5c\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"list"),": \u53cc\u94fe\u8868\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ring"),": \u73af\u5f62\u94fe\u8868\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"time"),"-",(0,r.kt)("inlineCode",{parentName:"li"},"log"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"time"),": \u65e5\u671f\u548c\u65f6\u95f4\u7684\u57fa\u672c\u64cd\u4f5c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"log"),": \u8bb0\u5f55\u7a0b\u5e8f\u8fd0\u884c\u65f6\u4ea7\u751f\u7684\u65e5\u5fd7,\u6211\u4eec\u5c06\u5728\u540e\u9762\u7684\u7ae0\u8282\u4f7f\u7528\u5b83")))))}s.isMDXComponent=!0}}]);