"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[61831],{71463:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>c});var r=i(85893),o=i(11151);const t={title:"Zookeeper",tags:["Java"],authors:"ahKevinXy",description:"Zookeeper \u4ecb\u7ecd",image:"https://source.unsplash.com/random?people&57"},l="Zookeeper",s={permalink:"/blog/2023/10/30/zookeeper",source:"@site/blog/2023/10/30/zookeeper.md",title:"Zookeeper",description:"Zookeeper \u4ecb\u7ecd",date:"2023-10-30T00:00:00.000Z",formattedDate:"October 30, 2023",tags:[{label:"Java",permalink:"/blog/tags/java"}],readingTime:1.84,hasTruncateMarker:!1,authors:[{name:"ahKevinXy",title:"\u4f5c\u8005",url:"https://github.com/ahKevinXy",email:"ahkevinxy@gmail.com",imageURL:"/img/headers.png",key:"ahKevinXy"}],frontMatter:{title:"Zookeeper",tags:["Java"],authors:"ahKevinXy",description:"Zookeeper \u4ecb\u7ecd",image:"https://source.unsplash.com/random?people&57"},unlisted:!1,prevItem:{title:"Spring  \u5b66\u4e60\u7b14\u8bb0",permalink:"/blog/2023/11/05/springboot"},nextItem:{title:"\u96ea\u82b1\u7b97\u6cd5",permalink:"/blog/2023/10/29/snowflake"}},a={authorsImageUrls:[void 0]},c=[{value:"\u7279\u6027",id:"\u7279\u6027",level:2},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"zoo.cfg \u914d\u7f6e\u8bf4\u660e",id:"zoocfg-\u914d\u7f6e\u8bf4\u660e",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Zookeeper \u662f\u4e00\u4e2a\u9488\u5bf9\u5206\u5e03\u5f0f\u5e94\u7528\u7a0b\u5e8f\u7684\u5206\u5e03\u5f0f\u5f00\u6e90\u534f\u8c03\u670d\u52a1,\u5206\u5e03\u5f0f\u5e94\u7528\u53ef\u4ee5\u5728\u8fd9\u4e9b\u670d\u52a1\u7684\u57fa\u7840\u4e0a\u6784\u5efa\u66f4\u9ad8\u7ea7\u7684\u540c\u6b65,\u914d\u7f6e\u7ef4\u62a4,\u7ec4\u548c\u547d\u540d\u670d\u52a1"}),"\n",(0,r.jsx)(n.p,{children:"Zookeeper\u5141\u8bb8\u5206\u5e03\u5f0f\u8fdb\u7a0b\u901a\u8fc7\u5171\u4eab\u7684\u5206\u5c42\u7a7a\u95f4\u76f8\u4e92\u534f\u8c03"}),"\n",(0,r.jsx)(n.p,{children:"\u4e2d\u95f4\u4ef6 \u63d0\u4f9b\u534f\u8c03\u670d\u52a1"}),"\n",(0,r.jsx)(n.p,{children:"\u4f5c\u7528\u4e8e\u5206\u5e03\u5f0f\u7cfb\u7edf"}),"\n",(0,r.jsx)(n.p,{children:"\u652f\u6301Java \u901a\u8fc7java\u548cC\u8bed\u8a00\u7684\u5ba2\u6237\u7aefapi"}),"\n",(0,r.jsx)(n.h2,{id:"\u7279\u6027",children:"\u7279\u6027"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u987a\u5e8f\u4e00\u81f4\u6027"}),"\n",(0,r.jsx)(n.li,{children:"\u539f\u5b50\u6027"}),"\n",(0,r.jsx)(n.li,{children:"\u5355\u4e00\u89c6\u56fe"}),"\n",(0,r.jsx)(n.li,{children:"\u53ef\u9760\u6027"}),"\n",(0,r.jsx)(n.li,{children:"\u53ca\u65f6\u6027"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u7b80\u5355\u7684api"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"create"})," \u5728\u6811\u79cd\u67d0\u4e2a\u4f4d\u7f6e\u521b\u5efa\u8282\u70b9"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"delete"})," \u5220\u9664\u4e00\u4e2a\u8282\u70b9"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"exist"})," \u6d4b\u8bd5\u67d0\u4e2a\u4f4d\u7f6e\u8282\u70b9\u72b6\u6001"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"get data"})," \u83b7\u53d6\u8282\u70b9\u6570\u636e"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"set data"})," \u5c06\u6570\u636e\u5199\u5165\u8282\u70b9"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"get children"})," \u68c0\u7d22\u8282\u70b9\u6570\u636e"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"sync"})," \u7b49\u5f85\u6570\u636e\u4f20\u64ad"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4ecb\u7ecd",children:"\u4ecb\u7ecd"}),"\n",(0,r.jsxs)(n.p,{children:["\u5b98\u7f51\u4e0b\u8f7d\u5730\u5740 :",(0,r.jsx)(n.a,{href:"http://zookeeper.apache.org/releases.html",children:"download"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u4e0b\u8f7d bin\n\nwget https://www.apache.org/dyn/closer.lua/zookeeper/zookeeper-3.9.1/apache-zookeeper-3.9.1-bin.tar.gz\n \n # \u89e3\u538b\u6587\u4ef6 \n  tar -zxvf apache-zookeeper-3.9.1-bin.tar.gz \n  \n  # \u76ee\u5f55\u7ed3\u6784 \n  # bin  conf  docs  lib  LICENSE.txt  logs  NOTICE.txt  README.md  README_packaging.md\n  \n  \n # \u751f\u6210\u914d\u7f6e\u6587\u4ef6\n # \u8fdb\u5165 conf\n \n cp zoo_sample.cfg zoo.cfg \n \n # \u8fdb\u5165 bin \u76ee\u5f55\n \n # \u542f\u52a8 zookeeper\n ./zkServer.sh start \n \n # zkCli.sh\n \n./zkCli.sh -server 127.0.0.1:2181\n\n  \n"})}),"\n",(0,r.jsx)(n.h2,{id:"zoocfg-\u914d\u7f6e\u8bf4\u660e",children:"zoo.cfg \u914d\u7f6e\u8bf4\u660e"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"tickTime \u7528\u4e8e\u8ba1\u7b97\u7684\u65f6\u95f4\u5355\u5143"}),"\n",(0,r.jsx)(n.li,{children:"initLimit \u7528\u4e8e\u96c6\u7fa4,\u5141\u8bb8 \u4ece\u8282\u70b9\u8fde\u63a5 \u5e76\u540c\u6b65\u5230master\u8282\u70b9\u7684\u521d\u59cb\u5316\u8fde\u63a5\u65f6\u95f4.\u4ee5tickTime\u7684\u500d\u6570\u6765\u8868\u793a"}),"\n",(0,r.jsx)(n.li,{children:"syncLimit \u7528\u4e8e\u96c6\u7fa4 master\u4e3b\u8282\u70b9\u4e0e\u4ece\u8282\u70b9\u4e4b\u95f4\u53d1\u9001\u6d88\u606f,\u8bf7\u6c42\u548c\u5e94\u7b54\u65f6\u95f4\u957f\u5ea6(\u5fc3\u8df3\u673a\u5236)"}),"\n",(0,r.jsx)(n.li,{children:"dataDir \u5fc5\u987b\u914d\u7f6e"}),"\n",(0,r.jsx)(n.li,{children:"dataLogDir \u65e5\u5fd7\u6587\u4ef6"}),"\n",(0,r.jsx)(n.li,{children:"clientPort \u8fde\u63a5\u670d\u52a1\u5668\u7684\u7aef\u53e3"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>l});var r=i(67294);const o={},t=r.createContext(o);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);