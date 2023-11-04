"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[55913],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),l=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(d.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=l(t),h=i,f=c["".concat(d,".").concat(h)]||c[h]||g[h]||a;return t?r.createElement(f,s(s({ref:n},u),{},{components:t})):r.createElement(f,s({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=h;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o[c]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},25037:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=t(87462),i=(t(67294),t(3905));const a={},s="gin",o={unversionedId:"backend/go/gin/source/1.7.7/gin",id:"backend/go/gin/source/1.7.7/gin",title:"gin",description:"",source:"@site/docs/backend/go/gin/source/1.7.7/gin.md",sourceDirName:"backend/go/gin/source/1.7.7",slug:"/backend/go/gin/source/1.7.7/gin",permalink:"/docs/backend/go/gin/source/1.7.7/gin",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"fs",permalink:"/docs/backend/go/gin/source/1.7.7/fs"},next:{title:"logger",permalink:"/docs/backend/go/gin/source/1.7.7/logger"}},d={},l=[],u={toc:l},c="wrapper";function g(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gin"},"gin"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// Copyright 2014 Manu Martinez-Almeida.  All rights reserved.\n// Use of this source code is governed by a MIT style\n// license that can be found in the LICENSE file.\n\npackage gin\n\nimport (\n "fmt"\n "html/template"\n "net"\n "net/http"\n "os"\n "path"\n "reflect"\n "strings"\n "sync"\n\n "github.com/gin-gonic/gin/internal/bytesconv"\n "github.com/gin-gonic/gin/render"\n)\n\nconst defaultMultipartMemory = 32 << 20 // 32 MB\n\nvar (\n default404Body = []byte("404 page not found")\n default405Body = []byte("405 method not allowed")\n)\n\nvar defaultPlatform string\n\nvar defaultTrustedCIDRs = []*net.IPNet{{IP: net.IP{0x0, 0x0, 0x0, 0x0}, Mask: net.IPMask{0x0, 0x0, 0x0, 0x0}}} // 0.0.0.0/0\n\n// HandlerFunc defines the handler used by gin middleware as return value.\ntype HandlerFunc func(*Context)\n\n// HandlersChain defines a HandlerFunc array.\ntype HandlersChain []HandlerFunc\n\n// Last returns the last handler in the chain. ie. the last handler is the main one.\nfunc (c HandlersChain) Last() HandlerFunc {\n if length := len(c); length > 0 {\n  return c[length-1]\n }\n return nil\n}\n\n// RouteInfo represents a request route\'s specification which contains method and path and its handler.\ntype RouteInfo struct {\n Method      string\n Path        string\n Handler     string\n HandlerFunc HandlerFunc\n}\n\n// RoutesInfo defines a RouteInfo array.\ntype RoutesInfo []RouteInfo\n\n// Trusted platforms\nconst (\n // When running on Google App Engine. Trust X-Appengine-Remote-Addr\n // for determining the client\'s IP\n PlatformGoogleAppEngine = "X-Appengine-Remote-Addr"\n // When using Cloudflare\'s CDN. Trust CF-Connecting-IP for determining\n // the client\'s IP\n PlatformCloudflare = "CF-Connecting-IP"\n)\n\n// Engine is the framework\'s instance, it contains the muxer, middleware and configuration settings.\n// Create an instance of Engine, by using New() or Default()\ntype Engine struct {\n RouterGroup\n\n // Enables automatic redirection if the current route can\'t be matched but a\n // handler for the path with (without) the trailing slash exists.\n // For example if /foo/ is requested but a route only exists for /foo, the\n // client is redirected to /foo with http status code 301 for GET requests\n // and 307 for all other request methods.\n RedirectTrailingSlash bool\n\n // If enabled, the router tries to fix the current request path, if no\n // handle is registered for it.\n // First superfluous path elements like ../ or // are removed.\n // Afterwards the router does a case-insensitive lookup of the cleaned path.\n // If a handle can be found for this route, the router makes a redirection\n // to the corrected path with status code 301 for GET requests and 307 for\n // all other request methods.\n // For example /FOO and /..//Foo could be redirected to /foo.\n // RedirectTrailingSlash is independent of this option.\n RedirectFixedPath bool\n\n // If enabled, the router checks if another method is allowed for the\n // current route, if the current request can not be routed.\n // If this is the case, the request is answered with \'Method Not Allowed\'\n // and HTTP status code 405.\n // If no other Method is allowed, the request is delegated to the NotFound\n // handler.\n HandleMethodNotAllowed bool\n\n // If enabled, client IP will be parsed from the request\'s headers that\n // match those stored at `(*gin.Engine).RemoteIPHeaders`. If no IP was\n // fetched, it falls back to the IP obtained from\n // `(*gin.Context).Request.RemoteAddr`.\n ForwardedByClientIP bool\n\n // DEPRECATED: USE `TrustedPlatform` WITH VALUE `gin.GoogleAppEngine` INSTEAD\n // #726 #755 If enabled, it will trust some headers starting with\n // \'X-AppEngine...\' for better integration with that PaaS.\n AppEngine bool\n\n // If enabled, the url.RawPath will be used to find parameters.\n UseRawPath bool\n\n // If true, the path value will be unescaped.\n // If UseRawPath is false (by default), the UnescapePathValues effectively is true,\n // as url.Path gonna be used, which is already unescaped.\n UnescapePathValues bool\n\n // RemoveExtraSlash a parameter can be parsed from the URL even with extra slashes.\n // See the PR #1817 and issue #1644\n RemoveExtraSlash bool\n\n // List of headers used to obtain the client IP when\n // `(*gin.Engine).ForwardedByClientIP` is `true` and\n // `(*gin.Context).Request.RemoteAddr` is matched by at least one of the\n // network origins of list defined by `(*gin.Engine).SetTrustedProxies()`.\n RemoteIPHeaders []string\n\n // If set to a constant of value gin.Platform*, trusts the headers set by\n // that platform, for example to determine the client IP\n TrustedPlatform string\n\n // Value of \'maxMemory\' param that is given to http.Request\'s ParseMultipartForm\n // method call.\n MaxMultipartMemory int64\n\n delims           render.Delims\n secureJSONPrefix string\n HTMLRender       render.HTMLRender\n FuncMap          template.FuncMap\n allNoRoute       HandlersChain\n allNoMethod      HandlersChain\n noRoute          HandlersChain\n noMethod         HandlersChain\n pool             sync.Pool\n trees            methodTrees\n maxParams        uint16\n maxSections      uint16\n trustedProxies   []string\n trustedCIDRs     []*net.IPNet\n}\n\nvar _ IRouter = &Engine{}\n\n// New returns a new blank Engine instance without any middleware attached.\n// By default the configuration is:\n// - RedirectTrailingSlash:  true\n// - RedirectFixedPath:      false\n// - HandleMethodNotAllowed: false\n// - ForwardedByClientIP:    true\n// - UseRawPath:             false\n// - UnescapePathValues:     true\nfunc New() *Engine {\n debugPrintWARNINGNew()\n engine := &Engine{\n  RouterGroup: RouterGroup{\n   Handlers: nil,\n   basePath: "/",\n   root:     true,\n  },\n  FuncMap:                template.FuncMap{},\n  RedirectTrailingSlash:  true,\n  RedirectFixedPath:      false,\n  HandleMethodNotAllowed: false,\n  ForwardedByClientIP:    true,\n  RemoteIPHeaders:        []string{"X-Forwarded-For", "X-Real-IP"},\n  TrustedPlatform:        defaultPlatform,\n  UseRawPath:             false,\n  RemoveExtraSlash:       false,\n  UnescapePathValues:     true,\n  MaxMultipartMemory:     defaultMultipartMemory,\n  trees:                  make(methodTrees, 0, 9),\n  delims:                 render.Delims{Left: "{{", Right: "}}"},\n  secureJSONPrefix:       "while(1);",\n  trustedProxies:         []string{"0.0.0.0/0"},\n  trustedCIDRs:           defaultTrustedCIDRs,\n }\n engine.RouterGroup.engine = engine\n engine.pool.New = func() interface{} {\n  return engine.allocateContext()\n }\n return engine\n}\n\n// Default returns an Engine instance with the Logger and Recovery middleware already attached.\nfunc Default() *Engine {\n debugPrintWARNINGDefault()\n engine := New()\n engine.Use(Logger(), Recovery())\n return engine\n}\n\nfunc (engine *Engine) allocateContext() *Context {\n v := make(Params, 0, engine.maxParams)\n skippedNodes := make([]skippedNode, 0, engine.maxSections)\n return &Context{engine: engine, params: &v, skippedNodes: &skippedNodes}\n}\n\n// Delims sets template left and right delims and returns a Engine instance.\nfunc (engine *Engine) Delims(left, right string) *Engine {\n engine.delims = render.Delims{Left: left, Right: right}\n return engine\n}\n\n// SecureJsonPrefix sets the secureJSONPrefix used in Context.SecureJSON.\nfunc (engine *Engine) SecureJsonPrefix(prefix string) *Engine {\n engine.secureJSONPrefix = prefix\n return engine\n}\n\n// LoadHTMLGlob loads HTML files identified by glob pattern\n// and associates the result with HTML renderer.\nfunc (engine *Engine) LoadHTMLGlob(pattern string) {\n left := engine.delims.Left\n right := engine.delims.Right\n templ := template.Must(template.New("").Delims(left, right).Funcs(engine.FuncMap).ParseGlob(pattern))\n\n if IsDebugging() {\n  debugPrintLoadTemplate(templ)\n  engine.HTMLRender = render.HTMLDebug{Glob: pattern, FuncMap: engine.FuncMap, Delims: engine.delims}\n  return\n }\n\n engine.SetHTMLTemplate(templ)\n}\n\n// LoadHTMLFiles loads a slice of HTML files\n// and associates the result with HTML renderer.\nfunc (engine *Engine) LoadHTMLFiles(files ...string) {\n if IsDebugging() {\n  engine.HTMLRender = render.HTMLDebug{Files: files, FuncMap: engine.FuncMap, Delims: engine.delims}\n  return\n }\n\n templ := template.Must(template.New("").Delims(engine.delims.Left, engine.delims.Right).Funcs(engine.FuncMap).ParseFiles(files...))\n engine.SetHTMLTemplate(templ)\n}\n\n// SetHTMLTemplate associate a template with HTML renderer.\nfunc (engine *Engine) SetHTMLTemplate(templ *template.Template) {\n if len(engine.trees) > 0 {\n  debugPrintWARNINGSetHTMLTemplate()\n }\n\n engine.HTMLRender = render.HTMLProduction{Template: templ.Funcs(engine.FuncMap)}\n}\n\n// SetFuncMap sets the FuncMap used for template.FuncMap.\nfunc (engine *Engine) SetFuncMap(funcMap template.FuncMap) {\n engine.FuncMap = funcMap\n}\n\n// NoRoute adds handlers for NoRoute. It return a 404 code by default.\nfunc (engine *Engine) NoRoute(handlers ...HandlerFunc) {\n engine.noRoute = handlers\n engine.rebuild404Handlers()\n}\n\n// NoMethod sets the handlers called when Engine.HandleMethodNotAllowed = true.\nfunc (engine *Engine) NoMethod(handlers ...HandlerFunc) {\n engine.noMethod = handlers\n engine.rebuild405Handlers()\n}\n\n// Use attaches a global middleware to the router. ie. the middleware attached though Use() will be\n// included in the handlers chain for every single request. Even 404, 405, static files...\n// For example, this is the right place for a logger or error management middleware.\nfunc (engine *Engine) Use(middleware ...HandlerFunc) IRoutes {\n engine.RouterGroup.Use(middleware...)\n engine.rebuild404Handlers()\n engine.rebuild405Handlers()\n return engine\n}\n\nfunc (engine *Engine) rebuild404Handlers() {\n engine.allNoRoute = engine.combineHandlers(engine.noRoute)\n}\n\nfunc (engine *Engine) rebuild405Handlers() {\n engine.allNoMethod = engine.combineHandlers(engine.noMethod)\n}\n\nfunc (engine *Engine) addRoute(method, path string, handlers HandlersChain) {\n assert1(path[0] == \'/\', "path must begin with \'/\'")\n assert1(method != "", "HTTP method can not be empty")\n assert1(len(handlers) > 0, "there must be at least one handler")\n\n debugPrintRoute(method, path, handlers)\n\n root := engine.trees.get(method)\n if root == nil {\n  root = new(node)\n  root.fullPath = "/"\n  engine.trees = append(engine.trees, methodTree{method: method, root: root})\n }\n root.addRoute(path, handlers)\n\n // Update maxParams\n if paramsCount := countParams(path); paramsCount > engine.maxParams {\n  engine.maxParams = paramsCount\n }\n\n if sectionsCount := countSections(path); sectionsCount > engine.maxSections {\n  engine.maxSections = sectionsCount\n }\n}\n\n// Routes returns a slice of registered routes, including some useful information, such as:\n// the http method, path and the handler name.\nfunc (engine *Engine) Routes() (routes RoutesInfo) {\n for _, tree := range engine.trees {\n  routes = iterate("", tree.method, routes, tree.root)\n }\n return routes\n}\n\nfunc iterate(path, method string, routes RoutesInfo, root *node) RoutesInfo {\n path += root.path\n if len(root.handlers) > 0 {\n  handlerFunc := root.handlers.Last()\n  routes = append(routes, RouteInfo{\n   Method:      method,\n   Path:        path,\n   Handler:     nameOfFunction(handlerFunc),\n   HandlerFunc: handlerFunc,\n  })\n }\n for _, child := range root.children {\n  routes = iterate(path, method, routes, child)\n }\n return routes\n}\n\n// Run attaches the router to a http.Server and starts listening and serving HTTP requests.\n// It is a shortcut for http.ListenAndServe(addr, router)\n// Note: this method will block the calling goroutine indefinitely unless an error happens.\nfunc (engine *Engine) Run(addr ...string) (err error) {\n defer func() { debugPrintError(err) }()\n\n if engine.isUnsafeTrustedProxies() {\n  debugPrint("[WARNING] You trusted all proxies, this is NOT safe. We recommend you to set a value.\\n" +\n   "Please check https://pkg.go.dev/github.com/gin-gonic/gin#readme-don-t-trust-all-proxies for details.")\n }\n\n address := resolveAddress(addr)\n debugPrint("Listening and serving HTTP on %s\\n", address)\n err = http.ListenAndServe(address, engine)\n return\n}\n\nfunc (engine *Engine) prepareTrustedCIDRs() ([]*net.IPNet, error) {\n if engine.trustedProxies == nil {\n  return nil, nil\n }\n\n cidr := make([]*net.IPNet, 0, len(engine.trustedProxies))\n for _, trustedProxy := range engine.trustedProxies {\n  if !strings.Contains(trustedProxy, "/") {\n   ip := parseIP(trustedProxy)\n   if ip == nil {\n    return cidr, &net.ParseError{Type: "IP address", Text: trustedProxy}\n   }\n\n   switch len(ip) {\n   case net.IPv4len:\n    trustedProxy += "/32"\n   case net.IPv6len:\n    trustedProxy += "/128"\n   }\n  }\n  _, cidrNet, err := net.ParseCIDR(trustedProxy)\n  if err != nil {\n   return cidr, err\n  }\n  cidr = append(cidr, cidrNet)\n }\n return cidr, nil\n}\n\n// SetTrustedProxies set a list of network origins (IPv4 addresses,\n// IPv4 CIDRs, IPv6 addresses or IPv6 CIDRs) from which to trust\n// request\'s headers that contain alternative client IP when\n// `(*gin.Engine).ForwardedByClientIP` is `true`. `TrustedProxies`\n// feature is enabled by default, and it also trusts all proxies\n// by default. If you want to disable this feature, use\n// Engine.SetTrustedProxies(nil), then Context.ClientIP() will\n// return the remote address directly.\nfunc (engine *Engine) SetTrustedProxies(trustedProxies []string) error {\n engine.trustedProxies = trustedProxies\n return engine.parseTrustedProxies()\n}\n\n// isUnsafeTrustedProxies compares Engine.trustedCIDRs and defaultTrustedCIDRs, it\'s not safe if equal (returns true)\nfunc (engine *Engine) isUnsafeTrustedProxies() bool {\n return reflect.DeepEqual(engine.trustedCIDRs, defaultTrustedCIDRs)\n}\n\n// parseTrustedProxies parse Engine.trustedProxies to Engine.trustedCIDRs\nfunc (engine *Engine) parseTrustedProxies() error {\n trustedCIDRs, err := engine.prepareTrustedCIDRs()\n engine.trustedCIDRs = trustedCIDRs\n return err\n}\n\n// parseIP parse a string representation of an IP and returns a net.IP with the\n// minimum byte representation or nil if input is invalid.\nfunc parseIP(ip string) net.IP {\n parsedIP := net.ParseIP(ip)\n\n if ipv4 := parsedIP.To4(); ipv4 != nil {\n  // return ip in a 4-byte representation\n  return ipv4\n }\n\n // return ip in a 16-byte representation or nil\n return parsedIP\n}\n\n// RunTLS attaches the router to a http.Server and starts listening and serving HTTPS (secure) requests.\n// It is a shortcut for http.ListenAndServeTLS(addr, certFile, keyFile, router)\n// Note: this method will block the calling goroutine indefinitely unless an error happens.\nfunc (engine *Engine) RunTLS(addr, certFile, keyFile string) (err error) {\n debugPrint("Listening and serving HTTPS on %s\\n", addr)\n defer func() { debugPrintError(err) }()\n\n if engine.isUnsafeTrustedProxies() {\n  debugPrint("[WARNING] You trusted all proxies, this is NOT safe. We recommend you to set a value.\\n" +\n   "Please check https://pkg.go.dev/github.com/gin-gonic/gin#readme-don-t-trust-all-proxies for details.")\n }\n\n err = http.ListenAndServeTLS(addr, certFile, keyFile, engine)\n return\n}\n\n// RunUnix attaches the router to a http.Server and starts listening and serving HTTP requests\n// through the specified unix socket (ie. a file).\n// Note: this method will block the calling goroutine indefinitely unless an error happens.\nfunc (engine *Engine) RunUnix(file string) (err error) {\n debugPrint("Listening and serving HTTP on unix:/%s", file)\n defer func() { debugPrintError(err) }()\n\n if engine.isUnsafeTrustedProxies() {\n  debugPrint("[WARNING] You trusted all proxies, this is NOT safe. We recommend you to set a value.\\n" +\n   "Please check https://pkg.go.dev/github.com/gin-gonic/gin#readme-don-t-trust-all-proxies for details.")\n }\n\n listener, err := net.Listen("unix", file)\n if err != nil {\n  return\n }\n defer listener.Close()\n defer os.Remove(file)\n\n err = http.Serve(listener, engine)\n return\n}\n\n// RunFd attaches the router to a http.Server and starts listening and serving HTTP requests\n// through the specified file descriptor.\n// Note: this method will block the calling goroutine indefinitely unless an error happens.\nfunc (engine *Engine) RunFd(fd int) (err error) {\n debugPrint("Listening and serving HTTP on fd@%d", fd)\n defer func() { debugPrintError(err) }()\n\n if engine.isUnsafeTrustedProxies() {\n  debugPrint("[WARNING] You trusted all proxies, this is NOT safe. We recommend you to set a value.\\n" +\n   "Please check https://pkg.go.dev/github.com/gin-gonic/gin#readme-don-t-trust-all-proxies for details.")\n }\n\n f := os.NewFile(uintptr(fd), fmt.Sprintf("fd@%d", fd))\n listener, err := net.FileListener(f)\n if err != nil {\n  return\n }\n defer listener.Close()\n err = engine.RunListener(listener)\n return\n}\n\n// RunListener attaches the router to a http.Server and starts listening and serving HTTP requests\n// through the specified net.Listener\nfunc (engine *Engine) RunListener(listener net.Listener) (err error) {\n debugPrint("Listening and serving HTTP on listener what\'s bind with address@%s", listener.Addr())\n defer func() { debugPrintError(err) }()\n\n if engine.isUnsafeTrustedProxies() {\n  debugPrint("[WARNING] You trusted all proxies, this is NOT safe. We recommend you to set a value.\\n" +\n   "Please check https://pkg.go.dev/github.com/gin-gonic/gin#readme-don-t-trust-all-proxies for details.")\n }\n\n err = http.Serve(listener, engine)\n return\n}\n\n// ServeHTTP conforms to the http.Handler interface.\nfunc (engine *Engine) ServeHTTP(w http.ResponseWriter, req *http.Request) {\n c := engine.pool.Get().(*Context)\n c.writermem.reset(w)\n c.Request = req\n c.reset()\n\n engine.handleHTTPRequest(c)\n\n engine.pool.Put(c)\n}\n\n// HandleContext re-enter a context that has been rewritten.\n// This can be done by setting c.Request.URL.Path to your new target.\n// Disclaimer: You can loop yourself to death with this, use wisely.\nfunc (engine *Engine) HandleContext(c *Context) {\n oldIndexValue := c.index\n c.reset()\n engine.handleHTTPRequest(c)\n\n c.index = oldIndexValue\n}\n\nfunc (engine *Engine) handleHTTPRequest(c *Context) {\n httpMethod := c.Request.Method\n rPath := c.Request.URL.Path\n unescape := false\n if engine.UseRawPath && len(c.Request.URL.RawPath) > 0 {\n  rPath = c.Request.URL.RawPath\n  unescape = engine.UnescapePathValues\n }\n\n if engine.RemoveExtraSlash {\n  rPath = cleanPath(rPath)\n }\n\n // Find root of the tree for the given HTTP method\n t := engine.trees\n for i, tl := 0, len(t); i < tl; i++ {\n  if t[i].method != httpMethod {\n   continue\n  }\n  root := t[i].root\n  // Find route in tree\n  value := root.getValue(rPath, c.params, c.skippedNodes, unescape)\n  if value.params != nil {\n   c.Params = *value.params\n  }\n  if value.handlers != nil {\n   c.handlers = value.handlers\n   c.fullPath = value.fullPath\n   c.Next()\n   c.writermem.WriteHeaderNow()\n   return\n  }\n  if httpMethod != "CONNECT" && rPath != "/" {\n   if value.tsr && engine.RedirectTrailingSlash {\n    redirectTrailingSlash(c)\n    return\n   }\n   if engine.RedirectFixedPath && redirectFixedPath(c, root, engine.RedirectFixedPath) {\n    return\n   }\n  }\n  break\n }\n\n if engine.HandleMethodNotAllowed {\n  for _, tree := range engine.trees {\n   if tree.method == httpMethod {\n    continue\n   }\n   if value := tree.root.getValue(rPath, nil, c.skippedNodes, unescape); value.handlers != nil {\n    c.handlers = engine.allNoMethod\n    serveError(c, http.StatusMethodNotAllowed, default405Body)\n    return\n   }\n  }\n }\n c.handlers = engine.allNoRoute\n serveError(c, http.StatusNotFound, default404Body)\n}\n\nvar mimePlain = []string{MIMEPlain}\n\nfunc serveError(c *Context, code int, defaultMessage []byte) {\n c.writermem.status = code\n c.Next()\n if c.writermem.Written() {\n  return\n }\n if c.writermem.Status() == code {\n  c.writermem.Header()["Content-Type"] = mimePlain\n  _, err := c.Writer.Write(defaultMessage)\n  if err != nil {\n   debugPrint("cannot write message to writer during serve error: %v", err)\n  }\n  return\n }\n c.writermem.WriteHeaderNow()\n}\n\nfunc redirectTrailingSlash(c *Context) {\n req := c.Request\n p := req.URL.Path\n if prefix := path.Clean(c.Request.Header.Get("X-Forwarded-Prefix")); prefix != "." {\n  p = prefix + "/" + req.URL.Path\n }\n req.URL.Path = p + "/"\n if length := len(p); length > 1 && p[length-1] == \'/\' {\n  req.URL.Path = p[:length-1]\n }\n redirectRequest(c)\n}\n\nfunc redirectFixedPath(c *Context, root *node, trailingSlash bool) bool {\n req := c.Request\n rPath := req.URL.Path\n\n if fixedPath, ok := root.findCaseInsensitivePath(cleanPath(rPath), trailingSlash); ok {\n  req.URL.Path = bytesconv.BytesToString(fixedPath)\n  redirectRequest(c)\n  return true\n }\n return false\n}\n\nfunc redirectRequest(c *Context) {\n req := c.Request\n rPath := req.URL.Path\n rURL := req.URL.String()\n\n code := http.StatusMovedPermanently // Permanent redirect, request with GET method\n if req.Method != http.MethodGet {\n  code = http.StatusTemporaryRedirect\n }\n debugPrint("redirecting request %d: %s --\x3e %s", code, rPath, rURL)\n http.Redirect(c.Writer, req, rURL, code)\n c.writermem.WriteHeaderNow()\n}\n\n')))}g.isMDXComponent=!0}}]);