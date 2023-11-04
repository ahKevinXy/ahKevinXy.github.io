"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[95300],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),o=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=o(n),m=l,k=s["".concat(u,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[s]="string"==typeof e?e:l,i[1]=p;for(var o=2;o<a;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57477:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>o});var r=n(87462),l=(n(67294),n(3905));const a={},i="\u57fa\u7840",p={unversionedId:"front/ts/base",id:"front/ts/base",title:"\u57fa\u7840",description:"\u5b89\u88c5",source:"@site/docs/front/ts/base.md",sourceDirName:"front/ts",slug:"/front/ts/base",permalink:"/docs/front/ts/base",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TS",permalink:"/docs/front/ts/"},next:{title:"\u5b98\u65b9\u6587\u6863",permalink:"/docs/front/ts/official"}},u={},o=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u7f16\u8bd1\u4ee3\u7801",id:"\u7f16\u8bd1\u4ee3\u7801",level:2},{value:"\u57fa\u7840\u7c7b\u578b",id:"\u57fa\u7840\u7c7b\u578b",level:2},{value:"\u5e03\u5c14\u503c",id:"\u5e03\u5c14\u503c",level:3},{value:"\u6570\u5b57",id:"\u6570\u5b57",level:3},{value:"\u5b57\u7b26\u4e32",id:"\u5b57\u7b26\u4e32",level:3},{value:"\u6570\u7ec4",id:"\u6570\u7ec4",level:3},{value:"\u5143\u7ec4 Tuple",id:"\u5143\u7ec4-tuple",level:3},{value:"\u679a\u4e3e",id:"\u679a\u4e3e",level:3},{value:"Any",id:"any",level:3},{value:"Void",id:"void",level:3},{value:"Null \u548c Undefined",id:"null-\u548c-undefined",level:3},{value:"Never",id:"never",level:3},{value:"Object",id:"object",level:3},{value:"\u7c7b\u578b\u65ad\u8a00",id:"\u7c7b\u578b\u65ad\u8a00",level:3},{value:"\u5173\u4e8elet",id:"\u5173\u4e8elet",level:3},{value:"\u53d8\u91cf\u58f0\u660e",id:"\u53d8\u91cf\u58f0\u660e",level:2},{value:"var \u58f0\u660e",id:"var-\u58f0\u660e",level:3},{value:"\u4f5c\u7528\u57df\u89c4\u5219",id:"\u4f5c\u7528\u57df\u89c4\u5219",level:3},{value:"\u63a5\u53e3",id:"\u63a5\u53e3",level:2},{value:"\u53ef\u9009\u5c5e\u6027",id:"\u53ef\u9009\u5c5e\u6027",level:3},{value:"\u53ea\u8bfb\u5c5e\u6027",id:"\u53ea\u8bfb\u5c5e\u6027",level:3},{value:"\u989d\u5916\u7684\u5c5e\u6027\u68c0\u67e5",id:"\u989d\u5916\u7684\u5c5e\u6027\u68c0\u67e5",level:3},{value:"\u51fd\u6570\u7c7b\u578b",id:"\u51fd\u6570\u7c7b\u578b",level:3},{value:"\u53ef\u7d22\u5f15\u7684\u7c7b\u578b",id:"\u53ef\u7d22\u5f15\u7684\u7c7b\u578b",level:3},{value:"\u7c7b\u7c7b\u578b",id:"\u7c7b\u7c7b\u578b",level:3},{value:"\u5b9e\u73b0\u63a5\u53e3",id:"\u5b9e\u73b0\u63a5\u53e3",level:4},{value:"\u7c7b\u9759\u6001\u90e8\u5206\u4e0e\u5b9e\u4f8b\u90e8\u5206\u7684\u533a\u522b",id:"\u7c7b\u9759\u6001\u90e8\u5206\u4e0e\u5b9e\u4f8b\u90e8\u5206\u7684\u533a\u522b",level:4},{value:"\u7ee7\u627f\u63a5\u53e3",id:"\u7ee7\u627f\u63a5\u53e3",level:3},{value:"\u6df7\u5408\u7c7b\u578b",id:"\u6df7\u5408\u7c7b\u578b",level:3},{value:"\u63a5\u53e3\u7ee7\u627f\u7c7b",id:"\u63a5\u53e3\u7ee7\u627f\u7c7b",level:3}],c={toc:o},s="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u57fa\u7840"},"\u57fa\u7840"),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g typescript\n")),(0,l.kt)("h2",{id:"\u7f16\u8bd1\u4ee3\u7801"},"\u7f16\u8bd1\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"tsc xxx.ts\n")),(0,l.kt)("h2",{id:"\u57fa\u7840\u7c7b\u578b"},"\u57fa\u7840\u7c7b\u578b"),(0,l.kt)("p",null,"\u4e3a\u4e86\u8ba9\u7a0b\u5e8f\u6709\u4ef7\u503c\uff0c\u6211\u4eec\u9700\u8981\u80fd\u591f\u5904\u7406\u6700\u7b80\u5355\u7684\u6570\u636e\u5355\u5143\uff1a\u6570\u5b57\uff0c\u5b57\u7b26\u4e32\uff0c\u7ed3\u6784\u4f53\uff0c\u5e03\u5c14\u503c\u7b49\u3002 TypeScript\u652f\u6301\u4e0eJavaScript\u51e0\u4e4e\u76f8\u540c\u7684\u6570\u636e\u7c7b\u578b\uff0c\u6b64\u5916\u8fd8\u63d0\u4f9b\u4e86\u5b9e\u7528\u7684\u679a\u4e3e\u7c7b\u578b\u65b9\u4fbf\u6211\u4eec\u4f7f\u7528\u3002"),(0,l.kt)("h3",{id:"\u5e03\u5c14\u503c"},"\u5e03\u5c14\u503c"),(0,l.kt)("p",null,"\u6700\u57fa\u672c\u7684\u6570\u636e\u7c7b\u578b\u5c31\u662f\u7b80\u5355\u7684true/false\u503c\uff0c\u5728JavaScript\u548cTypeScript\u91cc\u53eb\u505aboolean\uff08\u5176\u5b83\u8bed\u8a00\u4e2d\u4e5f\u4e00\u6837\uff09\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"let isDone: boolean = false;\n")),(0,l.kt)("h3",{id:"\u6570\u5b57"},"\u6570\u5b57"),(0,l.kt)("p",null,"\u548cJavaScript\u4e00\u6837\uff0cTypeScript\u91cc\u7684\u6240\u6709\u6570\u5b57\u90fd\u662f\u6d6e\u70b9\u6570\u3002 \u8fd9\u4e9b\u6d6e\u70b9\u6570\u7684\u7c7b\u578b\u662f number\u3002 \u9664\u4e86\u652f\u6301\u5341\u8fdb\u5236\u548c\u5341\u516d\u8fdb\u5236\u5b57\u9762\u91cf\uff0cTypeScript\u8fd8\u652f\u6301ECMAScript 2015\u4e2d\u5f15\u5165\u7684\u4e8c\u8fdb\u5236\u548c\u516b\u8fdb\u5236\u5b57\u9762\u91cf\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"let decLiteral: number = 6;\nlet hexLiteral: number = 0xf00d;\nlet binaryLiteral: number = 0b1010;\nlet octalLiteral: number = 0o744;\n")),(0,l.kt)("h3",{id:"\u5b57\u7b26\u4e32"},"\u5b57\u7b26\u4e32"),(0,l.kt)("p",null,"JavaScript\u7a0b\u5e8f\u7684\u53e6\u4e00\u9879\u57fa\u672c\u64cd\u4f5c\u662f\u5904\u7406\u7f51\u9875\u6216\u670d\u52a1\u5668\u7aef\u7684\u6587\u672c\u6570\u636e\u3002 \u50cf\u5176\u5b83\u8bed\u8a00\u91cc\u4e00\u6837\uff0c\u6211\u4eec\u4f7f\u7528 string\u8868\u793a\u6587\u672c\u6570\u636e\u7c7b\u578b\u3002 \u548cJavaScript\u4e00\u6837\uff0c\u53ef\u4ee5\u4f7f\u7528\u53cc\u5f15\u53f7\uff08 \"\uff09\u6216\u5355\u5f15\u53f7\uff08'\uff09\u8868\u793a\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'let name: string = "bob";\nname = "smith";\n')),(0,l.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528\u6a21\u7248\u5b57\u7b26\u4e32\uff0c\u5b83\u53ef\u4ee5\u5b9a\u4e49\u591a\u884c\u6587\u672c\u548c\u5185\u5d4c\u8868\u8fbe\u5f0f\u3002 \u8fd9\u79cd\u5b57\u7b26\u4e32\u662f\u88ab\u53cd\u5f15\u53f7\u5305\u56f4\uff08 `\uff09\uff0c\u5e76\u4e14\u4ee5${ expr }\u8fd9\u79cd\u5f62\u5f0f\u5d4c\u5165\u8868\u8fbe\u5f0f"),(0,l.kt)("h3",{id:"\u6570\u7ec4"},"\u6570\u7ec4"),(0,l.kt)("p",null,"TypeScript\u50cfJavaScript\u4e00\u6837\u53ef\u4ee5\u64cd\u4f5c\u6570\u7ec4\u5143\u7d20\u3002 \u6709\u4e24\u79cd\u65b9\u5f0f\u53ef\u4ee5\u5b9a\u4e49\u6570\u7ec4\u3002 \u7b2c\u4e00\u79cd\uff0c\u53ef\u4ee5\u5728\u5143\u7d20\u7c7b\u578b\u540e\u9762\u63a5\u4e0a []\uff0c\u8868\u793a\u7531\u6b64\u7c7b\u578b\u5143\u7d20\u7ec4\u6210\u7684\u4e00\u4e2a\u6570\u7ec4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"let list: number[] = [1, 2, 3];\n")),(0,l.kt)("p",null,"\u7b2c\u4e8c\u79cd\u65b9\u5f0f\u662f\u4f7f\u7528\u6570\u7ec4\u6cdb\u578b\uff0cArray<\u5143\u7d20\u7c7b\u578b>\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"let list: Array<number> = [1, 2, 3];\n")),(0,l.kt)("h3",{id:"\u5143\u7ec4-tuple"},"\u5143\u7ec4 Tuple"),(0,l.kt)("p",null,"\u5143\u7ec4\u7c7b\u578b\u5141\u8bb8\u8868\u793a\u4e00\u4e2a\u5df2\u77e5\u5143\u7d20\u6570\u91cf\u548c\u7c7b\u578b\u7684\u6570\u7ec4\uff0c\u5404\u5143\u7d20\u7684\u7c7b\u578b\u4e0d\u5fc5\u76f8\u540c\u3002 \u6bd4\u5982\uff0c\u4f60\u53ef\u4ee5\u5b9a\u4e49\u4e00\u5bf9\u503c\u5206\u522b\u4e3a string\u548cnumber\u7c7b\u578b\u7684\u5143\u7ec4\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// Declare a tuple type\nlet x: [string, number];\n// Initialize it\nx = ['hello', 10]; // OK\n// Initialize it incorrectly\nx = [10, 'hello']; // Error\n")),(0,l.kt)("p",null,"\u5f53\u8bbf\u95ee\u4e00\u4e2a\u8d8a\u754c\u7684\u5143\u7d20\uff0c\u4f1a\u4f7f\u7528\u8054\u5408\u7c7b\u578b\u66ff\u4ee3\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"x[3] = 'world'; // OK, \u5b57\u7b26\u4e32\u53ef\u4ee5\u8d4b\u503c\u7ed9(string | number)\u7c7b\u578b\n\nconsole.log(x[5].toString()); // OK, 'string' \u548c 'number' \u90fd\u6709 toString\n\nx[6] = true; // Error, \u5e03\u5c14\u4e0d\u662f(string | number)\u7c7b\u578b\n")),(0,l.kt)("h3",{id:"\u679a\u4e3e"},"\u679a\u4e3e"),(0,l.kt)("p",null,"enum\u7c7b\u578b\u662f\u5bf9JavaScript\u6807\u51c6\u6570\u636e\u7c7b\u578b\u7684\u4e00\u4e2a\u8865\u5145\u3002 \u50cfC#\u7b49\u5176\u5b83\u8bed\u8a00\u4e00\u6837\uff0c\u4f7f\u7528\u679a\u4e3e\u7c7b\u578b\u53ef\u4ee5\u4e3a\u4e00\u7ec4\u6570\u503c\u8d4b\u4e88\u53cb\u597d\u7684\u540d\u5b57\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"enum Color {Red, Green, Blue}\nlet c: Color = Color.Green;\n")),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4ece0\u5f00\u59cb\u4e3a\u5143\u7d20\u7f16\u53f7\u3002 \u4f60\u4e5f\u53ef\u4ee5\u624b\u52a8\u7684\u6307\u5b9a\u6210\u5458\u7684\u6570\u503c\u3002 \u4f8b\u5982\uff0c\u6211\u4eec\u5c06\u4e0a\u9762\u7684\u4f8b\u5b50\u6539\u6210\u4ece 1\u5f00\u59cb\u7f16\u53f7\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"enum Color {Red = 1, Green, Blue}\nlet c: Color = Color.Green;\n\nenum Color {Red = 1, Green = 2, Blue = 4}\nlet c: Color = Color.Green;\n")),(0,l.kt)("h3",{id:"any"},"Any"),(0,l.kt)("p",null,"\u6709\u65f6\u5019\uff0c\u6211\u4eec\u4f1a\u60f3\u8981\u4e3a\u90a3\u4e9b\u5728\u7f16\u7a0b\u9636\u6bb5\u8fd8\u4e0d\u6e05\u695a\u7c7b\u578b\u7684\u53d8\u91cf\u6307\u5b9a\u4e00\u4e2a\u7c7b\u578b\u3002 \u8fd9\u4e9b\u503c\u53ef\u80fd\u6765\u81ea\u4e8e\u52a8\u6001\u7684\u5185\u5bb9\uff0c\u6bd4\u5982\u6765\u81ea\u7528\u6237\u8f93\u5165\u6216\u7b2c\u4e09\u65b9\u4ee3\u7801\u5e93\u3002 \u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u4e0d\u5e0c\u671b\u7c7b\u578b\u68c0\u67e5\u5668\u5bf9\u8fd9\u4e9b\u503c\u8fdb\u884c\u68c0\u67e5\u800c\u662f\u76f4\u63a5\u8ba9\u5b83\u4eec\u901a\u8fc7\u7f16\u8bd1\u9636\u6bb5\u7684\u68c0\u67e5\u3002 \u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 any\u7c7b\u578b\u6765\u6807\u8bb0\u8fd9\u4e9b\u53d8\u91cf\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'let notSure: any = 4;\nnotSure = "maybe a string instead";\nnotSure = false; // okay, definitely a boolean\n')),(0,l.kt)("h3",{id:"void"},"Void"),(0,l.kt)("p",null,"\u67d0\u79cd\u7a0b\u5ea6\u4e0a\u6765\u8bf4\uff0cvoid\u7c7b\u578b\u50cf\u662f\u4e0eany\u7c7b\u578b\u76f8\u53cd\uff0c\u5b83\u8868\u793a\u6ca1\u6709\u4efb\u4f55\u7c7b\u578b\u3002 \u5f53\u4e00\u4e2a\u51fd\u6570\u6ca1\u6709\u8fd4\u56de\u503c\u65f6\uff0c\u4f60\u901a\u5e38\u4f1a\u89c1\u5230\u5176\u8fd4\u56de\u503c\u7c7b\u578b\u662f void\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'function warnUser(): void {\n    console.log("This is my warning message");\n}\n')),(0,l.kt)("h3",{id:"null-\u548c-undefined"},"Null \u548c Undefined"),(0,l.kt)("p",null,"TypeScript\u91cc\uff0cundefined\u548cnull\u4e24\u8005\u5404\u81ea\u6709\u81ea\u5df1\u7684\u7c7b\u578b\u5206\u522b\u53eb\u505aundefined\u548cnull\u3002 \u548c void\u76f8\u4f3c\uff0c\u5b83\u4eec\u7684\u672c\u8eab\u7684\u7c7b\u578b\u7528\u5904\u4e0d\u662f\u5f88\u5927\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// Not much else we can assign to these variables!\nlet u: undefined = undefined;\nlet n: null = null;\n")),(0,l.kt)("h3",{id:"never"},"Never"),(0,l.kt)("p",null,"never\u7c7b\u578b\u8868\u793a\u7684\u662f\u90a3\u4e9b\u6c38\u4e0d\u5b58\u5728\u7684\u503c\u7684\u7c7b\u578b\u3002 \u4f8b\u5982\uff0c never\u7c7b\u578b\u662f\u90a3\u4e9b\u603b\u662f\u4f1a\u629b\u51fa\u5f02\u5e38\u6216\u6839\u672c\u5c31\u4e0d\u4f1a\u6709\u8fd4\u56de\u503c\u7684\u51fd\u6570\u8868\u8fbe\u5f0f\u6216\u7bad\u5934\u51fd\u6570\u8868\u8fbe\u5f0f\u7684\u8fd4\u56de\u503c\u7c7b\u578b\uff1b \u53d8\u91cf\u4e5f\u53ef\u80fd\u662f never\u7c7b\u578b\uff0c\u5f53\u5b83\u4eec\u88ab\u6c38\u4e0d\u4e3a\u771f\u7684\u7c7b\u578b\u4fdd\u62a4\u6240\u7ea6\u675f\u65f6\u3002"),(0,l.kt)("h3",{id:"object"},"Object"),(0,l.kt)("p",null,"object\u8868\u793a\u975e\u539f\u59cb\u7c7b\u578b\uff0c\u4e5f\u5c31\u662f\u9664number\uff0cstring\uff0cboolean\uff0csymbol\uff0cnull\u6216undefined\u4e4b\u5916\u7684\u7c7b\u578b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'declare function create(o: object | null): void;\n\ncreate({ prop: 0 }); // OK\ncreate(null); // OK\n\ncreate(42); // Error\ncreate("string"); // Error\ncreate(false); // Error\ncreate(undefined); // Error\n')),(0,l.kt)("h3",{id:"\u7c7b\u578b\u65ad\u8a00"},"\u7c7b\u578b\u65ad\u8a00"),(0,l.kt)("p",null,"\u6709\u65f6\u5019\u4f60\u4f1a\u9047\u5230\u8fd9\u6837\u7684\u60c5\u51b5\uff0c\u4f60\u4f1a\u6bd4TypeScript\u66f4\u4e86\u89e3\u67d0\u4e2a\u503c\u7684\u8be6\u7ec6\u4fe1\u606f\u3002 \u901a\u5e38\u8fd9\u4f1a\u53d1\u751f\u5728\u4f60\u6e05\u695a\u5730\u77e5\u9053\u4e00\u4e2a\u5b9e\u4f53\u5177\u6709\u6bd4\u5b83\u73b0\u6709\u7c7b\u578b\u66f4\u786e\u5207\u7684\u7c7b\u578b\u3002"),(0,l.kt)("p",null,"\u901a\u8fc7\u7c7b\u578b\u65ad\u8a00\u8fd9\u79cd\u65b9\u5f0f\u53ef\u4ee5\u544a\u8bc9\u7f16\u8bd1\u5668\uff0c\u201c\u76f8\u4fe1\u6211\uff0c\u6211\u77e5\u9053\u81ea\u5df1\u5728\u5e72\u4ec0\u4e48\u201d\u3002 \u7c7b\u578b\u65ad\u8a00\u597d\u6bd4\u5176\u5b83\u8bed\u8a00\u91cc\u7684\u7c7b\u578b\u8f6c\u6362\uff0c\u4f46\u662f\u4e0d\u8fdb\u884c\u7279\u6b8a\u7684\u6570\u636e\u68c0\u67e5\u548c\u89e3\u6784\u3002 \u5b83\u6ca1\u6709\u8fd0\u884c\u65f6\u7684\u5f71\u54cd\uff0c\u53ea\u662f\u5728\u7f16\u8bd1\u9636\u6bb5\u8d77\u4f5c\u7528\u3002 TypeScript\u4f1a\u5047\u8bbe\u4f60\uff0c\u7a0b\u5e8f\u5458\uff0c\u5df2\u7ecf\u8fdb\u884c\u4e86\u5fc5\u987b\u7684\u68c0\u67e5\u3002"),(0,l.kt)("p",null,"\u7c7b\u578b\u65ad\u8a00\u6709\u4e24\u79cd\u5f62\u5f0f\u3002 \u5176\u4e00\u662f\u201c\u5c16\u62ec\u53f7\u201d\u8bed\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'let someValue: any = "this is a string";\n\nlet strLength: number = (<string>someValue).length;\n\n// \u53e6\u4e00\u4e2a\u4e3aas\u8bed\u6cd5\uff1a\nlet someValue: any = "this is a string";\n\nlet strLength: number = (someValue as string).length;\n\n')),(0,l.kt)("h3",{id:"\u5173\u4e8elet"},"\u5173\u4e8elet"),(0,l.kt)("p",null,"\u4f60\u53ef\u80fd\u5df2\u7ecf\u6ce8\u610f\u5230\u4e86\uff0c\u6211\u4eec\u4f7f\u7528let\u5173\u952e\u5b57\u6765\u4ee3\u66ff\u5927\u5bb6\u6240\u719f\u6089\u7684JavaScript\u5173\u952e\u5b57var\u3002 let\u5173\u952e\u5b57\u662fJavaScript\u7684\u4e00\u4e2a\u65b0\u6982\u5ff5\uff0cTypeScript\u5b9e\u73b0\u4e86\u5b83\u3002 \u6211\u4eec\u4f1a\u5728\u4ee5\u540e\u8be6\u7ec6\u4ecb\u7ecd\u5b83\uff0c\u5f88\u591a\u5e38\u89c1\u7684\u95ee\u9898\u90fd\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528 let\u6765\u89e3\u51b3\uff0c\u6240\u4ee5\u5c3d\u53ef\u80fd\u5730\u4f7f\u7528let\u6765\u4ee3\u66ffvar\u5427\u3002"),(0,l.kt)("h2",{id:"\u53d8\u91cf\u58f0\u660e"},"\u53d8\u91cf\u58f0\u660e"),(0,l.kt)("p",null,"let\u548cconst\u662fJavaScript\u91cc\u76f8\u5bf9\u8f83\u65b0\u7684\u53d8\u91cf\u58f0\u660e\u65b9\u5f0f\u3002 \u50cf\u6211\u4eec\u4e4b\u524d\u63d0\u5230\u8fc7\u7684\uff0c let\u5728\u5f88\u591a\u65b9\u9762\u4e0evar\u662f\u76f8\u4f3c\u7684\uff0c\u4f46\u662f\u53ef\u4ee5\u5e2e\u52a9\u5927\u5bb6\u907f\u514d\u5728JavaScript\u91cc\u5e38\u89c1\u4e00\u4e9b\u95ee\u9898\u3002 const\u662f\u5bf9let\u7684\u4e00\u4e2a\u589e\u5f3a\uff0c\u5b83\u80fd\u963b\u6b62\u5bf9\u4e00\u4e2a\u53d8\u91cf\u518d\u6b21\u8d4b\u503c\u3002"),(0,l.kt)("h3",{id:"var-\u58f0\u660e"},"var \u58f0\u660e"),(0,l.kt)("p",null,"\u4e00\u76f4\u4ee5\u6765\u6211\u4eec\u90fd\u662f\u901a\u8fc7var\u5173\u952e\u5b57\u5b9a\u4e49JavaScript\u53d8\u91cf\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'var a = 10;\n//\u6211\u4eec\u4e5f\u53ef\u4ee5\u5728\u51fd\u6570\u5185\u90e8\u5b9a\u4e49\u53d8\u91cf\uff1a\nfunction f() {\n    var message = "Hello, world!";\n\n    return message;\n}\n')),(0,l.kt)("h3",{id:"\u4f5c\u7528\u57df\u89c4\u5219"},"\u4f5c\u7528\u57df\u89c4\u5219"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u719f\u6089\u5176\u5b83\u8bed\u8a00\u7684\u4eba\u6765\u8bf4\uff0cvar\u58f0\u660e\u6709\u4e9b\u5947\u602a\u7684\u4f5c\u7528\u57df\u89c4\u5219\u3002 \u770b\u4e0b\u9762\u7684\u4f8b\u5b50\uff1a"),(0,l.kt)("p",null,"\u53d8\u91cf ",(0,l.kt)("inlineCode",{parentName:"p"},"x"),"\u662f\u5b9a\u4e49\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"*"),"if\u8bed\u53e5\u91cc\u9762",(0,l.kt)("inlineCode",{parentName:"p"},"*"),"\uff0c\u4f46\u662f\u6211\u4eec\u5374\u53ef\u4ee5\u5728\u8bed\u53e5\u7684\u5916\u9762\u8bbf\u95ee\u5b83\u3002 \u8fd9\u662f\u56e0\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"var"),"\u58f0\u660e\u53ef\u4ee5\u5728\u5305\u542b\u5b83\u7684\u51fd\u6570\uff0c\u6a21\u5757\uff0c\u547d\u540d\u7a7a\u95f4\u6216\u5168\u5c40\u4f5c\u7528\u57df\u5185\u90e8\u4efb\u4f55\u4f4d\u7f6e\u88ab\u8bbf\u95ee\uff08\u6211\u4eec\u540e\u9762\u4f1a\u8be6\u7ec6\u4ecb\u7ecd\uff09\uff0c\u5305\u542b\u5b83\u7684\u4ee3\u7801\u5757\u5bf9\u6b64\u6ca1\u6709\u4ec0\u4e48\u5f71\u54cd\u3002 \u6709\u4e9b\u4eba\u79f0\u6b64\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"*``var"),"\u4f5c\u7528\u57df\u6216\u51fd\u6570\u4f5c\u7528\u57df",(0,l.kt)("inlineCode",{parentName:"p"},"*"),"\u3002 \u51fd\u6570\u53c2\u6570\u4e5f\u4f7f\u7528\u51fd\u6570\u4f5c\u7528\u57df"),(0,l.kt)("h2",{id:"\u63a5\u53e3"},"\u63a5\u53e3"),(0,l.kt)("p",null,"TypeScript\u7684\u6838\u5fc3\u539f\u5219\u4e4b\u4e00\u662f\u5bf9\u503c\u6240\u5177\u6709\u7684\u7ed3\u6784\u8fdb\u884c\u7c7b\u578b\u68c0\u67e5\u3002 \u5b83\u6709\u65f6\u88ab\u79f0\u505a\u201c\u9e2d\u5f0f\u8fa8\u578b\u6cd5\u201d\u6216\u201c\u7ed3\u6784\u6027\u5b50\u7c7b\u578b\u5316\u201d\u3002 \u5728TypeScript\u91cc\uff0c\u63a5\u53e3\u7684\u4f5c\u7528\u5c31\u662f\u4e3a\u8fd9\u4e9b\u7c7b\u578b\u547d\u540d\u548c\u4e3a\u4f60\u7684\u4ee3\u7801\u6216\u7b2c\u4e09\u65b9\u4ee3\u7801\u5b9a\u4e49\u5951\u7ea6\u3002"),(0,l.kt)("p",null,"\u7c7b\u578b\u68c0\u67e5\u5668\u4f1a\u67e5\u770bprintLabel\u7684\u8c03\u7528\u3002 printLabel\u6709\u4e00\u4e2a\u53c2\u6570\uff0c\u5e76\u8981\u6c42\u8fd9\u4e2a\u5bf9\u8c61\u53c2\u6570\u6709\u4e00\u4e2a\u540d\u4e3alabel\u7c7b\u578b\u4e3astring\u7684\u5c5e\u6027\u3002 \u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u6211\u4eec\u4f20\u5165\u7684\u5bf9\u8c61\u53c2\u6570\u5b9e\u9645\u4e0a\u4f1a\u5305\u542b\u5f88\u591a\u5c5e\u6027\uff0c\u4f46\u662f\u7f16\u8bd1\u5668\u53ea\u4f1a\u68c0\u67e5\u90a3\u4e9b\u5fc5\u9700\u7684\u5c5e\u6027\u662f\u5426\u5b58\u5728\uff0c\u5e76\u4e14\u5176\u7c7b\u578b\u662f\u5426\u5339\u914d\u3002 \u7136\u800c\uff0c\u6709\u4e9b\u65f6\u5019TypeScript\u5374\u5e76\u4e0d\u4f1a\u8fd9\u4e48\u5bbd\u677e\uff0c\u6211\u4eec\u4e0b\u9762\u4f1a\u7a0d\u505a\u8bb2\u89e3\u3002"),(0,l.kt)("h3",{id:"\u53ef\u9009\u5c5e\u6027"},"\u53ef\u9009\u5c5e\u6027"),(0,l.kt)("p",null,"\u63a5\u53e3\u91cc\u7684\u5c5e\u6027\u4e0d\u5168\u90fd\u662f\u5fc5\u9700\u7684\u3002 \u6709\u4e9b\u662f\u53ea\u5728\u67d0\u4e9b\u6761\u4ef6\u4e0b\u5b58\u5728\uff0c\u6216\u8005\u6839\u672c\u4e0d\u5b58\u5728\u3002 \u53ef\u9009\u5c5e\u6027\u5728\u5e94\u7528\u201coption bags\u201d\u6a21\u5f0f\u65f6\u5f88\u5e38\u7528\uff0c\u5373\u7ed9\u51fd\u6570\u4f20\u5165\u7684\u53c2\u6570\u5bf9\u8c61\u4e2d\u53ea\u6709\u90e8\u5206\u5c5e\u6027\u8d4b\u503c\u4e86\u3002"),(0,l.kt)("h3",{id:"\u53ea\u8bfb\u5c5e\u6027"},"\u53ea\u8bfb\u5c5e\u6027"),(0,l.kt)("p",null,"\u4e00\u4e9b\u5bf9\u8c61\u5c5e\u6027\u53ea\u80fd\u5728\u5bf9\u8c61\u521a\u521a\u521b\u5efa\u7684\u65f6\u5019\u4fee\u6539\u5176\u503c\u3002 \u4f60\u53ef\u4ee5\u5728\u5c5e\u6027\u540d\u524d\u7528 readonly\u6765\u6307\u5b9a\u53ea\u8bfb\u5c5e\u6027:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Point {\n    readonly x: number;\n    readonly y: number;\n}\n")),(0,l.kt)("h3",{id:"\u989d\u5916\u7684\u5c5e\u6027\u68c0\u67e5"},"\u989d\u5916\u7684\u5c5e\u6027\u68c0\u67e5"),(0,l.kt)("p",null,"\u6211\u4eec\u5728\u7b2c\u4e00\u4e2a\u4f8b\u5b50\u91cc\u4f7f\u7528\u4e86\u63a5\u53e3\uff0cTypeScript\u8ba9\u6211\u4eec\u4f20\u5165{ size: number; label: string; }\u5230\u4ec5\u671f\u671b\u5f97\u5230{ label: string; }\u7684\u51fd\u6570\u91cc\u3002 \u6211\u4eec\u5df2\u7ecf\u5b66\u8fc7\u4e86\u53ef\u9009\u5c5e\u6027\uff0c\u5e76\u4e14\u77e5\u9053\u4ed6\u4eec\u5728\u201coption bags\u201d\u6a21\u5f0f\u91cc\u5f88\u6709\u7528\u3002"),(0,l.kt)("h3",{id:"\u51fd\u6570\u7c7b\u578b"},"\u51fd\u6570\u7c7b\u578b"),(0,l.kt)("p",null,"\u63a5\u53e3\u80fd\u591f\u63cf\u8ff0JavaScript\u4e2d\u5bf9\u8c61\u62e5\u6709\u7684\u5404\u79cd\u5404\u6837\u7684\u5916\u5f62\u3002 \u9664\u4e86\u63cf\u8ff0\u5e26\u6709\u5c5e\u6027\u7684\u666e\u901a\u5bf9\u8c61\u5916\uff0c\u63a5\u53e3\u4e5f\u53ef\u4ee5\u63cf\u8ff0\u51fd\u6570\u7c7b\u578b\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u4f7f\u7528\u63a5\u53e3\u8868\u793a\u51fd\u6570\u7c7b\u578b\uff0c\u6211\u4eec\u9700\u8981\u7ed9\u63a5\u53e3\u5b9a\u4e49\u4e00\u4e2a\u8c03\u7528\u7b7e\u540d\u3002 \u5b83\u5c31\u50cf\u662f\u4e00\u4e2a\u53ea\u6709\u53c2\u6570\u5217\u8868\u548c\u8fd4\u56de\u503c\u7c7b\u578b\u7684\u51fd\u6570\u5b9a\u4e49\u3002\u53c2\u6570\u5217\u8868\u91cc\u7684\u6bcf\u4e2a\u53c2\u6570\u90fd\u9700\u8981\u540d\u5b57\u548c\u7c7b\u578b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"interface SearchFunc {\n  (source: string, subString: string): boolean;\n}\n")),(0,l.kt)("h3",{id:"\u53ef\u7d22\u5f15\u7684\u7c7b\u578b"},"\u53ef\u7d22\u5f15\u7684\u7c7b\u578b"),(0,l.kt)("p",null,"\u4e0e\u4f7f\u7528\u63a5\u53e3\u63cf\u8ff0\u51fd\u6570\u7c7b\u578b\u5dee\u4e0d\u591a\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u63cf\u8ff0\u90a3\u4e9b\u80fd\u591f\u201c\u901a\u8fc7\u7d22\u5f15\u5f97\u5230\u201d\u7684\u7c7b\u578b\uff0c\u6bd4\u5982a","[10]","\u6216ageMap",'["daniel"]',"\u3002 \u53ef\u7d22\u5f15\u7c7b\u578b\u5177\u6709\u4e00\u4e2a \u7d22\u5f15\u7b7e\u540d\uff0c\u5b83\u63cf\u8ff0\u4e86\u5bf9\u8c61\u7d22\u5f15\u7684\u7c7b\u578b\uff0c\u8fd8\u6709\u76f8\u5e94\u7684\u7d22\u5f15\u8fd4\u56de\u503c\u7c7b\u578b\u3002 \u8ba9\u6211\u4eec\u770b\u4e00\u4e2a\u4f8b\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'interface StringArray {\n  [index: number]: string;\n}\n\nlet myArray: StringArray;\nmyArray = ["Bob", "Fred"];\n\nlet myStr: string = myArray[0];\n')),(0,l.kt)("h3",{id:"\u7c7b\u7c7b\u578b"},"\u7c7b\u7c7b\u578b"),(0,l.kt)("h4",{id:"\u5b9e\u73b0\u63a5\u53e3"},"\u5b9e\u73b0\u63a5\u53e3"),(0,l.kt)("h4",{id:"\u7c7b\u9759\u6001\u90e8\u5206\u4e0e\u5b9e\u4f8b\u90e8\u5206\u7684\u533a\u522b"},"\u7c7b\u9759\u6001\u90e8\u5206\u4e0e\u5b9e\u4f8b\u90e8\u5206\u7684\u533a\u522b"),(0,l.kt)("p",null,"\u5f53\u4f60\u64cd\u4f5c\u7c7b\u548c\u63a5\u53e3\u7684\u65f6\u5019\uff0c\u4f60\u8981\u77e5\u9053\u7c7b\u662f\u5177\u6709\u4e24\u4e2a\u7c7b\u578b\u7684\uff1a\u9759\u6001\u90e8\u5206\u7684\u7c7b\u578b\u548c\u5b9e\u4f8b\u7684\u7c7b\u578b\u3002 \u4f60\u4f1a\u6ce8\u610f\u5230\uff0c\u5f53\u4f60\u7528\u6784\u9020\u5668\u7b7e\u540d\u53bb\u5b9a\u4e49\u4e00\u4e2a\u63a5\u53e3\u5e76\u8bd5\u56fe\u5b9a\u4e49\u4e00\u4e2a\u7c7b\u53bb\u5b9e\u73b0\u8fd9\u4e2a\u63a5\u53e3\u65f6\u4f1a\u5f97\u5230\u4e00\u4e2a\u9519\u8bef\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ClockConstructor {\n    new (hour: number, minute: number);\n}\n\nclass Clock implements ClockConstructor {\n    currentTime: Date;\n    constructor(h: number, m: number) { }\n}\n")),(0,l.kt)("h3",{id:"\u7ee7\u627f\u63a5\u53e3"},"\u7ee7\u627f\u63a5\u53e3"),(0,l.kt)("p",null,"\u548c\u7c7b\u4e00\u6837\uff0c\u63a5\u53e3\u4e5f\u53ef\u4ee5\u76f8\u4e92\u7ee7\u627f\u3002 \u8fd9\u8ba9\u6211\u4eec\u80fd\u591f\u4ece\u4e00\u4e2a\u63a5\u53e3\u91cc\u590d\u5236\u6210\u5458\u5230\u53e6\u4e00\u4e2a\u63a5\u53e3\u91cc\uff0c\u53ef\u4ee5\u66f4\u7075\u6d3b\u5730\u5c06\u63a5\u53e3\u5206\u5272\u5230\u53ef\u91cd\u7528\u7684\u6a21\u5757\u91cc\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'interface Shape {\n    color: string;\n}\n\ninterface Square extends Shape {\n    sideLength: number;\n}\n\nlet square = <Square>{};\nsquare.color = "blue";\nsquare.sideLength = 10;\n')),(0,l.kt)("h3",{id:"\u6df7\u5408\u7c7b\u578b"},"\u6df7\u5408\u7c7b\u578b"),(0,l.kt)("p",null,"\u5148\u524d\u6211\u4eec\u63d0\u8fc7\uff0c\u63a5\u53e3\u80fd\u591f\u63cf\u8ff0JavaScript\u91cc\u4e30\u5bcc\u7684\u7c7b\u578b\u3002 \u56e0\u4e3aJavaScript\u5176\u52a8\u6001\u7075\u6d3b\u7684\u7279\u70b9\uff0c\u6709\u65f6\u4f60\u4f1a\u5e0c\u671b\u4e00\u4e2a\u5bf9\u8c61\u53ef\u4ee5\u540c\u65f6\u5177\u6709\u4e0a\u9762\u63d0\u5230\u7684\u591a\u79cd\u7c7b\u578b\u3002"),(0,l.kt)("h3",{id:"\u63a5\u53e3\u7ee7\u627f\u7c7b"},"\u63a5\u53e3\u7ee7\u627f\u7c7b"))}d.isMDXComponent=!0}}]);