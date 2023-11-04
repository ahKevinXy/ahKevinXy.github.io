/*! For license information please see 91138.d4a30f96.js.LICENSE.txt */
"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[91138],{46050:(t,e)=>{Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const i=window,s=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}};const l=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,n))(e)})(t):t;var a;const h=window,c=h.trustedTypes,d=c?c.emptyScript:"",u=h.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:v},g="finalized";let m=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty(g))return!1;this[g]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{s?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const s=document.createElement("style"),n=i.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=e.cssText,t.appendChild(s)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=f){var s;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const r=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=s.getPropertyOptions(n),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=n,this[n]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};var _;m[g]=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:m}),(null!==(a=h.reactiveElementVersions)&&void 0!==a?a:h.reactiveElementVersions=[]).push("1.6.2");const $=window,y=$.trustedTypes,A=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",E=`lit$${(Math.random()+"").slice(9)}$`,b="?"+E,C=`<${b}>`,w=document,N=()=>w.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,x="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,k=/-->/g,L=/>/g,P=RegExp(`>|${x}(?:([^\\s"'>=/]+)(${x}*=${x}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,R=/"/g,M=/^(?:script|style|textarea|title)$/i,T=(D=1,(t,...e)=>({_$litType$:D,strings:t,values:e})),G=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),j=new WeakMap,z=w.createTreeWalker(w,129,null,!1);var D;class B{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const o=t.length-1,l=this.parts,[a,h]=((t,e)=>{const i=t.length-1,s=[];let n,r=2===e?"<svg>":"",o=H;for(let a=0;a<i;a++){const e=t[a];let i,l,h=-1,c=0;for(;c<e.length&&(o.lastIndex=c,l=o.exec(e),null!==l);)c=o.lastIndex,o===H?"!--"===l[1]?o=k:void 0!==l[1]?o=L:void 0!==l[2]?(M.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=P):void 0!==l[3]&&(o=P):o===P?">"===l[0]?(o=n??H,h=-1):void 0===l[1]?h=-2:(h=o.lastIndex-l[2].length,i=l[1],o=void 0===l[3]?P:'"'===l[3]?R:I):o===R||o===I?o=P:o===k||o===L?o=H:(o=P,n=void 0);const d=o===P&&t[a+1].startsWith("/>")?" ":"";r+=o===H?e+C:h>=0?(s.push(i),e.slice(0,h)+S+e.slice(h)+E+d):e+E+(-2===h?(s.push(void 0),a):d)}const l=r+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==A?A.createHTML(l):l,s]})(t,e);if(this.el=B.createElement(a,i),z.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=z.nextNode())&&l.length<o;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(S)||e.startsWith(E)){const i=h[r++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+S).split(E),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?F:"?"===e[1]?J:"@"===e[1]?Q:Z})}else l.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(M.test(s.tagName)){const t=s.textContent.split(E),e=t.length-1;if(e>0){s.textContent=y?y.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],N()),z.nextNode(),l.push({type:2,index:++n});s.append(t[e],N())}}}else if(8===s.nodeType)if(s.data===b)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(E,t+1));)l.push({type:7,index:n}),t+=E.length-1}n++}}static createElement(t,e){const i=w.createElement("template");return i.innerHTML=t,i}}function V(t,e,i=t,s){var n,r,o,l;if(e===G)return e;let a=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl;const h=O(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(r=null==a?void 0:a._$AO)||void 0===r||r.call(a,!1),void 0===h?a=void 0:(a=new h(t),a._$AT(t,i,s)),void 0!==s?(null!==(o=(l=i)._$Co)&&void 0!==o?o:l._$Co=[])[s]=a:i._$Cl=a),void 0!==a&&(e=V(t,a._$AS(t,e.values),a,s)),e}let q=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:w).importNode(i,!0);z.currentNode=n;let r=z.nextNode(),o=0,l=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new K(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new X(r,this,t)),this._$AV.push(e),a=s[++l]}o!==(null==a?void 0:a.index)&&(r=z.nextNode(),o++)}return z.currentNode=w,n}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}};class K{constructor(t,e,i,s){var n;this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=V(this,t,e),O(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==G&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>U(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==W&&O(this._$AH)?this._$AA.nextSibling.data=t:this.$(w.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=B.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{const t=new q(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=j.get(t.strings);return void 0===e&&j.set(t.strings,e=new B(t)),e}T(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new K(this.k(N()),this.k(N()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Z{constructor(t,e,i,s,n){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=V(this,t,e,0),r=!O(t)||t!==this._$AH&&t!==G,r&&(this._$AH=t);else{const s=t;let o,l;for(t=n[0],o=0;o<n.length-1;o++)l=V(this,s[i+o],e,o),l===G&&(l=this._$AH[o]),r||(r=!O(l)||l!==this._$AH[o]),l===W?t=W:t!==W&&(t+=(l??"")+n[o+1]),this._$AH[o]=l}r&&!s&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class F extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}const Y=y?y.emptyScript:"";class J extends Z{constructor(){super(...arguments),this.type=4}j(t){t&&t!==W?this.element.setAttribute(this.name,Y):this.element.removeAttribute(this.name)}}class Q extends Z{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=V(this,t,e,0))&&void 0!==i?i:W)===G)return;const s=this._$AH,n=t===W&&s!==W||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==W&&(s===W||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class X{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t)}}const tt=$.litHtmlPolyfillSupport;null==tt||tt(B,K),(null!==(_=$.litHtmlVersions)&&void 0!==_?_:$.litHtmlVersions=[]).push("2.7.4");var et,it;let st=class extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,n;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new K(e.insertBefore(N(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return G}};st.finalized=!0,st._$litElement$=!0,null===(et=globalThis.litElementHydrateSupport)||void 0===et||et.call(globalThis,{LitElement:st});const nt=globalThis.litElementPolyfillSupport;null==nt||nt({LitElement:st}),(null!==(it=globalThis.litElementVersions)&&void 0!==it?it:globalThis.litElementVersions=[]).push("3.3.2");const rt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function ot(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):rt(t,e)}var lt;null===(lt=window.HTMLSlotElement)||void 0===lt||lt.prototype.assignedElements;const at=2;let ht=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const ct=(t,e)=>{var i,s;const n=t._$AN;if(void 0===n)return!1;for(const r of n)null===(s=(i=r)._$AO)||void 0===s||s.call(i,e,!1),ct(r,e);return!0},dt=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===(null==i?void 0:i.size))},ut=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),ft(e)}};function pt(t){void 0!==this._$AN?(dt(this),this._$AM=t,ut(this)):this._$AM=t}function vt(t,e=!1,i=0){const s=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(s))for(let r=i;r<s.length;r++)ct(s[r],!1),dt(s[r]);else null!=s&&(ct(s,!1),dt(s));else ct(this,t)}const ft=t=>{var e,i,s,n;t.type==at&&(null!==(e=(s=t)._$AP)&&void 0!==e||(s._$AP=vt),null!==(i=(n=t)._$AQ)&&void 0!==i||(n._$AQ=pt))};class gt extends ht{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),ut(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,s;t!==this.isConnected&&(this.isConnected=t,t?null===(i=this.reconnected)||void 0===i||i.call(this):null===(s=this.disconnected)||void 0===s||s.call(this)),e&&(ct(this,t),dt(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}class mt{}const _t=new WeakMap,$t=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends gt{render(t){return W}update(t,[e]){var i;const s=e!==this.G;return s&&void 0!==this.G&&this.ot(void 0),(s||this.rt!==this.lt)&&(this.G=e,this.ct=null===(i=t.options)||void 0===i?void 0:i.host,this.ot(this.lt=t.element)),W}ot(t){var e;if("function"==typeof this.G){const i=null!==(e=this.ct)&&void 0!==e?e:globalThis;let s=_t.get(i);void 0===s&&(s=new WeakMap,_t.set(i,s)),void 0!==s.get(this.G)&&this.G.call(this.ct,void 0),s.set(this.G,t),void 0!==t&&this.G.call(this.ct,t)}else this.G.value=t}get rt(){var t,e,i;return"function"==typeof this.G?null===(e=_t.get(null!==(t=this.ct)&&void 0!==t?t:globalThis))||void 0===e?void 0:e.get(this.G):null===(i=this.G)||void 0===i?void 0:i.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var yt=Object.defineProperty,At=Object.getOwnPropertyDescriptor,St=(t,e,i,s)=>{for(var n,r=s>1?void 0:s?At(e,i):e,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(s?n(e,i,r):n(r))||r);return s&&r&&yt(e,i,r),r};e.GiscusWidget=class extends st{constructor(){super(),this.GISCUS_SESSION_KEY="giscus-session",this.GISCUS_DEFAULT_HOST="https://giscus.app",this.ERROR_SUGGESTION="Please consider reporting this error at https://github.com/giscus/giscus/issues/new.",this.__session="",this._iframeRef=new mt,this.messageEventHandler=this.handleMessageEvent.bind(this),this.hasLoaded=!1,this.host=this.GISCUS_DEFAULT_HOST,this.strict="0",this.reactionsEnabled="1",this.emitMetadata="0",this.inputPosition="bottom",this.theme="light",this.lang="en",this.loading="eager",this.setupSession(),window.addEventListener("message",this.messageEventHandler)}get iframeRef(){var t;return null==(t=this._iframeRef)?void 0:t.value}get _host(){try{return new URL(this.host),this.host}catch{return this.GISCUS_DEFAULT_HOST}}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("message",this.messageEventHandler)}_formatError(t){return`[giscus] An error occurred. Error message: "${t}".`}setupSession(){const t=location.href,e=new URL(t),i=localStorage.getItem(this.GISCUS_SESSION_KEY),s=e.searchParams.get("giscus")||"";if(this.__session="",s)return localStorage.setItem(this.GISCUS_SESSION_KEY,JSON.stringify(s)),this.__session=s,e.searchParams.delete("giscus"),e.hash="",void history.replaceState(void 0,document.title,e.toString());if(i)try{this.__session=JSON.parse(i)}catch(n){localStorage.removeItem(this.GISCUS_SESSION_KEY),console.warn(`${this._formatError(null==n?void 0:n.message)} Session has been cleared.`)}}signOut(){localStorage.removeItem(this.GISCUS_SESSION_KEY),this.__session="",this.update(new Map)}handleMessageEvent(t){if(t.origin!==this._host)return;const{data:e}=t;if("object"!=typeof e||!e.giscus)return;if(this.iframeRef&&e.giscus.resizeHeight&&(this.iframeRef.style.height=`${e.giscus.resizeHeight}px`),e.giscus.signOut)return console.log("[giscus] User has logged out. Session has been cleared."),void this.signOut();if(!e.giscus.error)return;const i=e.giscus.error;if(i.includes("Bad credentials")||i.includes("Invalid state value")||i.includes("State has expired")){if(null!==localStorage.getItem(this.GISCUS_SESSION_KEY))return console.warn(`${this._formatError(i)} Session has been cleared.`),void this.signOut();console.error(`${this._formatError(i)} No session is stored initially. ${this.ERROR_SUGGESTION}`)}i.includes("Discussion not found")?console.warn(`[giscus] ${i}. A new discussion will be created if a comment/reaction is submitted.`):console.error(`${this._formatError(i)} ${this.ERROR_SUGGESTION}`)}sendMessage(t){!this.iframeRef||!this.iframeRef.contentWindow||!this.hasLoaded||(console.log({host:this.host,_host:this._host}),this.iframeRef.contentWindow.postMessage({giscus:t},this._host))}updateConfig(){const t={setConfig:{repo:this.repo,repoId:this.repoId,category:this.category,categoryId:this.categoryId,term:this.getTerm(),number:+this.getNumber(),strict:"1"===this.strict,reactionsEnabled:"1"===this.reactionsEnabled,emitMetadata:"1"===this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,lang:this.lang}};this.sendMessage(t)}firstUpdated(){var t;null==(t=this.iframeRef)||t.addEventListener("load",(()=>{var t;null==(t=this.iframeRef)||t.classList.remove("loading"),this.hasLoaded=!0,this.updateConfig()}))}requestUpdate(t,e,i){this.hasUpdated&&"host"!==t?this.updateConfig():super.requestUpdate(t,e,i)}getMetaContent(t,e=!1){const i=e?`meta[property='og:${t}'],`:"",s=document.querySelector(i+`meta[name='${t}']`);return s?s.content:""}_getCleanedUrl(){const t=new URL(location.href);return t.searchParams.delete("giscus"),t.hash="",t}getTerm(){switch(this.mapping){case"url":return`${this._getCleanedUrl()}`;case"title":return document.title;case"og:title":return this.getMetaContent("title",!0);case"specific":return this.term||"";case"number":return"";default:return location.pathname.length<2?"index":location.pathname.substring(1).replace(/\.\w+$/,"")}}getNumber(){return"number"===this.mapping&&this.term||""}getIframeSrc(){const t=this._getCleanedUrl().toString(),e=`${t}${this.id?"#"+this.id:""}`,i=this.getMetaContent("description",!0),s=this.getMetaContent("giscus:backlink")||t,n={origin:e,session:this.__session,repo:this.repo,repoId:this.repoId||"",category:this.category||"",categoryId:this.categoryId||"",term:this.getTerm(),number:this.getNumber(),strict:this.strict,reactionsEnabled:this.reactionsEnabled,emitMetadata:this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,description:i,backLink:s};return`${this._host}${this.lang?`/${this.lang}`:""}/widget?${new URLSearchParams(n)}`}render(){return T`
      <iframe
        title="Comments"
        scrolling="no"
        class="loading"
        ${$t(this._iframeRef)}
        src=${this.getIframeSrc()}
        loading=${this.loading}
        allow="clipboard-write"
        part="iframe"
      ></iframe>
    `}},e.GiscusWidget.styles=((t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new o(i,t,n)})`
    :host,
    iframe {
      width: 100%;
      border: none;
      min-height: 150px;
      color-scheme: light dark;
    }

    iframe.loading {
      opacity: 0;
    }
  `,St([ot({reflect:!0})],e.GiscusWidget.prototype,"host",2),St([ot({reflect:!0})],e.GiscusWidget.prototype,"repo",2),St([ot({reflect:!0})],e.GiscusWidget.prototype,"repoId",2),St([ot({reflect:!0})],e.GiscusWidget.prototype,"category",2),St([ot({reflect:!0})],e.GiscusWidget.prototype,"categoryId",2),St([ot({reflect:!0})],e.GiscusWidget.prototype,"mapping",2),St([ot({reflect:!0})],e.GiscusWidget.prototype,"term",2),St([ot({reflect:!0})],e.GiscusWidget.prototype,"strict",2),St([ot({reflect:!0})],e.GiscusWidget.prototype,"reactionsEnabled",2),St([ot({reflect:!0})],e.GiscusWidget.prototype,"emitMetadata",2),St([ot({reflect:!0})],e.GiscusWidget.prototype,"inputPosition",2),St([ot({reflect:!0})],e.GiscusWidget.prototype,"theme",2),St([ot({reflect:!0})],e.GiscusWidget.prototype,"lang",2),St([ot({reflect:!0})],e.GiscusWidget.prototype,"loading",2),e.GiscusWidget=St([function(t){return customElements.get(t)?t=>t:(t=>e=>{return"function"==typeof e?(i=t,s=e,customElements.define(i,s),s):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e);var i,s})(t)}("giscus-widget")],e.GiscusWidget)},58071:(t,e,i)=>{const s=i(85893),n=i(67294);t.exports=function({id:t,host:e,repo:r,repoId:o,category:l,categoryId:a,mapping:h,term:c,strict:d,reactionsEnabled:u,emitMetadata:p,inputPosition:v,theme:f,lang:g,loading:m}){const[_,$]=n.useState(!1);return n.useEffect((()=>{_||(Promise.resolve().then((()=>i(46050))),$(!0))}),[]),_?s.jsx("giscus-widget",{id:t,host:e,repo:r,repoid:o,category:l,categoryid:a,mapping:h,term:c,strict:d,reactionsenabled:u,emitmetadata:p,inputposition:v,theme:f,lang:g,loading:m}):null}},87086:(t,e,i)=>{i.d(e,{Z:()=>c});var s=i(87462),n=i(67294),r=i(86010),o=i(2728);const l={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},a="table-of-contents__link toc-highlight",h="table-of-contents__link--active";function c(t){let{className:e,...i}=t;return n.createElement("div",{className:(0,r.Z)(l.tableOfContents,"thin-scrollbar",e)},n.createElement(o.Z,(0,s.Z)({},i,{linkClassName:a,linkActiveClassName:h})))}},2728:(t,e,i)=>{i.d(e,{Z:()=>v});var s=i(87462),n=i(67294),r=i(20107);function o(t){const e=t.map((t=>({...t,parentIndex:-1,children:[]}))),i=Array(7).fill(-1);e.forEach(((t,e)=>{const s=i.slice(2,t.level);t.parentIndex=Math.max(...s),i[t.level]=e}));const s=[];return e.forEach((t=>{const{parentIndex:i,...n}=t;i>=0?e[i].children.push(n):s.push(n)})),s}function l(t){let{toc:e,minHeadingLevel:i,maxHeadingLevel:s}=t;return e.flatMap((t=>{const e=l({toc:t.children,minHeadingLevel:i,maxHeadingLevel:s});return function(t){return t.level>=i&&t.level<=s}(t)?[{...t,children:e}]:e}))}function a(t){const e=t.getBoundingClientRect();return e.top===e.bottom?a(t.parentNode):e}function h(t,e){var i;let{anchorTopOffset:s}=e;const n=t.find((t=>a(t).top>=s));if(n){var r;return function(t){return t.top>0&&t.bottom<window.innerHeight/2}(a(n))?n:null!=(r=t[t.indexOf(n)-1])?r:null}return null!=(i=t[t.length-1])?i:null}function c(){const t=(0,n.useRef)(0),{navbar:{hideOnScroll:e}}=(0,r.L)();return(0,n.useEffect)((()=>{t.current=e?0:document.querySelector(".navbar").clientHeight}),[e]),t}function d(t){const e=(0,n.useRef)(void 0),i=c();(0,n.useEffect)((()=>{if(!t)return()=>{};const{linkClassName:s,linkActiveClassName:n,minHeadingLevel:r,maxHeadingLevel:o}=t;function l(){const t=function(t){return Array.from(document.getElementsByClassName(t))}(s),l=function(t){let{minHeadingLevel:e,maxHeadingLevel:i}=t;const s=[];for(let n=e;n<=i;n+=1)s.push("h"+n+".anchor");return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),a=h(l,{anchorTopOffset:i.current}),c=t.find((t=>a&&a.id===function(t){return decodeURIComponent(t.href.substring(t.href.indexOf("#")+1))}(t)));t.forEach((t=>{!function(t,i){i?(e.current&&e.current!==t&&e.current.classList.remove(n),t.classList.add(n),e.current=t):t.classList.remove(n)}(t,t===c)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[t,i])}function u(t){let{toc:e,className:i,linkClassName:s,isChild:r}=t;return e.length?n.createElement("ul",{className:r?void 0:i},e.map((t=>n.createElement("li",{key:t.id},n.createElement("a",{href:"#"+t.id,className:null!=s?s:void 0,dangerouslySetInnerHTML:{__html:t.value}}),n.createElement(u,{isChild:!0,toc:t.children,className:i,linkClassName:s}))))):null}const p=n.memo(u);function v(t){let{toc:e,className:i="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:h,minHeadingLevel:c,maxHeadingLevel:u,...v}=t;const f=(0,r.L)(),g=null!=c?c:f.tableOfContents.minHeadingLevel,m=null!=u?u:f.tableOfContents.maxHeadingLevel,_=function(t){let{toc:e,minHeadingLevel:i,maxHeadingLevel:s}=t;return(0,n.useMemo)((()=>l({toc:o(e),minHeadingLevel:i,maxHeadingLevel:s})),[e,i,s])}({toc:e,minHeadingLevel:g,maxHeadingLevel:m});return d((0,n.useMemo)((()=>{if(a&&h)return{linkClassName:a,linkActiveClassName:h,minHeadingLevel:g,maxHeadingLevel:m}}),[a,h,g,m])),n.createElement(p,(0,s.Z)({toc:_,className:i,linkClassName:a},v))}},75251:(t,e,i)=>{i(27418);var s=i(67294),n=60103;if(e.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var r=Symbol.for;n=r("react.element"),e.Fragment=r("react.fragment")}var o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function h(t,e,i){var s,r={},h=null,c=null;for(s in void 0!==i&&(h=""+i),void 0!==e.key&&(h=""+e.key),void 0!==e.ref&&(c=e.ref),e)l.call(e,s)&&!a.hasOwnProperty(s)&&(r[s]=e[s]);if(t&&t.defaultProps)for(s in e=t.defaultProps)void 0===r[s]&&(r[s]=e[s]);return{$$typeof:n,type:t,key:h,ref:c,props:r,_owner:o.current}}e.jsx=h,e.jsxs=h},85893:(t,e,i)=>{t.exports=i(75251)},99861:(t,e,i)=>{i.d(e,{Z:()=>s});const s=i(58071)}}]);