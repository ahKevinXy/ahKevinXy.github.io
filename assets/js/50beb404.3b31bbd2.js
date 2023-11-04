"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[87307],{92716:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(85893),r=t(11151);const i={},o="path",s={id:"backend/go/gin/source/1.7.7/path",title:"path",description:"",source:"@site/docs/backend/go/gin/source/1.7.7/path.md",sourceDirName:"backend/go/gin/source/1.7.7",slug:"/backend/go/gin/source/1.7.7/path",permalink:"/docs/backend/go/gin/source/1.7.7/path",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"mode",permalink:"/docs/backend/go/gin/source/1.7.7/mode"},next:{title:"Recovery",permalink:"/docs/backend/go/gin/source/1.7.7/recovery"}},c={},l=[];function p(n){const e={code:"code",h1:"h1",pre:"pre",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"path",children:"path"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-go",children:"// Copyright 2013 Julien Schmidt. All rights reserved.\n// Based on the path package, Copyright 2009 The Go Authors.\n// Use of this source code is governed by a BSD-style license that can be found\n// at https://github.com/julienschmidt/httprouter/blob/master/LICENSE.\n\npackage gin\n\n// cleanPath is the URL version of path.Clean, it returns a canonical URL path\n// for p, eliminating . and .. elements.\n//\n// The following rules are applied iteratively until no further processing can\n// be done:\n// 1. Replace multiple slashes with a single slash.\n// 2. Eliminate each . path name element (the current directory).\n// 3. Eliminate each inner .. path name element (the parent directory)\n//    along with the non-.. element that precedes it.\n// 4. Eliminate .. elements that begin a rooted path:\n//    that is, replace \"/..\" by \"/\" at the beginning of a path.\n//\n// If the result of this process is an empty string, \"/\" is returned.\nfunc cleanPath(p string) string {\n const stackBufSize = 128\n // Turn empty string into \"/\"\n if p == \"\" {\n  return \"/\"\n }\n\n // Reasonably sized buffer on stack to avoid allocations in the common case.\n // If a larger buffer is required, it gets allocated dynamically.\n buf := make([]byte, 0, stackBufSize)\n\n n := len(p)\n\n // Invariants:\n //      reading from path; r is index of next byte to process.\n //      writing to buf; w is index of next byte to write.\n\n // path must start with '/'\n r := 1\n w := 1\n\n if p[0] != '/' {\n  r = 0\n\n  if n+1 > stackBufSize {\n   buf = make([]byte, n+1)\n  } else {\n   buf = buf[:n+1]\n  }\n  buf[0] = '/'\n }\n\n trailing := n > 1 && p[n-1] == '/'\n\n // A bit more clunky without a 'lazybuf' like the path package, but the loop\n // gets completely inlined (bufApp calls).\n // loop has no expensive function calls (except 1x make)  // So in contrast to the path package this loop has no expensive function\n // calls (except make, if needed).\n\n for r < n {\n  switch {\n  case p[r] == '/':\n   // empty path element, trailing slash is added after the end\n   r++\n\n  case p[r] == '.' && r+1 == n:\n   trailing = true\n   r++\n\n  case p[r] == '.' && p[r+1] == '/':\n   // . element\n   r += 2\n\n  case p[r] == '.' && p[r+1] == '.' && (r+2 == n || p[r+2] == '/'):\n   // .. element: remove to last /\n   r += 3\n\n   if w > 1 {\n    // can backtrack\n    w--\n\n    if len(buf) == 0 {\n     for w > 1 && p[w] != '/' {\n      w--\n     }\n    } else {\n     for w > 1 && buf[w] != '/' {\n      w--\n     }\n    }\n   }\n\n  default:\n   // Real path element.\n   // Add slash if needed\n   if w > 1 {\n    bufApp(&buf, p, w, '/')\n    w++\n   }\n\n   // Copy element\n   for r < n && p[r] != '/' {\n    bufApp(&buf, p, w, p[r])\n    w++\n    r++\n   }\n  }\n }\n\n // Re-append trailing slash\n if trailing && w > 1 {\n  bufApp(&buf, p, w, '/')\n  w++\n }\n\n // If the original string was not modified (or only shortened at the end),\n // return the respective substring of the original string.\n // Otherwise return a new string from the buffer.\n if len(buf) == 0 {\n  return p[:w]\n }\n return string(buf[:w])\n}\n\n// Internal helper to lazily create a buffer if necessary.\n// Calls to this function get inlined.\nfunc bufApp(buf *[]byte, s string, w int, c byte) {\n b := *buf\n if len(b) == 0 {\n  // No modification of the original string so far.\n  // If the next character is the same as in the original string, we do\n  // not yet have to allocate a buffer.\n  if s[w] == c {\n   return\n  }\n\n  // Otherwise use either the stack buffer, if it is large enough, or\n  // allocate a new buffer on the heap, and copy all previous characters.\n  length := len(s)\n  if length > cap(b) {\n   *buf = make([]byte, length)\n  } else {\n   *buf = (*buf)[:length]\n  }\n  b = *buf\n\n  copy(b, s[:w])\n }\n b[w] = c\n}\n\n"})})]})}function h(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(p,{...n})}):p(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>s,a:()=>o});var a=t(67294);const r={},i=a.createContext(r);function o(n){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),a.createElement(i.Provider,{value:e},n.children)}}}]);