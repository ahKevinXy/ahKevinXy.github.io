"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([["99786"],{18049(e,t,r){r.d(t,{A:()=>j});var n=r(30758),a=r(13526),o=r(57091);let l=(0,n.createContext)({});var i=r(46907),c=r(84383),s=r(66628);function u(e){return"object"==typeof e&&"string"==typeof e.name&&"string"==typeof e.theme&&("object"==typeof e.icon||"function"==typeof e.icon)}function f(e={}){return Object.keys(e).reduce((t,r)=>{let n=e[r];return"class"===r?(t.className=n,delete t.class):(delete t[r],t[r.replace(/-(.)/g,(e,t)=>t.toUpperCase())]=n),t},{})}function d(e){return(0,o.cM)(e)[0]}function p(e){return e?Array.isArray(e)?e:[e]:[]}let m=`
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
  vertical-align: inherit;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin {
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,g={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1},h=e=>{var t,r;let{icon:a,className:o,onClick:p,style:h,primaryColor:b,secondaryColor:y,...v}=e,j=n.useRef(null),O=g;if(b&&(O={primaryColor:b,secondaryColor:y||d(b)}),(e=>{let{csp:t,prefixCls:r,layer:a}=(0,n.useContext)(l),o=m;r&&(o=o.replace(/anticon/g,r)),a&&(o=`@layer ${a} {
${o}
}`),(0,n.useEffect)(()=>{let r=e.current,n=(0,c.j)(r);(0,i.BD)(o,"@ant-design-icons",{prepend:!a,csp:t,attachTo:n})},[])})(j),t=u(a),r=`icon should be icon definiton, but got ${a}`,(0,s.kw)(t,`[@ant-design/icons] ${r}`),!u(a))return null;let x=a;return x&&"function"==typeof x.icon&&(x={...x,icon:x.icon(O.primaryColor,O.secondaryColor)}),function e(t,r,a){return a?n.createElement(t.tag,{key:r,...f(t.attrs),...a},(t.children||[]).map((n,a)=>e(n,`${r}-${t.tag}-${a}`))):n.createElement(t.tag,{key:r,...f(t.attrs)},(t.children||[]).map((n,a)=>e(n,`${r}-${t.tag}-${a}`)))}(x.icon,`svg-${x.name}`,{className:o,onClick:p,style:h,"data-icon":x.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",...v,ref:j})};function b(e){let[t,r]=p(e);return h.setTwoToneColors({primaryColor:t,secondaryColor:r})}function y(){return(y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}h.displayName="IconReact",h.getTwoToneColors=function(){return{...g}},h.setTwoToneColors=function({primaryColor:e,secondaryColor:t}){g.primaryColor=e,g.secondaryColor=t||d(e),g.calculated=!!t},b(o.z1.primary);let v=n.forwardRef((e,t)=>{let{className:r,icon:o,spin:i,rotate:c,tabIndex:s,onClick:u,twoToneColor:f,...d}=e,{prefixCls:m="anticon",rootClassName:g}=n.useContext(l),b=(0,a.$)(g,m,{[`${m}-${o.name}`]:!!o.name,[`${m}-spin`]:!!i||"loading"===o.name},r),v=s;void 0===v&&u&&(v=-1);let j=c?{msTransform:`rotate(${c}deg)`,transform:`rotate(${c}deg)`}:void 0,[O,x]=p(f);return n.createElement("span",y({role:"img","aria-label":o.name},d,{ref:t,tabIndex:v,onClick:u,className:b}),n.createElement(h,{icon:o,primaryColor:O,secondaryColor:x,style:j}))});v.getTwoToneColor=function(){let e=h.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor},v.setTwoToneColor=b;let j=v},17039(e,t,r){r.d(t,{A:()=>i});var n=r(30758);let a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H212V212h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H612V212h200v200zM464 544H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H212V612h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H612V612h200v200z"}}]},name:"appstore",theme:"outlined"};var o=r(18049);function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let i=n.forwardRef((e,t)=>n.createElement(o.A,l({},e,{ref:t,icon:a})))},84383(e,t,r){function n(e){return e?.getRootNode?.()}function a(e){return n(e)instanceof ShadowRoot?n(e):null}r.d(t,{j:()=>a})},35793(e,t,r){r.r(t),r.d(t,{default:()=>C});var n=r(86070),a=r(30758),o=r(82414),l=r(82858),i=r(99042),c=r(19409),s=r(60);let u="tagsSection_Q5lP",f="tag_Yyuv";function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}function p(e,t){let r=e.toLocaleLowerCase("en-US"),n=t.toLocaleLowerCase("en-US");return r<n?-1:r>n?1:e.localeCompare(t,"zh-Hans")}function m(e){let{letterEntry:t}=e;return(0,n.jsxs)("article",{className:"letterSection_UHIv",children:[(0,n.jsx)("h2",{className:"letterTitle_Awy3",children:t.letter}),(0,n.jsx)("ul",{className:"tagList_VDj8",children:t.tags.map(e=>(0,n.jsx)("li",{className:f,children:(0,n.jsx)(s.A,d({},e))},e.permalink))})]})}function g(e){let t,{tags:r}=e,a=(t={},r.forEach(e=>{var r,n;let a=null!=(r=null==(n=e.label[0])?void 0:n.toUpperCase())?r:"#";null!=t[a]||(t[a]=[]),t[a].push(e)}),Object.entries(t).sort((e,t)=>{let[r]=e,[n]=t;return p(r,n)}).map(e=>{let[t,r]=e;return{letter:t,tags:[...r].sort((e,t)=>p(e.label,t.label))}}));return(0,n.jsx)("section",{className:u,children:a.map(e=>(0,n.jsx)(m,{letterEntry:e},e.letter))})}function h(e){let{tags:t}=e;return(0,n.jsx)("section",{className:u,children:(0,n.jsx)("ul",{className:"flatList_Lh7r",children:t.map(e=>(0,n.jsx)("li",{className:f,children:(0,n.jsx)(s.A,d({},e))},e.permalink))})})}var b=r(87473);let y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"unordered-list",theme:"outlined"};var v=r(18049);function j(){return(j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let O=a.forwardRef((e,t)=>a.createElement(v.A,j({},e,{ref:t,icon:y})));var x=r(17039);let w="switcherActive_lbkx";function C(e){let{tags:t}=e,r=(0,o.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"}),s="\u6309\u4E3B\u9898\u6D4F\u89C8 ahKevinXy \u6280\u672F\u535A\u5BA2\u7684 ".concat(t.length," \u4E2A\u6587\u7AE0\u6807\u7B7E\uFF0C\u5305\u62EC").concat(t.slice(0,8).map(e=>e.label).join("\u3001"),"\uFF0C\u67E5\u627E\u76F8\u5173\u5B66\u4E60\u7B14\u8BB0\u4E0E\u9879\u76EE\u5B9E\u8DF5\u3002"),[u,f]=(0,a.useState)("grid");return(0,n.jsxs)(l.e3,{className:"".concat(i.G.wrapper.blogPages," ").concat(i.G.page.blogTagsListPage),children:[(0,n.jsx)(l.be,{title:"\u6280\u672F\u535A\u5BA2\u6587\u7AE0\u6807\u7B7E\u4E0E\u4E3B\u9898\u7D22\u5F15",description:s}),(0,n.jsx)(c.A,{tag:"blog_tags_list"}),(0,n.jsxs)(b.A,{children:[(0,n.jsxs)("header",{className:"header_La2o",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{className:"title_CDXF",children:r}),(0,n.jsxs)("p",{className:"subtitle_kAme",children:["\u5171 ",t.length," \u4E2A\u6807\u7B7E"]})]}),(0,n.jsxs)("div",{className:"switcher_xsEJ","aria-label":"\u6807\u7B7E\u5C55\u793A\u65B9\u5F0F",children:[(0,n.jsx)("button",{type:"button",className:"list"===u?w:void 0,"aria-label":"\u6309\u5B57\u6BCD\u5217\u8868\u5C55\u793A","aria-pressed":"list"===u,onClick:()=>f("list"),children:(0,n.jsx)(O,{})}),(0,n.jsx)("button",{type:"button",className:"grid"===u?w:void 0,"aria-label":"\u4EE5\u7F51\u683C\u5C55\u793A","aria-pressed":"grid"===u,onClick:()=>f("grid"),children:(0,n.jsx)(x.A,{})})]})]}),"list"===u?(0,n.jsx)(g,{tags:t}):(0,n.jsx)(h,{tags:t})]})]})}},87473(e,t,r){r.d(t,{A:()=>i});var n=r(86070);r(30758);var a=r(68835),o=r(228);let l={myContainer:"myContainer_cKPN"};function i(e){var t,r;let{children:i}=e,c=function(e,t){if(null==e)return{};var r,n,a,o={};if("u">typeof Reflect&&Reflect.ownKeys){for(a=0,r=Reflect.ownKeys(e);a<r.length;a++)n=r[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n]);return o}if(o=function(e,t){if(null==e)return{};var r,n,a={},o=Object.getOwnPropertyNames(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r]);return a}(e,t),Object.getOwnPropertySymbols)for(a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n=r[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n]);return o}(e,["children"]);return(0,n.jsx)(o.A,(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},c),r=r={children:(0,n.jsx)("div",{className:l.containerWrapper,children:(0,n.jsx)("div",{className:(0,a.A)(l.myContainer,"margin-vert--lg"),children:(0,n.jsx)("main",{children:i})})})},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))}},60(e,t,r){r.d(t,{A:()=>l});var n=r(86070);r(30758);var a=r(68835),o=r(44704);function l(e){let{permalink:t,label:r,count:l}=e;return(0,n.jsxs)(o.A,{href:t,className:(0,a.A)("tag_d0Lz",l?"tagWithCount_vddX":"tagRegular_bmnp"),children:[r,l&&(0,n.jsx)("span",{children:l})]})}}}]);