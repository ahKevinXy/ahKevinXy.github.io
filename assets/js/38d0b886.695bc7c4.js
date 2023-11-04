"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[10337],{82916:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var c=o(85893),t=o(11151);const i={},s="\u6613\u9519\u70b9",d={id:"backend/go/note/esasy",title:"\u6613\u9519\u70b9",description:"2023\u5e7402\u670828\u65e50818",source:"@site/docs/backend/go/note/esasy.md",sourceDirName:"backend/go/note",slug:"/backend/go/note/esasy",permalink:"/docs/backend/go/note/esasy",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5185\u5b58\u6cc4\u6f0f\u76847\u79cd\u573a\u666f",permalink:"/docs/backend/go/note/2023-02-28/1"},next:{title:"\u5b98\u65b9\u6587\u6863",permalink:"/docs/backend/go/offical"}},r={},l=[{value:"Go Module\u4e2d\u5bf9\u4f9d\u8d56\u5e93\u7248\u672c\u7684\u5347\u7ea7\u4e0e\u964d\u7ea7",id:"go-module\u4e2d\u5bf9\u4f9d\u8d56\u5e93\u7248\u672c\u7684\u5347\u7ea7\u4e0e\u964d\u7ea7",level:2},{value:"\u5148\u770b\u9488\u5bf9tag\u8fdb\u884c\u5347\u964d\u7ea7",id:"\u5148\u770b\u9488\u5bf9tag\u8fdb\u884c\u5347\u964d\u7ea7",level:3},{value:"\u9488\u5bf9\u5206\u652f\u6216commit\u5347\u964d\u7ea7\uff08\u524d\u63d0\u662f\u77e5\u9053\u4e4b\u524d\u4e00\u4e2acommit\u7684\u4f2a\u7248\u672c\u4fe1\u606f\uff09",id:"\u9488\u5bf9\u5206\u652f\u6216commit\u5347\u964d\u7ea7\u524d\u63d0\u662f\u77e5\u9053\u4e4b\u524d\u4e00\u4e2acommit\u7684\u4f2a\u7248\u672c\u4fe1\u606f",level:3}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"\u6613\u9519\u70b9",children:"\u6613\u9519\u70b9"}),"\n",(0,c.jsx)(n.p,{children:"2023\u5e7402\u670828\u65e508:19:18"}),"\n",(0,c.jsx)(n.h2,{id:"go-module\u4e2d\u5bf9\u4f9d\u8d56\u5e93\u7248\u672c\u7684\u5347\u7ea7\u4e0e\u964d\u7ea7",children:"Go Module\u4e2d\u5bf9\u4f9d\u8d56\u5e93\u7248\u672c\u7684\u5347\u7ea7\u4e0e\u964d\u7ea7"}),"\n",(0,c.jsx)(n.p,{children:"Go Module\u5f15\u7528\u5176\u4ed6\u7684\u4f9d\u8d56\u5e93\u5206\u4e3a\u4e24\u79cd\u65b9\u5f0f\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u5f15\u7528\u8be5\u5e93\u7684\u67d0\u4e00\u4e2atag"}),"\n",(0,c.jsx)(n.li,{children:"\u5f15\u7528\u8be5\u5e93\u7684\u67d0\u4e00\u4e2a\u5206\u652f\uff08\u79f0\u4e4b\u4e3a\u4f2a\u7248\u672c\uff09"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"github.com/coreos/go-semver v0.3.0 //\u5f15\u7528tag\ngithub.com/coreos/go-systemd v0.0.0-20191104093116-d3cd4ed1dbcf //\u5f15\u7528\u5206\u652f\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u4f46\u662f\u4e0d\u7ba1\u662f\u5f15\u7528tag\u8fd8\u662f\u5f15\u7528\u5206\u652f\uff0c\u6307\u5411\u7684\u90fd\u662f\u8be5\u4ed3\u5e93\u7684\u5206\u652f\u6216tag\u63d0\u4ea4\u6700\u540e\u4e00\u4e2acommit\u65f6\u7684\u955c\u50cf\uff0c\u56e0\u800c\u7248\u672c\u7684\u5347\u7ea7\u4e0e\u964d\u7ea7\u7684\u6700\u5c0f\u9897\u7c92\u5ea6\u5c31\u662fcommit"}),"\n",(0,c.jsx)(n.h3,{id:"\u5148\u770b\u9488\u5bf9tag\u8fdb\u884c\u5347\u964d\u7ea7",children:"\u5148\u770b\u9488\u5bf9tag\u8fdb\u884c\u5347\u964d\u7ea7"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"# \u67e5\u770b\u8be5\u4f9d\u8d56\u5e93\u7684\u6240\u6709\u7248\u672c\ngo list -m -versions github.com/xuri/excelize/v2\n# \u8f93\u51fa\uff1a\ngithub.com/xuri/excelize/v2 v2.0.0 v2.0.1 v2.0.2 v2.1.0 v2.2.0 v2.3.0 v2.3.1 v2.3.2 v2.4.0 v2.4.1 v2.5.0 v2.6.0 v2.6.1\n\n# \u67e5\u770b\u5f53\u524d\u9879\u76ee\u4f9d\u8d56\u5e93\u7684\u7248\u672c\ngo list -m github.com/xuri/excelize/v2\n# \u8f93\u51fa\uff1a\ngithub.com/xuri/excelize/v2 v2.6.1\n\n# \u6307\u5b9a\u60f3\u8981\u5207\u6362\u5230\u7684\u7248\u672c\ngo get github.com/xuri/excelize/v2@v2.6.0\n# \u8f93\u51fa\uff1a\ngo: downloading github.com/xuri/excelize/v2 v2.6.0\ngo get: downgraded github.com/xuri/excelize/v2 v2.6.1 => v2.6.0\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u9488\u5bf9\u5206\u652f\u6216commit\u5347\u964d\u7ea7\u524d\u63d0\u662f\u77e5\u9053\u4e4b\u524d\u4e00\u4e2acommit\u7684\u4f2a\u7248\u672c\u4fe1\u606f",children:"\u9488\u5bf9\u5206\u652f\u6216commit\u5347\u964d\u7ea7\uff08\u524d\u63d0\u662f\u77e5\u9053\u4e4b\u524d\u4e00\u4e2acommit\u7684\u4f2a\u7248\u672c\u4fe1\u606f\uff09"}),"\n",(0,c.jsx)(n.p,{children:"\u6bd4\u5982\u4f60\u4e4b\u524d\u4e00\u4e2a\u5f15\u7528\u7684commit\u662f"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"github.com/coreos/go-systemd v0.0.0-20191104093116-d3cd4ed1dbcf\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u76ee\u524d\u662f\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"\ngithub.com/coreos/go-systemd v0.0.0-20191104093116-d3cd4ed1dbcf\n\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u60f3\u8981\u5207\u6362\u56de\u53bb\uff0c\u53ef\u80fdgo get\u5c31\u4e0d\u662f\u5f88\u7ba1\u7528\u4e86\uff0c\u90a3\u4e48\u5c31\u9700\u8981\u4f7f\u7528\u65b0\u7684\u65b9\u5f0f:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"\nreplace github.com/coreos/go-systemd => github.com/coreos/go-systemd .0.0-20191104093116-d3cd4ed1dbcf\n\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u8fd9\u79cd\u662f\u56e0\u4e3a\u4f9d\u8d56\u6a21\u5757\u7684\u4ee3\u7801\u4ed3\u5e93\u4e0a\u4e0d\u5b58\u5728\u4efb\u4f55tag\uff0c\u6240\u4ee5go get \u9ed8\u8ba4\u62c9\u53d6\u7684\u662fmaster\u5206\u652f\u6700\u65b0\u4e00\u6b21commit\u5bf9\u5e94\u7248\u672c\u7684\u4ee3\u7801\uff0c\u5e76\u4e14\u5728go.mod\u6587\u4ef6\u91cc\u4e3a\u6a21\u5757\u5206\u914d\u683c\u5f0f\u4e3a"})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>d,a:()=>s});var c=o(67294);const t={},i=c.createContext(t);function s(e){const n=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);