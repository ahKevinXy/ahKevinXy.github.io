"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[67124],{43048:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var l=n(23230),s=n(34689),a=n(74848);function i(e){const{nextItem:t,prevItem:n}=e;return(0,a.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,l.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,a.jsx)(s.A,{...n,subLabel:(0,a.jsx)(l.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),t&&(0,a.jsx)(s.A,{...t,subLabel:(0,a.jsx)(l.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}},55869:(e,t,n)=>{n.d(t,{A:()=>p});var l=n(96540),s=n(82216),a=n(18215),i=n(14783),r=n(23230),o=n(56347),c=n(80260);function d(e){const{pathname:t}=(0,o.zy)();return(0,l.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,c.ys)(e.permalink,t))}(e,t)))),[e,t])}const u={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var m=n(74848);function h(e){let{sidebar:t}=e;const n=d(t.items);return(0,m.jsx)("aside",{className:"col col--3",children:(0,m.jsxs)("nav",{className:(0,a.A)(u.sidebar,"thin-scrollbar"),"aria-label":(0,r.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,m.jsx)("div",{className:(0,a.A)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,m.jsx)("ul",{className:(0,a.A)(u.sidebarItemList,"clean-list"),children:n.map((e=>(0,m.jsx)("li",{className:u.sidebarItem,children:(0,m.jsx)(i.A,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var g=n(70763);function f(e){let{sidebar:t}=e;const n=d(t.items);return(0,m.jsx)("ul",{className:"menu__list",children:n.map((e=>(0,m.jsx)("li",{className:"menu__list-item",children:(0,m.jsx)(i.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function v(e){return(0,m.jsx)(g.GX,{component:f,props:e})}function p(e){let{sidebar:t}=e;const n=(0,s.l)();return null!=t&&t.items.length?"mobile"===n?(0,m.jsx)(v,{sidebar:t}):(0,m.jsx)(h,{sidebar:t}):null}},55911:(e,t,n)=>{n.d(t,{A:()=>d});n(96540);var l=n(23230),s=n(18630),a=n(14783),i=n(18215);const r={iconEdit:"iconEdit_Z9Sw"};var o=n(74848);function c(e){let{className:t,...n}=e;return(0,o.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.A)(r.iconEdit,t),"aria-hidden":"true",...n,children:(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function d(e){let{editUrl:t}=e;return(0,o.jsxs)(a.A,{to:t,className:s.G.common.editThisPage,children:[(0,o.jsx)(c,{}),(0,o.jsx)(l.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}},61507:(e,t,n)=>{n.d(t,{A:()=>f});var l=n(96540),s=n(86957);function a(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const l=n.slice(2,e.level);e.parentIndex=Math.max(...l),n[e.level]=t}));const l=[];return t.forEach((e=>{const{parentIndex:n,...s}=e;n>=0?t[n].children.push(s):l.push(s)})),l}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:l}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:l});return function(e){return e.level>=n&&e.level<=l}(e)?[{...e,children:t}]:t}))}function r(e){const t=e.getBoundingClientRect();return t.top===t.bottom?r(e.parentNode):t}function o(e,t){var n;let{anchorTopOffset:l}=t;const s=e.find((e=>r(e).top>=l));if(s){var a;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(s))?s:null!=(a=e[e.indexOf(s)-1])?a:null}return null!=(n=e[e.length-1])?n:null}function c(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,s.p)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,l.useRef)(void 0),n=c();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:l,linkActiveClassName:s,minHeadingLevel:a,maxHeadingLevel:i}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(l),r=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const l=[];for(let s=t;s<=n;s+=1)l.push("h"+s+".anchor");return Array.from(document.querySelectorAll(l.join()))}({minHeadingLevel:a,maxHeadingLevel:i}),c=o(r,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(s),e.classList.add(s),t.current=e):e.classList.remove(s)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,n])}var u=n(14783),m=n(74848);function h(e){let{toc:t,className:n,linkClassName:l,isChild:s}=e;return t.length?(0,m.jsx)("ul",{className:s?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:l})]},e.id)))}):null}const g=l.memo(h);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const f=(0,s.p)(),v=null!=c?c:f.tableOfContents.minHeadingLevel,p=null!=u?u:f.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return(0,l.useMemo)((()=>i({toc:a(t),minHeadingLevel:n,maxHeadingLevel:s})),[t,n,s])}({toc:t,minHeadingLevel:v,maxHeadingLevel:p});return d((0,l.useMemo)((()=>{if(r&&o)return{linkClassName:r,linkActiveClassName:o,minHeadingLevel:v,maxHeadingLevel:p}}),[r,o,v,p])),(0,m.jsx)(g,{toc:b,className:n,linkClassName:r,...h})}},81113:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var l=n(18215),s=n(23230),a=n(98821);const i={tags:"tags_jXut",tag:"tag_QGVx"};var r=n(74848);function o(e){let{tags:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("b",{children:(0,r.jsx)(s.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,r.jsx)("ul",{className:(0,l.A)(i.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:n}=e;return(0,r.jsx)("li",{className:i.tag,children:(0,r.jsx)(a.A,{label:t,permalink:n})},n)}))})]})}},38322:(e,t,n)=>{n.d(t,{e:()=>o,i:()=>r});var l=n(96540),s=n(4799),a=n(74848);const i=l.createContext(null);function r(e){let{children:t,content:n,isBlogPostPage:s=!1}=e;const r=function(e){let{content:t,isBlogPostPage:n}=e;return(0,l.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:n})),[t,n])}({content:n,isBlogPostPage:s});return(0,a.jsx)(i.Provider,{value:r,children:t})}function o(){const e=(0,l.useContext)(i);if(null===e)throw new s.dV("BlogPostProvider");return e}},57824:(e,t,n)=>{n.d(t,{W:()=>c});var l=n(96540),s=n(97639);const a=["zero","one","two","few","many","other"];function i(e){return a.filter((t=>e.includes(t)))}const r={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,l.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+t.message+"\n"),r}}),[e])}function c(){const e=o();return{selectMessage:(t,n)=>function(e,t,n){const l=e.split("|");if(1===l.length)return l[0];l.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms.join(",")+"), but the message contains "+l.length+": "+e);const s=n.select(t),a=n.pluralForms.indexOf(s);return l[Math.min(a,l.length-1)]}(n,t,e)}}}}]);