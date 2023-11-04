"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[34307],{33475:(n,e,c)=>{c.r(e),c.d(e,{assets:()=>t,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var l=c(85893),i=c(11151);const r={},a="Channel \u5b66\u4e60",s={id:"backend/go/base/channel",title:"Channel \u5b66\u4e60",description:"\u6570\u636e\u7ed3\u6784",source:"@site/docs/backend/go/base/channel.md",sourceDirName:"backend/go/base",slug:"/backend/go/base/channel",permalink:"/docs/backend/go/base/channel",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u7840\u77e5\u8bc6",permalink:"/docs/backend/go/base/base_base"},next:{title:"\u5e38\u89c1\u7684\u5e76\u53d1\u6a21\u5f0f",permalink:"/docs/backend/go/base/common_complication"}},t={},o=[{value:"\u6570\u636e\u7ed3\u6784",id:"\u6570\u636e\u7ed3\u6784",level:2},{value:"\u5173\u952e\u5b57\u6bb5\u89e3\u91ca",id:"\u5173\u952e\u5b57\u6bb5\u89e3\u91ca",level:3},{value:"\u521b\u5efa",id:"\u521b\u5efa",level:2},{value:"channel \u53d1\u9001\u548c\u63a5\u6536\u7684\u672c\u8d28",id:"channel-\u53d1\u9001\u548c\u63a5\u6536\u7684\u672c\u8d28",level:2},{value:"channel \u63a5\u6536\u6570\u636e\u7684\u8fc7\u7a0b",id:"channel-\u63a5\u6536\u6570\u636e\u7684\u8fc7\u7a0b",level:2},{value:"recv \u51fd\u6570",id:"recv-\u51fd\u6570",level:3},{value:"channel \u5185\u5b58\u6cc4\u6f0f",id:"channel-\u5185\u5b58\u6cc4\u6f0f",level:2},{value:"channel \u5e94\u7528",id:"channel-\u5e94\u7528",level:2},{value:"\u505c\u6b62\u4fe1\u53f7",id:"\u505c\u6b62\u4fe1\u53f7",level:3},{value:"\u4efb\u52a1\u5b9a\u65f6",id:"\u4efb\u52a1\u5b9a\u65f6",level:3},{value:"\u89e3\u8026\u751f\u4ea7\u65b9\u548c\u6d88\u8d39\u65b9",id:"\u89e3\u8026\u751f\u4ea7\u65b9\u548c\u6d88\u8d39\u65b9",level:3},{value:"\u63a7\u5236\u5e76\u53d1\u6570",id:"\u63a7\u5236\u5e76\u53d1\u6570",level:3},{value:"\u4ece\u4e00\u4e2a\u5173\u95ed\u7684 channel \u4ecd\u7136\u80fd\u8bfb\u51fa\u6570\u636e\u5417",id:"\u4ece\u4e00\u4e2a\u5173\u95ed\u7684-channel-\u4ecd\u7136\u80fd\u8bfb\u51fa\u6570\u636e\u5417",level:2}];function h(n){const e={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"channel-\u5b66\u4e60",children:"Channel \u5b66\u4e60"}),"\n",(0,l.jsx)(e.h2,{id:"\u6570\u636e\u7ed3\u6784",children:"\u6570\u636e\u7ed3\u6784"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:"type hchan struct {\n// chan \u91cc\u5143\u7d20\u6570\u91cf\n    qcount uint \n// chan \u5e95\u5c42\u5faa\u73af\u6570\u7ec4\u7684\u957f\u5ea6\ndataqsiz uint\n\n// \u6307\u5411\u5e95\u5c42\u5faa\u73af\u6570\u7ec4\u7684\u6307\u9488\n//\u53ea\u9488\u5bf9\u7f13\u51b2\u7684 channle\nbuf unsafe.Pointer\n\n// chan \u5185\u5143\u7d20\u7684\u5927\u5c0f\nelemsize uint16\n\n// chan \u662f\u5426\u5173\u95ed\u7684\u6807\u5fd7\n\nclosed uint32\n//chan \u4e2d\u5143\u7d20\u7c7b\u578b\nelemtype *_type \n\n// \u5df2\u7ecf\u53d1\u9001\u5143\u7d20\u5728\u5faa\u73af\u6570\u7ec4\u4e2d\u7684\u7d22\u5f15\nsendx uint\n\n//\u5df2\u63a5\u53d7\u5143\u7d20\u5728\u5faa\u73af\u6570\u7ec4\u4e2d\u7684\u7d22\u5f15\nrecvx uint\n\n//\u7b49\u5f85\u63a5\u6536\u7684 goroutine \u961f\u5217\nrecvq waitq\n\n//\u7b49\u5f85\u53d1\u9001\u7684goroutine \u961f\u5217\n\nsendq waitq \n\n//\u4fdd\u62a4  hchan\u4e2d\u6240\u6709\u7684\u5b57\u6bb5\nlock  mutex\n\n}\n"})}),"\n",(0,l.jsx)(e.h3,{id:"\u5173\u952e\u5b57\u6bb5\u89e3\u91ca",children:"\u5173\u952e\u5b57\u6bb5\u89e3\u91ca"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"buf"})," \u6307\u5411\u5e95\u5c42\u5faa\u73af\u6570\u7ec4,\u53ea\u6709\u7f13\u51b2\u578b\u7684 channel \u624d\u6709"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"sendx,recvx"})," \u6307\u5411\u5e95\u5c42\u5faa\u73af\u6570\u7ec4,\u8868\u793a\u5f53\u524d\u53ef\u4ee5\u53d1\u9001\u548c\u63a5\u6536\u7684\u5143\u7d20\u4f4d\u7f6e\u7d22\u5f15\u503c"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"sendq,recvq"})," \u5206\u522b\u8868\u793a\u88ab\u963b\u585e\u7684 goroutine,\u8fd9\u4e9b goroutine \u7531\u4e8e\u53c2\u8bd5\u8bfb\u53d6 channel \u6216\u5411 channel \u53d1\u9001\u6570\u636e\u800c\u88ab\u963b\u585e"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"waitq"})," \u662f",(0,l.jsx)(e.code,{children:"sudog"})," \u7684\u53cc\u5411\u94fe\u8868,\u800c ",(0,l.jsx)(e.code,{children:"sudog"})," \u5b9e\u9645\u662f\u5bf9 goroutine\u7684\u4e00\u4e2a\u5c01\u88c5"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:"type waitq struct {\n    first *sudog\n    last *sudog\n}\n"})}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"lock"})," \u7528\u6765\u4fdd\u8bc1\u6bcf\u4e2a \u8bfb channel \u6216\u5199 channel\u7684\u64cd\u4f5c\u90fd\u662f \u539f\u5b50\u7684"]}),"\n",(0,l.jsx)(e.h2,{id:"\u521b\u5efa",children:"\u521b\u5efa"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:" // \u65e0\u7f13\u51b2\u901a\u9053\n  ch1 := make(chan int)\n// \u7f13\u51b2\u901a\u9053 \u8d85\u8fc7\u6570\u91cf \u963b\u585e\n  ch2 := make(chan int,10)\n"})}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"\u521b\u5efa\u8fc7\u7a0b"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:" func makechan (t *chantype,size int64) *hchan\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u901a\u8fc7\u6e90\u7801,\u521b\u5efa chan \u662f\u4e00\u4e2a\u6307\u9488.\u6240\u4ee5\u6211\u4eec\u5728\u51fd\u6570\u95f4\u4f20\u9012 channel,\u800c\u4e0d\u7528\u4f20\u9012channel\u7684\u6307\u9488"}),"\n",(0,l.jsxs)(e.admonition,{type:"info",children:[(0,l.jsx)(e.p,{children:"\u5982\u679c \u5143\u7d20\u7c7b\u578b\u4e0d\u542b\u6307\u9488 \u6216 size\u5927\u5c0f\u4e3a0\n\u53ea\u8fdb\u884c\u4e00\u6b21\u5185\u5b58\u5206\u914d"}),(0,l.jsx)(e.p,{children:"\u5982\u679c hchan \u7ed3\u6784\u4f53\u4e2d\u4e0d\u542b\u6307\u9488 ,GC\u5c31\u4e0d\u4f1a\u626b\u63cfchan\u4e2d\u7684\u5143\u7d20,\u53ea\u5206\u914d hchan\u7ed3\u6784\u4f53\u5927\u5c0f + \u5143\u7d20\u5927\u5c0f*\u4e2a\u6570\u7684\u5185\u5b58"}),(0,l.jsxs)(e.p,{children:["\u5982\u679c\u662f\u7f13\u51b2\u578b channel \u4e14\u5143\u7d20\u5927\u5c0f\u4e0d\u7b49\u4e8e0 (\u5927\u5c0f\u7b49\u4e8e0\u7684\u5143\u7d20\u7c7b\u578b",":struct",")"]}),(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"\u975e\u7f13\u51b2\u7c7b\u578b\u7684,buf \u6ca1\u7528,\u76f4\u63a5\u6307\u5411chan\u8d77\u59cb\u5730\u5740"}),"\n",(0,l.jsx)(e.li,{children:"\u7f13\u51b2\u578b\u7684,\u80fd\u8fdb\u5165\u5230\u8fd9\u91cc"}),"\n"]})]}),"\n",(0,l.jsx)(e.h2,{id:"channel-\u53d1\u9001\u548c\u63a5\u6536\u7684\u672c\u8d28",children:"channel \u53d1\u9001\u548c\u63a5\u6536\u7684\u672c\u8d28"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"All transfer of value on the go channels happens with the copy of value"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"channel \u7684\u53d1\u9001\u548c\u63a5\u6536\u7684\u672c\u8d28\u4e0a\u90fd\u662f \u503c\u7684\u62f7\u8d1d,\u65e0\u8bba\u662f\u4ece sender goroutine\u7684\u6808\u5230 chan buf,\u8fd8\u662f \u4ece chan buf \u5230reveiver goroutine,\u6216\u8005\u662f\u76f4\u63a5\u4ece sender goroutine \u5230 receiver goroutine"}),"\n",(0,l.jsx)(e.h2,{id:"channel-\u63a5\u6536\u6570\u636e\u7684\u8fc7\u7a0b",children:"channel \u63a5\u6536\u6570\u636e\u7684\u8fc7\u7a0b"}),"\n",(0,l.jsx)(e.p,{children:"\u63a5\u6536\u64cd\u4f5c\u6709\u4e24\u79cd\u5199\u6cd5\uff0c\u4e00\u79cd\u5e26 \u201cok\u201d\uff0c\u53cd\u5e94 channel \u662f\u5426\u5173\u95ed\uff1b\u4e00\u79cd\u4e0d\u5e26 \u201cok\u201d\uff0c\u8fd9\u79cd\u5199\u6cd5\uff0c\u5f53\u63a5\u6536\u5230\u76f8\u5e94\u7c7b\u578b\u7684\u96f6\u503c\u65f6\u65e0\u6cd5\u77e5\u9053\u662f\u771f\u5b9e\u7684\u53d1\u9001\u8005\u53d1\u9001\u8fc7\u6765\u7684\u503c\uff0c\u8fd8\u662f channel \u88ab\u5173\u95ed\u540e\uff0c\u8fd4\u56de\u7ed9\u63a5\u6536\u8005\u7684\u9ed8\u8ba4\u7c7b\u578b\u7684\u96f6\u503c\u3002\u4e24\u79cd\u5199\u6cd5\uff0c\u90fd\u6709\u5404\u81ea\u7684\u5e94\u7528\u573a\u666f\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:"// entry points for <- c from compiled code\nfunc chanrecv1(c *hchan, elem unsafe.Pointer) {\n    chanrecv(c, elem, true)\n}\nfunc chanrecv2(c *hchan, elem unsafe.Pointer) (received bool) {\n    _, received = chanrecv(c, elem, true)\n    return\n}\n\n"})}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"chanrecv1"})," \u51fd\u6570\u5904\u7406\u4e0d\u5e26 \u201cok\u201d \u7684\u60c5\u5f62\uff0c",(0,l.jsx)(e.code,{children:"chanrecv2"})," \u5219\u901a\u8fc7\u8fd4\u56de \u201creceived\u201d \u8fd9\u4e2a\u5b57\u6bb5\u6765\u53cd\u5e94 channel \u662f\u5426\u88ab\u5173\u95ed\u3002\u63a5\u6536\u503c\u5219\u6bd4\u8f83\u7279\u6b8a\uff0c\u4f1a\u201c\u653e\u5230\u201d\u53c2\u6570 ",(0,l.jsx)(e.code,{children:"elem"})," \u6240\u6307\u5411\u7684\u5730\u5740\u4e86\uff0c\u8fd9\u5f88\u50cf C/C++ \u91cc\u7684\u5199\u6cd5\u3002\u5982\u679c\u4ee3\u7801\u91cc\u5ffd\u7565\u4e86\u63a5\u6536\u503c\uff0c\u8fd9\u91cc\u7684 ",(0,l.jsx)(e.code,{children:"elem"})," \u4e3a nil\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:'// \u4f4d\u4e8e src/runtime/chan.go\n// chanrecv \u51fd\u6570\u63a5\u6536 channel c \u7684\u5143\u7d20\u5e76\u5c06\u5176\u5199\u5165 ep \u6240\u6307\u5411\u7684\u5185\u5b58\u5730\u5740\u3002\n// \u5982\u679c ep \u662f nil\uff0c\u8bf4\u660e\u5ffd\u7565\u4e86\u63a5\u6536\u503c\u3002\n// \u5982\u679c block == false\uff0c\u5373\u975e\u963b\u585e\u578b\u63a5\u6536\uff0c\u5728\u6ca1\u6709\u6570\u636e\u53ef\u63a5\u6536\u7684\u60c5\u51b5\u4e0b\uff0c\u8fd4\u56de (false, false)\n// \u5426\u5219\uff0c\u5982\u679c c \u5904\u4e8e\u5173\u95ed\u72b6\u6001\uff0c\u5c06 ep \u6307\u5411\u7684\u5730\u5740\u6e05\u96f6\uff0c\u8fd4\u56de (true, false)\n// \u5426\u5219\uff0c\u7528\u8fd4\u56de\u503c\u586b\u5145 ep \u6307\u5411\u7684\u5185\u5b58\u5730\u5740\u3002\u8fd4\u56de (true, true)\n// \u5982\u679c ep \u975e\u7a7a\uff0c\u5219\u5e94\u8be5\u6307\u5411\u5806\u6216\u8005\u51fd\u6570\u8c03\u7528\u8005\u7684\u6808\nfunc chanrecv(c *hchan, ep unsafe.Pointer, block bool) (selected, received bool) {\n    // \u7701\u7565 debug \u5185\u5bb9 \u2026\u2026\u2026\u2026\n    // \u5982\u679c\u662f\u4e00\u4e2a nil \u7684 channel\n    if c == nil {\n        // \u5982\u679c\u4e0d\u963b\u585e\uff0c\u76f4\u63a5\u8fd4\u56de (false, false)\n        if !block {\n            return\n        }\n        // \u5426\u5219\uff0c\u63a5\u6536\u4e00\u4e2a nil \u7684 channel\uff0cgoroutine \u6302\u8d77\n        gopark(nil, nil, "chan receive (nil chan)", traceEvGoStop, 2)\n        // \u4e0d\u4f1a\u6267\u884c\u5230\u8fd9\u91cc\n        throw("unreachable")\n    }\n    // \u5728\u975e\u963b\u585e\u6a21\u5f0f\u4e0b\uff0c\u5feb\u901f\u68c0\u6d4b\u5230\u5931\u8d25\uff0c\u4e0d\u7528\u83b7\u53d6\u9501\uff0c\u5feb\u901f\u8fd4\u56de\n    // \u5f53\u6211\u4eec\u89c2\u5bdf\u5230 channel \u6ca1\u51c6\u5907\u597d\u63a5\u6536\uff1a\n    // 1. \u975e\u7f13\u51b2\u578b\uff0c\u7b49\u5f85\u53d1\u9001\u5217\u961f sendq \u91cc\u6ca1\u6709 goroutine \u5728\u7b49\u5f85\n    // 2. \u7f13\u51b2\u578b\uff0c\u4f46 buf \u91cc\u6ca1\u6709\u5143\u7d20\n    // \u4e4b\u540e\uff0c\u53c8\u89c2\u5bdf\u5230 closed == 0\uff0c\u5373 channel \u672a\u5173\u95ed\u3002\n    // \u56e0\u4e3a channel \u4e0d\u53ef\u80fd\u88ab\u91cd\u590d\u6253\u5f00\uff0c\u6240\u4ee5\u524d\u4e00\u4e2a\u89c2\u6d4b\u7684\u65f6\u5019 channel \u4e5f\u662f\u672a\u5173\u95ed\u7684\uff0c\n    // \u56e0\u6b64\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\u53ef\u4ee5\u76f4\u63a5\u5ba3\u5e03\u63a5\u6536\u5931\u8d25\uff0c\u8fd4\u56de (false, false)\n    if !block && (c.dataqsiz == 0 && c.sendq.first == nil ||\n        c.dataqsiz > 0 && atomic.Loaduint(&c.qcount) == 0) &&\n        atomic.Load(&c.closed) == 0 {\n        return\n    }\n    var t0 int64\n    if blockprofilerate > 0 {\n        t0 = cputicks()\n    }\n    // \u52a0\u9501\n    lock(&c.lock)\n    // channel \u5df2\u5173\u95ed\uff0c\u5e76\u4e14\u5faa\u73af\u6570\u7ec4 buf \u91cc\u6ca1\u6709\u5143\u7d20\n    // \u8fd9\u91cc\u53ef\u4ee5\u5904\u7406\u975e\u7f13\u51b2\u578b\u5173\u95ed \u548c \u7f13\u51b2\u578b\u5173\u95ed\u4f46 buf \u65e0\u5143\u7d20\u7684\u60c5\u51b5\n    // \u4e5f\u5c31\u662f\u8bf4\u5373\u4f7f\u662f\u5173\u95ed\u72b6\u6001\uff0c\u4f46\u5728\u7f13\u51b2\u578b\u7684 channel\uff0c\n    // buf \u91cc\u6709\u5143\u7d20\u7684\u60c5\u51b5\u4e0b\u8fd8\u80fd\u63a5\u6536\u5230\u5143\u7d20\n    if c.closed != 0 && c.qcount == 0 {\n        if raceenabled {\n            raceacquire(unsafe.Pointer(c))\n        }\n        // \u89e3\u9501\n        unlock(&c.lock)\n        if ep != nil {\n            // \u4ece\u4e00\u4e2a\u5df2\u5173\u95ed\u7684 channel \u6267\u884c\u63a5\u6536\u64cd\u4f5c\uff0c\u4e14\u672a\u5ffd\u7565\u8fd4\u56de\u503c\n            // \u90a3\u4e48\u63a5\u6536\u7684\u503c\u5c06\u662f\u4e00\u4e2a\u8be5\u7c7b\u578b\u7684\u96f6\u503c\n            // typedmemclr \u6839\u636e\u7c7b\u578b\u6e05\u7406\u76f8\u5e94\u5730\u5740\u7684\u5185\u5b58\n            typedmemclr(c.elemtype, ep)\n        }\n        // \u4ece\u4e00\u4e2a\u5df2\u5173\u95ed\u7684 channel \u63a5\u6536\uff0cselected \u4f1a\u8fd4\u56detrue\n        return true, false\n    }\n    // \u7b49\u5f85\u53d1\u9001\u961f\u5217\u91cc\u6709 goroutine \u5b58\u5728\uff0c\u8bf4\u660e buf \u662f\u6ee1\u7684\n    // \u8fd9\u6709\u53ef\u80fd\u662f\uff1a\n    // 1. \u975e\u7f13\u51b2\u578b\u7684 channel\n    // 2. \u7f13\u51b2\u578b\u7684 channel\uff0c\u4f46 buf \u6ee1\u4e86\n    // \u9488\u5bf9 1\uff0c\u76f4\u63a5\u8fdb\u884c\u5185\u5b58\u62f7\u8d1d\uff08\u4ece sender goroutine -> receiver goroutine\uff09\n    // \u9488\u5bf9 2\uff0c\u63a5\u6536\u5230\u5faa\u73af\u6570\u7ec4\u5934\u90e8\u7684\u5143\u7d20\uff0c\u5e76\u5c06\u53d1\u9001\u8005\u7684\u5143\u7d20\u653e\u5230\u5faa\u73af\u6570\u7ec4\u5c3e\u90e8\n    if sg := c.sendq.dequeue(); sg != nil {\n        // Found a waiting sender. If buffer is size 0, receive value\n        // directly from sender. Otherwise, receive from head of queue\n        // and add sender\'s value to the tail of the queue (both map to\n        // the same buffer slot because the queue is full).\n        recv(c, sg, ep, func() { unlock(&c.lock) }, 3)\n        return true, true\n    }\n    // \u7f13\u51b2\u578b\uff0cbuf \u91cc\u6709\u5143\u7d20\uff0c\u53ef\u4ee5\u6b63\u5e38\u63a5\u6536\n    if c.qcount > 0 {\n        // \u76f4\u63a5\u4ece\u5faa\u73af\u6570\u7ec4\u91cc\u627e\u5230\u8981\u63a5\u6536\u7684\u5143\u7d20\n        qp := chanbuf(c, c.recvx)\n        // \u2026\u2026\u2026\u2026\n        // \u4ee3\u7801\u91cc\uff0c\u6ca1\u6709\u5ffd\u7565\u8981\u63a5\u6536\u7684\u503c\uff0c\u4e0d\u662f "<- ch"\uff0c\u800c\u662f "val <- ch"\uff0cep \u6307\u5411 val\n        if ep != nil {\n            typedmemmove(c.elemtype, ep, qp)\n        }\n        // \u6e05\u7406\u6389\u5faa\u73af\u6570\u7ec4\u91cc\u76f8\u5e94\u4f4d\u7f6e\u7684\u503c\n        typedmemclr(c.elemtype, qp)\n        // \u63a5\u6536\u6e38\u6807\u5411\u524d\u79fb\u52a8\n        c.recvx++\n        // \u63a5\u6536\u6e38\u6807\u5f52\u96f6\n        if c.recvx == c.dataqsiz {\n            c.recvx = 0\n        }\n        // buf \u6570\u7ec4\u91cc\u7684\u5143\u7d20\u4e2a\u6570\u51cf 1\n        c.qcount--\n        // \u89e3\u9501\n        unlock(&c.lock)\n        return true, true\n    }\n    if !block {\n        // \u975e\u963b\u585e\u63a5\u6536\uff0c\u89e3\u9501\u3002selected \u8fd4\u56de false\uff0c\u56e0\u4e3a\u6ca1\u6709\u63a5\u6536\u5230\u503c\n        unlock(&c.lock)\n        return false, false\n    }\n    // \u63a5\u4e0b\u6765\u5c31\u662f\u8981\u88ab\u963b\u585e\u7684\u60c5\u51b5\u4e86\n    // \u6784\u9020\u4e00\u4e2a sudog\n    gp := getg()\n    mysg := acquireSudog()\n    mysg.releasetime = 0\n    if t0 != 0 {\n        mysg.releasetime = -1\n    }\n    // \u5f85\u63a5\u6536\u6570\u636e\u7684\u5730\u5740\u4fdd\u5b58\u4e0b\u6765\n    mysg.elem = ep\n    mysg.waitlink = nil\n    gp.waiting = mysg\n    mysg.g = gp\n    mysg.selectdone = nil\n    mysg.c = c\n    gp.param = nil\n    // \u8fdb\u5165channel \u7684\u7b49\u5f85\u63a5\u6536\u961f\u5217\n    c.recvq.enqueue(mysg)\n    // \u5c06\u5f53\u524d goroutine \u6302\u8d77\n    goparkunlock(&c.lock, "chan receive", traceEvGoBlockRecv, 3)\n    // \u88ab\u5524\u9192\u4e86\uff0c\u63a5\u7740\u4ece\u8fd9\u91cc\u7ee7\u7eed\u6267\u884c\u4e00\u4e9b\u626b\u5c3e\u5de5\u4f5c\n    if mysg != gp.waiting {\n        throw("G waiting list is corrupted")\n    }\n    gp.waiting = nil\n    if mysg.releasetime > 0 {\n        blockevent(mysg.releasetime-t0, 2)\n    }\n    closed := gp.param == nil\n    gp.param = nil\n    mysg.c = nil\n    releaseSudog(mysg)\n    return true, !closed\n}\n\n'})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5982\u679c channel \u662f\u4e00\u4e2a\u7a7a\u503c\uff08nil\uff09\uff0c\u5728\u975e\u963b\u585e\u6a21\u5f0f\u4e0b\uff0c\u4f1a\u76f4\u63a5\u8fd4\u56de\u3002\u5728\u963b\u585e\u6a21\u5f0f\u4e0b\uff0c\u4f1a\u8c03\u7528 gopark \u51fd\u6570\u6302\u8d77 goroutine\uff0c\u8fd9\u4e2a\u4f1a\u4e00\u76f4\u963b\u585e\u4e0b\u53bb\u3002\u56e0\u4e3a\u5728 channel \u662f nil \u7684\u60c5\u51b5\u4e0b\uff0c\u8981\u60f3\u4e0d\u963b\u585e\uff0c\u53ea\u6709\u5173\u95ed\u5b83\uff0c\u4f46\u5173\u95ed\u4e00\u4e2a nil \u7684 channel \u53c8\u4f1a\u53d1\u751f panic\uff0c\u6240\u4ee5\u6ca1\u6709\u673a\u4f1a\u88ab\u5524\u9192\u4e86\u3002\u66f4\u8be6\u7ec6\u5730\u53ef\u4ee5\u5728 closechan \u51fd\u6570\u7684\u65f6\u5019\u518d\u770b\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u63a5\u4e0b\u6765\uff0c\u5982\u679c\u6709\u7b49\u5f85\u53d1\u9001\u7684\u961f\u5217\uff0c\u8bf4\u660e channel \u5df2\u7ecf\u6ee1\u4e86\uff0c\u8981\u4e48\u662f\u975e\u7f13\u51b2\u578b\u7684 channel\uff0c\u8981\u4e48\u662f\u7f13\u51b2\u578b\u7684 channel\uff0c\u4f46 buf \u6ee1\u4e86\u3002\u8fd9\u4e24\u79cd\u60c5\u51b5\u4e0b\u90fd\u53ef\u4ee5\u6b63\u5e38\u63a5\u6536\u6570\u636e\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"recv-\u51fd\u6570",children:"recv \u51fd\u6570"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:"func recv(c *hchan, sg *sudog, ep unsafe.Pointer, unlockf func(), skip int) {\n    // \u5982\u679c\u662f\u975e\u7f13\u51b2\u578b\u7684 channel\n    if c.dataqsiz == 0 {\n        if raceenabled {\n            racesync(c, sg)\n        }\n        // \u672a\u5ffd\u7565\u63a5\u6536\u7684\u6570\u636e\n        if ep != nil {\n            // \u76f4\u63a5\u62f7\u8d1d\u6570\u636e\uff0c\u4ece sender goroutine -> receiver goroutine\n            recvDirect(c.elemtype, sg, ep)\n        }\n    } else {\n        // \u7f13\u51b2\u578b\u7684 channel\uff0c\u4f46 buf \u5df2\u6ee1\u3002\n        // \u5c06\u5faa\u73af\u6570\u7ec4 buf \u961f\u9996\u7684\u5143\u7d20\u62f7\u8d1d\u5230\u63a5\u6536\u6570\u636e\u7684\u5730\u5740\n        // \u5c06\u53d1\u9001\u8005\u7684\u6570\u636e\u5165\u961f\u3002\u5b9e\u9645\u4e0a\u8fd9\u65f6 revx \u548c sendx \u503c\u76f8\u7b49\n        // \u627e\u5230\u63a5\u6536\u6e38\u6807\n        qp := chanbuf(c, c.recvx)\n        // \u2026\u2026\u2026\u2026\n        // \u5c06\u63a5\u6536\u6e38\u6807\u5904\u7684\u6570\u636e\u62f7\u8d1d\u7ed9\u63a5\u6536\u8005\n        if ep != nil {\n            typedmemmove(c.elemtype, ep, qp)\n        }\n        // \u5c06\u53d1\u9001\u8005\u6570\u636e\u62f7\u8d1d\u5230 buf\n        typedmemmove(c.elemtype, qp, sg.elem)\n        // \u66f4\u65b0\u6e38\u6807\u503c\n        c.recvx++\n        if c.recvx == c.dataqsiz {\n            c.recvx = 0\n        }\n        c.sendx = c.recvx\n    }\n    sg.elem = nil\n    gp := sg.g\n    // \u89e3\u9501\n    unlockf()\n    gp.param = unsafe.Pointer(sg)\n    if sg.releasetime != 0 {\n        sg.releasetime = cputicks()\n    }\n    // \u5524\u9192\u53d1\u9001\u7684 goroutine\u3002\u9700\u8981\u7b49\u5230\u8c03\u5ea6\u5668\u7684\u5149\u4e34\n    goready(gp, skip+1)\n}\n\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679c\u662f\u975e\u7f13\u51b2\u578b\u7684\uff0c\u5c31\u76f4\u63a5\u4ece\u53d1\u9001\u8005\u7684\u6808\u62f7\u8d1d\u5230\u63a5\u6536\u8005\u7684\u6808\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:"\nfunc recvDirect(t *_type, sg *sudog, dst unsafe.Pointer) {\n    // dst is on our stack or the heap, src is on another stack.\n    src := sg.elem\n    typeBitsBulkBarrier(t, uintptr(dst), uintptr(src), t.size)\n    memmove(dst, src, t.size)\n}\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5426\u5219\uff0c\u5c31\u662f\u7f13\u51b2\u578b channel\uff0c\u800c buf \u53c8\u6ee1\u4e86\u7684\u60c5\u5f62\u3002\u8bf4\u660e\u53d1\u9001\u6e38\u6807\u548c\u63a5\u6536\u6e38\u6807\u91cd\u5408\u4e86\uff0c\u56e0\u6b64\u9700\u8981\u5148\u627e\u5230\u63a5\u6536\u6e38\u6807\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:"// chanbuf(c, i) is pointer to the i'th slot in the buffer.\nfunc chanbuf(c *hchan, i uint) unsafe.Pointer {\n    return add(c.buf, uintptr(i)*uintptr(c.elemsize))\n}\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5c06\u8be5\u5904\u7684\u5143\u7d20\u62f7\u8d1d\u5230\u63a5\u6536\u5730\u5740\u3002\u7136\u540e\u5c06\u53d1\u9001\u8005\u5f85\u53d1\u9001\u7684\u6570\u636e\u62f7\u8d1d\u5230\u63a5\u6536\u6e38\u6807\u5904\u3002\u8fd9\u6837\u5c31\u5b8c\u6210\u4e86\u63a5\u6536\u6570\u636e\u548c\u53d1\u9001\u6570\u636e\u7684\u64cd\u4f5c\u3002\u63a5\u7740\uff0c\u5206\u522b\u5c06\u53d1\u9001\u6e38\u6807\u548c\u63a5\u6536\u6e38\u6807\u5411\u524d\u8fdb\u4e00\uff0c\u5982\u679c\u53d1\u751f\u201c\u73af\u7ed5\u201d\uff0c\u518d\u4ece 0 \u5f00\u59cb\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u6700\u540e\uff0c\u53d6\u51fa sudog \u91cc\u7684 goroutine\uff0c\u8c03\u7528 goready \u5c06\u5176\u72b6\u6001\u6539\u6210 \u201crunnable\u201d\uff0c\u5f85\u53d1\u9001\u8005\u88ab\u5524\u9192\uff0c\u7b49\u5f85\u8c03\u5ea6\u5668\u7684\u8c03\u5ea6\u3002"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7136\u540e\uff0c\u5982\u679c channel \u7684 buf \u91cc\u8fd8\u6709\u6570\u636e\uff0c\u8bf4\u660e\u53ef\u4ee5\u6bd4\u8f83\u6b63\u5e38\u5730\u63a5\u6536\u3002\u6ce8\u610f\uff0c\u8fd9\u91cc\uff0c\u5373\u4f7f\u662f\u5728 channel \u5df2\u7ecf\u5173\u95ed\u7684\u60c5\u51b5\u4e0b\uff0c\u4e5f\u662f\u53ef\u4ee5\u8d70\u5230\u8fd9\u91cc\u7684\u3002\u8fd9\u4e00\u6b65\u6bd4\u8f83\u7b80\u5355\uff0c\u6b63\u5e38\u5730\u5c06 buf \u91cc\u63a5\u6536\u6e38\u6807\u5904\u7684\u6570\u636e\u62f7\u8d1d\u5230\u63a5\u6536\u6570\u636e\u7684\u5730\u5740\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u5230\u4e86\u6700\u540e\u4e00\u6b65\uff0c\u8d70\u5230\u8fd9\u91cc\u6765\u7684\u60c5\u5f62\u662f\u8981\u963b\u585e\u7684\u3002\u5f53\u7136\uff0c\u5982\u679c block \u4f20\u8fdb\u6765\u7684\u503c\u662f false\uff0c\u90a3\u5c31\u4e0d\u963b\u585e\uff0c\u76f4\u63a5\u8fd4\u56de\u5c31\u597d\u4e86\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"channel-\u5185\u5b58\u6cc4\u6f0f",children:"channel \u5185\u5b58\u6cc4\u6f0f"}),"\n",(0,l.jsx)(e.p,{children:"Channel \u53ef\u80fd\u4f1a\u5f15\u53d1 goroutine \u6cc4\u6f0f\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u6cc4\u6f0f\u7684\u539f\u56e0\u662f goroutine \u64cd\u4f5c channel \u540e\uff0c\u5904\u4e8e\u53d1\u9001\u6216\u63a5\u6536\u963b\u585e\u72b6\u6001\uff0c\u800c channel \u5904\u4e8e\u6ee1\u6216\u7a7a\u7684\u72b6\u6001\uff0c\u4e00\u76f4\u5f97\u4e0d\u5230\u6539\u53d8\u3002\u540c\u65f6\uff0c\u5783\u573e\u56de\u6536\u5668\u4e5f\u4e0d\u4f1a\u56de\u6536\u6b64\u7c7b\u8d44\u6e90\uff0c\u8fdb\u800c\u5bfc\u81f4 gouroutine \u4f1a\u4e00\u76f4\u5904\u4e8e\u7b49\u5f85\u961f\u5217\u4e2d\uff0c\u4e0d\u89c1\u5929\u65e5\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u53e6\u5916\uff0c\u7a0b\u5e8f\u8fd0\u884c\u8fc7\u7a0b\u4e2d\uff0c\u5bf9\u4e8e\u4e00\u4e2a channel\uff0c\u5982\u679c\u6ca1\u6709\u4efb\u4f55 goroutine \u5f15\u7528\u4e86\uff0cgc \u4f1a\u5bf9\u5176\u8fdb\u884c\u56de\u6536\u64cd\u4f5c\uff0c\u4e0d\u4f1a\u5f15\u8d77\u5185\u5b58\u6cc4\u6f0f\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"channel-\u5e94\u7528",children:"channel \u5e94\u7528"}),"\n",(0,l.jsx)(e.h3,{id:"\u505c\u6b62\u4fe1\u53f7",children:"\u505c\u6b62\u4fe1\u53f7"}),"\n",(0,l.jsx)(e.p,{children:"channel \u7528\u4e8e\u505c\u6b62\u4fe1\u53f7\u7684\u573a\u666f\u8fd8\u662f\u633a\u591a\u7684\uff0c\u7ecf\u5e38\u662f\u5173\u95ed\u67d0\u4e2a channel \u6216\u8005\u5411 channel \u53d1\u9001\u4e00\u4e2a\u5143\u7d20\uff0c\u4f7f\u5f97\u63a5\u6536 channel \u7684\u90a3\u4e00\u65b9\u83b7\u77e5\u9053\u6b64\u4fe1\u606f\uff0c\u8fdb\u800c\u505a\u4e00\u4e9b\u5176\u4ed6\u7684\u64cd\u4f5c\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"\u4efb\u52a1\u5b9a\u65f6",children:"\u4efb\u52a1\u5b9a\u65f6"}),"\n",(0,l.jsx)(e.p,{children:"\u4e0e timer \u7ed3\u5408\uff0c\u4e00\u822c\u6709\u4e24\u79cd\u73a9\u6cd5\uff1a\u5b9e\u73b0\u8d85\u65f6\u63a7\u5236\uff0c\u5b9e\u73b0\u5b9a\u671f\u6267\u884c\u67d0\u4e2a\u4efb\u52a1\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u6709\u65f6\u5019\uff0c\u9700\u8981\u6267\u884c\u67d0\u9879\u64cd\u4f5c\uff0c\u4f46\u53c8\u4e0d\u60f3\u5b83\u8017\u8d39\u592a\u957f\u65f6\u95f4\uff0c\u4e0a\u4e00\u4e2a\u5b9a\u65f6\u5668\u5c31\u53ef\u4ee5\u641e\u5b9a\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:"select {\n    case <-time.After(100 * time.Millisecond):\n    case <-s.stopc:\n        return false\n}\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u7b49\u5f85 100 ms \u540e\uff0c\u5982\u679c s.stopc \u8fd8\u6ca1\u6709\u8bfb\u51fa\u6570\u636e\u6216\u8005\u88ab\u5173\u95ed\uff0c\u5c31\u76f4\u63a5\u7ed3\u675f\u3002\u8fd9\u662f\u6765\u81ea etcd \u6e90\u7801\u91cc\u7684\u4e00\u4e2a\u4f8b\u5b50\uff0c\u8fd9\u6837\u7684\u5199\u6cd5\u968f\u5904\u53ef\u89c1\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:'func worker() {\n    ticker := time.Tick(1 * time.Second)\n    for {\n        select {\n        case <- ticker:\n            // \u6267\u884c\u5b9a\u65f6\u4efb\u52a1\n            fmt.Println("\u6267\u884c 1s \u5b9a\u65f6\u4efb\u52a1")\n        }\n    }\n}\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u6bcf\u9694 1 \u79d2\u79cd\uff0c\u6267\u884c\u4e00\u6b21\u5b9a\u65f6\u4efb\u52a1\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"\u89e3\u8026\u751f\u4ea7\u65b9\u548c\u6d88\u8d39\u65b9",children:"\u89e3\u8026\u751f\u4ea7\u65b9\u548c\u6d88\u8d39\u65b9"}),"\n",(0,l.jsxs)(e.p,{children:["\u670d\u52a1\u542f\u52a8\u65f6\uff0c\u542f\u52a8 n \u4e2a worker\uff0c\u4f5c\u4e3a\u5de5\u4f5c\u534f\u7a0b\u6c60\uff0c\u8fd9\u4e9b\u534f\u7a0b\u5de5\u4f5c\u5728\u4e00\u4e2a for "," \u65e0\u9650\u5faa\u73af\u91cc\uff0c\u4ece\u67d0\u4e2a channel \u6d88\u8d39\u5de5\u4f5c\u4efb\u52a1\u5e76\u6267\u884c\uff1a"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:'func main() {\n    taskCh := make(chan int, 100)\n    go worker(taskCh)\n    // \u585e\u4efb\u52a1\n    for i := 0; i < 10; i++ {\n        taskCh <- i\n    }\n    // \u7b49\u5f85 1 \u5c0f\u65f6 \n    select {\n    case <-time.After(time.Hour):\n    }\n}\nfunc worker(taskCh <-chan int) {\n    const N = 5\n    // \u542f\u52a8 5 \u4e2a\u5de5\u4f5c\u534f\u7a0b\n    for i := 0; i < N; i++ {\n        go func(id int) {\n            for {\n                task := <- taskCh\n                fmt.Printf("finish task: %d by worker %d\\n", task, id)\n                time.Sleep(time.Second)\n            }\n        }(i)\n    }\n}\n'})}),"\n",(0,l.jsx)(e.p,{children:"5 \u4e2a\u5de5\u4f5c\u534f\u7a0b\u5728\u4e0d\u65ad\u5730\u4ece\u5de5\u4f5c\u961f\u5217\u91cc\u53d6\u4efb\u52a1\uff0c\u751f\u4ea7\u65b9\u53ea\u7ba1\u5f80 channel \u53d1\u9001\u4efb\u52a1\u5373\u53ef\uff0c\u89e3\u8026\u751f\u4ea7\u65b9\u548c\u6d88\u8d39\u65b9\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"\u63a7\u5236\u5e76\u53d1\u6570",children:"\u63a7\u5236\u5e76\u53d1\u6570"}),"\n",(0,l.jsx)(e.p,{children:"\u6709\u65f6\u9700\u8981\u5b9a\u65f6\u6267\u884c\u51e0\u767e\u4e2a\u4efb\u52a1\uff0c\u4f8b\u5982\u6bcf\u5929\u5b9a\u65f6\u6309\u57ce\u5e02\u6765\u6267\u884c\u4e00\u4e9b\u79bb\u7ebf\u8ba1\u7b97\u7684\u4efb\u52a1\u3002\u4f46\u662f\u5e76\u53d1\u6570\u53c8\u4e0d\u80fd\u592a\u9ad8\uff0c\u56e0\u4e3a\u4efb\u52a1\u6267\u884c\u8fc7\u7a0b\u4f9d\u8d56\u7b2c\u4e09\u65b9\u7684\u4e00\u4e9b\u8d44\u6e90\uff0c\u5bf9\u8bf7\u6c42\u7684\u901f\u7387\u6709\u9650\u5236\u3002\u8fd9\u65f6\u5c31\u53ef\u4ee5\u901a\u8fc7 channel \u6765\u63a7\u5236\u5e76\u53d1\u6570\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:"var limit = make(chan int, 3)\nfunc main() {\n    // \u2026\u2026\u2026\u2026\n    for _, w := range work {\n        go func() {\n            limit <- 1\n            w()\n            <-limit\n        }()\n    }\n    // \u2026\u2026\u2026\u2026\n}\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u6784\u5efa\u4e00\u4e2a\u7f13\u51b2\u578b\u7684 channel\uff0c\u5bb9\u91cf\u4e3a 3\u3002\u63a5\u7740\u904d\u5386\u4efb\u52a1\u5217\u8868\uff0c\u6bcf\u4e2a\u4efb\u52a1\u542f\u52a8\u4e00\u4e2a goroutine \u53bb\u5b8c\u6210\u3002\u771f\u6b63\u6267\u884c\u4efb\u52a1\uff0c\u8bbf\u95ee\u7b2c\u4e09\u65b9\u7684\u52a8\u4f5c\u5728 w() \u4e2d\u5b8c\u6210\uff0c\u5728\u6267\u884c w() \u4e4b\u524d\uff0c\u5148\u8981\u4ece limit \u4e2d\u62ff\u201c\u8bb8\u53ef\u8bc1\u201d\uff0c\u62ff\u5230\u8bb8\u53ef\u8bc1\u4e4b\u540e\uff0c\u624d\u80fd\u6267\u884c w()\uff0c\u5e76\u4e14\u5728\u6267\u884c\u5b8c\u4efb\u52a1\uff0c\u8981\u5c06\u201c\u8bb8\u53ef\u8bc1\u201d\u5f52\u8fd8\u3002\u8fd9\u6837\u5c31\u53ef\u4ee5\u63a7\u5236\u540c\u65f6\u8fd0\u884c\u7684 goroutine \u6570\u3002"}),"\n",(0,l.jsxs)(e.p,{children:["\u8fd9\u91cc\uff0c",(0,l.jsx)(e.code,{children:"limit <- 1"})," \u653e\u5728 func \u5185\u90e8\u800c\u4e0d\u662f\u5916\u90e8\uff0c\u539f\u56e0\u662f\uff1a"]}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"\u5982\u679c\u5728\u5916\u5c42\uff0c\u5c31\u662f\u63a7\u5236\u7cfb\u7edf goroutine \u7684\u6570\u91cf\uff0c\u53ef\u80fd\u4f1a\u963b\u585e for \u5faa\u73af\uff0c\u5f71\u54cd\u4e1a\u52a1\u903b\u8f91\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"limit \u5176\u5b9e\u548c\u903b\u8f91\u65e0\u5173\uff0c\u53ea\u662f\u6027\u80fd\u8c03\u4f18\uff0c\u653e\u5728\u5185\u5c42\u548c\u5916\u5c42\u7684\u8bed\u4e49\u4e0d\u592a\u4e00\u6837\u3002\n\u8fd8\u6709\u4e00\u70b9\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5982\u679c w() \u53d1\u751f panic\uff0c\u90a3\u201c\u8bb8\u53ef\u8bc1\u201d\u53ef\u80fd\u5c31\u8fd8\u4e0d\u56de\u53bb\u4e86\uff0c\u56e0\u6b64\u9700\u8981\u4f7f\u7528 defer \u6765\u4fdd\u8bc1\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u4ece\u4e00\u4e2a\u5173\u95ed\u7684-channel-\u4ecd\u7136\u80fd\u8bfb\u51fa\u6570\u636e\u5417",children:"\u4ece\u4e00\u4e2a\u5173\u95ed\u7684 channel \u4ecd\u7136\u80fd\u8bfb\u51fa\u6570\u636e\u5417"}),"\n",(0,l.jsx)(e.p,{children:"\u4ece\u4e00\u4e2a\u6709\u7f13\u51b2\u7684 channel \u91cc\u8bfb\u6570\u636e\uff0c\u5f53 channel \u88ab\u5173\u95ed\uff0c\u4f9d\u7136\u80fd\u8bfb\u51fa\u6709\u6548\u503c\u3002\u53ea\u6709\u5f53\u8fd4\u56de\u7684 ok \u4e3a false \u65f6\uff0c\u8bfb\u51fa\u7684\u6570\u636e\u624d\u662f\u65e0\u6548\u7684\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:'\nfunc main() {\n    ch := make(chan int, 5)\n    ch <- 18\n    close(ch)\n    x, ok := <-ch\n    if ok {\n        fmt.Println("received: ", x)\n    }\n    x, ok = <-ch\n    if !ok {\n        fmt.Println("channel closed, data invalid.")\n    }\n}\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u5148\u521b\u5efa\u4e86\u4e00\u4e2a\u6709\u7f13\u51b2\u7684 channel\uff0c\u5411\u5176\u53d1\u9001\u4e00\u4e2a\u5143\u7d20\uff0c\u7136\u540e\u5173\u95ed\u6b64 channel\u3002\u4e4b\u540e\u4e24\u6b21\u5c1d\u8bd5\u4ece channel \u4e2d\u8bfb\u53d6\u6570\u636e\uff0c\u7b2c\u4e00\u6b21\u4ecd\u7136\u80fd\u6b63\u5e38\u8bfb\u51fa\u503c\u3002\u7b2c\u4e8c\u6b21\u8fd4\u56de\u7684 ok \u4e3a false\uff0c\u8bf4\u660e channel \u5df2\u5173\u95ed\uff0c\u4e14\u901a\u9053\u91cc\u6ca1\u6709\u6570\u636e\u3002"})]})}function d(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(h,{...n})}):h(n)}},11151:(n,e,c)=>{c.d(e,{Z:()=>s,a:()=>a});var l=c(67294);const i={},r=l.createContext(i);function a(n){const e=l.useContext(r);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);