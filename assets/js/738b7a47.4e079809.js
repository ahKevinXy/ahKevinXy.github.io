"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[55318],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):g(g({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,d=p["".concat(c,".").concat(m)]||p[m]||s[m]||i;return n?a.createElement(d,g(g({ref:t},u),{},{components:n})):a.createElement(d,g({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,g=new Array(i);g[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,g[1]=o;for(var l=2;l<i;l++)g[l]=n[l];return a.createElement.apply(null,g)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3297:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),g=["components"],o={},c="git tags \u64cd\u4f5c",l={unversionedId:"backend/git/tags",id:"backend/git/tags",title:"git tags \u64cd\u4f5c",description:"\u67e5\u770b\u672c\u5730tag",source:"@site/docs/backend/git/tags.md",sourceDirName:"backend/git",slug:"/backend/git/tags",permalink:"/docs/backend/git/tags",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5",permalink:"/docs/backend/git/install"},next:{title:"git \u63d0\u5347",permalink:"/docs/backend/git/up"}},u={},s=[{value:"\u67e5\u770b\u672c\u5730tag",id:"\u67e5\u770b\u672c\u5730tag",level:2},{value:"\u67e5\u770b\u8fdc\u7a0b tag",id:"\u67e5\u770b\u8fdc\u7a0b-tag",level:2},{value:"\u521b\u5efatag",id:"\u521b\u5efatag",level:2},{value:"\u63a8\u9001\u5230\u8fdc\u7a0b",id:"\u63a8\u9001\u5230\u8fdc\u7a0b",level:2},{value:"\u5220\u9664 tag",id:"\u5220\u9664-tag",level:2},{value:"\u91cd\u547d\u540dtag",id:"\u91cd\u547d\u540dtag",level:2},{value:"push\u65b0tag\u5230\u8fdc\u7a0b",id:"push\u65b0tag\u5230\u8fdc\u7a0b",level:2}],p={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,g);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"git-tags-\u64cd\u4f5c"},"git tags \u64cd\u4f5c"),(0,i.kt)("h2",{id:"\u67e5\u770b\u672c\u5730tag"},"\u67e5\u770b\u672c\u5730tag"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git tag \n")),(0,i.kt)("h2",{id:"\u67e5\u770b\u8fdc\u7a0b-tag"},"\u67e5\u770b\u8fdc\u7a0b tag"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git ls -remote --tags origin\n")),(0,i.kt)("h2",{id:"\u521b\u5efatag"},"\u521b\u5efatag"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'git tag -a -m"comments" <tagname> # \u57fa\u4e8e\u672c\u5730\u4ee3\u7801\ngit tag -a -m"comments" <tagname> <commit> # \u57fa\u4e8e\u6307\u5b9acommit\n\ngit tag -a -m "comments" <tagname> <oldtag> # \u57fa\u4e8e\u5df2\u7ecf\u5b58\u5728\u7684tag\n\n')),(0,i.kt)("h2",{id:"\u63a8\u9001\u5230\u8fdc\u7a0b"},"\u63a8\u9001\u5230\u8fdc\u7a0b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git push -u origin <tagname>\n\ngit push -u origin refs/tags/tagname> # \u5982\u679c\u5b58\u5728\u4e0etag\u540c\u540d\u7684branch\n\n\n")),(0,i.kt)("h2",{id:"\u5220\u9664-tag"},"\u5220\u9664 tag"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5220\u9664\u672c\u5730\ngit tag -d <tagname>\n\n# \u5220\u9664\u8fdc\u7a0btag\ngit push -u origin :refs/tags/<tagname>\n\n")),(0,i.kt)("h2",{id:"\u91cd\u547d\u540dtag"},"\u91cd\u547d\u540dtag"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git tag <newtag> <oldtag>\n\n")),(0,i.kt)("h2",{id:"push\u65b0tag\u5230\u8fdc\u7a0b"},"push\u65b0tag\u5230\u8fdc\u7a0b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git push -u origin <newtag>\n# or\ngit push -u origin --tags # push\u6240\u6709\u7684\u672c\u5730tag\u5230\u8fdc\u7a0b\n# or\ngit push -u origin refs/tags/Nnewtag> # \u5982\u679c\u5b58\u5728\u4e0e\u672c\u5730tag\u540c\u540d\u7684branch\n\n")))}m.isMDXComponent=!0}}]);