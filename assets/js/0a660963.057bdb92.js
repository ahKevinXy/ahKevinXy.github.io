"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[52860],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),g=a,m=p["".concat(c,".").concat(g)]||p[g]||d[g]||r;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},45080:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=n(87462),a=(n(67294),n(3905));const r={title:"\u6e90\u7801 \u4e0a\u89e3\u8bfb GMP\u6a21\u578b",tags:["\u6e90\u7801","Go"],authors:"ahKevinXy",image:"https://www.dmoe.cc/random.php?type=2304063"},o="\u6e90\u7801 \u4e0a\u89e3\u8bfb GMP\u6a21\u578b",s={permalink:"/blog/2023/03/06/go_gmp",source:"@site/blog/2023/03/06/go_gmp.md",title:"\u6e90\u7801 \u4e0a\u89e3\u8bfb GMP\u6a21\u578b",description:"path : src/runtime/runtime1.go",date:"2023-03-06T00:00:00.000Z",formattedDate:"March 6, 2023",tags:[{label:"\u6e90\u7801",permalink:"/blog/tags/\u6e90\u7801"},{label:"Go",permalink:"/blog/tags/go"}],readingTime:14.655,hasTruncateMarker:!0,authors:[{name:"ahKevinXy",title:"\u4f5c\u8005",url:"https://github.com/ahKevinXy",email:"ahkevinxy@gmail.com",imageURL:"/img/headers.png",key:"ahKevinXy"}],frontMatter:{title:"\u6e90\u7801 \u4e0a\u89e3\u8bfb GMP\u6a21\u578b",tags:["\u6e90\u7801","Go"],authors:"ahKevinXy",image:"https://www.dmoe.cc/random.php?type=2304063"},prevItem:{title:"Go \u6e90\u7801\u5b66\u4e60 --- chan",permalink:"/blog/2023/03/06/go_chan"},nextItem:{title:"\u9ad8\u5e76\u53d1\u4e0b\u5982\u4f55\u4fdd\u8bc1\u63a5\u53e3\u7684\u5e42\u7b49\u6027",permalink:"/blog/2023/03/05/idempotent"}},c={authorsImageUrls:[void 0]},l=[{value:"G",id:"g",level:2},{value:"M",id:"m",level:2},{value:"P",id:"p",level:2},{value:"Go \u7684\u6a21\u578b\u8c03\u5ea6",id:"go-\u7684\u6a21\u578b\u8c03\u5ea6",level:2},{value:"Work Stealing\u7b97\u6cd5\u7684\u57fa\u672c\u539f\u7406",id:"work-stealing\u7b97\u6cd5\u7684\u57fa\u672c\u539f\u7406",level:2},{value:"\u4ec0\u4e48\u65f6\u5019\u521b\u5efaM\u3001P\u3001G",id:"\u4ec0\u4e48\u65f6\u5019\u521b\u5efampg",level:2},{value:"goroutine\u7ecf\u5386\u7684\u8fc7\u7a0b",id:"goroutine\u7ecf\u5386\u7684\u8fc7\u7a0b",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"path : src/runtime/runtime1.go")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"go  version 1.16.1")),(0,a.kt)("h2",{id:"g"},"G"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Go"},"type g struct {\n // Stack (\u6808)parameters(\u53c2\u6570).\n // stack describes the actual stack memory: [stack.lo, stack.hi).\n // stackguard0 is the stack pointer compared in the Go stack growth prologue.\n//stackguard0\u662f\u5728Go\u5806\u6808\u589e\u957f\u5e8f\u8a00\u4e2d\u6bd4\u8f83\u7684\u5806\u6808\u6307\u9488\n // It is stack.lo+StackGuard normally, but can be StackPreempt to trigger a preemption.\n//lo+StackGuard\u6b63\u5e38\uff0c\u4f46\u53ef\u4ee5\u662fStackPreempt\u89e6\u53d1\u62a2\u5360\n // stackguard1 is the stack pointer compared in the C stack growth prologue.\n//stackguard1\u662f\u5728C\u5806\u6808\u589e\u957f\u5e8f\u8a00\u4e2d\u6bd4\u8f83\u7684\u5806\u6808\u6307\u9488\n\n // It is stack.lo+StackGuard on g0 and gsignal stacks.\n // It is ~0 on other goroutine stacks, to trigger a call to morestackc (and crash).\n stack       stack   // offset known to runtime/cgo \u5df2\u77e5\u7684\u504f\u79fb\u91cf\u4e3aruntime/cgo\n stackguard0 uintptr // offset known to liblink \u5df2\u77e5liblink\u7684\u504f\u79fb\u91cf\n stackguard1 uintptr // offset known to liblink\n\n _panic       *_panic // innermost panic - offset known to liblink\n _defer       *_defer // innermost defer\n m            *m      // current m; offset known to arm liblink\n sched        gobuf\n syscallsp    uintptr        // if status==Gsyscall, syscallsp = sched.sp to use during gc\n syscallpc    uintptr        // if status==Gsyscall, syscallpc = sched.pc to use during gc\n stktopsp     uintptr        // expected sp at top of stack, to check in traceback\n param        unsafe.Pointer // passed parameter on wakeup\n atomicstatus uint32\n stackLock    uint32 // sigprof/scang lock; TODO: fold in to atomicstatus\n goid         int64\n schedlink    guintptr\n waitsince    int64      // approx time when the g become blocked\n waitreason   waitReason // if status==Gwaiting\n\n preempt       bool // preemption signal, duplicates stackguard0 = stackpreempt\n preemptStop   bool // transition to _Gpreempted on preemption; otherwise, just deschedule\n preemptShrink bool // shrink stack at synchronous safe point\n\n // asyncSafePoint is set if g is stopped at an asynchronous\n // safe point. This means there are frames on the stack\n // without precise pointer information.\n asyncSafePoint bool\n\n paniconfault bool // panic (instead of crash) on unexpected fault address\n gcscandone   bool // g has scanned stack; protected by _Gscan bit in status\n throwsplit   bool // must not split stack\n // activeStackChans indicates that there are unlocked channels\n // pointing into this goroutine's stack. If true, stack\n // copying needs to acquire channel locks to protect these\n // areas of the stack.\n activeStackChans bool\n // parkingOnChan indicates that the goroutine is about to\n // park on a chansend or chanrecv. Used to signal an unsafe point\n // for stack shrinking. It's a boolean value, but is updated atomically.\n parkingOnChan uint8\n\n raceignore     int8     // ignore race detection events\n sysblocktraced bool     // StartTrace has emitted EvGoInSyscall about this goroutine\n sysexitticks   int64    // cputicks when syscall has returned (for tracing)\n traceseq       uint64   // trace event sequencer\n tracelastp     puintptr // last P emitted an event for this goroutine\n lockedm        muintptr\n sig            uint32\n writebuf       []byte\n sigcode0       uintptr\n sigcode1       uintptr\n sigpc          uintptr\n gopc           uintptr         // pc of go statement that created this goroutine\n ancestors      *[]ancestorInfo // ancestor information goroutine(s) that created this goroutine (only used if debug.tracebackancestors)\n startpc        uintptr         // pc of goroutine function\n racectx        uintptr\n waiting        *sudog         // sudog structures this g is waiting on (that have a valid elem ptr); in lock order\n cgoCtxt        []uintptr      // cgo traceback context\n labels         unsafe.Pointer // profiler labels\n timer          *timer         // cached timer for time.Sleep\n selectDone     uint32         // are we participating in a select and did someone win the race?\n\n // Per-G GC state\n\n // gcAssistBytes is this G's GC assist credit in terms of\n // bytes allocated. If this is positive, then the G has credit\n // to allocate gcAssistBytes bytes without assisting. If this\n // is negative, then the G must correct this by performing\n // scan work. We track this in bytes to make it fast to update\n // and check for debt in the malloc hot path. The assist ratio\n // determines how this corresponds to scan work debt.\n gcAssistBytes int64\n}\n")),(0,a.kt)("h2",{id:"m"},"M"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'\ntype m struct {\n g0      *g     // goroutine with scheduling stack\n morebuf gobuf  // gobuf arg to morestack\n divmod  uint32 // div/mod denominator for arm - known to liblink\n\n // Fields not known to debuggers.\n procid        uint64       // for debuggers, but offset not hard-coded\n gsignal       *g           // signal-handling g\n goSigStack    gsignalStack // Go-allocated signal handling stack\n sigmask       sigset       // storage for saved signal mask\n tls           [6]uintptr   // thread-local storage (for x86 extern register)\n mstartfn      func()\n curg          *g       // current running goroutine\n caughtsig     guintptr // goroutine running during fatal signal\n p             puintptr // attached p for executing go code (nil if not executing go code)\n nextp         puintptr\n oldp          puintptr // the p that was attached before executing a syscall\n id            int64\n mallocing     int32\n throwing      int32\n preemptoff    string // if != "", keep curg running on this m\n locks         int32\n dying         int32\n profilehz     int32\n spinning      bool // m is out of work and is actively looking for work\n blocked       bool // m is blocked on a note\n newSigstack   bool // minit on C thread called sigaltstack\n printlock     int8\n incgo         bool   // m is executing a cgo call\n freeWait      uint32 // if == 0, safe to free g0 and delete m (atomic)\n fastrand      [2]uint32\n needextram    bool\n traceback     uint8\n ncgocall      uint64      // number of cgo calls in total\n ncgo          int32       // number of cgo calls currently in progress\n cgoCallersUse uint32      // if non-zero, cgoCallers in use temporarily\n cgoCallers    *cgoCallers // cgo traceback if crashing in cgo call\n doesPark      bool        // non-P running threads: sysmon and newmHandoff never use .park\n park          note\n alllink       *m // on allm\n schedlink     muintptr\n lockedg       guintptr\n createstack   [32]uintptr // stack that created this thread.\n lockedExt     uint32      // tracking for external LockOSThread\n lockedInt     uint32      // tracking for internal lockOSThread\n nextwaitm     muintptr    // next m waiting for lock\n waitunlockf   func(*g, unsafe.Pointer) bool\n waitlock      unsafe.Pointer\n waittraceev   byte\n waittraceskip int\n startingtrace bool\n syscalltick   uint32\n freelink      *m // on sched.freem\n\n // mFixup is used to synchronize OS related m state (credentials etc)\n // use mutex to access.\n mFixup struct {\n  lock mutex\n  fn   func(bool) bool\n }\n\n // these are here because they are too large to be on the stack\n // of low-level NOSPLIT functions.\n libcall   libcall\n libcallpc uintptr // for cpu profiler\n libcallsp uintptr\n libcallg  guintptr\n syscall   libcall // stores syscall parameters on windows\n\n vdsoSP uintptr // SP for traceback while in VDSO call (0 if not in call)\n vdsoPC uintptr // PC for traceback while in VDSO call\n\n // preemptGen counts the number of completed preemption\n // signals. This is used to detect when a preemption is\n // requested, but fails. Accessed atomically.\n preemptGen uint32\n\n // Whether this is a pending preemption signal on this M.\n // Accessed atomically.\n signalPending uint32\n\n dlogPerM\n\n mOS\n\n // Up to 10 locks held by this m, maintained by the lock ranking code.\n locksHeldLen int\n locksHeld    [10]heldLockInfo\n}\n\n')),(0,a.kt)("h2",{id:"p"},"P"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"\ntype p struct {\n id          int32\n status      uint32 // one of pidle/prunning/...\n link        puintptr\n schedtick   uint32     // incremented on every scheduler call\n syscalltick uint32     // incremented on every system call\n sysmontick  sysmontick // last tick observed by sysmon\n m           muintptr   // back-link to associated m (nil if idle)\n mcache      *mcache\n pcache      pageCache\n raceprocctx uintptr\n\n deferpool    [5][]*_defer // pool of available defer structs of different sizes (see panic.go)\n deferpoolbuf [5][32]*_defer\n\n // Cache of goroutine ids, amortizes accesses to runtime\xb7sched.goidgen.\n goidcache    uint64\n goidcacheend uint64\n\n // Queue of runnable goroutines. Accessed without lock.\n runqhead uint32\n runqtail uint32\n runq     [256]guintptr\n // runnext, if non-nil, is a runnable G that was ready'd by\n // the current G and should be run next instead of what's in\n // runq if there's time remaining in the running G's time\n // slice. It will inherit the time left in the current time\n // slice. If a set of goroutines is locked in a\n // communicate-and-wait pattern, this schedules that set as a\n // unit and eliminates the (potentially large) scheduling\n // latency that otherwise arises from adding the ready'd\n // goroutines to the end of the run queue.\n runnext guintptr\n\n // Available G's (status == Gdead)\n gFree struct {\n  gList\n  n int32\n }\n\n sudogcache []*sudog\n sudogbuf   [128]*sudog\n\n // Cache of mspan objects from the heap.\n mspancache struct {\n  // We need an explicit length here because this field is used\n  // in allocation codepaths where write barriers are not allowed,\n  // and eliminating the write barrier/keeping it eliminated from\n  // slice updates is tricky, moreso than just managing the length\n  // ourselves.\n  len int\n  buf [128]*mspan\n }\n\n tracebuf traceBufPtr\n\n // traceSweep indicates the sweep events should be traced.\n // This is used to defer the sweep start event until a span\n // has actually been swept.\n traceSweep bool\n // traceSwept and traceReclaimed track the number of bytes\n // swept and reclaimed by sweeping in the current sweep loop.\n traceSwept, traceReclaimed uintptr\n\n palloc persistentAlloc // per-P to avoid mutex\n\n _ uint32 // Alignment for atomic fields below\n\n // The when field of the first entry on the timer heap.\n // This is updated using atomic functions.\n // This is 0 if the timer heap is empty.\n timer0When uint64\n\n // The earliest known nextwhen field of a timer with\n // timerModifiedEarlier status. Because the timer may have been\n // modified again, there need not be any timer with this value.\n // This is updated using atomic functions.\n // This is 0 if the value is unknown.\n timerModifiedEarliest uint64\n\n // Per-P GC state\n gcAssistTime         int64 // Nanoseconds in assistAlloc\n gcFractionalMarkTime int64 // Nanoseconds in fractional mark worker (atomic)\n\n // gcMarkWorkerMode is the mode for the next mark worker to run in.\n // That is, this is used to communicate with the worker goroutine\n // selected for immediate execution by\n // gcController.findRunnableGCWorker. When scheduling other goroutines,\n // this field must be set to gcMarkWorkerNotWorker.\n gcMarkWorkerMode gcMarkWorkerMode\n // gcMarkWorkerStartTime is the nanotime() at which the most recent\n // mark worker started.\n gcMarkWorkerStartTime int64\n\n // gcw is this P's GC work buffer cache. The work buffer is\n // filled by write barriers, drained by mutator assists, and\n // disposed on certain GC state transitions.\n gcw gcWork\n\n // wbBuf is this P's GC write barrier buffer.\n //\n // TODO: Consider caching this in the running G.\n wbBuf wbBuf\n\n runSafePointFn uint32 // if 1, run sched.safePointFn at next safe point\n\n // statsSeq is a counter indicating whether this P is currently\n // writing any stats. Its value is even when not, odd when it is.\n statsSeq uint32\n\n // Lock for timers. We normally access the timers while running\n // on this P, but the scheduler can also do it from a different P.\n timersLock mutex\n\n // Actions to take at some time. This is used to implement the\n // standard library's time package.\n // Must hold timersLock to access.\n timers []*timer\n\n // Number of timers in P's heap.\n // Modified using atomic instructions.\n numTimers uint32\n\n // Number of timerModifiedEarlier timers on P's heap.\n // This should only be modified while holding timersLock,\n // or while the timer status is in a transient state\n // such as timerModifying.\n adjustTimers uint32\n\n // Number of timerDeleted timers in P's heap.\n // Modified using atomic instructions.\n deletedTimers uint32\n\n // Race context used while executing timer functions.\n timerRaceCtx uintptr\n\n // preempt is set to indicate that this P should be enter the\n // scheduler ASAP (regardless of what G is running on it).\n preempt bool\n\n pad cpu.CacheLinePad\n}\n\n")),(0,a.kt)("h2",{id:"go-\u7684\u6a21\u578b\u8c03\u5ea6"},"Go \u7684\u6a21\u578b\u8c03\u5ea6"),(0,a.kt)("p",null,"M(thread) \u5185\u6838\u7ebf\u7a0b   , P(processor) \u8fdb\u7a0b ,G (goroutine) \u534f\u7a0b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"G :  Go \u8fd0\u884c\u65f6\u5bf9goroutine\u7684\u63cf\u8ff0,G\u4e2d\u5b58\u653e\u5e76\u53d1\u6267\u884c\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"\u4ee3\u7801\u5165\u53e3\u5730\u5740"),",",(0,a.kt)("inlineCode",{parentName:"li"},"\u4e0a\u4e0b\u6587"),",",(0,a.kt)("inlineCode",{parentName:"li"},"\u8fd0\u884c\u73af\u5883")," (\u5173\u8054\u7684P\u548cM),\u8fd0\u884c\u6808\u7b49\u6267\u884c\u76f8\u5173\u7684\u4fe1\u606f,G\u7684\u65b0\u5efa,\u4f11\u7720,\u6062\u590d,\u505c\u6b62\u90fd\u53d7\u5230Go\u8fd0\u884c\u65f6\u7684\u7ba1\u7406")),(0,a.kt)("p",null,"GO\u8fd0\u884c\u65f6\u7684\u76d1\u63a7\u7ebf\u7a0b\u4f1a\u76d1\u63a7G\u7684\u8c03\u5ea6\uff0cG\u4e0d\u4f1a\u957f\u4e45\u5730\u963b\u585e\u7cfb\u7edf\u7ebf\u7a0b\uff0c\u8fd0\u884c\u65f6\u7684\u8c03\u5ea6\u5668\u4f1a\u81ea\u52a8\u5207\u6362\u5230\u5176\u4ed6G\u4e0a\u8fd0\u884c\u3002G\u65b0\u5efa\u6216\u6062\u590d\u65f6\u4f1a\u6dfb\u52a0\u5230\u8fd0\u884c\u961f\u5217\uff0c\u7b49\u5f85M\u53d6\u51fa\u5e76\u8fd0\u884c\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"M : OS\u5185\u6838\u7ebf\u7a0b,\u662f\u64cd\u4f5c\u7cfb\u7edf\u5c42\u9762\u8c03\u5ea6\u548c\u6267\u884c\u7684\u5b9e\u4f53.M\u4ec5\u8d1f\u8d23\u6267\u884c,M\u4e0d\u505c\u7684\u5524\u9192\u6216\u521b\u5efa,\u7136\u540e\u6267\u884c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"P : \u4ee3\u8868M\u548cP\u6240\u9700\u8981\u7684\u8d44\u6e90,\u662f\u5bf9\u8d44\u6e90\u7684\u4e00\u79cd\u62bd\u8c61\u7ba1\u7406,P \u4e0d\u662f\u4e00\u6bb5\u4ee3\u7801\u5b9e\u4f53,\u800c\u662f\u4e00\u4e2a\u7ba1\u7406\u7684\u6570\u636e\u7ed3\u6784,P\u4e3b\u8981\u662f\u964d\u4f4e M\u5bf9G\u7684\u590d\u6742\u6027,\u589e\u52a0\u4e00\u4e2a\u95f4\u63a5\u7684\u63a7\u5236\u5c42\u6570\u636e\u7ed3\u6784,",(0,a.kt)("inlineCode",{parentName:"p"},"P\u63a7\u5236Go\u7684\u5e76\u884c\u5ea6"),",\u5b83\u4e0d\u662f\u5b9e\u4f53"))),(0,a.kt)("p",null,"P\u6301\u6709G\u7684\u961f\u5217\uff0cP\u53ef\u4ee5\u9694\u79bb\u8c03\u5ea6\uff0c\u89e3\u9664P\u548cM\u7684\u7ed1\u5b9a\u5c31\u89e3\u9664\u4e86M\u5bf9\u4e00\u4e32G\u7684\u8c03\u7528\u3002"),(0,a.kt)("p",null,"G\u5e76\u4e0d\u662f\u6267\u884c\u4f53\uff0c\u800c\u662f\u5b58\u653e\u5e76\u53d1\u6267\u884c\u4f53\u7684\u5143\u4fe1\u606f\uff0c\u5305\u62ec\u5e76\u53d1\u6267\u884c\u7684\u5165\u53e3\u51fd\u6570\u3001\u5806\u6808\u3001\u4e0a\u4e0b\u6587\u7b49\u4fe1\u606f\u3002G\u7531\u4e8e\u4fdd\u5b58\u7684\u662f\u5143\u4fe1\u606f\uff0c\u4e3a\u4e86\u51cf\u5c11\u5bf9\u8c61\u7684\u5206\u914d\u548c\u56de\u6536\uff0cG\u5bf9\u8c61\u662f\u53ef\u4ee5\u590d\u7528\uff0c\u53ea\u9700\u8981\u5c06\u76f8\u5173\u5143\u4fe1\u606f\u521d\u59cb\u5316\u4e3a\u65b0\u503c\u5373\u53ef\u3002"),(0,a.kt)("p",null,"M\u4ec5\u8d1f\u8d23\u6267\u884c\uff0cM\u542f\u52a8\u65f6\u8fdb\u5165\u8fd0\u884c\u65f6\u7684\u7ba1\u7406\u4ee3\u7801\uff0c\u8fd9\u6bb5\u7ba1\u7406\u4ee3\u7801\u5fc5\u987b\u62ff\u5230P\u540e\uff0c\u624d\u80fd\u6267\u884c\u8c03\u5ea6\u3002"),(0,a.kt)("p",null,"P\u7684\u6570\u76ee\u9ed8\u8ba4\u662fCPU\u6838\u5fc3\u7684\u6570\u91cf\u3002M\u548cP\u7684\u6570\u76ee\u5dee\u4e0d\u591a\uff0c\u4f46\u8fd0\u884c\u65f6\u4f1a\u6839\u636e\u5f53\u524d\u7684\u72b6\u6001\u52a8\u6001\u5730\u521b\u5efaM\uff0cM\u6709\u4e00\u4e2a\u6700\u5927\u503c\u4e0a\u9650\uff1a10000\uff1bG\u4e0eP\u662fM:N\u7684\u5173\u7cfb\uff0cM\u53ef\u4ee5\u6210\u5343\u4e0a\u4e07\uff0c\u8fdc\u8fdc\u5927\u4e8eN."),(0,a.kt)("h2",{id:"work-stealing\u7b97\u6cd5\u7684\u57fa\u672c\u539f\u7406"},"Work Stealing\u7b97\u6cd5\u7684\u57fa\u672c\u539f\u7406"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"M\u548cP\u6784\u6210\u4e00\u4e2a\u8fd0\u884c\u65f6\u73af\u5883\uff0c\u6bcf\u4e2aP\u6709\u4e00\u4e2a\u672c\u5730\u7684\u53ef\u8c03\u5ea6\u7684G\u961f\u5217\uff0c\u961f\u5217\u91cc\u9762\u7684G\u4f1a\u88abM\u4f9d\u6b21\u8c03\u5ea6\u6267\u884c\uff0c\u5982\u679c\u672c\u5730\u961f\u5217\u7a7a\u4e86\uff0c\u5219\u53bb\u5168\u5c40\u961f\u5217\u5077\u53d6\u4e00\u90e8\u5206G\uff0c\u5982\u679c\u5168\u5c40\u961f\u5217\u4e5f\u662f\u7a7a\u7684\uff0c\u5219\u53bb\u5176\u4ed6\u7684P\u4e2d\u5077\u53d6\u4e00\u90e8\u5206G\u3002\n")),(0,a.kt)("h2",{id:"\u4ec0\u4e48\u65f6\u5019\u521b\u5efampg"},"\u4ec0\u4e48\u65f6\u5019\u521b\u5efaM\u3001P\u3001G"),(0,a.kt)("p",null,"\u5728\u7a0b\u5e8f\u542f\u52a8\u8fc7\u7a0b\u4e2d\u4f1a\u521d\u59cb\u5316\u7a7a\u95f2P\u5217\u8868\uff0cP\u662f\u8fd9\u4e2a\u65f6\u5019\u521b\u5efa\u7684\uff0c\u540c\u65f6\u7b2c\u4e00\u4e2aG\u4e5f\u662f\u5728\u521d\u59cb\u5316\u8fc7\u7a0b\u4e2d\u88ab\u521b\u5efa\u7684\u3002"),(0,a.kt)("p",null,"\u6bcf\u4e2a\u5e76\u53d1\u8c03\u7528\u90fd\u4f1a\u521d\u59cb\u5316\u4e00\u4e2a\u65b0\u7684G\u4efb\u52a1\uff0c\u5982\u4f55\u5524\u9192M\u6267\u884c\u4efb\u52a1\u3002\u8fd9\u4e2a\u5524\u9192\u4e0d\u662f\u7279\u5b9a\u5524\u9192\u67d0\u4e2a\u7ebf\u7a0b\u53bb\u5de5\u4f5c\uff0c\u800c\u662f\u5148\u5c1d\u8bd5\u83b7\u53d6\u5f53\u524d\u7ebf\u7a0bM\uff0c\u5982\u679c\u65e0\u6cd5\u83b7\u53d6\uff0c\u5219\u4ece\u5168\u5c40\u8c03\u5ea6\u7684\u7a7a\u95f2M\u5217\u8868\u4e2d\u83b7\u53d6\u53ef\u7528\u7684M\uff0c\u5982\u679c\u6ca1\u6709\u53ef\u7528\u7684M\uff0c\u5219\u65b0\u5efaM\uff0c\u7136\u540e\u7ed1\u5b9aP\u548cGY\u8fd0\u884c\u3002M\u548cP\u4e0d\u662f\u4e00\u4e00\u5bf9\u5e94\u7684\uff0c\u800c\u662f\u6309\u9700\u5206\u914d\u7684"),(0,a.kt)("p",null,"M\u7ebf\u7a0b\u6709\u7ba1\u7406\u8c03\u5ea6\u548c\u5207\u6362\u5806\u6808\u7684\u903b\u8f91\uff0c\u4f46\u662fM\u5fc5\u987b\u62ff\u5230P\u540e\u624d\u80fd\u8fd0\u884c\uff0c\u53ef\u7528\u770b\u5230M\u662f\u81ea\u9a71\u52a8\u7684\uff0c\u5355\u9700\u8981P\u7684\u914d\u5408\u3002"),(0,a.kt)("h2",{id:"goroutine\u7ecf\u5386\u7684\u8fc7\u7a0b"},"goroutine\u7ecf\u5386\u7684\u8fc7\u7a0b"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u901a\u8fc7go func()\u6765\u521b\u5efa\u4e00\u4e2a goroutine"),(0,a.kt)("li",{parentName:"ol"},"\u6709\u4e24\u4e2a\u5b58\u50a8\u7684G\u961f\u5217,\u4e00\u4e2a\u662f\u5c40\u90e8\u8c03\u5ea6\u5668P\u7684\u672c\u5730\u961f\u5217,\u4e00\u4e2a\u662f\u5168\u5c40G\u961f\u5217,\u65b0\u521b\u5efa\u7684G\u4f1a\u5148\u4fdd\u5b58\u5728P\u7684\u672c\u5730\u961f\u5217\u4e2d,\u5982\u679cP\u7684\u672c\u5730\u961f\u5217\u5df2\u7ecf\u6ee1\u4e86\u5c31\u4f1a\u4fdd\u5b58\u5728\u5168\u5c40\u961f\u5217\u4e2d"),(0,a.kt)("li",{parentName:"ol"},"G\u53ea\u80fd\u8fd0\u884c\u5728M\u4e2d,\u4e00\u4e2aM\u5fc5\u987b\u6709\u4e00\u4e2aP,M\u4e0eP\u662f1:1\u7684\u5173\u7cfb. M\u4f1a\u5bf9P\u7684\u672c\u5730\u961f\u5217\u5f39\u51fa\u4e00\u4e2a\u53ef\u6267\u884c\u72b6\u6001\u7684G\u6765\u6267\u884c,\u5982\u679cP\u7684\u672c\u5730\u961f\u5217\u4e3a\u7a7a,\u5c31\u4f1a\u5411\u5176\u5b83\u7684MP\u7ec4\u5408\u53d6\u4e00\u4e2a\u53ef\u6267\u884c\u7684G\u6765\u6267\u884c"),(0,a.kt)("li",{parentName:"ol"},"\u4e00\u4e2aM \u8c03\u5ea6\u6267\u884c\u7684\u8fc7\u7a0b\u662f\u4e00\u4e2a\u5faa\u73af\u673a\u5236"),(0,a.kt)("li",{parentName:"ol"},"\u5f53 M\u6267\u884c\u67d0\u4e00\u4e2aG \u65f6\u5019 \u5982\u679c\u53d1\u751f\u4e86 syscall\u6216\u5176\u4f59\u963b\u585e\u64cd\u4f5c,M\u4f1a\u963b\u585e,\u5982\u679c")))}d.isMDXComponent=!0}}]);