"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[64013],{7306:(e,s,t)=>{t.d(s,{Z:()=>v});var i=t(67294),a=t(86010),l=t(74636),r=t(13488),n=t(83699),c=t(97325),o=t(16550),d=t(69003);function m(e){const{pathname:s}=(0,o.TH)();return(0,i.useMemo)((()=>e.filter((e=>function(e,s){return!(e.unlisted&&!(0,d.Mg)(e.permalink,s))}(e,s)))),[e,s])}const g={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var h=t(85893);function u(e){let{sidebar:s}=e;const t=m(s.items);return(0,h.jsx)("aside",{className:"col col--3",children:(0,h.jsxs)("nav",{className:(0,a.Z)(g.sidebar,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,h.jsx)("div",{className:(0,a.Z)(g.sidebarItemTitle,"margin-bottom--md"),children:s.title}),(0,h.jsx)("ul",{className:(0,a.Z)(g.sidebarItemList,"clean-list"),children:t.map((e=>(0,h.jsx)("li",{className:g.sidebarItem,children:(0,h.jsx)(n.Z,{isNavLink:!0,to:e.permalink,className:g.sidebarItemLink,activeClassName:g.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var b=t(53086);function j(e){let{sidebar:s}=e;const t=m(s.items);return(0,h.jsx)("ul",{className:"menu__list",children:t.map((e=>(0,h.jsx)("li",{className:"menu__list-item",children:(0,h.jsx)(n.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function p(e){return(0,h.jsx)(b.Zo,{component:j,props:e})}function x(e){let{sidebar:s}=e;const t=(0,r.i)();return null!=s&&s.items.length?"mobile"===t?(0,h.jsx)(p,{sidebar:s}):(0,h.jsx)(u,{sidebar:s}):null}function v(e){const{sidebar:s,toc:t,children:i,...r}=e,n=s&&s.items.length>0;return(0,h.jsx)(l.Z,{...r,children:(0,h.jsx)("div",{className:"container margin-vert--lg",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)(x,{sidebar:s}),(0,h.jsx)("main",{className:(0,a.Z)("col",{"col--7":n,"col--9 col--offset-1":!n}),itemScope:!0,itemType:"https://schema.org/Blog",children:i}),t&&(0,h.jsx)("div",{className:"col col--2",children:t})]})})})}},53852:(e,s,t)=>{t.d(s,{Z:()=>n});t(67294);var i=t(86010),a=t(83699);const l={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var r=t(85893);function n(e){let{permalink:s,label:t,count:n}=e;return(0,r.jsxs)(a.Z,{href:s,className:(0,i.Z)(l.tag,n?l.tagWithCount:l.tagRegular),children:[t,n&&(0,r.jsx)("span",{children:n})]})}},97654:(e,s,t)=>{t.r(s),t.d(s,{default:()=>x});var i=t(67294),a=t(86010),l=t(97325);const r=()=>(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var n=t(35463),c=t(23702),o=t(7306),d=t(53852);const m={tag:"tag_Yyuv"};var g=t(85893);function h(e){let{letterEntry:s}=e;return(0,g.jsxs)("article",{children:[(0,g.jsx)("h2",{children:s.letter}),(0,g.jsx)("ul",{className:"padding--none",children:s.tags.map((e=>(0,g.jsx)("li",{className:m.tag,children:(0,g.jsx)(d.Z,{...e})},e.permalink)))}),(0,g.jsx)("hr",{})]})}function u(e){let{tags:s}=e;const t=function(e){const s={};return Object.values(e).forEach((e=>{const t=function(e){return e[0].toUpperCase()}(e.label);null!=s[t]||(s[t]=[]),s[t].push(e)})),Object.entries(s).sort(((e,s)=>{let[t]=e,[i]=s;return t.localeCompare(i)})).map((e=>{let[s,t]=e;return{letter:s,tags:t.sort(((e,s)=>e.label.localeCompare(s.label)))}}))}(s);return(0,g.jsx)("section",{className:"margin-vert--lg",children:t.map((e=>(0,g.jsx)(h,{letterEntry:e},e.letter)))})}function b(e){let{tags:s}=e;return console.log(s),(0,g.jsx)("section",{className:"margin-vert--lg",children:(0,g.jsx)("ul",{className:"padding--none",children:s.map((e=>(0,g.jsx)("li",{className:m.tag,children:(0,g.jsx)(d.Z,{...e})},e.permalink)))})})}var j=t(33647),p=t(1954);function x(e){let{tags:s,sidebar:t}=e;const l=r(),[d,m]=(0,i.useState)("grid");return(0,g.jsxs)(n.FG,{className:(0,a.Z)(c.k.wrapper.blogPages,c.k.page.blogTagsListPage),children:[(0,g.jsx)(n.d,{title:l}),(0,g.jsx)(j.Z,{tag:"blog_tags_list"}),(0,g.jsxs)(o.Z,{sidebar:t,children:[(0,g.jsxs)("div",{className:"blogtag__swith-view",children:[(0,g.jsx)("h1",{children:l}),(0,g.jsxs)("div",{children:[(0,g.jsx)(p.JO,{icon:"ph:list-fill",width:"24",height:"24",onClick:()=>m("list"),color:"list"===d?"var(--ifm-color-primary)":"#ccc"}),(0,g.jsx)(p.JO,{icon:"ph:grid-four",width:"24",height:"24",onClick:()=>m("grid"),color:"grid"===d?"var(--ifm-color-primary)":"#ccc"})]})]}),"list"===d&&(0,g.jsx)(u,{tags:s}),"grid"===d&&(0,g.jsx)(b,{tags:s})]})]})}}}]);