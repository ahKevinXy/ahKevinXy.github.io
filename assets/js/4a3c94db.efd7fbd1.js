"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[97],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return w}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=t.createContext({}),c=function(e){var n=t.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(a.Provider,{value:n},e.children)},f="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,w=f["".concat(a,".").concat(d)]||f[d]||l[d]||i;return r?t.createElement(w,s(s({ref:n},p),{},{components:r})):t.createElement(w,s({ref:n},p))}));function w(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=d;var u={};for(var a in n)hasOwnProperty.call(n,a)&&(u[a]=n[a]);u.originalType=e,u[f]="string"==typeof e?e:o,s[1]=u;for(var c=2;c<i;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},68139:function(e,n,r){r.r(n),r.d(n,{assets:function(){return p},contentTitle:function(){return a},default:function(){return w},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return f}});var t=r(87462),o=r(63366),i=(r(67294),r(3905)),s=["components"],u={},a="response_write",c={unversionedId:"backend/go/gin/source/1.7.7/reponse_writer",id:"backend/go/gin/source/1.7.7/reponse_writer",title:"response_write",description:"",source:"@site/docs/backend/go/gin/source/1.7.7/reponse_writer.md",sourceDirName:"backend/go/gin/source/1.7.7",slug:"/backend/go/gin/source/1.7.7/reponse_writer",permalink:"/docs/backend/go/gin/source/1.7.7/reponse_writer",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Recovery",permalink:"/docs/backend/go/gin/source/1.7.7/recovery"},next:{title:"router_group",permalink:"/docs/backend/go/gin/source/1.7.7/router_group"}},p={},f=[],l={toc:f},d="wrapper";function w(e){var n=e.components,r=(0,o.Z)(e,s);return(0,i.kt)(d,(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"response_write"},"response_write"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// Copyright 2014 Manu Martinez-Almeida.  All rights reserved.\n// Use of this source code is governed by a MIT style\n// license that can be found in the LICENSE file.\n\npackage gin\n\nimport (\n "bufio"\n "io"\n "net"\n "net/http"\n)\n\nconst (\n noWritten     = -1\n defaultStatus = http.StatusOK\n)\n\n// ResponseWriter ...\ntype ResponseWriter interface {\n http.ResponseWriter\n http.Hijacker\n http.Flusher\n http.CloseNotifier\n\n // Returns the HTTP response status code of the current request.\n Status() int\n\n // Returns the number of bytes already written into the response http body.\n // See Written()\n Size() int\n\n // Writes the string into the response body.\n WriteString(string) (int, error)\n\n // Returns true if the response body was already written.\n Written() bool\n\n // Forces to write the http header (status code + headers).\n WriteHeaderNow()\n\n // get the http.Pusher for server push\n Pusher() http.Pusher\n}\n\ntype responseWriter struct {\n http.ResponseWriter\n size   int\n status int\n}\n\nvar _ ResponseWriter = &responseWriter{}\n\nfunc (w *responseWriter) reset(writer http.ResponseWriter) {\n w.ResponseWriter = writer\n w.size = noWritten\n w.status = defaultStatus\n}\n\nfunc (w *responseWriter) WriteHeader(code int) {\n if code > 0 && w.status != code {\n  if w.Written() {\n   debugPrint("[WARNING] Headers were already written. Wanted to override status code %d with %d", w.status, code)\n  }\n  w.status = code\n }\n}\n\nfunc (w *responseWriter) WriteHeaderNow() {\n if !w.Written() {\n  w.size = 0\n  w.ResponseWriter.WriteHeader(w.status)\n }\n}\n\nfunc (w *responseWriter) Write(data []byte) (n int, err error) {\n w.WriteHeaderNow()\n n, err = w.ResponseWriter.Write(data)\n w.size += n\n return\n}\n\nfunc (w *responseWriter) WriteString(s string) (n int, err error) {\n w.WriteHeaderNow()\n n, err = io.WriteString(w.ResponseWriter, s)\n w.size += n\n return\n}\n\nfunc (w *responseWriter) Status() int {\n return w.status\n}\n\nfunc (w *responseWriter) Size() int {\n return w.size\n}\n\nfunc (w *responseWriter) Written() bool {\n return w.size != noWritten\n}\n\n// Hijack implements the http.Hijacker interface.\nfunc (w *responseWriter) Hijack() (net.Conn, *bufio.ReadWriter, error) {\n if w.size < 0 {\n  w.size = 0\n }\n return w.ResponseWriter.(http.Hijacker).Hijack()\n}\n\n// CloseNotify implements the http.CloseNotify interface.\nfunc (w *responseWriter) CloseNotify() <-chan bool {\n return w.ResponseWriter.(http.CloseNotifier).CloseNotify()\n}\n\n// Flush implements the http.Flush interface.\nfunc (w *responseWriter) Flush() {\n w.WriteHeaderNow()\n w.ResponseWriter.(http.Flusher).Flush()\n}\n\nfunc (w *responseWriter) Pusher() (pusher http.Pusher) {\n if pusher, ok := w.ResponseWriter.(http.Pusher); ok {\n  return pusher\n }\n return nil\n}\n\n')))}w.isMDXComponent=!0}}]);