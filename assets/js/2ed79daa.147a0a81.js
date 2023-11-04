"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[77495],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11480:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={},i="\u65f6\u949f",c={unversionedId:"front/project/clock",id:"front/project/clock",title:"\u65f6\u949f",description:"\u7b80\u5355\u7535\u5b50\u949f",source:"@site/docs/front/project/clock.md",sourceDirName:"front/project",slug:"/front/project/clock",permalink:"/docs/front/project/clock",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5c0f\u6548\u679c",permalink:"/docs/front/project/"},next:{title:"\u5de5\u5177",permalink:"/docs/front/tools/"}},l={},u=[{value:"\u7b80\u5355\u7535\u5b50\u949f",id:"\u7b80\u5355\u7535\u5b50\u949f",level:2},{value:"\u8f6c\u52a8\u8868\u76d8",id:"\u8f6c\u52a8\u8868\u76d8",level:2}],s={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u65f6\u949f"},"\u65f6\u949f"),(0,o.kt)("h2",{id:"\u7b80\u5355\u7535\u5b50\u949f"},"\u7b80\u5355\u7535\u5b50\u949f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function Clock(props) {\n  const [date, setDate] = useState(\'\');\n  useEffect(() => {\n     tick()\n    const timerID = setInterval(() => tick(), 1000);\n\n    return function cleanup() {\n      clearInterval(timerID);\n    };\n  });\n\n  function tick() {\n    setDate(timeStamp2String());\n  }\n       function timeStamp2String(){\n            // var datetime = new Date();\n            // date.setTime(date);\n            \n            let datetime = new Date()\n            let year = datetime.getFullYear();\n            let month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;\n            let date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();\n            let hour = datetime.getHours()< 10 ? "0" + datetime.getHours() : datetime.getHours();\n            let minute = datetime.getMinutes()< 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();\n            let second = datetime.getSeconds()< 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();\n            return year + "-" + month + "-" + date+" "+hour+":"+minute+":"+second;\n        }\n  return (\n    <div>\n      <h1> {date}   </h1>\n    </div>\n  );\n}\n')),(0,o.kt)("h2",{id:"\u8f6c\u52a8\u8868\u76d8"},"\u8f6c\u52a8\u8868\u76d8"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Clock(){\n\n\n\n\n\n\n\n\n    return <>\n        <div >\n         \u7f8e\u5316 \u65f6\u949f\n        </div>\n    </>\n}\n\n\n\n\n\n\n")))}d.isMDXComponent=!0}}]);