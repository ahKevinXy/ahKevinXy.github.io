"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[26256],{36015:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>a});var t=o(74848),r=o(28453);const i={title:"SpringBoot\u81ea\u52a8\u914d\u7f6e\u5b9e\u73b0\u539f\u7406",tags:["SpringBoot"],authors:"Flankx",description:"Spring boot \u5982\u4f55\u81ea\u52a8\u914d\u7f6e",image:"https://source.unsplash.com/random?people&22"},c="SpringBoot\u81ea\u52a8\u914d\u7f6e\u5b9e\u73b0\u539f\u7406",s={permalink:"/blog/2023/07/18/autoconfig-1",source:"@site/blog/2023/07/18/autoconfig-1.md",title:"SpringBoot\u81ea\u52a8\u914d\u7f6e\u5b9e\u73b0\u539f\u7406",description:"Spring boot \u5982\u4f55\u81ea\u52a8\u914d\u7f6e",date:"2023-07-18T00:00:00.000Z",formattedDate:"2023\u5e747\u670818\u65e5",tags:[{label:"SpringBoot",permalink:"/blog/tags/spring-boot"}],readingTime:1.395,hasTruncateMarker:!1,authors:[{name:"flankx",title:"\u4f5c\u8005",url:"https://github.com/flankx",email:"137472591@qq.com",imageURL:"https://avatars.githubusercontent.com/u/30172229",key:"Flankx"}],frontMatter:{title:"SpringBoot\u81ea\u52a8\u914d\u7f6e\u5b9e\u73b0\u539f\u7406",tags:["SpringBoot"],authors:"Flankx",description:"Spring boot \u5982\u4f55\u81ea\u52a8\u914d\u7f6e",image:"https://source.unsplash.com/random?people&22"},unlisted:!1,prevItem:{title:"synchronized & ReentrantLock \u533a\u522b",permalink:"/blog/2023/07/19/lock-1"},nextItem:{title:"\u5982\u4f55\u5f00\u53d1\u4e00\u4e0b\u9002\u5408\u81ea\u5df1\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf",permalink:"/blog/2023/07/18/develop"}},l={authorsImageUrls:[void 0]},a=[];function d(e){const n={code:"code",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"SpringBoot"})," \u5b9a\u4e49\u4e86\u4e00\u5957\u63a5\u53e3\u89c4\u8303\uff0c\u8fd9\u5957\u89c4\u8303\u89c4\u5b9a\uff1a",(0,t.jsx)(n.code,{children:"SpringBoot"})," \u5728\u542f\u52a8\u65f6\u4f1a\u626b\u63cf\u5916\u90e8\u5f15\u7528 jar \u5305\u4e2d\u7684 ",(0,t.jsx)(n.code,{children:"META-INF/spring.factories"})," \u6587\u4ef6\uff0c\u5c06\u6587\u4ef6\u4e2d\u914d\u7f6e\u7684\u7c7b\u578b\u4fe1\u606f\u52a0\u8f7d\u5230 Spring \u5bb9\u5668\uff08\u6b64\u5904\u6d89\u53ca\u5230 JVM \u7c7b\u52a0\u8f7d\u673a\u5236\u4e0e ",(0,t.jsx)(n.code,{children:"Spring"})," \u7684\u5bb9\u5668\u77e5\u8bc6\uff09\uff0c\u5e76\u6267\u884c\u7c7b\u4e2d\u5b9a\u4e49\u7684\u5404\u79cd\u64cd\u4f5c\u3002\u5bf9\u4e8e\u5916\u90e8 jar \u6765\u8bf4\uff0c\u53ea\u9700\u8981\u6309\u7167 ",(0,t.jsx)(n.code,{children:"SpringBoot"})," \u5b9a\u4e49\u7684\u6807\u51c6\uff0c\u5c31\u80fd\u5c06\u81ea\u5df1\u7684\u529f\u80fd\u88c5\u7f6e\u8fdb ",(0,t.jsx)(n.code,{children:"SpringBoot"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"@SpringBootApplication"})," \u770b\u4f5c\u662f\xa0",(0,t.jsx)(n.code,{children:"@Configuration"}),"\u3001",(0,t.jsx)(n.code,{children:"@EnableAutoConfiguration"}),"\u3001",(0,t.jsx)(n.code,{children:"@ComponentScan"}),"\xa0\u6ce8\u89e3\u7684\u96c6\u5408"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"@EnableAutoConfiguration"}),"\uff1a\u542f\u7528 ",(0,t.jsx)(n.code,{children:"SpringBoot"})," \u7684\u81ea\u52a8\u914d\u7f6e\u673a\u5236"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"@Configuration"}),"\uff1a\u5141\u8bb8\u5728\u4e0a\u4e0b\u6587\u4e2d\u6ce8\u518c\u989d\u5916\u7684 bean \u6216\u5bfc\u5165\u5176\u4ed6\u914d\u7f6e\u7c7b"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"@ComponentScan"}),"\uff1a \u626b\u63cf\u88ab ",(0,t.jsx)(n.code,{children:"@Component"}),"\xa0(",(0,t.jsx)(n.code,{children:"@Service"}),",",(0,t.jsx)(n.code,{children:"@Controller"}),")\u6ce8\u89e3\u7684 bean\uff0c\u6ce8\u89e3\u9ed8\u8ba4\u4f1a\u626b\u63cf\u542f\u52a8\u7c7b\u6240\u5728\u7684\u5305\u4e0b\u6240\u6709\u7684\u7c7b \uff0c\u53ef\u4ee5\u81ea\u5b9a\u4e49\u4e0d\u626b\u63cf\u67d0\u4e9b bean\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u5bb9\u5668\u4e2d\u5c06\u6392\u9664TypeExcludeFilter\u548cAutoConfigurationExcludeFilter\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u603b\u7ed3\uff1a",(0,t.jsx)(n.code,{children:"SpringBoot"})," \u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"@EnableAutoConfiguration"})," \u5f00\u542f\u81ea\u52a8\u88c5\u914d\uff0c\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"SpringFactoriesLoader"})," \u6700\u7ec8\u52a0\u8f7d ",(0,t.jsx)(n.code,{children:"META-INF/spring.factories"})," \u4e2d\u7684\u81ea\u52a8\u914d\u7f6e\u7c7b\u5b9e\u73b0\u81ea\u52a8\u88c5\u914d\uff0c\u81ea\u52a8\u914d\u7f6e\u7c7b\u5176\u5b9e\u5c31\u662f\u901a\u8fc7",(0,t.jsx)(n.code,{children:"@Conditional"})," \u6309\u9700\u52a0\u8f7d\u7684\u914d\u7f6e\u7c7b\uff0c\u60f3\u8981\u5176\u751f\u6548\u5fc5\u987b\u5f15\u5165   ",(0,t.jsx)(n.code,{children:"spring-boot-starter-xxx"})," \u5305\u5b9e\u73b0\u8d77\u6b65\u4f9d\u8d56"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>s});var t=o(96540);const r={},i=t.createContext(r);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);