"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[66061],{61507:(e,n,t)=>{t.d(n,{A:()=>g});var o=t(96540),c=t(86957);function l(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const o=t.slice(2,e.level);e.parentIndex=Math.max(...o),t[e.level]=n}));const o=[];return n.forEach((e=>{const{parentIndex:t,...c}=e;t>=0?n[t].children.push(c):o.push(c)})),o}function s(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:o}=e;return n.flatMap((e=>{const n=s({toc:e.children,minHeadingLevel:t,maxHeadingLevel:o});return function(e){return e.level>=t&&e.level<=o}(e)?[{...e,children:n}]:n}))}function a(e){const n=e.getBoundingClientRect();return n.top===n.bottom?a(e.parentNode):n}function i(e,n){var t;let{anchorTopOffset:o}=n;const c=e.find((e=>a(e).top>=o));if(c){var l;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(a(c))?c:null!=(l=e[e.indexOf(c)-1])?l:null}return null!=(t=e[e.length-1])?t:null}function r(){const e=(0,o.useRef)(0),{navbar:{hideOnScroll:n}}=(0,c.p)();return(0,o.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,o.useRef)(void 0),t=r();(0,o.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:o,linkActiveClassName:c,minHeadingLevel:l,maxHeadingLevel:s}=e;function a(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(o),a=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const o=[];for(let c=n;c<=t;c+=1)o.push("h"+c+".anchor");return Array.from(document.querySelectorAll(o.join()))}({minHeadingLevel:l,maxHeadingLevel:s}),r=i(a,{anchorTopOffset:t.current}),d=e.find((e=>r&&r.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(c),e.classList.add(c),n.current=e):e.classList.remove(c)}(e,e===d)}))}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),()=>{document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}),[e,t])}var u=t(14783),m=t(74848);function p(e){let{toc:n,className:t,linkClassName:o,isChild:c}=e;return n.length?(0,m.jsx)("ul",{className:c?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:"#"+e.id,className:null!=o?o:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(p,{isChild:!0,toc:e.children,className:t,linkClassName:o})]},e.id)))}):null}const h=o.memo(p);function g(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:r,maxHeadingLevel:u,...p}=e;const g=(0,c.p)(),f=null!=r?r:g.tableOfContents.minHeadingLevel,v=null!=u?u:g.tableOfContents.maxHeadingLevel,x=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:c}=e;return(0,o.useMemo)((()=>s({toc:l(n),minHeadingLevel:t,maxHeadingLevel:c})),[n,t,c])}({toc:n,minHeadingLevel:f,maxHeadingLevel:v});return d((0,o.useMemo)((()=>{if(a&&i)return{linkClassName:a,linkActiveClassName:i,minHeadingLevel:f,maxHeadingLevel:v}}),[a,i,f,v])),(0,m.jsx)(h,{toc:x,className:t,linkClassName:a,...p})}},12568:(e,n,t)=>{t.d(n,{A:()=>w});var o=t(96540),c=t(11062),l=t(20053),s=t(84631),a=t(18630),i=t(49292);const r={codeBlockContainer:"codeBlockContainer_APcc"};var d=t(74848);function u(e){let{as:n,...t}=e;const o=(0,s.A)(),c=(0,i.M$)(o);return(0,d.jsx)(n,{...t,style:c,className:(0,l.A)(t.className,r.codeBlockContainer,a.G.common.codeBlock)})}const m={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"};function p(e){let{children:n,className:t}=e;return(0,d.jsx)(u,{as:"pre",tabIndex:0,className:(0,l.A)(m.codeBlockStandalone,"thin-scrollbar",t),children:(0,d.jsx)("code",{className:m.codeBlockLines,children:n})})}var h=t(86957),g=t(16419),f=t(78181);const v={codeLine:"codeLine_iPqp",codeLineNumber:"codeLineNumber_F4P7",codeLineContent:"codeLineContent_pOih"};function x(e){let{line:n,classNames:t,showLineNumbers:o,getLineProps:c,getTokenProps:s}=e;1===n.length&&"\n"===n[0].content&&(n[0].content="");const a=c({line:n,className:(0,l.A)(t,o&&v.codeLine)}),i=n.map(((e,n)=>(0,d.jsx)("span",{...s({token:e,key:n})},n)));return(0,d.jsxs)("span",{...a,children:[o?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{className:v.codeLineNumber}),(0,d.jsx)("span",{className:v.codeLineContent,children:i})]}):i,(0,d.jsx)("br",{})]})}var b=t(76316),N=t(23230),k=t(62578),L=t(52030);const C={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function B(e){let{code:n,className:t}=e;const[c,s]=(0,o.useState)(!1),a=(0,o.useRef)(void 0),i=(0,o.useCallback)((()=>{(0,b.A)(n),s(!0),a.current=window.setTimeout((()=>{s(!1)}),1e3)}),[n]);return(0,o.useEffect)((()=>()=>window.clearTimeout(a.current)),[]),(0,d.jsx)("button",{type:"button","aria-label":c?(0,N.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,N.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,N.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.A)("clean-btn",t,C.copyButton,c&&C.copyButtonCopied),onClick:i,children:(0,d.jsxs)("span",{className:C.copyButtonIcons,"aria-hidden":"true",children:[(0,d.jsx)(k.A,{className:C.copyButtonIcon}),(0,d.jsx)(L.A,{className:C.copyButtonSuccessIcon})]})})}var _=t(58119);const j={wordWrapButtonIcon:"wordWrapButtonIcon_iowe",wordWrapButtonEnabled:"wordWrapButtonEnabled_gY8A"};function A(e){let{className:n,onClick:t,isEnabled:o}=e;const c=(0,N.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,d.jsx)("button",{type:"button",onClick:t,className:(0,l.A)("clean-btn",n,o&&j.wordWrapButtonEnabled),"aria-label":c,title:c,children:(0,d.jsx)(_.A,{className:j.wordWrapButtonIcon,"aria-hidden":"true"})})}function y(e){var n;let{children:t,className:o="",metastring:c,title:a,showLineNumbers:r,language:p}=e;const{prism:{defaultLanguage:v,magicComments:b}}=(0,h.p)(),N=function(e){return null==e?void 0:e.toLowerCase()}(null!=(n=null!=p?p:(0,i.Op)(o))?n:v),k=(0,s.A)(),L=(0,g.f)(),C=(0,i.wt)(c)||a,{lineClassNames:_,code:j}=(0,i.Li)(t,{metastring:c,language:N,magicComments:b}),y=null!=r?r:(0,i._u)(c);return(0,d.jsxs)(u,{as:"div",className:(0,l.A)(o,N&&!o.includes("language-"+N)&&"language-"+N),children:[C&&(0,d.jsx)("div",{className:m.codeBlockTitle,children:C}),(0,d.jsxs)("div",{className:m.codeBlockContent,children:[(0,d.jsx)(f.f4,{theme:k,code:j,language:null!=N?N:"text",children:e=>{let{className:n,style:t,tokens:o,getLineProps:c,getTokenProps:s}=e;return(0,d.jsx)("pre",{tabIndex:0,ref:L.codeBlockRef,className:(0,l.A)(n,m.codeBlock,"thin-scrollbar"),style:t,children:(0,d.jsx)("code",{className:(0,l.A)(m.codeBlockLines,y&&m.codeBlockLinesWithNumbering),children:o.map(((e,n)=>(0,d.jsx)(x,{line:e,getLineProps:c,getTokenProps:s,classNames:_[n],showLineNumbers:y},n)))})})}}),(0,d.jsxs)("div",{className:m.buttonGroup,children:[(L.isEnabled||L.isCodeScrollable)&&(0,d.jsx)(A,{className:m.codeButton,onClick:()=>L.toggle(),isEnabled:L.isEnabled}),(0,d.jsx)(B,{className:m.codeButton,code:j})]})]})]})}function w(e){let{children:n,...t}=e;const l=(0,c.A)(),s=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(n),a="string"==typeof s?y:p;return(0,d.jsx)(a,{...t,children:s},String(l))}},14708:(e,n,t)=>{t.r(n),t.d(n,{default:()=>u});t(96540);var o=t(20053),c=t(69817),l=t(18630),s=t(6534),a=t(46373),i=t(66819);const r={mdxPageWrapper:"mdxPageWrapper_yV3F"};var d=t(74848);function u(e){const{content:n}=e,{metadata:{title:t,description:u,frontMatter:m}}=n,{wrapperClassName:p,hide_table_of_contents:h}=m;return(0,d.jsxs)(c.e3,{className:(0,o.A)(null!=p?p:l.G.wrapper.mdxPages,l.G.page.mdxPage),children:[(0,d.jsx)(c.be,{title:t,description:u}),(0,d.jsx)(s.A,{children:(0,d.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,d.jsxs)("div",{className:(0,o.A)("row",r.mdxPageWrapper),children:[(0,d.jsx)("div",{className:(0,o.A)("col","col--8"),children:(0,d.jsx)(a.A,{children:(0,d.jsx)(n,{})})}),!h&&n.toc&&(0,d.jsx)("div",{className:"col col--2",children:(0,d.jsx)(i.A,{toc:n.toc,minHeadingLevel:m.toc_min_heading_level,maxHeadingLevel:m.toc_max_heading_level})})]})})})]})}},66819:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var o=t(20053),c=t(61507);const l={tableOfContents:"tableOfContents_jeP5",docItemContainer:"docItemContainer_hgFs"};var s=t(74848);const a="table-of-contents__link toc-highlight",i="table-of-contents__link--active";function r(e){let{className:n,...t}=e;return(0,s.jsx)("div",{className:(0,o.A)(l.tableOfContents,"thin-scrollbar",n),children:(0,s.jsx)(c.A,{...t,linkClassName:a,linkActiveClassName:i})})}}}]);