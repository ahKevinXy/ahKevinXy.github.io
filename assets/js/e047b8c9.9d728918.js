"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[74973],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(t),f=a,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||l;return t?n.createElement(m,o(o({ref:r},s),{},{components:t})):n.createElement(m,o({ref:r},s))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var c=2;c<l;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7062:function(e,r,t){t.r(r),t.d(r,{assets:function(){return B},contentTitle:function(){return A},default:function(){return X},frontMatter:function(){return M},metadata:function(){return R},toc:function(){return L}});var n=t(87462),a=t(63366),l=t(67294),o=t(3905),u=t(86010),i=t(72957),c=t(76775),s=t(75238),p=t(33609),d=t(92560);function f(e){return function(e){var r,t;return null!=(r=null==(t=l.Children.map(e,(function(e){if(!e||(0,l.isValidElement)(e)&&(r=e.props)&&"object"==typeof r&&"value"in r)return e;var r;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?r:[]}(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}function m(e){var r=e.values,t=e.children;return(0,l.useMemo)((function(){var e=null!=r?r:f(t);return function(e){var r=(0,p.l)(e,(function(e,r){return e.value===r.value}));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,t])}function v(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function b(e){var r=e.queryString,t=void 0!==r&&r,n=e.groupId,a=(0,c.k6)(),o=function(e){var r=e.queryString,t=void 0!==r&&r,n=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,l.useCallback)((function(e){if(o){var r=new URLSearchParams(a.location.search);r.set(o,e),a.replace(Object.assign({},a.location,{search:r.toString()}))}}),[o,a])]}function h(e){var r,t,n,a,o=e.defaultValue,u=e.queryString,i=void 0!==u&&u,c=e.groupId,s=m(e),p=(0,l.useState)((function(){return function(e){var r,t=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!v({value:t,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(r=n.find((function(e){return e.default})))?r:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:s})})),f=p[0],h=p[1],g=b({queryString:i,groupId:c}),y=g[0],k=g[1],w=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),t=(0,d.Nk)(r),n=t[0],a=t[1],[n,(0,l.useCallback)((function(e){r&&a.set(e)}),[r,a])]),E=w[0],N=w[1],j=function(){var e=null!=y?y:E;return v({value:e,tabValues:s})?e:null}();return(0,l.useLayoutEffect)((function(){j&&h(j)}),[j]),{selectedValue:f,selectValue:(0,l.useCallback)((function(e){if(!v({value:e,tabValues:s}))throw new Error("Can't select invalid tab value="+e);h(e),k(e),N(e)}),[k,N,s]),tabValues:s}}var g=t(51048),y="tabList__CuJ",k="tabItem_LNqP";function w(e){var r=e.className,t=e.block,a=e.selectedValue,o=e.selectValue,c=e.tabValues,s=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var r=e.currentTarget,t=s.indexOf(r),n=c[t].value;n!==a&&(p(r),o(n))},f=function(e){var r,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,a=s.indexOf(e.currentTarget)+1;t=null!=(n=s[a])?n:s[0];break;case"ArrowLeft":var l,o=s.indexOf(e.currentTarget)-1;t=null!=(l=s[o])?l:s[s.length-1]}null==(r=t)||r.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":t},r)},c.map((function(e){var r=e.value,t=e.label,o=e.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,key:r,ref:function(e){return s.push(e)},onKeyDown:f,onClick:d},o,{className:(0,u.Z)("tabs__item",k,null==o?void 0:o.className,{"tabs__item--active":a===r})}),null!=t?t:r)})))}function E(e){var r=e.lazy,t=e.children,n=e.selectedValue,a=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){var o=a.find((function(e){return e.props.value===n}));return o?(0,l.cloneElement)(o,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},a.map((function(e,r){return(0,l.cloneElement)(e,{key:r,hidden:e.props.value!==n})})))}function N(e){var r=h(e);return l.createElement("div",{className:(0,u.Z)("tabs-container",y)},l.createElement(w,(0,n.Z)({},e,r)),l.createElement(E,(0,n.Z)({},e,r)))}function j(e){var r=(0,g.Z)();return l.createElement(N,(0,n.Z)({key:String(r)},e))}var x="tabItem_Ymn6";function O(e){var r=e.children,t=e.hidden,n=e.className;return l.createElement("div",{role:"tabpanel",className:(0,u.Z)(x,n),hidden:t},r)}var T="browserWindow_my1Q",I="browserWindowHeader_jXSR",C="buttons_uHc7",P="browserWindowAddressBar_Pd8y",V="dot_giz1",_="browserWindowMenuIcon_Vhuh",S="bar_rrRL",D="browserWindowBody_Idgs";function Z(e){var r=e.children,t=e.minHeight,n=e.url,a=void 0===n?"https://ahkevinxy.github.io/":n;return l.createElement("div",{className:T,style:{minHeight:t}},l.createElement("div",{className:I},l.createElement("div",{className:C},l.createElement("span",{className:V,style:{background:"#f25f58"}}),l.createElement("span",{className:V,style:{background:"#fbbe3c"}}),l.createElement("span",{className:V,style:{background:"#58cb42"}})),l.createElement("div",{className:(0,u.Z)(P,"text--truncate")},a),l.createElement("div",{className:_},l.createElement("div",null,l.createElement("span",{className:S}),l.createElement("span",{className:S}),l.createElement("span",{className:S})))),l.createElement("div",{className:D},r))}var q=["components"],M={},A="\u8fdb\u7a0b\u95f4\u901a\u4fe1",R={unversionedId:"cross-platform/electronjs/note/process",id:"cross-platform/electronjs/note/process",title:"\u8fdb\u7a0b\u95f4\u901a\u4fe1",description:"ipc \u8fdb\u7a0b\u901a\u4fe1",source:"@site/docs/cross-platform/electronjs/note/process.mdx",sourceDirName:"cross-platform/electronjs/note",slug:"/cross-platform/electronjs/note/process",permalink:"/docs/cross-platform/electronjs/note/process",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"electron \u7b14\u8bb0",permalink:"/docs/cross-platform/electronjs/note/"},next:{title:"\u5b98\u65b9\u6587\u6863",permalink:"/docs/cross-platform/electronjs/official"}},B={},L=[{value:"ipc \u8fdb\u7a0b\u901a\u4fe1",id:"ipc-\u8fdb\u7a0b\u901a\u4fe1",level:2},{value:"IPC \u901a\u9053",id:"ipc-\u901a\u9053",level:3},{value:"\u4e86\u89e3\u4e0a\u4e0b\u6587\u9694\u79bb\u8fdb\u7a0b",id:"\u4e86\u89e3\u4e0a\u4e0b\u6587\u9694\u79bb\u8fdb\u7a0b",level:3},{value:"\u5355\u5411\u901a\u4fe1",id:"\u5355\u5411\u901a\u4fe1",level:3}],W={toc:L};function X(e){var r=e.components,t=(0,a.Z)(e,q);return(0,o.kt)("wrapper",(0,n.Z)({},W,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u8fdb\u7a0b\u95f4\u901a\u4fe1"},"\u8fdb\u7a0b\u95f4\u901a\u4fe1"),(0,o.kt)("h2",{id:"ipc-\u8fdb\u7a0b\u901a\u4fe1"},"ipc \u8fdb\u7a0b\u901a\u4fe1"),(0,o.kt)("p",null,"\u8fdb\u7a0b\u95f4\u901a\u4fe1 (IPC) \u662f\u5728 Electron \u4e2d\u6784\u5efa\u529f\u80fd\u4e30\u5bcc\u7684\u684c\u9762\u5e94\u7528\u7a0b\u5e8f\u7684\u5173\u952e\u90e8\u5206\u4e4b\u4e00\u3002 \u7531\u4e8e\u4e3b\u8fdb\u7a0b\u548c\u6e32\u67d3\u5668\u8fdb\u7a0b\u5728 Electron \u7684\u8fdb\u7a0b\u6a21\u578b\u5177\u6709\u4e0d\u540c\u7684\u804c\u8d23\uff0c\u56e0\u6b64 IPC \u662f\u6267\u884c\u8bb8\u591a\u5e38\u89c1\u4efb\u52a1\u7684\u552f\u4e00\u65b9\u6cd5\uff0c\u4f8b\u5982\u4ece UI \u8c03\u7528\u539f\u751f API \u6216\u4ece\u539f\u751f\u83dc\u5355\u89e6\u53d1 Web \u5185\u5bb9\u7684\u66f4\u6539\u3002"),(0,o.kt)("h3",{id:"ipc-\u901a\u9053"},"IPC \u901a\u9053"),(0,o.kt)("p",null,"\u5728 Electron \u4e2d\uff0c\u8fdb\u7a0b\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"ipcMain")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"ipcRenderer")," \u6a21\u5757\uff0c\u901a\u8fc7\u5f00\u53d1\u4eba\u5458\u5b9a\u4e49\u7684\u201c\u901a\u9053\u201d\u4f20\u9012\u6d88\u606f\u6765\u8fdb\u884c\u901a\u4fe1\u3002 \u8fd9\u4e9b\u901a\u9053\u662f \u4efb\u610f \uff08\u60a8\u53ef\u4ee5\u968f\u610f\u547d\u540d\u5b83\u4eec\uff09\u548c \u53cc\u5411 \uff08\u60a8\u53ef\u4ee5\u5728\u4e24\u4e2a\u6a21\u5757\u4e2d\u4f7f\u7528\u76f8\u540c\u7684\u901a\u9053\u540d\u79f0\uff09\u7684\u3002"),(0,o.kt)("h3",{id:"\u4e86\u89e3\u4e0a\u4e0b\u6587\u9694\u79bb\u8fdb\u7a0b"},"\u4e86\u89e3\u4e0a\u4e0b\u6587\u9694\u79bb\u8fdb\u7a0b"),(0,o.kt)("p",null,"\u5728\u5f00\u59cb\u5b9e\u73b0\u7ec6\u8282\u4e4b\u524d ,\u9700\u8981\u4e86\u89e3 ",(0,o.kt)("a",{parentName:"p",href:"/"},"\u9884\u52a0\u8f7d\u811a\u672c")," \u5728\u4e0a\u4e0b\u6587\u9694\u79bb\u6e32\u67d3\u5668\u8fdb\u7a0b\u4e2d\u5bfc\u5165 Node.js \u548c Electron \u6a21\u5757\u7684\u6982\u5ff5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Electron \u8fdb\u7a0b\u6a21\u578b"),(0,o.kt)("li",{parentName:"ul"},"contextBridge \u6a21\u5757\u4ece\u9884\u52a0\u8f7d\u811a\u672c\u66b4\u9732")),(0,o.kt)("h3",{id:"\u5355\u5411\u901a\u4fe1"},"\u5355\u5411\u901a\u4fe1"),(0,o.kt)("p",null,"\u8981\u5c06\u5355\u5411ipc \u6d88\u606f\u4ece\u6e32\u67d3\u5668\u8fdb\u7a0b\u53d1\u9001\u5230\u4e3b\u8fdb\u7a0b,\u53ef\u4ee5\u4f7f\u7528 ipcMain.send api \u53d1\u9001\u6d88\u606f,\u7136\u540e\u4f7f\u7528 ipcMain.on api \u63a5\u6536"),(0,o.kt)(Z,{mdxType:"BrowserWindow"},(0,o.kt)(j,{mdxType:"Tabs"},(0,o.kt)(O,{value:"docusaurus.config.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  themeConfig: {\n    prism: {\n      magicComments: [\n        // Remember to extend the default highlight class name as well!\n        {\n          className: 'theme-code-block-highlighted-line',\n          line: 'highlight-next-line',\n          block: {start: 'highlight-start', end: 'highlight-end'},\n        },\n        // highlight-start\n        {\n          className: 'code-block-error-line',\n          line: 'This will error',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n"))),(0,o.kt)(O,{value:"src/css/custom.css",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},".code-block-error-line {\n  background-color: #ff000020;\n  display: block;\n  margin: 0 calc(-1 * var(--ifm-pre-padding));\n  padding: 0 var(--ifm-pre-padding);\n  border-left: 3px solid #ff000080;\n}\n"))))))}X.isMDXComponent=!0}}]);