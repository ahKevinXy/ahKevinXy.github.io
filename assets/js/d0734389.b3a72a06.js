"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[3669],{3905:function(e,t,r){r.d(t,{Zo:function(){return o},kt:function(){return k}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=a.createContext({}),c=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},o=function(e){var t=c(e.components);return a.createElement(m.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,m=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),u=c(r),b=n,k=u["".concat(m,".").concat(b)]||u[b]||s[b]||i;return r?a.createElement(k,l(l({ref:t},o),{},{components:r})):a.createElement(k,l({ref:t},o))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=b;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p[u]="string"==typeof e?e:n,l[1]=p;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},8543:function(e,t,r){r.r(t),r.d(t,{assets:function(){return o},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),l=["components"],p={},m="\u547d\u4ee4\u884c\u4e0e\u7ba1\u63a7\u53f0",c={unversionedId:"backend/rabbitmq/base/cmd",id:"backend/rabbitmq/base/cmd",title:"\u547d\u4ee4\u884c\u4e0e\u7ba1\u63a7\u53f0",description:"* rabbitmqctl stop_app \u5173\u95ed\u5e94\u7528",source:"@site/docs/backend/rabbitmq/base/cmd.md",sourceDirName:"backend/rabbitmq/base",slug:"/backend/rabbitmq/base/cmd",permalink:"/docs/backend/rabbitmq/base/cmd",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Rabbitmq \u57fa\u7840",permalink:"/docs/backend/rabbitmq/base/"},next:{title:"Rabbimq \u5b89\u88c5",permalink:"/docs/backend/rabbitmq/install"}},o={},u=[],s={toc:u},b="wrapper";function k(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)(b,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u547d\u4ee4\u884c\u4e0e\u7ba1\u63a7\u53f0"},"\u547d\u4ee4\u884c\u4e0e\u7ba1\u63a7\u53f0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"rabbitmqctl stop_app \u5173\u95ed\u5e94\u7528")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"rabbitmqctl start_app \u542f\u52a8\u5e94\u7528")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"rabbitmqctl status \u8282\u70b9\u72b6\u6001")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"rabbitmqctl add_user username password \u6dfb\u52a0\u7528\u6237")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"rabbitmqctl list_users \u5217\u51fa\u6240\u6709\u7528\u6237")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"rabbitmqctl delete_user username \u5220\u9664\u7528\u6237")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"rabbitmqctl clear_permissons -p vhistpath username \u6e05\u9664\u7528\u6237\u6743\u9650")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"rabbitmqctl  list_user_permissions username \u5217\u51fa\u7528\u6237\u6743\u9650")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"rabbitmqctl change_password username newpassword \u4fee\u6539\u5bc6\u7801")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'rabbitmqctl set_permissions -p vhostpath username ".',(0,i.kt)("em",{parentName:"p"},'" ".'),'" ".',(0,i.kt)("em",{parentName:"p"},'" ".'),'" \u8bbe\u7f6e\u7528\u6237\u6743\u9650')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"rabbitmqctl add_vhost vhostpath \u521b\u5efa\u865a\u62df\u4e3b\u673a")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"rabbitmqctl list_vhosts \u5217\u51fa\u6240\u6709\u865a\u62df\u4e3b\u673a")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"rabbitmqctl list_permissions -p vhostpath \u5217\u51fa\u865a\u62df\u673a\u4e0a\u6240\u6709\u6743\u9650")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"rabbitmqctl delete_vhost vhostpath \u5220\u9664\u865a\u62df\u4e3b\u673a")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"rabbitmqctl list_queues \u67e5\u770b\u6240\u6709\u961f\u5217\u6d88\u606f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"rabbitmqctl -p vhostpath purge_queue blue \u6e05\u9664\u961f\u5217\u91cc\u7684\u6d88\u606f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"rabbitmqctl reset \u79fb\u9664\u6240\u6709\u6570\u636e\uff0c\u8981\u5728rabbitmqctl stop_app \u4e4b\u540e\u4f7f\u7528")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"rabbitmqctl join_cluster  clusternode ","[--arm]"," \u7ec4\u6210\u96c6\u7fa4\u547d\u4ee4")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"rabbitmqctl cluster_status \u67e5\u770b\u96c6\u7fa4\u72b6\u6001")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"rabbitmqctl change_cluster_node_type disc|arm \u4fee\u6539\u96c6\u7fa4\u8282\u70b9\u7684\u5b58\u50a8\u5f62\u5f0f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"rabbitmqctl forget_cluster_node ","[--offline]"," \u5fd8\u8bb0\u8282\u70b9(\u6458\u9664\u8282\u70b9)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"rabbitmqclt rename_cluster_node oldnode1 newnode1 \u4fee\u6539\u8282\u70b9\u540d\u79f0"))))}k.isMDXComponent=!0}}]);