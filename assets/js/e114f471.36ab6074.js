"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[92516],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(t),f=o,g=m["".concat(l,".").concat(f)]||m[f]||s[f]||i;return t?r.createElement(g,a(a({ref:n},u),{},{components:t})):r.createElement(g,a({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[m]="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},95755:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var r=t(83117),o=t(80102),i=(t(67294),t(3905)),a=["components"],p={title:"SpringBoot\u81ea\u52a8\u914d\u7f6e\u5b9e\u73b0\u539f\u7406",tags:["SpringBoot"],authors:"Flankx",description:"Spring boot \u5982\u4f55\u81ea\u52a8\u914d\u7f6e",image:"https://source.unsplash.com/random?people&22"},l="SpringBoot\u81ea\u52a8\u914d\u7f6e\u5b9e\u73b0\u539f\u7406",c={permalink:"/blog/2023/07/18/autoconfig-1",source:"@site/blog/2023/07/18/autoconfig-1.md",title:"SpringBoot\u81ea\u52a8\u914d\u7f6e\u5b9e\u73b0\u539f\u7406",description:"Spring boot \u5982\u4f55\u81ea\u52a8\u914d\u7f6e",date:"2023-07-18T00:00:00.000Z",formattedDate:"2023\u5e747\u670818\u65e5",tags:[{label:"SpringBoot",permalink:"/blog/tags/spring-boot"}],readingTime:1.395,hasTruncateMarker:!1,authors:[{name:"flankx",title:"\u4f5c\u8005",url:"https://github.com/flankx",email:"137472591@qq.com",imageURL:"https://avatars.githubusercontent.com/u/30172229",key:"Flankx"}],frontMatter:{title:"SpringBoot\u81ea\u52a8\u914d\u7f6e\u5b9e\u73b0\u539f\u7406",tags:["SpringBoot"],authors:"Flankx",description:"Spring boot \u5982\u4f55\u81ea\u52a8\u914d\u7f6e",image:"https://source.unsplash.com/random?people&22"},prevItem:{title:"synchronized & ReentrantLock \u533a\u522b",permalink:"/blog/2023/07/19/lock-1"},nextItem:{title:"\u5982\u4f55\u5f00\u53d1\u4e00\u4e0b\u9002\u5408\u81ea\u5df1\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf",permalink:"/blog/2023/07/18/develop"}},u={authorsImageUrls:[void 0]},m=[],s={toc:m},f="wrapper";function g(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)(f,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SpringBoot")," \u5b9a\u4e49\u4e86\u4e00\u5957\u63a5\u53e3\u89c4\u8303\uff0c\u8fd9\u5957\u89c4\u8303\u89c4\u5b9a\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"SpringBoot")," \u5728\u542f\u52a8\u65f6\u4f1a\u626b\u63cf\u5916\u90e8\u5f15\u7528 jar \u5305\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"META-INF/spring.factories")," \u6587\u4ef6\uff0c\u5c06\u6587\u4ef6\u4e2d\u914d\u7f6e\u7684\u7c7b\u578b\u4fe1\u606f\u52a0\u8f7d\u5230 Spring \u5bb9\u5668\uff08\u6b64\u5904\u6d89\u53ca\u5230 JVM \u7c7b\u52a0\u8f7d\u673a\u5236\u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"Spring")," \u7684\u5bb9\u5668\u77e5\u8bc6\uff09\uff0c\u5e76\u6267\u884c\u7c7b\u4e2d\u5b9a\u4e49\u7684\u5404\u79cd\u64cd\u4f5c\u3002\u5bf9\u4e8e\u5916\u90e8 jar \u6765\u8bf4\uff0c\u53ea\u9700\u8981\u6309\u7167 ",(0,i.kt)("inlineCode",{parentName:"p"},"SpringBoot")," \u5b9a\u4e49\u7684\u6807\u51c6\uff0c\u5c31\u80fd\u5c06\u81ea\u5df1\u7684\u529f\u80fd\u88c5\u7f6e\u8fdb ",(0,i.kt)("inlineCode",{parentName:"p"},"SpringBoot")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@SpringBootApplication")," \u770b\u4f5c\u662f\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"@Configuration"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"@EnableAutoConfiguration"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"@ComponentScan"),"\xa0\u6ce8\u89e3\u7684\u96c6\u5408"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@EnableAutoConfiguration"),"\uff1a\u542f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"SpringBoot")," \u7684\u81ea\u52a8\u914d\u7f6e\u673a\u5236"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@Configuration"),"\uff1a\u5141\u8bb8\u5728\u4e0a\u4e0b\u6587\u4e2d\u6ce8\u518c\u989d\u5916\u7684 bean \u6216\u5bfc\u5165\u5176\u4ed6\u914d\u7f6e\u7c7b"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@ComponentScan"),"\uff1a \u626b\u63cf\u88ab ",(0,i.kt)("inlineCode",{parentName:"li"},"@Component"),"\xa0(",(0,i.kt)("inlineCode",{parentName:"li"},"@Service"),",",(0,i.kt)("inlineCode",{parentName:"li"},"@Controller"),")\u6ce8\u89e3\u7684 bean\uff0c\u6ce8\u89e3\u9ed8\u8ba4\u4f1a\u626b\u63cf\u542f\u52a8\u7c7b\u6240\u5728\u7684\u5305\u4e0b\u6240\u6709\u7684\u7c7b \uff0c\u53ef\u4ee5\u81ea\u5b9a\u4e49\u4e0d\u626b\u63cf\u67d0\u4e9b bean\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u5bb9\u5668\u4e2d\u5c06\u6392\u9664TypeExcludeFilter\u548cAutoConfigurationExcludeFilter\u3002")),(0,i.kt)("p",null,"\u603b\u7ed3\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"SpringBoot")," \u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"@EnableAutoConfiguration")," \u5f00\u542f\u81ea\u52a8\u88c5\u914d\uff0c\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"SpringFactoriesLoader")," \u6700\u7ec8\u52a0\u8f7d ",(0,i.kt)("inlineCode",{parentName:"p"},"META-INF/spring.factories")," \u4e2d\u7684\u81ea\u52a8\u914d\u7f6e\u7c7b\u5b9e\u73b0\u81ea\u52a8\u88c5\u914d\uff0c\u81ea\u52a8\u914d\u7f6e\u7c7b\u5176\u5b9e\u5c31\u662f\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"@Conditional")," \u6309\u9700\u52a0\u8f7d\u7684\u914d\u7f6e\u7c7b\uff0c\u60f3\u8981\u5176\u751f\u6548\u5fc5\u987b\u5f15\u5165   ",(0,i.kt)("inlineCode",{parentName:"p"},"spring-boot-starter-xxx")," \u5305\u5b9e\u73b0\u8d77\u6b65\u4f9d\u8d56"))}g.isMDXComponent=!0}}]);