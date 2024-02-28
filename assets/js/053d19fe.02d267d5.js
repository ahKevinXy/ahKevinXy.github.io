"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[90954],{45575:(r,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var t=e(74848),s=e(28453);const o={},a="error",i={id:"backend/go/gin/source/1.7.7/error",title:"error",description:"",source:"@site/docs/backend/go/gin/source/1.7.7/error.md",sourceDirName:"backend/go/gin/source/1.7.7",slug:"/backend/go/gin/source/1.7.7/error",permalink:"/docs/backend/go/gin/source/1.7.7/error",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"gin context",permalink:"/docs/backend/go/gin/source/1.7.7/context"},next:{title:"fs",permalink:"/docs/backend/go/gin/source/1.7.7/fs"}},c={},u=[];function l(r){const n={code:"code",h1:"h1",pre:"pre",...(0,s.R)(),...r.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"error",children:"error"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// Copyright 2014 Manu Martinez-Almeida.  All rights reserved.\n// Use of this source code is governed by a MIT style\n// license that can be found in the LICENSE file.\n\npackage gin\n\nimport (\n "fmt"\n "reflect"\n "strings"\n\n "github.com/gin-gonic/gin/internal/json"\n)\n\n// ErrorType is an unsigned 64-bit error code as defined in the gin spec.\ntype ErrorType uint64\n\nconst (\n // ErrorTypeBind is used when Context.Bind() fails.\n ErrorTypeBind ErrorType = 1 << 63\n // ErrorTypeRender is used when Context.Render() fails.\n ErrorTypeRender ErrorType = 1 << 62\n // ErrorTypePrivate indicates a private error.\n ErrorTypePrivate ErrorType = 1 << 0\n // ErrorTypePublic indicates a public error.\n ErrorTypePublic ErrorType = 1 << 1\n // ErrorTypeAny indicates any other error.\n ErrorTypeAny ErrorType = 1<<64 - 1\n // ErrorTypeNu indicates any other error.\n ErrorTypeNu = 2\n)\n\n// Error represents a error\'s specification.\ntype Error struct {\n Err  error\n Type ErrorType\n Meta interface{}\n}\n\ntype errorMsgs []*Error\n\nvar _ error = &Error{}\n\n// SetType sets the error\'s type.\nfunc (msg *Error) SetType(flags ErrorType) *Error {\n msg.Type = flags\n return msg\n}\n\n// SetMeta sets the error\'s meta data.\nfunc (msg *Error) SetMeta(data interface{}) *Error {\n msg.Meta = data\n return msg\n}\n\n// JSON creates a properly formatted JSON\nfunc (msg *Error) JSON() interface{} {\n jsonData := H{}\n if msg.Meta != nil {\n  value := reflect.ValueOf(msg.Meta)\n  switch value.Kind() {\n  case reflect.Struct:\n   return msg.Meta\n  case reflect.Map:\n   for _, key := range value.MapKeys() {\n    jsonData[key.String()] = value.MapIndex(key).Interface()\n   }\n  default:\n   jsonData["meta"] = msg.Meta\n  }\n }\n if _, ok := jsonData["error"]; !ok {\n  jsonData["error"] = msg.Error()\n }\n return jsonData\n}\n\n// MarshalJSON implements the json.Marshaller interface.\nfunc (msg *Error) MarshalJSON() ([]byte, error) {\n return json.Marshal(msg.JSON())\n}\n\n// Error implements the error interface.\nfunc (msg Error) Error() string {\n return msg.Err.Error()\n}\n\n// IsType judges one error.\nfunc (msg *Error) IsType(flags ErrorType) bool {\n return (msg.Type & flags) > 0\n}\n\n// Unwrap returns the wrapped error, to allow interoperability with errors.Is(), errors.As() and errors.Unwrap()\nfunc (msg *Error) Unwrap() error {\n return msg.Err\n}\n\n// ByType returns a readonly copy filtered the byte.\n// ie ByType(gin.ErrorTypePublic) returns a slice of errors with type=ErrorTypePublic.\nfunc (a errorMsgs) ByType(typ ErrorType) errorMsgs {\n if len(a) == 0 {\n  return nil\n }\n if typ == ErrorTypeAny {\n  return a\n }\n var result errorMsgs\n for _, msg := range a {\n  if msg.IsType(typ) {\n   result = append(result, msg)\n  }\n }\n return result\n}\n\n// Last returns the last error in the slice. It returns nil if the array is empty.\n// Shortcut for errors[len(errors)-1].\nfunc (a errorMsgs) Last() *Error {\n if length := len(a); length > 0 {\n  return a[length-1]\n }\n return nil\n}\n\n// Errors returns an array will all the error messages.\n// Example:\n//   c.Error(errors.New("first"))\n//   c.Error(errors.New("second"))\n//   c.Error(errors.New("third"))\n//   c.Errors.Errors() // == []string{"first", "second", "third"}\nfunc (a errorMsgs) Errors() []string {\n if len(a) == 0 {\n  return nil\n }\n errorStrings := make([]string, len(a))\n for i, err := range a {\n  errorStrings[i] = err.Error()\n }\n return errorStrings\n}\n\nfunc (a errorMsgs) JSON() interface{} {\n switch length := len(a); length {\n case 0:\n  return nil\n case 1:\n  return a.Last().JSON()\n default:\n  jsonData := make([]interface{}, length)\n  for i, err := range a {\n   jsonData[i] = err.JSON()\n  }\n  return jsonData\n }\n}\n\n// MarshalJSON implements the json.Marshaller interface.\nfunc (a errorMsgs) MarshalJSON() ([]byte, error) {\n return json.Marshal(a.JSON())\n}\n\nfunc (a errorMsgs) String() string {\n if len(a) == 0 {\n  return ""\n }\n var buffer strings.Builder\n for i, msg := range a {\n  fmt.Fprintf(&buffer, "Error #%02d: %s\\n", i+1, msg.Err)\n  if msg.Meta != nil {\n   fmt.Fprintf(&buffer, "     Meta: %v\\n", msg.Meta)\n  }\n }\n return buffer.String()\n}\n\n'})})]})}function g(r={}){const{wrapper:n}={...(0,s.R)(),...r.components};return n?(0,t.jsx)(n,{...r,children:(0,t.jsx)(l,{...r})}):l(r)}},28453:(r,n,e)=>{e.d(n,{R:()=>a,x:()=>i});var t=e(96540);const s={},o=t.createContext(s);function a(r){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof r?r(n):{...n,...r}}),[n,r])}function i(r){let n;return n=r.disableParentContext?"function"==typeof r.components?r.components(s):r.components||s:a(r.components),t.createElement(o.Provider,{value:n},r.children)}}}]);