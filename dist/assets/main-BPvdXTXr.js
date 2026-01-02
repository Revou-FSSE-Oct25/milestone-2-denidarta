(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=globalThis,Q=L.ShadowRoot&&(L.ShadyCSS===void 0||L.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol(),rt=new WeakMap;let ft=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==X)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Q&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=rt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&rt.set(e,t))}return t}toString(){return this.cssText}};const vt=i=>new ft(typeof i=="string"?i:i+"",void 0,X),R=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((s,r,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[o+1],i[0]);return new ft(e,i,X)},At=(i,t)=>{if(Q)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),r=L.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}},st=Q?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return vt(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:xt,defineProperty:wt,getOwnPropertyDescriptor:Et,getOwnPropertyNames:St,getOwnPropertySymbols:Pt,getPrototypeOf:Ct}=Object,y=globalThis,it=y.trustedTypes,Ot=it?it.emptyScript:"",G=y.reactiveElementPolyfillSupport,M=(i,t)=>i,B={toAttribute(i,t){switch(t){case Boolean:i=i?Ot:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},tt=(i,t)=>!xt(i,t),ot={attribute:!0,type:String,converter:B,reflect:!1,useDefault:!1,hasChanged:tt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),y.litPropertyMetadata??(y.litPropertyMetadata=new WeakMap);let E=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ot){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&wt(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){const{get:r,set:o}=Et(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:r,set(n){const l=r==null?void 0:r.call(this);o==null||o.call(this,n),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ot}static _$Ei(){if(this.hasOwnProperty(M("elementProperties")))return;const t=Ct(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(M("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(M("properties"))){const e=this.properties,s=[...St(e),...Pt(e)];for(const r of s)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const r of s)e.unshift(st(r))}else t!==void 0&&e.push(st(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return At(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){var o;const s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){const n=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:B).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,e){var o,n;const s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const l=s.getPropertyOptions(r),a=typeof l.converter=="function"?{fromAttribute:l.converter}:((o=l.converter)==null?void 0:o.fromAttribute)!==void 0?l.converter:B;this._$Em=r;const c=a.fromAttribute(e,l.type);this[r]=c??((n=this._$Ej)==null?void 0:n.get(r))??c,this._$Em=null}}requestUpdate(t,e,s){var r;if(t!==void 0){const o=this.constructor,n=this[t];if(s??(s=o.getPropertyOptions(t)),!((s.hasChanged??tt)(n,e)||s.useDefault&&s.reflect&&n===((r=this._$Ej)==null?void 0:r.get(t))&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:r,wrapped:o},n){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,n]of r){const{wrapped:l}=n,a=this[o];l!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,n,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(r=>{var o;return(o=r.hostUpdate)==null?void 0:o.call(r)}),this.update(e)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[M("elementProperties")]=new Map,E[M("finalized")]=new Map,G==null||G({ReactiveElement:E}),(y.reactiveElementVersions??(y.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=globalThis,nt=i=>i,I=T.trustedTypes,at=I?I.createPolicy("lit-html",{createHTML:i=>i}):void 0,gt="$lit$",b=`lit$${Math.random().toFixed(9).slice(2)}$`,$t="?"+b,Ut=`<${$t}>`,w=document,H=()=>w.createComment(""),N=i=>i===null||typeof i!="object"&&typeof i!="function",et=Array.isArray,Mt=i=>et(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",K=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,lt=/-->/g,ht=/>/g,v=RegExp(`>|${K}(?:([^\\s"'>=/]+)(${K}*=${K}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ct=/'/g,pt=/"/g,mt=/^(?:script|style|textarea|title)$/i,Tt=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),S=Tt(1),P=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),dt=new WeakMap,A=w.createTreeWalker(w,129);function bt(i,t){if(!et(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return at!==void 0?at.createHTML(t):t}const Ht=(i,t)=>{const e=i.length-1,s=[];let r,o=t===2?"<svg>":t===3?"<math>":"",n=U;for(let l=0;l<e;l++){const a=i[l];let c,d,h=-1,g=0;for(;g<a.length&&(n.lastIndex=g,d=n.exec(a),d!==null);)g=n.lastIndex,n===U?d[1]==="!--"?n=lt:d[1]!==void 0?n=ht:d[2]!==void 0?(mt.test(d[2])&&(r=RegExp("</"+d[2],"g")),n=v):d[3]!==void 0&&(n=v):n===v?d[0]===">"?(n=r??U,h=-1):d[1]===void 0?h=-2:(h=n.lastIndex-d[2].length,c=d[1],n=d[3]===void 0?v:d[3]==='"'?pt:ct):n===pt||n===ct?n=v:n===lt||n===ht?n=U:(n=v,r=void 0);const m=n===v&&i[l+1].startsWith("/>")?" ":"";o+=n===U?a+Ut:h>=0?(s.push(c),a.slice(0,h)+gt+a.slice(h)+b+m):a+b+(h===-2?l:m)}return[bt(i,o+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class j{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let o=0,n=0;const l=t.length-1,a=this.parts,[c,d]=Ht(t,e);if(this.el=j.createElement(c,s),A.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(r=A.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const h of r.getAttributeNames())if(h.endsWith(gt)){const g=d[n++],m=r.getAttribute(h).split(b),z=/([.?@])?(.*)/.exec(g);a.push({type:1,index:o,name:z[2],strings:m,ctor:z[1]==="."?jt:z[1]==="?"?Rt:z[1]==="@"?kt:W}),r.removeAttribute(h)}else h.startsWith(b)&&(a.push({type:6,index:o}),r.removeAttribute(h));if(mt.test(r.tagName)){const h=r.textContent.split(b),g=h.length-1;if(g>0){r.textContent=I?I.emptyScript:"";for(let m=0;m<g;m++)r.append(h[m],H()),A.nextNode(),a.push({type:2,index:++o});r.append(h[g],H())}}}else if(r.nodeType===8)if(r.data===$t)a.push({type:2,index:o});else{let h=-1;for(;(h=r.data.indexOf(b,h+1))!==-1;)a.push({type:7,index:o}),h+=b.length-1}o++}}static createElement(t,e){const s=w.createElement("template");return s.innerHTML=t,s}}function C(i,t,e=i,s){var n,l;if(t===P)return t;let r=s!==void 0?(n=e._$Co)==null?void 0:n[s]:e._$Cl;const o=N(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==o&&((l=r==null?void 0:r._$AO)==null||l.call(r,!1),o===void 0?r=void 0:(r=new o(i),r._$AT(i,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=r:e._$Cl=r),r!==void 0&&(t=C(i,r._$AS(i,t.values),r,s)),t}class Nt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,r=((t==null?void 0:t.creationScope)??w).importNode(e,!0);A.currentNode=r;let o=A.nextNode(),n=0,l=0,a=s[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new k(o,o.nextSibling,this,t):a.type===1?c=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(c=new Dt(o,this,t)),this._$AV.push(c),a=s[++l]}n!==(a==null?void 0:a.index)&&(o=A.nextNode(),n++)}return A.currentNode=w,r}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class k{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,r){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=C(this,t,e),N(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==P&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Mt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(w.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=j.createElement(bt(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===r)this._$AH.p(e);else{const n=new Nt(r,this),l=n.u(this.options);n.p(e),this.T(l),this._$AH=n}}_$AC(t){let e=dt.get(t.strings);return e===void 0&&dt.set(t.strings,e=new j(t)),e}k(t){et(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,r=0;for(const o of t)r===e.length?e.push(s=new k(this.O(H()),this.O(H()),this,this.options)):s=e[r],s._$AI(o),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t!==this._$AB;){const r=nt(t).nextSibling;nt(t).remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class W{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(t,e=this,s,r){const o=this.strings;let n=!1;if(o===void 0)t=C(this,t,e,0),n=!N(t)||t!==this._$AH&&t!==P,n&&(this._$AH=t);else{const l=t;let a,c;for(t=o[0],a=0;a<o.length-1;a++)c=C(this,l[s+a],e,a),c===P&&(c=this._$AH[a]),n||(n=!N(c)||c!==this._$AH[a]),c===p?t=p:t!==p&&(t+=(c??"")+o[a+1]),this._$AH[a]=c}n&&!r&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class jt extends W{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class Rt extends W{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class kt extends W{constructor(t,e,s,r,o){super(t,e,s,r,o),this.type=5}_$AI(t,e=this){if((t=C(this,t,e,0)??p)===P)return;const s=this._$AH,r=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==p&&(s===p||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Dt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}}const Z=T.litHtmlPolyfillSupport;Z==null||Z(j,k),(T.litHtmlVersions??(T.litHtmlVersions=[])).push("3.3.2");const zt=(i,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let r=s._$litPart$;if(r===void 0){const o=(e==null?void 0:e.renderBefore)??null;s._$litPart$=r=new k(t.insertBefore(H(),o),o,void 0,e??{})}return r._$AI(i),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=globalThis;class $ extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=zt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return P}}var ut;$._$litElement$=!0,$.finalized=!0,(ut=x.litElementHydrateSupport)==null||ut.call(x,{LitElement:$});const F=x.litElementPolyfillSupport;F==null||F({LitElement:$});(x.litElementVersions??(x.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:tt},Bt=(i=Lt,t,e)=>{const{kind:s,metadata:r}=e;let o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),s==="setter"&&((i=Object.create(i)).wrapped=!0),o.set(e.name,i),s==="accessor"){const{name:n}=e;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,a,i)},init(l){return l!==void 0&&this.C(n,void 0,i,l),l}}}if(s==="setter"){const{name:n}=e;return function(l){const a=this[n];t.call(this,l),this.requestUpdate(n,a,i)}}throw Error("Unsupported decorator location: "+s)};function u(i){return(t,e)=>typeof e=="object"?Bt(i,t,e):((s,r,o)=>{const n=r.hasOwnProperty(o);return r.constructor.createProperty(o,s),n?Object.getOwnPropertyDescriptor(r,o):void 0})(i,t,e)}var It=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,Y=(i,t,e,s)=>{for(var r=s>1?void 0:s?Vt(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(r=(s?n(t,e,r):n(r))||r);return s&&r&&It(t,e,r),r};let O=class extends ${constructor(){super(...arguments),this.label="Click",this.disabled=!1,this.variant="primary"}render(){return S`
      <button ?disabled=${this.disabled} @click=${this._onClick}>
        <slot></slot>
        ${this.label}
      </button>
    `}_onClick(){this.dispatchEvent(new CustomEvent("my-click",{detail:{label:this.label},bubbles:!0,composed:!0}))}};O.styles=R`
    :host {
      display: inline-block;
      font-family: var(--sans-font, sans-serif);
    }

    button {
      appearance: none;
      -webkit-appearance: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 10px 20px;
      cursor: pointer;
      border-radius: 8px;
      border: 2px solid transparent;
      font-size: 14px;
      font-weight: 600;
      transition: all 0.2s ease-in-out;
      font-family: inherit;
      width: 100%;
      height: 100%;
    }

    button:disabled {
      cursor: not-allowed;
      opacity: 0.6;
      filter: grayscale(1);
    }

    /* Primary Variant */
    :host([variant="primary"]) button {
      background-color: var(--brand-blue, #1480bf);
      color: var(--text-white, white);
    }

    :host([variant="primary"]) button:hover:not(:disabled) {
      background-color: var(--brand-blue-light, #759cf7);
      transform: translateY(-1px);
    }

    /* Secondary Variant */
    :host([variant="secondary"]) button {
      background-color: var(--brand-yellow, #fbff00);
      color: var(--text-primary, #213547);
      border-color: var(--brand-yellow-dark, #e6ea00);
    }

    :host([variant="secondary"]) button:hover:not(:disabled) {
      background-color: var(--brand-yellow-dark, #e6ea00);
      transform: translateY(-1px);
    }

    /* Tertiary Variant */
    :host([variant="tertiary"]) button {
      background-color: transparent;
      color: var(--brand-blue, #1480bf);
      border-color: var(--brand-blue, #1480bf);
    }

    :host([variant="tertiary"]) button:hover:not(:disabled) {
      background-color: var(--bg-hover-light, #f0f9ff);
      transform: translateY(-1px);
    }

    button:active:not(:disabled) {
      transform: translateY(0);
    }

    button:focus-visible {
      outline: 2px solid var(--brand-blue);
      outline-offset: 2px;
    }
  `;Y([u({type:String})],O.prototype,"label",2);Y([u({type:Boolean})],O.prototype,"disabled",2);Y([u({type:String,reflect:!0})],O.prototype,"variant",2);O=Y([D("my-button")],O);var qt=Object.defineProperty,Wt=Object.getOwnPropertyDescriptor,_=(i,t,e,s)=>{for(var r=s>1?void 0:s?Wt(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(r=(s?n(t,e,r):n(r))||r);return s&&r&&qt(t,e,r),r};let f=class extends ${constructor(){super(...arguments),this.href="",this.icon="",this.title="",this.description="",this.tag="",this.image="",this.alt=""}render(){return S`
      <a href="${this.href}" class="game-card">
        ${this.image?S`<img src=${this.image} alt="Card image" />`:null}
        <h2>${this.title}</h2>
        <p>${this.description}</p>
        <span class="game-tag">${this.tag}</span>
      </a>
    `}};f.styles=R`
    .game-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: var(--container-background);
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 16px;
      text-decoration: none;
      color: inherit;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      width: auto;
      height: 100%;
      max-width: 400px;
      padding: 8px;
    }

    // Top border hover effect.
    .game-card::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .game-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      border-color: rgba(102, 126, 234, 0.3);
    }

    .game-card:hover::before {
      opacity: 1;
    }

    .game-icon {
      font-size: 4rem;
      margin-bottom: 1rem;
      transition: transform 0.3s ease;
    }

    .game-card:hover .game-icon {
      transform: scale(1.1);
    }

    .game-card h2 {
      font-size: 1.4rem;
      margin-bottom: 0.5rem;
      color: var(--text-primary);
    }

    .game-card p {
      font-size: 0.9rem;
      color: var(--text-secondary);
      text-align: center;
      margin-bottom: 8px;
    }

    .game-tag {
      font-size: 0.75rem;
      padding: 0.3rem 0.8rem;
      background: var(--brand-blue-light);
      border-radius: 20px;
      color: white;
      font-weight: 500;
    }

    .image-container {
      display: block;
      padding: 4px 4px 4px 0px;
    }

    img {
      width: 100%;
      border-radius: 12px;
    }
  `;_([u({type:String})],f.prototype,"href",2);_([u({type:String})],f.prototype,"icon",2);_([u({type:String})],f.prototype,"title",2);_([u({type:String})],f.prototype,"description",2);_([u({type:String})],f.prototype,"tag",2);_([u({type:String})],f.prototype,"image",2);_([u({type:String})],f.prototype,"alt",2);f=_([D("game-card")],f);var Yt=Object.getOwnPropertyDescriptor,Gt=(i,t,e,s)=>{for(var r=s>1?void 0:s?Yt(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(r=n(r)||r);return r};let J=class extends ${render(){return S` <div>
      <a href="/">← Back to Hub</a>
    </div>`}};J.styles=R`
    a {
      text-decoration: none;
      color: var(--text-white) !important;
      font-weight: bold;
      margin-bottom: 1rem;
      font-size: 16px;
      font-weight: 500;
    }
    a:hover {
      color: var(--brand-yellow) !important;
    }
  `;J=Gt([D("back-link")],J);const Kt="/assets/revofun-logo-BCMX9eQY.webp";var Zt=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,yt=(i,t,e,s)=>{for(var r=s>1?void 0:s?Ft(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(r=(s?n(t,e,r):n(r))||r);return s&&r&&Zt(t,e,r),r};let V=class extends ${constructor(){super(...arguments),this.logo=Kt}render(){return S` <div class="nav-container">
      <img src=${this.logo} alt="revofun-logo" />
      <nav>
        <ul>
          <li>Games</li>
          <li>Career</li>
          <li>About Us</li>
        </ul>
        <div class="button-container">
          <game-button label="Login"></game-button>
          <my-button label="Create Account" variant="secondary"></my-button>
        </div>
      </nav>
    </div>`}};V.styles=[R`
      :host {
        display: block;
      }

      p {
        margin: 0;
      }
      .nav-container {
        background-color: black;
        width: 100vw;
        height: 100px;
        max-width: 1600px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 0;
      }

      ul {
        display: flex;
        flex-direction: row;
        gap: 8px;
        list-style: none;
      }

      li {
        font-family: var(--sans-font);
        user-select: none;
      }

      nav {
        display: flex;
        flex-direction: row;
        gap: 8px;
        align-items: center;
      }

      .button-container {
        display: flex;
        flex-direction: row;
        gap: 8px;
        margin-right: 16px;
      }

      ul {
        margin-right: 4px;
      }

      ul li {
        font-weight: 400;
        color: white;
        font-size: 1.2rem;
      }

      img {
        width: 300px;
        object-fit: cover;
        object-position: center;
      }
    `];yt([u({type:String})],V.prototype,"logo",2);V=yt([D("nav-bar")],V);var Jt=Object.defineProperty,Qt=Object.getOwnPropertyDescriptor,_t=(i,t,e,s)=>{for(var r=s>1?void 0:s?Qt(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(r=(s?n(t,e,r):n(r))||r);return s&&r&&Jt(t,e,r),r};let q=class extends ${constructor(){super(...arguments),this.label=""}render(){return S` <button @click=${this._onClick}>
      <span>${this.label}</span>
    </button>`}_onClick(){this.dispatchEvent(new CustomEvent("my-click",{detail:{label:this.label},bubbles:!0,composed:!0}))}};q.styles=[R`
      :host {
        display: inline-flex;
      }

      button {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-family: var(--game-font);
        border-radius: 16px;
        border: 4px solid #13380c;
        background: var(--gradient-green);
        color: white;
        font-size: 2.5rem;
        line-height: 1;
        padding-top: 16px;
        padding-left: 32px;
        padding-right: 32px;
        padding-bottom: 4px;
        cursor: pointer;
        transition: all 0.1s ease;
        overflow: hidden;

        /* Thick text border/outline */
        text-shadow:
          -3px -3px 0 #000,
          3px -3px 0 #000,
          -3px 3px 0 #000,
          3px 3px 0 #000,
          0px 4px 0 rgba(0, 0, 0, 0.3);
      }

      /*  Gloss Effect */
      button::after {
        content: "";
        position: absolute;
        top: 2px;
        left: 4px;
        right: 4px;
        height: 45%;
        background: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0.6) 0%,
          rgba(255, 255, 255, 0.1) 100%
        );
        border-radius: 12px 12px 100% 100% / 12px 12px 40% 40%;
        pointer-events: none;
      }

      button:hover {
        filter: brightness(1.1);
        transform: translateY(-2px);
      }

      button:active {
        transform: translateY(2px);
        filter: brightness(0.9);
      }

      span {
        position: relative;
        z-index: 2;
      }
    `];_t([u({type:String})],q.prototype,"label",2);q=_t([D("game-button")],q);
