"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[33605],{98221:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(85893),a=t(11151);const o={title:"Go  \u8bbe\u8ba1\u6a21\u5f0f",tags:["go","\u8bbe\u8ba1\u6a21\u5f0f"],authors:"ahKevinXy",description:"\u5982\u4f55\u4f7f\u7528go\u8bbe\u8ba1\u6a21\u5f0f",image:"https://source.unsplash.com/random?people&39"},i="go \u8bbe\u8ba1\u6a21\u5f0f",l={permalink:"/blog/2023/09/17/design",source:"@site/blog/2023/09/17/design.md",title:"Go  \u8bbe\u8ba1\u6a21\u5f0f",description:"\u5982\u4f55\u4f7f\u7528go\u8bbe\u8ba1\u6a21\u5f0f",date:"2023-09-17T00:00:00.000Z",formattedDate:"2023\u5e749\u670817\u65e5",tags:[{label:"go",permalink:"/blog/tags/go"},{label:"\u8bbe\u8ba1\u6a21\u5f0f",permalink:"/blog/tags/\u8bbe\u8ba1\u6a21\u5f0f"}],readingTime:.67,hasTruncateMarker:!0,authors:[{name:"ahKevinXy",title:"\u4f5c\u8005",url:"https://github.com/ahKevinXy",email:"ahkevinxy@gmail.com",imageURL:"/img/headers.png",key:"ahKevinXy"}],frontMatter:{title:"Go  \u8bbe\u8ba1\u6a21\u5f0f",tags:["go","\u8bbe\u8ba1\u6a21\u5f0f"],authors:"ahKevinXy",description:"\u5982\u4f55\u4f7f\u7528go\u8bbe\u8ba1\u6a21\u5f0f",image:"https://source.unsplash.com/random?people&39"},unlisted:!1,prevItem:{title:"pods",permalink:"/blog/2023/09/25/pods"},nextItem:{title:"\u524d\u7aef FontSize \u5bf9\u6bd4",permalink:"/blog/2023/09/17/front"}},s={authorsImageUrls:[void 0]},c=[{value:"\u521b\u9020\u6027\u6a21\u578b",id:"\u521b\u9020\u6027\u6a21\u578b",level:2},{value:"\u7b80\u5355\u5de5\u5382\u6a21\u5f0f",id:"\u7b80\u5355\u5de5\u5382\u6a21\u5f0f",level:3},{value:"\u62bd\u8c61\u5de5\u5382",id:"\u62bd\u8c61\u5de5\u5382",level:3}];function p(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u8bbe\u8ba1\u6a21\u5f0f\u7684\u539f\u5219"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u5355\u4e00\u804c\u8d23\u539f\u5219"}),"\n",(0,r.jsx)(n.li,{children:"\u5f00\u95ed\u539f\u5219"}),"\n",(0,r.jsx)(n.li,{children:"\u91cc\u6c0f\u4ee3\u6362\u539f\u5219"}),"\n",(0,r.jsx)(n.li,{children:"\u4f9d\u8d56\u5012\u8f6c\u539f\u5219"}),"\n",(0,r.jsx)(n.li,{children:"\u63a5\u53e3\u9694\u79bb\u539f\u5219"}),"\n",(0,r.jsx)(n.li,{children:"\u5408\u6210\u590d\u7528\u539f\u5219"}),"\n",(0,r.jsx)(n.li,{children:"\u8fea\u7c73\u7279\u6cd5\u5219"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u521b\u9020\u6027\u6a21\u578b",children:"\u521b\u9020\u6027\u6a21\u578b"}),"\n",(0,r.jsx)(n.h3,{id:"\u7b80\u5355\u5de5\u5382\u6a21\u5f0f",children:"\u7b80\u5355\u5de5\u5382\u6a21\u5f0f"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\ntype Fruit interface {\n\tShow()\n}\n\ntype AppleFactory struct {\n\tFruit\n}\ntype BalanceFactory struct {\n\tFruit\n}\ntype Factory struct {\n\t\n}\n\nfunc (f *Factory)CreateFactory(kind string) Fruit {\n\tswitch kind {\n\tcase "apple":\n\t\treturn new(AppleFactory)\n\tcase "balance":\n\t\treturn  new(BalanceFactory)\n        \n\t}\n\t\n\treturn nil\n}\n\nfunc main()  {\n    f := new(Factory)\n\tapple := f.CreateFactory("apple")\n\tapple.Show()\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u62bd\u8c61\u5de5\u5382",children:"\u62bd\u8c61\u5de5\u5382"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go"})})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var r=t(67294);const a={},o=r.createContext(a);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);