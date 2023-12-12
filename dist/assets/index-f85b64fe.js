import{u as x,k as P,l as G,n as C,r as D,m as H,q as J,s as R,v as q,x as I}from"./index-c884230f.js";function K(e){return R()?(q(e),!0):!1}function N(e){return typeof e=="function"?e():x(e)}const $=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const k=Object.prototype.toString,B=e=>k.call(e)==="[object Object]",Q=()=>{};function U(e,n){function t(...o){return new Promise((i,u)=>{Promise.resolve(e(()=>n.apply(this,o),{fn:n,thisArg:this,args:o})).then(i).catch(u)})}return t}const M=e=>e();function X(e=M){const n=D(!0);function t(){n.value=!1}function o(){n.value=!0}const i=(...u)=>{n.value&&e(...u)};return{isActive:H(n),pause:t,resume:o,eventFilter:i}}function Y(e,n,t={}){const{eventFilter:o=M,...i}=t;return J(e,U(o,n),i)}function Z(e,n,t={}){const{eventFilter:o,...i}=t,{eventFilter:u,pause:w,resume:m,isActive:S}=X(o);return{stop:Y(e,n,{...i,eventFilter:u}),pause:w,resume:m,isActive:S}}function ee(e,n=!0){P()?G(e):n?e():C(e)}function te(e){var n;const t=N(e);return(n=t==null?void 0:t.$el)!=null?n:t}const F=$?window:void 0;function j(...e){let n,t,o,i;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,o,i]=e,n=F):[n,t,o,i]=e,!n)return Q;Array.isArray(t)||(t=[t]),Array.isArray(o)||(o=[o]);const u=[],w=()=>{u.forEach(l=>l()),u.length=0},m=(l,s,g,c)=>(l.addEventListener(s,g,c),()=>l.removeEventListener(s,g,c)),S=J(()=>[te(n),N(i)],([l,s])=>{if(w(),!l)return;const g=B(s)?{...s}:s;u.push(...t.flatMap(c=>o.map(b=>m(l,c,b,g))))},{immediate:!0,flush:"post"}),f=()=>{S(),w()};return K(f),f}const A=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O="__vueuse_ssr_handlers__",ne=re();function re(){return O in A||(A[O]=A[O]||{}),A[O]}function oe(e,n){return ne[e]||n}function ie(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const ae={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},W="vueuse-storage";function se(e,n,t,o={}){var i;const{flush:u="pre",deep:w=!0,listenToStorageChanges:m=!0,writeDefaults:S=!0,mergeDefaults:f=!1,shallow:l,window:s=F,eventFilter:g,onError:c=r=>{console.error(r)},initOnMounted:b}=o,p=(l?I:D)(typeof n=="function"?n():n);if(!t)try{t=oe("getDefaultStorage",()=>{var r;return(r=F)==null?void 0:r.localStorage})()}catch(r){c(r)}if(!t)return p;const d=N(n),E=ie(d),h=(i=o.serializer)!=null?i:ae[E],{pause:T,resume:_}=Z(p,()=>V(p.value),{flush:u,deep:w,eventFilter:g});return s&&m&&ee(()=>{j(s,"storage",v),j(s,W,L),b&&v()}),b||v(),p;function V(r){try{if(r==null)t.removeItem(e);else{const a=h.write(r),y=t.getItem(e);y!==a&&(t.setItem(e,a),s&&s.dispatchEvent(new CustomEvent(W,{detail:{key:e,oldValue:y,newValue:a,storageArea:t}})))}}catch(a){c(a)}}function z(r){const a=r?r.newValue:t.getItem(e);if(a==null)return S&&d!==null&&t.setItem(e,h.write(d)),d;if(!r&&f){const y=h.read(a);return typeof f=="function"?f(y,d):E==="object"&&!Array.isArray(y)?{...d,...y}:y}else return typeof a!="string"?a:h.read(a)}function L(r){v(r.detail)}function v(r){if(!(r&&r.storageArea!==t)){if(r&&r.key==null){p.value=d;return}if(!(r&&r.key!==e)){T();try{(r==null?void 0:r.newValue)!==h.write(p.value)&&(p.value=z(r))}catch(a){c(a)}finally{r?C(_):_()}}}}}function le(e,n,t={}){const{window:o=F}=t;return se(e,n,o==null?void 0:o.localStorage,t)}export{le as u};
