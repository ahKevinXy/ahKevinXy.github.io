"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[5475],{99337:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>t,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=l(85893),c=l(11151);const r={title:"\u5206\u5e03\u5f0f\u4e8b\u52a1\u9501",authors:"ahKevinXy",description:"Redis\u3001Zookeeper\u3001Etcd\u7684\u5206\u5e03\u5f0f\u9501\u5b9e\u73b0\u65b9\u6848",image:"https://source.unsplash.com/random?people&62"},s="\u5206\u5e03\u5f0f\u4e8b\u52a1\u9501",o={permalink:"/blog/2023/11/14/lock",source:"@site/blog/2023/11/14/lock.md",title:"\u5206\u5e03\u5f0f\u4e8b\u52a1\u9501",description:"Redis\u3001Zookeeper\u3001Etcd\u7684\u5206\u5e03\u5f0f\u9501\u5b9e\u73b0\u65b9\u6848",date:"2023-11-14T00:00:00.000Z",formattedDate:"November 14, 2023",tags:[],readingTime:5.04,hasTruncateMarker:!0,authors:[{name:"ahKevinXy",title:"\u4f5c\u8005",url:"https://github.com/ahKevinXy",email:"ahkevinxy@gmail.com",imageURL:"/img/headers.png",key:"ahKevinXy"}],frontMatter:{title:"\u5206\u5e03\u5f0f\u4e8b\u52a1\u9501",authors:"ahKevinXy",description:"Redis\u3001Zookeeper\u3001Etcd\u7684\u5206\u5e03\u5f0f\u9501\u5b9e\u73b0\u65b9\u6848",image:"https://source.unsplash.com/random?people&62"},unlisted:!1,prevItem:{title:"BBR \u7b97\u6cd5",permalink:"/blog/2023/11/14/bbr"},nextItem:{title:"go \u8bed\u8a00\u4f60\u4e0d\u77e5\u9053\u7684\u90a3\u4e9b\u4e8b",permalink:"/blog/2023/11/14/unknows"}},t={authorsImageUrls:[void 0]},d=[{value:"\u5355\u673a\u9501",id:"\u5355\u673a\u9501",level:2},{value:"1. \u57fa\u4e8eRedis\u7684\u5206\u5e03\u5f0f\u9501",id:"1-\u57fa\u4e8eredis\u7684\u5206\u5e03\u5f0f\u9501",level:2},{value:"2. \u57fa\u4e8eZookeeper\u7684\u5206\u5e03\u5f0f\u9501",id:"2-\u57fa\u4e8ezookeeper\u7684\u5206\u5e03\u5f0f\u9501",level:2},{value:"3. \u57fa\u4e8eEtcd\u7684\u5206\u5e03\u5f0f\u9501",id:"3-\u57fa\u4e8eetcd\u7684\u5206\u5e03\u5f0f\u9501",level:2},{value:"4. \u57fa\u4e8eRedisson\u7684\u5206\u5e03\u5f0f\u9501",id:"4-\u57fa\u4e8eredisson\u7684\u5206\u5e03\u5f0f\u9501",level:2},{value:"5. \u57fa\u4e8eApollo\u7684\u5206\u5e03\u5f0f\u9501",id:"5-\u57fa\u4e8eapollo\u7684\u5206\u5e03\u5f0f\u9501",level:2},{value:"6. \u57fa\u4e8eRocketMQ\u7684\u5206\u5e03\u5f0f\u9501",id:"6-\u57fa\u4e8erocketmq\u7684\u5206\u5e03\u5f0f\u9501",level:2},{value:"7. \u57fa\u4e8eSeata\u7684\u5206\u5e03\u5f0f\u9501",id:"7-\u57fa\u4e8eseata\u7684\u5206\u5e03\u5f0f\u9501",level:2},{value:"8. \u57fa\u4e8eTCC\u7684\u5206\u5e03\u5f0f\u9501",id:"8-\u57fa\u4e8etcc\u7684\u5206\u5e03\u5f0f\u9501",level:2},{value:"Raft\u5171\u8bc6\u7b97\u6cd5",id:"raft\u5171\u8bc6\u7b97\u6cd5",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function a(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u5206\u5e03\u5f0f\u9501\u662f\u4e00\u79cd\u63a7\u5236\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e2d\u5e76\u53d1\u8bbf\u95ee\u5171\u4eab\u8d44\u6e90\u7684\u673a\u5236\uff0c\u5b83\u53ef\u4ee5\u4fdd\u8bc1\u5728\u540c\u4e00\u65f6\u95f4\u53ea\u6709\u4e00\u4e2a\u8fdb\u7a0b\u5bf9\u5171\u4eab\u8d44\u6e90\u8fdb\u884c\u64cd\u4f5c\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u5355\u673a\u9501",children:"\u5355\u673a\u9501"}),"\n",(0,i.jsx)(n.p,{children:"\u6700\u5e38\u89c1\u7684\u6709\u4e24\u79cd\u9501\uff0c\u4e00\u79cd\u662fSynchronized\u9501\uff0c\u4e00\u79cd\u662fCAS\u9501\u3002"}),"\n",(0,i.jsx)(n.p,{children:"CAS\u9501\u662fCompare And Swap\u7684\u7f29\u5199\uff0c\u662f\u4e00\u79cd\u65e0\u9501\u7b97\u6cd5\uff0cCAS\u7b97\u6cd5\u662f\u786c\u4ef6\u6307\u4ee4\uff0c\u5b83\u53ef\u4ee5\u4fdd\u8bc1\u5728\u591a\u5904\u7406\u5668\u73af\u5883\u4e0b\uff0c\u591a\u4e2a\u7ebf\u7a0b\u5728\u6267\u884cCAS\u64cd\u4f5c\u65f6\uff0c\u53ea\u6709\u4e00\u4e2a\u7ebf\u7a0b\u80fd\u6267\u884c\u6210\u529f\uff0c\u800c\u5176\u4ed6\u7ebf\u7a0b\u90fd\u80fd\u6267\u884c\u5931\u8d25\uff0c\u4ece\u800c\u907f\u514d\u4e86\u9501\u7684\u7ade\u4e89\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"public class CASLock {\n    private int value = 0;\n\n    public synchronized void increment() {\n        while (value!= 0) {\n        }\n    }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Synchronized"}),"\u9501\u662fJava\u4e2d\u7684\u5185\u7f6e\u9501\uff0c\u5b83\u53ef\u4ee5\u4fdd\u8bc1\u5728\u540c\u4e00\u65f6\u95f4\u53ea\u6709\u4e00\u4e2a\u7ebf\u7a0b\u5bf9\u5171\u4eab\u8d44\u6e90\u8fdb\u884c\u64cd\u4f5c\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"public class SynchronizedLock {\n    private int value = 0;\n\n    public synchronized void increment() {\n        while (value!= 0) {\n        }\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"1-\u57fa\u4e8eredis\u7684\u5206\u5e03\u5f0f\u9501",children:"1. \u57fa\u4e8eRedis\u7684\u5206\u5e03\u5f0f\u9501"}),"\n",(0,i.jsx)(n.p,{children:"Redis\u7684setnx\u547d\u4ee4\u53ef\u4ee5\u5b9e\u73b0\u5206\u5e03\u5f0f\u9501\uff0csetnx\u547d\u4ee4\u7684\u4f5c\u7528\u662f\u5c06\u952ekey\u7684\u503c\u8bbe\u4e3avalue\uff0c\u5f53\u4e14\u4ec5\u5f53\u952ekey\u4e0d\u5b58\u5728\u65f6\uff0c\u8fd4\u56de1\uff0c\u5426\u5219\u8fd4\u56de0\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"SET resource_name my_random_value NX PX 30000\n"})}),"\n",(0,i.jsx)(n.h2,{id:"2-\u57fa\u4e8ezookeeper\u7684\u5206\u5e03\u5f0f\u9501",children:"2. \u57fa\u4e8eZookeeper\u7684\u5206\u5e03\u5f0f\u9501"}),"\n",(0,i.jsx)(n.p,{children:"Zookeeper\u7684recipes/locks recipe\u53ef\u4ee5\u5b9e\u73b0\u5206\u5e03\u5f0f\u9501\uff0crecipes/locks recipe\u7684\u4f5c\u7528\u662f"}),"\n",(0,i.jsx)(n.h2,{id:"3-\u57fa\u4e8eetcd\u7684\u5206\u5e03\u5f0f\u9501",children:"3. \u57fa\u4e8eEtcd\u7684\u5206\u5e03\u5f0f\u9501"}),"\n",(0,i.jsx)(n.p,{children:"etcd\u662f\u4e00\u4e2a\u5206\u5e03\u5f0f\u952e\u503c\u5b58\u50a8\uff0c\u5b83\u63d0\u4f9b\u4e86\u4e00\u79cd\u7c7b\u4f3c\u4e8e\u6570\u636e\u5e93\u7684\u673a\u5236\uff0c\u53ef\u4ee5\u7528\u6765\u5b58\u50a8\u914d\u7f6e\u4fe1\u606f\u3001\u5171\u4eab\u72b6\u6001\u3001\u8d1f\u8f7d\u5747\u8861\u3001\u547d\u540d\u670d\u52a1\u3001\u5206\u5e03\u5f0f\u9501\u548c\u5206\u5e03\u5f0f\u961f\u5217\u7b49\u3002"}),"\n",(0,i.jsx)(n.p,{children:"etcd\u7684\u79df\u7ea6\u673a\u5236\u53ef\u4ee5\u4fdd\u8bc1\u5728\u4e00\u4e2a\u65f6\u95f4\u6bb5\u5185\uff0c\u53ea\u6709\u4e00\u4e2a\u5ba2\u6237\u7aef\u80fd\u5bf9\u67d0\u4e2a\u952e\u8fdb\u884c\u4fee\u6539\u3002"}),"\n",(0,i.jsx)(n.p,{children:"etcd\u7684\u79df\u7ea6\u673a\u5236\u53ef\u4ee5\u4fdd\u8bc1\u5728\u4e00\u4e2a\u65f6\u95f4\u6bb5\u5185\uff0c\u53ea\u6709\u4e00\u4e2a\u5ba2\u6237\u7aef\u80fd\u5bf9\u67d0\u4e2a\u952e\u8fdb\u884c\u4fee\u6539\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"4-\u57fa\u4e8eredisson\u7684\u5206\u5e03\u5f0f\u9501",children:"4. \u57fa\u4e8eRedisson\u7684\u5206\u5e03\u5f0f\u9501"}),"\n",(0,i.jsx)(n.p,{children:"Redisson\u7684Lock\u63a5\u53e3\u53ef\u4ee5\u5b9e\u73b0\u5206\u5e03\u5f0f\u9501\uff0cLock\u63a5\u53e3\u7684\u4f5c\u7528\u662f"}),"\n",(0,i.jsx)(n.h2,{id:"5-\u57fa\u4e8eapollo\u7684\u5206\u5e03\u5f0f\u9501",children:"5. \u57fa\u4e8eApollo\u7684\u5206\u5e03\u5f0f\u9501"}),"\n",(0,i.jsx)(n.p,{children:"Apollo\u7684Apollo.lock\u63a5\u53e3\u53ef\u4ee5\u5b9e\u73b0\u5206\u5e03\u5f0f\u9501\uff0cApollo.lock\u63a5\u53e3\u7684\u4f5c\u7528\u662f"}),"\n",(0,i.jsx)(n.h2,{id:"6-\u57fa\u4e8erocketmq\u7684\u5206\u5e03\u5f0f\u9501",children:"6. \u57fa\u4e8eRocketMQ\u7684\u5206\u5e03\u5f0f\u9501"}),"\n",(0,i.jsx)(n.p,{children:"RocketMQ\u7684ReentrantLock\u63a5\u53e3\u53ef\u4ee5\u5b9e\u73b0\u5206\u5e03\u5f0f\u9501\uff0cReentrantLock\u63a5\u53e3\u7684\u4f5c\u7528\u662f"}),"\n",(0,i.jsx)(n.h2,{id:"7-\u57fa\u4e8eseata\u7684\u5206\u5e03\u5f0f\u9501",children:"7. \u57fa\u4e8eSeata\u7684\u5206\u5e03\u5f0f\u9501"}),"\n",(0,i.jsx)(n.p,{children:"Seata\u7684GlobalLock\u63a5\u53e3\u53ef\u4ee5\u5b9e\u73b0\u5206\u5e03\u5f0f\u9501\uff0cGlobalLock\u63a5\u53e3\u7684\u4f5c\u7528\u662f"}),"\n",(0,i.jsx)(n.h2,{id:"8-\u57fa\u4e8etcc\u7684\u5206\u5e03\u5f0f\u9501",children:"8. \u57fa\u4e8eTCC\u7684\u5206\u5e03\u5f0f\u9501"}),"\n",(0,i.jsx)(n.p,{children:"TCC\u7684TccAction\u63a5\u53e3\u53ef\u4ee5\u5b9e\u73b0\u5206\u5e03\u5f0f\u9501\uff0cTccAction\u63a5\u53e3\u7684\u4f5c\u7528\u662f"}),"\n",(0,i.jsx)(n.h2,{id:"raft\u5171\u8bc6\u7b97\u6cd5",children:"Raft\u5171\u8bc6\u7b97\u6cd5"}),"\n",(0,i.jsx)(n.p,{children:"Raft\u662f\u4e00\u79cd\u5206\u5e03\u5f0f\u4e00\u81f4\u6027\u7b97\u6cd5\uff0c\u5b83\u662f\u4e00\u79cd\u4e3a\u5206\u5e03\u5f0f\u7cfb\u7edf\u63d0\u4f9b\u7684\u4e00\u79cd\u5171\u8bc6\u7b97\u6cd5\u3002Raft\u7b97\u6cd5\u7684\u76ee\u6807\u662f\u5b9e\u73b0\u4e00\u4e2a\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e2d\u591a\u4e2a\u8282\u70b9\u7684\u72b6\u6001\u673a\u4e00\u81f4\u6027\uff0c\u5373\u5728\u4efb\u610f\u65f6\u523b\uff0c\u96c6\u7fa4\u4e2d\u5927\u591a\u6570\u8282\u70b9\u7684\u72b6\u6001\u673a\u90fd\u662f\u76f8\u540c\u7684\u3002"}),"\n",(0,i.jsx)(n.p,{children:"Raft\u7b97\u6cd5\u7684\u6838\u5fc3\u601d\u60f3\u662f\uff0c\u6bcf\u4e2a\u8282\u70b9\u90fd\u7ef4\u62a4\u4e00\u4e2a\u5f53\u524d\u7684\u72b6\u6001\uff0c\u5e76\u4e14\u6bcf\u4e2a\u8282\u70b9\u90fd\u6709\u80fd\u529b\u5c06\u81ea\u5df1\u7684\u72b6\u6001\u590d\u5236\u5230\u5176\u4ed6\u8282\u70b9\uff0c\u5f53\u6709\u5ba2\u6237\u7aef\u8bf7\u6c42\u65f6\uff0c\u9996\u5148\u4f1a\u5c06\u8bf7\u6c42\u53d1\u9001\u7ed9Leader\u8282\u70b9\uff0cLeader\u8282\u70b9"}),"\n",(0,i.jsx)(n.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,i.jsx)(n.p,{children:"\u5206\u5e03\u5f0f\u9501\u7684\u4f18\u70b9\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u907f\u514d\u4e86\u9501\u7684\u7ade\u4e89\uff0c\u63d0\u9ad8\u4e86\u7cfb\u7edf\u7684\u5e76\u53d1\u5ea6\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u9501\u7684\u53ef\u91cd\u5165\u6027\uff1a\u5373\u540c\u4e00\u4e2a\u7ebf\u7a0b\u53ef\u4ee5\u591a\u6b21\u83b7\u53d6\u540c\u4e00\u4e2a\u9501\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u9501\u7684\u53ef\u64cd\u4f5c\u6027\uff1a\u53ef\u4ee5\u65b9\u4fbf\u7684\u5bf9\u9501\u8fdb\u884c\u91ca\u653e\u548c\u5220\u9664\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u9501\u7684\u53ef\u6269\u5c55\u6027\uff1a\u5206\u5e03\u5f0f\u9501\u53ef\u4ee5\u5bf9\u6570\u636e\u5e93\u4e2d\u7684\u4e0d\u540c\u6570\u636e\u8fdb\u884c\u9501\u5b9a\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u9501\u7684\u53ef\u64cd\u4f5c\u6027\uff1a\u53ef\u4ee5\u65b9\u4fbf\u7684\u5bf9\u9501\u8fdb\u884c\u91ca\u653e\u548c\u5220\u9664"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5206\u5e03\u5f0f\u9501\u5177\u5907\u7684\u7279\u70b9\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4e92\u65a5\u6027\uff1a\u540c\u4e00\u65f6\u95f4\u53ea\u6709\u4e00\u4e2a\u5ba2\u6237\u7aef\u80fd\u5bf9\u5171\u4eab\u8d44\u6e90\u8fdb\u884c\u64cd\u4f5c\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u4e0d\u4f1a\u53d1\u751f\u6b7b\u9501\uff1a\u5373\u4f7f\u53d1\u751f\u6b7b\u9501\uff0c\u4e5f\u80fd\u901a\u8fc7\u8d85\u65f6\u673a\u5236\u6765\u907f\u514d\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u9ad8\u6027\u80fd\uff1a\u5206\u5e03\u5f0f\u9501\u7684\u6027\u80fd\u6bd4\u4f20\u7edf\u7684\u9501\u8981\u9ad8\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u57fa\u4e8e\u6570\u636e\u5e93\u7684\u5b9e\u73b0\uff1a\u5206\u5e03\u5f0f\u9501\u7684\u5b9e\u73b0\u901a\u5e38\u662f\u57fa\u4e8e\u6570\u636e\u5e93\u7684\uff0c\u56e0\u6b64\u53ef\u4ee5\u4fdd\u8bc1\u6570\u636e\u7684\u5f3a\u4e00\u81f4\u6027\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u9501\u7684\u7c92\u5ea6\uff1a\u5206\u5e03\u5f0f\u9501\u53ef\u4ee5\u5bf9\u6570\u636e\u5e93\u4e2d\u7684\u4e0d\u540c\u6570\u636e\u8fdb\u884c\u9501\u5b9a"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:(e,n,l)=>{l.d(n,{Z:()=>o,a:()=>s});var i=l(67294);const c={},r=i.createContext(c);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);