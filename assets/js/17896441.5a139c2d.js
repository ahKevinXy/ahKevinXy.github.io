"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[27918],{94850:(e,t,a)=>{a.d(t,{Z:()=>c});a(67294);var s=a(97325),n=a(23702),i=a(83699),l=a(36905);const o={iconEdit:"iconEdit_Z9Sw"};var r=a(85893);function d(e){let{className:t,...a}=e;return(0,r.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(o.iconEdit,t),"aria-hidden":"true",...a,children:(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function c(e){let{editUrl:t}=e;return(0,r.jsxs)(i.Z,{to:t,className:n.k.common.editThisPage,children:[(0,r.jsx)(d,{}),(0,r.jsx)(s.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}},23672:(e,t,a)=>{a.d(t,{Z:()=>l});a(67294);var s=a(36905),n=a(83699),i=a(85893);function l(e){const{permalink:t,title:a,subLabel:l,isNext:o}=e;return(0,i.jsxs)(n.Z,{className:(0,s.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,i.jsx)("div",{className:"pagination-nav__label",children:a})]})}},53852:(e,t,a)=>{a.d(t,{Z:()=>o});a(67294);var s=a(36905),n=a(83699);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=a(85893);function o(e){let{permalink:t,label:a,count:o}=e;return(0,l.jsxs)(n.Z,{href:t,className:(0,s.Z)(i.tag,o?i.tagWithCount:i.tagRegular),children:[a,o&&(0,l.jsx)("span",{children:o})]})}},74597:(e,t,a)=>{a.d(t,{Z:()=>r});a(67294);var s=a(36905),n=a(97325),i=a(53852);const l={tags:"tags_jXut",tag:"tag_QGVx"};var o=a(85893);function r(e){let{tags:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,s.Z)(l.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:a}=e;return(0,o.jsx)("li",{className:l.tag,children:(0,o.jsx)(i.Z,{label:t,permalink:a})},a)}))})]})}},68178:(e,t,a)=>{a.d(t,{Z:()=>c});a(67294);var s=a(20107),n=a(9200),i=a(39962),l=a(10748),o=a(99861),r=a(85893);const d={id:"comments",mapping:"title",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",lang:"zh-CN",theme:"light",darkTheme:"dark"};function c(){const e=(0,s.L)(),{i18n:t}=(0,i.Z)(),a={...d,...e.giscus};if(!a.repo||!a.repoId||!a.categoryId)throw new Error("You must provide `repo`, `repoId`, and `categoryId` to `themeConfig.giscus`.");return a.theme="dark"===(0,n.I)().colorMode?a.darkTheme:a.theme,a.lang=t.currentLocale,(0,r.jsx)(l.Z,{fallback:(0,r.jsx)("div",{children:"Loading Comments..."}),children:()=>(0,r.jsx)(o.Z,{...a})})}},62672:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ue});var s=a(67294),n=a(35463),i=a(43768),l=a(85893);const o=s.createContext(null);function r(e){let{children:t,content:a}=e;const n=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return(0,l.jsx)(o.Provider,{value:n,children:t})}function d(){const e=(0,s.useContext)(o);if(null===e)throw new i.i6("DocProvider");return e}function c(){var e;const{metadata:t,frontMatter:a,assets:s}=d();return(0,l.jsx)(n.d,{title:t.title,description:t.description,keywords:a.keywords,image:null!=(e=s.image)?e:a.image})}var u=a(86010),h=a(13488),m=a(97325),p=a(23672);function b(e){const{previous:t,next:a}=e;return(0,l.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,m.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,l.jsx)(p.Z,{...t,subLabel:(0,l.jsx)(m.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),a&&(0,l.jsx)(p.Z,{...a,subLabel:(0,l.jsx)(m.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function x(){const{metadata:e}=d();return(0,l.jsx)(b,{previous:e.previous,next:e.next})}var v=a(36905),g=a(39962),j=a(83699),f=a(30868),Z=a(23702),_=a(86409),k=a(58801);const N={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return(0,l.jsx)(m.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:a.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return(0,l.jsx)(m.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:a.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function C(e){const t=N[e.versionMetadata.banner];return(0,l.jsx)(t,{...e})}function L(e){let{versionLabel:t,to:a,onClick:s}=e;return(0,l.jsx)(m.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,l.jsx)("b",{children:(0,l.jsx)(j.Z,{to:a,onClick:s,children:(0,l.jsx)(m.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function T(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:s}}=(0,g.Z)(),{pluginId:n}=(0,f.gA)({failfast:!0}),{savePreferredVersionName:i}=(0,_.J)(n),{latestDocSuggestion:o,latestVersionSuggestion:r}=(0,f.Jo)(n),d=null!=o?o:(c=r).docs.find((e=>e.id===c.mainDocId));var c;return(0,l.jsxs)("div",{className:(0,v.Z)(t,Z.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,l.jsx)("div",{children:(0,l.jsx)(C,{siteTitle:s,versionMetadata:a})}),(0,l.jsx)("div",{className:"margin-top--md",children:(0,l.jsx)(L,{versionLabel:r.label,to:d.path,onClick:()=>i(r.name)})})]})}function U(e){let{className:t}=e;const a=(0,k.E)();return a.banner?(0,l.jsx)(T,{className:t,versionMetadata:a}):null}function w(e){let{className:t}=e;const a=(0,k.E)();return a.badge?(0,l.jsx)("span",{className:(0,v.Z)(t,Z.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(m.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label},children:"Version: {versionLabel}"})}):null}function y(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return(0,l.jsx)(m.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:a})})},children:" on {date}"})}function M(e){let{lastUpdatedBy:t}=e;return(0,l.jsx)(m.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:t})},children:" by {user}"})}function A(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:s}=e;return(0,l.jsxs)("span",{className:Z.k.common.lastUpdated,children:[(0,l.jsx)(m.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?(0,l.jsx)(y,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:s?(0,l.jsx)(M,{lastUpdatedBy:s}):""},children:"Last updated{atDate}{byUser}"}),!1]})}var I=a(94850),B=a(74597);const E={lastUpdated:"lastUpdated_VsjB"};function H(e){return(0,l.jsx)("div",{className:(0,u.Z)(Z.k.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(B.Z,{...e})})})}function V(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:s,formattedLastUpdatedAt:n}=e;return(0,l.jsxs)("div",{className:(0,u.Z)(Z.k.docs.docFooterEditMetaRow,"row"),children:[(0,l.jsx)("div",{className:"col",children:t&&(0,l.jsx)(I.Z,{editUrl:t})}),(0,l.jsx)("div",{className:(0,u.Z)("col",E.lastUpdated),children:(a||s)&&(0,l.jsx)(A,{lastUpdatedAt:a,formattedLastUpdatedAt:n,lastUpdatedBy:s})})]})}function P(){const{metadata:e}=d(),{editUrl:t,lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:n,tags:i}=e,o=i.length>0,r=!!(t||a||n);return o||r?(0,l.jsxs)("footer",{className:(0,u.Z)(Z.k.docs.docFooter,"docusaurus-mt-lg"),children:[o&&(0,l.jsx)(H,{tags:i}),r&&(0,l.jsx)(V,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:n,formattedLastUpdatedAt:s})]}):null}var R=a(54639),S=a(2728);const D={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function z(e){let{collapsed:t,...a}=e;return(0,l.jsx)("button",{type:"button",...a,className:(0,v.Z)("clean-btn",D.tocCollapsibleButton,!t&&D.tocCollapsibleButtonExpanded,a.className),children:(0,l.jsx)(m.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const F={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function O(e){let{toc:t,className:a,minHeadingLevel:s,maxHeadingLevel:n}=e;const{collapsed:i,toggleCollapsed:o}=(0,R.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,v.Z)(F.tocCollapsible,!i&&F.tocCollapsibleExpanded,a),children:[(0,l.jsx)(z,{collapsed:i,onClick:o}),(0,l.jsx)(R.z,{lazy:!0,className:F.tocCollapsibleContent,collapsed:i,children:(0,l.jsx)(S.Z,{toc:t,minHeadingLevel:s,maxHeadingLevel:n})})]})}const G={tocMobile:"tocMobile_bxCs"};function J(){const{toc:e,frontMatter:t}=d();return(0,l.jsx)(O,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.Z)(Z.k.docs.docTocMobile,G.tocMobile)})}var W=a(87086);function q(){const{toc:e,frontMatter:t}=d();return(0,l.jsx)(W.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:Z.k.docs.docTocDesktop})}var Y=a(13899),Q=a(30335);function X(e){let{children:t}=e;const a=function(){const{metadata:e,frontMatter:t,contentTitle:a}=d();return t.hide_title||void 0!==a?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.Z)(Z.k.docs.docMarkdown,"markdown"),children:[a&&(0,l.jsx)("header",{children:(0,l.jsx)(Y.Z,{as:"h1",children:a})}),(0,l.jsx)(Q.Z,{children:t})]})}var K=a(78259),$=a(69003),ee=a(79524);function te(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const ae={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function se(){const e=(0,ee.Z)("/");return(0,l.jsx)("li",{className:"breadcrumbs__item",children:(0,l.jsx)(j.Z,{"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,l.jsx)(te,{className:ae.breadcrumbHomeIcon})})})}const ne={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function ie(e){let{children:t,href:a,isLast:s}=e;const n="breadcrumbs__link";return s?(0,l.jsx)("span",{className:n,itemProp:"name",children:t}):a?(0,l.jsx)(j.Z,{className:n,href:a,itemProp:"item",children:(0,l.jsx)("span",{itemProp:"name",children:t})}):(0,l.jsx)("span",{className:n,children:t})}function le(e){let{children:t,active:a,index:s,addMicrodata:n}=e;return(0,l.jsxs)("li",{...n&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,v.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a}),children:[t,(0,l.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function oe(){const e=(0,K.s1)(),t=(0,$.Ns)();return e?(0,l.jsx)("nav",{className:(0,v.Z)(Z.k.docs.docBreadcrumbs,ne.breadcrumbsContainer),"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,l.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,l.jsx)(se,{}),e.map(((t,a)=>{const s=a===e.length-1,n="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,l.jsx)(le,{active:s,index:a,addMicrodata:!!n,children:(0,l.jsx)(ie,{href:n,isLast:s,children:t.label})},a)}))]})}):null}const re={docItemContainer:"docItemContainer_c0TR",docItemCol:"docItemCol_z5aJ"};var de=a(68178);function ce(e){let{children:t}=e;const a=function(){const{frontMatter:e,toc:t}=d(),a=(0,h.i)(),s=e.hide_table_of_contents,n=!s&&t.length>0;return{hidden:s,mobile:n?(0,l.jsx)(J,{}):void 0,desktop:!n||"desktop"!==a&&"ssr"!==a?void 0:(0,l.jsx)(q,{})}}();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.Z)("col",!a.hidden&&re.docItemCol),children:[(0,l.jsx)(U,{}),(0,l.jsxs)("div",{className:re.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(oe,{}),(0,l.jsx)(w,{}),a.mobile,(0,l.jsx)(X,{children:t}),(0,l.jsx)(de.Z,{}),(0,l.jsx)(P,{})]}),(0,l.jsx)(x,{})]})]}),a.desktop&&(0,l.jsx)("div",{className:"col col--3",children:a.desktop})]})}function ue(e){const t="docs-doc-id-"+e.content.metadata.unversionedId,a=e.content;return(0,l.jsx)(r,{content:e.content,children:(0,l.jsxs)(n.FG,{className:t,children:[(0,l.jsx)(c,{}),(0,l.jsx)(ce,{children:(0,l.jsx)(a,{})})]})})}},88263:(e,t,a)=>{a.d(t,{Z:()=>n});var s=a(67294);const n={React:s,...s}}}]);