"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[54275],{3905:function(n,e,t){t.d(e,{Zo:function(){return o},kt:function(){return u}});var a=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function d(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var h=a.createContext({}),s=function(n){var e=a.useContext(h),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},o=function(n){var e=s(n.components);return a.createElement(h.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(n,e){var t=n.components,i=n.mdxType,r=n.originalType,h=n.parentName,o=d(n,["components","mdxType","originalType","parentName"]),p=s(t),u=i,f=p["".concat(h,".").concat(u)]||p[u]||c[u]||r;return t?a.createElement(f,l(l({ref:e},o),{},{components:t})):a.createElement(f,l({ref:e},o))}));function u(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var r=t.length,l=new Array(r);l[0]=p;var d={};for(var h in e)hasOwnProperty.call(e,h)&&(d[h]=e[h]);d.originalType=n,d.mdxType="string"==typeof n?n:i,l[1]=d;for(var s=2;s<r;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},29055:function(n,e,t){t.r(e),t.d(e,{assets:function(){return o},contentTitle:function(){return h},default:function(){return u},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return c}});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),l=["components"],d={},h="tree",s={unversionedId:"backend/go/gin/source/1.7.7/tree",id:"backend/go/gin/source/1.7.7/tree",title:"tree",description:"",source:"@site/docs/backend/go/gin/source/1.7.7/tree.md",sourceDirName:"backend/go/gin/source/1.7.7",slug:"/backend/go/gin/source/1.7.7/tree",permalink:"/docs/backend/go/gin/source/1.7.7/tree",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"router_group",permalink:"/docs/backend/go/gin/source/1.7.7/router_group"},next:{title:"utils",permalink:"/docs/backend/go/gin/source/1.7.7/utils"}},o={},c=[],p={toc:c};function u(n){var e=n.components,t=(0,i.Z)(n,l);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tree"},"tree"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// Copyright 2013 Julien Schmidt. All rights reserved.\n// Use of this source code is governed by a BSD-style license that can be found\n// at https://github.com/julienschmidt/httprouter/blob/master/LICENSE\n\npackage gin\n\nimport (\n \"bytes\"\n \"net/url\"\n \"strings\"\n \"unicode\"\n \"unicode/utf8\"\n\n \"github.com/gin-gonic/gin/internal/bytesconv\"\n)\n\nvar (\n strColon = []byte(\":\")\n strStar  = []byte(\"*\")\n strSlash = []byte(\"/\")\n)\n\n// Param is a single URL parameter, consisting of a key and a value.\ntype Param struct {\n Key   string\n Value string\n}\n\n// Params is a Param-slice, as returned by the router.\n// The slice is ordered, the first URL parameter is also the first slice value.\n// It is therefore safe to read values by the index.\ntype Params []Param\n\n// Get returns the value of the first Param which key matches the given name.\n// If no matching Param is found, an empty string is returned.\nfunc (ps Params) Get(name string) (string, bool) {\n for _, entry := range ps {\n  if entry.Key == name {\n   return entry.Value, true\n  }\n }\n return \"\", false\n}\n\n// ByName returns the value of the first Param which key matches the given name.\n// If no matching Param is found, an empty string is returned.\nfunc (ps Params) ByName(name string) (va string) {\n va, _ = ps.Get(name)\n return\n}\n\ntype methodTree struct {\n method string\n root   *node\n}\n\ntype methodTrees []methodTree\n\nfunc (trees methodTrees) get(method string) *node {\n for _, tree := range trees {\n  if tree.method == method {\n   return tree.root\n  }\n }\n return nil\n}\n\nfunc min(a, b int) int {\n if a <= b {\n  return a\n }\n return b\n}\n\nfunc longestCommonPrefix(a, b string) int {\n i := 0\n max := min(len(a), len(b))\n for i < max && a[i] == b[i] {\n  i++\n }\n return i\n}\n\n// addChild will add a child node, keeping wildcards at the end\nfunc (n *node) addChild(child *node) {\n if n.wildChild && len(n.children) > 0 {\n  wildcardChild := n.children[len(n.children)-1]\n  n.children = append(n.children[:len(n.children)-1], child, wildcardChild)\n } else {\n  n.children = append(n.children, child)\n }\n}\n\nfunc countParams(path string) uint16 {\n var n uint16\n s := bytesconv.StringToBytes(path)\n n += uint16(bytes.Count(s, strColon))\n n += uint16(bytes.Count(s, strStar))\n return n\n}\n\nfunc countSections(path string) uint16 {\n s := bytesconv.StringToBytes(path)\n return uint16(bytes.Count(s, strSlash))\n}\n\ntype nodeType uint8\n\nconst (\n static nodeType = iota // default\n root\n param\n catchAll\n)\n\ntype node struct {\n path      string\n indices   string\n wildChild bool\n nType     nodeType\n priority  uint32\n children  []*node // child nodes, at most 1 :param style node at the end of the array\n handlers  HandlersChain\n fullPath  string\n}\n\n// Increments priority of the given child and reorders if necessary\nfunc (n *node) incrementChildPrio(pos int) int {\n cs := n.children\n cs[pos].priority++\n prio := cs[pos].priority\n\n // Adjust position (move to front)\n newPos := pos\n for ; newPos > 0 && cs[newPos-1].priority < prio; newPos-- {\n  // Swap node positions\n  cs[newPos-1], cs[newPos] = cs[newPos], cs[newPos-1]\n }\n\n // Build new index char string\n if newPos != pos {\n  n.indices = n.indices[:newPos] + // Unchanged prefix, might be empty\n   n.indices[pos:pos+1] + // The index char we move\n   n.indices[newPos:pos] + n.indices[pos+1:] // Rest without char at 'pos'\n }\n\n return newPos\n}\n\n// addRoute adds a node with the given handle to the path.\n// Not concurrency-safe!\nfunc (n *node) addRoute(path string, handlers HandlersChain) {\n fullPath := path\n n.priority++\n\n // Empty tree\n if len(n.path) == 0 && len(n.children) == 0 {\n  n.insertChild(path, fullPath, handlers)\n  n.nType = root\n  return\n }\n\n parentFullPathIndex := 0\n\nwalk:\n for {\n  // Find the longest common prefix.\n  // This also implies that the common prefix contains no ':' or '*'\n  // since the existing key can't contain those chars.\n  i := longestCommonPrefix(path, n.path)\n\n  // Split edge\n  if i < len(n.path) {\n   child := node{\n    path:      n.path[i:],\n    wildChild: n.wildChild,\n    indices:   n.indices,\n    children:  n.children,\n    handlers:  n.handlers,\n    priority:  n.priority - 1,\n    fullPath:  n.fullPath,\n   }\n\n   n.children = []*node{&child}\n   // []byte for proper unicode char conversion, see #65\n   n.indices = bytesconv.BytesToString([]byte{n.path[i]})\n   n.path = path[:i]\n   n.handlers = nil\n   n.wildChild = false\n   n.fullPath = fullPath[:parentFullPathIndex+i]\n  }\n\n  // Make new node a child of this node\n  if i < len(path) {\n   path = path[i:]\n   c := path[0]\n\n   // '/' after param\n   if n.nType == param && c == '/' && len(n.children) == 1 {\n    parentFullPathIndex += len(n.path)\n    n = n.children[0]\n    n.priority++\n    continue walk\n   }\n\n   // Check if a child with the next path byte exists\n   for i, max := 0, len(n.indices); i < max; i++ {\n    if c == n.indices[i] {\n     parentFullPathIndex += len(n.path)\n     i = n.incrementChildPrio(i)\n     n = n.children[i]\n     continue walk\n    }\n   }\n\n   // Otherwise insert it\n   if c != ':' && c != '*' && n.nType != catchAll {\n    // []byte for proper unicode char conversion, see #65\n    n.indices += bytesconv.BytesToString([]byte{c})\n    child := &node{\n     fullPath: fullPath,\n    }\n    n.addChild(child)\n    n.incrementChildPrio(len(n.indices) - 1)\n    n = child\n   } else if n.wildChild {\n    // inserting a wildcard node, need to check if it conflicts with the existing wildcard\n    n = n.children[len(n.children)-1]\n    n.priority++\n\n    // Check if the wildcard matches\n    if len(path) >= len(n.path) && n.path == path[:len(n.path)] &&\n     // Adding a child to a catchAll is not possible\n     n.nType != catchAll &&\n     // Check for longer wildcard, e.g. :name and :names\n     (len(n.path) >= len(path) || path[len(n.path)] == '/') {\n     continue walk\n    }\n\n    // Wildcard conflict\n    pathSeg := path\n    if n.nType != catchAll {\n     pathSeg = strings.SplitN(pathSeg, \"/\", 2)[0]\n    }\n    prefix := fullPath[:strings.Index(fullPath, pathSeg)] + n.path\n    panic(\"'\" + pathSeg +\n     \"' in new path '\" + fullPath +\n     \"' conflicts with existing wildcard '\" + n.path +\n     \"' in existing prefix '\" + prefix +\n     \"'\")\n   }\n\n   n.insertChild(path, fullPath, handlers)\n   return\n  }\n\n  // Otherwise add handle to current node\n  if n.handlers != nil {\n   panic(\"handlers are already registered for path '\" + fullPath + \"'\")\n  }\n  n.handlers = handlers\n  n.fullPath = fullPath\n  return\n }\n}\n\n// Search for a wildcard segment and check the name for invalid characters.\n// Returns -1 as index, if no wildcard was found.\nfunc findWildcard(path string) (wildcard string, i int, valid bool) {\n // Find start\n for start, c := range []byte(path) {\n  // A wildcard starts with ':' (param) or '*' (catch-all)\n  if c != ':' && c != '*' {\n   continue\n  }\n\n  // Find end and check for invalid characters\n  valid = true\n  for end, c := range []byte(path[start+1:]) {\n   switch c {\n   case '/':\n    return path[start : start+1+end], start, valid\n   case ':', '*':\n    valid = false\n   }\n  }\n  return path[start:], start, valid\n }\n return \"\", -1, false\n}\n\nfunc (n *node) insertChild(path string, fullPath string, handlers HandlersChain) {\n for {\n  // Find prefix until first wildcard\n  wildcard, i, valid := findWildcard(path)\n  if i < 0 { // No wildcard found\n   break\n  }\n\n  // The wildcard name must not contain ':' and '*'\n  if !valid {\n   panic(\"only one wildcard per path segment is allowed, has: '\" +\n    wildcard + \"' in path '\" + fullPath + \"'\")\n  }\n\n  // check if the wildcard has a name\n  if len(wildcard) < 2 {\n   panic(\"wildcards must be named with a non-empty name in path '\" + fullPath + \"'\")\n  }\n\n  if wildcard[0] == ':' { // param\n   if i > 0 {\n    // Insert prefix before the current wildcard\n    n.path = path[:i]\n    path = path[i:]\n   }\n\n   child := &node{\n    nType:    param,\n    path:     wildcard,\n    fullPath: fullPath,\n   }\n   n.addChild(child)\n   n.wildChild = true\n   n = child\n   n.priority++\n\n   // if the path doesn't end with the wildcard, then there\n   // will be another non-wildcard subpath starting with '/'\n   if len(wildcard) < len(path) {\n    path = path[len(wildcard):]\n\n    child := &node{\n     priority: 1,\n     fullPath: fullPath,\n    }\n    n.addChild(child)\n    n = child\n    continue\n   }\n\n   // Otherwise we're done. Insert the handle in the new leaf\n   n.handlers = handlers\n   return\n  }\n\n  // catchAll\n  if i+len(wildcard) != len(path) {\n   panic(\"catch-all routes are only allowed at the end of the path in path '\" + fullPath + \"'\")\n  }\n\n  if len(n.path) > 0 && n.path[len(n.path)-1] == '/' {\n   panic(\"catch-all conflicts with existing handle for the path segment root in path '\" + fullPath + \"'\")\n  }\n\n  // currently fixed width 1 for '/'\n  i--\n  if path[i] != '/' {\n   panic(\"no / before catch-all in path '\" + fullPath + \"'\")\n  }\n\n  n.path = path[:i]\n\n  // First node: catchAll node with empty path\n  child := &node{\n   wildChild: true,\n   nType:     catchAll,\n   fullPath:  fullPath,\n  }\n\n  n.addChild(child)\n  n.indices = string('/')\n  n = child\n  n.priority++\n\n  // second node: node holding the variable\n  child = &node{\n   path:     path[i:],\n   nType:    catchAll,\n   handlers: handlers,\n   priority: 1,\n   fullPath: fullPath,\n  }\n  n.children = []*node{child}\n\n  return\n }\n\n // If no wildcard was found, simply insert the path and handle\n n.path = path\n n.handlers = handlers\n n.fullPath = fullPath\n}\n\n// nodeValue holds return values of (*Node).getValue method\ntype nodeValue struct {\n handlers HandlersChain\n params   *Params\n tsr      bool\n fullPath string\n}\n\ntype skippedNode struct {\n path        string\n node        *node\n paramsCount int16\n}\n\n// Returns the handle registered with the given path (key). The values of\n// wildcards are saved to a map.\n// If no handle can be found, a TSR (trailing slash redirect) recommendation is\n// made if a handle exists with an extra (without the) trailing slash for the\n// given path.\nfunc (n *node) getValue(path string, params *Params, skippedNodes *[]skippedNode, unescape bool) (value nodeValue) {\n var globalParamsCount int16\n\nwalk: // Outer loop for walking the tree\n for {\n  prefix := n.path\n  if len(path) > len(prefix) {\n   if path[:len(prefix)] == prefix {\n    path = path[len(prefix):]\n\n    // Try all the non-wildcard children first by matching the indices\n    idxc := path[0]\n    for i, c := range []byte(n.indices) {\n     if c == idxc {\n      //  strings.HasPrefix(n.children[len(n.children)-1].path, \":\") == n.wildChild\n      if n.wildChild {\n       index := len(*skippedNodes)\n       *skippedNodes = (*skippedNodes)[:index+1]\n       (*skippedNodes)[index] = skippedNode{\n        path: prefix + path,\n        node: &node{\n         path:      n.path,\n         wildChild: n.wildChild,\n         nType:     n.nType,\n         priority:  n.priority,\n         children:  n.children,\n         handlers:  n.handlers,\n         fullPath:  n.fullPath,\n        },\n        paramsCount: globalParamsCount,\n       }\n      }\n\n      n = n.children[i]\n      continue walk\n     }\n    }\n\n    if !n.wildChild {\n     // If the path at the end of the loop is not equal to '/' and the current node has no child nodes\n     // the current node needs to roll back to last vaild skippedNode\n     if path != \"/\" {\n      for l := len(*skippedNodes); l > 0; {\n       skippedNode := (*skippedNodes)[l-1]\n       *skippedNodes = (*skippedNodes)[:l-1]\n       if strings.HasSuffix(skippedNode.path, path) {\n        path = skippedNode.path\n        n = skippedNode.node\n        if value.params != nil {\n         *value.params = (*value.params)[:skippedNode.paramsCount]\n        }\n        globalParamsCount = skippedNode.paramsCount\n        continue walk\n       }\n      }\n     }\n\n     // Nothing found.\n     // We can recommend to redirect to the same URL without a\n     // trailing slash if a leaf exists for that path.\n     value.tsr = path == \"/\" && n.handlers != nil\n     return\n    }\n\n    // Handle wildcard child, which is always at the end of the array\n    n = n.children[len(n.children)-1]\n    globalParamsCount++\n\n    switch n.nType {\n    case param:\n     // fix truncate the parameter\n     // tree_test.go  line: 204\n\n     // Find param end (either '/' or path end)\n     end := 0\n     for end < len(path) && path[end] != '/' {\n      end++\n     }\n\n     // Save param value\n     if params != nil && cap(*params) > 0 {\n      if value.params == nil {\n       value.params = params\n      }\n      // Expand slice within preallocated capacity\n      i := len(*value.params)\n      *value.params = (*value.params)[:i+1]\n      val := path[:end]\n      if unescape {\n       if v, err := url.QueryUnescape(val); err == nil {\n        val = v\n       }\n      }\n      (*value.params)[i] = Param{\n       Key:   n.path[1:],\n       Value: val,\n      }\n     }\n\n     // we need to go deeper!\n     if end < len(path) {\n      if len(n.children) > 0 {\n       path = path[end:]\n       n = n.children[0]\n       continue walk\n      }\n\n      // ... but we can't\n      value.tsr = len(path) == end+1\n      return\n     }\n\n     if value.handlers = n.handlers; value.handlers != nil {\n      value.fullPath = n.fullPath\n      return\n     }\n     if len(n.children) == 1 {\n      // No handle found. Check if a handle for this path + a\n      // trailing slash exists for TSR recommendation\n      n = n.children[0]\n      value.tsr = n.path == \"/\" && n.handlers != nil\n     }\n     return\n\n    case catchAll:\n     // Save param value\n     if params != nil {\n      if value.params == nil {\n       value.params = params\n      }\n      // Expand slice within preallocated capacity\n      i := len(*value.params)\n      *value.params = (*value.params)[:i+1]\n      val := path\n      if unescape {\n       if v, err := url.QueryUnescape(path); err == nil {\n        val = v\n       }\n      }\n      (*value.params)[i] = Param{\n       Key:   n.path[2:],\n       Value: val,\n      }\n     }\n\n     value.handlers = n.handlers\n     value.fullPath = n.fullPath\n     return\n\n    default:\n     panic(\"invalid node type\")\n    }\n   }\n  }\n\n  if path == prefix {\n   // If the current path does not equal '/' and the node does not have a registered handle and the most recently matched node has a child node\n   // the current node needs to roll back to last vaild skippedNode\n   if n.handlers == nil && path != \"/\" {\n    for l := len(*skippedNodes); l > 0; {\n     skippedNode := (*skippedNodes)[l-1]\n     *skippedNodes = (*skippedNodes)[:l-1]\n     if strings.HasSuffix(skippedNode.path, path) {\n      path = skippedNode.path\n      n = skippedNode.node\n      if value.params != nil {\n       *value.params = (*value.params)[:skippedNode.paramsCount]\n      }\n      globalParamsCount = skippedNode.paramsCount\n      continue walk\n     }\n    }\n    // n = latestNode.children[len(latestNode.children)-1]\n   }\n   // We should have reached the node containing the handle.\n   // Check if this node has a handle registered.\n   if value.handlers = n.handlers; value.handlers != nil {\n    value.fullPath = n.fullPath\n    return\n   }\n\n   // If there is no handle for this route, but this route has a\n   // wildcard child, there must be a handle for this path with an\n   // additional trailing slash\n   if path == \"/\" && n.wildChild && n.nType != root {\n    value.tsr = true\n    return\n   }\n\n   // No handle found. Check if a handle for this path + a\n   // trailing slash exists for trailing slash recommendation\n   for i, c := range []byte(n.indices) {\n    if c == '/' {\n     n = n.children[i]\n     value.tsr = (len(n.path) == 1 && n.handlers != nil) ||\n      (n.nType == catchAll && n.children[0].handlers != nil)\n     return\n    }\n   }\n\n   return\n  }\n\n  // Nothing found. We can recommend to redirect to the same URL with an\n  // extra trailing slash if a leaf exists for that path\n  value.tsr = path == \"/\" ||\n   (len(prefix) == len(path)+1 && prefix[len(path)] == '/' &&\n    path == prefix[:len(prefix)-1] && n.handlers != nil)\n\n  // roll back to last valid skippedNode\n  if !value.tsr && path != \"/\" {\n   for l := len(*skippedNodes); l > 0; {\n    skippedNode := (*skippedNodes)[l-1]\n    *skippedNodes = (*skippedNodes)[:l-1]\n    if strings.HasSuffix(skippedNode.path, path) {\n     path = skippedNode.path\n     n = skippedNode.node\n     if value.params != nil {\n      *value.params = (*value.params)[:skippedNode.paramsCount]\n     }\n     globalParamsCount = skippedNode.paramsCount\n     continue walk\n    }\n   }\n  }\n\n  return\n }\n}\n\n// Makes a case-insensitive lookup of the given path and tries to find a handler.\n// It can optionally also fix trailing slashes.\n// It returns the case-corrected path and a bool indicating whether the lookup\n// was successful.\nfunc (n *node) findCaseInsensitivePath(path string, fixTrailingSlash bool) ([]byte, bool) {\n const stackBufSize = 128\n\n // Use a static sized buffer on the stack in the common case.\n // If the path is too long, allocate a buffer on the heap instead.\n buf := make([]byte, 0, stackBufSize)\n if length := len(path) + 1; length > stackBufSize {\n  buf = make([]byte, 0, length)\n }\n\n ciPath := n.findCaseInsensitivePathRec(\n  path,\n  buf,       // Preallocate enough memory for new path\n  [4]byte{}, // Empty rune buffer\n  fixTrailingSlash,\n )\n\n return ciPath, ciPath != nil\n}\n\n// Shift bytes in array by n bytes left\nfunc shiftNRuneBytes(rb [4]byte, n int) [4]byte {\n switch n {\n case 0:\n  return rb\n case 1:\n  return [4]byte{rb[1], rb[2], rb[3], 0}\n case 2:\n  return [4]byte{rb[2], rb[3]}\n case 3:\n  return [4]byte{rb[3]}\n default:\n  return [4]byte{}\n }\n}\n\n// Recursive case-insensitive lookup function used by n.findCaseInsensitivePath\nfunc (n *node) findCaseInsensitivePathRec(path string, ciPath []byte, rb [4]byte, fixTrailingSlash bool) []byte {\n npLen := len(n.path)\n\nwalk: // Outer loop for walking the tree\n for len(path) >= npLen && (npLen == 0 || strings.EqualFold(path[1:npLen], n.path[1:])) {\n  // Add common prefix to result\n  oldPath := path\n  path = path[npLen:]\n  ciPath = append(ciPath, n.path...)\n\n  if len(path) == 0 {\n   // We should have reached the node containing the handle.\n   // Check if this node has a handle registered.\n   if n.handlers != nil {\n    return ciPath\n   }\n\n   // No handle found.\n   // Try to fix the path by adding a trailing slash\n   if fixTrailingSlash {\n    for i, c := range []byte(n.indices) {\n     if c == '/' {\n      n = n.children[i]\n      if (len(n.path) == 1 && n.handlers != nil) ||\n       (n.nType == catchAll && n.children[0].handlers != nil) {\n       return append(ciPath, '/')\n      }\n      return nil\n     }\n    }\n   }\n   return nil\n  }\n\n  // If this node does not have a wildcard (param or catchAll) child,\n  // we can just look up the next child node and continue to walk down\n  // the tree\n  if !n.wildChild {\n   // Skip rune bytes already processed\n   rb = shiftNRuneBytes(rb, npLen)\n\n   if rb[0] != 0 {\n    // Old rune not finished\n    idxc := rb[0]\n    for i, c := range []byte(n.indices) {\n     if c == idxc {\n      // continue with child node\n      n = n.children[i]\n      npLen = len(n.path)\n      continue walk\n     }\n    }\n   } else {\n    // Process a new rune\n    var rv rune\n\n    // Find rune start.\n    // Runes are up to 4 byte long,\n    // -4 would definitely be another rune.\n    var off int\n    for max := min(npLen, 3); off < max; off++ {\n     if i := npLen - off; utf8.RuneStart(oldPath[i]) {\n      // read rune from cached path\n      rv, _ = utf8.DecodeRuneInString(oldPath[i:])\n      break\n     }\n    }\n\n    // Calculate lowercase bytes of current rune\n    lo := unicode.ToLower(rv)\n    utf8.EncodeRune(rb[:], lo)\n\n    // Skip already processed bytes\n    rb = shiftNRuneBytes(rb, off)\n\n    idxc := rb[0]\n    for i, c := range []byte(n.indices) {\n     // Lowercase matches\n     if c == idxc {\n      // must use a recursive approach since both the\n      // uppercase byte and the lowercase byte might exist\n      // as an index\n      if out := n.children[i].findCaseInsensitivePathRec(\n       path, ciPath, rb, fixTrailingSlash,\n      ); out != nil {\n       return out\n      }\n      break\n     }\n    }\n\n    // If we found no match, the same for the uppercase rune,\n    // if it differs\n    if up := unicode.ToUpper(rv); up != lo {\n     utf8.EncodeRune(rb[:], up)\n     rb = shiftNRuneBytes(rb, off)\n\n     idxc := rb[0]\n     for i, c := range []byte(n.indices) {\n      // Uppercase matches\n      if c == idxc {\n       // Continue with child node\n       n = n.children[i]\n       npLen = len(n.path)\n       continue walk\n      }\n     }\n    }\n   }\n\n   // Nothing found. We can recommend to redirect to the same URL\n   // without a trailing slash if a leaf exists for that path\n   if fixTrailingSlash && path == \"/\" && n.handlers != nil {\n    return ciPath\n   }\n   return nil\n  }\n\n  n = n.children[0]\n  switch n.nType {\n  case param:\n   // Find param end (either '/' or path end)\n   end := 0\n   for end < len(path) && path[end] != '/' {\n    end++\n   }\n\n   // Add param value to case insensitive path\n   ciPath = append(ciPath, path[:end]...)\n\n   // We need to go deeper!\n   if end < len(path) {\n    if len(n.children) > 0 {\n     // Continue with child node\n     n = n.children[0]\n     npLen = len(n.path)\n     path = path[end:]\n     continue\n    }\n\n    // ... but we can't\n    if fixTrailingSlash && len(path) == end+1 {\n     return ciPath\n    }\n    return nil\n   }\n\n   if n.handlers != nil {\n    return ciPath\n   }\n\n   if fixTrailingSlash && len(n.children) == 1 {\n    // No handle found. Check if a handle for this path + a\n    // trailing slash exists\n    n = n.children[0]\n    if n.path == \"/\" && n.handlers != nil {\n     return append(ciPath, '/')\n    }\n   }\n\n   return nil\n\n  case catchAll:\n   return append(ciPath, path...)\n\n  default:\n   panic(\"invalid node type\")\n  }\n }\n\n // Nothing found.\n // Try to fix the path by adding / removing a trailing slash\n if fixTrailingSlash {\n  if path == \"/\" {\n   return ciPath\n  }\n  if len(path)+1 == npLen && n.path[len(path)] == '/' &&\n   strings.EqualFold(path[1:], n.path[1:len(path)]) && n.handlers != nil {\n   return append(ciPath, n.path...)\n  }\n }\n return nil\n}\n\n")))}u.isMDXComponent=!0}}]);