"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[25565],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),k=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=k(e.components);return l.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=k(n),d=a,c=m["".concat(p,".").concat(d)]||m[d]||s[d]||r;return n?l.createElement(c,o(o({ref:t},u),{},{components:n})):l.createElement(c,o({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var k=2;k<r;k++)o[k]=n[k];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38312:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return i},metadata:function(){return k},toc:function(){return m}});var l=n(87462),a=n(63366),r=(n(67294),n(3905)),o=["components"],i={tags:["\u9ad8\u5e76\u53d1","\u5e42\u7b49","\u89e3\u51b3\u65b9\u6848"],authors:"ahKevinXy",description:"\u9ad8\u5e76\u53d1\u5e42\u7b49\u89e3\u51b3\u65b9\u6848",hide_table_of_contents:!1,image:"https://www.dmoe.cc/random.php?type=2304052"},p="\u9ad8\u5e76\u53d1\u4e0b\u5982\u4f55\u4fdd\u8bc1\u63a5\u53e3\u7684\u5e42\u7b49\u6027",k={permalink:"/blog/2023/03/05/idempotent",source:"@site/blog/2023/03/05/idempotent.md",title:"\u9ad8\u5e76\u53d1\u4e0b\u5982\u4f55\u4fdd\u8bc1\u63a5\u53e3\u7684\u5e42\u7b49\u6027",description:"\u9ad8\u5e76\u53d1\u5e42\u7b49\u89e3\u51b3\u65b9\u6848",date:"2023-03-05T00:00:00.000Z",formattedDate:"2023\u5e743\u67085\u65e5",tags:[{label:"\u9ad8\u5e76\u53d1",permalink:"/blog/tags/\u9ad8\u5e76\u53d1"},{label:"\u5e42\u7b49",permalink:"/blog/tags/\u5e42\u7b49"},{label:"\u89e3\u51b3\u65b9\u6848",permalink:"/blog/tags/\u89e3\u51b3\u65b9\u6848"}],readingTime:14.81,hasTruncateMarker:!0,authors:[{name:"ahKevinXy",title:"\u4f5c\u8005",url:"https://github.com/ahKevinXy",email:"ahkevinxy@gmail.com",imageURL:"/img/headers.png",key:"ahKevinXy"}],frontMatter:{tags:["\u9ad8\u5e76\u53d1","\u5e42\u7b49","\u89e3\u51b3\u65b9\u6848"],authors:"ahKevinXy",description:"\u9ad8\u5e76\u53d1\u5e42\u7b49\u89e3\u51b3\u65b9\u6848",hide_table_of_contents:!1,image:"https://www.dmoe.cc/random.php?type=2304052"},prevItem:{title:"\u6e90\u7801 \u4e0a\u89e3\u8bfb GMP\u6a21\u578b",permalink:"/blog/2023/03/06/go_gmp"},nextItem:{title:"\u5982\u4f55\u4f18\u96c5\u7684\u63a5\u53e3",permalink:"/blog/2023/03/05/index"}},u={authorsImageUrls:[void 0]},m=[{value:"insert\u524d\u5148select",id:"insert\u524d\u5148select",level:2},{value:"\u52a0\u60b2\u89c2\u9501",id:"\u52a0\u60b2\u89c2\u9501",level:2},{value:"\u52a0\u4e50\u89c2\u9501",id:"\u52a0\u4e50\u89c2\u9501",level:2},{value:"\u52a0\u552f\u4e00\u7d22\u5f15",id:"\u52a0\u552f\u4e00\u7d22\u5f15",level:2},{value:"\u5efa\u9632\u91cd\u8868",id:"\u5efa\u9632\u91cd\u8868",level:2},{value:"\u6839\u636e\u72b6\u6001\u673a",id:"\u6839\u636e\u72b6\u6001\u673a",level:2},{value:"\u52a0\u5206\u5e03\u5f0f\u9501",id:"\u52a0\u5206\u5e03\u5f0f\u9501",level:2},{value:"\u83b7\u53d6token",id:"\u83b7\u53d6token",level:2}],s={toc:m},d="wrapper";function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)(d,(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s?__biz=MzkwNjMwMTgzMQ==&mid=2247490307&idx=1&sn=b9eeb427c33cb171da6c3f11243a88f4&chksm=c0ebc3ebf79c4afd0d5a1851a975534b672d86c531d28c5933013140173e794f5f53e78a6765&token=751314179&lang=zh_CN&scene=21#wechat_redirect"},"from")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"\u63a5\u53e3\u5e42\u7b49\u6027"),"\u95ee\u9898\uff0c\u5bf9\u4e8e\u5f00\u53d1\u4eba\u5458\u6765\u8bf4\uff0c\u662f\u4e00\u4e2a\u8ddf\u8bed\u8a00\u65e0\u5173\u7684\u516c\u5171\u95ee\u9898\u3002\u672c\u6587\u5206\u4eab\u4e86\u4e00\u4e9b\u89e3\u51b3\u8fd9\u7c7b\u95ee\u9898\u975e\u5e38\u5b9e\u7528\u7684\u529e\u6cd5\uff0c\u7edd\u5927\u90e8\u5206\u5185\u5bb9\u6211\u5728\u9879\u76ee\u4e2d\u5b9e\u8df5\u8fc7\u7684\uff0c\u7ed9\u6709\u9700\u8981\u7684\u5c0f\u4f19\u4f34\u4e00\u4e2a\u53c2\u8003"),(0,r.kt)("p",null,"\u573a\u666f"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6709\u65f6\u6211\u4eec\u5728\u586b\u5199\u67d0\u4e9bform\u8868\u5355\u65f6\uff0c\u4fdd\u5b58\u6309\u94ae\u4e0d\u5c0f\u5fc3\u5feb\u901f\u70b9\u4e86\u4e24\u6b21\uff0c\u8868\u4e2d\u7adf\u7136\u4ea7\u751f\u4e86\u4e24\u6761\u91cd\u590d\u7684\u6570\u636e\uff0c\u53ea\u662fid\u4e0d\u4e00\u6837"),(0,r.kt)("li",{parentName:"ol"},"\u6211\u4eec\u5728\u9879\u76ee\u4e2d\u4e3a\u4e86\u89e3\u51b3",(0,r.kt)("inlineCode",{parentName:"li"},"\u63a5\u53e3\u8d85\u65f6"),"\u95ee\u9898\uff0c\u901a\u5e38\u4f1a\u5f15\u5165\u4e86\u91cd\u8bd5\u673a\u5236\u3002\u7b2c\u4e00\u6b21\u8bf7\u6c42",(0,r.kt)("inlineCode",{parentName:"li"},"\u63a5\u53e3\u8d85\u65f6"),"\u4e86\uff0c\u8bf7\u6c42\u65b9\u6ca1\u80fd\u53ca\u65f6\u83b7\u53d6\u8fd4\u56de\u7ed3\u679c\uff08\u6b64\u65f6\u6709\u53ef\u80fd\u5df2\u7ecf\u6210\u529f\u4e86\uff09\uff0c\u4e3a\u4e86\u907f\u514d\u8fd4\u56de\u9519\u8bef\u7684\u7ed3\u679c\uff08\u8fd9\u79cd\u60c5\u51b5\u4e0d\u53ef\u80fd\u76f4\u63a5\u8fd4\u56de\u5931\u8d25\u5427\uff1f\uff09\uff0c\u4e8e\u662f\u4f1a\u5bf9\u8be5\u8bf7\u6c42\u91cd\u8bd5\u51e0\u6b21\uff0c\u8fd9\u6837\u4e5f\u4f1a\u4ea7\u751f\u91cd\u590d\u7684\u6570\u636e\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"mq"),"\u6d88\u8d39\u8005\u5728\u8bfb\u53d6\u6d88\u606f\u65f6\uff0c\u6709\u65f6\u5019\u4f1a\u8bfb\u53d6\u5230\u91cd\u590d\u6d88\u606f\uff0c\u5982\u679c\u5904\u7406\u4e0d\u597d\uff0c\u4e5f\u4f1a\u4ea7\u751f\u91cd\u590d\u7684\u6570\u636e\u3002")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"\u63a5\u53e3\u5e42\u7b49\u6027"),"\u662f\u6307\u7528\u6237\u5bf9\u4e8e\u540c\u4e00\u64cd\u4f5c\u53d1\u8d77\u7684\u4e00\u6b21\u8bf7\u6c42\u6216\u8005\u591a\u6b21\u8bf7\u6c42\u7684\u7ed3\u679c\u662f\u4e00\u81f4\u7684\uff0c\u4e0d\u4f1a\u56e0\u4e3a\u591a\u6b21\u70b9\u51fb\u800c\u4ea7\u751f\u4e86\u526f\u4f5c\u7528\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"insert\u64cd\u4f5c\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\u591a\u6b21\u8bf7\u6c42\uff0c\u53ef\u80fd\u4f1a\u4ea7\u751f\u91cd\u590d\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"update\u64cd\u4f5c\uff0c\u5982\u679c\u53ea\u662f\u5355\u7eaf\u7684\u66f4\u65b0\u6570\u636e\uff0c\u6bd4\u5982\uff1aupdate user set status=1 where id=1\uff0c\u662f\u6ca1\u6709\u95ee\u9898\u7684\u3002\u5982\u679c\u8fd8\u6709\u8ba1\u7b97\uff0c\u6bd4\u5982\uff1aupdate user set status=status+1 where id=1\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\u591a\u6b21\u8bf7\u6c42\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6570\u636e\u9519\u8bef")),(0,r.kt)("h2",{id:"insert\u524d\u5148select"},"insert\u524d\u5148select"),(0,r.kt)("p",null,"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u5728\u4fdd\u5b58\u6570\u636e\u7684\u63a5\u53e3\u4e2d\uff0c\u6211\u4eec\u4e3a\u4e86\u9632\u6b62\u4ea7\u751f\u91cd\u590d\u6570\u636e\uff0c\u4e00\u822c\u4f1a\u5728insert\u524d\uff0c\u5148\u6839\u636ename\u6216code\u5b57\u6bb5select\u4e00\u4e0b\u6570\u636e\u3002\u5982\u679c\u8be5\u6570\u636e\u5df2\u5b58\u5728\uff0c\u5219\u6267\u884cupdate\u64cd\u4f5c\uff0c\u5982\u679c\u4e0d\u5b58\u5728\uff0c\u624d\u6267\u884c  insert\u64cd\u4f5c\u3002"),(0,r.kt)("h2",{id:"\u52a0\u60b2\u89c2\u9501"},"\u52a0\u60b2\u89c2\u9501"),(0,r.kt)("p",null,"\u5728\u652f\u4ed8\u573a\u666f\u4e2d\uff0c\u7528\u6237A\u7684\u8d26\u53f7\u4f59\u989d\u6709150\u5143\uff0c\u60f3\u8f6c\u51fa100\u5143\uff0c\u6b63\u5e38\u60c5\u51b5\u4e0b\u7528\u6237A\u7684\u4f59\u989d\u53ea\u526950\u5143\u3002\u4e00\u822c\u60c5\u51b5\u4e0b\uff0csql\u662f\u8fd9\u6837\u7684\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"update user amount = amount-100 where id=123;\n\n")),(0,r.kt)("p",null,"\u5982\u679c\u51fa\u73b0\u591a\u6b21\u76f8\u540c\u7684\u8bf7\u6c42\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u7528\u6237A\u7684\u4f59\u989d\u53d8\u6210\u8d1f\u6570\u3002\u8fd9\u79cd\u60c5\u51b5\uff0c\u7528\u6237A\u6765\u53ef\u80fd\u8981\u54ed\u4e86\u3002\u4e8e\u6b64\u540c\u65f6\uff0c\u7cfb\u7edf\u5f00\u53d1\u4eba\u5458\u53ef\u80fd\u4e5f\u8981\u54ed\u4e86\uff0c\u56e0\u4e3a\u8fd9\u662f\u5f88\u4e25\u91cd\u7684\u7cfb\u7edfbug\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u53ef\u4ee5\u52a0\u60b2\u89c2\u9501\uff0c\u5c06\u7528\u6237A\u7684\u90a3\u884c\u6570\u636e\u9501\u4f4f\uff0c\u5728\u540c\u4e00\u65f6\u523b\u53ea\u5141\u8bb8\u4e00\u4e2a\u8bf7\u6c42\u83b7\u5f97\u9501\uff0c\u66f4\u65b0\u6570\u636e\uff0c\u5176\u4ed6\u7684\u8bf7\u6c42\u5219\u7b49\u5f85\u3002"),(0,r.kt)("p",null,"\u901a\u5e38\u60c5\u51b5\u4e0b\u901a\u8fc7\u5982\u4e0bsql\u9501\u4f4f\u5355\u884c\u6570\u636e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from user id=123 for update;\n\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u591a\u4e2a\u8bf7\u6c42\u540c\u65f6\u6839\u636eid\u67e5\u8be2\u7528\u6237\u4fe1\u606f"),(0,r.kt)("li",{parentName:"ol"},"\u5224\u65ad\u4f59\u989d\u662f\u5426\u4e0d\u8db3100\uff0c\u5982\u679c\u4f59\u989d\u4e0d\u8db3\uff0c\u5219\u76f4\u63a5\u8fd4\u56de\u4f59\u989d\u4e0d\u8db3\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f59\u989d\u5145\u8db3\uff0c\u5219\u901a\u8fc7for update\u518d\u6b21\u67e5\u8be2\u7528\u6237\u4fe1\u606f\uff0c\u5e76\u4e14\u5c1d\u8bd5\u83b7\u53d6\u9501"),(0,r.kt)("li",{parentName:"ol"},"\u53ea\u6709\u7b2c\u4e00\u4e2a\u8bf7\u6c42\u80fd\u83b7\u53d6\u5230\u884c\u9501\uff0c\u5176\u4f59\u6ca1\u6709\u83b7\u53d6\u9501\u7684\u8bf7\u6c42\uff0c\u5219\u7b49\u5f85\u4e0b\u4e00\u6b21\u83b7\u53d6\u9501\u7684\u673a\u4f1a"),(0,r.kt)("li",{parentName:"ol"},"\u7b2c\u4e00\u4e2a\u8bf7\u6c42\u83b7\u53d6\u5230\u9501\u4e4b\u540e\uff0c\u5224\u65ad\u4f59\u989d\u662f\u5426\u4e0d\u8db3100\uff0c\u5982\u679c\u4f59\u989d\u8db3\u591f\uff0c\u5219\u8fdb\u884cupdate\u64cd\u4f5c\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f59\u989d\u4e0d\u8db3\uff0c\u8bf4\u660e\u662f\u91cd\u590d\u8bf7\u6c42\uff0c\u5219\u76f4\u63a5\u8fd4\u56de\u6210\u529f\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u9700\u8981\u7279\u522b\u6ce8\u610f\u7684\u662f\uff1a\u5982\u679c\u4f7f\u7528\u7684\u662fmysql\u6570\u636e\u5e93\uff0c\u5b58\u50a8\u5f15\u64ce\u5fc5\u987b\u7528innodb\uff0c\u56e0\u4e3a\u5b83\u624d\u652f\u6301\u4e8b\u52a1\u3002\u6b64\u5916\uff0c\u8fd9\u91ccid\u5b57\u6bb5\u4e00\u5b9a\u8981\u662f\u4e3b\u952e\u6216\u8005\u552f\u4e00\u7d22\u5f15\uff0c\u4e0d\u7136\u4f1a\u9501\u4f4f\u6574\u5f20\u8868\u3002")),(0,r.kt)("p",null,"\u60b2\u89c2\u9501\u9700\u8981\u5728\u540c\u4e00\u4e2a\u4e8b\u52a1\u64cd\u4f5c\u8fc7\u7a0b\u4e2d\u9501\u4f4f\u4e00\u884c\u6570\u636e\uff0c\u5982\u679c\u4e8b\u52a1\u8017\u65f6\u6bd4\u8f83\u957f\uff0c\u4f1a\u9020\u6210\u5927\u91cf\u7684\u8bf7\u6c42\u7b49\u5f85\uff0c\u5f71\u54cd\u63a5\u53e3\u6027\u80fd\u3002"),(0,r.kt)("p",null,"\u6bcf\u6b21\u8bf7\u6c42\u63a5\u53e3\u5f88\u96be\u4fdd\u8bc1\u90fd\u6709\u76f8\u540c\u7684\u8fd4\u56de\u503c\uff0c\u6240\u4ee5\u4e0d\u9002\u5408\u5e42\u7b49\u6027\u8bbe\u8ba1\u573a\u666f\uff0c\u4f46\u662f\u5728\u9632\u91cd\u573a\u666f\u4e2d\u662f\u53ef\u4ee5\u7684\u4f7f\u7528\u7684\u3002"),(0,r.kt)("p",null,"\u5728\u8fd9\u91cc\u987a\u4fbf\u8bf4\u4e00\u4e0b\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"\u9632\u91cd\u8bbe\u8ba1")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"\u5e42\u7b49\u8bbe\u8ba1"),"\uff0c\u5176\u5b9e\u662f\u6709\u533a\u522b\u7684\u3002\u9632\u91cd\u8bbe\u8ba1\u4e3b\u8981\u4e3a\u4e86\u907f\u514d\u4ea7\u751f\u91cd\u590d\u6570\u636e\uff0c\u5bf9\u63a5\u53e3\u8fd4\u56de\u6ca1\u6709\u592a\u591a\u8981\u6c42\u3002\u800c\u5e42\u7b49\u8bbe\u8ba1\u9664\u4e86\u907f\u514d\u4ea7\u751f\u91cd\u590d\u6570\u636e\u4e4b\u5916\uff0c\u8fd8\u8981\u6c42\u6bcf\u6b21\u8bf7\u6c42\u90fd\u8fd4\u56de\u4e00\u6837\u7684\u7ed3\u679c\u3002"),(0,r.kt)("h2",{id:"\u52a0\u4e50\u89c2\u9501"},"\u52a0\u4e50\u89c2\u9501"),(0,r.kt)("p",null,"\u65e2\u7136\u60b2\u89c2\u9501\u6709\u6027\u80fd\u95ee\u9898\uff0c\u4e3a\u4e86\u63d0\u5347\u63a5\u53e3\u6027\u80fd\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4e50\u89c2\u9501\u3002\u9700\u8981\u5728\u8868\u4e2d\u589e\u52a0\u4e00\u4e2atimestamp\u6216\u8005version\u5b57\u6bb5\uff0c\u8fd9\u91cc\u4ee5version\u5b57\u6bb5\u4e3a\u4f8b\u3002"),(0,r.kt)("p",null,"\u5728\u66f4\u65b0\u6570\u636e\u4e4b\u524d\u5148\u67e5\u8be2\u4e00\u4e0b\u6570\u636e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select id,amount,version from user id=123;\n\n")),(0,r.kt)("p",null,"\u5982\u679c\u6570\u636e\u5b58\u5728\uff0c\u5047\u8bbe\u67e5\u5230\u7684version\u7b49\u4e8e1\uff0c\u518d\u4f7f\u7528id\u548cversion\u5b57\u6bb5\u4f5c\u4e3a\u67e5\u8be2\u6761\u4ef6\u66f4\u65b0\u6570\u636e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"update user set amount=amount+100,version=version+1\nwhere id=123 and version=1;\n\n")),(0,r.kt)("p",null,"\u66f4\u65b0\u6570\u636e\u7684\u540c\u65f6version+1\uff0c\u7136\u540e\u5224\u65ad\u672c\u6b21update\u64cd\u4f5c\u7684\u5f71\u54cd\u884c\u6570\uff0c\u5982\u679c\u5927\u4e8e0\uff0c\u5219\u8bf4\u660e\u672c\u6b21\u66f4\u65b0\u6210\u529f\uff0c\u5982\u679c\u7b49\u4e8e0\uff0c\u5219\u8bf4\u660e\u672c\u6b21\u66f4\u65b0\u6ca1\u6709\u8ba9\u6570\u636e\u53d8\u66f4\u3002"),(0,r.kt)("p",null,"\u7531\u4e8e\u7b2c\u4e00\u6b21\u8bf7\u6c42version\u7b49\u4e8e1\u662f\u53ef\u4ee5\u6210\u529f\u7684\uff0c\u64cd\u4f5c\u6210\u529f\u540eversion\u53d8\u62102\u4e86\u3002\u8fd9\u65f6\u5982\u679c\u5e76\u53d1\u7684\u8bf7\u6c42\u8fc7\u6765\uff0c\u518d\u6267\u884c\u76f8\u540c\u7684sql\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"update user set amount=amount+100,version=version+1\nwhere id=123 and version=1;\n")),(0,r.kt)("p",null,"\u8be5update\u64cd\u4f5c\u4e0d\u4f1a\u771f\u6b63\u66f4\u65b0\u6570\u636e\uff0c\u6700\u7ec8sql\u7684\u6267\u884c\u7ed3\u679c\u5f71\u54cd\u884c\u6570\u662f0\uff0c\u56e0\u4e3aversion\u5df2\u7ecf\u53d8\u62102\u4e86\uff0cwhere\u4e2d\u7684version=1\u80af\u5b9a\u65e0\u6cd5\u6ee1\u8db3\u6761\u4ef6\u3002\u4f46\u4e3a\u4e86\u4fdd\u8bc1\u63a5\u53e3\u5e42\u7b49\u6027\uff0c\u63a5\u53e3\u53ef\u4ee5\u76f4\u63a5\u8fd4\u56de\u6210\u529f\uff0c\u56e0\u4e3aversion\u503c\u5df2\u7ecf\u4fee\u6539\u4e86\uff0c\u90a3\u4e48\u524d\u9762\u5fc5\u5b9a\u5df2\u7ecf\u6210\u529f\u8fc7\u4e00\u6b21\uff0c\u540e\u9762\u90fd\u662f\u91cd\u590d\u7684\u8bf7\u6c42\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5148\u6839\u636eid\u67e5\u8be2\u7528\u6237\u4fe1\u606f\uff0c\u5305\u542bversion\u5b57\u6bb5"),(0,r.kt)("li",{parentName:"ol"},"\u6839\u636eid\u548cversion\u5b57\u6bb5\u503c\u4f5c\u4e3awhere\u6761\u4ef6\u7684\u53c2\u6570\uff0c\u66f4\u65b0\u7528\u6237\u4fe1\u606f\uff0c\u540c\u65f6version+1"),(0,r.kt)("li",{parentName:"ol"},"\u5224\u65ad\u64cd\u4f5c\u5f71\u54cd\u884c\u6570\uff0c\u5982\u679c\u5f71\u54cd1\u884c\uff0c\u5219\u8bf4\u660e\u662f\u4e00\u6b21\u8bf7\u6c42\uff0c\u53ef\u4ee5\u505a\u5176\u4ed6\u6570\u636e\u64cd\u4f5c"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u5f71\u54cd0\u884c\uff0c\u8bf4\u660e\u662f\u91cd\u590d\u8bf7\u6c42\uff0c\u5219\u76f4\u63a5\u8fd4\u56de\u6210\u529f")),(0,r.kt)("h2",{id:"\u52a0\u552f\u4e00\u7d22\u5f15"},"\u52a0\u552f\u4e00\u7d22\u5f15"),(0,r.kt)("p",null,"\u7edd\u5927\u6570\u60c5\u51b5\u4e0b\uff0c\u4e3a\u4e86\u9632\u6b62\u91cd\u590d\u6570\u636e\u7684\u4ea7\u751f\uff0c\u6211\u4eec\u90fd\u4f1a\u5728\u8868\u4e2d\u52a0\u552f\u4e00\u7d22\u5f15\uff0c\u8fd9\u662f\u4e00\u4e2a\u975e\u5e38\u7b80\u5355\uff0c\u5e76\u4e14\u6709\u6548\u7684\u65b9\u6848\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"alter table `order` add UNIQUE KEY `un_code` (`code`);\n")),(0,r.kt)("p",null,"\u52a0\u4e86\u552f\u4e00\u7d22\u5f15\u4e4b\u540e\uff0c\u7b2c\u4e00\u6b21\u8bf7\u6c42\u6570\u636e\u53ef\u4ee5\u63d2\u5165\u6210\u529f\u3002\u4f46\u540e\u9762\u7684\u76f8\u540c\u8bf7\u6c42\uff0c\u63d2\u5165\u6570\u636e\u65f6\u4f1a\u62a5",(0,r.kt)("inlineCode",{parentName:"p"},"Duplicate entry '002' for key 'order.un_code"),"\u5f02\u5e38\uff0c\u8868\u793a\u552f\u4e00\u7d22\u5f15\u6709\u51b2\u7a81\u3002"),(0,r.kt)("p",null,"\u867d\u8bf4\u629b\u5f02\u5e38\u5bf9\u6570\u636e\u6765\u8bf4\u6ca1\u6709\u5f71\u54cd\uff0c\u4e0d\u4f1a\u9020\u6210\u9519\u8bef\u6570\u636e\u3002\u4f46\u662f\u4e3a\u4e86\u4fdd\u8bc1\u63a5\u53e3\u5e42\u7b49\u6027\uff0c\u6211\u4eec\u9700\u8981\u5bf9\u8be5\u5f02\u5e38\u8fdb\u884c\u6355\u83b7\uff0c\u7136\u540e\u8fd4\u56de\u6210\u529f\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u7528\u6237\u901a\u8fc7\u6d4f\u89c8\u5668\u53d1\u8d77\u8bf7\u6c42\uff0c\u670d\u52a1\u7aef\u6536\u96c6\u6570\u636e\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5c06\u8be5\u6570\u636e\u63d2\u5165mysql"),(0,r.kt)("li",{parentName:"ol"},"\u5224\u65ad\u662f\u5426\u6267\u884c\u6210\u529f\uff0c\u5982\u679c\u6210\u529f\uff0c\u5219\u64cd\u4f5c\u5176\u4ed6\u6570\u636e\uff08\u53ef\u80fd\u8fd8\u6709\u5176\u4ed6\u7684\u4e1a\u52a1\u903b\u8f91\uff09\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u6267\u884c\u5931\u8d25\uff0c\u6355\u83b7\u552f\u4e00\u7d22\u5f15\u51b2\u7a81\u5f02\u5e38\uff0c\u76f4\u63a5\u8fd4\u56de\u6210\u529f\u3002")),(0,r.kt)("h2",{id:"\u5efa\u9632\u91cd\u8868"},"\u5efa\u9632\u91cd\u8868"),(0,r.kt)("p",null,"\u6709\u65f6\u5019\u8868\u4e2d\u5e76\u975e\u6240\u6709\u7684\u573a\u666f\u90fd\u4e0d\u5141\u8bb8\u4ea7\u751f\u91cd\u590d\u7684\u6570\u636e\uff0c\u53ea\u6709\u67d0\u4e9b\u7279\u5b9a\u573a\u666f\u624d\u4e0d\u5141\u8bb8\u3002\u8fd9\u65f6\u5019\uff0c\u76f4\u63a5\u5728\u8868\u4e2d\u52a0\u552f\u4e00\u7d22\u5f15\uff0c\u663e\u7136\u662f\u4e0d\u592a\u5408\u9002\u7684\u3002\n\u9488\u5bf9\u8fd9\u79cd\u60c5\u51b5\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"\u5efa\u9632\u91cd\u8868"),"\u6765\u89e3\u51b3\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u8be5\u8868\u53ef\u4ee5\u53ea\u5305\u542b\u4e24\u4e2a\u5b57\u6bb5\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"id")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"\u552f\u4e00\u7d22\u5f15"),"\uff0c\u552f\u4e00\u7d22\u5f15\u53ef\u4ee5\u662f\u591a\u4e2a\u5b57\u6bb5\u6bd4\u5982\uff1aname\u3001code\u7b49\u7ec4\u5408\u8d77\u6765\u7684\u552f\u4e00\u6807\u8bc6\uff0c\u4f8b\u5982\uff1asusan_0001\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u7528\u6237\u901a\u8fc7\u6d4f\u89c8\u5668\u53d1\u8d77\u8bf7\u6c42\uff0c\u670d\u52a1\u7aef\u6536\u96c6\u6570\u636e\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5c06\u8be5\u6570\u636e\u63d2\u5165mysql\u9632\u91cd\u8868"),(0,r.kt)("li",{parentName:"ol"},"\u5224\u65ad\u662f\u5426\u6267\u884c\u6210\u529f\uff0c\u5982\u679c\u6210\u529f\uff0c\u5219\u505amysql\u5176\u4ed6\u7684\u6570\u636e\u64cd\u4f5c\uff08\u53ef\u80fd\u8fd8\u6709\u5176\u4ed6\u7684\u4e1a\u52a1\u903b\u8f91\uff09\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u6267\u884c\u5931\u8d25\uff0c\u6355\u83b7\u552f\u4e00\u7d22\u5f15\u51b2\u7a81\u5f02\u5e38\uff0c\u76f4\u63a5\u8fd4\u56de\u6210\u529f\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u9700\u8981\u7279\u522b\u6ce8\u610f\u7684\u662f\uff1a\u9632\u91cd\u8868\u548c\u4e1a\u52a1\u8868\u5fc5\u987b\u5728\u540c\u4e00\u4e2a\u6570\u636e\u5e93\u4e2d\uff0c\u5e76\u4e14\u64cd\u4f5c\u8981\u5728\u540c\u4e00\u4e2a\u4e8b\u52a1\u4e2d\u3002")),(0,r.kt)("h2",{id:"\u6839\u636e\u72b6\u6001\u673a"},"\u6839\u636e\u72b6\u6001\u673a"),(0,r.kt)("p",null,"\u5f88\u591a\u65f6\u5019\u4e1a\u52a1\u8868\u662f\u6709\u72b6\u6001\u7684\uff0c\u6bd4\u5982\u8ba2\u5355\u8868\u4e2d\u6709\uff1a1-\u4e0b\u5355\u30012-\u5df2\u652f\u4ed8\u30013-\u5b8c\u6210\u30014-\u64a4\u9500\u7b49\u72b6\u6001\u3002\u5982\u679c\u8fd9\u4e9b\u72b6\u6001\u7684\u503c\u662f\u6709\u89c4\u5f8b\u7684\uff0c\u6309\u7167\u4e1a\u52a1\u8282\u70b9\u6b63\u597d\u662f\u4ece\u5c0f\u5230\u5927\uff0c\u6211\u4eec\u5c31\u80fd\u901a\u8fc7\u5b83\u6765\u4fdd\u8bc1\u63a5\u53e3\u7684\u5e42\u7b49\u6027\u3002"),(0,r.kt)("p",null,"\u5047\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"id=123"),"\u7684\u8ba2\u5355\u72b6\u6001\u662f\u5df2\u652f\u4ed8\uff0c\u73b0\u5728\u8981\u53d8\u6210\u5b8c\u6210\u72b6\u6001\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"update `order` set status=3 where id=123 and status=2;\n")),(0,r.kt)("p",null,"\u7b2c\u4e00\u6b21\u8bf7\u6c42\u65f6\uff0c\u8be5\u8ba2\u5355\u7684\u72b6\u6001\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"\u5df2\u652f\u4ed8"),"\uff0c\u503c\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"2"),"\uff0c\u6240\u4ee5\u8be5",(0,r.kt)("inlineCode",{parentName:"p"},"update"),"\u8bed\u53e5\u53ef\u4ee5\u6b63\u5e38\u66f4\u65b0\u6570\u636e\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"sql"),"\u6267\u884c\u7ed3\u679c\u7684\u5f71\u54cd\u884c\u6570\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"\uff0c\u8ba2\u5355\u72b6\u6001\u53d8\u6210\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"3"),"\u3002"),(0,r.kt)("p",null,"\u540e\u9762\u6709\u76f8\u540c\u7684\u8bf7\u6c42\u8fc7\u6765\uff0c\u518d\u6267\u884c\u76f8\u540c\u7684sql\u65f6\uff0c\u7531\u4e8e\u8ba2\u5355\u72b6\u6001\u53d8\u6210\u4e863\uff0c\u518d\u7528status=2\u4f5c\u4e3a\u6761\u4ef6\uff0c\u65e0\u6cd5\u67e5\u8be2\u51fa\u9700\u8981\u66f4\u65b0\u7684\u6570\u636e\uff0c\u6240\u4ee5\u6700\u7ec8sql\u6267\u884c\u7ed3\u679c\u7684\u5f71\u54cd\u884c\u6570\u662f0\uff0c\u5373\u4e0d\u4f1a\u771f\u6b63\u7684\u66f4\u65b0\u6570\u636e\u3002\u4f46\u4e3a\u4e86\u4fdd\u8bc1\u63a5\u53e3\u5e42\u7b49\u6027\uff0c\u5f71\u54cd\u884c\u6570\u662f0\u65f6\uff0c\u63a5\u53e3\u4e5f\u53ef\u4ee5\u76f4\u63a5\u8fd4\u56de\u6210\u529f\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u7528\u6237\u901a\u8fc7\u6d4f\u89c8\u5668\u53d1\u8d77\u8bf7\u6c42\uff0c\u670d\u52a1\u7aef\u6536\u96c6\u6570\u636e\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6839\u636eid\u548c\u5f53\u524d\u72b6\u6001\u4f5c\u4e3a\u6761\u4ef6\uff0c\u66f4\u65b0\u6210\u4e0b\u4e00\u4e2a\u72b6\u6001"),(0,r.kt)("li",{parentName:"ol"},"\u5224\u65ad\u64cd\u4f5c\u5f71\u54cd\u884c\u6570\uff0c\u5982\u679c\u5f71\u54cd\u4e861\u884c\uff0c\u8bf4\u660e\u5f53\u524d\u64cd\u4f5c\u6210\u529f\uff0c\u53ef\u4ee5\u8fdb\u884c\u5176\u4ed6\u6570\u636e\u64cd\u4f5c\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u5f71\u54cd\u4e860\u884c\uff0c\u8bf4\u660e\u662f\u91cd\u590d\u8bf7\u6c42\uff0c\u76f4\u63a5\u8fd4\u56de\u6210\u529f\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e3b\u8981\u7279\u522b\u6ce8\u610f\u7684\u662f\uff0c\u8be5\u65b9\u6848\u4ec5\u9650\u4e8e\u8981\u66f4\u65b0\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"\u8868\u6709\u72b6\u6001\u5b57\u6bb5"),"\uff0c\u5e76\u4e14\u521a\u597d\u8981\u66f4\u65b0",(0,r.kt)("inlineCode",{parentName:"p"},"\u72b6\u6001\u5b57\u6bb5"),"\u7684\u8fd9\u79cd\u7279\u6b8a\u60c5\u51b5\uff0c\u5e76\u975e\u6240\u6709\u573a\u666f\u90fd\u9002\u7528\u3002")),(0,r.kt)("h2",{id:"\u52a0\u5206\u5e03\u5f0f\u9501"},"\u52a0\u5206\u5e03\u5f0f\u9501"),(0,r.kt)("p",null,"\u5176\u5b9e\u524d\u9762\u4ecb\u7ecd\u8fc7\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"\u52a0\u552f\u4e00\u7d22\u5f15"),"\u6216\u8005",(0,r.kt)("inlineCode",{parentName:"p"},"\u52a0\u9632\u91cd\u8868"),"\uff0c\u672c\u8d28\u662f\u4f7f\u7528\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"\u6570\u636e\u5e93"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"\u5206\u5e03\u5f0f\u9501"),"\uff0c\u4e5f\u5c5e\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"\u5206\u5e03\u5f0f\u9501"),"\u7684\u4e00\u79cd\u3002\u4f46\u7531\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"\u6570\u636e\u5e93\u5206\u5e03\u5f0f\u9501"),"\u7684\u6027\u80fd\u4e0d\u592a\u597d\uff0c\u6211\u4eec\u53ef\u4ee5\u6539\u7528\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"redis"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"zookeeper"),"\u3002"),(0,r.kt)("p",null,"\u9274\u4e8e\u73b0\u5728\u5f88\u591a\u516c\u53f8\u5206\u5e03\u5f0f\u914d\u7f6e\u4e2d\u5fc3\u6539\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"apollo"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"nacos"),"\uff0c\u5df2\u7ecf\u5f88\u5c11\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"zookeeper"),"\u4e86\uff0c\u6211\u4eec\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"redis"),"\u4e3a\u4f8b\u4ecb\u7ecd\u5206\u5e03\u5f0f\u9501\u3002"),(0,r.kt)("p",null,"\u76ee\u524d\u4e3b\u8981\u6709\u4e09\u79cd\u65b9\u5f0f\u5b9e\u73b0redis\u7684\u5206\u5e03\u5f0f\u9501\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"setNx\u547d\u4ee4"),(0,r.kt)("li",{parentName:"ol"},"set\u547d\u4ee4"),(0,r.kt)("li",{parentName:"ol"},"Redission\u6846\u67b6")),(0,r.kt)("p",null,"\u5177\u4f53\u6b65\u9aa4\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u7528\u6237\u901a\u8fc7\u6d4f\u89c8\u5668\u53d1\u8d77\u8bf7\u6c42\uff0c\u670d\u52a1\u7aef\u4f1a\u6536\u96c6\u6570\u636e\uff0c\u5e76\u4e14\u751f\u6210\u8ba2\u5355\u53f7code\u4f5c\u4e3a\u552f\u4e00\u4e1a\u52a1\u5b57\u6bb5\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528redis\u7684set\u547d\u4ee4\uff0c\u5c06\u8be5\u8ba2\u5355code\u8bbe\u7f6e\u5230redis\u4e2d\uff0c\u540c\u65f6\u8bbe\u7f6e\u8d85\u65f6\u65f6\u95f4\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5224\u65ad\u662f\u5426\u8bbe\u7f6e\u6210\u529f\uff0c\u5982\u679c\u8bbe\u7f6e\u6210\u529f\uff0c\u8bf4\u660e\u662f\u7b2c\u4e00\u6b21\u8bf7\u6c42\uff0c\u5219\u8fdb\u884c\u6570\u636e\u64cd\u4f5c\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u8bbe\u7f6e\u5931\u8d25\uff0c\u8bf4\u660e\u662f\u91cd\u590d\u8bf7\u6c42\uff0c\u5219\u76f4\u63a5\u8fd4\u56de\u6210\u529f\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u9700\u8981\u7279\u522b\u6ce8\u610f\u7684\u662f\uff1a\u5206\u5e03\u5f0f\u9501\u4e00\u5b9a\u8981\u8bbe\u7f6e\u4e00\u4e2a\u5408\u7406\u7684\u8fc7\u671f\u65f6\u95f4\uff0c\u5982\u679c\u8bbe\u7f6e\u8fc7\u77ed\uff0c\u65e0\u6cd5\u6709\u6548\u7684\u9632\u6b62\u91cd\u590d\u8bf7\u6c42\u3002\u5982\u679c\u8bbe\u7f6e\u8fc7\u957f\uff0c\u53ef\u80fd\u4f1a\u6d6a\u8d39redis\u7684\u5b58\u50a8\u7a7a\u95f4\uff0c\u9700\u8981\u6839\u636e\u5b9e\u9645\u4e1a\u52a1\u60c5\u51b5\u800c\u5b9a\u3002")),(0,r.kt)("h2",{id:"\u83b7\u53d6token"},"\u83b7\u53d6token"),(0,r.kt)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u65b9\u6848\u4e4b\u5916\uff0c\u8fd8\u6709\u6700\u540e\u4e00\u79cd\u4f7f\u7528token\u7684\u65b9\u6848\u3002\u8be5\u65b9\u6848\u8ddf\u4e4b\u524d\u7684\u6240\u6709\u65b9\u6848\u90fd\u6709\u70b9\u4e0d\u4e00\u6837\uff0c\u9700\u8981\u4e24\u6b21\u8bf7\u6c42\u624d\u80fd\u5b8c\u6210\u4e00\u6b21\u4e1a\u52a1\u64cd\u4f5c\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u7b2c\u4e00\u6b21\u8bf7\u6c42\u83b7\u53d6token"),(0,r.kt)("li",{parentName:"ol"},"\u7b2c\u4e8c\u6b21\u8bf7\u6c42\u5e26\u7740\u8fd9\u4e2atoken\uff0c\u5b8c\u6210\u4e1a\u52a1\u64cd\u4f5c\u3002")),(0,r.kt)("p",null,"\u5177\u4f53\u6b65\u9aa4\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u7528\u6237\u8bbf\u95ee\u9875\u9762\u65f6\uff0c\u6d4f\u89c8\u5668\u81ea\u52a8\u53d1\u8d77\u83b7\u53d6token\u8bf7\u6c42\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u670d\u52a1\u7aef\u751f\u6210token\uff0c\u4fdd\u5b58\u5230redis\u4e2d\uff0c\u7136\u540e\u8fd4\u56de\u7ed9\u6d4f\u89c8\u5668\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u7528\u6237\u901a\u8fc7\u6d4f\u89c8\u5668\u53d1\u8d77\u8bf7\u6c42\u65f6\uff0c\u643a\u5e26\u8be5token\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728redis\u4e2d\u67e5\u8be2\u8be5token\u662f\u5426\u5b58\u5728\uff0c\u5982\u679c\u4e0d\u5b58\u5728\uff0c\u8bf4\u660e\u662f\u7b2c\u4e00\u6b21\u8bf7\u6c42\uff0c\u505a\u5219\u540e\u7eed\u7684\u6570\u636e\u64cd\u4f5c\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u5b58\u5728\uff0c\u8bf4\u660e\u662f\u91cd\u590d\u8bf7\u6c42\uff0c\u5219\u76f4\u63a5\u8fd4\u56de\u6210\u529f\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728redis\u4e2dtoken\u4f1a\u5728\u8fc7\u671f\u65f6\u95f4\u4e4b\u540e\uff0c\u88ab\u81ea\u52a8\u5220\u9664\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u9700\u8981\u7279\u522b\u6ce8\u610f\u7684\u662f\uff1atoken\u5fc5\u987b\u662f\u5168\u5c40\u552f\u4e00\u7684\u3002")))}c.isMDXComponent=!0}}]);