"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[48064],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return k}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(t),c=r,k=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return t?a.createElement(k,i(i({ref:n},u),{},{components:t})):a.createElement(k,i({ref:n},u))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},14190:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var a=t(83117),r=t(80102),l=(t(67294),t(3905)),i=["components"],o={},p="\u57fa\u7840\u77e5\u8bc6",s={unversionedId:"backend/server/bases",id:"backend/server/bases",title:"\u57fa\u7840\u77e5\u8bc6",description:"crontab \u8be6\u89e3",source:"@site/docs/backend/server/bases.md",sourceDirName:"backend/server",slug:"/backend/server/bases",permalink:"/docs/backend/server/bases",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u78c1\u76d8",permalink:"/docs/backend/server/base/disk/"},next:{title:"\u5e38\u89c1\u547d\u4ee4",permalink:"/docs/backend/server/command"}},u={},d=[{value:"crontab \u8be6\u89e3",id:"crontab-\u8be6\u89e3",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:3},{value:"\u4fee\u6539ubuntu \u56fa\u5b9aip",id:"\u4fee\u6539ubuntu-\u56fa\u5b9aip",level:2},{value:"\u67e5\u770b\u7f51\u5361\u4fe1\u606f",id:"\u67e5\u770b\u7f51\u5361\u4fe1\u606f",level:3},{value:"\u4e34\u65f6\u4fee\u6539",id:"\u4e34\u65f6\u4fee\u6539",level:3},{value:"\u4fee\u6539ip\u548c\u5b50\u7f51\u63a9\u7801",id:"\u4fee\u6539ip\u548c\u5b50\u7f51\u63a9\u7801",level:4},{value:"\u4fee\u6539\u7f51\u5173\u7684\u65b9\u6cd5",id:"\u4fee\u6539\u7f51\u5173\u7684\u65b9\u6cd5",level:4},{value:"\u6c38\u4e45\u4fee\u6539",id:"\u6c38\u4e45\u4fee\u6539",level:3},{value:"\u67e5\u770b\u5916\u7f51ip",id:"\u67e5\u770b\u5916\u7f51ip",level:2},{value:"linux \u7cfb\u7edf\u81ea\u52a8\u6302\u8f7d",id:"linux-\u7cfb\u7edf\u81ea\u52a8\u6302\u8f7d",level:2},{value:"\u67e5\u770b\u786c\u76d8\u4fe1\u606f",id:"\u67e5\u770b\u786c\u76d8\u4fe1\u606f",level:3},{value:"\u683c\u5f0f\u5316\u65b0\u786c\u76d8",id:"\u683c\u5f0f\u5316\u65b0\u786c\u76d8",level:3},{value:"\u521b\u5efa\u6302\u8f7d\u76ee\u5f55",id:"\u521b\u5efa\u6302\u8f7d\u76ee\u5f55",level:3},{value:"\u6302\u8f7d\u5206\u533a",id:"\u6302\u8f7d\u5206\u533a",level:2},{value:"\u67e5\u770b\u78c1\u76d8\u5206\u533a id",id:"\u67e5\u770b\u78c1\u76d8\u5206\u533a-id",level:2},{value:"\u914d\u7f6e\u5f00\u673a\u786c\u76d8\u81ea\u52a8\u6302\u8f7d",id:"\u914d\u7f6e\u5f00\u673a\u786c\u76d8\u81ea\u52a8\u6302\u8f7d",level:3},{value:"\u9a8c\u8bc1",id:"\u9a8c\u8bc1",level:3},{value:"Ubuntu \u8bbe\u7f6e sudo \u514d\u5bc6\u7801",id:"ubuntu-\u8bbe\u7f6e-sudo-\u514d\u5bc6\u7801",level:2}],m={toc:d},c="wrapper";function k(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)(c,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u57fa\u7840\u77e5\u8bc6"},"\u57fa\u7840\u77e5\u8bc6"),(0,l.kt)("h2",{id:"crontab-\u8be6\u89e3"},"crontab \u8be6\u89e3"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Linux crontab \u662f\u7528\u6765\u5b9a\u671f\u6267\u884c\u7a0b\u5e8f\u7684\u547d\u4ee4\u3002")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"1\u3001\u7cfb\u7edf\u6267\u884c\u7684\u5de5\u4f5c\uff1a\u7cfb\u7edf\u5468\u671f\u6027\u6240\u8981\u6267\u884c\u7684\u5de5\u4f5c\uff0c\u5982\u5907\u4efd\u7cfb\u7edf\u6570\u636e\u3001\u6e05\u7406\u7f13\u5b58\n2\u3001\u4e2a\u4eba\u6267\u884c\u7684\u5de5\u4f5c\uff1a\u67d0\u4e2a\u7528\u6237\u5b9a\u671f\u8981\u505a\u7684\u5de5\u4f5c\uff0c\u4f8b\u5982\u6bcf\u9694 10 \u5206\u949f\u68c0\u67e5\u90ae\u4ef6\u670d\u52a1\u5668\u662f\u5426\u6709\u65b0\u4fe1\uff0c\u8fd9\u4e9b\u5de5\u4f5c\u53ef\u7531\u6bcf\u4e2a\u7528\u6237\u81ea\u884c\u8bbe\u7f6e")),(0,l.kt)("h3",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"crontab [ -u user ] file\ncrontab [ -u user ] { -l | -r | -e }\n\n")),(0,l.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,l.kt)("p",null,"crontab \u662f\u7528\u6765\u8ba9\u4f7f\u7528\u8005\u5728\u56fa\u5b9a\u65f6\u95f4\u6216\u56fa\u5b9a\u95f4\u9694\u6267\u884c\u7a0b\u5e8f\u4e4b\u7528\uff0c\u6362\u53e5\u8bdd\u8bf4\uff0c\u4e5f\u5c31\u662f\u7c7b\u4f3c\u4f7f\u7528\u8005\u7684\u65f6\u7a0b\u8868\u3002"),(0,l.kt)("p",null,"-u user \u662f\u6307\u8bbe\u5b9a\u6307\u5b9a user \u7684\u65f6\u7a0b\u8868\uff0c\u8fd9\u4e2a\u524d\u63d0\u662f\u4f60\u5fc5\u987b\u8981\u6709\u5176\u6743\u9650(\u6bd4\u5982\u8bf4\u662f root)\u624d\u80fd\u591f\u6307\u5b9a\u4ed6\u4eba\u7684\u65f6\u7a0b\u8868\u3002\u5982\u679c\u4e0d\u4f7f\u7528 -u user \u7684\u8bdd\uff0c\u5c31\u662f\u8868\u793a\u8bbe\u5b9a\u81ea\u5df1\u7684\u65f6\u7a0b\u8868\u3002"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"-e : \u6267\u884c\u6587\u5b57\u7f16\u8f91\u5668\u6765\u8bbe\u5b9a\u65f6\u7a0b\u8868\uff0c\u5185\u5b9a\u7684\u6587\u5b57\u7f16\u8f91\u5668\u662f VI\uff0c\u5982\u679c\u4f60\u60f3\u7528\u522b\u7684\u6587\u5b57\u7f16\u8f91\u5668\uff0c\u5219\u8bf7\u5148\u8bbe\u5b9a VISUAL \u73af\u5883\u53d8\u6570\u6765\u6307\u5b9a\u4f7f\u7528\u90a3\u4e2a\u6587\u5b57\u7f16\u8f91\u5668(\u6bd4\u5982\u8bf4 setenv VISUAL joe)"),(0,l.kt)("li",{parentName:"ul"},"-r : \u5220\u9664\u76ee\u524d\u7684\u65f6\u7a0b\u8868"),(0,l.kt)("li",{parentName:"ul"},"-l : \u5217\u51fa\u76ee\u524d\u7684\u65f6\u7a0b\u8868")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"f1 f2 f3 f4 f5 program"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u5176\u4e2d f1 \u662f\u8868\u793a\u5206\u949f\uff0cf2 \u8868\u793a\u5c0f\u65f6\uff0cf3 \u8868\u793a\u4e00\u4e2a\u6708\u4efd\u4e2d\u7684\u7b2c\u51e0\u65e5\uff0cf4 \u8868\u793a\u6708\u4efd\uff0cf5 \u8868\u793a\u4e00\u4e2a\u661f\u671f\u4e2d\u7684\u7b2c\u51e0\u5929\u3002program \u8868\u793a\u8981\u6267\u884c\u7684\u7a0b\u5e8f\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5f53 f1 \u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"*\u65f6\u8868\u793a\u6bcf\u5206\u949f\u90fd\u8981\u6267\u884c program\uff0cf2 \u4e3a*")," \u65f6\u8868\u793a\u6bcf\u5c0f\u65f6\u90fd\u8981\u6267\u884c\u7a0b\u5e8f\uff0c\u5176\u9980\u7c7b\u63a8"),(0,l.kt)("li",{parentName:"ul"},"\u5f53 f1 \u4e3a a-b \u65f6\u8868\u793a\u4ece\u7b2c a \u5206\u949f\u5230\u7b2c b \u5206\u949f\u8fd9\u6bb5\u65f6\u95f4\u5185\u8981\u6267\u884c\uff0cf2 \u4e3a a-b \u65f6\u8868\u793a\u4ece\u7b2c a \u5230\u7b2c b \u5c0f\u65f6\u90fd\u8981\u6267\u884c\uff0c\u5176\u9980\u7c7b\u63a8"),(0,l.kt)("li",{parentName:"ul"},"\u5f53 f1 \u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"*/n \u65f6\u8868\u793a\u6bcf n \u5206\u949f\u4e2a\u65f6\u95f4\u95f4\u9694\u6267\u884c\u4e00\u6b21\uff0cf2 \u4e3a*/n")," \u8868\u793a\u6bcf n \u5c0f\u65f6\u4e2a\u65f6\u95f4\u95f4\u9694\u6267\u884c\u4e00\u6b21\uff0c\u5176\u9980\u7c7b\u63a8"),(0,l.kt)("li",{parentName:"ul"},"\u5f53 f1 \u4e3a a, b, c,... \u65f6\u8868\u793a\u7b2c a, b, c,... \u5206\u949f\u8981\u6267\u884c\uff0cf2 \u4e3a a, b, c,... \u65f6\u8868\u793a\u7b2c a, b, c...\u4e2a\u5c0f\u65f6\u8981\u6267\u884c\uff0c\u5176\u9980\u7c7b\u63a8")),(0,l.kt)("table",{parentName:"admonition"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6267\u884c\u65f6\u95f4"),(0,l.kt)("th",{parentName:"tr",align:null},"\u683c\u5f0f"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u6bcf\u5206\u949f\u5b9a\u65f6\u6267\u884c\u4e00\u6b21"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"* * * * *"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u6bcf\u5c0f\u65f6\u5b9a\u65f6\u6267\u884c\u4e00\u6b21"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0 * * * *"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u6bcf\u5929\u5b9a\u65f6\u6267\u884c\u4e00\u6b21"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0 0 * * *"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u6bcf\u6708\u5b9a\u65f6\u6267\u884c\u4e00\u6b21"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0 0 1 * *"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u6bcf\u6708\u6700\u540e\u4e00\u5929\u5b9a\u65f6\u6267\u884c\u4e00\u6b21"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0 0 L * *"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u6bcf\u5e74\u5b9a\u65f6\u6267\u884c\u4e00\u6b21"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0 0 1 1 *"))))),(0,l.kt)("p",{parentName:"admonition"},"\u6bcf\u4e00\u5206\u949f\u6267\u884c\u4e00\u6b21 /bin/ls\uff1a"),(0,l.kt)("blockquote",{parentName:"admonition"},(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"* * * * * /bin/ls"))),(0,l.kt)("p",{parentName:"admonition"},"\u5728 12 \u6708\u5185, \u6bcf\u5929\u7684\u65e9\u4e0a 6 \u70b9\u5230 12 \u70b9\uff0c\u6bcf\u9694 3 \u4e2a\u5c0f\u65f6 0 \u5206\u949f\u6267\u884c\u4e00\u6b21 /usr/bin/backup\uff1a"),(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"0 6-12/3 * 12 * /usr/bin/backup")),(0,l.kt)("p",{parentName:"admonition"},"\u5468\u4e00\u5230\u5468\u4e94\u6bcf\u5929\u4e0b\u5348 5:00 \u5bc4\u4e00\u5c01\u4fe1\u7ed9 ",(0,l.kt)("a",{parentName:"p",href:"mailto:alex@domain.name"},"alex@domain.name"),"\uff1a"),(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},'0 17 * * 1-5 mail -s "hi" alex@domain.name < /tmp/maildata')),(0,l.kt)("p",{parentName:"admonition"},'\u6bcf\u6708\u6bcf\u5929\u7684\u5348\u591c 0 \u70b9 20 \u5206, 2 \u70b9 20 \u5206, 4 \u70b9 20 \u5206....\u6267\u884c echo "haha"\uff1a'),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'20 0-23/2 * * * echo "haha"\n\n')),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'0 */2 * * * /sbin/service httpd restart  \u610f\u601d\u662f\u6bcf\u4e24\u4e2a\u5c0f\u65f6\u91cd\u542f\u4e00\u6b21apache \n\n50 7 * * * /sbin/service sshd start  \u610f\u601d\u662f\u6bcf\u59297\uff1a50\u5f00\u542fssh\u670d\u52a1 \n\n50 22 * * * /sbin/service sshd stop  \u610f\u601d\u662f\u6bcf\u592922\uff1a50\u5173\u95edssh\u670d\u52a1 \n\n0 0 1,15 * * fsck /home  \u6bcf\u67081\u53f7\u548c15\u53f7\u68c0\u67e5/home \u78c1\u76d8 \n\n1 * * * * /home/bruce/backup  \u6bcf\u5c0f\u65f6\u7684\u7b2c\u4e00\u5206\u6267\u884c /home/bruce/backup\u8fd9\u4e2a\u6587\u4ef6 \n\n00 03 * * 1-5 find /home "*.xxx" -mtime +4 -exec rm {} \\;  \u6bcf\u5468\u4e00\u81f3\u5468\u4e943\u70b9\u949f\uff0c\u5728\u76ee\u5f55/home\u4e2d\uff0c\u67e5\u627e\u6587\u4ef6\u540d\u4e3a*.xxx\u7684\u6587\u4ef6\uff0c\u5e76\u5220\u96644\u5929\u524d\u7684\u6587\u4ef6\u3002\n\n30 6 */10 * * ls  \u610f\u601d\u662f\u6bcf\u6708\u76841\u300111\u300121\u300131\u65e5\u662f\u76846\uff1a30\u6267\u884c\u4e00\u6b21ls\u547d\u4ee4\n'))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\uff1a\u5f53\u7a0b\u5e8f\u5728\u4f60\u6240\u6307\u5b9a\u7684\u65f6\u95f4\u6267\u884c\u540e\uff0c\u7cfb\u7edf\u4f1a\u53d1\u4e00\u5c01\u90ae\u4ef6\u7ed9\u5f53\u524d\u7684\u7528\u6237\uff0c\u663e\u793a\u8be5\u7a0b\u5e8f\u6267\u884c\u7684\u5185\u5bb9\uff0c\u82e5\u662f\u4f60\u4e0d\u5e0c\u671b\u6536\u5230\u8fd9\u6837\u7684\u90ae\u4ef6\uff0c\u8bf7\u5728\u6bcf\u4e00\u884c\u7a7a\u4e00\u683c\u4e4b\u540e\u52a0\u4e0a > /dev/null 2>&1 \u5373\u53ef\uff0c\u5982\uff1a"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"20 03 * * * . /etc/profile;/bin/sh /var/www/test.sh > /dev/null 2>&1 \n\n"))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("ol",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6240\u6709\u547d\u4ee4\u9700\u8981\u5199\u6210\u7edd\u5bf9\u8def\u5f84\u5f62\u5f0f\uff0c\u5982: /usr/local/bin/docker\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728 shell \u811a\u672c\u5f00\u5934\u4f7f\u7528\u4ee5\u4e0b\u4ee3\u7801\uff1a"))),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/sh\n\n. /etc/profile\n. ~/.bash_profile\n")),(0,l.kt)("ol",{parentName:"admonition",start:3},(0,l.kt)("li",{parentName:"ol"},"\u5728 /etc/crontab \u4e2d\u6dfb\u52a0\u73af\u5883\u53d8\u91cf\uff0c\u5728\u53ef\u6267\u884c\u547d\u4ee4\u4e4b\u524d\u6dfb\u52a0\u547d\u4ee4 . /etc/profile;/bin/sh\uff0c\u4f7f\u5f97\u73af\u5883\u53d8\u91cf\u751f\u6548\uff0c\u4f8b\u5982\uff1a")),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"20 03 * * * . /etc/profile;/bin/sh /var/www/runoob/test.sh\n"))),(0,l.kt)("h2",{id:"\u4fee\u6539ubuntu-\u56fa\u5b9aip"},"\u4fee\u6539ubuntu \u56fa\u5b9aip"),(0,l.kt)("h3",{id:"\u67e5\u770b\u7f51\u5361\u4fe1\u606f"},"\u67e5\u770b\u7f51\u5361\u4fe1\u606f"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ifconfig \n\n")),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"docker0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n        inet 172.17.0.1  netmask 255.255.0.0  broadcast 172.17.255.255\n        inet6 fe80::42:37ff:fe89:cb48  prefixlen 64  scopeid 0x20<link>\n        ether 02:42:37:89:cb:48  txqueuelen 0  (\u4ee5\u592a\u7f51)\n        RX packets 482  bytes 1234106 (1.2 MB)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 760  bytes 68055 (68.0 KB)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n\nenp3s0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n        inet 192.168.8.118  netmask 255.255.255.0  broadcast 192.168.8.255\n        inet6 fe80::da97:baff:feee:1033  prefixlen 64  scopeid 0x20<link>\n        ether d8:97:ba:ee:10:33  txqueuelen 1000  (\u4ee5\u592a\u7f51)\n        RX packets 1539  bytes 152198 (152.1 KB)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 1159  bytes 1303682 (1.3 MB)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n\nlo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536\n        inet 127.0.0.1  netmask 255.0.0.0\n        inet6 ::1  prefixlen 128  scopeid 0x10<host>\n        loop  txqueuelen 1000  (\u672c\u5730\u73af\u56de)\n        RX packets 606  bytes 44407 (44.4 KB)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 606  bytes 44407 (44.4 KB)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n\nveth4c0a8ec: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n        inet6 fe80::6861:1eff:fe8d:a550  prefixlen 64  scopeid 0x20<link>\n        ether 6a:61:1e:8d:a5:50  txqueuelen 0  (\u4ee5\u592a\u7f51)\n        RX packets 482  bytes 1240854 (1.2 MB)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 777  bytes 70214 (70.2 KB)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n\nvethaff9d97: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n        inet6 fe80::40e9:d9ff:fe7d:a31c  prefixlen 64  scopeid 0x20<link>\n        ether 42:e9:d9:7d:a3:1c  txqueuelen 0  (\u4ee5\u592a\u7f51)\n        RX packets 0  bytes 0 (0.0 B)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 62  bytes 7849 (7.8 KB)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n\n"))),(0,l.kt)("h3",{id:"\u4e34\u65f6\u4fee\u6539"},"\u4e34\u65f6\u4fee\u6539"),(0,l.kt)("p",null,"\u5f53\u91cd\u542f\u7535\u8111\u540e\uff0cip\u5730\u5740\u5c06\u6062\u590d\u4e3a\u539f\u6765\u7684ip\u5730\u5740\uff0c\u6b64\u65b9\u6cd5\u9002\u5408\u4e34\u65f6\u6d4b\u8bd5\u4f7f\u7528"),(0,l.kt)("h4",{id:"\u4fee\u6539ip\u548c\u5b50\u7f51\u63a9\u7801"},"\u4fee\u6539ip\u548c\u5b50\u7f51\u63a9\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ifconfig \u7f51\u5361\u540d ip\u4fe1\u606f netmask \u63a9\u7801\n\nsudo ifconfig enp3s0 192.168.8.118 netmask 255.255.255.0\n\n# \u786e\u8ba4\u662f\u5426\u4fee\u6539\u5b8c\u6210\nifconfig \n\n\n")),(0,l.kt)("h4",{id:"\u4fee\u6539\u7f51\u5173\u7684\u65b9\u6cd5"},"\u4fee\u6539\u7f51\u5173\u7684\u65b9\u6cd5"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"route -n\n")),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"\u5185\u6838 IP \u8def\u7531\u8868\n\u76ee\u6807            \u7f51\u5173            \u5b50\u7f51\u63a9\u7801        \u6807\u5fd7  \u8dc3\u70b9   \u5f15\u7528  \u4f7f\u7528 \u63a5\u53e3\n0.0.0.0         192.168.43.1    0.0.0.0         UG    0      0        0 enp3s0\n169.254.0.0     0.0.0.0         255.255.0.0     U     1000   0        0 enp3s0\n172.17.0.0      0.0.0.0         255.255.0.0     U     0      0        0 docker0\n192.168.8.0     0.0.0.0         255.255.255.0   U     0      0        0 enp3s0\n")),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo route add default gw \u7f51\u5173\u4fe1\u606f \u7f51\u5361\u540d\n\n# \u67e5\u770b\u662f\u5426\u4fee\u6539\u5b8c\u6210\n route -n\n"))),(0,l.kt)("h3",{id:"\u6c38\u4e45\u4fee\u6539"},"\u6c38\u4e45\u4fee\u6539"),(0,l.kt)("p",null,"\u6c38\u4e45\u4fee\u6539\u9700\u8981\u5bf9\u914d\u7f6e\u6587\u4ef6\u8fdb\u884c\u4fee\u6539\uff0c\u7136\u540e\u91cd\u542f\u7f51\u7edc\u670d\u52a1\u5373\u53ef"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo vim /etc/network/interfaces\n\n")),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"# interfaces(5) file used by ifup(8) and ifdown(8)\nauto lo\niface lo inet loopback\n\n#static ip\n\nauto enp3s0\niface enp3s0 inet static\naddress 192.168.8.114\nnetmask 255.255.255.0\ngateway 192.168.43.1\ndns-nameservers 8.8.8.8\n\n# \u91cd\u542f\u670d\u52a1\nsudo /etc/init.d/networking restart \n# \u6216\n sudo service networking restart\n\n\n"))),(0,l.kt)("h2",{id:"\u67e5\u770b\u5916\u7f51ip"},"\u67e5\u770b\u5916\u7f51ip"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"curl cip.cc"),(0,l.kt)("li",{parentName:"ol"},"curl icanhazip.com"),(0,l.kt)("li",{parentName:"ol"},"curl ifconfig.me")),(0,l.kt)("h2",{id:"linux-\u7cfb\u7edf\u81ea\u52a8\u6302\u8f7d"},"linux \u7cfb\u7edf\u81ea\u52a8\u6302\u8f7d"),(0,l.kt)("h3",{id:"\u67e5\u770b\u786c\u76d8\u4fe1\u606f"},"\u67e5\u770b\u786c\u76d8\u4fe1\u606f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"    sudo fdisk -l\n")),(0,l.kt)("h3",{id:"\u683c\u5f0f\u5316\u65b0\u786c\u76d8"},"\u683c\u5f0f\u5316\u65b0\u786c\u76d8"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"    sudo mkfs.ext4 /dev/sdb1\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ext4 :\u683c\u5f0f\u5316\u786c\u76d8\u683c\u5f0f"),(0,l.kt)("li",{parentName:"ul"},"/dev/sdb \u78c1\u76d8\u76d8\u7b26")),(0,l.kt)("h3",{id:"\u521b\u5efa\u6302\u8f7d\u76ee\u5f55"},"\u521b\u5efa\u6302\u8f7d\u76ee\u5f55"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir data\n")),(0,l.kt)("h2",{id:"\u6302\u8f7d\u5206\u533a"},"\u6302\u8f7d\u5206\u533a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mount /dev/sdb1 /data\n")),(0,l.kt)("h2",{id:"\u67e5\u770b\u78c1\u76d8\u5206\u533a-id"},"\u67e5\u770b\u78c1\u76d8\u5206\u533a id"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo blkid\n")),(0,l.kt)("h3",{id:"\u914d\u7f6e\u5f00\u673a\u786c\u76d8\u81ea\u52a8\u6302\u8f7d"},"\u914d\u7f6e\u5f00\u673a\u786c\u76d8\u81ea\u52a8\u6302\u8f7d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo vim /etc/fstab\n")),(0,l.kt)("p",null,"\u5728\u672b\u5c3e\u52a0\u5165"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"UUID=11263962-9715-473f-9421-0b604e895aaa /data ext4 defaults 0 1\n")),(0,l.kt)("p",null,"\u53c2\u6570\u8bf4\u660e:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[fs spec] [fs file] [fs vfstype] [fs mntops] [fs freq [fs passno]\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[fs spec]","\uff1a\u5206\u533a\u5b9a\u4f4d\uff0c\u53ef\u4ee5\u7ed9 UUID \u6216 LABEL\uff0c\u4f8b\u5982\uff1aUUID=6E9ADAC29ADA85CD \u6216 LABEL=software"),(0,l.kt)("li",{parentName:"ul"},"[fs file]","\uff1a\u5177\u4f53\u6302\u8f7d\u70b9\u7684\u4f4d\u7f6e\uff0c\u4f8b\u5982\uff1a/data"),(0,l.kt)("li",{parentName:"ul"},"[ fs vfstype]","\uff1a\u6302\u8f7d\u78c1\u76d8\u7c7b\u578b\uff0clinux \u5206\u533a\u4e00\u822c\u4e3a ext4\uff0cwindows \u5206\u533a\u4e00\u822c\u4e3a ntfs"),(0,l.kt)("li",{parentName:"ul"},"[fs mntops]","\uff1a\u6302\u8f7d\u53c2\u6570\uff0c\u4e00\u822c\u4e3a defaults"),(0,l.kt)("li",{parentName:"ul"},"[fs freq]","\uff1a\u78c1\u76d8\u68c0\u67e5\uff0c\u9ed8\u8ba4\u4e3a 0"),(0,l.kt)("li",{parentName:"ul"},"[fs passno]","\uff1a\u78c1\u76d8\u68c0\u67e5\uff0c\u9ed8\u8ba4\u4e3a 0\uff0c\u4e0d\u9700\u8981\u68c0\u67e5")),(0,l.kt)("h3",{id:"\u9a8c\u8bc1"},"\u9a8c\u8bc1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mount -a\n")),(0,l.kt)("p",null,"\u5982\u679c\u4fee\u6539\u8fd9\u4e2a\u6587\u4ef6\u5bfc\u81f4\u7cfb\u7edf\u6302\u4e86\uff0c\u53ef\u4ee5\u4f7f\u7528 Ubuntu \u7684 Live CD \u529f\u80fd\uff08\u5373 Try Ubuntu...\uff09\u8fdb\u5165\u7cfb\u7edf\u6765\u4fee\u6539\u56de\u8fd9\u4e2a\u6587\u4ef6\u3002"),(0,l.kt)("h2",{id:"ubuntu-\u8bbe\u7f6e-sudo-\u514d\u5bc6\u7801"},"Ubuntu \u8bbe\u7f6e sudo \u514d\u5bc6\u7801"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4fee\u6539 sudoers \u6743\u9650")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"   sudo chmod 744 suoders\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u4fee\u6539 sudoers \u6587\u4ef6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"    sudo vim /etc/sudoers\n    # \u5728\u6587\u4ef6\u6700\u540e\u4e00\u884c \u6dfb\u52a0 \u8ba1\u7b97\u673a\u540d\u79f0(eg:ubuntu) ALL=(ALL) NOPASSWD:ALL\n")))}k.isMDXComponent=!0}}]);