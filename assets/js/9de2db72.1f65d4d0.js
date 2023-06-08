"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[92231],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return p}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=i.createContext({}),l=function(e){var n=i.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=l(e.components);return i.createElement(a.Provider,{value:n},e.children)},f="mdxType",w={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),f=l(t),d=r,p=f["".concat(a,".").concat(d)]||f[d]||w[d]||o;return t?i.createElement(p,c(c({ref:n},m),{},{components:t})):i.createElement(p,c({ref:n},m))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=d;var u={};for(var a in n)hasOwnProperty.call(n,a)&&(u[a]=n[a]);u.originalType=e,u[f]="string"==typeof e?e:r,c[1]=u;for(var l=2;l<o;l++)c[l]=t[l];return i.createElement.apply(null,c)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},30122:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return f}});var i=t(87462),r=t(63366),o=(t(67294),t(3905)),c=["components"],u={},a="\u65f6\u95f4\u8f6e",l={unversionedId:"backend/go/code/timingwheel/index",id:"backend/go/code/timingwheel/index",title:"\u65f6\u95f4\u8f6e",description:"",source:"@site/docs/backend/go/code/timingwheel/index.md",sourceDirName:"backend/go/code/timingwheel",slug:"/backend/go/code/timingwheel/",permalink:"/docs/backend/go/code/timingwheel/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u70ed\u63d2\u4ef6",permalink:"/docs/backend/go/code/hot_plugin/"},next:{title:"\u6bcf\u65e5\u4e00\u5e93",permalink:"/docs/backend/go/day/"}},m={},f=[],w={toc:f},d="wrapper";function p(e){var n=e.components,t=(0,r.Z)(e,c);return(0,o.kt)(d,(0,i.Z)({},w,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u65f6\u95f4\u8f6e"},"\u65f6\u95f4\u8f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package timingwheel\n\nimport (\n "context"\n "sync/atomic"\n "time"\n "unsafe"\n)\n\nconst delayQueueBufferSize = 10 // \u5ef6\u8fdf\u961f\u5217\u7f13\u51b2\u533a\u5927\u5c0f\n\n// \u65f6\u95f4\u8f6e\n// \u5355\u4f4d\u90fd\u662f\u6beb\u79d2\n// \u57fa\u4e8ehttps://github.com/RussellLuo/timingwheel\u7684\u5b9e\u73b0\n// \u6027\u80fd\u4e0d\u5982\u6807\u51c6\u7684time.AfterFunc()\uff0c\u53ea\u662f\u4f5c\u4e3a\u5b66\u4e60\u65f6\u95f4\u8f6e\ntype TimingWheel struct {\n tick          int64          // \u6bcf\u4e00\u8df3\u7684\u65f6\u95f4\n wheelSize     int64          // \u65f6\u95f4\u8f6e\n interval      int64          // \u4e00\u5708\u7684\u65f6\u95f4\n currentTime   int64          // \u5f53\u524d\u65f6\u95f4\n buckets       []*bucket      // \u65f6\u95f4\u8f6e\u7684\u6bcf\u4e2a\u6876\n queue         *delayQueue    // \u6876\u5ef6\u8fdf\u961f\u5217\n overflowWheel unsafe.Pointer // \u4e0a\u4e00\u4e2a\u65f6\u95f4\u8f6e\n}\n\n// tick\u7684\u5355\u4f4d\u662f\u6beb\u79d2\nfunc New(tick, wheelSize int64) *TimingWheel {\n return newTimingWheel(tick, wheelSize, time.Now().UnixMilli(), newDelayQueue())\n}\n\nfunc newTimingWheel(tick, wheelSize, currentTime int64, queue *delayQueue) *TimingWheel {\n tw := &TimingWheel{\n  tick:        tick,\n  wheelSize:   wheelSize,\n  interval:    tick * wheelSize,\n  currentTime: truncate(currentTime, tick),\n  buckets:     make([]*bucket, wheelSize),\n  queue:       queue,\n }\n for i := 0; i < int(wheelSize); i++ {\n  tw.buckets[i] = newBucket()\n }\n return tw\n}\n\n// \u8fd0\u884c\u65f6\u95f4\u8f6e\nfunc (tw *TimingWheel) Run(ctx context.Context) {\n bucketChan := tw.queue.channel(ctx, delayQueueBufferSize, func() int64 {\n  return time.Now().UnixMilli()\n })\n for {\n  select {\n  case b := <-bucketChan: // \u6876\u5230\u671f\n   // \u524d\u8fdb\u5f53\u524d\u65f6\u95f4\n   tw.advance(b.expiration)\n   // \u5904\u7406\u6876\n   b.flush(tw.addOrRun)\n  case <-ctx.Done(): // \u88ab\u5173\u95ed\n   return\n  }\n }\n}\n\n// \u6dfb\u52a0\u5b9a\u65f6\u5668\nfunc (tw *TimingWheel) AfterFunc(delay time.Duration, f func()) *Timer {\n t := &Timer{\n  expiration: time.Now().Add(delay).UnixMilli(),\n  task:       f,\n }\n tw.add(t)\n return t\n}\n\ntype Scheduler interface {\n // \u8868\u793a\u4e0b\u4e00\u4e2a\u6267\u884c\u4efb\u52a1\u7684\u65f6\u95f4\n // \u5982\u679ctime.IsZero()==true\u5219\u4e0d\u518d\u8fdb\u884c\n Next(time.Time) time.Time\n}\n\nfunc (tw *TimingWheel) ScheduleFunc(s Scheduler, f func()) (t *Timer) {\n expiration := s.Next(time.Now())\n if expiration.IsZero() {\n  return\n }\n\n t = &Timer{\n  expiration: expiration.UnixMilli(),\n  task: func() {\n   // \u6dfb\u52a0\u4e0b\u4e00\u6b21\u6267\u884c\u4efb\u52a1\n   expiration := s.Next(time.UnixMilli(t.expiration))\n   if !expiration.IsZero() {\n    t.expiration = expiration.UnixMilli()\n    tw.addOrRun(t)\n   }\n   // \u6267\u884c\u4efb\u52a1\n   f()\n  },\n }\n tw.addOrRun(t)\n return\n}\n\n// \u6dfb\u52a0\u5b9a\u65f6\u5668\nfunc (tw *TimingWheel) add(t *Timer) bool {\n currentTime := atomic.LoadInt64(&tw.currentTime)\n if t.expiration < currentTime+tw.tick { // \u5df2\u7ecf\u8fc7\u671f\u4e86\n  return false\n } else if t.expiration < currentTime+tw.interval { // \u5728\u5f53\u524d\u65f6\u95f4\u8f6e\u91cc\n  // \u591a\u5c11\u8df3\u4e86\n  ticks := t.expiration / tw.tick\n  // \u5e94\u8be5\u5728\u65f6\u95f4\u8f6e\u7684\u54ea\u4e2a\u6876\u91cc\n  b := tw.buckets[ticks%tw.wheelSize]\n  b.add(t)\n\n  // \u5982\u679c\u8bbe\u7f6e\u6876\u8fc7\u671f\u65f6\u95f4\u6210\u529f\n  // \u8868\u793a\u8fd9\u4e2a\u6876\u7b2c\u4e00\u6b21\u52a0\u5165\u5b9a\u65f6\u5668\uff0c\u56e0\u6b64\u5e94\u8be5\u628a\u5b83\u653e\u5230\u5ef6\u8fdf\u961f\u5217\u91cc\u9762\u53bb\u7b49\u5f85\u5230\u671f\n  if b.setExpiration(ticks * tw.tick) {\n   tw.queue.push(b)\n  }\n  return true\n } else { // \u5728\u5176\u4ed6\u65f6\u95f4\u8f6e\u91cc\n  overflowWheel := atomic.LoadPointer(&tw.overflowWheel)\n  if overflowWheel == nil {\n   tw.setOverflowWheel(currentTime)\n   overflowWheel = atomic.LoadPointer(&tw.overflowWheel)\n  }\n  return (*TimingWheel)(overflowWheel).add(t)\n }\n}\n\n// \u6dfb\u52a0\u4efb\u52a1\u6216\u8fd0\u884c\nfunc (tw *TimingWheel) addOrRun(t *Timer) {\n if !tw.add(t) {\n  go t.task()\n }\n}\n\n// \u524d\u8fdb\u65f6\u95f4\nfunc (tw *TimingWheel) advance(expiration int64) {\n currentTime := atomic.LoadInt64(&tw.currentTime)\n if expiration >= currentTime+tw.tick {\n  currentTime := truncate(expiration, tw.tick)\n  atomic.StoreInt64(&tw.currentTime, currentTime)\n\n  overflowWheel := atomic.LoadPointer(&tw.overflowWheel)\n  if overflowWheel != nil {\n   (*TimingWheel)(overflowWheel).advance(currentTime)\n  }\n }\n}\n\nfunc (tw *TimingWheel) setOverflowWheel(currentTime int64) {\n overflowWheel := newTimingWheel(tw.interval, tw.wheelSize, currentTime, tw.queue)\n atomic.CompareAndSwapPointer(&tw.overflowWheel, nil, unsafe.Pointer(overflowWheel))\n}\n\n// \u53bb\u9664\u4e0d\u6ee1\u4e00\u6574\u8df3\u7684\u65f6\u95f4\nfunc truncate(time, tick int64) int64 {\n return time - time%tick\n}\n\n')))}p.isMDXComponent=!0}}]);