"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[19463],{69837:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var n=i(85893),t=i(11151);const l={title:"Redis \u6dd8\u6c70\u673a\u5236",tags:["Redis"],authors:"Flankx",description:"Redis \u6dd8\u6c70\u673a\u5236 redis\u5982\u4f55\u6dd8\u6c70",image:"https://source.unsplash.com/random?people&26"},r=void 0,d={permalink:"/blog/2023/07/22/redis-2",source:"@site/blog/2023/07/22/redis-2.md",title:"Redis \u6dd8\u6c70\u673a\u5236",description:"Redis \u6dd8\u6c70\u673a\u5236 redis\u5982\u4f55\u6dd8\u6c70",date:"2023-07-22T00:00:00.000Z",formattedDate:"July 22, 2023",tags:[{label:"Redis",permalink:"/blog/tags/redis"}],readingTime:1.425,hasTruncateMarker:!1,authors:[{name:"flankx",title:"\u4f5c\u8005",url:"https://github.com/flankx",email:"137472591@qq.com",imageURL:"https://avatars.githubusercontent.com/u/30172229",key:"Flankx"}],frontMatter:{title:"Redis \u6dd8\u6c70\u673a\u5236",tags:["Redis"],authors:"Flankx",description:"Redis \u6dd8\u6c70\u673a\u5236 redis\u5982\u4f55\u6dd8\u6c70",image:"https://source.unsplash.com/random?people&26"},unlisted:!1,prevItem:{title:"Redis\u6570\u636e\u7ed3\u6784",permalink:"/blog/2023/07/23/redis-3"},nextItem:{title:"Redis\u7f13\u5b58\u5f02\u5e38\u5904\u7406",permalink:"/blog/2023/07/21/redis-1"}},o={authorsImageUrls:[void 0]},c=[{value:"<code>Redis</code>\u63d0\u4f9b6\u79cd\u6570\u636e\u6dd8\u6c70\u7b56\u7565",id:"redis\u63d0\u4f9b6\u79cd\u6570\u636e\u6dd8\u6c70\u7b56\u7565",level:3},{value:"Redis\u6301\u4e45\u5316\u673a\u5236",id:"redis\u6301\u4e45\u5316\u673a\u5236",level:3}];function a(e){const s={code:"code",h3:"h3",li:"li",ol:"ol",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.h3,{id:"redis\u63d0\u4f9b6\u79cd\u6570\u636e\u6dd8\u6c70\u7b56\u7565",children:[(0,n.jsx)(s.code,{children:"Redis"}),"\u63d0\u4f9b6\u79cd\u6570\u636e\u6dd8\u6c70\u7b56\u7565"]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"volatile-lru"}),"\uff08least recently used\uff09\uff1a\u4ece\u5df2\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4\u7684\u6570\u636e\u96c6\uff08server.db[i].expires\uff09\u4e2d\u6311\u9009\u6700\u8fd1\u6700\u5c11\u4f7f\u7528\u7684\u6570\u636e\u6dd8\u6c70"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"volatile-ttl"}),"\uff1a\u4ece\u5df2\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4\u7684\u6570\u636e\u96c6\uff08server.db[i].expires\uff09\u4e2d\u6311\u9009\u5c06\u8981\u8fc7\u671f\u7684\u6570\u636e\u6dd8\u6c70"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"volatile-random"}),"\uff1a\u4ece\u5df2\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4\u7684\u6570\u636e\u96c6\uff08server.db[i].expires\uff09\u4e2d\u4efb\u610f\u9009\u62e9\u6570\u636e\u6dd8\u6c70"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"allkeys-lru"}),"\uff08least recently used\uff09\uff1a\u5f53\u5185\u5b58\u4e0d\u8db3\u4ee5\u5bb9\u7eb3\u65b0\u5199\u5165\u6570\u636e\u65f6\uff0c\u5728\u952e\u7a7a\u95f4\u4e2d\uff0c\u79fb\u9664\u6700\u8fd1\u6700\u5c11\u4f7f\u7528\u7684 key\uff08\u8fd9\u4e2a\u662f\u6700\u5e38\u7528\u7684\uff09"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"allkeys-random"}),"\uff1a\u4ece\u6570\u636e\u96c6\uff08server.db[i].dict\uff09\u4e2d\u4efb\u610f\u9009\u62e9\u6570\u636e\u6dd8\u6c70"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"no-eviction"}),"\uff1a\u7981\u6b62\u9a71\u9010\u6570\u636e\uff0c\u4e5f\u5c31\u662f\u8bf4\u5f53\u5185\u5b58\u4e0d\u8db3\u4ee5\u5bb9\u7eb3\u65b0\u5199\u5165\u6570\u636e\u65f6\uff0c\u65b0\u5199\u5165\u64cd\u4f5c\u4f1a\u62a5\u9519\u3002\u8fd9\u4e2a\u5e94\u8be5\u6ca1\u4eba\u4f7f\u7528\u5427\uff01\n4.0 \u7248\u672c\u540e\u589e\u52a0\u4ee5\u4e0b\u4e24\u79cd\uff1a"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"volatile-lfu"}),"\uff08least frequently used\uff09\uff1a\u4ece\u5df2\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4\u7684\u6570\u636e\u96c6\uff08server.db[i].expires\uff09\u4e2d\u6311\u9009\u6700\u4e0d\u7ecf\u5e38\u4f7f\u7528\u7684\u6570\u636e\u6dd8\u6c70"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"allkeys-lfu"}),"\uff08least frequently used\uff09\uff1a\u5f53\u5185\u5b58\u4e0d\u8db3\u4ee5\u5bb9\u7eb3\u65b0\u5199\u5165\u6570\u636e\u65f6\uff0c\u5728\u952e\u7a7a\u95f4\u4e2d\uff0c\u79fb\u9664\u6700\u4e0d\u7ecf\u5e38\u4f7f\u7528\u7684 key"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"redis\u6301\u4e45\u5316\u673a\u5236",children:"Redis\u6301\u4e45\u5316\u673a\u5236"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"RDB\u5feb\u7167"}),"\n",(0,n.jsx)(s.li,{children:"AOF\u53ea\u8ffd\u52a0\u6587\u4ef6"}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},11151:(e,s,i)=>{i.d(s,{Z:()=>d,a:()=>r});var n=i(67294);const t={},l=n.createContext(t);function r(e){const s=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(l.Provider,{value:s},e.children)}}}]);