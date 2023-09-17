"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[4409],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),g=c(t),m=o,d=g["".concat(u,".").concat(m)]||g[m]||p[m]||a;return t?r.createElement(d,i(i({ref:n},l),{},{components:t})):r.createElement(d,i({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[g]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4433:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return g}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],s={},u="logger",c={unversionedId:"backend/go/gin/source/1.7.7/logger",id:"backend/go/gin/source/1.7.7/logger",title:"logger",description:"",source:"@site/docs/backend/go/gin/source/1.7.7/logger.md",sourceDirName:"backend/go/gin/source/1.7.7",slug:"/backend/go/gin/source/1.7.7/logger",permalink:"/docs/backend/go/gin/source/1.7.7/logger",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"gin",permalink:"/docs/backend/go/gin/source/1.7.7/gin"},next:{title:"mode",permalink:"/docs/backend/go/gin/source/1.7.7/mode"}},l={},g=[],p={toc:g},m="wrapper";function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)(m,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"logger"},"logger"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'\n\npackage gin\n\nimport (\n "fmt"\n "io"\n "net/http"\n "os"\n "time"\n\n "github.com/mattn/go-isatty"\n)\n\ntype consoleColorModeValue int\n\nconst (\n autoColor consoleColorModeValue = iota\n disableColor\n forceColor\n)\n\nconst (\n green   = "\\033[97;42m"\n white   = "\\033[90;47m"\n yellow  = "\\033[90;43m"\n red     = "\\033[97;41m"\n blue    = "\\033[97;44m"\n magenta = "\\033[97;45m"\n cyan    = "\\033[97;46m"\n reset   = "\\033[0m"\n)\n\nvar consoleColorMode = autoColor\n\n// \u65e5\u5fd7\u914d\u7f6e\u7ba1\u7406.\ntype LoggerConfig struct {\n // \u989c\u8272\u7ba1\u7406\n Formatter LogFormatter\n\n // \u8f93\u51fa\n\n Output io.Writer\n\n // \u8df3\u8fc7\u7684\u8def\u5f84\n \n SkipPaths []string\n}\n\n// LogFormatter gives the signature of the formatter function passed to LoggerWithFormatter\ntype LogFormatter func(params LogFormatterParams) string\n\n// LogFormatterParams is the structure any formatter will be handed when time to log comes\ntype LogFormatterParams struct {\n Request *http.Request\n\n // \u7ed3\u675f\u540e\u8fd4\u56de\u65f6\u95f4\n TimeStamp time.Time\n //HTTP \u72b6\u6001\u7801\n StatusCode int\n //\u6d88\u8017\u65f6\u95f4\n Latency time.Duration\n // \u8bf7\u6c42ip\n ClientIP string\n // \u8bf7\u6c42\u65b9\u6cd5\n Method string\n // \u8bf7\u6c42\u8def\u5f84\n Path string\n // \u9519\u8bef\u4fe1\u606f\n ErrorMessage string\n // isTerm shows whether does gin\'s output descriptor refers to a terminal.\n isTerm bool\n //  Response Body \u5927\u5c0f\n BodySize int\n // Keys are the keys set on the request\'s context.\n Keys map[string]interface{}\n}\n\n// StatusCodeColor is the ANSI color for appropriately logging http status code to a terminal.\n// \u72b6\u6001\u7801\u5bf9\u5e94\u989c\u8272\nfunc (p *LogFormatterParams) StatusCodeColor() string {\n code := p.StatusCode\n\n switch {\n case code >= http.StatusOK && code < http.StatusMultipleChoices:\n  return green\n case code >= http.StatusMultipleChoices && code < http.StatusBadRequest:\n  return white\n case code >= http.StatusBadRequest && code < http.StatusInternalServerError:\n  return yellow\n default:\n  return red\n }\n}\n\n// MethodColor is the ANSI color for appropriately logging http method to a terminal.\n// \u65b9\u6cd5\u5bf9\u5e94\u989c\u8272\nfunc (p *LogFormatterParams) MethodColor() string {\n method := p.Method\n\n switch method {\n case http.MethodGet:\n  return blue\n case http.MethodPost:\n  return cyan\n case http.MethodPut:\n  return yellow\n case http.MethodDelete:\n  return red\n case http.MethodPatch:\n  return green\n case http.MethodHead:\n  return magenta\n case http.MethodOptions:\n  return white\n default:\n  return reset\n }\n}\n\n// ResetColor resets all escape attributes.\n// \u91cd\u7f6e\u989c\u8272\nfunc (p *LogFormatterParams) ResetColor() string {\n return reset\n}\n\n// IsOutputColor indicates whether can colors be outputted to the log.\n// \nfunc (p *LogFormatterParams) IsOutputColor() bool {\n return consoleColorMode == forceColor || (consoleColorMode == autoColor && p.isTerm)\n}\n\n// defaultLogFormatter is the default log format function Logger middleware uses.\n// \u9ed8\u8ba4\u6837\u5f0f\nvar defaultLogFormatter = func(param LogFormatterParams) string {\n var statusColor, methodColor, resetColor string\n if param.IsOutputColor() {\n  statusColor = param.StatusCodeColor()\n  methodColor = param.MethodColor()\n  resetColor = param.ResetColor()\n }\n\n if param.Latency > time.Minute {\n  // Truncate in a golang < 1.8 safe way\n  param.Latency = param.Latency - param.Latency%time.Second\n }\n return fmt.Sprintf("[GIN] %v |%s %3d %s| %13v | %15s |%s %-7s %s %#v\\n%s",\n  param.TimeStamp.Format("2006/01/02 - 15:04:05"),\n  statusColor, param.StatusCode, resetColor,\n  param.Latency,\n  param.ClientIP,\n  methodColor, param.Method, resetColor,\n  param.Path,\n  param.ErrorMessage,\n )\n}\n\n// DisableConsoleColor disables color output in the console.\nfunc DisableConsoleColor() {\n consoleColorMode = disableColor\n}\n\n// ForceConsoleColor force color output in the console.\nfunc ForceConsoleColor() {\n consoleColorMode = forceColor\n}\n\n// ErrorLogger returns a handlerfunc for any error type.\n//\u9519\u8bef\u65e5\u5fd7 \u5904\u7406\u65b9\u6cd5\nfunc ErrorLogger() HandlerFunc {\n return ErrorLoggerT(ErrorTypeAny)\n}\n\n// ErrorLoggerT returns a handlerfunc for a given error type.\n// \u9519\u8bef\u7c7b\u578b\u5bf9\u5e94\u8f6c\u5316\nfunc ErrorLoggerT(typ ErrorType) HandlerFunc {\n return func(c *Context) {\n  c.Next()\n  errors := c.Errors.ByType(typ)\n  if len(errors) > 0 {\n   c.JSON(-1, errors)\n  }\n }\n}\n\n// Logger instances a Logger middleware that will write the logs to gin.DefaultWriter.\n// By default gin.DefaultWriter = os.Stdout.\nfunc Logger() HandlerFunc {\n return LoggerWithConfig(LoggerConfig{})\n}\n\n// LoggerWithFormatter instance a Logger middleware with the specified log format function.\nfunc LoggerWithFormatter(f LogFormatter) HandlerFunc {\n return LoggerWithConfig(LoggerConfig{\n  Formatter: f,\n })\n}\n\n// LoggerWithWriter instance a Logger middleware with the specified writer buffer.\n// Example: os.Stdout, a file opened in write mode, a socket...\nfunc LoggerWithWriter(out io.Writer, notlogged ...string) HandlerFunc {\n return LoggerWithConfig(LoggerConfig{\n  Output:    out,\n  SkipPaths: notlogged,\n })\n}\n\n// LoggerWithConfig instance a Logger middleware with config.\nfunc LoggerWithConfig(conf LoggerConfig) HandlerFunc {\n formatter := conf.Formatter\n if formatter == nil {\n  formatter = defaultLogFormatter\n }\n\n out := conf.Output\n if out == nil {\n  out = DefaultWriter\n }\n\n notlogged := conf.SkipPaths\n\n isTerm := true\n\n if w, ok := out.(*os.File); !ok || os.Getenv("TERM") == "dumb" ||\n  (!isatty.IsTerminal(w.Fd()) && !isatty.IsCygwinTerminal(w.Fd())) {\n  isTerm = false\n }\n\n var skip map[string]struct{}\n\n if length := len(notlogged); length > 0 {\n  skip = make(map[string]struct{}, length)\n\n  for _, path := range notlogged {\n   skip[path] = struct{}{}\n  }\n }\n\n return func(c *Context) {\n  // Start timer\n  start := time.Now()\n  path := c.Request.URL.Path\n  raw := c.Request.URL.RawQuery\n\n  // Process request\n  c.Next()\n\n  // Log only when path is not being skipped\n  if _, ok := skip[path]; !ok {\n   param := LogFormatterParams{\n    Request: c.Request,\n    isTerm:  isTerm,\n    Keys:    c.Keys,\n   }\n\n   // Stop timer\n   param.TimeStamp = time.Now()\n   param.Latency = param.TimeStamp.Sub(start)\n\n   param.ClientIP = c.ClientIP()\n   param.Method = c.Request.Method\n   param.StatusCode = c.Writer.Status()\n   param.ErrorMessage = c.Errors.ByType(ErrorTypePrivate).String()\n\n   param.BodySize = c.Writer.Size()\n\n   if raw != "" {\n    path = path + "?" + raw\n   }\n\n   param.Path = path\n\n   fmt.Fprint(out, formatter(param))\n  }\n }\n}\n\n')))}d.isMDXComponent=!0}}]);