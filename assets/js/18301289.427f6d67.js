"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[9211],{3905:function(e,t,n){n.d(t,{Zo:function(){return g},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,m=s["".concat(c,".").concat(d)]||s[d]||p[d]||i;return n?r.createElement(m,l(l({ref:t},g),{},{components:n})):r.createElement(m,l({ref:t},g))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3783:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={},c="git \u57fa\u7840",u={unversionedId:"backend/git/base",id:"backend/git/base",title:"git \u57fa\u7840",description:"\u6d41\u7a0b",source:"@site/docs/backend/git/base.md",sourceDirName:"backend/git",slug:"/backend/git/base",permalink:"/docs/backend/git/base",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"git",permalink:"/docs/backend/git/"},next:{title:"\u5e38\u89c1\u547d\u4ee4",permalink:"/docs/backend/git/command"}},g={},p=[{value:"\u6d41\u7a0b",id:"\u6d41\u7a0b",level:2},{value:"\u8bbe\u7f6e\u9ed8\u8ba4\u6253\u5f00\u7684\u7f16\u8f91\u5668",id:"\u8bbe\u7f6e\u9ed8\u8ba4\u6253\u5f00\u7684\u7f16\u8f91\u5668",level:2},{value:"\u521d\u59cb\u5316 git \u914d\u7f6e",id:"\u521d\u59cb\u5316-git-\u914d\u7f6e",level:2},{value:"\u4fdd\u5b58\u7528\u6237\u540d",id:"\u4fdd\u5b58\u7528\u6237\u540d",level:2},{value:"\u663e\u793a\u914d\u7f6e",id:"\u663e\u793a\u914d\u7f6e",level:2},{value:"\u6e05\u9664\u914d\u7f6e",id:"\u6e05\u9664\u914d\u7f6e",level:2},{value:"\u914d\u7f6e\u7684\u4f18\u5148\u7ea7",id:"\u914d\u7f6e\u7684\u4f18\u5148\u7ea7",level:2},{value:"\u514b\u9686\u4ed3\u5e93",id:"\u514b\u9686\u4ed3\u5e93",level:2},{value:"\u5df2\u6709\u6587\u4ef6\u5939\u6216\u4ed3\u5e93",id:"\u5df2\u6709\u6587\u4ef6\u5939\u6216\u4ed3\u5e93",level:2},{value:"\u5bfc\u5165\u4ee3\u7801\u5e93",id:"\u5bfc\u5165\u4ee3\u7801\u5e93",level:3},{value:"\u5220\u9664\u5206\u652f",id:"\u5220\u9664\u5206\u652f",level:3},{value:"\u5207\u6362tags",id:"\u5207\u6362tags",level:3}],s={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"git-\u57fa\u7840"},"git \u57fa\u7840"),(0,i.kt)("h2",{id:"\u6d41\u7a0b"},"\u6d41\u7a0b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5c06Git\u7684\u4e00\u4e2a\u5b58\u50a8\u5e93\u514b\u9686\u4e3a\u5de5\u4f5c\u526f\u672c\u3002\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0/\u7f16\u8f91\u6587\u4ef6\u4fee\u6539\u5de5\u4f5c\u526f\u672c\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u6709\u5fc5\u8981\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7\u8ba9\u5176\u4ed6\u5f00\u53d1\u4eba\u5458\u4e00\u8d77\u6765\u66f4\u6539/\u66f4\u65b0\u5de5\u4f5c\u526f\u672c\u3002\u5728\u63d0\u4ea4\u4e4b\u524d\u67e5\u770b\u66f4\u6539\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u63d0\u4ea4\u66f4\u6539\uff1a\u5982\u679c\u4e00\u5207\u6b63\u5e38\uff0c\u90a3\u4e48\u5c06\u60a8\u7684\u66f4\u6539\u63a8\u9001\u5230\u5b58\u50a8\u5e93\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u63d0\u4ea4\u540e\uff0c\u5982\u679c\u610f\u8bc6\u5230\u67d0\u4e9b\u9519\u8bef\u5e76\u4fee\u6539\u9519\u8bef\u540e\uff0c\u5219\u5c06\u6700\u540e\u4e00\u4e2a\u6b63\u786e\u7684\u4fee\u6539\u63d0\u4ea4\u5e76\u5c06\u63a8\u9001\u5230\u5b58\u50a8\u5e93\u3002")),(0,i.kt)("h2",{id:"\u8bbe\u7f6e\u9ed8\u8ba4\u6253\u5f00\u7684\u7f16\u8f91\u5668"},"\u8bbe\u7f6e\u9ed8\u8ba4\u6253\u5f00\u7684\u7f16\u8f91\u5668"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git config --global core.editor emacs\n")),(0,i.kt)("h2",{id:"\u521d\u59cb\u5316-git-\u914d\u7f6e"},"\u521d\u59cb\u5316 git \u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'    git config --global user.name "ahKevinXy"\n    git config --global user.email "2502329620@qq.com"\n\n    --global \u5bf9\u767b\u5f55\u7528\u6237\u6240\u6709\u4ed3\u5e93\u6709\u6548\n    --local \u5bf9\u5355\u72ec\u9879\u76ee\u4ed3\u5e93\u6709\u6548\n    --system \u5bf9\u7cfb\u7edf\u6240\u6709\u7528\u6237\u6709\u6548\n')),(0,i.kt)("h2",{id:"\u4fdd\u5b58\u7528\u6237\u540d"},"\u4fdd\u5b58\u7528\u6237\u540d"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u9ed8\u8ba415\u5206\u949f\ngit config --global credential.helper cache\n# \u8bbe\u7f6e\u65f6\u95f4\ngit config credential.helper 'cache --timeout=3600'\n\n# \u957f\u671f\u4fdd\u5b58\n\ngit config --global credential.helper store\ngit config credential.helper store\n\n# git push \u8d85\u8fc7100M\u89e3\u51b3\u529e\u6cd5\ngit config http.postBuffer 524288000 # \uff08500M\uff09\n")),(0,i.kt)("h2",{id:"\u663e\u793a\u914d\u7f6e"},"\u663e\u793a\u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u83b7\u53d6\u914d\u7f6e\n git config --list --local\n\n git cofig --list --global\n\n git config --list --system\n")),(0,i.kt)("h2",{id:"\u6e05\u9664\u914d\u7f6e"},"\u6e05\u9664\u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git config  --unset  --local user.name # user.email\n")),(0,i.kt)("h2",{id:"\u914d\u7f6e\u7684\u4f18\u5148\u7ea7"},"\u914d\u7f6e\u7684\u4f18\u5148\u7ea7"),(0,i.kt)("p",null,"local>global>system"),(0,i.kt)("h2",{id:"\u514b\u9686\u4ed3\u5e93"},"\u514b\u9686\u4ed3\u5e93"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone xxxxx\n")),(0,i.kt)("h2",{id:"\u5df2\u6709\u6587\u4ef6\u5939\u6216\u4ed3\u5e93"},"\u5df2\u6709\u6587\u4ef6\u5939\u6216\u4ed3\u5e93"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    cd existing_folder\n    git init\n    git remote add origin XXXXX.git\n    git add .\n    git commit\n    git push -u origin master\n")),(0,i.kt)("h3",{id:"\u5bfc\u5165\u4ee3\u7801\u5e93"},"\u5bfc\u5165\u4ee3\u7801\u5e93"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --bare https://git.example.com/your/project.git your_path\ncd your_path\ngit remote set-url origin xxxx.git\ngit push --mirror\n\n")),(0,i.kt)("h3",{id:"\u5220\u9664\u5206\u652f"},"\u5220\u9664\u5206\u652f"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u5728\u5220\u9664\u5206\u652f\u7684\u65f6\u5019,\u6211\u4eec\u4f1a\u4f7f\u7528git branch --delete dev\u6765\u6267\u884c.\u6709\u65f6\u8fd8\u4f1a\u901a\u8fc7\u7f29\u5199git branch -d dev\u6765\u4ee3\u66ff,\u4f7f\u7528\u4e2d\u6211\u4eec\u53d1\u73b0\u8fd8\u6709git branch -D dev\u7684\u5199\u6cd5,\u4ed6\u4eec\u6709\u4ec0\u4e48\u533a\u522b\u5462?"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"-d\u662f--delete\u7684\u7f29\u5199,\u5728\u4f7f\u7528--delete\u5220\u9664\u5206\u652f\u65f6,\u8be5\u5206\u652f\u5fc5\u987b\u5b8c\u5168\u548c\u5b83\u7684\u4e0a\u6e38\u5206\u652fmerge\u5b8c\u6210(\u4e86\u89e3\u4e0a\u6e38\u5206\u652f,\u53ef\u4ee5\u70b9\u51fb\u67e5\u770b\u94fe\u63a5),\u5982\u679c\u6ca1\u6709\u4e0a\u6e38\u5206\u652f,\u5fc5\u987b\u8981\u548cHEAD\u5b8c\u5168merge")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"-D\u662f--delete --force\u7684\u7f29\u5199,\u8fd9\u6837\u5199\u53ef\u4ee5\u5728\u4e0d\u68c0\u67e5merge\u72b6\u6001\u7684\u60c5\u51b5\u4e0b\u5220\u9664\u5206\u652f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"--force\u7b80\u5199-f,\u4f5c\u7528\u662f\u5c06\u5f53\u524dbranch\u91cd\u7f6e\u5230\u521d\u59cb\u70b9(startpoint),\u5982\u679c\u4e0d\u4f7f\u7528--force\u7684\u8bdd,git\u5206\u652f\u65e0\u6cd5\u4fee\u6539\u4e00\u4e2a\u5df2\u7ecf\u5b58\u5728\u7684\u5206\u652f.")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5220\u9664\u672c\u5730\u5206\u652f\ngit branch --delete dev\n\n# \u5220\u9664\u8fdc\u7a0b\u5206\u652f\n\ngit push origin --delete branch\n\n# \u5220\u9664\u8ffd\u8e2a\u5206\u652f\ngit branch --delete --remotes <remote>/<branch>\n")),(0,i.kt)("h3",{id:"\u5207\u6362tags"},"\u5207\u6362tags"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770btag\n\ngit tag\n\n# \u5207\u6362\u5230\u5bf9\u5e94tag\ngit check tag_name\n# tag \u76f8\u5f53\u4e8e\u5feb\u7167 \u4e0d\u80fd\u5728\u4e0a\u9762\u8fdb\u884c\u4fee\u6539 \u4fee\u6539\u9700\u8981\u91cd\u65b0\u5207\u5206\u652f\u8fdb\u884c\u5f00\u53d1\n\ngit checkout -b branch_name tag_name\n\n")))}d.isMDXComponent=!0}}]);