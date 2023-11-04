"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[1859],{3905:(r,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>y});var t=n(67294);function o(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function a(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.push.apply(n,t)}return n}function s(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(r,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}))}return r}function i(r,e){if(null==r)return{};var n,t,o=function(r,e){if(null==r)return{};var n,t,o={},a=Object.keys(r);for(t=0;t<a.length;t++)n=a[t],e.indexOf(n)>=0||(o[n]=r[n]);return o}(r,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(t=0;t<a.length;t++)n=a[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(r,n)&&(o[n]=r[n])}return o}var c=t.createContext({}),l=function(r){var e=t.useContext(c),n=e;return r&&(n="function"==typeof r?r(e):s(s({},e),r)),n},u=function(r){var e=l(r.components);return t.createElement(c.Provider,{value:e},r.children)},p="mdxType",f={inlineCode:"code",wrapper:function(r){var e=r.children;return t.createElement(t.Fragment,{},e)}},g=t.forwardRef((function(r,e){var n=r.components,o=r.mdxType,a=r.originalType,c=r.parentName,u=i(r,["components","mdxType","originalType","parentName"]),p=l(n),g=o,y=p["".concat(c,".").concat(g)]||p[g]||f[g]||a;return n?t.createElement(y,s(s({ref:e},u),{},{components:n})):t.createElement(y,s({ref:e},u))}));function y(r,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof r||o){var a=n.length,s=new Array(a);s[0]=g;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=r,i[p]="string"==typeof r?r:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},18736:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var t=n(87462),o=(n(67294),n(3905));const a={},s="error",i={unversionedId:"backend/go/gin/source/1.7.7/error",id:"backend/go/gin/source/1.7.7/error",title:"error",description:"",source:"@site/docs/backend/go/gin/source/1.7.7/error.md",sourceDirName:"backend/go/gin/source/1.7.7",slug:"/backend/go/gin/source/1.7.7/error",permalink:"/docs/backend/go/gin/source/1.7.7/error",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"gin context",permalink:"/docs/backend/go/gin/source/1.7.7/context"},next:{title:"fs",permalink:"/docs/backend/go/gin/source/1.7.7/fs"}},c={},l=[],u={toc:l},p="wrapper";function f(r){let{components:e,...n}=r;return(0,o.kt)(p,(0,t.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"error"},"error"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// Copyright 2014 Manu Martinez-Almeida.  All rights reserved.\n// Use of this source code is governed by a MIT style\n// license that can be found in the LICENSE file.\n\npackage gin\n\nimport (\n "fmt"\n "reflect"\n "strings"\n\n "github.com/gin-gonic/gin/internal/json"\n)\n\n// ErrorType is an unsigned 64-bit error code as defined in the gin spec.\ntype ErrorType uint64\n\nconst (\n // ErrorTypeBind is used when Context.Bind() fails.\n ErrorTypeBind ErrorType = 1 << 63\n // ErrorTypeRender is used when Context.Render() fails.\n ErrorTypeRender ErrorType = 1 << 62\n // ErrorTypePrivate indicates a private error.\n ErrorTypePrivate ErrorType = 1 << 0\n // ErrorTypePublic indicates a public error.\n ErrorTypePublic ErrorType = 1 << 1\n // ErrorTypeAny indicates any other error.\n ErrorTypeAny ErrorType = 1<<64 - 1\n // ErrorTypeNu indicates any other error.\n ErrorTypeNu = 2\n)\n\n// Error represents a error\'s specification.\ntype Error struct {\n Err  error\n Type ErrorType\n Meta interface{}\n}\n\ntype errorMsgs []*Error\n\nvar _ error = &Error{}\n\n// SetType sets the error\'s type.\nfunc (msg *Error) SetType(flags ErrorType) *Error {\n msg.Type = flags\n return msg\n}\n\n// SetMeta sets the error\'s meta data.\nfunc (msg *Error) SetMeta(data interface{}) *Error {\n msg.Meta = data\n return msg\n}\n\n// JSON creates a properly formatted JSON\nfunc (msg *Error) JSON() interface{} {\n jsonData := H{}\n if msg.Meta != nil {\n  value := reflect.ValueOf(msg.Meta)\n  switch value.Kind() {\n  case reflect.Struct:\n   return msg.Meta\n  case reflect.Map:\n   for _, key := range value.MapKeys() {\n    jsonData[key.String()] = value.MapIndex(key).Interface()\n   }\n  default:\n   jsonData["meta"] = msg.Meta\n  }\n }\n if _, ok := jsonData["error"]; !ok {\n  jsonData["error"] = msg.Error()\n }\n return jsonData\n}\n\n// MarshalJSON implements the json.Marshaller interface.\nfunc (msg *Error) MarshalJSON() ([]byte, error) {\n return json.Marshal(msg.JSON())\n}\n\n// Error implements the error interface.\nfunc (msg Error) Error() string {\n return msg.Err.Error()\n}\n\n// IsType judges one error.\nfunc (msg *Error) IsType(flags ErrorType) bool {\n return (msg.Type & flags) > 0\n}\n\n// Unwrap returns the wrapped error, to allow interoperability with errors.Is(), errors.As() and errors.Unwrap()\nfunc (msg *Error) Unwrap() error {\n return msg.Err\n}\n\n// ByType returns a readonly copy filtered the byte.\n// ie ByType(gin.ErrorTypePublic) returns a slice of errors with type=ErrorTypePublic.\nfunc (a errorMsgs) ByType(typ ErrorType) errorMsgs {\n if len(a) == 0 {\n  return nil\n }\n if typ == ErrorTypeAny {\n  return a\n }\n var result errorMsgs\n for _, msg := range a {\n  if msg.IsType(typ) {\n   result = append(result, msg)\n  }\n }\n return result\n}\n\n// Last returns the last error in the slice. It returns nil if the array is empty.\n// Shortcut for errors[len(errors)-1].\nfunc (a errorMsgs) Last() *Error {\n if length := len(a); length > 0 {\n  return a[length-1]\n }\n return nil\n}\n\n// Errors returns an array will all the error messages.\n// Example:\n//   c.Error(errors.New("first"))\n//   c.Error(errors.New("second"))\n//   c.Error(errors.New("third"))\n//   c.Errors.Errors() // == []string{"first", "second", "third"}\nfunc (a errorMsgs) Errors() []string {\n if len(a) == 0 {\n  return nil\n }\n errorStrings := make([]string, len(a))\n for i, err := range a {\n  errorStrings[i] = err.Error()\n }\n return errorStrings\n}\n\nfunc (a errorMsgs) JSON() interface{} {\n switch length := len(a); length {\n case 0:\n  return nil\n case 1:\n  return a.Last().JSON()\n default:\n  jsonData := make([]interface{}, length)\n  for i, err := range a {\n   jsonData[i] = err.JSON()\n  }\n  return jsonData\n }\n}\n\n// MarshalJSON implements the json.Marshaller interface.\nfunc (a errorMsgs) MarshalJSON() ([]byte, error) {\n return json.Marshal(a.JSON())\n}\n\nfunc (a errorMsgs) String() string {\n if len(a) == 0 {\n  return ""\n }\n var buffer strings.Builder\n for i, msg := range a {\n  fmt.Fprintf(&buffer, "Error #%02d: %s\\n", i+1, msg.Err)\n  if msg.Meta != nil {\n   fmt.Fprintf(&buffer, "     Meta: %v\\n", msg.Meta)\n  }\n }\n return buffer.String()\n}\n\n')))}f.isMDXComponent=!0}}]);