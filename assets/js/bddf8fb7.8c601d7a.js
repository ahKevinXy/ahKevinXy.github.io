"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[77204],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return g}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(t),v=o,g=m["".concat(c,".").concat(v)]||m[v]||u[v]||i;return t?r.createElement(g,a(a({ref:n},s),{},{components:t})):r.createElement(g,a({ref:n},s))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=v;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},86558:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var r=t(83117),o=t(80102),i=(t(67294),t(3905)),a=["components"],l={title:"Spring \u542f\u52a8\u65f6\u6267\u884c\u6307\u5b9a\u65b9\u6cd5",tags:["Spring"],authors:"Flankx",description:"Spring \u542f\u52a8\u65f6\u6267\u884c\u6307\u5b9a\u65b9\u6cd5"},c="\u542f\u52a8\u65f6\u6267\u884c\u6307\u5b9a\u65b9\u6cd5",p={permalink:"/blog/2023/07/15/Spring-1 ",source:"@site/blog/2023/07/15/Spring-1 .md",title:"Spring \u542f\u52a8\u65f6\u6267\u884c\u6307\u5b9a\u65b9\u6cd5",description:"Spring \u542f\u52a8\u65f6\u6267\u884c\u6307\u5b9a\u65b9\u6cd5",date:"2023-07-15T00:00:00.000Z",formattedDate:"2023\u5e747\u670815\u65e5",tags:[{label:"Spring",permalink:"/blog/tags/spring"}],readingTime:3.235,hasTruncateMarker:!0,authors:[{name:"flankx",title:"\u4f5c\u8005",url:"https://github.com/flankx",email:"137472591@qq.com",imageURL:"https://avatars.githubusercontent.com/u/30172229",key:"Flankx"}],frontMatter:{title:"Spring \u542f\u52a8\u65f6\u6267\u884c\u6307\u5b9a\u65b9\u6cd5",tags:["Spring"],authors:"Flankx",description:"Spring \u542f\u52a8\u65f6\u6267\u884c\u6307\u5b9a\u65b9\u6cd5"},prevItem:{title:"Java\u63a5\u53e3\u4e0e\u62bd\u8c61\u7c7b\u7684\u533a\u522b",permalink:"/blog/2023/07/16/Java-1"},nextItem:{title:"\u5982\u4f55\u642d\u5efa\u5c5e\u4e8e\u4e00\u4e2a\u81ea\u5df1\u7684\u8def\u7531\u5668",permalink:"/blog/2023/07/15/router"}},s={authorsImageUrls:[void 0]},m=[{value:"\u4e00\u3001\u5b9e\u73b0\u65b9\u5f0f",id:"\u4e00\u5b9e\u73b0\u65b9\u5f0f",level:2},{value:"1. \u5b9e\u73b0 ServletContextListener \u7684 contextInitialized \u65b9\u6cd5",id:"1-\u5b9e\u73b0-servletcontextlistener-\u7684-contextinitialized-\u65b9\u6cd5",level:3},{value:"2. \u9759\u6001\u4ee3\u7801\u5757",id:"2-\u9759\u6001\u4ee3\u7801\u5757",level:3},{value:"3. \u6ce8\u89e3 @PostConstruct \u3010\u540c\u4e0a\u3011",id:"3-\u6ce8\u89e3-postconstruct-\u540c\u4e0a",level:3},{value:"4. \u5b9e\u73b0 ServletContextAware \u7684 setServletContext \u65b9\u6cd5",id:"4-\u5b9e\u73b0-servletcontextaware-\u7684-setservletcontext-\u65b9\u6cd5",level:3},{value:"5. \u6ce8\u89e3 @EventListener",id:"5-\u6ce8\u89e3-eventlistener",level:3},{value:"6. \u5b9e\u73b0 ApplicationRunner \u63a5\u53e3\u7684 run \u65b9\u6cd5",id:"6-\u5b9e\u73b0-applicationrunner-\u63a5\u53e3\u7684-run-\u65b9\u6cd5",level:3},{value:"7. \u5b9e\u73b0 CommandLineRunner \u63a5\u53e3\u7684 run \u65b9\u6cd5",id:"7-\u5b9e\u73b0-commandlinerunner-\u63a5\u53e3\u7684-run-\u65b9\u6cd5",level:3},{value:"\u4e8c\u3001\u6267\u884c\u987a\u5e8f",id:"\u4e8c\u6267\u884c\u987a\u5e8f",level:2}],u={toc:m},v="wrapper";function g(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)(v,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u4e00\u5b9e\u73b0\u65b9\u5f0f"},"\u4e00\u3001\u5b9e\u73b0\u65b9\u5f0f"),(0,i.kt)("h3",{id:"1-\u5b9e\u73b0-servletcontextlistener-\u7684-contextinitialized-\u65b9\u6cd5"},"1. \u5b9e\u73b0 ServletContextListener \u7684 contextInitialized \u65b9\u6cd5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Java"},'import lombok.extern.slf4j.Slf4j;\nimport org.springframework.stereotype.Component;\n\nimport javax.servlet.ServletContextEvent;\nimport javax.servlet.ServletContextListener;\n\n@Slf4j\n@Component\npublic class ServletContextListenerDemo implements ServletContextListener {\n    /**\n     * web\u5e94\u7528\u7a0b\u5e8f\u521d\u59cb\u5316\u8fc7\u7a0b\u6b63\u5728\u542f\u52a8\u7684\u901a\u77e5\u3002\u5728\u521d\u59cb\u5316web\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u4efb\u4f55\u8fc7\u6ee4\u5668\u6216servlet\u4e4b\u524d\u6267\u884c\n     * @param sce\n     */\n    @Override\n    public void contextInitialized(ServletContextEvent sce) {\n        log.info("\u542f\u52a8\u6267\u884c ServletContextListener \u7684 contextInitialized \u65b9\u6cd5");\n    }\n}\n')),(0,i.kt)("h3",{id:"2-\u9759\u6001\u4ee3\u7801\u5757"},"2. \u9759\u6001\u4ee3\u7801\u5757"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Java"},'@Slf4j\n@Component\npublic class TestDemo {\n    static {\n        log.info("\u542f\u52a8\u6267\u884c\u9759\u6001\u4ee3\u7801\u5757");\n    }\n    public TestDemo() {\n        log.info("\u6784\u9020\u65b9\u6cd5");\n    }\n    @PostConstruct\n    public void initial() {\n        log.info("\u6267\u884c PostConstruct \u6ce8\u89e3\u7684\u65b9\u6cd5");\n    }\n}\n')),(0,i.kt)("h3",{id:"3-\u6ce8\u89e3-postconstruct-\u540c\u4e0a"},"3. \u6ce8\u89e3 @PostConstruct \u3010\u540c\u4e0a\u3011"),(0,i.kt)("h3",{id:"4-\u5b9e\u73b0-servletcontextaware-\u7684-setservletcontext-\u65b9\u6cd5"},"4. \u5b9e\u73b0 ServletContextAware \u7684 setServletContext \u65b9\u6cd5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Java"},'import lombok.extern.slf4j.Slf4j;\nimport org.springframework.stereotype.Component;\nimport org.springframework.web.context.ServletContextAware;\n\nimport javax.servlet.ServletContext;\n\n@Slf4j\n@Component\npublic class ServletContextAwareDemo implements ServletContextAware {\n    /**\n     * \u5728\u586b\u5145\u666e\u901abean\u5c5e\u6027\u4e4b\u540e\uff0c\u4f46\u5728\u521d\u59cb\u5316\u56de\u8c03\uff08\u5982InitializingBean\u7684afterPropertiesSet\u6216\u81ea\u5b9a\u4e49init\u65b9\u6cd5\uff09\u4e4b\u524d\u8c03\u7528\u3002\n     * \u5728ApplicationContextAware\u7684setApplicationContext\u4e4b\u540e\u8c03\u7528\u3002\n     * @param servletContext\n     */\n    @Override\n    public void setServletContext(ServletContext servletContext) {\n        log.info("\u542f\u52a8\u6267\u884c setServletContext \u65b9\u6cd5");\n    }\n}\n')),(0,i.kt)("h3",{id:"5-\u6ce8\u89e3-eventlistener"},"5. \u6ce8\u89e3 @EventListener"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Java"},'import lombok.extern.slf4j.Slf4j;\nimport org.springframework.context.event.ContextRefreshedEvent;\nimport org.springframework.context.event.EventListener;\nimport org.springframework.stereotype.Component;\n\n@Slf4j\n@Component\npublic class EventListenerDemo {\n\n    @EventListener\n    public void init(ContextRefreshedEvent event) {\n        log.info("\u542f\u52a8 EventListener \u4e8b\u4ef6\u4ea4\u7ed9 spring \u7ba1\u7406");\n    }\n}\n')),(0,i.kt)("h3",{id:"6-\u5b9e\u73b0-applicationrunner-\u63a5\u53e3\u7684-run-\u65b9\u6cd5"},"6. \u5b9e\u73b0 ApplicationRunner \u63a5\u53e3\u7684 run \u65b9\u6cd5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Java"},'@Slf4j\n@Component\npublic class ApplicationRunnerDemo implements ApplicationRunner {\n    @Override\n    public void run(ApplicationArguments args) throws Exception {\n        log.info("\u542f\u52a8 ApplicationRunner \u7684 run \u65b9\u6cd5");\n        Set<String> optionNames = args.getOptionNames();\n        for (String op: optionNames\n             ) {\n            log.info("\u4f20\u5165\u7684\u53c2\u6570\u540d" + op);\n        }\n\n        String[] sourceArgs = args.getSourceArgs();\n        for (String arg:sourceArgs\n             ) {\n            log.info("\u4f20\u5165\u7684\u539f\u59cb\u53c2\u6570\u3002" + arg);\n        }\n    }\n}\n')),(0,i.kt)("h3",{id:"7-\u5b9e\u73b0-commandlinerunner-\u63a5\u53e3\u7684-run-\u65b9\u6cd5"},"7. \u5b9e\u73b0 CommandLineRunner \u63a5\u53e3\u7684 run \u65b9\u6cd5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Java"},'@Slf4j\n@Component\npublic class CommandLineRunnerDemo implements CommandLineRunner {\n    @Override\n    public void run(String... args) throws Exception {\n        log.info("\u6267\u884c CommandLineRunner \u7684 run \u65b9\u6cd5\uff0c \u4f20\u5165\u53c2\u6570 ", args);\n    }\n}\n')),(0,i.kt)("h2",{id:"\u4e8c\u6267\u884c\u987a\u5e8f"},"\u4e8c\u3001\u6267\u884c\u987a\u5e8f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-log"},"22:03:25.688  INFO 21132 --- [main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 8080 (http)\n22:03:25.716  INFO 21132 --- [main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]\n22:03:25.716  INFO 21132 --- [main] org.apache.catalina.core.StandardEngine  : Starting Servlet engine: [Apache Tomcat/9.0.19]\n22:03:25.808  INFO 21132 --- [main] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext\n22:03:25.809  INFO 21132 --- [main] o.s.web.context.ContextLoader            : Root WebApplicationContext: initialization completed in 1200 ms\n22:03:25.841  INFO 21132 --- [main] c.b.n.i.ServletContextListenerDemo       : \u542f\u52a8\u6267\u884c ServletContextListener \u7684 contextInitialized \u65b9\u6cd5\n22:03:25.850  INFO 21132 --- [main] c.b.n.i.ServletContextAwareDemo          : \u542f\u52a8\u6267\u884c setServletContext \u65b9\u6cd5\n22:03:25.851  INFO 21132 --- [main] com.bookman.notes.initmethod.TestDemo    : \u542f\u52a8\u6267\u884c\u9759\u6001\u4ee3\u7801\u5757\n22:03:25.851  INFO 21132 --- [main] com.bookman.notes.initmethod.TestDemo    : \u6784\u9020\u65b9\u6cd5\n22:03:25.852  INFO 21132 --- [main] com.bookman.notes.initmethod.TestDemo    : \u6267\u884c PostConstruct \u6ce8\u89e3\u7684\u65b9\u6cd5\n22:03:25.983  INFO 21132 --- [main] o.s.s.concurrent.ThreadPoolTaskExecutor  : Initializing ExecutorService 'applicationTaskExecutor'\n22:03:26.121  INFO 21132 --- [main] c.b.notes.initmethod.EventListenerDemo   : \u542f\u52a8 EventListener \u4e8b\u4ef6\u4ea4\u7ed9 spring \u7ba1\u7406\n22:03:26.150  INFO 21132 --- [main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path ''\n22:03:26.155  INFO 21132 --- [main] com.bookman.notes.NotesApplication       : Started NotesApplication in 1.953 seconds (JVM running for 2.378)\n22:03:26.156  INFO 21132 --- [main] c.b.n.initmethod.ApplicationRunnerDemo   : \u542f\u52a8 ApplicationRunner \u7684 run \u65b9\u6cd5\n22:03:26.157  INFO 21132 --- [main] c.b.n.initmethod.ApplicationRunnerDemo   : \u4f20\u5165\u7684\u53c2\u6570\u540dfoo\n22:03:26.157  INFO 21132 --- [main] c.b.n.initmethod.ApplicationRunnerDemo   : \u4f20\u5165\u7684\u539f\u59cb\u53c2\u6570\u3002--foo=debug\n22:03:26.157  INFO 21132 --- [main] c.b.n.initmethod.CommandLineRunnerDemo   : \u6267\u884c CommandLineRunner \u7684 run \u65b9\u6cd5\uff0c \u4f20\u5165\u53c2\u6570  \n")))}g.isMDXComponent=!0}}]);