"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[48265],{3905:(n,e,t)=>{t.d(e,{Zo:()=>d,kt:()=>f});var a=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var u=a.createContext({}),c=function(n){var e=a.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},d=function(n){var e=c(n.components);return a.createElement(u.Provider,{value:e},n.children)},p="mdxType",s={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,u=n.parentName,d=l(n,["components","mdxType","originalType","parentName"]),p=c(t),m=r,f=p["".concat(u,".").concat(m)]||p[m]||s[m]||o;return t?a.createElement(f,i(i({ref:e},d),{},{components:t})):a.createElement(f,i({ref:e},d))}));function f(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=n,l[p]="string"==typeof n?n:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},81983:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const o={},i="sync",l={unversionedId:"backend/go/source/go_1.17/sync",id:"backend/go/source/go_1.17/sync",title:"sync",description:"sync tree",source:"@site/docs/backend/go/source/go_1.17/sync.md",sourceDirName:"backend/go/source/go_1.17",slug:"/backend/go/source/go_1.17/sync",permalink:"/docs/backend/go/source/go_1.17/sync",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Go 1.17",permalink:"/docs/backend/go/source/go_1.17/"},next:{title:"\u6d4b\u8bd5",permalink:"/docs/backend/go/test/"}},u={},c=[{value:"sync tree",id:"sync-tree",level:2},{value:"RWMutex \u591a\u8bfb\u5199\u9501",id:"rwmutex-\u591a\u8bfb\u5199\u9501",level:2},{value:"poolqueue",id:"poolqueue",level:2},{value:"Map",id:"map",level:2},{value:"Cond \u6761\u4ef6\u53d8\u91cf",id:"cond-\u6761\u4ef6\u53d8\u91cf",level:2},{value:"WaitGroup",id:"waitgroup",level:2},{value:"runtime",id:"runtime",level:2},{value:"Pool  \u5bf9\u8c61\u6c60",id:"pool--\u5bf9\u8c61\u6c60",level:2},{value:"Once",id:"once",level:2},{value:"Mutex \u4e92\u65a5\u9501",id:"mutex-\u4e92\u65a5\u9501",level:2}],d={toc:c},p="wrapper";function s(n){let{components:e,...t}=n;return(0,r.kt)(p,(0,a.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sync"},"sync"),(0,r.kt)("h2",{id:"sync-tree"},"sync tree"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-map"},"\u251c\u2500\u2500 atomic\n\u2502   \u251c\u2500\u2500 asm.s\n\u2502   \u251c\u2500\u2500 doc.go\n\u2502   \u251c\u2500\u2500 race.s\n\u2502   \u2514\u2500\u2500 value.go\n\u251c\u2500\u2500 cond.go\n\u251c\u2500\u2500 map.go\n\u251c\u2500\u2500 mutex.go\n\u251c\u2500\u2500 once.go\n\u251c\u2500\u2500 pool.go\n\u251c\u2500\u2500 poolqueue.go\n\u251c\u2500\u2500 runtime2.go\n\u251c\u2500\u2500 runtime2_lockrank.go\n\u251c\u2500\u2500 runtime.go\n\u251c\u2500\u2500 rwmutex.go\n\u2514\u2500\u2500 waitgroup.go\n\n")),(0,r.kt)("h2",{id:"rwmutex-\u591a\u8bfb\u5199\u9501"},"RWMutex \u591a\u8bfb\u5199\u9501"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u76f8\u5bf9\u4e8eMutex  \u591a\u4e86\u5bf9\u8bfb\u64cd\u4f5c\u7684\u9501\u5b9a\u548c\u89e3\u9501\u7684\u64cd\u4f5c\u3002\n\u9664\u4e86\u5b9e\u73b0Locker\u63a5\u53e3\u4ee5\u5916\uff0c\u8fd8\u5b9e\u73b0\u4e86Unlock\u3001RLock\u548cRUnlock\u63a5\u53e3\nRWMutex\u662f\u8bfb\u5199\u4e92\u65a5\u9501\u3002\u8be5\u9501\u53ef\u4ee5\u88ab\u540c\u65f6\u591a\u4e2a\u8bfb\u53d6\u8005\u6301\u6709\u6216\u552f\u4e00\u4e2a\u5199\u5165\u8005\u6301\u6709\u3002RWMutex\u53ef\u4ee5\u521b\u5efa\u4e3a\u5176\u4ed6\u7ed3\u6784\u4f53\u7684\u5b57\u6bb5\uff1b\u96f6\u503c\u4e3a\u89e3\u9501\u72b6\u6001\u3002RWMutex\u7c7b\u578b\u7684\u9501\u4e5f\u548c\u7ebf\u7a0b\u65e0\u5173\uff0c\u53ef\u4ee5\u7531\u4e0d\u540c\u7684\u7ebf\u7a0b\u52a0\u8bfb\u53d6\u9501/\u5199\u5165\u548c\u89e3\u8bfb\u53d6\u9501/\u5199\u5165\u9501\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e00\u6b21\u53ea\u80fd\u6709\u4e00\u4e2agoroutine\u83b7\u53d6\u5199\u9501\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u6709\u591a\u4e2agoroutine\u540c\u65f6\u83b7\u53d6\u8bfb\u9501\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u53ea\u80fd\u540c\u65f6\u83b7\u53d6\u8bfb\u9501\u6216\u8005\u5199\u9501\uff0c\u8bfb\u548c\u5199\u662f\u4e92\u65a5\u7684\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'\ntype RWMutex struct {\n w           Mutex  // held if there are pending writers\n writerSem   uint32 // semaphore for writers to wait for completing readers\n readerSem   uint32 // semaphore for readers to wait for completing writers\n readerCount int32  // number of pending readers\n readerWait  int32  // number of departing readers\n}\n\nconst rwmutexMaxReaders = 1 << 30\n\n//RLock\u65b9\u6cd5\u5c06rw\u9501\u5b9a\u4e3a\u8bfb\u53d6\u72b6\u6001\uff0c\u7981\u6b62\u5176\u4ed6\u7ebf\u7a0b\u5199\u5165\uff0c\u4f46\u4e0d\u7981\u6b62\u8bfb\u53d6\u3002\nfunc (rw *RWMutex) RLock() {\n if race.Enabled {\n  _ = rw.w.state\n  race.Disable()\n }\n if atomic.AddInt32(&rw.readerCount, 1) < 0 {\n\n  runtime_SemacquireMutex(&rw.readerSem, false, 0)\n }\n if race.Enabled {\n  race.Enable()\n  race.Acquire(unsafe.Pointer(&rw.readerSem))\n }\n}\n\n//Runlock\u65b9\u6cd5\u89e3\u9664rw\u7684\u8bfb\u53d6\u9501\u72b6\u6001\uff0c\u5982\u679cm\u672a\u52a0\u8bfb\u53d6\u9501\u4f1a\u5bfc\u81f4\u8fd0\u884c\u65f6\u9519\u8bef\u3002\nfunc (rw *RWMutex) RUnlock() {\n if race.Enabled {\n  _ = rw.w.state\n  race.ReleaseMerge(unsafe.Pointer(&rw.writerSem))\n  race.Disable()\n }\n if r := atomic.AddInt32(&rw.readerCount, -1); r < 0 {\n\n  rw.rUnlockSlow(r)\n }\n if race.Enabled {\n  race.Enable()\n }\n}\n\nfunc (rw *RWMutex) rUnlockSlow(r int32) {\n if r+1 == 0 || r+1 == -rwmutexMaxReaders {\n  race.Enable()\n  throw("sync: RUnlock of unlocked RWMutex")\n }\n // A writer is pending.\n if atomic.AddInt32(&rw.readerWait, -1) == 0 {\n  // The last reader unblocks the writer.\n  runtime_Semrelease(&rw.writerSem, false, 1)\n }\n}\n\n//Lock\u65b9\u6cd5\u5c06rw\u9501\u5b9a\u4e3a\u5199\u5165\u72b6\u6001\uff0c\u7981\u6b62\u5176\u4ed6\u7ebf\u7a0b\u8bfb\u53d6\u6216\u8005\u5199\u5165\u3002\nfunc (rw *RWMutex) Lock() {\n if race.Enabled {\n  _ = rw.w.state\n  race.Disable()\n }\n // First, resolve competition with other writers.\n rw.w.Lock()\n // Announce to readers there is a pending writer.\n r := atomic.AddInt32(&rw.readerCount, -rwmutexMaxReaders) + rwmutexMaxReaders\n // Wait for active readers.\n if r != 0 && atomic.AddInt32(&rw.readerWait, r) != 0 {\n  runtime_SemacquireMutex(&rw.writerSem, false, 0)\n }\n if race.Enabled {\n  race.Enable()\n  race.Acquire(unsafe.Pointer(&rw.readerSem))\n  race.Acquire(unsafe.Pointer(&rw.writerSem))\n }\n}\n\n//Unlock\u65b9\u6cd5\u89e3\u9664rw\u7684\u5199\u5165\u9501\u72b6\u6001\uff0c\u5982\u679cm\u672a\u52a0\u5199\u5165\u9501\u4f1a\u5bfc\u81f4\u8fd0\u884c\u65f6\u9519\u8bef\u3002\nfunc (rw *RWMutex) Unlock() {\n if race.Enabled {\n  _ = rw.w.state\n  race.Release(unsafe.Pointer(&rw.readerSem))\n  race.Disable()\n }\n\n\n r := atomic.AddInt32(&rw.readerCount, rwmutexMaxReaders)\n if r >= rwmutexMaxReaders {\n  race.Enable()\n  throw("sync: Unlock of unlocked RWMutex")\n }\n // Unblock blocked readers, if any.\n for i := 0; i < int(r); i++ {\n  runtime_Semrelease(&rw.readerSem, false, 0)\n }\n // Allow other writers to proceed.\n rw.w.Unlock()\n if race.Enabled {\n  race.Enable()\n }\n}\n\n//Rlocker\u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u4e92\u65a5\u9501\uff0c\u901a\u8fc7\u8c03\u7528rw.Rlock\u548crw.Runlock\u5b9e\u73b0\u4e86Locker\u63a5\u53e3\u3002\nfunc (rw *RWMutex) RLocker() Locker {\n return (*rlocker)(rw)\n}\n\ntype rlocker RWMutex\n\nfunc (r *rlocker) Lock()   { (*RWMutex)(r).RLock() }\nfunc (r *rlocker) Unlock() { (*RWMutex)(r).RUnlock() }\n\n')),(0,r.kt)("h2",{id:"poolqueue"},"poolqueue"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type poolDequeue struct {\n\n headTail uint64\n\n\n vals []eface\n}\ntype eface struct {\n typ, val unsafe.Pointer\n}\nconst dequeueBits = 32\nconst dequeueLimit = (1 << dequeueBits) / 4\ntype dequeueNil *struct{}\n\nfunc (d *poolDequeue) unpack(ptrs uint64) (head, tail uint32) {\n const mask = 1<<dequeueBits - 1\n head = uint32((ptrs >> dequeueBits) & mask)\n tail = uint32(ptrs & mask)\n return\n}\nfunc (d *poolDequeue) pack(head, tail uint32) uint64 {\n const mask = 1<<dequeueBits - 1\n return (uint64(head) << dequeueBits) |\n  uint64(tail&mask)\n}\n\nfunc (d *poolDequeue) pushHead(val interface{}) bool {\n ptrs := atomic.LoadUint64(&d.headTail)\n head, tail := d.unpack(ptrs)\n if (tail+uint32(len(d.vals)))&(1<<dequeueBits-1) == head {\n\n  return false\n }\n slot := &d.vals[head&uint32(len(d.vals)-1)]\n\n\n typ := atomic.LoadPointer(&slot.typ)\n if typ != nil {\n\n  return false\n }\n\n\n if val == nil {\n  val = dequeueNil(nil)\n }\n *(*interface{})(unsafe.Pointer(slot)) = val\n\n atomic.AddUint64(&d.headTail, 1<<dequeueBits)\n return true\n}\nfunc (d *poolDequeue) popHead() (interface{}, bool) {\n var slot *eface\n for {\n  ptrs := atomic.LoadUint64(&d.headTail)\n  head, tail := d.unpack(ptrs)\n  if tail == head {\n\n   return nil, false\n  }\n\n\n  head--\n  ptrs2 := d.pack(head, tail)\n  if atomic.CompareAndSwapUint64(&d.headTail, ptrs, ptrs2) {\n\n   slot = &d.vals[head&uint32(len(d.vals)-1)]\n   break\n  }\n }\n\n val := *(*interface{})(unsafe.Pointer(slot))\n if val == dequeueNil(nil) {\n  val = nil\n }\n\n *slot = eface{}\n return val, true\n}\n\nfunc (d *poolDequeue) popTail() (interface{}, bool) {\n var slot *eface\n for {\n  ptrs := atomic.LoadUint64(&d.headTail)\n  head, tail := d.unpack(ptrs)\n  if tail == head {\n\n   return nil, false\n  }\n\n  ptrs2 := d.pack(head, tail+1)\n  if atomic.CompareAndSwapUint64(&d.headTail, ptrs, ptrs2) {\n   // Success.\n   slot = &d.vals[tail&uint32(len(d.vals)-1)]\n   break\n  }\n }\n\n\n val := *(*interface{})(unsafe.Pointer(slot))\n if val == dequeueNil(nil) {\n  val = nil\n }\n\n\n slot.val = nil\n atomic.StorePointer(&slot.typ, nil)\n\n\n return val, true\n}\ntype poolChain struct {\n\n head *poolChainElt\n\n\n tail *poolChainElt\n}\n\ntype poolChainElt struct {\n poolDequeue\n\n\n next, prev *poolChainElt\n}\nfunc storePoolChainElt(pp **poolChainElt, v *poolChainElt) {\n atomic.StorePointer((*unsafe.Pointer)(unsafe.Pointer(pp)), unsafe.Pointer(v))\n}\n\nfunc loadPoolChainElt(pp **poolChainElt) *poolChainElt {\n return (*poolChainElt)(atomic.LoadPointer((*unsafe.Pointer)(unsafe.Pointer(pp))))\n}\n\nfunc (c *poolChain) pushHead(val interface{}) {\n d := c.head\n if d == nil {\n\n  const initSize = 8 // Must be a power of 2\n  d = new(poolChainElt)\n  d.vals = make([]eface, initSize)\n  c.head = d\n  storePoolChainElt(&c.tail, d)\n }\n\n if d.pushHead(val) {\n  return\n }\n\n\n newSize := len(d.vals) * 2\n if newSize >= dequeueLimit {\n\n  newSize = dequeueLimit\n }\n\n d2 := &poolChainElt{prev: d}\n d2.vals = make([]eface, newSize)\n c.head = d2\n storePoolChainElt(&d.next, d2)\n d2.pushHead(val)\n}\n\n\nfunc (c *poolChain) popHead() (interface{}, bool) {\n d := c.head\n for d != nil {\n  if val, ok := d.popHead(); ok {\n   return val, ok\n  }\n\n  d = loadPoolChainElt(&d.prev)\n }\n return nil, false\n}\n\nfunc (c *poolChain) popTail() (interface{}, bool) {\n d := loadPoolChainElt(&c.tail)\n if d == nil {\n  return nil, false\n }\n\n for {\n\n  d2 := loadPoolChainElt(&d.next)\n\n  if val, ok := d.popTail(); ok {\n   return val, ok\n  }\n\n  if d2 == nil {\n \n   return nil, false\n  }\n\n\n  if atomic.CompareAndSwapPointer((*unsafe.Pointer)(unsafe.Pointer(&c.tail)), unsafe.Pointer(d), unsafe.Pointer(d2)) {\n\n   storePoolChainElt(&d2.prev, nil)\n  }\n  d = d2\n }\n}\n\n")),(0,r.kt)("h2",{id:"map"},"Map"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Load(key interface{}) (value interface{},ok bool)\uff1a\u901a\u8fc7\u53c2\u6570key\u67e5\u8be2\u5bf9\u5e94\u7684value\uff0c\u5982\u679c\u4e0d\u5b58\u5728\u5219\u8fd4\u56denil\uff1bok\u8868\u793a\u662f\u5426\u627e\u5230\u5bf9\u5e94\u7684\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},"Store(key,value interface{})\uff1a\u8be5\u65b9\u6cd5\u76f8\u5f53\u4e8e\u5bf9sync.Map\u7684\u66f4\u65b0\u6216\u65b0\u589e\uff0c\u53c2\u6570\u662f\u952e\u503c\u5bf9"),(0,r.kt)("li",{parentName:"ul"},"LoadOrStore(key,value interface{}) (actual interface{},loaded bool)\uff1a\u8be5\u65b9\u6cd5\u7684\u53c2\u6570\u4e3akey\u548cvalue\u3002\u8be5\u65b9\u6cd5\u4f1a\u5148\u6839\u636e\u53c2\u6570key\u67e5\u627e\u5bf9\u5e94\u7684value\uff0c\u5982\u679c\u627e\u5230\u5219\u4e0d\u4fee\u6539\u539f\u6765\u7684\u503c\u5e76\u901a\u8fc7actual\u8fd4\u56de\uff0c\u5e76\u4e14loaded\u4e3atrue\uff1b\u5982\u679c\u901a\u8fc7key\u65e0\u6cd5\u67e5\u627e\u5230\u5bf9\u5e94\u7684value\uff0c\u5219\u5b58\u50a8key-value\u5e76\u4e14\u5c06\u5b58\u50a8\u7684value\u901a\u8fc7actual\u8fd4\u56de\uff0cloaded\u4e3afalse\u3002"),(0,r.kt)("li",{parentName:"ul"},"Delete(key interface{})\uff1a\u901a\u8fc7key\u5220\u9664\u952e\u503c\u5bf9"),(0,r.kt)("li",{parentName:"ul"},"Range(f func(key,value interface{}) bool)\uff1a\u904d\u5386sync.Map\u7684\u5143\u7d20\uff0c\u6ce8\u610ffor...range map\u662f\u5bf9\u5185\u7f6emap\u7c7b\u578b\u7684\u7528\u6cd5\uff0csync.Map\u9700\u8981\u4f7f\u7528\u5355\u72ec\u7684Range\u65b9\u6cd5\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type Map struct {\n mu Mutex\n\n read atomic.Value\n\n\n dirty map[interface{}]*entry\n\n\n misses int\n}\ntype readOnly struct {\n m       map[interface{}]*entry\n amended bool \n}\n\nvar expunged = unsafe.Pointer(new(interface{}))\ntype entry struct {\n\n p unsafe.Pointer \n}\n\nfunc newEntry(i interface{}) *entry {\n return &entry{p: unsafe.Pointer(&i)}\n}\n\nfunc (m *Map) Load(key interface{}) (value interface{}, ok bool) {\n read, _ := m.read.Load().(readOnly)\n e, ok := read.m[key]\n if !ok && read.amended {\n  m.mu.Lock()\n\n  read, _ = m.read.Load().(readOnly)\n  e, ok = read.m[key]\n  if !ok && read.amended {\n   e, ok = m.dirty[key]\n   m.missLocked()\n  }\n  m.mu.Unlock()\n }\n if !ok {\n  return nil, false\n }\n return e.load()\n}\n\nfunc (e *entry) load() (value interface{}, ok bool) {\n p := atomic.LoadPointer(&e.p)\n if p == nil || p == expunged {\n  return nil, false\n }\n return *(*interface{})(p), true\n}\n// Store sets the value for a key.\nfunc (m *Map) Store(key, value interface{}) {\n read, _ := m.read.Load().(readOnly)\n if e, ok := read.m[key]; ok && e.tryStore(&value) {\n  return\n }\n\n m.mu.Lock()\n read, _ = m.read.Load().(readOnly)\n if e, ok := read.m[key]; ok {\n  if e.unexpungeLocked() {\n\n   m.dirty[key] = e\n  }\n  e.storeLocked(&value)\n } else if e, ok := m.dirty[key]; ok {\n  e.storeLocked(&value)\n } else {\n  if !read.amended {\n   m.dirtyLocked()\n   m.read.Store(readOnly{m: read.m, amended: true})\n  }\n  m.dirty[key] = newEntry(value)\n }\n m.mu.Unlock()\n}\n\nfunc (e *entry) tryStore(i *interface{}) bool {\n for {\n  p := atomic.LoadPointer(&e.p)\n  if p == expunged {\n   return false\n  }\n  if atomic.CompareAndSwapPointer(&e.p, p, unsafe.Pointer(i)) {\n   return true\n  }\n }\n}\n\nfunc (e *entry) unexpungeLocked() (wasExpunged bool) {\n return atomic.CompareAndSwapPointer(&e.p, expunged, nil)\n}\nfunc (e *entry) storeLocked(i *interface{}) {\n atomic.StorePointer(&e.p, unsafe.Pointer(i))\n}\n\nfunc (m *Map) LoadOrStore(key, value interface{}) (actual interface{}, loaded bool) {\n\n read, _ := m.read.Load().(readOnly)\n if e, ok := read.m[key]; ok {\n  actual, loaded, ok := e.tryLoadOrStore(value)\n  if ok {\n   return actual, loaded\n  }\n }\n\n m.mu.Lock()\n read, _ = m.read.Load().(readOnly)\n if e, ok := read.m[key]; ok {\n  if e.unexpungeLocked() {\n   m.dirty[key] = e\n  }\n  actual, loaded, _ = e.tryLoadOrStore(value)\n } else if e, ok := m.dirty[key]; ok {\n  actual, loaded, _ = e.tryLoadOrStore(value)\n  m.missLocked()\n } else {\n  if !read.amended {\n\n   m.dirtyLocked()\n   m.read.Store(readOnly{m: read.m, amended: true})\n  }\n  m.dirty[key] = newEntry(value)\n  actual, loaded = value, false\n }\n m.mu.Unlock()\n\n return actual, loaded\n}\nfunc (e *entry) tryLoadOrStore(i interface{}) (actual interface{}, loaded, ok bool) {\n p := atomic.LoadPointer(&e.p)\n if p == expunged {\n  return nil, false, false\n }\n if p != nil {\n  return *(*interface{})(p), true, true\n }\n\n ic := i\n for {\n  if atomic.CompareAndSwapPointer(&e.p, nil, unsafe.Pointer(&ic)) {\n   return i, false, true\n  }\n  p = atomic.LoadPointer(&e.p)\n  if p == expunged {\n   return nil, false, false\n  }\n  if p != nil {\n   return *(*interface{})(p), true, true\n  }\n }\n}\n\nfunc (m *Map) LoadAndDelete(key interface{}) (value interface{}, loaded bool) {\n read, _ := m.read.Load().(readOnly)\n e, ok := read.m[key]\n if !ok && read.amended {\n  m.mu.Lock()\n  read, _ = m.read.Load().(readOnly)\n  e, ok = read.m[key]\n  if !ok && read.amended {\n   e, ok = m.dirty[key]\n   delete(m.dirty, key)\n   m.missLocked()\n  }\n  m.mu.Unlock()\n }\n if ok {\n  return e.delete()\n }\n return nil, false\n}\n\nfunc (m *Map) Delete(key interface{}) {\n m.LoadAndDelete(key)\n}\n\nfunc (e *entry) delete() (value interface{}, ok bool) {\n for {\n  p := atomic.LoadPointer(&e.p)\n  if p == nil || p == expunged {\n   return nil, false\n  }\n  if atomic.CompareAndSwapPointer(&e.p, p, nil) {\n   return *(*interface{})(p), true\n  }\n }\n}\n\nfunc (m *Map) Range(f func(key, value interface{}) bool) {\n\n read, _ := m.read.Load().(readOnly)\n if read.amended {\n\n  m.mu.Lock()\n  read, _ = m.read.Load().(readOnly)\n  if read.amended {\n   read = readOnly{m: m.dirty}\n   m.read.Store(read)\n   m.dirty = nil\n   m.misses = 0\n  }\n  m.mu.Unlock()\n }\n\n for k, e := range read.m {\n  v, ok := e.load()\n  if !ok {\n   continue\n  }\n  if !f(k, v) {\n   break\n  }\n }\n}\n\nfunc (m *Map) missLocked() {\n m.misses++\n if m.misses < len(m.dirty) {\n  return\n }\n m.read.Store(readOnly{m: m.dirty})\n m.dirty = nil\n m.misses = 0\n}\n\nfunc (m *Map) dirtyLocked() {\n if m.dirty != nil {\n  return\n }\n\n read, _ := m.read.Load().(readOnly)\n m.dirty = make(map[interface{}]*entry, len(read.m))\n for k, e := range read.m {\n  if !e.tryExpungeLocked() {\n   m.dirty[k] = e\n  }\n }\n}\n\nfunc (e *entry) tryExpungeLocked() (isExpunged bool) {\n p := atomic.LoadPointer(&e.p)\n for p == nil {\n  if atomic.CompareAndSwapPointer(&e.p, nil, expunged) {\n   return true\n  }\n  p = atomic.LoadPointer(&e.p)\n }\n return p == expunged\n}\n\n\n")),(0,r.kt)("h2",{id:"cond-\u6761\u4ef6\u53d8\u91cf"},"Cond \u6761\u4ef6\u53d8\u91cf"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Cond\u5b9e\u73b0\u4e86\u4e00\u4e2a\u6761\u4ef6\u53d8\u91cf\uff0c\u4e00\u4e2a\u7ebf\u7a0b\u96c6\u5408\u5730\uff0c\u4f9b\u7ebf\u7a0b\u7b49\u5f85\u6216\u8005\u5ba3\u5e03\u67d0\u4e8b\u4ef6\u7684\u53d1\u751f\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u6bcf\u4e2aCond\u5b9e\u4f8b\u90fd\u6709\u4e00\u4e2a\u76f8\u5173\u7684\u9501\uff08\u4e00\u822c\u662f",(0,r.kt)("em",{parentName:"p"},"Mutex\u6216"),"RWMutex\u7c7b\u578b\u7684\u503c\uff09\uff0c\u5b83\u5fc5\u987b\u5728\u6539\u53d8\u6761\u4ef6\u65f6\u6216\u8005\u8c03\u7528Wait\u65b9\u6cd5\u65f6\u4fdd\u6301\u9501\u5b9a\u3002Cond\u53ef\u4ee5\u521b\u5efa\u4e3a\u5176\u4ed6\u7ed3\u6784\u4f53\u7684\u5b57\u6bb5\uff0cCond\u5728\u5f00\u59cb\u4f7f\u7528\u540e\u4e0d\u80fd\u88ab\u62f7\u8d1d\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type Cond struct {\n noCopy noCopy\n\n L Locker\n\n notify  notifyList\n checker copyChecker\n}\n\n//\u4f7f\u7528\u9501l\u521b\u5efa\u4e00\u4e2a*Cond\u3002\nfunc NewCond(l Locker) *Cond {\n return &Cond{L: l}\n}\nfunc (c *Cond) Wait() {\n c.checker.check()\n t := runtime_notifyListAdd(&c.notify)\n c.L.Unlock()\n runtime_notifyListWait(&c.notify, t)\n c.L.Lock()\n}\n//Signal\u5524\u9192\u7b49\u5f85c\u7684\u4e00\u4e2a\u7ebf\u7a0b\uff08\u5982\u679c\u5b58\u5728\uff09\u3002\u8c03\u7528\u8005\u5728\u8c03\u7528\u672c\u65b9\u6cd5\u65f6\uff0c\u5efa\u8bae\uff08\u4f46\u5e76\u975e\u5fc5\u987b\uff09\u4fdd\u6301c.L\u7684\u9501\u5b9a\u3002\nfunc (c *Cond) Signal() {\n c.checker.check()\n runtime_notifyListNotifyOne(&c.notify)\n}\n//Broadcast\u5524\u9192\u6240\u6709\u7b49\u5f85c\u7684\u7ebf\u7a0b\u3002\u8c03\u7528\u8005\u5728\u8c03\u7528\u672c\u65b9\u6cd5\u65f6\uff0c\u5efa\u8bae\uff08\u4f46\u5e76\u975e\u5fc5\u987b\uff09\u4fdd\u6301c.L\u7684\u9501\u5b9a\u3002\nfunc (c *Cond) Broadcast() {\n c.checker.check()\n runtime_notifyListNotifyAll(&c.notify)\n}\ntype copyChecker uintptr\n\nfunc (c *copyChecker) check() {\n if uintptr(*c) != uintptr(unsafe.Pointer(c)) &&\n  !atomic.CompareAndSwapUintptr((*uintptr)(c), 0, uintptr(unsafe.Pointer(c))) &&\n  uintptr(*c) != uintptr(unsafe.Pointer(c)) {\n  panic("sync.Cond is copied")\n }\n}\ntype noCopy struct{}\n\nfunc (*noCopy) Lock()   {}\nfunc (*noCopy) Unlock() {}\n')),(0,r.kt)("h2",{id:"waitgroup"},"WaitGroup"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"WaitGroup\u7528\u4e8e\u7b49\u5f85\u4e00\u7ec4\u7ebf\u7a0b\u7684\u7ed3\u675f\u3002\u7236\u7ebf\u7a0b\u8c03\u7528Add\u65b9\u6cd5\u6765\u8bbe\u5b9a\u5e94\u7b49\u5f85\u7684\u7ebf\u7a0b\u7684\u6570\u91cf\u3002\u6bcf\u4e2a\u88ab\u7b49\u5f85\u7684\u7ebf\u7a0b\u5728\u7ed3\u675f\u65f6\u5e94\u8c03\u7528Done\u65b9\u6cd5\u3002\u540c\u65f6\uff0c\u4e3b\u7ebf\u7a0b\u91cc\u53ef\u4ee5\u8c03\u7528Wait\u65b9\u6cd5\u963b\u585e\u81f3\u6240\u6709\u7ebf\u7a0b\u7ed3\u675f\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type WaitGroup struct {\n noCopy noCopy\n\n state1 [3]uint32\n}\n\nfunc (wg *WaitGroup) state() (statep *uint64, semap *uint32) {\n if uintptr(unsafe.Pointer(&wg.state1))%8 == 0 {\n  return (*uint64)(unsafe.Pointer(&wg.state1)), &wg.state1[2]\n } else {\n  return (*uint64)(unsafe.Pointer(&wg.state1[1])), &wg.state1[0]\n }\n}\n//Add\u65b9\u6cd5\u5411\u5185\u90e8\u8ba1\u6570\u52a0\u4e0adelta\uff0cdelta\u53ef\u4ee5\u662f\u8d1f\u6570\uff1b\u5982\u679c\u5185\u90e8\u8ba1\u6570\u5668\u53d8\u4e3a0\uff0cWait\u65b9\u6cd5\u963b\u585e\u7b49\u5f85\u7684\u6240\u6709\u7ebf\u7a0b\u90fd\u4f1a\u91ca\u653e\uff0c\u5982\u679c\u8ba1\u6570\u5668\u5c0f\u4e8e0\uff0c\u65b9\u6cd5panic\u3002\u6ce8\u610fAdd\u52a0\u4e0a\u6b63\u6570\u7684\u8c03\u7528\u5e94\u5728Wait\u4e4b\u524d\uff0c\u5426\u5219Wait\u53ef\u80fd\u53ea\u4f1a\u7b49\u5f85\u5f88\u5c11\u7684\u7ebf\u7a0b\u3002\u4e00\u822c\u6765\u8bf4\u672c\u65b9\u6cd5\u5e94\u5728\u521b\u5efa\u65b0\u7684\u7ebf\u7a0b\u6216\u8005\u5176\u4ed6\u5e94\u7b49\u5f85\u7684\u4e8b\u4ef6\u4e4b\u524d\u8c03\u7528\u3002\nfunc (wg *WaitGroup) Add(delta int) {\n statep, semap := wg.state()\n if race.Enabled {\n  _ = *statep\n  if delta < 0 {\n\n   race.ReleaseMerge(unsafe.Pointer(wg))\n  }\n  race.Disable()\n  defer race.Enable()\n }\n state := atomic.AddUint64(statep, uint64(delta)<<32)\n v := int32(state >> 32)\n w := uint32(state)\n if race.Enabled && delta > 0 && v == int32(delta) {\n\n  race.Read(unsafe.Pointer(semap))\n }\n if v < 0 {\n  panic("sync: negative WaitGroup counter")\n }\n if w != 0 && delta > 0 && v == int32(delta) {\n  panic("sync: WaitGroup misuse: Add called concurrently with Wait")\n }\n if v > 0 || w == 0 {\n  return\n }\n\n if *statep != state {\n  panic("sync: WaitGroup misuse: Add called concurrently with Wait")\n }\n\n *statep = 0\n for ; w != 0; w-- {\n  runtime_Semrelease(semap, false, 0)\n }\n}\n\n//Done\u65b9\u6cd5\u51cf\u5c11WaitGroup\u8ba1\u6570\u5668\u7684\u503c\uff0c\u5e94\u5728\u7ebf\u7a0b\u7684\u6700\u540e\u6267\u884c\u3002\nfunc (wg *WaitGroup) Done() {\n wg.Add(-1)\n}\n//Wait\u65b9\u6cd5\u963b\u585e\u76f4\u5230WaitGroup\u8ba1\u6570\u5668\u51cf\u4e3a0\u3002\nfunc (wg *WaitGroup) Wait() {\n statep, semap := wg.state()\n if race.Enabled {\n  _ = *statep \n  race.Disable()\n }\n for {\n  state := atomic.LoadUint64(statep)\n  v := int32(state >> 32)\n  w := uint32(state)\n  if v == 0 {\n  \n   if race.Enabled {\n    race.Enable()\n    race.Acquire(unsafe.Pointer(wg))\n   }\n   return\n  }\n\n  if atomic.CompareAndSwapUint64(statep, state, state+1) {\n   if race.Enabled && w == 0 {\n\n    race.Write(unsafe.Pointer(semap))\n   }\n   runtime_Semacquire(semap)\n   if *statep != 0 {\n    panic("sync: WaitGroup is reused before previous Wait has returned")\n   }\n   if race.Enabled {\n    race.Enable()\n    race.Acquire(unsafe.Pointer(wg))\n   }\n   return\n  }\n }\n}\n')),(0,r.kt)("h2",{id:"runtime"},"runtime"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func runtime_Semacquire(s *uint32)\n\nfunc runtime_SemacquireMutex(s *uint32, lifo bool, skipframes int)\n\n\nfunc runtime_Semrelease(s *uint32, handoff bool, skipframes int)\n\n\nfunc runtime_notifyListAdd(l *notifyList) uint32\n\n\nfunc runtime_notifyListWait(l *notifyList, t uint32)\n\n\nfunc runtime_notifyListNotifyAll(l *notifyList)\n\n\nfunc runtime_notifyListNotifyOne(l *notifyList)\n\nfunc runtime_notifyListCheck(size uintptr)\nfunc init() {\n var n notifyList\n runtime_notifyListCheck(unsafe.Sizeof(n))\n}\n\n\nfunc runtime_canSpin(i int) bool\n\n\nfunc runtime_doSpin()\n\nfunc runtime_nanotime() int64\n\n")),(0,r.kt)("h2",{id:"pool--\u5bf9\u8c61\u6c60"},"Pool  \u5bf9\u8c61\u6c60"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5b58\u5165sync.Pool\u7684\u5bf9\u8c61\u53ef\u80fd\u4f1a\u5728\u4e0d\u901a\u77e5\u7684\u60c5\u51b5\u4e0b\u88ab\u91ca\u653e\uff0c\u8fd9\u4e00\u70b9\u4e00\u5b9a\u8981\u6ce8\u610f\u3002\u6bd4\u5982\u4e00\u4e9bsocket\u957f\u8fde\u63a5\u5c31\u4e0d\u9002\u5408\u5b58\u5165sync.Pool\u5185\u3002\nGet\u548cPut\u662fPool\u7684\u4e24\u4e2a\u516c\u5171\u65b9\u6cd5\u3002Put\u65b9\u6cd5\u662f\u5411\u6c60\u4e2d\u6dfb\u52a0\u5bf9\u8c61\uff0cGet\u65b9\u6cd5\u662f\u4ece\u6c60\u4e2d\u83b7\u53d6\u5bf9\u8c61\uff0c\u5982\u679c\u6ca1\u6709\u5bf9\u8c61\u5219\u8c03\u7528New\u65b9\u6cd5\u521b\u5efa\u751f\u6210\uff0c\u5982\u679c\u672a\u8bbe\u7f6eNew\u5219\u8fd4\u56denil\u3002\nPool\u662f\u4e00\u4e2a\u53ef\u4ee5\u5206\u522b\u5b58\u53d6\u7684\u4e34\u65f6\u5bf9\u8c61\u7684\u96c6\u5408\u3002"),(0,r.kt)("p",{parentName:"admonition"},"Pool\u4e2d\u4fdd\u5b58\u7684\u4efb\u4f55item\u90fd\u53ef\u80fd\u968f\u65f6\u4e0d\u505a\u901a\u544a\u7684\u91ca\u653e\u6389\u3002\u5982\u679cPool\u6301\u6709\u8be5\u5bf9\u8c61\u7684\u552f\u4e00\u5f15\u7528\uff0c\u8fd9\u4e2aitem\u5c31\u53ef\u80fd\u88ab\u56de\u6536\u3002"),(0,r.kt)("p",{parentName:"admonition"},"Pool\u53ef\u4ee5\u5b89\u5168\u7684\u88ab\u591a\u4e2a\u7ebf\u7a0b\u540c\u65f6\u4f7f\u7528\u3002"),(0,r.kt)("p",{parentName:"admonition"},"Pool\u7684\u76ee\u7684\u662f\u7f13\u5b58\u7533\u8bf7\u4f46\u672a\u4f7f\u7528\u7684item\u7528\u4e8e\u4e4b\u540e\u7684\u91cd\u7528\uff0c\u4ee5\u51cf\u8f7bGC\u7684\u538b\u529b\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u8ba9\u521b\u5efa\u9ad8\u6548\u800c\u7ebf\u7a0b\u5b89\u5168\u7684\u7a7a\u95f2\u5217\u8868\u66f4\u5bb9\u6613\u3002\u4f46Pool\u5e76\u4e0d\u9002\u7528\u4e8e\u6240\u6709\u7a7a\u95f2\u5217\u8868\u3002"),(0,r.kt)("p",{parentName:"admonition"},"Pool\u7684\u5408\u7406\u7528\u6cd5\u662f\u7528\u4e8e\u7ba1\u7406\u4e00\u7ec4\u9759\u9759\u7684\u88ab\u591a\u4e2a\u72ec\u7acb\u5e76\u53d1\u7ebf\u7a0b\u5171\u4eab\u5e76\u53ef\u80fd\u91cd\u7528\u7684\u4e34\u65f6item\u3002Pool\u63d0\u4f9b\u4e86\u8ba9\u591a\u4e2a\u7ebf\u7a0b\u5206\u644a\u5185\u5b58\u7533\u8bf7\u6d88\u8017\u7684\u65b9\u6cd5\u3002"),(0,r.kt)("p",{parentName:"admonition"},"Pool\u7684\u4e00\u4e2a\u597d\u4f8b\u5b50\u5728fmt\u5305\u91cc\u3002\u8be5Pool\u7ef4\u62a4\u4e00\u4e2a\u52a8\u6001\u5927\u5c0f\u7684\u4e34\u65f6\u8f93\u51fa\u7f13\u5b58\u4ed3\u5e93\u3002\u8be5\u4ed3\u5e93\u4f1a\u5728\u8fc7\u8f7d\uff08\u8bb8\u591a\u7ebf\u7a0b\u6d3b\u8dc3\u7684\u6253\u5370\u65f6\uff09\u589e\u5927\uff0c\u5728\u6c89\u5bc2\u65f6\u7f29\u5c0f\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u53e6\u4e00\u65b9\u9762\uff0c\u7ba1\u7406\u7740\u77ed\u5bff\u547d\u5bf9\u8c61\u7684\u7a7a\u95f2\u5217\u8868\u4e0d\u9002\u5408\u4f7f\u7528Pool\uff0c\u56e0\u4e3a\u8fd9\u79cd\u60c5\u51b5\u4e0b\u5185\u5b58\u7533\u8bf7\u6d88\u8017\u4e0d\u80fd\u5f88\u597d\u7684\u5206\u914d\u3002\u8fd9\u65f6\u5e94\u8be5\u7531\u8fd9\u4e9b\u5bf9\u8c61\u81ea\u5df1\u5b9e\u73b0\u7a7a\u95f2\u5217\u8868\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type Pool struct {\n noCopy noCopy\n\n local     unsafe.Pointer \n localSize uintptr        \n\n victim     unsafe.Pointer\n victimSize uintptr        \n\n\n New func() interface{}\n}\ntype poolLocalInternal struct {\n private interface{} \n shared  poolChain   \n}\n\ntype poolLocal struct {\n poolLocalInternal\n pad [128 - unsafe.Sizeof(poolLocalInternal{})%128]byte\n}\n\nfunc fastrand() uint32\n\nvar poolRaceHash [128]uint64\n\nfunc poolRaceAddr(x interface{}) unsafe.Pointer {\n ptr := uintptr((*[2]unsafe.Pointer)(unsafe.Pointer(&x))[1])\n h := uint32((uint64(uint32(ptr)) * 0x85ebca6b) >> 16)\n return unsafe.Pointer(&poolRaceHash[h%uint32(len(poolRaceHash))])\n}\n//Put\u65b9\u6cd5\u5c06x\u653e\u5165\u6c60\u4e2d\u3002\nfunc (p *Pool) Put(x interface{}) {\n if x == nil {\n  return\n }\n if race.Enabled {\n  if fastrand()%4 == 0 {\n   // Randomly drop x on floor.\n   return\n  }\n  race.ReleaseMerge(poolRaceAddr(x))\n  race.Disable()\n }\n l, _ := p.pin()\n if l.private == nil {\n  l.private = x\n  x = nil\n }\n if x != nil {\n  l.shared.pushHead(x)\n }\n runtime_procUnpin()\n if race.Enabled {\n  race.Enable()\n }\n}\n\n\n// Get\u65b9\u6cd5\u4ece\u6c60\u4e2d\u9009\u62e9\u4efb\u610f\u4e00\u4e2aitem\uff0c\u5220\u9664\u5176\u5728\u6c60\u4e2d\u7684\u5f15\u7528\u8ba1\u6570\uff0c\u5e76\u63d0\u4f9b\u7ed9\u8c03\u7528\u8005\u3002Get\u65b9\u6cd5\u4e5f\u53ef\u80fd\u9009\u62e9\u65e0\u89c6\u5185\u5b58\u6c60\uff0c\u5c06\u5176\u5f53\u4f5c\u7a7a\u7684\u3002\u8c03\u7528\u8005\u4e0d\u5e94\u8ba4\u4e3aGet\u7684\u8fd4\u56de\u8fd9\u548c\u4f20\u9012\u7ed9Put\u7684\u503c\u4e4b\u95f4\u6709\u4efb\u4f55\u5173\u7cfb\u3002\n// \u5047\u4f7fGet\u65b9\u6cd5\u6ca1\u6709\u53d6\u5f97item\uff1a\u5982p.New\u975enil\uff0cGet\u8fd4\u56de\u8c03\u7528p.New\u7684\u7ed3\u679c\uff1b\u5426\u5219\u8fd4\u56denil\u3002\n\nfunc (p *Pool) Get() interface{} {\n if race.Enabled {\n  race.Disable()\n }\n l, pid := p.pin()\n x := l.private\n l.private = nil\n if x == nil {\n  x, _ = l.shared.popHead()\n  if x == nil {\n   x = p.getSlow(pid)\n  }\n }\n runtime_procUnpin()\n if race.Enabled {\n  race.Enable()\n  if x != nil {\n   race.Acquire(poolRaceAddr(x))\n  }\n }\n if x == nil && p.New != nil {\n  x = p.New()\n }\n return x\n}\n\nfunc (p *Pool) getSlow(pid int) interface{} {\n\n size := runtime_LoadAcquintptr(&p.localSize) \n locals := p.local                           \n\n for i := 0; i < int(size); i++ {\n  l := indexLocal(locals, (pid+i+1)%int(size))\n  if x, _ := l.shared.popTail(); x != nil {\n   return x\n  }\n }\n\n size = atomic.LoadUintptr(&p.victimSize)\n if uintptr(pid) >= size {\n  return nil\n }\n locals = p.victim\n l := indexLocal(locals, pid)\n if x := l.private; x != nil {\n  l.private = nil\n  return x\n }\n for i := 0; i < int(size); i++ {\n  l := indexLocal(locals, (pid+i)%int(size))\n  if x, _ := l.shared.popTail(); x != nil {\n   return x\n  }\n }\n\n\n atomic.StoreUintptr(&p.victimSize, 0)\n\n return nil\n}\n\nfunc (p *Pool) pin() (*poolLocal, int) {\n pid := runtime_procPin()\n\n s := runtime_LoadAcquintptr(&p.localSize) \n l := p.local                             \n if uintptr(pid) < s {\n  return indexLocal(l, pid), pid\n }\n return p.pinSlow()\n}\nfunc (p *Pool) pinSlow() (*poolLocal, int) {\n\n runtime_procUnpin()\n allPoolsMu.Lock()\n defer allPoolsMu.Unlock()\n pid := runtime_procPin()\n\n s := p.localSize\n l := p.local\n if uintptr(pid) < s {\n  return indexLocal(l, pid), pid\n }\n if p.local == nil {\n  allPools = append(allPools, p)\n }\n.\n size := runtime.GOMAXPROCS(0)\n local := make([]poolLocal, size)\n atomic.StorePointer(&p.local, unsafe.Pointer(&local[0]))\n runtime_StoreReluintptr(&p.localSize, uintptr(size))   \n return &local[pid], pid\n}\n\nfunc poolCleanup() {\n\n for _, p := range oldPools {\n  p.victim = nil\n  p.victimSize = 0\n }\n\n for _, p := range allPools {\n  p.victim = p.local\n  p.victimSize = p.localSize\n  p.local = nil\n  p.localSize = 0\n }\n\n oldPools, allPools = allPools, nil\n}\n\nvar (\n allPoolsMu Mutex\n\n\n allPools []*Pool\n\n\n oldPools []*Pool\n)\n\nfunc init() {\n runtime_registerPoolCleanup(poolCleanup)\n}\nfunc indexLocal(l unsafe.Pointer, i int) *poolLocal {\n lp := unsafe.Pointer(uintptr(l) + uintptr(i)*unsafe.Sizeof(poolLocal{}))\n return (*poolLocal)(lp)\n}\n\n\nfunc runtime_registerPoolCleanup(cleanup func())\nfunc runtime_procPin() int\nfunc runtime_procUnpin()\n\n\nfunc runtime_LoadAcquintptr(ptr *uintptr) uintptr\n\n\nfunc runtime_StoreReluintptr(ptr *uintptr, val uintptr) uintptr\n")),(0,r.kt)("h2",{id:"once"},"Once"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"}," once \u53ea\u80fd\u6267\u884c\u4e00\u6b21\nsync.Once\u5c31\u63d0\u4f9b\u4e86\u5ef6\u8fdf\u521d\u59cb\u5316\u7684\u529f\u80fd\ndone\u7528\u6765\u8bb0\u5f55\u6267\u884c\u6b21\u6570\uff0c\u7528m\u6765\u4fdd\u8bc1\u540c\u4e00\u65f6\u523b\u53ea\u6709\u4e00\u4e2agoroutine\u5728\u6267\u884cDo\u65b9\u6cd5\u3002\u5728\u4f7f\u7528\u8be5\u7ed3\u6784\u4f53\u7684\u65f6\u5019\u5148\u5b9a\u4e49Once\u578b\u53d8\u91cf\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"}," type Once struct {\n    done uint32\n    m Mutex\n }\nfunc (o *Once) Do(f func()) {\n\n if atomic.LoadUint32(&o.done) == 0 {\n  o.doSlow(f)\n }\n}\n\nfunc (o *Once) doSlow(f func()) {\n o.m.Lock()\n defer o.m.Unlock()\n if o.done == 0 {\n  defer atomic.StoreUint32(&o.done, 1)\n  f()\n }\n}\n")),(0,r.kt)("h2",{id:"mutex-\u4e92\u65a5\u9501"},"Mutex \u4e92\u65a5\u9501"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u4e00\u4e2a\u4e92\u65a5\u9501\u53ea\u80fd\u88ab\u4e00\u4e2agoroutine\u9501\u5b9a\uff0c\u9501\u5b9a\u7684\u662f\u8fd9\u4e2a\u9501\u672c\u8eab\uff0c\u800c\u4e0d\u662f\u67d0\u6bb5\u4ee3\u7801\u3002\u5982\u679c\u7ed9\u67d0\u6bb5\u4ee3\u7801\u52a0\u4e0a\u9501\uff0c\u76f8\u5f53\u4e8e\u6267\u884c\u8fd9\u6bb5\u4ee3\u7801\u7684\u65f6\u5019\u5c31\u52a0\u4e86\u9501\uff0c\u522b\u7684\u7a0b\u5e8f\u6267\u884c\u8fd9\u6bb5\u4ee3\u7801\u53ea\u80fd\u7b49\u5f85\u524d\u9762\u7684\u7a0b\u5e8f\u7ed3\u675f\u5e76\u628a\u9501\u6253\u5f00\uff0c\u5982\u6b64\u5f80\u590d\uff0c\u4ee5\u6b64\u6765\u5b9e\u73b0\u5bf9\u53d8\u91cf\u7684\u5171\u4eab\u4f7f\u7528\n\u53ef\u4ee5\u7531\u4e0d\u540c\u7684\u7ebf\u7a0b\u52a0\u9501\u548c\u89e3\u9501\nsync.Mutex\u7684\u52a0\u9501\u548c\u5f00\u9501\u5fc5\u987b\u662f\u6210\u5bf9\u7684\uff0c\u5982\u679c\u52a0\u9501\u540e\u5fd8\u8bb0\u5f00\u9501\uff0c\u90a3\u4e48\u7a0b\u5e8f\u4f1a\u5d29\u6e83\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type Mutex struct {\n state int32\n sema  uint32\n}\n//Lock\u65b9\u6cd5\u9501\u4f4fm\uff0c\u5982\u679cm\u5df2\u7ecf\u52a0\u9501\uff0c\u5219\u963b\u585e\u76f4\u5230m\u89e3\u9501\u3002\nfunc (m *Mutex) Lock() {\n if atomic.CompareAndSwapInt32(&m.state, 0, mutexLocked) {\n  if race.Enabled {\n   race.Acquire(unsafe.Pointer(m))\n  }\n  return\n }\n m.lockSlow()\n}\n\nfunc (m *Mutex) lockSlow() {\n var waitStartTime int64\n starving := false\n awoke := false\n iter := 0\n old := m.state\n for {\n  if old&(mutexLocked|mutexStarving) == mutexLocked && runtime_canSpin(iter) {\n   if !awoke && old&mutexWoken == 0 && old>>mutexWaiterShift != 0 &&\n    atomic.CompareAndSwapInt32(&m.state, old, old|mutexWoken) {\n    awoke = true\n   }\n   runtime_doSpin()\n   iter++\n   old = m.state\n   continue\n  }\n  new := old\n  if old&mutexStarving == 0 {\n   new |= mutexLocked\n  }\n  if old&(mutexLocked|mutexStarving) != 0 {\n   new += 1 << mutexWaiterShift\n  }\n  if starving && old&mutexLocked != 0 {\n   new |= mutexStarving\n  }\n  if awoke {\n   if new&mutexWoken == 0 {\n    throw("sync: inconsistent mutex state")\n   }\n   new &^= mutexWoken\n  }\n  if atomic.CompareAndSwapInt32(&m.state, old, new) {\n   if old&(mutexLocked|mutexStarving) == 0 {\n    break // locked the mutex with CAS\n   }\n   queueLifo := waitStartTime != 0\n   if waitStartTime == 0 {\n    waitStartTime = runtime_nanotime()\n   }\n   runtime_SemacquireMutex(&m.sema, queueLifo, 1)\n   starving = starving || runtime_nanotime()-waitStartTime > starvationThresholdNs\n   old = m.state\n   if old&mutexStarving != 0 {\n    if old&(mutexLocked|mutexWoken) != 0 || old>>mutexWaiterShift == 0 {\n     throw("sync: inconsistent mutex state")\n    }\n    delta := int32(mutexLocked - 1<<mutexWaiterShift)\n    if !starving || old>>mutexWaiterShift == 1 {\n     delta -= mutexStarving\n    }\n    atomic.AddInt32(&m.state, delta)\n    break\n   }\n   awoke = true\n   iter = 0\n  } else {\n   old = m.state\n  }\n }\n\n if race.Enabled {\n  race.Acquire(unsafe.Pointer(m))\n }\n}\n\n//Unlock\u65b9\u6cd5\u89e3\u9501m\uff0c\u5982\u679cm\u672a\u52a0\u9501\u4f1a\u5bfc\u81f4\u8fd0\u884c\u65f6\u9519\u8bef\u3002\u9501\u548c\u7ebf\u7a0b\u65e0\u5173\uff0c\u53ef\u4ee5\u7531\u4e0d\u540c\u7684\u7ebf\u7a0b\u52a0\u9501\u548c\u89e3\u9501\u3002\nfunc (m *Mutex) Unlock() {\n if race.Enabled {\n  _ = m.state\n  race.Release(unsafe.Pointer(m))\n }\n\n // Fast path: drop lock bit.\n new := atomic.AddInt32(&m.state, -mutexLocked)\n if new != 0 {\n  m.unlockSlow(new)\n }\n}\n\nfunc (m *Mutex) unlockSlow(new int32) {\n if (new+mutexLocked)&mutexLocked == 0 {\n  throw("sync: unlock of unlocked mutex")\n }\n if new&mutexStarving == 0 {\n  old := new\n  for {\n   if old>>mutexWaiterShift == 0 || old&(mutexLocked|mutexWoken|mutexStarving) != 0 {\n    return\n   }\n\n   new = (old - 1<<mutexWaiterShift) | mutexWoken\n   if atomic.CompareAndSwapInt32(&m.state, old, new) {\n    runtime_Semrelease(&m.sema, false, 1)\n    return\n   }\n   old = m.state\n  }\n } else {\n  runtime_Semrelease(&m.sema, true, 1)\n }\n}\n\n')))}s.isMDXComponent=!0}}]);