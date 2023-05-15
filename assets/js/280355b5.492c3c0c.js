"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[3149],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),h=r,g=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return t?a.createElement(g,i(i({ref:n},u),{},{components:t})):a.createElement(g,i({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=h;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},95497:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),i=["components"],c={title:"Go \u6e90\u7801\u5b66\u4e60 --- chan",tags:["\u6e90\u7801","Go"],authors:"ahKevinXy"},s="Go \u6e90\u7801\u5b66\u4e60 --- chan",l={permalink:"/blog/2023/03/06/go_chan",source:"@site/blog/2023/03/06/go_chan.md",title:"Go \u6e90\u7801\u5b66\u4e60 --- chan",description:"",date:"2023-03-06T00:00:00.000Z",formattedDate:"2023\u5e743\u67086\u65e5",tags:[{label:"\u6e90\u7801",permalink:"/blog/tags/\u6e90\u7801"},{label:"Go",permalink:"/blog/tags/go"}],readingTime:1.98,hasTruncateMarker:!1,authors:[{name:"ahKevinXy",title:"\u4f5c\u8005",url:"https://github.com/ahKevinXy",email:"ahkevinxy@gmail.com",imageURL:"https://github.com/ahKevinXy.png",key:"ahKevinXy"}],frontMatter:{title:"Go \u6e90\u7801\u5b66\u4e60 --- chan",tags:["\u6e90\u7801","Go"],authors:"ahKevinXy"},prevItem:{title:"vue \u8d44\u6e90",permalink:"/blog/awesome/vue"},nextItem:{title:"\u6e90\u7801 \u4e0a\u89e3\u8bfb GMP\u6a21\u578b",permalink:"/blog/2023/03/06/go_gmp"}},u={authorsImageUrls:[void 0]},p=[],d={toc:p},h="wrapper";function g(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)(h,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hchan"},"hchan"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"\ntype hchan struct {\n qcount   uint           // \u901a\u9053\u4e2d\u7684\u603b\u6570\u636e total data in the queue\n dataqsiz uint           // \u5faa\u73af\u961f\u5217\u7684\u5927\u5c0f size of the circular queue\n buf      unsafe.Pointer // \u6307\u5411dataqsiz\u5143\u7d20\u6570\u7ec4  points to an array of dataqsiz elements\n elemsize uint16 // \u5927\u5c0f\n closed   uint32 // \u662f\u5426\u5173\u95ed\n elemtype *_type // \u8282\u70b9\u7c7b\u578b element type\n sendx    uint   // \u53d1\u9001\u6570\u636e send index\n recvx    uint   // \u63a5\u53d7 receive index\n recvq    waitq  // \u7b49\u5f85\u63a5\u53d7 list of recv waiters\n sendq    waitq  //  \u7b49\u5f85\u53d1\u9001 list of send waiters\n\n // lock protects all fields in hchan, as well as several\n // fields in sudogs blocked on this channel.\n //\n // Do not change another G's status while holding this lock\n // (in particular, do not ready a G), as this can deadlock\n // with stack shrinking.\n lock mutex // \u9501\n}\n\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type waitq struct {\n first *sudog // \u7b2c\u4e00\u4e2a\n last  *sudog // \u6700\u540e\u4e00\u4e2a\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type sudog struct {\n // The following fields are protected by the hchan.lock of the\n // channel this sudog is blocking on. shrinkstack depends on\n // this for sudogs involved in channel ops.\n\n g *g\n\n next *sudog // \u4e0b\u4e00\u4e2a\n prev *sudog // \u4e0a\u4e00\u4e2a\n elem unsafe.Pointer // \u6570\u636e\u5143\u7d20(\u53ef\u80fd\u6307\u5411\u5806\u6808)  data element (may point to stack)\n\n // The following fields are never accessed concurrently.\n // For channels, waitlink is only accessed by g.\n // For semaphores, all fields (including the ones above)\n // are only accessed when holding a semaRoot lock.\n\n acquiretime int64 // \n releasetime int64 // \n ticket      uint32 //\n\n // isSelect indicates g is participating in a select, so\n // g.selectDone must be CAS'd to win the wake-up race.\n isSelect bool\n\n // success indicates whether communication over channel c\n // succeeded. It is true if the goroutine was awoken because a\n // value was delivered over channel c, and false if awoken\n // because c was closed.\n success bool //\u662f\u5426\u6210\u529f\n\n parent   *sudog // semaRoot\u4e8c\u53c9\u6811  semaRoot binary tree\n waitlink *sudog // g.\u7b49\u5f85\u5217\u8868\u6216semaRoot  g.waiting list or semaRoot\n waittail *sudog // \u7b49\u5f85 semaRoot\n c        *hchan // \u901a\u9053 channel\n}\n\n")))}g.isMDXComponent=!0}}]);