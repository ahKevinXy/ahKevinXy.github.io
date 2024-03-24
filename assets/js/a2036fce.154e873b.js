"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[78969],{30403:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var c=n(74848),d=n(28453);const a={},r="etcd \u5b89\u88c5",s={id:"backend/database/etcd/base/install",title:"etcd \u5b89\u88c5",description:"\u5355\u673a\u90e8\u7f72",source:"@site/docs/backend/database/etcd/base/install.md",sourceDirName:"backend/database/etcd/base",slug:"/backend/database/etcd/base/install",permalink:"/docs/backend/database/etcd/base/install",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u7840",permalink:"/docs/backend/database/etcd/base/"},next:{title:"\u5b98\u65b9\u6587\u6863",permalink:"/docs/backend/database/etcd/offical"}},o={},l=[{value:"\u5355\u673a\u90e8\u7f72",id:"\u5355\u673a\u90e8\u7f72",level:2},{value:"Mac",id:"mac",level:3},{value:"docker \u5b89\u88c5",id:"docker-\u5b89\u88c5",level:3},{value:"linux\u73af\u5883",id:"linux\u73af\u5883",level:3}];function i(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h1,{id:"etcd-\u5b89\u88c5",children:"etcd \u5b89\u88c5"}),"\n",(0,c.jsx)(t.h2,{id:"\u5355\u673a\u90e8\u7f72",children:"\u5355\u673a\u90e8\u7f72"}),"\n",(0,c.jsx)(t.h3,{id:"mac",children:"Mac"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-bash",children:"ETCD_VER=v3.3.0-rc.2 #\u8fd9\u91cc\u53ef\u4ee5\u9009\u62e9\u4efb\u610f\u4e00\u4e2aetcd\u7248\u672c\nGITHUB_URL=https://github.com/coreos/etcd/releases/download \n\nDOWNLOAD_URL=${GITHUB_URL}\n\nrm -f /tmp/etcd-${ETCD_VER}-darwin-amd64.zip\nrm -rf /tmp/etcd-download-test && mkdir -p /tmp/etcd-download-test\ncurl -L ${DOWNLOAD_URL}/${ETCD_VER}/etcd-${ETCD_VER}-darwin-amd64.zip -o /tmp/etcd-${ETCD_VER}-darwin-amd64.zip\nunzip /tmp/etcd-${ETCD_VER}-darwin-amd64.zip -d /tmp && rm -f /tmp/e\u4e03cd\xad ${ETCD_VER}-darwin-amd64.zip\nmv /tmp/e\u4e03cd-${ETCD_VER}-darwin-amd64/* /tmp/etcd-download-test && rm -rf mv /tmp/etcd-${ETCD_VER}-darwin-amd64\n\n\n#\u8fd0\u884cetcd server\n/tmp/etcd-download-test/etcd\n#\u68c0\u67e5etcd server\u7248\u672c\n /tmp/etcd-download-test/etcd --version\n#\u68c0\u67e5etcd\u547d\u4ee4\u884c\u5de5\u5177\u7248\u672c\nETCDCTL_API=3 /tmp/etcd-downloadtest/etcdctl version\n"})}),"\n",(0,c.jsx)(t.h3,{id:"docker-\u5b89\u88c5",children:"docker \u5b89\u88c5"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-bash",children:'docker run\\\n-p 2379:2379\\\n-p 2380:2380\\\n--mount type=bind,source=/tmp/etcd-data.tmp,destination=/etcd-data\\ --name etcd-gcr-v3.3.0-rc.2\\ gcr.io/etcd-development/etcd:v3.3.0-rc.2\\\n/usr/local/bin/etcd\\\n--name sl\\\n--da\u4e03a-dir /etcd-data\\\n--listen-client-urls http://0.0.0.0:2379\\\n\u4e00-advertise-client-urls http : / / 0.0.0.0 : 2379 \\ --1\u5de5sten-peer-urls http://0.0.0.0:2380 \\\ninitial-advertise-peer-urls s http://0.0.0.0:2380 \\ --initial-cluster s1=http://0.0.0.0::2380 \\ --initial- cluster-token tkn \\\n--initial-cluster-state new\n\n#\u68c0\u67e5 etcd server\u7248\u672c\ndocker exec etcd-gcr-v3.3.0-rc.2 /bin/sh c \u201d/usr/local/bin/etcd -- version \u201d\n\n\n#\u68c0\u67e5etcd\u547d\u4ee4\u884c\u5de5\u5177\u7248\u672c\ndocker exec etcd- gcr- v3 . 3 . 0- rc . 2 /bin/ sh\n-c\n" ETCDCTL\nAPI=3\n/usr/local/\nbin/etcdctl version "\n\n#\u901a\u8fc7 etcd\u547d\u4ee4\u884c\u68c0\u67e5 etcd\u6bcf\u4e2a\u8282\u70b9\u7684\u5065\u5eb7\u72b6\u51b5\ndocker exec etcd- gcr- v3.3.0-rc.2 /bin/sh\n- c\n"ETCDCTL\nAPI=3\n/usr/local/\nbin/etcdctl endpoint health"\n\n#\u6d4b\u8bd5\u5411 etcd\u8bfb\u5199\u6570\u636e\ndocker exec etcd-gcr-v3.3.0 rc.2 /bin/sh -c "ETCDCTL API=3 /usr/local/ bin/etcdctl put foo bar\u201d\ndocker exec etcd-gcr-v3.3.0-rc.2 /bin/sh -c "ETCDCTL API=3 /usr/localI bin/etcdctl get fo\u201d\n'})}),"\n",(0,c.jsx)(t.h3,{id:"linux\u73af\u5883",children:"linux\u73af\u5883"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-bash",children:"ETCD_VER=v3.3.0-rc.2 \nGITHUB_URL=https://github.corn/coreos/etcd/releases/download\nDOWNLOAD URL=${GITHUB_URL}\nmkdir -p /tmp/etcd-download-test\n\n# \u4e0b\u8f7d\n curl -L $(DOWNLOAD_URL}/${ETCD_VER}/etcd-${ETCD_VER}-linux-amd64.tar.gz -o /tmp/etcd-${ETCD_VER}-linux-amd64.tar.gz \n\n# \u89e3\u538b\ncurl -L $(DOWNLOAD_URL}/${ETCD_VER}/etcd-${ETCD_VER}-linux-amd64.tar.gz -o /tmp/etcd-${ETCD_VER}-linux-amd64.tar.gz\n\n#  \u79fb\u9664\u5b89\u88c5\u5305\nrm -f /tmp/etcd-${ETCD_VER}\u4e00linux-amd64.tar.gz\n\n# \u542f\u52a8\u7a0b\u5e8f\n/tmp/etcd-download-test/etcd\n#\u68c0\u67e5etcd server\u7248\u672c\n/tmp/etcd-download-test/etcd --version\n"})}),"\n",(0,c.jsx)(t.p,{children:"\u542f\u52a8\u7684etcd\u8fdb\u7a0b\u9ed8\u8ba4\u57282379\u7aef\u53e3\u76d1\u542c\u6765\u81ea\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42\u3002 \u7528\u6237\u53ef\u4ee5\u4f7f\u7528 etcd \u7684\u547d\u4ee4\u884c\u5de5\u5177 etcdctl \u4e0e etcd server \u8fdb\u884c\u4ea4\u4e92\uff0c \u5177\u4f53\u547d\u4ee4\u5982\u4e0b\u6240\u793a:"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-bash",children:"#\u5199\u5165\u4e00\u4e2a\u952e\u503c\u5bf9\uff0c {foo: bar}\nETCDCTL_API=3 /tmp/etcd-download-test/etcdctl --endpoints=localhost:2379 put foo bar\nOK\n\n#\u8bfb\u53d6\u952e\u4e3afoo\u7684\u503c\nETCDCTL API=3 /tmp/etcd-download-test/etcdctl --endpoints=localhost: 2379 get foo\nbar\n"})})]})}function p(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(i,{...e})}):i(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var c=n(96540);const d={},a=c.createContext(d);function r(e){const t=c.useContext(a);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),c.createElement(a.Provider,{value:t},e.children)}}}]);