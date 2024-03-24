"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[87908],{71960:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=n(74848),s=n(28453);const a={title:"synchronized & ReentrantLock \u533a\u522b",tags:["Java"],authors:"Flankx",description:"Java \u9501\u7684\u533a\u522b \u5982\u4f55\u4f7f\u7528java \u9501",image:"https://source.unsplash.com/random?people&22"},c="synchronized \u4e0e ReentrantLock \u533a\u522b",o={permalink:"/blog/2023/07/19/lock-1",source:"@site/blog/2023/07/19/lock-1.md",title:"synchronized & ReentrantLock \u533a\u522b",description:"Java \u9501\u7684\u533a\u522b \u5982\u4f55\u4f7f\u7528java \u9501",date:"2023-07-19T00:00:00.000Z",formattedDate:"2023\u5e747\u670819\u65e5",tags:[{label:"Java",permalink:"/blog/tags/java"}],readingTime:.86,hasTruncateMarker:!1,authors:[{name:"flankx",title:"\u4f5c\u8005",url:"https://github.com/flankx",email:"137472591@qq.com",imageURL:"https://avatars.githubusercontent.com/u/30172229",key:"Flankx"}],frontMatter:{title:"synchronized & ReentrantLock \u533a\u522b",tags:["Java"],authors:"Flankx",description:"Java \u9501\u7684\u533a\u522b \u5982\u4f55\u4f7f\u7528java \u9501",image:"https://source.unsplash.com/random?people&22"},unlisted:!1,prevItem:{title:"\u9501\u7684\u72b6\u6001",permalink:"/blog/2023/07/20/lock-2"},nextItem:{title:"SpringBoot\u81ea\u52a8\u914d\u7f6e\u5b9e\u73b0\u539f\u7406",permalink:"/blog/2023/07/18/autoconfig-1"}},i={authorsImageUrls:[void 0]},d=[];function l(t){const e={table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...t.components};return(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u7c7b\u522b"}),(0,r.jsx)(e.th,{children:"synchronized"}),(0,r.jsx)(e.th,{children:"ReentrantLock"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u5b58\u5728\u5c42\u6b21"}),(0,r.jsx)(e.td,{children:"Java\u7684\u5173\u952e\u5b57\uff0cJVM\u5c42\u9762"}),(0,r.jsx)(e.td,{children:"\u662f\u4e00\u4e2a\u7c7b"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u9501\u7684\u91ca\u653e"}),(0,r.jsx)(e.td,{children:"1.\u4ee5\u83b7\u53d6\u9501\u7684\u7ebf\u7a0b\u6267\u884c\u540c\u6b65\u4ee3\u7801\uff0c\u91ca\u653e\u9501 2.\u7ebf\u7a0b\u6267\u884c\u53d1\u751f\u4e00\u6b21\uff0cJVM\u4f1a\u8ba9\u7ebf\u7a0b\u91ca\u653e\u9501"}),(0,r.jsx)(e.td,{children:"\u5728finally\u4e2d\u5fc5\u987b\u91ca\u653e\u9501\uff0c\u4e0d\u7136\u5bb9\u6613\u9020\u6210\u7ebf\u7a0b\u6b7b\u9501"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u9501\u7684\u83b7\u53d6"}),(0,r.jsx)(e.td,{children:"\u52a0\u9501A\u7ebf\u7a0b\u83b7\u5f97\u9501\uff0cB\u7ebf\u7a0b\u7b49\u5f85\uff0c\u5982\u679cA\u963b\u585e\uff0cB\u7ebf\u7a0b\u4f1a\u4e00\u76f4\u7b49\u5f85"}),(0,r.jsx)(e.td,{children:"\u5206\u60c5\u51b5\u800c\u5b9a\uff0cLock\u6709\u591a\u79cd\u9501\u7684\u83b7\u53d6\u65b9\u5f0f condition"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u9501\u72b6\u6001"}),(0,r.jsx)(e.td,{children:"\u65e0\u6cd5\u5224\u65ad"}),(0,r.jsx)(e.td,{children:"\u53ef\u4ee5\u5224\u65ad"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u9501\u7c7b\u578b"}),(0,r.jsx)(e.td,{children:"\u53ef\u91cd\u5165\uff0c\u4e0d\u53ef\u5224\u65ad\uff0c\u975e\u516c\u5e73"}),(0,r.jsx)(e.td,{children:"\u53ef\u91cd\u5165\uff0c\u53ef\u5224\u65ad\uff0c\u53ef\u516c\u5e73"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u6027\u80fd"}),(0,r.jsx)(e.td,{children:"\u5c11\u91cf\u540c\u6b65"}),(0,r.jsx)(e.td,{children:"\u5927\u91cf\u540c\u6b65"})]})]})]})}function h(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(l,{...t})}):l(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>c,x:()=>o});var r=n(96540);const s={},a=r.createContext(s);function c(t){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:c(t.components),r.createElement(a.Provider,{value:e},t.children)}}}]);