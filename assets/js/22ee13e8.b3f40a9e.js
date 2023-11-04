"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[77406],{20399:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>r});var c=s(85893),i=s(11151);const l={},a="\u5207\u7247",d={id:"backend/go/base/slice",title:"\u5207\u7247",description:"\u5207\u7247\u58f0\u660e\u65f6\u9ed8\u8ba4\u7684\u957f\u5ea6\u548c\u5bb9\u91cf",source:"@site/docs/backend/go/base/slice.md",sourceDirName:"backend/go/base",slug:"/backend/go/base/slice",permalink:"/docs/backend/go/base/slice",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Scheduler",permalink:"/docs/backend/go/base/scheduler"},next:{title:"\u6807\u51c6\u5e93",permalink:"/docs/backend/go/base/standard"}},t={},r=[{value:"\u5207\u7247\u58f0\u660e\u65f6\u9ed8\u8ba4\u7684\u957f\u5ea6\u548c\u5bb9\u91cf",id:"\u5207\u7247\u58f0\u660e\u65f6\u9ed8\u8ba4\u7684\u957f\u5ea6\u548c\u5bb9\u91cf",level:2},{value:"\u5207\u7247\u58f0\u660e\u65f6\u6307\u5b9a\u5bb9\u91cf",id:"\u5207\u7247\u58f0\u660e\u65f6\u6307\u5b9a\u5bb9\u91cf",level:2},{value:"\u6307\u5b9a\u5207\u7247\u533a\u95f4\u4f5c\u4e3a\u65b0\u5207\u7247\u65f6\uff0c\u65b0\u5207\u7247\u7684\u957f\u5ea6\u548c\u5bb9\u91cf",id:"\u6307\u5b9a\u5207\u7247\u533a\u95f4\u4f5c\u4e3a\u65b0\u5207\u7247\u65f6\u65b0\u5207\u7247\u7684\u957f\u5ea6\u548c\u5bb9\u91cf",level:2},{value:"\u5207\u7247\u6269\u5bb9\u65f6\u5bb9\u91cf\u7684\u53d8\u5316",id:"\u5207\u7247\u6269\u5bb9\u65f6\u5bb9\u91cf\u7684\u53d8\u5316",level:2},{value:"\u591a\u4e2a\u5207\u7247\u6307\u5411\u540c\u4e00\u4e2a\u6570\u7ec4\uff0c\u5bf9\u5207\u7247\u5143\u7d20\u7684\u4fee\u6539\u4f1a\u5f71\u54cd\u5230\u6574\u4e2a\u6570\u7ec4",id:"\u591a\u4e2a\u5207\u7247\u6307\u5411\u540c\u4e00\u4e2a\u6570\u7ec4\u5bf9\u5207\u7247\u5143\u7d20\u7684\u4fee\u6539\u4f1a\u5f71\u54cd\u5230\u6574\u4e2a\u6570\u7ec4",level:2}];function o(n){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h1,{id:"\u5207\u7247",children:"\u5207\u7247"}),"\n",(0,c.jsx)(e.h2,{id:"\u5207\u7247\u58f0\u660e\u65f6\u9ed8\u8ba4\u7684\u957f\u5ea6\u548c\u5bb9\u91cf",children:"\u5207\u7247\u58f0\u660e\u65f6\u9ed8\u8ba4\u7684\u957f\u5ea6\u548c\u5bb9\u91cf"}),"\n",(0,c.jsx)(e.p,{children:"\u5207\u7247\u5728\u4f7f\u7528 make \u58f0\u660e\u65f6\uff0c\u5982\u679c\u6ca1\u6709\u663e\u5f0f\u7684\u8bf4\u660e\u5207\u7247\u7684\u5bb9\u91cf\uff0c\u90a3\u4e48\u9ed8\u8ba4\u5bb9\u91cf\u548c\u5207\u7247\u7684\u957f\u5ea6\u4fdd\u6301\u4e00\u81f4\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-go",children:'func main() {\n s1 := make([]int, 3)\n fmt.Println("s1 length: ", len(s1))   // s1 length:  3\n fmt.Println("s1 capacity: ", cap(s1)) // s1 capacity:  3\n fmt.Printf("s1 value: %#v\\n", s1)     // s1 value: []int{0, 0, 0}\n}\n\n'})}),"\n",(0,c.jsx)(e.h2,{id:"\u5207\u7247\u58f0\u660e\u65f6\u6307\u5b9a\u5bb9\u91cf",children:"\u5207\u7247\u58f0\u660e\u65f6\u6307\u5b9a\u5bb9\u91cf"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-go",children:'func main() {\n s2 := make([]int, 3, 7)\n fmt.Println("s2 length: ", len(s2))   // s2 length:  3\n fmt.Println("s2 capacity: ", cap(s2)) // s2 capacity:  7\n fmt.Printf("s2 value:  %#v\\n", s2)    // s2 value:  []int{0, 0, 0}\n}\n\n'})}),"\n",(0,c.jsx)(e.h2,{id:"\u6307\u5b9a\u5207\u7247\u533a\u95f4\u4f5c\u4e3a\u65b0\u5207\u7247\u65f6\u65b0\u5207\u7247\u7684\u957f\u5ea6\u548c\u5bb9\u91cf",children:"\u6307\u5b9a\u5207\u7247\u533a\u95f4\u4f5c\u4e3a\u65b0\u5207\u7247\u65f6\uff0c\u65b0\u5207\u7247\u7684\u957f\u5ea6\u548c\u5bb9\u91cf"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-go",children:'func main() {\n s3 := []int{1, 2, 3, 4, 5, 6, 7, 8}\n s4 := s3[3:6]\n fmt.Printf("s4 length is: %d\\n", len(s4))   // s4 length is: 3\n fmt.Printf("s4 capacity is: %d\\n", cap(s4)) // s4 capacity is: 5\n fmt.Printf("s4 value is: %d\\n", s4)         // s4 value is: [4 5 6]\n\n s5 := s4[:cap(s4)]\n fmt.Printf("s5 length is: %d\\n", len(s5))   // s5 length is: 5\n fmt.Printf("s5 capacity is: %d\\n", cap(s5)) // s5 capacity is: 5\n fmt.Printf("s5 value is: %d\\n", s5)         // s5 value is: [4 5 6 7 8]\n}\n\n'})}),"\n",(0,c.jsxs)(e.p,{children:["\u5207\u7247 ",(0,c.jsx)(e.code,{children:"s4"})," \u662f\u5728\u5207\u7247 ",(0,c.jsx)(e.code,{children:"s3"})," \u7684\u57fa\u7840\u4e0a\u901a\u8fc7\u7d22\u5f15\u5212\u5206\u51fa\u6765\u4e00\u4e2a\u65b0\u7684\u5207\u7247\uff0c\u6240\u4ee5\u5207\u7247 ",(0,c.jsx)(e.code,{children:"s4"})," \u7684\u957f\u5ea6\u662f ",(0,c.jsx)(e.code,{children:"6-3=3"}),"\uff0c\u800c\u5207\u7247 ",(0,c.jsx)(e.code,{children:"s4"})," \u7684\u5bb9\u91cf ",(0,c.jsx)(e.code,{children:"cap(s4)=8-3=5"}),"\uff0c\u5176\u4e2d ",(0,c.jsx)(e.code,{children:"8"})," \u4e3a\u5207\u7247 ",(0,c.jsx)(e.code,{children:"s3"})," \u7684\u957f\u5ea6\uff0c",(0,c.jsx)(e.code,{children:"3"})," \u4e3a\u5207\u7247s4 \u5728",(0,c.jsx)(e.code,{children:"s3"})," \u7684\u8d77\u59cb\u4f4d\u7f6e\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:["c",(0,c.jsx)(e.code,{children:"ap(s4)=5"}),"\uff0c\u6240\u4ee5 ",(0,c.jsx)(e.code,{children:"s4[:cap(s4)]"})," \u5c31\u7b49\u4e8e ",(0,c.jsx)(e.code,{children:"s4[:5]"})," \u7531\u4e8e ",(0,c.jsx)(e.code,{children:"s4"})," \u548c ",(0,c.jsx)(e.code,{children:"s3"})," \u5171\u7528\u540c\u4e00\u4e2a\u6570\u7ec4\uff0c\u6240\u4ee5",(0,c.jsx)(e.code,{children:"s4[:5]"})," \u5c31\u76f8\u5f53\u4e8e\u4ece ",(0,c.jsx)(e.code,{children:"s4"})," \u8d77\u59cb\u7684\u4f4d\u7f6e\u5f00\u59cb\u5230\u7b2c ",(0,c.jsx)(e.code,{children:"5"})," \u4e2a\u5143\u7d20\uff0c\u4e5f\u5c31\u662f\u4ece ",(0,c.jsx)(e.code,{children:"s3"})," \u7684\u7b2c\u4e09\u4e2a\u5143\u7d20\u5f00\u59cb\u4e00\u76f4\u5230\u7b2c ",(0,c.jsx)(e.code,{children:"3 + 5 = 8"})," \u4e2a\u5143\u7d20\uff0c\u6240\u4ee5 ",(0,c.jsx)(e.code,{children:"s5=[4 5 6 7 8]"})," \u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"\u5207\u7247\u6269\u5bb9\u65f6\u5bb9\u91cf\u7684\u53d8\u5316",children:"\u5207\u7247\u6269\u5bb9\u65f6\u5bb9\u91cf\u7684\u53d8\u5316"}),"\n",(0,c.jsx)(e.p,{children:"\u5207\u7247\u901a\u8fc7 append \u6269\u5bb9\u65f6\uff0c\u5982\u679c\u5207\u7247\u957f\u5ea6\u5c0f\u4e8e\u5f53\u524d\u7684\u5bb9\u91cf\uff0c\u90a3\u4e48\u5207\u7247\u4e0d\u4f1a\u6269\u5bb9\uff0c\u5982\u679c\u8ffd\u52a0\u5143\u7d20\u540e\u5207\u7247\u957f\u5ea6\u5927\u4e8e\u5f53\u524d\u7684\u5bb9\u91cf\u65f6\uff0c\u5207\u7247\u5c31\u4f1a\u6269\u5bb9\uff0c\u6269\u5bb9\u673a\u5236\u5982\u4e0b\uff1a"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u5f53\u6269\u5bb9\u4e4b\u540e\u7684\u5143\u7d20\u957f\u5ea6\u5c0f\u4e8e 1024 \u65f6\u4f1a\u4ee5\u539f\u5207\u7247\u5bb9\u91cf\u7684 2 \u500d\u7684\u8fdb\u884c\u6269\u5bb9\uff1b"}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u5f53\u6269\u5bb9\u4e4b\u540e\u7684\u5143\u7d20\u957f\u5ea6\u5927\u4e8e 1024 \u65f6\u4f1a\u4ee5\u539f\u5207\u7247\u5bb9\u91cf\u7684 1.25 \u500d\u7684\u8fdb\u884c\u6269\u5bb9\uff1b"}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u5f53\u4e0d\u9700\u8981\u6269\u5bb9\u65f6\uff0cappend \u51fd\u6570\u8fd4\u56de\u7684\u662f\u539f\u5e95\u5c42\u6570\u7ec4\u7684\u539f\u5207\u7247\uff08\u5185\u5b58\u5730\u5740\u4e0d\u53d8)"}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u5f53\u5207\u7247\u9700\u8981\u6269\u5bb9\u65f6\uff0cappend \u51fd\u6570\u8fd4\u56de\u7684\u662f\u65b0\u5e95\u5c42\u6570\u7ec4\u7684\u65b0\u5207\u7247\uff08\u5207\u7247\u5185\u5b58\u5730\u5740\u53d1\u751f\u4e86\u6539\u53d8\uff09\uff1b"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:"\u5411 slice \u8ffd\u52a0\u5143\u7d20\u7684\u65f6\u5019\uff0c\u82e5\u5bb9\u91cf\u4e0d\u591f\uff0c\u4f1a\u8c03\u7528 growslice \u51fd\u6570"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-go",children:"func growslice(et *_type, old slice, cap int) slice {\n    // \u2026\u2026\n    newcap := old.cap\n    doublecap := newcap + newcap\n    if cap > doublecap {\n        newcap = cap\n    } else {\n        if old.len < 1024 {\n            newcap = doublecap\n        } else {\n            for newcap < cap {\n                newcap += newcap / 4\n            }\n        }\n    }\n    // \u2026\u2026\n    capmem = roundupsize(uintptr(newcap) * ptrSize)\n    newcap = int(capmem / ptrSize)\n\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u591a\u4e2a\u5207\u7247\u6307\u5411\u540c\u4e00\u4e2a\u6570\u7ec4\u5bf9\u5207\u7247\u5143\u7d20\u7684\u4fee\u6539\u4f1a\u5f71\u54cd\u5230\u6574\u4e2a\u6570\u7ec4",children:"\u591a\u4e2a\u5207\u7247\u6307\u5411\u540c\u4e00\u4e2a\u6570\u7ec4\uff0c\u5bf9\u5207\u7247\u5143\u7d20\u7684\u4fee\u6539\u4f1a\u5f71\u54cd\u5230\u6574\u4e2a\u6570\u7ec4"}),"\n",(0,c.jsx)(e.p,{children:"\u5982\u679c\u591a\u4e2a\u5207\u7247\u6307\u5411\u540c\u4e00\u5e95\u5c42\u6570\u7ec4\uff0c\u5f15\u7528\u76f8\u540c\u7247\u6bb5\u7684\u5e95\u5c42\u6570\u7ec4\u4f1a\u56e0\u4e3a\u5176\u4e2d\u4e00\u4e2a\u5207\u7247\u7684\u6539\u53d8\u5f71\u54cd\u6574\u4e2a\u5e95\u5c42\u6570\u7ec4\uff0c \u56e0\u6b64\u9700\u8981\u7279\u522b\u6ce8\u610f\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-go",children:'func main() {\n a1 := [7]int{1, 2, 3, 4, 5, 6, 7}\n fmt.Printf("a1: %v (len: %d, cap: %d)\\n", a1, len(a1), cap(a1))\n s9 := a1[1:4]\n\n fmt.Printf("s9: %v (len: %d, cap: %d)\\n", s9, len(s9), cap(s9))\n for i := 1; i <= 5; i++ {\n  s9 = append(s9, i)\n  fmt.Printf("s9(%d): %v (len: %d, cap: %d)\\n", i, s9, len(s9), cap(s9))\n }\n fmt.Printf("a1: %v (len: %d, cap: %d)\\n", a1, len(a1), cap(a1))\n}\n\n'})})]})}function p(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(o,{...n})}):o(n)}},11151:(n,e,s)=>{s.d(e,{Z:()=>d,a:()=>a});var c=s(67294);const i={},l=c.createContext(i);function a(n){const e=c.useContext(l);return c.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),c.createElement(l.Provider,{value:e},n.children)}}}]);