"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[1563],{68554:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=s(85893),t=s(11151);const r={title:"Websocket\u4f7f\u7528",tags:["ws"],authors:"Flankx",description:"\u5982\u4f55\u4f7f\u7528 java Websocket \u4f7f\u7528\u65b9\u5f0f",image:"https://source.unsplash.com/random?people&19"},i="Websocket\u4f7f\u7528",l={permalink:"/blog/2023/07/13/websocket-1",source:"@site/blog/2023/07/13/websocket-1.md",title:"Websocket\u4f7f\u7528",description:"\u5982\u4f55\u4f7f\u7528 java Websocket \u4f7f\u7528\u65b9\u5f0f",date:"2023-07-13T00:00:00.000Z",formattedDate:"2023\u5e747\u670813\u65e5",tags:[{label:"ws",permalink:"/blog/tags/ws"}],readingTime:1.86,hasTruncateMarker:!0,authors:[{name:"flankx",title:"\u4f5c\u8005",url:"https://github.com/flankx",email:"137472591@qq.com",imageURL:"https://avatars.githubusercontent.com/u/30172229",key:"Flankx"}],frontMatter:{title:"Websocket\u4f7f\u7528",tags:["ws"],authors:"Flankx",description:"\u5982\u4f55\u4f7f\u7528 java Websocket \u4f7f\u7528\u65b9\u5f0f",image:"https://source.unsplash.com/random?people&19"},unlisted:!1,prevItem:{title:"\u7ebf\u7a0b\u6c60\u7684\u4f7f\u7528",permalink:"/blog/2023/07/13/thread"},nextItem:{title:"\u5f00\u6e90\u7f51\u7edc\u8d27\u8fd0\u5e73\u53f0",permalink:"/blog/2023/07/11/opensource_network_freight"}},a={authorsImageUrls:[void 0]},c=[{value:"\u65b9\u5f0f1\uff1a\u539f\u751f\u6ce8\u89e3",id:"\u65b9\u5f0f1\u539f\u751f\u6ce8\u89e3",level:2},{value:"1. \u5f15\u5165<code>POM</code>\u4f9d\u8d56",id:"1-\u5f15\u5165pom\u4f9d\u8d56",level:3},{value:"2. \u914d\u7f6e\u6587\u4ef6",id:"2-\u914d\u7f6e\u6587\u4ef6",level:3},{value:"3. \u8fde\u63a5\u5904\u7406",id:"3-\u8fde\u63a5\u5904\u7406",level:3},{value:"\u65b9\u5f0f2\uff1a\u4f7f\u7528<code>Spring</code>\u5c01\u88c5",id:"\u65b9\u5f0f2\u4f7f\u7528spring\u5c01\u88c5",level:2},{value:"1. \u5f15\u5165<code>POM</code>\u4f9d\u8d56",id:"1-\u5f15\u5165pom\u4f9d\u8d56-1",level:3},{value:"2. \u7f16\u5199\u5904\u7406\u5668<code>WebsocketHandler</code>",id:"2-\u7f16\u5199\u5904\u7406\u5668websockethandler",level:3},{value:"3. \u6ce8\u518c<code>Handler</code>",id:"3-\u6ce8\u518chandler",level:3},{value:"\u65b9\u5f0f3\uff1a\u4f7f\u7528<code>STOMP</code>",id:"\u65b9\u5f0f3\u4f7f\u7528stomp",level:2},{value:"\u65b9\u5f0f4\uff1a\u4f7f\u7528<code>Netty</code> \u7b49\u5176\u4ed6\u65b9\u5f0f",id:"\u65b9\u5f0f4\u4f7f\u7528netty-\u7b49\u5176\u4ed6\u65b9\u5f0f",level:2}];function d(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"\u65b9\u5f0f1\u539f\u751f\u6ce8\u89e3",children:"\u65b9\u5f0f1\uff1a\u539f\u751f\u6ce8\u89e3"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\u76d1\u542c\u8def\u5f84\uff1a",(0,o.jsx)(n.code,{children:"@ServerEndpoint"})]}),"\n",(0,o.jsxs)(n.li,{children:["\u5efa\u7acb\u8fde\u63a5\uff1a",(0,o.jsx)(n.code,{children:"@OnOpen"})]}),"\n",(0,o.jsxs)(n.li,{children:["\u63a5\u6536\u6d88\u606f\uff1a",(0,o.jsx)(n.code,{children:"@OnMessage"})]}),"\n",(0,o.jsxs)(n.li,{children:["\u5173\u95ed\u8fde\u63a5\uff1a",(0,o.jsx)(n.code,{children:"@OnClose"})]}),"\n",(0,o.jsxs)(n.li,{children:["\u8fde\u63a5\u9519\u8bef\uff1a",(0,o.jsx)(n.code,{children:"@OnError"})]}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"1-\u5f15\u5165pom\u4f9d\u8d56",children:["1. \u5f15\u5165",(0,o.jsx)(n.code,{children:"POM"}),"\u4f9d\u8d56"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-websocket</artifactId>\n</dependency>\n"})}),"\n",(0,o.jsx)(n.h3,{id:"2-\u914d\u7f6e\u6587\u4ef6",children:"2. \u914d\u7f6e\u6587\u4ef6"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"@Configuration\n@EnableWebSocket\npublic class WebSocketConfig {\n @Bean\n public ServerEndpointExporter serverEndpointExporter() {\n  return new ServerEndpointExporter();\n }\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"3-\u8fde\u63a5\u5904\u7406",children:"3. \u8fde\u63a5\u5904\u7406"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'@Slf4j\n@ServerEndpoint("/ws-demo")\n@Component\npublic class TestWSEndPoint {\n private static ConcurrentHashMap<String, Session> map = new ConcurrentHashMap<>();\n\n @OnOpen\n public void onOpen(Session session) {\n  log.info("\u63a5\u53d7\u8fde\u63a5: " + session);\n  map.put(session.getId(), session);\n }\n\n @OnMessage\n public void onMessage(Session session, String message) throws IOException {\n  session.getBasicRemote().sendText("\u8fd4\u56de\u54cd\u5e94\uff1a" + message);\n }\n\n @OnClose\n public void onClose(Session session) {\n  log.info("\u5173\u95ed\u8fde\u63a5: " + session);\n  map.remove(session.getId());\n }\n\n @OnError\n public void onError(Session session, Throwable throwable) throws Exception {\n  log.error("\u9519\u8bef\u8fde\u63a5: " + session + "throwable : " + throwable.getMessage());\n }\n\n}\n'})}),"\n",(0,o.jsxs)(n.h2,{id:"\u65b9\u5f0f2\u4f7f\u7528spring\u5c01\u88c5",children:["\u65b9\u5f0f2\uff1a\u4f7f\u7528",(0,o.jsx)(n.code,{children:"Spring"}),"\u5c01\u88c5"]}),"\n",(0,o.jsxs)(n.h3,{id:"1-\u5f15\u5165pom\u4f9d\u8d56-1",children:["1. \u5f15\u5165",(0,o.jsx)(n.code,{children:"POM"}),"\u4f9d\u8d56"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-websocket</artifactId>\n</dependency>\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"2-\u7f16\u5199\u5904\u7406\u5668websockethandler",children:["2. \u7f16\u5199\u5904\u7406\u5668",(0,o.jsx)(n.code,{children:"WebsocketHandler"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'@Component\n@Slf4j\npublic class WebsocketCustomHandler implements WebSocketHandler {\n @Override\n public void afterConnectionEstablished(WebSocketSession session) throws Exception {\n  log.info("\u63a5\u6536\u5230\u65b0\u7684\u8fde\u63a5" + session.getId());\n }\n\n @Override\n public void handleMessage(WebSocketSession session, WebSocketMessage<?> message) throws Exception {\n  String text = "\u63a5\u6536\u5230\u6d88\u606f\uff1a" + message.toString() + "session = " + session.getId();\n  log.info(text);\n  session.sendMessage(new TextMessage(text));\n  // session.sendMessage(new\n  // BinaryMessage(text.getBytes(StandardCharsets.UTF_8)));\n  // session.sendMessage(new PingMessage());\n  // session.sendMessage(new PongMessage());\n }\n\n @Override\n public void handleTransportError(WebSocketSession session, Throwable exception) throws Exception {\n  log.info("\u8fde\u63a5\u9519\u8bef" + exception + "session =" + session.getId());\n }\n\n @Override\n public void afterConnectionClosed(WebSocketSession session, CloseStatus closeStatus) throws Exception {\n  log.info("\u5173\u95ed\u8fde\u63a5 = " + closeStatus.toString() + "session =" + session.getId());\n }\n\n @Override\n public boolean supportsPartialMessages() {\n  // \u652f\u6301\u5206\u7247\n  return false;\n }\n}\n'})}),"\n",(0,o.jsxs)(n.h3,{id:"3-\u6ce8\u518chandler",children:["3. \u6ce8\u518c",(0,o.jsx)(n.code,{children:"Handler"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'@Configuration\n@EnableWebSocket\npublic class SpringWebsocketCofig implements WebSocketConfigurer {\n\n @Autowired\n WebsocketCustomHandler websocketCustomHandler;\n\n @Override\n public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {\n  registry.addHandler(websocketCustomHandler, "/spring-ws").setAllowedOrigins("*");\n }\n}\n'})}),"\n",(0,o.jsxs)(n.h2,{id:"\u65b9\u5f0f3\u4f7f\u7528stomp",children:["\u65b9\u5f0f3\uff1a\u4f7f\u7528",(0,o.jsx)(n.code,{children:"STOMP"})]}),"\n",(0,o.jsxs)(n.h2,{id:"\u65b9\u5f0f4\u4f7f\u7528netty-\u7b49\u5176\u4ed6\u65b9\u5f0f",children:["\u65b9\u5f0f4\uff1a\u4f7f\u7528",(0,o.jsx)(n.code,{children:"Netty"})," \u7b49\u5176\u4ed6\u65b9\u5f0f"]})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>i});var o=s(67294);const t={},r=o.createContext(t);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);