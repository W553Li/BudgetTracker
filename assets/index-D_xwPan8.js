function OC(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const a=Object.getOwnPropertyDescriptor(r,o);a&&Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();var st=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ho(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function wp(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}var kw={exports:{}},mu={},Sw={exports:{}},me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vi=Symbol.for("react.element"),TC=Symbol.for("react.portal"),RC=Symbol.for("react.fragment"),jC=Symbol.for("react.strict_mode"),$C=Symbol.for("react.profiler"),PC=Symbol.for("react.provider"),AC=Symbol.for("react.context"),IC=Symbol.for("react.forward_ref"),LC=Symbol.for("react.suspense"),NC=Symbol.for("react.memo"),DC=Symbol.for("react.lazy"),Ch=Symbol.iterator;function MC(e){return e===null||typeof e!="object"?null:(e=Ch&&e[Ch]||e["@@iterator"],typeof e=="function"?e:null)}var Cw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ew=Object.assign,Ow={};function ba(e,t,n){this.props=e,this.context=t,this.refs=Ow,this.updater=n||Cw}ba.prototype.isReactComponent={};ba.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ba.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Tw(){}Tw.prototype=ba.prototype;function xp(e,t,n){this.props=e,this.context=t,this.refs=Ow,this.updater=n||Cw}var _p=xp.prototype=new Tw;_p.constructor=xp;Ew(_p,ba.prototype);_p.isPureReactComponent=!0;var Eh=Array.isArray,Rw=Object.prototype.hasOwnProperty,kp={current:null},jw={key:!0,ref:!0,__self:!0,__source:!0};function $w(e,t,n){var r,o={},a=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(a=""+t.key),t)Rw.call(t,r)&&!jw.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];o.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Vi,type:e,key:a,ref:i,props:o,_owner:kp.current}}function zC(e,t){return{$$typeof:Vi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Sp(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vi}function FC(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Oh=/\/+/g;function gc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?FC(""+e.key):t.toString(36)}function nl(e,t,n,r,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Vi:case TC:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+gc(i,0):r,Eh(o)?(n="",e!=null&&(n=e.replace(Oh,"$&/")+"/"),nl(o,t,n,"",function(c){return c})):o!=null&&(Sp(o)&&(o=zC(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(Oh,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",Eh(e))for(var s=0;s<e.length;s++){a=e[s];var l=r+gc(a,s);i+=nl(a,t,n,l,o)}else if(l=MC(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=r+gc(a,s++),i+=nl(a,t,n,l,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function gs(e,t,n){if(e==null)return e;var r=[],o=0;return nl(e,r,"","",function(a){return t.call(n,a,o++)}),r}function BC(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var dt={current:null},rl={transition:null},UC={ReactCurrentDispatcher:dt,ReactCurrentBatchConfig:rl,ReactCurrentOwner:kp};me.Children={map:gs,forEach:function(e,t,n){gs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return gs(e,function(){t++}),t},toArray:function(e){return gs(e,function(t){return t})||[]},only:function(e){if(!Sp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};me.Component=ba;me.Fragment=RC;me.Profiler=$C;me.PureComponent=xp;me.StrictMode=jC;me.Suspense=LC;me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=UC;me.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ew({},e.props),o=e.key,a=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,i=kp.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Rw.call(t,l)&&!jw.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Vi,type:e.type,key:o,ref:a,props:r,_owner:i}};me.createContext=function(e){return e={$$typeof:AC,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:PC,_context:e},e.Consumer=e};me.createElement=$w;me.createFactory=function(e){var t=$w.bind(null,e);return t.type=e,t};me.createRef=function(){return{current:null}};me.forwardRef=function(e){return{$$typeof:IC,render:e}};me.isValidElement=Sp;me.lazy=function(e){return{$$typeof:DC,_payload:{_status:-1,_result:e},_init:BC}};me.memo=function(e,t){return{$$typeof:NC,type:e,compare:t===void 0?null:t}};me.startTransition=function(e){var t=rl.transition;rl.transition={};try{e()}finally{rl.transition=t}};me.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};me.useCallback=function(e,t){return dt.current.useCallback(e,t)};me.useContext=function(e){return dt.current.useContext(e)};me.useDebugValue=function(){};me.useDeferredValue=function(e){return dt.current.useDeferredValue(e)};me.useEffect=function(e,t){return dt.current.useEffect(e,t)};me.useId=function(){return dt.current.useId()};me.useImperativeHandle=function(e,t,n){return dt.current.useImperativeHandle(e,t,n)};me.useInsertionEffect=function(e,t){return dt.current.useInsertionEffect(e,t)};me.useLayoutEffect=function(e,t){return dt.current.useLayoutEffect(e,t)};me.useMemo=function(e,t){return dt.current.useMemo(e,t)};me.useReducer=function(e,t,n){return dt.current.useReducer(e,t,n)};me.useRef=function(e){return dt.current.useRef(e)};me.useState=function(e){return dt.current.useState(e)};me.useSyncExternalStore=function(e,t,n){return dt.current.useSyncExternalStore(e,t,n)};me.useTransition=function(){return dt.current.useTransition()};me.version="18.2.0";Sw.exports=me;var g=Sw.exports;const q=ho(g),HC=OC({__proto__:null,default:q},[g]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WC=g,VC=Symbol.for("react.element"),GC=Symbol.for("react.fragment"),qC=Object.prototype.hasOwnProperty,KC=WC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,YC={key:!0,ref:!0,__self:!0,__source:!0};function Pw(e,t,n){var r,o={},a=null,i=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)qC.call(t,r)&&!YC.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:VC,type:e,key:a,ref:i,props:o,_owner:KC.current}}mu.Fragment=GC;mu.jsx=Pw;mu.jsxs=Pw;kw.exports=mu;var S=kw.exports,Td={},Aw={exports:{}},It={},Iw={exports:{}},Lw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,W){var U=j.length;j.push(W);e:for(;0<U;){var te=U-1>>>1,N=j[te];if(0<o(N,W))j[te]=W,j[U]=N,U=te;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var W=j[0],U=j.pop();if(U!==W){j[0]=U;e:for(var te=0,N=j.length,F=N>>>1;te<F;){var L=2*(te+1)-1,z=j[L],T=L+1,ne=j[T];if(0>o(z,U))T<N&&0>o(ne,z)?(j[te]=ne,j[T]=U,te=T):(j[te]=z,j[L]=U,te=L);else if(T<N&&0>o(ne,U))j[te]=ne,j[T]=U,te=T;else break e}}return W}function o(j,W){var U=j.sortIndex-W.sortIndex;return U!==0?U:j.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var l=[],c=[],d=1,f=null,p=3,h=!1,y=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(j){for(var W=n(c);W!==null;){if(W.callback===null)r(c);else if(W.startTime<=j)r(c),W.sortIndex=W.expirationTime,t(l,W);else break;W=n(c)}}function k(j){if(w=!1,b(j),!y)if(n(l)!==null)y=!0,ie(C);else{var W=n(c);W!==null&&ae(k,W.startTime-j)}}function C(j,W){y=!1,w&&(w=!1,v(O),O=-1),h=!0;var U=p;try{for(b(W),f=n(l);f!==null&&(!(f.expirationTime>W)||j&&!I());){var te=f.callback;if(typeof te=="function"){f.callback=null,p=f.priorityLevel;var N=te(f.expirationTime<=W);W=e.unstable_now(),typeof N=="function"?f.callback=N:f===n(l)&&r(l),b(W)}else r(l);f=n(l)}if(f!==null)var F=!0;else{var L=n(c);L!==null&&ae(k,L.startTime-W),F=!1}return F}finally{f=null,p=U,h=!1}}var _=!1,E=null,O=-1,A=5,$=-1;function I(){return!(e.unstable_now()-$<A)}function B(){if(E!==null){var j=e.unstable_now();$=j;var W=!0;try{W=E(!0,j)}finally{W?H():(_=!1,E=null)}}else _=!1}var H;if(typeof m=="function")H=function(){m(B)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,re=ee.port2;ee.port1.onmessage=B,H=function(){re.postMessage(null)}}else H=function(){x(B,0)};function ie(j){E=j,_||(_=!0,H())}function ae(j,W){O=x(function(){j(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){y||h||(y=!0,ie(C))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(j){switch(p){case 1:case 2:case 3:var W=3;break;default:W=p}var U=p;p=W;try{return j()}finally{p=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,W){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var U=p;p=j;try{return W()}finally{p=U}},e.unstable_scheduleCallback=function(j,W,U){var te=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?te+U:te):U=te,j){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=U+N,j={id:d++,callback:W,priorityLevel:j,startTime:U,expirationTime:N,sortIndex:-1},U>te?(j.sortIndex=U,t(c,j),n(l)===null&&j===n(c)&&(w?(v(O),O=-1):w=!0,ae(k,U-te))):(j.sortIndex=N,t(l,j),y||h||(y=!0,ie(C))),j},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(j){var W=p;return function(){var U=p;p=W;try{return j.apply(this,arguments)}finally{p=U}}}})(Lw);Iw.exports=Lw;var XC=Iw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nw=g,Pt=XC;function D(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dw=new Set,wi={};function go(e,t){na(e,t),na(e+"Capture",t)}function na(e,t){for(wi[e]=t,e=0;e<t.length;e++)Dw.add(t[e])}var Bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rd=Object.prototype.hasOwnProperty,QC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Th={},Rh={};function JC(e){return Rd.call(Rh,e)?!0:Rd.call(Th,e)?!1:QC.test(e)?Rh[e]=!0:(Th[e]=!0,!1)}function ZC(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function eE(e,t,n,r){if(t===null||typeof t>"u"||ZC(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ft(e,t,n,r,o,a,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){tt[e]=new ft(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];tt[t]=new ft(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){tt[e]=new ft(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){tt[e]=new ft(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){tt[e]=new ft(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){tt[e]=new ft(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){tt[e]=new ft(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){tt[e]=new ft(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){tt[e]=new ft(e,5,!1,e.toLowerCase(),null,!1,!1)});var Cp=/[\-:]([a-z])/g;function Ep(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Cp,Ep);tt[t]=new ft(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Cp,Ep);tt[t]=new ft(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Cp,Ep);tt[t]=new ft(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){tt[e]=new ft(e,1,!1,e.toLowerCase(),null,!1,!1)});tt.xlinkHref=new ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){tt[e]=new ft(e,1,!1,e.toLowerCase(),null,!0,!0)});function Op(e,t,n,r){var o=tt.hasOwnProperty(t)?tt[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(eE(t,n,o,r)&&(n=null),r||o===null?JC(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Kn=Nw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vs=Symbol.for("react.element"),Lo=Symbol.for("react.portal"),No=Symbol.for("react.fragment"),Tp=Symbol.for("react.strict_mode"),jd=Symbol.for("react.profiler"),Mw=Symbol.for("react.provider"),zw=Symbol.for("react.context"),Rp=Symbol.for("react.forward_ref"),$d=Symbol.for("react.suspense"),Pd=Symbol.for("react.suspense_list"),jp=Symbol.for("react.memo"),lr=Symbol.for("react.lazy"),Fw=Symbol.for("react.offscreen"),jh=Symbol.iterator;function $a(e){return e===null||typeof e!="object"?null:(e=jh&&e[jh]||e["@@iterator"],typeof e=="function"?e:null)}var Me=Object.assign,vc;function qa(e){if(vc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);vc=t&&t[1]||""}return`
`+vc+e}var yc=!1;function bc(e,t){if(!e||yc)return"";yc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),a=r.stack.split(`
`),i=o.length-1,s=a.length-1;1<=i&&0<=s&&o[i]!==a[s];)s--;for(;1<=i&&0<=s;i--,s--)if(o[i]!==a[s]){if(i!==1||s!==1)do if(i--,s--,0>s||o[i]!==a[s]){var l=`
`+o[i].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=i&&0<=s);break}}}finally{yc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?qa(e):""}function tE(e){switch(e.tag){case 5:return qa(e.type);case 16:return qa("Lazy");case 13:return qa("Suspense");case 19:return qa("SuspenseList");case 0:case 2:case 15:return e=bc(e.type,!1),e;case 11:return e=bc(e.type.render,!1),e;case 1:return e=bc(e.type,!0),e;default:return""}}function Ad(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case No:return"Fragment";case Lo:return"Portal";case jd:return"Profiler";case Tp:return"StrictMode";case $d:return"Suspense";case Pd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case zw:return(e.displayName||"Context")+".Consumer";case Mw:return(e._context.displayName||"Context")+".Provider";case Rp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case jp:return t=e.displayName||null,t!==null?t:Ad(e.type)||"Memo";case lr:t=e._payload,e=e._init;try{return Ad(e(t))}catch{}}return null}function nE(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ad(t);case 8:return t===Tp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function $r(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Bw(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function rE(e){var t=Bw(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,a.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ys(e){e._valueTracker||(e._valueTracker=rE(e))}function Uw(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Bw(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function _l(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Id(e,t){var n=t.checked;return Me({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function $h(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=$r(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Hw(e,t){t=t.checked,t!=null&&Op(e,"checked",t,!1)}function Ld(e,t){Hw(e,t);var n=$r(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Nd(e,t.type,n):t.hasOwnProperty("defaultValue")&&Nd(e,t.type,$r(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ph(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Nd(e,t,n){(t!=="number"||_l(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ka=Array.isArray;function Yo(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+$r(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Dd(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(D(91));return Me({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ah(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(D(92));if(Ka(n)){if(1<n.length)throw Error(D(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:$r(n)}}function Ww(e,t){var n=$r(t.value),r=$r(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ih(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Vw(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Md(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Vw(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var bs,Gw=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(bs=bs||document.createElement("div"),bs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=bs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function xi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ri={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},oE=["Webkit","ms","Moz","O"];Object.keys(ri).forEach(function(e){oE.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ri[t]=ri[e]})});function qw(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ri.hasOwnProperty(e)&&ri[e]?(""+t).trim():t+"px"}function Kw(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=qw(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var aE=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zd(e,t){if(t){if(aE[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(D(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(D(61))}if(t.style!=null&&typeof t.style!="object")throw Error(D(62))}}function Fd(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bd=null;function $p(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ud=null,Xo=null,Qo=null;function Lh(e){if(e=Ki(e)){if(typeof Ud!="function")throw Error(D(280));var t=e.stateNode;t&&(t=bu(t),Ud(e.stateNode,e.type,t))}}function Yw(e){Xo?Qo?Qo.push(e):Qo=[e]:Xo=e}function Xw(){if(Xo){var e=Xo,t=Qo;if(Qo=Xo=null,Lh(e),t)for(e=0;e<t.length;e++)Lh(t[e])}}function Qw(e,t){return e(t)}function Jw(){}var wc=!1;function Zw(e,t,n){if(wc)return e(t,n);wc=!0;try{return Qw(e,t,n)}finally{wc=!1,(Xo!==null||Qo!==null)&&(Jw(),Xw())}}function _i(e,t){var n=e.stateNode;if(n===null)return null;var r=bu(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(D(231,t,typeof n));return n}var Hd=!1;if(Bn)try{var Pa={};Object.defineProperty(Pa,"passive",{get:function(){Hd=!0}}),window.addEventListener("test",Pa,Pa),window.removeEventListener("test",Pa,Pa)}catch{Hd=!1}function iE(e,t,n,r,o,a,i,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var oi=!1,kl=null,Sl=!1,Wd=null,sE={onError:function(e){oi=!0,kl=e}};function lE(e,t,n,r,o,a,i,s,l){oi=!1,kl=null,iE.apply(sE,arguments)}function uE(e,t,n,r,o,a,i,s,l){if(lE.apply(this,arguments),oi){if(oi){var c=kl;oi=!1,kl=null}else throw Error(D(198));Sl||(Sl=!0,Wd=c)}}function vo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function e1(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Nh(e){if(vo(e)!==e)throw Error(D(188))}function cE(e){var t=e.alternate;if(!t){if(t=vo(e),t===null)throw Error(D(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return Nh(o),e;if(a===r)return Nh(o),t;a=a.sibling}throw Error(D(188))}if(n.return!==r.return)n=o,r=a;else{for(var i=!1,s=o.child;s;){if(s===n){i=!0,n=o,r=a;break}if(s===r){i=!0,r=o,n=a;break}s=s.sibling}if(!i){for(s=a.child;s;){if(s===n){i=!0,n=a,r=o;break}if(s===r){i=!0,r=a,n=o;break}s=s.sibling}if(!i)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?e:t}function t1(e){return e=cE(e),e!==null?n1(e):null}function n1(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=n1(e);if(t!==null)return t;e=e.sibling}return null}var r1=Pt.unstable_scheduleCallback,Dh=Pt.unstable_cancelCallback,dE=Pt.unstable_shouldYield,fE=Pt.unstable_requestPaint,Ue=Pt.unstable_now,pE=Pt.unstable_getCurrentPriorityLevel,Pp=Pt.unstable_ImmediatePriority,o1=Pt.unstable_UserBlockingPriority,Cl=Pt.unstable_NormalPriority,mE=Pt.unstable_LowPriority,a1=Pt.unstable_IdlePriority,hu=null,On=null;function hE(e){if(On&&typeof On.onCommitFiberRoot=="function")try{On.onCommitFiberRoot(hu,e,void 0,(e.current.flags&128)===128)}catch{}}var dn=Math.clz32?Math.clz32:yE,gE=Math.log,vE=Math.LN2;function yE(e){return e>>>=0,e===0?32:31-(gE(e)/vE|0)|0}var ws=64,xs=4194304;function Ya(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function El(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~o;s!==0?r=Ya(s):(a&=i,a!==0&&(r=Ya(a)))}else i=n&~o,i!==0?r=Ya(i):a!==0&&(r=Ya(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dn(t),o=1<<n,r|=e[n],t&=~o;return r}function bE(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wE(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-dn(a),s=1<<i,l=o[i];l===-1?(!(s&n)||s&r)&&(o[i]=bE(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function Vd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function i1(){var e=ws;return ws<<=1,!(ws&4194240)&&(ws=64),e}function xc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dn(t),e[t]=n}function xE(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-dn(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}function Ap(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dn(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var be=0;function s1(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var l1,Ip,u1,c1,d1,Gd=!1,_s=[],wr=null,xr=null,_r=null,ki=new Map,Si=new Map,pr=[],_E="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mh(e,t){switch(e){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":ki.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Si.delete(t.pointerId)}}function Aa(e,t,n,r,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},t!==null&&(t=Ki(t),t!==null&&Ip(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function kE(e,t,n,r,o){switch(t){case"focusin":return wr=Aa(wr,e,t,n,r,o),!0;case"dragenter":return xr=Aa(xr,e,t,n,r,o),!0;case"mouseover":return _r=Aa(_r,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return ki.set(a,Aa(ki.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,Si.set(a,Aa(Si.get(a)||null,e,t,n,r,o)),!0}return!1}function f1(e){var t=Jr(e.target);if(t!==null){var n=vo(t);if(n!==null){if(t=n.tag,t===13){if(t=e1(n),t!==null){e.blockedOn=t,d1(e.priority,function(){u1(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ol(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=qd(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Bd=r,n.target.dispatchEvent(r),Bd=null}else return t=Ki(n),t!==null&&Ip(t),e.blockedOn=n,!1;t.shift()}return!0}function zh(e,t,n){ol(e)&&n.delete(t)}function SE(){Gd=!1,wr!==null&&ol(wr)&&(wr=null),xr!==null&&ol(xr)&&(xr=null),_r!==null&&ol(_r)&&(_r=null),ki.forEach(zh),Si.forEach(zh)}function Ia(e,t){e.blockedOn===t&&(e.blockedOn=null,Gd||(Gd=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,SE)))}function Ci(e){function t(o){return Ia(o,e)}if(0<_s.length){Ia(_s[0],e);for(var n=1;n<_s.length;n++){var r=_s[n];r.blockedOn===e&&(r.blockedOn=null)}}for(wr!==null&&Ia(wr,e),xr!==null&&Ia(xr,e),_r!==null&&Ia(_r,e),ki.forEach(t),Si.forEach(t),n=0;n<pr.length;n++)r=pr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<pr.length&&(n=pr[0],n.blockedOn===null);)f1(n),n.blockedOn===null&&pr.shift()}var Jo=Kn.ReactCurrentBatchConfig,Ol=!0;function CE(e,t,n,r){var o=be,a=Jo.transition;Jo.transition=null;try{be=1,Lp(e,t,n,r)}finally{be=o,Jo.transition=a}}function EE(e,t,n,r){var o=be,a=Jo.transition;Jo.transition=null;try{be=4,Lp(e,t,n,r)}finally{be=o,Jo.transition=a}}function Lp(e,t,n,r){if(Ol){var o=qd(e,t,n,r);if(o===null)$c(e,t,r,Tl,n),Mh(e,r);else if(kE(o,e,t,n,r))r.stopPropagation();else if(Mh(e,r),t&4&&-1<_E.indexOf(e)){for(;o!==null;){var a=Ki(o);if(a!==null&&l1(a),a=qd(e,t,n,r),a===null&&$c(e,t,r,Tl,n),a===o)break;o=a}o!==null&&r.stopPropagation()}else $c(e,t,r,null,n)}}var Tl=null;function qd(e,t,n,r){if(Tl=null,e=$p(r),e=Jr(e),e!==null)if(t=vo(e),t===null)e=null;else if(n=t.tag,n===13){if(e=e1(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Tl=e,null}function p1(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pE()){case Pp:return 1;case o1:return 4;case Cl:case mE:return 16;case a1:return 536870912;default:return 16}default:return 16}}var gr=null,Np=null,al=null;function m1(){if(al)return al;var e,t=Np,n=t.length,r,o="value"in gr?gr.value:gr.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[a-r];r++);return al=o.slice(e,1<r?1-r:void 0)}function il(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ks(){return!0}function Fh(){return!1}function Lt(e){function t(n,r,o,a,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ks:Fh,this.isPropagationStopped=Fh,this}return Me(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ks)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ks)},persist:function(){},isPersistent:ks}),t}var wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dp=Lt(wa),qi=Me({},wa,{view:0,detail:0}),OE=Lt(qi),_c,kc,La,gu=Me({},qi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==La&&(La&&e.type==="mousemove"?(_c=e.screenX-La.screenX,kc=e.screenY-La.screenY):kc=_c=0,La=e),_c)},movementY:function(e){return"movementY"in e?e.movementY:kc}}),Bh=Lt(gu),TE=Me({},gu,{dataTransfer:0}),RE=Lt(TE),jE=Me({},qi,{relatedTarget:0}),Sc=Lt(jE),$E=Me({},wa,{animationName:0,elapsedTime:0,pseudoElement:0}),PE=Lt($E),AE=Me({},wa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),IE=Lt(AE),LE=Me({},wa,{data:0}),Uh=Lt(LE),NE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},DE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ME={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ME[e])?!!t[e]:!1}function Mp(){return zE}var FE=Me({},qi,{key:function(e){if(e.key){var t=NE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=il(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?DE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mp,charCode:function(e){return e.type==="keypress"?il(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?il(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),BE=Lt(FE),UE=Me({},gu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hh=Lt(UE),HE=Me({},qi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mp}),WE=Lt(HE),VE=Me({},wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),GE=Lt(VE),qE=Me({},gu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),KE=Lt(qE),YE=[9,13,27,32],zp=Bn&&"CompositionEvent"in window,ai=null;Bn&&"documentMode"in document&&(ai=document.documentMode);var XE=Bn&&"TextEvent"in window&&!ai,h1=Bn&&(!zp||ai&&8<ai&&11>=ai),Wh=" ",Vh=!1;function g1(e,t){switch(e){case"keyup":return YE.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function v1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Do=!1;function QE(e,t){switch(e){case"compositionend":return v1(t);case"keypress":return t.which!==32?null:(Vh=!0,Wh);case"textInput":return e=t.data,e===Wh&&Vh?null:e;default:return null}}function JE(e,t){if(Do)return e==="compositionend"||!zp&&g1(e,t)?(e=m1(),al=Np=gr=null,Do=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return h1&&t.locale!=="ko"?null:t.data;default:return null}}var ZE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ZE[e.type]:t==="textarea"}function y1(e,t,n,r){Yw(r),t=Rl(t,"onChange"),0<t.length&&(n=new Dp("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ii=null,Ei=null;function eO(e){R1(e,0)}function vu(e){var t=Fo(e);if(Uw(t))return e}function tO(e,t){if(e==="change")return t}var b1=!1;if(Bn){var Cc;if(Bn){var Ec="oninput"in document;if(!Ec){var qh=document.createElement("div");qh.setAttribute("oninput","return;"),Ec=typeof qh.oninput=="function"}Cc=Ec}else Cc=!1;b1=Cc&&(!document.documentMode||9<document.documentMode)}function Kh(){ii&&(ii.detachEvent("onpropertychange",w1),Ei=ii=null)}function w1(e){if(e.propertyName==="value"&&vu(Ei)){var t=[];y1(t,Ei,e,$p(e)),Zw(eO,t)}}function nO(e,t,n){e==="focusin"?(Kh(),ii=t,Ei=n,ii.attachEvent("onpropertychange",w1)):e==="focusout"&&Kh()}function rO(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vu(Ei)}function oO(e,t){if(e==="click")return vu(t)}function aO(e,t){if(e==="input"||e==="change")return vu(t)}function iO(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mn=typeof Object.is=="function"?Object.is:iO;function Oi(e,t){if(mn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Rd.call(t,o)||!mn(e[o],t[o]))return!1}return!0}function Yh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xh(e,t){var n=Yh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yh(n)}}function x1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?x1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _1(){for(var e=window,t=_l();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_l(e.document)}return t}function Fp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function sO(e){var t=_1(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&x1(n.ownerDocument.documentElement,n)){if(r!==null&&Fp(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=r.end===void 0?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=Xh(n,a);var i=Xh(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var lO=Bn&&"documentMode"in document&&11>=document.documentMode,Mo=null,Kd=null,si=null,Yd=!1;function Qh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yd||Mo==null||Mo!==_l(r)||(r=Mo,"selectionStart"in r&&Fp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),si&&Oi(si,r)||(si=r,r=Rl(Kd,"onSelect"),0<r.length&&(t=new Dp("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Mo)))}function Ss(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var zo={animationend:Ss("Animation","AnimationEnd"),animationiteration:Ss("Animation","AnimationIteration"),animationstart:Ss("Animation","AnimationStart"),transitionend:Ss("Transition","TransitionEnd")},Oc={},k1={};Bn&&(k1=document.createElement("div").style,"AnimationEvent"in window||(delete zo.animationend.animation,delete zo.animationiteration.animation,delete zo.animationstart.animation),"TransitionEvent"in window||delete zo.transitionend.transition);function yu(e){if(Oc[e])return Oc[e];if(!zo[e])return e;var t=zo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in k1)return Oc[e]=t[n];return e}var S1=yu("animationend"),C1=yu("animationiteration"),E1=yu("animationstart"),O1=yu("transitionend"),T1=new Map,Jh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(e,t){T1.set(e,t),go(t,[e])}for(var Tc=0;Tc<Jh.length;Tc++){var Rc=Jh[Tc],uO=Rc.toLowerCase(),cO=Rc[0].toUpperCase()+Rc.slice(1);Lr(uO,"on"+cO)}Lr(S1,"onAnimationEnd");Lr(C1,"onAnimationIteration");Lr(E1,"onAnimationStart");Lr("dblclick","onDoubleClick");Lr("focusin","onFocus");Lr("focusout","onBlur");Lr(O1,"onTransitionEnd");na("onMouseEnter",["mouseout","mouseover"]);na("onMouseLeave",["mouseout","mouseover"]);na("onPointerEnter",["pointerout","pointerover"]);na("onPointerLeave",["pointerout","pointerover"]);go("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));go("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));go("onBeforeInput",["compositionend","keypress","textInput","paste"]);go("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));go("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));go("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dO=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xa));function Zh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,uE(r,t,void 0,e),e.currentTarget=null}function R1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==a&&o.isPropagationStopped())break e;Zh(o,s,c),a=l}else for(i=0;i<r.length;i++){if(s=r[i],l=s.instance,c=s.currentTarget,s=s.listener,l!==a&&o.isPropagationStopped())break e;Zh(o,s,c),a=l}}}if(Sl)throw e=Wd,Sl=!1,Wd=null,e}function Oe(e,t){var n=t[ef];n===void 0&&(n=t[ef]=new Set);var r=e+"__bubble";n.has(r)||(j1(t,e,2,!1),n.add(r))}function jc(e,t,n){var r=0;t&&(r|=4),j1(n,e,r,t)}var Cs="_reactListening"+Math.random().toString(36).slice(2);function Ti(e){if(!e[Cs]){e[Cs]=!0,Dw.forEach(function(n){n!=="selectionchange"&&(dO.has(n)||jc(n,!1,e),jc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Cs]||(t[Cs]=!0,jc("selectionchange",!1,t))}}function j1(e,t,n,r){switch(p1(t)){case 1:var o=CE;break;case 4:o=EE;break;default:o=Lp}n=o.bind(null,t,n,e),o=void 0,!Hd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function $c(e,t,n,r,o){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var l=i.tag;if((l===3||l===4)&&(l=i.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;i=i.return}for(;s!==null;){if(i=Jr(s),i===null)return;if(l=i.tag,l===5||l===6){r=a=i;continue e}s=s.parentNode}}r=r.return}Zw(function(){var c=a,d=$p(n),f=[];e:{var p=T1.get(e);if(p!==void 0){var h=Dp,y=e;switch(e){case"keypress":if(il(n)===0)break e;case"keydown":case"keyup":h=BE;break;case"focusin":y="focus",h=Sc;break;case"focusout":y="blur",h=Sc;break;case"beforeblur":case"afterblur":h=Sc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Bh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=RE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=WE;break;case S1:case C1:case E1:h=PE;break;case O1:h=GE;break;case"scroll":h=OE;break;case"wheel":h=KE;break;case"copy":case"cut":case"paste":h=IE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Hh}var w=(t&4)!==0,x=!w&&e==="scroll",v=w?p!==null?p+"Capture":null:p;w=[];for(var m=c,b;m!==null;){b=m;var k=b.stateNode;if(b.tag===5&&k!==null&&(b=k,v!==null&&(k=_i(m,v),k!=null&&w.push(Ri(m,k,b)))),x)break;m=m.return}0<w.length&&(p=new h(p,y,null,n,d),f.push({event:p,listeners:w}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&n!==Bd&&(y=n.relatedTarget||n.fromElement)&&(Jr(y)||y[Un]))break e;if((h||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,h?(y=n.relatedTarget||n.toElement,h=c,y=y?Jr(y):null,y!==null&&(x=vo(y),y!==x||y.tag!==5&&y.tag!==6)&&(y=null)):(h=null,y=c),h!==y)){if(w=Bh,k="onMouseLeave",v="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(w=Hh,k="onPointerLeave",v="onPointerEnter",m="pointer"),x=h==null?p:Fo(h),b=y==null?p:Fo(y),p=new w(k,m+"leave",h,n,d),p.target=x,p.relatedTarget=b,k=null,Jr(d)===c&&(w=new w(v,m+"enter",y,n,d),w.target=b,w.relatedTarget=x,k=w),x=k,h&&y)t:{for(w=h,v=y,m=0,b=w;b;b=Eo(b))m++;for(b=0,k=v;k;k=Eo(k))b++;for(;0<m-b;)w=Eo(w),m--;for(;0<b-m;)v=Eo(v),b--;for(;m--;){if(w===v||v!==null&&w===v.alternate)break t;w=Eo(w),v=Eo(v)}w=null}else w=null;h!==null&&eg(f,p,h,w,!1),y!==null&&x!==null&&eg(f,x,y,w,!0)}}e:{if(p=c?Fo(c):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var C=tO;else if(Gh(p))if(b1)C=aO;else{C=rO;var _=nO}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=oO);if(C&&(C=C(e,c))){y1(f,C,n,d);break e}_&&_(e,p,c),e==="focusout"&&(_=p._wrapperState)&&_.controlled&&p.type==="number"&&Nd(p,"number",p.value)}switch(_=c?Fo(c):window,e){case"focusin":(Gh(_)||_.contentEditable==="true")&&(Mo=_,Kd=c,si=null);break;case"focusout":si=Kd=Mo=null;break;case"mousedown":Yd=!0;break;case"contextmenu":case"mouseup":case"dragend":Yd=!1,Qh(f,n,d);break;case"selectionchange":if(lO)break;case"keydown":case"keyup":Qh(f,n,d)}var E;if(zp)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Do?g1(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(h1&&n.locale!=="ko"&&(Do||O!=="onCompositionStart"?O==="onCompositionEnd"&&Do&&(E=m1()):(gr=d,Np="value"in gr?gr.value:gr.textContent,Do=!0)),_=Rl(c,O),0<_.length&&(O=new Uh(O,e,null,n,d),f.push({event:O,listeners:_}),E?O.data=E:(E=v1(n),E!==null&&(O.data=E)))),(E=XE?QE(e,n):JE(e,n))&&(c=Rl(c,"onBeforeInput"),0<c.length&&(d=new Uh("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=E))}R1(f,t)})}function Ri(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Rl(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=_i(e,n),a!=null&&r.unshift(Ri(e,a,o)),a=_i(e,t),a!=null&&r.push(Ri(e,a,o))),e=e.return}return r}function Eo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function eg(e,t,n,r,o){for(var a=t._reactName,i=[];n!==null&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&c!==null&&(s=c,o?(l=_i(n,a),l!=null&&i.unshift(Ri(n,l,s))):o||(l=_i(n,a),l!=null&&i.push(Ri(n,l,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var fO=/\r\n?/g,pO=/\u0000|\uFFFD/g;function tg(e){return(typeof e=="string"?e:""+e).replace(fO,`
`).replace(pO,"")}function Es(e,t,n){if(t=tg(t),tg(e)!==t&&n)throw Error(D(425))}function jl(){}var Xd=null,Qd=null;function Jd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zd=typeof setTimeout=="function"?setTimeout:void 0,mO=typeof clearTimeout=="function"?clearTimeout:void 0,ng=typeof Promise=="function"?Promise:void 0,hO=typeof queueMicrotask=="function"?queueMicrotask:typeof ng<"u"?function(e){return ng.resolve(null).then(e).catch(gO)}:Zd;function gO(e){setTimeout(function(){throw e})}function Pc(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Ci(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Ci(t)}function kr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function rg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var xa=Math.random().toString(36).slice(2),Cn="__reactFiber$"+xa,ji="__reactProps$"+xa,Un="__reactContainer$"+xa,ef="__reactEvents$"+xa,vO="__reactListeners$"+xa,yO="__reactHandles$"+xa;function Jr(e){var t=e[Cn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Un]||n[Cn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=rg(e);e!==null;){if(n=e[Cn])return n;e=rg(e)}return t}e=n,n=e.parentNode}return null}function Ki(e){return e=e[Cn]||e[Un],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Fo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function bu(e){return e[ji]||null}var tf=[],Bo=-1;function Nr(e){return{current:e}}function Te(e){0>Bo||(e.current=tf[Bo],tf[Bo]=null,Bo--)}function Ee(e,t){Bo++,tf[Bo]=e.current,e.current=t}var Pr={},lt=Nr(Pr),xt=Nr(!1),io=Pr;function ra(e,t){var n=e.type.contextTypes;if(!n)return Pr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function _t(e){return e=e.childContextTypes,e!=null}function $l(){Te(xt),Te(lt)}function og(e,t,n){if(lt.current!==Pr)throw Error(D(168));Ee(lt,t),Ee(xt,n)}function $1(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(D(108,nE(e)||"Unknown",o));return Me({},n,r)}function Pl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pr,io=lt.current,Ee(lt,e),Ee(xt,xt.current),!0}function ag(e,t,n){var r=e.stateNode;if(!r)throw Error(D(169));n?(e=$1(e,t,io),r.__reactInternalMemoizedMergedChildContext=e,Te(xt),Te(lt),Ee(lt,e)):Te(xt),Ee(xt,n)}var Dn=null,wu=!1,Ac=!1;function P1(e){Dn===null?Dn=[e]:Dn.push(e)}function bO(e){wu=!0,P1(e)}function Dr(){if(!Ac&&Dn!==null){Ac=!0;var e=0,t=be;try{var n=Dn;for(be=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Dn=null,wu=!1}catch(o){throw Dn!==null&&(Dn=Dn.slice(e+1)),r1(Pp,Dr),o}finally{be=t,Ac=!1}}return null}var Uo=[],Ho=0,Al=null,Il=0,Ft=[],Bt=0,so=null,Mn=1,zn="";function Gr(e,t){Uo[Ho++]=Il,Uo[Ho++]=Al,Al=e,Il=t}function A1(e,t,n){Ft[Bt++]=Mn,Ft[Bt++]=zn,Ft[Bt++]=so,so=e;var r=Mn;e=zn;var o=32-dn(r)-1;r&=~(1<<o),n+=1;var a=32-dn(t)+o;if(30<a){var i=o-o%5;a=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Mn=1<<32-dn(t)+o|n<<o|r,zn=a+e}else Mn=1<<a|n<<o|r,zn=e}function Bp(e){e.return!==null&&(Gr(e,1),A1(e,1,0))}function Up(e){for(;e===Al;)Al=Uo[--Ho],Uo[Ho]=null,Il=Uo[--Ho],Uo[Ho]=null;for(;e===so;)so=Ft[--Bt],Ft[Bt]=null,zn=Ft[--Bt],Ft[Bt]=null,Mn=Ft[--Bt],Ft[Bt]=null}var $t=null,jt=null,Pe=!1,sn=null;function I1(e,t){var n=Ut(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ig(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$t=e,jt=kr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$t=e,jt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=so!==null?{id:Mn,overflow:zn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ut(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,$t=e,jt=null,!0):!1;default:return!1}}function nf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function rf(e){if(Pe){var t=jt;if(t){var n=t;if(!ig(e,t)){if(nf(e))throw Error(D(418));t=kr(n.nextSibling);var r=$t;t&&ig(e,t)?I1(r,n):(e.flags=e.flags&-4097|2,Pe=!1,$t=e)}}else{if(nf(e))throw Error(D(418));e.flags=e.flags&-4097|2,Pe=!1,$t=e}}}function sg(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$t=e}function Os(e){if(e!==$t)return!1;if(!Pe)return sg(e),Pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Jd(e.type,e.memoizedProps)),t&&(t=jt)){if(nf(e))throw L1(),Error(D(418));for(;t;)I1(e,t),t=kr(t.nextSibling)}if(sg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){jt=kr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}jt=null}}else jt=$t?kr(e.stateNode.nextSibling):null;return!0}function L1(){for(var e=jt;e;)e=kr(e.nextSibling)}function oa(){jt=$t=null,Pe=!1}function Hp(e){sn===null?sn=[e]:sn.push(e)}var wO=Kn.ReactCurrentBatchConfig;function rn(e,t){if(e&&e.defaultProps){t=Me({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ll=Nr(null),Nl=null,Wo=null,Wp=null;function Vp(){Wp=Wo=Nl=null}function Gp(e){var t=Ll.current;Te(Ll),e._currentValue=t}function of(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Zo(e,t){Nl=e,Wp=Wo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(wt=!0),e.firstContext=null)}function Vt(e){var t=e._currentValue;if(Wp!==e)if(e={context:e,memoizedValue:t,next:null},Wo===null){if(Nl===null)throw Error(D(308));Wo=e,Nl.dependencies={lanes:0,firstContext:e}}else Wo=Wo.next=e;return t}var Zr=null;function qp(e){Zr===null?Zr=[e]:Zr.push(e)}function N1(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,qp(t)):(n.next=o.next,o.next=n),t.interleaved=n,Hn(e,r)}function Hn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ur=!1;function Kp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function D1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Fn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Sr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ve&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Hn(e,n)}return o=r.interleaved,o===null?(t.next=t,qp(r)):(t.next=o.next,o.next=t),r.interleaved=t,Hn(e,n)}function sl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ap(e,n)}}function lg(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=i:a=a.next=i,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Dl(e,t,n,r){var o=e.updateQueue;ur=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var l=s,c=l.next;l.next=null,i===null?a=c:i.next=c,i=l;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==i&&(s===null?d.firstBaseUpdate=c:s.next=c,d.lastBaseUpdate=l))}if(a!==null){var f=o.baseState;i=0,d=c=l=null,s=a;do{var p=s.lane,h=s.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,w=s;switch(p=t,h=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){f=y.call(h,f,p);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,p=typeof y=="function"?y.call(h,f,p):y,p==null)break e;f=Me({},f,p);break e;case 2:ur=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[s]:p.push(s))}else h={eventTime:h,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(c=d=h,l=f):d=d.next=h,i|=p;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;p=s,s=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(d===null&&(l=f),o.baseState=l,o.firstBaseUpdate=c,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);uo|=i,e.lanes=i,e.memoizedState=f}}function ug(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(D(191,o));o.call(r)}}}var M1=new Nw.Component().refs;function af(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Me({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xu={isMounted:function(e){return(e=e._reactInternals)?vo(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ct(),o=Er(e),a=Fn(r,o);a.payload=t,n!=null&&(a.callback=n),t=Sr(e,a,o),t!==null&&(fn(t,e,o,r),sl(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ct(),o=Er(e),a=Fn(r,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Sr(e,a,o),t!==null&&(fn(t,e,o,r),sl(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ct(),r=Er(e),o=Fn(n,r);o.tag=2,t!=null&&(o.callback=t),t=Sr(e,o,r),t!==null&&(fn(t,e,r,n),sl(t,e,r))}};function cg(e,t,n,r,o,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,i):t.prototype&&t.prototype.isPureReactComponent?!Oi(n,r)||!Oi(o,a):!0}function z1(e,t,n){var r=!1,o=Pr,a=t.contextType;return typeof a=="object"&&a!==null?a=Vt(a):(o=_t(t)?io:lt.current,r=t.contextTypes,a=(r=r!=null)?ra(e,o):Pr),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=xu,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function dg(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&xu.enqueueReplaceState(t,t.state,null)}function sf(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=M1,Kp(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=Vt(a):(a=_t(t)?io:lt.current,o.context=ra(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(af(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&xu.enqueueReplaceState(o,o.state,null),Dl(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Na(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,e));var o=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(i){var s=o.refs;s===M1&&(s=o.refs={}),i===null?delete s[a]:s[a]=i},t._stringRef=a,t)}if(typeof e!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,e))}return e}function Ts(e,t){throw e=Object.prototype.toString.call(t),Error(D(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function fg(e){var t=e._init;return t(e._payload)}function F1(e){function t(v,m){if(e){var b=v.deletions;b===null?(v.deletions=[m],v.flags|=16):b.push(m)}}function n(v,m){if(!e)return null;for(;m!==null;)t(v,m),m=m.sibling;return null}function r(v,m){for(v=new Map;m!==null;)m.key!==null?v.set(m.key,m):v.set(m.index,m),m=m.sibling;return v}function o(v,m){return v=Or(v,m),v.index=0,v.sibling=null,v}function a(v,m,b){return v.index=b,e?(b=v.alternate,b!==null?(b=b.index,b<m?(v.flags|=2,m):b):(v.flags|=2,m)):(v.flags|=1048576,m)}function i(v){return e&&v.alternate===null&&(v.flags|=2),v}function s(v,m,b,k){return m===null||m.tag!==6?(m=Fc(b,v.mode,k),m.return=v,m):(m=o(m,b),m.return=v,m)}function l(v,m,b,k){var C=b.type;return C===No?d(v,m,b.props.children,k,b.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===lr&&fg(C)===m.type)?(k=o(m,b.props),k.ref=Na(v,m,b),k.return=v,k):(k=pl(b.type,b.key,b.props,null,v.mode,k),k.ref=Na(v,m,b),k.return=v,k)}function c(v,m,b,k){return m===null||m.tag!==4||m.stateNode.containerInfo!==b.containerInfo||m.stateNode.implementation!==b.implementation?(m=Bc(b,v.mode,k),m.return=v,m):(m=o(m,b.children||[]),m.return=v,m)}function d(v,m,b,k,C){return m===null||m.tag!==7?(m=no(b,v.mode,k,C),m.return=v,m):(m=o(m,b),m.return=v,m)}function f(v,m,b){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Fc(""+m,v.mode,b),m.return=v,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case vs:return b=pl(m.type,m.key,m.props,null,v.mode,b),b.ref=Na(v,null,m),b.return=v,b;case Lo:return m=Bc(m,v.mode,b),m.return=v,m;case lr:var k=m._init;return f(v,k(m._payload),b)}if(Ka(m)||$a(m))return m=no(m,v.mode,b,null),m.return=v,m;Ts(v,m)}return null}function p(v,m,b,k){var C=m!==null?m.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return C!==null?null:s(v,m,""+b,k);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case vs:return b.key===C?l(v,m,b,k):null;case Lo:return b.key===C?c(v,m,b,k):null;case lr:return C=b._init,p(v,m,C(b._payload),k)}if(Ka(b)||$a(b))return C!==null?null:d(v,m,b,k,null);Ts(v,b)}return null}function h(v,m,b,k,C){if(typeof k=="string"&&k!==""||typeof k=="number")return v=v.get(b)||null,s(m,v,""+k,C);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case vs:return v=v.get(k.key===null?b:k.key)||null,l(m,v,k,C);case Lo:return v=v.get(k.key===null?b:k.key)||null,c(m,v,k,C);case lr:var _=k._init;return h(v,m,b,_(k._payload),C)}if(Ka(k)||$a(k))return v=v.get(b)||null,d(m,v,k,C,null);Ts(m,k)}return null}function y(v,m,b,k){for(var C=null,_=null,E=m,O=m=0,A=null;E!==null&&O<b.length;O++){E.index>O?(A=E,E=null):A=E.sibling;var $=p(v,E,b[O],k);if($===null){E===null&&(E=A);break}e&&E&&$.alternate===null&&t(v,E),m=a($,m,O),_===null?C=$:_.sibling=$,_=$,E=A}if(O===b.length)return n(v,E),Pe&&Gr(v,O),C;if(E===null){for(;O<b.length;O++)E=f(v,b[O],k),E!==null&&(m=a(E,m,O),_===null?C=E:_.sibling=E,_=E);return Pe&&Gr(v,O),C}for(E=r(v,E);O<b.length;O++)A=h(E,v,O,b[O],k),A!==null&&(e&&A.alternate!==null&&E.delete(A.key===null?O:A.key),m=a(A,m,O),_===null?C=A:_.sibling=A,_=A);return e&&E.forEach(function(I){return t(v,I)}),Pe&&Gr(v,O),C}function w(v,m,b,k){var C=$a(b);if(typeof C!="function")throw Error(D(150));if(b=C.call(b),b==null)throw Error(D(151));for(var _=C=null,E=m,O=m=0,A=null,$=b.next();E!==null&&!$.done;O++,$=b.next()){E.index>O?(A=E,E=null):A=E.sibling;var I=p(v,E,$.value,k);if(I===null){E===null&&(E=A);break}e&&E&&I.alternate===null&&t(v,E),m=a(I,m,O),_===null?C=I:_.sibling=I,_=I,E=A}if($.done)return n(v,E),Pe&&Gr(v,O),C;if(E===null){for(;!$.done;O++,$=b.next())$=f(v,$.value,k),$!==null&&(m=a($,m,O),_===null?C=$:_.sibling=$,_=$);return Pe&&Gr(v,O),C}for(E=r(v,E);!$.done;O++,$=b.next())$=h(E,v,O,$.value,k),$!==null&&(e&&$.alternate!==null&&E.delete($.key===null?O:$.key),m=a($,m,O),_===null?C=$:_.sibling=$,_=$);return e&&E.forEach(function(B){return t(v,B)}),Pe&&Gr(v,O),C}function x(v,m,b,k){if(typeof b=="object"&&b!==null&&b.type===No&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case vs:e:{for(var C=b.key,_=m;_!==null;){if(_.key===C){if(C=b.type,C===No){if(_.tag===7){n(v,_.sibling),m=o(_,b.props.children),m.return=v,v=m;break e}}else if(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===lr&&fg(C)===_.type){n(v,_.sibling),m=o(_,b.props),m.ref=Na(v,_,b),m.return=v,v=m;break e}n(v,_);break}else t(v,_);_=_.sibling}b.type===No?(m=no(b.props.children,v.mode,k,b.key),m.return=v,v=m):(k=pl(b.type,b.key,b.props,null,v.mode,k),k.ref=Na(v,m,b),k.return=v,v=k)}return i(v);case Lo:e:{for(_=b.key;m!==null;){if(m.key===_)if(m.tag===4&&m.stateNode.containerInfo===b.containerInfo&&m.stateNode.implementation===b.implementation){n(v,m.sibling),m=o(m,b.children||[]),m.return=v,v=m;break e}else{n(v,m);break}else t(v,m);m=m.sibling}m=Bc(b,v.mode,k),m.return=v,v=m}return i(v);case lr:return _=b._init,x(v,m,_(b._payload),k)}if(Ka(b))return y(v,m,b,k);if($a(b))return w(v,m,b,k);Ts(v,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,m!==null&&m.tag===6?(n(v,m.sibling),m=o(m,b),m.return=v,v=m):(n(v,m),m=Fc(b,v.mode,k),m.return=v,v=m),i(v)):n(v,m)}return x}var aa=F1(!0),B1=F1(!1),Yi={},Tn=Nr(Yi),$i=Nr(Yi),Pi=Nr(Yi);function eo(e){if(e===Yi)throw Error(D(174));return e}function Yp(e,t){switch(Ee(Pi,t),Ee($i,e),Ee(Tn,Yi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Md(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Md(t,e)}Te(Tn),Ee(Tn,t)}function ia(){Te(Tn),Te($i),Te(Pi)}function U1(e){eo(Pi.current);var t=eo(Tn.current),n=Md(t,e.type);t!==n&&(Ee($i,e),Ee(Tn,n))}function Xp(e){$i.current===e&&(Te(Tn),Te($i))}var Le=Nr(0);function Ml(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ic=[];function Qp(){for(var e=0;e<Ic.length;e++)Ic[e]._workInProgressVersionPrimary=null;Ic.length=0}var ll=Kn.ReactCurrentDispatcher,Lc=Kn.ReactCurrentBatchConfig,lo=0,Ne=null,Ge=null,Xe=null,zl=!1,li=!1,Ai=0,xO=0;function ot(){throw Error(D(321))}function Jp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!mn(e[n],t[n]))return!1;return!0}function Zp(e,t,n,r,o,a){if(lo=a,Ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ll.current=e===null||e.memoizedState===null?CO:EO,e=n(r,o),li){a=0;do{if(li=!1,Ai=0,25<=a)throw Error(D(301));a+=1,Xe=Ge=null,t.updateQueue=null,ll.current=OO,e=n(r,o)}while(li)}if(ll.current=Fl,t=Ge!==null&&Ge.next!==null,lo=0,Xe=Ge=Ne=null,zl=!1,t)throw Error(D(300));return e}function em(){var e=Ai!==0;return Ai=0,e}function wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?Ne.memoizedState=Xe=e:Xe=Xe.next=e,Xe}function Gt(){if(Ge===null){var e=Ne.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var t=Xe===null?Ne.memoizedState:Xe.next;if(t!==null)Xe=t,Ge=e;else{if(e===null)throw Error(D(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},Xe===null?Ne.memoizedState=Xe=e:Xe=Xe.next=e}return Xe}function Ii(e,t){return typeof t=="function"?t(e):t}function Nc(e){var t=Gt(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=Ge,o=r.baseQueue,a=n.pending;if(a!==null){if(o!==null){var i=o.next;o.next=a.next,a.next=i}r.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,r=r.baseState;var s=i=null,l=null,c=a;do{var d=c.lane;if((lo&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=f,i=r):l=l.next=f,Ne.lanes|=d,uo|=d}c=c.next}while(c!==null&&c!==a);l===null?i=r:l.next=s,mn(r,t.memoizedState)||(wt=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do a=o.lane,Ne.lanes|=a,uo|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Dc(e){var t=Gt(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do a=e(a,i.action),i=i.next;while(i!==o);mn(a,t.memoizedState)||(wt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function H1(){}function W1(e,t){var n=Ne,r=Gt(),o=t(),a=!mn(r.memoizedState,o);if(a&&(r.memoizedState=o,wt=!0),r=r.queue,tm(q1.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Xe!==null&&Xe.memoizedState.tag&1){if(n.flags|=2048,Li(9,G1.bind(null,n,r,o,t),void 0,null),Qe===null)throw Error(D(349));lo&30||V1(n,t,o)}return o}function V1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function G1(e,t,n,r){t.value=n,t.getSnapshot=r,K1(t)&&Y1(e)}function q1(e,t,n){return n(function(){K1(t)&&Y1(e)})}function K1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!mn(e,n)}catch{return!0}}function Y1(e){var t=Hn(e,1);t!==null&&fn(t,e,1,-1)}function pg(e){var t=wn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:e},t.queue=e,e=e.dispatch=SO.bind(null,Ne,e),[t.memoizedState,e]}function Li(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function X1(){return Gt().memoizedState}function ul(e,t,n,r){var o=wn();Ne.flags|=e,o.memoizedState=Li(1|t,n,void 0,r===void 0?null:r)}function _u(e,t,n,r){var o=Gt();r=r===void 0?null:r;var a=void 0;if(Ge!==null){var i=Ge.memoizedState;if(a=i.destroy,r!==null&&Jp(r,i.deps)){o.memoizedState=Li(t,n,a,r);return}}Ne.flags|=e,o.memoizedState=Li(1|t,n,a,r)}function mg(e,t){return ul(8390656,8,e,t)}function tm(e,t){return _u(2048,8,e,t)}function Q1(e,t){return _u(4,2,e,t)}function J1(e,t){return _u(4,4,e,t)}function Z1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ex(e,t,n){return n=n!=null?n.concat([e]):null,_u(4,4,Z1.bind(null,t,e),n)}function nm(){}function tx(e,t){var n=Gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Jp(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function nx(e,t){var n=Gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Jp(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function rx(e,t,n){return lo&21?(mn(n,t)||(n=i1(),Ne.lanes|=n,uo|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,wt=!0),e.memoizedState=n)}function _O(e,t){var n=be;be=n!==0&&4>n?n:4,e(!0);var r=Lc.transition;Lc.transition={};try{e(!1),t()}finally{be=n,Lc.transition=r}}function ox(){return Gt().memoizedState}function kO(e,t,n){var r=Er(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ax(e))ix(t,n);else if(n=N1(e,t,n,r),n!==null){var o=ct();fn(n,e,r,o),sx(n,t,r)}}function SO(e,t,n){var r=Er(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ax(e))ix(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var i=t.lastRenderedState,s=a(i,n);if(o.hasEagerState=!0,o.eagerState=s,mn(s,i)){var l=t.interleaved;l===null?(o.next=o,qp(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=N1(e,t,o,r),n!==null&&(o=ct(),fn(n,e,r,o),sx(n,t,r))}}function ax(e){var t=e.alternate;return e===Ne||t!==null&&t===Ne}function ix(e,t){li=zl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function sx(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ap(e,n)}}var Fl={readContext:Vt,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useInsertionEffect:ot,useLayoutEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useMutableSource:ot,useSyncExternalStore:ot,useId:ot,unstable_isNewReconciler:!1},CO={readContext:Vt,useCallback:function(e,t){return wn().memoizedState=[e,t===void 0?null:t],e},useContext:Vt,useEffect:mg,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ul(4194308,4,Z1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ul(4194308,4,e,t)},useInsertionEffect:function(e,t){return ul(4,2,e,t)},useMemo:function(e,t){var n=wn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=wn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=kO.bind(null,Ne,e),[r.memoizedState,e]},useRef:function(e){var t=wn();return e={current:e},t.memoizedState=e},useState:pg,useDebugValue:nm,useDeferredValue:function(e){return wn().memoizedState=e},useTransition:function(){var e=pg(!1),t=e[0];return e=_O.bind(null,e[1]),wn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ne,o=wn();if(Pe){if(n===void 0)throw Error(D(407));n=n()}else{if(n=t(),Qe===null)throw Error(D(349));lo&30||V1(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,mg(q1.bind(null,r,a,e),[e]),r.flags|=2048,Li(9,G1.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=wn(),t=Qe.identifierPrefix;if(Pe){var n=zn,r=Mn;n=(r&~(1<<32-dn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ai++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=xO++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},EO={readContext:Vt,useCallback:tx,useContext:Vt,useEffect:tm,useImperativeHandle:ex,useInsertionEffect:Q1,useLayoutEffect:J1,useMemo:nx,useReducer:Nc,useRef:X1,useState:function(){return Nc(Ii)},useDebugValue:nm,useDeferredValue:function(e){var t=Gt();return rx(t,Ge.memoizedState,e)},useTransition:function(){var e=Nc(Ii)[0],t=Gt().memoizedState;return[e,t]},useMutableSource:H1,useSyncExternalStore:W1,useId:ox,unstable_isNewReconciler:!1},OO={readContext:Vt,useCallback:tx,useContext:Vt,useEffect:tm,useImperativeHandle:ex,useInsertionEffect:Q1,useLayoutEffect:J1,useMemo:nx,useReducer:Dc,useRef:X1,useState:function(){return Dc(Ii)},useDebugValue:nm,useDeferredValue:function(e){var t=Gt();return Ge===null?t.memoizedState=e:rx(t,Ge.memoizedState,e)},useTransition:function(){var e=Dc(Ii)[0],t=Gt().memoizedState;return[e,t]},useMutableSource:H1,useSyncExternalStore:W1,useId:ox,unstable_isNewReconciler:!1};function sa(e,t){try{var n="",r=t;do n+=tE(r),r=r.return;while(r);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function Mc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function lf(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var TO=typeof WeakMap=="function"?WeakMap:Map;function lx(e,t,n){n=Fn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ul||(Ul=!0,yf=r),lf(e,t)},n}function ux(e,t,n){n=Fn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){lf(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){lf(e,t),typeof r!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function hg(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new TO;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=UO.bind(null,e,t,n),t.then(e,e))}function gg(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function vg(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Fn(-1,1),t.tag=2,Sr(n,t,1))),n.lanes|=1),e)}var RO=Kn.ReactCurrentOwner,wt=!1;function ut(e,t,n,r){t.child=e===null?B1(t,null,n,r):aa(t,e.child,n,r)}function yg(e,t,n,r,o){n=n.render;var a=t.ref;return Zo(t,o),r=Zp(e,t,n,r,a,o),n=em(),e!==null&&!wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Wn(e,t,o)):(Pe&&n&&Bp(t),t.flags|=1,ut(e,t,r,o),t.child)}function bg(e,t,n,r,o){if(e===null){var a=n.type;return typeof a=="function"&&!cm(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,cx(e,t,a,r,o)):(e=pl(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&o)){var i=a.memoizedProps;if(n=n.compare,n=n!==null?n:Oi,n(i,r)&&e.ref===t.ref)return Wn(e,t,o)}return t.flags|=1,e=Or(a,r),e.ref=t.ref,e.return=t,t.child=e}function cx(e,t,n,r,o){if(e!==null){var a=e.memoizedProps;if(Oi(a,r)&&e.ref===t.ref)if(wt=!1,t.pendingProps=r=a,(e.lanes&o)!==0)e.flags&131072&&(wt=!0);else return t.lanes=e.lanes,Wn(e,t,o)}return uf(e,t,n,r,o)}function dx(e,t,n){var r=t.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(Go,Rt),Rt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ee(Go,Rt),Rt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,Ee(Go,Rt),Rt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,Ee(Go,Rt),Rt|=r;return ut(e,t,o,n),t.child}function fx(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function uf(e,t,n,r,o){var a=_t(n)?io:lt.current;return a=ra(t,a),Zo(t,o),n=Zp(e,t,n,r,a,o),r=em(),e!==null&&!wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Wn(e,t,o)):(Pe&&r&&Bp(t),t.flags|=1,ut(e,t,n,o),t.child)}function wg(e,t,n,r,o){if(_t(n)){var a=!0;Pl(t)}else a=!1;if(Zo(t,o),t.stateNode===null)cl(e,t),z1(t,n,r),sf(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var l=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=Vt(c):(c=_t(n)?io:lt.current,c=ra(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof i.getSnapshotBeforeUpdate=="function";f||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||l!==c)&&dg(t,i,r,c),ur=!1;var p=t.memoizedState;i.state=p,Dl(t,r,i,o),l=t.memoizedState,s!==r||p!==l||xt.current||ur?(typeof d=="function"&&(af(t,n,d,r),l=t.memoizedState),(s=ur||cg(t,n,s,r,p,l,c))?(f||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),i.props=r,i.state=l,i.context=c,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,D1(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:rn(t.type,s),i.props=c,f=t.pendingProps,p=i.context,l=n.contextType,typeof l=="object"&&l!==null?l=Vt(l):(l=_t(n)?io:lt.current,l=ra(t,l));var h=n.getDerivedStateFromProps;(d=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==f||p!==l)&&dg(t,i,r,l),ur=!1,p=t.memoizedState,i.state=p,Dl(t,r,i,o);var y=t.memoizedState;s!==f||p!==y||xt.current||ur?(typeof h=="function"&&(af(t,n,h,r),y=t.memoizedState),(c=ur||cg(t,n,c,r,p,y,l)||!1)?(d||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,y,l),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,y,l)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),i.props=r,i.state=y,i.context=l,r=c):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return cf(e,t,n,r,a,o)}function cf(e,t,n,r,o,a){fx(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&ag(t,n,!1),Wn(e,t,a);r=t.stateNode,RO.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=aa(t,e.child,null,a),t.child=aa(t,null,s,a)):ut(e,t,s,a),t.memoizedState=r.state,o&&ag(t,n,!0),t.child}function px(e){var t=e.stateNode;t.pendingContext?og(e,t.pendingContext,t.pendingContext!==t.context):t.context&&og(e,t.context,!1),Yp(e,t.containerInfo)}function xg(e,t,n,r,o){return oa(),Hp(o),t.flags|=256,ut(e,t,n,r),t.child}var df={dehydrated:null,treeContext:null,retryLane:0};function ff(e){return{baseLanes:e,cachePool:null,transitions:null}}function mx(e,t,n){var r=t.pendingProps,o=Le.current,a=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Ee(Le,o&1),e===null)return rf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,a?(r=t.mode,a=t.child,i={mode:"hidden",children:i},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=i):a=Cu(i,r,0,null),e=no(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=ff(n),t.memoizedState=df,e):rm(t,i));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return jO(e,t,i,r,s,o,n);if(a){a=r.fallback,i=t.mode,o=e.child,s=o.sibling;var l={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Or(o,l),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?a=Or(s,a):(a=no(a,i,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,i=e.child.memoizedState,i=i===null?ff(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},a.memoizedState=i,a.childLanes=e.childLanes&~n,t.memoizedState=df,r}return a=e.child,e=a.sibling,r=Or(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function rm(e,t){return t=Cu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Rs(e,t,n,r){return r!==null&&Hp(r),aa(t,e.child,null,n),e=rm(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jO(e,t,n,r,o,a,i){if(n)return t.flags&256?(t.flags&=-257,r=Mc(Error(D(422))),Rs(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=Cu({mode:"visible",children:r.children},o,0,null),a=no(a,o,i,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&aa(t,e.child,null,i),t.child.memoizedState=ff(i),t.memoizedState=df,a);if(!(t.mode&1))return Rs(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(D(419)),r=Mc(a,r,void 0),Rs(e,t,i,r)}if(s=(i&e.childLanes)!==0,wt||s){if(r=Qe,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,Hn(e,o),fn(r,e,o,-1))}return um(),r=Mc(Error(D(421))),Rs(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=HO.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,jt=kr(o.nextSibling),$t=t,Pe=!0,sn=null,e!==null&&(Ft[Bt++]=Mn,Ft[Bt++]=zn,Ft[Bt++]=so,Mn=e.id,zn=e.overflow,so=t),t=rm(t,r.children),t.flags|=4096,t)}function _g(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),of(e.return,t,n)}function zc(e,t,n,r,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function hx(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(ut(e,t,r.children,n),r=Le.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_g(e,n,t);else if(e.tag===19)_g(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ee(Le,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ml(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),zc(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ml(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}zc(t,!0,n,null,a);break;case"together":zc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function cl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),uo|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(D(153));if(t.child!==null){for(e=t.child,n=Or(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Or(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function $O(e,t,n){switch(t.tag){case 3:px(t),oa();break;case 5:U1(t);break;case 1:_t(t.type)&&Pl(t);break;case 4:Yp(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Ee(Ll,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ee(Le,Le.current&1),t.flags|=128,null):n&t.child.childLanes?mx(e,t,n):(Ee(Le,Le.current&1),e=Wn(e,t,n),e!==null?e.sibling:null);Ee(Le,Le.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return hx(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Ee(Le,Le.current),r)break;return null;case 22:case 23:return t.lanes=0,dx(e,t,n)}return Wn(e,t,n)}var gx,pf,vx,yx;gx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pf=function(){};vx=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,eo(Tn.current);var a=null;switch(n){case"input":o=Id(e,o),r=Id(e,r),a=[];break;case"select":o=Me({},o,{value:void 0}),r=Me({},r,{value:void 0}),a=[];break;case"textarea":o=Dd(e,o),r=Dd(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=jl)}zd(n,r);var i;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(wi.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in r){var l=r[c];if(s=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(i in s)!s.hasOwnProperty(i)||l&&l.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in l)l.hasOwnProperty(i)&&s[i]!==l[i]&&(n||(n={}),n[i]=l[i])}else n||(a||(a=[]),a.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(wi.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Oe("scroll",e),a||s===l||(a=[])):(a=a||[]).push(c,l))}n&&(a=a||[]).push("style",n);var c=a;(t.updateQueue=c)&&(t.flags|=4)}};yx=function(e,t,n,r){n!==r&&(t.flags|=4)};function Da(e,t){if(!Pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function at(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function PO(e,t,n){var r=t.pendingProps;switch(Up(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(t),null;case 1:return _t(t.type)&&$l(),at(t),null;case 3:return r=t.stateNode,ia(),Te(xt),Te(lt),Qp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Os(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,sn!==null&&(xf(sn),sn=null))),pf(e,t),at(t),null;case 5:Xp(t);var o=eo(Pi.current);if(n=t.type,e!==null&&t.stateNode!=null)vx(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(D(166));return at(t),null}if(e=eo(Tn.current),Os(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Cn]=t,r[ji]=a,e=(t.mode&1)!==0,n){case"dialog":Oe("cancel",r),Oe("close",r);break;case"iframe":case"object":case"embed":Oe("load",r);break;case"video":case"audio":for(o=0;o<Xa.length;o++)Oe(Xa[o],r);break;case"source":Oe("error",r);break;case"img":case"image":case"link":Oe("error",r),Oe("load",r);break;case"details":Oe("toggle",r);break;case"input":$h(r,a),Oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Oe("invalid",r);break;case"textarea":Ah(r,a),Oe("invalid",r)}zd(n,a),o=null;for(var i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&Es(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Es(r.textContent,s,e),o=["children",""+s]):wi.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&Oe("scroll",r)}switch(n){case"input":ys(r),Ph(r,a,!0);break;case"textarea":ys(r),Ih(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=jl)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Vw(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Cn]=t,e[ji]=r,gx(e,t,!1,!1),t.stateNode=e;e:{switch(i=Fd(n,r),n){case"dialog":Oe("cancel",e),Oe("close",e),o=r;break;case"iframe":case"object":case"embed":Oe("load",e),o=r;break;case"video":case"audio":for(o=0;o<Xa.length;o++)Oe(Xa[o],e);o=r;break;case"source":Oe("error",e),o=r;break;case"img":case"image":case"link":Oe("error",e),Oe("load",e),o=r;break;case"details":Oe("toggle",e),o=r;break;case"input":$h(e,r),o=Id(e,r),Oe("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Me({},r,{value:void 0}),Oe("invalid",e);break;case"textarea":Ah(e,r),o=Dd(e,r),Oe("invalid",e);break;default:o=r}zd(n,o),s=o;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?Kw(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Gw(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&xi(e,l):typeof l=="number"&&xi(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(wi.hasOwnProperty(a)?l!=null&&a==="onScroll"&&Oe("scroll",e):l!=null&&Op(e,a,l,i))}switch(n){case"input":ys(e),Ph(e,r,!1);break;case"textarea":ys(e),Ih(e);break;case"option":r.value!=null&&e.setAttribute("value",""+$r(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Yo(e,!!r.multiple,a,!1):r.defaultValue!=null&&Yo(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=jl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return at(t),null;case 6:if(e&&t.stateNode!=null)yx(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(D(166));if(n=eo(Pi.current),eo(Tn.current),Os(t)){if(r=t.stateNode,n=t.memoizedProps,r[Cn]=t,(a=r.nodeValue!==n)&&(e=$t,e!==null))switch(e.tag){case 3:Es(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Es(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Cn]=t,t.stateNode=r}return at(t),null;case 13:if(Te(Le),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Pe&&jt!==null&&t.mode&1&&!(t.flags&128))L1(),oa(),t.flags|=98560,a=!1;else if(a=Os(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(D(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(D(317));a[Cn]=t}else oa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;at(t),a=!1}else sn!==null&&(xf(sn),sn=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Le.current&1?Ke===0&&(Ke=3):um())),t.updateQueue!==null&&(t.flags|=4),at(t),null);case 4:return ia(),pf(e,t),e===null&&Ti(t.stateNode.containerInfo),at(t),null;case 10:return Gp(t.type._context),at(t),null;case 17:return _t(t.type)&&$l(),at(t),null;case 19:if(Te(Le),a=t.memoizedState,a===null)return at(t),null;if(r=(t.flags&128)!==0,i=a.rendering,i===null)if(r)Da(a,!1);else{if(Ke!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Ml(e),i!==null){for(t.flags|=128,Da(a,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,i=a.alternate,i===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,a.type=i.type,e=i.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ee(Le,Le.current&1|2),t.child}e=e.sibling}a.tail!==null&&Ue()>la&&(t.flags|=128,r=!0,Da(a,!1),t.lanes=4194304)}else{if(!r)if(e=Ml(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Da(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!Pe)return at(t),null}else 2*Ue()-a.renderingStartTime>la&&n!==1073741824&&(t.flags|=128,r=!0,Da(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(n=a.last,n!==null?n.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ue(),t.sibling=null,n=Le.current,Ee(Le,r?n&1|2:n&1),t):(at(t),null);case 22:case 23:return lm(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Rt&1073741824&&(at(t),t.subtreeFlags&6&&(t.flags|=8192)):at(t),null;case 24:return null;case 25:return null}throw Error(D(156,t.tag))}function AO(e,t){switch(Up(t),t.tag){case 1:return _t(t.type)&&$l(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ia(),Te(xt),Te(lt),Qp(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Xp(t),null;case 13:if(Te(Le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(D(340));oa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Te(Le),null;case 4:return ia(),null;case 10:return Gp(t.type._context),null;case 22:case 23:return lm(),null;case 24:return null;default:return null}}var js=!1,it=!1,IO=typeof WeakSet=="function"?WeakSet:Set,G=null;function Vo(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Fe(e,t,r)}else n.current=null}function mf(e,t,n){try{n()}catch(r){Fe(e,t,r)}}var kg=!1;function LO(e,t){if(Xd=Ol,e=_1(),Fp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var i=0,s=-1,l=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||o!==0&&f.nodeType!==3||(s=i+o),f!==a||r!==0&&f.nodeType!==3||(l=i+r),f.nodeType===3&&(i+=f.nodeValue.length),(h=f.firstChild)!==null;)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++c===o&&(s=i),p===a&&++d===r&&(l=i),(h=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=h}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qd={focusedElem:e,selectionRange:n},Ol=!1,G=t;G!==null;)if(t=G,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,G=e;else for(;G!==null;){t=G;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,x=y.memoizedState,v=t.stateNode,m=v.getSnapshotBeforeUpdate(t.elementType===t.type?w:rn(t.type,w),x);v.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(k){Fe(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,G=e;break}G=t.return}return y=kg,kg=!1,y}function ui(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&mf(t,n,a)}o=o.next}while(o!==r)}}function ku(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function hf(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function bx(e){var t=e.alternate;t!==null&&(e.alternate=null,bx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Cn],delete t[ji],delete t[ef],delete t[vO],delete t[yO])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wx(e){return e.tag===5||e.tag===3||e.tag===4}function Sg(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=jl));else if(r!==4&&(e=e.child,e!==null))for(gf(e,t,n),e=e.sibling;e!==null;)gf(e,t,n),e=e.sibling}function vf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(vf(e,t,n),e=e.sibling;e!==null;)vf(e,t,n),e=e.sibling}var Ze=null,on=!1;function nr(e,t,n){for(n=n.child;n!==null;)xx(e,t,n),n=n.sibling}function xx(e,t,n){if(On&&typeof On.onCommitFiberUnmount=="function")try{On.onCommitFiberUnmount(hu,n)}catch{}switch(n.tag){case 5:it||Vo(n,t);case 6:var r=Ze,o=on;Ze=null,nr(e,t,n),Ze=r,on=o,Ze!==null&&(on?(e=Ze,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ze.removeChild(n.stateNode));break;case 18:Ze!==null&&(on?(e=Ze,n=n.stateNode,e.nodeType===8?Pc(e.parentNode,n):e.nodeType===1&&Pc(e,n),Ci(e)):Pc(Ze,n.stateNode));break;case 4:r=Ze,o=on,Ze=n.stateNode.containerInfo,on=!0,nr(e,t,n),Ze=r,on=o;break;case 0:case 11:case 14:case 15:if(!it&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var a=o,i=a.destroy;a=a.tag,i!==void 0&&(a&2||a&4)&&mf(n,t,i),o=o.next}while(o!==r)}nr(e,t,n);break;case 1:if(!it&&(Vo(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Fe(n,t,s)}nr(e,t,n);break;case 21:nr(e,t,n);break;case 22:n.mode&1?(it=(r=it)||n.memoizedState!==null,nr(e,t,n),it=r):nr(e,t,n);break;default:nr(e,t,n)}}function Cg(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new IO),t.forEach(function(r){var o=WO.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function tn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:Ze=s.stateNode,on=!1;break e;case 3:Ze=s.stateNode.containerInfo,on=!0;break e;case 4:Ze=s.stateNode.containerInfo,on=!0;break e}s=s.return}if(Ze===null)throw Error(D(160));xx(a,i,o),Ze=null,on=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(c){Fe(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)_x(t,e),t=t.sibling}function _x(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(tn(t,e),vn(e),r&4){try{ui(3,e,e.return),ku(3,e)}catch(w){Fe(e,e.return,w)}try{ui(5,e,e.return)}catch(w){Fe(e,e.return,w)}}break;case 1:tn(t,e),vn(e),r&512&&n!==null&&Vo(n,n.return);break;case 5:if(tn(t,e),vn(e),r&512&&n!==null&&Vo(n,n.return),e.flags&32){var o=e.stateNode;try{xi(o,"")}catch(w){Fe(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,i=n!==null?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&Hw(o,a),Fd(s,i);var c=Fd(s,a);for(i=0;i<l.length;i+=2){var d=l[i],f=l[i+1];d==="style"?Kw(o,f):d==="dangerouslySetInnerHTML"?Gw(o,f):d==="children"?xi(o,f):Op(o,d,f,c)}switch(s){case"input":Ld(o,a);break;case"textarea":Ww(o,a);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var h=a.value;h!=null?Yo(o,!!a.multiple,h,!1):p!==!!a.multiple&&(a.defaultValue!=null?Yo(o,!!a.multiple,a.defaultValue,!0):Yo(o,!!a.multiple,a.multiple?[]:"",!1))}o[ji]=a}catch(w){Fe(e,e.return,w)}}break;case 6:if(tn(t,e),vn(e),r&4){if(e.stateNode===null)throw Error(D(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(w){Fe(e,e.return,w)}}break;case 3:if(tn(t,e),vn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ci(t.containerInfo)}catch(w){Fe(e,e.return,w)}break;case 4:tn(t,e),vn(e);break;case 13:tn(t,e),vn(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(im=Ue())),r&4&&Cg(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(it=(c=it)||d,tn(t,e),it=c):tn(t,e),vn(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(G=e,d=e.child;d!==null;){for(f=G=d;G!==null;){switch(p=G,h=p.child,p.tag){case 0:case 11:case 14:case 15:ui(4,p,p.return);break;case 1:Vo(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){Fe(r,n,w)}}break;case 5:Vo(p,p.return);break;case 22:if(p.memoizedState!==null){Og(f);continue}}h!==null?(h.return=p,G=h):Og(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{o=f.stateNode,c?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=f.stateNode,l=f.memoizedProps.style,i=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=qw("display",i))}catch(w){Fe(e,e.return,w)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(w){Fe(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:tn(t,e),vn(e),r&4&&Cg(e);break;case 21:break;default:tn(t,e),vn(e)}}function vn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(wx(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(xi(o,""),r.flags&=-33);var a=Sg(e);vf(e,a,o);break;case 3:case 4:var i=r.stateNode.containerInfo,s=Sg(e);gf(e,s,i);break;default:throw Error(D(161))}}catch(l){Fe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function NO(e,t,n){G=e,kx(e)}function kx(e,t,n){for(var r=(e.mode&1)!==0;G!==null;){var o=G,a=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||js;if(!i){var s=o.alternate,l=s!==null&&s.memoizedState!==null||it;s=js;var c=it;if(js=i,(it=l)&&!c)for(G=o;G!==null;)i=G,l=i.child,i.tag===22&&i.memoizedState!==null?Tg(o):l!==null?(l.return=i,G=l):Tg(o);for(;a!==null;)G=a,kx(a),a=a.sibling;G=o,js=s,it=c}Eg(e)}else o.subtreeFlags&8772&&a!==null?(a.return=o,G=a):Eg(e)}}function Eg(e){for(;G!==null;){var t=G;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:it||ku(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!it)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:rn(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&ug(t,a,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ug(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Ci(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}it||t.flags&512&&hf(t)}catch(p){Fe(t,t.return,p)}}if(t===e){G=null;break}if(n=t.sibling,n!==null){n.return=t.return,G=n;break}G=t.return}}function Og(e){for(;G!==null;){var t=G;if(t===e){G=null;break}var n=t.sibling;if(n!==null){n.return=t.return,G=n;break}G=t.return}}function Tg(e){for(;G!==null;){var t=G;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ku(4,t)}catch(l){Fe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){Fe(t,o,l)}}var a=t.return;try{hf(t)}catch(l){Fe(t,a,l)}break;case 5:var i=t.return;try{hf(t)}catch(l){Fe(t,i,l)}}}catch(l){Fe(t,t.return,l)}if(t===e){G=null;break}var s=t.sibling;if(s!==null){s.return=t.return,G=s;break}G=t.return}}var DO=Math.ceil,Bl=Kn.ReactCurrentDispatcher,om=Kn.ReactCurrentOwner,Wt=Kn.ReactCurrentBatchConfig,ve=0,Qe=null,He=null,et=0,Rt=0,Go=Nr(0),Ke=0,Ni=null,uo=0,Su=0,am=0,ci=null,yt=null,im=0,la=1/0,Ln=null,Ul=!1,yf=null,Cr=null,$s=!1,vr=null,Hl=0,di=0,bf=null,dl=-1,fl=0;function ct(){return ve&6?Ue():dl!==-1?dl:dl=Ue()}function Er(e){return e.mode&1?ve&2&&et!==0?et&-et:wO.transition!==null?(fl===0&&(fl=i1()),fl):(e=be,e!==0||(e=window.event,e=e===void 0?16:p1(e.type)),e):1}function fn(e,t,n,r){if(50<di)throw di=0,bf=null,Error(D(185));Gi(e,n,r),(!(ve&2)||e!==Qe)&&(e===Qe&&(!(ve&2)&&(Su|=n),Ke===4&&mr(e,et)),kt(e,r),n===1&&ve===0&&!(t.mode&1)&&(la=Ue()+500,wu&&Dr()))}function kt(e,t){var n=e.callbackNode;wE(e,t);var r=El(e,e===Qe?et:0);if(r===0)n!==null&&Dh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Dh(n),t===1)e.tag===0?bO(Rg.bind(null,e)):P1(Rg.bind(null,e)),hO(function(){!(ve&6)&&Dr()}),n=null;else{switch(s1(r)){case 1:n=Pp;break;case 4:n=o1;break;case 16:n=Cl;break;case 536870912:n=a1;break;default:n=Cl}n=$x(n,Sx.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Sx(e,t){if(dl=-1,fl=0,ve&6)throw Error(D(327));var n=e.callbackNode;if(ea()&&e.callbackNode!==n)return null;var r=El(e,e===Qe?et:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Wl(e,r);else{t=r;var o=ve;ve|=2;var a=Ex();(Qe!==e||et!==t)&&(Ln=null,la=Ue()+500,to(e,t));do try{FO();break}catch(s){Cx(e,s)}while(!0);Vp(),Bl.current=a,ve=o,He!==null?t=0:(Qe=null,et=0,t=Ke)}if(t!==0){if(t===2&&(o=Vd(e),o!==0&&(r=o,t=wf(e,o))),t===1)throw n=Ni,to(e,0),mr(e,r),kt(e,Ue()),n;if(t===6)mr(e,r);else{if(o=e.current.alternate,!(r&30)&&!MO(o)&&(t=Wl(e,r),t===2&&(a=Vd(e),a!==0&&(r=a,t=wf(e,a))),t===1))throw n=Ni,to(e,0),mr(e,r),kt(e,Ue()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(D(345));case 2:qr(e,yt,Ln);break;case 3:if(mr(e,r),(r&130023424)===r&&(t=im+500-Ue(),10<t)){if(El(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ct(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Zd(qr.bind(null,e,yt,Ln),t);break}qr(e,yt,Ln);break;case 4:if(mr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-dn(r);a=1<<i,i=t[i],i>o&&(o=i),r&=~a}if(r=o,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*DO(r/1960))-r,10<r){e.timeoutHandle=Zd(qr.bind(null,e,yt,Ln),r);break}qr(e,yt,Ln);break;case 5:qr(e,yt,Ln);break;default:throw Error(D(329))}}}return kt(e,Ue()),e.callbackNode===n?Sx.bind(null,e):null}function wf(e,t){var n=ci;return e.current.memoizedState.isDehydrated&&(to(e,t).flags|=256),e=Wl(e,t),e!==2&&(t=yt,yt=n,t!==null&&xf(t)),e}function xf(e){yt===null?yt=e:yt.push.apply(yt,e)}function MO(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!mn(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mr(e,t){for(t&=~am,t&=~Su,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dn(t),r=1<<n;e[n]=-1,t&=~r}}function Rg(e){if(ve&6)throw Error(D(327));ea();var t=El(e,0);if(!(t&1))return kt(e,Ue()),null;var n=Wl(e,t);if(e.tag!==0&&n===2){var r=Vd(e);r!==0&&(t=r,n=wf(e,r))}if(n===1)throw n=Ni,to(e,0),mr(e,t),kt(e,Ue()),n;if(n===6)throw Error(D(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,qr(e,yt,Ln),kt(e,Ue()),null}function sm(e,t){var n=ve;ve|=1;try{return e(t)}finally{ve=n,ve===0&&(la=Ue()+500,wu&&Dr())}}function co(e){vr!==null&&vr.tag===0&&!(ve&6)&&ea();var t=ve;ve|=1;var n=Wt.transition,r=be;try{if(Wt.transition=null,be=1,e)return e()}finally{be=r,Wt.transition=n,ve=t,!(ve&6)&&Dr()}}function lm(){Rt=Go.current,Te(Go)}function to(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,mO(n)),He!==null)for(n=He.return;n!==null;){var r=n;switch(Up(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$l();break;case 3:ia(),Te(xt),Te(lt),Qp();break;case 5:Xp(r);break;case 4:ia();break;case 13:Te(Le);break;case 19:Te(Le);break;case 10:Gp(r.type._context);break;case 22:case 23:lm()}n=n.return}if(Qe=e,He=e=Or(e.current,null),et=Rt=t,Ke=0,Ni=null,am=Su=uo=0,yt=ci=null,Zr!==null){for(t=0;t<Zr.length;t++)if(n=Zr[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,a=n.pending;if(a!==null){var i=a.next;a.next=o,r.next=i}n.pending=r}Zr=null}return e}function Cx(e,t){do{var n=He;try{if(Vp(),ll.current=Fl,zl){for(var r=Ne.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}zl=!1}if(lo=0,Xe=Ge=Ne=null,li=!1,Ai=0,om.current=null,n===null||n.return===null){Ke=1,Ni=t,He=null;break}e:{var a=e,i=n.return,s=n,l=t;if(t=et,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=s,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=gg(i);if(h!==null){h.flags&=-257,vg(h,i,s,a,t),h.mode&1&&hg(a,c,t),t=h,l=c;var y=t.updateQueue;if(y===null){var w=new Set;w.add(l),t.updateQueue=w}else y.add(l);break e}else{if(!(t&1)){hg(a,c,t),um();break e}l=Error(D(426))}}else if(Pe&&s.mode&1){var x=gg(i);if(x!==null){!(x.flags&65536)&&(x.flags|=256),vg(x,i,s,a,t),Hp(sa(l,s));break e}}a=l=sa(l,s),Ke!==4&&(Ke=2),ci===null?ci=[a]:ci.push(a),a=i;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var v=lx(a,l,t);lg(a,v);break e;case 1:s=l;var m=a.type,b=a.stateNode;if(!(a.flags&128)&&(typeof m.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Cr===null||!Cr.has(b)))){a.flags|=65536,t&=-t,a.lanes|=t;var k=ux(a,s,t);lg(a,k);break e}}a=a.return}while(a!==null)}Tx(n)}catch(C){t=C,He===n&&n!==null&&(He=n=n.return);continue}break}while(!0)}function Ex(){var e=Bl.current;return Bl.current=Fl,e===null?Fl:e}function um(){(Ke===0||Ke===3||Ke===2)&&(Ke=4),Qe===null||!(uo&268435455)&&!(Su&268435455)||mr(Qe,et)}function Wl(e,t){var n=ve;ve|=2;var r=Ex();(Qe!==e||et!==t)&&(Ln=null,to(e,t));do try{zO();break}catch(o){Cx(e,o)}while(!0);if(Vp(),ve=n,Bl.current=r,He!==null)throw Error(D(261));return Qe=null,et=0,Ke}function zO(){for(;He!==null;)Ox(He)}function FO(){for(;He!==null&&!dE();)Ox(He)}function Ox(e){var t=jx(e.alternate,e,Rt);e.memoizedProps=e.pendingProps,t===null?Tx(e):He=t,om.current=null}function Tx(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=AO(n,t),n!==null){n.flags&=32767,He=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ke=6,He=null;return}}else if(n=PO(n,t,Rt),n!==null){He=n;return}if(t=t.sibling,t!==null){He=t;return}He=t=e}while(t!==null);Ke===0&&(Ke=5)}function qr(e,t,n){var r=be,o=Wt.transition;try{Wt.transition=null,be=1,BO(e,t,n,r)}finally{Wt.transition=o,be=r}return null}function BO(e,t,n,r){do ea();while(vr!==null);if(ve&6)throw Error(D(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(D(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(xE(e,a),e===Qe&&(He=Qe=null,et=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$s||($s=!0,$x(Cl,function(){return ea(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Wt.transition,Wt.transition=null;var i=be;be=1;var s=ve;ve|=4,om.current=null,LO(e,n),_x(n,e),sO(Qd),Ol=!!Xd,Qd=Xd=null,e.current=n,NO(n),fE(),ve=s,be=i,Wt.transition=a}else e.current=n;if($s&&($s=!1,vr=e,Hl=o),a=e.pendingLanes,a===0&&(Cr=null),hE(n.stateNode),kt(e,Ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ul)throw Ul=!1,e=yf,yf=null,e;return Hl&1&&e.tag!==0&&ea(),a=e.pendingLanes,a&1?e===bf?di++:(di=0,bf=e):di=0,Dr(),null}function ea(){if(vr!==null){var e=s1(Hl),t=Wt.transition,n=be;try{if(Wt.transition=null,be=16>e?16:e,vr===null)var r=!1;else{if(e=vr,vr=null,Hl=0,ve&6)throw Error(D(331));var o=ve;for(ve|=4,G=e.current;G!==null;){var a=G,i=a.child;if(G.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(G=c;G!==null;){var d=G;switch(d.tag){case 0:case 11:case 15:ui(8,d,a)}var f=d.child;if(f!==null)f.return=d,G=f;else for(;G!==null;){d=G;var p=d.sibling,h=d.return;if(bx(d),d===c){G=null;break}if(p!==null){p.return=h,G=p;break}G=h}}}var y=a.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var x=w.sibling;w.sibling=null,w=x}while(w!==null)}}G=a}}if(a.subtreeFlags&2064&&i!==null)i.return=a,G=i;else e:for(;G!==null;){if(a=G,a.flags&2048)switch(a.tag){case 0:case 11:case 15:ui(9,a,a.return)}var v=a.sibling;if(v!==null){v.return=a.return,G=v;break e}G=a.return}}var m=e.current;for(G=m;G!==null;){i=G;var b=i.child;if(i.subtreeFlags&2064&&b!==null)b.return=i,G=b;else e:for(i=m;G!==null;){if(s=G,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ku(9,s)}}catch(C){Fe(s,s.return,C)}if(s===i){G=null;break e}var k=s.sibling;if(k!==null){k.return=s.return,G=k;break e}G=s.return}}if(ve=o,Dr(),On&&typeof On.onPostCommitFiberRoot=="function")try{On.onPostCommitFiberRoot(hu,e)}catch{}r=!0}return r}finally{be=n,Wt.transition=t}}return!1}function jg(e,t,n){t=sa(n,t),t=lx(e,t,1),e=Sr(e,t,1),t=ct(),e!==null&&(Gi(e,1,t),kt(e,t))}function Fe(e,t,n){if(e.tag===3)jg(e,e,n);else for(;t!==null;){if(t.tag===3){jg(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Cr===null||!Cr.has(r))){e=sa(n,e),e=ux(t,e,1),t=Sr(t,e,1),e=ct(),t!==null&&(Gi(t,1,e),kt(t,e));break}}t=t.return}}function UO(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ct(),e.pingedLanes|=e.suspendedLanes&n,Qe===e&&(et&n)===n&&(Ke===4||Ke===3&&(et&130023424)===et&&500>Ue()-im?to(e,0):am|=n),kt(e,t)}function Rx(e,t){t===0&&(e.mode&1?(t=xs,xs<<=1,!(xs&130023424)&&(xs=4194304)):t=1);var n=ct();e=Hn(e,t),e!==null&&(Gi(e,t,n),kt(e,n))}function HO(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rx(e,n)}function WO(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(t),Rx(e,n)}var jx;jx=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xt.current)wt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return wt=!1,$O(e,t,n);wt=!!(e.flags&131072)}else wt=!1,Pe&&t.flags&1048576&&A1(t,Il,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;cl(e,t),e=t.pendingProps;var o=ra(t,lt.current);Zo(t,n),o=Zp(null,t,r,e,o,n);var a=em();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_t(r)?(a=!0,Pl(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Kp(t),o.updater=xu,t.stateNode=o,o._reactInternals=t,sf(t,r,e,n),t=cf(null,t,r,!0,a,n)):(t.tag=0,Pe&&a&&Bp(t),ut(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(cl(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=GO(r),e=rn(r,e),o){case 0:t=uf(null,t,r,e,n);break e;case 1:t=wg(null,t,r,e,n);break e;case 11:t=yg(null,t,r,e,n);break e;case 14:t=bg(null,t,r,rn(r.type,e),n);break e}throw Error(D(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:rn(r,o),uf(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:rn(r,o),wg(e,t,r,o,n);case 3:e:{if(px(t),e===null)throw Error(D(387));r=t.pendingProps,a=t.memoizedState,o=a.element,D1(e,t),Dl(t,r,null,n);var i=t.memoizedState;if(r=i.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=sa(Error(D(423)),t),t=xg(e,t,r,n,o);break e}else if(r!==o){o=sa(Error(D(424)),t),t=xg(e,t,r,n,o);break e}else for(jt=kr(t.stateNode.containerInfo.firstChild),$t=t,Pe=!0,sn=null,n=B1(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(oa(),r===o){t=Wn(e,t,n);break e}ut(e,t,r,n)}t=t.child}return t;case 5:return U1(t),e===null&&rf(t),r=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,i=o.children,Jd(r,o)?i=null:a!==null&&Jd(r,a)&&(t.flags|=32),fx(e,t),ut(e,t,i,n),t.child;case 6:return e===null&&rf(t),null;case 13:return mx(e,t,n);case 4:return Yp(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=aa(t,null,r,n):ut(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:rn(r,o),yg(e,t,r,o,n);case 7:return ut(e,t,t.pendingProps,n),t.child;case 8:return ut(e,t,t.pendingProps.children,n),t.child;case 12:return ut(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,i=o.value,Ee(Ll,r._currentValue),r._currentValue=i,a!==null)if(mn(a.value,i)){if(a.children===o.children&&!xt.current){t=Wn(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){i=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=Fn(-1,n&-n),l.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),of(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)i=a.type===t.type?null:a.child;else if(a.tag===18){if(i=a.return,i===null)throw Error(D(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),of(i,n,t),i=a.sibling}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}ut(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Zo(t,n),o=Vt(o),r=r(o),t.flags|=1,ut(e,t,r,n),t.child;case 14:return r=t.type,o=rn(r,t.pendingProps),o=rn(r.type,o),bg(e,t,r,o,n);case 15:return cx(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:rn(r,o),cl(e,t),t.tag=1,_t(r)?(e=!0,Pl(t)):e=!1,Zo(t,n),z1(t,r,o),sf(t,r,o,n),cf(null,t,r,!0,e,n);case 19:return hx(e,t,n);case 22:return dx(e,t,n)}throw Error(D(156,t.tag))};function $x(e,t){return r1(e,t)}function VO(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(e,t,n,r){return new VO(e,t,n,r)}function cm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function GO(e){if(typeof e=="function")return cm(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Rp)return 11;if(e===jp)return 14}return 2}function Or(e,t){var n=e.alternate;return n===null?(n=Ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function pl(e,t,n,r,o,a){var i=2;if(r=e,typeof e=="function")cm(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case No:return no(n.children,o,a,t);case Tp:i=8,o|=8;break;case jd:return e=Ut(12,n,t,o|2),e.elementType=jd,e.lanes=a,e;case $d:return e=Ut(13,n,t,o),e.elementType=$d,e.lanes=a,e;case Pd:return e=Ut(19,n,t,o),e.elementType=Pd,e.lanes=a,e;case Fw:return Cu(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Mw:i=10;break e;case zw:i=9;break e;case Rp:i=11;break e;case jp:i=14;break e;case lr:i=16,r=null;break e}throw Error(D(130,e==null?e:typeof e,""))}return t=Ut(i,n,t,o),t.elementType=e,t.type=r,t.lanes=a,t}function no(e,t,n,r){return e=Ut(7,e,r,t),e.lanes=n,e}function Cu(e,t,n,r){return e=Ut(22,e,r,t),e.elementType=Fw,e.lanes=n,e.stateNode={isHidden:!1},e}function Fc(e,t,n){return e=Ut(6,e,null,t),e.lanes=n,e}function Bc(e,t,n){return t=Ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function qO(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xc(0),this.expirationTimes=xc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xc(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function dm(e,t,n,r,o,a,i,s,l){return e=new qO(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Ut(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kp(a),e}function KO(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Lo,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Px(e){if(!e)return Pr;e=e._reactInternals;e:{if(vo(e)!==e||e.tag!==1)throw Error(D(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_t(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(D(171))}if(e.tag===1){var n=e.type;if(_t(n))return $1(e,n,t)}return t}function Ax(e,t,n,r,o,a,i,s,l){return e=dm(n,r,!0,e,o,a,i,s,l),e.context=Px(null),n=e.current,r=ct(),o=Er(n),a=Fn(r,o),a.callback=t??null,Sr(n,a,o),e.current.lanes=o,Gi(e,o,r),kt(e,r),e}function Eu(e,t,n,r){var o=t.current,a=ct(),i=Er(o);return n=Px(n),t.context===null?t.context=n:t.pendingContext=n,t=Fn(a,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Sr(o,t,i),e!==null&&(fn(e,o,i,a),sl(e,o,i)),i}function Vl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $g(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function fm(e,t){$g(e,t),(e=e.alternate)&&$g(e,t)}var Ix=typeof reportError=="function"?reportError:function(e){console.error(e)};function pm(e){this._internalRoot=e}Ou.prototype.render=pm.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(D(409));Eu(e,t,null,null)};Ou.prototype.unmount=pm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;co(function(){Eu(null,e,null,null)}),t[Un]=null}};function Ou(e){this._internalRoot=e}Ou.prototype.unstable_scheduleHydration=function(e){if(e){var t=c1();e={blockedOn:null,target:e,priority:t};for(var n=0;n<pr.length&&t!==0&&t<pr[n].priority;n++);pr.splice(n,0,e),n===0&&f1(e)}};function mm(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Tu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Pg(){}function YO(e,t,n,r,o){if(o){if(typeof r=="function"){var a=r;r=function(){var c=Vl(i);a.call(c)}}var i=Ax(t,r,e,0,null,!1,!1,"",Pg);return e._reactRootContainer=i,e[Un]=i.current,Ti(e.nodeType===8?e.parentNode:e),co(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=Vl(l);s.call(c)}}var l=dm(e,0,!1,null,null,!1,!1,"",Pg);return e._reactRootContainer=l,e[Un]=l.current,Ti(e.nodeType===8?e.parentNode:e),co(function(){Eu(t,l,n,r)}),l}function Ru(e,t,n,r,o){var a=n._reactRootContainer;if(a){var i=a;if(typeof o=="function"){var s=o;o=function(){var l=Vl(i);s.call(l)}}Eu(t,i,e,o)}else i=YO(n,t,e,o,r);return Vl(i)}l1=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ya(t.pendingLanes);n!==0&&(Ap(t,n|1),kt(t,Ue()),!(ve&6)&&(la=Ue()+500,Dr()))}break;case 13:co(function(){var r=Hn(e,1);if(r!==null){var o=ct();fn(r,e,1,o)}}),fm(e,1)}};Ip=function(e){if(e.tag===13){var t=Hn(e,134217728);if(t!==null){var n=ct();fn(t,e,134217728,n)}fm(e,134217728)}};u1=function(e){if(e.tag===13){var t=Er(e),n=Hn(e,t);if(n!==null){var r=ct();fn(n,e,t,r)}fm(e,t)}};c1=function(){return be};d1=function(e,t){var n=be;try{return be=e,t()}finally{be=n}};Ud=function(e,t,n){switch(t){case"input":if(Ld(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=bu(r);if(!o)throw Error(D(90));Uw(r),Ld(r,o)}}}break;case"textarea":Ww(e,n);break;case"select":t=n.value,t!=null&&Yo(e,!!n.multiple,t,!1)}};Qw=sm;Jw=co;var XO={usingClientEntryPoint:!1,Events:[Ki,Fo,bu,Yw,Xw,sm]},Ma={findFiberByHostInstance:Jr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},QO={bundleType:Ma.bundleType,version:Ma.version,rendererPackageName:Ma.rendererPackageName,rendererConfig:Ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=t1(e),e===null?null:e.stateNode},findFiberByHostInstance:Ma.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ps=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ps.isDisabled&&Ps.supportsFiber)try{hu=Ps.inject(QO),On=Ps}catch{}}It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=XO;It.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mm(t))throw Error(D(200));return KO(e,t,null,n)};It.createRoot=function(e,t){if(!mm(e))throw Error(D(299));var n=!1,r="",o=Ix;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=dm(e,1,!1,null,null,n,!1,r,o),e[Un]=t.current,Ti(e.nodeType===8?e.parentNode:e),new pm(t)};It.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(D(188)):(e=Object.keys(e).join(","),Error(D(268,e)));return e=t1(t),e=e===null?null:e.stateNode,e};It.flushSync=function(e){return co(e)};It.hydrate=function(e,t,n){if(!Tu(t))throw Error(D(200));return Ru(null,e,t,!0,n)};It.hydrateRoot=function(e,t,n){if(!mm(e))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,o=!1,a="",i=Ix;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Ax(t,null,e,1,n??null,o,!1,a,i),e[Un]=t.current,Ti(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ou(t)};It.render=function(e,t,n){if(!Tu(t))throw Error(D(200));return Ru(null,e,t,!1,n)};It.unmountComponentAtNode=function(e){if(!Tu(e))throw Error(D(40));return e._reactRootContainer?(co(function(){Ru(null,null,e,!1,function(){e._reactRootContainer=null,e[Un]=null})}),!0):!1};It.unstable_batchedUpdates=sm;It.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Tu(n))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return Ru(e,t,n,!1,r)};It.version="18.2.0-next-9e3b772b8-20220608";function Lx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lx)}catch(e){console.error(e)}}Lx(),Aw.exports=It;var ju=Aw.exports;const qo=ho(ju);var Ag=ju;Td.createRoot=Ag.createRoot,Td.hydrateRoot=Ag.hydrateRoot;var Nx={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var a="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(a=o(a,r(s)))}return a}function r(a){if(typeof a=="string"||typeof a=="number")return a;if(typeof a!="object")return"";if(Array.isArray(a))return n.apply(null,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var i="";for(var s in a)t.call(a,s)&&a[s]&&(i=o(i,s));return i}function o(a,i){return i?a?a+" "+i:a+i:a}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Nx);var Dx=Nx.exports;const X=ho(Dx);function _f(){return _f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_f.apply(this,arguments)}function Mx(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Ig(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function JO(e){var t=ZO(e,"string");return typeof t=="symbol"?t:String(t)}function ZO(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function eT(e,t,n){var r=g.useRef(e!==void 0),o=g.useState(t),a=o[0],i=o[1],s=e!==void 0,l=r.current;return r.current=s,!s&&l&&a!==t&&i(t),[s?e:a,g.useCallback(function(c){for(var d=arguments.length,f=new Array(d>1?d-1:0),p=1;p<d;p++)f[p-1]=arguments[p];n&&n.apply(void 0,[c].concat(f)),i(c)},[n])]}function tT(e,t){return Object.keys(t).reduce(function(n,r){var o,a=n,i=a[Ig(r)],s=a[r],l=Mx(a,[Ig(r),r].map(JO)),c=t[r],d=eT(s,i,e[c]),f=d[0],p=d[1];return _f({},l,(o={},o[r]=f,o[c]=p,o))},e)}function kf(e,t){return kf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},kf(e,t)}function nT(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,kf(e,t)}const zx=["xxl","xl","lg","md","sm","xs"],Fx="xs",$u=g.createContext({prefixes:{},breakpoints:zx,minBreakpoint:Fx});function de(e,t){const{prefixes:n}=g.useContext($u);return e||n[t]||t}function Bx(){const{breakpoints:e}=g.useContext($u);return e}function Ux(){const{minBreakpoint:e}=g.useContext($u);return e}function Hx(){const{dir:e}=g.useContext($u);return e==="rtl"}function Xi(e){return e&&e.ownerDocument||document}function rT(e){var t=Xi(e);return t&&t.defaultView||window}function oT(e,t){return rT(e).getComputedStyle(e,t)}var aT=/([A-Z])/g;function iT(e){return e.replace(aT,"-$1").toLowerCase()}var sT=/^ms-/;function As(e){return iT(e).replace(sT,"-ms-")}var lT=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function uT(e){return!!(e&&lT.test(e))}function ro(e,t){var n="",r="";if(typeof t=="string")return e.style.getPropertyValue(As(t))||oT(e).getPropertyValue(As(t));Object.keys(t).forEach(function(o){var a=t[o];!a&&a!==0?e.style.removeProperty(As(o)):uT(o)?r+=o+"("+a+") ":n+=As(o)+": "+a+";"}),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n}var Wx={exports:{}},cT="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",dT=cT,fT=dT;function Vx(){}function Gx(){}Gx.resetWarningCache=Vx;var pT=function(){function e(r,o,a,i,s,l){if(l!==fT){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Gx,resetWarningCache:Vx};return n.PropTypes=n,n};Wx.exports=pT();var yo=Wx.exports;const u=ho(yo),Lg={disabled:!1},qx=q.createContext(null);var mT=function(t){return t.scrollTop},Qa="unmounted",Kr="exited",cr="entering",Xr="entered",Sf="exiting",Yn=function(e){nT(t,e);function t(r,o){var a;a=e.call(this,r,o)||this;var i=o,s=i&&!i.isMounting?r.enter:r.appear,l;return a.appearStatus=null,r.in?s?(l=Kr,a.appearStatus=cr):l=Xr:r.unmountOnExit||r.mountOnEnter?l=Qa:l=Kr,a.state={status:l},a.nextCallback=null,a}t.getDerivedStateFromProps=function(o,a){var i=o.in;return i&&a.status===Qa?{status:Kr}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(o){var a=null;if(o!==this.props){var i=this.state.status;this.props.in?i!==cr&&i!==Xr&&(a=cr):(i===cr||i===Xr)&&(a=Sf)}this.updateStatus(!1,a)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var o=this.props.timeout,a,i,s;return a=i=s=o,o!=null&&typeof o!="number"&&(a=o.exit,i=o.enter,s=o.appear!==void 0?o.appear:i),{exit:a,enter:i,appear:s}},n.updateStatus=function(o,a){if(o===void 0&&(o=!1),a!==null)if(this.cancelNextCallback(),a===cr){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:qo.findDOMNode(this);i&&mT(i)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Kr&&this.setState({status:Qa})},n.performEnter=function(o){var a=this,i=this.props.enter,s=this.context?this.context.isMounting:o,l=this.props.nodeRef?[s]:[qo.findDOMNode(this),s],c=l[0],d=l[1],f=this.getTimeouts(),p=s?f.appear:f.enter;if(!o&&!i||Lg.disabled){this.safeSetState({status:Xr},function(){a.props.onEntered(c)});return}this.props.onEnter(c,d),this.safeSetState({status:cr},function(){a.props.onEntering(c,d),a.onTransitionEnd(p,function(){a.safeSetState({status:Xr},function(){a.props.onEntered(c,d)})})})},n.performExit=function(){var o=this,a=this.props.exit,i=this.getTimeouts(),s=this.props.nodeRef?void 0:qo.findDOMNode(this);if(!a||Lg.disabled){this.safeSetState({status:Kr},function(){o.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:Sf},function(){o.props.onExiting(s),o.onTransitionEnd(i.exit,function(){o.safeSetState({status:Kr},function(){o.props.onExited(s)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(o,a){a=this.setNextCallback(a),this.setState(o,a)},n.setNextCallback=function(o){var a=this,i=!0;return this.nextCallback=function(s){i&&(i=!1,a.nextCallback=null,o(s))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},n.onTransitionEnd=function(o,a){this.setNextCallback(a);var i=this.props.nodeRef?this.props.nodeRef.current:qo.findDOMNode(this),s=o==null&&!this.props.addEndListener;if(!i||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],c=l[0],d=l[1];this.props.addEndListener(c,d)}o!=null&&setTimeout(this.nextCallback,o)},n.render=function(){var o=this.state.status;if(o===Qa)return null;var a=this.props,i=a.children;a.in,a.mountOnEnter,a.unmountOnExit,a.appear,a.enter,a.exit,a.timeout,a.addEndListener,a.onEnter,a.onEntering,a.onEntered,a.onExit,a.onExiting,a.onExited,a.nodeRef;var s=Mx(a,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return q.createElement(qx.Provider,{value:null},typeof i=="function"?i(o,s):q.cloneElement(q.Children.only(i),s))},t}(q.Component);Yn.contextType=qx;Yn.propTypes={};function Oo(){}Yn.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Oo,onEntering:Oo,onEntered:Oo,onExit:Oo,onExiting:Oo,onExited:Oo};Yn.UNMOUNTED=Qa;Yn.EXITED=Kr;Yn.ENTERING=cr;Yn.ENTERED=Xr;Yn.EXITING=Sf;const _a=!!(typeof window<"u"&&window.document&&window.document.createElement);var Cf=!1,Ef=!1;try{var Uc={get passive(){return Cf=!0},get once(){return Ef=Cf=!0}};_a&&(window.addEventListener("test",Uc,Uc),window.removeEventListener("test",Uc,!0))}catch{}function hm(e,t,n,r){if(r&&typeof r!="boolean"&&!Ef){var o=r.once,a=r.capture,i=n;!Ef&&o&&(i=n.__once||function s(l){this.removeEventListener(t,s,a),n.call(this,l)},n.__once=i),e.addEventListener(t,i,Cf?r:a)}e.addEventListener(t,n,r)}function Of(e,t,n,r){var o=r&&typeof r!="boolean"?r.capture:r;e.removeEventListener(t,n,o),n.__once&&e.removeEventListener(t,n.__once,o)}function yr(e,t,n,r){return hm(e,t,n,r),function(){Of(e,t,n,r)}}function hT(e,t,n,r){if(r===void 0&&(r=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent(t,n,r),e.dispatchEvent(o)}}function gT(e){var t=ro(e,"transitionDuration")||"",n=t.indexOf("ms")===-1?1e3:1;return parseFloat(t)*n}function vT(e,t,n){n===void 0&&(n=5);var r=!1,o=setTimeout(function(){r||hT(e,"transitionend",!0)},t+n),a=yr(e,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(o),a()}}function Kx(e,t,n,r){n==null&&(n=gT(e)||0);var o=vT(e,n,r),a=yr(e,"transitionend",t);return function(){o(),a()}}function Ng(e,t){const n=ro(e,t)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function yT(e,t){const n=Ng(e,"transitionDuration"),r=Ng(e,"transitionDelay"),o=Kx(e,a=>{a.target===e&&(o(),t(a))},n+r)}function bT(e){e.offsetHeight}const Dg=e=>!e||typeof e=="function"?e:t=>{e.current=t};function wT(e,t){const n=Dg(e),r=Dg(t);return o=>{n&&n(o),r&&r(o)}}function bo(e,t){return g.useMemo(()=>wT(e,t),[e,t])}function xT(e){return e&&"setState"in e?qo.findDOMNode(e):e??null}const _T=q.forwardRef(({onEnter:e,onEntering:t,onEntered:n,onExit:r,onExiting:o,onExited:a,addEndListener:i,children:s,childRef:l,...c},d)=>{const f=g.useRef(null),p=bo(f,l),h=_=>{p(xT(_))},y=_=>E=>{_&&f.current&&_(f.current,E)},w=g.useCallback(y(e),[e]),x=g.useCallback(y(t),[t]),v=g.useCallback(y(n),[n]),m=g.useCallback(y(r),[r]),b=g.useCallback(y(o),[o]),k=g.useCallback(y(a),[a]),C=g.useCallback(y(i),[i]);return S.jsx(Yn,{ref:d,...c,onEnter:w,onEntered:v,onEntering:x,onExit:m,onExited:k,onExiting:b,addEndListener:C,nodeRef:f,children:typeof s=="function"?(_,E)=>s(_,{...E,ref:h}):q.cloneElement(s,{ref:h})})});function kT(e){const t=g.useRef(e);return g.useEffect(()=>{t.current=e},[e]),t}function qe(e){const t=kT(e);return g.useCallback(function(...n){return t.current&&t.current(...n)},[t])}const gm=e=>g.forwardRef((t,n)=>S.jsx("div",{...t,ref:n,className:X(t.className,e)}));function Yx(){return g.useState(null)}function ST(e,t,n,r=!1){const o=qe(n);g.useEffect(()=>{const a=typeof e=="function"?e():e;return a.addEventListener(t,o,r),()=>a.removeEventListener(t,o,r)},[e])}function Xx(){const e=g.useRef(!0),t=g.useRef(()=>e.current);return g.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),t.current}function Qx(e){const t=g.useRef(null);return g.useEffect(()=>{t.current=e}),t.current}const CT=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",ET=typeof document<"u",Tf=ET||CT?g.useLayoutEffect:g.useEffect,OT=["as","disabled"];function TT(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function RT(e){return!e||e.trim()==="#"}function vm({tagName:e,disabled:t,href:n,target:r,rel:o,role:a,onClick:i,tabIndex:s=0,type:l}){e||(n!=null||r!=null||o!=null?e="a":e="button");const c={tagName:e};if(e==="button")return[{type:l||"button",disabled:t},c];const d=p=>{if((t||e==="a"&&RT(n))&&p.preventDefault(),t){p.stopPropagation();return}i==null||i(p)},f=p=>{p.key===" "&&(p.preventDefault(),d(p))};return e==="a"&&(n||(n="#"),t&&(n=void 0)),[{role:a??"button",disabled:void 0,tabIndex:t?void 0:s,href:n,target:e==="a"?r:void 0,"aria-disabled":t||void 0,rel:e==="a"?o:void 0,onClick:d,onKeyDown:f},c]}const Jx=g.forwardRef((e,t)=>{let{as:n,disabled:r}=e,o=TT(e,OT);const[a,{tagName:i}]=vm(Object.assign({tagName:n,disabled:r},o));return S.jsx(i,Object.assign({},o,a,{ref:t}))});Jx.displayName="Button";const jT=["onKeyDown"];function $T(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function PT(e){return!e||e.trim()==="#"}const Zx=g.forwardRef((e,t)=>{let{onKeyDown:n}=e,r=$T(e,jT);const[o]=vm(Object.assign({tagName:"a"},r)),a=qe(i=>{o.onKeyDown(i),n==null||n(i)});return PT(r.href)||r.role==="button"?S.jsx("a",Object.assign({ref:t},r,o,{onKeyDown:a})):S.jsx("a",Object.assign({ref:t},r,{onKeyDown:n}))});Zx.displayName="Anchor";const AT={[cr]:"show",[Xr]:"show"},ym=g.forwardRef(({className:e,children:t,transitionClasses:n={},onEnter:r,...o},a)=>{const i={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...o},s=g.useCallback((l,c)=>{bT(l),r==null||r(l,c)},[r]);return S.jsx(_T,{ref:a,addEndListener:yT,...i,onEnter:s,childRef:t.ref,children:(l,c)=>g.cloneElement(t,{...c,className:X("fade",e,t.props.className,AT[l],n[l])})})});ym.displayName="Fade";const IT={"aria-label":u.string,onClick:u.func,variant:u.oneOf(["white"])},bm=g.forwardRef(({className:e,variant:t,"aria-label":n="Close",...r},o)=>S.jsx("button",{ref:o,type:"button",className:X("btn-close",t&&`btn-close-${t}`,e),"aria-label":n,...r}));bm.displayName="CloseButton";bm.propTypes=IT;const qt=g.forwardRef(({as:e,bsPrefix:t,variant:n="primary",size:r,active:o=!1,disabled:a=!1,className:i,...s},l)=>{const c=de(t,"btn"),[d,{tagName:f}]=vm({tagName:e,disabled:a,...s}),p=f;return S.jsx(p,{...d,...s,ref:l,disabled:a,className:X(i,c,o&&"active",n&&`${c}-${n}`,r&&`${c}-${r}`,s.href&&a&&"disabled")})});qt.displayName="Button";const wm=g.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},o)=>(t=de(t,"card-body"),S.jsx(n,{ref:o,className:X(e,t),...r})));wm.displayName="CardBody";const e_=g.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},o)=>(t=de(t,"card-footer"),S.jsx(n,{ref:o,className:X(e,t),...r})));e_.displayName="CardFooter";const t_=g.createContext(null);t_.displayName="CardHeaderContext";const n_=g.forwardRef(({bsPrefix:e,className:t,as:n="div",...r},o)=>{const a=de(e,"card-header"),i=g.useMemo(()=>({cardHeaderBsPrefix:a}),[a]);return S.jsx(t_.Provider,{value:i,children:S.jsx(n,{ref:o,...r,className:X(t,a)})})});n_.displayName="CardHeader";const r_=g.forwardRef(({bsPrefix:e,className:t,variant:n,as:r="img",...o},a)=>{const i=de(e,"card-img");return S.jsx(r,{ref:a,className:X(n?`${i}-${n}`:i,t),...o})});r_.displayName="CardImg";const o_=g.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},o)=>(t=de(t,"card-img-overlay"),S.jsx(n,{ref:o,className:X(e,t),...r})));o_.displayName="CardImgOverlay";const a_=g.forwardRef(({className:e,bsPrefix:t,as:n="a",...r},o)=>(t=de(t,"card-link"),S.jsx(n,{ref:o,className:X(e,t),...r})));a_.displayName="CardLink";const LT=gm("h6"),i_=g.forwardRef(({className:e,bsPrefix:t,as:n=LT,...r},o)=>(t=de(t,"card-subtitle"),S.jsx(n,{ref:o,className:X(e,t),...r})));i_.displayName="CardSubtitle";const s_=g.forwardRef(({className:e,bsPrefix:t,as:n="p",...r},o)=>(t=de(t,"card-text"),S.jsx(n,{ref:o,className:X(e,t),...r})));s_.displayName="CardText";const NT=gm("h5"),l_=g.forwardRef(({className:e,bsPrefix:t,as:n=NT,...r},o)=>(t=de(t,"card-title"),S.jsx(n,{ref:o,className:X(e,t),...r})));l_.displayName="CardTitle";const u_=g.forwardRef(({bsPrefix:e,className:t,bg:n,text:r,border:o,body:a=!1,children:i,as:s="div",...l},c)=>{const d=de(e,"card");return S.jsx(s,{ref:c,...l,className:X(t,d,n&&`bg-${n}`,r&&`text-${r}`,o&&`border-${o}`),children:a?S.jsx(wm,{children:i}):i})});u_.displayName="Card";const Hc=Object.assign(u_,{Img:r_,Title:l_,Subtitle:i_,Body:wm,Link:a_,Text:s_,Header:n_,Footer:e_,ImgOverlay:o_});function DT(e){const t=g.useRef(e);return t.current=e,t}function c_(e){const t=DT(e);g.useEffect(()=>()=>t.current(),[])}function MT(e,t){let n=0;return g.Children.map(e,r=>g.isValidElement(r)?t(r,n++):r)}function zT(e,t){return g.Children.toArray(e).some(n=>g.isValidElement(n)&&n.type===t)}function FT({as:e,bsPrefix:t,className:n,...r}){t=de(t,"col");const o=Bx(),a=Ux(),i=[],s=[];return o.forEach(l=>{const c=r[l];delete r[l];let d,f,p;typeof c=="object"&&c!=null?{span:d,offset:f,order:p}=c:d=c;const h=l!==a?`-${l}`:"";d&&i.push(d===!0?`${t}${h}`:`${t}${h}-${d}`),p!=null&&s.push(`order${h}-${p}`),f!=null&&s.push(`offset${h}-${f}`)}),[{...r,className:X(n,...i,...s)},{as:e,bsPrefix:t,spans:i}]}const d_=g.forwardRef((e,t)=>{const[{className:n,...r},{as:o="div",bsPrefix:a,spans:i}]=FT(e);return S.jsx(o,{...r,ref:t,className:X(n,!i.length&&a)})});d_.displayName="Col";const Qi=g.forwardRef(({bsPrefix:e,fluid:t=!1,as:n="div",className:r,...o},a)=>{const i=de(e,"container"),s=typeof t=="string"?`-${t}`:"-fluid";return S.jsx(n,{ref:a,...o,className:X(r,t?`${i}${s}`:i)})});Qi.displayName="Container";var BT=Function.prototype.bind.call(Function.prototype.call,[].slice);function dr(e,t){return BT(e.querySelectorAll(t))}function UT(e,t,n){const r=g.useRef(e!==void 0),[o,a]=g.useState(t),i=e!==void 0,s=r.current;return r.current=i,!i&&s&&o!==t&&a(t),[i?e:o,g.useCallback((...l)=>{const[c,...d]=l;let f=n==null?void 0:n(c,...d);return a(c),f},[n])]}function HT(){const[,e]=g.useReducer(t=>!t,!1);return e}const Pu=g.createContext(null);var Mg=Object.prototype.hasOwnProperty;function zg(e,t,n){for(n of e.keys())if(fi(n,t))return n}function fi(e,t){var n,r,o;if(e===t)return!0;if(e&&t&&(n=e.constructor)===t.constructor){if(n===Date)return e.getTime()===t.getTime();if(n===RegExp)return e.toString()===t.toString();if(n===Array){if((r=e.length)===t.length)for(;r--&&fi(e[r],t[r]););return r===-1}if(n===Set){if(e.size!==t.size)return!1;for(r of e)if(o=r,o&&typeof o=="object"&&(o=zg(t,o),!o)||!t.has(o))return!1;return!0}if(n===Map){if(e.size!==t.size)return!1;for(r of e)if(o=r[0],o&&typeof o=="object"&&(o=zg(t,o),!o)||!fi(r[1],t.get(o)))return!1;return!0}if(n===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(n===DataView){if((r=e.byteLength)===t.byteLength)for(;r--&&e.getInt8(r)===t.getInt8(r););return r===-1}if(ArrayBuffer.isView(e)){if((r=e.byteLength)===t.byteLength)for(;r--&&e[r]===t[r];);return r===-1}if(!n||typeof e=="object"){r=0;for(n in e)if(Mg.call(e,n)&&++r&&!Mg.call(t,n)||!(n in t)||!fi(e[n],t[n]))return!1;return Object.keys(t).length===r}}return e!==e&&t!==t}function WT(e){const t=Xx();return[e[0],g.useCallback(n=>{if(t())return e[1](n)},[t,e[1]])]}var St="top",Kt="bottom",Yt="right",Ct="left",xm="auto",Ji=[St,Kt,Yt,Ct],ua="start",Di="end",VT="clippingParents",f_="viewport",za="popper",GT="reference",Fg=Ji.reduce(function(e,t){return e.concat([t+"-"+ua,t+"-"+Di])},[]),p_=[].concat(Ji,[xm]).reduce(function(e,t){return e.concat([t,t+"-"+ua,t+"-"+Di])},[]),qT="beforeRead",KT="read",YT="afterRead",XT="beforeMain",QT="main",JT="afterMain",ZT="beforeWrite",eR="write",tR="afterWrite",nR=[qT,KT,YT,XT,QT,JT,ZT,eR,tR];function Rn(e){return e.split("-")[0]}function At(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function fo(e){var t=At(e).Element;return e instanceof t||e instanceof Element}function jn(e){var t=At(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function _m(e){if(typeof ShadowRoot>"u")return!1;var t=At(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var oo=Math.max,Gl=Math.min,ca=Math.round;function Rf(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function m_(){return!/^((?!chrome|android).)*safari/i.test(Rf())}function da(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),o=1,a=1;t&&jn(e)&&(o=e.offsetWidth>0&&ca(r.width)/e.offsetWidth||1,a=e.offsetHeight>0&&ca(r.height)/e.offsetHeight||1);var i=fo(e)?At(e):window,s=i.visualViewport,l=!m_()&&n,c=(r.left+(l&&s?s.offsetLeft:0))/o,d=(r.top+(l&&s?s.offsetTop:0))/a,f=r.width/o,p=r.height/a;return{width:f,height:p,top:d,right:c+f,bottom:d+p,left:c,x:c,y:d}}function km(e){var t=da(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function h_(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&_m(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Ar(e){return e?(e.nodeName||"").toLowerCase():null}function Vn(e){return At(e).getComputedStyle(e)}function rR(e){return["table","td","th"].indexOf(Ar(e))>=0}function Mr(e){return((fo(e)?e.ownerDocument:e.document)||window.document).documentElement}function Au(e){return Ar(e)==="html"?e:e.assignedSlot||e.parentNode||(_m(e)?e.host:null)||Mr(e)}function Bg(e){return!jn(e)||Vn(e).position==="fixed"?null:e.offsetParent}function oR(e){var t=/firefox/i.test(Rf()),n=/Trident/i.test(Rf());if(n&&jn(e)){var r=Vn(e);if(r.position==="fixed")return null}var o=Au(e);for(_m(o)&&(o=o.host);jn(o)&&["html","body"].indexOf(Ar(o))<0;){var a=Vn(o);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return o;o=o.parentNode}return null}function Zi(e){for(var t=At(e),n=Bg(e);n&&rR(n)&&Vn(n).position==="static";)n=Bg(n);return n&&(Ar(n)==="html"||Ar(n)==="body"&&Vn(n).position==="static")?t:n||oR(e)||t}function Sm(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function pi(e,t,n){return oo(e,Gl(t,n))}function aR(e,t,n){var r=pi(e,t,n);return r>n?n:r}function g_(){return{top:0,right:0,bottom:0,left:0}}function v_(e){return Object.assign({},g_(),e)}function y_(e,t){return t.reduce(function(n,r){return n[r]=e,n},{})}var iR=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,v_(typeof t!="number"?t:y_(t,Ji))};function sR(e){var t,n=e.state,r=e.name,o=e.options,a=n.elements.arrow,i=n.modifiersData.popperOffsets,s=Rn(n.placement),l=Sm(s),c=[Ct,Yt].indexOf(s)>=0,d=c?"height":"width";if(!(!a||!i)){var f=iR(o.padding,n),p=km(a),h=l==="y"?St:Ct,y=l==="y"?Kt:Yt,w=n.rects.reference[d]+n.rects.reference[l]-i[l]-n.rects.popper[d],x=i[l]-n.rects.reference[l],v=Zi(a),m=v?l==="y"?v.clientHeight||0:v.clientWidth||0:0,b=w/2-x/2,k=f[h],C=m-p[d]-f[y],_=m/2-p[d]/2+b,E=pi(k,_,C),O=l;n.modifiersData[r]=(t={},t[O]=E,t.centerOffset=E-_,t)}}function lR(e){var t=e.state,n=e.options,r=n.element,o=r===void 0?"[data-popper-arrow]":r;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||h_(t.elements.popper,o)&&(t.elements.arrow=o))}const uR={name:"arrow",enabled:!0,phase:"main",fn:sR,effect:lR,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function fa(e){return e.split("-")[1]}var cR={top:"auto",right:"auto",bottom:"auto",left:"auto"};function dR(e,t){var n=e.x,r=e.y,o=t.devicePixelRatio||1;return{x:ca(n*o)/o||0,y:ca(r*o)/o||0}}function Ug(e){var t,n=e.popper,r=e.popperRect,o=e.placement,a=e.variation,i=e.offsets,s=e.position,l=e.gpuAcceleration,c=e.adaptive,d=e.roundOffsets,f=e.isFixed,p=i.x,h=p===void 0?0:p,y=i.y,w=y===void 0?0:y,x=typeof d=="function"?d({x:h,y:w}):{x:h,y:w};h=x.x,w=x.y;var v=i.hasOwnProperty("x"),m=i.hasOwnProperty("y"),b=Ct,k=St,C=window;if(c){var _=Zi(n),E="clientHeight",O="clientWidth";if(_===At(n)&&(_=Mr(n),Vn(_).position!=="static"&&s==="absolute"&&(E="scrollHeight",O="scrollWidth")),_=_,o===St||(o===Ct||o===Yt)&&a===Di){k=Kt;var A=f&&_===C&&C.visualViewport?C.visualViewport.height:_[E];w-=A-r.height,w*=l?1:-1}if(o===Ct||(o===St||o===Kt)&&a===Di){b=Yt;var $=f&&_===C&&C.visualViewport?C.visualViewport.width:_[O];h-=$-r.width,h*=l?1:-1}}var I=Object.assign({position:s},c&&cR),B=d===!0?dR({x:h,y:w},At(n)):{x:h,y:w};if(h=B.x,w=B.y,l){var H;return Object.assign({},I,(H={},H[k]=m?"0":"",H[b]=v?"0":"",H.transform=(C.devicePixelRatio||1)<=1?"translate("+h+"px, "+w+"px)":"translate3d("+h+"px, "+w+"px, 0)",H))}return Object.assign({},I,(t={},t[k]=m?w+"px":"",t[b]=v?h+"px":"",t.transform="",t))}function fR(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=r===void 0?!0:r,a=n.adaptive,i=a===void 0?!0:a,s=n.roundOffsets,l=s===void 0?!0:s,c={placement:Rn(t.placement),variation:fa(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Ug(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ug(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const pR={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:fR,data:{}};var Is={passive:!0};function mR(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,a=o===void 0?!0:o,i=r.resize,s=i===void 0?!0:i,l=At(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&c.forEach(function(d){d.addEventListener("scroll",n.update,Is)}),s&&l.addEventListener("resize",n.update,Is),function(){a&&c.forEach(function(d){d.removeEventListener("scroll",n.update,Is)}),s&&l.removeEventListener("resize",n.update,Is)}}const hR={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:mR,data:{}};var gR={left:"right",right:"left",bottom:"top",top:"bottom"};function ml(e){return e.replace(/left|right|bottom|top/g,function(t){return gR[t]})}var vR={start:"end",end:"start"};function Hg(e){return e.replace(/start|end/g,function(t){return vR[t]})}function Cm(e){var t=At(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Em(e){return da(Mr(e)).left+Cm(e).scrollLeft}function yR(e,t){var n=At(e),r=Mr(e),o=n.visualViewport,a=r.clientWidth,i=r.clientHeight,s=0,l=0;if(o){a=o.width,i=o.height;var c=m_();(c||!c&&t==="fixed")&&(s=o.offsetLeft,l=o.offsetTop)}return{width:a,height:i,x:s+Em(e),y:l}}function bR(e){var t,n=Mr(e),r=Cm(e),o=(t=e.ownerDocument)==null?void 0:t.body,a=oo(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),i=oo(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+Em(e),l=-r.scrollTop;return Vn(o||n).direction==="rtl"&&(s+=oo(n.clientWidth,o?o.clientWidth:0)-a),{width:a,height:i,x:s,y:l}}function Om(e){var t=Vn(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function b_(e){return["html","body","#document"].indexOf(Ar(e))>=0?e.ownerDocument.body:jn(e)&&Om(e)?e:b_(Au(e))}function mi(e,t){var n;t===void 0&&(t=[]);var r=b_(e),o=r===((n=e.ownerDocument)==null?void 0:n.body),a=At(r),i=o?[a].concat(a.visualViewport||[],Om(r)?r:[]):r,s=t.concat(i);return o?s:s.concat(mi(Au(i)))}function jf(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function wR(e,t){var n=da(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function Wg(e,t,n){return t===f_?jf(yR(e,n)):fo(t)?wR(t,n):jf(bR(Mr(e)))}function xR(e){var t=mi(Au(e)),n=["absolute","fixed"].indexOf(Vn(e).position)>=0,r=n&&jn(e)?Zi(e):e;return fo(r)?t.filter(function(o){return fo(o)&&h_(o,r)&&Ar(o)!=="body"}):[]}function _R(e,t,n,r){var o=t==="clippingParents"?xR(e):[].concat(t),a=[].concat(o,[n]),i=a[0],s=a.reduce(function(l,c){var d=Wg(e,c,r);return l.top=oo(d.top,l.top),l.right=Gl(d.right,l.right),l.bottom=Gl(d.bottom,l.bottom),l.left=oo(d.left,l.left),l},Wg(e,i,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function w_(e){var t=e.reference,n=e.element,r=e.placement,o=r?Rn(r):null,a=r?fa(r):null,i=t.x+t.width/2-n.width/2,s=t.y+t.height/2-n.height/2,l;switch(o){case St:l={x:i,y:t.y-n.height};break;case Kt:l={x:i,y:t.y+t.height};break;case Yt:l={x:t.x+t.width,y:s};break;case Ct:l={x:t.x-n.width,y:s};break;default:l={x:t.x,y:t.y}}var c=o?Sm(o):null;if(c!=null){var d=c==="y"?"height":"width";switch(a){case ua:l[c]=l[c]-(t[d]/2-n[d]/2);break;case Di:l[c]=l[c]+(t[d]/2-n[d]/2);break}}return l}function Mi(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=r===void 0?e.placement:r,a=n.strategy,i=a===void 0?e.strategy:a,s=n.boundary,l=s===void 0?VT:s,c=n.rootBoundary,d=c===void 0?f_:c,f=n.elementContext,p=f===void 0?za:f,h=n.altBoundary,y=h===void 0?!1:h,w=n.padding,x=w===void 0?0:w,v=v_(typeof x!="number"?x:y_(x,Ji)),m=p===za?GT:za,b=e.rects.popper,k=e.elements[y?m:p],C=_R(fo(k)?k:k.contextElement||Mr(e.elements.popper),l,d,i),_=da(e.elements.reference),E=w_({reference:_,element:b,strategy:"absolute",placement:o}),O=jf(Object.assign({},b,E)),A=p===za?O:_,$={top:C.top-A.top+v.top,bottom:A.bottom-C.bottom+v.bottom,left:C.left-A.left+v.left,right:A.right-C.right+v.right},I=e.modifiersData.offset;if(p===za&&I){var B=I[o];Object.keys($).forEach(function(H){var ee=[Yt,Kt].indexOf(H)>=0?1:-1,re=[St,Kt].indexOf(H)>=0?"y":"x";$[H]+=B[re]*ee})}return $}function kR(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=n.boundary,a=n.rootBoundary,i=n.padding,s=n.flipVariations,l=n.allowedAutoPlacements,c=l===void 0?p_:l,d=fa(r),f=d?s?Fg:Fg.filter(function(y){return fa(y)===d}):Ji,p=f.filter(function(y){return c.indexOf(y)>=0});p.length===0&&(p=f);var h=p.reduce(function(y,w){return y[w]=Mi(e,{placement:w,boundary:o,rootBoundary:a,padding:i})[Rn(w)],y},{});return Object.keys(h).sort(function(y,w){return h[y]-h[w]})}function SR(e){if(Rn(e)===xm)return[];var t=ml(e);return[Hg(e),t,Hg(t)]}function CR(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,a=o===void 0?!0:o,i=n.altAxis,s=i===void 0?!0:i,l=n.fallbackPlacements,c=n.padding,d=n.boundary,f=n.rootBoundary,p=n.altBoundary,h=n.flipVariations,y=h===void 0?!0:h,w=n.allowedAutoPlacements,x=t.options.placement,v=Rn(x),m=v===x,b=l||(m||!y?[ml(x)]:SR(x)),k=[x].concat(b).reduce(function(L,z){return L.concat(Rn(z)===xm?kR(t,{placement:z,boundary:d,rootBoundary:f,padding:c,flipVariations:y,allowedAutoPlacements:w}):z)},[]),C=t.rects.reference,_=t.rects.popper,E=new Map,O=!0,A=k[0],$=0;$<k.length;$++){var I=k[$],B=Rn(I),H=fa(I)===ua,ee=[St,Kt].indexOf(B)>=0,re=ee?"width":"height",ie=Mi(t,{placement:I,boundary:d,rootBoundary:f,altBoundary:p,padding:c}),ae=ee?H?Yt:Ct:H?Kt:St;C[re]>_[re]&&(ae=ml(ae));var j=ml(ae),W=[];if(a&&W.push(ie[B]<=0),s&&W.push(ie[ae]<=0,ie[j]<=0),W.every(function(L){return L})){A=I,O=!1;break}E.set(I,W)}if(O)for(var U=y?3:1,te=function(z){var T=k.find(function(ne){var M=E.get(ne);if(M)return M.slice(0,z).every(function(ge){return ge})});if(T)return A=T,"break"},N=U;N>0;N--){var F=te(N);if(F==="break")break}t.placement!==A&&(t.modifiersData[r]._skip=!0,t.placement=A,t.reset=!0)}}const ER={name:"flip",enabled:!0,phase:"main",fn:CR,requiresIfExists:["offset"],data:{_skip:!1}};function Vg(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Gg(e){return[St,Yt,Kt,Ct].some(function(t){return e[t]>=0})}function OR(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,a=t.modifiersData.preventOverflow,i=Mi(t,{elementContext:"reference"}),s=Mi(t,{altBoundary:!0}),l=Vg(i,r),c=Vg(s,o,a),d=Gg(l),f=Gg(c);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:d,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":f})}const TR={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:OR};function RR(e,t,n){var r=Rn(e),o=[Ct,St].indexOf(r)>=0?-1:1,a=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,i=a[0],s=a[1];return i=i||0,s=(s||0)*o,[Ct,Yt].indexOf(r)>=0?{x:s,y:i}:{x:i,y:s}}function jR(e){var t=e.state,n=e.options,r=e.name,o=n.offset,a=o===void 0?[0,0]:o,i=p_.reduce(function(d,f){return d[f]=RR(f,t.rects,a),d},{}),s=i[t.placement],l=s.x,c=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=i}const $R={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:jR};function PR(e){var t=e.state,n=e.name;t.modifiersData[n]=w_({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const AR={name:"popperOffsets",enabled:!0,phase:"read",fn:PR,data:{}};function IR(e){return e==="x"?"y":"x"}function LR(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,a=o===void 0?!0:o,i=n.altAxis,s=i===void 0?!1:i,l=n.boundary,c=n.rootBoundary,d=n.altBoundary,f=n.padding,p=n.tether,h=p===void 0?!0:p,y=n.tetherOffset,w=y===void 0?0:y,x=Mi(t,{boundary:l,rootBoundary:c,padding:f,altBoundary:d}),v=Rn(t.placement),m=fa(t.placement),b=!m,k=Sm(v),C=IR(k),_=t.modifiersData.popperOffsets,E=t.rects.reference,O=t.rects.popper,A=typeof w=="function"?w(Object.assign({},t.rects,{placement:t.placement})):w,$=typeof A=="number"?{mainAxis:A,altAxis:A}:Object.assign({mainAxis:0,altAxis:0},A),I=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,B={x:0,y:0};if(_){if(a){var H,ee=k==="y"?St:Ct,re=k==="y"?Kt:Yt,ie=k==="y"?"height":"width",ae=_[k],j=ae+x[ee],W=ae-x[re],U=h?-O[ie]/2:0,te=m===ua?E[ie]:O[ie],N=m===ua?-O[ie]:-E[ie],F=t.elements.arrow,L=h&&F?km(F):{width:0,height:0},z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:g_(),T=z[ee],ne=z[re],M=pi(0,E[ie],L[ie]),ge=b?E[ie]/2-U-M-T-$.mainAxis:te-M-T-$.mainAxis,se=b?-E[ie]/2+U+M+ne+$.mainAxis:N+M+ne+$.mainAxis,le=t.elements.arrow&&Zi(t.elements.arrow),Q=le?k==="y"?le.clientTop||0:le.clientLeft||0:0,xe=(H=I==null?void 0:I[k])!=null?H:0,_e=ae+ge-xe-Q,K=ae+se-xe,Re=pi(h?Gl(j,_e):j,ae,h?oo(W,K):W);_[k]=Re,B[k]=Re-ae}if(s){var ce,Be=k==="x"?St:Ct,An=k==="x"?Kt:Yt,ke=_[C],en=C==="y"?"height":"width",gn=ke+x[Be],rt=ke-x[An],J=[St,Ct].indexOf(v)!==-1,Se=(ce=I==null?void 0:I[C])!=null?ce:0,fe=J?gn:ke-E[en]-O[en]-Se+$.altAxis,Et=J?ke+E[en]+O[en]-Se-$.altAxis:rt,pt=h&&J?aR(fe,ke,Et):pi(h?fe:gn,ke,h?Et:rt);_[C]=pt,B[C]=pt-ke}t.modifiersData[r]=B}}const NR={name:"preventOverflow",enabled:!0,phase:"main",fn:LR,requiresIfExists:["offset"]};function DR(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function MR(e){return e===At(e)||!jn(e)?Cm(e):DR(e)}function zR(e){var t=e.getBoundingClientRect(),n=ca(t.width)/e.offsetWidth||1,r=ca(t.height)/e.offsetHeight||1;return n!==1||r!==1}function FR(e,t,n){n===void 0&&(n=!1);var r=jn(t),o=jn(t)&&zR(t),a=Mr(t),i=da(e,o,n),s={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(r||!r&&!n)&&((Ar(t)!=="body"||Om(a))&&(s=MR(t)),jn(t)?(l=da(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):a&&(l.x=Em(a))),{x:i.left+s.scrollLeft-l.x,y:i.top+s.scrollTop-l.y,width:i.width,height:i.height}}function BR(e){var t=new Map,n=new Set,r=[];e.forEach(function(a){t.set(a.name,a)});function o(a){n.add(a.name);var i=[].concat(a.requires||[],a.requiresIfExists||[]);i.forEach(function(s){if(!n.has(s)){var l=t.get(s);l&&o(l)}}),r.push(a)}return e.forEach(function(a){n.has(a.name)||o(a)}),r}function UR(e){var t=BR(e);return nR.reduce(function(n,r){return n.concat(t.filter(function(o){return o.phase===r}))},[])}function HR(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function WR(e){var t=e.reduce(function(n,r){var o=n[r.name];return n[r.name]=o?Object.assign({},o,r,{options:Object.assign({},o.options,r.options),data:Object.assign({},o.data,r.data)}):r,n},{});return Object.keys(t).map(function(n){return t[n]})}var qg={placement:"bottom",modifiers:[],strategy:"absolute"};function Kg(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function VR(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,o=t.defaultOptions,a=o===void 0?qg:o;return function(s,l,c){c===void 0&&(c=a);var d={placement:"bottom",orderedModifiers:[],options:Object.assign({},qg,a),modifiersData:{},elements:{reference:s,popper:l},attributes:{},styles:{}},f=[],p=!1,h={state:d,setOptions:function(v){var m=typeof v=="function"?v(d.options):v;w(),d.options=Object.assign({},a,d.options,m),d.scrollParents={reference:fo(s)?mi(s):s.contextElement?mi(s.contextElement):[],popper:mi(l)};var b=UR(WR([].concat(r,d.options.modifiers)));return d.orderedModifiers=b.filter(function(k){return k.enabled}),y(),h.update()},forceUpdate:function(){if(!p){var v=d.elements,m=v.reference,b=v.popper;if(Kg(m,b)){d.rects={reference:FR(m,Zi(b),d.options.strategy==="fixed"),popper:km(b)},d.reset=!1,d.placement=d.options.placement,d.orderedModifiers.forEach(function($){return d.modifiersData[$.name]=Object.assign({},$.data)});for(var k=0;k<d.orderedModifiers.length;k++){if(d.reset===!0){d.reset=!1,k=-1;continue}var C=d.orderedModifiers[k],_=C.fn,E=C.options,O=E===void 0?{}:E,A=C.name;typeof _=="function"&&(d=_({state:d,options:O,name:A,instance:h})||d)}}}},update:HR(function(){return new Promise(function(x){h.forceUpdate(),x(d)})}),destroy:function(){w(),p=!0}};if(!Kg(s,l))return h;h.setOptions(c).then(function(x){!p&&c.onFirstUpdate&&c.onFirstUpdate(x)});function y(){d.orderedModifiers.forEach(function(x){var v=x.name,m=x.options,b=m===void 0?{}:m,k=x.effect;if(typeof k=="function"){var C=k({state:d,name:v,instance:h,options:b}),_=function(){};f.push(C||_)}})}function w(){f.forEach(function(x){return x()}),f=[]}return h}}const GR=VR({defaultModifiers:[TR,AR,pR,hR,$R,ER,NR,uR]}),qR=["enabled","placement","strategy","modifiers"];function KR(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}const YR={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},XR={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:e})=>()=>{const{reference:t,popper:n}=e.elements;if("removeAttribute"in t){const r=(t.getAttribute("aria-describedby")||"").split(",").filter(o=>o.trim()!==n.id);r.length?t.setAttribute("aria-describedby",r.join(",")):t.removeAttribute("aria-describedby")}},fn:({state:e})=>{var t;const{popper:n,reference:r}=e.elements,o=(t=n.getAttribute("role"))==null?void 0:t.toLowerCase();if(n.id&&o==="tooltip"&&"setAttribute"in r){const a=r.getAttribute("aria-describedby");if(a&&a.split(",").indexOf(n.id)!==-1)return;r.setAttribute("aria-describedby",a?`${a},${n.id}`:n.id)}}},QR=[];function JR(e,t,n={}){let{enabled:r=!0,placement:o="bottom",strategy:a="absolute",modifiers:i=QR}=n,s=KR(n,qR);const l=g.useRef(i),c=g.useRef(),d=g.useCallback(()=>{var x;(x=c.current)==null||x.update()},[]),f=g.useCallback(()=>{var x;(x=c.current)==null||x.forceUpdate()},[]),[p,h]=WT(g.useState({placement:o,update:d,forceUpdate:f,attributes:{},styles:{popper:{},arrow:{}}})),y=g.useMemo(()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:x})=>{const v={},m={};Object.keys(x.elements).forEach(b=>{v[b]=x.styles[b],m[b]=x.attributes[b]}),h({state:x,styles:v,attributes:m,update:d,forceUpdate:f,placement:x.placement})}}),[d,f,h]),w=g.useMemo(()=>(fi(l.current,i)||(l.current=i),l.current),[i]);return g.useEffect(()=>{!c.current||!r||c.current.setOptions({placement:o,strategy:a,modifiers:[...w,y,YR]})},[a,o,y,r,w]),g.useEffect(()=>{if(!(!r||e==null||t==null))return c.current=GR(e,t,Object.assign({},s,{placement:o,strategy:a,modifiers:[...w,XR,y]})),()=>{c.current!=null&&(c.current.destroy(),c.current=void 0,h(x=>Object.assign({},x,{attributes:{},styles:{popper:{}}})))}},[r,e,t]),p}function ql(e,t){if(e.contains)return e.contains(t);if(e.compareDocumentPosition)return e===t||!!(e.compareDocumentPosition(t)&16)}var ZR=function(){},ej=ZR;const tj=ho(ej),Yg=()=>{};function nj(e){return e.button===0}function rj(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const Wc=e=>e&&("current"in e?e.current:e),Xg={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};function oj(e,t=Yg,{disabled:n,clickTrigger:r="click"}={}){const o=g.useRef(!1),a=g.useRef(!1),i=g.useCallback(c=>{const d=Wc(e);tj(!!d,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),o.current=!d||rj(c)||!nj(c)||!!ql(d,c.target)||a.current,a.current=!1},[e]),s=qe(c=>{const d=Wc(e);d&&ql(d,c.target)&&(a.current=!0)}),l=qe(c=>{o.current||t(c)});g.useEffect(()=>{var c,d;if(n||e==null)return;const f=Xi(Wc(e)),p=f.defaultView||window;let h=(c=p.event)!=null?c:(d=p.parent)==null?void 0:d.event,y=null;Xg[r]&&(y=yr(f,Xg[r],s,!0));const w=yr(f,r,i,!0),x=yr(f,r,m=>{if(m===h){h=void 0;return}l(m)});let v=[];return"ontouchstart"in f.documentElement&&(v=[].slice.call(f.body.children).map(m=>yr(m,"mousemove",Yg))),()=>{y==null||y(),w(),x(),v.forEach(m=>m())}},[e,n,r,i,s,l])}function aj(e){const t={};return Array.isArray(e)?(e==null||e.forEach(n=>{t[n.name]=n}),t):e||t}function ij(e={}){return Array.isArray(e)?e:Object.keys(e).map(t=>(e[t].name=t,e[t]))}function sj({enabled:e,enableEvents:t,placement:n,flip:r,offset:o,fixed:a,containerPadding:i,arrowElement:s,popperConfig:l={}}){var c,d,f,p,h;const y=aj(l.modifiers);return Object.assign({},l,{placement:n,enabled:e,strategy:a?"fixed":l.strategy,modifiers:ij(Object.assign({},y,{eventListeners:{enabled:t,options:(c=y.eventListeners)==null?void 0:c.options},preventOverflow:Object.assign({},y.preventOverflow,{options:i?Object.assign({padding:i},(d=y.preventOverflow)==null?void 0:d.options):(f=y.preventOverflow)==null?void 0:f.options}),offset:{options:Object.assign({offset:o},(p=y.offset)==null?void 0:p.options)},arrow:Object.assign({},y.arrow,{enabled:!!s,options:Object.assign({},(h=y.arrow)==null?void 0:h.options,{element:s})}),flip:Object.assign({enabled:!!r},y.flip)}))})}const lj=["children"];function uj(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}const cj=()=>{};function x_(e={}){const t=g.useContext(Pu),[n,r]=Yx(),o=g.useRef(!1),{flip:a,offset:i,rootCloseEvent:s,fixed:l=!1,placement:c,popperConfig:d={},enableEventListeners:f=!0,usePopper:p=!!t}=e,h=(t==null?void 0:t.show)==null?!!e.show:t.show;h&&!o.current&&(o.current=!0);const y=_=>{t==null||t.toggle(!1,_)},{placement:w,setMenu:x,menuElement:v,toggleElement:m}=t||{},b=JR(m,v,sj({placement:c||w||"bottom-start",enabled:p,enableEvents:f??h,offset:i,flip:a,fixed:l,arrowElement:n,popperConfig:d})),k=Object.assign({ref:x||cj,"aria-labelledby":m==null?void 0:m.id},b.attributes.popper,{style:b.styles.popper}),C={show:h,placement:w,hasShown:o.current,toggle:t==null?void 0:t.toggle,popper:p?b:null,arrowProps:p?Object.assign({ref:r},b.attributes.arrow,{style:b.styles.arrow}):{}};return oj(v,y,{clickTrigger:s,disabled:!h}),[k,C]}const dj={usePopper:!0};function Tm(e){let{children:t}=e,n=uj(e,lj);const[r,o]=x_(n);return S.jsx(S.Fragment,{children:t(r,o)})}Tm.displayName="DropdownMenu";Tm.defaultProps=dj;const Rm={prefix:String(Math.round(Math.random()*1e10)),current:0},__=q.createContext(Rm),fj=q.createContext(!1);let pj=!!(typeof window<"u"&&window.document&&window.document.createElement),Vc=new WeakMap;function mj(e=!1){let t=g.useContext(__),n=g.useRef(null);if(n.current===null&&!e){var r,o;let a=(o=q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)===null||o===void 0||(r=o.ReactCurrentOwner)===null||r===void 0?void 0:r.current;if(a){let i=Vc.get(a);i==null?Vc.set(a,{id:t.current,state:a.memoizedState}):a.memoizedState!==i.state&&(t.current=i.id,Vc.delete(a))}n.current=++t.current}return n.current}function hj(e){let t=g.useContext(__);t===Rm&&!pj&&console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let n=mj(!!e),r=`react-aria${t.prefix}`;return e||`${r}-${n}`}function gj(e){let t=q.useId(),[n]=g.useState(xj()),r=n?"react-aria":`react-aria${Rm.prefix}`;return e||`${r}-${t}`}const vj=typeof q.useId=="function"?gj:hj;function yj(){return!1}function bj(){return!0}function wj(e){return()=>{}}function xj(){return typeof q.useSyncExternalStore=="function"?q.useSyncExternalStore(wj,yj,bj):g.useContext(fj)}const k_=e=>{var t;return((t=e.getAttribute("role"))==null?void 0:t.toLowerCase())==="menu"},Qg=()=>{};function S_(){const e=vj(),{show:t=!1,toggle:n=Qg,setToggle:r,menuElement:o}=g.useContext(Pu)||{},a=g.useCallback(s=>{n(!t,s)},[t,n]),i={id:e,ref:r||Qg,onClick:a,"aria-expanded":!!t};return o&&k_(o)&&(i["aria-haspopup"]=!0),[i,{show:t,toggle:n}]}function C_({children:e}){const[t,n]=S_();return S.jsx(S.Fragment,{children:e(t,n)})}C_.displayName="DropdownToggle";const $f=g.createContext(null),Jg=(e,t=null)=>e!=null?String(e):t||null,E_=g.createContext(null);E_.displayName="NavContext";const _j="data-rr-ui-";function jm(e){return`${_j}${e}`}const kj=["eventKey","disabled","onClick","active","as"];function Sj(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function O_({key:e,href:t,active:n,disabled:r,onClick:o}){const a=g.useContext($f),i=g.useContext(E_),{activeKey:s}=i||{},l=Jg(e,t),c=n==null&&e!=null?Jg(s)===l:n;return[{onClick:qe(f=>{r||(o==null||o(f),a&&!f.isPropagationStopped()&&a(l,f))}),"aria-disabled":r||void 0,"aria-selected":c,[jm("dropdown-item")]:""},{isActive:c}]}const T_=g.forwardRef((e,t)=>{let{eventKey:n,disabled:r,onClick:o,active:a,as:i=Jx}=e,s=Sj(e,kj);const[l]=O_({key:n,href:s.href,disabled:r,onClick:o,active:a});return S.jsx(i,Object.assign({},s,{ref:t},l))});T_.displayName="DropdownItem";const R_=g.createContext(_a?window:void 0);R_.Provider;function Iu(){return g.useContext(R_)}function Zg(){const e=HT(),t=g.useRef(null),n=g.useCallback(r=>{t.current=r,e()},[e]);return[t,n]}function es({defaultShow:e,show:t,onSelect:n,onToggle:r,itemSelector:o=`* [${jm("dropdown-item")}]`,focusFirstItemOnShow:a,placement:i="bottom-start",children:s}){const l=Iu(),[c,d]=UT(t,e,r),[f,p]=Zg(),h=f.current,[y,w]=Zg(),x=y.current,v=Qx(c),m=g.useRef(null),b=g.useRef(!1),k=g.useContext($f),C=g.useCallback((I,B,H=B==null?void 0:B.type)=>{d(I,{originalEvent:B,source:H})},[d]),_=qe((I,B)=>{n==null||n(I,B),C(!1,B,"select"),B.isPropagationStopped()||k==null||k(I,B)}),E=g.useMemo(()=>({toggle:C,placement:i,show:c,menuElement:h,toggleElement:x,setMenu:p,setToggle:w}),[C,i,c,h,x,p,w]);h&&v&&!c&&(b.current=h.contains(h.ownerDocument.activeElement));const O=qe(()=>{x&&x.focus&&x.focus()}),A=qe(()=>{const I=m.current;let B=a;if(B==null&&(B=f.current&&k_(f.current)?"keyboard":!1),B===!1||B==="keyboard"&&!/^key.+$/.test(I))return;const H=dr(f.current,o)[0];H&&H.focus&&H.focus()});g.useEffect(()=>{c?A():b.current&&(b.current=!1,O())},[c,b,O,A]),g.useEffect(()=>{m.current=null});const $=(I,B)=>{if(!f.current)return null;const H=dr(f.current,o);let ee=H.indexOf(I)+B;return ee=Math.max(0,Math.min(ee,H.length)),H[ee]};return ST(g.useCallback(()=>l.document,[l]),"keydown",I=>{var B,H;const{key:ee}=I,re=I.target,ie=(B=f.current)==null?void 0:B.contains(re),ae=(H=y.current)==null?void 0:H.contains(re);if(/input|textarea/i.test(re.tagName)&&(ee===" "||ee!=="Escape"&&ie||ee==="Escape"&&re.type==="search")||!ie&&!ae||ee==="Tab"&&(!f.current||!c))return;m.current=I.type;const W={originalEvent:I,source:I.type};switch(ee){case"ArrowUp":{const U=$(re,-1);U&&U.focus&&U.focus(),I.preventDefault();return}case"ArrowDown":if(I.preventDefault(),!c)d(!0,W);else{const U=$(re,1);U&&U.focus&&U.focus()}return;case"Tab":hm(re.ownerDocument,"keyup",U=>{var te;(U.key==="Tab"&&!U.target||!((te=f.current)!=null&&te.contains(U.target)))&&d(!1,W)},{once:!0});break;case"Escape":ee==="Escape"&&(I.preventDefault(),I.stopPropagation()),d(!1,W);break}}),S.jsx($f.Provider,{value:_,children:S.jsx(Pu.Provider,{value:E,children:s})})}es.displayName="Dropdown";es.Menu=Tm;es.Toggle=C_;es.Item=T_;const $m=g.createContext({});$m.displayName="DropdownContext";const j_=g.forwardRef(({className:e,bsPrefix:t,as:n="hr",role:r="separator",...o},a)=>(t=de(t,"dropdown-divider"),S.jsx(n,{ref:a,className:X(e,t),role:r,...o})));j_.displayName="DropdownDivider";const $_=g.forwardRef(({className:e,bsPrefix:t,as:n="div",role:r="heading",...o},a)=>(t=de(t,"dropdown-header"),S.jsx(n,{ref:a,className:X(e,t),role:r,...o})));$_.displayName="DropdownHeader";const P_=g.forwardRef(({bsPrefix:e,className:t,eventKey:n,disabled:r=!1,onClick:o,active:a,as:i=Zx,...s},l)=>{const c=de(e,"dropdown-item"),[d,f]=O_({key:n,href:s.href,disabled:r,onClick:o,active:a});return S.jsx(i,{...s,...d,ref:l,className:X(t,c,f.isActive&&"active",r&&"disabled")})});P_.displayName="DropdownItem";const A_=g.forwardRef(({className:e,bsPrefix:t,as:n="span",...r},o)=>(t=de(t,"dropdown-item-text"),S.jsx(n,{ref:o,className:X(e,t),...r})));A_.displayName="DropdownItemText";const Pm=g.createContext(null);Pm.displayName="InputGroupContext";const I_=g.createContext(null);I_.displayName="NavbarContext";function L_(e,t){return e}const To=u.oneOf(["start","end"]),Cj=u.oneOfType([To,u.shape({sm:To}),u.shape({md:To}),u.shape({lg:To}),u.shape({xl:To}),u.shape({xxl:To}),u.object]);function N_(e,t,n){const r=n?"top-end":"top-start",o=n?"top-start":"top-end",a=n?"bottom-end":"bottom-start",i=n?"bottom-start":"bottom-end",s=n?"right-start":"left-start",l=n?"right-end":"left-end",c=n?"left-start":"right-start",d=n?"left-end":"right-end";let f=e?i:a;return t==="up"?f=e?o:r:t==="end"?f=e?d:c:t==="start"?f=e?l:s:t==="down-centered"?f="bottom":t==="up-centered"&&(f="top"),f}const Am=g.forwardRef(({bsPrefix:e,className:t,align:n,rootCloseEvent:r,flip:o=!0,show:a,renderOnMount:i,as:s="div",popperConfig:l,variant:c,...d},f)=>{let p=!1;const h=g.useContext(I_),y=de(e,"dropdown-menu"),{align:w,drop:x,isRTL:v}=g.useContext($m);n=n||w;const m=g.useContext(Pm),b=[];if(n)if(typeof n=="object"){const I=Object.keys(n);if(I.length){const B=I[0],H=n[B];p=H==="start",b.push(`${y}-${B}-${H}`)}}else n==="end"&&(p=!0);const k=N_(p,x,v),[C,{hasShown:_,popper:E,show:O,toggle:A}]=x_({flip:o,rootCloseEvent:r,show:a,usePopper:!h&&b.length===0,offset:[0,2],popperConfig:l,placement:k});if(C.ref=bo(L_(f),C.ref),Tf(()=>{O&&(E==null||E.update())},[O]),!_&&!i&&!m)return null;typeof s!="string"&&(C.show=O,C.close=()=>A==null?void 0:A(!1),C.align=n);let $=d.style;return E!=null&&E.placement&&($={...d.style,...C.style},d["x-placement"]=E.placement),S.jsx(s,{...d,...C,style:$,...(b.length||h)&&{"data-bs-popper":"static"},className:X(t,y,O&&"show",p&&`${y}-end`,c&&`${y}-${c}`,...b)})});Am.displayName="DropdownMenu";const Im=g.forwardRef(({bsPrefix:e,split:t,className:n,childBsPrefix:r,as:o=qt,...a},i)=>{const s=de(e,"dropdown-toggle"),l=g.useContext(Pu);r!==void 0&&(a.bsPrefix=r);const[c]=S_();return c.ref=bo(c.ref,L_(i)),S.jsx(o,{className:X(n,s,t&&`${s}-split`,(l==null?void 0:l.show)&&"show"),...c,...a})});Im.displayName="DropdownToggle";const D_=g.forwardRef((e,t)=>{const{bsPrefix:n,drop:r="down",show:o,className:a,align:i="start",onSelect:s,onToggle:l,focusFirstItemOnShow:c,as:d="div",navbar:f,autoClose:p=!0,...h}=tT(e,{show:"onToggle"}),y=g.useContext(Pm),w=de(n,"dropdown"),x=Hx(),v=E=>p===!1?E==="click":p==="inside"?E!=="rootClose":p==="outside"?E!=="select":!0,m=qe((E,O)=>{var A,$;!((A=O.originalEvent)==null||($=A.target)==null)&&$.classList.contains("dropdown-toggle")&&O.source==="mousedown"||(O.originalEvent.currentTarget===document&&(O.source!=="keydown"||O.originalEvent.key==="Escape")&&(O.source="rootClose"),v(O.source)&&(l==null||l(E,O)))}),k=N_(i==="end",r,x),C=g.useMemo(()=>({align:i,drop:r,isRTL:x}),[i,r,x]),_={down:w,"down-centered":`${w}-center`,up:"dropup","up-centered":"dropup-center dropup",end:"dropend",start:"dropstart"};return S.jsx($m.Provider,{value:C,children:S.jsx(es,{placement:k,show:o,onSelect:s,onToggle:m,focusFirstItemOnShow:c,itemSelector:`.${w}-item:not(.disabled):not(:disabled)`,children:y?h.children:S.jsx(d,{...h,ref:t,className:X(a,o&&"show",_[r])})})})});D_.displayName="Dropdown";const gt=Object.assign(D_,{Toggle:Im,Menu:Am,Item:P_,ItemText:A_,Divider:j_,Header:$_}),Ej={id:u.string,href:u.string,onClick:u.func,title:u.node.isRequired,disabled:u.bool,align:Cj,menuRole:u.string,renderMenuOnMount:u.bool,rootCloseEvent:u.string,menuVariant:u.oneOf(["dark"]),flip:u.bool,bsPrefix:u.string,variant:u.string,size:u.string},Kl=g.forwardRef(({title:e,children:t,bsPrefix:n,rootCloseEvent:r,variant:o,size:a,menuRole:i,renderMenuOnMount:s,disabled:l,href:c,id:d,menuVariant:f,flip:p,...h},y)=>S.jsxs(gt,{ref:y,...h,children:[S.jsx(Im,{id:d,href:c,size:a,variant:o,disabled:l,childBsPrefix:n,children:e}),S.jsx(Am,{role:i,renderOnMount:s,rootCloseEvent:r,variant:f,flip:p,children:t})]}));Kl.displayName="DropdownButton";Kl.propTypes=Ej;const Oj={type:u.string,tooltip:u.bool,as:u.elementType},Lu=g.forwardRef(({as:e="div",className:t,type:n="valid",tooltip:r=!1,...o},a)=>S.jsx(e,{...o,ref:a,className:X(t,`${n}-${r?"tooltip":"feedback"}`)}));Lu.displayName="Feedback";Lu.propTypes=Oj;const Gn=g.createContext({}),Lm=g.forwardRef(({id:e,bsPrefix:t,className:n,type:r="checkbox",isValid:o=!1,isInvalid:a=!1,as:i="input",...s},l)=>{const{controlId:c}=g.useContext(Gn);return t=de(t,"form-check-input"),S.jsx(i,{...s,ref:l,type:r,id:e||c,className:X(n,t,o&&"is-valid",a&&"is-invalid")})});Lm.displayName="FormCheckInput";const Yl=g.forwardRef(({bsPrefix:e,className:t,htmlFor:n,...r},o)=>{const{controlId:a}=g.useContext(Gn);return e=de(e,"form-check-label"),S.jsx("label",{...r,ref:o,htmlFor:n||a,className:X(t,e)})});Yl.displayName="FormCheckLabel";const M_=g.forwardRef(({id:e,bsPrefix:t,bsSwitchPrefix:n,inline:r=!1,reverse:o=!1,disabled:a=!1,isValid:i=!1,isInvalid:s=!1,feedbackTooltip:l=!1,feedback:c,feedbackType:d,className:f,style:p,title:h="",type:y="checkbox",label:w,children:x,as:v="input",...m},b)=>{t=de(t,"form-check"),n=de(n,"form-switch");const{controlId:k}=g.useContext(Gn),C=g.useMemo(()=>({controlId:e||k}),[k,e]),_=!x&&w!=null&&w!==!1||zT(x,Yl),E=S.jsx(Lm,{...m,type:y==="switch"?"checkbox":y,ref:b,isValid:i,isInvalid:s,disabled:a,as:v});return S.jsx(Gn.Provider,{value:C,children:S.jsx("div",{style:p,className:X(f,_&&t,r&&`${t}-inline`,o&&`${t}-reverse`,y==="switch"&&n),children:x||S.jsxs(S.Fragment,{children:[E,_&&S.jsx(Yl,{title:h,children:w}),c&&S.jsx(Lu,{type:d,tooltip:l,children:c})]})})})});M_.displayName="FormCheck";const Xl=Object.assign(M_,{Input:Lm,Label:Yl}),z_=g.forwardRef(({bsPrefix:e,type:t,size:n,htmlSize:r,id:o,className:a,isValid:i=!1,isInvalid:s=!1,plaintext:l,readOnly:c,as:d="input",...f},p)=>{const{controlId:h}=g.useContext(Gn);return e=de(e,"form-control"),S.jsx(d,{...f,type:t,size:r,ref:p,readOnly:c,id:o||h,className:X(a,l?`${e}-plaintext`:e,n&&`${e}-${n}`,t==="color"&&`${e}-color`,i&&"is-valid",s&&"is-invalid")})});z_.displayName="FormControl";const Tj=Object.assign(z_,{Feedback:Lu}),F_=g.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},o)=>(t=de(t,"form-floating"),S.jsx(n,{ref:o,className:X(e,t),...r})));F_.displayName="FormFloating";const Nm=g.forwardRef(({controlId:e,as:t="div",...n},r)=>{const o=g.useMemo(()=>({controlId:e}),[e]);return S.jsx(Gn.Provider,{value:o,children:S.jsx(t,{...n,ref:r})})});Nm.displayName="FormGroup";const B_=g.forwardRef(({as:e="label",bsPrefix:t,column:n=!1,visuallyHidden:r=!1,className:o,htmlFor:a,...i},s)=>{const{controlId:l}=g.useContext(Gn);t=de(t,"form-label");let c="col-form-label";typeof n=="string"&&(c=`${c} ${c}-${n}`);const d=X(o,t,r&&"visually-hidden",n&&c);return a=a||l,n?S.jsx(d_,{ref:s,as:"label",className:d,htmlFor:a,...i}):S.jsx(e,{ref:s,className:d,htmlFor:a,...i})});B_.displayName="FormLabel";const U_=g.forwardRef(({bsPrefix:e,className:t,id:n,...r},o)=>{const{controlId:a}=g.useContext(Gn);return e=de(e,"form-range"),S.jsx("input",{...r,type:"range",ref:o,className:X(t,e),id:n||a})});U_.displayName="FormRange";const H_=g.forwardRef(({bsPrefix:e,size:t,htmlSize:n,className:r,isValid:o=!1,isInvalid:a=!1,id:i,...s},l)=>{const{controlId:c}=g.useContext(Gn);return e=de(e,"form-select"),S.jsx("select",{...s,size:n,ref:l,className:X(r,e,t&&`${e}-${t}`,o&&"is-valid",a&&"is-invalid"),id:i||c})});H_.displayName="FormSelect";const W_=g.forwardRef(({bsPrefix:e,className:t,as:n="small",muted:r,...o},a)=>(e=de(e,"form-text"),S.jsx(n,{...o,ref:a,className:X(t,e,r&&"text-muted")})));W_.displayName="FormText";const V_=g.forwardRef((e,t)=>S.jsx(Xl,{...e,ref:t,type:"switch"}));V_.displayName="Switch";const Rj=Object.assign(V_,{Input:Xl.Input,Label:Xl.Label}),G_=g.forwardRef(({bsPrefix:e,className:t,children:n,controlId:r,label:o,...a},i)=>(e=de(e,"form-floating"),S.jsxs(Nm,{ref:i,className:X(t,e),controlId:r,...a,children:[n,S.jsx("label",{htmlFor:r,children:o})]})));G_.displayName="FloatingLabel";const jj={_ref:u.any,validated:u.bool,as:u.elementType},Dm=g.forwardRef(({className:e,validated:t,as:n="form",...r},o)=>S.jsx(n,{...r,ref:o,className:X(e,t&&"was-validated")}));Dm.displayName="Form";Dm.propTypes=jj;const pe=Object.assign(Dm,{Group:Nm,Control:Tj,Floating:F_,Check:Xl,Switch:Rj,Label:B_,Text:W_,Range:U_,Select:H_,FloatingLabel:G_});var Ls;function ev(e){if((!Ls&&Ls!==0||e)&&_a){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),Ls=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return Ls}function Gc(e){e===void 0&&(e=Xi());try{var t=e.activeElement;return!t||!t.nodeName?null:t}catch{return e.body}}function $j(e=document){const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}const tv=jm("modal-open");class Mm{constructor({ownerDocument:t,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=t}getScrollbarWidth(){return $j(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(t){}removeModalAttributes(t){}setContainerStyle(t){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",o=this.getElement();t.style={overflow:o.style.overflow,[r]:o.style[r]},t.scrollBarWidth&&(n[r]=`${parseInt(ro(o,r)||"0",10)+t.scrollBarWidth}px`),o.setAttribute(tv,""),ro(o,n)}reset(){[...this.modals].forEach(t=>this.remove(t))}removeContainerStyle(t){const n=this.getElement();n.removeAttribute(tv),Object.assign(n.style,t.style)}add(t){let n=this.modals.indexOf(t);return n!==-1||(n=this.modals.length,this.modals.push(t),this.setModalAttributes(t),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(t){const n=this.modals.indexOf(t);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(t))}isTopModal(t){return!!this.modals.length&&this.modals[this.modals.length-1]===t}}const qc=(e,t)=>_a?e==null?(t||Xi()).body:(typeof e=="function"&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;function Pj(e,t){const n=Iu(),[r,o]=g.useState(()=>qc(e,n==null?void 0:n.document));if(!r){const a=qc(e);a&&o(a)}return g.useEffect(()=>{},[t,r]),g.useEffect(()=>{const a=qc(e);a!==r&&o(a)},[e,r]),r}function Aj({children:e,in:t,onExited:n,mountOnEnter:r,unmountOnExit:o}){const a=g.useRef(null),i=g.useRef(t),s=qe(n);g.useEffect(()=>{t?i.current=!0:s(a.current)},[t,s]);const l=bo(a,e.ref),c=g.cloneElement(e,{ref:l});return t?c:o||!i.current&&r?null:c}const Ij=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function Lj(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Nj(e){let{onEnter:t,onEntering:n,onEntered:r,onExit:o,onExiting:a,onExited:i,addEndListener:s,children:l}=e,c=Lj(e,Ij);const d=g.useRef(null),f=bo(d,typeof l=="function"?null:l.ref),p=k=>C=>{k&&d.current&&k(d.current,C)},h=g.useCallback(p(t),[t]),y=g.useCallback(p(n),[n]),w=g.useCallback(p(r),[r]),x=g.useCallback(p(o),[o]),v=g.useCallback(p(a),[a]),m=g.useCallback(p(i),[i]),b=g.useCallback(p(s),[s]);return Object.assign({},c,{nodeRef:d},t&&{onEnter:h},n&&{onEntering:y},r&&{onEntered:w},o&&{onExit:x},a&&{onExiting:v},i&&{onExited:m},s&&{addEndListener:b},{children:typeof l=="function"?(k,C)=>l(k,Object.assign({},C,{ref:f})):g.cloneElement(l,{ref:f})})}const Dj=["component"];function Mj(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}const zj=g.forwardRef((e,t)=>{let{component:n}=e,r=Mj(e,Dj);const o=Nj(r);return S.jsx(n,Object.assign({ref:t},o))});function Fj({in:e,onTransition:t}){const n=g.useRef(null),r=g.useRef(!0),o=qe(t);return Tf(()=>{if(!n.current)return;let a=!1;return o({in:e,element:n.current,initial:r.current,isStale:()=>a}),()=>{a=!0}},[e,o]),Tf(()=>(r.current=!1,()=>{r.current=!0}),[]),n}function Bj({children:e,in:t,onExited:n,onEntered:r,transition:o}){const[a,i]=g.useState(!t);t&&a&&i(!1);const s=Fj({in:!!t,onTransition:c=>{const d=()=>{c.isStale()||(c.in?r==null||r(c.element,c.initial):(i(!0),n==null||n(c.element)))};Promise.resolve(o(c)).then(d,f=>{throw c.in||i(!0),f})}}),l=bo(s,e.ref);return a&&!t?null:g.cloneElement(e,{ref:l})}function nv(e,t,n){return e?S.jsx(zj,Object.assign({},n,{component:e})):t?S.jsx(Bj,Object.assign({},n,{transition:t})):S.jsx(Aj,Object.assign({},n))}function Uj(e){return e.code==="Escape"||e.keyCode===27}const Hj=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function Wj(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}let Kc;function Vj(e){return Kc||(Kc=new Mm({ownerDocument:e==null?void 0:e.document})),Kc}function Gj(e){const t=Iu(),n=e||Vj(t),r=g.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:g.useCallback(o=>{r.current.dialog=o},[]),setBackdropRef:g.useCallback(o=>{r.current.backdrop=o},[])})}const q_=g.forwardRef((e,t)=>{let{show:n=!1,role:r="dialog",className:o,style:a,children:i,backdrop:s=!0,keyboard:l=!0,onBackdropClick:c,onEscapeKeyDown:d,transition:f,runTransition:p,backdropTransition:h,runBackdropTransition:y,autoFocus:w=!0,enforceFocus:x=!0,restoreFocus:v=!0,restoreFocusOptions:m,renderDialog:b,renderBackdrop:k=K=>S.jsx("div",Object.assign({},K)),manager:C,container:_,onShow:E,onHide:O=()=>{},onExit:A,onExited:$,onExiting:I,onEnter:B,onEntering:H,onEntered:ee}=e,re=Wj(e,Hj);const ie=Iu(),ae=Pj(_),j=Gj(C),W=Xx(),U=Qx(n),[te,N]=g.useState(!n),F=g.useRef(null);g.useImperativeHandle(t,()=>j,[j]),_a&&!U&&n&&(F.current=Gc(ie==null?void 0:ie.document)),n&&te&&N(!1);const L=qe(()=>{if(j.add(),se.current=yr(document,"keydown",M),ge.current=yr(document,"focus",()=>setTimeout(T),!0),E&&E(),w){var K,Re;const ce=Gc((K=(Re=j.dialog)==null?void 0:Re.ownerDocument)!=null?K:ie==null?void 0:ie.document);j.dialog&&ce&&!ql(j.dialog,ce)&&(F.current=ce,j.dialog.focus())}}),z=qe(()=>{if(j.remove(),se.current==null||se.current(),ge.current==null||ge.current(),v){var K;(K=F.current)==null||K.focus==null||K.focus(m),F.current=null}});g.useEffect(()=>{!n||!ae||L()},[n,ae,L]),g.useEffect(()=>{te&&z()},[te,z]),c_(()=>{z()});const T=qe(()=>{if(!x||!W()||!j.isTopModal())return;const K=Gc(ie==null?void 0:ie.document);j.dialog&&K&&!ql(j.dialog,K)&&j.dialog.focus()}),ne=qe(K=>{K.target===K.currentTarget&&(c==null||c(K),s===!0&&O())}),M=qe(K=>{l&&Uj(K)&&j.isTopModal()&&(d==null||d(K),K.defaultPrevented||O())}),ge=g.useRef(),se=g.useRef(),le=(...K)=>{N(!0),$==null||$(...K)};if(!ae)return null;const Q=Object.assign({role:r,ref:j.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},re,{style:a,className:o,tabIndex:-1});let xe=b?b(Q):S.jsx("div",Object.assign({},Q,{children:g.cloneElement(i,{role:"document"})}));xe=nv(f,p,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:A,onExiting:I,onExited:le,onEnter:B,onEntering:H,onEntered:ee,children:xe});let _e=null;return s&&(_e=k({ref:j.setBackdropRef,onClick:ne}),_e=nv(h,y,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:_e})),S.jsx(S.Fragment,{children:qo.createPortal(S.jsxs(S.Fragment,{children:[_e,xe]}),ae)})});q_.displayName="Modal";const qj=Object.assign(q_,{Manager:Mm});function Kj(e,t){return e.classList?e.classList.contains(t):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")!==-1}function Yj(e,t){e.classList?e.classList.add(t):Kj(e,t)||(typeof e.className=="string"?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}function rv(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function Xj(e,t){e.classList?e.classList.remove(t):typeof e.className=="string"?e.className=rv(e.className,t):e.setAttribute("class",rv(e.className&&e.className.baseVal||"",t))}const Ro={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class Qj extends Mm{adjustAndStore(t,n,r){const o=n.style[t];n.dataset[t]=o,ro(n,{[t]:`${parseFloat(ro(n,t))+r}px`})}restore(t,n){const r=n.dataset[t];r!==void 0&&(delete n.dataset[t],ro(n,{[t]:r}))}setContainerStyle(t){super.setContainerStyle(t);const n=this.getElement();if(Yj(n,"modal-open"),!t.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";dr(n,Ro.FIXED_CONTENT).forEach(a=>this.adjustAndStore(r,a,t.scrollBarWidth)),dr(n,Ro.STICKY_CONTENT).forEach(a=>this.adjustAndStore(o,a,-t.scrollBarWidth)),dr(n,Ro.NAVBAR_TOGGLER).forEach(a=>this.adjustAndStore(o,a,t.scrollBarWidth))}removeContainerStyle(t){super.removeContainerStyle(t);const n=this.getElement();Xj(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";dr(n,Ro.FIXED_CONTENT).forEach(a=>this.restore(r,a)),dr(n,Ro.STICKY_CONTENT).forEach(a=>this.restore(o,a)),dr(n,Ro.NAVBAR_TOGGLER).forEach(a=>this.restore(o,a))}}let Yc;function Jj(e){return Yc||(Yc=new Qj(e)),Yc}const K_=g.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},o)=>(t=de(t,"modal-body"),S.jsx(n,{ref:o,className:X(e,t),...r})));K_.displayName="ModalBody";const Y_=g.createContext({onHide(){}}),zm=g.forwardRef(({bsPrefix:e,className:t,contentClassName:n,centered:r,size:o,fullscreen:a,children:i,scrollable:s,...l},c)=>{e=de(e,"modal");const d=`${e}-dialog`,f=typeof a=="string"?`${e}-fullscreen-${a}`:`${e}-fullscreen`;return S.jsx("div",{...l,ref:c,className:X(d,t,o&&`${e}-${o}`,r&&`${d}-centered`,s&&`${d}-scrollable`,a&&f),children:S.jsx("div",{className:X(`${e}-content`,n),children:i})})});zm.displayName="ModalDialog";const X_=g.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},o)=>(t=de(t,"modal-footer"),S.jsx(n,{ref:o,className:X(e,t),...r})));X_.displayName="ModalFooter";const Zj=g.forwardRef(({closeLabel:e="Close",closeVariant:t,closeButton:n=!1,onHide:r,children:o,...a},i)=>{const s=g.useContext(Y_),l=qe(()=>{s==null||s.onHide(),r==null||r()});return S.jsxs("div",{ref:i,...a,children:[o,n&&S.jsx(bm,{"aria-label":e,variant:t,onClick:l})]})}),Q_=g.forwardRef(({bsPrefix:e,className:t,closeLabel:n="Close",closeButton:r=!1,...o},a)=>(e=de(e,"modal-header"),S.jsx(Zj,{ref:a,...o,className:X(t,e),closeLabel:n,closeButton:r})));Q_.displayName="ModalHeader";const e2=gm("h4"),J_=g.forwardRef(({className:e,bsPrefix:t,as:n=e2,...r},o)=>(t=de(t,"modal-title"),S.jsx(n,{ref:o,className:X(e,t),...r})));J_.displayName="ModalTitle";function t2(e){return S.jsx(ym,{...e,timeout:null})}function n2(e){return S.jsx(ym,{...e,timeout:null})}const Z_=g.forwardRef(({bsPrefix:e,className:t,style:n,dialogClassName:r,contentClassName:o,children:a,dialogAs:i=zm,"data-bs-theme":s,"aria-labelledby":l,"aria-describedby":c,"aria-label":d,show:f=!1,animation:p=!0,backdrop:h=!0,keyboard:y=!0,onEscapeKeyDown:w,onShow:x,onHide:v,container:m,autoFocus:b=!0,enforceFocus:k=!0,restoreFocus:C=!0,restoreFocusOptions:_,onEntered:E,onExit:O,onExiting:A,onEnter:$,onEntering:I,onExited:B,backdropClassName:H,manager:ee,...re},ie)=>{const[ae,j]=g.useState({}),[W,U]=g.useState(!1),te=g.useRef(!1),N=g.useRef(!1),F=g.useRef(null),[L,z]=Yx(),T=bo(ie,z),ne=qe(v),M=Hx();e=de(e,"modal");const ge=g.useMemo(()=>({onHide:ne}),[ne]);function se(){return ee||Jj({isRTL:M})}function le(fe){if(!_a)return;const Et=se().getScrollbarWidth()>0,pt=fe.scrollHeight>Xi(fe).documentElement.clientHeight;j({paddingRight:Et&&!pt?ev():void 0,paddingLeft:!Et&&pt?ev():void 0})}const Q=qe(()=>{L&&le(L.dialog)});c_(()=>{Of(window,"resize",Q),F.current==null||F.current()});const xe=()=>{te.current=!0},_e=fe=>{te.current&&L&&fe.target===L.dialog&&(N.current=!0),te.current=!1},K=()=>{U(!0),F.current=Kx(L.dialog,()=>{U(!1)})},Re=fe=>{fe.target===fe.currentTarget&&K()},ce=fe=>{if(h==="static"){Re(fe);return}if(N.current||fe.target!==fe.currentTarget){N.current=!1;return}v==null||v()},Be=fe=>{y?w==null||w(fe):(fe.preventDefault(),h==="static"&&K())},An=(fe,Et)=>{fe&&le(fe),$==null||$(fe,Et)},ke=fe=>{F.current==null||F.current(),O==null||O(fe)},en=(fe,Et)=>{I==null||I(fe,Et),hm(window,"resize",Q)},gn=fe=>{fe&&(fe.style.display=""),B==null||B(fe),Of(window,"resize",Q)},rt=g.useCallback(fe=>S.jsx("div",{...fe,className:X(`${e}-backdrop`,H,!p&&"show")}),[p,H,e]),J={...n,...ae};J.display="block";const Se=fe=>S.jsx("div",{role:"dialog",...fe,style:J,className:X(t,e,W&&`${e}-static`,!p&&"show"),onClick:h?ce:void 0,onMouseUp:_e,"data-bs-theme":s,"aria-label":d,"aria-labelledby":l,"aria-describedby":c,children:S.jsx(i,{...re,onMouseDown:xe,className:r,contentClassName:o,children:a})});return S.jsx(Y_.Provider,{value:ge,children:S.jsx(qj,{show:f,ref:T,backdrop:h,container:m,keyboard:!0,autoFocus:b,enforceFocus:k,restoreFocus:C,restoreFocusOptions:_,onEscapeKeyDown:Be,onShow:x,onHide:v,onEnter:An,onEntering:en,onEntered:E,onExit:ke,onExiting:A,onExited:gn,manager:se(),transition:p?t2:void 0,backdropTransition:p?n2:void 0,renderBackdrop:rt,renderDialog:Se})})});Z_.displayName="Modal";const Ht=Object.assign(Z_,{Body:K_,Header:Q_,Title:J_,Footer:X_,Dialog:zm,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),ov=1e3;function r2(e,t,n){const r=(e-t)/(n-t)*100;return Math.round(r*ov)/ov}function av({min:e,now:t,max:n,label:r,visuallyHidden:o,striped:a,animated:i,className:s,style:l,variant:c,bsPrefix:d,...f},p){return S.jsx("div",{ref:p,...f,role:"progressbar",className:X(s,`${d}-bar`,{[`bg-${c}`]:c,[`${d}-bar-animated`]:i,[`${d}-bar-striped`]:i||a}),style:{width:`${r2(t,e,n)}%`,...l},"aria-valuenow":t,"aria-valuemin":e,"aria-valuemax":n,children:o?S.jsx("span",{className:"visually-hidden",children:r}):r})}const ek=g.forwardRef(({isChild:e=!1,...t},n)=>{const r={min:0,max:100,animated:!1,visuallyHidden:!1,striped:!1,...t};if(r.bsPrefix=de(r.bsPrefix,"progress"),e)return av(r,n);const{min:o,now:a,max:i,label:s,visuallyHidden:l,striped:c,animated:d,bsPrefix:f,variant:p,className:h,children:y,...w}=r;return S.jsx("div",{ref:n,...w,className:X(h,f),children:y?MT(y,x=>g.cloneElement(x,{isChild:!0})):av({min:o,now:a,max:i,label:s,visuallyHidden:l,striped:c,animated:d,bsPrefix:f,variant:p},n)})});ek.displayName="ProgressBar";function o2(e,t=zx,n=Fx){const r=[];return Object.entries(e).forEach(([o,a])=>{a!=null&&(typeof a=="object"?t.forEach(i=>{const s=a[i];if(s!=null){const l=i!==n?`-${i}`:"";r.push(`${o}${l}-${s}`)}}):r.push(`${o}-${a}`))}),r}const Tr=g.forwardRef(({as:e="div",bsPrefix:t,className:n,direction:r,gap:o,...a},i)=>{t=de(t,r==="horizontal"?"hstack":"vstack");const s=Bx(),l=Ux();return S.jsx(e,{...a,ref:i,className:X(n,t,...o2({gap:o},s,l))})});Tr.displayName="Stack";/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zi(){return zi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zi.apply(this,arguments)}var br;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(br||(br={}));const iv="popstate";function a2(e){e===void 0&&(e={});function t(r,o){let{pathname:a,search:i,hash:s}=r.location;return Pf("",{pathname:a,search:i,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Ql(o)}return s2(t,n,null,e)}function De(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function tk(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function i2(){return Math.random().toString(36).substr(2,8)}function sv(e,t){return{usr:e.state,key:e.key,idx:t}}function Pf(e,t,n,r){return n===void 0&&(n=null),zi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ka(t):t,{state:n,key:t&&t.key||r||i2()})}function Ql(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ka(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function s2(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:a=!1}=r,i=o.history,s=br.Pop,l=null,c=d();c==null&&(c=0,i.replaceState(zi({},i.state,{idx:c}),""));function d(){return(i.state||{idx:null}).idx}function f(){s=br.Pop;let x=d(),v=x==null?null:x-c;c=x,l&&l({action:s,location:w.location,delta:v})}function p(x,v){s=br.Push;let m=Pf(w.location,x,v);c=d()+1;let b=sv(m,c),k=w.createHref(m);try{i.pushState(b,"",k)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;o.location.assign(k)}a&&l&&l({action:s,location:w.location,delta:1})}function h(x,v){s=br.Replace;let m=Pf(w.location,x,v);c=d();let b=sv(m,c),k=w.createHref(m);i.replaceState(b,"",k),a&&l&&l({action:s,location:w.location,delta:0})}function y(x){let v=o.location.origin!=="null"?o.location.origin:o.location.href,m=typeof x=="string"?x:Ql(x);return m=m.replace(/ $/,"%20"),De(v,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,v)}let w={get action(){return s},get location(){return e(o,i)},listen(x){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(iv,f),l=x,()=>{o.removeEventListener(iv,f),l=null}},createHref(x){return t(o,x)},createURL:y,encodeLocation(x){let v=y(x);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:p,replace:h,go(x){return i.go(x)}};return w}var lv;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(lv||(lv={}));function l2(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?ka(t):t,o=pa(r.pathname||"/",n);if(o==null)return null;let a=nk(e);u2(a);let i=null;for(let s=0;i==null&&s<a.length;++s){let l=w2(o);i=y2(a[s],l)}return i}function nk(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(a,i,s)=>{let l={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:i,route:a};l.relativePath.startsWith("/")&&(De(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Rr([r,l.relativePath]),d=n.concat(l);a.children&&a.children.length>0&&(De(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),nk(a.children,t,d,c)),!(a.path==null&&!a.index)&&t.push({path:c,score:g2(c,a.index),routesMeta:d})};return e.forEach((a,i)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))o(a,i);else for(let l of rk(a.path))o(a,i,l)}),t}function rk(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return o?[a,""]:[a];let i=rk(r.join("/")),s=[];return s.push(...i.map(l=>l===""?a:[a,l].join("/"))),o&&s.push(...i),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function u2(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:v2(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const c2=/^:[\w-]+$/,d2=3,f2=2,p2=1,m2=10,h2=-2,uv=e=>e==="*";function g2(e,t){let n=e.split("/"),r=n.length;return n.some(uv)&&(r+=h2),t&&(r+=f2),n.filter(o=>!uv(o)).reduce((o,a)=>o+(c2.test(a)?d2:a===""?p2:m2),r)}function v2(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function y2(e,t){let{routesMeta:n}=e,r={},o="/",a=[];for(let i=0;i<n.length;++i){let s=n[i],l=i===n.length-1,c=o==="/"?t:t.slice(o.length)||"/",d=Af({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},c);if(!d)return null;Object.assign(r,d.params);let f=s.route;a.push({params:r,pathname:Rr([o,d.pathname]),pathnameBase:S2(Rr([o,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(o=Rr([o,d.pathnameBase]))}return a}function Af(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=b2(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let a=o[0],i=a.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:p,isOptional:h}=d;if(p==="*"){let w=s[f]||"";i=a.slice(0,a.length-w.length).replace(/(.)\/+$/,"$1")}const y=s[f];return h&&!y?c[p]=void 0:c[p]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:a,pathnameBase:i,pattern:e}}function b2(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),tk(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function w2(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return tk(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function pa(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function x2(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?ka(e):e;return{pathname:n?n.startsWith("/")?n:_2(n,t):t,search:C2(r),hash:E2(o)}}function _2(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Xc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function k2(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Fm(e,t){let n=k2(e);return t?n.map((r,o)=>o===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Bm(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=ka(e):(o=zi({},e),De(!o.pathname||!o.pathname.includes("?"),Xc("?","pathname","search",o)),De(!o.pathname||!o.pathname.includes("#"),Xc("#","pathname","hash",o)),De(!o.search||!o.search.includes("#"),Xc("#","search","hash",o)));let a=e===""||o.pathname==="",i=a?"/":o.pathname,s;if(i==null)s=n;else{let f=t.length-1;if(!r&&i.startsWith("..")){let p=i.split("/");for(;p[0]==="..";)p.shift(),f-=1;o.pathname=p.join("/")}s=f>=0?t[f]:"/"}let l=x2(o,s),c=i&&i!=="/"&&i.endsWith("/"),d=(a||i===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const Rr=e=>e.join("/").replace(/\/\/+/g,"/"),S2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),C2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,E2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function O2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ok=["post","put","patch","delete"];new Set(ok);const T2=["get",...ok];new Set(T2);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fi(){return Fi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fi.apply(this,arguments)}const Nu=g.createContext(null),ak=g.createContext(null),Xn=g.createContext(null),Du=g.createContext(null),zr=g.createContext({outlet:null,matches:[],isDataRoute:!1}),ik=g.createContext(null);function R2(e,t){let{relative:n}=t===void 0?{}:t;Sa()||De(!1);let{basename:r,navigator:o}=g.useContext(Xn),{hash:a,pathname:i,search:s}=Mu(e,{relative:n}),l=i;return r!=="/"&&(l=i==="/"?r:Rr([r,i])),o.createHref({pathname:l,search:s,hash:a})}function Sa(){return g.useContext(Du)!=null}function Ca(){return Sa()||De(!1),g.useContext(Du).location}function sk(e){g.useContext(Xn).static||g.useLayoutEffect(e)}function ts(){let{isDataRoute:e}=g.useContext(zr);return e?U2():j2()}function j2(){Sa()||De(!1);let e=g.useContext(Nu),{basename:t,future:n,navigator:r}=g.useContext(Xn),{matches:o}=g.useContext(zr),{pathname:a}=Ca(),i=JSON.stringify(Fm(o,n.v7_relativeSplatPath)),s=g.useRef(!1);return sk(()=>{s.current=!0}),g.useCallback(function(c,d){if(d===void 0&&(d={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let f=Bm(c,JSON.parse(i),a,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Rr([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,i,a,e])}function Mu(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=g.useContext(Xn),{matches:o}=g.useContext(zr),{pathname:a}=Ca(),i=JSON.stringify(Fm(o,r.v7_relativeSplatPath));return g.useMemo(()=>Bm(e,JSON.parse(i),a,n==="path"),[e,i,a,n])}function $2(e,t){return P2(e,t)}function P2(e,t,n,r){Sa()||De(!1);let{navigator:o}=g.useContext(Xn),{matches:a}=g.useContext(zr),i=a[a.length-1],s=i?i.params:{};i&&i.pathname;let l=i?i.pathnameBase:"/";i&&i.route;let c=Ca(),d;if(t){var f;let x=typeof t=="string"?ka(t):t;l==="/"||(f=x.pathname)!=null&&f.startsWith(l)||De(!1),d=x}else d=c;let p=d.pathname||"/",h=p;if(l!=="/"){let x=l.replace(/^\//,"").split("/");h="/"+p.replace(/^\//,"").split("/").slice(x.length).join("/")}let y=l2(e,{pathname:h}),w=D2(y&&y.map(x=>Object.assign({},x,{params:Object.assign({},s,x.params),pathname:Rr([l,o.encodeLocation?o.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:Rr([l,o.encodeLocation?o.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),a,n,r);return t&&w?g.createElement(Du.Provider,{value:{location:Fi({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:br.Pop}},w):w}function A2(){let e=B2(),t=O2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return g.createElement(g.Fragment,null,g.createElement("h2",null,"Unexpected Application Error!"),g.createElement("h3",{style:{fontStyle:"italic"}},t),n?g.createElement("pre",{style:o},n):null,null)}const I2=g.createElement(A2,null);class L2 extends g.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?g.createElement(zr.Provider,{value:this.props.routeContext},g.createElement(ik.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function N2(e){let{routeContext:t,match:n,children:r}=e,o=g.useContext(Nu);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),g.createElement(zr.Provider,{value:t},r)}function D2(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if((a=n)!=null&&a.errors)e=n.matches;else return null}let i=e,s=(o=n)==null?void 0:o.errors;if(s!=null){let d=i.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id]));d>=0||De(!1),i=i.slice(0,Math.min(i.length,d+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<i.length;d++){let f=i[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:p,errors:h}=n,y=f.route.loader&&p[f.route.id]===void 0&&(!h||h[f.route.id]===void 0);if(f.route.lazy||y){l=!0,c>=0?i=i.slice(0,c+1):i=[i[0]];break}}}return i.reduceRight((d,f,p)=>{let h,y=!1,w=null,x=null;n&&(h=s&&f.route.id?s[f.route.id]:void 0,w=f.route.errorElement||I2,l&&(c<0&&p===0?(y=!0,x=null):c===p&&(y=!0,x=f.route.hydrateFallbackElement||null)));let v=t.concat(i.slice(0,p+1)),m=()=>{let b;return h?b=w:y?b=x:f.route.Component?b=g.createElement(f.route.Component,null):f.route.element?b=f.route.element:b=d,g.createElement(N2,{match:f,routeContext:{outlet:d,matches:v,isDataRoute:n!=null},children:b})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?g.createElement(L2,{location:n.location,revalidation:n.revalidation,component:w,error:h,children:m(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):m()},null)}var lk=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(lk||{}),Jl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Jl||{});function M2(e){let t=g.useContext(Nu);return t||De(!1),t}function z2(e){let t=g.useContext(ak);return t||De(!1),t}function F2(e){let t=g.useContext(zr);return t||De(!1),t}function uk(e){let t=F2(),n=t.matches[t.matches.length-1];return n.route.id||De(!1),n.route.id}function B2(){var e;let t=g.useContext(ik),n=z2(Jl.UseRouteError),r=uk(Jl.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function U2(){let{router:e}=M2(lk.UseNavigateStable),t=uk(Jl.UseNavigateStable),n=g.useRef(!1);return sk(()=>{n.current=!0}),g.useCallback(function(o,a){a===void 0&&(a={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Fi({fromRouteId:t},a)))},[e,t])}function H2(e){let{to:t,replace:n,state:r,relative:o}=e;Sa()||De(!1);let{future:a,static:i}=g.useContext(Xn),{matches:s}=g.useContext(zr),{pathname:l}=Ca(),c=ts(),d=Bm(t,Fm(s,a.v7_relativeSplatPath),l,o==="path"),f=JSON.stringify(d);return g.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:o}),[c,f,o,n,r]),null}function Ja(e){De(!1)}function W2(e){let{basename:t="/",children:n=null,location:r,navigationType:o=br.Pop,navigator:a,static:i=!1,future:s}=e;Sa()&&De(!1);let l=t.replace(/^\/*/,"/"),c=g.useMemo(()=>({basename:l,navigator:a,static:i,future:Fi({v7_relativeSplatPath:!1},s)}),[l,s,a,i]);typeof r=="string"&&(r=ka(r));let{pathname:d="/",search:f="",hash:p="",state:h=null,key:y="default"}=r,w=g.useMemo(()=>{let x=pa(d,l);return x==null?null:{location:{pathname:x,search:f,hash:p,state:h,key:y},navigationType:o}},[l,d,f,p,h,y,o]);return w==null?null:g.createElement(Xn.Provider,{value:c},g.createElement(Du.Provider,{children:n,value:w}))}function V2(e){let{children:t,location:n}=e;return $2(If(t),n)}new Promise(()=>{});function If(e,t){t===void 0&&(t=[]);let n=[];return g.Children.forEach(e,(r,o)=>{if(!g.isValidElement(r))return;let a=[...t,o];if(r.type===g.Fragment){n.push.apply(n,If(r.props.children,a));return}r.type!==Ja&&De(!1),!r.props.index||!r.props.children||De(!1);let i={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=If(r.props.children,a)),n.push(i)}),n}/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zl(){return Zl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zl.apply(this,arguments)}function ck(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function G2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function q2(e,t){return e.button===0&&(!t||t==="_self")&&!G2(e)}const K2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Y2=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],X2="6";try{window.__reactRouterVersion=X2}catch{}const Q2=g.createContext({isTransitioning:!1}),J2="startTransition",cv=HC[J2];function Z2(e){let{basename:t,children:n,future:r,window:o}=e,a=g.useRef();a.current==null&&(a.current=a2({window:o,v5Compat:!0}));let i=a.current,[s,l]=g.useState({action:i.action,location:i.location}),{v7_startTransition:c}=r||{},d=g.useCallback(f=>{c&&cv?cv(()=>l(f)):l(f)},[l,c]);return g.useLayoutEffect(()=>i.listen(d),[i,d]),g.createElement(W2,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:i,future:r})}const e$=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",t$=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zu=g.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:a,replace:i,state:s,target:l,to:c,preventScrollReset:d,unstable_viewTransition:f}=t,p=ck(t,K2),{basename:h}=g.useContext(Xn),y,w=!1;if(typeof c=="string"&&t$.test(c)&&(y=c,e$))try{let b=new URL(window.location.href),k=c.startsWith("//")?new URL(b.protocol+c):new URL(c),C=pa(k.pathname,h);k.origin===b.origin&&C!=null?c=C+k.search+k.hash:w=!0}catch{}let x=R2(c,{relative:o}),v=r$(c,{replace:i,state:s,target:l,preventScrollReset:d,relative:o,unstable_viewTransition:f});function m(b){r&&r(b),b.defaultPrevented||v(b)}return g.createElement("a",Zl({},p,{href:y||x,onClick:w||a?r:m,ref:n,target:l}))}),hl=g.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:a="",end:i=!1,style:s,to:l,unstable_viewTransition:c,children:d}=t,f=ck(t,Y2),p=Mu(l,{relative:f.relative}),h=Ca(),y=g.useContext(ak),{navigator:w,basename:x}=g.useContext(Xn),v=y!=null&&o$(p)&&c===!0,m=w.encodeLocation?w.encodeLocation(p).pathname:p.pathname,b=h.pathname,k=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;o||(b=b.toLowerCase(),k=k?k.toLowerCase():null,m=m.toLowerCase()),k&&x&&(k=pa(k,x)||k);const C=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let _=b===m||!i&&b.startsWith(m)&&b.charAt(C)==="/",E=k!=null&&(k===m||!i&&k.startsWith(m)&&k.charAt(m.length)==="/"),O={isActive:_,isPending:E,isTransitioning:v},A=_?r:void 0,$;typeof a=="function"?$=a(O):$=[a,_?"active":null,E?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let I=typeof s=="function"?s(O):s;return g.createElement(zu,Zl({},f,{"aria-current":A,className:$,ref:n,style:I,to:l,unstable_viewTransition:c}),typeof d=="function"?d(O):d)});var Lf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Lf||(Lf={}));var dv;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(dv||(dv={}));function n$(e){let t=g.useContext(Nu);return t||De(!1),t}function r$(e,t){let{target:n,replace:r,state:o,preventScrollReset:a,relative:i,unstable_viewTransition:s}=t===void 0?{}:t,l=ts(),c=Ca(),d=Mu(e,{relative:i});return g.useCallback(f=>{if(q2(f,n)){f.preventDefault();let p=r!==void 0?r:Ql(c)===Ql(d);l(e,{replace:p,state:o,preventScrollReset:a,relative:i,unstable_viewTransition:s})}},[c,l,d,r,o,n,e,a,i,s])}function o$(e,t){t===void 0&&(t={});let n=g.useContext(Q2);n==null&&De(!1);let{basename:r}=n$(Lf.useViewTransitionState),o=Mu(e,{relative:t.relative});if(!n.isTransitioning)return!1;let a=pa(n.currentLocation.pathname,r)||n.currentLocation.pathname,i=pa(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Af(o.pathname,i)!=null||Af(o.pathname,a)!=null}var dk={exports:{}},we={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Je=typeof Symbol=="function"&&Symbol.for,Um=Je?Symbol.for("react.element"):60103,Hm=Je?Symbol.for("react.portal"):60106,Fu=Je?Symbol.for("react.fragment"):60107,Bu=Je?Symbol.for("react.strict_mode"):60108,Uu=Je?Symbol.for("react.profiler"):60114,Hu=Je?Symbol.for("react.provider"):60109,Wu=Je?Symbol.for("react.context"):60110,Wm=Je?Symbol.for("react.async_mode"):60111,Vu=Je?Symbol.for("react.concurrent_mode"):60111,Gu=Je?Symbol.for("react.forward_ref"):60112,qu=Je?Symbol.for("react.suspense"):60113,a$=Je?Symbol.for("react.suspense_list"):60120,Ku=Je?Symbol.for("react.memo"):60115,Yu=Je?Symbol.for("react.lazy"):60116,i$=Je?Symbol.for("react.block"):60121,s$=Je?Symbol.for("react.fundamental"):60117,l$=Je?Symbol.for("react.responder"):60118,u$=Je?Symbol.for("react.scope"):60119;function Nt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Um:switch(e=e.type,e){case Wm:case Vu:case Fu:case Uu:case Bu:case qu:return e;default:switch(e=e&&e.$$typeof,e){case Wu:case Gu:case Yu:case Ku:case Hu:return e;default:return t}}case Hm:return t}}}function fk(e){return Nt(e)===Vu}we.AsyncMode=Wm;we.ConcurrentMode=Vu;we.ContextConsumer=Wu;we.ContextProvider=Hu;we.Element=Um;we.ForwardRef=Gu;we.Fragment=Fu;we.Lazy=Yu;we.Memo=Ku;we.Portal=Hm;we.Profiler=Uu;we.StrictMode=Bu;we.Suspense=qu;we.isAsyncMode=function(e){return fk(e)||Nt(e)===Wm};we.isConcurrentMode=fk;we.isContextConsumer=function(e){return Nt(e)===Wu};we.isContextProvider=function(e){return Nt(e)===Hu};we.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Um};we.isForwardRef=function(e){return Nt(e)===Gu};we.isFragment=function(e){return Nt(e)===Fu};we.isLazy=function(e){return Nt(e)===Yu};we.isMemo=function(e){return Nt(e)===Ku};we.isPortal=function(e){return Nt(e)===Hm};we.isProfiler=function(e){return Nt(e)===Uu};we.isStrictMode=function(e){return Nt(e)===Bu};we.isSuspense=function(e){return Nt(e)===qu};we.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Fu||e===Vu||e===Uu||e===Bu||e===qu||e===a$||typeof e=="object"&&e!==null&&(e.$$typeof===Yu||e.$$typeof===Ku||e.$$typeof===Hu||e.$$typeof===Wu||e.$$typeof===Gu||e.$$typeof===s$||e.$$typeof===l$||e.$$typeof===u$||e.$$typeof===i$)};we.typeOf=Nt;dk.exports=we;var Vm=dk.exports;function c$(e){function t(N,F,L,z,T){for(var ne=0,M=0,ge=0,se=0,le,Q,xe=0,_e=0,K,Re=K=le=0,ce=0,Be=0,An=0,ke=0,en=L.length,gn=en-1,rt,J="",Se="",fe="",Et="",pt;ce<en;){if(Q=L.charCodeAt(ce),ce===gn&&M+se+ge+ne!==0&&(M!==0&&(Q=M===47?10:47),se=ge=ne=0,en++,gn++),M+se+ge+ne===0){if(ce===gn&&(0<Be&&(J=J.replace(p,"")),0<J.trim().length)){switch(Q){case 32:case 9:case 59:case 13:case 10:break;default:J+=L.charAt(ce)}Q=59}switch(Q){case 123:for(J=J.trim(),le=J.charCodeAt(0),K=1,ke=++ce;ce<en;){switch(Q=L.charCodeAt(ce)){case 123:K++;break;case 125:K--;break;case 47:switch(Q=L.charCodeAt(ce+1)){case 42:case 47:e:{for(Re=ce+1;Re<gn;++Re)switch(L.charCodeAt(Re)){case 47:if(Q===42&&L.charCodeAt(Re-1)===42&&ce+2!==Re){ce=Re+1;break e}break;case 10:if(Q===47){ce=Re+1;break e}}ce=Re}}break;case 91:Q++;case 40:Q++;case 34:case 39:for(;ce++<gn&&L.charCodeAt(ce)!==Q;);}if(K===0)break;ce++}switch(K=L.substring(ke,ce),le===0&&(le=(J=J.replace(f,"").trim()).charCodeAt(0)),le){case 64:switch(0<Be&&(J=J.replace(p,"")),Q=J.charCodeAt(1),Q){case 100:case 109:case 115:case 45:Be=F;break;default:Be=ie}if(K=t(F,Be,K,Q,T+1),ke=K.length,0<j&&(Be=n(ie,J,An),pt=s(3,K,Be,F,H,B,ke,Q,T,z),J=Be.join(""),pt!==void 0&&(ke=(K=pt.trim()).length)===0&&(Q=0,K="")),0<ke)switch(Q){case 115:J=J.replace(_,i);case 100:case 109:case 45:K=J+"{"+K+"}";break;case 107:J=J.replace(m,"$1 $2"),K=J+"{"+K+"}",K=re===1||re===2&&a("@"+K,3)?"@-webkit-"+K+"@"+K:"@"+K;break;default:K=J+K,z===112&&(K=(Se+=K,""))}else K="";break;default:K=t(F,n(F,J,An),K,z,T+1)}fe+=K,K=An=Be=Re=le=0,J="",Q=L.charCodeAt(++ce);break;case 125:case 59:if(J=(0<Be?J.replace(p,""):J).trim(),1<(ke=J.length))switch(Re===0&&(le=J.charCodeAt(0),le===45||96<le&&123>le)&&(ke=(J=J.replace(" ",":")).length),0<j&&(pt=s(1,J,F,N,H,B,Se.length,z,T,z))!==void 0&&(ke=(J=pt.trim()).length)===0&&(J="\0\0"),le=J.charCodeAt(0),Q=J.charCodeAt(1),le){case 0:break;case 64:if(Q===105||Q===99){Et+=J+L.charAt(ce);break}default:J.charCodeAt(ke-1)!==58&&(Se+=o(J,le,Q,J.charCodeAt(2)))}An=Be=Re=le=0,J="",Q=L.charCodeAt(++ce)}}switch(Q){case 13:case 10:M===47?M=0:1+le===0&&z!==107&&0<J.length&&(Be=1,J+="\0"),0<j*U&&s(0,J,F,N,H,B,Se.length,z,T,z),B=1,H++;break;case 59:case 125:if(M+se+ge+ne===0){B++;break}default:switch(B++,rt=L.charAt(ce),Q){case 9:case 32:if(se+ne+M===0)switch(xe){case 44:case 58:case 9:case 32:rt="";break;default:Q!==32&&(rt=" ")}break;case 0:rt="\\0";break;case 12:rt="\\f";break;case 11:rt="\\v";break;case 38:se+M+ne===0&&(Be=An=1,rt="\f"+rt);break;case 108:if(se+M+ne+ee===0&&0<Re)switch(ce-Re){case 2:xe===112&&L.charCodeAt(ce-3)===58&&(ee=xe);case 8:_e===111&&(ee=_e)}break;case 58:se+M+ne===0&&(Re=ce);break;case 44:M+ge+se+ne===0&&(Be=1,rt+="\r");break;case 34:case 39:M===0&&(se=se===Q?0:se===0?Q:se);break;case 91:se+M+ge===0&&ne++;break;case 93:se+M+ge===0&&ne--;break;case 41:se+M+ne===0&&ge--;break;case 40:if(se+M+ne===0){if(le===0)switch(2*xe+3*_e){case 533:break;default:le=1}ge++}break;case 64:M+ge+se+ne+Re+K===0&&(K=1);break;case 42:case 47:if(!(0<se+ne+ge))switch(M){case 0:switch(2*Q+3*L.charCodeAt(ce+1)){case 235:M=47;break;case 220:ke=ce,M=42}break;case 42:Q===47&&xe===42&&ke+2!==ce&&(L.charCodeAt(ke+2)===33&&(Se+=L.substring(ke,ce+1)),rt="",M=0)}}M===0&&(J+=rt)}_e=xe,xe=Q,ce++}if(ke=Se.length,0<ke){if(Be=F,0<j&&(pt=s(2,Se,Be,N,H,B,ke,z,T,z),pt!==void 0&&(Se=pt).length===0))return Et+Se+fe;if(Se=Be.join(",")+"{"+Se+"}",re*ee!==0){switch(re!==2||a(Se,2)||(ee=0),ee){case 111:Se=Se.replace(k,":-moz-$1")+Se;break;case 112:Se=Se.replace(b,"::-webkit-input-$1")+Se.replace(b,"::-moz-$1")+Se.replace(b,":-ms-input-$1")+Se}ee=0}}return Et+Se+fe}function n(N,F,L){var z=F.trim().split(x);F=z;var T=z.length,ne=N.length;switch(ne){case 0:case 1:var M=0;for(N=ne===0?"":N[0]+" ";M<T;++M)F[M]=r(N,F[M],L).trim();break;default:var ge=M=0;for(F=[];M<T;++M)for(var se=0;se<ne;++se)F[ge++]=r(N[se]+" ",z[M],L).trim()}return F}function r(N,F,L){var z=F.charCodeAt(0);switch(33>z&&(z=(F=F.trim()).charCodeAt(0)),z){case 38:return F.replace(v,"$1"+N.trim());case 58:return N.trim()+F.replace(v,"$1"+N.trim());default:if(0<1*L&&0<F.indexOf("\f"))return F.replace(v,(N.charCodeAt(0)===58?"":"$1")+N.trim())}return N+F}function o(N,F,L,z){var T=N+";",ne=2*F+3*L+4*z;if(ne===944){N=T.indexOf(":",9)+1;var M=T.substring(N,T.length-1).trim();return M=T.substring(0,N).trim()+M+";",re===1||re===2&&a(M,1)?"-webkit-"+M+M:M}if(re===0||re===2&&!a(T,1))return T;switch(ne){case 1015:return T.charCodeAt(10)===97?"-webkit-"+T+T:T;case 951:return T.charCodeAt(3)===116?"-webkit-"+T+T:T;case 963:return T.charCodeAt(5)===110?"-webkit-"+T+T:T;case 1009:if(T.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+T+T;case 978:return"-webkit-"+T+"-moz-"+T+T;case 1019:case 983:return"-webkit-"+T+"-moz-"+T+"-ms-"+T+T;case 883:if(T.charCodeAt(8)===45)return"-webkit-"+T+T;if(0<T.indexOf("image-set(",11))return T.replace(I,"$1-webkit-$2")+T;break;case 932:if(T.charCodeAt(4)===45)switch(T.charCodeAt(5)){case 103:return"-webkit-box-"+T.replace("-grow","")+"-webkit-"+T+"-ms-"+T.replace("grow","positive")+T;case 115:return"-webkit-"+T+"-ms-"+T.replace("shrink","negative")+T;case 98:return"-webkit-"+T+"-ms-"+T.replace("basis","preferred-size")+T}return"-webkit-"+T+"-ms-"+T+T;case 964:return"-webkit-"+T+"-ms-flex-"+T+T;case 1023:if(T.charCodeAt(8)!==99)break;return M=T.substring(T.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+M+"-webkit-"+T+"-ms-flex-pack"+M+T;case 1005:return y.test(T)?T.replace(h,":-webkit-")+T.replace(h,":-moz-")+T:T;case 1e3:switch(M=T.substring(13).trim(),F=M.indexOf("-")+1,M.charCodeAt(0)+M.charCodeAt(F)){case 226:M=T.replace(C,"tb");break;case 232:M=T.replace(C,"tb-rl");break;case 220:M=T.replace(C,"lr");break;default:return T}return"-webkit-"+T+"-ms-"+M+T;case 1017:if(T.indexOf("sticky",9)===-1)break;case 975:switch(F=(T=N).length-10,M=(T.charCodeAt(F)===33?T.substring(0,F):T).substring(N.indexOf(":",7)+1).trim(),ne=M.charCodeAt(0)+(M.charCodeAt(7)|0)){case 203:if(111>M.charCodeAt(8))break;case 115:T=T.replace(M,"-webkit-"+M)+";"+T;break;case 207:case 102:T=T.replace(M,"-webkit-"+(102<ne?"inline-":"")+"box")+";"+T.replace(M,"-webkit-"+M)+";"+T.replace(M,"-ms-"+M+"box")+";"+T}return T+";";case 938:if(T.charCodeAt(5)===45)switch(T.charCodeAt(6)){case 105:return M=T.replace("-items",""),"-webkit-"+T+"-webkit-box-"+M+"-ms-flex-"+M+T;case 115:return"-webkit-"+T+"-ms-flex-item-"+T.replace(O,"")+T;default:return"-webkit-"+T+"-ms-flex-line-pack"+T.replace("align-content","").replace(O,"")+T}break;case 973:case 989:if(T.charCodeAt(3)!==45||T.charCodeAt(4)===122)break;case 931:case 953:if($.test(N)===!0)return(M=N.substring(N.indexOf(":")+1)).charCodeAt(0)===115?o(N.replace("stretch","fill-available"),F,L,z).replace(":fill-available",":stretch"):T.replace(M,"-webkit-"+M)+T.replace(M,"-moz-"+M.replace("fill-",""))+T;break;case 962:if(T="-webkit-"+T+(T.charCodeAt(5)===102?"-ms-"+T:"")+T,L+z===211&&T.charCodeAt(13)===105&&0<T.indexOf("transform",10))return T.substring(0,T.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+T}return T}function a(N,F){var L=N.indexOf(F===1?":":"{"),z=N.substring(0,F!==3?L:10);return L=N.substring(L+1,N.length-1),W(F!==2?z:z.replace(A,"$1"),L,F)}function i(N,F){var L=o(F,F.charCodeAt(0),F.charCodeAt(1),F.charCodeAt(2));return L!==F+";"?L.replace(E," or ($1)").substring(4):"("+F+")"}function s(N,F,L,z,T,ne,M,ge,se,le){for(var Q=0,xe=F,_e;Q<j;++Q)switch(_e=ae[Q].call(d,N,xe,L,z,T,ne,M,ge,se,le)){case void 0:case!1:case!0:case null:break;default:xe=_e}if(xe!==F)return xe}function l(N){switch(N){case void 0:case null:j=ae.length=0;break;default:if(typeof N=="function")ae[j++]=N;else if(typeof N=="object")for(var F=0,L=N.length;F<L;++F)l(N[F]);else U=!!N|0}return l}function c(N){return N=N.prefix,N!==void 0&&(W=null,N?typeof N!="function"?re=1:(re=2,W=N):re=0),c}function d(N,F){var L=N;if(33>L.charCodeAt(0)&&(L=L.trim()),te=L,L=[te],0<j){var z=s(-1,F,L,L,H,B,0,0,0,0);z!==void 0&&typeof z=="string"&&(F=z)}var T=t(ie,L,F,0,0);return 0<j&&(z=s(-2,T,L,L,H,B,T.length,0,0,0),z!==void 0&&(T=z)),te="",ee=0,B=H=1,T}var f=/^\0+/g,p=/[\0\r\f]/g,h=/: */g,y=/zoo|gra/,w=/([,: ])(transform)/g,x=/,\r+?/g,v=/([\t\r\n ])*\f?&/g,m=/@(k\w+)\s*(\S*)\s*/,b=/::(place)/g,k=/:(read-only)/g,C=/[svh]\w+-[tblr]{2}/,_=/\(\s*(.*)\s*\)/g,E=/([\s\S]*?);/g,O=/-self|flex-/g,A=/[^]*?(:[rp][el]a[\w-]+)[^]*/,$=/stretch|:\s*\w+\-(?:conte|avail)/,I=/([^-])(image-set\()/,B=1,H=1,ee=0,re=1,ie=[],ae=[],j=0,W=null,U=0,te="";return d.use=l,d.set=c,e!==void 0&&c(e),d}var d$={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function f$(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var p$=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,fv=f$(function(e){return p$.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Gm=Vm,m$={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},h$={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},g$={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},pk={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},qm={};qm[Gm.ForwardRef]=g$;qm[Gm.Memo]=pk;function pv(e){return Gm.isMemo(e)?pk:qm[e.$$typeof]||m$}var v$=Object.defineProperty,y$=Object.getOwnPropertyNames,mv=Object.getOwnPropertySymbols,b$=Object.getOwnPropertyDescriptor,w$=Object.getPrototypeOf,hv=Object.prototype;function mk(e,t,n){if(typeof t!="string"){if(hv){var r=w$(t);r&&r!==hv&&mk(e,r,n)}var o=y$(t);mv&&(o=o.concat(mv(t)));for(var a=pv(e),i=pv(t),s=0;s<o.length;++s){var l=o[s];if(!h$[l]&&!(n&&n[l])&&!(i&&i[l])&&!(a&&a[l])){var c=b$(t,l);try{v$(e,l,c)}catch{}}}}return e}var x$=mk;const _$=ho(x$);var Mt={};function En(){return(En=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var gv=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},Nf=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Vm.typeOf(e)},eu=Object.freeze([]),jr=Object.freeze({});function ma(e){return typeof e=="function"}function vv(e){return e.displayName||e.name||"Component"}function Km(e){return e&&typeof e.styledComponentId=="string"}var ha=typeof process<"u"&&Mt!==void 0&&(Mt.REACT_APP_SC_ATTR||Mt.SC_ATTR)||"data-styled",Ym=typeof window<"u"&&"HTMLElement"in window,k$=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Mt!==void 0&&(Mt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Mt.REACT_APP_SC_DISABLE_SPEEDY!==""?Mt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Mt.REACT_APP_SC_DISABLE_SPEEDY:Mt.SC_DISABLE_SPEEDY!==void 0&&Mt.SC_DISABLE_SPEEDY!==""&&Mt.SC_DISABLE_SPEEDY!=="false"&&Mt.SC_DISABLE_SPEEDY));function po(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var S$=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,a=o.length,i=a;n>=i;)(i<<=1)<0&&po(16,""+n);this.groupSizes=new Uint32Array(i),this.groupSizes.set(o),this.length=i;for(var s=a;s<i;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(n+1),c=0,d=r.length;c<d;c++)this.tag.insertRule(l,r[c])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),a=o+r;this.groupSizes[n]=0;for(var i=o;i<a;i++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],a=this.indexOfGroup(n),i=a+o,s=a;s<i;s++)r+=this.tag.getRule(s)+`/*!sc*/
`;return r},e}(),gl=new Map,tu=new Map,hi=1,Ns=function(e){if(gl.has(e))return gl.get(e);for(;tu.has(hi);)hi++;var t=hi++;return gl.set(e,t),tu.set(t,e),t},C$=function(e){return tu.get(e)},E$=function(e,t){t>=hi&&(hi=t+1),gl.set(e,t),tu.set(t,e)},O$="style["+ha+'][data-styled-version="5.3.11"]',T$=new RegExp("^"+ha+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),R$=function(e,t,n){for(var r,o=n.split(","),a=0,i=o.length;a<i;a++)(r=o[a])&&e.registerName(t,r)},j$=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,a=n.length;o<a;o++){var i=n[o].trim();if(i){var s=i.match(T$);if(s){var l=0|parseInt(s[1],10),c=s[2];l!==0&&(E$(c,l),R$(e,c,s[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(i)}}},$$=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},hk=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){for(var l=s.childNodes,c=l.length;c>=0;c--){var d=l[c];if(d&&d.nodeType===1&&d.hasAttribute(ha))return d}}(n),a=o!==void 0?o.nextSibling:null;r.setAttribute(ha,"active"),r.setAttribute("data-styled-version","5.3.11");var i=$$();return i&&r.setAttribute("nonce",i),n.insertBefore(r,a),r},P$=function(){function e(n){var r=this.element=hk(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var a=document.styleSheets,i=0,s=a.length;i<s;i++){var l=a[i];if(l.ownerNode===o)return l}po(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),A$=function(){function e(n){var r=this.element=hk(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),a=this.nodes[n];return this.element.insertBefore(o,a||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),I$=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),yv=Ym,L$={isServer:!Ym,useCSSOMInjection:!k$},gk=function(){function e(n,r,o){n===void 0&&(n=jr),r===void 0&&(r={}),this.options=En({},L$,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&Ym&&yv&&(yv=!1,function(a){for(var i=document.querySelectorAll(O$),s=0,l=i.length;s<l;s++){var c=i[s];c&&c.getAttribute(ha)!=="active"&&(j$(a,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return Ns(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(En({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,a=r.useCSSOMInjection,i=r.target,n=o?new I$(i):a?new P$(i):new A$(i),new S$(n)));var n,r,o,a,i},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Ns(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(Ns(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Ns(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,a="",i=0;i<o;i++){var s=C$(i);if(s!==void 0){var l=n.names.get(s),c=r.getGroup(i);if(l&&c&&l.size){var d=ha+".g"+i+'[id="'+s+'"]',f="";l!==void 0&&l.forEach(function(p){p.length>0&&(f+=p+",")}),a+=""+c+d+'{content:"'+f+`"}/*!sc*/
`}}}return a}(this)},e}(),N$=/(a)(d)/gi,bv=function(e){return String.fromCharCode(e+(e>25?39:97))};function Df(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=bv(t%52)+n;return(bv(t%52)+n).replace(N$,"$1-$2")}var Ko=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},vk=function(e){return Ko(5381,e)};function D$(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ma(n)&&!Km(n))return!1}return!0}var M$=vk("5.3.11"),z$=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&D$(t),this.componentId=n,this.baseHash=Ko(M$,n),this.baseStyle=r,gk.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,a=[];if(this.baseStyle&&a.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))a.push(this.staticRulesId);else{var i=ga(this.rules,t,n,r).join(""),s=Df(Ko(this.baseHash,i)>>>0);if(!n.hasNameForId(o,s)){var l=r(i,"."+s,void 0,o);n.insertRules(o,s,l)}a.push(s),this.staticRulesId=s}else{for(var c=this.rules.length,d=Ko(this.baseHash,r.hash),f="",p=0;p<c;p++){var h=this.rules[p];if(typeof h=="string")f+=h;else if(h){var y=ga(h,t,n,r),w=Array.isArray(y)?y.join(""):y;d=Ko(d,w+p),f+=w}}if(f){var x=Df(d>>>0);if(!n.hasNameForId(o,x)){var v=r(f,"."+x,void 0,o);n.insertRules(o,x,v)}a.push(x)}}return a.join(" ")},e}(),F$=/^\s*\/\/.*$/gm,B$=[":","[",".","#"];function U$(e){var t,n,r,o,a=jr,i=a.options,s=i===void 0?jr:i,l=a.plugins,c=l===void 0?eu:l,d=new c$(s),f=[],p=function(w){function x(v){if(v)try{w(v+"}")}catch{}}return function(v,m,b,k,C,_,E,O,A,$){switch(v){case 1:if(A===0&&m.charCodeAt(0)===64)return w(m+";"),"";break;case 2:if(O===0)return m+"/*|*/";break;case 3:switch(O){case 102:case 112:return w(b[0]+m),"";default:return m+($===0?"/*|*/":"")}case-2:m.split("/*|*/}").forEach(x)}}}(function(w){f.push(w)}),h=function(w,x,v){return x===0&&B$.indexOf(v[n.length])!==-1||v.match(o)?w:"."+t};function y(w,x,v,m){m===void 0&&(m="&");var b=w.replace(F$,""),k=x&&v?v+" "+x+" { "+b+" }":b;return t=m,n=x,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),d(v||!x?"":x,k)}return d.use([].concat(c,[function(w,x,v){w===2&&v.length&&v[0].lastIndexOf(n)>0&&(v[0]=v[0].replace(r,h))},p,function(w){if(w===-2){var x=f;return f=[],x}}])),y.hash=c.length?c.reduce(function(w,x){return x.name||po(15),Ko(w,x.name)},5381).toString():"",y}var yk=q.createContext();yk.Consumer;var bk=q.createContext(),H$=(bk.Consumer,new gk),Mf=U$();function W$(){return g.useContext(yk)||H$}function V$(){return g.useContext(bk)||Mf}var wk=function(){function e(t,n){var r=this;this.inject=function(o,a){a===void 0&&(a=Mf);var i=r.name+a.hash;o.hasNameForId(r.id,i)||o.insertRules(r.id,i,a(r.rules,i,"@keyframes"))},this.toString=function(){return po(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Mf),this.name+t.hash},e}(),G$=/([A-Z])/,q$=/([A-Z])/g,K$=/^ms-/,Y$=function(e){return"-"+e.toLowerCase()};function wv(e){return G$.test(e)?e.replace(q$,Y$).replace(K$,"-ms-"):e}var xv=function(e){return e==null||e===!1||e===""};function ga(e,t,n,r){if(Array.isArray(e)){for(var o,a=[],i=0,s=e.length;i<s;i+=1)(o=ga(e[i],t,n,r))!==""&&(Array.isArray(o)?a.push.apply(a,o):a.push(o));return a}if(xv(e))return"";if(Km(e))return"."+e.styledComponentId;if(ma(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var l=e(t);return ga(l,t,n,r)}var c;return e instanceof wk?n?(e.inject(n,r),e.getName(r)):e:Nf(e)?function d(f,p){var h,y,w=[];for(var x in f)f.hasOwnProperty(x)&&!xv(f[x])&&(Array.isArray(f[x])&&f[x].isCss||ma(f[x])?w.push(wv(x)+":",f[x],";"):Nf(f[x])?w.push.apply(w,d(f[x],x)):w.push(wv(x)+": "+(h=x,(y=f[x])==null||typeof y=="boolean"||y===""?"":typeof y!="number"||y===0||h in d$||h.startsWith("--")?String(y).trim():y+"px")+";"));return p?[p+" {"].concat(w,["}"]):w}(e):e.toString()}var _v=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Z(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return ma(e)||Nf(e)?_v(ga(gv(eu,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:_v(ga(gv(e,n)))}var X$=function(e,t,n){return n===void 0&&(n=jr),e.theme!==n.theme&&e.theme||t||n.theme},Q$=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,J$=/(^-|-$)/g;function Qc(e){return e.replace(Q$,"-").replace(J$,"")}var xk=function(e){return Df(vk(e)>>>0)};function Ds(e){return typeof e=="string"&&!0}var zf=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Z$=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function eP(e,t,n){var r=e[n];zf(t)&&zf(r)?_k(r,t):e[n]=t}function _k(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,a=n;o<a.length;o++){var i=a[o];if(zf(i))for(var s in i)Z$(s)&&eP(e,i[s],s)}return e}var nu=q.createContext();nu.Consumer;function wo(e){var t=g.useContext(nu),n=g.useMemo(function(){return function(r,o){if(!r)return po(14);if(ma(r)){var a=r(o);return a}return Array.isArray(r)||typeof r!="object"?po(8):o?En({},o,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?q.createElement(nu.Provider,{value:n},e.children):null}var Jc={};function kk(e,t,n){var r=Km(e),o=!Ds(e),a=t.attrs,i=a===void 0?eu:a,s=t.componentId,l=s===void 0?function(m,b){var k=typeof m!="string"?"sc":Qc(m);Jc[k]=(Jc[k]||0)+1;var C=k+"-"+xk("5.3.11"+k+Jc[k]);return b?b+"-"+C:C}(t.displayName,t.parentComponentId):s,c=t.displayName,d=c===void 0?function(m){return Ds(m)?"styled."+m:"Styled("+vv(m)+")"}(e):c,f=t.displayName&&t.componentId?Qc(t.displayName)+"-"+t.componentId:t.componentId||l,p=r&&e.attrs?Array.prototype.concat(e.attrs,i).filter(Boolean):i,h=t.shouldForwardProp;r&&e.shouldForwardProp&&(h=t.shouldForwardProp?function(m,b,k){return e.shouldForwardProp(m,b,k)&&t.shouldForwardProp(m,b,k)}:e.shouldForwardProp);var y,w=new z$(n,f,r?e.componentStyle:void 0),x=w.isStatic&&i.length===0,v=function(m,b){return function(k,C,_,E){var O=k.attrs,A=k.componentStyle,$=k.defaultProps,I=k.foldedComponentIds,B=k.shouldForwardProp,H=k.styledComponentId,ee=k.target,re=function(z,T,ne){z===void 0&&(z=jr);var M=En({},T,{theme:z}),ge={};return ne.forEach(function(se){var le,Q,xe,_e=se;for(le in ma(_e)&&(_e=_e(M)),_e)M[le]=ge[le]=le==="className"?(Q=ge[le],xe=_e[le],Q&&xe?Q+" "+xe:Q||xe):_e[le]}),[M,ge]}(X$(C,g.useContext(nu),$)||jr,C,O),ie=re[0],ae=re[1],j=function(z,T,ne,M){var ge=W$(),se=V$(),le=T?z.generateAndInjectStyles(jr,ge,se):z.generateAndInjectStyles(ne,ge,se);return le}(A,E,ie),W=_,U=ae.$as||C.$as||ae.as||C.as||ee,te=Ds(U),N=ae!==C?En({},C,{},ae):C,F={};for(var L in N)L[0]!=="$"&&L!=="as"&&(L==="forwardedAs"?F.as=N[L]:(B?B(L,fv,U):!te||fv(L))&&(F[L]=N[L]));return C.style&&ae.style!==C.style&&(F.style=En({},C.style,{},ae.style)),F.className=Array.prototype.concat(I,H,j!==H?j:null,C.className,ae.className).filter(Boolean).join(" "),F.ref=W,g.createElement(U,F)}(y,m,b,x)};return v.displayName=d,(y=q.forwardRef(v)).attrs=p,y.componentStyle=w,y.displayName=d,y.shouldForwardProp=h,y.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):eu,y.styledComponentId=f,y.target=r?e.target:e,y.withComponent=function(m){var b=t.componentId,k=function(_,E){if(_==null)return{};var O,A,$={},I=Object.keys(_);for(A=0;A<I.length;A++)O=I[A],E.indexOf(O)>=0||($[O]=_[O]);return $}(t,["componentId"]),C=b&&b+"-"+(Ds(m)?m:Qc(vv(m)));return kk(m,En({},k,{attrs:p,componentId:C}),n)},Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(m){this._foldedDefaultProps=r?_k({},e.defaultProps,m):m}}),Object.defineProperty(y,"toString",{value:function(){return"."+y.styledComponentId}}),o&&_$(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),y}var V=function(e){return function t(n,r,o){if(o===void 0&&(o=jr),!Vm.isValidElementType(r))return po(1,String(r));var a=function(){return n(r,o,Z.apply(void 0,arguments))};return a.withConfig=function(i){return t(n,r,En({},o,{},i))},a.attrs=function(i){return t(n,r,En({},o,{attrs:Array.prototype.concat(o.attrs,i).filter(Boolean)}))},a}(kk,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){V[e]=V(e)});function Xm(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Z.apply(void 0,[e].concat(n)).join(""),a=xk(o);return new wk(a,o)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var kv=Object.getOwnPropertySymbols,tP=Object.prototype.hasOwnProperty,nP=Object.prototype.propertyIsEnumerable;function rP(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function oP(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(a){return t[a]});if(r.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(a){o[a]=a}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var aP=oP()?Object.assign:function(e,t){for(var n,r=rP(e),o,a=1;a<arguments.length;a++){n=Object(arguments[a]);for(var i in n)tP.call(n,i)&&(r[i]=n[i]);if(kv){o=kv(n);for(var s=0;s<o.length;s++)nP.call(n,o[s])&&(r[o[s]]=n[o[s]])}}return r};const pn=ho(aP);var Sv=function(t,n){var r=pn({},t,n);for(var o in t){var a;!t[o]||typeof n[o]!="object"||pn(r,(a={},a[o]=pn(t[o],n[o]),a))}return r},iP=function(t){var n={};return Object.keys(t).sort(function(r,o){return r.localeCompare(o,void 0,{numeric:!0,sensitivity:"base"})}).forEach(function(r){n[r]=t[r]}),n},sP={breakpoints:[40,52,64].map(function(e){return e+"em"})},Sk=function(t){return"@media screen and (min-width: "+t+")"},lP=function(t,n){return Ir(n,t,t)},Ir=function(t,n,r,o,a){for(n=n&&n.split?n.split("."):[n],o=0;o<n.length;o++)t=t?t[n[o]]:a;return t===a?r:t},Qm=function e(t){var n={},r=function(i){var s={},l=!1,c=i.theme&&i.theme.disableStyledSystemCache;for(var d in i)if(t[d]){var f=t[d],p=i[d],h=Ir(i.theme,f.scale,f.defaults);if(typeof p=="object"){if(n.breakpoints=!c&&n.breakpoints||Ir(i.theme,"breakpoints",sP.breakpoints),Array.isArray(p)){n.media=!c&&n.media||[null].concat(n.breakpoints.map(Sk)),s=Sv(s,uP(n.media,f,h,p,i));continue}p!==null&&(s=Sv(s,cP(n.breakpoints,f,h,p,i)),l=!0);continue}pn(s,f(p,h,i))}return l&&(s=iP(s)),s};r.config=t,r.propNames=Object.keys(t),r.cache=n;var o=Object.keys(t).filter(function(a){return a!=="config"});return o.length>1&&o.forEach(function(a){var i;r[a]=e((i={},i[a]=t[a],i))}),r},uP=function(t,n,r,o,a){var i={};return o.slice(0,t.length).forEach(function(s,l){var c=t[l],d=n(s,r,a);if(!c)pn(i,d);else{var f;pn(i,(f={},f[c]=pn({},i[c],d),f))}}),i},cP=function(t,n,r,o,a){var i={};for(var s in o){var l=t[s],c=o[s],d=n(c,r,a);if(!l)pn(i,d);else{var f,p=Sk(l);pn(i,(f={},f[p]=pn({},i[p],d),f))}}return i},Cv=function(t){var n=t.properties,r=t.property,o=t.scale,a=t.transform,i=a===void 0?lP:a,s=t.defaultScale;n=n||[r];var l=function(d,f,p){var h={},y=i(d,f,p);if(y!==null)return n.forEach(function(w){h[w]=y}),h};return l.scale=o,l.defaults=s,l},hn=function(t){t===void 0&&(t={});var n={};Object.keys(t).forEach(function(o){var a=t[o];if(a===!0){n[o]=Cv({property:o,scale:o});return}if(typeof a=="function"){n[o]=a;return}n[o]=Cv(a)});var r=Qm(n);return r},dP=function(){for(var t={},n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];r.forEach(function(i){!i||!i.config||pn(t,i.config)});var a=Qm(t);return a},fP=function(t){return typeof t=="number"&&!isNaN(t)},pP=function(t,n){return Ir(n,t,!fP(t)||t>1?t:t*100+"%")},mP={width:{property:"width",scale:"sizes",transform:pP},height:{property:"height",scale:"sizes"},minWidth:{property:"minWidth",scale:"sizes"},minHeight:{property:"minHeight",scale:"sizes"},maxWidth:{property:"maxWidth",scale:"sizes"},maxHeight:{property:"maxHeight",scale:"sizes"},size:{properties:["width","height"],scale:"sizes"},overflow:!0,overflowX:!0,overflowY:!0,display:!0,verticalAlign:!0},Qt=hn(mP),Ff={color:{property:"color",scale:"colors"},backgroundColor:{property:"backgroundColor",scale:"colors"},opacity:!0};Ff.bg=Ff.backgroundColor;var Jm=hn(Ff),hP={fontSizes:[12,14,16,20,24,32,48,64,72]},gP={fontFamily:{property:"fontFamily",scale:"fonts"},fontSize:{property:"fontSize",scale:"fontSizes",defaultScale:hP.fontSizes},fontWeight:{property:"fontWeight",scale:"fontWeights"},lineHeight:{property:"lineHeight",scale:"lineHeights"},letterSpacing:{property:"letterSpacing",scale:"letterSpacings"},textAlign:!0,fontStyle:!0},xo=hn(gP),vP={alignItems:!0,alignContent:!0,justifyItems:!0,justifyContent:!0,flexWrap:!0,flexDirection:!0,flex:!0,flexGrow:!0,flexShrink:!0,flexBasis:!0,justifySelf:!0,alignSelf:!0,order:!0},Dt=hn(vP),Zc={space:[0,4,8,16,32,64,128,256,512]},yP={gridGap:{property:"gridGap",scale:"space",defaultScale:Zc.space},gridColumnGap:{property:"gridColumnGap",scale:"space",defaultScale:Zc.space},gridRowGap:{property:"gridRowGap",scale:"space",defaultScale:Zc.space},gridColumn:!0,gridRow:!0,gridAutoFlow:!0,gridAutoColumns:!0,gridAutoRows:!0,gridTemplateColumns:!0,gridTemplateRows:!0,gridTemplateAreas:!0,gridArea:!0},Jt=hn(yP),nt={border:{property:"border",scale:"borders"},borderWidth:{property:"borderWidth",scale:"borderWidths"},borderStyle:{property:"borderStyle",scale:"borderStyles"},borderColor:{property:"borderColor",scale:"colors"},borderRadius:{property:"borderRadius",scale:"radii"},borderTop:{property:"borderTop",scale:"borders"},borderTopLeftRadius:{property:"borderTopLeftRadius",scale:"radii"},borderTopRightRadius:{property:"borderTopRightRadius",scale:"radii"},borderRight:{property:"borderRight",scale:"borders"},borderBottom:{property:"borderBottom",scale:"borders"},borderBottomLeftRadius:{property:"borderBottomLeftRadius",scale:"radii"},borderBottomRightRadius:{property:"borderBottomRightRadius",scale:"radii"},borderLeft:{property:"borderLeft",scale:"borders"},borderX:{properties:["borderLeft","borderRight"],scale:"borders"},borderY:{properties:["borderTop","borderBottom"],scale:"borders"}};nt.borderTopWidth={property:"borderTopWidth",scale:"borderWidths"};nt.borderTopColor={property:"borderTopColor",scale:"colors"};nt.borderTopStyle={property:"borderTopStyle",scale:"borderStyles"};nt.borderTopLeftRadius={property:"borderTopLeftRadius",scale:"radii"};nt.borderTopRightRadius={property:"borderTopRightRadius",scale:"radii"};nt.borderBottomWidth={property:"borderBottomWidth",scale:"borderWidths"};nt.borderBottomColor={property:"borderBottomColor",scale:"colors"};nt.borderBottomStyle={property:"borderBottomStyle",scale:"borderStyles"};nt.borderBottomLeftRadius={property:"borderBottomLeftRadius",scale:"radii"};nt.borderBottomRightRadius={property:"borderBottomRightRadius",scale:"radii"};nt.borderLeftWidth={property:"borderLeftWidth",scale:"borderWidths"};nt.borderLeftColor={property:"borderLeftColor",scale:"colors"};nt.borderLeftStyle={property:"borderLeftStyle",scale:"borderStyles"};nt.borderRightWidth={property:"borderRightWidth",scale:"borderWidths"};nt.borderRightColor={property:"borderRightColor",scale:"colors"};nt.borderRightStyle={property:"borderRightStyle",scale:"borderStyles"};var Fr=hn(nt),qn={background:!0,backgroundImage:!0,backgroundSize:!0,backgroundPosition:!0,backgroundRepeat:!0};qn.bgImage=qn.backgroundImage;qn.bgSize=qn.backgroundSize;qn.bgPosition=qn.backgroundPosition;qn.bgRepeat=qn.backgroundRepeat;var Xu=hn(qn),Ms={space:[0,4,8,16,32,64,128,256,512]},bP={position:!0,zIndex:{property:"zIndex",scale:"zIndices"},top:{property:"top",scale:"space",defaultScale:Ms.space},right:{property:"right",scale:"space",defaultScale:Ms.space},bottom:{property:"bottom",scale:"space",defaultScale:Ms.space},left:{property:"left",scale:"space",defaultScale:Ms.space}},ns=hn(bP),vt={space:[0,4,8,16,32,64,128,256,512]},Ev=function(t){return typeof t=="number"&&!isNaN(t)},Hr=function(t,n){if(!Ev(t))return Ir(n,t,t);var r=t<0,o=Math.abs(t),a=Ir(n,o,o);return Ev(a)?a*(r?-1:1):r?"-"+a:a},ye={};ye.margin={margin:{property:"margin",scale:"space",transform:Hr,defaultScale:vt.space},marginTop:{property:"marginTop",scale:"space",transform:Hr,defaultScale:vt.space},marginRight:{property:"marginRight",scale:"space",transform:Hr,defaultScale:vt.space},marginBottom:{property:"marginBottom",scale:"space",transform:Hr,defaultScale:vt.space},marginLeft:{property:"marginLeft",scale:"space",transform:Hr,defaultScale:vt.space},marginX:{properties:["marginLeft","marginRight"],scale:"space",transform:Hr,defaultScale:vt.space},marginY:{properties:["marginTop","marginBottom"],scale:"space",transform:Hr,defaultScale:vt.space}};ye.margin.m=ye.margin.margin;ye.margin.mt=ye.margin.marginTop;ye.margin.mr=ye.margin.marginRight;ye.margin.mb=ye.margin.marginBottom;ye.margin.ml=ye.margin.marginLeft;ye.margin.mx=ye.margin.marginX;ye.margin.my=ye.margin.marginY;ye.padding={padding:{property:"padding",scale:"space",defaultScale:vt.space},paddingTop:{property:"paddingTop",scale:"space",defaultScale:vt.space},paddingRight:{property:"paddingRight",scale:"space",defaultScale:vt.space},paddingBottom:{property:"paddingBottom",scale:"space",defaultScale:vt.space},paddingLeft:{property:"paddingLeft",scale:"space",defaultScale:vt.space},paddingX:{properties:["paddingLeft","paddingRight"],scale:"space",defaultScale:vt.space},paddingY:{properties:["paddingTop","paddingBottom"],scale:"space",defaultScale:vt.space}};ye.padding.p=ye.padding.padding;ye.padding.pt=ye.padding.paddingTop;ye.padding.pr=ye.padding.paddingRight;ye.padding.pb=ye.padding.paddingBottom;ye.padding.pl=ye.padding.paddingLeft;ye.padding.px=ye.padding.paddingX;ye.padding.py=ye.padding.paddingY;var wP=hn(ye.margin),xP=hn(ye.padding),Bi=dP(wP,xP);hn({boxShadow:{property:"boxShadow",scale:"shadows"},textShadow:{property:"textShadow",scale:"shadows"}});function Ui(){return Ui=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ui.apply(this,arguments)}var xn=function(t,n,r,o,a){for(n=n&&n.split?n.split("."):[n],o=0;o<n.length;o++)t=t?t[n[o]]:a;return t===a?r:t},_P=[40,52,64].map(function(e){return e+"em"}),kP={space:[0,4,8,16,32,64,128,256,512],fontSizes:[12,14,16,20,24,32,48,64,72]},SP={bg:"backgroundColor",m:"margin",mt:"marginTop",mr:"marginRight",mb:"marginBottom",ml:"marginLeft",mx:"marginX",my:"marginY",p:"padding",pt:"paddingTop",pr:"paddingRight",pb:"paddingBottom",pl:"paddingLeft",px:"paddingX",py:"paddingY"},Ov={marginX:["marginLeft","marginRight"],marginY:["marginTop","marginBottom"],paddingX:["paddingLeft","paddingRight"],paddingY:["paddingTop","paddingBottom"],size:["width","height"]},CP={color:"colors",backgroundColor:"colors",borderColor:"colors",margin:"space",marginTop:"space",marginRight:"space",marginBottom:"space",marginLeft:"space",marginX:"space",marginY:"space",padding:"space",paddingTop:"space",paddingRight:"space",paddingBottom:"space",paddingLeft:"space",paddingX:"space",paddingY:"space",top:"space",right:"space",bottom:"space",left:"space",gridGap:"space",gridColumnGap:"space",gridRowGap:"space",gap:"space",columnGap:"space",rowGap:"space",fontFamily:"fonts",fontSize:"fontSizes",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",border:"borders",borderTop:"borders",borderRight:"borders",borderBottom:"borders",borderLeft:"borders",borderWidth:"borderWidths",borderStyle:"borderStyles",borderRadius:"radii",borderTopRightRadius:"radii",borderTopLeftRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",borderTopWidth:"borderWidths",borderTopColor:"colors",borderTopStyle:"borderStyles",borderBottomWidth:"borderWidths",borderBottomColor:"colors",borderBottomStyle:"borderStyles",borderLeftWidth:"borderWidths",borderLeftColor:"colors",borderLeftStyle:"borderStyles",borderRightWidth:"borderWidths",borderRightColor:"colors",borderRightStyle:"borderStyles",outlineColor:"colors",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices",width:"sizes",minWidth:"sizes",maxWidth:"sizes",height:"sizes",minHeight:"sizes",maxHeight:"sizes",flexBasis:"sizes",size:"sizes",fill:"colors",stroke:"colors"},EP=function(t,n){if(typeof n!="number"||n>=0)return xn(t,n,n);var r=Math.abs(n),o=xn(t,r,r);return typeof o=="string"?"-"+o:o*-1},OP=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","top","bottom","left","right"].reduce(function(e,t){var n;return Ui({},e,(n={},n[t]=EP,n))},{}),TP=function(t){return function(n){var r={},o=xn(n,"breakpoints",_P),a=[null].concat(o.map(function(d){return"@media screen and (min-width: "+d+")"}));for(var i in t){var s=typeof t[i]=="function"?t[i](n):t[i];if(s!=null){if(!Array.isArray(s)){r[i]=s;continue}for(var l=0;l<s.slice(0,a.length).length;l++){var c=a[l];if(!c){r[i]=s[l];continue}r[c]=r[c]||{},s[l]!=null&&(r[c][i]=s[l])}}}return r}},RP=function e(t){return function(n){n===void 0&&(n={});var r=Ui({},kP,{},n.theme||n),o={},a=typeof t=="function"?t(r):t,i=TP(a)(r);for(var s in i){var l=i[s],c=typeof l=="function"?l(r):l;if(s==="variant"){var d=e(xn(r,c))(r);o=Ui({},o,{},d);continue}if(c&&typeof c=="object"){o[s]=e(c)(r);continue}var f=xn(SP,s,s),p=xn(CP,f),h=xn(r,p,xn(r,f,{})),y=xn(OP,f,xn),w=y(h,c,c);if(Ov[f])for(var x=Ov[f],v=0;v<x.length;v++)o[x[v]]=w;else o[f]=w}return o}},un=function(t){var n,r=t.scale,o=t.prop,a=o===void 0?"variant":o,i=t.variants,s=i===void 0?{}:i,l=t.key,c;Object.keys(s).length?c=function(h,y,w){return RP(Ir(y,h,null))(w.theme)}:c=function(h,y){return Ir(y,h,null)},c.scale=r||l,c.defaults=s;var d=(n={},n[a]=c,n),f=Qm(d);return f};un({key:"buttons"});un({key:"textStyles",prop:"textStyle"});var Xt=un({key:"colorStyles",prop:"colors"});Qt.width;Qt.height;Qt.minWidth;Qt.minHeight;Qt.maxWidth;Qt.maxHeight;Qt.size;Qt.verticalAlign;Qt.display;Qt.overflow;Qt.overflowX;Qt.overflowY;Jm.opacity;xo.fontSize;xo.fontFamily;xo.fontWeight;xo.lineHeight;xo.textAlign;xo.fontStyle;xo.letterSpacing;Dt.alignItems;Dt.alignContent;Dt.justifyItems;Dt.justifyContent;Dt.flexWrap;Dt.flexDirection;Dt.flex;Dt.flexGrow;Dt.flexShrink;Dt.flexBasis;Dt.justifySelf;Dt.alignSelf;Dt.order;Jt.gridGap;Jt.gridColumnGap;Jt.gridRowGap;Jt.gridColumn;Jt.gridRow;Jt.gridAutoFlow;Jt.gridAutoColumns;Jt.gridAutoRows;Jt.gridTemplateColumns;Jt.gridTemplateRows;Jt.gridTemplateAreas;Jt.gridArea;Fr.borderWidth;Fr.borderStyle;Fr.borderColor;Fr.borderTop;Fr.borderRight;Fr.borderBottom;Fr.borderLeft;Fr.borderRadius;Xu.backgroundImage;Xu.backgroundSize;Xu.backgroundPosition;Xu.backgroundRepeat;ns.zIndex;ns.top;ns.right;ns.bottom;ns.left;function ru(e){"@babel/helpers - typeof";return ru=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ru(e)}var jP=/^\s+/,$P=/\s+$/;function Y(e,t){if(e=e||"",t=t||{},e instanceof Y)return e;if(!(this instanceof Y))return new Y(e,t);var n=PP(e);this._originalInput=e,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||n.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=n.ok}Y.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3},getLuminance:function(){var t=this.toRgb(),n,r,o,a,i,s;return n=t.r/255,r=t.g/255,o=t.b/255,n<=.03928?a=n/12.92:a=Math.pow((n+.055)/1.055,2.4),r<=.03928?i=r/12.92:i=Math.pow((r+.055)/1.055,2.4),o<=.03928?s=o/12.92:s=Math.pow((o+.055)/1.055,2.4),.2126*a+.7152*i+.0722*s},setAlpha:function(t){return this._a=Ck(t),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var t=Rv(this._r,this._g,this._b);return{h:t.h*360,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=Rv(this._r,this._g,this._b),n=Math.round(t.h*360),r=Math.round(t.s*100),o=Math.round(t.v*100);return this._a==1?"hsv("+n+", "+r+"%, "+o+"%)":"hsva("+n+", "+r+"%, "+o+"%, "+this._roundA+")"},toHsl:function(){var t=Tv(this._r,this._g,this._b);return{h:t.h*360,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=Tv(this._r,this._g,this._b),n=Math.round(t.h*360),r=Math.round(t.s*100),o=Math.round(t.l*100);return this._a==1?"hsl("+n+", "+r+"%, "+o+"%)":"hsla("+n+", "+r+"%, "+o+"%, "+this._roundA+")"},toHex:function(t){return jv(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return NP(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round($e(this._r,255)*100)+"%",g:Math.round($e(this._g,255)*100)+"%",b:Math.round($e(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round($e(this._r,255)*100)+"%, "+Math.round($e(this._g,255)*100)+"%, "+Math.round($e(this._b,255)*100)+"%)":"rgba("+Math.round($e(this._r,255)*100)+"%, "+Math.round($e(this._g,255)*100)+"%, "+Math.round($e(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:KP[jv(this._r,this._g,this._b,!0)]||!1},toFilter:function(t){var n="#"+$v(this._r,this._g,this._b,this._a),r=n,o=this._gradientType?"GradientType = 1, ":"";if(t){var a=Y(t);r="#"+$v(a._r,a._g,a._b,a._a)}return"progid:DXImageTransform.Microsoft.gradient("+o+"startColorstr="+n+",endColorstr="+r+")"},toString:function(t){var n=!!t;t=t||this._format;var r=!1,o=this._a<1&&this._a>=0,a=!n&&o&&(t==="hex"||t==="hex6"||t==="hex3"||t==="hex4"||t==="hex8"||t==="name");return a?t==="name"&&this._a===0?this.toName():this.toRgbString():(t==="rgb"&&(r=this.toRgbString()),t==="prgb"&&(r=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(r=this.toHexString()),t==="hex3"&&(r=this.toHexString(!0)),t==="hex4"&&(r=this.toHex8String(!0)),t==="hex8"&&(r=this.toHex8String()),t==="name"&&(r=this.toName()),t==="hsl"&&(r=this.toHslString()),t==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},clone:function(){return Y(this.toString())},_applyModification:function(t,n){var r=t.apply(null,[this].concat([].slice.call(n)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(FP,arguments)},brighten:function(){return this._applyModification(BP,arguments)},darken:function(){return this._applyModification(UP,arguments)},desaturate:function(){return this._applyModification(DP,arguments)},saturate:function(){return this._applyModification(MP,arguments)},greyscale:function(){return this._applyModification(zP,arguments)},spin:function(){return this._applyModification(HP,arguments)},_applyCombination:function(t,n){return t.apply(null,[this].concat([].slice.call(n)))},analogous:function(){return this._applyCombination(GP,arguments)},complement:function(){return this._applyCombination(WP,arguments)},monochromatic:function(){return this._applyCombination(qP,arguments)},splitcomplement:function(){return this._applyCombination(VP,arguments)},triad:function(){return this._applyCombination(Pv,[3])},tetrad:function(){return this._applyCombination(Pv,[4])}};Y.fromRatio=function(e,t){if(ru(e)=="object"){var n={};for(var r in e)e.hasOwnProperty(r)&&(r==="a"?n[r]=e[r]:n[r]=Za(e[r]));e=n}return Y(e,t)};function PP(e){var t={r:0,g:0,b:0},n=1,r=null,o=null,a=null,i=!1,s=!1;return typeof e=="string"&&(e=JP(e)),ru(e)=="object"&&(In(e.r)&&In(e.g)&&In(e.b)?(t=AP(e.r,e.g,e.b),i=!0,s=String(e.r).substr(-1)==="%"?"prgb":"rgb"):In(e.h)&&In(e.s)&&In(e.v)?(r=Za(e.s),o=Za(e.v),t=LP(e.h,r,o),i=!0,s="hsv"):In(e.h)&&In(e.s)&&In(e.l)&&(r=Za(e.s),a=Za(e.l),t=IP(e.h,r,a),i=!0,s="hsl"),e.hasOwnProperty("a")&&(n=e.a)),n=Ck(n),{ok:i,format:e.format||s,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:n}}function AP(e,t,n){return{r:$e(e,255)*255,g:$e(t,255)*255,b:$e(n,255)*255}}function Tv(e,t,n){e=$e(e,255),t=$e(t,255),n=$e(n,255);var r=Math.max(e,t,n),o=Math.min(e,t,n),a,i,s=(r+o)/2;if(r==o)a=i=0;else{var l=r-o;switch(i=s>.5?l/(2-r-o):l/(r+o),r){case e:a=(t-n)/l+(t<n?6:0);break;case t:a=(n-e)/l+2;break;case n:a=(e-t)/l+4;break}a/=6}return{h:a,s:i,l:s}}function IP(e,t,n){var r,o,a;e=$e(e,360),t=$e(t,100),n=$e(n,100);function i(c,d,f){return f<0&&(f+=1),f>1&&(f-=1),f<1/6?c+(d-c)*6*f:f<1/2?d:f<2/3?c+(d-c)*(2/3-f)*6:c}if(t===0)r=o=a=n;else{var s=n<.5?n*(1+t):n+t-n*t,l=2*n-s;r=i(l,s,e+1/3),o=i(l,s,e),a=i(l,s,e-1/3)}return{r:r*255,g:o*255,b:a*255}}function Rv(e,t,n){e=$e(e,255),t=$e(t,255),n=$e(n,255);var r=Math.max(e,t,n),o=Math.min(e,t,n),a,i,s=r,l=r-o;if(i=r===0?0:l/r,r==o)a=0;else{switch(r){case e:a=(t-n)/l+(t<n?6:0);break;case t:a=(n-e)/l+2;break;case n:a=(e-t)/l+4;break}a/=6}return{h:a,s:i,v:s}}function LP(e,t,n){e=$e(e,360)*6,t=$e(t,100),n=$e(n,100);var r=Math.floor(e),o=e-r,a=n*(1-t),i=n*(1-o*t),s=n*(1-(1-o)*t),l=r%6,c=[n,i,a,a,s,n][l],d=[s,n,n,i,a,a][l],f=[a,a,s,n,n,i][l];return{r:c*255,g:d*255,b:f*255}}function jv(e,t,n,r){var o=[cn(Math.round(e).toString(16)),cn(Math.round(t).toString(16)),cn(Math.round(n).toString(16))];return r&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function NP(e,t,n,r,o){var a=[cn(Math.round(e).toString(16)),cn(Math.round(t).toString(16)),cn(Math.round(n).toString(16)),cn(Ek(r))];return o&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)&&a[3].charAt(0)==a[3].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}function $v(e,t,n,r){var o=[cn(Ek(r)),cn(Math.round(e).toString(16)),cn(Math.round(t).toString(16)),cn(Math.round(n).toString(16))];return o.join("")}Y.equals=function(e,t){return!e||!t?!1:Y(e).toRgbString()==Y(t).toRgbString()};Y.random=function(){return Y.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})};function DP(e,t){t=t===0?0:t||10;var n=Y(e).toHsl();return n.s-=t/100,n.s=Qu(n.s),Y(n)}function MP(e,t){t=t===0?0:t||10;var n=Y(e).toHsl();return n.s+=t/100,n.s=Qu(n.s),Y(n)}function zP(e){return Y(e).desaturate(100)}function FP(e,t){t=t===0?0:t||10;var n=Y(e).toHsl();return n.l+=t/100,n.l=Qu(n.l),Y(n)}function BP(e,t){t=t===0?0:t||10;var n=Y(e).toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(t/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(t/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(t/100)))),Y(n)}function UP(e,t){t=t===0?0:t||10;var n=Y(e).toHsl();return n.l-=t/100,n.l=Qu(n.l),Y(n)}function HP(e,t){var n=Y(e).toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,Y(n)}function WP(e){var t=Y(e).toHsl();return t.h=(t.h+180)%360,Y(t)}function Pv(e,t){if(isNaN(t)||t<=0)throw new Error("Argument to polyad must be a positive number");for(var n=Y(e).toHsl(),r=[Y(e)],o=360/t,a=1;a<t;a++)r.push(Y({h:(n.h+a*o)%360,s:n.s,l:n.l}));return r}function VP(e){var t=Y(e).toHsl(),n=t.h;return[Y(e),Y({h:(n+72)%360,s:t.s,l:t.l}),Y({h:(n+216)%360,s:t.s,l:t.l})]}function GP(e,t,n){t=t||6,n=n||30;var r=Y(e).toHsl(),o=360/n,a=[Y(e)];for(r.h=(r.h-(o*t>>1)+720)%360;--t;)r.h=(r.h+o)%360,a.push(Y(r));return a}function qP(e,t){t=t||6;for(var n=Y(e).toHsv(),r=n.h,o=n.s,a=n.v,i=[],s=1/t;t--;)i.push(Y({h:r,s:o,v:a})),a=(a+s)%1;return i}Y.mix=function(e,t,n){n=n===0?0:n||50;var r=Y(e).toRgb(),o=Y(t).toRgb(),a=n/100,i={r:(o.r-r.r)*a+r.r,g:(o.g-r.g)*a+r.g,b:(o.b-r.b)*a+r.b,a:(o.a-r.a)*a+r.a};return Y(i)};Y.readability=function(e,t){var n=Y(e),r=Y(t);return(Math.max(n.getLuminance(),r.getLuminance())+.05)/(Math.min(n.getLuminance(),r.getLuminance())+.05)};Y.isReadable=function(e,t,n){var r=Y.readability(e,t),o,a;switch(a=!1,o=ZP(n),o.level+o.size){case"AAsmall":case"AAAlarge":a=r>=4.5;break;case"AAlarge":a=r>=3;break;case"AAAsmall":a=r>=7;break}return a};Y.mostReadable=function(e,t,n){var r=null,o=0,a,i,s,l;n=n||{},i=n.includeFallbackColors,s=n.level,l=n.size;for(var c=0;c<t.length;c++)a=Y.readability(e,t[c]),a>o&&(o=a,r=Y(t[c]));return Y.isReadable(e,r,{level:s,size:l})||!i?r:(n.includeFallbackColors=!1,Y.mostReadable(e,["#fff","#000"],n))};var Bf=Y.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},KP=Y.hexNames=YP(Bf);function YP(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}function Ck(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function $e(e,t){XP(e)&&(e="100%");var n=QP(e);return e=Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(e*t,10)/100),Math.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function Qu(e){return Math.min(1,Math.max(0,e))}function Ot(e){return parseInt(e,16)}function XP(e){return typeof e=="string"&&e.indexOf(".")!=-1&&parseFloat(e)===1}function QP(e){return typeof e=="string"&&e.indexOf("%")!=-1}function cn(e){return e.length==1?"0"+e:""+e}function Za(e){return e<=1&&(e=e*100+"%"),e}function Ek(e){return Math.round(parseFloat(e)*255).toString(16)}function Av(e){return Ot(e)/255}var nn=function(){var e="[-\\+]?\\d+%?",t="[-\\+]?\\d*\\.\\d+%?",n="(?:"+t+")|(?:"+e+")",r="[\\s|\\(]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")\\s*\\)?",o="[\\s|\\(]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")\\s*\\)?";return{CSS_UNIT:new RegExp(n),rgb:new RegExp("rgb"+r),rgba:new RegExp("rgba"+o),hsl:new RegExp("hsl"+r),hsla:new RegExp("hsla"+o),hsv:new RegExp("hsv"+r),hsva:new RegExp("hsva"+o),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function In(e){return!!nn.CSS_UNIT.exec(e)}function JP(e){e=e.replace(jP,"").replace($P,"").toLowerCase();var t=!1;if(Bf[e])e=Bf[e],t=!0;else if(e=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var n;return(n=nn.rgb.exec(e))?{r:n[1],g:n[2],b:n[3]}:(n=nn.rgba.exec(e))?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=nn.hsl.exec(e))?{h:n[1],s:n[2],l:n[3]}:(n=nn.hsla.exec(e))?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=nn.hsv.exec(e))?{h:n[1],s:n[2],v:n[3]}:(n=nn.hsva.exec(e))?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=nn.hex8.exec(e))?{r:Ot(n[1]),g:Ot(n[2]),b:Ot(n[3]),a:Av(n[4]),format:t?"name":"hex8"}:(n=nn.hex6.exec(e))?{r:Ot(n[1]),g:Ot(n[2]),b:Ot(n[3]),format:t?"name":"hex"}:(n=nn.hex4.exec(e))?{r:Ot(n[1]+""+n[1]),g:Ot(n[2]+""+n[2]),b:Ot(n[3]+""+n[3]),a:Av(n[4]+""+n[4]),format:t?"name":"hex8"}:(n=nn.hex3.exec(e))?{r:Ot(n[1]+""+n[1]),g:Ot(n[2]+""+n[2]),b:Ot(n[3]+""+n[3]),format:t?"name":"hex"}:!1}function ZP(e){var t,n;return e=e||{level:"AA",size:"small"},t=(e.level||"AA").toUpperCase(),n=(e.size||"small").toLowerCase(),t!=="AA"&&t!=="AAA"&&(t="AA"),n!=="small"&&n!=="large"&&(n="small"),{level:t,size:n}}/*!
* tabbable 5.3.3
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var Ok=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],ou=Ok.join(","),Tk=typeof Element>"u",mo=Tk?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Uf=!Tk&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},Rk=function(t,n,r){var o=Array.prototype.slice.apply(t.querySelectorAll(ou));return n&&mo.call(t,ou)&&o.unshift(t),o=o.filter(r),o},jk=function e(t,n,r){for(var o=[],a=Array.from(t);a.length;){var i=a.shift();if(i.tagName==="SLOT"){var s=i.assignedElements(),l=s.length?s:i.children,c=e(l,!0,r);r.flatten?o.push.apply(o,c):o.push({scope:i,candidates:c})}else{var d=mo.call(i,ou);d&&r.filter(i)&&(n||!t.includes(i))&&o.push(i);var f=i.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(i),p=!r.shadowRootFilter||r.shadowRootFilter(i);if(f&&p){var h=e(f===!0?i.children:f.children,!0,r);r.flatten?o.push.apply(o,h):o.push({scope:i,candidates:h})}else a.unshift.apply(a,i.children)}}return o},$k=function(t,n){return t.tabIndex<0&&(n||/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||t.isContentEditable)&&isNaN(parseInt(t.getAttribute("tabindex"),10))?0:t.tabIndex},eA=function(t,n){return t.tabIndex===n.tabIndex?t.documentOrder-n.documentOrder:t.tabIndex-n.tabIndex},Pk=function(t){return t.tagName==="INPUT"},tA=function(t){return Pk(t)&&t.type==="hidden"},nA=function(t){var n=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(r){return r.tagName==="SUMMARY"});return n},rA=function(t,n){for(var r=0;r<t.length;r++)if(t[r].checked&&t[r].form===n)return t[r]},oA=function(t){if(!t.name)return!0;var n=t.form||Uf(t),r=function(s){return n.querySelectorAll('input[type="radio"][name="'+s+'"]')},o;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")o=r(window.CSS.escape(t.name));else try{o=r(t.name)}catch(i){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",i.message),!1}var a=rA(o,t.form);return!a||a===t},aA=function(t){return Pk(t)&&t.type==="radio"},iA=function(t){return aA(t)&&!oA(t)},Iv=function(t){var n=t.getBoundingClientRect(),r=n.width,o=n.height;return r===0&&o===0},sA=function(t,n){var r=n.displayCheck,o=n.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var a=mo.call(t,"details>summary:first-of-type"),i=a?t.parentElement:t;if(mo.call(i,"details:not([open]) *"))return!0;var s=Uf(t).host,l=(s==null?void 0:s.ownerDocument.contains(s))||t.ownerDocument.contains(t);if(!r||r==="full"){if(typeof o=="function"){for(var c=t;t;){var d=t.parentElement,f=Uf(t);if(d&&!d.shadowRoot&&o(d)===!0)return Iv(t);t.assignedSlot?t=t.assignedSlot:!d&&f!==t.ownerDocument?t=f.host:t=d}t=c}if(l)return!t.getClientRects().length}else if(r==="non-zero-area")return Iv(t);return!1},lA=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var n=t.parentElement;n;){if(n.tagName==="FIELDSET"&&n.disabled){for(var r=0;r<n.children.length;r++){var o=n.children.item(r);if(o.tagName==="LEGEND")return mo.call(n,"fieldset[disabled] *")?!0:!o.contains(t)}return!0}n=n.parentElement}return!1},au=function(t,n){return!(n.disabled||tA(n)||sA(n,t)||nA(n)||lA(n))},Hf=function(t,n){return!(iA(n)||$k(n)<0||!au(t,n))},uA=function(t){var n=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},cA=function e(t){var n=[],r=[];return t.forEach(function(o,a){var i=!!o.scope,s=i?o.scope:o,l=$k(s,i),c=i?e(o.candidates):s;l===0?i?n.push.apply(n,c):n.push(s):r.push({documentOrder:a,tabIndex:l,item:o,isScope:i,content:c})}),r.sort(eA).reduce(function(o,a){return a.isScope?o.push.apply(o,a.content):o.push(a.content),o},[]).concat(n)},Ak=function(t,n){n=n||{};var r;return n.getShadowRoot?r=jk([t],n.includeContainer,{filter:Hf.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:uA}):r=Rk(t,n.includeContainer,Hf.bind(null,n)),cA(r)},Ik=function(t,n){n=n||{};var r;return n.getShadowRoot?r=jk([t],n.includeContainer,{filter:au.bind(null,n),flatten:!0,getShadowRoot:n.getShadowRoot}):r=Rk(t,n.includeContainer,au.bind(null,n)),r},ei=function(t,n){if(n=n||{},!t)throw new Error("No node provided");return mo.call(t,ou)===!1?!1:Hf(n,t)},dA=Ok.concat("iframe").join(","),vl=function(t,n){if(n=n||{},!t)throw new Error("No node provided");return mo.call(t,dA)===!1?!1:au(n,t)};const fA=Object.freeze(Object.defineProperty({__proto__:null,focusable:Ik,isFocusable:vl,isTabbable:ei,tabbable:Ak},Symbol.toStringTag,{value:"Module"}));/*!
* focus-trap 6.9.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function Lv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Nv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Lv(Object(n),!0).forEach(function(r){pA(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Lv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function pA(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Dv=function(){var e=[];return{activateTrap:function(n){if(e.length>0){var r=e[e.length-1];r!==n&&r.pause()}var o=e.indexOf(n);o===-1||e.splice(o,1),e.push(n)},deactivateTrap:function(n){var r=e.indexOf(n);r!==-1&&e.splice(r,1),e.length>0&&e[e.length-1].unpause()}}}(),mA=function(t){return t.tagName&&t.tagName.toLowerCase()==="input"&&typeof t.select=="function"},hA=function(t){return t.key==="Escape"||t.key==="Esc"||t.keyCode===27},gA=function(t){return t.key==="Tab"||t.keyCode===9},Mv=function(t){return setTimeout(t,0)},zv=function(t,n){var r=-1;return t.every(function(o,a){return n(o)?(r=a,!1):!0}),r},Fa=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return typeof t=="function"?t.apply(void 0,r):t},zs=function(t){return t.target.shadowRoot&&typeof t.composedPath=="function"?t.composedPath()[0]:t.target},vA=function(t,n){var r=(n==null?void 0:n.document)||document,o=Nv({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},n),a={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},i,s=function(_,E,O){return _&&_[E]!==void 0?_[E]:o[O||E]},l=function(_){return a.containerGroups.findIndex(function(E){var O=E.container,A=E.tabbableNodes;return O.contains(_)||A.find(function($){return $===_})})},c=function(_){var E=o[_];if(typeof E=="function"){for(var O=arguments.length,A=new Array(O>1?O-1:0),$=1;$<O;$++)A[$-1]=arguments[$];E=E.apply(void 0,A)}if(E===!0&&(E=void 0),!E){if(E===void 0||E===!1)return E;throw new Error("`".concat(_,"` was specified but was not a node, or did not return a node"))}var I=E;if(typeof E=="string"&&(I=r.querySelector(E),!I))throw new Error("`".concat(_,"` as selector refers to no known node"));return I},d=function(){var _=c("initialFocus");if(_===!1)return!1;if(_===void 0)if(l(r.activeElement)>=0)_=r.activeElement;else{var E=a.tabbableGroups[0],O=E&&E.firstTabbableNode;_=O||c("fallbackFocus")}if(!_)throw new Error("Your focus-trap needs to have at least one focusable element");return _},f=function(){if(a.containerGroups=a.containers.map(function(_){var E=Ak(_,o.tabbableOptions),O=Ik(_,o.tabbableOptions);return{container:_,tabbableNodes:E,focusableNodes:O,firstTabbableNode:E.length>0?E[0]:null,lastTabbableNode:E.length>0?E[E.length-1]:null,nextTabbableNode:function($){var I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,B=O.findIndex(function(H){return H===$});if(!(B<0))return I?O.slice(B+1).find(function(H){return ei(H,o.tabbableOptions)}):O.slice(0,B).reverse().find(function(H){return ei(H,o.tabbableOptions)})}}}),a.tabbableGroups=a.containerGroups.filter(function(_){return _.tabbableNodes.length>0}),a.tabbableGroups.length<=0&&!c("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},p=function C(_){if(_!==!1&&_!==r.activeElement){if(!_||!_.focus){C(d());return}_.focus({preventScroll:!!o.preventScroll}),a.mostRecentlyFocusedNode=_,mA(_)&&_.select()}},h=function(_){var E=c("setReturnFocus",_);return E||(E===!1?!1:_)},y=function(_){var E=zs(_);if(!(l(E)>=0)){if(Fa(o.clickOutsideDeactivates,_)){i.deactivate({returnFocus:o.returnFocusOnDeactivate&&!vl(E,o.tabbableOptions)});return}Fa(o.allowOutsideClick,_)||_.preventDefault()}},w=function(_){var E=zs(_),O=l(E)>=0;O||E instanceof Document?O&&(a.mostRecentlyFocusedNode=E):(_.stopImmediatePropagation(),p(a.mostRecentlyFocusedNode||d()))},x=function(_){var E=zs(_);f();var O=null;if(a.tabbableGroups.length>0){var A=l(E),$=A>=0?a.containerGroups[A]:void 0;if(A<0)_.shiftKey?O=a.tabbableGroups[a.tabbableGroups.length-1].lastTabbableNode:O=a.tabbableGroups[0].firstTabbableNode;else if(_.shiftKey){var I=zv(a.tabbableGroups,function(ae){var j=ae.firstTabbableNode;return E===j});if(I<0&&($.container===E||vl(E,o.tabbableOptions)&&!ei(E,o.tabbableOptions)&&!$.nextTabbableNode(E,!1))&&(I=A),I>=0){var B=I===0?a.tabbableGroups.length-1:I-1,H=a.tabbableGroups[B];O=H.lastTabbableNode}}else{var ee=zv(a.tabbableGroups,function(ae){var j=ae.lastTabbableNode;return E===j});if(ee<0&&($.container===E||vl(E,o.tabbableOptions)&&!ei(E,o.tabbableOptions)&&!$.nextTabbableNode(E))&&(ee=A),ee>=0){var re=ee===a.tabbableGroups.length-1?0:ee+1,ie=a.tabbableGroups[re];O=ie.firstTabbableNode}}}else O=c("fallbackFocus");O&&(_.preventDefault(),p(O))},v=function(_){if(hA(_)&&Fa(o.escapeDeactivates,_)!==!1){_.preventDefault(),i.deactivate();return}if(gA(_)){x(_);return}},m=function(_){var E=zs(_);l(E)>=0||Fa(o.clickOutsideDeactivates,_)||Fa(o.allowOutsideClick,_)||(_.preventDefault(),_.stopImmediatePropagation())},b=function(){if(a.active)return Dv.activateTrap(i),a.delayInitialFocusTimer=o.delayInitialFocus?Mv(function(){p(d())}):p(d()),r.addEventListener("focusin",w,!0),r.addEventListener("mousedown",y,{capture:!0,passive:!1}),r.addEventListener("touchstart",y,{capture:!0,passive:!1}),r.addEventListener("click",m,{capture:!0,passive:!1}),r.addEventListener("keydown",v,{capture:!0,passive:!1}),i},k=function(){if(a.active)return r.removeEventListener("focusin",w,!0),r.removeEventListener("mousedown",y,!0),r.removeEventListener("touchstart",y,!0),r.removeEventListener("click",m,!0),r.removeEventListener("keydown",v,!0),i};return i={get active(){return a.active},get paused(){return a.paused},activate:function(_){if(a.active)return this;var E=s(_,"onActivate"),O=s(_,"onPostActivate"),A=s(_,"checkCanFocusTrap");A||f(),a.active=!0,a.paused=!1,a.nodeFocusedBeforeActivation=r.activeElement,E&&E();var $=function(){A&&f(),b(),O&&O()};return A?(A(a.containers.concat()).then($,$),this):($(),this)},deactivate:function(_){if(!a.active)return this;var E=Nv({onDeactivate:o.onDeactivate,onPostDeactivate:o.onPostDeactivate,checkCanReturnFocus:o.checkCanReturnFocus},_);clearTimeout(a.delayInitialFocusTimer),a.delayInitialFocusTimer=void 0,k(),a.active=!1,a.paused=!1,Dv.deactivateTrap(i);var O=s(E,"onDeactivate"),A=s(E,"onPostDeactivate"),$=s(E,"checkCanReturnFocus"),I=s(E,"returnFocus","returnFocusOnDeactivate");O&&O();var B=function(){Mv(function(){I&&p(h(a.nodeFocusedBeforeActivation)),A&&A()})};return I&&$?($(h(a.nodeFocusedBeforeActivation)).then(B,B),this):(B(),this)},pause:function(){return a.paused||!a.active?this:(a.paused=!0,k(),this)},unpause:function(){return!a.paused||!a.active?this:(a.paused=!1,f(),b(),this)},updateContainerElements:function(_){var E=[].concat(_).filter(Boolean);return a.containers=E.map(function(O){return typeof O=="string"?r.querySelector(O):O}),a.active&&f(),this}},i.updateContainerElements(t),i};const yA=Object.freeze(Object.defineProperty({__proto__:null,createFocusTrap:vA},Symbol.toStringTag,{value:"Module"})),bA=wp(yA),wA=wp(fA);function Wf(e){"@babel/helpers - typeof";return Wf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Wf(e)}function xA(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function kA(e,t,n){return _A(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function SA(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Vf(e,t)}function Vf(e,t){return Vf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},Vf(e,t)}function CA(e){var t=OA();return function(){var r=iu(e),o;if(t){var a=iu(this).constructor;o=Reflect.construct(r,arguments,a)}else o=r.apply(this,arguments);return EA(this,o)}}function EA(e,t){if(t&&(Wf(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ti(e)}function ti(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function OA(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function iu(e){return iu=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},iu(e)}function TA(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Fs=g,RA=ju,oe=yo,jA=bA,$A=jA.createFocusTrap,PA=wA,AA=PA.isFocusable,Lk=function(e){SA(n,e);var t=CA(n);function n(r){var o;xA(this,n),o=t.call(this,r),TA(ti(o),"getNodeForOption",function(s){var l,c=(l=this.internalOptions[s])!==null&&l!==void 0?l:this.originalOptions[s];if(typeof c=="function"){for(var d=arguments.length,f=new Array(d>1?d-1:0),p=1;p<d;p++)f[p-1]=arguments[p];c=c.apply(void 0,f)}if(c===!0&&(c=void 0),!c){if(c===void 0||c===!1)return c;throw new Error("`".concat(s,"` was specified but was not a node, or did not return a node"))}var h=c;if(typeof c=="string"){var y;if(h=(y=this.getDocument())===null||y===void 0?void 0:y.querySelector(c),!h)throw new Error("`".concat(s,"` as selector refers to no known node"))}return h}),o.handleDeactivate=o.handleDeactivate.bind(ti(o)),o.handlePostDeactivate=o.handlePostDeactivate.bind(ti(o)),o.handleClickOutsideDeactivates=o.handleClickOutsideDeactivates.bind(ti(o)),o.internalOptions={returnFocusOnDeactivate:!1,checkCanReturnFocus:null,onDeactivate:o.handleDeactivate,onPostDeactivate:o.handlePostDeactivate,clickOutsideDeactivates:o.handleClickOutsideDeactivates},o.originalOptions={returnFocusOnDeactivate:!0,onDeactivate:null,onPostDeactivate:null,checkCanReturnFocus:null,clickOutsideDeactivates:!1};var a=r.focusTrapOptions;for(var i in a)if(Object.prototype.hasOwnProperty.call(a,i)){if(i==="returnFocusOnDeactivate"||i==="onDeactivate"||i==="onPostDeactivate"||i==="checkCanReturnFocus"||i==="clickOutsideDeactivates"){o.originalOptions[i]=a[i];continue}o.internalOptions[i]=a[i]}return o.outsideClick=null,o.focusTrapElements=r.containerElements||[],o.updatePreviousElement(),o}return kA(n,[{key:"getDocument",value:function(){return this.props.focusTrapOptions.document||(typeof document<"u"?document:void 0)}},{key:"getReturnFocusNode",value:function(){var o=this.getNodeForOption("setReturnFocus",this.previouslyFocusedElement);return o||(o===!1?!1:this.previouslyFocusedElement)}},{key:"updatePreviousElement",value:function(){var o=this.getDocument();o&&(this.previouslyFocusedElement=o.activeElement)}},{key:"deactivateTrap",value:function(){!this.focusTrap||!this.focusTrap.active||this.focusTrap.deactivate({returnFocus:!1,checkCanReturnFocus:null,onDeactivate:this.originalOptions.onDeactivate})}},{key:"handleClickOutsideDeactivates",value:function(o){var a=typeof this.originalOptions.clickOutsideDeactivates=="function"?this.originalOptions.clickOutsideDeactivates.call(null,o):this.originalOptions.clickOutsideDeactivates;return a&&(this.outsideClick={target:o.target,allowDeactivation:a}),a}},{key:"handleDeactivate",value:function(){this.originalOptions.onDeactivate&&this.originalOptions.onDeactivate.call(null),this.deactivateTrap()}},{key:"handlePostDeactivate",value:function(){var o=this,a=function(){var s=o.getReturnFocusNode(),l=!!(o.originalOptions.returnFocusOnDeactivate&&s!==null&&s!==void 0&&s.focus&&(!o.outsideClick||o.outsideClick.allowDeactivation&&!AA(o.outsideClick.target,o.internalOptions.tabbableOptions))),c=o.internalOptions.preventScroll,d=c===void 0?!1:c;l&&s.focus({preventScroll:d}),o.originalOptions.onPostDeactivate&&o.originalOptions.onPostDeactivate.call(null),o.outsideClick=null};this.originalOptions.checkCanReturnFocus?this.originalOptions.checkCanReturnFocus.call(null,this.getReturnFocusNode()).then(a,a):a()}},{key:"setupFocusTrap",value:function(){if(!this.focusTrap){var o=this.focusTrapElements.map(RA.findDOMNode),a=o.some(Boolean);a&&(this.focusTrap=this.props._createFocusTrap(o,this.internalOptions),this.props.active&&this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause())}}},{key:"componentDidMount",value:function(){this.props.active&&this.setupFocusTrap()}},{key:"componentDidUpdate",value:function(o){if(this.focusTrap){o.containerElements!==this.props.containerElements&&this.focusTrap.updateContainerElements(this.props.containerElements);var a=!o.active&&this.props.active,i=o.active&&!this.props.active,s=!o.paused&&this.props.paused,l=o.paused&&!this.props.paused;if(a&&(this.updatePreviousElement(),this.focusTrap.activate()),i){this.deactivateTrap();return}s&&this.focusTrap.pause(),l&&this.focusTrap.unpause()}else o.containerElements!==this.props.containerElements&&(this.focusTrapElements=this.props.containerElements),this.props.active&&(this.updatePreviousElement(),this.setupFocusTrap())}},{key:"componentWillUnmount",value:function(){this.deactivateTrap()}},{key:"render",value:function(){var o=this,a=this.props.children?Fs.Children.only(this.props.children):void 0;if(a){if(a.type&&a.type===Fs.Fragment)throw new Error("A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.");var i=function(c){var d=o.props.containerElements;a&&(typeof a.ref=="function"?a.ref(c):a.ref&&(a.ref.current=c)),o.focusTrapElements=d||[c]},s=Fs.cloneElement(a,{ref:i});return s}return null}}]),n}(Fs.Component),Ba=typeof Element>"u"?Function:Element;Lk.propTypes={active:oe.bool,paused:oe.bool,focusTrapOptions:oe.shape({document:oe.object,onActivate:oe.func,onPostActivate:oe.func,checkCanFocusTrap:oe.func,onDeactivate:oe.func,onPostDeactivate:oe.func,checkCanReturnFocus:oe.func,initialFocus:oe.oneOfType([oe.instanceOf(Ba),oe.string,oe.bool,oe.func]),fallbackFocus:oe.oneOfType([oe.instanceOf(Ba),oe.string,oe.func]),escapeDeactivates:oe.oneOfType([oe.bool,oe.func]),clickOutsideDeactivates:oe.oneOfType([oe.bool,oe.func]),returnFocusOnDeactivate:oe.bool,setReturnFocus:oe.oneOfType([oe.instanceOf(Ba),oe.string,oe.bool,oe.func]),allowOutsideClick:oe.oneOfType([oe.bool,oe.func]),preventScroll:oe.bool,tabbableOptions:oe.shape({displayCheck:oe.oneOf(["full","non-zero-area","none"]),getShadowRoot:oe.oneOfType([oe.bool,oe.func])})}),containerElements:oe.arrayOf(oe.instanceOf(Ba)),children:oe.oneOfType([oe.element,oe.instanceOf(Ba)])};Lk.defaultProps={active:!0,paused:!1,focusTrapOptions:{},_createFocusTrap:$A};var Gf=g,IA=yo,LA=Dx;function Zm(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var kn=Zm(Gf),We=Zm(IA),ed=Zm(LA);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var _n=function(){return _n=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},_n.apply(this,arguments)};function qf(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}var NA="range-slider",DA=kn.default.forwardRef(function(e,t){var n=e.classes,r=e.value,o=e.min,a=e.max,i=e.onChange,s=e.onMouseUpOrTouchEnd,l=e.onMouseUp,c=e.onTouchEnd,d=qf(e,["classes","value","min","max","onChange","onMouseUpOrTouchEnd","onMouseUp","onTouchEnd"]);return kn.default.createElement("input",_n({ref:t,type:"range",value:r,min:o,max:a,onChange:function(f){return i(f,f.target.valueAsNumber)},onMouseUp:function(f){s(f),l&&l(f)},onTouchEnd:function(f){s(f),c&&c(f)},className:n,"aria-valuenow":Number(r),"aria-valuemin":Number(o),"aria-valuemax":Number(a)},d))}),MA=kn.default.memo(DA),Nk=kn.default.forwardRef(function(e,t){var n=e.value,r=e.onChange,o=r===void 0?function(){}:r,a=e.onAfterChange,i=a===void 0?function(){}:a,s=e.disabled,l=s===void 0?!1:s,c=e.size,d=e.min,f=d===void 0?0:d,p=e.max,h=p===void 0?100:p,y=e.step,w=e.variant,x=w===void 0?"primary":w,v=e.inputProps,m=v===void 0?{}:v,b=e.tooltip,k=b===void 0?"auto":b,C=e.tooltipPlacement,_=C===void 0?"bottom":C,E=e.tooltipLabel,O=e.tooltipStyle,A=O===void 0?{}:O,$=e.tooltipProps,I=$===void 0?{}:$,B=e.bsPrefix,H=e.className,ee=qf(e,["value","onChange","onAfterChange","disabled","size","min","max","step","variant","inputProps","tooltip","tooltipPlacement","tooltipLabel","tooltipStyle","tooltipProps","bsPrefix","className"]),re=Gf.useState(),ie=re[0],ae=re[1],j=B||NA,W=k==="auto"||k==="on",U=ed.default(H,j,c&&j+"--"+c,l&&"disabled",x&&j+"--"+x),te=_n(_n({},m),ee),N=te.onMouseUp,F=te.onTouchEnd,L=qf(te,["onMouseUp","onTouchEnd"]),z=Gf.useCallback(function(_e){ie!==_e.target.value&&i(_e,_e.target.valueAsNumber),ae(_e.target.value)},[ie,i]),T=kn.default.createElement(MA,_n({},_n({disabled:l,value:n,min:f,max:h,ref:t,step:y,classes:U,onMouseUpOrTouchEnd:z,onTouchEnd:F,onMouseUp:N,onChange:o},L))),ne=ed.default(j+"__wrap",c&&j+"__wrap--"+c),M=ed.default(j+"__tooltip",W&&j+"__tooltip--"+k,_&&j+"__tooltip--"+_,l&&j+"__tooltip--disabled"),ge=c==="sm"?8:c==="lg"?12:10,se=(Number(n)-f)/(h-f),le=se*100,Q=(se-.5)*2,xe=Q*-ge;return kn.default.createElement("span",{className:ne},T,W&&kn.default.createElement("div",_n({className:M,style:_n(_n({},A||{}),{left:"calc("+le+"% + "+xe+"px)"})},I),kn.default.createElement("div",{className:j+"__tooltip__label"},E?E(Number(n)):n),kn.default.createElement("div",{className:j+"__tooltip__caret"})))});Nk.propTypes={value:We.default.oneOfType([We.default.number,We.default.string]).isRequired,onChange:We.default.func,onAfterChange:We.default.func,min:We.default.number,max:We.default.number,step:We.default.number,disabled:We.default.bool,size:We.default.oneOf(["sm","lg"]),variant:We.default.oneOf(["primary","secondary","success","danger","warning","info","dark","light"]),inputProps:We.default.object,tooltip:We.default.oneOf(["auto","on","off"]),tooltipPlacement:We.default.oneOf(["top","bottom"]),tooltipLabel:We.default.func,tooltipStyle:We.default.object,tooltipProps:We.default.object,className:We.default.string,bsPrefix:We.default.string};kn.default.memo(Nk);var ze={},eh={},rs={},os={},Dk="Expected a function",Fv=NaN,zA="[object Symbol]",FA=/^\s+|\s+$/g,BA=/^[-+]0x[0-9a-f]+$/i,UA=/^0b[01]+$/i,HA=/^0o[0-7]+$/i,WA=parseInt,VA=typeof st=="object"&&st&&st.Object===Object&&st,GA=typeof self=="object"&&self&&self.Object===Object&&self,qA=VA||GA||Function("return this")(),KA=Object.prototype,YA=KA.toString,XA=Math.max,QA=Math.min,td=function(){return qA.Date.now()};function JA(e,t,n){var r,o,a,i,s,l,c=0,d=!1,f=!1,p=!0;if(typeof e!="function")throw new TypeError(Dk);t=Bv(t)||0,su(n)&&(d=!!n.leading,f="maxWait"in n,a=f?XA(Bv(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p);function h(_){var E=r,O=o;return r=o=void 0,c=_,i=e.apply(O,E),i}function y(_){return c=_,s=setTimeout(v,t),d?h(_):i}function w(_){var E=_-l,O=_-c,A=t-E;return f?QA(A,a-O):A}function x(_){var E=_-l,O=_-c;return l===void 0||E>=t||E<0||f&&O>=a}function v(){var _=td();if(x(_))return m(_);s=setTimeout(v,w(_))}function m(_){return s=void 0,p&&r?h(_):(r=o=void 0,i)}function b(){s!==void 0&&clearTimeout(s),c=0,r=l=o=s=void 0}function k(){return s===void 0?i:m(td())}function C(){var _=td(),E=x(_);if(r=arguments,o=this,l=_,E){if(s===void 0)return y(l);if(f)return s=setTimeout(v,t),h(l)}return s===void 0&&(s=setTimeout(v,t)),i}return C.cancel=b,C.flush=k,C}function ZA(e,t,n){var r=!0,o=!0;if(typeof e!="function")throw new TypeError(Dk);return su(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),JA(e,t,{leading:r,maxWait:t,trailing:o})}function su(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function eI(e){return!!e&&typeof e=="object"}function tI(e){return typeof e=="symbol"||eI(e)&&YA.call(e)==zA}function Bv(e){if(typeof e=="number")return e;if(tI(e))return Fv;if(su(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=su(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(FA,"");var n=UA.test(e);return n||HA.test(e)?WA(e.slice(2),n?2:8):BA.test(e)?Fv:+e}var nI=ZA,as={};Object.defineProperty(as,"__esModule",{value:!0});as.addPassiveEventListener=function(t,n,r){var o=r.name;o||(o=n,console.warn("Listener must be a named function.")),yl.has(n)||yl.set(n,new Set);var a=yl.get(n);if(!a.has(o)){var i=function(){var s=!1;try{var l=Object.defineProperty({},"passive",{get:function(){s=!0}});window.addEventListener("test",null,l)}catch{}return s}();t.addEventListener(n,r,i?{passive:!0}:!1),a.add(o)}};as.removePassiveEventListener=function(t,n,r){t.removeEventListener(n,r),yl.get(n).delete(r.name||n)};var yl=new Map;Object.defineProperty(os,"__esModule",{value:!0});var rI=nI,oI=iI(rI),aI=as;function iI(e){return e.__esModule?e:{default:e}}var sI=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,oI.default)(t,n)},Ae={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(t,n){if(t){var r=sI(function(o){Ae.scrollHandler(t)},n);Ae.scrollSpyContainers.push(t),(0,aI.addPassiveEventListener)(t,"scroll",r)}},isMounted:function(t){return Ae.scrollSpyContainers.indexOf(t)!==-1},currentPositionX:function(t){if(t===document){var n=window.pageYOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft}else return t.scrollLeft},currentPositionY:function(t){if(t===document){var n=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop}else return t.scrollTop},scrollHandler:function(t){var n=Ae.scrollSpyContainers[Ae.scrollSpyContainers.indexOf(t)].spyCallbacks||[];n.forEach(function(r){return r(Ae.currentPositionX(t),Ae.currentPositionY(t))})},addStateHandler:function(t){Ae.spySetState.push(t)},addSpyHandler:function(t,n){var r=Ae.scrollSpyContainers[Ae.scrollSpyContainers.indexOf(n)];r.spyCallbacks||(r.spyCallbacks=[]),r.spyCallbacks.push(t),t(Ae.currentPositionX(n),Ae.currentPositionY(n))},updateStates:function(){Ae.spySetState.forEach(function(t){return t()})},unmount:function(t,n){Ae.scrollSpyContainers.forEach(function(r){return r.spyCallbacks&&r.spyCallbacks.length&&r.spyCallbacks.indexOf(n)>-1&&r.spyCallbacks.splice(r.spyCallbacks.indexOf(n),1)}),Ae.spySetState&&Ae.spySetState.length&&Ae.spySetState.indexOf(t)>-1&&Ae.spySetState.splice(Ae.spySetState.indexOf(t),1),document.removeEventListener("scroll",Ae.scrollHandler)},update:function(){return Ae.scrollSpyContainers.forEach(function(t){return Ae.scrollHandler(t)})}};os.default=Ae;var Ea={},is={};Object.defineProperty(is,"__esModule",{value:!0});var lI=function(t,n){var r=t.indexOf("#")===0?t.substring(1):t,o=r?"#"+r:"",a=window&&window.location,i=o?a.pathname+a.search+o:a.pathname+a.search;n?history.pushState(history.state,"",i):history.replaceState(history.state,"",i)},uI=function(){return window.location.hash.replace(/^#/,"")},cI=function(t){return function(n){return t.contains?t!=n&&t.contains(n):!!(t.compareDocumentPosition(n)&16)}},dI=function(t){return getComputedStyle(t).position!=="static"},nd=function(t,n){for(var r=t.offsetTop,o=t.offsetParent;o&&!n(o);)r+=o.offsetTop,o=o.offsetParent;return{offsetTop:r,offsetParent:o}},fI=function(t,n,r){if(r)return t===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(t).position!=="static"?n.offsetLeft:n.offsetLeft-t.offsetLeft;if(t===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(dI(t)){if(n.offsetParent!==t){var o=function(d){return d===t||d===document},a=nd(n,o),i=a.offsetTop,s=a.offsetParent;if(s!==t)throw new Error("Seems containerElement is not an ancestor of the Element");return i}return n.offsetTop}if(n.offsetParent===t.offsetParent)return n.offsetTop-t.offsetTop;var l=function(d){return d===document};return nd(n,l).offsetTop-nd(t,l).offsetTop};is.default={updateHash:lI,getHash:uI,filterElementInContainer:cI,scrollOffset:fI};var Ju={},th={};Object.defineProperty(th,"__esModule",{value:!0});th.default={defaultEasing:function(t){return t<.5?Math.pow(t*2,2)/2:1-Math.pow((1-t)*2,2)/2},linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:-1+(4-2*t)*t},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}};var nh={};Object.defineProperty(nh,"__esModule",{value:!0});var pI=as,mI=["mousedown","mousewheel","touchmove","keydown"];nh.default={subscribe:function(t){return typeof document<"u"&&mI.forEach(function(n){return(0,pI.addPassiveEventListener)(document,n,t)})}};var ss={};Object.defineProperty(ss,"__esModule",{value:!0});var Kf={registered:{},scrollEvent:{register:function(t,n){Kf.registered[t]=n},remove:function(t){Kf.registered[t]=null}}};ss.default=Kf;Object.defineProperty(Ju,"__esModule",{value:!0});var hI=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gI=is;Zu(gI);var vI=th,Uv=Zu(vI),yI=nh,bI=Zu(yI),wI=ss,Sn=Zu(wI);function Zu(e){return e&&e.__esModule?e:{default:e}}var Mk=function(t){return Uv.default[t.smooth]||Uv.default.defaultEasing},xI=function(t){return typeof t=="function"?t:function(){return t}},_I=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},Yf=function(){return _I()||function(e,t,n){window.setTimeout(e,n||1e3/60,new Date().getTime())}}(),zk=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},Fk=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var r=window.pageXOffset!==void 0,o=(document.compatMode||"")==="CSS1Compat";return r?window.pageXOffset:o?document.documentElement.scrollLeft:document.body.scrollLeft},Bk=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var r=window.pageXOffset!==void 0,o=(document.compatMode||"")==="CSS1Compat";return r?window.pageYOffset:o?document.documentElement.scrollTop:document.body.scrollTop},kI=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var r=document.body,o=document.documentElement;return Math.max(r.scrollWidth,r.offsetWidth,o.clientWidth,o.scrollWidth,o.offsetWidth)},SI=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var r=document.body,o=document.documentElement;return Math.max(r.scrollHeight,r.offsetHeight,o.clientHeight,o.scrollHeight,o.offsetHeight)},CI=function e(t,n,r){var o=n.data;if(!n.ignoreCancelEvents&&o.cancel){Sn.default.registered.end&&Sn.default.registered.end(o.to,o.target,o.currentPositionY);return}if(o.delta=Math.round(o.targetPosition-o.startPosition),o.start===null&&(o.start=r),o.progress=r-o.start,o.percent=o.progress>=o.duration?1:t(o.progress/o.duration),o.currentPosition=o.startPosition+Math.ceil(o.delta*o.percent),o.containerElement&&o.containerElement!==document&&o.containerElement!==document.body?n.horizontal?o.containerElement.scrollLeft=o.currentPosition:o.containerElement.scrollTop=o.currentPosition:n.horizontal?window.scrollTo(o.currentPosition,0):window.scrollTo(0,o.currentPosition),o.percent<1){var a=e.bind(null,t,n);Yf.call(window,a);return}Sn.default.registered.end&&Sn.default.registered.end(o.to,o.target,o.currentPosition)},rh=function(t){t.data.containerElement=t?t.containerId?document.getElementById(t.containerId):t.container&&t.container.nodeType?t.container:document:null},ls=function(t,n,r,o){n.data=n.data||zk(),window.clearTimeout(n.data.delayTimeout);var a=function(){n.data.cancel=!0};if(bI.default.subscribe(a),rh(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?Fk(n):Bk(n),n.data.targetPosition=n.absolute?t:t+n.data.startPosition,n.data.startPosition===n.data.targetPosition){Sn.default.registered.end&&Sn.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=xI(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=r,n.data.target=o;var i=Mk(n),s=CI.bind(null,i,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){Sn.default.registered.begin&&Sn.default.registered.begin(n.data.to,n.data.target),Yf.call(window,s)},n.delay);return}Sn.default.registered.begin&&Sn.default.registered.begin(n.data.to,n.data.target),Yf.call(window,s)},ec=function(t){return t=hI({},t),t.data=t.data||zk(),t.absolute=!0,t},EI=function(t){ls(0,ec(t))},OI=function(t,n){ls(t,ec(n))},TI=function(t){t=ec(t),rh(t),ls(t.horizontal?kI(t):SI(t),t)},RI=function(t,n){n=ec(n),rh(n);var r=n.horizontal?Fk(n):Bk(n);ls(t+r,n)};Ju.default={animateTopScroll:ls,getAnimationType:Mk,scrollToTop:EI,scrollToBottom:TI,scrollTo:OI,scrollMore:RI};Object.defineProperty(Ea,"__esModule",{value:!0});var jI=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$I=is,PI=oh($I),AI=Ju,II=oh(AI),LI=ss,Bs=oh(LI);function oh(e){return e&&e.__esModule?e:{default:e}}var Us={},Hv=void 0;Ea.default={unmount:function(){Us={}},register:function(t,n){Us[t]=n},unregister:function(t){delete Us[t]},get:function(t){return Us[t]||document.getElementById(t)||document.getElementsByName(t)[0]||document.getElementsByClassName(t)[0]},setActiveLink:function(t){return Hv=t},getActiveLink:function(){return Hv},scrollTo:function(t,n){var r=this.get(t);if(!r){console.warn("target Element not found");return}n=jI({},n,{absolute:!1});var o=n.containerId,a=n.container,i=void 0;o?i=document.getElementById(o):a&&a.nodeType?i=a:i=document,n.absolute=!0;var s=n.horizontal,l=PI.default.scrollOffset(i,r,s)+(n.offset||0);if(!n.smooth){Bs.default.registered.begin&&Bs.default.registered.begin(t,r),i===document?n.horizontal?window.scrollTo(l,0):window.scrollTo(0,l):i.scrollTop=l,Bs.default.registered.end&&Bs.default.registered.end(t,r);return}II.default.animateTopScroll(l,n,t,r)}};var tc={};Object.defineProperty(tc,"__esModule",{value:!0});var NI=is,rd=DI(NI);function DI(e){return e.__esModule?e:{default:e}}var MI={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(t){this.scroller=t,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(t,n){this.containers[t]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var t=this,n=this.getHash();n?window.setTimeout(function(){t.scrollTo(n,!0),t.initialized=!0},10):this.initialized=!0},scrollTo:function(t,n){var r=this.scroller,o=r.get(t);if(o&&(n||t!==r.getActiveLink())){var a=this.containers[t]||document;r.scrollTo(t,{container:a})}},getHash:function(){return rd.default.getHash()},changeHash:function(t,n){this.isInitialized()&&rd.default.getHash()!==t&&rd.default.updateHash(t,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};tc.default=MI;Object.defineProperty(rs,"__esModule",{value:!0});var Hs=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zI=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),FI=g,Wv=us(FI),BI=os,Ws=us(BI),UI=Ea,HI=us(UI),WI=yo,je=us(WI),VI=tc,rr=us(VI);function us(e){return e&&e.__esModule?e:{default:e}}function GI(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function qI(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function KI(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Vv={to:je.default.string.isRequired,containerId:je.default.string,container:je.default.object,activeClass:je.default.string,activeStyle:je.default.object,spy:je.default.bool,horizontal:je.default.bool,smooth:je.default.oneOfType([je.default.bool,je.default.string]),offset:je.default.number,delay:je.default.number,isDynamic:je.default.bool,onClick:je.default.func,duration:je.default.oneOfType([je.default.number,je.default.func]),absolute:je.default.bool,onSetActive:je.default.func,onSetInactive:je.default.func,ignoreCancelEvents:je.default.bool,hashSpy:je.default.bool,saveHashHistory:je.default.bool,spyThrottle:je.default.number};rs.default=function(e,t){var n=t||HI.default,r=function(a){KI(i,a);function i(s){GI(this,i);var l=qI(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,s));return o.call(l),l.state={active:!1},l}return zI(i,[{key:"getScrollSpyContainer",value:function(){var l=this.props.containerId,c=this.props.container;return l&&!c?document.getElementById(l):c&&c.nodeType?c:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var l=this.getScrollSpyContainer();Ws.default.isMounted(l)||Ws.default.mount(l,this.props.spyThrottle),this.props.hashSpy&&(rr.default.isMounted()||rr.default.mount(n),rr.default.mapContainer(this.props.to,l)),Ws.default.addSpyHandler(this.spyHandler,l),this.setState({container:l})}}},{key:"componentWillUnmount",value:function(){Ws.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var l="";this.state&&this.state.active?l=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():l=this.props.className;var c={};this.state&&this.state.active?c=Hs({},this.props.style,this.props.activeStyle):c=Hs({},this.props.style);var d=Hs({},this.props);for(var f in Vv)d.hasOwnProperty(f)&&delete d[f];return d.className=l,d.style=c,d.onClick=this.handleClick,Wv.default.createElement(e,d)}}]),i}(Wv.default.PureComponent),o=function(){var i=this;this.scrollTo=function(s,l){n.scrollTo(s,Hs({},i.state,l))},this.handleClick=function(s){i.props.onClick&&i.props.onClick(s),s.stopPropagation&&s.stopPropagation(),s.preventDefault&&s.preventDefault(),i.scrollTo(i.props.to,i.props)},this.spyHandler=function(s,l){var c=i.getScrollSpyContainer();if(!(rr.default.isMounted()&&!rr.default.isInitialized())){var d=i.props.horizontal,f=i.props.to,p=null,h=void 0,y=void 0;if(d){var w=0,x=0,v=0;if(c.getBoundingClientRect){var m=c.getBoundingClientRect();v=m.left}if(!p||i.props.isDynamic){if(p=n.get(f),!p)return;var b=p.getBoundingClientRect();w=b.left-v+s,x=w+b.width}var k=s-i.props.offset;h=k>=Math.floor(w)&&k<Math.floor(x),y=k<Math.floor(w)||k>=Math.floor(x)}else{var C=0,_=0,E=0;if(c.getBoundingClientRect){var O=c.getBoundingClientRect();E=O.top}if(!p||i.props.isDynamic){if(p=n.get(f),!p)return;var A=p.getBoundingClientRect();C=A.top-E+l,_=C+A.height}var $=l-i.props.offset;h=$>=Math.floor(C)&&$<Math.floor(_),y=$<Math.floor(C)||$>=Math.floor(_)}var I=n.getActiveLink();if(y){if(f===I&&n.setActiveLink(void 0),i.props.hashSpy&&rr.default.getHash()===f){var B=i.props.saveHashHistory,H=B===void 0?!1:B;rr.default.changeHash("",H)}i.props.spy&&i.state.active&&(i.setState({active:!1}),i.props.onSetInactive&&i.props.onSetInactive(f,p))}if(h&&(I!==f||i.state.active===!1)){n.setActiveLink(f);var ee=i.props.saveHashHistory,re=ee===void 0?!1:ee;i.props.hashSpy&&rr.default.changeHash(f,re),i.props.spy&&(i.setState({active:!0}),i.props.onSetActive&&i.props.onSetActive(f,p))}}}};return r.propTypes=Vv,r.defaultProps={offset:0},r};Object.defineProperty(eh,"__esModule",{value:!0});var YI=g,Gv=Uk(YI),XI=rs,QI=Uk(XI);function Uk(e){return e&&e.__esModule?e:{default:e}}function JI(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function qv(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function ZI(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var e5=function(e){ZI(t,e);function t(){var n,r,o,a;JI(this,t);for(var i=arguments.length,s=Array(i),l=0;l<i;l++)s[l]=arguments[l];return a=(r=(o=qv(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(s))),o),o.render=function(){return Gv.default.createElement("a",o.props,o.props.children)},r),qv(o,a)}return t}(Gv.default.Component);eh.default=(0,QI.default)(e5);var ah={};Object.defineProperty(ah,"__esModule",{value:!0});var t5=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),n5=g,Kv=Hk(n5),r5=rs,o5=Hk(r5);function Hk(e){return e&&e.__esModule?e:{default:e}}function a5(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i5(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function s5(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l5=function(e){s5(t,e);function t(){return a5(this,t),i5(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return t5(t,[{key:"render",value:function(){return Kv.default.createElement("button",this.props,this.props.children)}}]),t}(Kv.default.Component);ah.default=(0,o5.default)(l5);var ih={},nc={};Object.defineProperty(nc,"__esModule",{value:!0});var u5=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c5=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d5=g,Yv=rc(d5),f5=ju;rc(f5);var p5=Ea,Xv=rc(p5),m5=yo,Qv=rc(m5);function rc(e){return e&&e.__esModule?e:{default:e}}function h5(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g5(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function v5(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}nc.default=function(e){var t=function(n){v5(r,n);function r(o){h5(this,r);var a=g5(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,o));return a.childBindings={domNode:null},a}return c5(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(a){this.props.name!==a.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Xv.default.unregister(this.props.name)}},{key:"registerElems",value:function(a){Xv.default.register(a,this.childBindings.domNode)}},{key:"render",value:function(){return Yv.default.createElement(e,u5({},this.props,{parentBindings:this.childBindings}))}}]),r}(Yv.default.Component);return t.propTypes={name:Qv.default.string,id:Qv.default.string},t};Object.defineProperty(ih,"__esModule",{value:!0});var Jv=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y5=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),b5=g,Zv=sh(b5),w5=nc,x5=sh(w5),_5=yo,ey=sh(_5);function sh(e){return e&&e.__esModule?e:{default:e}}function k5(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S5(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function C5(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Wk=function(e){C5(t,e);function t(){return k5(this,t),S5(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return y5(t,[{key:"render",value:function(){var r=this,o=Jv({},this.props);return delete o.name,o.parentBindings&&delete o.parentBindings,Zv.default.createElement("div",Jv({},o,{ref:function(i){r.props.parentBindings.domNode=i}}),this.props.children)}}]),t}(Zv.default.Component);Wk.propTypes={name:ey.default.string,id:ey.default.string};ih.default=(0,x5.default)(Wk);var od=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ty=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function ny(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ry(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function oy(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Vs=g,Wr=os,ad=Ea,Ie=yo,or=tc,ay={to:Ie.string.isRequired,containerId:Ie.string,container:Ie.object,activeClass:Ie.string,spy:Ie.bool,smooth:Ie.oneOfType([Ie.bool,Ie.string]),offset:Ie.number,delay:Ie.number,isDynamic:Ie.bool,onClick:Ie.func,duration:Ie.oneOfType([Ie.number,Ie.func]),absolute:Ie.bool,onSetActive:Ie.func,onSetInactive:Ie.func,ignoreCancelEvents:Ie.bool,hashSpy:Ie.bool,spyThrottle:Ie.number},E5={Scroll:function(t,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var r=n||ad,o=function(i){oy(s,i);function s(l){ny(this,s);var c=ry(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,l));return a.call(c),c.state={active:!1},c}return ty(s,[{key:"getScrollSpyContainer",value:function(){var c=this.props.containerId,d=this.props.container;return c?document.getElementById(c):d&&d.nodeType?d:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var c=this.getScrollSpyContainer();Wr.isMounted(c)||Wr.mount(c,this.props.spyThrottle),this.props.hashSpy&&(or.isMounted()||or.mount(r),or.mapContainer(this.props.to,c)),this.props.spy&&Wr.addStateHandler(this.stateHandler),Wr.addSpyHandler(this.spyHandler,c),this.setState({container:c})}}},{key:"componentWillUnmount",value:function(){Wr.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var c="";this.state&&this.state.active?c=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():c=this.props.className;var d=od({},this.props);for(var f in ay)d.hasOwnProperty(f)&&delete d[f];return d.className=c,d.onClick=this.handleClick,Vs.createElement(t,d)}}]),s}(Vs.Component),a=function(){var s=this;this.scrollTo=function(l,c){r.scrollTo(l,od({},s.state,c))},this.handleClick=function(l){s.props.onClick&&s.props.onClick(l),l.stopPropagation&&l.stopPropagation(),l.preventDefault&&l.preventDefault(),s.scrollTo(s.props.to,s.props)},this.stateHandler=function(){r.getActiveLink()!==s.props.to&&(s.state!==null&&s.state.active&&s.props.onSetInactive&&s.props.onSetInactive(),s.setState({active:!1}))},this.spyHandler=function(l){var c=s.getScrollSpyContainer();if(!(or.isMounted()&&!or.isInitialized())){var d=s.props.to,f=null,p=0,h=0,y=0;if(c.getBoundingClientRect){var w=c.getBoundingClientRect();y=w.top}if(!f||s.props.isDynamic){if(f=r.get(d),!f)return;var x=f.getBoundingClientRect();p=x.top-y+l,h=p+x.height}var v=l-s.props.offset,m=v>=Math.floor(p)&&v<Math.floor(h),b=v<Math.floor(p)||v>=Math.floor(h),k=r.getActiveLink();if(b)return d===k&&r.setActiveLink(void 0),s.props.hashSpy&&or.getHash()===d&&or.changeHash(),s.props.spy&&s.state.active&&(s.setState({active:!1}),s.props.onSetInactive&&s.props.onSetInactive()),Wr.updateStates();if(m&&k!==d)return r.setActiveLink(d),s.props.hashSpy&&or.changeHash(d),s.props.spy&&(s.setState({active:!0}),s.props.onSetActive&&s.props.onSetActive(d)),Wr.updateStates()}}};return o.propTypes=ay,o.defaultProps={offset:0},o},Element:function(t){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(r){oy(o,r);function o(a){ny(this,o);var i=ry(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,a));return i.childBindings={domNode:null},i}return ty(o,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(i){this.props.name!==i.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;ad.unregister(this.props.name)}},{key:"registerElems",value:function(i){ad.register(i,this.childBindings.domNode)}},{key:"render",value:function(){return Vs.createElement(t,od({},this.props,{parentBindings:this.childBindings}))}}]),o}(Vs.Component);return n.propTypes={name:Ie.string,id:Ie.string},n}},O5=E5;Object.defineProperty(ze,"__esModule",{value:!0});ze.Helpers=ze.ScrollElement=ze.ScrollLink=ze.animateScroll=ze.scrollSpy=ze.Events=ze.scroller=ze.Element=ze.Button=ze.Link=void 0;var T5=eh,Vk=$n(T5),R5=ah,Gk=$n(R5),j5=ih,qk=$n(j5),$5=Ea,Kk=$n($5),P5=ss,Yk=$n(P5),A5=os,Xk=$n(A5),I5=Ju,Qk=$n(I5),L5=rs,Jk=$n(L5),N5=nc,Zk=$n(N5),D5=O5,eS=$n(D5);function $n(e){return e&&e.__esModule?e:{default:e}}ze.Link=Vk.default;ze.Button=Gk.default;ze.Element=qk.default;ze.scroller=Kk.default;ze.Events=Yk.default;ze.scrollSpy=Xk.default;ze.animateScroll=Qk.default;ze.ScrollLink=Jk.default;ze.ScrollElement=Zk.default;ze.Helpers=eS.default;ze.default={Link:Vk.default,Button:Gk.default,Element:qk.default,scroller:Kk.default,Events:Yk.default,scrollSpy:Xk.default,animateScroll:Qk.default,ScrollLink:Jk.default,ScrollElement:Zk.default,Helpers:eS.default};var iy=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),M5=new Uint8Array(16);function z5(){if(!iy)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return iy(M5)}var tS=[];for(var Gs=0;Gs<256;++Gs)tS[Gs]=(Gs+256).toString(16).substr(1);function F5(e,t){var n=0,r=tS;return[r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]]].join("")}function B5(e,t,n){var r=t&&n||0;typeof e=="string"&&(t=e==="binary"?new Array(16):null,e=null),e=e||{};var o=e.random||(e.rng||z5)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,t)for(var a=0;a<16;++a)t[r+a]=o[a];return t||F5(o)}function sy(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Xf(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?sy(Object(n),!0).forEach(function(r){gi(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):sy(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function U5(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ly(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function H5(e,t,n){return ly(e.prototype,t),ly(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function gi(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function lu(){return lu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lu.apply(this,arguments)}function W5(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Qf(e,t)}function uu(e){return uu=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},uu(e)}function Qf(e,t){return Qf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},Qf(e,t)}function V5(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function G5(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function q5(e,t){if(t&&(typeof t=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return G5(e)}function K5(e){var t=V5();return function(){var r=uu(e),o;if(t){var a=uu(this).constructor;o=Reflect.construct(r,arguments,a)}else o=r.apply(this,arguments);return q5(this,o)}}function Y5(e,t){if(e){if(typeof e=="string")return uy(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return uy(e,t)}}function uy(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function X5(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=Y5(e))||t){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,i=!1,s;return{s:function(){n=n.call(e)},n:function(){var l=n.next();return a=l.done,l},e:function(l){i=!0,s=l},f:function(){try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}}}var cy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},qs=function(e){return e&&e.Math==Math&&e},Qn=qs(typeof globalThis=="object"&&globalThis)||qs(typeof window=="object"&&window)||qs(typeof self=="object"&&self)||qs(typeof cy=="object"&&cy)||function(){return this}()||Function("return this")(),lh={},Jn=function(e){try{return!!e()}catch{return!0}},Q5=Jn,Br=!Q5(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7}),J5=Jn,uh=!J5(function(){var e=(function(){}).bind();return typeof e!="function"||e.hasOwnProperty("prototype")}),Z5=uh,Ks=Function.prototype.call,ch=Z5?Ks.bind(Ks):function(){return Ks.apply(Ks,arguments)},nS={},rS={}.propertyIsEnumerable,oS=Object.getOwnPropertyDescriptor,e3=oS&&!rS.call({1:2},1);nS.f=e3?function(t){var n=oS(this,t);return!!n&&n.enumerable}:rS;var aS=function(e,t){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:t}},iS=uh,sS=Function.prototype,Jf=sS.call,t3=iS&&sS.bind.bind(Jf,Jf),lS=function(e){return iS?t3(e):function(){return Jf.apply(e,arguments)}},uS=lS,n3=uS({}.toString),r3=uS("".slice),oc=function(e){return r3(n3(e),8,-1)},o3=oc,a3=lS,Pn=function(e){if(o3(e)==="Function")return a3(e)},i3=Pn,s3=Jn,l3=oc,id=Object,u3=i3("".split),cS=s3(function(){return!id("z").propertyIsEnumerable(0)})?function(e){return l3(e)=="String"?u3(e,""):id(e)}:id,dS=function(e){return e==null},c3=dS,d3=TypeError,fS=function(e){if(c3(e))throw d3("Can't call method on "+e);return e},f3=cS,p3=fS,ac=function(e){return f3(p3(e))},Zf=typeof document=="object"&&document.all,m3=typeof Zf>"u"&&Zf!==void 0,pS={all:Zf,IS_HTMLDDA:m3},mS=pS,h3=mS.all,Zt=mS.IS_HTMLDDA?function(e){return typeof e=="function"||e===h3}:function(e){return typeof e=="function"},dy=Zt,hS=pS,g3=hS.all,Oa=hS.IS_HTMLDDA?function(e){return typeof e=="object"?e!==null:dy(e)||e===g3}:function(e){return typeof e=="object"?e!==null:dy(e)},sd=Qn,v3=Zt,y3=function(e){return v3(e)?e:void 0},cs=function(e,t){return arguments.length<2?y3(sd[e]):sd[e]&&sd[e][t]},b3=Pn,w3=b3({}.isPrototypeOf),x3=cs,_3=x3("navigator","userAgent")||"",gS=Qn,ld=_3,fy=gS.process,py=gS.Deno,my=fy&&fy.versions||py&&py.version,hy=my&&my.v8,ln,cu;hy&&(ln=hy.split("."),cu=ln[0]>0&&ln[0]<4?1:+(ln[0]+ln[1]));!cu&&ld&&(ln=ld.match(/Edge\/(\d+)/),(!ln||ln[1]>=74)&&(ln=ld.match(/Chrome\/(\d+)/),ln&&(cu=+ln[1])));var k3=cu,gy=k3,S3=Jn,vS=!!Object.getOwnPropertySymbols&&!S3(function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&gy&&gy<41}),C3=vS,yS=C3&&!Symbol.sham&&typeof Symbol.iterator=="symbol",E3=cs,O3=Zt,T3=w3,R3=yS,j3=Object,bS=R3?function(e){return typeof e=="symbol"}:function(e){var t=E3("Symbol");return O3(t)&&T3(t.prototype,j3(e))},$3=String,P3=function(e){try{return $3(e)}catch{return"Object"}},A3=Zt,I3=P3,L3=TypeError,wS=function(e){if(A3(e))return e;throw L3(I3(e)+" is not a function")},N3=wS,D3=dS,M3=function(e,t){var n=e[t];return D3(n)?void 0:N3(n)},ud=ch,cd=Zt,dd=Oa,z3=TypeError,F3=function(e,t){var n,r;if(t==="string"&&cd(n=e.toString)&&!dd(r=ud(n,e))||cd(n=e.valueOf)&&!dd(r=ud(n,e))||t!=="string"&&cd(n=e.toString)&&!dd(r=ud(n,e)))return r;throw z3("Can't convert object to primitive value")},dh={exports:{}},vy=Qn,B3=Object.defineProperty,fh=function(e,t){try{B3(vy,e,{value:t,configurable:!0,writable:!0})}catch{vy[e]=t}return t},U3=Qn,H3=fh,yy="__core-js_shared__",W3=U3[yy]||H3(yy,{}),ph=W3,by=ph;(dh.exports=function(e,t){return by[e]||(by[e]=t!==void 0?t:{})})("versions",[]).push({version:"3.25.5",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.25.5/LICENSE",source:"https://github.com/zloirock/core-js"});var V3=fS,G3=Object,xS=function(e){return G3(V3(e))},q3=Pn,K3=xS,Y3=q3({}.hasOwnProperty),_o=Object.hasOwn||function(t,n){return Y3(K3(t),n)},X3=Pn,Q3=0,J3=Math.random(),Z3=X3(1 .toString),_S=function(e){return"Symbol("+(e===void 0?"":e)+")_"+Z3(++Q3+J3,36)},eL=Qn,tL=dh.exports,wy=_o,nL=_S,xy=vS,kS=yS,jo=tL("wks"),ao=eL.Symbol,_y=ao&&ao.for,rL=kS?ao:ao&&ao.withoutSetter||nL,ds=function(e){if(!wy(jo,e)||!(xy||typeof jo[e]=="string")){var t="Symbol."+e;xy&&wy(ao,e)?jo[e]=ao[e]:kS&&_y?jo[e]=_y(t):jo[e]=rL(t)}return jo[e]},oL=ch,ky=Oa,Sy=bS,aL=M3,iL=F3,sL=ds,lL=TypeError,uL=sL("toPrimitive"),cL=function(e,t){if(!ky(e)||Sy(e))return e;var n=aL(e,uL),r;if(n){if(t===void 0&&(t="default"),r=oL(n,e,t),!ky(r)||Sy(r))return r;throw lL("Can't convert object to primitive value")}return t===void 0&&(t="number"),iL(e,t)},dL=cL,fL=bS,SS=function(e){var t=dL(e,"string");return fL(t)?t:t+""},pL=Qn,Cy=Oa,ep=pL.document,mL=Cy(ep)&&Cy(ep.createElement),CS=function(e){return mL?ep.createElement(e):{}},hL=Br,gL=Jn,vL=CS,ES=!hL&&!gL(function(){return Object.defineProperty(vL("div"),"a",{get:function(){return 7}}).a!=7}),yL=Br,bL=ch,wL=nS,xL=aS,_L=ac,kL=SS,SL=_o,CL=ES,Ey=Object.getOwnPropertyDescriptor;lh.f=yL?Ey:function(t,n){if(t=_L(t),n=kL(n),CL)try{return Ey(t,n)}catch{}if(SL(t,n))return xL(!bL(wL.f,t,n),t[n])};var Ta={},EL=Br,OL=Jn,OS=EL&&OL(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42}),TL=Oa,RL=String,jL=TypeError,ic=function(e){if(TL(e))return e;throw jL(RL(e)+" is not an object")},$L=Br,PL=ES,AL=OS,Ys=ic,Oy=SS,IL=TypeError,fd=Object.defineProperty,LL=Object.getOwnPropertyDescriptor,pd="enumerable",md="configurable",hd="writable";Ta.f=$L?AL?function(t,n,r){if(Ys(t),n=Oy(n),Ys(r),typeof t=="function"&&n==="prototype"&&"value"in r&&hd in r&&!r[hd]){var o=LL(t,n);o&&o[hd]&&(t[n]=r.value,r={configurable:md in r?r[md]:o[md],enumerable:pd in r?r[pd]:o[pd],writable:!1})}return fd(t,n,r)}:fd:function(t,n,r){if(Ys(t),n=Oy(n),Ys(r),PL)try{return fd(t,n,r)}catch{}if("get"in r||"set"in r)throw IL("Accessors not supported");return"value"in r&&(t[n]=r.value),t};var NL=Br,DL=Ta,ML=aS,TS=NL?function(e,t,n){return DL.f(e,t,ML(1,n))}:function(e,t,n){return e[t]=n,e},RS={exports:{}},tp=Br,zL=_o,jS=Function.prototype,FL=tp&&Object.getOwnPropertyDescriptor,mh=zL(jS,"name"),BL=mh&&(function(){}).name==="something",UL=mh&&(!tp||tp&&FL(jS,"name").configurable),HL={EXISTS:mh,PROPER:BL,CONFIGURABLE:UL},WL=Pn,VL=Zt,np=ph,GL=WL(Function.toString);VL(np.inspectSource)||(np.inspectSource=function(e){return GL(e)});var $S=np.inspectSource,qL=Qn,KL=Zt,Ty=qL.WeakMap,YL=KL(Ty)&&/native code/.test(String(Ty)),XL=dh.exports,QL=_S,Ry=XL("keys"),PS=function(e){return Ry[e]||(Ry[e]=QL(e))},hh={},JL=YL,AS=Qn,ZL=Oa,eN=TS,gd=_o,vd=ph,tN=PS,nN=hh,jy="Object already initialized",rp=AS.TypeError,rN=AS.WeakMap,du,Hi,fu,oN=function(e){return fu(e)?Hi(e):du(e,{})},aN=function(e){return function(t){var n;if(!ZL(t)||(n=Hi(t)).type!==e)throw rp("Incompatible receiver, "+e+" required");return n}};if(JL||vd.state){var yn=vd.state||(vd.state=new rN);yn.get=yn.get,yn.has=yn.has,yn.set=yn.set,du=function(e,t){if(yn.has(e))throw rp(jy);return t.facade=e,yn.set(e,t),t},Hi=function(e){return yn.get(e)||{}},fu=function(e){return yn.has(e)}}else{var $o=tN("state");nN[$o]=!0,du=function(e,t){if(gd(e,$o))throw rp(jy);return t.facade=e,eN(e,$o,t),t},Hi=function(e){return gd(e,$o)?e[$o]:{}},fu=function(e){return gd(e,$o)}}var iN={set:du,get:Hi,has:fu,enforce:oN,getterFor:aN},sN=Jn,lN=Zt,Xs=_o,op=Br,uN=HL.CONFIGURABLE,cN=$S,IS=iN,dN=IS.enforce,fN=IS.get,bl=Object.defineProperty,pN=op&&!sN(function(){return bl(function(){},"length",{value:8}).length!==8}),mN=String(String).split("String"),hN=RS.exports=function(e,t,n){String(t).slice(0,7)==="Symbol("&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!Xs(e,"name")||uN&&e.name!==t)&&(op?bl(e,"name",{value:t,configurable:!0}):e.name=t),pN&&n&&Xs(n,"arity")&&e.length!==n.arity&&bl(e,"length",{value:n.arity});try{n&&Xs(n,"constructor")&&n.constructor?op&&bl(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch{}var r=dN(e);return Xs(r,"source")||(r.source=mN.join(typeof t=="string"?t:"")),e};Function.prototype.toString=hN(function(){return lN(this)&&fN(this).source||cN(this)},"toString");var gN=Zt,vN=Ta,yN=RS.exports,bN=fh,wN=function(e,t,n,r){r||(r={});var o=r.enumerable,a=r.name!==void 0?r.name:t;if(gN(n)&&yN(n,a,r),r.global)o?e[t]=n:bN(t,n);else{try{r.unsafe?e[t]&&(o=!0):delete e[t]}catch{}o?e[t]=n:vN.f(e,t,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return e},LS={},xN=Math.ceil,_N=Math.floor,kN=Math.trunc||function(t){var n=+t;return(n>0?_N:xN)(n)},SN=kN,NS=function(e){var t=+e;return t!==t||t===0?0:SN(t)},CN=NS,EN=Math.max,ON=Math.min,TN=function(e,t){var n=CN(e);return n<0?EN(n+t,0):ON(n,t)},RN=NS,jN=Math.min,$N=function(e){return e>0?jN(RN(e),9007199254740991):0},PN=$N,DS=function(e){return PN(e.length)},AN=ac,IN=TN,LN=DS,$y=function(e){return function(t,n,r){var o=AN(t),a=LN(o),i=IN(r,a),s;if(e&&n!=n){for(;a>i;)if(s=o[i++],s!=s)return!0}else for(;a>i;i++)if((e||i in o)&&o[i]===n)return e||i||0;return!e&&-1}},NN={includes:$y(!0),indexOf:$y(!1)},DN=Pn,yd=_o,MN=ac,zN=NN.indexOf,FN=hh,Py=DN([].push),MS=function(e,t){var n=MN(e),r=0,o=[],a;for(a in n)!yd(FN,a)&&yd(n,a)&&Py(o,a);for(;t.length>r;)yd(n,a=t[r++])&&(~zN(o,a)||Py(o,a));return o},gh=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],BN=MS,UN=gh,HN=UN.concat("length","prototype");LS.f=Object.getOwnPropertyNames||function(t){return BN(t,HN)};var zS={};zS.f=Object.getOwnPropertySymbols;var WN=cs,VN=Pn,GN=LS,qN=zS,KN=ic,YN=VN([].concat),XN=WN("Reflect","ownKeys")||function(t){var n=GN.f(KN(t)),r=qN.f;return r?YN(n,r(t)):n},Ay=_o,QN=XN,JN=lh,ZN=Ta,eD=function(e,t,n){for(var r=QN(t),o=ZN.f,a=JN.f,i=0;i<r.length;i++){var s=r[i];!Ay(e,s)&&!(n&&Ay(n,s))&&o(e,s,a(t,s))}},tD=Jn,nD=Zt,rD=/#|\.prototype\./,fs=function(e,t){var n=aD[oD(e)];return n==sD?!0:n==iD?!1:nD(t)?tD(t):!!t},oD=fs.normalize=function(e){return String(e).replace(rD,".").toLowerCase()},aD=fs.data={},iD=fs.NATIVE="N",sD=fs.POLYFILL="P",lD=fs,bd=Qn,uD=lh.f,cD=TS,dD=wN,fD=fh,pD=eD,mD=lD,hD=function(e,t){var n=e.target,r=e.global,o=e.stat,a,i,s,l,c,d;if(r?i=bd:o?i=bd[n]||fD(n,{}):i=(bd[n]||{}).prototype,i)for(s in t){if(c=t[s],e.dontCallGetSet?(d=uD(i,s),l=d&&d.value):l=i[s],a=mD(r?s:n+(o?".":"#")+s,e.forced),!a&&l!==void 0){if(typeof c==typeof l)continue;pD(c,l)}(e.sham||l&&l.sham)&&cD(c,"sham",!0),dD(i,s,c,e)}},Iy=Pn,gD=wS,vD=uh,yD=Iy(Iy.bind),bD=function(e,t){return gD(e),t===void 0?e:vD?yD(e,t):function(){return e.apply(t,arguments)}},wD=oc,xD=Array.isArray||function(t){return wD(t)=="Array"},_D=ds,kD=_D("toStringTag"),FS={};FS[kD]="z";var SD=String(FS)==="[object z]",CD=SD,ED=Zt,wl=oc,OD=ds,TD=OD("toStringTag"),RD=Object,jD=wl(function(){return arguments}())=="Arguments",$D=function(e,t){try{return e[t]}catch{}},PD=CD?wl:function(e){var t,n,r;return e===void 0?"Undefined":e===null?"Null":typeof(n=$D(t=RD(e),TD))=="string"?n:jD?wl(t):(r=wl(t))=="Object"&&ED(t.callee)?"Arguments":r},AD=Pn,ID=Jn,BS=Zt,LD=PD,ND=cs,DD=$S,US=function(){},MD=[],HS=ND("Reflect","construct"),vh=/^\s*(?:class|function)\b/,zD=AD(vh.exec),FD=!vh.exec(US),Ua=function(t){if(!BS(t))return!1;try{return HS(US,MD,t),!0}catch{return!1}},WS=function(t){if(!BS(t))return!1;switch(LD(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return FD||!!zD(vh,DD(t))}catch{return!0}};WS.sham=!0;var BD=!HS||ID(function(){var e;return Ua(Ua.call)||!Ua(Object)||!Ua(function(){e=!0})||e})?WS:Ua,Ly=xD,UD=BD,HD=Oa,WD=ds,VD=WD("species"),Ny=Array,GD=function(e){var t;return Ly(e)&&(t=e.constructor,UD(t)&&(t===Ny||Ly(t.prototype))?t=void 0:HD(t)&&(t=t[VD],t===null&&(t=void 0))),t===void 0?Ny:t},qD=GD,KD=function(e,t){return new(qD(e))(t===0?0:t)},YD=bD,XD=Pn,QD=cS,JD=xS,ZD=DS,e4=KD,Dy=XD([].push),ar=function(e){var t=e==1,n=e==2,r=e==3,o=e==4,a=e==6,i=e==7,s=e==5||a;return function(l,c,d,f){for(var p=JD(l),h=QD(p),y=YD(c,d),w=ZD(h),x=0,v=f||e4,m=t?v(l,w):n||i?v(l,0):void 0,b,k;w>x;x++)if((s||x in h)&&(b=h[x],k=y(b,x,p),e))if(t)m[x]=k;else if(k)switch(e){case 3:return!0;case 5:return b;case 6:return x;case 2:Dy(m,b)}else switch(e){case 4:return!1;case 7:Dy(m,b)}return a?-1:r||o?o:m}},t4={forEach:ar(0),map:ar(1),filter:ar(2),some:ar(3),every:ar(4),find:ar(5),findIndex:ar(6),filterReject:ar(7)},VS={},n4=MS,r4=gh,o4=Object.keys||function(t){return n4(t,r4)},a4=Br,i4=OS,s4=Ta,l4=ic,u4=ac,c4=o4;VS.f=a4&&!i4?Object.defineProperties:function(t,n){l4(t);for(var r=u4(n),o=c4(n),a=o.length,i=0,s;a>i;)s4.f(t,s=o[i++],r[s]);return t};var d4=cs,f4=d4("document","documentElement"),p4=ic,m4=VS,My=gh,h4=hh,g4=f4,v4=CS,y4=PS,zy=">",Fy="<",ap="prototype",ip="script",GS=y4("IE_PROTO"),wd=function(){},qS=function(e){return Fy+ip+zy+e+Fy+"/"+ip+zy},By=function(e){e.write(qS("")),e.close();var t=e.parentWindow.Object;return e=null,t},b4=function(){var e=v4("iframe"),t="java"+ip+":",n;return e.style.display="none",g4.appendChild(e),e.src=String(t),n=e.contentWindow.document,n.open(),n.write(qS("document.F=Object")),n.close(),n.F},Qs,xl=function(){try{Qs=new ActiveXObject("htmlfile")}catch{}xl=typeof document<"u"?document.domain&&Qs?By(Qs):b4():By(Qs);for(var e=My.length;e--;)delete xl[ap][My[e]];return xl()};h4[GS]=!0;var w4=Object.create||function(t,n){var r;return t!==null?(wd[ap]=p4(t),r=new wd,wd[ap]=null,r[GS]=t):r=xl(),n===void 0?r:m4.f(r,n)},x4=ds,_4=w4,k4=Ta.f,sp=x4("unscopables"),lp=Array.prototype;lp[sp]==null&&k4(lp,sp,{configurable:!0,value:_4(null)});var S4=function(e){lp[sp][e]=!0},C4=hD,E4=t4.find,O4=S4,up="find",KS=!0;up in[]&&Array(1)[up](function(){KS=!1});C4({target:"Array",proto:!0,forced:KS},{find:function(t){return E4(this,t,arguments.length>1?arguments[1]:void 0)}});O4(up);var zt={GLOBAL:{HIDE:"__react_tooltip_hide_event",REBUILD:"__react_tooltip_rebuild_event",SHOW:"__react_tooltip_show_event"}},xd=function(t,n){var r;typeof window.CustomEvent=="function"?r=new window.CustomEvent(t,{detail:n}):(r=document.createEvent("Event"),r.initEvent(t,!1,!0,n)),window.dispatchEvent(r)};function T4(e){e.hide=function(t){xd(zt.GLOBAL.HIDE,{target:t})},e.rebuild=function(){xd(zt.GLOBAL.REBUILD)},e.show=function(t){xd(zt.GLOBAL.SHOW,{target:t})},e.prototype.globalRebuild=function(){this.mount&&(this.unbindListener(),this.bindListener())},e.prototype.globalShow=function(t){if(this.mount){var n=t&&t.detail&&t.detail.target&&!0||!1;this.showTooltip({currentTarget:n&&t.detail.target},!0)}},e.prototype.globalHide=function(t){if(this.mount){var n=t&&t.detail&&t.detail.target&&!0||!1;this.hideTooltip({currentTarget:n&&t.detail.target},n)}}}function R4(e){e.prototype.bindWindowEvents=function(t){window.removeEventListener(zt.GLOBAL.HIDE,this.globalHide),window.addEventListener(zt.GLOBAL.HIDE,this.globalHide,!1),window.removeEventListener(zt.GLOBAL.REBUILD,this.globalRebuild),window.addEventListener(zt.GLOBAL.REBUILD,this.globalRebuild,!1),window.removeEventListener(zt.GLOBAL.SHOW,this.globalShow),window.addEventListener(zt.GLOBAL.SHOW,this.globalShow,!1),t&&(window.removeEventListener("resize",this.onWindowResize),window.addEventListener("resize",this.onWindowResize,!1))},e.prototype.unbindWindowEvents=function(){window.removeEventListener(zt.GLOBAL.HIDE,this.globalHide),window.removeEventListener(zt.GLOBAL.REBUILD,this.globalRebuild),window.removeEventListener(zt.GLOBAL.SHOW,this.globalShow),window.removeEventListener("resize",this.onWindowResize)},e.prototype.onWindowResize=function(){this.mount&&this.hideTooltip()}}var YS=function(t,n){var r=this.state.show,o=this.props.id,a=this.isCapture(n.currentTarget),i=n.currentTarget.getAttribute("currentItem");a||n.stopPropagation(),r&&i==="true"?t||this.hideTooltip(n):(n.currentTarget.setAttribute("currentItem","true"),j4(n.currentTarget,this.getTargetArray(o)),this.showTooltip(n))},j4=function(t,n){for(var r=0;r<n.length;r++)t!==n[r]?n[r].setAttribute("currentItem","false"):n[r].setAttribute("currentItem","true")},_d={id:"9b69f92e-d3fe-498b-b1b4-c5e63a51b0cf",set:function(t,n,r){if(this.id in t){var o=t[this.id];o[n]=r}else Object.defineProperty(t,this.id,{configurable:!0,value:gi({},n,r)})},get:function(t,n){var r=t[this.id];if(r!==void 0)return r[n]}};function $4(e){e.prototype.isCustomEvent=function(t){var n=this.state.event;return n||!!t.getAttribute("data-event")},e.prototype.customBindListener=function(t){var n=this,r=this.state,o=r.event,a=r.eventOff,i=t.getAttribute("data-event")||o,s=t.getAttribute("data-event-off")||a;i.split(" ").forEach(function(l){t.removeEventListener(l,_d.get(t,l));var c=YS.bind(n,s);_d.set(t,l,c),t.addEventListener(l,c,!1)}),s&&s.split(" ").forEach(function(l){t.removeEventListener(l,n.hideTooltip),t.addEventListener(l,n.hideTooltip,!1)})},e.prototype.customUnbindListener=function(t){var n=this.state,r=n.event,o=n.eventOff,a=r||t.getAttribute("data-event"),i=o||t.getAttribute("data-event-off");t.removeEventListener(a,_d.get(t,r)),i&&t.removeEventListener(i,this.hideTooltip)}}function P4(e){e.prototype.isCapture=function(t){return t&&t.getAttribute("data-iscapture")==="true"||this.props.isCapture||!1}}function A4(e){e.prototype.getEffect=function(t){var n=t.getAttribute("data-effect");return n||this.props.effect||"float"}}var I4=function(t){var n={};for(var r in t)typeof t[r]=="function"?n[r]=t[r].bind(t):n[r]=t[r];return n},Ha=function(t,n,r){for(var o=n.respectEffect,a=o===void 0?!1:o,i=n.customEvent,s=i===void 0?!1:i,l=this.props.id,c=null,d,f=r.target,p;c===null&&f!==null;)p=f,c=f.getAttribute("data-tip")||null,d=f.getAttribute("data-for")||null,f=f.parentElement;if(f=p||r.target,!(this.isCustomEvent(f)&&!s)){var h=l==null&&d==null||d===l;if(c!=null&&(!a||this.getEffect(f)==="float")&&h){var y=I4(r);y.currentTarget=f,t(y)}}},Uy=function(t,n){var r={};return t.forEach(function(o){var a=o.getAttribute(n);a&&a.split(" ").forEach(function(i){return r[i]=!0})}),r},Hy=function(){return document.getElementsByTagName("body")[0]};function L4(e){e.prototype.isBodyMode=function(){return!!this.props.bodyMode},e.prototype.bindBodyListener=function(t){var n=this,r=this.state,o=r.event,a=r.eventOff,i=r.possibleCustomEvents,s=r.possibleCustomEventsOff,l=Hy(),c=Uy(t,"data-event"),d=Uy(t,"data-event-off");o!=null&&(c[o]=!0),a!=null&&(d[a]=!0),i.split(" ").forEach(function(w){return c[w]=!0}),s.split(" ").forEach(function(w){return d[w]=!0}),this.unbindBodyListener(l);var f=this.bodyModeListeners={};o==null&&(f.mouseover=Ha.bind(this,this.showTooltip,{}),f.mousemove=Ha.bind(this,this.updateTooltip,{respectEffect:!0}),f.mouseout=Ha.bind(this,this.hideTooltip,{}));for(var p in c)f[p]=Ha.bind(this,function(w){var x=w.currentTarget.getAttribute("data-event-off")||a;YS.call(n,x,w)},{customEvent:!0});for(var h in d)f[h]=Ha.bind(this,this.hideTooltip,{customEvent:!0});for(var y in f)l.addEventListener(y,f[y])},e.prototype.unbindBodyListener=function(t){t=t||Hy();var n=this.bodyModeListeners;for(var r in n)t.removeEventListener(r,n[r])}}var N4=function(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver};function D4(e){e.prototype.bindRemovalTracker=function(){var t=this,n=N4();if(n!=null){var r=new n(function(o){for(var a=0;a<o.length;a++)for(var i=o[a],s=0;s<i.removedNodes.length;s++){var l=i.removedNodes[s];if(l===t.state.currentTarget){t.hideTooltip();return}}});r.observe(window.document,{childList:!0,subtree:!0}),this.removalTracker=r}},e.prototype.unbindRemovalTracker=function(){this.removalTracker&&(this.removalTracker.disconnect(),this.removalTracker=null)}}function Wy(e,t,n,r,o,a,i){var s=cp(n),l=s.width,c=s.height,d=cp(t),f=d.width,p=d.height,h=M4(e,t,a),y=h.mouseX,w=h.mouseY,x=z4(a,f,p,l,c),v=F4(i),m=v.extraOffsetX,b=v.extraOffsetY,k=window.innerWidth,C=window.innerHeight,_=B4(n),E=_.parentTop,O=_.parentLeft,A=function(z){var T=x[z].l;return y+T+m},$=function(z){var T=x[z].r;return y+T+m},I=function(z){var T=x[z].t;return w+T+b},B=function(z){var T=x[z].b;return w+T+b},H=function(z){return A(z)<0},ee=function(z){return $(z)>k},re=function(z){return I(z)<0},ie=function(z){return B(z)>C},ae=function(z){return H(z)||ee(z)||re(z)||ie(z)},j=function(z){return!ae(z)},W={top:j("top"),bottom:j("bottom"),left:j("left"),right:j("right")};function U(){var L=o.split(",").concat(r,["top","bottom","left","right"]),z=X5(L),T;try{for(z.s();!(T=z.n()).done;){var ne=T.value;if(W[ne])return ne}}catch(M){z.e(M)}finally{z.f()}return r}var te=U(),N=!1,F;return te&&te!==r&&(N=!0,F=te),N?{isNewState:!0,newState:{place:F}}:{isNewState:!1,position:{left:parseInt(A(r)-O,10),top:parseInt(I(r)-E,10)}}}var cp=function(t){var n=t.getBoundingClientRect(),r=n.height,o=n.width;return{height:parseInt(r,10),width:parseInt(o,10)}},M4=function(t,n,r){var o=n.getBoundingClientRect(),a=o.top,i=o.left,s=cp(n),l=s.width,c=s.height;return r==="float"?{mouseX:t.clientX,mouseY:t.clientY}:{mouseX:i+l/2,mouseY:a+c/2}},z4=function(t,n,r,o,a){var i,s,l,c,d=3,f=2,p=12;return t==="float"?(i={l:-(o/2),r:o/2,t:-(a+d+f),b:-3},l={l:-(o/2),r:o/2,t:d+p,b:a+d+f+p},c={l:-(o+d+f),r:-3,t:-(a/2),b:a/2},s={l:d,r:o+d+f,t:-(a/2),b:a/2}):t==="solid"&&(i={l:-(o/2),r:o/2,t:-(r/2+a+f),b:-(r/2)},l={l:-(o/2),r:o/2,t:r/2,b:r/2+a+f},c={l:-(o+n/2+f),r:-(n/2),t:-(a/2),b:a/2},s={l:n/2,r:o+n/2+f,t:-(a/2),b:a/2}),{top:i,bottom:l,left:c,right:s}},F4=function(t){var n=0,r=0;Object.prototype.toString.apply(t)==="[object String]"&&(t=JSON.parse(t.toString().replace(/'/g,'"')));for(var o in t)o==="top"?r-=parseInt(t[o],10):o==="bottom"?r+=parseInt(t[o],10):o==="left"?n-=parseInt(t[o],10):o==="right"&&(n+=parseInt(t[o],10));return{extraOffsetX:n,extraOffsetY:r}},B4=function(t){for(var n=t;n;){var r=window.getComputedStyle(n);if(r.getPropertyValue("transform")!=="none"||r.getPropertyValue("will-change")==="transform")break;n=n.parentElement}var o=n&&n.getBoundingClientRect().top||0,a=n&&n.getBoundingClientRect().left||0;return{parentTop:o,parentLeft:a}};function Vy(e,t,n,r){if(t)return t;if(n!=null)return n;if(n===null)return null;var o=/<br\s*\/?>/;return!r||r==="false"||!o.test(e)?e:e.split(o).map(function(a,i){return q.createElement("span",{key:i,className:"multi-line"},a)})}function Gy(e){var t={};return Object.keys(e).filter(function(n){return/(^aria-\w+$|^role$)/.test(n)}).forEach(function(n){t[n]=e[n]}),t}function kd(e){var t=e.length;return e.hasOwnProperty?Array.prototype.slice.call(e):new Array(t).fill().map(function(n){return e[n]})}function U4(){return"t"+B5()}var H4=`.__react_component_tooltip {
  border-radius: 3px;
  display: inline-block;
  font-size: 13px;
  left: -999em;
  opacity: 0;
  position: fixed;
  pointer-events: none;
  transition: opacity 0.3s ease-out;
  top: -999em;
  visibility: hidden;
  z-index: 999;
}
.__react_component_tooltip.allow_hover, .__react_component_tooltip.allow_click {
  pointer-events: auto;
}
.__react_component_tooltip::before, .__react_component_tooltip::after {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
}
.__react_component_tooltip.show {
  opacity: 0.9;
  margin-top: 0;
  margin-left: 0;
  visibility: visible;
}
.__react_component_tooltip.place-top::before {
  bottom: 0;
  left: 50%;
  margin-left: -11px;
}
.__react_component_tooltip.place-bottom::before {
  top: 0;
  left: 50%;
  margin-left: -11px;
}
.__react_component_tooltip.place-left::before {
  right: 0;
  top: 50%;
  margin-top: -9px;
}
.__react_component_tooltip.place-right::before {
  left: 0;
  top: 50%;
  margin-top: -9px;
}
.__react_component_tooltip .multi-line {
  display: block;
  padding: 2px 0;
  text-align: center;
}`,qy={dark:{text:"#fff",background:"#222",border:"transparent",arrow:"#222"},success:{text:"#fff",background:"#8DC572",border:"transparent",arrow:"#8DC572"},warning:{text:"#fff",background:"#F0AD4E",border:"transparent",arrow:"#F0AD4E"},error:{text:"#fff",background:"#BE6464",border:"transparent",arrow:"#BE6464"},info:{text:"#fff",background:"#337AB7",border:"transparent",arrow:"#337AB7"},light:{text:"#222",background:"#fff",border:"transparent",arrow:"#fff"}};function W4(e){return qy[e]?Xf({},qy[e]):void 0}var V4="8px 21px",G4={tooltip:3,arrow:0};function q4(e,t,n,r,o,a){return K4(e,Y4(t,n,r),o,a)}function K4(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:V4,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:G4,o=t.text,a=t.background,i=t.border,s=t.arrow,l=r.arrow,c=r.tooltip;return`
  	.`.concat(e,` {
	    color: `).concat(o,`;
	    background: `).concat(a,`;
	    border: 1px solid `).concat(i,`;
	    border-radius: `).concat(c,`px;
	    padding: `).concat(n,`;
  	}

  	.`).concat(e,`.place-top {
        margin-top: -10px;
    }
    .`).concat(e,`.place-top::before {
        content: "";
        background-color: inherit;
        position: absolute;
        z-index: 2;
        width: 20px;
        height: 12px;
    }
    .`).concat(e,`.place-top::after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        border-top-right-radius: `).concat(l,`px;
        border: 1px solid `).concat(i,`;
        background-color: `).concat(s,`;
        z-index: -2;
        bottom: -6px;
        left: 50%;
        margin-left: -6px;
        transform: rotate(135deg);
    }

    .`).concat(e,`.place-bottom {
        margin-top: 10px;
    }
    .`).concat(e,`.place-bottom::before {
        content: "";
        background-color: inherit;
        position: absolute;
        z-index: -1;
        width: 18px;
        height: 10px;
    }
    .`).concat(e,`.place-bottom::after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        border-top-right-radius: `).concat(l,`px;
        border: 1px solid `).concat(i,`;
        background-color: `).concat(s,`;
        z-index: -2;
        top: -6px;
        left: 50%;
        margin-left: -6px;
        transform: rotate(45deg);
    }

    .`).concat(e,`.place-left {
        margin-left: -10px;
    }
    .`).concat(e,`.place-left::before {
        content: "";
        background-color: inherit;
        position: absolute;
        z-index: -1;
        width: 10px;
        height: 18px;
    }
    .`).concat(e,`.place-left::after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        border-top-right-radius: `).concat(l,`px;
        border: 1px solid `).concat(i,`;
        background-color: `).concat(s,`;
        z-index: -2;
        right: -6px;
        top: 50%;
        margin-top: -6px;
        transform: rotate(45deg);
    }

    .`).concat(e,`.place-right {
        margin-left: 10px;
    }
    .`).concat(e,`.place-right::before {
        content: "";
        background-color: inherit;
        position: absolute;
        z-index: -1;
        width: 10px;
        height: 18px;
    }
    .`).concat(e,`.place-right::after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        border-top-right-radius: `).concat(l,`px;
        border: 1px solid `).concat(i,`;
        background-color: `).concat(s,`;
        z-index: -2;
        left: -6px;
        top: 50%;
        margin-top: -6px;
        transform: rotate(-135deg);
    }
  `)}function Y4(e,t,n){var r=e.text,o=e.background,a=e.border,i=e.arrow?e.arrow:e.background,s=W4(t);return r&&(s.text=r),o&&(s.background=o),n&&(a?s.border=a:s.border=t==="light"?"black":"white"),i&&(s.arrow=i),s}var mt,Wa;T4(mt=R4(mt=$4(mt=P4(mt=A4(mt=L4(mt=D4(mt=(Wa=function(e){W5(n,e);var t=K5(n);function n(r){var o;return U5(this,n),o=t.call(this,r),o.state={uuid:r.uuid||U4(),place:r.place||"top",desiredPlace:r.place||"top",type:r.type||"dark",effect:r.effect||"float",show:!1,border:!1,borderClass:"border",customColors:{},customRadius:{},offset:{},padding:r.padding,extraClass:"",html:!1,delayHide:0,delayShow:0,event:r.event||null,eventOff:r.eventOff||null,currentEvent:null,currentTarget:null,ariaProps:Gy(r),isEmptyTip:!1,disable:!1,possibleCustomEvents:r.possibleCustomEvents||"",possibleCustomEventsOff:r.possibleCustomEventsOff||"",originTooltip:null,isMultiline:!1},o.bind(["showTooltip","updateTooltip","hideTooltip","hideTooltipOnScroll","getTooltipContent","globalRebuild","globalShow","globalHide","onWindowResize","mouseOnToolTip"]),o.mount=!0,o.delayShowLoop=null,o.delayHideLoop=null,o.delayReshow=null,o.intervalUpdateContent=null,o}return H5(n,[{key:"bind",value:function(o){var a=this;o.forEach(function(i){a[i]=a[i].bind(a)})}},{key:"componentDidMount",value:function(){var o=this.props;o.insecure;var a=o.resizeHide,i=o.disableInternalStyle;this.mount=!0,this.bindListener(),this.bindWindowEvents(a),i||this.injectStyles()}},{key:"componentWillUnmount",value:function(){this.mount=!1,this.clearTimer(),this.unbindListener(),this.removeScrollListener(this.state.currentTarget),this.unbindWindowEvents()}},{key:"injectStyles",value:function(){var o=this.tooltipRef;if(o){for(var a=o.parentNode;a.parentNode;)a=a.parentNode;var i;switch(a.constructor.name){case"Document":case"HTMLDocument":case void 0:i=a.head;break;case"ShadowRoot":default:i=a;break}if(!i.querySelector("style[data-react-tooltip]")){var s=document.createElement("style");s.textContent=H4,s.setAttribute("data-react-tooltip","true"),i.appendChild(s)}}}},{key:"mouseOnToolTip",value:function(){var o=this.state.show;return o&&this.tooltipRef?(this.tooltipRef.matches||(this.tooltipRef.msMatchesSelector?this.tooltipRef.matches=this.tooltipRef.msMatchesSelector:this.tooltipRef.matches=this.tooltipRef.mozMatchesSelector),this.tooltipRef.matches(":hover")):!1}},{key:"getTargetArray",value:function(o){var a=[],i;if(!o)i="[data-tip]:not([data-for])";else{var s=o.replace(/\\/g,"\\\\").replace(/"/g,'\\"');i='[data-tip][data-for="'.concat(s,'"]')}return kd(document.getElementsByTagName("*")).filter(function(l){return l.shadowRoot}).forEach(function(l){a=a.concat(kd(l.shadowRoot.querySelectorAll(i)))}),a.concat(kd(document.querySelectorAll(i)))}},{key:"bindListener",value:function(){var o=this,a=this.props,i=a.id,s=a.globalEventOff,l=a.isCapture,c=this.getTargetArray(i);c.forEach(function(d){d.getAttribute("currentItem")===null&&d.setAttribute("currentItem","false"),o.unbindBasicListener(d),o.isCustomEvent(d)&&o.customUnbindListener(d)}),this.isBodyMode()?this.bindBodyListener(c):c.forEach(function(d){var f=o.isCapture(d),p=o.getEffect(d);if(o.isCustomEvent(d)){o.customBindListener(d);return}d.addEventListener("mouseenter",o.showTooltip,f),d.addEventListener("focus",o.showTooltip,f),p==="float"&&d.addEventListener("mousemove",o.updateTooltip,f),d.addEventListener("mouseleave",o.hideTooltip,f),d.addEventListener("blur",o.hideTooltip,f)}),s&&(window.removeEventListener(s,this.hideTooltip),window.addEventListener(s,this.hideTooltip,l)),this.bindRemovalTracker()}},{key:"unbindListener",value:function(){var o=this,a=this.props,i=a.id,s=a.globalEventOff;if(this.isBodyMode())this.unbindBodyListener();else{var l=this.getTargetArray(i);l.forEach(function(c){o.unbindBasicListener(c),o.isCustomEvent(c)&&o.customUnbindListener(c)})}s&&window.removeEventListener(s,this.hideTooltip),this.unbindRemovalTracker()}},{key:"unbindBasicListener",value:function(o){var a=this.isCapture(o);o.removeEventListener("mouseenter",this.showTooltip,a),o.removeEventListener("mousemove",this.updateTooltip,a),o.removeEventListener("mouseleave",this.hideTooltip,a)}},{key:"getTooltipContent",value:function(){var o=this.props,a=o.getContent,i=o.children,s;return a&&(Array.isArray(a)?s=a[0]&&a[0](this.state.originTooltip):s=a(this.state.originTooltip)),Vy(this.state.originTooltip,i,s,this.state.isMultiline)}},{key:"isEmptyTip",value:function(o){return typeof o=="string"&&o===""||o===null}},{key:"showTooltip",value:function(o,a){if(this.tooltipRef){if(a){var i=this.getTargetArray(this.props.id),s=i.some(function(O){return O===o.currentTarget});if(!s)return}var l=this.props,c=l.multiline,d=l.getContent,f=o.currentTarget.getAttribute("data-tip"),p=o.currentTarget.getAttribute("data-multiline")||c||!1,h=o instanceof window.FocusEvent||a,y=!0;o.currentTarget.getAttribute("data-scroll-hide")?y=o.currentTarget.getAttribute("data-scroll-hide")==="true":this.props.scrollHide!=null&&(y=this.props.scrollHide),o&&o.currentTarget&&o.currentTarget.setAttribute&&o.currentTarget.setAttribute("aria-describedby",this.props.id||this.state.uuid);var w=o.currentTarget.getAttribute("data-place")||this.props.place||"top",x=h&&"solid"||this.getEffect(o.currentTarget),v=o.currentTarget.getAttribute("data-offset")||this.props.offset||{},m=Wy(o,o.currentTarget,this.tooltipRef,w.split(",")[0],w,x,v);m.position&&this.props.overridePosition&&(m.position=this.props.overridePosition(m.position,o,o.currentTarget,this.tooltipRef,w,w,x,v));var b=m.isNewState?m.newState.place:w.split(",")[0];this.clearTimer();var k=o.currentTarget,C=this.state.show?k.getAttribute("data-delay-update")||this.props.delayUpdate:0,_=this,E=function(){_.setState({originTooltip:f,isMultiline:p,desiredPlace:w,place:b,type:k.getAttribute("data-type")||_.props.type||"dark",customColors:{text:k.getAttribute("data-text-color")||_.props.textColor||null,background:k.getAttribute("data-background-color")||_.props.backgroundColor||null,border:k.getAttribute("data-border-color")||_.props.borderColor||null,arrow:k.getAttribute("data-arrow-color")||_.props.arrowColor||null},customRadius:{tooltip:k.getAttribute("data-tooltip-radius")||_.props.tooltipRadius||"3",arrow:k.getAttribute("data-arrow-radius")||_.props.arrowRadius||"0"},effect:x,offset:v,padding:k.getAttribute("data-padding")||_.props.padding,html:(k.getAttribute("data-html")?k.getAttribute("data-html")==="true":_.props.html)||!1,delayShow:k.getAttribute("data-delay-show")||_.props.delayShow||0,delayHide:k.getAttribute("data-delay-hide")||_.props.delayHide||0,delayUpdate:k.getAttribute("data-delay-update")||_.props.delayUpdate||0,border:(k.getAttribute("data-border")?k.getAttribute("data-border")==="true":_.props.border)||!1,borderClass:k.getAttribute("data-border-class")||_.props.borderClass||"border",extraClass:k.getAttribute("data-class")||_.props.class||_.props.className||"",disable:(k.getAttribute("data-tip-disable")?k.getAttribute("data-tip-disable")==="true":_.props.disable)||!1,currentTarget:k},function(){y&&_.addScrollListener(_.state.currentTarget),_.updateTooltip(o),d&&Array.isArray(d)&&(_.intervalUpdateContent=setInterval(function(){if(_.mount){var A=_.props.getContent,$=Vy(f,"",A[0](),p),I=_.isEmptyTip($);_.setState({isEmptyTip:I}),_.updatePosition()}},d[1]))})};C?this.delayReshow=setTimeout(E,C):E()}}},{key:"updateTooltip",value:function(o){var a=this,i=this.state,s=i.delayShow,l=i.disable,c=this.props,d=c.afterShow,f=c.disable,p=this.getTooltipContent(),h=o.currentTarget||o.target;if(!this.mouseOnToolTip()&&!(this.isEmptyTip(p)||l||f)){var y=this.state.show?0:parseInt(s,10),w=function(){if(Array.isArray(p)&&p.length>0||p){var v=!a.state.show;a.setState({currentEvent:o,currentTarget:h,show:!0},function(){a.updatePosition(function(){v&&d&&d(o)})})}};this.delayShowLoop&&clearTimeout(this.delayShowLoop),y?this.delayShowLoop=setTimeout(w,y):(this.delayShowLoop=null,w())}}},{key:"listenForTooltipExit",value:function(){var o=this.state.show;o&&this.tooltipRef&&this.tooltipRef.addEventListener("mouseleave",this.hideTooltip)}},{key:"removeListenerForTooltipExit",value:function(){var o=this.state.show;o&&this.tooltipRef&&this.tooltipRef.removeEventListener("mouseleave",this.hideTooltip)}},{key:"hideTooltip",value:function(o,a){var i=this,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{isScroll:!1},l=this.state.disable,c=s.isScroll,d=c?0:this.state.delayHide,f=this.props,p=f.afterHide,h=f.disable,y=this.getTooltipContent();if(this.mount&&!(this.isEmptyTip(y)||l||h)){if(a){var w=this.getTargetArray(this.props.id),x=w.some(function(m){return m===o.currentTarget});if(!x||!this.state.show)return}o&&o.currentTarget&&o.currentTarget.removeAttribute&&o.currentTarget.removeAttribute("aria-describedby");var v=function(){var b=i.state.show;if(i.mouseOnToolTip()){i.listenForTooltipExit();return}i.removeListenerForTooltipExit(),i.setState({show:!1},function(){i.removeScrollListener(i.state.currentTarget),b&&p&&p(o)})};this.clearTimer(),d?this.delayHideLoop=setTimeout(v,parseInt(d,10)):v()}}},{key:"hideTooltipOnScroll",value:function(o,a){this.hideTooltip(o,a,{isScroll:!0})}},{key:"addScrollListener",value:function(o){var a=this.isCapture(o);window.addEventListener("scroll",this.hideTooltipOnScroll,a)}},{key:"removeScrollListener",value:function(o){var a=this.isCapture(o);window.removeEventListener("scroll",this.hideTooltipOnScroll,a)}},{key:"updatePosition",value:function(o){var a=this,i=this.state,s=i.currentEvent,l=i.currentTarget,c=i.place,d=i.desiredPlace,f=i.effect,p=i.offset,h=this.tooltipRef,y=Wy(s,l,h,c,d,f,p);if(y.position&&this.props.overridePosition&&(y.position=this.props.overridePosition(y.position,s,l,h,c,d,f,p)),y.isNewState)return this.setState(y.newState,function(){a.updatePosition(o)});o&&typeof o=="function"&&o(),h.style.left=y.position.left+"px",h.style.top=y.position.top+"px"}},{key:"clearTimer",value:function(){this.delayShowLoop&&(clearTimeout(this.delayShowLoop),this.delayShowLoop=null),this.delayHideLoop&&(clearTimeout(this.delayHideLoop),this.delayHideLoop=null),this.delayReshow&&(clearTimeout(this.delayReshow),this.delayReshow=null),this.intervalUpdateContent&&(clearInterval(this.intervalUpdateContent),this.intervalUpdateContent=null)}},{key:"hasCustomColors",value:function(){var o=this;return!!(Object.keys(this.state.customColors).find(function(a){return a!=="border"&&o.state.customColors[a]})||this.state.border&&this.state.customColors.border)}},{key:"render",value:function(){var o=this,a=this.state,i=a.extraClass,s=a.html,l=a.ariaProps,c=a.disable,d=a.uuid,f=this.getTooltipContent(),p=this.isEmptyTip(f),h=this.props.disableInternalStyle?"":q4(this.state.uuid,this.state.customColors,this.state.type,this.state.border,this.state.padding,this.state.customRadius),y="__react_component_tooltip"+" ".concat(this.state.uuid)+(this.state.show&&!c&&!p?" show":"")+(this.state.border?" "+this.state.borderClass:"")+" place-".concat(this.state.place)+" type-".concat(this.hasCustomColors()?"custom":this.state.type)+(this.props.delayUpdate?" allow_hover":"")+(this.props.clickable?" allow_click":""),w=this.props.wrapper;n.supportedWrappers.indexOf(w)<0&&(w=n.defaultProps.wrapper);var x=[y,i].filter(Boolean).join(" ");if(s){var v="".concat(f).concat(h?`
<style aria-hidden="true">`.concat(h,"</style>"):"");return q.createElement(w,lu({className:"".concat(x),id:this.props.id||d,ref:function(b){return o.tooltipRef=b}},l,{"data-id":"tooltip",dangerouslySetInnerHTML:{__html:v}}))}else return q.createElement(w,lu({className:"".concat(x),id:this.props.id||d},l,{ref:function(b){return o.tooltipRef=b},"data-id":"tooltip"}),h&&q.createElement("style",{dangerouslySetInnerHTML:{__html:h},"aria-hidden":"true"}),f)}}],[{key:"propTypes",get:function(){return{uuid:u.string,children:u.any,place:u.string,type:u.string,effect:u.string,offset:u.object,padding:u.string,multiline:u.bool,border:u.bool,borderClass:u.string,textColor:u.string,backgroundColor:u.string,borderColor:u.string,arrowColor:u.string,arrowRadius:u.string,tooltipRadius:u.string,insecure:u.bool,class:u.string,className:u.string,id:u.string,html:u.bool,delayHide:u.number,delayUpdate:u.number,delayShow:u.number,event:u.string,eventOff:u.string,isCapture:u.bool,globalEventOff:u.string,getContent:u.any,afterShow:u.func,afterHide:u.func,overridePosition:u.func,disable:u.bool,scrollHide:u.bool,resizeHide:u.bool,wrapper:u.string,bodyMode:u.bool,possibleCustomEvents:u.string,possibleCustomEventsOff:u.string,clickable:u.bool,disableInternalStyle:u.bool}}},{key:"getDerivedStateFromProps",value:function(o,a){var i=a.ariaProps,s=Gy(o),l=Object.keys(s).some(function(c){return s[c]!==i[c]});return l?Xf(Xf({},a),{},{ariaProps:s}):null}}]),n}(q.Component),gi(Wa,"defaultProps",{insecure:!0,resizeHide:!0,wrapper:"div",clickable:!1}),gi(Wa,"supportedWrappers",["div","span"]),gi(Wa,"displayName","ReactTooltip"),Wa))||mt)||mt)||mt)||mt)||mt)||mt);function dp(){return dp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},dp.apply(this,arguments)}function ko(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function P(e,t){return t||(t=e.slice(0)),e.raw=t,e}var Ky;V.div(Ky||(Ky=P([""])));var R={white:"#FFFFFF",info:"#17A2B8",light:"#EEEEEE",primary:"#3b82f6",primary50:"#eff6ff",primary100:"#dbeafe",primary200:"#bfdbfe",primary300:"#93c5fd",primary400:"#60a5fa",primary500:"#3b82f6",primary600:"#2563eb",primary700:"#1d4ed8",primary800:"#1e40af",primary900:"#1e3a8a",secondary:"#6366f1",secondary50:"#eef2ff",secondary100:"#e0e7ff",secondary200:"#c7d2fe",secondary300:"#a5b4fc",secondary400:"#818cf8",secondary500:"#6366f1",secondary600:"#4f46e5",secondary700:"#4338ca",secondary800:"#3730a3",secondary900:"#312e81",danger:"#ef4444",danger50:"#fef2f2",danger100:"#fee2e2",danger200:"#fecaca",danger300:"#fca5a5",danger400:"#f87171",danger500:"#ef4444",danger600:"#dc2626",danger700:"#b91c1c",danger800:"#991b1b",danger900:"#7f1d1d",success:"#22c55e",success50:"#f0fdf4",success100:"#dcfce7",success200:"#bbf7d0",success300:"#86efac",success400:"#4ade80",success500:"#22c55e",success600:"#16a34a",success700:"#15803d",success800:"#166534",success900:"#14532d",warning:"#eab308",warning50:"#fefce8",warning100:"#fef9c3",warning200:"#fef08a",warning300:"#fde047",warning400:"#facc15",warning500:"#eab308",warning600:"#ca8a04",warning700:"#a16207",warning800:"#854d0e",warning900:"#713f12",brown:"#bfa094",brown50:"#fdf8f6",brown100:"#f2e8e5",brown200:"#eaddd7",brown300:"#e0cec7",brown400:"#d2bab0",brown500:"#bfa094",brown600:"#a18072",brown700:"#977669",brown800:"#846358",brown900:"#43302b",dark:"#111827",dark50:"#f9fafb",dark100:"#f3f4f6",dark200:"#e5e7eb",dark300:"#d1d5db",dark400:"#9ca3af",dark500:"#6b7280",dark600:"#4b5563",dark700:"#374151",dark800:"#1f2937",dark900:"#111827",primaryHover:"#276EF1BD",secondaryHover:"#7356BFBD",successHover:"#05944FBD",warningHover:"#FFE975BD",dangerHover:"#E11900BD",whiteHover:"#FFFFFFD5",darkHover:"#000000BD",infoHover:"#17A2B8BD",lightHover:"#EEEEEEBD"},Zn={colors:R,colorStyles:{primary:{color:R.white,borderColor:R.primary,backgroundColor:R.primary,"&:hover":{color:R.white,backgroundColor:R.primaryHover}},secondary:{color:R.white,borderColor:R.secondary,backgroundColor:R.secondary,"&:hover":{color:R.white,backgroundColor:R.secondaryHover}},light:{color:R.dark,borderColor:R.light,backgroundColor:R.light,"&:hover":{color:R.dark,backgroundColor:R.lightHover}},success:{color:R.white,borderColor:R.success,backgroundColor:R.success,"&:hover":{color:R.white,backgroundColor:R.successHover}},danger:{color:R.white,borderColor:R.danger,backgroundColor:R.danger,"&:hover":{color:R.white,backgroundColor:R.dangerHover}},warning:{color:R.dark,borderColor:R.warning,backgroundColor:R.warning,"&:hover":{color:R.dark,backgroundColor:R.warningHover}},dark:{color:R.white,borderColor:R.dark,backgroundColor:R.dark,"&:hover":{color:R.white,backgroundColor:R.darkHover}},white:{color:R.dark,borderColor:R.white,backgroundColor:R.white,"&:hover":{color:R.dark,backgroundColor:R.whiteHover}},info:{color:R.white,borderColor:R.info,backgroundColor:R.info,"&:hover":{color:R.white,backgroundColor:R.infoHover}}},buttonStyle:{primary:{color:R.white,borderColor:R.primary,backgroundColor:R.primary},secondary:{color:R.white,borderColor:R.secondary,backgroundColor:R.secondary},light:{color:R.dark,borderColor:R.light,backgroundColor:R.light},success:{color:R.white,borderColor:R.success,backgroundColor:R.success},danger:{color:R.white,borderColor:R.danger,backgroundColor:R.danger},warning:{color:R.dark,borderColor:R.warning,backgroundColor:R.warning},dark:{color:R.white,borderColor:R.dark,backgroundColor:R.dark},white:{color:R.dark,borderColor:R.white,backgroundColor:R.white},info:{color:R.white,borderColor:R.info,backgroundColor:R.info}},lightStyle:{primary:{color:R.primary,borderColor:R.primary,backgroundColor:"#E6E6FF"},secondary:{color:R.secondary,borderColor:R.secondary,backgroundColor:"#F0EDF8"},success:{color:R.success,borderColor:R.success,backgroundColor:"#E7FAE7"},danger:{color:R.danger,borderColor:R.danger,backgroundColor:"#FCE9E9"},warning:{color:R.dark,borderColor:R.warning,backgroundColor:"#FFFBE6"},dark:{color:R.white,borderColor:R.dark,backgroundColor:"#333333"},white:{color:R.dark,borderColor:R.dark,backgroundColor:"#F9F9F9"},light:{color:R.dark,borderColor:R.light,backgroundColor:R.light},info:{color:R.white,borderColor:R.info,backgroundColor:R.info}}};u.string,u.func,u.string,u.string,u.string,u.bool,u.string;var Yy,Xy;V.div(Yy||(Yy=P([`
  width: 100%;
  `,`;
  .accordion-list {
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    border: 1px solid #f4f4f4;
  }
  .accordion-list__item + .accordion-list__item {
    border-top: 1px solid #f4f4f4;
  }
  .accordion-item--opened .accordion-item__icon {
    transform: rotate(180deg);
  }
  .accordion-item--opened .accordion-item__inner {
    max-height: 100rem;
    transition-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);
    transition-duration: 0.5s;
    transition-property: max-height;
  }
  .accordion-item--opened .accordion-item__content {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.2s;
    transition-timing-function: ease-in-out;
    transition-duration: 0.2s;
    transition-property: opacity, transform;
  }
  .accordion-item__line {
    display: block;
    padding: 0.8rem 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    z-index: 2;
    position: relative;
  }
  .accordion-item__title {
    font-size: 1.2rem;
    margin: 0;
    font-weight: 500;
    color: #121212;
  }
  .accordion-item__icon {
    width: 1.5rem;
    height: 1.5rem;
    transition: transform 0.3s ease-in-out;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAABGklEQVR4Ae3RAcZCQRiF4buDfwshBGi+2UQgcIGAVtpSIuS/KyilG+UTcbk6zIH3GQBm3mM6AAAAAAAAAACA+eqf/yZBXcV/2XeCVPYx1FXj/FjGUMd45AQp/1HHGGLZNL+e61jHnKDmv8652YT1IvPfE2LX/Sh27/ycsF60yT/lk58JYn6eU4MJccjnlAmZ/33i0OAH4jg9Qcw/5g9YJpS+m6n0xvzpCfVe+nn59S7kGyYo+YYJWz3fO+E2PaFs9XzPhMy/6fmWCXq+YUJs9HzrhLh+JsQmrnq+bYKeb52g53snXPR88wQ93z9Bz/dP0PP9E/R89wQ93zpBz7dO0POtE/R86wQ93zpBzzdP+MoHAAAAAAAAAADAExTnTW20AtjhAAAAAElFTkSuQmCC);
    opacity: 0.6;
  }
  .accordion-item__inner {
    max-height: 0;
    overflow: hidden;
    text-transform: cubic-bezier(0.95, 0.05, 0.795, 0.035);
    transition-duration: 0.5s;
    transition-property: max-height;
    z-index: 1;
    position: relative;
  }
  .accordion-item__content {
    opacity: 0;
    transform: translateY(-1rem);
    transition-timing-function: linear, ease;
    transition-duration: 0.1s;
    transition-property: opacity, transform;
    transition-delay: 0.5s;
    padding: 0 1.2rem 1.2rem;
  }
  .accordion-item__paragraph {
    margin: 0;
    font-size: 1rem;
    color: #333;
    font-weight: 300;
    line-height: 1.3;
  }
`])),function(e){return e.hideIcon?Z(Xy||(Xy=P([`
          .accordion-item__icon {
            display: none;
          }
        `]))):null});u.string,u.string,u.string,u.bool,u.string,u.arrayOf(u.any);var Qy,Jy;V.div(Qy||(Qy=P([`
    `,`
    border-radius: 0px;
    align-items:center;
    justify-content:space-between;
    min-width:500px;
`])),Xt);V.button(Jy||(Jy=P([`
	color:inherit;
	border:none;
	background-color:transparent;
    right: 0px;
    position: absolute;
    padding: 0px 1.2em;
	:focus { outline:none;	}
`])));u.string,u.oneOf(["primary","secondary","success","danger","warning","info","dark","light"]),u.func,u.func,u.string,u.bool;var Zy,eb;V.div(Zy||(Zy=P([""])));V.div(eb||(eb=P([`
  .animated {
    animation-duration: 1s;
    animation-fill-mode: both;
  }
  .animated.infinite {
    animation-iteration-count: infinite;
  }
  .animated.delay-1s {
    animation-delay: 1s;
  }
  .animated.delay-2s {
    animation-delay: 2s;
  }
  .animated.delay-3s {
    animation-delay: 3s;
  }
  .animated.delay-4s {
    animation-delay: 4s;
  }
  .animated.delay-5s {
    animation-delay: 5s;
  }
  .animated.fast {
    animation-duration: 800ms;
  }
  .animated.faster {
    animation-duration: 500ms;
  }
  .animated.slow {
    animation-duration: 2s;
  }
  .animated.slower {
    animation-duration: 3s;
  }
  @media (prefers-reduced-motion) {
    .animated {
      transition: none !important;
      animation: unset !important;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .fadeIn {
    animation-name: fadeIn;
  }
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .fadeInDown {
    animation-name: fadeInDown;
  }
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .fadeInLeft {
    animation-name: fadeInLeft;
  }
  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .fadeInRight {
    animation-name: fadeInRight;
  }
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .fadeInUp {
    animation-name: fadeInUp;
  }
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  .fadeOut {
    animation-name: fadeOut;
  }
  @keyframes fadeOutDown {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
  }
  .fadeOutDown {
    animation-name: fadeOutDown;
  }
  @keyframes fadeOutLeft {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
  }
  .fadeOutLeft {
    animation-name: fadeOutLeft;
  }
  @keyframes fadeOutRight {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
  }
  .fadeOutRight {
    animation-name: fadeOutRight;
  }
  @keyframes fadeOutUp {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
  }
  .fadeOutUp {
    animation-name: fadeOutUp;
  } /*!
 * animate.css -http://daneden.me/animate
 * Version - 3.7.0
 * Licensed under the MIT license - http://opensource.org/licenses/MIT
 *
 * Copyright (c) 2018 Daniel Eden
 */
  @keyframes bounce {
    from,
    20%,
    53%,
    80%,
    to {
      transform: translate3d(0, 0, 0);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    40%,
    43% {
      transform: translate3d(0, -30px, 0);
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    }
    70% {
      transform: translate3d(0, -15px, 0);
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    }
    90% {
      transform: translate3d(0, -4px, 0);
    }
  }
  .bounce {
    transform-origin: center bottom;
    animation-name: bounce;
  }
  @keyframes flash {
    from,
    50%,
    to {
      opacity: 1;
    }
    25%,
    75% {
      opacity: 0;
    }
  }
  .flash {
    animation-name: flash;
  }
  @keyframes pulse {
    from {
      transform: scale3d(1, 1, 1);
    }
    50% {
      transform: scale3d(1.05, 1.05, 1.05);
    }
    to {
      transform: scale3d(1, 1, 1);
    }
  }
  .pulse {
    animation-name: pulse;
  }
  @keyframes rubberBand {
    from {
      transform: scale3d(1, 1, 1);
    }
    30% {
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      transform: scale3d(1.05, 0.95, 1);
    }
    to {
      transform: scale3d(1, 1, 1);
    }
  }
  .rubberBand {
    animation-name: rubberBand;
  }
  @keyframes shake {
    from,
    to {
      transform: translate3d(0, 0, 0);
    }
    10%,
    30%,
    50%,
    70%,
    90% {
      transform: translate3d(-10px, 0, 0);
    }
    20%,
    40%,
    60%,
    80% {
      transform: translate3d(10px, 0, 0);
    }
  }
  .shake {
    animation-name: shake;
  }
  @keyframes headShake {
    0% {
      transform: translateX(0);
    }
    6.5% {
      transform: translateX(-6px) rotateY(-9deg);
    }
    18.5% {
      transform: translateX(5px) rotateY(7deg);
    }
    31.5% {
      transform: translateX(-3px) rotateY(-5deg);
    }
    43.5% {
      transform: translateX(2px) rotateY(3deg);
    }
    50% {
      transform: translateX(0);
    }
  }
  .headShake {
    animation-name: headShake;
    animation-timing-function: ease-in-out;
  }
  @keyframes swing {
    20% {
      transform: rotate3d(0, 0, 1, 15deg);
    }
    40% {
      transform: rotate3d(0, 0, 1, -10deg);
    }
    60% {
      transform: rotate3d(0, 0, 1, 5deg);
    }
    80% {
      transform: rotate3d(0, 0, 1, -5deg);
    }
    to {
      transform: rotate3d(0, 0, 1, 0deg);
    }
  }
  .swing {
    transform-origin: top center;
    animation-name: swing;
  }
  @keyframes tada {
    from {
      transform: scale3d(1, 1, 1);
    }
    10%,
    20% {
      transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    }
    30%,
    50%,
    70%,
    90% {
      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    }
    40%,
    60%,
    80% {
      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    }
    to {
      transform: scale3d(1, 1, 1);
    }
  }
  .tada {
    animation-name: tada;
  }
  @keyframes wobble {
    from {
      transform: translate3d(0, 0, 0);
    }
    15% {
      transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    }
    30% {
      transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    }
    45% {
      transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    }
    60% {
      transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    }
    75% {
      transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .wobble {
    animation-name: wobble;
  }
  @keyframes jello {
    from,
    11.1%,
    to {
      transform: translate3d(0, 0, 0);
    }
    22.2% {
      transform: skewX(-12.5deg) skewY(-12.5deg);
    }
    33.3% {
      transform: skewX(6.25deg) skewY(6.25deg);
    }
    44.4% {
      transform: skewX(-3.125deg) skewY(-3.125deg);
    }
    55.5% {
      transform: skewX(1.5625deg) skewY(1.5625deg);
    }
    66.6% {
      transform: skewX(-0.78125deg) skewY(-0.78125deg);
    }
    77.7% {
      transform: skewX(0.39063deg) skewY(0.39063deg);
    }
    88.8% {
      transform: skewX(-0.19531deg) skewY(-0.19531deg);
    }
  }
  .jello {
    transform-origin: center;
    animation-name: jello;
  }
  @keyframes heartBeat {
    0% {
      transform: scale(1);
    }
    14% {
      transform: scale(1.3);
    }
    28% {
      transform: scale(1);
    }
    42% {
      transform: scale(1.3);
    }
    70% {
      transform: scale(1);
    }
  }
  .heartBeat {
    animation-name: heartBeat;
    animation-duration: 1.3s;
    animation-timing-function: ease-in-out;
  }
  @keyframes bounceIn {
    from,
    20%,
    40%,
    60%,
    80%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    20% {
      transform: scale3d(1.1, 1.1, 1.1);
    }
    40% {
      transform: scale3d(0.9, 0.9, 0.9);
    }
    60% {
      opacity: 1;
      transform: scale3d(1.03, 1.03, 1.03);
    }
    80% {
      transform: scale3d(0.97, 0.97, 0.97);
    }
    to {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
  }
  .bounceIn {
    animation-name: bounceIn;
    animation-duration: 0.75s;
  }
  @keyframes bounceInDown {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: translate3d(0, -3000px, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(0, 25px, 0);
    }
    75% {
      transform: translate3d(0, -10px, 0);
    }
    90% {
      transform: translate3d(0, 5px, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .bounceInDown {
    animation-name: bounceInDown;
  }
  @keyframes bounceInLeft {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: translate3d(-3000px, 0, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(25px, 0, 0);
    }
    75% {
      transform: translate3d(-10px, 0, 0);
    }
    90% {
      transform: translate3d(5px, 0, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .bounceInLeft {
    animation-name: bounceInLeft;
  }
  @keyframes bounceInRight {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    from {
      opacity: 0;
      transform: translate3d(3000px, 0, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(-25px, 0, 0);
    }
    75% {
      transform: translate3d(10px, 0, 0);
    }
    90% {
      transform: translate3d(-5px, 0, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .bounceInRight {
    animation-name: bounceInRight;
  }
  @keyframes bounceInUp {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    from {
      opacity: 0;
      transform: translate3d(0, 3000px, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(0, -20px, 0);
    }
    75% {
      transform: translate3d(0, 10px, 0);
    }
    90% {
      transform: translate3d(0, -5px, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .bounceInUp {
    animation-name: bounceInUp;
  }
  @keyframes bounceOut {
    20% {
      transform: scale3d(0.9, 0.9, 0.9);
    }
    50%,
    55% {
      opacity: 1;
      transform: scale3d(1.1, 1.1, 1.1);
    }
    to {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
  }
  .bounceOut {
    animation-name: bounceOut;
    animation-duration: 0.75s;
  }
  @keyframes bounceOutDown {
    20% {
      transform: translate3d(0, 10px, 0);
    }
    40%,
    45% {
      opacity: 1;
      transform: translate3d(0, -20px, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(0, 2000px, 0);
    }
  }
  .bounceOutDown {
    animation-name: bounceOutDown;
  }
  @keyframes bounceOutLeft {
    20% {
      opacity: 1;
      transform: translate3d(20px, 0, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(-2000px, 0, 0);
    }
  }
  .bounceOutLeft {
    animation-name: bounceOutLeft;
  }
  @keyframes bounceOutRight {
    20% {
      opacity: 1;
      transform: translate3d(-20px, 0, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(2000px, 0, 0);
    }
  }
  .bounceOutRight {
    animation-name: bounceOutRight;
  }
  @keyframes bounceOutUp {
    20% {
      transform: translate3d(0, -10px, 0);
    }
    40%,
    45% {
      opacity: 1;
      transform: translate3d(0, 20px, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(0, -2000px, 0);
    }
  }
  .bounceOutUp {
    animation-name: bounceOutUp;
  }
  @keyframes fadeInDownBig {
    from {
      opacity: 0;
      transform: translate3d(0, -2000px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .fadeInDownBig {
    animation-name: fadeInDownBig;
  }
  @keyframes fadeInLeftBig {
    from {
      opacity: 0;
      transform: translate3d(-2000px, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .fadeInLeftBig {
    animation-name: fadeInLeftBig;
  }
  @keyframes fadeInRightBig {
    from {
      opacity: 0;
      transform: translate3d(2000px, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .fadeInRightBig {
    animation-name: fadeInRightBig;
  }
  @keyframes fadeInUpBig {
    from {
      opacity: 0;
      transform: translate3d(0, 2000px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .fadeInUpBig {
    animation-name: fadeInUpBig;
  }
  @keyframes fadeOutDownBig {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(0, 2000px, 0);
    }
  }
  .fadeOutDownBig {
    animation-name: fadeOutDownBig;
  }
  @keyframes fadeOutLeftBig {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(-2000px, 0, 0);
    }
  }
  .fadeOutLeftBig {
    animation-name: fadeOutLeftBig;
  }
  @keyframes fadeOutRightBig {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(2000px, 0, 0);
    }
  }
  .fadeOutRightBig {
    animation-name: fadeOutRightBig;
  }
  @keyframes fadeOutUpBig {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(0, -2000px, 0);
    }
  }
  .fadeOutUpBig {
    animation-name: fadeOutUpBig;
  }
  @keyframes flip {
    from {
      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0)
        rotate3d(0, 1, 0, -360deg);
      animation-timing-function: ease-out;
    }
    40% {
      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
        rotate3d(0, 1, 0, -190deg);
      animation-timing-function: ease-out;
    }
    50% {
      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
        rotate3d(0, 1, 0, -170deg);
      animation-timing-function: ease-in;
    }
    80% {
      transform: perspective(400px) scale3d(0.95, 0.95, 0.95)
        translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
      animation-timing-function: ease-in;
    }
    to {
      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0)
        rotate3d(0, 1, 0, 0deg);
      animation-timing-function: ease-in;
    }
  }
  .flip {
    backface-visibility: visible;
    animation-name: flip;
  }
  @keyframes flipInX {
    from {
      opacity: 0;
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      animation-timing-function: ease-in;
    }
    40% {
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      animation-timing-function: ease-in;
    }
    60% {
      opacity: 1;
      transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    }
    80% {
      transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    }
    to {
      transform: perspective(400px);
    }
  }
  .flipInX {
    backface-visibility: visible;
    animation-name: flipInX;
  }
  @keyframes flipInY {
    from {
      opacity: 0;
      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      animation-timing-function: ease-in;
    }
    40% {
      transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
      animation-timing-function: ease-in;
    }
    60% {
      opacity: 1;
      transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    }
    80% {
      transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    }
    to {
      transform: perspective(400px);
    }
  }
  .flipInY {
    backface-visibility: visible;
    animation-name: flipInY;
  }
  @keyframes flipOutX {
    from {
      transform: perspective(400px);
    }
    30% {
      opacity: 1;
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    }
    to {
      opacity: 0;
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    }
  }
  .flipOutX {
    animation-name: flipOutX;
    animation-duration: 0.75s;
    backface-visibility: visible;
  }
  @keyframes flipOutY {
    from {
      transform: perspective(400px);
    }
    30% {
      opacity: 1;
      transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    }
    to {
      opacity: 0;
      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    }
  }
  .flipOutY {
    animation-name: flipOutY;
    animation-duration: 0.75s;
    backface-visibility: visible;
  }
  @keyframes lightSpeedIn {
    from {
      opacity: 0;
      transform: translate3d(100%, 0, 0) skewX(-30deg);
    }
    60% {
      opacity: 1;
      transform: skewX(20deg);
    }
    80% {
      transform: skewX(-5deg);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .lightSpeedIn {
    animation-name: lightSpeedIn;
    animation-timing-function: ease-out;
  }
  @keyframes lightSpeedOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(100%, 0, 0) skewX(30deg);
    }
  }
  .lightSpeedOut {
    animation-name: lightSpeedOut;
    animation-timing-function: ease-in;
  }
  @keyframes rotateIn {
    from {
      opacity: 0;
      transform: rotate3d(0, 0, 1, -200deg);
      transform-origin: center;
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      transform-origin: center;
    }
  }
  .rotateIn {
    animation-name: rotateIn;
  }
  @keyframes rotateInDownLeft {
    from {
      opacity: 0;
      transform: rotate3d(0, 0, 1, -45deg);
      transform-origin: left bottom;
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      transform-origin: left bottom;
    }
  }
  .rotateInDownLeft {
    animation-name: rotateInDownLeft;
  }
  @keyframes rotateInDownRight {
    from {
      opacity: 0;
      transform: rotate3d(0, 0, 1, 45deg);
      transform-origin: right bottom;
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      transform-origin: right bottom;
    }
  }
  .rotateInDownRight {
    animation-name: rotateInDownRight;
  }
  @keyframes rotateInUpLeft {
    from {
      opacity: 0;
      transform: rotate3d(0, 0, 1, 45deg);
      transform-origin: left bottom;
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      transform-origin: left bottom;
    }
  }
  .rotateInUpLeft {
    animation-name: rotateInUpLeft;
  }
  @keyframes rotateInUpRight {
    from {
      opacity: 0;
      transform: rotate3d(0, 0, 1, -90deg);
      transform-origin: right bottom;
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      transform-origin: right bottom;
    }
  }
  .rotateInUpRight {
    animation-name: rotateInUpRight;
  }
  @keyframes rotateOut {
    from {
      opacity: 1;
      transform-origin: center;
    }
    to {
      opacity: 0;
      transform: rotate3d(0, 0, 1, 200deg);
      transform-origin: center;
    }
  }
  .rotateOut {
    animation-name: rotateOut;
  }
  @keyframes rotateOutDownLeft {
    from {
      opacity: 1;
      transform-origin: left bottom;
    }
    to {
      opacity: 0;
      transform: rotate3d(0, 0, 1, 45deg);
      transform-origin: left bottom;
    }
  }
  .rotateOutDownLeft {
    animation-name: rotateOutDownLeft;
  }
  @keyframes rotateOutDownRight {
    from {
      opacity: 1;
      transform-origin: right bottom;
    }
    to {
      opacity: 0;
      transform: rotate3d(0, 0, 1, -45deg);
      transform-origin: right bottom;
    }
  }
  .rotateOutDownRight {
    animation-name: rotateOutDownRight;
  }
  @keyframes rotateOutUpLeft {
    from {
      opacity: 1;
      transform-origin: left bottom;
    }
    to {
      opacity: 0;
      transform: rotate3d(0, 0, 1, -45deg);
      transform-origin: left bottom;
    }
  }
  .rotateOutUpLeft {
    animation-name: rotateOutUpLeft;
  }
  @keyframes rotateOutUpRight {
    from {
      opacity: 1;
      transform-origin: right bottom;
    }
    to {
      opacity: 0;
      transform: rotate3d(0, 0, 1, 90deg);
      transform-origin: right bottom;
    }
  }
  .rotateOutUpRight {
    animation-name: rotateOutUpRight;
  }
  @keyframes hinge {
    0% {
      transform-origin: top left;
      animation-timing-function: ease-in-out;
    }
    20%,
    60% {
      transform: rotate3d(0, 0, 1, 80deg);
      transform-origin: top left;
      animation-timing-function: ease-in-out;
    }
    40%,
    80% {
      opacity: 1;
      transform: rotate3d(0, 0, 1, 60deg);
      transform-origin: top left;
      animation-timing-function: ease-in-out;
    }
    to {
      opacity: 0;
      transform: translate3d(0, 700px, 0);
    }
  }
  .hinge {
    animation-name: hinge;
    animation-duration: 2s;
  }
  @keyframes jackInTheBox {
    from {
      opacity: 0;
      transform: scale(0.1) rotate(30deg);
      transform-origin: center bottom;
    }
    50% {
      transform: rotate(-10deg);
    }
    70% {
      transform: rotate(3deg);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  .jackInTheBox {
    animation-name: jackInTheBox;
  }
  @keyframes rollIn {
    from {
      opacity: 0;
      transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .rollIn {
    animation-name: rollIn;
  }
  @keyframes rollOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    }
  }
  .rollOut {
    animation-name: rollOut;
  }
  @keyframes zoomIn {
    from {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {
      opacity: 1;
    }
  }
  .zoomIn {
    animation-name: zoomIn;
  }
  @keyframes zoomInDown {
    from {
      opacity: 0;
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    60% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
  }
  .zoomInDown {
    animation-name: zoomInDown;
  }
  @keyframes zoomInLeft {
    from {
      opacity: 0;
      transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    60% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
  }
  .zoomInLeft {
    animation-name: zoomInLeft;
  }
  @keyframes zoomInRight {
    from {
      opacity: 0;
      transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    60% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
  }
  .zoomInRight {
    animation-name: zoomInRight;
  }
  @keyframes zoomInUp {
    from {
      opacity: 0;
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    60% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
  }
  .zoomInUp {
    animation-name: zoomInUp;
  }
  @keyframes zoomOut {
    from {
      opacity: 1;
    }
    50% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    to {
      opacity: 0;
    }
  }
  .zoomOut {
    animation-name: zoomOut;
  }
  @keyframes zoomOutDown {
    40% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    to {
      opacity: 0;
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      transform-origin: center bottom;
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
  }
  .zoomOutDown {
    animation-name: zoomOutDown;
  }
  @keyframes zoomOutLeft {
    40% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    }
    to {
      opacity: 0;
      transform: scale(0.1) translate3d(-2000px, 0, 0);
      transform-origin: left center;
    }
  }
  .zoomOutLeft {
    animation-name: zoomOutLeft;
  }
  @keyframes zoomOutRight {
    40% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    }
    to {
      opacity: 0;
      transform: scale(0.1) translate3d(2000px, 0, 0);
      transform-origin: right center;
    }
  }
  .zoomOutRight {
    animation-name: zoomOutRight;
  }
  @keyframes zoomOutUp {
    40% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    to {
      opacity: 0;
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      transform-origin: center bottom;
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
  }
  .zoomOutUp {
    animation-name: zoomOutUp;
  }
  @keyframes slideInDown {
    from {
      visibility: visible;
      transform: translate3d(0, -100%, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .slideInDown {
    animation-name: slideInDown;
  }
  @keyframes slideInLeft {
    from {
      visibility: visible;
      transform: translate3d(-100%, 0, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .slideInLeft {
    animation-name: slideInLeft;
  }
  @keyframes slideInRight {
    from {
      visibility: visible;
      transform: translate3d(100%, 0, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .slideInRight {
    animation-name: slideInRight;
  }
  @keyframes slideInUp {
    from {
      visibility: visible;
      transform: translate3d(0, 100%, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .slideInUp {
    animation-name: slideInUp;
  }
  @keyframes slideOutDown {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(0, 100%, 0);
    }
  }
  .slideOutDown {
    animation-name: slideOutDown;
  }
  @keyframes slideOutLeft {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(-100%, 0, 0);
    }
  }
  .slideOutLeft {
    animation-name: slideOutLeft;
  }
  @keyframes slideOutRight {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(100%, 0, 0);
    }
  }
  .slideOutRight {
    animation-name: slideOutRight;
  }
  @keyframes slideOutUp {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(0, -100%, 0);
    }
  }
  .slideOutUp {
    animation-name: slideOutUp;
  }
`])));u.oneOfType([u.arrayOf(u.node),u.node]),u.string,u.number,u.string,u.oneOfType([u.string,u.number]),u.bool,u.func,u.func,u.func,u.bool,u.node,u.oneOfType([u.func,u.string]),u.string,u.number;var tb;V.span(tb||(tb=P([`
  display: flex;
  align-items: center;
  `,`
  `,`
  font-weight:200;
  box-shadow: `,`;

  `,`;
  `,`
  .icon {
    `,`
    i {
      `,`
      `,`
    }
  }
`])),Bi,Jm,function(e){return e.flat?null:"0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"},un({prop:"borderType",variants:{box:{borderRadius:"0px"},pill:{borderRadius:"20px"}}}),un({prop:"size",variants:{large:{padding:"8.75px 15px",fontSize:"1rem"},medium:{padding:"6.25px 8.75px",fontSize:"0.85rem"},small:{padding:"4px 6px",fontSize:"0.625rem"}}}),un({prop:"size",variants:{large:{fontSize:"1rem",marginRight:"12px"},medium:{fontSize:"0.85rem",marginRight:"10px"},small:{fontSize:"0.625rem !important",marginRight:"7.5px"}}}),Bi,un({prop:"size",variants:{large:{fontSize:"1rem"},medium:{fontSize:"0.85rem"},small:{fontSize:"0.625rem !important"}}}));u.node,u.string,u.bool,u.string,u.string,u.string,u.string,u.oneOfType([u.oneOf([50,100,200,300,400,500,600,700,800,900]),u.string]);var nb;V.div(nb||(nb=P([`
  `,`
  `,`
`])),Bi,Jm);u.string,u.string,u.string,u.string,u.node,u.string,u.string,u.string,u.string,u.string,u.oneOfType([u.number,u.string]),u.oneOfType([u.number,u.string]),u.oneOfType([u.number,u.string]),u.oneOfType([u.number,u.string]),u.oneOfType([u.number,u.string]),u.oneOfType([u.number,u.string]),u.oneOfType([u.number,u.string]),u.oneOfType([u.number,u.string]),u.oneOfType([u.number,u.string]),u.oneOfType([u.number,u.string]),u.oneOfType([u.number,u.string]),u.oneOfType([u.number,u.string]),u.oneOfType([u.number,u.string]),u.oneOfType([u.number,u.string]),u.string;var rb;V.ol(rb||(rb=P([`
  `,`;
  font-weight: `,`;
  border-radius: `,`;
  text-transform: `,`;
`])),Xt,function(e){return e.bold?"bold":e.light?"light":null},function(e){return e.circle?"50%":"0"},function(e){return e.uppercase?"uppercase":"capitalize"});u.bool,u.node,u.string,u.bool,u.bool,u.node;var ob,ab,ib,sb,lb,ub,cb,db;V.div(ob||(ob=P([`
  border: none;
  box-shadow: `,`;
  box-sizing: border-box;
  font-weight: 600;
  display:flex;
  justify-content:center;
  align-items:center;
  `,`}

    `,`
    
  `,`;

  `,`;

  `,`;

`])),function(e){return e.flat?"none":"0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"},function(e){var t=e.bg;return t&&Z(ab||(ab=P([`
      background: `,`;
      color: #fff;
      &:hover {
        `,`;
    `])),R[""+t],function(n){var r=n.bg;return r&&Z(ib||(ib=P([`
            transform: scale(1.02);
            color: #fff;
          `])))})},Xt,un({prop:"size",variants:{xl:{padding:"12px 18.75px",fontSize:"1rem"},large:{padding:"8.75px 15px",fontSize:"1rem"},medium:{padding:"6px 12px",fontSize:"0.85rem"},small:{padding:"3px 6px",fontSize:"0.625rem"}}}),function(e){return e.circle===!0?Z(sb||(sb=P([`
          border-radius: 30px;
        `]))):Z(lb||(lb=P([`
          border-radius: 4px;
        `])))},function(e){return e.outline===!0&&Z(ub||(ub=P([`
      background: transparent;
      `,`;
      border-width: 2px;
      &:hover {
        background: transparent;
        `,`;
      }
    `])),function(t){var n=t.bg;return n&&Z(cb||(cb=P([`
          border: 2px solid `,`;
          color: `,`;
        `])),R[""+n],Y(""+R[""+n]).darken(10))},function(t){var n=t.bg;return n&&Z(db||(db=P([`
            border: 2.4px solid `,`;
            transform: scale(1.02);
            color: `,`;
          `])),R[""+n],Y(""+R[""+n]).darken(10))})});u.bool,u.bool,u.bool,u.node,u.bool,u.string,u.string,u.bool,u.string,u.bool,u.any,u.func,u.string,u.string,u.string,u.string,u.string,u.string,u.bool;var fb;V.div(fb||(fb=P([`
  `,`
  
  .btn {
  	border-radius: 0px;
  }

`])),Xt);u.string,u.node,u.string,u.string,u.string,u.bool;u.string,u.node,u.string,u.string;var pb,mb,hb;V.div(pb||(pb=P([`
  position: relative;
  background-color: #ffffff;
  `,`
`])),function(e){return e.border?Z(mb||(mb=P([`
          border-top: 8px solid #e2e2e2;
          border-bottom: 8px solid #e2e2e2;
        `]))):Z(hb||(hb=P([`
          border: 2px solid #e2e2e2;
        `])))});u.string,u.string,u.string,u.bool,u.node;var gb;V.div(gb||(gb=P([`
`])));u.bool,u.string,u.oneOfType([u.func,u.string]);u.string,u.string,u.bool,u.bool,u.bool,u.any,u.oneOfType([u.func,u.string]),u.bool;u.bool.isRequired,u.string,u.node,u.string,u.string,u.func;u.node,u.string;var vb;V.div(vb||(vb=P([`
  .carousel-inner {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  &.carousel-fade .carousel-item {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: block !important;
    opacity: 0;
    z-index: 0;
    transition: transform 0ms ease-in-out, opacity 0.8s ease-out;
  }

  &.carousel-fade .carousel-item.active {
    position: relative;
    z-index: 1;
    opacity: 1;
  }

  &.carousel-multi-item .carousel-item {
    display: inline-block !important;
  }

  &.carousel .carousel-slide-item {
    transition: left 0.5s;
  }

  .carousel-control-prev,
  .carousel-control-next,
  .carousel-item-prev,
  .carousel-item-next {
    z-index: 2;
  }
`])));g.createContext({activeItem:null,length:null,slide:null});u.number,u.node,u.string,u.oneOfType([u.number,u.bool]),u.number,u.bool,u.bool,u.bool,u.bool,u.bool,u.bool,u.oneOfType([u.func,u.string]),u.bool,u.bool;u.bool,u.node,u.string,u.oneOfType([u.func,u.string]);u.bool,u.node,u.string,u.any,u.oneOfType([u.func,u.string]);u.string,u.string,u.func;var yb;V.div(yb||(yb=P([""])));u.bool,u.string,u.string,u.string,u.bool,u.string,u.string,u.oneOfType([u.func,u.string]),u.bool,u.string,u.string;u.node,u.string,u.oneOfType([u.number,u.shape({hide:u.number,show:u.number})]),u.string,u.oneOfType([u.string,u.bool]),u.bool,u.func,u.func;var bb;V.div(bb||(bb=P([""])));u.string,u.bool,u.oneOf(["sm","md","lg","xl"]),u.oneOfType([u.func,u.string]);u.bool.isRequired,u.string,u.arrayOf(u.object),u.func,u.bool,u.bool,u.bool,u.bool;var wb,xb,_b;V.div(wb||(wb=P([`
  table-layout: `,`;
  `,`;
`])),function(e){return e.autoWidth?"auto":null},function(e){return e.scrollY?Z(xb||(xb=P([`
          display: block;
          max-height: 200px;
          overflow-y: auto;
          -ms-overflow-style: -ms-autohiding-scrollbar;
        `]))):null});V.table(_b||(_b=P([""])));u.bool,u.bool,u.bool,u.bool,u.node,u.string,u.bool,u.bool,u.bool,u.string,u.bool,u.bool,u.bool,u.bool,u.bool,u.bool,u.bool,u.bool,u.string,u.string;u.node,u.string,u.arrayOf(u.object),u.bool;u.node,u.string,u.arrayOf(u.object),u.bool;u.bool.isRequired,u.bool.isRequired,u.bool.isRequired,u.bool.isRequired,u.bool.isRequired,u.bool.isRequired,u.func.isRequired,u.bool.isRequired,u.bool.isRequired,u.bool.isRequired,u.bool.isRequired,u.bool.isRequired,u.bool.isRequired,u.bool.isRequired,u.bool.isRequired,u.bool.isRequired,u.bool.isRequired,u.string.isRequired,u.bool.isRequired,u.string.isRequired,u.bool.isRequired,u.node,u.arrayOf(u.object),u.bool,u.arrayOf(u.object);u.bool.isRequired,u.bool.isRequired,u.bool.isRequired,u.bool.isRequired,u.bool.isRequired,u.bool.isRequired,u.func.isRequired,u.func.isRequired,u.bool.isRequired,u.bool.isRequired,u.bool.isRequired,u.bool.isRequired,u.bool.isRequired,u.bool.isRequired,u.bool.isRequired,u.bool.isRequired,u.bool.isRequired,u.bool.isRequired,u.string.isRequired,u.bool.isRequired,u.string.isRequired,u.bool.isRequired,u.number.isRequired,u.node,u.arrayOf(u.object),u.string,u.arrayOf(u.object),u.bool,u.bool;u.arrayOf(u.number).isRequired,u.oneOfType([u.string,u.number,u.object]).isRequired,u.func.isRequired,u.number.isRequired;u.bool.isRequired,u.number.isRequired,u.arrayOf(u.number).isRequired,u.func.isRequired,u.oneOfType([u.number,u.object,u.string]).isRequired,u.bool.isRequired,u.bool,u.bool,u.func;var kb,Sb,Cb;V.div(kb||(kb=P([`
  // icon container
  .icon {
    position: absolute;
    height: 100%;
    width: 30px;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon + input:not([type='checkbox']):not([type='radio']),
  textarea {
    padding-left: 30px;
  }
  &.input-group label {
    top: 0;
    margin-bottom: 0;
  }
  &.input-group .input-group-text {
    background-color: #e0e0e0;
  }
  &.input-group .input-group-text.md-addon {
    font-weight: 500;
    background-color: transparent;
    border: none;
  }
  &.input-group .form-control {
    padding: 0.375rem 0.75rem;
    margin: 0;
  }
  & {
    position: relative;
  }
  & {
    input:not([type='checkbox']):not([type='radio']),
    textarea {
      border-radius: 4px;
      border: 1px solid #dadce0;
      box-sizing: border-box;
      border-radius: 4px;
      box-shadow: none;
      padding: 4px 10px;
      min-height: 40px;
      width: 100%;
      transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
      font-size: `,`;
      &::placeholder {
        font-size: `,`;
      }
      &:focus {
        outline: none;
        &::placeholder {
          font-weight: 700 !important;
        }
      }
      &::placeholder {
        color: #757575;
        font-weight: 400;
        font-size: inherit;
        color: #757575;
        cursor: text;
        transition: color 0.2s ease-out;
      }
    }
    textarea {
      padding: 10px !important;
    }
  }
  &.size-lg {
    input:not([type='checkbox']):not([type='radio']),
    textarea {
      min-height: 50px;
      font-size: `,`;
      &::placeholder {
        font-size: `,`;
      }
    }
  }
  &.size-sm {
    input:not([type='checkbox']):not([type='radio']),
    textarea {
      min-height: 30px;
      font-size: `,`;
      &::placeholder {
        font-size: `,`;
      }
    }
  }
  &.checkbox,
  &.radio {
    margin: 0;
    height: 20px;
    width: 20px;
    &.size-lg {
      transform: scale(1.4);
    }
    &.size-sm {
      transform: scale(0.6);
    }
    position: relative;
    label {
      background-color: #fff;
      border: 1px solid #ccc;
      // border-radius: 4px;
      cursor: pointer;
      height: 20px;
      left: 0;
      position: absolute;
      top: 0;
      width: 20px;
    }

    input[type='checkbox'],
    input[type='radio'] {
      width: 20px;
      height: 20px;
      visibility: hidden;
    }
    input[type='radio'] + label {
      border-radius: 50%;
    }
    input[type='checkbox'] + label:after {
      border: 2px solid `,`;
      border-top: none;
      border-right: none;
      content: '';
      height: 6px;
      left: 2px;
      opacity: 0;
      position: absolute;
      top: 2px;
      transform: rotate(-45deg);
      width: 12px;
    }
    input[type='radio']:not(.browser) + label:after {
      border: 2px solid `,`;
      border-radius: 50%;
      content: '';
      height: 10px;
      left: 50%;
      opacity: 0;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 10px;
    }

    input[type='checkbox']:not(.browser-default):checked + label,
    input[type='radio']:not(.browser-default):checked + label {
      background-color: `,`;
      border: 2px solid `,`;
    }
    input[type='checkbox']:not(.browser-default):checked + label:after,
    input[type='radio']:not(.browser-default):checked + label:after {
      opacity: 1;
    }
    &.input-color {
      &-primary {
        input[type='checkbox']:not(.browser-default):checked + label,
        input[type='radio']:not(.browser-default):checked + label {
          background-color: `,`;
          border: 2px solid `,`;
        }

        input[type='checkbox']:not(.browser-default):checked + label:after,
        input[type='radio']:not(.browser-default):checked + label:after {
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after {
          border-top: none;
          border-right: none;
        }
      }
      &-secondary {
        input[type='checkbox']:not(.browser-default):checked + label,
        input[type='radio']:not(.browser-default):checked + label {
          background-color: `,`;
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after,
        input[type='radio']:not(.browser-default):checked + label:after {
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after {
          border-top: none;
          border-right: none;
        }
      }
      &-success {
        input[type='checkbox']:not(.browser-default):checked + label,
        input[type='radio']:not(.browser-default):checked + label {
          background-color: `,`;
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after,
        input[type='radio']:not(.browser-default):checked + label:after {
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after {
          border-top: none;
          border-right: none;
        }
      }
      &-danger {
        input[type='checkbox']:not(.browser-default):checked + label,
        input[type='radio']:not(.browser-default):checked + label {
          background-color: `,`;
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after,
        input[type='radio']:not(.browser-default):checked + label:after {
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after {
          border-top: none;
          border-right: none;
        }
      }
      &-warning {
        input[type='checkbox']:not(.browser-default):checked + label,
        input[type='radio']:not(.browser-default):checked + label {
          background-color: `,`;
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after,
        input[type='radio']:not(.browser-default):checked + label:after {
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after {
          border-top: none;
          border-right: none;
        }
      }
      &-info {
        input[type='checkbox']:not(.browser-default):checked + label,
        input[type='radio']:not(.browser-default):checked + label {
          background-color: `,`;
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after,
        input[type='radio']:not(.browser-default):checked + label:after {
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after {
          border-top: none;
          border-right: none;
        }
      }
      &-dark {
        input[type='checkbox']:not(.browser-default):checked + label,
        input[type='radio']:not(.browser-default):checked + label {
          background-color: `,`;
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after,
        input[type='radio']:not(.browser-default):checked + label:after {
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after {
          border-top: none;
          border-right: none;
        }
      }
    }
  }
  &.input-color-primary {
    &.bg {
      input:not([type='checkbox']),
      input:not([type='radio']),
      textarea {
        &:focus,
        &:focus-visible {
          background: `,`;
        }
      }
    }
    input:not([type='checkbox']):not([type='radio']),
    textarea {
      &:focus,
      &:focus-visible {
        border: 1px solid `,`;
        box-shadow: inset 0 0 0 1px `,`;
        &::placeholder {
          color: `,`;
          font-weight: 700;
        }
      }
    }
  }

  &.input-color-secondary {
    &.bg {
      input:not([type='checkbox']),
      input:not([type='radio']),
      textarea {
        &:focus,
        &:focus-visible {
          background: `,`;
        }
      }
    }
    input:not([type='checkbox']):not([type='radio']),
    textarea {
      &:focus,
      &:focus-visible {
        border: 1px solid `,`;
        box-shadow: inset 0 0 0 1px `,`;
        &::placeholder {
          color: `,`;
          font-weight: 700;
        }
      }
    }
  }
  &.input-color-success {
    &.bg {
      input:not([type='checkbox']),
      input:not([type='radio']),
      textarea {
        &:focus,
        &:focus-visible {
          background: `,`;
        }
      }
    }
    input:not([type='checkbox']):not([type='radio']),
    textarea {
      &:focus,
      &:focus-visible {
        border: 1px solid `,`;
        box-shadow: inset 0 0 0 1px `,`;
        &::placeholder {
          color: `,`;
          font-weight: 700;
        }
      }
    }
  }

  &.input-color-danger {
    &.bg {
      input:not([type='checkbox']),
      input:not([type='radio']),
      textarea {
        &:focus,
        &:focus-visible {
          background: `,`;
        }
      }
    }
    input:not([type='checkbox']):not([type='radio']),
    textarea {
      &:focus,
      &:focus-visible {
        border: 1px solid `,`;
        box-shadow: inset 0 0 0 1px `,`;
        &::placeholder {
          color: `,`;
          font-weight: 700;
        }
      }
    }
    input[type='checkbox']:not(.browser-default),
    input[type='radio']:not(.browser-default) {
      background: red;
    }
  }
  &.input-color-warning {
    &.bg {
      input:not([type='checkbox']),
      input:not([type='radio']),
      textarea {
        &:focus,
        &:focus-visible {
          background: `,`;
        }
      }
    }
    input:not([type='checkbox']):not([type='radio']),
    textarea {
      &:focus,
      &:focus-visible {
        border: 1px solid `,`;
        box-shadow: inset 0 0 0 1px `,`;
        &::placeholder {
          color: `,`;
          font-weight: 700;
        }
      }
    }
  }
  &.input-color-info {
    &.bg {
      input:not([type='checkbox']),
      input:not([type='radio']),
      textarea {
        &:focus,
        &:focus-visible {
          background: `,`;
        }
      }
    }
    input:not([type='checkbox']):not([type='radio']),
    textarea {
      &:focus,
      &:focus-visible {
        border: 1px solid `,`;
        box-shadow: inset 0 0 0 1px `,`;
        &::placeholder {
          color: `,`;
          font-weight: 700;
        }
      }
    }
  }
  &.input-color-dark {
    &.bg {
      input:not([type='checkbox']),
      input:not([type='radio']),
      textarea {
        &:focus,
        &:focus-visible {
          background: `,`;
        }
      }
    }
    input:not([type='checkbox']):not([type='radio']),
    textarea {
      &:focus,
      &:focus-visible {
        border: 1px solid `,`;
        box-shadow: inset 0 0 0 1px `,`;
        &::placeholder {
          color: `,`;
          font-weight: 700;
        }
      }
    }
  }

  & label.active {
    font-weight: 700;
  }
  & .prefix {
    top: 0.25rem;
    font-size: 1.75rem;
  }
  & .prefix ~ input,
  & .prefix ~ textarea {
    width: calc(100% - 2.5rem);
    margin-left: 2.5rem;
  }
  & .prefix ~ label {
    margin-left: 2.5rem;
  }
  & .prefix ~ .form-text {
    margin-left: 2.6rem;
  }
  & .prefix {
    position: absolute;
    transition: color 0.2s;
  }
  & .prefix.active {
    color: #4285f4;
  }
  textarea {
    padding: 0;
    overflow-y: hidden;
  }

  & .form-control.is-valid,
  .was-validated & .form-control:valid {
    padding-right: 0;
  }
  .needs-validation & label {
    left: 0.3rem;
  }
  .custom-file-input:lang(es) ~ .custom-file-label::after {
    content: 'Elegir';
  }
  .custom-file-input:lang(pl-pl) ~ .custom-file-label::after {
    content: 'Wybierz';
  }
  .custom-file-input:lang(fr) ~ .custom-file-label::after {
    content: 'Choisir';
  }
  .custom-file-input:lang(in) ~ .custom-file-label::after {
    content: 'Pilih';
  }
  .custom-file-input:lang(zh) ~ .custom-file-label::after {
    content: '選擇';
  }
  .custom-file-input:lang(de) ~ .custom-file-label::after {
    content: 'Wählen';
  }
  .custom-file-input:lang(ru) ~ .custom-file-label::after {
    content: 'Выбрать';
  }
  & > label {
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  & .input-prefix {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: color 0.2s;
    color: rgba(0, 0, 0, 0.87);
    pointer-events: none;
  }
  & .input-prefix.active {
    color: #4285f4;
  }
  &.input-with-pre-icon label {
    left: 36px;
    right: initial;
  }
  &.input-with-pre-icon .input-prefix {
    left: 16px;
    right: initial;
  }
  &.input-with-pre-icon .form-control {
    padding-left: 2.7rem !important;
  }
  &.input-with-post-icon .input-prefix {
    right: 16px;
    left: initial;
  }
  &.input-with-post-icon .form-control {
    padding-right: 2.7rem !important;
  }
  &.input-with-post-icon.input-with-pre-icon .input-prefix {
    right: 16px;
    left: initial;
  }
  &.input-with-post-icon.input-with-pre-icon .input-prefix:first-of-type {
    left: 16px;
    right: initial;
  }
  &.input-with-post-icon.input-with-pre-icon .form-control {
    padding-left: 2.5rem !important;
    padding-right: 2.5rem !important;
  }
`])),function(e){var t=e.fontSize;return t+"px"},function(e){var t=e.fontSize;return t+"px"},function(e){var t=e.fontSize;return t&&t*1.2+"px"},function(e){var t=e.fontSize;return t&&t*1.2+"px"},function(e){var t=e.fontSize;return t&&t*.8+"px"},function(e){var t=e.fontSize;return t&&t*.8+"px"},R.primary,R.primary,R.primary100,R.primary,R.primary100,R.primary,R.primary,R.secondary100,R.secondary,R.secondary,R.success100,R.success,R.success,R.danger100,R.danger,R.danger,R.warning100,R.warning,R.warning,R.info,R.info,R.info,R.dark100,R.dark,R.dark,R.primary100,R.primary,R.primary,R.primary,R.secondary100,R.secondary,R.secondary,R.secondary,R.success100,R.success,R.success,R.success,R.danger100,R.danger,R.danger,R.danger,R.warning100,R.warning,R.warning,R.warning,R.info,R.info,R.info,R.info,R.dark100,R.dark,R.dark,R.dark);V.textarea(Sb||(Sb=P([""])));V.input(Cb||(Cb=P([""])));var Eb,X4=V.i(Eb||(Eb=P([`
  padding: 0px 4px;
`]))),Q4=["border","brand","className","fab","duotone","fal","fad","far","solid","fixed","fas","flip","icon","inverse","light","list","pull","pulse","regular","rotate","size","spin","stack"],yh=function(t){var n=t.border,r=t.brand,o=t.className,a=t.fab,i=t.duotone,s=t.fal,l=t.fad,c=t.far,d=t.solid,f=t.fixed,p=t.fas,h=t.flip,y=t.icon,w=t.inverse,x=t.light,v=t.list,m=t.pull,b=t.pulse,k=t.regular,C=t.rotate,_=t.size,E=t.spin,O=t.stack,A=ko(t,Q4),$=k||c?"far":d||p?"fas":x||s?"fal":i||l?"fad":r||a?"fab":"fa",I=X($,v?"fa-li":!1,y?"fa-"+y:!1,_?"fa-"+_:!1,f?"fa-fw":!1,m?"fa-pull-"+m:!1,n?"fa-border":!1,E?"fa-spin":!1,b?"fa-pulse":!1,C?"fa-rotate-"+C:!1,h?"fa-flip-"+h:!1,w?"fa-inverse":!1,O?"fa-"+O:!1,o);return q.createElement(wo,{theme:Zn},q.createElement(X4,Object.assign({"data-test":"fa"},A,{className:I})))};yh.propTypes={icon:u.string.isRequired,border:u.bool,brand:u.bool,className:u.string,fab:u.bool,fal:u.bool,far:u.bool,fixed:u.bool,flip:u.string,inverse:u.bool,light:u.bool,list:u.bool,pull:u.string,pulse:u.bool,regular:u.bool,rotate:u.string,size:u.string,spin:u.bool,stack:u.string};yh.defaultProps={border:!1,brand:!1,className:"",fab:!1,fal:!1,far:!1,fixed:!1,flip:"",inverse:!1,light:!1,list:!1,pull:"",pulse:!1,regular:!1,rotate:"",size:"",spin:!1,stack:"",duotone:!1,solid:!1,fad:!1,fas:!1};u.node,u.bool,u.string,u.string,u.bool,u.bool,u.number,u.func,u.string,u.string,u.bool,u.string,u.string,u.func,u.func,u.func,u.func,u.string,u.string,u.string,u.string,u.bool;Date.now().toString();u.bool,u.string,u.bool,u.func,u.string;u.func.isRequired,u.string.isRequired,u.bool.isRequired,u.bool,u.string,u.bool,u.any,u.string;u.number.isRequired,u.number.isRequired,u.array.isRequired,u.bool.isRequired,u.string.isRequired,u.array.isRequired,u.arrayOf(u.string);var Ob,Tb,Rb,jb,$b;V.ul(Ob||(Ob=P([`
  padding: 15px;
  border: 0.75px solid #ccc;
  border-radius: 0;
  .page-link {
    `,`
    `,`
    border-radius: `,`;
    border: 0.5px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .page-item {
    `,`
    `,`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 0.5px solid #ccc;
    border-radius: `,`;
    font-size: `,`;
  }
`])),Xt,function(e){return e.sm?Z(Tb||(Tb=P([`
            min-width: 30px;
            min-height: 30px;
          `]))):Z(Rb||(Rb=P([`
            min-width: 50px;
            min-height: 50px;
          `])))},function(e){return e.circle?"50%":"0"},Xt,function(e){return e.sm?Z(jb||(jb=P([`
            min-width: 30px;
            min-height: 30px;
          `]))):Z($b||($b=P([`
            min-width: 50px;
            min-height: 50px;
          `])))},function(e){return e.circle?"50%":"0"},function(e){return e.size==="big"?"1.25rem":e.size==="small"?"0.75rem":"1rem"});u.node,u.bool,u.string,u.oneOf(["primary","secondary","success","danger","warning","info","white","dark"]),u.string,u.oneOfType([u.func,u.string]),u.bool;var Pb;V.button(Pb||(Pb=P([`
  margin: 0px 7.5px;
  cursor: pointer;
  a {
    text-decoration: none;
    color: inherit;
  }
`])));u.bool,u.node,u.string,u.bool,u.oneOfType([u.func,u.string]);var Ab;V.a(Ab||(Ab=P([`
  margin: 0px 7.5px;
  cursor: pointer;

	&.disabled {
		pointer-events:none;
		background:#ccc;
		color:#555;
	}
`])));u.node,u.bool,u.string,u.oneOfType([u.func,u.string]);u.number.isRequired,u.func.isRequired,u.arrayOf(u.string).isRequired,u.array.isRequired,u.number.isRequired,u.string,u.node;u.bool,u.bool,u.bool,u.bool,u.bool,u.node,u.string,u.bool,u.oneOfType([u.object,u.string]),u.bool,u.bool,u.number,u.oneOfType([u.string,u.number,u.object]),u.arrayOf(u.number),u.bool,u.string,u.bool,u.bool,u.bool,u.oneOfType([u.array,u.object,u.string]),u.bool,u.string,u.bool,u.string,u.func,u.func,u.func,u.arrayOf(u.string),u.number,u.arrayOf(u.string),u.bool,u.bool,u.bool,u.bool,u.bool,u.bool,u.bool,u.bool,u.bool,u.bool,u.string,u.bool,u.bool,u.arrayOf(u.string),u.bool,u.string,u.bool,u.string,u.bool;var Ib;V.div(Ib||(Ib=P([`
  `,`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
`])),Xt);g.createContext({isOpen:null});u.string,u.bool,u.bool,u.bool,u.bool,u.func,u.string;var Lb,Nb,Db,Mb,zb,Fb,Bb,Ub,Hb,Wb,Vb,Gb;V.button(Lb||(Lb=P([`
  padding: 0.8rem 2rem;
  border: none;
  `,`
  `,`
  :hover, :focus {
    outline: none;
    border: none; 
  }
  `,`;
  `,`
`])),Xt,Bi,function(e){return e.circle===!0?Z(Nb||(Nb=P([`
          border-radius: 30px;
        `]))):Z(Db||(Db=P([`
          border-radius: 0px;
        `])))},un({prop:"size",variants:{lg:{fontSize:"1.25rem",padding:"20px"},sm:{fontSize:"0.75rem",padding:"5px"}}}));V.span(Mb||(Mb=P([`
  .pro-arrow-wrapper {
    position: relative;
    min-width: 10px;
    min-height: 10px;
    .pro-arrow {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: inline-block;
      border-style: solid;
      border-color: #fff;
      border-width: 0 2px 2px 0;
      padding: 2.5px;
      vertical-align: middle;
      transition: transform 0.3s;

      `,`
      `,`
    }
  }
`])),function(e){return e.dropup?Z(zb||(zb=P([`
              transform: rotate(-135deg);
            `]))):e.dropleft?Z(Fb||(Fb=P([`
              transform: rotate(135deg);
            `]))):e.dropright?Z(Bb||(Bb=P([`
              transform: rotate(-45deg);
            `]))):Z(Ub||(Ub=P([`
              transform: rotate(45deg);
            `])))},function(e){return e.dropup?Z(Hb||(Hb=P([`
              margin-bottom: 0;
            `]))):e.dropleft?Z(Wb||(Wb=P([`
              margin-bottom: 0;
            `]))):e.dropright?Z(Vb||(Vb=P([`
              margin-bottom: 0;
            `]))):Z(Gb||(Gb=P([`
              margin-bottom: 5px;
            `])))});u.string,u.oneOf(["primary","secondary","success","danger","warning","info"]),u.bool,u.bool,u.bool,u.bool,u.bool,u.string,u.node,u.bool,u.string,u.bool,u.oneOfType([u.func,u.string]);var qb;V("div")(qb||(qb=P([`
  display: flex;
  flex-direction: column;
  min-height: 20px;
  min-width: 20px;
  background-color: #fff;
  border-radius: 0;
  color: #232323;
  padding: 0.3rem;
  `,`;
`])),function(e){return e.popperStyle});u.string,u.oneOf(["primary","secondary","success","danger","warning","info"]),u.func,u.func,u.string,u.bool,u.bool,u.bool,u.bool;var Kb;V.div(Kb||(Kb=P([`
  color: #000 !important;
`])));u.bool,u.node,u.string,u.bool,u.bool,u.bool,u.func,u.oneOfType([u.func,u.string]),u.bool;u.string,u.string,u.string;var Yb;V.div(Yb||(Yb=P([`
  position: relative;
  iframe,
  embed,
  object,
  video {
    margin: 0 auto;
    top: 0;
    bottom: 0;
    left: 0;
    border: 0;
  }
`])));u.string.isRequired,u.bool,u.string,u.number,u.string,u.string,u.func,u.func,u.func,u.string,u.string,u.object,u.string,u.number;var Xb;V.div(Xb||(Xb=P([`
      .input-flex-fill {
        flex-grow: 1
      }
      .input-background {
        background-color: #f4f4f4;
      }
      .md-form.input-group label {
        top: 0;
        margin-bottom: 0;
      }
      .md-form.input-group .input-group-text {
        background-color: #e0e0e0;
      }
      .md-form.input-group .input-group-text.md-addon {
        font-weight: 500;
        background-color: transparent;
        border: none;
      }
      .md-form.input-group .form-control {
        padding: 0.375rem 0.75rem;
        margin: 0;
      }
      .md-form {
        position: relative;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
      }
      .md-form input:not([type]),
      .md-form input[type="text"]:not(.browser-default),
      .md-form input[type="password"]:not(.browser-default),
      .md-form input[type="email"]:not(.browser-default),
      .md-form input[type="url"]:not(.browser-default),
      .md-form input[type="time"]:not(.browser-default),
      .md-form input[type="date"]:not(.browser-default),
      .md-form input[type="datetime"]:not(.browser-default),
      .md-form input[type="datetime-local"]:not(.browser-default),
      .md-form input[type="tel"]:not(.browser-default),
      .md-form input[type="number"]:not(.browser-default),
      .md-form input[type="search"]:not(.browser-default),
      .md-form input[type="phone"]:not(.browser-default),
      .md-form input[type="search-md"],
      .md-form textarea.md-textarea {
        box-sizing: content-box;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid #ced4da;
        border-radius: 0;
        outline: none;
        box-shadow: none;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      }
      .md-form input:not([type]):focus:not([readonly]),
      .md-form input[type="text"]:not(.browser-default):focus:not([readonly]),
      .md-form
        input[type="password"]:not(.browser-default):focus:not([readonly]),
      .md-form input[type="email"]:not(.browser-default):focus:not([readonly]),
      .md-form input[type="url"]:not(.browser-default):focus:not([readonly]),
      .md-form input[type="time"]:not(.browser-default):focus:not([readonly]),
      .md-form input[type="date"]:not(.browser-default):focus:not([readonly]),
      .md-form
        input[type="datetime"]:not(.browser-default):focus:not([readonly]),
      .md-form
        input[type="datetime-local"]:not(.browser-default):focus:not([readonly]),
      .md-form input[type="tel"]:not(.browser-default):focus:not([readonly]),
      .md-form input[type="number"]:not(.browser-default):focus:not([readonly]),
      .md-form input[type="search"]:not(.browser-default):focus:not([readonly]),
      .md-form input[type="phone"]:not(.browser-default):focus:not([readonly]),
      .md-form input[type="search-md"]:focus:not([readonly]),
      .md-form textarea.md-textarea:focus:not([readonly]) {
        border-bottom: 1px solid #4285f4;
        box-shadow: 0 1px 0 0 #4285f4;
      }
      .md-form input:not([type]):focus:not([readonly]) + label,
      .md-form
        input[type="text"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="password"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="email"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="url"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="time"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="date"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="datetime"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="datetime-local"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="tel"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="number"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="search"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="phone"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form input[type="search-md"]:focus:not([readonly]) + label,
      .md-form textarea.md-textarea:focus:not([readonly]) + label {
        color: #4285f4;
      }
      .md-form input:not([type]) + label::after,
      .md-form input[type="text"]:not(.browser-default) + label::after,
      .md-form input[type="password"]:not(.browser-default) + label::after,
      .md-form input[type="email"]:not(.browser-default) + label::after,
      .md-form input[type="url"]:not(.browser-default) + label::after,
      .md-form input[type="time"]:not(.browser-default) + label::after,
      .md-form input[type="date"]:not(.browser-default) + label::after,
      .md-form input[type="datetime"]:not(.browser-default) + label::after,
      .md-form
        input[type="datetime-local"]:not(.browser-default)
        + label::after,
      .md-form input[type="tel"]:not(.browser-default) + label::after,
      .md-form input[type="number"]:not(.browser-default) + label::after,
      .md-form input[type="search"]:not(.browser-default) + label::after,
      .md-form input[type="phone"]:not(.browser-default) + label::after,
      .md-form input[type="search-md"] + label::after,
      .md-form textarea.md-textarea + label::after {
        position: absolute;
        top: 65px;
        display: block;
        content: "";
        opacity: 0;
        transition: 0.2s opacity ease-out, 0.2s color ease-out;
      }
      .md-form input:not([type]).valid,
      .md-form input:not([type]):focus.valid,
      .md-form input[type="text"]:not(.browser-default).valid,
      .md-form input[type="text"]:not(.browser-default):focus.valid,
      .md-form input[type="password"]:not(.browser-default).valid,
      .md-form input[type="password"]:not(.browser-default):focus.valid,
      .md-form input[type="email"]:not(.browser-default).valid,
      .md-form input[type="email"]:not(.browser-default):focus.valid,
      .md-form input[type="url"]:not(.browser-default).valid,
      .md-form input[type="url"]:not(.browser-default):focus.valid,
      .md-form input[type="time"]:not(.browser-default).valid,
      .md-form input[type="time"]:not(.browser-default):focus.valid,
      .md-form input[type="date"]:not(.browser-default).valid,
      .md-form input[type="date"]:not(.browser-default):focus.valid,
      .md-form input[type="datetime"]:not(.browser-default).valid,
      .md-form input[type="datetime"]:not(.browser-default):focus.valid,
      .md-form input[type="datetime-local"]:not(.browser-default).valid,
      .md-form input[type="datetime-local"]:not(.browser-default):focus.valid,
      .md-form input[type="tel"]:not(.browser-default).valid,
      .md-form input[type="tel"]:not(.browser-default):focus.valid,
      .md-form input[type="number"]:not(.browser-default).valid,
      .md-form input[type="number"]:not(.browser-default):focus.valid,
      .md-form input[type="search"]:not(.browser-default).valid,
      .md-form input[type="search"]:not(.browser-default):focus.valid,
      .md-form input[type="phone"]:not(.browser-default).valid,
      .md-form input[type="phone"]:not(.browser-default):focus.valid,
      .md-form input[type="search-md"].valid,
      .md-form input[type="search-md"]:focus.valid,
      .md-form textarea.md-textarea.valid,
      .md-form textarea.md-textarea:focus.valid {
        border-bottom: 1px solid #00c851;
        box-shadow: 0 1px 0 0 #00c851;
      }
      .md-form input:not([type]).valid + label:after,
      .md-form input:not([type]):focus.valid + label:after,
      .md-form input[type="text"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="text"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="password"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="password"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="email"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="email"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="url"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="url"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="time"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="time"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="date"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="date"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="datetime"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default):focus.valid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).valid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="tel"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="tel"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="number"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="number"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="search"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="search"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="phone"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="phone"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="search-md"].valid + label:after,
      .md-form input[type="search-md"]:focus.valid + label:after,
      .md-form textarea.md-textarea.valid + label:after,
      .md-form textarea.md-textarea:focus.valid + label:after {
        color: #00c851;
        content: attr(data-success);
        opacity: 1;
      }
      .md-form input:not([type]).invalid,
      .md-form input:not([type]):focus.invalid,
      .md-form input[type="text"]:not(.browser-default).invalid,
      .md-form input[type="text"]:not(.browser-default):focus.invalid,
      .md-form input[type="password"]:not(.browser-default).invalid,
      .md-form input[type="password"]:not(.browser-default):focus.invalid,
      .md-form input[type="email"]:not(.browser-default).invalid,
      .md-form input[type="email"]:not(.browser-default):focus.invalid,
      .md-form input[type="url"]:not(.browser-default).invalid,
      .md-form input[type="url"]:not(.browser-default):focus.invalid,
      .md-form input[type="time"]:not(.browser-default).invalid,
      .md-form input[type="time"]:not(.browser-default):focus.invalid,
      .md-form input[type="date"]:not(.browser-default).invalid,
      .md-form input[type="date"]:not(.browser-default):focus.invalid,
      .md-form input[type="datetime"]:not(.browser-default).invalid,
      .md-form input[type="datetime"]:not(.browser-default):focus.invalid,
      .md-form input[type="datetime-local"]:not(.browser-default).invalid,
      .md-form input[type="datetime-local"]:not(.browser-default):focus.invalid,
      .md-form input[type="tel"]:not(.browser-default).invalid,
      .md-form input[type="tel"]:not(.browser-default):focus.invalid,
      .md-form input[type="number"]:not(.browser-default).invalid,
      .md-form input[type="number"]:not(.browser-default):focus.invalid,
      .md-form input[type="search"]:not(.browser-default).invalid,
      .md-form input[type="search"]:not(.browser-default):focus.invalid,
      .md-form input[type="phone"]:not(.browser-default).invalid,
      .md-form input[type="phone"]:not(.browser-default):focus.invalid,
      .md-form input[type="search-md"].invalid,
      .md-form input[type="search-md"]:focus.invalid,
      .md-form textarea.md-textarea.invalid,
      .md-form textarea.md-textarea:focus.invalid {
        border-bottom: 1px solid #f44336;
        box-shadow: 0 1px 0 0 #f44336;
      }
      .md-form input:not([type]).invalid + label:after,
      .md-form input:not([type]):focus.invalid + label:after,
      .md-form input[type="text"]:not(.browser-default).invalid + label:after,
      .md-form
        input[type="text"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).invalid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form input[type="email"]:not(.browser-default).invalid + label:after,
      .md-form
        input[type="email"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form input[type="url"]:not(.browser-default).invalid + label:after,
      .md-form
        input[type="url"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form input[type="time"]:not(.browser-default).invalid + label:after,
      .md-form
        input[type="time"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form input[type="date"]:not(.browser-default).invalid + label:after,
      .md-form
        input[type="date"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).invalid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).invalid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form input[type="tel"]:not(.browser-default).invalid + label:after,
      .md-form
        input[type="tel"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form input[type="number"]:not(.browser-default).invalid + label:after,
      .md-form
        input[type="number"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form input[type="search"]:not(.browser-default).invalid + label:after,
      .md-form
        input[type="search"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form input[type="phone"]:not(.browser-default).invalid + label:after,
      .md-form
        input[type="phone"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form input[type="search-md"].invalid + label:after,
      .md-form input[type="search-md"]:focus.invalid + label:after,
      .md-form textarea.md-textarea.invalid + label:after,
      .md-form textarea.md-textarea:focus.invalid + label:after {
        color: #f44336;
        content: attr(data-error);
        opacity: 1;
      }
      .md-form input:not([type]).form-control.valid + label:after,
      .md-form input:not([type]).form-control:focus.valid + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form input[type="search-md"].form-control.valid + label:after,
      .md-form input[type="search-md"].form-control:focus.valid + label:after,
      .md-form textarea.md-textarea.form-control.valid + label:after,
      .md-form textarea.md-textarea.form-control:focus.valid + label:after {
        top: 4.1rem;
      }
      .md-form input:not([type]).form-control.invalid + label:after,
      .md-form input:not([type]).form-control:focus.invalid + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form input[type="search-md"].form-control.invalid + label:after,
      .md-form input[type="search-md"].form-control:focus.invalid + label:after,
      .md-form textarea.md-textarea.form-control.invalid + label:after,
      .md-form textarea.md-textarea.form-control:focus.invalid + label:after {
        top: 4rem;
      }
      .md-form input:not([type]).form-control-lg.valid + label:after,
      .md-form input:not([type]).form-control-lg:focus.valid + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form input[type="search-md"].form-control-lg.valid + label:after,
      .md-form
        input[type="search-md"].form-control-lg:focus.valid
        + label:after,
      .md-form textarea.md-textarea.form-control-lg.valid + label:after,
      .md-form textarea.md-textarea.form-control-lg:focus.valid + label:after {
        top: 4.6rem;
      }
      .md-form input:not([type]).form-control-lg.invalid + label:after,
      .md-form input:not([type]).form-control-lg:focus.invalid + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form input[type="search-md"].form-control-lg.invalid + label:after,
      .md-form
        input[type="search-md"].form-control-lg:focus.invalid
        + label:after,
      .md-form textarea.md-textarea.form-control-lg.invalid + label:after,
      .md-form
        textarea.md-textarea.form-control-lg:focus.invalid
        + label:after {
        top: 4.6rem;
      }
      .md-form input:not([type]).form-control-sm.valid + label:after,
      .md-form input:not([type]).form-control-sm:focus.valid + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form input[type="search-md"].form-control-sm.valid + label:after,
      .md-form
        input[type="search-md"].form-control-sm:focus.valid
        + label:after,
      .md-form textarea.md-textarea.form-control-sm.valid + label:after,
      .md-form textarea.md-textarea.form-control-sm:focus.valid + label:after {
        top: 3.7rem;
      }
      .md-form input:not([type]).form-control-sm.invalid + label:after,
      .md-form input:not([type]).form-control-sm:focus.invalid + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form input[type="search-md"].form-control-sm.invalid + label:after,
      .md-form
        input[type="search-md"].form-control-sm:focus.invalid
        + label:after,
      .md-form textarea.md-textarea.form-control-sm.invalid + label:after,
      .md-form
        textarea.md-textarea.form-control-sm:focus.invalid
        + label:after {
        top: 3.6rem;
      }
      .md-form > input[type="date"]:not(.browser-default) + label {
        transform: translateY(-27px) scale(0.8);
        transform-origin: 0 0;
      }
      .md-form
        > input[type]:-webkit-autofill:not(.browser-default):not([type="search"])
        + label,
      .md-form > input[type="time"]:not(.browser-default) + label {
        font-size: 0.8rem;
        transform: translateY(-25px);
        transform-origin: 0 0;
      }
      .md-form .was-validated input[type="text"]:valid + label {
        color: #00c851 !important;
      }
      .md-form .was-validated input[type="text"]:invalid + label {
        color: #f44336 !important;
      }
      .md-form .was-validated .form-control:valid:focus {
        box-shadow: 0 1px 0 0 #00c851 !important;
      }
      .md-form .was-validated .form-control:valid {
        border-color: #00c851 !important;
      }
      .md-form .was-validated .form-control:invalid:focus {
        box-shadow: 0 1px 0 0 #f44336 !important;
      }
      .md-form .was-validated .form-control:invalid {
        border-color: #f44336 !important;
      }
      .md-form .form-control {
        height: auto;
        padding: 0.6rem 0 0.4rem 0;
        margin: 0 0 0.5rem 0;
        background-color: transparent;
        border-radius: 0;
      }
      .md-form .form-control:focus {
        box-shadow: none;
      }
      .md-form .form-control:disabled,
      .md-form .form-control[readonly] {
        background-color: transparent;
        border-bottom: 1px solid #bdbdbd;
      }
      .md-form .form-control.is-valid {
        border-color: #00c851;
      }
      .md-form .form-control.is-valid:focus {
        border-color: #00c851 !important;
        box-shadow: 0 1px 0 0 #00c851 !important;
      }
      .md-form .form-control.is-invalid {
        border-color: #f44336;
      }
      .md-form .form-control.is-invalid:focus {
        border-color: #f44336 !important;
        box-shadow: 0 1px 0 0 #f44336 !important;
      }
      .md-form .form-control.is-valid,
      .md-form .form-control.is-invalid {
        background-position: center right !important;
      }
      .md-form .validate {
        margin-bottom: 2.5rem;
      }
      .md-form label {
        font-size: 1rem;
      }
      .md-form label.active {
        font-size: 1rem;
      }
      .md-form .prefix {
        top: 0.25rem;
        font-size: 1.75rem;
      }
      .md-form .prefix ~ input,
      .md-form .prefix ~ textarea {
        width: calc(100% - 2.5rem);
        margin-left: 2.5rem;
      }
      .md-form .prefix ~ label {
        margin-left: 2.5rem;
      }
      .md-form .prefix ~ .form-text {
        margin-left: 2.6rem;
      }
      .md-form label {
        position: absolute;
        top: 0;
        left: 0;
        font-size: 1rem;
        color: #757575;
        cursor: text;
        transition: transform 0.2s ease-out, color 0.2s ease-out;
        transform: translateY(12px);
        transform-origin: 0% 100%;
      }
      .md-form label.active {
        transform: translateY(-14px) scale(0.8);
      }
      .md-form .prefix {
        position: absolute;
        transition: color 0.2s;
      }
      .md-form .prefix.active {
        color: #4285f4;
      }
      .md-form.form-lg .validate {
        margin-bottom: 2.8rem;
      }
      .md-form.form-lg label {
        font-size: 1.25rem;
      }
      .md-form.form-lg label.active {
        font-size: 1.15rem;
      }
      .md-form.form-lg .prefix {
        top: 0.4rem;
        font-size: 2rem;
      }
      .md-form.form-lg .prefix ~ input,
      .md-form.form-lg .prefix ~ textarea {
        width: calc(100% - 3rem);
        margin-left: 3rem;
      }
      .md-form.form-lg .prefix ~ label {
        margin-left: 3rem;
      }
      .md-form.form-lg .prefix ~ .form-text {
        margin-left: 3.1rem;
      }
      .md-form.form-sm .validate {
        margin-bottom: 2.3rem;
      }
      .md-form.form-sm label {
        font-size: 0.875rem;
      }
      .md-form.form-sm label.active {
        font-size: 0.95rem;
      }
      .md-form.form-sm .prefix {
        top: 0.35rem;
        font-size: 1.5rem;
      }
      .md-form.form-sm .prefix ~ input,
      .md-form.form-sm .prefix ~ textarea {
        width: calc(100% - 2rem);
        margin-left: 2rem;
      }
      .md-form.form-sm .prefix ~ label {
        margin-left: 2rem;
      }
      .md-form.form-sm .prefix ~ .form-text {
        margin-left: 2rem;
      }
      .md-form textarea.md-textarea {
        padding: 0;
        overflow-y: hidden;
      }
      .md-form textarea.md-textarea + label {
        top: -0.6rem;
      }
      .md-form textarea.md-textarea-auto {
        padding: 0;
        padding-top: 1.5rem;
      }
      .md-form textarea.md-textarea-auto + label {
        top: 0;
      }
      .md-form.md-outline {
        position: relative;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
      }
      .md-form.md-outline input[type="text"],
      .md-form.md-outline input[type="password"],
      .md-form.md-outline input[type="email"],
      .md-form.md-outline input[type="url"],
      .md-form.md-outline input[type="time"],
      .md-form.md-outline input[type="date"],
      .md-form.md-outline input[type="datetime-local"],
      .md-form.md-outline input[type="tel"],
      .md-form.md-outline input[type="number"],
      .md-form.md-outline input[type="search-md"],
      .md-form.md-outline input[type="search"],
      .md-form.md-outline textarea.md-textarea {
        box-sizing: border-box;
        background-color: transparent;
        border: 1px solid #dadce0;
        border-radius: 4px;
        outline: none;
        box-shadow: none;
        transition: all 0.3s;
      }
      .md-form.md-outline input[type="text"]:focus:not([readonly]),
      .md-form.md-outline input[type="password"]:focus:not([readonly]),
      .md-form.md-outline input[type="email"]:focus:not([readonly]),
      .md-form.md-outline input[type="url"]:focus:not([readonly]),
      .md-form.md-outline input[type="time"]:focus:not([readonly]),
      .md-form.md-outline input[type="date"]:focus:not([readonly]),
      .md-form.md-outline input[type="datetime-local"]:focus:not([readonly]),
      .md-form.md-outline input[type="tel"]:focus:not([readonly]),
      .md-form.md-outline input[type="number"]:focus:not([readonly]),
      .md-form.md-outline input[type="search-md"]:focus:not([readonly]),
      .md-form.md-outline input[type="search"]:focus:not([readonly]),
      .md-form.md-outline textarea.md-textarea:focus:not([readonly]) {
        border-color: #4285f4;
        box-shadow: inset 0 0 0 1px #4285f4;
      }
      .md-form.md-outline input[type="text"]:focus:not([readonly]) + label,
      .md-form.md-outline input[type="password"]:focus:not([readonly]) + label,
      .md-form.md-outline input[type="email"]:focus:not([readonly]) + label,
      .md-form.md-outline input[type="url"]:focus:not([readonly]) + label,
      .md-form.md-outline input[type="time"]:focus:not([readonly]) + label,
      .md-form.md-outline input[type="date"]:focus:not([readonly]) + label,
      .md-form.md-outline
        input[type="datetime-local"]:focus:not([readonly])
        + label,
      .md-form.md-outline input[type="tel"]:focus:not([readonly]) + label,
      .md-form.md-outline input[type="number"]:focus:not([readonly]) + label,
      .md-form.md-outline input[type="search-md"]:focus:not([readonly]) + label,
      .md-form.md-outline input[type="search"]:focus:not([readonly]) + label,
      .md-form.md-outline textarea.md-textarea:focus:not([readonly]) + label {
        color: #4285f4;
      }
      .md-form.md-outline input[type="text"].valid,
      .md-form.md-outline input[type="text"]:focus.valid,
      .md-form.md-outline input[type="password"].valid,
      .md-form.md-outline input[type="password"]:focus.valid,
      .md-form.md-outline input[type="email"].valid,
      .md-form.md-outline input[type="email"]:focus.valid,
      .md-form.md-outline input[type="url"].valid,
      .md-form.md-outline input[type="url"]:focus.valid,
      .md-form.md-outline input[type="time"].valid,
      .md-form.md-outline input[type="time"]:focus.valid,
      .md-form.md-outline input[type="date"].valid,
      .md-form.md-outline input[type="date"]:focus.valid,
      .md-form.md-outline input[type="datetime-local"].valid,
      .md-form.md-outline input[type="datetime-local"]:focus.valid,
      .md-form.md-outline input[type="tel"].valid,
      .md-form.md-outline input[type="tel"]:focus.valid,
      .md-form.md-outline input[type="number"].valid,
      .md-form.md-outline input[type="number"]:focus.valid,
      .md-form.md-outline input[type="search-md"].valid,
      .md-form.md-outline input[type="search-md"]:focus.valid,
      .md-form.md-outline input[type="search"].valid,
      .md-form.md-outline input[type="search"]:focus.valid,
      .md-form.md-outline textarea.md-textarea.valid,
      .md-form.md-outline textarea.md-textarea:focus.valid {
        border-color: #00c851;
        box-shadow: inset 0 0 0 1px #00c851;
      }
      .md-form.md-outline
        input[type="text"]:focus:not([readonly]).valid
        + label,
      .md-form.md-outline input[type="text"].valid + label:after,
      .md-form.md-outline input[type="text"]:focus.valid + label:after,
      .md-form.md-outline
        input[type="password"]:focus:not([readonly]).valid
        + label,
      .md-form.md-outline input[type="password"].valid + label:after,
      .md-form.md-outline input[type="password"]:focus.valid + label:after,
      .md-form.md-outline
        input[type="email"]:focus:not([readonly]).valid
        + label,
      .md-form.md-outline input[type="email"].valid + label:after,
      .md-form.md-outline input[type="email"]:focus.valid + label:after,
      .md-form.md-outline input[type="url"]:focus:not([readonly]).valid + label,
      .md-form.md-outline input[type="url"].valid + label:after,
      .md-form.md-outline input[type="url"]:focus.valid + label:after,
      .md-form.md-outline
        input[type="time"]:focus:not([readonly]).valid
        + label,
      .md-form.md-outline input[type="time"].valid + label:after,
      .md-form.md-outline input[type="time"]:focus.valid + label:after,
      .md-form.md-outline
        input[type="date"]:focus:not([readonly]).valid
        + label,
      .md-form.md-outline input[type="date"].valid + label:after,
      .md-form.md-outline input[type="date"]:focus.valid + label:after,
      .md-form.md-outline
        input[type="datetime-local"]:focus:not([readonly]).valid
        + label,
      .md-form.md-outline input[type="datetime-local"].valid + label:after,
      .md-form.md-outline
        input[type="datetime-local"]:focus.valid
        + label:after,
      .md-form.md-outline input[type="tel"]:focus:not([readonly]).valid + label,
      .md-form.md-outline input[type="tel"].valid + label:after,
      .md-form.md-outline input[type="tel"]:focus.valid + label:after,
      .md-form.md-outline
        input[type="number"]:focus:not([readonly]).valid
        + label,
      .md-form.md-outline input[type="number"].valid + label:after,
      .md-form.md-outline input[type="number"]:focus.valid + label:after,
      .md-form.md-outline
        input[type="search-md"]:focus:not([readonly]).valid
        + label,
      .md-form.md-outline input[type="search-md"].valid + label:after,
      .md-form.md-outline input[type="search-md"]:focus.valid + label:after,
      .md-form.md-outline
        input[type="search"]:focus:not([readonly]).valid
        + label,
      .md-form.md-outline input[type="search"].valid + label:after,
      .md-form.md-outline input[type="search"]:focus.valid + label:after,
      .md-form.md-outline
        textarea.md-textarea:focus:not([readonly]).valid
        + label,
      .md-form.md-outline textarea.md-textarea.valid + label:after,
      .md-form.md-outline textarea.md-textarea:focus.valid + label:after {
        color: #00c851;
        content: attr(data-success);
        opacity: 1;
      }
      .md-form.md-outline input[type="text"].invalid,
      .md-form.md-outline input[type="text"]:focus.invalid,
      .md-form.md-outline input[type="password"].invalid,
      .md-form.md-outline input[type="password"]:focus.invalid,
      .md-form.md-outline input[type="email"].invalid,
      .md-form.md-outline input[type="email"]:focus.invalid,
      .md-form.md-outline input[type="url"].invalid,
      .md-form.md-outline input[type="url"]:focus.invalid,
      .md-form.md-outline input[type="time"].invalid,
      .md-form.md-outline input[type="time"]:focus.invalid,
      .md-form.md-outline input[type="date"].invalid,
      .md-form.md-outline input[type="date"]:focus.invalid,
      .md-form.md-outline input[type="datetime-local"].invalid,
      .md-form.md-outline input[type="datetime-local"]:focus.invalid,
      .md-form.md-outline input[type="tel"].invalid,
      .md-form.md-outline input[type="tel"]:focus.invalid,
      .md-form.md-outline input[type="number"].invalid,
      .md-form.md-outline input[type="number"]:focus.invalid,
      .md-form.md-outline input[type="search-md"].invalid,
      .md-form.md-outline input[type="search-md"]:focus.invalid,
      .md-form.md-outline input[type="search"].invalid,
      .md-form.md-outline input[type="search"]:focus.invalid,
      .md-form.md-outline textarea.md-textarea.invalid,
      .md-form.md-outline textarea.md-textarea:focus.invalid {
        border-color: #f44336;
        box-shadow: inset 0 0 0 1px #f44336;
      }
      .md-form.md-outline
        input[type="text"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="text"].invalid + label:after,
      .md-form.md-outline input[type="text"]:focus.invalid + label:after,
      .md-form.md-outline
        input[type="password"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="password"].invalid + label:after,
      .md-form.md-outline input[type="password"]:focus.invalid + label:after,
      .md-form.md-outline
        input[type="email"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="email"].invalid + label:after,
      .md-form.md-outline input[type="email"]:focus.invalid + label:after,
      .md-form.md-outline
        input[type="url"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="url"].invalid + label:after,
      .md-form.md-outline input[type="url"]:focus.invalid + label:after,
      .md-form.md-outline
        input[type="time"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="time"].invalid + label:after,
      .md-form.md-outline input[type="time"]:focus.invalid + label:after,
      .md-form.md-outline
        input[type="date"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="date"].invalid + label:after,
      .md-form.md-outline input[type="date"]:focus.invalid + label:after,
      .md-form.md-outline
        input[type="datetime-local"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="datetime-local"].invalid + label:after,
      .md-form.md-outline
        input[type="datetime-local"]:focus.invalid
        + label:after,
      .md-form.md-outline
        input[type="tel"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="tel"].invalid + label:after,
      .md-form.md-outline input[type="tel"]:focus.invalid + label:after,
      .md-form.md-outline
        input[type="number"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="number"].invalid + label:after,
      .md-form.md-outline input[type="number"]:focus.invalid + label:after,
      .md-form.md-outline
        input[type="search-md"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="search-md"].invalid + label:after,
      .md-form.md-outline input[type="search-md"]:focus.invalid + label:after,
      .md-form.md-outline
        input[type="search"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="search"].invalid + label:after,
      .md-form.md-outline input[type="search"]:focus.invalid + label:after,
      .md-form.md-outline
        textarea.md-textarea:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline textarea.md-textarea.invalid + label:after,
      .md-form.md-outline textarea.md-textarea:focus.invalid + label:after {
        color: #f44336;
        content: attr(data-error);
        opacity: 1;
      }
      .md-form.md-outline input[type="text"].form-control.valid + label:after,
      .md-form.md-outline
        input[type="text"].form-control:focus.valid
        + label:after,
      .md-form.md-outline
        input[type="password"].form-control.valid
        + label:after,
      .md-form.md-outline
        input[type="password"].form-control:focus.valid
        + label:after,
      .md-form.md-outline input[type="email"].form-control.valid + label:after,
      .md-form.md-outline
        input[type="email"].form-control:focus.valid
        + label:after,
      .md-form.md-outline input[type="url"].form-control.valid + label:after,
      .md-form.md-outline
        input[type="url"].form-control:focus.valid
        + label:after,
      .md-form.md-outline input[type="time"].form-control.valid + label:after,
      .md-form.md-outline
        input[type="time"].form-control:focus.valid
        + label:after,
      .md-form.md-outline input[type="date"].form-control.valid + label:after,
      .md-form.md-outline
        input[type="date"].form-control:focus.valid
        + label:after,
      .md-form.md-outline
        input[type="datetime-local"].form-control.valid
        + label:after,
      .md-form.md-outline
        input[type="datetime-local"].form-control:focus.valid
        + label:after,
      .md-form.md-outline input[type="tel"].form-control.valid + label:after,
      .md-form.md-outline
        input[type="tel"].form-control:focus.valid
        + label:after,
      .md-form.md-outline input[type="number"].form-control.valid + label:after,
      .md-form.md-outline
        input[type="number"].form-control:focus.valid
        + label:after,
      .md-form.md-outline
        input[type="search-md"].form-control.valid
        + label:after,
      .md-form.md-outline
        input[type="search-md"].form-control:focus.valid
        + label:after,
      .md-form.md-outline input[type="search"].form-control.valid + label:after,
      .md-form.md-outline
        input[type="search"].form-control:focus.valid
        + label:after,
      .md-form.md-outline textarea.md-textarea.form-control.valid + label:after,
      .md-form.md-outline
        textarea.md-textarea.form-control:focus.valid
        + label:after {
        position: absolute;
        top: 4rem;
        left: 0;
      }
      .md-form.md-outline input[type="text"].form-control.invalid + label:after,
      .md-form.md-outline
        input[type="text"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline
        input[type="password"].form-control.invalid
        + label:after,
      .md-form.md-outline
        input[type="password"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline
        input[type="email"].form-control.invalid
        + label:after,
      .md-form.md-outline
        input[type="email"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline input[type="url"].form-control.invalid + label:after,
      .md-form.md-outline
        input[type="url"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline input[type="time"].form-control.invalid + label:after,
      .md-form.md-outline
        input[type="time"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline input[type="date"].form-control.invalid + label:after,
      .md-form.md-outline
        input[type="date"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline
        input[type="datetime-local"].form-control.invalid
        + label:after,
      .md-form.md-outline
        input[type="datetime-local"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline input[type="tel"].form-control.invalid + label:after,
      .md-form.md-outline
        input[type="tel"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline
        input[type="number"].form-control.invalid
        + label:after,
      .md-form.md-outline
        input[type="number"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline
        input[type="search-md"].form-control.invalid
        + label:after,
      .md-form.md-outline
        input[type="search-md"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline
        input[type="search"].form-control.invalid
        + label:after,
      .md-form.md-outline
        input[type="search"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline
        textarea.md-textarea.form-control.invalid
        + label:after,
      .md-form.md-outline
        textarea.md-textarea.form-control:focus.invalid
        + label:after {
        position: absolute;
        top: 4rem;
        left: 0;
      }
      .md-form.md-outline
        > input[type]:-webkit-autofill:not(.browser-default):not([type="search"])
        + label,
      .md-form.md-outline > input[type="time"]:not(.browser-default) + label {
        left: 8px;
        padding-right: 5px;
        padding-left: 5px;
        font-size: 1rem;
        font-weight: 500;
        background: #fff;
        transform: translateY(-9px) scale(0.8);
        transform-origin: 0 0;
      }
      .md-form.md-outline
        > input[type]:-webkit-autofill:not(.browser-default):not([type="search"])
        + label.active,
      .md-form.md-outline
        > input[type="time"]:not(.browser-default)
        + label.active {
        transform: translateY(-9px) scale(0.8);
        transform-origin: 0 0;
      }
      @-webkit-keyframes autofill {
        to {
          color: #495057;
          background: transparent;
        }
      }
      @keyframes autofill {
        to {
          color: #495057;
          background: transparent;
        }
      }
      .md-form.md-outline input:-webkit-autofill {
        -webkit-animation-name: autofill;
        animation-name: autofill;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
      }
      .md-form.md-outline .form-control {
        padding: 0.375rem 0.75rem;
      }
      .md-form.md-outline label {
        position: absolute;
        top: 0;
        left: 0;
        padding-left: 10px;
        font-size: 1rem;
        color: #757575;
        cursor: text;
        transition: transform 0.2s ease-out, color 0.2s ease-out;
        transform: translateY(9px);
        transform-origin: 0% 100%;
      }
      .md-form.md-outline label.active {
        left: 8px;
        padding-right: 5px;
        padding-left: 5px;
        font-weight: 500;
        background: #fff;
        transform: translateY(-13px) scale(0.8);
      }
      .md-form.md-outline.form-lg .form-control.form-control-lg {
        padding: 0.5rem 0.725rem;
      }
      .md-form.md-outline.form-lg label {
        font-size: 1.25rem;
        transform: translateY(10px);
      }
      .md-form.md-outline.form-lg label.active {
        font-size: 1.1rem;
        transform: translateY(-14px) scale(0.8);
      }
      .md-form.md-outline.form-lg .prefix {
        top: 0.65rem;
        font-size: 25px;
      }
      .md-form.md-outline.form-lg .prefix ~ input,
      .md-form.md-outline.form-lg .prefix ~ textarea {
        width: calc(100% - 2.2rem);
        margin-left: 2.2rem;
      }
      .md-form.md-outline.form-lg .prefix ~ label {
        margin-left: 2.2rem;
      }
      .md-form.md-outline.form-lg .prefix ~ .form-text {
        margin-left: 2.3rem;
      }
      .md-form.md-outline.form-sm .form-control.form-control-sm {
        padding: 0.25rem 0.625rem;
      }
      .md-form.md-outline.form-sm label {
        font-size: 0.8rem;
        transform: translateY(8px);
      }
      .md-form.md-outline.form-sm label.active {
        font-size: 0.85rem;
        transform: translateY(-12px) scale(0.8);
      }
      .md-form.md-outline.form-sm .prefix {
        top: 0.5rem;
        font-size: 15px;
      }
      .md-form.md-outline.form-sm .prefix ~ input,
      .md-form.md-outline.form-sm .prefix ~ textarea {
        width: calc(100% - 1.6rem);
        margin-left: 1.6rem;
      }
      .md-form.md-outline.form-sm .prefix ~ label {
        margin-left: 1.6rem;
      }
      .md-form.md-outline.form-sm .prefix ~ .form-text {
        margin-left: 1.7rem;
      }
      .md-form.md-outline .prefix {
        position: absolute;
        top: 0.6rem;
        font-size: 20px;
        transition: color 0.2s;
      }
      .md-form.md-outline .prefix:focus {
        color: #4285f4;
      }
      .md-form.md-outline .prefix ~ input,
      .md-form.md-outline .prefix ~ textarea {
        width: calc(100% - 2rem);
        margin-left: 2rem;
      }
      .md-form.md-outline .prefix ~ label {
        margin-left: 2rem;
      }
      .md-form.md-outline .prefix ~ .form-text {
        margin-left: 2.1rem;
      }
      .md-form.md-outline .character-counter {
        margin-top: -0.5rem;
      }
      .md-form.md-bg input[type="text"],
      .md-form.md-bg input[type="password"],
      .md-form.md-bg input[type="email"],
      .md-form.md-bg input[type="url"],
      .md-form.md-bg input[type="time"],
      .md-form.md-bg input[type="date"],
      .md-form.md-bg input[type="datetime-local"],
      .md-form.md-bg input[type="tel"],
      .md-form.md-bg input[type="number"],
      .md-form.md-bg input[type="search-md"],
      .md-form.md-bg input[type="search"],
      .md-form.md-bg textarea.md-textarea {
        box-sizing: border-box;
        padding: 10px 5px;
        background: #f5f5f5 no-repeat;
        background-image: linear-gradient(to bottom, #4285f4, #4285f4),
          linear-gradient(to bottom, #ced4da, #ced4da);
        background-position: 50% 100%, 50% 100%;
        background-size: 0 2px, 100% 1px;
        border: 0;
        border-top-left-radius: 0.3rem;
        border-top-right-radius: 0.3rem;
        transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
      }
      .md-form.md-bg input[type="text"]:focus:not([readonly]),
      .md-form.md-bg input[type="password"]:focus:not([readonly]),
      .md-form.md-bg input[type="email"]:focus:not([readonly]),
      .md-form.md-bg input[type="url"]:focus:not([readonly]),
      .md-form.md-bg input[type="time"]:focus:not([readonly]),
      .md-form.md-bg input[type="date"]:focus:not([readonly]),
      .md-form.md-bg input[type="datetime-local"]:focus:not([readonly]),
      .md-form.md-bg input[type="tel"]:focus:not([readonly]),
      .md-form.md-bg input[type="number"]:focus:not([readonly]),
      .md-form.md-bg input[type="search-md"]:focus:not([readonly]),
      .md-form.md-bg input[type="search"]:focus:not([readonly]),
      .md-form.md-bg textarea.md-textarea:focus:not([readonly]) {
        border-bottom: none;
        box-shadow: none;
      }
      .md-form.md-bg input[type="text"]:focus,
      .md-form.md-bg input[type="password"]:focus,
      .md-form.md-bg input[type="email"]:focus,
      .md-form.md-bg input[type="url"]:focus,
      .md-form.md-bg input[type="time"]:focus,
      .md-form.md-bg input[type="date"]:focus,
      .md-form.md-bg input[type="datetime-local"]:focus,
      .md-form.md-bg input[type="tel"]:focus,
      .md-form.md-bg input[type="number"]:focus,
      .md-form.md-bg input[type="search-md"]:focus,
      .md-form.md-bg input[type="search"]:focus,
      .md-form.md-bg textarea.md-textarea:focus {
        background-color: #dcdcdc;
        background-size: 100% 2px, 100% 1px;
        outline: none;
      }
      .md-form.md-bg > input[type="date"]:not(.browser-default) + label {
        transform: translateY(-12px) scale(0.8);
        transform-origin: 0 0;
      }
      .md-form.md-bg
        > input[type]:-webkit-autofill:not(.browser-default):not([type="search"])
        + label,
      .md-form.md-bg > input[type="time"]:not(.browser-default) + label {
        font-size: 0.8rem;
        transform: translateY(-12px);
        transform-origin: 0 0;
      }
      .md-form.md-bg .form-control {
        padding: 1.1rem 0.7rem 0.4rem !important;
      }
      .md-form.md-bg label {
        top: 0;
        padding-left: 0.7rem;
        font-size: 1rem;
        transition: transform 0.2s ease-out, color 0.2s ease-out;
        transform: translateY(13px);
        transform-origin: 0% 100%;
      }
      .md-form.md-bg label.active {
        padding-left: 0.75rem;
        font-weight: 500;
        transform: translateY(-3px) scale(0.8);
      }
      .md-form.md-bg.form-lg label {
        transform: translateY(16px);
      }
      .md-form.md-bg.form-lg label.active {
        transform: translateY(-4px) scale(0.8);
      }
      .md-form.md-bg.form-sm label {
        transform: translateY(11px);
      }
      .md-form.md-bg.form-sm label.active {
        transform: translateY(-2px) scale(0.8);
      }
      .md-form .form-control.is-invalid,
      .was-validated .md-form .form-control:invalid {
        padding-right: 0;
      }
      .md-form .form-control.is-valid,
      .was-validated .md-form .form-control:valid {
        padding-right: 0;
      }
      .needs-validation .md-form label {
        left: 0.3rem;
      }
      .custom-file-input:lang(es) ~ .custom-file-label::after {
        content: "Elegir";
      }
      .custom-file-input:lang(pl-pl) ~ .custom-file-label::after {
        content: "Wybierz";
      }
      .custom-file-input:lang(fr) ~ .custom-file-label::after {
        content: "Choisir";
      }
      .custom-file-input:lang(in) ~ .custom-file-label::after {
        content: "Pilih";
      }
      .custom-file-input:lang(zh) ~ .custom-file-label::after {
        content: "選擇";
      }
      .custom-file-input:lang(de) ~ .custom-file-label::after {
        content: "Wählen";
      }
      .custom-file-input:lang(ru) ~ .custom-file-label::after {
        content: "Выбрать";
      }
      .md-form > label {
        max-width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .md-form .form-control {
        box-sizing: border-box !important;
      }
      .md-form .input-prefix {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        transition: color 0.2s;
        color: rgba(0, 0, 0, 0.87);
        pointer-events: none;
      }
      .md-form .input-prefix.active {
        color: #4285f4;
      }
      .md-form.input-with-pre-icon label {
        left: 36px;
        right: initial;
      }
      .md-form.input-with-pre-icon .input-prefix {
        left: 16px;
        right: initial;
      }
      .md-form.input-with-pre-icon .form-control {
        padding-left: 2.7rem !important;
      }
      .md-form.input-with-post-icon .input-prefix {
        right: 16px;
        left: initial;
      }
      .md-form.input-with-post-icon .form-control {
        padding-right: 2.7rem !important;
      }
      .md-form.input-with-post-icon.input-with-pre-icon .input-prefix {
        right: 16px;
        left: initial;
      }
      .md-form.input-with-post-icon.input-with-pre-icon
        .input-prefix:first-of-type {
        left: 16px;
        right: initial;
      }
      .md-form.input-with-post-icon.input-with-pre-icon .form-control {
        padding-left: 2.5rem !important;
        padding-right: 2.5rem !important;
      }
`])));u.oneOfType([u.node,u.string]),u.string,u.string,u.bool,u.node,u.string,u.string,u.string,u.func,u.string,u.string,u.node,u.string,u.string,u.bool,u.func,u.func,u.any,u.string,u.string,u.oneOfType([u.func,u.string]),u.string,u.string,u.string,u.string;var Qb;V.div(Qb||(Qb=P([""])));u.node,u.string,u.bool;u.bool,u.node,u.string,u.bool,u.string,u.func,u.func;var Jb;V.ul(Jb||(Jb=P([`
  border: none;
`])));u.node,u.string,u.oneOfType([u.func,u.string]);var Zb,e0;V.li(Zb||(Zb=P([`
  `,`
`])),Xt);V(zu)(e0||(e0=P([`
  `,`
`])),Xt);u.bool,u.node,u.string,u.oneOf(["primary","secondary","success","danger","warning","info","white"]),u.bool,u.bool,u.oneOfType([u.func,u.string]);var er={pattern1:"img/overlays/01.png",pattern2:"img/overlays/02.png",pattern3:"img/overlays/03.png",pattern4:"img/overlays/04.png",pattern5:"img/overlays/05.png",pattern6:"img/overlays/06.png",pattern7:"img/overlays/07.png",pattern8:"img/overlays/08.png",pattern9:"img/overlays/09.png"},J4=er.pattern1,Z4=er.pattern2,eM=er.pattern3,tM=er.pattern4,nM=er.pattern5,rM=er.pattern6,oM=er.pattern7,aM=er.pattern8,iM=er.pattern9;V("span")(Bi,Xt,{position:"absolute",top:0,right:0,bottom:0,left:0,width:"100 %",height:"100 %",overflow:" hidden",backgroundAttachment:"fixed"},un({prop:"pattern",variants:{pattern1:{backgroundImage:"url("+J4+")",backgroundAttachment:"fixed"},pattern2:{backgroundImage:"url("+Z4+")",backgroundAttachment:"fixed"},pattern3:{backgroundImage:"url("+eM+")",backgroundAttachment:"fixed"},pattern4:{backgroundImage:"url("+tM+")",backgroundAttachment:"fixed"},pattern5:{backgroundImage:"url("+nM+")",backgroundAttachment:"fixed"},pattern6:{backgroundImage:"url("+rM+")",backgroundAttachment:"fixed"},pattern7:{backgroundImage:"url("+oM+")",backgroundAttachment:"fixed"},pattern8:{backgroundImage:"url("+aM+")",backgroundAttachment:"fixed"},pattern9:{backgroundImage:"url("+iM+")",backgroundAttachment:"fixed"}}}),un({prop:"overlay",variants:{blueLight:{backgroundColor:"rgba(33,150,243,0.3)",color:"#222222"},redLight:{backgroundColor:"rgba(244,67,54,0.3);",color:"#222222"},pinkLight:{backgroundColor:"rgba(233,30,99,0.3",color:"#222222"},yellowLight:{backgroundColor:"rgba(255,235,59,0.3)",color:"#222222"},orangeLight:{backgroundColor:"rgba(255,152,0,0.3)",color:"#222222"},purpleLight:{backgroundColor:"rgba(156,39,176,0.3)",color:"#222222"},brownLight:{backgroundColor:"rgba(33,150,243,0.3)",color:"#222222"},tealLight:{backgroundColor:"rgba(0,150,136,0.3)",color:"#222222"},cyanLight:{backgroundColor:"rgba(0,188,212,0.3)",color:"#222222"},greenLight:{backgroundColor:"rgba(76,175,80,0.3);",color:"#222222"},indigoLight:{backgroundColor:"rgba(63,81,181,0.3)",color:"#222222"},darkLight:{backgroundColor:"rgba(0,0,0,0.3)",color:"white"},blueStrong:{backgroundColor:"rgba(33,150,243,0.7)",color:"white"},redStrong:{backgroundColor:"rgba(244,67,54,0.7);",color:"white"},pinkStrong:{backgroundColor:"rgba(233,30,99,0.7",color:"white"},yellowStrong:{backgroundColor:"rgba(255,235,59,0.7)",color:"white"},orangeStrong:{backgroundColor:"rgba(255,152,0,0.7)",color:"white"},purpleStrong:{backgroundColor:"rgba(156,39,176,0.7)",color:"white"},brownStrong:{backgroundColor:"rgba(153,102,51,0.7)",color:"white"},tealStrong:{backgroundColor:"rgba(0,150,136,0.7)",color:"white"},cyanStrong:{backgroundColor:"rgba(0,188,212,0.7)",color:"white"},greenStrong:{backgroundColor:"rgba(76,175,80,0.7);",color:"white"},indigoStrong:{backgroundColor:"rgba(63,81,181,0.7)",color:"white"},darkStrong:{backgroundColor:"rgba(0,0,0,0.7)",color:"white"}}}));u.node,u.string,u.string,u.oneOfType([u.string,u.number]),u.string;var t0;V.div(t0||(t0=P([`
  padding: 0;

  .modal-dialog .modal-content {
    border: 0;
    border-radius: 0.125rem;
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18),
      0 4px 15px 0 rgba(0, 0, 0, 0.15);
  }
  .modal-dialog .modal-content .modal-header {
    border-top-left-radius: 0.125rem;
    border-top-right-radius: 0.125rem;
  }
  .modal-dialog.cascading-modal {
    margin-top: 10%;
  }
  .modal-dialog.cascading-modal .close {
    color: #fff;
    text-shadow: none;
    outline: 0;
    opacity: 1;
  }
  .modal-dialog.cascading-modal .modal-header {
    padding: 1.5rem;
    margin: -2rem 1rem 1rem 1rem;
    text-align: center;
    border: none;
    border-radius: 0.125rem;
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18),
      0 4px 15px 0 rgba(0, 0, 0, 0.15);
  }
  .modal-dialog.cascading-modal .modal-header .close {
    margin-right: 1rem;
  }
  .modal-dialog.cascading-modal .modal-header .title {
    width: 100%;
    margin-bottom: 0;
    font-size: 1.25rem;
  }
  .modal-dialog.cascading-modal .modal-header .title .fas,
  .modal-dialog.cascading-modal .modal-header .title .fab,
  .modal-dialog.cascading-modal .modal-header .title .far {
    margin-right: 9px;
  }
  .modal-dialog.cascading-modal .modal-header .social-buttons {
    margin-top: 1.5rem;
  }
  .modal-dialog.cascading-modal .modal-header .social-buttons a {
    font-size: 1rem;
  }
  .modal-dialog.cascading-modal .modal-c-tabs .md-tabs {
    display: flex;
    margin: -1.5rem 1rem 0 1rem;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }
  .modal-dialog.cascading-modal .modal-c-tabs .md-tabs li {
    flex: 1;
  }
  .modal-dialog.cascading-modal .modal-c-tabs .md-tabs li a {
    text-align: center;
  }
  .modal-dialog.cascading-modal .modal-c-tabs .tab-content {
    padding: 1.7rem 0 0 0;
  }
  .modal-dialog.cascading-modal .modal-body,
  .modal-dialog.cascading-modal .modal-footer {
    padding-right: 2rem;
    padding-left: 2rem;
    color: #616161;
  }
  .modal-dialog.cascading-modal .modal-body .additional-option,
  .modal-dialog.cascading-modal .modal-footer .additional-option {
    margin-top: 1rem;
    text-align: center;
  }
  .modal-dialog.cascading-modal.modal-avatar {
    margin-top: 6rem;
  }
  .modal-dialog.cascading-modal.modal-avatar .modal-header {
    margin: -6rem 0 -1rem;
    box-shadow: none;
  }
  .modal-dialog.cascading-modal.modal-avatar .modal-header img {
    width: 130px;
    margin-right: auto;
    margin-left: auto;
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .modal-dialog.modal-notify .heading {
    padding: 0.3rem;
    margin: 0;
    font-size: 1.15rem;
    color: #fff;
  }
  .modal-dialog.modal-notify .modal-header {
    border: 0;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }
  .modal-dialog.modal-notify .close {
    opacity: 1;
  }
  .modal-dialog.modal-notify .modal-body {
    padding: 1.5rem;
    color: #616161;
  }
  .modal-dialog.modal-notify.modal-primary .modal-header {
    background-color: #4285f4;
  }
  .modal-dialog.modal-notify.modal-primary .fas,
  .modal-dialog.modal-notify.modal-primary .fab,
  .modal-dialog.modal-notify.modal-primary .far {
    color: #4285f4;
  }
  .modal-dialog.modal-notify.modal-primary .badge {
    background-color: #4285f4;
  }
  .modal-dialog.modal-notify.modal-primary .btn .fas,
  .modal-dialog.modal-notify.modal-primary .btn .fab,
  .modal-dialog.modal-notify.modal-primary .btn .far {
    color: #fff;
  }
  .modal-dialog.modal-notify.modal-primary .btn.btn-outline-primary .fas,
  .modal-dialog.modal-notify.modal-primary .btn.btn-outline-primary .fab,
  .modal-dialog.modal-notify.modal-primary .btn.btn-outline-primary .far {
    color: #4285f4;
  }
  .modal-dialog.modal-notify.modal-danger .modal-header {
    background-color: #ff3547;
  }
  .modal-dialog.modal-notify.modal-danger .fas,
  .modal-dialog.modal-notify.modal-danger .fab,
  .modal-dialog.modal-notify.modal-danger .far {
    color: #ff3547;
  }
  .modal-dialog.modal-notify.modal-danger .badge {
    background-color: #ff3547;
  }
  .modal-dialog.modal-notify.modal-danger .btn .fas,
  .modal-dialog.modal-notify.modal-danger .btn .fab,
  .modal-dialog.modal-notify.modal-danger .btn .far {
    color: #fff;
  }
  .modal-dialog.modal-notify.modal-danger .btn.btn-outline-danger .fas,
  .modal-dialog.modal-notify.modal-danger .btn.btn-outline-danger .fab,
  .modal-dialog.modal-notify.modal-danger .btn.btn-outline-danger .far {
    color: #ff3547;
  }
  .modal-dialog.modal-notify.modal-warning .modal-header {
    background-color: #fb3;
  }
  .modal-dialog.modal-notify.modal-warning .fas,
  .modal-dialog.modal-notify.modal-warning .fab,
  .modal-dialog.modal-notify.modal-warning .far {
    color: #fb3;
  }
  .modal-dialog.modal-notify.modal-warning .badge {
    background-color: #fb3;
  }
  .modal-dialog.modal-notify.modal-warning .btn .fas,
  .modal-dialog.modal-notify.modal-warning .btn .fab,
  .modal-dialog.modal-notify.modal-warning .btn .far {
    color: #fff;
  }
  .modal-dialog.modal-notify.modal-warning .btn.btn-outline-warning .fas,
  .modal-dialog.modal-notify.modal-warning .btn.btn-outline-warning .fab,
  .modal-dialog.modal-notify.modal-warning .btn.btn-outline-warning .far {
    color: #fb3;
  }
  .modal-dialog.modal-notify.modal-success .modal-header {
    background-color: #00c851;
  }
  .modal-dialog.modal-notify.modal-success .fas,
  .modal-dialog.modal-notify.modal-success .fab,
  .modal-dialog.modal-notify.modal-success .far {
    color: #00c851;
  }
  .modal-dialog.modal-notify.modal-success .badge {
    background-color: #00c851;
  }
  .modal-dialog.modal-notify.modal-success .btn .fas,
  .modal-dialog.modal-notify.modal-success .btn .fab,
  .modal-dialog.modal-notify.modal-success .btn .far {
    color: #fff;
  }
  .modal-dialog.modal-notify.modal-success .btn.btn-outline-success .fas,
  .modal-dialog.modal-notify.modal-success .btn.btn-outline-success .fab,
  .modal-dialog.modal-notify.modal-success .btn.btn-outline-success .far {
    color: #00c851;
  }
  .modal-dialog.modal-notify.modal-info .modal-header {
    background-color: #33b5e5;
  }
  .modal-dialog.modal-notify.modal-info .fas,
  .modal-dialog.modal-notify.modal-info .fab,
  .modal-dialog.modal-notify.modal-info .far {
    color: #33b5e5;
  }
  .modal-dialog.modal-notify.modal-info .badge {
    background-color: #33b5e5;
  }
  .modal-dialog.modal-notify.modal-info .btn .fas,
  .modal-dialog.modal-notify.modal-info .btn .fab,
  .modal-dialog.modal-notify.modal-info .btn .far {
    color: #fff;
  }
  .modal-dialog.modal-notify.modal-info .btn.btn-outline-info .fas,
  .modal-dialog.modal-notify.modal-info .btn.btn-outline-info .fab,
  .modal-dialog.modal-notify.modal-info .btn.btn-outline-info .far {
    color: #33b5e5;
  }
  @media (min-width: 768px) {
    .modal-dialog.modal-top {
      top: 0;
    }
    .modal-dialog.modal-left {
      left: 0;
    }
    .modal-dialog.modal-right {
      right: 0;
    }
    .modal-dialog.modal-bottom {
      bottom: 0;
    }
    .modal-dialog.modal-top-left {
      top: 10px;
      left: 10px;
    }
    .modal-dialog.modal-top-right {
      top: 10px;
      right: 10px;
    }
    .modal-dialog.modal-bottom-left {
      bottom: 10px;
      left: 10px;
    }
    .modal-dialog.modal-bottom-right {
      right: 10px;
      bottom: 10px;
    }
  }
  .modal.fade.top:not(.show) .modal-dialog {
    transform: translate3d(0, -25%, 0);
  }
  .modal.fade.left:not(.show) .modal-dialog {
    transform: translate3d(-25%, 0, 0);
  }
  .modal.fade.right:not(.show) .modal-dialog {
    transform: translate3d(25%, 0, 0);
  }
  .modal.fade.bottom:not(.show) .modal-dialog {
    transform: translate3d(0, 25%, 0);
  }
  @media (min-width: 992px) {
    .modal.modal-scrolling {
      position: relative;
    }
    .modal.modal-scrolling .modal-dialog {
      position: fixed;
      z-index: 1050;
    }
    .modal.modal-content-clickable {
      top: auto;
      bottom: auto;
    }
    .modal.modal-content-clickable .modal-dialog {
      position: fixed;
    }
    .modal-fluid {
      width: 100%;
      max-width: 100%;
    }
    .modal-fluid .modal-content {
      width: 100%;
    }
    .modal-frame {
      position: absolute;
      width: 100%;
      max-width: 100% !important;
      margin: 0 !important;
    }
    .modal-frame.modal-bottom {
      bottom: 0;
    }
    .modal-full-height {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      width: 400px;
      height: auto;
      min-height: 100%;
      margin: 0;
    }
    .modal-full-height.modal-top,
    .modal-full-height.modal-bottom {
      display: block;
      width: 100%;
      max-width: 100%;
      height: auto;
    }
    .modal-full-height.modal-top {
      bottom: auto;
    }
    .modal-full-height.modal-bottom {
      top: auto;
      min-height: 0;
    }
    .modal-full-height .modal-content {
      width: 100%;
    }
    .modal-full-height.modal-lg {
      width: 90%;
      max-width: 90%;
    }
  }
  @media (min-width: 992px) and (min-width: 992px) {
    .modal-full-height.modal-lg {
      width: 800px;
      max-width: 800px;
    }
  }
  @media (min-width: 992px) and (min-width: 1200px) {
    .modal-full-height.modal-lg {
      width: 1000px;
      max-width: 1000px;
    }
  }
  @media (min-width: 992px) {
    .modal-side {
      position: absolute;
      right: 10px;
      bottom: 10px;
      width: 400px;
      margin: 0;
    }
  }
`])));u.string,u.bool,u.bool,u.string,u.number,u.bool,u.bool,u.node,u.string,u.string,u.bool,u.bool,u.bool,u.bool,u.bool,u.func,u.func,u.string,u.bool,u.bool,u.bool,u.string,u.string,u.object,u.number,u.bool,u.bool,u.string,u.string,u.func,u.bool,u.string,u.string,u.func,u.string,u.object,u.oneOfType([u.number,u.string]);var n0;V.h4(n0||(n0=P([`
  .close {
    height: 10px;
    width: 10px;
    margin-right: 10px;
    &:focus,
    &:hover {
      outline: none;
      border: none;
    }
  }
`])));u.node,u.string,u.string,u.oneOfType([u.func,u.string]),u.func;u.node,u.string;u.node,u.string;var r0;V.nav(r0||(r0=P([""])));u.string,u.string,u.bool,u.bool,u.oneOfType([u.bool,u.string]),u.string,u.bool,u.bool,u.number,u.string,u.oneOfType([u.func,u.string]),u.bool;var o0;V.ul(o0||(o0=P([""])));u.node,u.string,u.bool,u.bool,u.oneOfType([u.func,u.string]);var a0;V(hl)(a0||(a0=P([""])));u.string,u.string;var i0;V.li(i0||(i0=P([""])));u.bool,u.node,u.string,u.oneOfType([u.func,u.string]);u.bool,u.node,u.string,u.bool,u.bool,u.string;var s0;V.button(s0||(s0=P([""])));u.node,u.string,u.string,u.bool,u.bool,u.oneOfType([u.func,u.string]),u.oneOf(["reset","submit","button"]);var l0,u0;V.div(l0||(l0=P([`
  width: 100%;
  background: `,`;
  border-radius: 20px;
  .progress-bar {
    `,`
    border-radius: 20px;
  }
`])),function(e){return e.colors==="primary"?"#3e98c728":e.colors==="secondary"?"#7356BF28":e.colors==="danger"?"#E1190028":e.colors==="warning"?"#66512C28":e.colors==="info"?"#17A2B828":e.colors==="success"?"#05944F28":"#00000028"},Xt);V.div(u0||(u0=P([`
  display: block;
  width: 100%;
  .progress-text {
    display: flex;
    width: 100%;
    justify-content: center;
    color: `,`;
  }
`])),function(e){return e.colors==="primary"?"#3e98c7":e.colors==="secondary"?"#7356BF":e.colors==="danger"?"#E11900":e.colors==="warning"?"#66512C":e.colors==="info"?"#17A2B8":e.colors==="success"?"#05944F":"#000000"});u.string,u.node,u.string,u.oneOf(["primary","secondary","success","danger","warning","info","dark"]),u.number,u.number,u.number,u.number,u.object;var c0;V.div(c0||(c0=P([`
  &.popover {
    width: auto;
    background-color: white;
    color: #97999b;
    text-align: center;
    display: inline-block;
    border-radius: 3px;
    position: absolute;
    font-size: 0.83em;
    font-weight: normal;
    border: 1px rgb(0, 0, 0) solid;
    z-index: 10;
    max-width: 274px;
    text-align: start;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    opacity: 0;
    transition: opacity 0.3s, visibility 0.3s;
    visibility: hidden;
  }

  &.show.popover {
    z-index: 999;
    opacity: 1;
    visibility: visible;
  }

  .popover-body {
    color: #6c6e71;
  }

  &.popover .popover_arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 6px;
    color: transparent;
  }

  .popover[x-placement^='top'] {
    margin-bottom: 15px;
  }

  .popover[x-placement^='top'] .popover_arrow {
    border-width: 8px 8px 0 8px;
    border-color: #d6d6d6 transparent transparent transparent;
    bottom: -8px;
    margin-bottom: 0;
  }

  .popover[x-placement^='top'] .popover_arrow::before {
    content: '';
    display: inline-block;
    position: absolute;
    left: -8px;
    bottom: 1.5px;
    border: solid;
    border-width: 8px 8px 0 8px;
    border-color: white transparent transparent transparent;
  }

  .popover[x-placement^='bottom'] {
    margin-top: 15px;
  }

  .popover[x-placement^='bottom'] .popover_arrow {
    border-width: 0 8px 8px 8px;
    border-color: transparent transparent #d6d6d6 transparent;
    top: -8px;
    margin-top: 0;
  }

  .popover[x-placement^='bottom'] .popover_arrow::before {
    content: '';
    display: inline-block;
    position: absolute;
    left: -8px;
    top: 1.45px;
    border: solid;
    border-width: 0 8px 8px 8px;
    border-color: transparent transparent white transparent;
  }

  .popover[x-placement^='right'] {
    margin-left: 15px;
  }

  .popover[x-placement^='right'] .popover_arrow {
    border-width: 8px 8px 8px 0;
    border-color: transparent #d6d6d6 transparent transparent;
    left: -8px;
    margin-left: 0;
  }

  .popover[x-placement^='right'] .popover_arrow::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -8px;
    left: 1.45px;
    border: solid;
    border-width: 8px 8px 8px 0;
    border-color: transparent white transparent transparent;
  }

  .popover[x-placement^='left'] {
    margin-right: 15px;
  }

  .popover[x-placement^='left'] .popover_arrow {
    border-width: 8px 0 8px 8px;
    border-color: transparent transparent transparent #d6d6d6;
    right: -8px;
    margin-right: 0;
  }

  .popover[x-placement^='left'] .popover_arrow::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -8px;
    right: 1.45px;
    border: solid;
    border-width: 8px 0 8px 8px;
    border-color: transparent transparent transparent white;
  }

  &.tooltip {
    width: auto;
    background-color: black;
    color: white;
    text-align: center;
    display: inline-block;
    border-radius: 3px;
    position: absolute;
    /* font-size: 0.83em; */
    font-weight: normal;
    border: 1px rgb(0, 0, 0) solid;
    /* z-index: 200000; */
    z-index: 15;
    /* max-width: initial; */
    max-width: 274px;
    text-align: start;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    opacity: 0;
    transition: opacity 0.3s, visibility 0.3s;
    visibility: hidden;
  }

  .tooltip-inner {
    display: block;
  }

  &.show.tooltip {
    z-index: 999;

    opacity: 1;
    visibility: visible;
  }

  &.tooltip .popover_arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 6px;
    color: transparent;
  }

  &.tooltip[x-placement^='top'],
  &.show[x-placement^='top']:not(.tooltip) {
    margin-bottom: 5px;
  }

  &.tooltip[x-placement^='top'] .popover_arrow {
    border-width: 6px 6px 0 6px;
    border-color: #131313 transparent transparent transparent;
    bottom: -6px;
    margin-bottom: 0;
  }

  &.tooltip[x-placement^='top'] .popover_arrow::before {
    content: '';
    display: inline-block;
    position: absolute;
    left: -6px;
    bottom: 1.5px;
    border: solid;
    border-width: 6px 6px 0 6px;
    border-color: black transparent transparent transparent;
  }

  &.tooltip[x-placement^='bottom'],
  &.show[x-placement^='bottom']:not(.tooltip) {
    margin-top: 5px;
  }

  &.tooltip[x-placement^='bottom'] .popover_arrow {
    border-width: 0 6px 6px 6px;
    border-color: transparent transparent #131313 transparent;
    top: -6px;
    margin-top: 0;
  }

  &.tooltip[x-placement^='bottom'] .popover_arrow::before {
    content: '';
    display: inline-block;
    position: absolute;
    left: -6px;
    top: 1.45px;
    border: solid;
    border-width: 0 6px 6px 6px;
    border-color: transparent transparent black transparent;
  }

  &.tooltip[x-placement^='right'],
  &.show[x-placement^='right']:not(.tooltip) {
    margin-left: 5px;
  }

  &.tooltip[x-placement^='right'] .popover_arrow {
    border-width: 6px 6px 6px 0;
    border-color: transparent #131313 transparent transparent;
    left: -6px;
    margin-left: 0;
  }

  &.tooltip[x-placement^='right'] .popover_arrow::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -6px;
    left: 1.45px;
    border: solid;
    border-width: 6px 6px 6px 0;
    border-color: transparent black transparent transparent;
  }

  &.tooltip[x-placement^='left'],
  &.show[x-placement^='left']:not(.tooltip) {
    margin-right: 5px;
  }

  &.tooltip[x-placement^='left'] .popover_arrow {
    border-width: 6px 0 6px 6px;
    border-color: transparent transparent transparent #131313;
    right: -6px;
    margin-right: 0;
  }

  &.tooltip[x-placement^='left'] .popover_arrow::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -6px;
    right: 1.45px;
    border: solid;
    border-width: 6px 0 6px 6px;
    border-color: transparent transparent transparent black;
  }
`])));u.node,u.bool,u.bool,u.bool,u.string,u.bool,u.bool,u.object,u.string,u.bool,u.bool,u.objectOf(u.string),u.string;u.string,u.arrayOf(u.shape({choosed:u.bool,icon:u.string,tooltip:u.string})),u.bool,u.string,u.oneOfType([u.bool,u.arrayOf(u.string)]),u.func,u.string,u.bool,u.bool,u.string,u.func,u.string;var d0;V.div(d0||(d0=P([""])));u.bool,u.bool,u.bool,u.bool,u.string,u.bool,u.bool,u.bool,u.oneOfType([u.func,u.string]),u.bool;var f0;V.select(f0||(f0=P([""])));u.array,u.string;var p0,m0,h0,sM=V.div(p0||(p0=P([`
  background: `,`;
  color: `,`;
  height: 100%;
  width: `,`;
  min-width: `,`;
  text-align: left;
  transition: width, left, right, 0.3s;
  position: relative;
  z-index: 1009;

  &.toggled {
    width: `,`;
    min-width: `,`;
  }
`])),function(e){return e.backgroundColor},function(e){return e.textColor},function(e){var t=e.maxWidth;return t},function(e){var t=e.maxWidth;return t},function(e){var t=e.minWidth;return t},function(e){var t=e.minWidth;return t}),lM=V.div(m0||(m0=P([`
  height: 100%;
  position: relative;
  z-index: 101;
`]))),uM=V.div(h0||(h0=P([`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 101;
`]))),cM=["className","minWidth","maxWidth","children","toggled","textColor","backgroundColor","breakpoint"],ps=g.createContext({toggled:!1,handleToggleSidebar:function(){},textColor:"",backgroundColor:"",breakpoint:0}),sc=g.forwardRef(function(e,t){var n=e.className,r=e.minWidth,o=e.maxWidth,a=e.children,i=e.toggled,s=e.textColor,l=e.backgroundColor,c=e.breakpoint,d=ko(e,cM),f=function(v){y(dp({},h,{toggled:!v}))},p=g.useState({toggled:i,handleToggleSidebar:f,textColor:s,backgroundColor:l,breakpoint:c}),h=p[0],y=p[1];g.useEffect(function(){f(!i)},[i]);var w=t||q.createRef();return q.createElement(wo,{theme:Zn},q.createElement(ps.Provider,{value:h},q.createElement(sM,Object.assign({},d,{ref:w,className:X("pro-sidebar",n,{toggled:h.toggled}),textColor:s,backgroundColor:l,minWidth:r,maxWidth:o}),q.createElement(lM,null,q.createElement(uM,null,a)))))});sc.propTypes={className:u.string,children:u.any,textColor:u.string,backgroundColor:u.string,breakpoint:u.number,toggled:u.bool};sc.defaultProps={textColor:"#ffffff",backgroundColor:Zn.colors.dark900,breakpoint:720,toggled:!1,minWidth:"80px",maxWidth:"270px",children:null};sc.displayName="Sidebar";var g0,dM=V.div(g0||(g0=P([`
    flex-grow: 1;
    padding-top: 15px;
`]))),fM=["children","className"],XS=g.forwardRef(function(e,t){var n=e.children,r=e.className,o=ko(e,fM),a=g.useContext(ps),i=a.handleToggleSidebar,s=a.breakpoint,l=g.useState(0),c=l[0],d=l[1],f=s||720;g.useEffect(function(){var h=function(){return d(window.innerWidth)};return window.addEventListener("resize",h),c<f&&i(!1),c>f&&i(!0),function(){window.removeEventListener("resize",h)}},[i,c,f]);var p=t||q.createRef();return q.createElement(wo,{theme:Zn},q.createElement(dM,Object.assign({},o,{ref:p,className:X("pro-sidebar-content",r)}),n))});XS.propTypes={className:u.string,children:u.any};var pM=["children","className"],QS=g.forwardRef(function(e,t){var n=e.children,r=e.className,o=ko(e,pM),a=t||q.createRef();return q.createElement(wo,{theme:Zn},q.createElement("div",Object.assign({},o,{ref:a,className:X("pro-sidebar-footer",r)}),n))});QS.propTypes={className:u.string,children:u.any};var v0,mM=V.div(v0||(v0=P([`
  border-bottom: 1px solid hsla(0, 0%, 67.8%, 0.2);

  .head-div {
    padding: 24px 30px;
    font-weight: bold;
    font-size: 17px;
    letter-spacing: 1px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    white-space: nowrap;

    .icon-suffix {
      cursor: pointer;
    }

    &.toggled {
      justify-content: center;
      .head-text {
        display: none;
      }
      .icon-suffix {
        margin: 0px;
      }
    }
  }
`]))),hM=["children","prefix","className"],JS=g.forwardRef(function(e,t){var n=e.children,r=e.prefix,o=e.className,a=ko(e,hM),i=t||q.createRef(),s=g.useContext(ps),l=s.toggled,c=s.handleToggleSidebar;return q.createElement(wo,{theme:Zn},q.createElement(mM,Object.assign({},a,{ref:i,className:X(o)}),q.createElement("div",{className:X("head-div",{toggled:l})},q.createElement("span",{className:"head-text"},n),r?q.createElement("span",{className:"icon-suffix",onClick:function(){return c(l)}},r):null)))});JS.propTypes={className:u.string,children:u.any,prefix:u.any};var y0,b0,gM=V.nav(y0||(y0=P([`
    padding-top: 10px;
    padding-bottom: 10px;
`]))),vM=V.ul(b0||(b0=P([`
    list-style-type: none;
    padding: 0;
    margin: 0;

    a {
        color: `,`;
        text-decoration:none;
    }
    .activeClicked {
      >li{
            background: `,`;
            color: `,`;
        }
    }
    
`])),function(e){return e.textColor},function(e){return e.textColor},function(e){return e.backgroundColor}),yM=["children","className","popperArrow"],ZS=g.forwardRef(function(e,t){var n=e.children,r=e.className,o=e.popperArrow,a=ko(e,yM),i=t||q.createRef(),s=g.useContext(ps),l=s.textColor,c=s.backgroundColor;return q.createElement(wo,{theme:Zn},q.createElement(gM,Object.assign({},a,{ref:i,className:X("pro-menu",r)}),q.createElement(vM,{textColor:l,backgroundColor:c},q.Children.map(n,function(d){return q.cloneElement(d,{firstchild:1,popperarrow:o===!0?1:0})}))))});ZS.propTypes={className:u.string,children:u.any,popperArrow:u.bool};var w0,x0,bM=V.div(w0||(w0=P([`
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 2px 8px 15px;
  height: 45px;
  cursor: pointer;
  outline: none;

  .side-icon {
    margin-right: 10px;
    width: 30px;
  }
  &.active {
    background: white;
    color: black;
  }

  .item-content {
    flex-grow: 1;
    flex-shrink: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: `,`;
  }
  .suffix-wrapper {
    margin-right: 23px;
  }
  &.toggled {
    justify-content: center;
    .item-content {
      width: 0px;
      display: none;
    }
    .suffix-wrapper {
      opacity: 0;
      display: none;
    }
  }
`])),function(e){var t=e.fontSize;return t}),wM=V.li(x0||(x0=P([`
  list-style: none;
  margin: 10px 15px;
  &.toggled {
    position: relative;
    margin-top: 0px;
    margin-bottom: 0px;
    &::before {
      content: "";
      display: inline-block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      cursor: pointer;
    }
  }
`]))),xM=["children","className","icon","iconSize","iconType","iconClassName","textFontSize","active","suffix","firstChild","popperArrow"],vi=g.forwardRef(function(e,t){var n=e.children,r=e.className,o=e.icon,a=e.iconSize,i=e.iconType,s=e.iconClassName,l=e.textFontSize,c=e.active,d=e.suffix,f=ko(e,xM),p=t||q.createRef(),h=g.useContext(ps),y=h.toggled;return q.createElement(wo,{theme:Zn},q.createElement(wM,Object.assign({},f,{ref:p,className:X(r,{active:c},{toggled:y})}),q.createElement(bM,{className:X({active:c},{toggled:y}),tabIndex:0,fontSize:l,role:"button",toggled:y},o&&q.createElement(yh,{icon:o,size:a,className:X(s,"side-icon",i&&"fa-"+i)}),q.createElement("span",{className:"item-content"},n),d?q.createElement("span",{className:"suffix-wrapper"},d):null)))});vi.propTypes={children:u.any,className:u.string,icon:u.string,iconSize:u.string,iconClassName:u.string,iconType:u.string,active:u.bool,suffix:u.any,firstChild:u.number,popperArrow:u.number,textFontSize:u.string};vi.defaultProps={iconSize:"md"};u.oneOfType([u.number,u.string]),u.func,u.func,u.number,u.number,u.number,u.bool,u.oneOf(["sm","lg"]),u.oneOf(["primary","secondary","success","danger","warning","info","dark","light"]),u.object,u.oneOf(["auto","on","off"]),u.oneOf(["top","bottom"]),u.func,u.object,u.object,u.string,u.string;u.string,u.string,u.bool,u.bool,u.number,u.number,u.string;var _0,k0,S0,C0,E0,O0,T0,_M=Xm(_0||(_0=P([`
 0% { transform: rotate(0deg) }
 100% { transform: rotate(360deg) }`]))),kM=Xm(k0||(k0=P([`
 0% { stroke: #4285f4; }
 25%{stroke: #de3e35;} 50%{stroke: #f7c223} 75%{stroke: #1b9a59}
 100% {  stroke: #4285f4}`]))),R0=Xm(S0||(S0=P([`
 0% { stroke-dashoffset: 187; }
  50%{stroke-dashoffset: 46.75;
transform: rotate(135deg)} 
 100% {   stroke-dashoffset: 187;
transform: rotate(450deg)}`])));V.svg(C0||(C0=P([`
  stroke-width: 5;
  animation-name: `,`;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
`])),_M);V.circle(E0||(E0=P([`
  stroke: `,`;

  stroke-dasharray: 187;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: `,`;
`])),function(e){return e.warning?"#FFE975":e.success?"#05944F":e.secondary?"#7356BF":e.dark?"#000000":e.danger?"#E11900":e.info?"#17A2B8":"#276EF1"},function(e){return e.multicolor?Z(O0||(O0=P([`
          `," 1.4s ease-in-out infinite, ",` 5.6s ease-in-out infinite
        `])),R0,kM):Z(T0||(T0=P([`
          `,` 1.4s ease-in-out infinite
        `])),R0)});u.string,u.string,u.string,u.bool,u.bool,u.bool,u.bool,u.bool,u.bool;var j0;V.div(j0||(j0=P([`
  .switch-container {
  }

  input[type="checkbox"].switch {
    position:absolute;
    opacity: 0;
  }

  input[type="checkbox"].switch + div {
    vertical-align: middle;
    width: 40px;
    height: 20px;
    border-radius: 100px;
    background-color: #333;
    cursor: pointer;
  }

  input[type="checkbox"].switch:checked + div {
    background-color: #80ff80;
  }

  input[type="checkbox"].switch + div > div {
    margin:0;
    width: 50%;
    height: 100%;
    background: #f2f2f2;
    border-radius: inherit;
    transition:margin 0.3s linear;
  }

  input[type="checkbox"].switch:checked + div > div {
    margin-left:auto;
  }
`])));u.bool,u.string;u.node,u.string,u.arrayOf(u.object),u.bool;var $0,P0,A0,I0;V.div($0||($0=P([`
  position: relative;
  overflow: hidden;
  cursor: default;
  `,`
  .mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-attachment: fixed;
  }
  img,
  video {
    position: relative;
    display: block;
  }
  .video.video-intro {
    top: 50%;
    left: 50%;
    z-index: -100;
    width: auto;
    min-width: 100%;
    height: auto;
    min-height: 100%;
    transition: 1s opacity;
    transform: translateX(-50%) translateY(-50%);
  }
  border-radius: `,`;
  `,`
`])),function(e){return e.zoom?Z(P0||(P0=P([`
          img,
          video {
            transition: all 0.2s linear;
          }
          &:hover img,
          &:hover video {
            transform: scale(1.1);
          }
        `]))):Z(A0||(A0=P([""])))},function(e){return e.rounded?"0.25rem !important":"0"},function(e){return e.hover?Z(I0||(I0=P([`
          .mask {
            opacity: 0;
            transition: all 0.4s ease-in-out;
            &:hover {
              opacity: 1;
            }
          }
        `]))):null});u.node,u.string,u.bool,u.bool,u.bool,u.string,u.string;var L0,N0,D0;V.div(L0||(L0=P([`
  display: flex;
  position: relative;
  width: 100%;
  padding: 10px;
  `,`
  `,`

  .steps {
    display: table-cell;
    text-align: center;
    position: relative;
  }
`])),function(e){return e.direction==="vertical"&&Z(N0||(N0=P([`
      .step-row-2 {
        height: 100%;
        flex-direction: row;
        .step-content {
          display: flex;
          -ms-flex-align: center;
          flex-direction: column;
          align-items: center;
          height: 100%;
          justify-content: space-between !important;
        }
      }
    `])))},function(e){return e.direction==="horizontal"&&Z(D0||(D0=P([`
      flex-direction: column;
      .step-row-2 {
        flex-direction: column;
        margin-top: 22px;
        overflow-x: hidden;
        .step-content {
          overflow: auto;
          min-width: 500px;
          justify-content: space-between !important;
          display: flex !important;
          width: 100%;
        }
        &-webkit-scrollbar {
          height: 8px;
        }
        &-webkit-scrollbar-thumb {
          background: #ccc;
        }
        &-webkit-scrollbar-track {
        }
      }
    `])))});var M0,z0,F0;V.div(M0||(M0=P([`
  display: flex;
  `,`
  `,`
    .content-container {
    width: 100%;
    padding: 15px 10px;
  }
  .content-transition {
    width: 100%;
  }
  .fade-in {
    animation: fadeIn 0.5s;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
      margin-top: -20px;
    }
    100% {
      opacity: 1;
      margin-top: 0px;
    }
  }
`])),function(e){var t=e.direction;return t==="vertical"&&Z(z0||(z0=P([`
      width: calc(100% - 150px);
    `])))},function(e){var t=e.direction;return t==="horizontal"&&Z(F0||(F0=P([`
      width: 100%;
    `])))});g.createContext({});Zn.colors.dark900;u.string.isRequired,u.number.isRequired,u.array.isRequired,u.number,u.string,u.func,u.bool,u.bool;var B0,U0,H0,W0,V0,G0;V.div(B0||(B0=P([`
  display: flex;
  `,`
  `,`
  `,`;
  `,`;
  `,`
`])),function(e){var t=e.direction,n=e.size,r=e.showIndex,o=e.showTitle;return t==="vertical"&&Z(U0||(U0=P([`
      width: `,`px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
      margin-bottom: `,`;
      span {
        margin: 2px 0;
        border-radius: 6px;
        transition: 0.4;
      }
      span:nth-child(1) {
        width: 6px;
        height: 6px;
      }
      span:nth-child(2) {
        width: 6px;
        height: 50px;
      }
    `])),n,!o&&!r&&"10px")},function(e){var t=e.direction;return t==="horizontal"&&Z(H0||(H0=P([`
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-left: 10px;
      span {
        margin: 0 2px;
        border-radius: 6px;
        transition: 0.4;
      }
      span:nth-child(1) {
        width: 6px;
        height: 6px;
      }
      span:nth-child(2) {
        width: 50px;
        height: 6px;
      }
    `])))},function(e){var t=e.status;return t==="prev"&&Z(W0||(W0=P([`
      span:nth-child(1) {
        background-color: #666666;
      }
      span:nth-child(2) {
        background-color: #666666;
      }
    `])))},function(e){var t=e.status;return t==="active"&&Z(V0||(V0=P([`
      span:nth-child(1) {
        background-color: #666666;
      }
      span:nth-child(2) {
        background-color: #cccccc;
      }
    `])))},function(e){var t=e.status;return t==="next"&&Z(G0||(G0=P([`
      span:nth-child(1) {
        background-color: #cccccc;
      }
      span:nth-child(2) {
        background-color: #cccccc;
      }
    `])))});var q0,K0,Y0,X0,Q0,J0,Z0,ew,tw,nw,rw;V.div(q0||(q0=P([`
  display: flex;
  `,`
  `,`
  .step-title {
    display: flex;
    align-items: center;
    margin-left: 5px;
    padding: 10px 0;
    `,`;
    `,`;
    `,`
    .step-number {
      font-size: 30px;
      font-weight: 600;
    }
    .step-text {
      font-size: 14px;
      line-height: 18px;
      font-weight: 600;
      margin-left: 10px;
      text-align: start;
      max-width: 150px;
      word-wrap: break-word;
    }
  }
  .step-indicators {
    display: flex;
    width: fit-content;
    `,`
    `,`
  }
  .default-node {
    cursor: pointer;
    width: `,`;
    height: `,`;
    color: #000;
    font-size: 16px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    transition: width 0.3;
    align-items: center;
    * {
      position: relative;
    }
    `,`;
    `,`;
    `,`
  }
  .__react_component_tooltip {
    background: `,`;
    font-size: 10px;
    * {
      font-size: inherit;
    }
    padding: 2px 5.5px;
    border-radius: 4px;
    &:before,
    &:after {
      display: none !important;
    }
  }
`])),function(e){var t=e.direction;return t==="horizontal"&&Z(K0||(K0=P([`
      flex-direction: column;
    `])))},function(e){var t=e.direction;return t==="vertical"&&Z(Y0||(Y0=P([`
      min-width: 150px;
      max-width: 150px;
    `])))},function(e){var t=e.status;return t==="prev"&&Z(X0||(X0=P([`
        opacity: 1;
      `])))},function(e){var t=e.status;return t==="active"&&Z(Q0||(Q0=P([`
        opacity: 1;
      `])))},function(e){var t=e.status;return t==="next"&&Z(J0||(J0=P([`
        opacity: 0.6;
      `])))},function(e){var t=e.direction;return t==="horizontal"&&Z(Z0||(Z0=P([`
        flex-direction: row;
      `])))},function(e){var t=e.direction;return t==="vertical"&&Z(ew||(ew=P([`
        flex-direction: column;
      `])))},function(e){var t=e.size;return t+"px"},function(e){var t=e.size;return t+"px"},function(e){var t=e.status;return t==="prev"&&Z(tw||(tw=P([`
        background-color: #333333;
        color: #fff;
        border: 2px solid #cccccc;
      `])))},function(e){var t=e.status;return t==="active"&&Z(nw||(nw=P([`
        background-color: #fff;
        border: 2px solid #333333;
        position: relative;
      `])))},function(e){var t=e.status;return t==="next"&&Z(rw||(rw=P([`
        color: #fff;
        background-color: #9f9d9d;
      `])))},function(e){return e.tooltipBackground});q.createElement("div",null,"Hello");u.string,u.string,u.bool,u.bool,u.bool,u.number,u.node;const SM="modulepreload",CM=function(e){return"/BudgetTracker/"+e},ow={},va=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),s=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));o=Promise.allSettled(n.map(l=>{if(l=CM(l),l in ow)return;ow[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":SM,c||(f.as="script"),f.crossOrigin="",f.href=l,s&&f.setAttribute("nonce",s),document.head.appendChild(f),c)return new Promise((p,h)=>{f.addEventListener("load",p),f.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${l}`)))})}))}function a(i){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i}return o.then(i=>{for(const s of i||[])s.status==="rejected"&&a(s.reason);return t().catch(a)})},EM=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...n)=>va(async()=>{const{default:r}=await Promise.resolve().then(()=>Ra);return{default:r}},void 0).then(({default:r})=>r(...n)):t=fetch,(...n)=>t(...n)};class bh extends Error{constructor(t,n="FunctionsError",r){super(t),this.name=n,this.context=r}}class OM extends bh{constructor(t){super("Failed to send a request to the Edge Function","FunctionsFetchError",t)}}class TM extends bh{constructor(t){super("Relay Error invoking the Edge Function","FunctionsRelayError",t)}}class RM extends bh{constructor(t){super("Edge Function returned a non-2xx status code","FunctionsHttpError",t)}}var fp;(function(e){e.Any="any",e.ApNortheast1="ap-northeast-1",e.ApNortheast2="ap-northeast-2",e.ApSouth1="ap-south-1",e.ApSoutheast1="ap-southeast-1",e.ApSoutheast2="ap-southeast-2",e.CaCentral1="ca-central-1",e.EuCentral1="eu-central-1",e.EuWest1="eu-west-1",e.EuWest2="eu-west-2",e.EuWest3="eu-west-3",e.SaEast1="sa-east-1",e.UsEast1="us-east-1",e.UsWest1="us-west-1",e.UsWest2="us-west-2"})(fp||(fp={}));var jM=function(e,t,n,r){function o(a){return a instanceof n?a:new n(function(i){i(a)})}return new(n||(n=Promise))(function(a,i){function s(d){try{c(r.next(d))}catch(f){i(f)}}function l(d){try{c(r.throw(d))}catch(f){i(f)}}function c(d){d.done?a(d.value):o(d.value).then(s,l)}c((r=r.apply(e,t||[])).next())})};class $M{constructor(t,{headers:n={},customFetch:r,region:o=fp.Any}={}){this.url=t,this.headers=n,this.region=o,this.fetch=EM(r)}setAuth(t){this.headers.Authorization=`Bearer ${t}`}invoke(t,n={}){var r;return jM(this,void 0,void 0,function*(){try{const{headers:o,method:a,body:i}=n;let s={},{region:l}=n;l||(l=this.region),l&&l!=="any"&&(s["x-region"]=l);let c;i&&(o&&!Object.prototype.hasOwnProperty.call(o,"Content-Type")||!o)&&(typeof Blob<"u"&&i instanceof Blob||i instanceof ArrayBuffer?(s["Content-Type"]="application/octet-stream",c=i):typeof i=="string"?(s["Content-Type"]="text/plain",c=i):typeof FormData<"u"&&i instanceof FormData?c=i:(s["Content-Type"]="application/json",c=JSON.stringify(i)));const d=yield this.fetch(`${this.url}/${t}`,{method:a||"POST",headers:Object.assign(Object.assign(Object.assign({},s),this.headers),o),body:c}).catch(y=>{throw new OM(y)}),f=d.headers.get("x-relay-error");if(f&&f==="true")throw new TM(d);if(!d.ok)throw new RM(d);let p=((r=d.headers.get("Content-Type"))!==null&&r!==void 0?r:"text/plain").split(";")[0].trim(),h;return p==="application/json"?h=yield d.json():p==="application/octet-stream"?h=yield d.blob():p==="text/event-stream"?h=d:p==="multipart/form-data"?h=yield d.formData():h=yield d.text(),{data:h,error:null}}catch(o){return{data:null,error:o}}})}}var bt={},wh={},lc={},ms={},uc={},cc={},PM=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")},ya=PM();const AM=ya.fetch,eC=ya.fetch.bind(ya),tC=ya.Headers,IM=ya.Request,LM=ya.Response,Ra=Object.freeze(Object.defineProperty({__proto__:null,Headers:tC,Request:IM,Response:LM,default:eC,fetch:AM},Symbol.toStringTag,{value:"Module"})),NM=wp(Ra);var dc={};Object.defineProperty(dc,"__esModule",{value:!0});let DM=class extends Error{constructor(t){super(t.message),this.name="PostgrestError",this.details=t.details,this.hint=t.hint,this.code=t.code}};dc.default=DM;var nC=st&&st.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(cc,"__esModule",{value:!0});const MM=nC(NM),zM=nC(dc);let FM=class{constructor(t){this.shouldThrowOnError=!1,this.method=t.method,this.url=t.url,this.headers=t.headers,this.schema=t.schema,this.body=t.body,this.shouldThrowOnError=t.shouldThrowOnError,this.signal=t.signal,this.isMaybeSingle=t.isMaybeSingle,t.fetch?this.fetch=t.fetch:typeof fetch>"u"?this.fetch=MM.default:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(t,n){return this.headers=Object.assign({},this.headers),this.headers[t]=n,this}then(t,n){this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers["Accept-Profile"]=this.schema:this.headers["Content-Profile"]=this.schema),this.method!=="GET"&&this.method!=="HEAD"&&(this.headers["Content-Type"]="application/json");const r=this.fetch;let o=r(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async a=>{var i,s,l;let c=null,d=null,f=null,p=a.status,h=a.statusText;if(a.ok){if(this.method!=="HEAD"){const v=await a.text();v===""||(this.headers.Accept==="text/csv"||this.headers.Accept&&this.headers.Accept.includes("application/vnd.pgrst.plan+text")?d=v:d=JSON.parse(v))}const w=(i=this.headers.Prefer)===null||i===void 0?void 0:i.match(/count=(exact|planned|estimated)/),x=(s=a.headers.get("content-range"))===null||s===void 0?void 0:s.split("/");w&&x&&x.length>1&&(f=parseInt(x[1])),this.isMaybeSingle&&this.method==="GET"&&Array.isArray(d)&&(d.length>1?(c={code:"PGRST116",details:`Results contain ${d.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},d=null,f=null,p=406,h="Not Acceptable"):d.length===1?d=d[0]:d=null)}else{const w=await a.text();try{c=JSON.parse(w),Array.isArray(c)&&a.status===404&&(d=[],c=null,p=200,h="OK")}catch{a.status===404&&w===""?(p=204,h="No Content"):c={message:w}}if(c&&this.isMaybeSingle&&(!((l=c==null?void 0:c.details)===null||l===void 0)&&l.includes("0 rows"))&&(c=null,p=200,h="OK"),c&&this.shouldThrowOnError)throw new zM.default(c)}return{error:c,data:d,count:f,status:p,statusText:h}});return this.shouldThrowOnError||(o=o.catch(a=>{var i,s,l;return{error:{message:`${(i=a==null?void 0:a.name)!==null&&i!==void 0?i:"FetchError"}: ${a==null?void 0:a.message}`,details:`${(s=a==null?void 0:a.stack)!==null&&s!==void 0?s:""}`,hint:"",code:`${(l=a==null?void 0:a.code)!==null&&l!==void 0?l:""}`},data:null,count:null,status:0,statusText:""}})),o.then(t,n)}};cc.default=FM;var BM=st&&st.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(uc,"__esModule",{value:!0});const UM=BM(cc);let HM=class extends UM.default{select(t){let n=!1;const r=(t??"*").split("").map(o=>/\s/.test(o)&&!n?"":(o==='"'&&(n=!n),o)).join("");return this.url.searchParams.set("select",r),this.headers.Prefer&&(this.headers.Prefer+=","),this.headers.Prefer+="return=representation",this}order(t,{ascending:n=!0,nullsFirst:r,foreignTable:o,referencedTable:a=o}={}){const i=a?`${a}.order`:"order",s=this.url.searchParams.get(i);return this.url.searchParams.set(i,`${s?`${s},`:""}${t}.${n?"asc":"desc"}${r===void 0?"":r?".nullsfirst":".nullslast"}`),this}limit(t,{foreignTable:n,referencedTable:r=n}={}){const o=typeof r>"u"?"limit":`${r}.limit`;return this.url.searchParams.set(o,`${t}`),this}range(t,n,{foreignTable:r,referencedTable:o=r}={}){const a=typeof o>"u"?"offset":`${o}.offset`,i=typeof o>"u"?"limit":`${o}.limit`;return this.url.searchParams.set(a,`${t}`),this.url.searchParams.set(i,`${n-t+1}`),this}abortSignal(t){return this.signal=t,this}single(){return this.headers.Accept="application/vnd.pgrst.object+json",this}maybeSingle(){return this.method==="GET"?this.headers.Accept="application/json":this.headers.Accept="application/vnd.pgrst.object+json",this.isMaybeSingle=!0,this}csv(){return this.headers.Accept="text/csv",this}geojson(){return this.headers.Accept="application/geo+json",this}explain({analyze:t=!1,verbose:n=!1,settings:r=!1,buffers:o=!1,wal:a=!1,format:i="text"}={}){var s;const l=[t?"analyze":null,n?"verbose":null,r?"settings":null,o?"buffers":null,a?"wal":null].filter(Boolean).join("|"),c=(s=this.headers.Accept)!==null&&s!==void 0?s:"application/json";return this.headers.Accept=`application/vnd.pgrst.plan+${i}; for="${c}"; options=${l};`,i==="json"?this:this}rollback(){var t;return((t=this.headers.Prefer)!==null&&t!==void 0?t:"").trim().length>0?this.headers.Prefer+=",tx=rollback":this.headers.Prefer="tx=rollback",this}returns(){return this}};uc.default=HM;var WM=st&&st.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ms,"__esModule",{value:!0});const VM=WM(uc);let GM=class extends VM.default{eq(t,n){return this.url.searchParams.append(t,`eq.${n}`),this}neq(t,n){return this.url.searchParams.append(t,`neq.${n}`),this}gt(t,n){return this.url.searchParams.append(t,`gt.${n}`),this}gte(t,n){return this.url.searchParams.append(t,`gte.${n}`),this}lt(t,n){return this.url.searchParams.append(t,`lt.${n}`),this}lte(t,n){return this.url.searchParams.append(t,`lte.${n}`),this}like(t,n){return this.url.searchParams.append(t,`like.${n}`),this}likeAllOf(t,n){return this.url.searchParams.append(t,`like(all).{${n.join(",")}}`),this}likeAnyOf(t,n){return this.url.searchParams.append(t,`like(any).{${n.join(",")}}`),this}ilike(t,n){return this.url.searchParams.append(t,`ilike.${n}`),this}ilikeAllOf(t,n){return this.url.searchParams.append(t,`ilike(all).{${n.join(",")}}`),this}ilikeAnyOf(t,n){return this.url.searchParams.append(t,`ilike(any).{${n.join(",")}}`),this}is(t,n){return this.url.searchParams.append(t,`is.${n}`),this}in(t,n){const r=Array.from(new Set(n)).map(o=>typeof o=="string"&&new RegExp("[,()]").test(o)?`"${o}"`:`${o}`).join(",");return this.url.searchParams.append(t,`in.(${r})`),this}contains(t,n){return typeof n=="string"?this.url.searchParams.append(t,`cs.${n}`):Array.isArray(n)?this.url.searchParams.append(t,`cs.{${n.join(",")}}`):this.url.searchParams.append(t,`cs.${JSON.stringify(n)}`),this}containedBy(t,n){return typeof n=="string"?this.url.searchParams.append(t,`cd.${n}`):Array.isArray(n)?this.url.searchParams.append(t,`cd.{${n.join(",")}}`):this.url.searchParams.append(t,`cd.${JSON.stringify(n)}`),this}rangeGt(t,n){return this.url.searchParams.append(t,`sr.${n}`),this}rangeGte(t,n){return this.url.searchParams.append(t,`nxl.${n}`),this}rangeLt(t,n){return this.url.searchParams.append(t,`sl.${n}`),this}rangeLte(t,n){return this.url.searchParams.append(t,`nxr.${n}`),this}rangeAdjacent(t,n){return this.url.searchParams.append(t,`adj.${n}`),this}overlaps(t,n){return typeof n=="string"?this.url.searchParams.append(t,`ov.${n}`):this.url.searchParams.append(t,`ov.{${n.join(",")}}`),this}textSearch(t,n,{config:r,type:o}={}){let a="";o==="plain"?a="pl":o==="phrase"?a="ph":o==="websearch"&&(a="w");const i=r===void 0?"":`(${r})`;return this.url.searchParams.append(t,`${a}fts${i}.${n}`),this}match(t){return Object.entries(t).forEach(([n,r])=>{this.url.searchParams.append(n,`eq.${r}`)}),this}not(t,n,r){return this.url.searchParams.append(t,`not.${n}.${r}`),this}or(t,{foreignTable:n,referencedTable:r=n}={}){const o=r?`${r}.or`:"or";return this.url.searchParams.append(o,`(${t})`),this}filter(t,n,r){return this.url.searchParams.append(t,`${n}.${r}`),this}};ms.default=GM;var qM=st&&st.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(lc,"__esModule",{value:!0});const Va=qM(ms);let KM=class{constructor(t,{headers:n={},schema:r,fetch:o}){this.url=t,this.headers=n,this.schema=r,this.fetch=o}select(t,{head:n=!1,count:r}={}){const o=n?"HEAD":"GET";let a=!1;const i=(t??"*").split("").map(s=>/\s/.test(s)&&!a?"":(s==='"'&&(a=!a),s)).join("");return this.url.searchParams.set("select",i),r&&(this.headers.Prefer=`count=${r}`),new Va.default({method:o,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}insert(t,{count:n,defaultToNull:r=!0}={}){const o="POST",a=[];if(this.headers.Prefer&&a.push(this.headers.Prefer),n&&a.push(`count=${n}`),r||a.push("missing=default"),this.headers.Prefer=a.join(","),Array.isArray(t)){const i=t.reduce((s,l)=>s.concat(Object.keys(l)),[]);if(i.length>0){const s=[...new Set(i)].map(l=>`"${l}"`);this.url.searchParams.set("columns",s.join(","))}}return new Va.default({method:o,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}upsert(t,{onConflict:n,ignoreDuplicates:r=!1,count:o,defaultToNull:a=!0}={}){const i="POST",s=[`resolution=${r?"ignore":"merge"}-duplicates`];if(n!==void 0&&this.url.searchParams.set("on_conflict",n),this.headers.Prefer&&s.push(this.headers.Prefer),o&&s.push(`count=${o}`),a||s.push("missing=default"),this.headers.Prefer=s.join(","),Array.isArray(t)){const l=t.reduce((c,d)=>c.concat(Object.keys(d)),[]);if(l.length>0){const c=[...new Set(l)].map(d=>`"${d}"`);this.url.searchParams.set("columns",c.join(","))}}return new Va.default({method:i,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}update(t,{count:n}={}){const r="PATCH",o=[];return this.headers.Prefer&&o.push(this.headers.Prefer),n&&o.push(`count=${n}`),this.headers.Prefer=o.join(","),new Va.default({method:r,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}delete({count:t}={}){const n="DELETE",r=[];return t&&r.push(`count=${t}`),this.headers.Prefer&&r.unshift(this.headers.Prefer),this.headers.Prefer=r.join(","),new Va.default({method:n,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}};lc.default=KM;var fc={},pc={};Object.defineProperty(pc,"__esModule",{value:!0});pc.version=void 0;pc.version="0.0.0-automated";Object.defineProperty(fc,"__esModule",{value:!0});fc.DEFAULT_HEADERS=void 0;const YM=pc;fc.DEFAULT_HEADERS={"X-Client-Info":`postgrest-js/${YM.version}`};var rC=st&&st.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(wh,"__esModule",{value:!0});const XM=rC(lc),QM=rC(ms),JM=fc;let ZM=class oC{constructor(t,{headers:n={},schema:r,fetch:o}={}){this.url=t,this.headers=Object.assign(Object.assign({},JM.DEFAULT_HEADERS),n),this.schemaName=r,this.fetch=o}from(t){const n=new URL(`${this.url}/${t}`);return new XM.default(n,{headers:Object.assign({},this.headers),schema:this.schemaName,fetch:this.fetch})}schema(t){return new oC(this.url,{headers:this.headers,schema:t,fetch:this.fetch})}rpc(t,n={},{head:r=!1,get:o=!1,count:a}={}){let i;const s=new URL(`${this.url}/rpc/${t}`);let l;r||o?(i=r?"HEAD":"GET",Object.entries(n).filter(([d,f])=>f!==void 0).map(([d,f])=>[d,Array.isArray(f)?`{${f.join(",")}}`:`${f}`]).forEach(([d,f])=>{s.searchParams.append(d,f)})):(i="POST",l=n);const c=Object.assign({},this.headers);return a&&(c.Prefer=`count=${a}`),new QM.default({method:i,url:s,headers:c,schema:this.schemaName,body:l,fetch:this.fetch,allowEmpty:!1})}};wh.default=ZM;var ja=st&&st.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(bt,"__esModule",{value:!0});bt.PostgrestError=bt.PostgrestBuilder=bt.PostgrestTransformBuilder=bt.PostgrestFilterBuilder=bt.PostgrestQueryBuilder=bt.PostgrestClient=void 0;const aC=ja(wh);bt.PostgrestClient=aC.default;const iC=ja(lc);bt.PostgrestQueryBuilder=iC.default;const sC=ja(ms);bt.PostgrestFilterBuilder=sC.default;const lC=ja(uc);bt.PostgrestTransformBuilder=lC.default;const uC=ja(cc);bt.PostgrestBuilder=uC.default;const cC=ja(dc);bt.PostgrestError=cC.default;var ez=bt.default={PostgrestClient:aC.default,PostgrestQueryBuilder:iC.default,PostgrestFilterBuilder:sC.default,PostgrestTransformBuilder:lC.default,PostgrestBuilder:uC.default,PostgrestError:cC.default};const{PostgrestClient:tz,PostgrestQueryBuilder:mF,PostgrestFilterBuilder:hF,PostgrestTransformBuilder:gF,PostgrestBuilder:vF,PostgrestError:yF}=ez,nz="2.11.2",rz={"X-Client-Info":`realtime-js/${nz}`},oz="1.0.0",dC=1e4,az=1e3;var ta;(function(e){e[e.connecting=0]="connecting",e[e.open=1]="open",e[e.closing=2]="closing",e[e.closed=3]="closed"})(ta||(ta={}));var Tt;(function(e){e.closed="closed",e.errored="errored",e.joined="joined",e.joining="joining",e.leaving="leaving"})(Tt||(Tt={}));var an;(function(e){e.close="phx_close",e.error="phx_error",e.join="phx_join",e.reply="phx_reply",e.leave="phx_leave",e.access_token="access_token"})(an||(an={}));var pp;(function(e){e.websocket="websocket"})(pp||(pp={}));var Qr;(function(e){e.Connecting="connecting",e.Open="open",e.Closing="closing",e.Closed="closed"})(Qr||(Qr={}));class iz{constructor(){this.HEADER_LENGTH=1}decode(t,n){return t.constructor===ArrayBuffer?n(this._binaryDecode(t)):n(typeof t=="string"?JSON.parse(t):{})}_binaryDecode(t){const n=new DataView(t),r=new TextDecoder;return this._decodeBroadcast(t,n,r)}_decodeBroadcast(t,n,r){const o=n.getUint8(1),a=n.getUint8(2);let i=this.HEADER_LENGTH+2;const s=r.decode(t.slice(i,i+o));i=i+o;const l=r.decode(t.slice(i,i+a));i=i+a;const c=JSON.parse(r.decode(t.slice(i,t.byteLength)));return{ref:null,topic:s,event:l,payload:c}}}class fC{constructor(t,n){this.callback=t,this.timerCalc=n,this.timer=void 0,this.tries=0,this.callback=t,this.timerCalc=n}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}var Ce;(function(e){e.abstime="abstime",e.bool="bool",e.date="date",e.daterange="daterange",e.float4="float4",e.float8="float8",e.int2="int2",e.int4="int4",e.int4range="int4range",e.int8="int8",e.int8range="int8range",e.json="json",e.jsonb="jsonb",e.money="money",e.numeric="numeric",e.oid="oid",e.reltime="reltime",e.text="text",e.time="time",e.timestamp="timestamp",e.timestamptz="timestamptz",e.timetz="timetz",e.tsrange="tsrange",e.tstzrange="tstzrange"})(Ce||(Ce={}));const aw=(e,t,n={})=>{var r;const o=(r=n.skipTypes)!==null&&r!==void 0?r:[];return Object.keys(t).reduce((a,i)=>(a[i]=sz(i,e,t,o),a),{})},sz=(e,t,n,r)=>{const o=t.find(s=>s.name===e),a=o==null?void 0:o.type,i=n[e];return a&&!r.includes(a)?pC(a,i):mp(i)},pC=(e,t)=>{if(e.charAt(0)==="_"){const n=e.slice(1,e.length);return dz(t,n)}switch(e){case Ce.bool:return lz(t);case Ce.float4:case Ce.float8:case Ce.int2:case Ce.int4:case Ce.int8:case Ce.numeric:case Ce.oid:return uz(t);case Ce.json:case Ce.jsonb:return cz(t);case Ce.timestamp:return fz(t);case Ce.abstime:case Ce.date:case Ce.daterange:case Ce.int4range:case Ce.int8range:case Ce.money:case Ce.reltime:case Ce.text:case Ce.time:case Ce.timestamptz:case Ce.timetz:case Ce.tsrange:case Ce.tstzrange:return mp(t);default:return mp(t)}},mp=e=>e,lz=e=>{switch(e){case"t":return!0;case"f":return!1;default:return e}},uz=e=>{if(typeof e=="string"){const t=parseFloat(e);if(!Number.isNaN(t))return t}return e},cz=e=>{if(typeof e=="string")try{return JSON.parse(e)}catch(t){return console.log(`JSON parse error: ${t}`),e}return e},dz=(e,t)=>{if(typeof e!="string")return e;const n=e.length-1,r=e[n];if(e[0]==="{"&&r==="}"){let a;const i=e.slice(1,n);try{a=JSON.parse("["+i+"]")}catch{a=i?i.split(","):[]}return a.map(s=>pC(t,s))}return e},fz=e=>typeof e=="string"?e.replace(" ","T"):e,mC=e=>{let t=e;return t=t.replace(/^ws/i,"http"),t=t.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i,""),t.replace(/\/+$/,"")};class Sd{constructor(t,n,r={},o=dC){this.channel=t,this.event=n,this.payload=r,this.timeout=o,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(t){this.timeout=t,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(t){this.payload=Object.assign(Object.assign({},this.payload),t)}receive(t,n){var r;return this._hasReceived(t)&&n((r=this.receivedResp)===null||r===void 0?void 0:r.response),this.recHooks.push({status:t,callback:n}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const t=n=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=n,this._matchReceive(n)};this.channel._on(this.refEvent,{},t),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(t,n){this.refEvent&&this.channel._trigger(this.refEvent,{status:t,response:n})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:t,response:n}){this.recHooks.filter(r=>r.status===t).forEach(r=>r.callback(n))}_hasReceived(t){return this.receivedResp&&this.receivedResp.status===t}}var iw;(function(e){e.SYNC="sync",e.JOIN="join",e.LEAVE="leave"})(iw||(iw={}));class yi{constructor(t,n){this.channel=t,this.state={},this.pendingDiffs=[],this.joinRef=null,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const r=(n==null?void 0:n.events)||{state:"presence_state",diff:"presence_diff"};this.channel._on(r.state,{},o=>{const{onJoin:a,onLeave:i,onSync:s}=this.caller;this.joinRef=this.channel._joinRef(),this.state=yi.syncState(this.state,o,a,i),this.pendingDiffs.forEach(l=>{this.state=yi.syncDiff(this.state,l,a,i)}),this.pendingDiffs=[],s()}),this.channel._on(r.diff,{},o=>{const{onJoin:a,onLeave:i,onSync:s}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(o):(this.state=yi.syncDiff(this.state,o,a,i),s())}),this.onJoin((o,a,i)=>{this.channel._trigger("presence",{event:"join",key:o,currentPresences:a,newPresences:i})}),this.onLeave((o,a,i)=>{this.channel._trigger("presence",{event:"leave",key:o,currentPresences:a,leftPresences:i})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(t,n,r,o){const a=this.cloneDeep(t),i=this.transformState(n),s={},l={};return this.map(a,(c,d)=>{i[c]||(l[c]=d)}),this.map(i,(c,d)=>{const f=a[c];if(f){const p=d.map(x=>x.presence_ref),h=f.map(x=>x.presence_ref),y=d.filter(x=>h.indexOf(x.presence_ref)<0),w=f.filter(x=>p.indexOf(x.presence_ref)<0);y.length>0&&(s[c]=y),w.length>0&&(l[c]=w)}else s[c]=d}),this.syncDiff(a,{joins:s,leaves:l},r,o)}static syncDiff(t,n,r,o){const{joins:a,leaves:i}={joins:this.transformState(n.joins),leaves:this.transformState(n.leaves)};return r||(r=()=>{}),o||(o=()=>{}),this.map(a,(s,l)=>{var c;const d=(c=t[s])!==null&&c!==void 0?c:[];if(t[s]=this.cloneDeep(l),d.length>0){const f=t[s].map(h=>h.presence_ref),p=d.filter(h=>f.indexOf(h.presence_ref)<0);t[s].unshift(...p)}r(s,d,l)}),this.map(i,(s,l)=>{let c=t[s];if(!c)return;const d=l.map(f=>f.presence_ref);c=c.filter(f=>d.indexOf(f.presence_ref)<0),t[s]=c,o(s,c,l),c.length===0&&delete t[s]}),t}static map(t,n){return Object.getOwnPropertyNames(t).map(r=>n(r,t[r]))}static transformState(t){return t=this.cloneDeep(t),Object.getOwnPropertyNames(t).reduce((n,r)=>{const o=t[r];return"metas"in o?n[r]=o.metas.map(a=>(a.presence_ref=a.phx_ref,delete a.phx_ref,delete a.phx_ref_prev,a)):n[r]=o,n},{})}static cloneDeep(t){return JSON.parse(JSON.stringify(t))}onJoin(t){this.caller.onJoin=t}onLeave(t){this.caller.onLeave=t}onSync(t){this.caller.onSync=t}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var sw;(function(e){e.ALL="*",e.INSERT="INSERT",e.UPDATE="UPDATE",e.DELETE="DELETE"})(sw||(sw={}));var lw;(function(e){e.BROADCAST="broadcast",e.PRESENCE="presence",e.POSTGRES_CHANGES="postgres_changes",e.SYSTEM="system"})(lw||(lw={}));var Nn;(function(e){e.SUBSCRIBED="SUBSCRIBED",e.TIMED_OUT="TIMED_OUT",e.CLOSED="CLOSED",e.CHANNEL_ERROR="CHANNEL_ERROR"})(Nn||(Nn={}));class xh{constructor(t,n={config:{}},r){this.topic=t,this.params=n,this.socket=r,this.bindings={},this.state=Tt.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=t.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:""},private:!1},n.config),this.timeout=this.socket.timeout,this.joinPush=new Sd(this,an.join,this.params,this.timeout),this.rejoinTimer=new fC(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=Tt.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(o=>o.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=Tt.closed,this.socket._remove(this)}),this._onError(o=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,o),this.state=Tt.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=Tt.errored,this.rejoinTimer.scheduleTimeout())}),this._on(an.reply,{},(o,a)=>{this._trigger(this._replyEventName(a),o)}),this.presence=new yi(this),this.broadcastEndpointURL=mC(this.socket.endPoint)+"/api/broadcast",this.private=this.params.config.private||!1}subscribe(t,n=this.timeout){var r,o;if(this.socket.isConnected()||this.socket.connect(),this.joinedOnce)throw"tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";{const{config:{broadcast:a,presence:i,private:s}}=this.params;this._onError(d=>t==null?void 0:t(Nn.CHANNEL_ERROR,d)),this._onClose(()=>t==null?void 0:t(Nn.CLOSED));const l={},c={broadcast:a,presence:i,postgres_changes:(o=(r=this.bindings.postgres_changes)===null||r===void 0?void 0:r.map(d=>d.filter))!==null&&o!==void 0?o:[],private:s};this.socket.accessTokenValue&&(l.access_token=this.socket.accessTokenValue),this.updateJoinPayload(Object.assign({config:c},l)),this.joinedOnce=!0,this._rejoin(n),this.joinPush.receive("ok",async({postgres_changes:d})=>{var f;if(this.socket.setAuth(),d===void 0){t==null||t(Nn.SUBSCRIBED);return}else{const p=this.bindings.postgres_changes,h=(f=p==null?void 0:p.length)!==null&&f!==void 0?f:0,y=[];for(let w=0;w<h;w++){const x=p[w],{filter:{event:v,schema:m,table:b,filter:k}}=x,C=d&&d[w];if(C&&C.event===v&&C.schema===m&&C.table===b&&C.filter===k)y.push(Object.assign(Object.assign({},x),{id:C.id}));else{this.unsubscribe(),t==null||t(Nn.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=y,t&&t(Nn.SUBSCRIBED);return}}).receive("error",d=>{t==null||t(Nn.CHANNEL_ERROR,new Error(JSON.stringify(Object.values(d).join(", ")||"error")))}).receive("timeout",()=>{t==null||t(Nn.TIMED_OUT)})}return this}presenceState(){return this.presence.state}async track(t,n={}){return await this.send({type:"presence",event:"track",payload:t},n.timeout||this.timeout)}async untrack(t={}){return await this.send({type:"presence",event:"untrack"},t)}on(t,n,r){return this._on(t,n,r)}async send(t,n={}){var r,o;if(!this._canPush()&&t.type==="broadcast"){const{event:a,payload:i}=t,l={method:"POST",headers:{Authorization:this.socket.accessTokenValue?`Bearer ${this.socket.accessTokenValue}`:"",apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:a,payload:i,private:this.private}]})};try{const c=await this._fetchWithTimeout(this.broadcastEndpointURL,l,(r=n.timeout)!==null&&r!==void 0?r:this.timeout);return await((o=c.body)===null||o===void 0?void 0:o.cancel()),c.ok?"ok":"error"}catch(c){return c.name==="AbortError"?"timed out":"error"}}else return new Promise(a=>{var i,s,l;const c=this._push(t.type,t,n.timeout||this.timeout);t.type==="broadcast"&&!(!((l=(s=(i=this.params)===null||i===void 0?void 0:i.config)===null||s===void 0?void 0:s.broadcast)===null||l===void 0)&&l.ack)&&a("ok"),c.receive("ok",()=>a("ok")),c.receive("error",()=>a("error")),c.receive("timeout",()=>a("timed out"))})}updateJoinPayload(t){this.joinPush.updatePayload(t)}unsubscribe(t=this.timeout){this.state=Tt.leaving;const n=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(an.close,"leave",this._joinRef())};return this.rejoinTimer.reset(),this.joinPush.destroy(),new Promise(r=>{const o=new Sd(this,an.leave,{},t);o.receive("ok",()=>{n(),r("ok")}).receive("timeout",()=>{n(),r("timed out")}).receive("error",()=>{r("error")}),o.send(),this._canPush()||o.trigger("ok",{})})}async _fetchWithTimeout(t,n,r){const o=new AbortController,a=setTimeout(()=>o.abort(),r),i=await this.socket.fetch(t,Object.assign(Object.assign({},n),{signal:o.signal}));return clearTimeout(a),i}_push(t,n,r=this.timeout){if(!this.joinedOnce)throw`tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let o=new Sd(this,t,n,r);return this._canPush()?o.send():(o.startTimeout(),this.pushBuffer.push(o)),o}_onMessage(t,n,r){return n}_isMember(t){return this.topic===t}_joinRef(){return this.joinPush.ref}_trigger(t,n,r){var o,a;const i=t.toLocaleLowerCase(),{close:s,error:l,leave:c,join:d}=an;if(r&&[s,l,c,d].indexOf(i)>=0&&r!==this._joinRef())return;let p=this._onMessage(i,n,r);if(n&&!p)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(i)?(o=this.bindings.postgres_changes)===null||o===void 0||o.filter(h=>{var y,w,x;return((y=h.filter)===null||y===void 0?void 0:y.event)==="*"||((x=(w=h.filter)===null||w===void 0?void 0:w.event)===null||x===void 0?void 0:x.toLocaleLowerCase())===i}).map(h=>h.callback(p,r)):(a=this.bindings[i])===null||a===void 0||a.filter(h=>{var y,w,x,v,m,b;if(["broadcast","presence","postgres_changes"].includes(i))if("id"in h){const k=h.id,C=(y=h.filter)===null||y===void 0?void 0:y.event;return k&&((w=n.ids)===null||w===void 0?void 0:w.includes(k))&&(C==="*"||(C==null?void 0:C.toLocaleLowerCase())===((x=n.data)===null||x===void 0?void 0:x.type.toLocaleLowerCase()))}else{const k=(m=(v=h==null?void 0:h.filter)===null||v===void 0?void 0:v.event)===null||m===void 0?void 0:m.toLocaleLowerCase();return k==="*"||k===((b=n==null?void 0:n.event)===null||b===void 0?void 0:b.toLocaleLowerCase())}else return h.type.toLocaleLowerCase()===i}).map(h=>{if(typeof p=="object"&&"ids"in p){const y=p.data,{schema:w,table:x,commit_timestamp:v,type:m,errors:b}=y;p=Object.assign(Object.assign({},{schema:w,table:x,commit_timestamp:v,eventType:m,new:{},old:{},errors:b}),this._getPayloadRecords(y))}h.callback(p,r)})}_isClosed(){return this.state===Tt.closed}_isJoined(){return this.state===Tt.joined}_isJoining(){return this.state===Tt.joining}_isLeaving(){return this.state===Tt.leaving}_replyEventName(t){return`chan_reply_${t}`}_on(t,n,r){const o=t.toLocaleLowerCase(),a={type:o,filter:n,callback:r};return this.bindings[o]?this.bindings[o].push(a):this.bindings[o]=[a],this}_off(t,n){const r=t.toLocaleLowerCase();return this.bindings[r]=this.bindings[r].filter(o=>{var a;return!(((a=o.type)===null||a===void 0?void 0:a.toLocaleLowerCase())===r&&xh.isEqual(o.filter,n))}),this}static isEqual(t,n){if(Object.keys(t).length!==Object.keys(n).length)return!1;for(const r in t)if(t[r]!==n[r])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(t){this._on(an.close,{},t)}_onError(t){this._on(an.error,{},n=>t(n))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(t=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=Tt.joining,this.joinPush.resend(t))}_getPayloadRecords(t){const n={new:{},old:{}};return(t.type==="INSERT"||t.type==="UPDATE")&&(n.new=aw(t.columns,t.record)),(t.type==="UPDATE"||t.type==="DELETE")&&(n.old=aw(t.columns,t.old_record)),n}}const pz=()=>{},mz=typeof WebSocket<"u",hz=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class gz{constructor(t,n){var r;this.accessTokenValue=null,this.apiKey=null,this.channels=[],this.endPoint="",this.httpEndpoint="",this.headers=rz,this.params={},this.timeout=dC,this.heartbeatIntervalMs=3e4,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.ref=0,this.logger=pz,this.conn=null,this.sendBuffer=[],this.serializer=new iz,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.accessToken=null,this._resolveFetch=a=>{let i;return a?i=a:typeof fetch>"u"?i=(...s)=>va(async()=>{const{default:l}=await Promise.resolve().then(()=>Ra);return{default:l}},void 0).then(({default:l})=>l(...s)):i=fetch,(...s)=>i(...s)},this.endPoint=`${t}/${pp.websocket}`,this.httpEndpoint=mC(t),n!=null&&n.transport?this.transport=n.transport:this.transport=null,n!=null&&n.params&&(this.params=n.params),n!=null&&n.headers&&(this.headers=Object.assign(Object.assign({},this.headers),n.headers)),n!=null&&n.timeout&&(this.timeout=n.timeout),n!=null&&n.logger&&(this.logger=n.logger),n!=null&&n.heartbeatIntervalMs&&(this.heartbeatIntervalMs=n.heartbeatIntervalMs);const o=(r=n==null?void 0:n.params)===null||r===void 0?void 0:r.apikey;if(o&&(this.accessTokenValue=o,this.apiKey=o),this.reconnectAfterMs=n!=null&&n.reconnectAfterMs?n.reconnectAfterMs:a=>[1e3,2e3,5e3,1e4][a-1]||1e4,this.encode=n!=null&&n.encode?n.encode:(a,i)=>i(JSON.stringify(a)),this.decode=n!=null&&n.decode?n.decode:this.serializer.decode.bind(this.serializer),this.reconnectTimer=new fC(async()=>{this.disconnect(),this.connect()},this.reconnectAfterMs),this.fetch=this._resolveFetch(n==null?void 0:n.fetch),n!=null&&n.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.worker=(n==null?void 0:n.worker)||!1,this.workerUrl=n==null?void 0:n.workerUrl}this.accessToken=(n==null?void 0:n.accessToken)||null}connect(){if(!this.conn){if(this.transport){this.conn=new this.transport(this.endpointURL(),void 0,{headers:this.headers});return}if(mz){this.conn=new WebSocket(this.endpointURL()),this.setupConnection();return}this.conn=new vz(this.endpointURL(),void 0,{close:()=>{this.conn=null}}),va(async()=>{const{default:t}=await import("./browser-d89Hnytq.js").then(n=>n.b);return{default:t}},[]).then(({default:t})=>{this.conn=new t(this.endpointURL(),void 0,{headers:this.headers}),this.setupConnection()})}}endpointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:oz}))}disconnect(t,n){this.conn&&(this.conn.onclose=function(){},t?this.conn.close(t,n??""):this.conn.close(),this.conn=null,this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.reset())}getChannels(){return this.channels}async removeChannel(t){const n=await t.unsubscribe();return this.channels.length===0&&this.disconnect(),n}async removeAllChannels(){const t=await Promise.all(this.channels.map(n=>n.unsubscribe()));return this.disconnect(),t}log(t,n,r){this.logger(t,n,r)}connectionState(){switch(this.conn&&this.conn.readyState){case ta.connecting:return Qr.Connecting;case ta.open:return Qr.Open;case ta.closing:return Qr.Closing;default:return Qr.Closed}}isConnected(){return this.connectionState()===Qr.Open}channel(t,n={config:{}}){const r=new xh(`realtime:${t}`,n,this);return this.channels.push(r),r}push(t){const{topic:n,event:r,payload:o,ref:a}=t,i=()=>{this.encode(t,s=>{var l;(l=this.conn)===null||l===void 0||l.send(s)})};this.log("push",`${n} ${r} (${a})`,o),this.isConnected()?i():this.sendBuffer.push(i)}async setAuth(t=null){let n=t||this.accessToken&&await this.accessToken()||this.accessTokenValue;if(n){let r=null;try{r=JSON.parse(atob(n.split(".")[1]))}catch{}if(r&&r.exp&&!(Math.floor(Date.now()/1e3)-r.exp<0))return this.log("auth",`InvalidJWTToken: Invalid value for JWT claim "exp" with value ${r.exp}`),Promise.reject(`InvalidJWTToken: Invalid value for JWT claim "exp" with value ${r.exp}`);this.accessTokenValue=n,this.channels.forEach(o=>{n&&o.updateJoinPayload({access_token:n}),o.joinedOnce&&o._isJoined()&&o._push(an.access_token,{access_token:n})})}}async sendHeartbeat(){var t;if(this.isConnected()){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection"),(t=this.conn)===null||t===void 0||t.close(az,"hearbeat timeout");return}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef}),this.setAuth()}}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(t=>t()),this.sendBuffer=[])}_makeRef(){let t=this.ref+1;return t===this.ref?this.ref=0:this.ref=t,this.ref.toString()}_leaveOpenTopic(t){let n=this.channels.find(r=>r.topic===t&&(r._isJoined()||r._isJoining()));n&&(this.log("transport",`leaving duplicate topic "${t}"`),n.unsubscribe())}_remove(t){this.channels=this.channels.filter(n=>n._joinRef()!==t._joinRef())}setupConnection(){this.conn&&(this.conn.binaryType="arraybuffer",this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=t=>this._onConnError(t),this.conn.onmessage=t=>this._onConnMessage(t),this.conn.onclose=t=>this._onConnClose(t))}_onConnMessage(t){this.decode(t.data,n=>{let{topic:r,event:o,payload:a,ref:i}=n;i&&i===this.pendingHeartbeatRef&&(this.pendingHeartbeatRef=null),this.log("receive",`${a.status||""} ${r} ${o} ${i&&"("+i+")"||""}`,a),this.channels.filter(s=>s._isMember(r)).forEach(s=>s._trigger(o,a,i)),this.stateChangeCallbacks.message.forEach(s=>s(n))})}async _onConnOpen(){if(this.log("transport",`connected to ${this.endpointURL()}`),this.flushSendBuffer(),this.reconnectTimer.reset(),!this.worker)this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this.sendHeartbeat(),this.heartbeatIntervalMs);else{this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const t=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(t),this.workerRef.onerror=n=>{this.log("worker","worker error",n.message),this.workerRef.terminate()},this.workerRef.onmessage=n=>{n.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}this.stateChangeCallbacks.open.forEach(t=>t())}_onConnClose(t){this.log("transport","close",t),this._triggerChanError(),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.scheduleTimeout(),this.stateChangeCallbacks.close.forEach(n=>n(t))}_onConnError(t){this.log("transport",t.message),this._triggerChanError(),this.stateChangeCallbacks.error.forEach(n=>n(t))}_triggerChanError(){this.channels.forEach(t=>t._trigger(an.error))}_appendParams(t,n){if(Object.keys(n).length===0)return t;const r=t.match(/\?/)?"&":"?",o=new URLSearchParams(n);return`${t}${r}${o}`}_workerObjectUrl(t){let n;if(t)n=t;else{const r=new Blob([hz],{type:"application/javascript"});n=URL.createObjectURL(r)}return n}}class vz{constructor(t,n,r){this.binaryType="arraybuffer",this.onclose=()=>{},this.onerror=()=>{},this.onmessage=()=>{},this.onopen=()=>{},this.readyState=ta.connecting,this.send=()=>{},this.url=null,this.url=t,this.close=r.close}}class _h extends Error{constructor(t){super(t),this.__isStorageError=!0,this.name="StorageError"}}function Ye(e){return typeof e=="object"&&e!==null&&"__isStorageError"in e}class yz extends _h{constructor(t,n){super(t),this.name="StorageApiError",this.status=n}toJSON(){return{name:this.name,message:this.message,status:this.status}}}class hp extends _h{constructor(t,n){super(t),this.name="StorageUnknownError",this.originalError=n}}var bz=function(e,t,n,r){function o(a){return a instanceof n?a:new n(function(i){i(a)})}return new(n||(n=Promise))(function(a,i){function s(d){try{c(r.next(d))}catch(f){i(f)}}function l(d){try{c(r.throw(d))}catch(f){i(f)}}function c(d){d.done?a(d.value):o(d.value).then(s,l)}c((r=r.apply(e,t||[])).next())})};const hC=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...n)=>va(async()=>{const{default:r}=await Promise.resolve().then(()=>Ra);return{default:r}},void 0).then(({default:r})=>r(...n)):t=fetch,(...n)=>t(...n)},wz=()=>bz(void 0,void 0,void 0,function*(){return typeof Response>"u"?(yield va(()=>Promise.resolve().then(()=>Ra),void 0)).Response:Response}),gp=e=>{if(Array.isArray(e))return e.map(n=>gp(n));if(typeof e=="function"||e!==Object(e))return e;const t={};return Object.entries(e).forEach(([n,r])=>{const o=n.replace(/([-_][a-z])/gi,a=>a.toUpperCase().replace(/[-_]/g,""));t[o]=gp(r)}),t};var So=function(e,t,n,r){function o(a){return a instanceof n?a:new n(function(i){i(a)})}return new(n||(n=Promise))(function(a,i){function s(d){try{c(r.next(d))}catch(f){i(f)}}function l(d){try{c(r.throw(d))}catch(f){i(f)}}function c(d){d.done?a(d.value):o(d.value).then(s,l)}c((r=r.apply(e,t||[])).next())})};const Cd=e=>e.msg||e.message||e.error_description||e.error||JSON.stringify(e),xz=(e,t,n)=>So(void 0,void 0,void 0,function*(){const r=yield wz();e instanceof r&&!(n!=null&&n.noResolveJson)?e.json().then(o=>{t(new yz(Cd(o),e.status||500))}).catch(o=>{t(new hp(Cd(o),o))}):t(new hp(Cd(e),e))}),_z=(e,t,n,r)=>{const o={method:e,headers:(t==null?void 0:t.headers)||{}};return e==="GET"?o:(o.headers=Object.assign({"Content-Type":"application/json"},t==null?void 0:t.headers),r&&(o.body=JSON.stringify(r)),Object.assign(Object.assign({},o),n))};function hs(e,t,n,r,o,a){return So(this,void 0,void 0,function*(){return new Promise((i,s)=>{e(n,_z(t,r,o,a)).then(l=>{if(!l.ok)throw l;return r!=null&&r.noResolveJson?l:l.json()}).then(l=>i(l)).catch(l=>xz(l,s,r))})})}function pu(e,t,n,r){return So(this,void 0,void 0,function*(){return hs(e,"GET",t,n,r)})}function fr(e,t,n,r,o){return So(this,void 0,void 0,function*(){return hs(e,"POST",t,r,o,n)})}function kz(e,t,n,r,o){return So(this,void 0,void 0,function*(){return hs(e,"PUT",t,r,o,n)})}function Sz(e,t,n,r){return So(this,void 0,void 0,function*(){return hs(e,"HEAD",t,Object.assign(Object.assign({},n),{noResolveJson:!0}),r)})}function gC(e,t,n,r,o){return So(this,void 0,void 0,function*(){return hs(e,"DELETE",t,r,o,n)})}var ht=function(e,t,n,r){function o(a){return a instanceof n?a:new n(function(i){i(a)})}return new(n||(n=Promise))(function(a,i){function s(d){try{c(r.next(d))}catch(f){i(f)}}function l(d){try{c(r.throw(d))}catch(f){i(f)}}function c(d){d.done?a(d.value):o(d.value).then(s,l)}c((r=r.apply(e,t||[])).next())})};const Cz={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},uw={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};class Ez{constructor(t,n={},r,o){this.url=t,this.headers=n,this.bucketId=r,this.fetch=hC(o)}uploadOrUpdate(t,n,r,o){return ht(this,void 0,void 0,function*(){try{let a;const i=Object.assign(Object.assign({},uw),o);let s=Object.assign(Object.assign({},this.headers),t==="POST"&&{"x-upsert":String(i.upsert)});const l=i.metadata;typeof Blob<"u"&&r instanceof Blob?(a=new FormData,a.append("cacheControl",i.cacheControl),l&&a.append("metadata",this.encodeMetadata(l)),a.append("",r)):typeof FormData<"u"&&r instanceof FormData?(a=r,a.append("cacheControl",i.cacheControl),l&&a.append("metadata",this.encodeMetadata(l))):(a=r,s["cache-control"]=`max-age=${i.cacheControl}`,s["content-type"]=i.contentType,l&&(s["x-metadata"]=this.toBase64(this.encodeMetadata(l)))),o!=null&&o.headers&&(s=Object.assign(Object.assign({},s),o.headers));const c=this._removeEmptyFolders(n),d=this._getFinalPath(c),f=yield this.fetch(`${this.url}/object/${d}`,Object.assign({method:t,body:a,headers:s},i!=null&&i.duplex?{duplex:i.duplex}:{})),p=yield f.json();return f.ok?{data:{path:c,id:p.Id,fullPath:p.Key},error:null}:{data:null,error:p}}catch(a){if(Ye(a))return{data:null,error:a};throw a}})}upload(t,n,r){return ht(this,void 0,void 0,function*(){return this.uploadOrUpdate("POST",t,n,r)})}uploadToSignedUrl(t,n,r,o){return ht(this,void 0,void 0,function*(){const a=this._removeEmptyFolders(t),i=this._getFinalPath(a),s=new URL(this.url+`/object/upload/sign/${i}`);s.searchParams.set("token",n);try{let l;const c=Object.assign({upsert:uw.upsert},o),d=Object.assign(Object.assign({},this.headers),{"x-upsert":String(c.upsert)});typeof Blob<"u"&&r instanceof Blob?(l=new FormData,l.append("cacheControl",c.cacheControl),l.append("",r)):typeof FormData<"u"&&r instanceof FormData?(l=r,l.append("cacheControl",c.cacheControl)):(l=r,d["cache-control"]=`max-age=${c.cacheControl}`,d["content-type"]=c.contentType);const f=yield this.fetch(s.toString(),{method:"PUT",body:l,headers:d}),p=yield f.json();return f.ok?{data:{path:a,fullPath:p.Key},error:null}:{data:null,error:p}}catch(l){if(Ye(l))return{data:null,error:l};throw l}})}createSignedUploadUrl(t,n){return ht(this,void 0,void 0,function*(){try{let r=this._getFinalPath(t);const o=Object.assign({},this.headers);n!=null&&n.upsert&&(o["x-upsert"]="true");const a=yield fr(this.fetch,`${this.url}/object/upload/sign/${r}`,{},{headers:o}),i=new URL(this.url+a.url),s=i.searchParams.get("token");if(!s)throw new _h("No token returned by API");return{data:{signedUrl:i.toString(),path:t,token:s},error:null}}catch(r){if(Ye(r))return{data:null,error:r};throw r}})}update(t,n,r){return ht(this,void 0,void 0,function*(){return this.uploadOrUpdate("PUT",t,n,r)})}move(t,n,r){return ht(this,void 0,void 0,function*(){try{return{data:yield fr(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:t,destinationKey:n,destinationBucket:r==null?void 0:r.destinationBucket},{headers:this.headers}),error:null}}catch(o){if(Ye(o))return{data:null,error:o};throw o}})}copy(t,n,r){return ht(this,void 0,void 0,function*(){try{return{data:{path:(yield fr(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:t,destinationKey:n,destinationBucket:r==null?void 0:r.destinationBucket},{headers:this.headers})).Key},error:null}}catch(o){if(Ye(o))return{data:null,error:o};throw o}})}createSignedUrl(t,n,r){return ht(this,void 0,void 0,function*(){try{let o=this._getFinalPath(t),a=yield fr(this.fetch,`${this.url}/object/sign/${o}`,Object.assign({expiresIn:n},r!=null&&r.transform?{transform:r.transform}:{}),{headers:this.headers});const i=r!=null&&r.download?`&download=${r.download===!0?"":r.download}`:"";return a={signedUrl:encodeURI(`${this.url}${a.signedURL}${i}`)},{data:a,error:null}}catch(o){if(Ye(o))return{data:null,error:o};throw o}})}createSignedUrls(t,n,r){return ht(this,void 0,void 0,function*(){try{const o=yield fr(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:n,paths:t},{headers:this.headers}),a=r!=null&&r.download?`&download=${r.download===!0?"":r.download}`:"";return{data:o.map(i=>Object.assign(Object.assign({},i),{signedUrl:i.signedURL?encodeURI(`${this.url}${i.signedURL}${a}`):null})),error:null}}catch(o){if(Ye(o))return{data:null,error:o};throw o}})}download(t,n){return ht(this,void 0,void 0,function*(){const o=typeof(n==null?void 0:n.transform)<"u"?"render/image/authenticated":"object",a=this.transformOptsToQueryString((n==null?void 0:n.transform)||{}),i=a?`?${a}`:"";try{const s=this._getFinalPath(t);return{data:yield(yield pu(this.fetch,`${this.url}/${o}/${s}${i}`,{headers:this.headers,noResolveJson:!0})).blob(),error:null}}catch(s){if(Ye(s))return{data:null,error:s};throw s}})}info(t){return ht(this,void 0,void 0,function*(){const n=this._getFinalPath(t);try{const r=yield pu(this.fetch,`${this.url}/object/info/${n}`,{headers:this.headers});return{data:gp(r),error:null}}catch(r){if(Ye(r))return{data:null,error:r};throw r}})}exists(t){return ht(this,void 0,void 0,function*(){const n=this._getFinalPath(t);try{return yield Sz(this.fetch,`${this.url}/object/${n}`,{headers:this.headers}),{data:!0,error:null}}catch(r){if(Ye(r)&&r instanceof hp){const o=r.originalError;if([400,404].includes(o==null?void 0:o.status))return{data:!1,error:r}}throw r}})}getPublicUrl(t,n){const r=this._getFinalPath(t),o=[],a=n!=null&&n.download?`download=${n.download===!0?"":n.download}`:"";a!==""&&o.push(a);const s=typeof(n==null?void 0:n.transform)<"u"?"render/image":"object",l=this.transformOptsToQueryString((n==null?void 0:n.transform)||{});l!==""&&o.push(l);let c=o.join("&");return c!==""&&(c=`?${c}`),{data:{publicUrl:encodeURI(`${this.url}/${s}/public/${r}${c}`)}}}remove(t){return ht(this,void 0,void 0,function*(){try{return{data:yield gC(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:t},{headers:this.headers}),error:null}}catch(n){if(Ye(n))return{data:null,error:n};throw n}})}list(t,n,r){return ht(this,void 0,void 0,function*(){try{const o=Object.assign(Object.assign(Object.assign({},Cz),n),{prefix:t||""});return{data:yield fr(this.fetch,`${this.url}/object/list/${this.bucketId}`,o,{headers:this.headers},r),error:null}}catch(o){if(Ye(o))return{data:null,error:o};throw o}})}encodeMetadata(t){return JSON.stringify(t)}toBase64(t){return typeof Buffer<"u"?Buffer.from(t).toString("base64"):btoa(t)}_getFinalPath(t){return`${this.bucketId}/${t}`}_removeEmptyFolders(t){return t.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(t){const n=[];return t.width&&n.push(`width=${t.width}`),t.height&&n.push(`height=${t.height}`),t.resize&&n.push(`resize=${t.resize}`),t.format&&n.push(`format=${t.format}`),t.quality&&n.push(`quality=${t.quality}`),n.join("&")}}const Oz="2.7.1",Tz={"X-Client-Info":`storage-js/${Oz}`};var Po=function(e,t,n,r){function o(a){return a instanceof n?a:new n(function(i){i(a)})}return new(n||(n=Promise))(function(a,i){function s(d){try{c(r.next(d))}catch(f){i(f)}}function l(d){try{c(r.throw(d))}catch(f){i(f)}}function c(d){d.done?a(d.value):o(d.value).then(s,l)}c((r=r.apply(e,t||[])).next())})};class Rz{constructor(t,n={},r){this.url=t,this.headers=Object.assign(Object.assign({},Tz),n),this.fetch=hC(r)}listBuckets(){return Po(this,void 0,void 0,function*(){try{return{data:yield pu(this.fetch,`${this.url}/bucket`,{headers:this.headers}),error:null}}catch(t){if(Ye(t))return{data:null,error:t};throw t}})}getBucket(t){return Po(this,void 0,void 0,function*(){try{return{data:yield pu(this.fetch,`${this.url}/bucket/${t}`,{headers:this.headers}),error:null}}catch(n){if(Ye(n))return{data:null,error:n};throw n}})}createBucket(t,n={public:!1}){return Po(this,void 0,void 0,function*(){try{return{data:yield fr(this.fetch,`${this.url}/bucket`,{id:t,name:t,public:n.public,file_size_limit:n.fileSizeLimit,allowed_mime_types:n.allowedMimeTypes},{headers:this.headers}),error:null}}catch(r){if(Ye(r))return{data:null,error:r};throw r}})}updateBucket(t,n){return Po(this,void 0,void 0,function*(){try{return{data:yield kz(this.fetch,`${this.url}/bucket/${t}`,{id:t,name:t,public:n.public,file_size_limit:n.fileSizeLimit,allowed_mime_types:n.allowedMimeTypes},{headers:this.headers}),error:null}}catch(r){if(Ye(r))return{data:null,error:r};throw r}})}emptyBucket(t){return Po(this,void 0,void 0,function*(){try{return{data:yield fr(this.fetch,`${this.url}/bucket/${t}/empty`,{},{headers:this.headers}),error:null}}catch(n){if(Ye(n))return{data:null,error:n};throw n}})}deleteBucket(t){return Po(this,void 0,void 0,function*(){try{return{data:yield gC(this.fetch,`${this.url}/bucket/${t}`,{},{headers:this.headers}),error:null}}catch(n){if(Ye(n))return{data:null,error:n};throw n}})}}class jz extends Rz{constructor(t,n={},r){super(t,n,r)}from(t){return new Ez(this.url,this.headers,t,this.fetch)}}const $z="2.48.1";let ni="";typeof Deno<"u"?ni="deno":typeof document<"u"?ni="web":typeof navigator<"u"&&navigator.product==="ReactNative"?ni="react-native":ni="node";const Pz={"X-Client-Info":`supabase-js-${ni}/${$z}`},Az={headers:Pz},Iz={schema:"public"},Lz={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},Nz={};var Dz=function(e,t,n,r){function o(a){return a instanceof n?a:new n(function(i){i(a)})}return new(n||(n=Promise))(function(a,i){function s(d){try{c(r.next(d))}catch(f){i(f)}}function l(d){try{c(r.throw(d))}catch(f){i(f)}}function c(d){d.done?a(d.value):o(d.value).then(s,l)}c((r=r.apply(e,t||[])).next())})};const Mz=e=>{let t;return e?t=e:typeof fetch>"u"?t=eC:t=fetch,(...n)=>t(...n)},zz=()=>typeof Headers>"u"?tC:Headers,Fz=(e,t,n)=>{const r=Mz(n),o=zz();return(a,i)=>Dz(void 0,void 0,void 0,function*(){var s;const l=(s=yield t())!==null&&s!==void 0?s:e;let c=new o(i==null?void 0:i.headers);return c.has("apikey")||c.set("apikey",e),c.has("Authorization")||c.set("Authorization",`Bearer ${l}`),r(a,Object.assign(Object.assign({},i),{headers:c}))})};var Bz=function(e,t,n,r){function o(a){return a instanceof n?a:new n(function(i){i(a)})}return new(n||(n=Promise))(function(a,i){function s(d){try{c(r.next(d))}catch(f){i(f)}}function l(d){try{c(r.throw(d))}catch(f){i(f)}}function c(d){d.done?a(d.value):o(d.value).then(s,l)}c((r=r.apply(e,t||[])).next())})};function Uz(e){return e.replace(/\/$/,"")}function Hz(e,t){const{db:n,auth:r,realtime:o,global:a}=e,{db:i,auth:s,realtime:l,global:c}=t,d={db:Object.assign(Object.assign({},i),n),auth:Object.assign(Object.assign({},s),r),realtime:Object.assign(Object.assign({},l),o),global:Object.assign(Object.assign({},c),a),accessToken:()=>Bz(this,void 0,void 0,function*(){return""})};return e.accessToken?d.accessToken=e.accessToken:delete d.accessToken,d}const vC="2.67.3",Wz="http://localhost:9999",Vz="supabase.auth.token",Gz={"X-Client-Info":`gotrue-js/${vC}`},cw=10,vp="X-Supabase-Api-Version",yC={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}};function qz(e){return Math.round(Date.now()/1e3)+e}function Kz(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){const t=Math.random()*16|0;return(e=="x"?t:t&3|8).toString(16)})}const bn=()=>typeof window<"u"&&typeof document<"u",Vr={tested:!1,writable:!1},bi=()=>{if(!bn())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(Vr.tested)return Vr.writable;const e=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(e,e),globalThis.localStorage.removeItem(e),Vr.tested=!0,Vr.writable=!0}catch{Vr.tested=!0,Vr.writable=!1}return Vr.writable};function Yz(e){const t={},n=new URL(e);if(n.hash&&n.hash[0]==="#")try{new URLSearchParams(n.hash.substring(1)).forEach((o,a)=>{t[a]=o})}catch{}return n.searchParams.forEach((r,o)=>{t[o]=r}),t}const bC=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...n)=>va(async()=>{const{default:r}=await Promise.resolve().then(()=>Ra);return{default:r}},void 0).then(({default:r})=>r(...n)):t=fetch,(...n)=>t(...n)},Xz=e=>typeof e=="object"&&e!==null&&"status"in e&&"ok"in e&&"json"in e&&typeof e.json=="function",wC=async(e,t,n)=>{await e.setItem(t,JSON.stringify(n))},Js=async(e,t)=>{const n=await e.getItem(t);if(!n)return null;try{return JSON.parse(n)}catch{return n}},Zs=async(e,t)=>{await e.removeItem(t)};function Qz(e){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";let n="",r,o,a,i,s,l,c,d=0;for(e=e.replace("-","+").replace("_","/");d<e.length;)i=t.indexOf(e.charAt(d++)),s=t.indexOf(e.charAt(d++)),l=t.indexOf(e.charAt(d++)),c=t.indexOf(e.charAt(d++)),r=i<<2|s>>4,o=(s&15)<<4|l>>2,a=(l&3)<<6|c,n=n+String.fromCharCode(r),l!=64&&o!=0&&(n=n+String.fromCharCode(o)),c!=64&&a!=0&&(n=n+String.fromCharCode(a));return n}class mc{constructor(){this.promise=new mc.promiseConstructor((t,n)=>{this.resolve=t,this.reject=n})}}mc.promiseConstructor=Promise;function dw(e){const t=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i,n=e.split(".");if(n.length!==3)throw new Error("JWT is not valid: not a JWT structure");if(!t.test(n[1]))throw new Error("JWT is not valid: payload is not in base64url format");const r=n[1];return JSON.parse(Qz(r))}async function Jz(e){return await new Promise(t=>{setTimeout(()=>t(null),e)})}function Zz(e,t){return new Promise((r,o)=>{(async()=>{for(let a=0;a<1/0;a++)try{const i=await e(a);if(!t(a,null,i)){r(i);return}}catch(i){if(!t(a,i)){o(i);return}}})()})}function e6(e){return("0"+e.toString(16)).substr(-2)}function t6(){const t=new Uint32Array(56);if(typeof crypto>"u"){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",r=n.length;let o="";for(let a=0;a<56;a++)o+=n.charAt(Math.floor(Math.random()*r));return o}return crypto.getRandomValues(t),Array.from(t,e6).join("")}async function n6(e){const n=new TextEncoder().encode(e),r=await crypto.subtle.digest("SHA-256",n),o=new Uint8Array(r);return Array.from(o).map(a=>String.fromCharCode(a)).join("")}function r6(e){return btoa(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function o6(e){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),e;const n=await n6(e);return r6(n)}async function Ao(e,t,n=!1){const r=t6();let o=r;n&&(o+="/PASSWORD_RECOVERY"),await wC(e,`${t}-code-verifier`,o);const a=await o6(r);return[a,r===a?"plain":"s256"]}const a6=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function i6(e){const t=e.headers.get(vp);if(!t||!t.match(a6))return null;try{return new Date(`${t}T00:00:00.0Z`)}catch{return null}}class kh extends Error{constructor(t,n,r){super(t),this.__isAuthError=!0,this.name="AuthError",this.status=n,this.code=r}}function ue(e){return typeof e=="object"&&e!==null&&"__isAuthError"in e}class s6 extends kh{constructor(t,n,r){super(t,n,r),this.name="AuthApiError",this.status=n,this.code=r}}function l6(e){return ue(e)&&e.name==="AuthApiError"}class xC extends kh{constructor(t,n){super(t),this.name="AuthUnknownError",this.originalError=n}}class Co extends kh{constructor(t,n,r,o){super(t,r,o),this.name=n,this.status=r}}class ir extends Co{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function u6(e){return ue(e)&&e.name==="AuthSessionMissingError"}class Ed extends Co{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class el extends Co{constructor(t){super(t,"AuthInvalidCredentialsError",400,void 0)}}class tl extends Co{constructor(t,n=null){super(t,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=n}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}function c6(e){return ue(e)&&e.name==="AuthImplicitGrantRedirectError"}class fw extends Co{constructor(t,n=null){super(t,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=n}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class yp extends Co{constructor(t,n){super(t,"AuthRetryableFetchError",n,void 0)}}function Od(e){return ue(e)&&e.name==="AuthRetryableFetchError"}class pw extends Co{constructor(t,n,r){super(t,"AuthWeakPasswordError",n,"weak_password"),this.reasons=r}}var d6=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const Yr=e=>e.msg||e.message||e.error_description||e.error||JSON.stringify(e),f6=[502,503,504];async function mw(e){var t;if(!Xz(e))throw new yp(Yr(e),0);if(f6.includes(e.status))throw new yp(Yr(e),e.status);let n;try{n=await e.json()}catch(a){throw new xC(Yr(a),a)}let r;const o=i6(e);if(o&&o.getTime()>=yC["2024-01-01"].timestamp&&typeof n=="object"&&n&&typeof n.code=="string"?r=n.code:typeof n=="object"&&n&&typeof n.error_code=="string"&&(r=n.error_code),r){if(r==="weak_password")throw new pw(Yr(n),e.status,((t=n.weak_password)===null||t===void 0?void 0:t.reasons)||[]);if(r==="session_not_found")throw new ir}else if(typeof n=="object"&&n&&typeof n.weak_password=="object"&&n.weak_password&&Array.isArray(n.weak_password.reasons)&&n.weak_password.reasons.length&&n.weak_password.reasons.reduce((a,i)=>a&&typeof i=="string",!0))throw new pw(Yr(n),e.status,n.weak_password.reasons);throw new s6(Yr(n),e.status||500,r)}const p6=(e,t,n,r)=>{const o={method:e,headers:(t==null?void 0:t.headers)||{}};return e==="GET"?o:(o.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},t==null?void 0:t.headers),o.body=JSON.stringify(r),Object.assign(Object.assign({},o),n))};async function he(e,t,n,r){var o;const a=Object.assign({},r==null?void 0:r.headers);a[vp]||(a[vp]=yC["2024-01-01"].name),r!=null&&r.jwt&&(a.Authorization=`Bearer ${r.jwt}`);const i=(o=r==null?void 0:r.query)!==null&&o!==void 0?o:{};r!=null&&r.redirectTo&&(i.redirect_to=r.redirectTo);const s=Object.keys(i).length?"?"+new URLSearchParams(i).toString():"",l=await m6(e,t,n+s,{headers:a,noResolveJson:r==null?void 0:r.noResolveJson},{},r==null?void 0:r.body);return r!=null&&r.xform?r==null?void 0:r.xform(l):{data:Object.assign({},l),error:null}}async function m6(e,t,n,r,o,a){const i=p6(t,r,o,a);let s;try{s=await e(n,Object.assign({},i))}catch(l){throw console.error(l),new yp(Yr(l),0)}if(s.ok||await mw(s),r!=null&&r.noResolveJson)return s;try{return await s.json()}catch(l){await mw(l)}}function sr(e){var t;let n=null;y6(e)&&(n=Object.assign({},e),e.expires_at||(n.expires_at=qz(e.expires_in)));const r=(t=e.user)!==null&&t!==void 0?t:e;return{data:{session:n,user:r},error:null}}function hw(e){const t=sr(e);return!t.error&&e.weak_password&&typeof e.weak_password=="object"&&Array.isArray(e.weak_password.reasons)&&e.weak_password.reasons.length&&e.weak_password.message&&typeof e.weak_password.message=="string"&&e.weak_password.reasons.reduce((n,r)=>n&&typeof r=="string",!0)&&(t.data.weak_password=e.weak_password),t}function hr(e){var t;return{data:{user:(t=e.user)!==null&&t!==void 0?t:e},error:null}}function h6(e){return{data:e,error:null}}function g6(e){const{action_link:t,email_otp:n,hashed_token:r,redirect_to:o,verification_type:a}=e,i=d6(e,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),s={action_link:t,email_otp:n,hashed_token:r,redirect_to:o,verification_type:a},l=Object.assign({},i);return{data:{properties:s,user:l},error:null}}function v6(e){return e}function y6(e){return e.access_token&&e.refresh_token&&e.expires_in}var b6=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};class w6{constructor({url:t="",headers:n={},fetch:r}){this.url=t,this.headers=n,this.fetch=bC(r),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)}}async signOut(t,n="global"){try{return await he(this.fetch,"POST",`${this.url}/logout?scope=${n}`,{headers:this.headers,jwt:t,noResolveJson:!0}),{data:null,error:null}}catch(r){if(ue(r))return{data:null,error:r};throw r}}async inviteUserByEmail(t,n={}){try{return await he(this.fetch,"POST",`${this.url}/invite`,{body:{email:t,data:n.data},headers:this.headers,redirectTo:n.redirectTo,xform:hr})}catch(r){if(ue(r))return{data:{user:null},error:r};throw r}}async generateLink(t){try{const{options:n}=t,r=b6(t,["options"]),o=Object.assign(Object.assign({},r),n);return"newEmail"in r&&(o.new_email=r==null?void 0:r.newEmail,delete o.newEmail),await he(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:o,headers:this.headers,xform:g6,redirectTo:n==null?void 0:n.redirectTo})}catch(n){if(ue(n))return{data:{properties:null,user:null},error:n};throw n}}async createUser(t){try{return await he(this.fetch,"POST",`${this.url}/admin/users`,{body:t,headers:this.headers,xform:hr})}catch(n){if(ue(n))return{data:{user:null},error:n};throw n}}async listUsers(t){var n,r,o,a,i,s,l;try{const c={nextPage:null,lastPage:0,total:0},d=await he(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(r=(n=t==null?void 0:t.page)===null||n===void 0?void 0:n.toString())!==null&&r!==void 0?r:"",per_page:(a=(o=t==null?void 0:t.perPage)===null||o===void 0?void 0:o.toString())!==null&&a!==void 0?a:""},xform:v6});if(d.error)throw d.error;const f=await d.json(),p=(i=d.headers.get("x-total-count"))!==null&&i!==void 0?i:0,h=(l=(s=d.headers.get("link"))===null||s===void 0?void 0:s.split(","))!==null&&l!==void 0?l:[];return h.length>0&&(h.forEach(y=>{const w=parseInt(y.split(";")[0].split("=")[1].substring(0,1)),x=JSON.parse(y.split(";")[1].split("=")[1]);c[`${x}Page`]=w}),c.total=parseInt(p)),{data:Object.assign(Object.assign({},f),c),error:null}}catch(c){if(ue(c))return{data:{users:[]},error:c};throw c}}async getUserById(t){try{return await he(this.fetch,"GET",`${this.url}/admin/users/${t}`,{headers:this.headers,xform:hr})}catch(n){if(ue(n))return{data:{user:null},error:n};throw n}}async updateUserById(t,n){try{return await he(this.fetch,"PUT",`${this.url}/admin/users/${t}`,{body:n,headers:this.headers,xform:hr})}catch(r){if(ue(r))return{data:{user:null},error:r};throw r}}async deleteUser(t,n=!1){try{return await he(this.fetch,"DELETE",`${this.url}/admin/users/${t}`,{headers:this.headers,body:{should_soft_delete:n},xform:hr})}catch(r){if(ue(r))return{data:{user:null},error:r};throw r}}async _listFactors(t){try{const{data:n,error:r}=await he(this.fetch,"GET",`${this.url}/admin/users/${t.userId}/factors`,{headers:this.headers,xform:o=>({data:{factors:o},error:null})});return{data:n,error:r}}catch(n){if(ue(n))return{data:null,error:n};throw n}}async _deleteFactor(t){try{return{data:await he(this.fetch,"DELETE",`${this.url}/admin/users/${t.userId}/factors/${t.id}`,{headers:this.headers}),error:null}}catch(n){if(ue(n))return{data:null,error:n};throw n}}}const x6={getItem:e=>bi()?globalThis.localStorage.getItem(e):null,setItem:(e,t)=>{bi()&&globalThis.localStorage.setItem(e,t)},removeItem:e=>{bi()&&globalThis.localStorage.removeItem(e)}};function gw(e={}){return{getItem:t=>e[t]||null,setItem:(t,n)=>{e[t]=n},removeItem:t=>{delete e[t]}}}function _6(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}const Io={debug:!!(globalThis&&bi()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class _C extends Error{constructor(t){super(t),this.isAcquireTimeout=!0}}class k6 extends _C{}async function S6(e,t,n){Io.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",e,t);const r=new globalThis.AbortController;return t>0&&setTimeout(()=>{r.abort(),Io.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",e)},t),await Promise.resolve().then(()=>globalThis.navigator.locks.request(e,t===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:r.signal},async o=>{if(o){Io.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",e,o.name);try{return await n()}finally{Io.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",e,o.name)}}else{if(t===0)throw Io.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",e),new k6(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);if(Io.debug)try{const a=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(a,null,"  "))}catch(a){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",a)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),await n()}}))}_6();const C6={url:Wz,storageKey:Vz,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:Gz,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1},Ga=30*1e3,vw=3;async function yw(e,t,n){return await n()}class Wi{constructor(t){var n,r;this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log,this.instanceID=Wi.nextInstanceID,Wi.nextInstanceID+=1,this.instanceID>0&&bn()&&console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");const o=Object.assign(Object.assign({},C6),t);if(this.logDebugMessages=!!o.debug,typeof o.debug=="function"&&(this.logger=o.debug),this.persistSession=o.persistSession,this.storageKey=o.storageKey,this.autoRefreshToken=o.autoRefreshToken,this.admin=new w6({url:o.url,headers:o.headers,fetch:o.fetch}),this.url=o.url,this.headers=o.headers,this.fetch=bC(o.fetch),this.lock=o.lock||yw,this.detectSessionInUrl=o.detectSessionInUrl,this.flowType=o.flowType,this.hasCustomAuthorizationHeader=o.hasCustomAuthorizationHeader,o.lock?this.lock=o.lock:bn()&&(!((n=globalThis==null?void 0:globalThis.navigator)===null||n===void 0)&&n.locks)?this.lock=S6:this.lock=yw,this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this)},this.persistSession?o.storage?this.storage=o.storage:bi()?this.storage=x6:(this.memoryStorage={},this.storage=gw(this.memoryStorage)):(this.memoryStorage={},this.storage=gw(this.memoryStorage)),bn()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(a){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",a)}(r=this.broadcastChannel)===null||r===void 0||r.addEventListener("message",async a=>{this._debug("received broadcast notification from other tab or client",a),await this._notifyAllSubscribers(a.data.event,a.data.session,!1)})}this.initialize()}_debug(...t){return this.logDebugMessages&&this.logger(`GoTrueClient@${this.instanceID} (${vC}) ${new Date().toISOString()}`,...t),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(-1,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){var t;try{const n=Yz(window.location.href);let r="none";if(this._isImplicitGrantCallback(n)?r="implicit":await this._isPKCECallback(n)&&(r="pkce"),bn()&&this.detectSessionInUrl&&r!=="none"){const{data:o,error:a}=await this._getSessionFromURL(n,r);if(a){if(this._debug("#_initialize()","error detecting session from URL",a),c6(a)){const l=(t=a.details)===null||t===void 0?void 0:t.code;if(l==="identity_already_exists"||l==="identity_not_found"||l==="single_identity_not_deletable")return{error:a}}return await this._removeSession(),{error:a}}const{session:i,redirectType:s}=o;return this._debug("#_initialize()","detected session in URL",i,"redirect type",s),await this._saveSession(i),setTimeout(async()=>{s==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",i):await this._notifyAllSubscribers("SIGNED_IN",i)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(n){return ue(n)?{error:n}:{error:new xC("Unexpected error during initialization",n)}}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(t){var n,r,o;try{const a=await he(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(r=(n=t==null?void 0:t.options)===null||n===void 0?void 0:n.data)!==null&&r!==void 0?r:{},gotrue_meta_security:{captcha_token:(o=t==null?void 0:t.options)===null||o===void 0?void 0:o.captchaToken}},xform:sr}),{data:i,error:s}=a;if(s||!i)return{data:{user:null,session:null},error:s};const l=i.session,c=i.user;return i.session&&(await this._saveSession(i.session),await this._notifyAllSubscribers("SIGNED_IN",l)),{data:{user:c,session:l},error:null}}catch(a){if(ue(a))return{data:{user:null,session:null},error:a};throw a}}async signUp(t){var n,r,o;try{let a;if("email"in t){const{email:d,password:f,options:p}=t;let h=null,y=null;this.flowType==="pkce"&&([h,y]=await Ao(this.storage,this.storageKey)),a=await he(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:p==null?void 0:p.emailRedirectTo,body:{email:d,password:f,data:(n=p==null?void 0:p.data)!==null&&n!==void 0?n:{},gotrue_meta_security:{captcha_token:p==null?void 0:p.captchaToken},code_challenge:h,code_challenge_method:y},xform:sr})}else if("phone"in t){const{phone:d,password:f,options:p}=t;a=await he(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:d,password:f,data:(r=p==null?void 0:p.data)!==null&&r!==void 0?r:{},channel:(o=p==null?void 0:p.channel)!==null&&o!==void 0?o:"sms",gotrue_meta_security:{captcha_token:p==null?void 0:p.captchaToken}},xform:sr})}else throw new el("You must provide either an email or phone number and a password");const{data:i,error:s}=a;if(s||!i)return{data:{user:null,session:null},error:s};const l=i.session,c=i.user;return i.session&&(await this._saveSession(i.session),await this._notifyAllSubscribers("SIGNED_IN",l)),{data:{user:c,session:l},error:null}}catch(a){if(ue(a))return{data:{user:null,session:null},error:a};throw a}}async signInWithPassword(t){try{let n;if("email"in t){const{email:a,password:i,options:s}=t;n=await he(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:a,password:i,gotrue_meta_security:{captcha_token:s==null?void 0:s.captchaToken}},xform:hw})}else if("phone"in t){const{phone:a,password:i,options:s}=t;n=await he(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:a,password:i,gotrue_meta_security:{captcha_token:s==null?void 0:s.captchaToken}},xform:hw})}else throw new el("You must provide either an email or phone number and a password");const{data:r,error:o}=n;return o?{data:{user:null,session:null},error:o}:!r||!r.session||!r.user?{data:{user:null,session:null},error:new Ed}:(r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers("SIGNED_IN",r.session)),{data:Object.assign({user:r.user,session:r.session},r.weak_password?{weakPassword:r.weak_password}:null),error:o})}catch(n){if(ue(n))return{data:{user:null,session:null},error:n};throw n}}async signInWithOAuth(t){var n,r,o,a;return await this._handleProviderSignIn(t.provider,{redirectTo:(n=t.options)===null||n===void 0?void 0:n.redirectTo,scopes:(r=t.options)===null||r===void 0?void 0:r.scopes,queryParams:(o=t.options)===null||o===void 0?void 0:o.queryParams,skipBrowserRedirect:(a=t.options)===null||a===void 0?void 0:a.skipBrowserRedirect})}async exchangeCodeForSession(t){return await this.initializePromise,this._acquireLock(-1,async()=>this._exchangeCodeForSession(t))}async _exchangeCodeForSession(t){const n=await Js(this.storage,`${this.storageKey}-code-verifier`),[r,o]=(n??"").split("/");try{const{data:a,error:i}=await he(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:t,code_verifier:r},xform:sr});if(await Zs(this.storage,`${this.storageKey}-code-verifier`),i)throw i;return!a||!a.session||!a.user?{data:{user:null,session:null,redirectType:null},error:new Ed}:(a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",a.session)),{data:Object.assign(Object.assign({},a),{redirectType:o??null}),error:i})}catch(a){if(ue(a))return{data:{user:null,session:null,redirectType:null},error:a};throw a}}async signInWithIdToken(t){try{const{options:n,provider:r,token:o,access_token:a,nonce:i}=t,s=await he(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:r,id_token:o,access_token:a,nonce:i,gotrue_meta_security:{captcha_token:n==null?void 0:n.captchaToken}},xform:sr}),{data:l,error:c}=s;return c?{data:{user:null,session:null},error:c}:!l||!l.session||!l.user?{data:{user:null,session:null},error:new Ed}:(l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),{data:l,error:c})}catch(n){if(ue(n))return{data:{user:null,session:null},error:n};throw n}}async signInWithOtp(t){var n,r,o,a,i;try{if("email"in t){const{email:s,options:l}=t;let c=null,d=null;this.flowType==="pkce"&&([c,d]=await Ao(this.storage,this.storageKey));const{error:f}=await he(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:s,data:(n=l==null?void 0:l.data)!==null&&n!==void 0?n:{},create_user:(r=l==null?void 0:l.shouldCreateUser)!==null&&r!==void 0?r:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},code_challenge:c,code_challenge_method:d},redirectTo:l==null?void 0:l.emailRedirectTo});return{data:{user:null,session:null},error:f}}if("phone"in t){const{phone:s,options:l}=t,{data:c,error:d}=await he(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:s,data:(o=l==null?void 0:l.data)!==null&&o!==void 0?o:{},create_user:(a=l==null?void 0:l.shouldCreateUser)!==null&&a!==void 0?a:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},channel:(i=l==null?void 0:l.channel)!==null&&i!==void 0?i:"sms"}});return{data:{user:null,session:null,messageId:c==null?void 0:c.message_id},error:d}}throw new el("You must provide either an email or phone number.")}catch(s){if(ue(s))return{data:{user:null,session:null},error:s};throw s}}async verifyOtp(t){var n,r;try{let o,a;"options"in t&&(o=(n=t.options)===null||n===void 0?void 0:n.redirectTo,a=(r=t.options)===null||r===void 0?void 0:r.captchaToken);const{data:i,error:s}=await he(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},t),{gotrue_meta_security:{captcha_token:a}}),redirectTo:o,xform:sr});if(s)throw s;if(!i)throw new Error("An error occurred on token verification.");const l=i.session,c=i.user;return l!=null&&l.access_token&&(await this._saveSession(l),await this._notifyAllSubscribers(t.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",l)),{data:{user:c,session:l},error:null}}catch(o){if(ue(o))return{data:{user:null,session:null},error:o};throw o}}async signInWithSSO(t){var n,r,o;try{let a=null,i=null;return this.flowType==="pkce"&&([a,i]=await Ao(this.storage,this.storageKey)),await he(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in t?{provider_id:t.providerId}:null),"domain"in t?{domain:t.domain}:null),{redirect_to:(r=(n=t.options)===null||n===void 0?void 0:n.redirectTo)!==null&&r!==void 0?r:void 0}),!((o=t==null?void 0:t.options)===null||o===void 0)&&o.captchaToken?{gotrue_meta_security:{captcha_token:t.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:a,code_challenge_method:i}),headers:this.headers,xform:h6})}catch(a){if(ue(a))return{data:null,error:a};throw a}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async t=>{const{data:{session:n},error:r}=t;if(r)throw r;if(!n)throw new ir;const{error:o}=await he(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:n.access_token});return{data:{user:null,session:null},error:o}})}catch(t){if(ue(t))return{data:{user:null,session:null},error:t};throw t}}async resend(t){try{const n=`${this.url}/resend`;if("email"in t){const{email:r,type:o,options:a}=t,{error:i}=await he(this.fetch,"POST",n,{headers:this.headers,body:{email:r,type:o,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},redirectTo:a==null?void 0:a.emailRedirectTo});return{data:{user:null,session:null},error:i}}else if("phone"in t){const{phone:r,type:o,options:a}=t,{data:i,error:s}=await he(this.fetch,"POST",n,{headers:this.headers,body:{phone:r,type:o,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}}});return{data:{user:null,session:null,messageId:i==null?void 0:i.message_id},error:s}}throw new el("You must provide either an email or phone number and a type")}catch(n){if(ue(n))return{data:{user:null,session:null},error:n};throw n}}async getSession(){return await this.initializePromise,await this._acquireLock(-1,async()=>this._useSession(async n=>n))}async _acquireLock(t,n){this._debug("#_acquireLock","begin",t);try{if(this.lockAcquired){const r=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),o=(async()=>(await r,await n()))();return this.pendingInLock.push((async()=>{try{await o}catch{}})()),o}return await this.lock(`lock:${this.storageKey}`,t,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const r=n();for(this.pendingInLock.push((async()=>{try{await r}catch{}})()),await r;this.pendingInLock.length;){const o=[...this.pendingInLock];await Promise.all(o),this.pendingInLock.splice(0,o.length)}return await r}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(t){this._debug("#_useSession","begin");try{const n=await this.__loadSession();return await t(n)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let t=null;const n=await Js(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",n),n!==null&&(this._isValidSession(n)?t=n:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!t)return{data:{session:null},error:null};const r=t.expires_at?t.expires_at<=Date.now()/1e3:!1;if(this._debug("#__loadSession()",`session has${r?"":" not"} expired`,"expires_at",t.expires_at),!r){if(this.storage.isServer){let i=this.suppressGetSessionWarning;t=new Proxy(t,{get:(l,c,d)=>(!i&&c==="user"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),i=!0,this.suppressGetSessionWarning=!0),Reflect.get(l,c,d))})}return{data:{session:t},error:null}}const{session:o,error:a}=await this._callRefreshToken(t.refresh_token);return a?{data:{session:null},error:a}:{data:{session:o},error:null}}finally{this._debug("#__loadSession()","end")}}async getUser(t){return t?await this._getUser(t):(await this.initializePromise,await this._acquireLock(-1,async()=>await this._getUser()))}async _getUser(t){try{return t?await he(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:t,xform:hr}):await this._useSession(async n=>{var r,o,a;const{data:i,error:s}=n;if(s)throw s;return!(!((r=i.session)===null||r===void 0)&&r.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new ir}:await he(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(a=(o=i.session)===null||o===void 0?void 0:o.access_token)!==null&&a!==void 0?a:void 0,xform:hr})})}catch(n){if(ue(n))return u6(n)&&(await this._removeSession(),await Zs(this.storage,`${this.storageKey}-code-verifier`)),{data:{user:null},error:n};throw n}}async updateUser(t,n={}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._updateUser(t,n))}async _updateUser(t,n={}){try{return await this._useSession(async r=>{const{data:o,error:a}=r;if(a)throw a;if(!o.session)throw new ir;const i=o.session;let s=null,l=null;this.flowType==="pkce"&&t.email!=null&&([s,l]=await Ao(this.storage,this.storageKey));const{data:c,error:d}=await he(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:n==null?void 0:n.emailRedirectTo,body:Object.assign(Object.assign({},t),{code_challenge:s,code_challenge_method:l}),jwt:i.access_token,xform:hr});if(d)throw d;return i.user=c.user,await this._saveSession(i),await this._notifyAllSubscribers("USER_UPDATED",i),{data:{user:i.user},error:null}})}catch(r){if(ue(r))return{data:{user:null},error:r};throw r}}_decodeJWT(t){return dw(t)}async setSession(t){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._setSession(t))}async _setSession(t){try{if(!t.access_token||!t.refresh_token)throw new ir;const n=Date.now()/1e3;let r=n,o=!0,a=null;const i=dw(t.access_token);if(i.exp&&(r=i.exp,o=r<=n),o){const{session:s,error:l}=await this._callRefreshToken(t.refresh_token);if(l)return{data:{user:null,session:null},error:l};if(!s)return{data:{user:null,session:null},error:null};a=s}else{const{data:s,error:l}=await this._getUser(t.access_token);if(l)throw l;a={access_token:t.access_token,refresh_token:t.refresh_token,user:s.user,token_type:"bearer",expires_in:r-n,expires_at:r},await this._saveSession(a),await this._notifyAllSubscribers("SIGNED_IN",a)}return{data:{user:a.user,session:a},error:null}}catch(n){if(ue(n))return{data:{session:null,user:null},error:n};throw n}}async refreshSession(t){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._refreshSession(t))}async _refreshSession(t){try{return await this._useSession(async n=>{var r;if(!t){const{data:i,error:s}=n;if(s)throw s;t=(r=i.session)!==null&&r!==void 0?r:void 0}if(!(t!=null&&t.refresh_token))throw new ir;const{session:o,error:a}=await this._callRefreshToken(t.refresh_token);return a?{data:{user:null,session:null},error:a}:o?{data:{user:o.user,session:o},error:null}:{data:{user:null,session:null},error:null}})}catch(n){if(ue(n))return{data:{user:null,session:null},error:n};throw n}}async _getSessionFromURL(t,n){try{if(!bn())throw new tl("No browser detected.");if(t.error||t.error_description||t.error_code)throw new tl(t.error_description||"Error in URL with unspecified error_description",{error:t.error||"unspecified_error",code:t.error_code||"unspecified_code"});switch(n){case"implicit":if(this.flowType==="pkce")throw new fw("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new tl("Not a valid implicit grant flow url.");break;default:}if(n==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!t.code)throw new fw("No code detected.");const{data:m,error:b}=await this._exchangeCodeForSession(t.code);if(b)throw b;const k=new URL(window.location.href);return k.searchParams.delete("code"),window.history.replaceState(window.history.state,"",k.toString()),{data:{session:m.session,redirectType:null},error:null}}const{provider_token:r,provider_refresh_token:o,access_token:a,refresh_token:i,expires_in:s,expires_at:l,token_type:c}=t;if(!a||!s||!i||!c)throw new tl("No session defined in URL");const d=Math.round(Date.now()/1e3),f=parseInt(s);let p=d+f;l&&(p=parseInt(l));const h=p-d;h*1e3<=Ga&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${h}s, should have been closer to ${f}s`);const y=p-f;d-y>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",y,p,d):d-y<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",y,p,d);const{data:w,error:x}=await this._getUser(a);if(x)throw x;const v={provider_token:r,provider_refresh_token:o,access_token:a,expires_in:f,expires_at:p,refresh_token:i,token_type:c,user:w.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),{data:{session:v,redirectType:t.type},error:null}}catch(r){if(ue(r))return{data:{session:null,redirectType:null},error:r};throw r}}_isImplicitGrantCallback(t){return!!(t.access_token||t.error_description)}async _isPKCECallback(t){const n=await Js(this.storage,`${this.storageKey}-code-verifier`);return!!(t.code&&n)}async signOut(t={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._signOut(t))}async _signOut({scope:t}={scope:"global"}){return await this._useSession(async n=>{var r;const{data:o,error:a}=n;if(a)return{error:a};const i=(r=o.session)===null||r===void 0?void 0:r.access_token;if(i){const{error:s}=await this.admin.signOut(i,t);if(s&&!(l6(s)&&(s.status===404||s.status===401||s.status===403)))return{error:s}}return t!=="others"&&(await this._removeSession(),await Zs(this.storage,`${this.storageKey}-code-verifier`)),{error:null}})}onAuthStateChange(t){const n=Kz(),r={id:n,callback:t,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",n),this.stateChangeEmitters.delete(n)}};return this._debug("#onAuthStateChange()","registered callback with id",n),this.stateChangeEmitters.set(n,r),(async()=>(await this.initializePromise,await this._acquireLock(-1,async()=>{this._emitInitialSession(n)})))(),{data:{subscription:r}}}async _emitInitialSession(t){return await this._useSession(async n=>{var r,o;try{const{data:{session:a},error:i}=n;if(i)throw i;await((r=this.stateChangeEmitters.get(t))===null||r===void 0?void 0:r.callback("INITIAL_SESSION",a)),this._debug("INITIAL_SESSION","callback id",t,"session",a)}catch(a){await((o=this.stateChangeEmitters.get(t))===null||o===void 0?void 0:o.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",t,"error",a),console.error(a)}})}async resetPasswordForEmail(t,n={}){let r=null,o=null;this.flowType==="pkce"&&([r,o]=await Ao(this.storage,this.storageKey,!0));try{return await he(this.fetch,"POST",`${this.url}/recover`,{body:{email:t,code_challenge:r,code_challenge_method:o,gotrue_meta_security:{captcha_token:n.captchaToken}},headers:this.headers,redirectTo:n.redirectTo})}catch(a){if(ue(a))return{data:null,error:a};throw a}}async getUserIdentities(){var t;try{const{data:n,error:r}=await this.getUser();if(r)throw r;return{data:{identities:(t=n.user.identities)!==null&&t!==void 0?t:[]},error:null}}catch(n){if(ue(n))return{data:null,error:n};throw n}}async linkIdentity(t){var n;try{const{data:r,error:o}=await this._useSession(async a=>{var i,s,l,c,d;const{data:f,error:p}=a;if(p)throw p;const h=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,t.provider,{redirectTo:(i=t.options)===null||i===void 0?void 0:i.redirectTo,scopes:(s=t.options)===null||s===void 0?void 0:s.scopes,queryParams:(l=t.options)===null||l===void 0?void 0:l.queryParams,skipBrowserRedirect:!0});return await he(this.fetch,"GET",h,{headers:this.headers,jwt:(d=(c=f.session)===null||c===void 0?void 0:c.access_token)!==null&&d!==void 0?d:void 0})});if(o)throw o;return bn()&&!(!((n=t.options)===null||n===void 0)&&n.skipBrowserRedirect)&&window.location.assign(r==null?void 0:r.url),{data:{provider:t.provider,url:r==null?void 0:r.url},error:null}}catch(r){if(ue(r))return{data:{provider:t.provider,url:null},error:r};throw r}}async unlinkIdentity(t){try{return await this._useSession(async n=>{var r,o;const{data:a,error:i}=n;if(i)throw i;return await he(this.fetch,"DELETE",`${this.url}/user/identities/${t.identity_id}`,{headers:this.headers,jwt:(o=(r=a.session)===null||r===void 0?void 0:r.access_token)!==null&&o!==void 0?o:void 0})})}catch(n){if(ue(n))return{data:null,error:n};throw n}}async _refreshAccessToken(t){const n=`#_refreshAccessToken(${t.substring(0,5)}...)`;this._debug(n,"begin");try{const r=Date.now();return await Zz(async o=>(o>0&&await Jz(200*Math.pow(2,o-1)),this._debug(n,"refreshing attempt",o),await he(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:t},headers:this.headers,xform:sr})),(o,a)=>{const i=200*Math.pow(2,o);return a&&Od(a)&&Date.now()+i-r<Ga})}catch(r){if(this._debug(n,"error",r),ue(r))return{data:{session:null,user:null},error:r};throw r}finally{this._debug(n,"end")}}_isValidSession(t){return typeof t=="object"&&t!==null&&"access_token"in t&&"refresh_token"in t&&"expires_at"in t}async _handleProviderSignIn(t,n){const r=await this._getUrlForProvider(`${this.url}/authorize`,t,{redirectTo:n.redirectTo,scopes:n.scopes,queryParams:n.queryParams});return this._debug("#_handleProviderSignIn()","provider",t,"options",n,"url",r),bn()&&!n.skipBrowserRedirect&&window.location.assign(r),{data:{provider:t,url:r},error:null}}async _recoverAndRefresh(){var t;const n="#_recoverAndRefresh()";this._debug(n,"begin");try{const r=await Js(this.storage,this.storageKey);if(this._debug(n,"session from storage",r),!this._isValidSession(r)){this._debug(n,"session is not valid"),r!==null&&await this._removeSession();return}const o=Math.round(Date.now()/1e3),a=((t=r.expires_at)!==null&&t!==void 0?t:1/0)<o+cw;if(this._debug(n,`session has${a?"":" not"} expired with margin of ${cw}s`),a){if(this.autoRefreshToken&&r.refresh_token){const{error:i}=await this._callRefreshToken(r.refresh_token);i&&(console.error(i),Od(i)||(this._debug(n,"refresh failed with a non-retryable error, removing the session",i),await this._removeSession()))}}else await this._notifyAllSubscribers("SIGNED_IN",r)}catch(r){this._debug(n,"error",r),console.error(r);return}finally{this._debug(n,"end")}}async _callRefreshToken(t){var n,r;if(!t)throw new ir;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const o=`#_callRefreshToken(${t.substring(0,5)}...)`;this._debug(o,"begin");try{this.refreshingDeferred=new mc;const{data:a,error:i}=await this._refreshAccessToken(t);if(i)throw i;if(!a.session)throw new ir;await this._saveSession(a.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",a.session);const s={session:a.session,error:null};return this.refreshingDeferred.resolve(s),s}catch(a){if(this._debug(o,"error",a),ue(a)){const i={session:null,error:a};return Od(a)||await this._removeSession(),(n=this.refreshingDeferred)===null||n===void 0||n.resolve(i),i}throw(r=this.refreshingDeferred)===null||r===void 0||r.reject(a),a}finally{this.refreshingDeferred=null,this._debug(o,"end")}}async _notifyAllSubscribers(t,n,r=!0){const o=`#_notifyAllSubscribers(${t})`;this._debug(o,"begin",n,`broadcast = ${r}`);try{this.broadcastChannel&&r&&this.broadcastChannel.postMessage({event:t,session:n});const a=[],i=Array.from(this.stateChangeEmitters.values()).map(async s=>{try{await s.callback(t,n)}catch(l){a.push(l)}});if(await Promise.all(i),a.length>0){for(let s=0;s<a.length;s+=1)console.error(a[s]);throw a[0]}}finally{this._debug(o,"end")}}async _saveSession(t){this._debug("#_saveSession()",t),this.suppressGetSessionWarning=!0,await wC(this.storage,this.storageKey,t)}async _removeSession(){this._debug("#_removeSession()"),await Zs(this.storage,this.storageKey),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const t=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{t&&bn()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",t)}catch(n){console.error("removing visibilitychange callback failed",n)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const t=setInterval(()=>this._autoRefreshTokenTick(),Ga);this.autoRefreshTicker=t,t&&typeof t=="object"&&typeof t.unref=="function"?t.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(t),setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const t=this.autoRefreshTicker;this.autoRefreshTicker=null,t&&clearInterval(t)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const t=Date.now();try{return await this._useSession(async n=>{const{data:{session:r}}=n;if(!r||!r.refresh_token||!r.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const o=Math.floor((r.expires_at*1e3-t)/Ga);this._debug("#_autoRefreshTokenTick()",`access token expires in ${o} ticks, a tick lasts ${Ga}ms, refresh threshold is ${vw} ticks`),o<=vw&&await this._callRefreshToken(r.refresh_token)})}catch(n){console.error("Auto refresh tick failed with error. This is likely a transient error.",n)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(t){if(t.isAcquireTimeout||t instanceof _C)this._debug("auto refresh token tick lock not available");else throw t}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!bn()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(t){console.error("_handleVisibilityChange",t)}}async _onVisibilityChanged(t){const n=`#_onVisibilityChanged(${t})`;this._debug(n,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),t||(await this.initializePromise,await this._acquireLock(-1,async()=>{if(document.visibilityState!=="visible"){this._debug(n,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(t,n,r){const o=[`provider=${encodeURIComponent(n)}`];if(r!=null&&r.redirectTo&&o.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`),r!=null&&r.scopes&&o.push(`scopes=${encodeURIComponent(r.scopes)}`),this.flowType==="pkce"){const[a,i]=await Ao(this.storage,this.storageKey),s=new URLSearchParams({code_challenge:`${encodeURIComponent(a)}`,code_challenge_method:`${encodeURIComponent(i)}`});o.push(s.toString())}if(r!=null&&r.queryParams){const a=new URLSearchParams(r.queryParams);o.push(a.toString())}return r!=null&&r.skipBrowserRedirect&&o.push(`skip_http_redirect=${r.skipBrowserRedirect}`),`${t}?${o.join("&")}`}async _unenroll(t){try{return await this._useSession(async n=>{var r;const{data:o,error:a}=n;return a?{data:null,error:a}:await he(this.fetch,"DELETE",`${this.url}/factors/${t.factorId}`,{headers:this.headers,jwt:(r=o==null?void 0:o.session)===null||r===void 0?void 0:r.access_token})})}catch(n){if(ue(n))return{data:null,error:n};throw n}}async _enroll(t){try{return await this._useSession(async n=>{var r,o;const{data:a,error:i}=n;if(i)return{data:null,error:i};const s=Object.assign({friendly_name:t.friendlyName,factor_type:t.factorType},t.factorType==="phone"?{phone:t.phone}:{issuer:t.issuer}),{data:l,error:c}=await he(this.fetch,"POST",`${this.url}/factors`,{body:s,headers:this.headers,jwt:(r=a==null?void 0:a.session)===null||r===void 0?void 0:r.access_token});return c?{data:null,error:c}:(t.factorType==="totp"&&(!((o=l==null?void 0:l.totp)===null||o===void 0)&&o.qr_code)&&(l.totp.qr_code=`data:image/svg+xml;utf-8,${l.totp.qr_code}`),{data:l,error:null})})}catch(n){if(ue(n))return{data:null,error:n};throw n}}async _verify(t){return this._acquireLock(-1,async()=>{try{return await this._useSession(async n=>{var r;const{data:o,error:a}=n;if(a)return{data:null,error:a};const{data:i,error:s}=await he(this.fetch,"POST",`${this.url}/factors/${t.factorId}/verify`,{body:{code:t.code,challenge_id:t.challengeId},headers:this.headers,jwt:(r=o==null?void 0:o.session)===null||r===void 0?void 0:r.access_token});return s?{data:null,error:s}:(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+i.expires_in},i)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",i),{data:i,error:s})})}catch(n){if(ue(n))return{data:null,error:n};throw n}})}async _challenge(t){return this._acquireLock(-1,async()=>{try{return await this._useSession(async n=>{var r;const{data:o,error:a}=n;return a?{data:null,error:a}:await he(this.fetch,"POST",`${this.url}/factors/${t.factorId}/challenge`,{body:{channel:t.channel},headers:this.headers,jwt:(r=o==null?void 0:o.session)===null||r===void 0?void 0:r.access_token})})}catch(n){if(ue(n))return{data:null,error:n};throw n}})}async _challengeAndVerify(t){const{data:n,error:r}=await this._challenge({factorId:t.factorId});return r?{data:null,error:r}:await this._verify({factorId:t.factorId,challengeId:n.id,code:t.code})}async _listFactors(){const{data:{user:t},error:n}=await this.getUser();if(n)return{data:null,error:n};const r=(t==null?void 0:t.factors)||[],o=r.filter(i=>i.factor_type==="totp"&&i.status==="verified"),a=r.filter(i=>i.factor_type==="phone"&&i.status==="verified");return{data:{all:r,totp:o,phone:a},error:null}}async _getAuthenticatorAssuranceLevel(){return this._acquireLock(-1,async()=>await this._useSession(async t=>{var n,r;const{data:{session:o},error:a}=t;if(a)return{data:null,error:a};if(!o)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const i=this._decodeJWT(o.access_token);let s=null;i.aal&&(s=i.aal);let l=s;((r=(n=o.user.factors)===null||n===void 0?void 0:n.filter(f=>f.status==="verified"))!==null&&r!==void 0?r:[]).length>0&&(l="aal2");const d=i.amr||[];return{data:{currentLevel:s,nextLevel:l,currentAuthenticationMethods:d},error:null}}))}}Wi.nextInstanceID=0;const E6=Wi;class O6 extends E6{constructor(t){super(t)}}var T6=function(e,t,n,r){function o(a){return a instanceof n?a:new n(function(i){i(a)})}return new(n||(n=Promise))(function(a,i){function s(d){try{c(r.next(d))}catch(f){i(f)}}function l(d){try{c(r.throw(d))}catch(f){i(f)}}function c(d){d.done?a(d.value):o(d.value).then(s,l)}c((r=r.apply(e,t||[])).next())})};class R6{constructor(t,n,r){var o,a,i;if(this.supabaseUrl=t,this.supabaseKey=n,!t)throw new Error("supabaseUrl is required.");if(!n)throw new Error("supabaseKey is required.");const s=Uz(t);this.realtimeUrl=`${s}/realtime/v1`.replace(/^http/i,"ws"),this.authUrl=`${s}/auth/v1`,this.storageUrl=`${s}/storage/v1`,this.functionsUrl=`${s}/functions/v1`;const l=`sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`,c={db:Iz,realtime:Nz,auth:Object.assign(Object.assign({},Lz),{storageKey:l}),global:Az},d=Hz(r??{},c);this.storageKey=(o=d.auth.storageKey)!==null&&o!==void 0?o:"",this.headers=(a=d.global.headers)!==null&&a!==void 0?a:{},d.accessToken?(this.accessToken=d.accessToken,this.auth=new Proxy({},{get:(f,p)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(p)} is not possible`)}})):this.auth=this._initSupabaseAuthClient((i=d.auth)!==null&&i!==void 0?i:{},this.headers,d.global.fetch),this.fetch=Fz(n,this._getAccessToken.bind(this),d.global.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers,accessToken:this._getAccessToken.bind(this)},d.realtime)),this.rest=new tz(`${s}/rest/v1`,{headers:this.headers,schema:d.db.schema,fetch:this.fetch}),d.accessToken||this._listenForAuthEvents()}get functions(){return new $M(this.functionsUrl,{headers:this.headers,customFetch:this.fetch})}get storage(){return new jz(this.storageUrl,this.headers,this.fetch)}from(t){return this.rest.from(t)}schema(t){return this.rest.schema(t)}rpc(t,n={},r={}){return this.rest.rpc(t,n,r)}channel(t,n={config:{}}){return this.realtime.channel(t,n)}getChannels(){return this.realtime.getChannels()}removeChannel(t){return this.realtime.removeChannel(t)}removeAllChannels(){return this.realtime.removeAllChannels()}_getAccessToken(){var t,n;return T6(this,void 0,void 0,function*(){if(this.accessToken)return yield this.accessToken();const{data:r}=yield this.auth.getSession();return(n=(t=r.session)===null||t===void 0?void 0:t.access_token)!==null&&n!==void 0?n:null})}_initSupabaseAuthClient({autoRefreshToken:t,persistSession:n,detectSessionInUrl:r,storage:o,storageKey:a,flowType:i,lock:s,debug:l},c,d){const f={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new O6({url:this.authUrl,headers:Object.assign(Object.assign({},f),c),storageKey:a,autoRefreshToken:t,persistSession:n,detectSessionInUrl:r,storage:o,flowType:i,lock:s,debug:l,fetch:d,hasCustomAuthorizationHeader:"Authorization"in this.headers})}_initRealtimeClient(t){return new gz(this.realtimeUrl,Object.assign(Object.assign({},t),{params:Object.assign({apikey:this.supabaseKey},t==null?void 0:t.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((n,r)=>{this._handleTokenChanged(n,"CLIENT",r==null?void 0:r.access_token)})}_handleTokenChanged(t,n,r){(t==="TOKEN_REFRESHED"||t==="SIGNED_IN")&&this.changedAccessToken!==r?this.changedAccessToken=r:t==="SIGNED_OUT"&&(this.realtime.setAuth(),n=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}}const j6=(e,t,n)=>new R6(e,t,n),$6="https://rkbytpsgrveydxuubsla.supabase.co",P6="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrYnl0cHNncnZleWR4dXVic2xhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg3MjQyNjIsImV4cCI6MjA1NDMwMDI2Mn0.FZT6zwJXu175sqTuugIdfYWn8qjcndYQqlLHcByLcP8",Ve=j6($6,P6),kC=g.createContext(),A6=({children:e})=>{const[t,n]=g.useState(void 0),r=async(i,s)=>{const{data:l,error:c}=await Ve.auth.signUp({email:i.toLowerCase(),password:s});return c?{success:!1,error:c}:{success:!0,data:l}},o=async(i,s)=>{try{const{data:l,error:c}=await Ve.auth.signInWithPassword({email:i.toLowerCase(),password:s});return c?{success:!1,error:c}:{success:!0,data:l}}catch(l){return{success:!1,error:l}}},a=async()=>{Ve.auth.signOut()};return g.useEffect(()=>{Ve.auth.getSession().then(({data:{session:i}})=>{n(i)}),Ve.auth.onAuthStateChange((i,s)=>{n(s)})},[]),S.jsx(kC.Provider,{value:{session:t,signUpNewUser:r,signIn:o,signOut:a},children:e})},tr=()=>g.useContext(kC);function I6(){const{session:e,signOut:t}=tr(),n=ts(),r=async o=>{o.preventDefault();try{await t(),n("/BudgetTracker/Login")}catch{}};return S.jsx("div",{style:{display:"flex",height:"100vh",overflow:"scroll initial"},children:S.jsxs(sc,{textColor:"#fff",backgroundColor:"#333",children:[S.jsx(JS,{prefix:S.jsx("i",{className:"fa fa-bars fa-large"}),children:S.jsx(hl,{to:"/BudgetTracker/",className:"text-decoration-none",style:{color:"inherit"},children:"Home"})}),S.jsx(XS,{className:"sidebar-content",children:S.jsxs(ZS,{children:[S.jsx(hl,{exact:!0,to:"/BudgetTracker/Summary",activeClassName:"activeClicked",children:S.jsx(vi,{icon:"chart-line",children:"Summary"})}),e?S.jsx(S.Fragment,{}):S.jsx(hl,{exact:!0,to:"/BudgetTracker/Login",activeClassName:"activeClicked",children:S.jsx(vi,{icon:"chart-line",children:"Login"})})]})}),S.jsx(QS,{style:{textAlign:"center"},children:e&&S.jsx(vi,{onClick:r,className:"sidebar-btn-wrapper hover:cursor-pointer",style:{padding:"20px 5px"},children:"Sign Out"})})]})})}const bp=new Intl.NumberFormat(void 0,{currency:"cad",style:"currency",minimumFractionDigits:0});function Sh({name:e,amount:t,max:n,gray:r,hideButtons:o,onAddExpenseClick:a,onViewExpensesClick:i}){const s=[];return t>n?s.push("bg-danger","bg-opacity-10"):r&&s.push("bg-light"),S.jsx(Hc,{className:s.join(" "),children:S.jsxs(Hc.Body,{children:[S.jsxs(Hc.Title,{className:"d-flex justify-content-between align-items-baseline fw-normal mb-3",children:[S.jsx("div",{className:"me-2",children:e}),S.jsxs("div",{className:"d-flex align-items-baseline",children:[bp.format(t),n&&S.jsxs("span",{className:"text-muted fs-6 ms-1",children:[" / ",bp.format(n)," "]})]})]}),n&&S.jsx(ek,{className:"rounded-pill",variant:L6(t,n),min:0,max:n,now:t}),!o&&S.jsxs(Tr,{direction:"horizontal",gap:"2",className:"mt-4",children:[S.jsx(qt,{variant:"outline-primary",className:"ms-auto",onClick:a,children:"Add Expense"}),S.jsx(qt,{onClick:i,variant:"outline-secondary",children:"View Expense"})]})]})})}function L6(e,t){const n=e/t;return n<.5?"primary":n<.75?"warning":"danger"}const SC=q.createContext(),N6=null;function Ur(){return g.useContext(SC)}const D6=({children:e})=>{const[t,n]=g.useState([]),[r,o]=g.useState([]),[a,i]=g.useState([]),[s,l]=g.useState(),{session:c}=tr();g.useEffect(()=>{const m=async()=>{const{data:_,error:E}=await Ve.from("budgets").select().eq("UID",c.user.id);E&&n([]),_&&n(_)},b=async()=>{const{data:_,error:E}=await Ve.from("expenses").select().eq("UID",c.user.id);E&&o([]),_&&o(_)},k=async()=>{const{data:_,error:E}=await Ve.from("repeats").select().eq("UID",c.user.id);E&&i([]),_&&i(_)},C=async()=>{const{data:_,error:E}=await Ve.from("budgets").select().eq("name","Uncategorized").eq("UID",c.user.id);_.length<1&&await Ve.from("budgets").insert([{name:"Uncategorized",max:null,UID:c.user.id}]).select(),E&&l(),_&&l(_[0].id)};m(),b(),k(),C()},[c]);function d(m){return r.filter(b=>b.budgetId===m)}function f(m){return a.filter(b=>b.budgetId===m)}function p({description:m,amount:b,budgetId:k,date:C,repeat:_,UID:E}){(async()=>{const{data:A,error:$}=await Ve.from("expenses").insert([{description:m,amount:b,budgetId:k,date:C,repeat:_,UID:E}]).select();if(_!="None"){let I=C.split("-"),B=new Date(I[0],I[1]-1,I[2]);_=="Daily"?new Date(B.getFullYear(),B.getMonth(),B.getDate()+1).toLocaleDateString("en-CA"):_=="Weekly"?new Date(B.getFullYear(),B.getMonth(),B.getDate()+7).toLocaleDateString("en-CA"):_=="Monthly"?new Date(B.getFullYear(),B.getMonth()+1,B.getDate()).toLocaleDateString("en-CA"):_=="Yearly"&&new Date(B.getFullYear()+1,B.getMonth(),B.getDate()).toLocaleDateString("en-CA"),await Ve.from("repeats").insert([{description:m,amount:b,budgetId:k,date:C,repeat:_,parent:A[0].id,UID:E}])}o(I=>[...I,A[0]])})()}function h({description:m,amount:b,budgetId:k,date:C,repeat:_,UID:E}){(async()=>{const{data:A,error:$}=await Ve.from("expenses").insert([{description:m,amount:b,budgetId:k,date:C,repeat:_,UID:E}]).select();o(I=>[...I,A[0]])})()}function y({name:m,max:b,UID:k}){(async()=>{const{data:_,error:E}=await Ve.from("budgets").select().eq("name",m);_.length<1&&m!="Uncategorized"&&w({name:m,max:b,UID:k})})()}function w({name:m,max:b,UID:k}){(async()=>{const{data:_,error:E}=await Ve.from("budgets").insert([{name:m,max:b,UID:k}]).select();n(O=>[...O,_[0]])})()}function x({id:m}){(async()=>{await Ve.from("expenses").delete().eq("id",m),o(k=>k.filter(C=>C.id!==m))})()}function v({id:m}){const b=async()=>{await Ve.from("expenses").update({budgetId:s}).eq("budgetId",m),o(C=>C.map(_=>_.budgetId!==m?_:{..._,budgetId:s}))},k=async()=>{await Ve.from("budgets").delete().eq("id",m),n(C=>C.filter(_=>_.id!==m))};b(),k()}return S.jsxs(SC.Provider,{value:{budgets:t,expenses:r,repeats:a,uncategorizedBudgetId:s,getBudgetExpenses:d,getRepeatExpenses:f,addRepeatedExpense:h,addExpense:p,addBudget:y,deleteExpense:x,deleteBudget:v},children:[" ",e," "]})};function M6({show:e,handleClose:t}){const n=g.useRef(),r=g.useRef(),{addBudget:o}=Ur(),{session:a}=tr();function i(s){s.preventDefault(),o({name:n.current.value,max:parseFloat(r.current.value),UID:a.user.id}),t()}return S.jsx(Ht,{show:e,onHide:t,children:S.jsxs(pe,{onSubmit:i,children:[S.jsx(Ht.Header,{closeButton:!0,children:S.jsx(Ht.Title,{children:"New Budget"})}),S.jsxs(Ht.Body,{children:[S.jsxs(pe.Group,{className:"mb-3",controlId:"name",children:[S.jsx(pe.Label,{children:"Name"}),S.jsx(pe.Control,{ref:n,type:"text",required:!0})]}),S.jsxs(pe.Group,{className:"mb-3",controlId:"max",children:[S.jsx(pe.Label,{children:"Max Spending"}),S.jsx(pe.Control,{ref:r,type:"number",required:!0,min:0,step:.01})]}),S.jsx("div",{className:"d-flex justify-content-end",children:S.jsx(qt,{variant:"primary",type:"submit",children:"Add"})})]})]})})}function z6({show:e,handleClose:t,defaultBudgetId:n}){const r=g.useRef(),o=g.useRef(),a=g.useRef(),i=g.useRef(),s=g.useRef(),{addExpense:l,budgets:c,updateAdd:d,uncategorizedBudgetId:f}=Ur(),{session:p}=tr();function h(w){w.preventDefault(),l({description:r.current.value,amount:parseFloat(o.current.value),budgetId:a.current.value,date:s.current.value,repeat:i.current.value,UID:p.user.id}),t()}var y=new Date().toLocaleDateString("en-CA");return S.jsx(Ht,{show:e,onHide:t,children:S.jsxs(pe,{onSubmit:h,children:[S.jsx(Ht.Header,{closeButton:!0,children:S.jsx(Ht.Title,{children:"New Expense"})}),S.jsxs(Ht.Body,{children:[S.jsxs(pe.Group,{className:"mb-3",controlId:"description",children:[S.jsx(pe.Label,{children:"Description"}),S.jsx(pe.Control,{ref:r,type:"text",required:!0})]}),S.jsxs(pe.Group,{className:"mb-3",controlId:"amount",children:[S.jsx(pe.Label,{children:"Amount"}),S.jsx(pe.Control,{ref:o,type:"number",required:!0,min:0,step:.01})]}),S.jsxs(pe.Group,{className:"mb-3",controlId:"budgetId",children:[S.jsx(pe.Label,{children:"Budget"}),S.jsx(pe.Select,{defaultValue:n,ref:a,children:c.map(w=>S.jsx("option",{value:w.id,children:w.name},w.id))})]}),S.jsxs(pe.Group,{className:"mb-3",controlId:"budgetId",children:[S.jsx(pe.Label,{children:"Repeat"}),S.jsxs(pe.Select,{defaultValue:"None",ref:i,children:[S.jsx("option",{id:"None",children:"None"}),S.jsx("option",{id:"Daily",children:"Daily"}),S.jsx("option",{id:"Weekly",children:"Weekly"}),S.jsx("option",{id:"Monthly",children:"Monthly"}),S.jsx("option",{id:"Yearly",children:"Yearly"})]})]}),S.jsxs(pe.Group,{className:"mb-3",controlId:"date",children:[S.jsx(pe.Label,{children:"Date"}),S.jsx(pe.Control,{defaultValue:y,ref:s,type:"date",required:!0})]}),S.jsx("div",{className:"d-flex justify-content-end",children:S.jsx(qt,{variant:"primary",type:"submit",children:"Add"})})]})]})})}function F6(e){const{getBudgetExpenses:t}=Ur(),n=t(N6).reduce((r,o)=>r+o.amount,0);return n===0?null:S.jsx(Sh,{amount:n,name:"Uncategorized",gray:!0,...e})}function B6(){const{expenses:e,budgets:t}=Ur(),n=e.reduce((o,a)=>o+a.amount,0),r=t.reduce((o,a)=>o+a.max,0);return r===0?null:S.jsx(Sh,{amount:n,name:"Total",gray:!0,max:r,hideButtons:!0})}function U6(e,t,n){g.useEffect(()=>{if(!document)return;const r=document.querySelector('script[src="'.concat(e,'"]'));if(r!=null&&r.dataset.loaded){t==null||t();return}const o=r||document.createElement("script");r||(o.src=e);const a=()=>{o.dataset.loaded="1",t==null||t()};return o.addEventListener("load",a),o.addEventListener("error",n),r||document.head.append(o),()=>{o.removeEventListener("load",a),o.removeEventListener("error",n)}},[])}function H6(e){let{chartVersion:t="current",chartPackages:n=["corechart","controls"],chartLanguage:r="en",mapsApiKey:o}=e;const[a,i]=g.useState(null),[s,l]=g.useState(!1);return U6("https://www.gstatic.com/charts/loader.js",()=>{const c=window==null?void 0:window.google;c&&(c.charts.load(t,{packages:n,language:r,mapsApiKey:o}),c.charts.setOnLoadCallback(()=>{i(c)}))},()=>{l(!0)}),[a,s]}function W6(e){let{onLoad:t,onError:n,...r}=e;const[o,a]=H6(r);return g.useEffect(()=>{o&&t&&t(o)},[o]),g.useEffect(()=>{a&&n&&n()},[a]),null}const CC={legend_toggle:!1,options:{},legendToggle:!1,getChartWrapper:()=>{},spreadSheetQueryParameters:{headers:1,gid:1},rootProps:{},chartWrapperParams:{}};let bw=0;const V6=()=>(bw+=1,"reactgooglegraph-".concat(bw)),G6=["#3366CC","#DC3912","#FF9900","#109618","#990099","#3B3EAC","#0099C6","#DD4477","#66AA00","#B82E2E","#316395","#994499","#22AA99","#AAAA11","#6633CC","#E67300","#8B0707","#329262","#5574A6","#3B3EAC"],q6=async function(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return new Promise((r,o)=>{const a="".concat(n.headers?"headers=".concat(n.headers):"headers=0"),i="".concat(n.query?"&tq=".concat(encodeURIComponent(n.query)):""),s="".concat(n.gid?"&gid=".concat(n.gid):""),l="".concat(n.sheet?"&sheet=".concat(n.sheet):""),c="".concat(n.access_token?"&access_token=".concat(n.access_token):""),d="".concat(a).concat(s).concat(l).concat(i).concat(c),f="".concat(t,"/gviz/tq?").concat(d);new e.visualization.Query(f).send(h=>{h.isError()?o("Error in query:  ".concat(h.getMessage()," ").concat(h.getDetailedMessage())):r(h.getDataTable())})})},{Provider:K6,Consumer:Y6}=g.createContext(CC),X6=e=>{let{children:t,value:n}=e;return g.createElement(K6,{value:n},t)},EC=e=>{let{render:t}=e;return g.createElement(Y6,null,n=>t(n))},Q6="#CCCCCC";class J6 extends g.Component{componentDidMount(){this.draw(this.props),window.addEventListener("resize",this.onResize),(this.props.legend_toggle||this.props.legendToggle)&&this.listenToLegendToggle()}componentWillUnmount(){const{google:t,googleChartWrapper:n}=this.props;window.removeEventListener("resize",this.onResize),t.visualization.events.removeAllListeners(n),n.getChartType()==="Timeline"&&n.getChart()&&n.getChart().clearChart()}componentDidUpdate(){this.draw(this.props)}render(){return null}constructor(...t){super(...t),this.state={hiddenColumns:[]},this.listenToLegendToggle=()=>{const{google:n,googleChartWrapper:r}=this.props;n.visualization.events.addListener(r,"select",()=>{const a=r.getChart().getSelection(),i=r.getDataTable();if(a.length===0||a[0].row||!i)return;const s=a[0].column,l=this.getColumnID(i,s);this.state.hiddenColumns.includes(l)?this.setState(c=>({...c,hiddenColumns:[...c.hiddenColumns.filter(d=>d!==l)]})):this.setState(c=>({...c,hiddenColumns:[...c.hiddenColumns,l]}))})},this.applyFormatters=(n,r)=>{const{google:o}=this.props;for(let a of r)switch(a.type){case"ArrowFormat":{new o.visualization.ArrowFormat(a.options).format(n,a.column);break}case"BarFormat":{new o.visualization.BarFormat(a.options).format(n,a.column);break}case"ColorFormat":{const i=new o.visualization.ColorFormat(a.options),{ranges:s}=a;for(let l of s)i.addRange(...l);i.format(n,a.column);break}case"DateFormat":{new o.visualization.DateFormat(a.options).format(n,a.column);break}case"NumberFormat":{new o.visualization.NumberFormat(a.options).format(n,a.column);break}case"PatternFormat":{new o.visualization.PatternFormat(a.options).format(n,a.column);break}}},this.getColumnID=(n,r)=>n.getColumnId(r)||n.getColumnLabel(r),this.draw=async n=>{let{data:r,diffdata:o,rows:a,columns:i,options:s,legend_toggle:l,legendToggle:c,chartType:d,formatters:f,spreadSheetUrl:p,spreadSheetQueryParameters:h}=n;const{google:y,googleChartWrapper:w}=this.props;let x,v=null;if(o){const k=y.visualization.arrayToDataTable(o.old),C=y.visualization.arrayToDataTable(o.new);v=y.visualization[d].prototype.computeDiff(k,C)}r!==null?Array.isArray(r)?x=y.visualization.arrayToDataTable(r):x=new y.visualization.DataTable(r):a&&i?x=y.visualization.arrayToDataTable([i,...a]):p?x=await q6(y,p,h):x=y.visualization.arrayToDataTable([]);const m=x.getNumberOfColumns();for(let k=0;k<m;k+=1){const C=this.getColumnID(x,k);if(this.state.hiddenColumns.includes(C)){const _=x.getColumnLabel(k),E=x.getColumnId(k),O=x.getColumnType(k);x.removeColumn(k),x.addColumn({label:_,id:E,type:O})}}const b=w.getChart();w.getChartType()==="Timeline"&&b&&b.clearChart(),w.setChartType(d),w.setOptions(s||{}),w.setDataTable(x),w.draw(),this.props.googleChartDashboard!==null&&this.props.googleChartDashboard.draw(x),v&&(w.setDataTable(v),w.draw()),f&&(this.applyFormatters(x,f),w.setDataTable(x),w.draw()),(c===!0||l===!0)&&this.grayOutHiddenColumns({options:s})},this.grayOutHiddenColumns=n=>{let{options:r}=n;const{googleChartWrapper:o}=this.props,a=o.getDataTable();if(!a)return;const i=a.getNumberOfColumns();if(this.state.hiddenColumns.length>0===!1)return;const l=Array.from({length:i-1}).map((c,d)=>{const f=this.getColumnID(a,d+1);return this.state.hiddenColumns.includes(f)?Q6:r&&r.colors?r.colors[d]:G6[d]});o.setOptions({...r,colors:l}),o.draw()},this.onResize=()=>{const{googleChartWrapper:n}=this.props;n.draw()}}}class Z6 extends g.Component{componentDidMount(){}componentWillUnmount(){}shouldComponentUpdate(){return!1}render(){const{google:t,googleChartWrapper:n,googleChartDashboard:r}=this.props;return g.createElement(EC,{render:o=>g.createElement(J6,Object.assign({},o,{google:t,googleChartWrapper:n,googleChartDashboard:r}))})}}class eF extends g.Component{shouldComponentUpdate(){return!1}listenToEvents(t){let{chartEvents:n,google:r,googleChartWrapper:o}=t;if(n){r.visualization.events.removeAllListeners(o);for(let i of n){var a=this;const{eventName:s,callback:l}=i;r.visualization.events.addListener(o,s,function(){for(var c=arguments.length,d=new Array(c),f=0;f<c;f++)d[f]=arguments[f];l({chartWrapper:o,props:a.props,google:r,eventArgs:d})})}}}componentDidMount(){var t;const{google:n,googleChartWrapper:r}=this.props;this.listenToEvents({chartEvents:((t=this.propsFromContext)===null||t===void 0?void 0:t.chartEvents)||null,google:n,googleChartWrapper:r})}render(){return this.props,g.createElement(EC,{render:t=>(this.propsFromContext=t,null)})}constructor(t){super(t),this.propsFromContext=null}}let ww=0;class tF extends g.Component{componentDidMount(){const{options:t,google:n,chartType:r,chartWrapperParams:o,toolbarItems:a,getChartEditor:i,getChartWrapper:s}=this.props,l={chartType:r,options:t,containerId:this.getGraphID(),...o},c=new n.visualization.ChartWrapper(l);c.setOptions(t||{}),s&&s(c,n);const d=new n.visualization.Dashboard(this.dashboard_ref),f=this.addControls(c,d);a&&n.visualization.drawToolbar(this.toolbar_ref.current,a);let p=null;i&&(p=new n.visualization.ChartEditor,i({chartEditor:p,chartWrapper:c,google:n})),this.setState({googleChartEditor:p,googleChartControls:f,googleChartDashboard:d,googleChartWrapper:c,isReady:!0})}componentDidUpdate(){if(!this.state.googleChartWrapper||!this.state.googleChartDashboard||!this.state.googleChartControls)return;const{controls:t}=this.props;if(t)for(let n=0;n<t.length;n+=1){const{controlType:r,options:o,controlWrapperParams:a}=t[n];a&&"state"in a&&this.state.googleChartControls[n].control.setState(a.state),this.state.googleChartControls[n].control.setOptions(o),this.state.googleChartControls[n].control.setControlType(r)}}shouldComponentUpdate(t,n){return this.state.isReady!==n.isReady||t.controls!==this.props.controls}render(){const{width:t,height:n,options:r,style:o}=this.props,a={height:n||r&&r.height,width:t||r&&r.width,...o};return this.props.render?g.createElement("div",{ref:this.dashboard_ref,style:a},g.createElement("div",{ref:this.toolbar_ref,id:"toolbar"}),this.props.render({renderChart:this.renderChart,renderControl:this.renderControl,renderToolbar:this.renderToolBar})):g.createElement("div",{ref:this.dashboard_ref,style:a},this.renderControl(i=>{let{controlProp:s}=i;return s.controlPosition!=="bottom"}),this.renderChart(),this.renderControl(i=>{let{controlProp:s}=i;return s.controlPosition==="bottom"}),this.renderToolBar())}constructor(...t){var n;super(...t),n=this,this.state={googleChartWrapper:null,googleChartDashboard:null,googleChartControls:null,googleChartEditor:null,isReady:!1},this.graphID=null,this.dashboard_ref=g.createRef(),this.toolbar_ref=g.createRef(),this.getGraphID=()=>{const{graphID:r,graph_id:o}=this.props;let a;return!r&&!o?this.graphID?a=this.graphID:a=V6():r&&!o?a=r:o&&!r?a=o:a=r,this.graphID=a,this.graphID},this.getControlID=(r,o)=>{ww+=1;let a;return typeof r>"u"?a="googlechart-control-".concat(o,"-").concat(ww):a=r,a},this.addControls=(r,o)=>{const{google:a,controls:i}=this.props,s=i?i.map((c,d)=>{const{controlID:f,controlType:p,options:h,controlWrapperParams:y}=c,w=this.getControlID(f,d);return{controlProp:c,control:new a.visualization.ControlWrapper({containerId:w,controlType:p,options:h,...y})}}):null;if(!s)return null;o.bind(s.map(c=>{let{control:d}=c;return d}),r);for(let c of s){const{control:d,controlProp:f}=c,{controlEvents:p=[]}=f;for(let h of p){var l=this;const{callback:y,eventName:w}=h;a.visualization.events.removeListener(d,w,y),a.visualization.events.addListener(d,w,function(){for(var x=arguments.length,v=new Array(x),m=0;m<x;m++)v[m]=arguments[m];y({chartWrapper:r,controlWrapper:d,props:l.props,google:a,eventArgs:v})})}}return s},this.renderChart=()=>{const{width:r,height:o,options:a,style:i,className:s,rootProps:l,google:c}=this.props,d={height:o||a&&a.height,width:r||a&&a.width,...i};return g.createElement("div",Object.assign({id:this.getGraphID(),style:d,className:s},l),this.state.isReady&&this.state.googleChartWrapper!==null?g.createElement(g.Fragment,null,g.createElement(Z6,{googleChartWrapper:this.state.googleChartWrapper,google:c,googleChartDashboard:this.state.googleChartDashboard}),g.createElement(eF,{googleChartWrapper:this.state.googleChartWrapper,google:c})):null)},this.renderControl=function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:o=>!0;return n.state.isReady&&n.state.googleChartControls!==null?g.createElement(g.Fragment,null,n.state.googleChartControls.filter(o=>{let{controlProp:a,control:i}=o;return r({control:i,controlProp:a})}).map(o=>{let{control:a,controlProp:i}=o;return g.createElement("div",{key:a.getContainerId(),id:a.getContainerId()})})):null},this.renderToolBar=()=>this.props.toolbarItems?g.createElement("div",{ref:this.toolbar_ref}):null}}class hc extends g.Component{render(){const{chartLanguage:t,chartPackages:n,chartVersion:r,mapsApiKey:o,loader:a,errorElement:i}=this.props;return g.createElement(X6,{value:this.props},this.state.loadingStatus==="ready"&&this.state.google!==null?g.createElement(tF,Object.assign({},this.props,{google:this.state.google})):this.state.loadingStatus==="errored"&&i?i:a,g.createElement(W6,{chartLanguage:t,chartPackages:n,chartVersion:r,mapsApiKey:o,onLoad:this.onLoad,onError:this.onError}))}componentDidMount(){this._isMounted=!0}componentWillUnmount(){this._isMounted=!1}isFullyLoaded(t){const{controls:n,toolbarItems:r,getChartEditor:o}=this.props;return t&&t.visualization&&t.visualization.ChartWrapper&&t.visualization.Dashboard&&(!n||t.visualization.ChartWrapper)&&(!o||t.visualization.ChartEditor)&&(!r||t.visualization.drawToolbar)}constructor(...t){super(...t),this._isMounted=!1,this.state={loadingStatus:"loading",google:null},this.onLoad=n=>{if(this.props.onLoad&&this.props.onLoad(n),this.isFullyLoaded(n))this.onSuccess(n);else{const r=setInterval(()=>{const o=window.google;this._isMounted?o&&this.isFullyLoaded(o)&&(clearInterval(r),this.onSuccess(o)):clearInterval(r)},1e3)}},this.onSuccess=n=>{this.setState({loadingStatus:"ready",google:n})},this.onError=()=>{this.setState({loadingStatus:"errored"})}}}hc.defaultProps=CC;var xw;(function(e){e.annotation="annotation",e.annotationText="annotationText",e.certainty="certainty",e.emphasis="emphasis",e.interval="interval",e.scope="scope",e.style="style",e.tooltip="tooltip",e.domain="domain"})(xw||(xw={}));function nF({budgetId:e,handleClose:t}){const{getBudgetExpenses:n,budgets:r,deleteBudget:o,deleteExpense:a,uncategorizedBudgetId:i}=Ur(),s=n(e),l=i===e?{name:"Uncategorized",id:i}:r.find(p=>p.id===e);let c=0;for(let p=0;p<r.length;p++)if(r[p].id===e){c=r[p].max;break}var d=[["Expenses","Expenses"]];if(e==i)s.forEach(p=>{var h=[p.description+" "+p.date,p.amount];d.push(h)});else{s.forEach(p=>{var h=[p.description+" "+p.date,p.amount];d.push(h),c-=p.amount}),c<0&&(c=0);var f=["Unused",c];d.push(f)}return S.jsxs(Ht,{show:e!=null,onHide:t,children:[S.jsx(Ht.Header,{closeButton:!0,children:S.jsx(Ht.Title,{children:S.jsxs(Tr,{direction:"horizontal",gap:"2",children:[S.jsxs("div",{children:["Expenses - ",l==null?void 0:l.name," "]}),e!==i&&S.jsx(qt,{onClick:()=>{o(l),t()},variant:"outline-danger",children:"Delete"})]})})}),S.jsxs(Ht.Body,{children:[S.jsx(Tr,{direction:"vertical",gap:"3",children:s.map(p=>S.jsxs(Tr,{direction:"horizontal",gap:"2",children:[S.jsxs("div",{className:"me-auto fs-4",children:[p.description,S.jsxs("span",{className:"text-muted fs-6 ms-1",children:[" ",p.date,", Repeat: ",p.repeat," "]})]}),S.jsx("div",{className:"fs-5",children:bp.format(p.amount)}),S.jsx(qt,{onClick:()=>a(p),size:"sm",variant:"outline-danger",children:"×"})]},p.id))}),S.jsx(hc,{chartType:"PieChart",width:"100%",height:"400px",data:d,options:{title:"",pieHole:.4,is3D:!1}})]})]})}function rF(){const{budgets:e,getBudgetExpenses:t,getRepeatExpenses:n,addRepeatedExpense:r}=Ur(),o=new Date().toLocaleDateString("en-CA"),{session:a}=tr(),i=async(s,l)=>{await Ve.from("repeats").update({date:s}).eq("id",l)};e.forEach(s=>{n(s.id).forEach(c=>{if(o>c.date){let d=c.date.split("-"),f=new Date(d[0],d[1]-1,d[2]);if(r({description:c.description,amount:c.amount,budgetId:c.budgetId,date:c.date,repeat:"None",UID:a.user.id}),c.repeat=="Daily"){let p=new Date(f.getFullYear(),f.getMonth(),f.getDate()+1).toLocaleDateString("en-CA");c.date=p,i(p,c.id)}else if(c.repeat=="Weekly"){let p=new Date(f.getFullYear(),f.getMonth(),f.getDate()+7).toLocaleDateString("en-CA");c.date=p,i(p,c.id)}else if(c.repeat=="Monthly"){let p=new Date(f.getFullYear(),f.getMonth()+1,f.getDate()).toLocaleDateString("en-CA");c.date=p,i(p,c.id)}else if(c.repeat=="Yearly"){let p=new Date(f.getFullYear()+1,f.getMonth(),f.getDate()).toLocaleDateString("en-CA");c.date=p,i(p,c.id)}}})})}function oF(){const[e,t]=g.useState(!1),[n,r]=g.useState(!1),[o,a]=g.useState(),[i,s]=g.useState(),{budgets:l,getBudgetExpenses:c,uncategorizedBudgetId:d}=Ur();rF(),tr();function f(h){r(!0),s(h)}var p=[["Budget","Budget"]];return l.forEach(h=>{const y=c(h.id).reduce((m,b)=>m+b.amount,0);var w=[h.name,y];p.push(w);var x=h.max-y;x<0&&(x=0);var v=[h.name+" Unused",x];p.push(v)}),S.jsxs(S.Fragment,{children:[S.jsxs(Qi,{className:"mb-auto",children:[S.jsxs(Tr,{direction:"horizontal",gap:"2",className:"mb-4",children:[S.jsx("h1",{className:"me-auto",children:"Budget Tracker"}),S.jsx(qt,{variant:"primary",onClick:()=>t(!0),children:"Add Budget"}),S.jsx(qt,{variant:"outline-primary",onClick:f,children:"Add Expense"})]}),S.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px,1fr))",gap:"1rem",alignItems:"flex-start"},children:[l.map(h=>{const y=c(h.id).reduce((w,x)=>w+x.amount,0);return S.jsx(Sh,{name:h.name,amount:y,max:h.max,onAddExpenseClick:()=>f(h.id),onViewExpensesClick:()=>a(h.id)},h.id)}),S.jsx(F6,{onAddExpenseClick:f,onViewExpensesClick:()=>a(d)}),S.jsx(B6,{})]}),S.jsx(hc,{chartType:"PieChart",width:"100%",height:"400px",data:p,options:{title:"Budget",pieHole:.4,is3D:!1}})]}),S.jsx(M6,{show:e,handleClose:()=>t(!1)}),S.jsx(z6,{show:n,defaultBudgetId:i,handleClose:()=>r(!1)}),S.jsx(nF,{budgetId:o,handleClose:()=>a()})]})}function aF(){const{budgets:e,getBudgetExpenses:t}=Ur();var[n,r]=g.useState("Year"),[o,a]=g.useState("Month"),i=[],s=[[0],[1],[2],[3],[4],[5],[6],[7],[8],[9],[10],[11]],l=[[["January","January"]],[["February","February"]],[["March","March"]],[["April","April"]],[["May","May"]],[["June","June"]],[["July","July"]],[["August","August"]],[["September","September"]],[["October","October"]],[["November","November"]],[["December","December"]]];return e.forEach(c=>{t(c.id).forEach(f=>{const p=new Date(f.date);s[p.getMonth()].push(f),i.includes(p.getFullYear())||i.push(p.getFullYear())})}),s.forEach(c=>{c.slice(1).forEach(d=>{new Date(d.date);var f=[d.description+" "+d.date,d.amount];l[c[0]].push(f)})}),S.jsxs(Qi,{className:"mb-auto",children:[S.jsxs(Tr,{direction:"horizontal",gap:"2",className:"mb-4",children:[S.jsx("h1",{className:"me-auto",children:"Summary"}),S.jsx(Kl,{id:"dropdown-basic-button",title:n,children:i.map(c=>S.jsx(gt.Item,{onClick:()=>r(c),children:c},c))},"yearSelect"),S.jsxs(Kl,{id:"dropdown-basic-button",title:o,children:[S.jsx(gt.Item,{onClick:()=>a("January"),children:"January"},"January"),S.jsx(gt.Item,{onClick:()=>a("February"),children:"February"},"February"),S.jsx(gt.Item,{onClick:()=>a("March"),children:"March"},"March"),S.jsx(gt.Item,{onClick:()=>a("April"),children:"April"},"April"),S.jsx(gt.Item,{onClick:()=>a("May"),children:"May"},"May"),S.jsx(gt.Item,{onClick:()=>a("June"),children:"June"},"June"),S.jsx(gt.Item,{onClick:()=>a("July"),children:"July"},"July"),S.jsx(gt.Item,{onClick:()=>a("August"),children:"August"},"August"),S.jsx(gt.Item,{onClick:()=>a("September"),children:"September"},"September"),S.jsx(gt.Item,{onClick:()=>a("October"),children:"October"},"October"),S.jsx(gt.Item,{onClick:()=>a("November"),children:"November"},"November"),S.jsx(gt.Item,{onClick:()=>a("December"),children:"December"},"December")]},"monthSelect")]}),l.map(c=>{const d=[];if(c[0][0]===o)return d.push(c[0]),c.slice(1).forEach(f=>{const p=f[0].split(" ");new Date(p.at(-1)).getFullYear()==n&&d.push(f)}),S.jsx(hc,{chartType:"PieChart",width:"100%",height:"400px",data:d,options:{title:c[0][0],pieHole:.4,is3D:!1}},c[0][0])})]})}function iF(){const e=g.useRef(),t=g.useRef(),[n,r]=g.useState(null),o=ts(),{session:a,signIn:i}=tr(),s=async l=>{l.preventDefault();try{const c=await i(e.current.value,t.current.value);c.success?o("/BudgetTracker/"):r(c.error.message)}catch{r("An error occurred")}};return S.jsxs(Qi,{className:"mb-auto mt-auto",children:[S.jsx("div",{className:"h4 mb-2 text-center",children:"Log In"}),S.jsxs("div",{className:"p-4 mb-2 text-left",children:["Don't have an account? ",S.jsx(zu,{to:"/BudgetTracker/Signup",children:"Sign Up"})]}),S.jsxs(pe,{className:"shadow p-4 bg-white rounded",onSubmit:s,children:[S.jsxs(pe.Group,{className:"mb-3",controlId:"Email",children:[S.jsx(pe.Label,{children:"Email"}),S.jsx(pe.Control,{ref:e,type:"email",placeholder:"Enter Email",required:!0})]}),S.jsxs(pe.Group,{className:"mb-3",controlId:"Password",children:[S.jsx(pe.Label,{children:"Password"}),S.jsx(pe.Control,{ref:t,type:"password",placeholder:"Enter Password",required:!0})]}),S.jsx(qt,{className:"w-100",variant:"primary",type:"submit",children:"Log In"})]}),n&&S.jsx("p",{className:"h4 mb-2 text-center",children:n})]})}function sF(){const e=g.useRef(),t=g.useRef(),[n,r]=g.useState(null),o=ts(),{session:a,signUpNewUser:i}=tr(),s=async l=>{l.preventDefault();try{const c=await i(e.current.value,t.current.value);c.success?o("/BudgetTracker/"):r(c.error.message)}catch{r("An error occurred")}};return S.jsxs(Qi,{className:"mb-auto mt-auto",children:[S.jsx("div",{className:"h4 mb-2 text-center",children:"Sign Up"}),S.jsxs("div",{className:"p-4 mb-2 text-left",children:["Already have an account? ",S.jsx(zu,{to:"/BudgetTracker/Login",children:"Log In"})]}),S.jsxs(pe,{className:"shadow p-4 bg-white rounded",onSubmit:s,children:[S.jsxs(pe.Group,{className:"mb-3",controlId:"Email",children:[S.jsx(pe.Label,{children:"Email"}),S.jsx(pe.Control,{ref:e,type:"email",placeholder:"Enter Email",required:!0})]}),S.jsxs(pe.Group,{className:"mb-3",controlId:"Password",children:[S.jsx(pe.Label,{children:"Password"}),S.jsx(pe.Control,{ref:t,type:"password",placeholder:"Enter Password",required:!0})]}),S.jsx(qt,{className:"w-100",variant:"primary",type:"submit",children:"Log In"})]}),n&&S.jsx("p",{className:"h4 mb-2 text-center",children:n})]})}const _w=({children:e})=>{const{session:t}=tr();return t===void 0?S.jsx("p",{children:"Loading..."}):S.jsx(S.Fragment,{children:t?S.jsxs(S.Fragment,{children:[" ",e," "]}):S.jsx(H2,{to:"/BudgetTracker/Login"})})};function lF(){return S.jsx(S.Fragment,{children:S.jsx(Z2,{children:S.jsxs(Tr,{direction:"horizontal",children:[S.jsx(I6,{}),S.jsxs(V2,{children:[S.jsx(Ja,{path:"/BudgetTracker/",element:S.jsx(_w,{children:S.jsx(oF,{})})}),S.jsx(Ja,{path:"/BudgetTracker/Summary",element:S.jsx(_w,{children:S.jsx(aF,{})})}),S.jsx(Ja,{path:"/BudgetTracker/Login",element:S.jsx(iF,{})}),S.jsx(Ja,{path:"/BudgetTracker/Signup",element:S.jsx(sF,{})})]})]})})})}Td.createRoot(document.getElementById("root")).render(S.jsx(q.StrictMode,{children:S.jsx(A6,{children:S.jsx(D6,{children:S.jsx(lF,{})})})}));export{ho as g};
