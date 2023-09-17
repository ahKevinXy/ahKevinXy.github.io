"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[3834],{3905:function(n,e,t){t.d(e,{Zo:function(){return s},kt:function(){return g}});var r=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var u=r.createContext({}),l=function(n){var e=r.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},s=function(n){var e=l(n.components);return r.createElement(u.Provider,{value:e},n.children)},f="mdxType",p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,u=n.parentName,s=o(n,["components","mdxType","originalType","parentName"]),f=l(t),d=a,g=f["".concat(u,".").concat(d)]||f[d]||p[d]||i;return t?r.createElement(g,c(c({ref:e},s),{},{components:t})):r.createElement(g,c({ref:e},s))}));function g(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,c=new Array(i);c[0]=d;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=n,o[f]="string"==typeof n?n:a,c[1]=o;for(var l=2;l<i;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7652:function(n,e,t){t.r(e),t.d(e,{assets:function(){return s},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return f}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),c=["components"],o={},u="utils",l={unversionedId:"backend/go/gin/source/1.7.7/utils",id:"backend/go/gin/source/1.7.7/utils",title:"utils",description:"",source:"@site/docs/backend/go/gin/source/1.7.7/utils.md",sourceDirName:"backend/go/gin/source/1.7.7",slug:"/backend/go/gin/source/1.7.7/utils",permalink:"/docs/backend/go/gin/source/1.7.7/utils",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"tree",permalink:"/docs/backend/go/gin/source/1.7.7/tree"},next:{title:"\u9762\u8bd5",permalink:"/docs/backend/go/interview/"}},s={},f=[],p={toc:f},d="wrapper";function g(n){var e=n.components,t=(0,a.Z)(n,c);return(0,i.kt)(d,(0,r.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"utils"},"utils"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// Copyright 2014 Manu Martinez-Almeida.  All rights reserved.\n// Use of this source code is governed by a MIT style\n// license that can be found in the LICENSE file.\n\npackage gin\n\nimport (\n "encoding/xml"\n "net/http"\n "os"\n "path"\n "reflect"\n "runtime"\n "strings"\n)\n\n// BindKey indicates a default bind key.\nconst BindKey = "_gin-gonic/gin/bindkey"\n\n// Bind is a helper function for given interface object and returns a Gin middleware.\nfunc Bind(val interface{}) HandlerFunc {\n value := reflect.ValueOf(val)\n if value.Kind() == reflect.Ptr {\n  panic(`Bind struct can not be a pointer. Example:\n Use: gin.Bind(Struct{}) instead of gin.Bind(&Struct{})\n`)\n }\n typ := value.Type()\n\n return func(c *Context) {\n  obj := reflect.New(typ).Interface()\n  if c.Bind(obj) == nil {\n   c.Set(BindKey, obj)\n  }\n }\n}\n\n// WrapF is a helper function for wrapping http.HandlerFunc and returns a Gin middleware.\nfunc WrapF(f http.HandlerFunc) HandlerFunc {\n return func(c *Context) {\n  f(c.Writer, c.Request)\n }\n}\n\n// WrapH is a helper function for wrapping http.Handler and returns a Gin middleware.\nfunc WrapH(h http.Handler) HandlerFunc {\n return func(c *Context) {\n  h.ServeHTTP(c.Writer, c.Request)\n }\n}\n\n// H is a shortcut for map[string]interface{}\ntype H map[string]interface{}\n\n// MarshalXML allows type H to be used with xml.Marshal.\nfunc (h H) MarshalXML(e *xml.Encoder, start xml.StartElement) error {\n start.Name = xml.Name{\n  Space: "",\n  Local: "map",\n }\n if err := e.EncodeToken(start); err != nil {\n  return err\n }\n for key, value := range h {\n  elem := xml.StartElement{\n   Name: xml.Name{Space: "", Local: key},\n   Attr: []xml.Attr{},\n  }\n  if err := e.EncodeElement(value, elem); err != nil {\n   return err\n  }\n }\n\n return e.EncodeToken(xml.EndElement{Name: start.Name})\n}\n\nfunc assert1(guard bool, text string) {\n if !guard {\n  panic(text)\n }\n}\n\nfunc filterFlags(content string) string {\n for i, char := range content {\n  if char == \' \' || char == \';\' {\n   return content[:i]\n  }\n }\n return content\n}\n\nfunc chooseData(custom, wildcard interface{}) interface{} {\n if custom != nil {\n  return custom\n }\n if wildcard != nil {\n  return wildcard\n }\n panic("negotiation config is invalid")\n}\n\nfunc parseAccept(acceptHeader string) []string {\n parts := strings.Split(acceptHeader, ",")\n out := make([]string, 0, len(parts))\n for _, part := range parts {\n  if i := strings.IndexByte(part, \';\'); i > 0 {\n   part = part[:i]\n  }\n  if part = strings.TrimSpace(part); part != "" {\n   out = append(out, part)\n  }\n }\n return out\n}\n\nfunc lastChar(str string) uint8 {\n if str == "" {\n  panic("The length of the string can\'t be 0")\n }\n return str[len(str)-1]\n}\n\nfunc nameOfFunction(f interface{}) string {\n return runtime.FuncForPC(reflect.ValueOf(f).Pointer()).Name()\n}\n\nfunc joinPaths(absolutePath, relativePath string) string {\n if relativePath == "" {\n  return absolutePath\n }\n\n finalPath := path.Join(absolutePath, relativePath)\n if lastChar(relativePath) == \'/\' && lastChar(finalPath) != \'/\' {\n  return finalPath + "/"\n }\n return finalPath\n}\n\nfunc resolveAddress(addr []string) string {\n switch len(addr) {\n case 0:\n  if port := os.Getenv("PORT"); port != "" {\n   debugPrint("Environment variable PORT=\\"%s\\"", port)\n   return ":" + port\n  }\n  debugPrint("Environment variable PORT is undefined. Using port :8080 by default")\n  return ":8080"\n case 1:\n  return addr[0]\n default:\n  panic("too many parameters")\n }\n}\n\n')))}g.isMDXComponent=!0}}]);