"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[18401],{12568:(e,t,n)=>{n.d(t,{A:()=>w});var o=n(96540),s=n(11062),c=n(20053),a=n(84631),l=n(18630),i=n(49292);const d={codeBlockContainer:"codeBlockContainer_APcc"};var r=n(74848);function u(e){let{as:t,...n}=e;const o=(0,a.A)(),s=(0,i.M$)(o);return(0,r.jsx)(t,{...n,style:s,className:(0,c.A)(n.className,d.codeBlockContainer,l.G.common.codeBlock)})}const m={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"};function p(e){let{children:t,className:n}=e;return(0,r.jsx)(u,{as:"pre",tabIndex:0,className:(0,c.A)(m.codeBlockStandalone,"thin-scrollbar",n),children:(0,r.jsx)("code",{className:m.codeBlockLines,children:t})})}var h=n(86957),x=n(16419),g=n(78181);const b={codeLine:"codeLine_iPqp",codeLineNumber:"codeLineNumber_F4P7",codeLineContent:"codeLineContent_pOih"};function j(e){let{line:t,classNames:n,showLineNumbers:o,getLineProps:s,getTokenProps:a}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const l=s({line:t,className:(0,c.A)(n,o&&b.codeLine)}),i=t.map(((e,t)=>(0,r.jsx)("span",{...a({token:e,key:t})},t)));return(0,r.jsxs)("span",{...l,children:[o?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:b.codeLineNumber}),(0,r.jsx)("span",{className:b.codeLineContent,children:i})]}):i,(0,r.jsx)("br",{})]})}var k=n(76316),_=n(23230),v=n(62578),N=n(52030);const A={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function f(e){let{code:t,className:n}=e;const[s,a]=(0,o.useState)(!1),l=(0,o.useRef)(void 0),i=(0,o.useCallback)((()=>{(0,k.A)(t),a(!0),l.current=window.setTimeout((()=>{a(!1)}),1e3)}),[t]);return(0,o.useEffect)((()=>()=>window.clearTimeout(l.current)),[]),(0,r.jsx)("button",{type:"button","aria-label":s?(0,_.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,_.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,_.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,c.A)("clean-btn",n,A.copyButton,s&&A.copyButtonCopied),onClick:i,children:(0,r.jsxs)("span",{className:A.copyButtonIcons,"aria-hidden":"true",children:[(0,r.jsx)(v.A,{className:A.copyButtonIcon}),(0,r.jsx)(N.A,{className:A.copyButtonSuccessIcon})]})})}var B=n(58119);const C={wordWrapButtonIcon:"wordWrapButtonIcon_iowe",wordWrapButtonEnabled:"wordWrapButtonEnabled_gY8A"};function y(e){let{className:t,onClick:n,isEnabled:o}=e;const s=(0,_.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,r.jsx)("button",{type:"button",onClick:n,className:(0,c.A)("clean-btn",t,o&&C.wordWrapButtonEnabled),"aria-label":s,title:s,children:(0,r.jsx)(B.A,{className:C.wordWrapButtonIcon,"aria-hidden":"true"})})}function L(e){var t;let{children:n,className:o="",metastring:s,title:l,showLineNumbers:d,language:p}=e;const{prism:{defaultLanguage:b,magicComments:k}}=(0,h.p)(),_=function(e){return null==e?void 0:e.toLowerCase()}(null!=(t=null!=p?p:(0,i.Op)(o))?t:b),v=(0,a.A)(),N=(0,x.f)(),A=(0,i.wt)(s)||l,{lineClassNames:B,code:C}=(0,i.Li)(n,{metastring:s,language:_,magicComments:k}),L=null!=d?d:(0,i._u)(s);return(0,r.jsxs)(u,{as:"div",className:(0,c.A)(o,_&&!o.includes("language-"+_)&&"language-"+_),children:[A&&(0,r.jsx)("div",{className:m.codeBlockTitle,children:A}),(0,r.jsxs)("div",{className:m.codeBlockContent,children:[(0,r.jsx)(g.f4,{theme:v,code:C,language:null!=_?_:"text",children:e=>{let{className:t,style:n,tokens:o,getLineProps:s,getTokenProps:a}=e;return(0,r.jsx)("pre",{tabIndex:0,ref:N.codeBlockRef,className:(0,c.A)(t,m.codeBlock,"thin-scrollbar"),style:n,children:(0,r.jsx)("code",{className:(0,c.A)(m.codeBlockLines,L&&m.codeBlockLinesWithNumbering),children:o.map(((e,t)=>(0,r.jsx)(j,{line:e,getLineProps:s,getTokenProps:a,classNames:B[t],showLineNumbers:L},t)))})})}}),(0,r.jsxs)("div",{className:m.buttonGroup,children:[(N.isEnabled||N.isCodeScrollable)&&(0,r.jsx)(y,{className:m.codeButton,onClick:()=>N.toggle(),isEnabled:N.isEnabled}),(0,r.jsx)(f,{className:m.codeButton,code:C})]})]})]})}function w(e){let{children:t,...n}=e;const c=(0,s.A)(),a=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof a?L:p;return(0,r.jsx)(l,{...n,children:a},String(c))}},9152:(e,t,n)=>{n.r(t),n.d(t,{default:()=>U});n(96540);var o=n(69817),s=n(36992),c=n(74848);function a(){var e;const{metadata:t,frontMatter:n,assets:a}=(0,s.u)();return(0,c.jsx)(o.be,{title:t.title,description:t.description,keywords:n.keywords,image:null!=(e=a.image)?e:n.image})}var l=n(20053),i=n(82216),d=n(63682);function r(){const{metadata:e}=(0,s.u)();return(0,c.jsx)(d.A,{previous:e.previous,next:e.next})}var u=n(84799),m=n(79436),p=n(18630),h=n(44974),x=n(55911),g=n(81113);const b={lastUpdated:"lastUpdated_VsjB"};function j(e){return(0,c.jsx)("div",{className:(0,l.A)(p.G.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,c.jsx)("div",{className:"col",children:(0,c.jsx)(g.A,{...e})})})}function k(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:o,formattedLastUpdatedAt:s}=e;return(0,c.jsxs)("div",{className:(0,l.A)(p.G.docs.docFooterEditMetaRow,"row"),children:[(0,c.jsx)("div",{className:"col",children:t&&(0,c.jsx)(x.A,{editUrl:t})}),(0,c.jsx)("div",{className:(0,l.A)("col",b.lastUpdated),children:(n||o)&&(0,c.jsx)(h.A,{lastUpdatedAt:n,formattedLastUpdatedAt:s,lastUpdatedBy:o})})]})}function _(){const{metadata:e}=(0,s.u)(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:o,lastUpdatedBy:a,tags:i}=e,d=i.length>0,r=!!(t||n||a);return d||r?(0,c.jsxs)("footer",{className:(0,l.A)(p.G.docs.docFooter,"docusaurus-mt-lg"),children:[d&&(0,c.jsx)(j,{tags:i}),r&&(0,c.jsx)(k,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:a,formattedLastUpdatedAt:o})]}):null}var v=n(35592);const N={tocMobile:"tocMobile_bxCs"};function A(){const{toc:e,frontMatter:t}=(0,s.u)();return(0,c.jsx)(v.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,l.A)(p.G.docs.docTocMobile,N.tocMobile)})}var f=n(66819);function B(){const{toc:e,frontMatter:t}=(0,s.u)();return(0,c.jsx)(f.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:p.G.docs.docTocDesktop})}var C=n(85225),y=n(46373);function L(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=(0,s.u)();return t.hide_title||void 0!==n?null:e.title}();return(0,c.jsxs)("div",{className:(0,l.A)(p.G.docs.docMarkdown,"markdown"),children:[n&&(0,c.jsx)("header",{children:(0,c.jsx)(C.A,{as:"h1",children:n})}),(0,c.jsx)(y.A,{children:t})]})}var w=n(44168);const T={docItemContainer:"docItemContainer_c0TR",docItemCol:"docItemCol_z5aJ"};function I(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=(0,s.u)(),n=(0,i.l)(),o=e.hide_table_of_contents,a=!o&&t.length>0;return{hidden:o,mobile:a?(0,c.jsx)(A,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,c.jsx)(B,{})}}();return(0,c.jsxs)("div",{className:"row",children:[(0,c.jsxs)("div",{className:(0,l.A)("col",!n.hidden&&T.docItemCol),children:[(0,c.jsx)(u.A,{}),(0,c.jsxs)("div",{className:T.docItemContainer,children:[(0,c.jsxs)("article",{children:[(0,c.jsx)(w.A,{}),(0,c.jsx)(m.A,{}),n.mobile,(0,c.jsx)(L,{children:t}),(0,c.jsx)(_,{})]}),(0,c.jsx)(r,{})]})]}),n.desktop&&(0,c.jsx)("div",{className:"col col--3",children:n.desktop})]})}function U(e){const t="docs-doc-id-"+e.content.metadata.unversionedId,n=e.content;return(0,c.jsx)(s._,{content:e.content,children:(0,c.jsxs)(o.e3,{className:t,children:[(0,c.jsx)(a,{}),(0,c.jsx)(I,{children:(0,c.jsx)(n,{})})]})})}},34689:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var o=n(20053),s=n(14783),c=n(74848);function a(e){const{permalink:t,title:n,subLabel:a,isNext:l}=e;return(0,c.jsxs)(s.A,{className:(0,o.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[a&&(0,c.jsx)("div",{className:"pagination-nav__sublabel",children:a}),(0,c.jsx)("div",{className:"pagination-nav__label",children:n})]})}},66819:(e,t,n)=>{n.d(t,{A:()=>d});n(96540);var o=n(20053),s=n(61507);const c={tableOfContents:"tableOfContents_jeP5",docItemContainer:"docItemContainer_hgFs"};var a=n(74848);const l="table-of-contents__link toc-highlight",i="table-of-contents__link--active";function d(e){let{className:t,...n}=e;return(0,a.jsx)("div",{className:(0,o.A)(c.tableOfContents,"thin-scrollbar",t),children:(0,a.jsx)(s.A,{...n,linkClassName:l,linkActiveClassName:i})})}},98821:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var o=n(20053),s=n(14783);const c={tag:"tag_d0Lz",tagRegular:"tagRegular_bmnp",tagWithCount:"tagWithCount_vddX"};var a=n(74848);function l(e){let{permalink:t,label:n,count:l}=e;return(0,a.jsxs)(s.A,{href:t,className:(0,o.A)(c.tag,l?c.tagWithCount:c.tagRegular),children:[n,l&&(0,a.jsx)("span",{children:l})]})}}}]);