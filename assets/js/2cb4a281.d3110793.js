"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[29985],{29976:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=n(85893),i=n(11151),c=n(17661);const s={},o="UI\u6846\u67b6",a={id:"front/ui/index",title:"UI\u6846\u67b6",description:"",source:"@site/docs/front/ui/index.md",sourceDirName:"front/ui",slug:"/front/ui/",permalink:"/docs/front/ui/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5b98\u65b9\u6587\u6863",permalink:"/docs/front/ts/official"},next:{title:"React UI\u6846\u67b6",permalink:"/docs/front/ui/react/"}},l={},d=[];function u(e){const t={h1:"h1",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"ui\u6846\u67b6",children:"UI\u6846\u67b6"}),"\n","\n","\n",(0,r.jsx)(c.Z,{})]})}function f(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},17661:(e,t,n)=>{n.d(t,{Z:()=>j});n(67294);var r=n(86010),i=n(78259),c=n(83699),s=n(2735),o=n(97325),a=n(13899);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(85893);function u(e){let{href:t,children:n}=e;return(0,d.jsx)(c.Z,{href:t,className:(0,r.Z)("card padding--lg",l.cardContainer),children:n})}function f(e){let{href:t,icon:n,title:i,description:c}=e;return(0,d.jsxs)(u,{href:t,children:[(0,d.jsxs)(a.Z,{as:"h2",className:(0,r.Z)("text--truncate",l.cardTitle),title:i,children:[n," ",i]}),c&&(0,d.jsx)("p",{className:(0,r.Z)("text--truncate",l.cardDescription),title:c,children:c})]})}function m(e){var t;let{item:n}=e;const r=(0,i.LM)(n);return r?(0,d.jsx)(f,{href:r,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:null!=(t=n.description)?t:(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function h(e){var t,n;let{item:r}=e;const c=(0,s.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.xz)(null!=(t=r.docId)?t:void 0);return(0,d.jsx)(f,{href:r.href,icon:c,title:r.label,description:null!=(n=r.description)?n:null==o?void 0:o.description})}function p(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(h,{item:t});case"category":return(0,d.jsx)(m,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function x(e){let{className:t}=e;const n=(0,i.jA)();return(0,d.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const c=(0,i.MN)(t);return(0,d.jsx)("section",{className:(0,r.Z)("row",n),children:c.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(p,{item:e})},t)))})}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var r=n(67294);const i={},c=r.createContext(i);function s(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);