"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[43072],{12763:(e,s,t)=>{t.r(s),t.d(s,{default:()=>l});var n=t(67294),i=t(35463),a=t(85893);const l=()=>{(0,n.useEffect)((()=>{let e=document.getElementById("minute-marks");console.log("\u6765\u81ea\u5341\u91cc\u9752\u5c71 \u94fe\u63a5\uff1ahttps://juejin.cn/post/7067447765592178702");for(let s=0;s<60;s++){let t=document.createElement("li");t.style.cssText="transform:rotate("+6*s+"deg) translateY(-12.7em)",s%5==0&&(t.style.width="0.3em",t.style.height="1em"),e.appendChild(t)}}),[]);return(0,n.useEffect)((()=>{setInterval((function(){let e,s=new Date,t=s.getHours(),n=s.getMinutes(),i=s.getSeconds();e=t>12?30*(t-12+n/60):30*(t+n/60*100);let a=6*(n+i/60)+i/60,l=6*i;document.getElementsByClassName("hours-hand")[0].style.transform="rotate("+e+"deg)",document.getElementsByClassName("minutes-hand")[0].style.transform="rotate("+a+"deg)",document.getElementsByClassName("seconds-hand")[0].style.transform="rotate("+l+"deg)";let d=s.getFullYear(),m=s.getMonth()+1,r=s.getDate(),c=s.getDay();document.getElementsByClassName("digit-hours")[0].innerHTML=String(d),document.getElementsByClassName("digit-minutes")[0].innerHTML=String(m),document.getElementsByClassName("digit-seconds")[0].innerHTML=String(r),document.getElementsByClassName("digit-week")[0].innerHTML=String(c)}),1e3)}),[]),(0,a.jsxs)("div",{children:[(0,a.jsx)(i.d,{title:"CSS \u949f\u8868",description:"\u6765\u81ea \u5341\u91cc\u9752\u5c71 \u94fe\u63a5\uff1ahttps://juejin.cn/post/7067447765592178702"}),(0,a.jsxs)("div",{id:"watch",children:[(0,a.jsx)("div",{className:"frame-face"}),(0,a.jsx)("ul",{id:"minute-marks"}),(0,a.jsxs)("ul",{id:"digits",children:[(0,a.jsx)("li",{children:"3"}),(0,a.jsx)("li",{children:"6"}),(0,a.jsx)("li",{children:"9"}),(0,a.jsx)("li",{children:"12"})]}),(0,a.jsxs)("div",{className:"digital-wrap",children:[(0,a.jsx)("ul",{className:"digit-hours"}),(0,a.jsx)("ul",{className:"digit-minutes"}),(0,a.jsx)("ul",{className:"digit-seconds"}),(0,a.jsx)("ul",{className:"digit-week"})]}),(0,a.jsx)("div",{className:"hours-hand"}),(0,a.jsx)("div",{className:"minutes-hand"}),(0,a.jsx)("div",{className:"seconds-hand"})]})]})}}}]);