"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[5463],{35576:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=t(85893),r=t(11151);const o={title:"\u524d\u7aef FontSize \u5bf9\u6bd4",tags:["\u524d\u7aef","\u57fa\u7840"],authors:"ahKevinXy",description:"\u524d\u7aef\u5b57\u4f53\u5927\u5c0f\u5bf9\u6bd4 \u5982\u4f55\u8bc6\u522b\u5199\u597d\u524d\u7aef\u5b57\u4f53\u5927\u5c0f",image:"https://source.unsplash.com/random?people&38"},a="\u524d\u7aef \u5b57\u4f53\u5c3a\u5bf8",s={permalink:"/blog/2023/09/17/front",source:"@site/blog/2023/09/17/front.md",title:"\u524d\u7aef FontSize \u5bf9\u6bd4",description:"\u524d\u7aef\u5b57\u4f53\u5927\u5c0f\u5bf9\u6bd4 \u5982\u4f55\u8bc6\u522b\u5199\u597d\u524d\u7aef\u5b57\u4f53\u5927\u5c0f",date:"2023-09-17T00:00:00.000Z",formattedDate:"September 17, 2023",tags:[{label:"\u524d\u7aef",permalink:"/blog/tags/\u524d\u7aef"},{label:"\u57fa\u7840",permalink:"/blog/tags/\u57fa\u7840"}],readingTime:.385,hasTruncateMarker:!0,authors:[{name:"ahKevinXy",title:"\u4f5c\u8005",url:"https://github.com/ahKevinXy",email:"ahkevinxy@gmail.com",imageURL:"/img/headers.png",key:"ahKevinXy"}],frontMatter:{title:"\u524d\u7aef FontSize \u5bf9\u6bd4",tags:["\u524d\u7aef","\u57fa\u7840"],authors:"ahKevinXy",description:"\u524d\u7aef\u5b57\u4f53\u5927\u5c0f\u5bf9\u6bd4 \u5982\u4f55\u8bc6\u522b\u5199\u597d\u524d\u7aef\u5b57\u4f53\u5927\u5c0f",image:"https://source.unsplash.com/random?people&38"},unlisted:!1,prevItem:{title:"Go  \u8bbe\u8ba1\u6a21\u5f0f",permalink:"/blog/2023/09/17/design"},nextItem:{title:"\u524d\u7aef margin \u5bf9\u6bd4",permalink:"/blog/2023/09/17/margin"}},l={authorsImageUrls:[void 0]},c=[{value:"\u5c3a\u5bf8",id:"\u5c3a\u5bf8",level:2}];function m(e){const n={code:"code",h2:"h2",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u5c3a\u5bf8",children:"\u5c3a\u5bf8"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:"\n\nfunction FontSize(props) {\n    let  arrList = [\n      \n    ]\n    for (let i =10;i <100;i ++){\n        arrList = [...arrList,{\n            fontSize: {\n                fontSize: i+'px'\n            },\n            i :i \n        }]\n    }\n    const concatPx = (item)=>{\n        \n        return item +'px'\n    }\n    const [listSize,setListSize] = useState([])\n    useEffect(() => {\n         for (let i=10;i <100;i ++){\n             setListSize(...listSize,i)\n         }\n         \n         \n    }, [])\n    return <div style={{cursor:'pointer'}}>\n      \n        {\n            arrList.map(item=>{\n                return <p key={item.i} style={item.fontSize} title={concatPx(item.i)}  > \u6b63 <sup>{concatPx(item.i)} </sup></p>\n            })\n        }\n    </div>\n}\n\n\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var i=t(67294);const r={},o=i.createContext(r);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);