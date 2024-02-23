"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[46103],{30256:(e,t,n)=>{n.d(t,{Z:()=>r});n(67294);var o=n(86010),a=n(97818),s=n(54249),l=n(85893);function r(e){const{sidebar:t,toc:n,children:r,...i}=e,c=t&&t.items.length>0;return(0,l.jsx)(a.Z,{...i,children:(0,l.jsx)("div",{className:"container margin-vert--lg",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)(s.Z,{sidebar:t}),(0,l.jsx)("main",{className:(0,o.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"https://schema.org/Blog",children:r}),n&&(0,l.jsx)("div",{className:"col col--2",children:n})]})})})}},12213:(e,t,n)=>{n.d(t,{Z:()=>F});n(67294);var o=n(86010),a=n(79107),s=n(79524),l=n(85893);function r(e){var t,n;let{children:o,className:r}=e;const{frontMatter:i,assets:c,metadata:{description:d}}=(0,a.C)(),{withBaseUrl:m}=(0,s.C)(),u=null!=(t=c.image)?t:i.image,h=null!=(n=i.keywords)?n:[];return(0,l.jsxs)("article",{className:r,itemProp:"blogPost",itemScope:!0,itemType:"https://schema.org/BlogPosting",children:[d&&(0,l.jsx)("meta",{itemProp:"description",content:d}),u&&(0,l.jsx)("link",{itemProp:"image",href:m(u,{absolute:!0})}),h.length>0&&(0,l.jsx)("meta",{itemProp:"keywords",content:h.join(",")}),o]})}var i=n(83699);const c={title:"title_xvU1"};function d(e){let{className:t}=e;const{metadata:n,isBlogPostPage:s}=(0,a.C)(),{permalink:r,title:d}=n,m=s?"h1":"h2";return(0,l.jsx)(m,{className:(0,o.Z)(c.title,t),itemProp:"headline",children:s?d:(0,l.jsx)(i.Z,{itemProp:"url",to:r,children:d})})}var m=n(97325),u=n(23777);const h={container:"container_iJTo"};var g=n(1954);function p(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,u.c)();return t=>{const n=Math.ceil(t);return e(n,(0,m.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,l.jsxs)(l.Fragment,{children:[" ",(0,l.jsx)(g.JO,{icon:"ri:time-line"})," ",n(t)]})}function x(e){let{date:t,formattedDate:n}=e;return(0,l.jsxs)("time",{dateTime:t,itemProp:"datePublished",children:[(0,l.jsx)(g.JO,{icon:"ri:calendar-line"})," ",n]})}function j(){return(0,l.jsx)(l.Fragment,{children:" \xb7 "})}function b(e){let{className:t}=e;const{metadata:n}=(0,a.C)(),{date:s,formattedDate:r,readingTime:i}=n;return(0,l.jsxs)("div",{className:(0,o.Z)(h.container,"margin-vert--md",t),children:[(0,l.jsx)(x,{date:s,formattedDate:r}),void 0!==i&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(j,{}),(0,l.jsx)(p,{readingTime:i})]})]})}function v(e){return e.href?(0,l.jsx)(i.Z,{...e}):(0,l.jsx)(l.Fragment,{children:e.children})}function N(e){let{author:t,className:n}=e;const{name:a,title:s,url:r,imageURL:i,email:c}=t,d=r||c&&"mailto:"+c||void 0;return(0,l.jsxs)("div",{className:(0,o.Z)("avatar margin-bottom--sm",n),children:[i&&(0,l.jsx)(v,{href:d,className:"avatar__photo-link",children:(0,l.jsx)("img",{className:"avatar__photo",src:i,alt:a,itemProp:"image"})}),a&&(0,l.jsxs)("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person",children:[(0,l.jsx)("div",{className:"avatar__name",children:(0,l.jsx)(v,{href:d,itemProp:"url",children:(0,l.jsx)("span",{itemProp:"name",children:a})})}),s&&(0,l.jsx)("small",{className:"avatar__subtitle",itemProp:"description",children:s})]})]})}const f={authorCol:"authorCol_q4o9",imageOnlyAuthorRow:"imageOnlyAuthorRow_lXe7",imageOnlyAuthorCol:"imageOnlyAuthorCol_cxD5"};function k(e){let{className:t}=e;const{metadata:{authors:n},assets:s}=(0,a.C)();if(0===n.length)return null;const r=n.every((e=>{let{name:t}=e;return!t}));return(0,l.jsx)("div",{className:(0,o.Z)("margin-top--md margin-bottom--sm",r?f.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>{var n;return(0,l.jsx)("div",{className:(0,o.Z)(!r&&"col col--6",r?f.imageOnlyAuthorCol:f.authorCol),children:(0,l.jsx)(N,{author:{...e,imageURL:null!=(n=s.authorsImageUrls[t])?n:e.imageURL}})},t)}))})}function _(){return(0,l.jsxs)("header",{children:[(0,l.jsx)(d,{}),(0,l.jsx)(b,{}),(0,l.jsx)(k,{})]})}var C=n(63905),B=n(84725);function y(e){let{children:t,className:n}=e;const{isBlogPostPage:s}=(0,a.C)();return(0,l.jsx)("div",{id:s?C.blogPostContainerID:void 0,className:(0,o.Z)("markdown",n),itemProp:"articleBody",children:(0,l.jsx)(B.Z,{children:t})})}var Z=n(94850),P=n(74597);function w(){return(0,l.jsx)("b",{children:(0,l.jsx)(m.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function L(e){const{blogPostTitle:t,...n}=e;return(0,l.jsxs)(i.Z,{"aria-label":(0,m.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:[(0,l.jsx)(w,{}),(0,l.jsx)(g.JO,{icon:"ri:arrow-right-line"})]})}const T={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_Wr5y"};function I(){const{metadata:e,isBlogPostPage:t}=(0,a.C)(),{tags:n,title:s,editUrl:r,hasTruncateMarker:i}=e,c=!t&&i,d=n.length>0;return d||c||r?(0,l.jsxs)("footer",{className:(0,o.Z)("row docusaurus-mt-lg",t&&T.blogPostFooterDetailsFull),children:[d&&(0,l.jsx)("div",{className:(0,o.Z)("col",{"col--9":c}),children:(0,l.jsx)(P.Z,{tags:n})}),t&&r&&(0,l.jsx)("div",{className:"col margin-top--sm",children:(0,l.jsx)(Z.Z,{editUrl:r})}),c&&(0,l.jsx)("div",{className:(0,o.Z)("col text--right",{"col--3":d}),children:(0,l.jsx)(L,{blogPostTitle:s,to:e.permalink})})]}):null}function F(e){let{children:t,className:n}=e;const s=function(){const{isBlogPostPage:e}=(0,a.C)();return e?void 0:"margin-bottom--xl"}();return(0,l.jsxs)(r,{className:(0,o.Z)(s,n),children:[(0,l.jsx)(_,{}),(0,l.jsx)(y,{children:t}),(0,l.jsx)(I,{})]})}},61009:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});n(67294);var o=n(86010),a=n(35463),s=n(23702),l=n(79107),r=n(30256),i=n(12213),c=n(33008),d=n(85893);function m(){var e;const{assets:t,metadata:n}=(0,l.C)(),{title:o,description:s,date:r,tags:i,authors:c,frontMatter:m}=n,{keywords:u}=m,h=null!=(e=t.image)?e:m.image;return(0,d.jsxs)(a.d,{title:o,description:s,keywords:u,image:h,children:[(0,d.jsx)("meta",{property:"og:type",content:"article"}),(0,d.jsx)("meta",{property:"article:published_time",content:r}),c.some((e=>e.url))&&(0,d.jsx)("meta",{property:"article:author",content:c.map((e=>e.url)).filter(Boolean).join(",")}),i.length>0&&(0,d.jsx)("meta",{property:"article:tag",content:i.map((e=>e.label)).join(",")})]})}var u=n(20397);function h(e){let{sidebar:t,children:n}=e;const{metadata:o,toc:a}=(0,l.C)(),{nextItem:s,prevItem:m,frontMatter:h}=o,{hide_table_of_contents:g,toc_min_heading_level:p,toc_max_heading_level:x}=h;return(0,d.jsxs)(r.Z,{sidebar:t,toc:!g&&a.length>0?(0,d.jsx)(u.Z,{toc:a,minHeadingLevel:p,maxHeadingLevel:x}):void 0,children:[(0,d.jsx)(i.Z,{children:n}),(s||m)&&(0,d.jsx)(c.Z,{nextItem:s,prevItem:m})]})}function g(e){const t=e.content;return(0,d.jsx)(l.n,{content:e.content,isBlogPostPage:!0,children:(0,d.jsxs)(a.FG,{className:(0,o.Z)(s.k.wrapper.blogPages,s.k.page.blogPostPage),children:[(0,d.jsx)(m,{}),(0,d.jsx)(h,{sidebar:e.sidebar,children:(0,d.jsx)(t,{})})]})})}},20133:(e,t,n)=>{n.d(t,{Z:()=>w});var o=n(67294),a=n(51048),s=n(86010),l=n(4779),r=n(23702),i=n(82940);const c={codeBlockContainer:"codeBlockContainer_APcc"};var d=n(85893);function m(e){let{as:t,...n}=e;const o=(0,l.p)(),a=(0,i.QC)(o);return(0,d.jsx)(t,{...n,style:a,className:(0,s.Z)(n.className,c.codeBlockContainer,r.k.common.codeBlock)})}const u={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"};function h(e){let{children:t,className:n}=e;return(0,d.jsx)(m,{as:"pre",tabIndex:0,className:(0,s.Z)(u.codeBlockStandalone,"thin-scrollbar",n),children:(0,d.jsx)("code",{className:u.codeBlockLines,children:t})})}var g=n(20107),p=n(52144),x=n(42573);const j={codeLine:"codeLine_iPqp",codeLineNumber:"codeLineNumber_F4P7",codeLineContent:"codeLineContent_pOih"};function b(e){let{line:t,classNames:n,showLineNumbers:o,getLineProps:a,getTokenProps:l}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const r=a({line:t,className:(0,s.Z)(n,o&&j.codeLine)}),i=t.map(((e,t)=>(0,d.jsx)("span",{...l({token:e,key:t})},t)));return(0,d.jsxs)("span",{...r,children:[o?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{className:j.codeLineNumber}),(0,d.jsx)("span",{className:j.codeLineContent,children:i})]}):i,(0,d.jsx)("br",{})]})}var v=n(94358),N=n(97325),f=n(9776),k=n(69612);const _={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function C(e){let{code:t,className:n}=e;const[a,l]=(0,o.useState)(!1),r=(0,o.useRef)(void 0),i=(0,o.useCallback)((()=>{(0,v.Z)(t),l(!0),r.current=window.setTimeout((()=>{l(!1)}),1e3)}),[t]);return(0,o.useEffect)((()=>()=>window.clearTimeout(r.current)),[]),(0,d.jsx)("button",{type:"button","aria-label":a?(0,N.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,N.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,N.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.Z)("clean-btn",n,_.copyButton,a&&_.copyButtonCopied),onClick:i,children:(0,d.jsxs)("span",{className:_.copyButtonIcons,"aria-hidden":"true",children:[(0,d.jsx)(f.Z,{className:_.copyButtonIcon}),(0,d.jsx)(k.Z,{className:_.copyButtonSuccessIcon})]})})}var B=n(72152);const y={wordWrapButtonIcon:"wordWrapButtonIcon_iowe",wordWrapButtonEnabled:"wordWrapButtonEnabled_gY8A"};function Z(e){let{className:t,onClick:n,isEnabled:o}=e;const a=(0,N.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,d.jsx)("button",{type:"button",onClick:n,className:(0,s.Z)("clean-btn",t,o&&y.wordWrapButtonEnabled),"aria-label":a,title:a,children:(0,d.jsx)(B.Z,{className:y.wordWrapButtonIcon,"aria-hidden":"true"})})}function P(e){var t;let{children:n,className:o="",metastring:a,title:r,showLineNumbers:c,language:h}=e;const{prism:{defaultLanguage:j,magicComments:v}}=(0,g.L)(),N=function(e){return null==e?void 0:e.toLowerCase()}(null!=(t=null!=h?h:(0,i.Vo)(o))?t:j),f=(0,l.p)(),k=(0,p.F)(),_=(0,i.bc)(a)||r,{lineClassNames:B,code:y}=(0,i.nZ)(n,{metastring:a,language:N,magicComments:v}),P=null!=c?c:(0,i.nt)(a);return(0,d.jsxs)(m,{as:"div",className:(0,s.Z)(o,N&&!o.includes("language-"+N)&&"language-"+N),children:[_&&(0,d.jsx)("div",{className:u.codeBlockTitle,children:_}),(0,d.jsxs)("div",{className:u.codeBlockContent,children:[(0,d.jsx)(x.y$,{theme:f,code:y,language:null!=N?N:"text",children:e=>{let{className:t,style:n,tokens:o,getLineProps:a,getTokenProps:l}=e;return(0,d.jsx)("pre",{tabIndex:0,ref:k.codeBlockRef,className:(0,s.Z)(t,u.codeBlock,"thin-scrollbar"),style:n,children:(0,d.jsx)("code",{className:(0,s.Z)(u.codeBlockLines,P&&u.codeBlockLinesWithNumbering),children:o.map(((e,t)=>(0,d.jsx)(b,{line:e,getLineProps:a,getTokenProps:l,classNames:B[t],showLineNumbers:P},t)))})})}}),(0,d.jsxs)("div",{className:u.buttonGroup,children:[(k.isEnabled||k.isCodeScrollable)&&(0,d.jsx)(Z,{className:u.codeButton,onClick:()=>k.toggle(),isEnabled:k.isEnabled}),(0,d.jsx)(C,{className:u.codeButton,code:y})]})]})]})}function w(e){let{children:t,...n}=e;const s=(0,a.Z)(),l=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),r="string"==typeof l?P:h;return(0,d.jsx)(r,{...n,children:l},String(s))}},43561:(e,t,n)=>{n.d(t,{Z:()=>l});n(67294);var o=n(86010),a=n(83699),s=n(85893);function l(e){const{permalink:t,title:n,subLabel:l,isNext:r}=e;return(0,s.jsxs)(a.Z,{className:(0,o.Z)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,s.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,s.jsx)("div",{className:"pagination-nav__label",children:n})]})}},20397:(e,t,n)=>{n.d(t,{Z:()=>c});n(67294);var o=n(86010),a=n(2728);const s={tableOfContents:"tableOfContents_jeP5",docItemContainer:"docItemContainer_hgFs"};var l=n(85893);const r="table-of-contents__link toc-highlight",i="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,l.jsx)("div",{className:(0,o.Z)(s.tableOfContents,"thin-scrollbar",t),children:(0,l.jsx)(a.Z,{...n,linkClassName:r,linkActiveClassName:i})})}},53035:(e,t,n)=>{n.d(t,{Z:()=>r});n(67294);var o=n(86010),a=n(83699);const s={tag:"tag_d0Lz",tagRegular:"tagRegular_bmnp",tagWithCount:"tagWithCount_vddX"};var l=n(85893);function r(e){let{permalink:t,label:n,count:r}=e;return(0,l.jsxs)(a.Z,{href:t,className:(0,o.Z)(s.tag,r?s.tagWithCount:s.tagRegular),children:[n,r&&(0,l.jsx)("span",{children:r})]})}}}]);