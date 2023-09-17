"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[34809],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(t),s=a,f=u["".concat(c,".").concat(s)]||u[s]||m[s]||o;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=s;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},89026:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),l=["components"],i={},c="\u5e38\u89c1\u547d\u4ee4",d={unversionedId:"backend/server/command",id:"backend/server/command",title:"\u5e38\u89c1\u547d\u4ee4",description:"diff",source:"@site/docs/backend/server/command.md",sourceDirName:"backend/server",slug:"/backend/server/command",permalink:"/docs/backend/server/command",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u7840\u77e5\u8bc6",permalink:"/docs/backend/server/bases"},next:{title:"Shell \u5165\u95e8",permalink:"/docs/backend/server/shell"}},p={},u=[{value:"diff",id:"diff",level:2},{value:"patch  diff \u7684\u53cd\u5411\u64cd\u4f5c",id:"patch--diff-\u7684\u53cd\u5411\u64cd\u4f5c",level:2},{value:"date",id:"date",level:2},{value:"\u67e5\u770b\u76ee\u5f55\u4e0b\u6587\u4ef6\u6570",id:"\u67e5\u770b\u76ee\u5f55\u4e0b\u6587\u4ef6\u6570",level:2},{value:"mtr",id:"mtr",level:2},{value:"curl",id:"curl",level:2},{value:"awk",id:"awk",level:2},{value:"nohup",id:"nohup",level:2},{value:"rsync",id:"rsync",level:2},{value:"grep",id:"grep",level:2},{value:"ssh",id:"ssh",level:2},{value:"sed",id:"sed",level:2}],m={toc:u},s="wrapper";function f(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)(s,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5e38\u89c1\u547d\u4ee4"},"\u5e38\u89c1\u547d\u4ee4"),(0,o.kt)("h2",{id:"diff"},"diff"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5c06\u5dee\u5f02\u6587\u4ef6  -u \u8868\u793a\u5e26\u6709\u4e0a\u4e0b\u6587\ndiff  -u  hell1 hello2 >diff.txt \n")),(0,o.kt)("h2",{id:"patch--diff-\u7684\u53cd\u5411\u64cd\u4f5c"},"patch  diff \u7684\u53cd\u5411\u64cd\u4f5c"),(0,o.kt)("h2",{id:"date"},"date"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"  -d,--date=\u5b57\u7b26\u4e32              \u663e\u793a\u6307\u5b9a\u5b57\u7b26\u4e32\u6240\u63cf\u8ff0\u7684\u65f6\u95f4\uff0c\u800c\u975e\u5f53\u524d\u65f6\u95f4\n-f,--file=\u65e5\u671f\u6587\u4ef6            \u7c7b\u4f3c--date\uff0c\u4ece\u65e5\u671f\u6587\u4ef6\u4e2d\u6309\u884c\u8bfb\u5165\u65f6\u95f4\u63cf\u8ff0\n-r, --reference=\u6587\u4ef6          \u663e\u793a\u6587\u4ef6\u6307\u5b9a\u6587\u4ef6\u7684\u6700\u540e\u4fee\u6539\u65f6\u95f4\n-R, --rfc-2822                \u4ee5RFC 2822\u683c\u5f0f\u8f93\u51fa\u65e5\u671f\u548c\u65f6\u95f4\n\u4f8b\u5982\uff1a2006\u5e748\u67087\u65e5\uff0c\u661f\u671f\u4e00 12:34:56 -0600\n--rfc-3339=TIMESPEC       \u4ee5RFC 3339 \u683c\u5f0f\u8f93\u51fa\u65e5\u671f\u548c\u65f6\u95f4\u3002\nTIMESPEC=",(0,o.kt)("inlineCode",{parentName:"p"},"date'\uff0c"),"seconds'\uff0c\u6216 `ns'\n\u8868\u793a\u65e5\u671f\u548c\u65f6\u95f4\u7684\u663e\u793a\u7cbe\u5ea6\u3002\n\u65e5\u671f\u548c\u65f6\u95f4\u5355\u5143\u7531\u5355\u4e2a\u7684\u7a7a\u683c\u5206\u5f00\uff1a\n2006-08-07 12:34:56-06:00\n-s, --set=\u5b57\u7b26\u4e32              \u8bbe\u7f6e\u6307\u5b9a\u5b57\u7b26\u4e32\u6765\u5206\u5f00\u65f6\u95f4\n-u, --utc, --universal        \u8f93\u51fa\u6216\u8005\u8bbe\u7f6e\u534f\u8c03\u7684\u901a\u7528\u65f6\u95f4\n--help            \u663e\u793a\u6b64\u5e2e\u52a9\u4fe1\u606f\u5e76\u9000\u51fa\n--version         \u663e\u793a\u7248\u672c\u4fe1\u606f\u5e76\u9000\u51fa"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'   %%    \u4e00\u4e2a\u6587\u5b57\u7684 %\n  %a    \u5f53\u524dlocale \u7684\u661f\u671f\u540d\u7f29\u5199(\u4f8b\u5982\uff1a \u65e5\uff0c\u4ee3\u8868\u661f\u671f\u65e5)\n  %A    \u5f53\u524dlocale \u7684\u661f\u671f\u540d\u5168\u79f0 (\u5982\uff1a\u661f\u671f\u65e5)\n  %b    \u5f53\u524dlocale \u7684\u6708\u540d\u7f29\u5199 (\u5982\uff1a\u4e00\uff0c\u4ee3\u8868\u4e00\u6708)\n  %B    \u5f53\u524dlocale \u7684\u6708\u540d\u5168\u79f0 (\u5982\uff1a\u4e00\u6708)\n  %c    \u5f53\u524dlocale \u7684\u65e5\u671f\u548c\u65f6\u95f4 (\u5982\uff1a2005\u5e743\u67083\u65e5 \u661f\u671f\u56db 23:05:25)\n  %C    \u4e16\u7eaa\uff1b\u6bd4\u5982 %Y\uff0c\u901a\u5e38\u4e3a\u7701\u7565\u5f53\u524d\u5e74\u4efd\u7684\u540e\u4e24\u4f4d\u6570\u5b57(\u4f8b\u5982\uff1a20)\n  %d    \u6309\u6708\u8ba1\u7684\u65e5\u671f(\u4f8b\u5982\uff1a01)\n  %D    \u6309\u6708\u8ba1\u7684\u65e5\u671f\uff1b\u7b49\u4e8e%m/%d/%y\n  %e    \u6309\u6708\u8ba1\u7684\u65e5\u671f\uff0c\u6dfb\u52a0\u7a7a\u683c\uff0c\u7b49\u4e8e%_d\n  %F    \u5b8c\u6574\u65e5\u671f\u683c\u5f0f\uff0c\u7b49\u4ef7\u4e8e %Y-%m-%d\n  %g    ISO-8601 \u683c\u5f0f\u5e74\u4efd\u7684\u6700\u540e\u4e24\u4f4d (\u53c2\u89c1%G)\n  %G    ISO-8601 \u683c\u5f0f\u5e74\u4efd (\u53c2\u89c1%V)\uff0c\u4e00\u822c\u53ea\u548c %V \u7ed3\u5408\u4f7f\u7528\n  %h    \u7b49\u4e8e%b\n  %H    \u5c0f\u65f6(00-23)\n  %I    \u5c0f\u65f6(00-12)\n  %c    \u6309\u5e74\u8ba1\u7684\u65e5\u671f(001-366)\n  %k    \u65f6(0-23)\n  %l    \u65f6(1-12)\n  %m    \u6708\u4efd(01-12)\n  %M    \u5206(00-59)\n  %n    \u6362\u884c\n  %N    \u7eb3\u79d2(000000000-999999999)\n  %p    \u5f53\u524dlocale \u4e0b\u7684"\u4e0a\u5348"\u6216\u8005"\u4e0b\u5348"\uff0c\u672a\u77e5\u65f6\u8f93\u51fa\u4e3a\u7a7a\n  %P    \u4e0e%p \u7c7b\u4f3c\uff0c\u4f46\u662f\u8f93\u51fa\u5c0f\u5199\u5b57\u6bcd\n  %r    \u5f53\u524dlocale \u4e0b\u7684 12 \u5c0f\u65f6\u65f6\u949f\u65f6\u95f4 (\u5982\uff1a11:11:04 \u4e0b\u5348)\n  %R    24 \u5c0f\u65f6\u65f6\u95f4\u7684\u65f6\u548c\u5206\uff0c\u7b49\u4ef7\u4e8e %H:%M\n  %s    \u81eaUTC \u65f6\u95f4 1970-01-01 00:00:00 \u4ee5\u6765\u6240\u7ecf\u8fc7\u7684\u79d2\u6570\n  %S    \u79d2(00-60)\n  %t    \u8f93\u51fa\u5236\u8868\u7b26 Tab\n  %T    \u65f6\u95f4\uff0c\u7b49\u4e8e%H:%M:%S\n  %u    \u661f\u671f\uff0c1 \u4ee3\u8868\u661f\u671f\u4e00\n  %U    \u4e00\u5e74\u4e2d\u7684\u7b2c\u51e0\u5468\uff0c\u4ee5\u5468\u65e5\u4e3a\u6bcf\u661f\u671f\u7b2c\u4e00\u5929(00-53)\n  %V    ISO-8601 \u683c\u5f0f\u89c4\u8303\u4e0b\u7684\u4e00\u5e74\u4e2d\u7b2c\u51e0\u5468\uff0c\u4ee5\u5468\u4e00\u4e3a\u6bcf\u661f\u671f\u7b2c\u4e00\u5929(01-53)\n  %w    \u4e00\u661f\u671f\u4e2d\u7684\u7b2c\u51e0\u65e5(0-6)\uff0c0 \u4ee3\u8868\u5468\u4e00\n  %W    \u4e00\u5e74\u4e2d\u7684\u7b2c\u51e0\u5468\uff0c\u4ee5\u5468\u4e00\u4e3a\u6bcf\u661f\u671f\u7b2c\u4e00\u5929(00-53)\n  %x    \u5f53\u524dlocale \u4e0b\u7684\u65e5\u671f\u63cf\u8ff0 (\u5982\uff1a12/31/99)\n  %X    \u5f53\u524dlocale \u4e0b\u7684\u65f6\u95f4\u63cf\u8ff0 (\u5982\uff1a23:13:48)\n  %y    \u5e74\u4efd\u6700\u540e\u4e24\u4f4d\u6570\u4f4d (00-99)\n  %Y    \u5e74\u4efd\n  %z +hhmm              \u6570\u5b57\u65f6\u533a(\u4f8b\u5982\uff0c-0400)\n  %:z +hh:mm            \u6570\u5b57\u65f6\u533a(\u4f8b\u5982\uff0c-04:00)\n  %::z +hh:mm:ss        \u6570\u5b57\u65f6\u533a(\u4f8b\u5982\uff0c-04:00:00)\n  %:::z                 \u6570\u5b57\u65f6\u533a\u5e26\u6709\u5fc5\u8981\u7684\u7cbe\u5ea6 (\u4f8b\u5982\uff0c-04\uff0c+05:30)\n  %Z                    \u6309\u5b57\u6bcd\u8868\u6392\u5e8f\u7684\u65f6\u533a\u7f29\u5199 (\u4f8b\u5982\uff0cEDT)\n\n\n')),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'date "+%Y-%m-%d %H:%M:%S" # 2022-09-30 14:59:27\n\ndate "+%Y-%m-%d" #  2022-09-30\n\ndate -d yesterday # \n')),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},""))),(0,o.kt)("h2",{id:"\u67e5\u770b\u76ee\u5f55\u4e0b\u6587\u4ef6\u6570"},"\u67e5\u770b\u76ee\u5f55\u4e0b\u6587\u4ef6\u6570"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"\u67e5\u770b\u5f53\u524d\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u6570\u91cf\nls -l | grep '^-' |wc -l"),(0,o.kt)("li",{parentName:"ol"},"\u67e5\u770b\u5f53\u524d\u76ee\u5f55\u4e0b\u6587\u4ef6\u6570\u91cf (\u5305\u542b\u5b50\u76ee\u5f55)\nls -lR |grep '^-' |wc -l"),(0,o.kt)("li",{parentName:"ol"},"\u67e5\u770b\u5f53\u524d\u76ee\u5f55\u6587\u4ef6\u5939\u6570\u91cf\nls -l | grep '^d' |wc -l"),(0,o.kt)("li",{parentName:"ol"},"\u67e5\u770b\u5f53\u524d\u6ca1\u8054\u7cfb\u5305\u542b\u5b50\u76ee\u5f55\u6587\u4ef6\u6570\u91cf\nls -lR | grep '^d' |wc -l"))),(0,o.kt)("h2",{id:"mtr"},"mtr"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"mtr \u662f\u4e00\u4e2a\u96c6\u5408 ping \u548c traceroute \u529f\u80fd\u5e76\u80fd\u76f4\u89c2\u663e\u793a\u7ed3\u679c\u7684\u7f51\u7edc\u8bca\u65ad\u5de5\u5177\u3002"),(0,o.kt)("p",{parentName:"admonition"},"mtr -h \u63d0\u4f9b\u5e2e\u52a9\u547d\u4ee4\nmtr -v \u663e\u793amtr\u7684\u7248\u672c\u4fe1\u606f\nmtr -r \u5df2\u62a5\u544a\u6a21\u5f0f\u663e\u793a\nmtr -c\u8bbe\u7f6e\u6bcf\u79d2\u53d1\u9001\u6570\u636e\u5305\u7684\u6570\u91cf\nmtr -s \u7528\u6765\u6307\u5b9aping\u6570\u636e\u5305\u7684\u5927\u5c0f\nmtr -n no-dns\u4e0d\u5bf9IP\u5730\u5740\u505a\u57df\u540d\u89e3\u6790\nmtr -a \u6765\u8bbe\u7f6e\u53d1\u9001\u6570\u636e\u5305\u7684IP\u5730\u5740\uff0c\u8fd9\u4e2a\u5bf9\u4e00\u4e2a\u4e3b\u673a\u6709\u591a\u4e2aIP\u5730\u5740\u662f\u6709\u7528\u7684\nmtr -i \u4f7f\u7528\u8fd9\u4e2a\u53c2\u6570\u6765\u8bbe\u7f6eICMP\u8fd4\u56de\u4e4b\u95f4\u7684\u8981\u6c42\u3002\u9ed8\u8ba4\u662f1\u79d2"),(0,o.kt)("p",{parentName:"admonition"},"\u5728MTR\u8fd0\u884c\u8fc7\u7a0b\u4e2d\uff0c\u53ef\u4ee5\u8f93\u5165\u5feb\u6377\u5b57\u6bcd\u5207\u6362\u6a21\u5f0f\u4f8b\u5982\uff1a\n\uff1f\u6216 h\uff1a\u663e\u793a\u5e2e\u52a9\u83dc\u5355\u3002\nd\uff1a\u5207\u6362\u663e\u793a\u6a21\u5f0f\u3002\nn\uff1a\u5207\u6362\u542f\u7528\u6216\u7981\u7528 DNS \u57df\u540d\u89e3\u6790\u3002\nu\uff1a\u5207\u6362\u4f7f\u7528 ICMP\u6216 UDP \u6570\u636e\u5305\u8fdb\u884c\u63a2\u6d4b\u3002")),(0,o.kt)("h2",{id:"curl"},"curl"),(0,o.kt)("h2",{id:"awk"},"awk"),(0,o.kt)("h2",{id:"nohup"},"nohup"),(0,o.kt)("h2",{id:"rsync"},"rsync"),(0,o.kt)("h2",{id:"grep"},"grep"),(0,o.kt)("h2",{id:"ssh"},"ssh"),(0,o.kt)("h2",{id:"sed"},"sed"))}f.isMDXComponent=!0}}]);