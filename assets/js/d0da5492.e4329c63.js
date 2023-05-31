"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[72265],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=i(n),f=r,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||l;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},67677:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],s={tags:["mysql","\u5de5\u5177"],authors:"ahKevinXy"},c="\u5e38\u7528MySQL \u4fe1\u606f\u67e5\u8be2",i={permalink:"/blog/2023/04/18/mysql",source:"@site/blog/2023/04/18/mysql.md",title:"\u5e38\u7528MySQL \u4fe1\u606f\u67e5\u8be2",description:"\u67e5\u8be2\u6240\u6709\u7a7a\u95f4",date:"2023-04-18T00:00:00.000Z",formattedDate:"2023\u5e744\u670818\u65e5",tags:[{label:"mysql",permalink:"/blog/tags/mysql"},{label:"\u5de5\u5177",permalink:"/blog/tags/\u5de5\u5177"}],readingTime:1.065,hasTruncateMarker:!1,authors:[{name:"ahKevinXy",title:"\u4f5c\u8005",url:"https://github.com/ahKevinXy",email:"ahkevinxy@gmail.com",imageURL:"https://api.isoyu.com/mm_images.php",key:"ahKevinXy"}],frontMatter:{tags:["mysql","\u5de5\u5177"],authors:"ahKevinXy"},prevItem:{title:"go \u4f01\u4e1a\u5fae\u4fe1\u673a\u5668\u4eba\u5b9e\u4f8b",permalink:"/blog/2023/05/04/webchat"},nextItem:{title:"Go \u4e2d\u7684sync poll",permalink:"/blog/2023/03/15/sync_poll"}},u={authorsImageUrls:[void 0]},m=[{value:"\u67e5\u8be2\u6240\u6709\u7a7a\u95f4",id:"\u67e5\u8be2\u6240\u6709\u7a7a\u95f4",level:2},{value:"\u67e5\u8be2\u7a7a\u95f4",id:"\u67e5\u8be2\u7a7a\u95f4",level:2},{value:"\u67e5\u770b\u6307\u5b9a\u6570\u636e\u5e93\u5bb9\u91cf\u5927\u5c0f",id:"\u67e5\u770b\u6307\u5b9a\u6570\u636e\u5e93\u5bb9\u91cf\u5927\u5c0f",level:2},{value:"\u67e5\u770b\u6307\u5b9a\u6570\u636e\u5e93\u5404\u8868\u5bb9\u91cf\u5927\u5c0f",id:"\u67e5\u770b\u6307\u5b9a\u6570\u636e\u5e93\u5404\u8868\u5bb9\u91cf\u5927\u5c0f",level:2}],p={toc:m},f="wrapper";function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)(f,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u67e5\u8be2\u6240\u6709\u7a7a\u95f4"},"\u67e5\u8be2\u6240\u6709\u7a7a\u95f4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select\ntable_schema as '\u6570\u636e\u5e93',\nsum(table_rows) as '\u8bb0\u5f55\u6570',\nsum(truncate(data_length/1024/1024, 2)) as '\u6570\u636e\u5bb9\u91cf(MB)',\nsum(truncate(index_length/1024/1024, 2)) as '\u7d22\u5f15\u5bb9\u91cf(MB)'\nfrom information_schema.tables\ngroup by table_schema\norder by sum(data_length) desc, sum(index_length) desc;\n")),(0,l.kt)("h2",{id:"\u67e5\u8be2\u7a7a\u95f4"},"\u67e5\u8be2\u7a7a\u95f4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select\ntable_schema as '\u6570\u636e\u5e93',\ntable_name as '\u8868\u540d',\ntable_rows as '\u8bb0\u5f55\u6570',\ntruncate(data_length/1024/1024, 2) as '\u6570\u636e\u5bb9\u91cf(MB)',\ntruncate(index_length/1024/1024, 2) as '\u7d22\u5f15\u5bb9\u91cf(MB)'\nfrom information_schema.tables\norder by data_length desc, index_length desc;\n")),(0,l.kt)("h2",{id:"\u67e5\u770b\u6307\u5b9a\u6570\u636e\u5e93\u5bb9\u91cf\u5927\u5c0f"},"\u67e5\u770b\u6307\u5b9a\u6570\u636e\u5e93\u5bb9\u91cf\u5927\u5c0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select\ntable_schema as '\u6570\u636e\u5e93',\nsum(table_rows) as '\u8bb0\u5f55\u6570',\nsum(truncate(data_length/1024/1024, 2)) as '\u6570\u636e\u5bb9\u91cf(MB)',\nsum(truncate(index_length/1024/1024, 2)) as '\u7d22\u5f15\u5bb9\u91cf(MB)'\nfrom information_schema.tables\nwhere table_schema='mysql';\n\n")),(0,l.kt)("h2",{id:"\u67e5\u770b\u6307\u5b9a\u6570\u636e\u5e93\u5404\u8868\u5bb9\u91cf\u5927\u5c0f"},"\u67e5\u770b\u6307\u5b9a\u6570\u636e\u5e93\u5404\u8868\u5bb9\u91cf\u5927\u5c0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select\ntable_schema as '\u6570\u636e\u5e93',\ntable_name as '\u8868\u540d',\ntable_rows as '\u8bb0\u5f55\u6570',\ntruncate(data_length/1024/1024, 2) as '\u6570\u636e\u5bb9\u91cf(MB)',\ntruncate(index_length/1024/1024, 2) as '\u7d22\u5f15\u5bb9\u91cf(MB)'\nfrom information_schema.tables\nwhere table_schema='mysql'\norder by data_length desc, index_length desc;\n")))}d.isMDXComponent=!0}}]);