"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[89558],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=p(n),d=l,s=m["".concat(i,".").concat(d)]||m[d]||k[d]||o;return n?r.createElement(s,a(a({ref:t},c),{},{components:n})):r.createElement(s,a({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:l,a[1]=u;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96136:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return k}});var r=n(87462),l=n(63366),o=(n(67294),n(3905)),a=["components"],u={title:"Go\u8bed\u8a00\u5b9e\u73b0\u5341\u5927\u6392\u5e8f\u7b97\u6cd5",tags:["Go","\u7b97\u6cd5"],authors:"ahKevinXy",description:"Go defer \u8be6\u89e3",keywords:["Go\u8bed\u8a00\u5b9e\u73b0\u5341\u5927\u6392\u5e8f\u7b97\u6cd5","\u6392\u5e8f","\u7b97\u6cd5","go"],date:new Date("2023-03-07T13:09:13.000Z"),image:"https://www.dmoe.cc/random.php?type=2304073"},i="Go\u8bed\u8a00\u5b9e\u73b0\u5341\u5927\u6392\u5e8f\u7b97\u6cd5",p={permalink:"/blog/2023/03/07/sort_go",source:"@site/blog/2023/03/07/sort_go.md",title:"Go\u8bed\u8a00\u5b9e\u73b0\u5341\u5927\u6392\u5e8f\u7b97\u6cd5",description:"Go defer \u8be6\u89e3",date:"2023-03-07T13:09:13.000Z",formattedDate:"2023\u5e743\u67087\u65e5",tags:[{label:"Go",permalink:"/blog/tags/go"},{label:"\u7b97\u6cd5",permalink:"/blog/tags/\u7b97\u6cd5"}],readingTime:5.01,hasTruncateMarker:!0,authors:[{name:"ahKevinXy",title:"\u4f5c\u8005",url:"https://github.com/ahKevinXy",email:"ahkevinxy@gmail.com",imageURL:"/img/headers.png",key:"ahKevinXy"}],frontMatter:{title:"Go\u8bed\u8a00\u5b9e\u73b0\u5341\u5927\u6392\u5e8f\u7b97\u6cd5",tags:["Go","\u7b97\u6cd5"],authors:"ahKevinXy",description:"Go defer \u8be6\u89e3",keywords:["Go\u8bed\u8a00\u5b9e\u73b0\u5341\u5927\u6392\u5e8f\u7b97\u6cd5","\u6392\u5e8f","\u7b97\u6cd5","go"],date:"2023-03-07T13:09:13.000Z",image:"https://www.dmoe.cc/random.php?type=2304073"},prevItem:{title:"Go defer \u8be6\u89e3",permalink:"/blog/2023/03/07/index"},nextItem:{title:"Go\u8bed\u8a00 \u4e09\u5251\u5ba2",permalink:"/blog/2023/03/07/three_tools"}},c={authorsImageUrls:[void 0]},k=[{value:"\u5192\u6ce1\u6392\u5e8f",id:"\u5192\u6ce1\u6392\u5e8f",level:2},{value:"\u9009\u62e9\u6392\u5e8f",id:"\u9009\u62e9\u6392\u5e8f",level:2},{value:"\u63d2\u5165\u6392\u5e8f",id:"\u63d2\u5165\u6392\u5e8f",level:2},{value:"\u5feb\u901f\u6392\u5e8f",id:"\u5feb\u901f\u6392\u5e8f",level:2},{value:"\u5f52\u5e76\u6392\u5e8f",id:"\u5f52\u5e76\u6392\u5e8f",level:2},{value:"\u5806\u6392\u5e8f",id:"\u5806\u6392\u5e8f",level:2},{value:"\u5e0c\u5c14\u6392\u5e8f",id:"\u5e0c\u5c14\u6392\u5e8f",level:2},{value:"\u8ba1\u6570\u6392\u5e8f",id:"\u8ba1\u6570\u6392\u5e8f",level:2},{value:"\u6876\u6392\u5e8f",id:"\u6876\u6392\u5e8f",level:2},{value:"\u57fa\u6570\u6392\u5e8f",id:"\u57fa\u6570\u6392\u5e8f",level:2}],m={toc:k};function d(e){var t=e.components,n=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.dmoe.cc/random.php?type=2304073",alt:"\u968f\u673a\u56fe\u7247"})),(0,o.kt)("h2",{id:"\u5192\u6ce1\u6392\u5e8f"},"\u5192\u6ce1\u6392\u5e8f"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u539f\u7406")),(0,o.kt)("p",null,"\u4ece\u5de6\u5230\u53f3\u904d\u5386\u6570\u7ec4\uff0c\u76f8\u90bb\u5143\u7d20\u4e24\u4e24\u8fdb\u884c\u6bd4\u8f83\u3002\u6bcf\u6b21\u6bd4\u8f83\u5b8c\u4e00\u8f6e\uff0c\u5c31\u4f1a\u627e\u5230\u6570\u7ec4\u4e2d\u6700\u5927\u7684\u4e00\u4e2a\u6216\u6700\u5c0f\u7684\u4e00\u4e2a\u3002\u8fd9\u4e2a\u6570\u5c31\u4f1a\u4ece\u5e8f\u5217\u7684\u6700\u53f3\u8fb9\u5192\u51fa\u6765"),(0,o.kt)("h2",{id:"\u9009\u62e9\u6392\u5e8f"},"\u9009\u62e9\u6392\u5e8f"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u539f\u7406")),(0,o.kt)("p",null,"\u9996\u5148\u5728\u5f00\u59cb\u7684\u65f6\u5019\u904d\u5386\u6574\u4e2a\u6570\u7ec4\uff0c\u627e\u5230\u5e8f\u5217\u4e2d\u7684\u6700\u5c0f\u5143\u7d20\uff0c\u7136\u540e\u5c06\u8fd9\u4e2a\u5143\u7d20\u4e0e\u7b2c\u4e00\u4e2a\u5143\u7d20\u4ea4\u6362\uff0c\u8fd9\u6837\u6700\u5c0f\u7684\u5143\u7d20\u5c31\u653e\u5230\u4e86\u5b83\u7684\u6700\u7ec8\u4f4d\u7f6e\u4e0a\u4e86,\u7136\u540e\uff0c\u4ece\u7b2c\u4e8c\u4e2a\u5143\u7d20\u5f00\u59cb\u904d\u5386\uff0c\u627e\u5230\u5269\u4e0b\u7684n-1\u4e2a\u5143\u7d20\u4e2d\u7684\u6700\u5c0f\u5143\u7d20\uff0c\u518d\u4e0e\u7b2c\u4e8c\u4e2a\u5143\u7d20\u8fdb\u884c\u4ea4\u6362\u3002\u4ee5\u6b64\u7c7b\u63a8\uff0c\u76f4\u5230\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u653e\u5230\u4e86\u6700\u7ec8\u4f4d"),(0,o.kt)("h2",{id:"\u63d2\u5165\u6392\u5e8f"},"\u63d2\u5165\u6392\u5e8f"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u539f\u7406")),(0,o.kt)("p",null,"\u5c06\u4e00\u4e2a\u8bb0\u5f55\u63d2\u5165\u5230\u5df2\u7ecf\u6392\u597d\u5e8f\u7684\u6709\u5e8f\u8868\u4e2d\uff0c\u4ece\u800c\u4e00\u4e2a\u65b0\u7684\u3001\u8bb0\u5f55\u6570\u589e1\u7684\u6709\u5e8f\u8868,\u5728\u5176\u5b9e\u73b0\u8fc7\u7a0b\u4f7f\u7528\u53cc\u5c42\u5faa\u73af\uff0c\u5916\u5c42\u5faa\u73af\u5bf9\u9664\u4e86\u7b2c\u4e00\u4e2a\u5143\u7d20\u4e4b\u5916\u7684\u6240\u6709\u5143\u7d20\uff0c\u5185\u5c42\u5faa\u73af\u5bf9\u5f53\u524d\u5143\u7d20\u524d\u9762\u7684\u6709\u5e8f\u8868\u8fdb\u884c\u5f85\u63d2\u5165\u4f4d\u7f6e\u67e5\u627e\uff0c\u5e76\u8fdb\u884c\u79fb\u52a8"),(0,o.kt)("h2",{id:"\u5feb\u901f\u6392\u5e8f"},"\u5feb\u901f\u6392\u5e8f"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u539f\u7406")),(0,o.kt)("p",null,"\u5feb\u901f\u6392\u5e8f\u8981\u6c42\u6211\u4eec\u9009\u62e9\u4e00\u4e2a\u57fa\u51c6\uff0c\u6839\u636e\u8fd9\u4e2a\u57fa\u51c6\u4e3a\u539f\u6570\u7ec4\u5206\u7ec4\uff0c\u6bd4\u57fa\u51c6\u5927\u7684\u4e00\u7ec4\uff0c\u6bd4\u57fa\u51c6\u5c0f\u7684\u4e00\u7ec4\uff0c\u518d\u91cd\u590d\u9012\u5f52\u5730\u8fdb\u884c\u5feb\u901f\u6392\u5e8f\uff0c\u91cd\u65b0\u5408\u5e76\u6bcf\u7ec4\u6392\u5e8f\u540e\u7684\u5e8f\u5217\uff0c\u5373\u4e3a\u6392\u597d\u5e8f\u7684\u5e8f\u5217"),(0,o.kt)("h2",{id:"\u5f52\u5e76\u6392\u5e8f"},"\u5f52\u5e76\u6392\u5e8f"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u539f\u7406")),(0,o.kt)("p",null,"\u5f52\u5e76\u6392\u5e8f\u662f\u91c7\u7528\u5206\u6cbb\u6cd5\u7684\u4e00\u4e2a\u5178\u578b\u7684\u6392\u5e8f\u7b97\u6cd5\uff0c\u5c06\u5df2\u6709\u5e8f\u7684\u5b50\u5e8f\u5217\u5408\u5e76\u4e3a\u4e00\u4e2a\u5b8c\u5168\u6709\u5e8f\u7684\u5e8f\u5217\u3002"),(0,o.kt)("p",null,"\u5f52\u5e76\u6392\u5e8f\u7684\u8fc7\u7a0b\u662f\uff1a\u9996\u5148\u5c06\u5e8f\u5217\u62c6\u5206\u6210\u5b50\u5e8f\u5217\uff0c\u7136\u540e\u5bf9\u5b50\u5e8f\u5217\u8fdb\u884c\u6392\u5e8f\uff0c\u6700\u540e\u5c06\u6392\u5e8f\u597d\u7684\u5b50\u5e8f\u5217\u5408\u5e76\uff0c\u5c31\u5f97\u5230\u4e86\u4e00\u4e2a\u6709\u5e8f\u7684\u5e8f\u5217\u3002"),(0,o.kt)("h2",{id:"\u5806\u6392\u5e8f"},"\u5806\u6392\u5e8f"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u539f\u7406")),(0,o.kt)("p",null,"\u5148\u6765\u4ecb\u7ecd\u4e00\u4e0b\u4ec0\u4e48\u662f\u5806\uff1f\u5806\u662f\u4e00\u79cd\u8fd1\u4f3c\u5b8c\u5168\u4e8c\u53c9\u6811\u7684\u6570\u636e\u7ed3\u6784\uff0c\u53ef\u4ee5\u5206\u4e3a\u5927\u6839\u5806\uff0c\u5c0f\u6839\u5806\u3002"),(0,o.kt)("p",null,"\u63a5\u7740\u6211\u4eec\u6765\u770b\u4e00\u4e0b\u5806\u6392\u5e8f\u7684\u8fc7\u7a0b\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5c06\u5f85\u6392\u5e8f\u5e8f\u5217\u6784\u9020\u6210\u4e00\u4e2a\u5927\u6839\u5806\uff0c\u6b64\u65f6\uff0c\u6574\u4e2a\u6570\u7ec4\u7684\u6700\u5927\u503c\u5c31\u662f\u5806\u7ed3\u6784\u9876\u7aef\u7684\u6839\u8282\u70b9\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5c06\u5806\u6839\u8282\u70b9\u7684\u6570\u4e0e\u672b\u5c3e\u7684\u6570\u4ea4\u6362\uff0c\u6b64\u65f6\uff0c\u672b\u5c3e\u7684\u6570\u4e3a\u6700\u5927\u503c\uff0c\u5269\u4f59\u5f85\u6392\u5e8f\u5e8f\u5217\u4e2a\u6570\u4e3an-1\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5c06\u5269\u4f59\u7684n-1\u4e2a\u6570\u518d\u6784\u9020\u6210\u4e00\u4e2a\u5927\u6839\u5806\uff0c\u518d\u5c06\u9876\u7aef\u6570\u4e0en-1\u4f4d\u7f6e\u7684\u6570\u4ea4\u6362\uff0c\u5982\u6b64\u53cd\u590d\u6267\u884c\uff0c\u4fbf\u80fd\u5f97\u5230\u6709\u5e8f\u6570\u7ec4\u3002")),(0,o.kt)("h2",{id:"\u5e0c\u5c14\u6392\u5e8f"},"\u5e0c\u5c14\u6392\u5e8f"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u539f\u7406")),(0,o.kt)("p",null,"\u5e0c\u5c14\u6392\u5e8f\u662f\u628a\u8bb0\u5f55\u6309\u4e0b\u6807\u7684\u4e00\u5b9a\u589e\u91cf\u5206\u7ec4\uff0c\u5bf9\u6bcf\u7ec4\u4f7f\u7528\u76f4\u63a5\u63d2\u5165\u6392\u5e8f\u7b97\u6cd5\u6392\u5e8f\uff1b\u968f\u7740\u589e\u91cf\u9010\u6e10\u51cf\u5c11\uff0c\u6bcf\u7ec4\u5305\u542b\u7684\u5173\u952e\u8bcd\u8d8a\u6765\u8d8a\u591a\uff0c\u5f53\u589e\u91cf\u51cf\u81f31\u65f6\uff0c\u6574\u4e2a\u6587\u4ef6\u6070\u88ab\u5206\u6210\u4e00\u7ec4\uff0c\u7b97\u6cd5\u4fbf\u7ec8\u6b62\u3002"),(0,o.kt)("h2",{id:"\u8ba1\u6570\u6392\u5e8f"},"\u8ba1\u6570\u6392\u5e8f"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u539f\u7406")),(0,o.kt)("p",null,"\u8ba1\u6570\u6392\u5e8f\u662f\u4e00\u79cd\u901a\u8fc7\u8ba1\u6570\u800c\u4e0d\u662f\u6bd4\u8f83\u8fdb\u884c\u6392\u5e8f\u7684\u7b97\u6cd5\uff0c\u9002\u7528\u4e8e\u8303\u56f4\u8f83\u5c0f\u7684\u6574\u6570\u5e8f\u5217\u3002\n\u5b83\u7684\u4f18\u52bf\u5728\u4e8e\u5728\u5bf9\u4e00\u5b9a\u8303\u56f4\u5185\u7684\u6574\u6570\u6392\u5e8f\u65f6\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a\u039f(n+k)\uff08\u5176\u4e2dk\u662f\u6574\u6570\u7684\u8303\u56f4\uff09\uff0c\u5feb\u4e8e\u4efb\u4f55\u6bd4\u8f83\u6392\u5e8f\u7b97\u6cd5\u3002"),(0,o.kt)("h2",{id:"\u6876\u6392\u5e8f"},"\u6876\u6392\u5e8f"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u539f\u7406")),(0,o.kt)("p",null,"\u5c06\u6570\u7ec4\u6309\u7167\u5143\u7d20\u6240\u5c5e\u8303\u56f4\u5206\u5230\u6709\u9650\u6570\u91cf\u7684\u6876\u91cc\uff0c\u518d\u5355\u72ec\u5bf9\u6bcf\u4e2a\u6876\u6392\u5e8f\uff08\u53ef\u4ee5\u4f7f\u7528\u522b\u7684\u6392\u5e8f\u7b97\u6cd5\u6216\u662f\u4ee5\u9012\u5f52\u65b9\u5f0f\u7ee7\u7eed\u4f7f\u7528\u6876\u6392\u5e8f\u8fdb\u884c\u6392\u5e8f\uff09\uff0c\u6700\u540e\u4f9d\u6b21\u628a\u5404\u4e2a\u6876\u4e2d\u7684\u8bb0\u5f55\u5217\u51fa\u6765\u8bb0\u5f97\u5230\u6709\u5e8f\u5e8f\u5217\u3002"),(0,o.kt)("h2",{id:"\u57fa\u6570\u6392\u5e8f"},"\u57fa\u6570\u6392\u5e8f"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u539f\u7406")),(0,o.kt)("p",null,"\u4f9d\u6b21\u6309\u7167\u4e2a\u4f4d\u3001\u5341\u4f4d\u3001\u767e\u4f4d...\u7684\u987a\u5e8f\u5bf9\u5f85\u6392\u5e8f\u6570\u7ec4\u5206\u7ec4\uff0c\u7136\u540e\u5c06\u6bcf\u4e00\u6b21\u7684\u5206\u7ec4\u6309\u7167\u7d22\u5f15\u5927\u5c0f\u91cd\u65b0\u7ec4\u6210\u65b0\u7684\u6570\u7ec4\u3002\u6700\u540e\u4e00\u8f6e\u7684\u65b0\u6570\u7ec4\u5373\u4e3a\u6392\u597d\u5e8f\u7684\u6570\u7ec4"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6211\u4eec\u6309\u7167\u4e2a\u4f4d\u5c06\u5f85\u6392\u5e8f\u6570\u7ec4\u5206\u7ec4\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u6211\u4eec\u6309\u7167\u5341\u4f4d\u5c06\u5f85\u6392\u5e8f\u6570\u7ec4\u5206\u7ec4"),(0,o.kt)("li",{parentName:"ol"},"\u6211\u4eec\u6309\u7167\u767e\u4f4d\u5c06\u5f85\u6392\u5e8f\u6570\u7ec4\u5206\u7ec4\u3002")))}d.isMDXComponent=!0}}]);