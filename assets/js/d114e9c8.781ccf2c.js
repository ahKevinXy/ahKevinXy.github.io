"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[16453],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>s});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,s=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(s,l(l({ref:t},g),{},{components:n})):r.createElement(s,l({ref:t},g))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88638:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={},l="\u5e38\u89c1\u547d\u4ee4",o={unversionedId:"backend/git/command",id:"backend/git/command",title:"\u5e38\u89c1\u547d\u4ee4",description:"\u914d\u7f6e\u4fee\u6539",source:"@site/docs/backend/git/command.md",sourceDirName:"backend/git",slug:"/backend/git/command",permalink:"/docs/backend/git/command",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"git \u57fa\u7840",permalink:"/docs/backend/git/base"},next:{title:"\u5b89\u88c5",permalink:"/docs/backend/git/install"}},p={},c=[{value:"\u914d\u7f6e\u4fee\u6539",id:"\u914d\u7f6e\u4fee\u6539",level:2},{value:"\u67e5\u770bgit \u76ee\u5f55",id:"\u67e5\u770bgit-\u76ee\u5f55",level:2},{value:"git grep",id:"git-grep",level:2},{value:"\u6807\u7b7e",id:"\u6807\u7b7e",level:2},{value:"\u67e5\u770b\u63d0\u4ea4\u5386\u53f2",id:"\u67e5\u770b\u63d0\u4ea4\u5386\u53f2",level:2},{value:"\u67e5\u770bgit \u72b6\u6001",id:"\u67e5\u770bgit-\u72b6\u6001",level:2},{value:"\u5220\u9664\u672c\u5730\u5206\u652f",id:"\u5220\u9664\u672c\u5730\u5206\u652f",level:2},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:2},{value:"\u4e0b\u8f7d\u4ee3\u7801",id:"\u4e0b\u8f7d\u4ee3\u7801",level:2},{value:"\u6dfb\u52a0\u6587\u4ef6\u5230\u7d22\u5f15\u533a",id:"\u6dfb\u52a0\u6587\u4ef6\u5230\u7d22\u5f15\u533a",level:2},{value:"\u521b\u5efa\u63d0\u4ea4",id:"\u521b\u5efa\u63d0\u4ea4",level:2},{value:"\u63d0\u4ea4",id:"\u63d0\u4ea4",level:2},{value:"\u521b\u5efa\u5206\u652f",id:"\u521b\u5efa\u5206\u652f",level:2},{value:"\u67e5\u770b\u672c\u5730\u4ed3\u5e93\u5bf9\u5e94\u8fdc\u7a0b\u5206\u652f",id:"\u67e5\u770b\u672c\u5730\u4ed3\u5e93\u5bf9\u5e94\u8fdc\u7a0b\u5206\u652f",level:2},{value:"\u5c06\u672c\u5730\u5206\u652f\u548c\u8fdc\u7a0b\u5206\u652f\u5efa\u7acb\u5bf9\u5e94",id:"\u5c06\u672c\u5730\u5206\u652f\u548c\u8fdc\u7a0b\u5206\u652f\u5efa\u7acb\u5bf9\u5e94",level:2},{value:"\u548c\u8fdc\u7a0b\u5206\u652f\u540c\u6b65",id:"\u548c\u8fdc\u7a0b\u5206\u652f\u540c\u6b65",level:2},{value:"\u548c\u8fdc\u7a0b\u5206\u652f\u540c\u6b65\u5f3a\u5236",id:"\u548c\u8fdc\u7a0b\u5206\u652f\u540c\u6b65\u5f3a\u5236",level:2},{value:"\u5207\u6362\u5206\u652f",id:"\u5207\u6362\u5206\u652f",level:2},{value:"\u67e5\u770b\u5f53\u524d\u5206\u652f\u72b6\u6001",id:"\u67e5\u770b\u5f53\u524d\u5206\u652f\u72b6\u6001",level:2},{value:"\u5c06\u672c\u5730\u63a8\u9001\u5230\u8fdc\u7a0b\u4ed3\u5e93",id:"\u5c06\u672c\u5730\u63a8\u9001\u5230\u8fdc\u7a0b\u4ed3\u5e93",level:2},{value:"\u4fee\u6539\u5206\u652f",id:"\u4fee\u6539\u5206\u652f",level:2}],g={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5e38\u89c1\u547d\u4ee4"},"\u5e38\u89c1\u547d\u4ee4"),(0,a.kt)("h2",{id:"\u914d\u7f6e\u4fee\u6539"},"\u914d\u7f6e\u4fee\u6539"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git config -e # \u9488\u5bf9 \u9879\u76ee .git \u76ee\u5f55\u4e0bconfig \u8fdb\u884c\u4fee\u6539\n\ngit config -e --global # \u5bf9\u4e2a\u4eba home \u76ee\u5f55\u4e0b\u8fdb\u884c\u4fee\u6539\n\ngit config -e --system  # \u5bf9\u7cfb\u7edf\u8fdb\u884c\u4fee\u6539\n\n\ngit config --unset --global a.b # \u5220\u9664\u914d\u7f6e\n\n#e.g git config --unset --global user.name \n#e.g  git config --unset --global user.email \n\n\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"}," git config -e \u8fdb\u884c\u4fee\u6539\u7684\u8bed\u6cd5"),(0,a.kt)("p",{parentName:"admonition"}," git config ",(0,a.kt)("inlineCode",{parentName:"p"},"<section>.<key> <value>")),(0,a.kt)("p",{parentName:"admonition"}," git config -e a.b c"),(0,a.kt)("p",{parentName:"admonition"}," git commit --allow"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-yarm"},"[a]\n   b=c\n"))),(0,a.kt)("h2",{id:"\u67e5\u770bgit-\u76ee\u5f55"},"\u67e5\u770bgit \u76ee\u5f55"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git rev-parse --git-dir # \u67e5\u770b .git\u76ee\u5f55\n\ngit rev-parse --show-toplevel # \u67e5\u770b\u6839\u76ee\u5f55\n\ngit rev-parse --show-prefix  # \u76f8\u5bf9\u76ee\u5f55\n\ngit rev-parse --show-cdup # \u67e5\u770b\u76f8\u5bf9\u5c42\u7ea7\n")),(0,a.kt)("h2",{id:"git-grep"},"git grep"),(0,a.kt)("p",null,"\u5ffd\u7565 .git \u76ee\u5f55\u6587\u4ef6\u67e5\u627e"),(0,a.kt)("h2",{id:"\u6807\u7b7e"},"\u6807\u7b7e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git tag -a v1.0  #  -a \u547d\u4ee4\u65f6\uff0cGit \u4f1a\u6253\u5f00\u4f60\u7684\u7f16\u8f91\u5668\uff0c\u8ba9\u4f60\u5199\u4e00\u53e5\u6807\u7b7e\u6ce8\u89e3\uff0c\u5c31\u50cf\u4f60\u7ed9\u63d0\u4ea4\u5199\u6ce8\u89e3\u4e00\u6837   git log --decorate \u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u6211\u4eec\u7684\u6807\u7b7e\u4e86\n\ngit tag  # \u67e5\u770b\u6240\u6709\u6807\u7b7e\n")),(0,a.kt)("h2",{id:"\u67e5\u770b\u63d0\u4ea4\u5386\u53f2"},"\u67e5\u770b\u63d0\u4ea4\u5386\u53f2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git log # \u67e5\u770b\u5386\u53f2\u63d0\u4ea4\u8bb0\u5f55\ngit blame <file> # \u4ee5\u5217\u8868\u5f62\u5f0f\u67e5\u770b\u6307\u5b9a\u6587\u4ef6\u7684\u5386\u53f2\u4fee\u6539\u8bb0\u5f55\u3002\ngit log --oneline  # --oneline \u9009\u9879\u6765\u67e5\u770b\u5386\u53f2\u8bb0\u5f55\u7684\u7b80\u6d01\u7684\u7248\u672c\u3002\ngit log --reverse --oneline # \u7528 --reverse \u53c2\u6570\u6765\u9006\u5411\u663e\u793a\u6240\u6709\u65e5\u5fd7\u3002\ngit log --author=Linus --oneline -5 #\u67e5\u627e\u6307\u5b9a\u7528\u6237\u7684\u63d0\u4ea4\u65e5\u5fd7\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4\uff1agit log --autho\ngit log --oneline --before={3.weeks.ago} --after={2010-04-18} --no-merges #\u6307\u5b9a\u65e5\u671f\uff0c\u53ef\u4ee5\u6267\u884c\u51e0\u4e2a\u9009\u9879\uff1a--since \u548c --before\uff0c\u4f46\u662f\u4f60\u4e5f\u53ef\u4ee5\u7528 --until \u548c --after\u3002\n\n\n\n\n")),(0,a.kt)("h2",{id:"\u67e5\u770bgit-\u72b6\u6001"},"\u67e5\u770bgit \u72b6\u6001"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"    git diff\n\n\n")),(0,a.kt)("admonition",{type:"info"}),(0,a.kt)("h2",{id:"\u5220\u9664\u672c\u5730\u5206\u652f"},"\u5220\u9664\u672c\u5730\u5206\u652f"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"bash\ngit branch -d\n")),(0,a.kt)("h2",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git init \n")),(0,a.kt)("h2",{id:"\u4e0b\u8f7d\u4ee3\u7801"},"\u4e0b\u8f7d\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/xxxx.git\n")),(0,a.kt)("h2",{id:"\u6dfb\u52a0\u6587\u4ef6\u5230\u7d22\u5f15\u533a"},"\u6dfb\u52a0\u6587\u4ef6\u5230\u7d22\u5f15\u533a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git add  xxxx.md (* \u4ee3\u8868\u6240\u6709\u6587\u4ef6)\n")),(0,a.kt)("h2",{id:"\u521b\u5efa\u63d0\u4ea4"},"\u521b\u5efa\u63d0\u4ea4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'git commit -m "xxx"\n')),(0,a.kt)("h2",{id:"\u63d0\u4ea4"},"\u63d0\u4ea4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u589e\u8865\u63d0\u4ea4\uff0c\u4f1a\u4f7f\u7528\u4e0e\u5f53\u524d\u63d0\u4ea4\u8282\u70b9\u76f8\u540c\u7684\u7236\u8282\u70b9\u8fdb\u884c\u4e00\u6b21\u65b0\u7684\u63d0\u4ea4\uff0c\u65e7\u7684\u63d0\u4ea4\u5c06\u4f1a\u88ab\u53d6\u6d88\u3002\n git commit  --amend \n\n git rebase -i \n\n git cherry-pick \n\n git rebase \n")),(0,a.kt)("h2",{id:"\u521b\u5efa\u5206\u652f"},"\u521b\u5efa\u5206\u652f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git checkout -b xxx (-b \u65b0\u5efa\u5206\u652f)\n")),(0,a.kt)("h2",{id:"\u67e5\u770b\u672c\u5730\u4ed3\u5e93\u5bf9\u5e94\u8fdc\u7a0b\u5206\u652f"},"\u67e5\u770b\u672c\u5730\u4ed3\u5e93\u5bf9\u5e94\u8fdc\u7a0b\u5206\u652f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git remote  -v\n")),(0,a.kt)("h2",{id:"\u5c06\u672c\u5730\u5206\u652f\u548c\u8fdc\u7a0b\u5206\u652f\u5efa\u7acb\u5bf9\u5e94"},"\u5c06\u672c\u5730\u5206\u652f\u548c\u8fdc\u7a0b\u5206\u652f\u5efa\u7acb\u5bf9\u5e94"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git branhc -u origin/master\n")),(0,a.kt)("h2",{id:"\u548c\u8fdc\u7a0b\u5206\u652f\u540c\u6b65"},"\u548c\u8fdc\u7a0b\u5206\u652f\u540c\u6b65"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git pull\n")),(0,a.kt)("h2",{id:"\u548c\u8fdc\u7a0b\u5206\u652f\u540c\u6b65\u5f3a\u5236"},"\u548c\u8fdc\u7a0b\u5206\u652f\u540c\u6b65\u5f3a\u5236"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"a.\u628a\u4f60 commit \u5230\u672c\u5730\u4ed3\u5e93\u7684\u5185\u5bb9\uff0c\u53d6\u51fa\u6765\u653e\u5230\u6682\u5b58\u533a(stash)\uff08\u8fd9\u65f6\u4f60\u7684\u5de5\u4f5c\u533a\u662f\u5e72\u51c0\u7684\uff09\nb.\u7136\u540e\u4ece\u8fdc\u7aef\u62c9\u53d6\u4ee3\u7801\u5230\u672c\u5730\uff0c\u7531\u4e8e\u5de5\u4f5c\u533a\u662f\u5e72\u51c0\u7684\uff0c\u6240\u4ee5\u4e0d\u4f1a\u6709\u51b2\u7a81\nc.\u4ece\u6682\u5b58\u533a\u628a\u4f60\u4e4b\u524d\u63d0\u4ea4\u7684\u5185\u5bb9\u53d6\u51fa\u6765\uff0c\u8ddf\u62c9\u4e0b\u6765\u7684\u4ee3\u7801\u5408\u5e76")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git pull --rebase\n")),(0,a.kt)("h2",{id:"\u5207\u6362\u5206\u652f"},"\u5207\u6362\u5206\u652f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git checkout xxx\n")),(0,a.kt)("h2",{id:"\u67e5\u770b\u5f53\u524d\u5206\u652f\u72b6\u6001"},"\u67e5\u770b\u5f53\u524d\u5206\u652f\u72b6\u6001"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git status\n")),(0,a.kt)("h2",{id:"\u5c06\u672c\u5730\u63a8\u9001\u5230\u8fdc\u7a0b\u4ed3\u5e93"},"\u5c06\u672c\u5730\u63a8\u9001\u5230\u8fdc\u7a0b\u4ed3\u5e93"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git pull\n")),(0,a.kt)("h2",{id:"\u4fee\u6539\u5206\u652f"},"\u4fee\u6539\u5206\u652f"),(0,a.kt)("p",null,"git remote set-url origin ",(0,a.kt)("a",{parentName:"p",href:"mailto:git@github.com"},"git@github.com"),":ahKevinXy/ahKevinXy.github.io.git"))}d.isMDXComponent=!0}}]);