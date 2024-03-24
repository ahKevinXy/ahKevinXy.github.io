"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[76717],{33552:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>r,contentTitle:()=>t,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var l=i(74848),s=i(28453);const d={},t="\u5b58\u50a8\u5f15\u64ce",c={id:"backend/database/mysql/optimize/storage_engine",title:"\u5b58\u50a8\u5f15\u64ce",description:"Innodb",source:"@site/docs/backend/database/mysql/optimize/storage_engine.md",sourceDirName:"backend/database/mysql/optimize",slug:"/backend/database/mysql/optimize/storage_engine",permalink:"/docs/backend/database/mysql/optimize/storage_engine",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u8f6f\u4ef6",permalink:"/docs/backend/database/mysql/optimize/soft"},next:{title:"\u57fa\u51c6\u6d4b\u8bd5",permalink:"/docs/backend/database/mysql/optimize/test"}},r={},o=[{value:"Innodb",id:"innodb",level:2},{value:"\u7279\u6027",id:"\u7279\u6027",level:3},{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:3},{value:"MyISAM",id:"myisam",level:2},{value:"\u7279\u6027",id:"\u7279\u6027-1",level:3},{value:"\u9002\u7528\u573a\u666f",id:"\u9002\u7528\u573a\u666f",level:3},{value:"CSV",id:"csv",level:2}];function a(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"\u5b58\u50a8\u5f15\u64ce",children:"\u5b58\u50a8\u5f15\u64ce"}),"\n",(0,l.jsx)(e.h2,{id:"innodb",children:"Innodb"}),"\n",(0,l.jsxs)(e.admonition,{type:"info",children:[(0,l.jsx)(e.p,{children:"MySQL 5.5\u53ca\u4ee5\u540e\u9ed8\u8ba4\u5b58\u50a8\u5f15\u64ce"}),(0,l.jsx)(e.p,{children:"innodb \u4f7f\u7528\u8868\u7a7a\u95f4\u8fdb\u884c \u6570\u636e\u5b58\u50a8"}),(0,l.jsx)(e.p,{children:(0,l.jsx)(e.code,{children:"innodb_file_per_table"})}),(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"on : \u72ec\u7acb\u7684\u8868\u7a7a\u95f4 tablename.ibd"}),"\n",(0,l.jsx)(e.li,{children:"off: \u7cfb\u7edf\u8868\u7a7a\u95f4 ibdataX"}),"\n"]}),(0,l.jsx)(e.h3,{id:"\u7279\u6027",children:"\u7279\u6027"}),(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Innodb \u662f\u4e00\u79cd\u4e8b\u52a1\u6027\u5b58\u50a8\u5f15\u64ce"}),"\n",(0,l.jsx)(e.li,{children:"\u5b8c\u5168\u652f\u6301\u4e8b\u52a1\u7684ACID\u7279\u6027"}),"\n",(0,l.jsx)(e.li,{children:"Redo Log \u548c Undo Log"}),"\n",(0,l.jsx)(e.li,{children:"\u652f\u6301\u884c\u7ea7\u9501"}),"\n",(0,l.jsx)(e.li,{children:"\u884c\u7ea7\u9501\u53ef\u4ee5\u6700\u5927\u7a0b\u5ea6\u7684\u652f\u6301\u5e76\u53d1"}),"\n",(0,l.jsx)(e.li,{children:"\u884c\u7ea7\u9501\u662f\u7531\u5b58\u50a8\u5f15\u64ce\u5c42\u5b9e\u73b0"}),"\n",(0,l.jsxs)(e.li,{children:["\u72b6\u6001\u68c0\u67e5 (",(0,l.jsx)(e.code,{children:"show engine innodb status"}),")"]}),"\n"]}),(0,l.jsx)(e.h3,{id:"\u4f7f\u7528\u573a\u666f",children:"\u4f7f\u7528\u573a\u666f"}),(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u4f7f\u7528\u4e8e\u5927\u591a\u6570OLTP \u5e94\u7528"}),"\n"]})]}),"\n",(0,l.jsx)(e.h2,{id:"myisam",children:"MyISAM"}),"\n",(0,l.jsxs)(e.admonition,{type:"info",children:[(0,l.jsx)(e.p,{children:"MySQL 5.5 \u4e4b\u524d\u7248\u672c\u9ed8\u8ba4\u5b58\u50a8\u5f15\u64ce"}),(0,l.jsx)(e.p,{children:"MyISAM \u5b58\u50a8\u5f15\u64ce\u8868 \u7531 MYD(\u6570\u636e)\u548cMYI(\u7d22\u5f15) \u4ee5\u53caFRM(\u9ed8\u8ba4\u8bb0\u5f55\u8868\u7ed3\u6784)\u7ec4\u6210"}),(0,l.jsx)(e.h3,{id:"\u7279\u6027-1",children:"\u7279\u6027"}),(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5e76\u53d1\u6027 \u548c \u9501 \uff08\uff09"}),"\n",(0,l.jsx)(e.li,{children:"\u4fee\u590d (check table ,repair table)"}),"\n",(0,l.jsx)(e.li,{children:"\u652f\u6301\u7684\u7d22\u5f15 (\u5168\u6587\u7d22\u5f15)"}),"\n",(0,l.jsx)(e.li,{children:"\u652f\u6301\u6570\u636e\u538b\u7f29 (myisampack  \u751f\u6210\u4e00\u4e2a old \u6587\u4ef6) \u53ea\u8bfb\u64cd\u4f5c"}),"\n"]}),(0,l.jsx)(e.h3,{id:"\u9002\u7528\u573a\u666f",children:"\u9002\u7528\u573a\u666f"}),(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u975e\u4e8b\u52a1\u6027\u5e94\u7528"}),"\n",(0,l.jsx)(e.li,{children:"\u53ea\u8bfb\u7c7b\u5e94\u7528"}),"\n",(0,l.jsx)(e.li,{children:"\u7a7a\u95f4\u7c7b\u5e94\u7528"}),"\n"]})]}),"\n",(0,l.jsx)(e.h2,{id:"csv",children:"CSV"}),"\n",(0,l.jsx)(e.admonition,{type:"info",children:(0,l.jsx)(e.p,{children:"\u6570\u636e\u4ee5\u6587\u672c\u5b58\u50a8\u5728\u6587\u4ef6\n.csv \u6587\u4ef6\u5b58\u50a8\u5185\u5bb9\n.csm \u6587\u4ef6\u5b58\u50a8\u8868\u7684\u5143\u6570\u636e\u548c\u8868\u72b6\u6001\u548c\u6570\u636e\u91cf\n.frm \u6587\u4ef6\u5b58\u50a8\u8868\u7ed3\u6784\u4fe1\u606f"})})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(a,{...n})}):a(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>t,x:()=>c});var l=i(96540);const s={},d=l.createContext(s);function t(n){const e=l.useContext(d);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),l.createElement(d.Provider,{value:e},n.children)}}}]);