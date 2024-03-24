"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[33680],{71971:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=t(74848),s=t(28453);const r={},p="pm2",a={id:"front/tools/pm2",title:"pm2",description:"pm2\uff08process manager\uff09\u662f\u4e00\u4e2a\u8fdb\u7a0b\u7ba1\u7406\u5de5\u5177\uff0c\u7ef4\u62a4\u4e00\u4e2a\u8fdb\u7a0b\u5217\u8868\uff0c\u53ef\u4ee5\u7528\u5b83\u6765\u7ba1\u7406\u4f60\u7684node\u8fdb\u7a0b\uff0c\u8d1f\u8d23\u6240\u6709\u6b63\u5728\u8fd0\u884c\u7684\u8fdb\u7a0b\uff0c\u5e76\u67e5\u770bnode\u8fdb\u7a0b\u7684\u72b6\u6001\uff0c\u4e5f\u652f\u6301\u6027\u80fd\u76d1\u63a7\uff0c\u8d1f\u8f7d\u5747\u8861\u7b49\u529f\u80fd\u3002",source:"@site/docs/front/tools/pm2.md",sourceDirName:"front/tools",slug:"/front/tools/pm2",permalink:"/docs/front/tools/pm2",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5de5\u5177",permalink:"/docs/front/tools/"},next:{title:"TS",permalink:"/docs/front/ts/"}},i={},c=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:2},{value:"\u914d\u7f6e\u6587\u4ef6\u542f\u52a8\u90e8\u7f72\u9879\u76ee",id:"\u914d\u7f6e\u6587\u4ef6\u542f\u52a8\u90e8\u7f72\u9879\u76ee",level:2}];function l(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"pm2",children:"pm2"}),"\n",(0,o.jsx)(e.admonition,{type:"info",children:(0,o.jsx)(e.p,{children:"pm2\uff08process manager\uff09\u662f\u4e00\u4e2a\u8fdb\u7a0b\u7ba1\u7406\u5de5\u5177\uff0c\u7ef4\u62a4\u4e00\u4e2a\u8fdb\u7a0b\u5217\u8868\uff0c\u53ef\u4ee5\u7528\u5b83\u6765\u7ba1\u7406\u4f60\u7684node\u8fdb\u7a0b\uff0c\u8d1f\u8d23\u6240\u6709\u6b63\u5728\u8fd0\u884c\u7684\u8fdb\u7a0b\uff0c\u5e76\u67e5\u770bnode\u8fdb\u7a0b\u7684\u72b6\u6001\uff0c\u4e5f\u652f\u6301\u6027\u80fd\u76d1\u63a7\uff0c\u8d1f\u8f7d\u5747\u8861\u7b49\u529f\u80fd\u3002"})}),"\n",(0,o.jsx)(e.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"\nnpm install pm2 -g \n\n"})}),"\n",(0,o.jsx)(e.h2,{id:"\u5e38\u7528\u547d\u4ee4",children:"\u5e38\u7528\u547d\u4ee4"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:" # \u542f\u52a8\u7a0b\u5e8f\n pm2 start start.js\n\n # \u542f\u52a8\u7a0b\u5e8f\u6307\u5b9a\u7a0b\u5e8f\u540d\n pm2 start app.js --name \u5b98\u7f51\n\n # \u96c6\u7fa4\u5f0f\u542f\u52a8\n # i \u8868\u793a \u5b9e\u4f8b\u6570\u91cf   max pm2 \u6307\u5b9acpm \u7684\u6570\u91cf \u4e5f\u53ef\u4ee5\u81ea\u5df1\u6307\u5b9a\n pm2 start app.js -i max \n\n\n # \u6dfb\u52a0\u76d1\u63a7\npm2 start app.js --watch\n\n# \u67e5\u770b\u6240\u6709\u8fdb\u7a0b\npm2 list\n\n# \u5220\u9664\u8fdb\u7a0b \u540d\u79f0\u6216\u8005ID\npm2 delete name \n\n# \u5220\u9664\u6240\u6709\u8fdb\u7a0b\npm2 delete all \n\n# \u67e5\u770b\u8fdb\u7a0b\u72b6\u6001\npm2 descibe name\n\n# \u67e5\u770b\u8d44\u6e90\u6d88\u8017\u60c5\u51b5\npm2 monit\n\n# \u91cd\u542f\u8fdb\u7a0b\npm2 restart\n\n# \u5173\u95ed\u8fdb\u7a0b\npm2 stop name \n\n# \u8bbe\u7f6e\u5f00\u673a\u542f\u52a8 \uff0c\u5176\u4ed6\u7cfb\u7edf\u66ff\u6362\u6700\u540e\u4e00\u4e2a\u9009\u9879\uff08\u53ef\u9009\u9879\uff1aubuntu, centos, redhat, gentoo, systemd, darwin, amazon\uff09\npm2 startup centos\n\n# \u4fdd\u5b58\u914d\u7f6e \u91cd\u8981 \u4e0d\u7136\u7535\u8111\u91cd\u542f\u6240\u6709\u90fd\u5931\u6548\npm2 save\n"})}),"\n",(0,o.jsx)(e.h2,{id:"\u914d\u7f6e\u6587\u4ef6\u542f\u52a8\u90e8\u7f72\u9879\u76ee",children:"\u914d\u7f6e\u6587\u4ef6\u542f\u52a8\u90e8\u7f72\u9879\u76ee"}),"\n",(0,o.jsx)(e.p,{children:"\u9879\u76ee\u8ddf\u76ee\u5f55\u914d\u7f6e"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"\n# deploy.yaml\n\napps:\n\n  - script: ./start.js       # \u5165\u53e3\u6587\u4ef6\n\n    name: 'app'              # \u7a0b\u5e8f\u540d\u79f0\n\n    env:                     # \u73af\u5883\u53d8\u91cf\n\n      COMMON_VARIABLE: true\n\n    env_production:\n\n      NODE_ENV: production\n\n \n\ndeploy:                     # \u90e8\u7f72\u811a\u672c\n\n  production:               # \u751f\u4ea7\u73af\u5883\n\n    user: kevin            # \u670d\u52a1\u5668\u7684\u7528\u6237\u540d\n\n    host: 192.168.1.11     # \u670d\u52a1\u5668\u7684ip\u5730\u5740\n\n    port: 22                # ssh\u7aef\u53e3\n\n    ref: origin/master      # \u8981\u62c9\u53d6\u7684git\u5206\u652f\n\n    ssh_options: StrictHostKeyChecking=no # SSH \u516c\u94a5\u68c0\u67e5\n\n    repo: https://github.com/**.git # \u8fdc\u7a0b\u4ed3\u5e93\u5730\u5740\n\n    path: /home              # \u62c9\u53d6\u5230\u670d\u52a1\u5668\u67d0\u4e2a\u76ee\u5f55\u4e0b\n\n    pre-deploy: git fetch --all # \u90e8\u7f72\u524d\u6267\u884c\n\n    post-deploy: npm install &&  pm2 reload deploy.yaml --env production # \u90e8\u7f72\u540e\u6267\u884c\n\n    env:\n\n      NODE_ENV: production\n"})})]})}function d(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>p,x:()=>a});var o=t(96540);const s={},r=o.createContext(s);function p(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:p(n.components),o.createElement(r.Provider,{value:e},n.children)}}}]);