"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[1117],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(n),f=a,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||s;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var i=2;i<s;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},35612:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),o=["components"],l={},c="select  insert",i={unversionedId:"backend/database/mysql/base/insert_select",id:"backend/database/mysql/base/insert_select",title:"select  insert",description:"* .INSERT INTO SELECT\u8bed\u53e5",source:"@site/docs/backend/database/mysql/base/insert_select.md",sourceDirName:"backend/database/mysql/base",slug:"/backend/database/mysql/base/insert_select",permalink:"/docs/backend/database/mysql/base/insert_select",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u7840",permalink:"/docs/backend/database/mysql/base/"},next:{title:"\u57fa\u7840\u8bed\u6cd5",permalink:"/docs/backend/database/mysql/base/mysql_base"}},u={},p=[],m={toc:p},f="wrapper";function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)(f,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"select--insert"},"select  insert"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},".INSERT INTO SELECT\u8bed\u53e5\n\u8bed\u53e5\u5f62\u5f0f\u4e3a\uff1aInsert into Table2(field1,field2,\u2026) select value1,value2,\u2026 from Table1 ","[where column =value][]","\u4e3a\u53ef\u9009\u5185\u5bb9\u8981\u6c42\u76ee\u6807\u8868Table2\u5fc5\u987b\u5728\u7531\u4e8e\u76ee\u6807\u8868Table2\u5df2\u7ecf\u5b58\u5728\uff0c\u6240\u4ee5\u6211\u4eec\u9664\u4e86\u63d2\u5165\u6e90\u8868Table1\u7684\u5b57\u6bb5\u5916\uff0c\u8fd8\u53ef\u4ee5\u63d2\u5165\u5e38\u91cf")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"insert into user2 (name,sex)\nselect name,1 from user1 where id=1\n#\u8fd9\u91cc1\u4e3a\u5e38\u91cf\nInsert into user2 select * from user1\n#\u5168\u5b57\u6bb5\n\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u4ece\u4e00\u4e2a\u6570\u636e\u5e93\u5230\u53e6\u4e00\u4e2a\u6570\u636e\u5e93\n\u8bed\u53e5\u5f62\u5f0f\u4e3a\uff1ainsert into \u6570\u636e\u5e93\u540d.\u6846\u67b6\u540d.\u8868\u540d(\u5217\u540d) select (\u5217\u540d) from \u6570\u636e\u5e93\u540d.\u6846\u67b6\u540d.\u8868\u540d where \u6761\u4ef6")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"insert into test.user2 (name,sex)\nselect name,1 from wb.user1 where id=1\n")),(0,s.kt)("p",null,"insert into select\u8bed\u53e5\u5728\u6570\u636e\u91cf\u8f83\u5927\u65f6\u53ef\u80fd\u4f1a\u9501\u8868\uff0c\u5982\u679c\u662f\u7ebf\u4e0a\u8bf7\u8c28\u614e\u4f7f\u7528\uff0c\u6216\u8005\u4f7f\u7528\u7d22\u5f15\u6765\u907f\u514d\u5168\u8868\u626b\u63cf\uff0c\u4ece\u800c\u907f\u514d\u9501\u8868\u3002\n\u793a\u4f8bsql"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO order_record SELECT\n*\nFROM\norder_today FORCEINDEX(idx_pay_suc_time)\nWHERE\npay_success_time <='2020-03-08 00:00:00'\n")))}d.isMDXComponent=!0}}]);