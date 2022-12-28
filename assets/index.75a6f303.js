function yy(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function wy(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var C={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zi=Symbol.for("react.element"),_y=Symbol.for("react.portal"),Sy=Symbol.for("react.fragment"),Ey=Symbol.for("react.strict_mode"),ky=Symbol.for("react.profiler"),by=Symbol.for("react.provider"),xy=Symbol.for("react.context"),Iy=Symbol.for("react.forward_ref"),Cy=Symbol.for("react.suspense"),Ty=Symbol.for("react.memo"),Py=Symbol.for("react.lazy"),Nf=Symbol.iterator;function Ny(e){return e===null||typeof e!="object"?null:(e=Nf&&e[Nf]||e["@@iterator"],typeof e=="function"?e:null)}var ip={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},op=Object.assign,ap={};function Ar(e,t,n){this.props=e,this.context=t,this.refs=ap,this.updater=n||ip}Ar.prototype.isReactComponent={};Ar.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ar.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function sp(){}sp.prototype=Ar.prototype;function Xu(e,t,n){this.props=e,this.context=t,this.refs=ap,this.updater=n||ip}var Zu=Xu.prototype=new sp;Zu.constructor=Xu;op(Zu,Ar.prototype);Zu.isPureReactComponent=!0;var Of=Array.isArray,lp=Object.prototype.hasOwnProperty,ec={current:null},up={key:!0,ref:!0,__self:!0,__source:!0};function cp(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)lp.call(t,r)&&!up.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Zi,type:e,key:o,ref:a,props:i,_owner:ec.current}}function Oy(e,t){return{$$typeof:Zi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function tc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zi}function Ry(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Rf=/\/+/g;function As(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ry(""+e.key):t.toString(36)}function Jo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Zi:case _y:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+As(a,0):r,Of(i)?(n="",e!=null&&(n=e.replace(Rf,"$&/")+"/"),Jo(i,t,n,"",function(u){return u})):i!=null&&(tc(i)&&(i=Oy(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Rf,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Of(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+As(o,s);a+=Jo(o,t,n,l,i)}else if(l=Ny(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+As(o,s++),a+=Jo(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function bo(e,t,n){if(e==null)return e;var r=[],i=0;return Jo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Ay(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var be={current:null},Xo={transition:null},Ly={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:Xo,ReactCurrentOwner:ec};z.Children={map:bo,forEach:function(e,t,n){bo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return bo(e,function(){t++}),t},toArray:function(e){return bo(e,function(t){return t})||[]},only:function(e){if(!tc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=Ar;z.Fragment=Sy;z.Profiler=ky;z.PureComponent=Xu;z.StrictMode=Ey;z.Suspense=Cy;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ly;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=op({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=ec.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)lp.call(t,l)&&!up.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Zi,type:e.type,key:i,ref:o,props:r,_owner:a}};z.createContext=function(e){return e={$$typeof:xy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:by,_context:e},e.Consumer=e};z.createElement=cp;z.createFactory=function(e){var t=cp.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:Iy,render:e}};z.isValidElement=tc;z.lazy=function(e){return{$$typeof:Py,_payload:{_status:-1,_result:e},_init:Ay}};z.memo=function(e,t){return{$$typeof:Ty,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=Xo.transition;Xo.transition={};try{e()}finally{Xo.transition=t}};z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};z.useCallback=function(e,t){return be.current.useCallback(e,t)};z.useContext=function(e){return be.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return be.current.useDeferredValue(e)};z.useEffect=function(e,t){return be.current.useEffect(e,t)};z.useId=function(){return be.current.useId()};z.useImperativeHandle=function(e,t,n){return be.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return be.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return be.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return be.current.useMemo(e,t)};z.useReducer=function(e,t,n){return be.current.useReducer(e,t,n)};z.useRef=function(e){return be.current.useRef(e)};z.useState=function(e){return be.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return be.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return be.current.useTransition()};z.version="18.2.0";(function(e){e.exports=z})(C);const Lr=wy(C.exports),kl=yy({__proto__:null,default:Lr},[C.exports]);var bl={},fp={exports:{}},Fe={},dp={exports:{}},hp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,D){var U=N.length;N.push(D);e:for(;0<U;){var ne=U-1>>>1,le=N[ne];if(0<i(le,D))N[ne]=D,N[U]=le,U=ne;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var D=N[0],U=N.pop();if(U!==D){N[0]=U;e:for(var ne=0,le=N.length,Eo=le>>>1;ne<Eo;){var vn=2*(ne+1)-1,Rs=N[vn],yn=vn+1,ko=N[yn];if(0>i(Rs,U))yn<le&&0>i(ko,Rs)?(N[ne]=ko,N[yn]=U,ne=yn):(N[ne]=Rs,N[vn]=U,ne=vn);else if(yn<le&&0>i(ko,U))N[ne]=ko,N[yn]=U,ne=yn;else break e}}return D}function i(N,D){var U=N.sortIndex-D.sortIndex;return U!==0?U:N.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],c=1,f=null,h=3,g=!1,v=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=N)r(u),D.sortIndex=D.expirationTime,t(l,D);else break;D=n(u)}}function _(N){if(w=!1,m(N),!v)if(n(l)!==null)v=!0,Ns(k);else{var D=n(u);D!==null&&Os(_,D.startTime-N)}}function k(N,D){v=!1,w&&(w=!1,p(O),O=-1),g=!0;var U=h;try{for(m(D),f=n(l);f!==null&&(!(f.expirationTime>D)||N&&!Ye());){var ne=f.callback;if(typeof ne=="function"){f.callback=null,h=f.priorityLevel;var le=ne(f.expirationTime<=D);D=e.unstable_now(),typeof le=="function"?f.callback=le:f===n(l)&&r(l),m(D)}else r(l);f=n(l)}if(f!==null)var Eo=!0;else{var vn=n(u);vn!==null&&Os(_,vn.startTime-D),Eo=!1}return Eo}finally{f=null,h=U,g=!1}}var b=!1,I=null,O=-1,j=5,F=-1;function Ye(){return!(e.unstable_now()-F<j)}function Wr(){if(I!==null){var N=e.unstable_now();F=N;var D=!0;try{D=I(!0,N)}finally{D?Vr():(b=!1,I=null)}}else b=!1}var Vr;if(typeof d=="function")Vr=function(){d(Wr)};else if(typeof MessageChannel<"u"){var Pf=new MessageChannel,vy=Pf.port2;Pf.port1.onmessage=Wr,Vr=function(){vy.postMessage(null)}}else Vr=function(){x(Wr,0)};function Ns(N){I=N,b||(b=!0,Vr())}function Os(N,D){O=x(function(){N(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,Ns(k))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var U=h;h=D;try{return N()}finally{h=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,D){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var U=h;h=N;try{return D()}finally{h=U}},e.unstable_scheduleCallback=function(N,D,U){var ne=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?ne+U:ne):U=ne,N){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=U+le,N={id:c++,callback:D,priorityLevel:N,startTime:U,expirationTime:le,sortIndex:-1},U>ne?(N.sortIndex=U,t(u,N),n(l)===null&&N===n(u)&&(w?(p(O),O=-1):w=!0,Os(_,U-ne))):(N.sortIndex=le,t(l,N),v||g||(v=!0,Ns(k))),N},e.unstable_shouldYield=Ye,e.unstable_wrapCallback=function(N){var D=h;return function(){var U=h;h=D;try{return N.apply(this,arguments)}finally{h=U}}}})(hp);(function(e){e.exports=hp})(dp);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pp=C.exports,Me=dp.exports;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mp=new Set,Ei={};function Wn(e,t){Er(e,t),Er(e+"Capture",t)}function Er(e,t){for(Ei[e]=t,e=0;e<t.length;e++)mp.add(t[e])}var St=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xl=Object.prototype.hasOwnProperty,Dy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Af={},Lf={};function My(e){return xl.call(Lf,e)?!0:xl.call(Af,e)?!1:Dy.test(e)?Lf[e]=!0:(Af[e]=!0,!1)}function Fy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Uy(e,t,n,r){if(t===null||typeof t>"u"||Fy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var nc=/[\-:]([a-z])/g;function rc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(nc,rc);me[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(nc,rc);me[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(nc,rc);me[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function ic(e,t,n,r){var i=me.hasOwnProperty(t)?me[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Uy(t,n,i,r)&&(n=null),r||i===null?My(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Pt=pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xo=Symbol.for("react.element"),Gn=Symbol.for("react.portal"),Qn=Symbol.for("react.fragment"),oc=Symbol.for("react.strict_mode"),Il=Symbol.for("react.profiler"),gp=Symbol.for("react.provider"),vp=Symbol.for("react.context"),ac=Symbol.for("react.forward_ref"),Cl=Symbol.for("react.suspense"),Tl=Symbol.for("react.suspense_list"),sc=Symbol.for("react.memo"),Ft=Symbol.for("react.lazy"),yp=Symbol.for("react.offscreen"),Df=Symbol.iterator;function Kr(e){return e===null||typeof e!="object"?null:(e=Df&&e[Df]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,Ls;function ti(e){if(Ls===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ls=t&&t[1]||""}return`
`+Ls+e}var Ds=!1;function Ms(e,t){if(!e||Ds)return"";Ds=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Ds=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ti(e):""}function zy(e){switch(e.tag){case 5:return ti(e.type);case 16:return ti("Lazy");case 13:return ti("Suspense");case 19:return ti("SuspenseList");case 0:case 2:case 15:return e=Ms(e.type,!1),e;case 11:return e=Ms(e.type.render,!1),e;case 1:return e=Ms(e.type,!0),e;default:return""}}function Pl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qn:return"Fragment";case Gn:return"Portal";case Il:return"Profiler";case oc:return"StrictMode";case Cl:return"Suspense";case Tl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case vp:return(e.displayName||"Context")+".Consumer";case gp:return(e._context.displayName||"Context")+".Provider";case ac:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case sc:return t=e.displayName||null,t!==null?t:Pl(e.type)||"Memo";case Ft:t=e._payload,e=e._init;try{return Pl(e(t))}catch{}}return null}function jy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pl(t);case 8:return t===oc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function sn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $y(e){var t=wp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Io(e){e._valueTracker||(e._valueTracker=$y(e))}function _p(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=wp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function va(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Nl(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Mf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=sn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Sp(e,t){t=t.checked,t!=null&&ic(e,"checked",t,!1)}function Ol(e,t){Sp(e,t);var n=sn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Rl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Rl(e,t.type,sn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ff(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Rl(e,t,n){(t!=="number"||va(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ni=Array.isArray;function fr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+sn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Al(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Uf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(ni(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:sn(n)}}function Ep(e,t){var n=sn(t.value),r=sn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function zf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function kp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ll(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?kp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Co,bp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Co=Co||document.createElement("div"),Co.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Co.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ki(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ci={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},By=["Webkit","ms","Moz","O"];Object.keys(ci).forEach(function(e){By.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ci[t]=ci[e]})});function xp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ci.hasOwnProperty(e)&&ci[e]?(""+t).trim():t+"px"}function Ip(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=xp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Hy=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dl(e,t){if(t){if(Hy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function Ml(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fl=null;function lc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ul=null,dr=null,hr=null;function jf(e){if(e=no(e)){if(typeof Ul!="function")throw Error(E(280));var t=e.stateNode;t&&(t=rs(t),Ul(e.stateNode,e.type,t))}}function Cp(e){dr?hr?hr.push(e):hr=[e]:dr=e}function Tp(){if(dr){var e=dr,t=hr;if(hr=dr=null,jf(e),t)for(e=0;e<t.length;e++)jf(t[e])}}function Pp(e,t){return e(t)}function Np(){}var Fs=!1;function Op(e,t,n){if(Fs)return e(t,n);Fs=!0;try{return Pp(e,t,n)}finally{Fs=!1,(dr!==null||hr!==null)&&(Np(),Tp())}}function bi(e,t){var n=e.stateNode;if(n===null)return null;var r=rs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var zl=!1;if(St)try{var Yr={};Object.defineProperty(Yr,"passive",{get:function(){zl=!0}}),window.addEventListener("test",Yr,Yr),window.removeEventListener("test",Yr,Yr)}catch{zl=!1}function Wy(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var fi=!1,ya=null,wa=!1,jl=null,Vy={onError:function(e){fi=!0,ya=e}};function Ky(e,t,n,r,i,o,a,s,l){fi=!1,ya=null,Wy.apply(Vy,arguments)}function Yy(e,t,n,r,i,o,a,s,l){if(Ky.apply(this,arguments),fi){if(fi){var u=ya;fi=!1,ya=null}else throw Error(E(198));wa||(wa=!0,jl=u)}}function Vn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Rp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $f(e){if(Vn(e)!==e)throw Error(E(188))}function Gy(e){var t=e.alternate;if(!t){if(t=Vn(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return $f(i),e;if(o===r)return $f(i),t;o=o.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function Ap(e){return e=Gy(e),e!==null?Lp(e):null}function Lp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Lp(e);if(t!==null)return t;e=e.sibling}return null}var Dp=Me.unstable_scheduleCallback,Bf=Me.unstable_cancelCallback,Qy=Me.unstable_shouldYield,qy=Me.unstable_requestPaint,re=Me.unstable_now,Jy=Me.unstable_getCurrentPriorityLevel,uc=Me.unstable_ImmediatePriority,Mp=Me.unstable_UserBlockingPriority,_a=Me.unstable_NormalPriority,Xy=Me.unstable_LowPriority,Fp=Me.unstable_IdlePriority,Za=null,lt=null;function Zy(e){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(Za,e,void 0,(e.current.flags&128)===128)}catch{}}var Ze=Math.clz32?Math.clz32:n0,e0=Math.log,t0=Math.LN2;function n0(e){return e>>>=0,e===0?32:31-(e0(e)/t0|0)|0}var To=64,Po=4194304;function ri(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Sa(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=ri(s):(o&=a,o!==0&&(r=ri(o)))}else a=n&~i,a!==0?r=ri(a):o!==0&&(r=ri(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ze(t),i=1<<n,r|=e[n],t&=~i;return r}function r0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function i0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Ze(o),s=1<<a,l=i[a];l===-1?((s&n)===0||(s&r)!==0)&&(i[a]=r0(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function $l(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Up(){var e=To;return To<<=1,(To&4194240)===0&&(To=64),e}function Us(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function eo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ze(t),e[t]=n}function o0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ze(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function cc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ze(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var H=0;function zp(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var jp,fc,$p,Bp,Hp,Bl=!1,No=[],Qt=null,qt=null,Jt=null,xi=new Map,Ii=new Map,zt=[],a0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hf(e,t){switch(e){case"focusin":case"focusout":Qt=null;break;case"dragenter":case"dragleave":qt=null;break;case"mouseover":case"mouseout":Jt=null;break;case"pointerover":case"pointerout":xi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ii.delete(t.pointerId)}}function Gr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=no(t),t!==null&&fc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function s0(e,t,n,r,i){switch(t){case"focusin":return Qt=Gr(Qt,e,t,n,r,i),!0;case"dragenter":return qt=Gr(qt,e,t,n,r,i),!0;case"mouseover":return Jt=Gr(Jt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return xi.set(o,Gr(xi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ii.set(o,Gr(Ii.get(o)||null,e,t,n,r,i)),!0}return!1}function Wp(e){var t=En(e.target);if(t!==null){var n=Vn(t);if(n!==null){if(t=n.tag,t===13){if(t=Rp(n),t!==null){e.blockedOn=t,Hp(e.priority,function(){$p(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Hl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Fl=r,n.target.dispatchEvent(r),Fl=null}else return t=no(n),t!==null&&fc(t),e.blockedOn=n,!1;t.shift()}return!0}function Wf(e,t,n){Zo(e)&&n.delete(t)}function l0(){Bl=!1,Qt!==null&&Zo(Qt)&&(Qt=null),qt!==null&&Zo(qt)&&(qt=null),Jt!==null&&Zo(Jt)&&(Jt=null),xi.forEach(Wf),Ii.forEach(Wf)}function Qr(e,t){e.blockedOn===t&&(e.blockedOn=null,Bl||(Bl=!0,Me.unstable_scheduleCallback(Me.unstable_NormalPriority,l0)))}function Ci(e){function t(i){return Qr(i,e)}if(0<No.length){Qr(No[0],e);for(var n=1;n<No.length;n++){var r=No[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Qt!==null&&Qr(Qt,e),qt!==null&&Qr(qt,e),Jt!==null&&Qr(Jt,e),xi.forEach(t),Ii.forEach(t),n=0;n<zt.length;n++)r=zt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<zt.length&&(n=zt[0],n.blockedOn===null);)Wp(n),n.blockedOn===null&&zt.shift()}var pr=Pt.ReactCurrentBatchConfig,Ea=!0;function u0(e,t,n,r){var i=H,o=pr.transition;pr.transition=null;try{H=1,dc(e,t,n,r)}finally{H=i,pr.transition=o}}function c0(e,t,n,r){var i=H,o=pr.transition;pr.transition=null;try{H=4,dc(e,t,n,r)}finally{H=i,pr.transition=o}}function dc(e,t,n,r){if(Ea){var i=Hl(e,t,n,r);if(i===null)Gs(e,t,r,ka,n),Hf(e,r);else if(s0(i,e,t,n,r))r.stopPropagation();else if(Hf(e,r),t&4&&-1<a0.indexOf(e)){for(;i!==null;){var o=no(i);if(o!==null&&jp(o),o=Hl(e,t,n,r),o===null&&Gs(e,t,r,ka,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Gs(e,t,r,null,n)}}var ka=null;function Hl(e,t,n,r){if(ka=null,e=lc(r),e=En(e),e!==null)if(t=Vn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Rp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ka=e,null}function Vp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jy()){case uc:return 1;case Mp:return 4;case _a:case Xy:return 16;case Fp:return 536870912;default:return 16}default:return 16}}var Vt=null,hc=null,ea=null;function Kp(){if(ea)return ea;var e,t=hc,n=t.length,r,i="value"in Vt?Vt.value:Vt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return ea=i.slice(e,1<r?1-r:void 0)}function ta(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Oo(){return!0}function Vf(){return!1}function Ue(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Oo:Vf,this.isPropagationStopped=Vf,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oo)},persist:function(){},isPersistent:Oo}),t}var Dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pc=Ue(Dr),to=Z({},Dr,{view:0,detail:0}),f0=Ue(to),zs,js,qr,es=Z({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qr&&(qr&&e.type==="mousemove"?(zs=e.screenX-qr.screenX,js=e.screenY-qr.screenY):js=zs=0,qr=e),zs)},movementY:function(e){return"movementY"in e?e.movementY:js}}),Kf=Ue(es),d0=Z({},es,{dataTransfer:0}),h0=Ue(d0),p0=Z({},to,{relatedTarget:0}),$s=Ue(p0),m0=Z({},Dr,{animationName:0,elapsedTime:0,pseudoElement:0}),g0=Ue(m0),v0=Z({},Dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),y0=Ue(v0),w0=Z({},Dr,{data:0}),Yf=Ue(w0),_0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},S0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},E0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function k0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=E0[e])?!!t[e]:!1}function mc(){return k0}var b0=Z({},to,{key:function(e){if(e.key){var t=_0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ta(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?S0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mc,charCode:function(e){return e.type==="keypress"?ta(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ta(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),x0=Ue(b0),I0=Z({},es,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gf=Ue(I0),C0=Z({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mc}),T0=Ue(C0),P0=Z({},Dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),N0=Ue(P0),O0=Z({},es,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),R0=Ue(O0),A0=[9,13,27,32],gc=St&&"CompositionEvent"in window,di=null;St&&"documentMode"in document&&(di=document.documentMode);var L0=St&&"TextEvent"in window&&!di,Yp=St&&(!gc||di&&8<di&&11>=di),Qf=String.fromCharCode(32),qf=!1;function Gp(e,t){switch(e){case"keyup":return A0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qn=!1;function D0(e,t){switch(e){case"compositionend":return Qp(t);case"keypress":return t.which!==32?null:(qf=!0,Qf);case"textInput":return e=t.data,e===Qf&&qf?null:e;default:return null}}function M0(e,t){if(qn)return e==="compositionend"||!gc&&Gp(e,t)?(e=Kp(),ea=hc=Vt=null,qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yp&&t.locale!=="ko"?null:t.data;default:return null}}var F0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!F0[e.type]:t==="textarea"}function qp(e,t,n,r){Cp(r),t=ba(t,"onChange"),0<t.length&&(n=new pc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var hi=null,Ti=null;function U0(e){sm(e,0)}function ts(e){var t=Zn(e);if(_p(t))return e}function z0(e,t){if(e==="change")return t}var Jp=!1;if(St){var Bs;if(St){var Hs="oninput"in document;if(!Hs){var Xf=document.createElement("div");Xf.setAttribute("oninput","return;"),Hs=typeof Xf.oninput=="function"}Bs=Hs}else Bs=!1;Jp=Bs&&(!document.documentMode||9<document.documentMode)}function Zf(){hi&&(hi.detachEvent("onpropertychange",Xp),Ti=hi=null)}function Xp(e){if(e.propertyName==="value"&&ts(Ti)){var t=[];qp(t,Ti,e,lc(e)),Op(U0,t)}}function j0(e,t,n){e==="focusin"?(Zf(),hi=t,Ti=n,hi.attachEvent("onpropertychange",Xp)):e==="focusout"&&Zf()}function $0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ts(Ti)}function B0(e,t){if(e==="click")return ts(t)}function H0(e,t){if(e==="input"||e==="change")return ts(t)}function W0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tt=typeof Object.is=="function"?Object.is:W0;function Pi(e,t){if(tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!xl.call(t,i)||!tt(e[i],t[i]))return!1}return!0}function ed(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function td(e,t){var n=ed(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ed(n)}}function Zp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function em(){for(var e=window,t=va();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=va(e.document)}return t}function vc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function V0(e){var t=em(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Zp(n.ownerDocument.documentElement,n)){if(r!==null&&vc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=td(n,o);var a=td(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var K0=St&&"documentMode"in document&&11>=document.documentMode,Jn=null,Wl=null,pi=null,Vl=!1;function nd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vl||Jn==null||Jn!==va(r)||(r=Jn,"selectionStart"in r&&vc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),pi&&Pi(pi,r)||(pi=r,r=ba(Wl,"onSelect"),0<r.length&&(t=new pc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Jn)))}function Ro(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Xn={animationend:Ro("Animation","AnimationEnd"),animationiteration:Ro("Animation","AnimationIteration"),animationstart:Ro("Animation","AnimationStart"),transitionend:Ro("Transition","TransitionEnd")},Ws={},tm={};St&&(tm=document.createElement("div").style,"AnimationEvent"in window||(delete Xn.animationend.animation,delete Xn.animationiteration.animation,delete Xn.animationstart.animation),"TransitionEvent"in window||delete Xn.transitionend.transition);function ns(e){if(Ws[e])return Ws[e];if(!Xn[e])return e;var t=Xn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in tm)return Ws[e]=t[n];return e}var nm=ns("animationend"),rm=ns("animationiteration"),im=ns("animationstart"),om=ns("transitionend"),am=new Map,rd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hn(e,t){am.set(e,t),Wn(t,[e])}for(var Vs=0;Vs<rd.length;Vs++){var Ks=rd[Vs],Y0=Ks.toLowerCase(),G0=Ks[0].toUpperCase()+Ks.slice(1);hn(Y0,"on"+G0)}hn(nm,"onAnimationEnd");hn(rm,"onAnimationIteration");hn(im,"onAnimationStart");hn("dblclick","onDoubleClick");hn("focusin","onFocus");hn("focusout","onBlur");hn(om,"onTransitionEnd");Er("onMouseEnter",["mouseout","mouseover"]);Er("onMouseLeave",["mouseout","mouseover"]);Er("onPointerEnter",["pointerout","pointerover"]);Er("onPointerLeave",["pointerout","pointerover"]);Wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Q0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ii));function id(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Yy(r,t,void 0,e),e.currentTarget=null}function sm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;id(i,s,u),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;id(i,s,u),o=l}}}if(wa)throw e=jl,wa=!1,jl=null,e}function K(e,t){var n=t[ql];n===void 0&&(n=t[ql]=new Set);var r=e+"__bubble";n.has(r)||(lm(t,e,2,!1),n.add(r))}function Ys(e,t,n){var r=0;t&&(r|=4),lm(n,e,r,t)}var Ao="_reactListening"+Math.random().toString(36).slice(2);function Ni(e){if(!e[Ao]){e[Ao]=!0,mp.forEach(function(n){n!=="selectionchange"&&(Q0.has(n)||Ys(n,!1,e),Ys(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ao]||(t[Ao]=!0,Ys("selectionchange",!1,t))}}function lm(e,t,n,r){switch(Vp(t)){case 1:var i=u0;break;case 4:i=c0;break;default:i=dc}n=i.bind(null,t,n,e),i=void 0,!zl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Gs(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=En(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}Op(function(){var u=o,c=lc(n),f=[];e:{var h=am.get(e);if(h!==void 0){var g=pc,v=e;switch(e){case"keypress":if(ta(n)===0)break e;case"keydown":case"keyup":g=x0;break;case"focusin":v="focus",g=$s;break;case"focusout":v="blur",g=$s;break;case"beforeblur":case"afterblur":g=$s;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Kf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=h0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=T0;break;case nm:case rm:case im:g=g0;break;case om:g=N0;break;case"scroll":g=f0;break;case"wheel":g=R0;break;case"copy":case"cut":case"paste":g=y0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Gf}var w=(t&4)!==0,x=!w&&e==="scroll",p=w?h!==null?h+"Capture":null:h;w=[];for(var d=u,m;d!==null;){m=d;var _=m.stateNode;if(m.tag===5&&_!==null&&(m=_,p!==null&&(_=bi(d,p),_!=null&&w.push(Oi(d,_,m)))),x)break;d=d.return}0<w.length&&(h=new g(h,v,null,n,c),f.push({event:h,listeners:w}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==Fl&&(v=n.relatedTarget||n.fromElement)&&(En(v)||v[Et]))break e;if((g||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?En(v):null,v!==null&&(x=Vn(v),v!==x||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(w=Kf,_="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=Gf,_="onPointerLeave",p="onPointerEnter",d="pointer"),x=g==null?h:Zn(g),m=v==null?h:Zn(v),h=new w(_,d+"leave",g,n,c),h.target=x,h.relatedTarget=m,_=null,En(c)===u&&(w=new w(p,d+"enter",v,n,c),w.target=m,w.relatedTarget=x,_=w),x=_,g&&v)t:{for(w=g,p=v,d=0,m=w;m;m=Yn(m))d++;for(m=0,_=p;_;_=Yn(_))m++;for(;0<d-m;)w=Yn(w),d--;for(;0<m-d;)p=Yn(p),m--;for(;d--;){if(w===p||p!==null&&w===p.alternate)break t;w=Yn(w),p=Yn(p)}w=null}else w=null;g!==null&&od(f,h,g,w,!1),v!==null&&x!==null&&od(f,x,v,w,!0)}}e:{if(h=u?Zn(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var k=z0;else if(Jf(h))if(Jp)k=H0;else{k=$0;var b=j0}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=B0);if(k&&(k=k(e,u))){qp(f,k,n,c);break e}b&&b(e,h,u),e==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&Rl(h,"number",h.value)}switch(b=u?Zn(u):window,e){case"focusin":(Jf(b)||b.contentEditable==="true")&&(Jn=b,Wl=u,pi=null);break;case"focusout":pi=Wl=Jn=null;break;case"mousedown":Vl=!0;break;case"contextmenu":case"mouseup":case"dragend":Vl=!1,nd(f,n,c);break;case"selectionchange":if(K0)break;case"keydown":case"keyup":nd(f,n,c)}var I;if(gc)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else qn?Gp(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Yp&&n.locale!=="ko"&&(qn||O!=="onCompositionStart"?O==="onCompositionEnd"&&qn&&(I=Kp()):(Vt=c,hc="value"in Vt?Vt.value:Vt.textContent,qn=!0)),b=ba(u,O),0<b.length&&(O=new Yf(O,e,null,n,c),f.push({event:O,listeners:b}),I?O.data=I:(I=Qp(n),I!==null&&(O.data=I)))),(I=L0?D0(e,n):M0(e,n))&&(u=ba(u,"onBeforeInput"),0<u.length&&(c=new Yf("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=I))}sm(f,t)})}function Oi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ba(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=bi(e,n),o!=null&&r.unshift(Oi(e,o,i)),o=bi(e,t),o!=null&&r.push(Oi(e,o,i))),e=e.return}return r}function Yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function od(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=bi(n,o),l!=null&&a.unshift(Oi(n,l,s))):i||(l=bi(n,o),l!=null&&a.push(Oi(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var q0=/\r\n?/g,J0=/\u0000|\uFFFD/g;function ad(e){return(typeof e=="string"?e:""+e).replace(q0,`
`).replace(J0,"")}function Lo(e,t,n){if(t=ad(t),ad(e)!==t&&n)throw Error(E(425))}function xa(){}var Kl=null,Yl=null;function Gl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ql=typeof setTimeout=="function"?setTimeout:void 0,X0=typeof clearTimeout=="function"?clearTimeout:void 0,sd=typeof Promise=="function"?Promise:void 0,Z0=typeof queueMicrotask=="function"?queueMicrotask:typeof sd<"u"?function(e){return sd.resolve(null).then(e).catch(e1)}:Ql;function e1(e){setTimeout(function(){throw e})}function Qs(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ci(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ci(t)}function Xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ld(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Mr=Math.random().toString(36).slice(2),at="__reactFiber$"+Mr,Ri="__reactProps$"+Mr,Et="__reactContainer$"+Mr,ql="__reactEvents$"+Mr,t1="__reactListeners$"+Mr,n1="__reactHandles$"+Mr;function En(e){var t=e[at];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Et]||n[at]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ld(e);e!==null;){if(n=e[at])return n;e=ld(e)}return t}e=n,n=e.parentNode}return null}function no(e){return e=e[at]||e[Et],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function rs(e){return e[Ri]||null}var Jl=[],er=-1;function pn(e){return{current:e}}function G(e){0>er||(e.current=Jl[er],Jl[er]=null,er--)}function V(e,t){er++,Jl[er]=e.current,e.current=t}var ln={},_e=pn(ln),Te=pn(!1),Rn=ln;function kr(e,t){var n=e.type.contextTypes;if(!n)return ln;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Pe(e){return e=e.childContextTypes,e!=null}function Ia(){G(Te),G(_e)}function ud(e,t,n){if(_e.current!==ln)throw Error(E(168));V(_e,t),V(Te,n)}function um(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(E(108,jy(e)||"Unknown",i));return Z({},n,r)}function Ca(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ln,Rn=_e.current,V(_e,e),V(Te,Te.current),!0}function cd(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=um(e,t,Rn),r.__reactInternalMemoizedMergedChildContext=e,G(Te),G(_e),V(_e,e)):G(Te),V(Te,n)}var ht=null,is=!1,qs=!1;function cm(e){ht===null?ht=[e]:ht.push(e)}function r1(e){is=!0,cm(e)}function mn(){if(!qs&&ht!==null){qs=!0;var e=0,t=H;try{var n=ht;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ht=null,is=!1}catch(i){throw ht!==null&&(ht=ht.slice(e+1)),Dp(uc,mn),i}finally{H=t,qs=!1}}return null}var tr=[],nr=0,Ta=null,Pa=0,je=[],$e=0,An=null,pt=1,mt="";function wn(e,t){tr[nr++]=Pa,tr[nr++]=Ta,Ta=e,Pa=t}function fm(e,t,n){je[$e++]=pt,je[$e++]=mt,je[$e++]=An,An=e;var r=pt;e=mt;var i=32-Ze(r)-1;r&=~(1<<i),n+=1;var o=32-Ze(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,pt=1<<32-Ze(t)+i|n<<i|r,mt=o+e}else pt=1<<o|n<<i|r,mt=e}function yc(e){e.return!==null&&(wn(e,1),fm(e,1,0))}function wc(e){for(;e===Ta;)Ta=tr[--nr],tr[nr]=null,Pa=tr[--nr],tr[nr]=null;for(;e===An;)An=je[--$e],je[$e]=null,mt=je[--$e],je[$e]=null,pt=je[--$e],je[$e]=null}var De=null,Le=null,q=!1,Je=null;function dm(e,t){var n=Be(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function fd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,De=e,Le=Xt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,De=e,Le=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=An!==null?{id:pt,overflow:mt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Be(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,De=e,Le=null,!0):!1;default:return!1}}function Xl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Zl(e){if(q){var t=Le;if(t){var n=t;if(!fd(e,t)){if(Xl(e))throw Error(E(418));t=Xt(n.nextSibling);var r=De;t&&fd(e,t)?dm(r,n):(e.flags=e.flags&-4097|2,q=!1,De=e)}}else{if(Xl(e))throw Error(E(418));e.flags=e.flags&-4097|2,q=!1,De=e}}}function dd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;De=e}function Do(e){if(e!==De)return!1;if(!q)return dd(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Gl(e.type,e.memoizedProps)),t&&(t=Le)){if(Xl(e))throw hm(),Error(E(418));for(;t;)dm(e,t),t=Xt(t.nextSibling)}if(dd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Le=Xt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Le=null}}else Le=De?Xt(e.stateNode.nextSibling):null;return!0}function hm(){for(var e=Le;e;)e=Xt(e.nextSibling)}function br(){Le=De=null,q=!1}function _c(e){Je===null?Je=[e]:Je.push(e)}var i1=Pt.ReactCurrentBatchConfig;function Qe(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Na=pn(null),Oa=null,rr=null,Sc=null;function Ec(){Sc=rr=Oa=null}function kc(e){var t=Na.current;G(Na),e._currentValue=t}function eu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function mr(e,t){Oa=e,Sc=rr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ce=!0),e.firstContext=null)}function Ve(e){var t=e._currentValue;if(Sc!==e)if(e={context:e,memoizedValue:t,next:null},rr===null){if(Oa===null)throw Error(E(308));rr=e,Oa.dependencies={lanes:0,firstContext:e}}else rr=rr.next=e;return t}var kn=null;function bc(e){kn===null?kn=[e]:kn.push(e)}function pm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,bc(t)):(n.next=i.next,i.next=n),t.interleaved=n,kt(e,r)}function kt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ut=!1;function xc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Zt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,($&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,kt(e,n)}return i=r.interleaved,i===null?(t.next=t,bc(r)):(t.next=i.next,i.next=t),r.interleaved=t,kt(e,n)}function na(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cc(e,n)}}function hd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ra(e,t,n,r){var i=e.updateQueue;Ut=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==a&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;a=0,c=u=l=null,s=o;do{var h=s.lane,g=s.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,w=s;switch(h=t,g=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){f=v.call(g,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,h=typeof v=="function"?v.call(g,f,h):v,h==null)break e;f=Z({},f,h);break e;case 2:Ut=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[s]:h.push(s))}else g={eventTime:g,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,a|=h;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;h=s,s=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Dn|=a,e.lanes=a,e.memoizedState=f}}function pd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var gm=new pp.Component().refs;function tu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var os={isMounted:function(e){return(e=e._reactInternals)?Vn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ke(),i=tn(e),o=wt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Zt(e,o,i),t!==null&&(et(t,e,i,r),na(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ke(),i=tn(e),o=wt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Zt(e,o,i),t!==null&&(et(t,e,i,r),na(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ke(),r=tn(e),i=wt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Zt(e,i,r),t!==null&&(et(t,e,r,n),na(t,e,r))}};function md(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Pi(n,r)||!Pi(i,o):!0}function vm(e,t,n){var r=!1,i=ln,o=t.contextType;return typeof o=="object"&&o!==null?o=Ve(o):(i=Pe(t)?Rn:_e.current,r=t.contextTypes,o=(r=r!=null)?kr(e,i):ln),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=os,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function gd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&os.enqueueReplaceState(t,t.state,null)}function nu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=gm,xc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ve(o):(o=Pe(t)?Rn:_e.current,i.context=kr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(tu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&os.enqueueReplaceState(i,i.state,null),Ra(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Jr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;s===gm&&(s=i.refs={}),a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function Mo(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vd(e){var t=e._init;return t(e._payload)}function ym(e){function t(p,d){if(e){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=nn(p,d),p.index=0,p.sibling=null,p}function o(p,d,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,d,m,_){return d===null||d.tag!==6?(d=rl(m,p.mode,_),d.return=p,d):(d=i(d,m),d.return=p,d)}function l(p,d,m,_){var k=m.type;return k===Qn?c(p,d,m.props.children,_,m.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ft&&vd(k)===d.type)?(_=i(d,m.props),_.ref=Jr(p,d,m),_.return=p,_):(_=la(m.type,m.key,m.props,null,p.mode,_),_.ref=Jr(p,d,m),_.return=p,_)}function u(p,d,m,_){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=il(m,p.mode,_),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function c(p,d,m,_,k){return d===null||d.tag!==7?(d=Tn(m,p.mode,_,k),d.return=p,d):(d=i(d,m),d.return=p,d)}function f(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=rl(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case xo:return m=la(d.type,d.key,d.props,null,p.mode,m),m.ref=Jr(p,null,d),m.return=p,m;case Gn:return d=il(d,p.mode,m),d.return=p,d;case Ft:var _=d._init;return f(p,_(d._payload),m)}if(ni(d)||Kr(d))return d=Tn(d,p.mode,m,null),d.return=p,d;Mo(p,d)}return null}function h(p,d,m,_){var k=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:s(p,d,""+m,_);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case xo:return m.key===k?l(p,d,m,_):null;case Gn:return m.key===k?u(p,d,m,_):null;case Ft:return k=m._init,h(p,d,k(m._payload),_)}if(ni(m)||Kr(m))return k!==null?null:c(p,d,m,_,null);Mo(p,m)}return null}function g(p,d,m,_,k){if(typeof _=="string"&&_!==""||typeof _=="number")return p=p.get(m)||null,s(d,p,""+_,k);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case xo:return p=p.get(_.key===null?m:_.key)||null,l(d,p,_,k);case Gn:return p=p.get(_.key===null?m:_.key)||null,u(d,p,_,k);case Ft:var b=_._init;return g(p,d,m,b(_._payload),k)}if(ni(_)||Kr(_))return p=p.get(m)||null,c(d,p,_,k,null);Mo(d,_)}return null}function v(p,d,m,_){for(var k=null,b=null,I=d,O=d=0,j=null;I!==null&&O<m.length;O++){I.index>O?(j=I,I=null):j=I.sibling;var F=h(p,I,m[O],_);if(F===null){I===null&&(I=j);break}e&&I&&F.alternate===null&&t(p,I),d=o(F,d,O),b===null?k=F:b.sibling=F,b=F,I=j}if(O===m.length)return n(p,I),q&&wn(p,O),k;if(I===null){for(;O<m.length;O++)I=f(p,m[O],_),I!==null&&(d=o(I,d,O),b===null?k=I:b.sibling=I,b=I);return q&&wn(p,O),k}for(I=r(p,I);O<m.length;O++)j=g(I,p,O,m[O],_),j!==null&&(e&&j.alternate!==null&&I.delete(j.key===null?O:j.key),d=o(j,d,O),b===null?k=j:b.sibling=j,b=j);return e&&I.forEach(function(Ye){return t(p,Ye)}),q&&wn(p,O),k}function w(p,d,m,_){var k=Kr(m);if(typeof k!="function")throw Error(E(150));if(m=k.call(m),m==null)throw Error(E(151));for(var b=k=null,I=d,O=d=0,j=null,F=m.next();I!==null&&!F.done;O++,F=m.next()){I.index>O?(j=I,I=null):j=I.sibling;var Ye=h(p,I,F.value,_);if(Ye===null){I===null&&(I=j);break}e&&I&&Ye.alternate===null&&t(p,I),d=o(Ye,d,O),b===null?k=Ye:b.sibling=Ye,b=Ye,I=j}if(F.done)return n(p,I),q&&wn(p,O),k;if(I===null){for(;!F.done;O++,F=m.next())F=f(p,F.value,_),F!==null&&(d=o(F,d,O),b===null?k=F:b.sibling=F,b=F);return q&&wn(p,O),k}for(I=r(p,I);!F.done;O++,F=m.next())F=g(I,p,O,F.value,_),F!==null&&(e&&F.alternate!==null&&I.delete(F.key===null?O:F.key),d=o(F,d,O),b===null?k=F:b.sibling=F,b=F);return e&&I.forEach(function(Wr){return t(p,Wr)}),q&&wn(p,O),k}function x(p,d,m,_){if(typeof m=="object"&&m!==null&&m.type===Qn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case xo:e:{for(var k=m.key,b=d;b!==null;){if(b.key===k){if(k=m.type,k===Qn){if(b.tag===7){n(p,b.sibling),d=i(b,m.props.children),d.return=p,p=d;break e}}else if(b.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ft&&vd(k)===b.type){n(p,b.sibling),d=i(b,m.props),d.ref=Jr(p,b,m),d.return=p,p=d;break e}n(p,b);break}else t(p,b);b=b.sibling}m.type===Qn?(d=Tn(m.props.children,p.mode,_,m.key),d.return=p,p=d):(_=la(m.type,m.key,m.props,null,p.mode,_),_.ref=Jr(p,d,m),_.return=p,p=_)}return a(p);case Gn:e:{for(b=m.key;d!==null;){if(d.key===b)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=il(m,p.mode,_),d.return=p,p=d}return a(p);case Ft:return b=m._init,x(p,d,b(m._payload),_)}if(ni(m))return v(p,d,m,_);if(Kr(m))return w(p,d,m,_);Mo(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,m),d.return=p,p=d):(n(p,d),d=rl(m,p.mode,_),d.return=p,p=d),a(p)):n(p,d)}return x}var xr=ym(!0),wm=ym(!1),ro={},ut=pn(ro),Ai=pn(ro),Li=pn(ro);function bn(e){if(e===ro)throw Error(E(174));return e}function Ic(e,t){switch(V(Li,t),V(Ai,e),V(ut,ro),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ll(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ll(t,e)}G(ut),V(ut,t)}function Ir(){G(ut),G(Ai),G(Li)}function _m(e){bn(Li.current);var t=bn(ut.current),n=Ll(t,e.type);t!==n&&(V(Ai,e),V(ut,n))}function Cc(e){Ai.current===e&&(G(ut),G(Ai))}var J=pn(0);function Aa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Js=[];function Tc(){for(var e=0;e<Js.length;e++)Js[e]._workInProgressVersionPrimary=null;Js.length=0}var ra=Pt.ReactCurrentDispatcher,Xs=Pt.ReactCurrentBatchConfig,Ln=0,X=null,oe=null,ue=null,La=!1,mi=!1,Di=0,o1=0;function ge(){throw Error(E(321))}function Pc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!tt(e[n],t[n]))return!1;return!0}function Nc(e,t,n,r,i,o){if(Ln=o,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ra.current=e===null||e.memoizedState===null?u1:c1,e=n(r,i),mi){o=0;do{if(mi=!1,Di=0,25<=o)throw Error(E(301));o+=1,ue=oe=null,t.updateQueue=null,ra.current=f1,e=n(r,i)}while(mi)}if(ra.current=Da,t=oe!==null&&oe.next!==null,Ln=0,ue=oe=X=null,La=!1,t)throw Error(E(300));return e}function Oc(){var e=Di!==0;return Di=0,e}function it(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?X.memoizedState=ue=e:ue=ue.next=e,ue}function Ke(){if(oe===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=ue===null?X.memoizedState:ue.next;if(t!==null)ue=t,oe=e;else{if(e===null)throw Error(E(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},ue===null?X.memoizedState=ue=e:ue=ue.next=e}return ue}function Mi(e,t){return typeof t=="function"?t(e):t}function Zs(e){var t=Ke(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=oe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var c=u.lane;if((Ln&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,a=r):l=l.next=f,X.lanes|=c,Dn|=c}u=u.next}while(u!==null&&u!==o);l===null?a=r:l.next=s,tt(r,t.memoizedState)||(Ce=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,X.lanes|=o,Dn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function el(e){var t=Ke(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);tt(o,t.memoizedState)||(Ce=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Sm(){}function Em(e,t){var n=X,r=Ke(),i=t(),o=!tt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ce=!0),r=r.queue,Rc(xm.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,Fi(9,bm.bind(null,n,r,i,t),void 0,null),ce===null)throw Error(E(349));(Ln&30)!==0||km(n,t,i)}return i}function km(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function bm(e,t,n,r){t.value=n,t.getSnapshot=r,Im(t)&&Cm(e)}function xm(e,t,n){return n(function(){Im(t)&&Cm(e)})}function Im(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!tt(e,n)}catch{return!0}}function Cm(e){var t=kt(e,1);t!==null&&et(t,e,1,-1)}function yd(e){var t=it();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mi,lastRenderedState:e},t.queue=e,e=e.dispatch=l1.bind(null,X,e),[t.memoizedState,e]}function Fi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Tm(){return Ke().memoizedState}function ia(e,t,n,r){var i=it();X.flags|=e,i.memoizedState=Fi(1|t,n,void 0,r===void 0?null:r)}function as(e,t,n,r){var i=Ke();r=r===void 0?null:r;var o=void 0;if(oe!==null){var a=oe.memoizedState;if(o=a.destroy,r!==null&&Pc(r,a.deps)){i.memoizedState=Fi(t,n,o,r);return}}X.flags|=e,i.memoizedState=Fi(1|t,n,o,r)}function wd(e,t){return ia(8390656,8,e,t)}function Rc(e,t){return as(2048,8,e,t)}function Pm(e,t){return as(4,2,e,t)}function Nm(e,t){return as(4,4,e,t)}function Om(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rm(e,t,n){return n=n!=null?n.concat([e]):null,as(4,4,Om.bind(null,t,e),n)}function Ac(){}function Am(e,t){var n=Ke();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Pc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Lm(e,t){var n=Ke();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Pc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Dm(e,t,n){return(Ln&21)===0?(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n):(tt(n,t)||(n=Up(),X.lanes|=n,Dn|=n,e.baseState=!0),t)}function a1(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=Xs.transition;Xs.transition={};try{e(!1),t()}finally{H=n,Xs.transition=r}}function Mm(){return Ke().memoizedState}function s1(e,t,n){var r=tn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Fm(e))Um(t,n);else if(n=pm(e,t,n,r),n!==null){var i=ke();et(n,e,r,i),zm(n,t,r)}}function l1(e,t,n){var r=tn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fm(e))Um(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,tt(s,a)){var l=t.interleaved;l===null?(i.next=i,bc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=pm(e,t,i,r),n!==null&&(i=ke(),et(n,e,r,i),zm(n,t,r))}}function Fm(e){var t=e.alternate;return e===X||t!==null&&t===X}function Um(e,t){mi=La=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zm(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cc(e,n)}}var Da={readContext:Ve,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},u1={readContext:Ve,useCallback:function(e,t){return it().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:wd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ia(4194308,4,Om.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ia(4194308,4,e,t)},useInsertionEffect:function(e,t){return ia(4,2,e,t)},useMemo:function(e,t){var n=it();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=it();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=s1.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=it();return e={current:e},t.memoizedState=e},useState:yd,useDebugValue:Ac,useDeferredValue:function(e){return it().memoizedState=e},useTransition:function(){var e=yd(!1),t=e[0];return e=a1.bind(null,e[1]),it().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,i=it();if(q){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),ce===null)throw Error(E(349));(Ln&30)!==0||km(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,wd(xm.bind(null,r,o,e),[e]),r.flags|=2048,Fi(9,bm.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=it(),t=ce.identifierPrefix;if(q){var n=mt,r=pt;n=(r&~(1<<32-Ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Di++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=o1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},c1={readContext:Ve,useCallback:Am,useContext:Ve,useEffect:Rc,useImperativeHandle:Rm,useInsertionEffect:Pm,useLayoutEffect:Nm,useMemo:Lm,useReducer:Zs,useRef:Tm,useState:function(){return Zs(Mi)},useDebugValue:Ac,useDeferredValue:function(e){var t=Ke();return Dm(t,oe.memoizedState,e)},useTransition:function(){var e=Zs(Mi)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:Sm,useSyncExternalStore:Em,useId:Mm,unstable_isNewReconciler:!1},f1={readContext:Ve,useCallback:Am,useContext:Ve,useEffect:Rc,useImperativeHandle:Rm,useInsertionEffect:Pm,useLayoutEffect:Nm,useMemo:Lm,useReducer:el,useRef:Tm,useState:function(){return el(Mi)},useDebugValue:Ac,useDeferredValue:function(e){var t=Ke();return oe===null?t.memoizedState=e:Dm(t,oe.memoizedState,e)},useTransition:function(){var e=el(Mi)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:Sm,useSyncExternalStore:Em,useId:Mm,unstable_isNewReconciler:!1};function Cr(e,t){try{var n="",r=t;do n+=zy(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function tl(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function ru(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var d1=typeof WeakMap=="function"?WeakMap:Map;function jm(e,t,n){n=wt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Fa||(Fa=!0,hu=r),ru(e,t)},n}function $m(e,t,n){n=wt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ru(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ru(e,t),typeof r!="function"&&(en===null?en=new Set([this]):en.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function _d(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new d1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=I1.bind(null,e,t,n),t.then(e,e))}function Sd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ed(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=wt(-1,1),t.tag=2,Zt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var h1=Pt.ReactCurrentOwner,Ce=!1;function Ee(e,t,n,r){t.child=e===null?wm(t,null,n,r):xr(t,e.child,n,r)}function kd(e,t,n,r,i){n=n.render;var o=t.ref;return mr(t,i),r=Nc(e,t,n,r,o,i),n=Oc(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,bt(e,t,i)):(q&&n&&yc(t),t.flags|=1,Ee(e,t,r,i),t.child)}function bd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!$c(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Bm(e,t,o,r,i)):(e=la(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Pi,n(a,r)&&e.ref===t.ref)return bt(e,t,i)}return t.flags|=1,e=nn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Bm(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Pi(o,r)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Ce=!0);else return t.lanes=e.lanes,bt(e,t,i)}return iu(e,t,n,r,i)}function Hm(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(or,Re),Re|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(or,Re),Re|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,V(or,Re),Re|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,V(or,Re),Re|=r;return Ee(e,t,i,n),t.child}function Wm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function iu(e,t,n,r,i){var o=Pe(n)?Rn:_e.current;return o=kr(t,o),mr(t,i),n=Nc(e,t,n,r,o,i),r=Oc(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,bt(e,t,i)):(q&&r&&yc(t),t.flags|=1,Ee(e,t,n,i),t.child)}function xd(e,t,n,r,i){if(Pe(n)){var o=!0;Ca(t)}else o=!1;if(mr(t,i),t.stateNode===null)oa(e,t),vm(t,n,r),nu(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ve(u):(u=Pe(n)?Rn:_e.current,u=kr(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&gd(t,a,r,u),Ut=!1;var h=t.memoizedState;a.state=h,Ra(t,r,a,i),l=t.memoizedState,s!==r||h!==l||Te.current||Ut?(typeof c=="function"&&(tu(t,n,c,r),l=t.memoizedState),(s=Ut||md(t,n,s,r,h,l,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,mm(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Qe(t.type,s),a.props=u,f=t.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ve(l):(l=Pe(n)?Rn:_e.current,l=kr(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||h!==l)&&gd(t,a,r,l),Ut=!1,h=t.memoizedState,a.state=h,Ra(t,r,a,i);var v=t.memoizedState;s!==f||h!==v||Te.current||Ut?(typeof g=="function"&&(tu(t,n,g,r),v=t.memoizedState),(u=Ut||md(t,n,u,r,h,v,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return ou(e,t,n,r,o,i)}function ou(e,t,n,r,i,o){Wm(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&cd(t,n,!1),bt(e,t,o);r=t.stateNode,h1.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=xr(t,e.child,null,o),t.child=xr(t,null,s,o)):Ee(e,t,s,o),t.memoizedState=r.state,i&&cd(t,n,!0),t.child}function Vm(e){var t=e.stateNode;t.pendingContext?ud(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ud(e,t.context,!1),Ic(e,t.containerInfo)}function Id(e,t,n,r,i){return br(),_c(i),t.flags|=256,Ee(e,t,n,r),t.child}var au={dehydrated:null,treeContext:null,retryLane:0};function su(e){return{baseLanes:e,cachePool:null,transitions:null}}function Km(e,t,n){var r=t.pendingProps,i=J.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),V(J,i&1),e===null)return Zl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=a):o=us(a,r,0,null),e=Tn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=su(n),t.memoizedState=au,e):Lc(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return p1(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return(a&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=nn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=nn(s,o):(o=Tn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?su(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=au,r}return o=e.child,e=o.sibling,r=nn(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Lc(e,t){return t=us({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Fo(e,t,n,r){return r!==null&&_c(r),xr(t,e.child,null,n),e=Lc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function p1(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=tl(Error(E(422))),Fo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=us({mode:"visible",children:r.children},i,0,null),o=Tn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&xr(t,e.child,null,a),t.child.memoizedState=su(a),t.memoizedState=au,o);if((t.mode&1)===0)return Fo(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(E(419)),r=tl(o,r,void 0),Fo(e,t,a,r)}if(s=(a&e.childLanes)!==0,Ce||s){if(r=ce,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|a))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,kt(e,i),et(r,e,i,-1))}return jc(),r=tl(Error(E(421))),Fo(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=C1.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Le=Xt(i.nextSibling),De=t,q=!0,Je=null,e!==null&&(je[$e++]=pt,je[$e++]=mt,je[$e++]=An,pt=e.id,mt=e.overflow,An=t),t=Lc(t,r.children),t.flags|=4096,t)}function Cd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),eu(e.return,t,n)}function nl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ym(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ee(e,t,r.children,n),r=J.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cd(e,n,t);else if(e.tag===19)Cd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(J,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Aa(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),nl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Aa(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}nl(t,!0,n,null,o);break;case"together":nl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function oa(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function bt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Dn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=nn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=nn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function m1(e,t,n){switch(t.tag){case 3:Vm(t),br();break;case 5:_m(t);break;case 1:Pe(t.type)&&Ca(t);break;case 4:Ic(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;V(Na,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(J,J.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Km(e,t,n):(V(J,J.current&1),e=bt(e,t,n),e!==null?e.sibling:null);V(J,J.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Ym(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(J,J.current),r)break;return null;case 22:case 23:return t.lanes=0,Hm(e,t,n)}return bt(e,t,n)}var Gm,lu,Qm,qm;Gm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};lu=function(){};Qm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,bn(ut.current);var o=null;switch(n){case"input":i=Nl(e,i),r=Nl(e,r),o=[];break;case"select":i=Z({},i,{value:void 0}),r=Z({},r,{value:void 0}),o=[];break;case"textarea":i=Al(e,i),r=Al(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=xa)}Dl(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ei.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ei.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&K("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};qm=function(e,t,n,r){n!==r&&(t.flags|=4)};function Xr(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function g1(e,t,n){var r=t.pendingProps;switch(wc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return Pe(t.type)&&Ia(),ve(t),null;case 3:return r=t.stateNode,Ir(),G(Te),G(_e),Tc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Do(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Je!==null&&(gu(Je),Je=null))),lu(e,t),ve(t),null;case 5:Cc(t);var i=bn(Li.current);if(n=t.type,e!==null&&t.stateNode!=null)Qm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return ve(t),null}if(e=bn(ut.current),Do(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[at]=t,r[Ri]=o,e=(t.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(i=0;i<ii.length;i++)K(ii[i],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":Mf(r,o),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},K("invalid",r);break;case"textarea":Uf(r,o),K("invalid",r)}Dl(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Lo(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Lo(r.textContent,s,e),i=["children",""+s]):Ei.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&K("scroll",r)}switch(n){case"input":Io(r),Ff(r,o,!0);break;case"textarea":Io(r),zf(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=xa)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=kp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[at]=t,e[Ri]=r,Gm(e,t,!1,!1),t.stateNode=e;e:{switch(a=Ml(n,r),n){case"dialog":K("cancel",e),K("close",e),i=r;break;case"iframe":case"object":case"embed":K("load",e),i=r;break;case"video":case"audio":for(i=0;i<ii.length;i++)K(ii[i],e);i=r;break;case"source":K("error",e),i=r;break;case"img":case"image":case"link":K("error",e),K("load",e),i=r;break;case"details":K("toggle",e),i=r;break;case"input":Mf(e,r),i=Nl(e,r),K("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Z({},r,{value:void 0}),K("invalid",e);break;case"textarea":Uf(e,r),i=Al(e,r),K("invalid",e);break;default:i=r}Dl(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?Ip(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&bp(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ki(e,l):typeof l=="number"&&ki(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ei.hasOwnProperty(o)?l!=null&&o==="onScroll"&&K("scroll",e):l!=null&&ic(e,o,l,a))}switch(n){case"input":Io(e),Ff(e,r,!1);break;case"textarea":Io(e),zf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+sn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?fr(e,!!r.multiple,o,!1):r.defaultValue!=null&&fr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=xa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)qm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=bn(Li.current),bn(ut.current),Do(t)){if(r=t.stateNode,n=t.memoizedProps,r[at]=t,(o=r.nodeValue!==n)&&(e=De,e!==null))switch(e.tag){case 3:Lo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Lo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[at]=t,t.stateNode=r}return ve(t),null;case 13:if(G(J),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&Le!==null&&(t.mode&1)!==0&&(t.flags&128)===0)hm(),br(),t.flags|=98560,o=!1;else if(o=Do(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(E(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[at]=t}else br(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ve(t),o=!1}else Je!==null&&(gu(Je),Je=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(J.current&1)!==0?ae===0&&(ae=3):jc())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return Ir(),lu(e,t),e===null&&Ni(t.stateNode.containerInfo),ve(t),null;case 10:return kc(t.type._context),ve(t),null;case 17:return Pe(t.type)&&Ia(),ve(t),null;case 19:if(G(J),o=t.memoizedState,o===null)return ve(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Xr(o,!1);else{if(ae!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Aa(e),a!==null){for(t.flags|=128,Xr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(J,J.current&1|2),t.child}e=e.sibling}o.tail!==null&&re()>Tr&&(t.flags|=128,r=!0,Xr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Aa(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Xr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!q)return ve(t),null}else 2*re()-o.renderingStartTime>Tr&&n!==1073741824&&(t.flags|=128,r=!0,Xr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=re(),t.sibling=null,n=J.current,V(J,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return zc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Re&1073741824)!==0&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function v1(e,t){switch(wc(t),t.tag){case 1:return Pe(t.type)&&Ia(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ir(),G(Te),G(_e),Tc(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Cc(t),null;case 13:if(G(J),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));br()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(J),null;case 4:return Ir(),null;case 10:return kc(t.type._context),null;case 22:case 23:return zc(),null;case 24:return null;default:return null}}var Uo=!1,ye=!1,y1=typeof WeakSet=="function"?WeakSet:Set,P=null;function ir(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function uu(e,t,n){try{n()}catch(r){ee(e,t,r)}}var Td=!1;function w1(e,t){if(Kl=Ea,e=em(),vc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,c=0,f=e,h=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(s=a+i),f!==o||r!==0&&f.nodeType!==3||(l=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(g=f.firstChild)!==null;)h=f,f=g;for(;;){if(f===e)break t;if(h===n&&++u===i&&(s=a),h===o&&++c===r&&(l=a),(g=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=g}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yl={focusedElem:e,selectionRange:n},Ea=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var v=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,x=v.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:Qe(t.type,w),x);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(_){ee(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return v=Td,Td=!1,v}function gi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&uu(t,n,o)}i=i.next}while(i!==r)}}function ss(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function cu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Jm(e){var t=e.alternate;t!==null&&(e.alternate=null,Jm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[at],delete t[Ri],delete t[ql],delete t[t1],delete t[n1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xm(e){return e.tag===5||e.tag===3||e.tag===4}function Pd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=xa));else if(r!==4&&(e=e.child,e!==null))for(fu(e,t,n),e=e.sibling;e!==null;)fu(e,t,n),e=e.sibling}function du(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(du(e,t,n),e=e.sibling;e!==null;)du(e,t,n),e=e.sibling}var de=null,qe=!1;function At(e,t,n){for(n=n.child;n!==null;)Zm(e,t,n),n=n.sibling}function Zm(e,t,n){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(Za,n)}catch{}switch(n.tag){case 5:ye||ir(n,t);case 6:var r=de,i=qe;de=null,At(e,t,n),de=r,qe=i,de!==null&&(qe?(e=de,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):de.removeChild(n.stateNode));break;case 18:de!==null&&(qe?(e=de,n=n.stateNode,e.nodeType===8?Qs(e.parentNode,n):e.nodeType===1&&Qs(e,n),Ci(e)):Qs(de,n.stateNode));break;case 4:r=de,i=qe,de=n.stateNode.containerInfo,qe=!0,At(e,t,n),de=r,qe=i;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&((o&2)!==0||(o&4)!==0)&&uu(n,t,a),i=i.next}while(i!==r)}At(e,t,n);break;case 1:if(!ye&&(ir(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ee(n,t,s)}At(e,t,n);break;case 21:At(e,t,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,At(e,t,n),ye=r):At(e,t,n);break;default:At(e,t,n)}}function Nd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new y1),t.forEach(function(r){var i=T1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ge(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:de=s.stateNode,qe=!1;break e;case 3:de=s.stateNode.containerInfo,qe=!0;break e;case 4:de=s.stateNode.containerInfo,qe=!0;break e}s=s.return}if(de===null)throw Error(E(160));Zm(o,a,i),de=null,qe=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ee(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)eg(t,e),t=t.sibling}function eg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ge(t,e),rt(e),r&4){try{gi(3,e,e.return),ss(3,e)}catch(w){ee(e,e.return,w)}try{gi(5,e,e.return)}catch(w){ee(e,e.return,w)}}break;case 1:Ge(t,e),rt(e),r&512&&n!==null&&ir(n,n.return);break;case 5:if(Ge(t,e),rt(e),r&512&&n!==null&&ir(n,n.return),e.flags&32){var i=e.stateNode;try{ki(i,"")}catch(w){ee(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Sp(i,o),Ml(s,a);var u=Ml(s,o);for(a=0;a<l.length;a+=2){var c=l[a],f=l[a+1];c==="style"?Ip(i,f):c==="dangerouslySetInnerHTML"?bp(i,f):c==="children"?ki(i,f):ic(i,c,f,u)}switch(s){case"input":Ol(i,o);break;case"textarea":Ep(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?fr(i,!!o.multiple,g,!1):h!==!!o.multiple&&(o.defaultValue!=null?fr(i,!!o.multiple,o.defaultValue,!0):fr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ri]=o}catch(w){ee(e,e.return,w)}}break;case 6:if(Ge(t,e),rt(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){ee(e,e.return,w)}}break;case 3:if(Ge(t,e),rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ci(t.containerInfo)}catch(w){ee(e,e.return,w)}break;case 4:Ge(t,e),rt(e);break;case 13:Ge(t,e),rt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Fc=re())),r&4&&Nd(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(ye=(u=ye)||c,Ge(t,e),ye=u):Ge(t,e),rt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&(e.mode&1)!==0)for(P=e,c=e.child;c!==null;){for(f=P=c;P!==null;){switch(h=P,g=h.child,h.tag){case 0:case 11:case 14:case 15:gi(4,h,h.return);break;case 1:ir(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){ee(r,n,w)}}break;case 5:ir(h,h.return);break;case 22:if(h.memoizedState!==null){Rd(f);continue}}g!==null?(g.return=h,P=g):Rd(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=xp("display",a))}catch(w){ee(e,e.return,w)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){ee(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ge(t,e),rt(e),r&4&&Nd(e);break;case 21:break;default:Ge(t,e),rt(e)}}function rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Xm(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ki(i,""),r.flags&=-33);var o=Pd(e);du(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Pd(e);fu(e,s,a);break;default:throw Error(E(161))}}catch(l){ee(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _1(e,t,n){P=e,tg(e)}function tg(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var i=P,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Uo;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||ye;s=Uo;var u=ye;if(Uo=a,(ye=l)&&!u)for(P=i;P!==null;)a=P,l=a.child,a.tag===22&&a.memoizedState!==null?Ad(i):l!==null?(l.return=a,P=l):Ad(i);for(;o!==null;)P=o,tg(o),o=o.sibling;P=i,Uo=s,ye=u}Od(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,P=o):Od(e)}}function Od(e){for(;P!==null;){var t=P;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ye||ss(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ye)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Qe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&pd(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}pd(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Ci(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}ye||t.flags&512&&cu(t)}catch(h){ee(t,t.return,h)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function Rd(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function Ad(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ss(4,t)}catch(l){ee(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ee(t,i,l)}}var o=t.return;try{cu(t)}catch(l){ee(t,o,l)}break;case 5:var a=t.return;try{cu(t)}catch(l){ee(t,a,l)}}}catch(l){ee(t,t.return,l)}if(t===e){P=null;break}var s=t.sibling;if(s!==null){s.return=t.return,P=s;break}P=t.return}}var S1=Math.ceil,Ma=Pt.ReactCurrentDispatcher,Dc=Pt.ReactCurrentOwner,He=Pt.ReactCurrentBatchConfig,$=0,ce=null,ie=null,pe=0,Re=0,or=pn(0),ae=0,Ui=null,Dn=0,ls=0,Mc=0,vi=null,Ie=null,Fc=0,Tr=1/0,dt=null,Fa=!1,hu=null,en=null,zo=!1,Kt=null,Ua=0,yi=0,pu=null,aa=-1,sa=0;function ke(){return($&6)!==0?re():aa!==-1?aa:aa=re()}function tn(e){return(e.mode&1)===0?1:($&2)!==0&&pe!==0?pe&-pe:i1.transition!==null?(sa===0&&(sa=Up()),sa):(e=H,e!==0||(e=window.event,e=e===void 0?16:Vp(e.type)),e)}function et(e,t,n,r){if(50<yi)throw yi=0,pu=null,Error(E(185));eo(e,n,r),(($&2)===0||e!==ce)&&(e===ce&&(($&2)===0&&(ls|=n),ae===4&&jt(e,pe)),Ne(e,r),n===1&&$===0&&(t.mode&1)===0&&(Tr=re()+500,is&&mn()))}function Ne(e,t){var n=e.callbackNode;i0(e,t);var r=Sa(e,e===ce?pe:0);if(r===0)n!==null&&Bf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Bf(n),t===1)e.tag===0?r1(Ld.bind(null,e)):cm(Ld.bind(null,e)),Z0(function(){($&6)===0&&mn()}),n=null;else{switch(zp(r)){case 1:n=uc;break;case 4:n=Mp;break;case 16:n=_a;break;case 536870912:n=Fp;break;default:n=_a}n=ug(n,ng.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ng(e,t){if(aa=-1,sa=0,($&6)!==0)throw Error(E(327));var n=e.callbackNode;if(gr()&&e.callbackNode!==n)return null;var r=Sa(e,e===ce?pe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=za(e,r);else{t=r;var i=$;$|=2;var o=ig();(ce!==e||pe!==t)&&(dt=null,Tr=re()+500,Cn(e,t));do try{b1();break}catch(s){rg(e,s)}while(1);Ec(),Ma.current=o,$=i,ie!==null?t=0:(ce=null,pe=0,t=ae)}if(t!==0){if(t===2&&(i=$l(e),i!==0&&(r=i,t=mu(e,i))),t===1)throw n=Ui,Cn(e,0),jt(e,r),Ne(e,re()),n;if(t===6)jt(e,r);else{if(i=e.current.alternate,(r&30)===0&&!E1(i)&&(t=za(e,r),t===2&&(o=$l(e),o!==0&&(r=o,t=mu(e,o))),t===1))throw n=Ui,Cn(e,0),jt(e,r),Ne(e,re()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:_n(e,Ie,dt);break;case 3:if(jt(e,r),(r&130023424)===r&&(t=Fc+500-re(),10<t)){if(Sa(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ql(_n.bind(null,e,Ie,dt),t);break}_n(e,Ie,dt);break;case 4:if(jt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Ze(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*S1(r/1960))-r,10<r){e.timeoutHandle=Ql(_n.bind(null,e,Ie,dt),r);break}_n(e,Ie,dt);break;case 5:_n(e,Ie,dt);break;default:throw Error(E(329))}}}return Ne(e,re()),e.callbackNode===n?ng.bind(null,e):null}function mu(e,t){var n=vi;return e.current.memoizedState.isDehydrated&&(Cn(e,t).flags|=256),e=za(e,t),e!==2&&(t=Ie,Ie=n,t!==null&&gu(t)),e}function gu(e){Ie===null?Ie=e:Ie.push.apply(Ie,e)}function E1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!tt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jt(e,t){for(t&=~Mc,t&=~ls,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ze(t),r=1<<n;e[n]=-1,t&=~r}}function Ld(e){if(($&6)!==0)throw Error(E(327));gr();var t=Sa(e,0);if((t&1)===0)return Ne(e,re()),null;var n=za(e,t);if(e.tag!==0&&n===2){var r=$l(e);r!==0&&(t=r,n=mu(e,r))}if(n===1)throw n=Ui,Cn(e,0),jt(e,t),Ne(e,re()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_n(e,Ie,dt),Ne(e,re()),null}function Uc(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(Tr=re()+500,is&&mn())}}function Mn(e){Kt!==null&&Kt.tag===0&&($&6)===0&&gr();var t=$;$|=1;var n=He.transition,r=H;try{if(He.transition=null,H=1,e)return e()}finally{H=r,He.transition=n,$=t,($&6)===0&&mn()}}function zc(){Re=or.current,G(or)}function Cn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,X0(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(wc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ia();break;case 3:Ir(),G(Te),G(_e),Tc();break;case 5:Cc(r);break;case 4:Ir();break;case 13:G(J);break;case 19:G(J);break;case 10:kc(r.type._context);break;case 22:case 23:zc()}n=n.return}if(ce=e,ie=e=nn(e.current,null),pe=Re=t,ae=0,Ui=null,Mc=ls=Dn=0,Ie=vi=null,kn!==null){for(t=0;t<kn.length;t++)if(n=kn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}kn=null}return e}function rg(e,t){do{var n=ie;try{if(Ec(),ra.current=Da,La){for(var r=X.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}La=!1}if(Ln=0,ue=oe=X=null,mi=!1,Di=0,Dc.current=null,n===null||n.return===null){ae=1,Ui=t,ie=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=pe,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,f=c.tag;if((c.mode&1)===0&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Sd(a);if(g!==null){g.flags&=-257,Ed(g,a,s,o,t),g.mode&1&&_d(o,u,t),t=g,l=u;var v=t.updateQueue;if(v===null){var w=new Set;w.add(l),t.updateQueue=w}else v.add(l);break e}else{if((t&1)===0){_d(o,u,t),jc();break e}l=Error(E(426))}}else if(q&&s.mode&1){var x=Sd(a);if(x!==null){(x.flags&65536)===0&&(x.flags|=256),Ed(x,a,s,o,t),_c(Cr(l,s));break e}}o=l=Cr(l,s),ae!==4&&(ae=2),vi===null?vi=[o]:vi.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=jm(o,l,t);hd(o,p);break e;case 1:s=l;var d=o.type,m=o.stateNode;if((o.flags&128)===0&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(en===null||!en.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var _=$m(o,s,t);hd(o,_);break e}}o=o.return}while(o!==null)}ag(n)}catch(k){t=k,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(1)}function ig(){var e=Ma.current;return Ma.current=Da,e===null?Da:e}function jc(){(ae===0||ae===3||ae===2)&&(ae=4),ce===null||(Dn&268435455)===0&&(ls&268435455)===0||jt(ce,pe)}function za(e,t){var n=$;$|=2;var r=ig();(ce!==e||pe!==t)&&(dt=null,Cn(e,t));do try{k1();break}catch(i){rg(e,i)}while(1);if(Ec(),$=n,Ma.current=r,ie!==null)throw Error(E(261));return ce=null,pe=0,ae}function k1(){for(;ie!==null;)og(ie)}function b1(){for(;ie!==null&&!Qy();)og(ie)}function og(e){var t=lg(e.alternate,e,Re);e.memoizedProps=e.pendingProps,t===null?ag(e):ie=t,Dc.current=null}function ag(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=g1(n,t,Re),n!==null){ie=n;return}}else{if(n=v1(n,t),n!==null){n.flags&=32767,ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,ie=null;return}}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);ae===0&&(ae=5)}function _n(e,t,n){var r=H,i=He.transition;try{He.transition=null,H=1,x1(e,t,n,r)}finally{He.transition=i,H=r}return null}function x1(e,t,n,r){do gr();while(Kt!==null);if(($&6)!==0)throw Error(E(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(o0(e,o),e===ce&&(ie=ce=null,pe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||zo||(zo=!0,ug(_a,function(){return gr(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=He.transition,He.transition=null;var a=H;H=1;var s=$;$|=4,Dc.current=null,w1(e,n),eg(n,e),V0(Yl),Ea=!!Kl,Yl=Kl=null,e.current=n,_1(n),qy(),$=s,H=a,He.transition=o}else e.current=n;if(zo&&(zo=!1,Kt=e,Ua=i),o=e.pendingLanes,o===0&&(en=null),Zy(n.stateNode),Ne(e,re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Fa)throw Fa=!1,e=hu,hu=null,e;return(Ua&1)!==0&&e.tag!==0&&gr(),o=e.pendingLanes,(o&1)!==0?e===pu?yi++:(yi=0,pu=e):yi=0,mn(),null}function gr(){if(Kt!==null){var e=zp(Ua),t=He.transition,n=H;try{if(He.transition=null,H=16>e?16:e,Kt===null)var r=!1;else{if(e=Kt,Kt=null,Ua=0,($&6)!==0)throw Error(E(331));var i=$;for($|=4,P=e.current;P!==null;){var o=P,a=o.child;if((P.flags&16)!==0){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(P=u;P!==null;){var c=P;switch(c.tag){case 0:case 11:case 15:gi(8,c,o)}var f=c.child;if(f!==null)f.return=c,P=f;else for(;P!==null;){c=P;var h=c.sibling,g=c.return;if(Jm(c),c===u){P=null;break}if(h!==null){h.return=g,P=h;break}P=g}}}var v=o.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var x=w.sibling;w.sibling=null,w=x}while(w!==null)}}P=o}}if((o.subtreeFlags&2064)!==0&&a!==null)a.return=o,P=a;else e:for(;P!==null;){if(o=P,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:gi(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,P=p;break e}P=o.return}}var d=e.current;for(P=d;P!==null;){a=P;var m=a.child;if((a.subtreeFlags&2064)!==0&&m!==null)m.return=a,P=m;else e:for(a=d;P!==null;){if(s=P,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:ss(9,s)}}catch(k){ee(s,s.return,k)}if(s===a){P=null;break e}var _=s.sibling;if(_!==null){_.return=s.return,P=_;break e}P=s.return}}if($=i,mn(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(Za,e)}catch{}r=!0}return r}finally{H=n,He.transition=t}}return!1}function Dd(e,t,n){t=Cr(n,t),t=jm(e,t,1),e=Zt(e,t,1),t=ke(),e!==null&&(eo(e,1,t),Ne(e,t))}function ee(e,t,n){if(e.tag===3)Dd(e,e,n);else for(;t!==null;){if(t.tag===3){Dd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(en===null||!en.has(r))){e=Cr(n,e),e=$m(t,e,1),t=Zt(t,e,1),e=ke(),t!==null&&(eo(t,1,e),Ne(t,e));break}}t=t.return}}function I1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(pe&n)===n&&(ae===4||ae===3&&(pe&130023424)===pe&&500>re()-Fc?Cn(e,0):Mc|=n),Ne(e,t)}function sg(e,t){t===0&&((e.mode&1)===0?t=1:(t=Po,Po<<=1,(Po&130023424)===0&&(Po=4194304)));var n=ke();e=kt(e,t),e!==null&&(eo(e,t,n),Ne(e,n))}function C1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),sg(e,n)}function T1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),sg(e,n)}var lg;lg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Te.current)Ce=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ce=!1,m1(e,t,n);Ce=(e.flags&131072)!==0}else Ce=!1,q&&(t.flags&1048576)!==0&&fm(t,Pa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;oa(e,t),e=t.pendingProps;var i=kr(t,_e.current);mr(t,n),i=Nc(null,t,r,e,i,n);var o=Oc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pe(r)?(o=!0,Ca(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,xc(t),i.updater=os,t.stateNode=i,i._reactInternals=t,nu(t,r,e,n),t=ou(null,t,r,!0,o,n)):(t.tag=0,q&&o&&yc(t),Ee(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(oa(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=N1(r),e=Qe(r,e),i){case 0:t=iu(null,t,r,e,n);break e;case 1:t=xd(null,t,r,e,n);break e;case 11:t=kd(null,t,r,e,n);break e;case 14:t=bd(null,t,r,Qe(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),iu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),xd(e,t,r,i,n);case 3:e:{if(Vm(t),e===null)throw Error(E(387));r=t.pendingProps,o=t.memoizedState,i=o.element,mm(e,t),Ra(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Cr(Error(E(423)),t),t=Id(e,t,r,n,i);break e}else if(r!==i){i=Cr(Error(E(424)),t),t=Id(e,t,r,n,i);break e}else for(Le=Xt(t.stateNode.containerInfo.firstChild),De=t,q=!0,Je=null,n=wm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(br(),r===i){t=bt(e,t,n);break e}Ee(e,t,r,n)}t=t.child}return t;case 5:return _m(t),e===null&&Zl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Gl(r,i)?a=null:o!==null&&Gl(r,o)&&(t.flags|=32),Wm(e,t),Ee(e,t,a,n),t.child;case 6:return e===null&&Zl(t),null;case 13:return Km(e,t,n);case 4:return Ic(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=xr(t,null,r,n):Ee(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),kd(e,t,r,i,n);case 7:return Ee(e,t,t.pendingProps,n),t.child;case 8:return Ee(e,t,t.pendingProps.children,n),t.child;case 12:return Ee(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,V(Na,r._currentValue),r._currentValue=a,o!==null)if(tt(o.value,a)){if(o.children===i.children&&!Te.current){t=bt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=wt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),eu(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(E(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),eu(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Ee(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,mr(t,n),i=Ve(i),r=r(i),t.flags|=1,Ee(e,t,r,n),t.child;case 14:return r=t.type,i=Qe(r,t.pendingProps),i=Qe(r.type,i),bd(e,t,r,i,n);case 15:return Bm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),oa(e,t),t.tag=1,Pe(r)?(e=!0,Ca(t)):e=!1,mr(t,n),vm(t,r,i),nu(t,r,i,n),ou(null,t,r,!0,e,n);case 19:return Ym(e,t,n);case 22:return Hm(e,t,n)}throw Error(E(156,t.tag))};function ug(e,t){return Dp(e,t)}function P1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Be(e,t,n,r){return new P1(e,t,n,r)}function $c(e){return e=e.prototype,!(!e||!e.isReactComponent)}function N1(e){if(typeof e=="function")return $c(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ac)return 11;if(e===sc)return 14}return 2}function nn(e,t){var n=e.alternate;return n===null?(n=Be(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function la(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")$c(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Qn:return Tn(n.children,i,o,t);case oc:a=8,i|=8;break;case Il:return e=Be(12,n,t,i|2),e.elementType=Il,e.lanes=o,e;case Cl:return e=Be(13,n,t,i),e.elementType=Cl,e.lanes=o,e;case Tl:return e=Be(19,n,t,i),e.elementType=Tl,e.lanes=o,e;case yp:return us(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gp:a=10;break e;case vp:a=9;break e;case ac:a=11;break e;case sc:a=14;break e;case Ft:a=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Be(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Tn(e,t,n,r){return e=Be(7,e,r,t),e.lanes=n,e}function us(e,t,n,r){return e=Be(22,e,r,t),e.elementType=yp,e.lanes=n,e.stateNode={isHidden:!1},e}function rl(e,t,n){return e=Be(6,e,null,t),e.lanes=n,e}function il(e,t,n){return t=Be(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function O1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Us(0),this.expirationTimes=Us(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Us(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Bc(e,t,n,r,i,o,a,s,l){return e=new O1(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Be(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xc(o),e}function R1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function cg(e){if(!e)return ln;e=e._reactInternals;e:{if(Vn(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(Pe(n))return um(e,n,t)}return t}function fg(e,t,n,r,i,o,a,s,l){return e=Bc(n,r,!0,e,i,o,a,s,l),e.context=cg(null),n=e.current,r=ke(),i=tn(n),o=wt(r,i),o.callback=t!=null?t:null,Zt(n,o,i),e.current.lanes=i,eo(e,i,r),Ne(e,r),e}function cs(e,t,n,r){var i=t.current,o=ke(),a=tn(i);return n=cg(n),t.context===null?t.context=n:t.pendingContext=n,t=wt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Zt(i,t,a),e!==null&&(et(e,i,a,o),na(e,i,a)),a}function ja(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Md(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Hc(e,t){Md(e,t),(e=e.alternate)&&Md(e,t)}function A1(){return null}var dg=typeof reportError=="function"?reportError:function(e){console.error(e)};function Wc(e){this._internalRoot=e}fs.prototype.render=Wc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));cs(e,t,null,null)};fs.prototype.unmount=Wc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mn(function(){cs(null,e,null,null)}),t[Et]=null}};function fs(e){this._internalRoot=e}fs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<zt.length&&t!==0&&t<zt[n].priority;n++);zt.splice(n,0,e),n===0&&Wp(e)}};function Vc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ds(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Fd(){}function L1(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ja(a);o.call(u)}}var a=fg(t,r,e,0,null,!1,!1,"",Fd);return e._reactRootContainer=a,e[Et]=a.current,Ni(e.nodeType===8?e.parentNode:e),Mn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=ja(l);s.call(u)}}var l=Bc(e,0,!1,null,null,!1,!1,"",Fd);return e._reactRootContainer=l,e[Et]=l.current,Ni(e.nodeType===8?e.parentNode:e),Mn(function(){cs(t,l,n,r)}),l}function hs(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=ja(a);s.call(l)}}cs(t,a,e,i)}else a=L1(n,t,e,i,r);return ja(a)}jp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ri(t.pendingLanes);n!==0&&(cc(t,n|1),Ne(t,re()),($&6)===0&&(Tr=re()+500,mn()))}break;case 13:Mn(function(){var r=kt(e,1);if(r!==null){var i=ke();et(r,e,1,i)}}),Hc(e,1)}};fc=function(e){if(e.tag===13){var t=kt(e,134217728);if(t!==null){var n=ke();et(t,e,134217728,n)}Hc(e,134217728)}};$p=function(e){if(e.tag===13){var t=tn(e),n=kt(e,t);if(n!==null){var r=ke();et(n,e,t,r)}Hc(e,t)}};Bp=function(){return H};Hp=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};Ul=function(e,t,n){switch(t){case"input":if(Ol(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=rs(r);if(!i)throw Error(E(90));_p(r),Ol(r,i)}}}break;case"textarea":Ep(e,n);break;case"select":t=n.value,t!=null&&fr(e,!!n.multiple,t,!1)}};Pp=Uc;Np=Mn;var D1={usingClientEntryPoint:!1,Events:[no,Zn,rs,Cp,Tp,Uc]},Zr={findFiberByHostInstance:En,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},M1={bundleType:Zr.bundleType,version:Zr.version,rendererPackageName:Zr.rendererPackageName,rendererConfig:Zr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ap(e),e===null?null:e.stateNode},findFiberByHostInstance:Zr.findFiberByHostInstance||A1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jo.isDisabled&&jo.supportsFiber)try{Za=jo.inject(M1),lt=jo}catch{}}Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D1;Fe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vc(t))throw Error(E(200));return R1(e,t,null,n)};Fe.createRoot=function(e,t){if(!Vc(e))throw Error(E(299));var n=!1,r="",i=dg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Bc(e,1,!1,null,null,n,!1,r,i),e[Et]=t.current,Ni(e.nodeType===8?e.parentNode:e),new Wc(t)};Fe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=Ap(t),e=e===null?null:e.stateNode,e};Fe.flushSync=function(e){return Mn(e)};Fe.hydrate=function(e,t,n){if(!ds(t))throw Error(E(200));return hs(null,e,t,!0,n)};Fe.hydrateRoot=function(e,t,n){if(!Vc(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=dg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=fg(t,null,e,1,n!=null?n:null,i,!1,o,a),e[Et]=t.current,Ni(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new fs(t)};Fe.render=function(e,t,n){if(!ds(t))throw Error(E(200));return hs(null,e,t,!1,n)};Fe.unmountComponentAtNode=function(e){if(!ds(e))throw Error(E(40));return e._reactRootContainer?(Mn(function(){hs(null,null,e,!1,function(){e._reactRootContainer=null,e[Et]=null})}),!0):!1};Fe.unstable_batchedUpdates=Uc;Fe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ds(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return hs(e,t,n,!1,r)};Fe.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Fe})(fp);var Ud=fp.exports;bl.createRoot=Ud.createRoot,bl.hydrateRoot=Ud.hydrateRoot;/**
 * @remix-run/router v1.0.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zi(){return zi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zi.apply(this,arguments)}var Yt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Yt||(Yt={}));const zd="popstate";function F1(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:s}=r.location;return vu("",{pathname:o,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ji(i)}return j1(t,n,null,e)}function U1(){return Math.random().toString(36).substr(2,8)}function jd(e){return{usr:e.state,key:e.key}}function vu(e,t,n,r){return n===void 0&&(n=null),zi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Fr(t):t,{state:n,key:t&&t.key||r||U1()})}function ji(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Fr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function z1(e){let t=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:"unknown://unknown",n=typeof e=="string"?e:ji(e);return new URL(n,t)}function j1(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=Yt.Pop,l=null;function u(){s=Yt.Pop,l&&l({action:s,location:h.location})}function c(g,v){s=Yt.Push;let w=vu(h.location,g,v);n&&n(w,g);let x=jd(w),p=h.createHref(w);try{a.pushState(x,"",p)}catch{i.location.assign(p)}o&&l&&l({action:s,location:h.location})}function f(g,v){s=Yt.Replace;let w=vu(h.location,g,v);n&&n(w,g);let x=jd(w),p=h.createHref(w);a.replaceState(x,"",p),o&&l&&l({action:s,location:h.location})}let h={get action(){return s},get location(){return e(i,a)},listen(g){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(zd,u),l=g,()=>{i.removeEventListener(zd,u),l=null}},createHref(g){return t(i,g)},encodeLocation(g){let v=z1(ji(g));return zi({},g,{pathname:v.pathname,search:v.search,hash:v.hash})},push:c,replace:f,go(g){return a.go(g)}};return h}var $d;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})($d||($d={}));function $1(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Fr(t):t,i=pg(r.pathname||"/",n);if(i==null)return null;let o=hg(e);B1(o);let a=null;for(let s=0;a==null&&s<o.length;++s)a=J1(o[s],ew(i));return a}function hg(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((i,o)=>{let a={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};a.relativePath.startsWith("/")&&(fe(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let s=rn([r,a.relativePath]),l=n.concat(a);i.children&&i.children.length>0&&(fe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+s+'".')),hg(i.children,t,l,s)),!(i.path==null&&!i.index)&&t.push({path:s,score:Q1(s,i.index),routesMeta:l})}),t}function B1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:q1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const H1=/^:\w+$/,W1=3,V1=2,K1=1,Y1=10,G1=-2,Bd=e=>e==="*";function Q1(e,t){let n=e.split("/"),r=n.length;return n.some(Bd)&&(r+=G1),t&&(r+=V1),n.filter(i=>!Bd(i)).reduce((i,o)=>i+(H1.test(o)?W1:o===""?K1:Y1),r)}function q1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function J1(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let s=n[a],l=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=X1({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=s.route;o.push({params:r,pathname:rn([i,c.pathname]),pathnameBase:iw(rn([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=rn([i,c.pathnameBase]))}return o}function X1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Z1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let h=s[f]||"";a=o.slice(0,o.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=tw(s[f]||"",c),u},{}),pathname:o,pathnameBase:a,pattern:e}}function Z1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Kc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(a,s)=>(r.push(s),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function ew(e){try{return decodeURI(e)}catch(t){return Kc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function tw(e,t){try{return decodeURIComponent(e)}catch(n){return Kc(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function pg(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function fe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Kc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function nw(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Fr(e):e;return{pathname:n?n.startsWith("/")?n:rw(n,t):t,search:ow(r),hash:aw(i)}}function rw(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ol(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function mg(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function gg(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Fr(e):(i=zi({},e),fe(!i.pathname||!i.pathname.includes("?"),ol("?","pathname","search",i)),fe(!i.pathname||!i.pathname.includes("#"),ol("#","pathname","hash",i)),fe(!i.search||!i.search.includes("#"),ol("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(r||a==null)s=n;else{let f=t.length-1;if(a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}s=f>=0?t[f]:"/"}let l=nw(i,s),u=a&&a!=="/"&&a.endsWith("/"),c=(o||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const rn=e=>e.join("/").replace(/\/\/+/g,"/"),iw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ow=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,aw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class sw{constructor(t,n,r){this.status=t,this.statusText=n||"",this.data=r}}function lw(e){return e instanceof sw}const uw=new Set(["POST","PUT","PATCH","DELETE"]);[...uw];var ps={exports:{}},ms={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cw=C.exports,fw=Symbol.for("react.element"),dw=Symbol.for("react.fragment"),hw=Object.prototype.hasOwnProperty,pw=cw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mw={key:!0,ref:!0,__self:!0,__source:!0};function vg(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)hw.call(t,r)&&!mw.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:fw,type:e,key:o,ref:a,props:i,_owner:pw.current}}ms.Fragment=dw;ms.jsx=vg;ms.jsxs=vg;(function(e){e.exports=ms})(ps);const gs=ps.exports.Fragment,y=ps.exports.jsx,M=ps.exports.jsxs;/**
 * React Router v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yu(){return yu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yu.apply(this,arguments)}function gw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const vw=typeof Object.is=="function"?Object.is:gw,{useState:yw,useEffect:ww,useLayoutEffect:_w,useDebugValue:Sw}=kl;function Ew(e,t,n){const r=t(),[{inst:i},o]=yw({inst:{value:r,getSnapshot:t}});return _w(()=>{i.value=r,i.getSnapshot=t,al(i)&&o({inst:i})},[e,r,t]),ww(()=>(al(i)&&o({inst:i}),e(()=>{al(i)&&o({inst:i})})),[e]),Sw(r),r}function al(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!vw(n,r)}catch{return!0}}function kw(e,t,n){return t()}const bw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",xw=!bw,Iw=xw?kw:Ew;"useSyncExternalStore"in kl&&(e=>e.useSyncExternalStore)(kl);const Cw=C.exports.createContext(null),Tw=C.exports.createContext(null),Yc=C.exports.createContext(null),Gc=C.exports.createContext(null),vs=C.exports.createContext(null),Ur=C.exports.createContext({outlet:null,matches:[]}),yg=C.exports.createContext(null);function Pw(e,t){let{relative:n}=t===void 0?{}:t;io()||fe(!1);let{basename:r,navigator:i}=C.exports.useContext(Gc),{hash:o,pathname:a,search:s}=Qc(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:rn([r,a])),i.createHref({pathname:l,search:s,hash:o})}function io(){return C.exports.useContext(vs)!=null}function oo(){return io()||fe(!1),C.exports.useContext(vs).location}function zr(){io()||fe(!1);let{basename:e,navigator:t}=C.exports.useContext(Gc),{matches:n}=C.exports.useContext(Ur),{pathname:r}=oo(),i=JSON.stringify(mg(n).map(s=>s.pathnameBase)),o=C.exports.useRef(!1);return C.exports.useEffect(()=>{o.current=!0}),C.exports.useCallback(function(s,l){if(l===void 0&&(l={}),!o.current)return;if(typeof s=="number"){t.go(s);return}let u=gg(s,JSON.parse(i),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:rn([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,i,r])}function Nw(){let{matches:e}=C.exports.useContext(Ur),t=e[e.length-1];return t?t.params:{}}function Qc(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=C.exports.useContext(Ur),{pathname:i}=oo(),o=JSON.stringify(mg(r).map(a=>a.pathnameBase));return C.exports.useMemo(()=>gg(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function Ow(e,t){io()||fe(!1);let n=C.exports.useContext(Yc),{matches:r}=C.exports.useContext(Ur),i=r[r.length-1],o=i?i.params:{};i&&i.pathname;let a=i?i.pathnameBase:"/";i&&i.route;let s=oo(),l;if(t){var u;let v=typeof t=="string"?Fr(t):t;a==="/"||((u=v.pathname)==null?void 0:u.startsWith(a))||fe(!1),l=v}else l=s;let c=l.pathname||"/",f=a==="/"?c:c.slice(a.length)||"/",h=$1(e,{pathname:f}),g=Dw(h&&h.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:rn([a,v.pathname]),pathnameBase:v.pathnameBase==="/"?a:rn([a,v.pathnameBase])})),r,n||void 0);return t&&g?y(vs.Provider,{value:{location:yu({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:Yt.Pop},children:g}):g}function Rw(){let e=Fw(),t=lw(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r};return M(gs,{children:[y("h2",{children:"Unhandled Thrown Error!"}),y("h3",{style:{fontStyle:"italic"},children:t}),n?y("pre",{style:i,children:n}):null,y("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),M("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",y("code",{style:o,children:"errorElement"})," props on\xA0",y("code",{style:o,children:"<Route>"})]})]})}class Aw extends C.exports.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?y(yg.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function Lw(e){let{routeContext:t,match:n,children:r}=e,i=C.exports.useContext(Cw);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),y(Ur.Provider,{value:t,children:r})}function Dw(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(a=>a.route.id&&(i==null?void 0:i[a.route.id]));o>=0||fe(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,a,s)=>{let l=a.route.id?i==null?void 0:i[a.route.id]:null,u=n?a.route.errorElement||y(Rw,{}):null,c=()=>y(Lw,{match:a,routeContext:{outlet:o,matches:t.concat(r.slice(0,s+1))},children:l?u:a.route.element!==void 0?a.route.element:o});return n&&(a.route.errorElement||s===0)?y(Aw,{location:n.location,component:u,error:l,children:c()}):c()},null)}var Hd;(function(e){e.UseRevalidator="useRevalidator"})(Hd||(Hd={}));var wu;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(wu||(wu={}));function Mw(e){let t=C.exports.useContext(Yc);return t||fe(!1),t}function Fw(){var e;let t=C.exports.useContext(yg),n=Mw(wu.UseRouteError),r=C.exports.useContext(Ur),i=r.matches[r.matches.length-1];return t||(r||fe(!1),i.route.id||fe(!1),(e=n.errors)==null?void 0:e[i.route.id])}function _u(e){fe(!1)}function Uw(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Yt.Pop,navigator:o,static:a=!1}=e;io()&&fe(!1);let s=t.replace(/^\/*/,"/"),l=C.exports.useMemo(()=>({basename:s,navigator:o,static:a}),[s,o,a]);typeof r=="string"&&(r=Fr(r));let{pathname:u="/",search:c="",hash:f="",state:h=null,key:g="default"}=r,v=C.exports.useMemo(()=>{let w=pg(u,s);return w==null?null:{pathname:w,search:c,hash:f,state:h,key:g}},[s,u,c,f,h,g]);return v==null?null:y(Gc.Provider,{value:l,children:y(vs.Provider,{children:n,value:{location:v,navigationType:i}})})}function zw(e){let{children:t,location:n}=e,r=C.exports.useContext(Tw),i=r&&!t?r.router.routes:Su(t);return Ow(i,n)}var Wd;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Wd||(Wd={}));new Promise(()=>{});function Su(e,t){t===void 0&&(t=[]);let n=[];return C.exports.Children.forEach(e,(r,i)=>{if(!C.exports.isValidElement(r))return;if(r.type===C.exports.Fragment){n.push.apply(n,Su(r.props.children,t));return}r.type!==_u&&fe(!1),!r.props.index||!r.props.children||fe(!1);let o=[...t,i],a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(a.children=Su(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wg(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function jw(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function $w(e,t){return e.button===0&&(!t||t==="_self")&&!jw(e)}const Bw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Hw=["aria-current","caseSensitive","className","end","style","to","children"];function Ww(e){let{basename:t,children:n,window:r}=e,i=C.exports.useRef();i.current==null&&(i.current=F1({window:r,v5Compat:!0}));let o=i.current,[a,s]=C.exports.useState({action:o.action,location:o.location});return C.exports.useLayoutEffect(()=>o.listen(s),[o]),y(Uw,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o})}const Vw=C.exports.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:s,target:l,to:u,preventScrollReset:c}=t,f=wg(t,Bw),h=Pw(u,{relative:i}),g=Kw(u,{replace:a,state:s,target:l,preventScrollReset:c,relative:i});function v(w){r&&r(w),w.defaultPrevented||g(w)}return y("a",{...f,href:h,onClick:o?r:v,ref:n,target:l})}),Pn=C.exports.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:s,to:l,children:u}=t,c=wg(t,Hw),f=Qc(l,{relative:c.relative}),h=oo(),g=C.exports.useContext(Yc),v=f.pathname,w=h.pathname,x=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;i||(w=w.toLowerCase(),x=x?x.toLowerCase():null,v=v.toLowerCase());let p=w===v||!a&&w.startsWith(v)&&w.charAt(v.length)==="/",d=x!=null&&(x===v||!a&&x.startsWith(v)&&x.charAt(v.length)==="/"),m=p?r:void 0,_;typeof o=="function"?_=o({isActive:p,isPending:d}):_=[o,p?"active":null,d?"pending":null].filter(Boolean).join(" ");let k=typeof s=="function"?s({isActive:p,isPending:d}):s;return y(Vw,{...c,"aria-current":m,className:_,ref:n,style:k,to:l,children:typeof u=="function"?u({isActive:p,isPending:d}):u})});var Vd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Vd||(Vd={}));var Kd;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Kd||(Kd={}));function Kw(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,s=zr(),l=oo(),u=Qc(e,{relative:a});return C.exports.useCallback(c=>{if($w(c,n)){c.preventDefault();let f=r!==void 0?r:ji(l)===ji(u);s(e,{replace:f,state:i,preventScrollReset:o,relative:a})}},[l,s,u,r,i,n,e,o,a])}function Yd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Yd(Object(n),!0).forEach(function(r){se(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Yd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function $a(e){return $a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$a(e)}function Yw(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Gd(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Gw(e,t,n){return t&&Gd(e.prototype,t),n&&Gd(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qc(e,t){return qw(e)||Xw(e,t)||_g(e,t)||e2()}function ao(e){return Qw(e)||Jw(e)||_g(e)||Zw()}function Qw(e){if(Array.isArray(e))return Eu(e)}function qw(e){if(Array.isArray(e))return e}function Jw(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Xw(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,a,s;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(l){o=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw s}}return r}}function _g(e,t){if(!!e){if(typeof e=="string")return Eu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Eu(e,t)}}function Eu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Zw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Qd=function(){},Jc={},Sg={},Eg=null,kg={mark:Qd,measure:Qd};try{typeof window<"u"&&(Jc=window),typeof document<"u"&&(Sg=document),typeof MutationObserver<"u"&&(Eg=MutationObserver),typeof performance<"u"&&(kg=performance)}catch{}var t2=Jc.navigator||{},qd=t2.userAgent,Jd=qd===void 0?"":qd,un=Jc,Q=Sg,Xd=Eg,$o=kg;un.document;var Nt=!!Q.documentElement&&!!Q.head&&typeof Q.addEventListener=="function"&&typeof Q.createElement=="function",bg=~Jd.indexOf("MSIE")||~Jd.indexOf("Trident/"),Bo,Ho,Wo,Vo,Ko,xt="___FONT_AWESOME___",ku=16,xg="fa",Ig="svg-inline--fa",Fn="data-fa-i2svg",bu="data-fa-pseudo-element",n2="data-fa-pseudo-element-pending",Xc="data-prefix",Zc="data-icon",Zd="fontawesome-i2svg",r2="async",i2=["HTML","HEAD","STYLE","SCRIPT"],Cg=function(){try{return!0}catch{return!1}}(),Y="classic",te="sharp",ef=[Y,te];function so(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Y]}})}var $i=so((Bo={},se(Bo,Y,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),se(Bo,te,{fa:"solid",fass:"solid","fa-solid":"solid"}),Bo)),Bi=so((Ho={},se(Ho,Y,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),se(Ho,te,{solid:"fass"}),Ho)),Hi=so((Wo={},se(Wo,Y,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),se(Wo,te,{fass:"fa-solid"}),Wo)),o2=so((Vo={},se(Vo,Y,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),se(Vo,te,{"fa-solid":"fass"}),Vo)),a2=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Tg="fa-layers-text",s2=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,l2=so((Ko={},se(Ko,Y,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),se(Ko,te,{900:"fass"}),Ko)),Pg=[1,2,3,4,5,6,7,8,9,10],u2=Pg.concat([11,12,13,14,15,16,17,18,19,20]),c2=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],xn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Wi=new Set;Object.keys(Bi[Y]).map(Wi.add.bind(Wi));Object.keys(Bi[te]).map(Wi.add.bind(Wi));var f2=[].concat(ef,ao(Wi),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",xn.GROUP,xn.SWAP_OPACITY,xn.PRIMARY,xn.SECONDARY]).concat(Pg.map(function(e){return"".concat(e,"x")})).concat(u2.map(function(e){return"w-".concat(e)})),wi=un.FontAwesomeConfig||{};function d2(e){var t=Q.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function h2(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Q&&typeof Q.querySelector=="function"){var p2=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];p2.forEach(function(e){var t=qc(e,2),n=t[0],r=t[1],i=h2(d2(n));i!=null&&(wi[r]=i)})}var Ng={styleDefault:"solid",familyDefault:"classic",cssPrefix:xg,replacementClass:Ig,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};wi.familyPrefix&&(wi.cssPrefix=wi.familyPrefix);var Pr=T(T({},Ng),wi);Pr.autoReplaceSvg||(Pr.observeMutations=!1);var R={};Object.keys(Ng).forEach(function(e){Object.defineProperty(R,e,{enumerable:!0,set:function(n){Pr[e]=n,_i.forEach(function(r){return r(R)})},get:function(){return Pr[e]}})});Object.defineProperty(R,"familyPrefix",{enumerable:!0,set:function(t){Pr.cssPrefix=t,_i.forEach(function(n){return n(R)})},get:function(){return Pr.cssPrefix}});un.FontAwesomeConfig=R;var _i=[];function m2(e){return _i.push(e),function(){_i.splice(_i.indexOf(e),1)}}var Lt=ku,st={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function g2(e){if(!(!e||!Nt)){var t=Q.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Q.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],a=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=o)}return Q.head.insertBefore(t,r),e}}var v2="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Vi(){for(var e=12,t="";e-- >0;)t+=v2[Math.random()*62|0];return t}function jr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function tf(e){return e.classList?jr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Og(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function y2(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Og(e[n]),'" ')},"").trim()}function ys(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function nf(e){return e.size!==st.size||e.x!==st.x||e.y!==st.y||e.rotate!==st.rotate||e.flipX||e.flipY}function w2(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(a," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function _2(e){var t=e.transform,n=e.width,r=n===void 0?ku:n,i=e.height,o=i===void 0?ku:i,a=e.startCentered,s=a===void 0?!1:a,l="";return s&&bg?l+="translate(".concat(t.x/Lt-r/2,"em, ").concat(t.y/Lt-o/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Lt,"em), calc(-50% + ").concat(t.y/Lt,"em)) "):l+="translate(".concat(t.x/Lt,"em, ").concat(t.y/Lt,"em) "),l+="scale(".concat(t.size/Lt*(t.flipX?-1:1),", ").concat(t.size/Lt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var S2=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Rg(){var e=xg,t=Ig,n=R.cssPrefix,r=R.replacementClass,i=S2;if(n!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var eh=!1;function sl(){R.autoAddCss&&!eh&&(g2(Rg()),eh=!0)}var E2={mixout:function(){return{dom:{css:Rg,insertCss:sl}}},hooks:function(){return{beforeDOMElementCreation:function(){sl()},beforeI2svg:function(){sl()}}}},It=un||{};It[xt]||(It[xt]={});It[xt].styles||(It[xt].styles={});It[xt].hooks||(It[xt].hooks={});It[xt].shims||(It[xt].shims=[]);var Xe=It[xt],Ag=[],k2=function e(){Q.removeEventListener("DOMContentLoaded",e),Ba=1,Ag.map(function(t){return t()})},Ba=!1;Nt&&(Ba=(Q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Q.readyState),Ba||Q.addEventListener("DOMContentLoaded",k2));function b2(e){!Nt||(Ba?setTimeout(e,0):Ag.push(e))}function lo(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,o=i===void 0?[]:i;return typeof e=="string"?Og(e):"<".concat(t," ").concat(y2(r),">").concat(o.map(lo).join(""),"</").concat(t,">")}function th(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var x2=function(t,n){return function(r,i,o,a){return t.call(n,r,i,o,a)}},ll=function(t,n,r,i){var o=Object.keys(t),a=o.length,s=i!==void 0?x2(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[o[0]]):(l=0,c=r);l<a;l++)u=o[l],c=s(c,t[u],u,t);return c};function I2(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function xu(e){var t=I2(e);return t.length===1?t[0].toString(16):null}function C2(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function nh(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Iu(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=nh(t);typeof Xe.hooks.addPack=="function"&&!i?Xe.hooks.addPack(e,nh(t)):Xe.styles[e]=T(T({},Xe.styles[e]||{}),o),e==="fas"&&Iu("fa",t)}var Yo,Go,Qo,ar=Xe.styles,T2=Xe.shims,P2=(Yo={},se(Yo,Y,Object.values(Hi[Y])),se(Yo,te,Object.values(Hi[te])),Yo),rf=null,Lg={},Dg={},Mg={},Fg={},Ug={},N2=(Go={},se(Go,Y,Object.keys($i[Y])),se(Go,te,Object.keys($i[te])),Go);function O2(e){return~f2.indexOf(e)}function R2(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!O2(i)?i:null}var zg=function(){var t=function(o){return ll(ar,function(a,s,l){return a[l]=ll(s,o,{}),a},{})};Lg=t(function(i,o,a){if(o[3]&&(i[o[3]]=a),o[2]){var s=o[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=a})}return i}),Dg=t(function(i,o,a){if(i[a]=a,o[2]){var s=o[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=a})}return i}),Ug=t(function(i,o,a){var s=o[2];return i[a]=a,s.forEach(function(l){i[l]=a}),i});var n="far"in ar||R.autoFetchSvg,r=ll(T2,function(i,o){var a=o[0],s=o[1],l=o[2];return s==="far"&&!n&&(s="fas"),typeof a=="string"&&(i.names[a]={prefix:s,iconName:l}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});Mg=r.names,Fg=r.unicodes,rf=ws(R.styleDefault,{family:R.familyDefault})};m2(function(e){rf=ws(e.styleDefault,{family:R.familyDefault})});zg();function of(e,t){return(Lg[e]||{})[t]}function A2(e,t){return(Dg[e]||{})[t]}function In(e,t){return(Ug[e]||{})[t]}function jg(e){return Mg[e]||{prefix:null,iconName:null}}function L2(e){var t=Fg[e],n=of("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function cn(){return rf}var af=function(){return{prefix:null,iconName:null,rest:[]}};function ws(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Y:n,i=$i[r][e],o=Bi[r][e]||Bi[r][i],a=e in Xe.styles?e:null;return o||a||null}var rh=(Qo={},se(Qo,Y,Object.keys(Hi[Y])),se(Qo,te,Object.keys(Hi[te])),Qo);function _s(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(t={},se(t,Y,"".concat(R.cssPrefix,"-").concat(Y)),se(t,te,"".concat(R.cssPrefix,"-").concat(te)),t),a=null,s=Y;(e.includes(o[Y])||e.some(function(u){return rh[Y].includes(u)}))&&(s=Y),(e.includes(o[te])||e.some(function(u){return rh[te].includes(u)}))&&(s=te);var l=e.reduce(function(u,c){var f=R2(R.cssPrefix,c);if(ar[c]?(c=P2[s].includes(c)?o2[s][c]:c,a=c,u.prefix=c):N2[s].indexOf(c)>-1?(a=c,u.prefix=ws(c,{family:s})):f?u.iconName=f:c!==R.replacementClass&&c!==o[Y]&&c!==o[te]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var h=a==="fa"?jg(u.iconName):{},g=In(u.prefix,u.iconName);h.prefix&&(a=null),u.iconName=h.iconName||g||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!ar.far&&ar.fas&&!R.autoFetchSvg&&(u.prefix="fas")}return u},af());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===te&&(ar.fass||R.autoFetchSvg)&&(l.prefix="fass",l.iconName=In(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||a==="fa")&&(l.prefix=cn()||"fas"),l}var D2=function(){function e(){Yw(this,e),this.definitions={}}return Gw(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var a=i.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(s){n.definitions[s]=T(T({},n.definitions[s]||{}),a[s]),Iu(s,a[s]);var l=Hi[Y][s];l&&Iu(l,a[s]),zg()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var a=i[o],s=a.prefix,l=a.iconName,u=a.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[s][f]=u)}),n[s][l]=u}),n}}]),e}(),ih=[],sr={},vr={},M2=Object.keys(vr);function F2(e,t){var n=t.mixoutsTo;return ih=e,sr={},Object.keys(vr).forEach(function(r){M2.indexOf(r)===-1&&delete vr[r]}),ih.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(a){typeof i[a]=="function"&&(n[a]=i[a]),$a(i[a])==="object"&&Object.keys(i[a]).forEach(function(s){n[a]||(n[a]={}),n[a][s]=i[a][s]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(a){sr[a]||(sr[a]=[]),sr[a].push(o[a])})}r.provides&&r.provides(vr)}),n}function Cu(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=sr[e]||[];return o.forEach(function(a){t=a.apply(null,[t].concat(r))}),t}function Un(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=sr[e]||[];i.forEach(function(o){o.apply(null,n)})}function Ct(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return vr[e]?vr[e].apply(null,t):void 0}function Tu(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||cn();if(!!t)return t=In(n,t)||t,th($g.definitions,n,t)||th(Xe.styles,n,t)}var $g=new D2,U2=function(){R.autoReplaceSvg=!1,R.observeMutations=!1,Un("noAuto")},z2={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Nt?(Un("beforeI2svg",t),Ct("pseudoElements2svg",t),Ct("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;R.autoReplaceSvg===!1&&(R.autoReplaceSvg=!0),R.observeMutations=!0,b2(function(){$2({autoReplaceSvgRoot:n}),Un("watch",t)})}},j2={icon:function(t){if(t===null)return null;if($a(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:In(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=ws(t[0]);return{prefix:r,iconName:In(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(R.cssPrefix,"-"))>-1||t.match(a2))){var i=_s(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||cn(),iconName:In(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var o=cn();return{prefix:o,iconName:In(o,t)||t}}}},ze={noAuto:U2,config:R,dom:z2,parse:j2,library:$g,findIconDefinition:Tu,toHtml:lo},$2=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Q:n;(Object.keys(Xe.styles).length>0||R.autoFetchSvg)&&Nt&&R.autoReplaceSvg&&ze.dom.i2svg({node:r})};function Ss(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return lo(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!Nt){var r=Q.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function B2(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,o=e.styles,a=e.transform;if(nf(a)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};i.style=ys(T(T({},o),{},{"transform-origin":"".concat(u.x+a.x/16,"em ").concat(u.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function H2(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,o=e.symbol,a=o===!0?"".concat(t,"-").concat(R.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:T(T({},i),{},{id:a}),children:r}]}]}function sf(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,o=e.iconName,a=e.transform,s=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,h=e.watchable,g=h===void 0?!1:h,v=r.found?r:n,w=v.width,x=v.height,p=i==="fak",d=[R.replacementClass,o?"".concat(R.cssPrefix,"-").concat(o):""].filter(function(j){return f.classes.indexOf(j)===-1}).filter(function(j){return j!==""||!!j}).concat(f.classes).join(" "),m={children:[],attributes:T(T({},f.attributes),{},{"data-prefix":i,"data-icon":o,class:d,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(x)})},_=p&&!~f.classes.indexOf("fa-fw")?{width:"".concat(w/x*16*.0625,"em")}:{};g&&(m.attributes[Fn]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||Vi())},children:[l]}),delete m.attributes.title);var k=T(T({},m),{},{prefix:i,iconName:o,main:n,mask:r,maskId:u,transform:a,symbol:s,styles:T(T({},_),f.styles)}),b=r.found&&n.found?Ct("generateAbstractMask",k)||{children:[],attributes:{}}:Ct("generateAbstractIcon",k)||{children:[],attributes:{}},I=b.children,O=b.attributes;return k.children=I,k.attributes=O,s?H2(k):B2(k)}function oh(e){var t=e.content,n=e.width,r=e.height,i=e.transform,o=e.title,a=e.extra,s=e.watchable,l=s===void 0?!1:s,u=T(T(T({},a.attributes),o?{title:o}:{}),{},{class:a.classes.join(" ")});l&&(u[Fn]="");var c=T({},a.styles);nf(i)&&(c.transform=_2({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=ys(c);f.length>0&&(u.style=f);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),o&&h.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),h}function W2(e){var t=e.content,n=e.title,r=e.extra,i=T(T(T({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=ys(r.styles);o.length>0&&(i.style=o);var a=[];return a.push({tag:"span",attributes:i,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var ul=Xe.styles;function Pu(e){var t=e[0],n=e[1],r=e.slice(4),i=qc(r,1),o=i[0],a=null;return Array.isArray(o)?a={tag:"g",attributes:{class:"".concat(R.cssPrefix,"-").concat(xn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(xn.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(xn.PRIMARY),fill:"currentColor",d:o[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:a}}var V2={found:!1,width:512,height:512};function K2(e,t){!Cg&&!R.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Nu(e,t){var n=t;return t==="fa"&&R.styleDefault!==null&&(t=cn()),new Promise(function(r,i){if(Ct("missingIconAbstract"),n==="fa"){var o=jg(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&ul[t]&&ul[t][e]){var a=ul[t][e];return r(Pu(a))}K2(e,t),r(T(T({},V2),{},{icon:R.showMissingIcons&&e?Ct("missingIconAbstract")||{}:{}}))})}var ah=function(){},Ou=R.measurePerformance&&$o&&$o.mark&&$o.measure?$o:{mark:ah,measure:ah},oi='FA "6.2.1"',Y2=function(t){return Ou.mark("".concat(oi," ").concat(t," begins")),function(){return Bg(t)}},Bg=function(t){Ou.mark("".concat(oi," ").concat(t," ends")),Ou.measure("".concat(oi," ").concat(t),"".concat(oi," ").concat(t," begins"),"".concat(oi," ").concat(t," ends"))},lf={begin:Y2,end:Bg},ua=function(){};function sh(e){var t=e.getAttribute?e.getAttribute(Fn):null;return typeof t=="string"}function G2(e){var t=e.getAttribute?e.getAttribute(Xc):null,n=e.getAttribute?e.getAttribute(Zc):null;return t&&n}function Q2(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(R.replacementClass)}function q2(){if(R.autoReplaceSvg===!0)return ca.replace;var e=ca[R.autoReplaceSvg];return e||ca.replace}function J2(e){return Q.createElementNS("http://www.w3.org/2000/svg",e)}function X2(e){return Q.createElement(e)}function Hg(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?J2:X2:n;if(typeof e=="string")return Q.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(a){i.setAttribute(a,e.attributes[a])});var o=e.children||[];return o.forEach(function(a){i.appendChild(Hg(a,{ceFn:r}))}),i}function Z2(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ca={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Hg(i),n)}),n.getAttribute(Fn)===null&&R.keepOriginalSource){var r=Q.createComment(Z2(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~tf(n).indexOf(R.replacementClass))return ca.replace(t);var i=new RegExp("".concat(R.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(s,l){return l===R.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var a=r.map(function(s){return lo(s)}).join(`
`);n.setAttribute(Fn,""),n.innerHTML=a}};function lh(e){e()}function Wg(e,t){var n=typeof t=="function"?t:ua;if(e.length===0)n();else{var r=lh;R.mutateApproach===r2&&(r=un.requestAnimationFrame||lh),r(function(){var i=q2(),o=lf.begin("mutate");e.map(i),o(),n()})}}var uf=!1;function Vg(){uf=!0}function Ru(){uf=!1}var Ha=null;function uh(e){if(!!Xd&&!!R.observeMutations){var t=e.treeCallback,n=t===void 0?ua:t,r=e.nodeCallback,i=r===void 0?ua:r,o=e.pseudoElementsCallback,a=o===void 0?ua:o,s=e.observeMutationsRoot,l=s===void 0?Q:s;Ha=new Xd(function(u){if(!uf){var c=cn();jr(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!sh(f.addedNodes[0])&&(R.searchPseudoElements&&a(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&R.searchPseudoElements&&a(f.target.parentNode),f.type==="attributes"&&sh(f.target)&&~c2.indexOf(f.attributeName))if(f.attributeName==="class"&&G2(f.target)){var h=_s(tf(f.target)),g=h.prefix,v=h.iconName;f.target.setAttribute(Xc,g||c),v&&f.target.setAttribute(Zc,v)}else Q2(f.target)&&i(f.target)})}}),Nt&&Ha.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function e_(){!Ha||Ha.disconnect()}function t_(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var o=i.split(":"),a=o[0],s=o.slice(1);return a&&s.length>0&&(r[a]=s.join(":").trim()),r},{})),n}function n_(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=_s(tf(e));return i.prefix||(i.prefix=cn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=A2(i.prefix,e.innerText)||of(i.prefix,xu(e.innerText))),!i.iconName&&R.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function r_(e){var t=jr(e.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return R.autoA11y&&(n?t["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(r||Vi()):(t["aria-hidden"]="true",t.focusable="false")),t}function i_(){return{iconName:null,title:null,titleId:null,prefix:null,transform:st,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ch(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=n_(e),r=n.iconName,i=n.prefix,o=n.rest,a=r_(e),s=Cu("parseNodeAttributes",{},e),l=t.styleParser?t_(e):[];return T({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:st,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:a}},s)}var o_=Xe.styles;function Kg(e){var t=R.autoReplaceSvg==="nest"?ch(e,{styleParser:!1}):ch(e);return~t.extra.classes.indexOf(Tg)?Ct("generateLayersText",e,t):Ct("generateSvgReplacementMutation",e,t)}var fn=new Set;ef.map(function(e){fn.add("fa-".concat(e))});Object.keys($i[Y]).map(fn.add.bind(fn));Object.keys($i[te]).map(fn.add.bind(fn));fn=ao(fn);function fh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Nt)return Promise.resolve();var n=Q.documentElement.classList,r=function(f){return n.add("".concat(Zd,"-").concat(f))},i=function(f){return n.remove("".concat(Zd,"-").concat(f))},o=R.autoFetchSvg?fn:ef.map(function(c){return"fa-".concat(c)}).concat(Object.keys(o_));o.includes("fa")||o.push("fa");var a=[".".concat(Tg,":not([").concat(Fn,"])")].concat(o.map(function(c){return".".concat(c,":not([").concat(Fn,"])")})).join(", ");if(a.length===0)return Promise.resolve();var s=[];try{s=jr(e.querySelectorAll(a))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=lf.begin("onTree"),u=s.reduce(function(c,f){try{var h=Kg(f);h&&c.push(h)}catch(g){Cg||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(h){Wg(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(h){l(),f(h)})})}function a_(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Kg(e).then(function(n){n&&Wg([n],t)})}function s_(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Tu(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Tu(i||{})),e(r,T(T({},n),{},{mask:i}))}}var l_=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?st:r,o=n.symbol,a=o===void 0?!1:o,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,f=n.title,h=f===void 0?null:f,g=n.titleId,v=g===void 0?null:g,w=n.classes,x=w===void 0?[]:w,p=n.attributes,d=p===void 0?{}:p,m=n.styles,_=m===void 0?{}:m;if(!!t){var k=t.prefix,b=t.iconName,I=t.icon;return Ss(T({type:"icon"},t),function(){return Un("beforeDOMElementCreation",{iconDefinition:t,params:n}),R.autoA11y&&(h?d["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(v||Vi()):(d["aria-hidden"]="true",d.focusable="false")),sf({icons:{main:Pu(I),mask:l?Pu(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:b,transform:T(T({},st),i),symbol:a,title:h,maskId:c,titleId:v,extra:{attributes:d,styles:_,classes:x}})})}},u_={mixout:function(){return{icon:s_(l_)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=fh,n.nodeCallback=a_,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?Q:r,o=n.callback,a=o===void 0?function(){}:o;return fh(i,a)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,a=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,h=r.extra;return new Promise(function(g,v){Promise.all([Nu(i,s),c.iconName?Nu(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var x=qc(w,2),p=x[0],d=x[1];g([n,sf({icons:{main:p,mask:d},prefix:s,iconName:i,transform:l,symbol:u,maskId:f,title:o,titleId:a,extra:h,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,a=n.transform,s=n.styles,l=ys(s);l.length>0&&(i.style=l);var u;return nf(a)&&(u=Ct("generateAbstractTransformGrouping",{main:o,transform:a,containerWidth:o.width,iconWidth:o.width})),r.push(u||o.icon),{children:r,attributes:i}}}},c_={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return Ss({type:"layer"},function(){Un("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(s){Array.isArray(s)?s.map(function(l){a=a.concat(l.abstract)}):a=a.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(R.cssPrefix,"-layers")].concat(ao(o)).join(" ")},children:a}]})}}}},f_={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,a=r.classes,s=a===void 0?[]:a,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return Ss({type:"counter",content:n},function(){return Un("beforeDOMElementCreation",{content:n,params:r}),W2({content:n.toString(),title:o,extra:{attributes:u,styles:f,classes:["".concat(R.cssPrefix,"-layers-counter")].concat(ao(s))}})})}}}},d_={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?st:i,a=r.title,s=a===void 0?null:a,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,h=r.styles,g=h===void 0?{}:h;return Ss({type:"text",content:n},function(){return Un("beforeDOMElementCreation",{content:n,params:r}),oh({content:n,transform:T(T({},st),o),title:s,extra:{attributes:f,styles:g,classes:["".concat(R.cssPrefix,"-layers-text")].concat(ao(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,o=r.transform,a=r.extra,s=null,l=null;if(bg){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return R.autoA11y&&!i&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,oh({content:n.innerHTML,width:s,height:l,transform:o,title:i,extra:a,watchable:!0})])}}},h_=new RegExp('"',"ug"),dh=[1105920,1112319];function p_(e){var t=e.replace(h_,""),n=C2(t,0),r=n>=dh[0]&&n<=dh[1],i=t.length===2?t[0]===t[1]:!1;return{value:xu(i?t[0]:t),isSecondary:r||i}}function hh(e,t){var n="".concat(n2).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var o=jr(e.children),a=o.filter(function(I){return I.getAttribute(bu)===t})[0],s=un.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(s2),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(a&&!l)return e.removeChild(a),r();if(l&&c!=="none"&&c!==""){var f=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?te:Y,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Bi[h][l[2].toLowerCase()]:l2[h][u],v=p_(f),w=v.value,x=v.isSecondary,p=l[0].startsWith("FontAwesome"),d=of(g,w),m=d;if(p){var _=L2(w);_.iconName&&_.prefix&&(d=_.iconName,g=_.prefix)}if(d&&!x&&(!a||a.getAttribute(Xc)!==g||a.getAttribute(Zc)!==m)){e.setAttribute(n,m),a&&e.removeChild(a);var k=i_(),b=k.extra;b.attributes[bu]=t,Nu(d,g).then(function(I){var O=sf(T(T({},k),{},{icons:{main:I,mask:af()},prefix:g,iconName:m,extra:b,watchable:!0})),j=Q.createElement("svg");t==="::before"?e.insertBefore(j,e.firstChild):e.appendChild(j),j.outerHTML=O.map(function(F){return lo(F)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function m_(e){return Promise.all([hh(e,"::before"),hh(e,"::after")])}function g_(e){return e.parentNode!==document.head&&!~i2.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(bu)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ph(e){if(!!Nt)return new Promise(function(t,n){var r=jr(e.querySelectorAll("*")).filter(g_).map(m_),i=lf.begin("searchPseudoElements");Vg(),Promise.all(r).then(function(){i(),Ru(),t()}).catch(function(){i(),Ru(),n()})})}var v_={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ph,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Q:r;R.searchPseudoElements&&ph(i)}}},mh=!1,y_={mixout:function(){return{dom:{unwatch:function(){Vg(),mh=!0}}}},hooks:function(){return{bootstrap:function(){uh(Cu("mutationObserverCallbacks",{}))},noAuto:function(){e_()},watch:function(n){var r=n.observeMutationsRoot;mh?Ru():uh(Cu("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},gh=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),a=o[0],s=o.slice(1).join("-");if(a&&s==="h")return r.flipX=!0,r;if(a&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(a){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},w_={mixout:function(){return{parse:{transform:function(n){return gh(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=gh(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,a=n.iconWidth,s={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(a/2*-1," -256)")},g={outer:s,inner:f,path:h};return{tag:"g",attributes:T({},g.outer),children:[{tag:"g",attributes:T({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:T(T({},r.icon.attributes),g.path)}]}]}}}},cl={x:0,y:0,width:"100%",height:"100%"};function vh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function __(e){return e.tag==="g"?e.children:[e]}var S_={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?_s(i.split(" ").map(function(a){return a.trim()})):af();return o.prefix||(o.prefix=cn()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,a=n.mask,s=n.maskId,l=n.transform,u=o.width,c=o.icon,f=a.width,h=a.icon,g=w2({transform:l,containerWidth:f,iconWidth:u}),v={tag:"rect",attributes:T(T({},cl),{},{fill:"white"})},w=c.children?{children:c.children.map(vh)}:{},x={tag:"g",attributes:T({},g.inner),children:[vh(T({tag:c.tag,attributes:T(T({},c.attributes),g.path)},w))]},p={tag:"g",attributes:T({},g.outer),children:[x]},d="mask-".concat(s||Vi()),m="clip-".concat(s||Vi()),_={tag:"mask",attributes:T(T({},cl),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,p]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:__(h)},_]};return r.push(k,{tag:"rect",attributes:T({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(d,")")},cl)}),{children:r,attributes:i}}}},E_={provides:function(t){var n=!1;un.matchMedia&&(n=un.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:T(T({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=T(T({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:T(T({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:T(T({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:T(T({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:T(T({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:T(T({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:T(T({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:T(T({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},k_={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},b_=[E2,u_,c_,f_,d_,v_,y_,w_,S_,E_,k_];F2(b_,{mixoutsTo:ze});ze.noAuto;ze.config;ze.library;ze.dom;var Au=ze.parse;ze.findIconDefinition;ze.toHtml;var x_=ze.icon;ze.layer;ze.text;ze.counter;var A={exports:{}},I_="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",C_=I_,T_=C_;function Yg(){}function Gg(){}Gg.resetWarningCache=Yg;var P_=function(){function e(r,i,o,a,s,l){if(l!==T_){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Gg,resetWarningCache:Yg};return n.PropTypes=n,n};A.exports=P_();function yh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Gt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yh(Object(n),!0).forEach(function(r){lr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Wa(e){return Wa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Wa(e)}function lr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N_(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function O_(e,t){if(e==null)return{};var n=N_(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function Lu(e){return R_(e)||A_(e)||L_(e)||D_()}function R_(e){if(Array.isArray(e))return Du(e)}function A_(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function L_(e,t){if(!!e){if(typeof e=="string")return Du(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Du(e,t)}}function Du(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function D_(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M_(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,a=e.shake,s=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,h=e.fixedWidth,g=e.inverse,v=e.border,w=e.listItem,x=e.flip,p=e.size,d=e.rotation,m=e.pull,_=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":a,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":h,"fa-inverse":g,"fa-border":v,"fa-li":w,"fa-flip":x===!0,"fa-flip-horizontal":x==="horizontal"||x==="both","fa-flip-vertical":x==="vertical"||x==="both"},lr(t,"fa-".concat(p),typeof p<"u"&&p!==null),lr(t,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),lr(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),lr(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(_).map(function(k){return _[k]?k:null}).filter(function(k){return k})}function F_(e){return e=e-0,e===e}function Qg(e){return F_(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var U_=["style"];function z_(e){return e.charAt(0).toUpperCase()+e.slice(1)}function j_(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Qg(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[z_(i)]=o:t[i]=o,t},{})}function qg(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return qg(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=j_(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[Qg(u)]=c}return l},{attrs:{}}),o=n.style,a=o===void 0?{}:o,s=O_(n,U_);return i.attrs.style=Gt(Gt({},i.attrs.style),a),e.apply(void 0,[t.tag,Gt(Gt({},i.attrs),s)].concat(Lu(r)))}var Jg=!1;try{Jg=!0}catch{}function $_(){if(!Jg&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function wh(e){if(e&&Wa(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Au.icon)return Au.icon(e);if(e===null)return null;if(e&&Wa(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function fl(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?lr({},e,t):{}}var he=Lr.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,o=e.className,a=e.title,s=e.titleId,l=e.maskId,u=wh(n),c=fl("classes",[].concat(Lu(M_(e)),Lu(o.split(" ")))),f=fl("transform",typeof e.transform=="string"?Au.transform(e.transform):e.transform),h=fl("mask",wh(r)),g=x_(u,Gt(Gt(Gt(Gt({},c),f),h),{},{symbol:i,title:a,titleId:s,maskId:l}));if(!g)return $_("Could not find icon",u),null;var v=g.abstract,w={ref:t};return Object.keys(e).forEach(function(x){he.defaultProps.hasOwnProperty(x)||(w[x]=e[x])}),B_(v[0],w)});he.displayName="FontAwesomeIcon";he.propTypes={beat:A.exports.bool,border:A.exports.bool,beatFade:A.exports.bool,bounce:A.exports.bool,className:A.exports.string,fade:A.exports.bool,flash:A.exports.bool,mask:A.exports.oneOfType([A.exports.object,A.exports.array,A.exports.string]),maskId:A.exports.string,fixedWidth:A.exports.bool,inverse:A.exports.bool,flip:A.exports.oneOf([!0,!1,"horizontal","vertical","both"]),icon:A.exports.oneOfType([A.exports.object,A.exports.array,A.exports.string]),listItem:A.exports.bool,pull:A.exports.oneOf(["right","left"]),pulse:A.exports.bool,rotation:A.exports.oneOf([0,90,180,270]),shake:A.exports.bool,size:A.exports.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:A.exports.bool,spinPulse:A.exports.bool,spinReverse:A.exports.bool,symbol:A.exports.oneOfType([A.exports.bool,A.exports.string]),title:A.exports.string,titleId:A.exports.string,transform:A.exports.oneOfType([A.exports.string,A.exports.object]),swapOpacity:A.exports.bool};he.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var B_=qg.bind(null,Lr.createElement),H_={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};var W_={prefix:"far",iconName:"user",icon:[448,512,[128100,62144],"f007","M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z"]},V_={prefix:"far",iconName:"copyright",icon:[512,512,[169],"f1f9","M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM255.1 176C255.1 176 255.1 176 255.1 176c21.06 0 40.92 8.312 55.83 23.38c9.375 9.344 24.53 9.5 33.97 .1562c9.406-9.344 9.469-24.53 .1562-33.97c-24-24.22-55.95-37.56-89.95-37.56c0 0 .0313 0 0 0c-33.97 0-65.95 13.34-89.95 37.56c-49.44 49.88-49.44 131 0 180.9c24 24.22 55.98 37.56 89.95 37.56c.0313 0 0 0 0 0c34 0 65.95-13.34 89.95-37.56c9.312-9.438 9.25-24.62-.1562-33.97c-9.438-9.312-24.59-9.219-33.97 .1562c-14.91 15.06-34.77 23.38-55.83 23.38c0 0 .0313 0 0 0c-21.09 0-40.95-8.312-55.89-23.38c-30.94-31.22-30.94-82.03 0-113.3C214.2 184.3 234 176 255.1 176z"]};const K_=()=>M("footer",{className:"footer",children:[y("div",{children:y("a",{href:"https://github.com/RTinIT",children:y(he,{icon:H_,size:"2x"})})}),M("div",{children:[y(he,{icon:V_}),y("span",{style:{marginLeft:"5px"},children:"2022"})]})]});const Y_=()=>M("nav",{className:"navigation",children:[y("div",{className:"nav-item",children:y(Pn,{to:"/vite-react-test/home",className:({isActive:e})=>e?"active-page":"menu-item",children:"Home"})}),y("div",{className:"nav-item",children:y(Pn,{to:"/vite-react-test/about",className:({isActive:e})=>e?"active-page":"menu-item",children:"About"})}),y("div",{className:"nav-item",children:y(Pn,{to:"/vite-react-test/content",className:({isActive:e})=>e?"active-page":"menu-item",children:"Content"})})]}),Xg="/vite-react-test/assets/vite.4a748afd.svg";const G_=()=>y("div",{className:"logo-wrapper",children:M(Pn,{to:"/",className:"logo",children:[y("img",{src:Xg}),y("div",{className:"logo-text-wrapper",children:y("h1",{className:"logo-text",children:"Post Viewer"})})]})});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Q_=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],a=e[n++],s=e[n++],l=((i&7)<<18|(o&63)<<12|(a&63)<<6|s&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},ev={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],a=i+1<e.length,s=a?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=o>>2,f=(o&3)<<4|s>>4;let h=(s&15)<<2|u>>6,g=u&63;l||(g=64,a||(h=64)),r.push(n[c],n[f],n[h],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Zg(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Q_(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||s==null||u==null||f==null)throw Error();const h=o<<2|s>>4;if(r.push(h),u!==64){const g=s<<4&240|u>>2;if(r.push(g),f!==64){const v=u<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},q_=function(e){const t=Zg(e);return ev.encodeByteArray(t,!0)},tv=function(e){return q_(e).replace(/\./g,"")},nv=function(e){try{return ev.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function J_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function X_(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Z_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function eS(){const e=Se();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function tS(){try{return typeof indexedDB=="object"}catch{return!1}}function nS(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function rS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=()=>rS().__FIREBASE_DEFAULTS__,oS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e=process.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},aS=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&nv(e[1]);return t&&JSON.parse(t)},cf=()=>{try{return iS()||oS()||aS()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},sS=e=>{var t,n;return(n=(t=cf())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},lS=()=>{var e;return(e=cf())===null||e===void 0?void 0:e.config},rv=e=>{var t;return(t=cf())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS="FirebaseError";class gn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=cS,Object.setPrototypeOf(this,gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,uo.prototype.create)}}class uo{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?fS(o,r):"Error",s=`${this.serviceName}: ${a} (${i}).`;return new gn(i,s,r)}}function fS(e,t){return e.replace(dS,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const dS=/\{\$([^}]+)}/g;function hS(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Va(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],a=t[i];if(_h(o)&&_h(a)){if(!Va(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function _h(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function ai(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function si(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function pS(e,t){const n=new mS(e,t);return n.subscribe.bind(n)}class mS{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");gS(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=dl),i.error===void 0&&(i.error=dl),i.complete===void 0&&(i.complete=dl);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gS(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function dl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(e){return e&&e._delegate?e._delegate:e}class Nr{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new uS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(wS(t))try{this.getOrInitializeService({instanceIdentifier:Sn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Sn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Sn){return this.instances.has(t)}getOptions(t=Sn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,a]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(o);r===s&&a.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yS(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Sn){return this.component?this.component.multipleInstances?t:Sn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yS(e){return e===Sn?void 0:e}function wS(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new vS(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(W||(W={}));const SS={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},ES=W.INFO,kS={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},bS=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=kS[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class iv{constructor(t){this.name=t,this._logLevel=ES,this._logHandler=bS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in W))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?SS[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...t),this._logHandler(this,W.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...t),this._logHandler(this,W.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,W.INFO,...t),this._logHandler(this,W.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,W.WARN,...t),this._logHandler(this,W.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...t),this._logHandler(this,W.ERROR,...t)}}const xS=(e,t)=>t.some(n=>e instanceof n);let Sh,Eh;function IS(){return Sh||(Sh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function CS(){return Eh||(Eh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ov=new WeakMap,Mu=new WeakMap,av=new WeakMap,hl=new WeakMap,ff=new WeakMap;function TS(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",a)},o=()=>{n(on(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&ov.set(n,e)}).catch(()=>{}),ff.set(t,e),t}function PS(e){if(Mu.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",a),e.removeEventListener("abort",a)},o=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",a),e.addEventListener("abort",a)});Mu.set(e,t)}let Fu={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Mu.get(e);if(t==="objectStoreNames")return e.objectStoreNames||av.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return on(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function NS(e){Fu=e(Fu)}function OS(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(pl(this),t,...n);return av.set(r,t.sort?t.sort():[t]),on(r)}:CS().includes(e)?function(...t){return e.apply(pl(this),t),on(ov.get(this))}:function(...t){return on(e.apply(pl(this),t))}}function RS(e){return typeof e=="function"?OS(e):(e instanceof IDBTransaction&&PS(e),xS(e,IS())?new Proxy(e,Fu):e)}function on(e){if(e instanceof IDBRequest)return TS(e);if(hl.has(e))return hl.get(e);const t=RS(e);return t!==e&&(hl.set(e,t),ff.set(t,e)),t}const pl=e=>ff.get(e);function AS(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(e,t),s=on(a);return r&&a.addEventListener("upgradeneeded",l=>{r(on(a.result),l.oldVersion,l.newVersion,on(a.transaction))}),n&&a.addEventListener("blocked",()=>n()),s.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),s}const LS=["get","getKey","getAll","getAllKeys","count"],DS=["put","add","delete","clear"],ml=new Map;function kh(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ml.get(t))return ml.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=DS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||LS.includes(n)))return;const o=async function(a,...s){const l=this.transaction(a,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(s.shift())),(await Promise.all([u[n](...s),i&&l.done]))[0]};return ml.set(t,o),o}NS(e=>({...e,get:(t,n,r)=>kh(t,n)||e.get(t,n,r),has:(t,n)=>!!kh(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(FS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function FS(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Uu="@firebase/app",bh="0.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=new iv("@firebase/app"),US="@firebase/app-compat",zS="@firebase/analytics-compat",jS="@firebase/analytics",$S="@firebase/app-check-compat",BS="@firebase/app-check",HS="@firebase/auth",WS="@firebase/auth-compat",VS="@firebase/database",KS="@firebase/database-compat",YS="@firebase/functions",GS="@firebase/functions-compat",QS="@firebase/installations",qS="@firebase/installations-compat",JS="@firebase/messaging",XS="@firebase/messaging-compat",ZS="@firebase/performance",eE="@firebase/performance-compat",tE="@firebase/remote-config",nE="@firebase/remote-config-compat",rE="@firebase/storage",iE="@firebase/storage-compat",oE="@firebase/firestore",aE="@firebase/firestore-compat",sE="firebase",lE="9.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu="[DEFAULT]",uE={[Uu]:"fire-core",[US]:"fire-core-compat",[jS]:"fire-analytics",[zS]:"fire-analytics-compat",[BS]:"fire-app-check",[$S]:"fire-app-check-compat",[HS]:"fire-auth",[WS]:"fire-auth-compat",[VS]:"fire-rtdb",[KS]:"fire-rtdb-compat",[YS]:"fire-fn",[GS]:"fire-fn-compat",[QS]:"fire-iid",[qS]:"fire-iid-compat",[JS]:"fire-fcm",[XS]:"fire-fcm-compat",[ZS]:"fire-perf",[eE]:"fire-perf-compat",[tE]:"fire-rc",[nE]:"fire-rc-compat",[rE]:"fire-gcs",[iE]:"fire-gcs-compat",[oE]:"fire-fst",[aE]:"fire-fst-compat","fire-js":"fire-js",[sE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka=new Map,ju=new Map;function cE(e,t){try{e.container.addComponent(t)}catch(n){zn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ki(e){const t=e.name;if(ju.has(t))return zn.debug(`There were multiple attempts to register component ${t}.`),!1;ju.set(t,e);for(const n of Ka.values())cE(n,e);return!0}function sv(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},an=new uo("app","Firebase",fE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Nr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw an.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es=lE;function lv(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:zu,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw an.create("bad-app-name",{appName:String(i)});if(n||(n=lS()),!n)throw an.create("no-options");const o=Ka.get(i);if(o){if(Va(n,o.options)&&Va(r,o.config))return o;throw an.create("duplicate-app",{appName:i})}const a=new _S(i);for(const l of ju.values())a.addComponent(l);const s=new dE(n,r,a);return Ka.set(i,s),s}function hE(e=zu){const t=Ka.get(e);if(!t&&e===zu)return lv();if(!t)throw an.create("no-app",{appName:e});return t}function yr(e,t,n){var r;let i=(r=uE[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const s=[`Unable to register library "${i}" with version "${t}":`];o&&s.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&s.push("and"),a&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),zn.warn(s.join(" "));return}Ki(new Nr(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE="firebase-heartbeat-database",mE=1,Yi="firebase-heartbeat-store";let gl=null;function uv(){return gl||(gl=AS(pE,mE,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Yi)}}}).catch(e=>{throw an.create("idb-open",{originalErrorMessage:e.message})})),gl}async function gE(e){try{return(await uv()).transaction(Yi).objectStore(Yi).get(cv(e))}catch(t){if(t instanceof gn)zn.warn(t.message);else{const n=an.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});zn.warn(n.message)}}}async function xh(e,t){try{const r=(await uv()).transaction(Yi,"readwrite");return await r.objectStore(Yi).put(t,cv(e)),r.done}catch(n){if(n instanceof gn)zn.warn(n.message);else{const r=an.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zn.warn(r.message)}}}function cv(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE=1024,yE=30*24*60*60*1e3;class wE{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new SE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ih();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=yE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ih(),{heartbeatsToSend:n,unsentEntries:r}=_E(this._heartbeatsCache.heartbeats),i=tv(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ih(){return new Date().toISOString().substring(0,10)}function _E(e,t=vE){const n=[];let r=e.slice();for(const i of e){const o=n.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Ch(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ch(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class SE{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tS()?nS().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await gE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Ch(e){return tv(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE(e){Ki(new Nr("platform-logger",t=>new MS(t),"PRIVATE")),Ki(new Nr("heartbeat",t=>new wE(t),"PRIVATE")),yr(Uu,bh,e),yr(Uu,bh,"esm2017"),yr("fire-js","")}EE("");function df(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function fv(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kE=fv,dv=new uo("auth","Firebase",fv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th=new iv("@firebase/auth");function fa(e,...t){Th.logLevel<=W.ERROR&&Th.error(`Auth (${Es}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(e,...t){throw hf(e,...t)}function ct(e,...t){return hf(e,...t)}function bE(e,t,n){const r=Object.assign(Object.assign({},kE()),{[t]:n});return new uo("auth","Firebase",r).create(t,{appName:e.name})}function hf(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return dv.create(e,...t)}function L(e,t,...n){if(!e)throw hf(t,...n)}function gt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw fa(t),new Error(t)}function Tt(e,t){e||gt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph=new Map;function vt(e){Tt(e instanceof Function,"Expected a class definition");let t=Ph.get(e);return t?(Tt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ph.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(e,t){const n=sv(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Va(o,t!=null?t:{}))return i;nt(i,"already-initialized")}return n.initialize({options:t})}function IE(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(vt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function CE(){return Nh()==="http:"||Nh()==="https:"}function Nh(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(CE()||X_()||"connection"in navigator)?navigator.onLine:!0}function PE(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(t,n){this.shortDelay=t,this.longDelay=n,Tt(n>t,"Short delay should be less than long delay!"),this.isMobile=J_()||Z_()}get(){return TE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(e,t){Tt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE=new fo(3e4,6e4);function ho(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function po(e,t,n,r,i={}){return pv(e,i,async()=>{let o={},a={};r&&(t==="GET"?a=r:o={body:JSON.stringify(r)});const s=co(Object.assign({key:e.config.apiKey},a)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),hv.fetch()(mv(e,e.config.apiHost,n,s),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function pv(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},NE),t);try{const i=new RE(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw qo(e,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const s=o.ok?a.errorMessage:a.error.message,[l,u]=s.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw qo(e,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw qo(e,"email-already-in-use",a);if(l==="USER_DISABLED")throw qo(e,"user-disabled",a);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw bE(e,c,u);nt(e,c)}}catch(i){if(i instanceof gn)throw i;nt(e,"network-request-failed")}}async function mo(e,t,n,r,i={}){const o=await po(e,t,n,r,i);return"mfaPendingCredential"in o&&nt(e,"multi-factor-auth-required",{_serverResponse:o}),o}function mv(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?pf(e.config,i):`${e.config.apiScheme}://${i}`}class RE{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ct(this.auth,"network-request-failed")),OE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function qo(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ct(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AE(e,t){return po(e,"POST","/v1/accounts:delete",t)}async function LE(e,t){return po(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function DE(e,t=!1){const n=Ot(e),r=await n.getIdToken(t),i=mf(r);L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Si(vl(i.auth_time)),issuedAtTime:Si(vl(i.iat)),expirationTime:Si(vl(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function vl(e){return Number(e)*1e3}function mf(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return fa("JWT malformed, contained fewer than 3 sections"),null;try{const i=nv(n);return i?JSON.parse(i):(fa("Failed to decode base64 JWT payload"),null)}catch(i){return fa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ME(e){const t=mf(e);return L(t,"internal-error"),L(typeof t.exp<"u","internal-error"),L(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gi(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof gn&&FE(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function FE({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Si(this.lastLoginAt),this.creationTime=Si(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ya(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Gi(e,LE(n,{idToken:r}));L(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const a=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?$E(o.providerUserInfo):[],s=jE(e.providerData,a),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(s!=null&&s.length),c=l?u:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:s,metadata:new gv(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(e,f)}async function zE(e){const t=Ot(e);await Ya(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function jE(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function $E(e){return e.map(t=>{var{providerId:n}=t,r=df(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BE(e,t){const n=await pv(e,{},async()=>{const r=co({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,a=mv(e,i,"/v1/token",`key=${o}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",hv.fetch()(a,{method:"POST",headers:s,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){L(t.idToken,"internal-error"),L(typeof t.idToken<"u","internal-error"),L(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):ME(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return L(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await BE(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,a=new Qi;return r&&(L(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),o&&(L(typeof o=="number","internal-error",{appName:t}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Qi,this.toJSON())}_performRefresh(){return gt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(e,t){L(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Nn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=df(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new UE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new gv(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Gi(this,this.stsTokenManager.getToken(this.auth,t));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return DE(this,t)}reload(){return zE(this)}_assign(t){this!==t&&(L(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new Nn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Ya(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Gi(this,AE(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,a,s,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,v=(a=n.photoURL)!==null&&a!==void 0?a:void 0,w=(s=n.tenantId)!==null&&s!==void 0?s:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:_,isAnonymous:k,providerData:b,stsTokenManager:I}=n;L(m&&I,t,"internal-error");const O=Qi.fromJSON(this.name,I);L(typeof m=="string",t,"internal-error"),Dt(f,t.name),Dt(h,t.name),L(typeof _=="boolean",t,"internal-error"),L(typeof k=="boolean",t,"internal-error"),Dt(g,t.name),Dt(v,t.name),Dt(w,t.name),Dt(x,t.name),Dt(p,t.name),Dt(d,t.name);const j=new Nn({uid:m,auth:t,email:h,emailVerified:_,displayName:f,isAnonymous:k,photoURL:v,phoneNumber:g,tenantId:w,stsTokenManager:O,createdAt:p,lastLoginAt:d});return b&&Array.isArray(b)&&(j.providerData=b.map(F=>Object.assign({},F))),x&&(j._redirectEventId=x),j}static async _fromIdTokenResponse(t,n,r=!1){const i=new Qi;i.updateFromServerResponse(n);const o=new Nn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Ya(o),o}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}vv.type="NONE";const Oh=vv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(e,t,n){return`firebase:${e}:${t}:${n}`}class wr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=da(this.userKey,i.apiKey,o),this.fullPersistenceKey=da("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Nn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new wr(vt(Oh),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||vt(Oh);const a=da(r,t.config.apiKey,t.name);let s=null;for(const u of n)try{const c=await u._get(a);if(c){const f=Nn._fromJSON(t,c);u!==o&&(s=f),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new wr(o,t,r):(o=l[0],s&&await o._set(a,s.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(a)}catch{}})),new wr(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(_v(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(yv(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ev(t))return"Blackberry";if(kv(t))return"Webos";if(gf(t))return"Safari";if((t.includes("chrome/")||wv(t))&&!t.includes("edge/"))return"Chrome";if(Sv(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function yv(e=Se()){return/firefox\//i.test(e)}function gf(e=Se()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function wv(e=Se()){return/crios\//i.test(e)}function _v(e=Se()){return/iemobile/i.test(e)}function Sv(e=Se()){return/android/i.test(e)}function Ev(e=Se()){return/blackberry/i.test(e)}function kv(e=Se()){return/webos/i.test(e)}function ks(e=Se()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function HE(e=Se()){var t;return ks(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function WE(){return eS()&&document.documentMode===10}function bv(e=Se()){return ks(e)||Sv(e)||kv(e)||Ev(e)||/windows phone/i.test(e)||_v(e)}function VE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(e,t=[]){let n;switch(e){case"Browser":n=Rh(Se());break;case"Worker":n=`${Rh(Se())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Es}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((a,s)=>{try{const l=t(o);a(l)}catch(l){s(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ah(this),this.idTokenSubscription=new Ah(this),this.beforeStateQueue=new KE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dv,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=vt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await wr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!a||a===s)&&(l==null?void 0:l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Ya(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=PE()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Ot(t):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&L(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(vt(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new uo("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&vt(t)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await wr.create(this,[vt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),a=this._isInitialized?Promise.resolve():this._initializationPromise;return L(a,this,"internal-error"),a.then(()=>o(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=xv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function go(e){return Ot(e)}class Ah{constructor(t){this.auth=t,this.observer=null,this.addObserver=pS(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function GE(e,t,n){const r=go(e);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=Iv(t),{host:a,port:s}=QE(t),l=s===null?"":`:${s}`;r.config.emulator={url:`${o}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:s,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||qE()}function Iv(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function QE(e){const t=Iv(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Lh(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:Lh(a)}}}function Lh(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function qE(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return gt("not implemented")}_getIdTokenResponse(t){return gt("not implemented")}_linkToIdToken(t,n){return gt("not implemented")}_getReauthenticationResolver(t){return gt("not implemented")}}async function JE(e,t){return po(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XE(e,t){return mo(e,"POST","/v1/accounts:signInWithPassword",ho(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZE(e,t){return mo(e,"POST","/v1/accounts:signInWithEmailLink",ho(e,t))}async function ek(e,t){return mo(e,"POST","/v1/accounts:signInWithEmailLink",ho(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi extends vf{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new qi(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new qi(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return XE(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ZE(t,{email:this._email,oobCode:this._password});default:nt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return JE(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ek(t,{idToken:n,email:this._email,oobCode:this._password});default:nt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _r(e,t){return mo(e,"POST","/v1/accounts:signInWithIdp",ho(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk="http://localhost";class jn extends vf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new jn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):nt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=df(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new jn(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return _r(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,_r(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,_r(t,n)}buildRequest(){const t={requestUri:tk,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=co(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nk(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function rk(e){const t=ai(si(e)).link,n=t?ai(si(t)).deep_link_id:null,r=ai(si(e)).deep_link_id;return(r?ai(si(r)).link:null)||r||n||t||e}class yf{constructor(t){var n,r,i,o,a,s;const l=ai(si(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,f=nk((i=l.mode)!==null&&i!==void 0?i:null);L(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(a=l.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(s=l.tenantId)!==null&&s!==void 0?s:null}static parseLink(t){const n=rk(t);try{return new yf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(){this.providerId=$r.PROVIDER_ID}static credential(t,n){return qi._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=yf.parseLink(n);return L(r,"argument-error"),qi._fromEmailAndCode(t,r.code,r.tenantId)}}$r.PROVIDER_ID="password";$r.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$r.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo extends Cv{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends vo{constructor(){super("facebook.com")}static credential(t){return jn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return $t.credentialFromTaggedObject(t)}static credentialFromError(t){return $t.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return $t.credential(t.oauthAccessToken)}catch{return null}}}$t.FACEBOOK_SIGN_IN_METHOD="facebook.com";$t.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends vo{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return jn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Bt.credentialFromTaggedObject(t)}static credentialFromError(t){return Bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Bt.credential(n,r)}catch{return null}}}Bt.GOOGLE_SIGN_IN_METHOD="google.com";Bt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends vo{constructor(){super("github.com")}static credential(t){return jn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ht.credentialFromTaggedObject(t)}static credentialFromError(t){return Ht.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ht.credential(t.oauthAccessToken)}catch{return null}}}Ht.GITHUB_SIGN_IN_METHOD="github.com";Ht.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends vo{constructor(){super("twitter.com")}static credential(t,n){return jn._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Wt.credentialFromTaggedObject(t)}static credentialFromError(t){return Wt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Wt.credential(n,r)}catch{return null}}}Wt.TWITTER_SIGN_IN_METHOD="twitter.com";Wt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ik(e,t){return mo(e,"POST","/v1/accounts:signUp",ho(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await Nn._fromIdTokenResponse(t,r,i),a=Dh(r);return new $n({user:o,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Dh(r);return new $n({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Dh(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga extends gn{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ga.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Ga(t,n,r,i)}}function Tv(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Ga._fromErrorAndOperation(e,o,t,r):o})}async function ok(e,t,n=!1){const r=await Gi(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return $n._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ak(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await Gi(e,Tv(r,i,t,e),n);L(o.idToken,r,"internal-error");const a=mf(o.idToken);L(a,r,"internal-error");const{sub:s}=a;return L(e.uid===s,r,"user-mismatch"),$n._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&nt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pv(e,t,n=!1){const r="signIn",i=await Tv(e,r,t),o=await $n._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function sk(e,t){return Pv(go(e),t)}async function lk(e,t,n){const r=go(e),i=await ik(r,{returnSecureToken:!0,email:t,password:n}),o=await $n._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function uk(e,t,n){return sk(Ot(e),$r.credential(t,n))}function ck(e,t,n,r){return Ot(e).onIdTokenChanged(t,n,r)}function fk(e,t,n){return Ot(e).beforeAuthStateChanged(t,n)}function Nv(e,t,n,r){return Ot(e).onAuthStateChanged(t,n,r)}function dk(e){return Ot(e).signOut()}const Qa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Qa,"1"),this.storage.removeItem(Qa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hk(){const e=Se();return gf(e)||ks(e)}const pk=1e3,mk=10;class Rv extends Ov{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=hk()&&VE(),this.fallbackToPolling=bv(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,s,l)=>{this.notifyListeners(a,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(t.newValue!==a)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);WE()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,mk):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},pk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Rv.type="LOCAL";const gk=Rv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av extends Ov{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Av.type="SESSION";const Lv=Av;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vk(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new bs(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const s=Array.from(a).map(async u=>u(n.origin,o)),l=await vk(s);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((s,l)=>{const u=wf("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(f){const h=f;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),s(h.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(){return window}function wk(e){ft().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dv(){return typeof ft().WorkerGlobalScope<"u"&&typeof ft().importScripts=="function"}async function _k(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Sk(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Ek(){return Dv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv="firebaseLocalStorageDb",kk=1,qa="firebaseLocalStorage",Fv="fbase_key";class yo{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xs(e,t){return e.transaction([qa],t?"readwrite":"readonly").objectStore(qa)}function bk(){const e=indexedDB.deleteDatabase(Mv);return new yo(e).toPromise()}function Bu(){const e=indexedDB.open(Mv,kk);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(qa,{keyPath:Fv})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(qa)?t(r):(r.close(),await bk(),t(await Bu()))})})}async function Mh(e,t,n){const r=xs(e,!0).put({[Fv]:t,value:n});return new yo(r).toPromise()}async function xk(e,t){const n=xs(e,!1).get(t),r=await new yo(n).toPromise();return r===void 0?null:r.value}function Fh(e,t){const n=xs(e,!0).delete(t);return new yo(n).toPromise()}const Ik=800,Ck=3;class Uv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bu(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Ck)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bs._getInstance(Ek()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await _k(),!this.activeServiceWorker)return;this.sender=new yk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((t=r[0])===null||t===void 0?void 0:t.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Sk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Bu();return await Mh(t,Qa,"1"),await Fh(t,Qa),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Mh(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>xk(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fh(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=xs(i,!1).getAll();return new yo(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ik)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Uv.type="LOCAL";const Tk=Uv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pk(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function Nk(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=ct("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",Pk().appendChild(r)})}function Ok(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new fo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rk(e,t){return t?vt(t):(L(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f extends vf{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return _r(t,this._buildIdpRequest())}_linkToIdToken(t,n){return _r(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return _r(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Ak(e){return Pv(e.auth,new _f(e),e.bypassAuthState)}function Lk(e){const{auth:t,user:n}=e;return L(n,t,"internal-error"),ak(n,new _f(e),e.bypassAuthState)}async function Dk(e){const{auth:t,user:n}=e;return L(n,t,"internal-error"),ok(n,new _f(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:a,type:s}=t;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Ak;case"linkViaPopup":case"linkViaRedirect":return Dk;case"reauthViaPopup":case"reauthViaRedirect":return Lk;default:nt(this.auth,"internal-error")}}resolve(t){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk=new fo(2e3,1e4);class ur extends zv{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,ur.currentPopupAction&&ur.currentPopupAction.cancel(),ur.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return L(t,this.auth,"internal-error"),t}async onExecution(){Tt(this.filter.length===1,"Popup operations only handle one event");const t=wf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ur.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ct(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,Mk.get())};t()}}ur.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk="pendingRedirect",ha=new Map;class Uk extends zv{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=ha.get(this.auth._key());if(!t){try{const r=await zk(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}ha.set(this.auth._key(),t)}return this.bypassAuthState||ha.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zk(e,t){const n=Bk(t),r=$k(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function jk(e,t){ha.set(e._key(),t)}function $k(e){return vt(e._redirectPersistence)}function Bk(e){return da(Fk,e.config.apiKey,e.name)}async function Hk(e,t,n=!1){const r=go(e),i=Rk(r,t),a=await new Uk(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk=10*60*1e3;class Vk{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Kk(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!jv(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ct(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Wk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uh(t))}saveEventToCache(t){this.cachedEventUids.add(Uh(t)),this.lastProcessedEventTime=Date.now()}}function Uh(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function jv({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Kk(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jv(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yk(e,t={}){return po(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Qk=/^https?/;async function qk(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Yk(e);for(const n of t)try{if(Jk(n))return}catch{}nt(e,"unauthorized-domain")}function Jk(e){const t=$u(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!Qk.test(n))return!1;if(Gk.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk=new fo(3e4,6e4);function zh(){const e=ft().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Zk(e){return new Promise((t,n)=>{var r,i,o;function a(){zh(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{zh(),n(ct(e,"network-request-failed"))},timeout:Xk.get()})}if(!((i=(r=ft().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=ft().gapi)===null||o===void 0)&&o.load)a();else{const s=Ok("iframefcb");return ft()[s]=()=>{gapi.load?a():n(ct(e,"network-request-failed"))},Nk(`https://apis.google.com/js/api.js?onload=${s}`).catch(l=>n(l))}}).catch(t=>{throw pa=null,t})}let pa=null;function eb(e){return pa=pa||Zk(e),pa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb=new fo(5e3,15e3),nb="__/auth/iframe",rb="emulator/auth/iframe",ib={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ob=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ab(e){const t=e.config;L(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?pf(t,rb):`https://${e.config.authDomain}/${nb}`,r={apiKey:t.apiKey,appName:e.name,v:Es},i=ob.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${co(r).slice(1)}`}async function sb(e){const t=await eb(e),n=ft().gapi;return L(n,e,"internal-error"),t.open({where:document.body,url:ab(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ib,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=ct(e,"network-request-failed"),s=ft().setTimeout(()=>{o(a)},tb.get());function l(){ft().clearTimeout(s),i(r)}r.ping(l).then(l,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ub=500,cb=600,fb="_blank",db="http://localhost";class jh{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hb(e,t,n,r=ub,i=cb){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const l=Object.assign(Object.assign({},lb),{width:r.toString(),height:i.toString(),top:o,left:a}),u=Se().toLowerCase();n&&(s=wv(u)?fb:n),yv(u)&&(t=t||db,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[g,v])=>`${h}${g}=${v},`,"");if(HE(u)&&s!=="_self")return pb(t||"",s),new jh(null);const f=window.open(t||"",s,c);L(f,e,"popup-blocked");try{f.focus()}catch{}return new jh(f)}function pb(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb="__/auth/handler",gb="emulator/auth/handler";function $h(e,t,n,r,i,o){L(e.config.authDomain,e,"auth-domain-config-required"),L(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Es,eventId:i};if(t instanceof Cv){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",hS(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,u]of Object.entries(o||{}))a[l]=u}if(t instanceof vo){const l=t.getScopes().filter(u=>u!=="");l.length>0&&(a.scopes=l.join(","))}e.tenantId&&(a.tid=e.tenantId);const s=a;for(const l of Object.keys(s))s[l]===void 0&&delete s[l];return`${vb(e)}?${co(s).slice(1)}`}function vb({config:e}){return e.emulator?pf(e,gb):`https://${e.authDomain}/${mb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl="webStorageSupport";class yb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lv,this._completeRedirectFn=Hk,this._overrideRedirectResult=jk}async _openPopup(t,n,r,i){var o;Tt((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=$h(t,n,r,$u(),i);return hb(t,a,wf())}async _openRedirect(t,n,r,i){return await this._originValidation(t),wk($h(t,n,r,$u(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Tt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await sb(t),r=new Vk(t);return n.register("authEvent",i=>(L(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(yl,{type:yl},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[yl];a!==void 0&&n(!!a),nt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=qk(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return bv()||gf()||ks()}}const wb=yb;var Bh="@firebase/auth",Hh="0.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sb(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Eb(e){Ki(new Nr("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:a}=r.options;return((s,l)=>{L(o&&!o.includes(":"),"invalid-api-key",{appName:s.name}),L(!(a!=null&&a.includes(":")),"argument-error",{appName:s.name});const u={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xv(e)},c=new YE(s,l,u);return IE(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Ki(new Nr("auth-internal",t=>{const n=go(t.getProvider("auth").getImmediate());return(r=>new _b(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yr(Bh,Hh,Sb(e)),yr(Bh,Hh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb=5*60,bb=rv("authIdTokenMaxAge")||kb;let Wh=null;const xb=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>bb)return;const i=n==null?void 0:n.token;Wh!==i&&(Wh=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ib(e=hE()){const t=sv(e,"auth");if(t.isInitialized())return t.getImmediate();const n=xE(e,{popupRedirectResolver:wb,persistence:[Tk,gk,Lv]}),r=rv("authTokenSyncURL");if(r){const o=xb(r);fk(n,o,()=>o(n.currentUser)),ck(n,a=>o(a))}const i=sS("auth");return i&&GE(n,`http://${i}`),n}Eb("Browser");var Cb="firebase",Tb="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yr(Cb,Tb,"app");const Pb={apiKey:"AIzaSyDw4FEcdBNh9yc9yCeRUw-5LSnJIFVKcd8",authDomain:"vite-react-test.firebaseapp.com",projectId:"vite-react-test",storageBucket:"vite-react-test.appspot.com",messagingSenderId:"770746932553",appId:"1:770746932553:web:7d20a4cd6b40307cd94e98"},Nb=lv(Pb),Ji=Ib(Nb);var Ob={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c5.2-11.8 8-24.8 8-38.5c0-53-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zm223.1 298L373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5z"]},Rb={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]},Ab={prefix:"fas",iconName:"arrow-up-from-bracket",icon:[448,512,[],"e09a","M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 53 43 96 96 96H352c53 0 96-43 96-96V352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352z"]},Lb={prefix:"fas",iconName:"angles-right",icon:[512,512,[187,"angle-double-right"],"f101","M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"]},Db=Lb,Mb={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z"]},Fb={prefix:"fas",iconName:"comment",icon:[512,512,[128489,61669],"f075","M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"]},Ub={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},zb={prefix:"fas",iconName:"xmark",icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]},jb=zb,$b={prefix:"fas",iconName:"angles-left",icon:[512,512,[171,"angle-double-left"],"f100","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"]},Bb=$b,Hb={prefix:"fas",iconName:"angle-left",icon:[320,512,[8249],"f104","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]};const Wb=()=>{const e=zr(),t=async()=>{console.log("Log out ..."),await dk(Ji),localStorage.removeItem("isAuth"),e("/vite-react-test/sign-in")};return y("div",{className:"signin-btn-wrapper",children:localStorage.getItem("isAuth")?M("button",{onClick:t,className:"signin-btn",children:[y(he,{icon:Ab,size:"1x"}),y("span",{children:"Log out"})]}):M(Pn,{to:"/vite-react-test/sign-in",className:({isActive:n})=>n?"signin-btn signin-btn-active":"signin-btn",children:[y(he,{icon:W_,size:"1x"}),y("span",{children:"Sign in"})]})})},Vb=()=>M("header",{className:"header",children:[y(G_,{}),y(Y_,{}),y(Wb,{})]});var $v={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(!!o){var a=typeof o;if(a==="string"||a==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var s=n.apply(null,o);s&&r.push(s)}}else if(a==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var l in o)t.call(o,l)&&o[l]&&r.push(l)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})($v);const wo=$v.exports;const Ae=({children:e,onClick:t,className:n,disabled:r,active:i})=>{const o=wo("btn",n,{active:i});return y("button",{className:o,onClick:t,disabled:r,children:e})};Ae.propTypes={children:A.exports.node,className:A.exports.string,onClick:A.exports.func,disabled:A.exports.bool,active:A.exports.bool};Ae.defaultProps={children:"Button",onClick:()=>{},className:"",disabled:!1,active:!1};const Sf=({children:e,config:t,className:n})=>{const{loader:r,circle:i}=t,o=wo("loader-wrapper",n);return y("div",{className:o,children:M("div",{className:"loader",style:{width:r.width,height:r.height},children:[y("span",{className:"circle",style:{width:i.width,height:i.height,borderColor:i.color1}}),y("span",{className:"circle",style:{width:i.width,height:i.height,borderColor:i.color2}}),y("span",{className:"circle",style:{width:i.width,height:i.height,borderColor:i.color3}}),M("span",{className:"loader-text",children:[" ",e," "]})]})})};Sf.propTypes={children:A.exports.string,className:A.exports.string,config:A.exports.object};Sf.defaultProps={children:"Loading...",className:"",config:{loader:{width:"12em",height:"12em",textColor:"#202020"},circle:{width:"10em",height:"10em",color1:"",color2:"",color3:""}}};const Bv=()=>M("div",{className:"home",children:[M("div",{className:"home-text-section",children:[y("h3",{children:"Welcome to "}),y("h2",{children:"The Post Viewer's home page"}),y(Ae,{className:"home-btn",children:y(Pn,{to:"/vite-react-test/content",children:"See more"})})]}),y("div",{children:y(Sf,{config:{loader:{width:"25em",height:"25em"},circle:{width:"20em",height:"20em",color1:"hsl(285, 79%, 60%)",color2:"hsl(285, 73%, 84%)",color3:"hsl(285, 87%, 35%)"}},children:"Just Animation"})})]}),Kb="/vite-react-test/assets/react.35ef61ed.svg",Yb="/vite-react-test/assets/firebase-icon.21cda531.svg";const Gb=()=>M("div",{className:"about",children:[y("h3",{className:"about-title",children:"This test application was created via"}),M("div",{className:"technologies",children:[y("div",{className:"technology-item",children:y("a",{href:"https://vitejs.dev",target:"_blank",children:y("img",{src:Xg,className:"technology-logo",alt:"Vite logo"})})}),y("div",{className:"technology-item",children:y("a",{href:"https://reactjs.org",target:"_blank",children:y("img",{src:Kb,className:"technology-logo",alt:"React logo"})})}),y("div",{className:"technology-item",children:y("a",{href:"https://firebase.google.com/",target:"_blank",children:y("img",{src:Yb,className:"technology-logo",alt:"Firebase logo"})})})]})]});const Bn=({value:e,onChange:t,className:n,placeholder:r,type:i})=>{const o=wo("input",n);return y("input",{value:e,className:o,onChange:t,placeholder:r,type:i,autoFocus:!0})};Bn.propTypes={value:A.exports.string,className:A.exports.string,onChange:A.exports.func,placeholder:A.exports.string,type:A.exports.string};Bn.defaultProps={value:"",onChange:()=>{},className:"",placeholder:"",type:"text"};const Qb=({create:e})=>{const[t,n]=C.exports.useState({title:"",body:""}),r=i=>{i.preventDefault();const o={...t,id:Date.now()};e(o),n({title:"",body:""})};return M("form",{className:"post-form",children:[y("h2",{children:"Add new post"}),y(Bn,{value:t.title,onChange:i=>n({...t,title:i.target.value}),placeholder:"add title"}),y(Bn,{value:t.body,onChange:i=>n({...t,body:i.target.value}),placeholder:"add text"}),y(Ae,{onClick:r,className:"form-btn",children:"Create"})]})},Hv=new Set,Oe=new WeakMap,Sr=new WeakMap,Hn=new WeakMap,Hu=new WeakMap,qb=new WeakMap,Or=new WeakMap,Ja=new WeakMap,li=new WeakSet;let dn;const yt="__aa_tgt",Wu="__aa_del",Jb=e=>{const t=nx(e);t&&t.forEach(n=>rx(n))},Xb=e=>{e.forEach(t=>{t.target===dn&&ex(),Oe.has(t.target)&&Kn(t.target)})};function Zb(e){const t=Hu.get(e);t==null||t.disconnect();let n=Oe.get(e),r=0;const i=5;n||(n=Rr(e),Oe.set(e,n));const{offsetWidth:o,offsetHeight:a}=dn,l=[n.top-i,o-(n.left+i+n.width),a-(n.top+i+n.height),n.left-i].map(c=>`${-1*Math.floor(c)}px`).join(" "),u=new IntersectionObserver(()=>{++r>1&&Kn(e)},{root:dn,threshold:1,rootMargin:l});u.observe(e),Hu.set(e,u)}function Kn(e){clearTimeout(Ja.get(e));const t=Is(e),n=typeof t=="function"?500:t.duration;Ja.set(e,setTimeout(async()=>{const r=Hn.get(e);(!r||await r.finished)&&(Oe.set(e,Rr(e)),Zb(e))},n))}function ex(){clearTimeout(Ja.get(dn)),Ja.set(dn,setTimeout(()=>{Hv.forEach(e=>Yv(e,t=>Wv(()=>Kn(t))))},100))}function tx(e){setTimeout(()=>{qb.set(e,setInterval(()=>Wv(Kn.bind(null,e)),2e3))},Math.round(2e3*Math.random()))}function Wv(e){typeof requestIdleCallback=="function"?requestIdleCallback(()=>e()):requestAnimationFrame(()=>e())}let Vu,cr;typeof window<"u"&&(dn=document.documentElement,Vu=new MutationObserver(Jb),cr=new ResizeObserver(Xb),cr.observe(dn));function nx(e){return e.reduce((r,i)=>[...r,...Array.from(i.addedNodes),...Array.from(i.removedNodes)],[]).every(r=>r.nodeName==="#comment")?!1:e.reduce((r,i)=>{if(r===!1)return!1;if(i.target instanceof Element){if(wl(i.target),!r.has(i.target)){r.add(i.target);for(let o=0;o<i.target.children.length;o++){const a=i.target.children.item(o);if(!!a){if(Wu in a)return!1;wl(i.target,a),r.add(a)}}}if(i.removedNodes.length)for(let o=0;o<i.removedNodes.length;o++){const a=i.removedNodes[o];if(Wu in a)return!1;a instanceof Element&&(r.add(a),wl(i.target,a),Sr.set(a,[i.previousSibling,i.nextSibling]))}}return r},new Set)}function wl(e,t){!t&&!(yt in e)?Object.defineProperty(e,yt,{value:e}):t&&!(yt in t)&&Object.defineProperty(t,yt,{value:e})}function rx(e){var t;const n=dn.contains(e),r=Oe.has(e);n&&Sr.has(e)&&Sr.delete(e),Hn.has(e)&&((t=Hn.get(e))===null||t===void 0||t.cancel()),r&&n?ix(e):r&&!n?ax(e):ox(e)}function ot(e){return Number(e.replace(/[^0-9.\-]/g,""))}function Rr(e){const t=e.getBoundingClientRect();return{top:t.top+window.scrollY,left:t.left+window.scrollX,width:t.width,height:t.height}}function Vv(e,t,n){let r=t.width,i=t.height,o=n.width,a=n.height;const s=getComputedStyle(e);if(s.getPropertyValue("box-sizing")==="content-box"){const u=ot(s.paddingTop)+ot(s.paddingBottom)+ot(s.borderTopWidth)+ot(s.borderBottomWidth),c=ot(s.paddingLeft)+ot(s.paddingRight)+ot(s.borderRightWidth)+ot(s.borderLeftWidth);r-=c,o-=c,i-=u,a-=u}return[r,o,i,a].map(Math.round)}function Is(e){return yt in e&&Or.has(e[yt])?Or.get(e[yt]):{duration:250,easing:"ease-in-out"}}function Kv(e){if(yt in e)return e[yt]}function Ef(e){const t=Kv(e);return t?li.has(t):!1}function Yv(e,...t){t.forEach(n=>n(e,Or.has(e)));for(let n=0;n<e.children.length;n++){const r=e.children.item(n);r&&t.forEach(i=>i(r,Or.has(r)))}}function ix(e){const t=Oe.get(e),n=Rr(e);if(!Ef(e))return Oe.set(e,n);let r;if(!t)return;const i=Is(e);if(typeof i!="function"){const o=t.left-n.left,a=t.top-n.top,[s,l,u,c]=Vv(e,t,n),f={transform:`translate(${o}px, ${a}px)`},h={transform:"translate(0, 0)"};s!==l&&(f.width=`${s}px`,h.width=`${l}px`),u!==c&&(f.height=`${u}px`,h.height=`${c}px`),r=e.animate([f,h],{duration:i.duration,easing:i.easing})}else r=new Animation(i(e,"remain",t,n)),r.play();Hn.set(e,r),Oe.set(e,n),r.addEventListener("finish",Kn.bind(null,e))}function ox(e){const t=Rr(e);Oe.set(e,t);const n=Is(e);if(!Ef(e))return;let r;typeof n!="function"?r=e.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:n.duration*1.5,easing:"ease-in"}):(r=new Animation(n(e,"add",t)),r.play()),Hn.set(e,r),r.addEventListener("finish",Kn.bind(null,e))}function ax(e){var t;if(!Sr.has(e)||!Oe.has(e))return;const[n,r]=Sr.get(e);Object.defineProperty(e,Wu,{value:!0}),r&&r.parentNode&&r.parentNode instanceof Element?r.parentNode.insertBefore(e,r):n&&n.parentNode?n.parentNode.appendChild(e):(t=Kv(e))===null||t===void 0||t.appendChild(e);function i(){var h;e.remove(),Oe.delete(e),Sr.delete(e),Hn.delete(e),(h=Hu.get(e))===null||h===void 0||h.disconnect()}if(!Ef(e))return i();const[o,a,s,l]=sx(e),u=Is(e),c=Oe.get(e);let f;Object.assign(e.style,{position:"absolute",top:`${o}px`,left:`${a}px`,width:`${s}px`,height:`${l}px`,margin:0,pointerEvents:"none",transformOrigin:"center",zIndex:100}),typeof u!="function"?f=e.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:u.duration,easing:"ease-out"}):(f=new Animation(u(e,"remove",c)),f.play()),Hn.set(e,f),f.addEventListener("finish",i)}function sx(e){const t=Oe.get(e),[n,,r]=Vv(e,t,Rr(e));let i=e.parentElement;for(;i&&(getComputedStyle(i).position==="static"||i instanceof HTMLBodyElement);)i=i.parentElement;i||(i=document.body);const o=getComputedStyle(i),a=Oe.get(i)||Rr(i),s=Math.round(t.top-a.top)-ot(o.borderTopWidth),l=Math.round(t.left-a.left)-ot(o.borderLeftWidth);return[s,l,n,r]}function lx(e,t={}){return Vu&&cr&&(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&typeof t!="function"&&!t.disrespectUserMotionPreference||(li.add(e),getComputedStyle(e).position==="static"&&Object.assign(e.style,{position:"relative"}),Yv(e,Kn,tx,i=>cr==null?void 0:cr.observe(i)),typeof t=="function"?Or.set(e,t):Or.set(e,{duration:250,easing:"ease-in-out",...t}),Vu.observe(e,{childList:!0}),Hv.add(e))),Object.freeze({parent:e,enable:()=>{li.add(e)},disable:()=>{li.delete(e)},isEnabled:()=>li.has(e)})}function ux(e){const t=C.exports.useRef(null),[n,r]=C.exports.useState(),i=o=>{n&&(o?n.enable():n.disable())};return C.exports.useEffect(()=>{t.current instanceof HTMLElement&&r(lx(t.current,e||{}))},[]),[t,i]}const Xa=e=>e?e[0].toUpperCase()+e.slice(1):"";const Gv=({post:e,deletePost:t})=>{const n=zr();return M("div",{className:"post",children:[M("div",{className:"post-heading",children:[M("h2",{className:"post-title",children:[M("span",{children:[e.id,". "]}),Xa(e.title)]}),M("div",{className:"btns-wrapper",children:[y(Ae,{className:"post-btn",onClick:()=>localStorage.getItem("isAuth")?n("/vite-react-test/content/"+e.id):n("/vite-react-test/sign-in"),children:y(he,{icon:Fb,className:"btn-icons"})}),y(Ae,{className:"post-btn",onClick:()=>localStorage.getItem("isAuth")?t(e):n("/vite-react-test/sign-in"),children:y(he,{icon:jb,className:"btn-icons"})})]})]}),y("div",{className:"post-content",children:y("p",{children:e.body})})]})};Gv.displayName="PostItem";const cx=({posts:e,deletePost:t})=>{const[n,r]=ux();return M("div",{className:"post-list",ref:n,children:[(o=>o.length?y("h2",{children:"Post's List"}):y("h2",{children:"There are no posts here. "}))(e),e.map((o,a)=>y(Gv,{post:o,deletePost:t},o.id))]})};const fx=({options:e,defaultValue:t,value:n,onChange:r})=>y("div",{className:"select-wrapper",children:M("select",{className:"select",value:n,onChange:i=>r(i.target.value),children:[y("option",{disabled:!0,value:"",children:t}),e.map(i=>y("option",{value:i.value,children:i.name},i.value))]})});const dx=({value:e,onChange:t})=>y("div",{className:"search-post",children:y(Bn,{value:e,onChange:t,className:"search-input",placeholder:"Search post",type:"search"})}),hx=({filter:e,setFilter:t})=>M(gs,{children:[y(fx,{value:e.sortParam,onChange:n=>t({...e,sortParam:n}),defaultValue:"-- Sort by --",options:[{value:"title",name:"Title"},{value:"body",name:"Content"}]}),y(dx,{value:e.queryParam,onChange:n=>t({...e,queryParam:n.target.value})})]});const kf=({children:e,className:t,visible:n,closeModal:r})=>{const i=wo("modal",n?"modal-active":"",t);return y("div",{className:i,onClick:o=>r(o),children:y("div",{className:"modal-content",children:e})})};kf.propTypes={children:A.exports.node,className:A.exports.string};kf.defaultProps={className:""};const px=({totalPages:e,limit:t,currPage:n,changePage:r})=>M("div",{className:"pagination-wrapper",children:[y(Ae,{className:"pagination-btn",onClick:()=>{r(1)},disabled:n===1,children:y(he,{icon:Bb,size:"2x"})}),y(Ae,{className:"pagination-btn",onClick:()=>{n>1&&r(n-1)},disabled:n===1,children:y(he,{icon:Hb,size:"2x"})}),y(Ae,{className:"pagination-btn",active:!0,children:y("span",{children:n})}),y(Ae,{className:"pagination-btn",onClick:l=>{n<e&&r(n+1)},disabled:n===e,children:y(he,{icon:Rb,size:"2x"})}),y(Ae,{className:"pagination-btn",onClick:()=>{r(e)},disabled:n===e,children:y(he,{icon:Db,size:"2x"})})]}),Qv=Lr.createContext({}),qv=!0;function mx({baseColor:e,highlightColor:t,width:n,height:r,borderRadius:i,circle:o,direction:a,duration:s,enableAnimation:l=qv}){const u={};return a==="rtl"&&(u["--animation-direction"]="reverse"),typeof s=="number"&&(u["--animation-duration"]=`${s}s`),l||(u["--pseudo-element-display"]="none"),(typeof n=="string"||typeof n=="number")&&(u.width=n),(typeof r=="string"||typeof r=="number")&&(u.height=r),(typeof i=="string"||typeof i=="number")&&(u.borderRadius=i),o&&(u.borderRadius="50%"),typeof e<"u"&&(u["--base-color"]=e),typeof t<"u"&&(u["--highlight-color"]=t),u}function Vh({count:e=1,wrapper:t,className:n,containerClassName:r,containerTestId:i,circle:o=!1,style:a,...s}){var l,u,c;const f=Lr.useContext(Qv),h={...s};for(const[m,_]of Object.entries(s))typeof _>"u"&&delete h[m];const g={...f,...h,circle:o},v={...a,...mx(g)};let w="react-loading-skeleton";n&&(w+=` ${n}`);const x=(l=g.inline)!==null&&l!==void 0?l:!1,p=[],d=Math.ceil(e);for(let m=0;m<d;m++){let _=v;if(d>e&&m===d-1){const b=(u=_.width)!==null&&u!==void 0?u:"100%",I=e%1,O=typeof b=="number"?b*I:`calc(${b} * ${I})`;_={..._,width:O}}const k=y("span",{className:w,style:_,children:"\u200C"},m);x?p.push(k):p.push(M(gs,{children:[k,y("br",{})]}))}return y("span",{className:r,"data-testid":i,"aria-live":"polite","aria-busy":(c=g.enableAnimation)!==null&&c!==void 0?c:qv,children:t?p.map((m,_)=>y(t,{children:m},_)):p})}function gx({children:e,...t}){return y(Qv.Provider,{value:t,children:e})}const vx=({rowsCount:e})=>M("div",{className:"post",children:[y("h3",{children:y(Vh,{})}),y("p",{children:y(Vh,{count:e})})]});const Jv=({limit:e,addClass:t="",addInscription:n,rowsCount:r})=>{const o=(a=>{const s=[];for(let l=0;l<a;l++)s.push(l);return s})(e);return M("div",{className:"preloader "+t,children:[n?y("h2",{children:"Loading ..."}):"",o.map(a=>y(vx,{rowsCount:r},a))]})},yx=(e,t)=>C.exports.useMemo(()=>t?[...e].sort((r,i)=>r[t].localeCompare(i[t])):e,[t,e]),wx=(e,t,n)=>{const r=yx(e,t);return C.exports.useMemo(()=>r.filter(o=>o.title.toLowerCase().includes(n.toLowerCase())),[r,n])},Ku=e=>{const[t,n]=C.exports.useState(!1),[r,i]=C.exports.useState("");return[async()=>{try{n(!0),await e(),i("")}catch(a){i(a.message)}finally{n(!1)}},t,r]};function Xv(e,t){return function(){return e.apply(t,arguments)}}const{toString:Zv}=Object.prototype,{getPrototypeOf:bf}=Object,xf=(e=>t=>{const n=Zv.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Rt=e=>(e=e.toLowerCase(),t=>xf(t)===e),Cs=e=>t=>typeof t===e,{isArray:_o}=Array,Yu=Cs("undefined");function _x(e){return e!==null&&!Yu(e)&&e.constructor!==null&&!Yu(e.constructor)&&Br(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ey=Rt("ArrayBuffer");function Sx(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ey(e.buffer),t}const Ex=Cs("string"),Br=Cs("function"),ty=Cs("number"),ny=e=>e!==null&&typeof e=="object",kx=e=>e===!0||e===!1,ma=e=>{if(xf(e)!=="object")return!1;const t=bf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},bx=Rt("Date"),xx=Rt("File"),Ix=Rt("Blob"),Cx=Rt("FileList"),Tx=e=>ny(e)&&Br(e.pipe),Px=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||Zv.call(e)===t||Br(e.toString)&&e.toString()===t)},Nx=Rt("URLSearchParams"),Ox=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ts(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),_o(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),a=o.length;let s;for(r=0;r<a;r++)s=o[r],t.call(null,e[s],s,e)}}function Gu(){const e={},t=(n,r)=>{ma(e[r])&&ma(n)?e[r]=Gu(e[r],n):ma(n)?e[r]=Gu({},n):_o(n)?e[r]=n.slice():e[r]=n};for(let n=0,r=arguments.length;n<r;n++)arguments[n]&&Ts(arguments[n],t);return e}const Rx=(e,t,n,{allOwnKeys:r}={})=>(Ts(t,(i,o)=>{n&&Br(i)?e[o]=Xv(i,n):e[o]=i},{allOwnKeys:r}),e),Ax=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Lx=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Dx=(e,t,n,r)=>{let i,o,a;const s={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)a=i[o],(!r||r(a,e,t))&&!s[a]&&(t[a]=e[a],s[a]=!0);e=n!==!1&&bf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Mx=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Fx=e=>{if(!e)return null;if(_o(e))return e;let t=e.length;if(!ty(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Ux=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&bf(Uint8Array)),zx=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},jx=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},$x=Rt("HTMLFormElement"),Bx=e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Kh=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Hx=Rt("RegExp"),ry=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Ts(n,(i,o)=>{t(i,o,e)!==!1&&(r[o]=i)}),Object.defineProperties(e,r)},Wx=e=>{ry(e,(t,n)=>{const r=e[n];if(!!Br(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not read-only method '"+n+"'")})}})},Vx=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return _o(e)?r(e):r(String(e).split(t)),n},Kx=()=>{},Yx=(e,t)=>(e=+e,Number.isFinite(e)?e:t),S={isArray:_o,isArrayBuffer:ey,isBuffer:_x,isFormData:Px,isArrayBufferView:Sx,isString:Ex,isNumber:ty,isBoolean:kx,isObject:ny,isPlainObject:ma,isUndefined:Yu,isDate:bx,isFile:xx,isBlob:Ix,isRegExp:Hx,isFunction:Br,isStream:Tx,isURLSearchParams:Nx,isTypedArray:Ux,isFileList:Cx,forEach:Ts,merge:Gu,extend:Rx,trim:Ox,stripBOM:Ax,inherits:Lx,toFlatObject:Dx,kindOf:xf,kindOfTest:Rt,endsWith:Mx,toArray:Fx,forEachEntry:zx,matchAll:jx,isHTMLForm:$x,hasOwnProperty:Kh,hasOwnProp:Kh,reduceDescriptors:ry,freezeMethods:Wx,toObjectSet:Vx,toCamelCase:Bx,noop:Kx,toFiniteNumber:Yx};function B(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}S.inherits(B,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const iy=B.prototype,oy={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{oy[e]={value:e}});Object.defineProperties(B,oy);Object.defineProperty(iy,"isAxiosError",{value:!0});B.from=(e,t,n,r,i,o)=>{const a=Object.create(iy);return S.toFlatObject(e,a,function(l){return l!==Error.prototype},s=>s!=="isAxiosError"),B.call(a,e.message,t,n,r,i),a.cause=e,a.name=e.name,o&&Object.assign(a,o),a};var Gx=typeof self=="object"?self.FormData:window.FormData;function Qu(e){return S.isPlainObject(e)||S.isArray(e)}function ay(e){return S.endsWith(e,"[]")?e.slice(0,-2):e}function Yh(e,t,n){return e?e.concat(t).map(function(i,o){return i=ay(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function Qx(e){return S.isArray(e)&&!e.some(Qu)}const qx=S.toFlatObject(S,{},null,function(t){return/^is[A-Z]/.test(t)});function Jx(e){return e&&S.isFunction(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator]}function Ps(e,t,n){if(!S.isObject(e))throw new TypeError("target must be an object");t=t||new(Gx||FormData),n=S.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,x){return!S.isUndefined(x[w])});const r=n.metaTokens,i=n.visitor||c,o=n.dots,a=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&Jx(t);if(!S.isFunction(i))throw new TypeError("visitor must be a function");function u(v){if(v===null)return"";if(S.isDate(v))return v.toISOString();if(!l&&S.isBlob(v))throw new B("Blob is not supported. Use a Buffer instead.");return S.isArrayBuffer(v)||S.isTypedArray(v)?l&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function c(v,w,x){let p=v;if(v&&!x&&typeof v=="object"){if(S.endsWith(w,"{}"))w=r?w:w.slice(0,-2),v=JSON.stringify(v);else if(S.isArray(v)&&Qx(v)||S.isFileList(v)||S.endsWith(w,"[]")&&(p=S.toArray(v)))return w=ay(w),p.forEach(function(m,_){!(S.isUndefined(m)||m===null)&&t.append(a===!0?Yh([w],_,o):a===null?w:w+"[]",u(m))}),!1}return Qu(v)?!0:(t.append(Yh(x,w,o),u(v)),!1)}const f=[],h=Object.assign(qx,{defaultVisitor:c,convertValue:u,isVisitable:Qu});function g(v,w){if(!S.isUndefined(v)){if(f.indexOf(v)!==-1)throw Error("Circular reference detected in "+w.join("."));f.push(v),S.forEach(v,function(p,d){(!(S.isUndefined(p)||p===null)&&i.call(t,p,S.isString(d)?d.trim():d,w,h))===!0&&g(p,w?w.concat(d):[d])}),f.pop()}}if(!S.isObject(e))throw new TypeError("data must be an object");return g(e),t}function Gh(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function If(e,t){this._pairs=[],e&&Ps(e,this,t)}const sy=If.prototype;sy.append=function(t,n){this._pairs.push([t,n])};sy.toString=function(t){const n=t?function(r){return t.call(this,r,Gh)}:Gh;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function Xx(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ly(e,t,n){if(!t)return e;const r=n&&n.encode||Xx,i=n&&n.serialize;let o;if(i?o=i(t,n):o=S.isURLSearchParams(t)?t.toString():new If(t,n).toString(r),o){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Qh{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){S.forEach(this.handlers,function(r){r!==null&&t(r)})}}const uy={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Zx=typeof URLSearchParams<"u"?URLSearchParams:If,eI=FormData,tI=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),_t={isBrowser:!0,classes:{URLSearchParams:Zx,FormData:eI,Blob},isStandardBrowserEnv:tI,protocols:["http","https","file","blob","url","data"]};function nI(e,t){return Ps(e,new _t.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return _t.isNode&&S.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function rI(e){return S.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function iI(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function cy(e){function t(n,r,i,o){let a=n[o++];const s=Number.isFinite(+a),l=o>=n.length;return a=!a&&S.isArray(i)?i.length:a,l?(S.hasOwnProp(i,a)?i[a]=[i[a],r]:i[a]=r,!s):((!i[a]||!S.isObject(i[a]))&&(i[a]=[]),t(n,r,i[a],o)&&S.isArray(i[a])&&(i[a]=iI(i[a])),!s)}if(S.isFormData(e)&&S.isFunction(e.entries)){const n={};return S.forEachEntry(e,(r,i)=>{t(rI(r),i,n,0)}),n}return null}function oI(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new B("Request failed with status code "+n.status,[B.ERR_BAD_REQUEST,B.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const aI=_t.isStandardBrowserEnv?function(){return{write:function(n,r,i,o,a,s){const l=[];l.push(n+"="+encodeURIComponent(r)),S.isNumber(i)&&l.push("expires="+new Date(i).toGMTString()),S.isString(o)&&l.push("path="+o),S.isString(a)&&l.push("domain="+a),s===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function sI(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function lI(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function fy(e,t){return e&&!sI(t)?lI(e,t):t}const uI=_t.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let a=o;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(a){const s=S.isString(a)?i(a):a;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}();function So(e,t,n){B.call(this,e==null?"canceled":e,B.ERR_CANCELED,t,n),this.name="CanceledError"}S.inherits(So,B,{__CANCEL__:!0});function cI(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}const fI=S.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),dI=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(a){i=a.indexOf(":"),n=a.substring(0,i).trim().toLowerCase(),r=a.substring(i+1).trim(),!(!n||t[n]&&fI[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},qh=Symbol("internals"),dy=Symbol("defaults");function ui(e){return e&&String(e).trim().toLowerCase()}function ga(e){return e===!1||e==null?e:S.isArray(e)?e.map(ga):String(e)}function hI(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function Jh(e,t,n,r){if(S.isFunction(r))return r.call(this,t,n);if(!!S.isString(t)){if(S.isString(r))return t.indexOf(r)!==-1;if(S.isRegExp(r))return r.test(t)}}function pI(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function mI(e,t){const n=S.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,a){return this[r].call(this,t,i,o,a)},configurable:!0})})}function ei(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}function We(e,t){e&&this.set(e),this[dy]=t||null}Object.assign(We.prototype,{set:function(e,t,n){const r=this;function i(o,a,s){const l=ui(a);if(!l)throw new Error("header name must be a non-empty string");const u=ei(r,l);u&&s!==!0&&(r[u]===!1||s===!1)||(r[u||a]=ga(o))}return S.isPlainObject(e)?S.forEach(e,(o,a)=>{i(o,a,t)}):i(t,e,n),this},get:function(e,t){if(e=ui(e),!e)return;const n=ei(this,e);if(n){const r=this[n];if(!t)return r;if(t===!0)return hI(r);if(S.isFunction(t))return t.call(this,r,n);if(S.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}},has:function(e,t){if(e=ui(e),e){const n=ei(this,e);return!!(n&&(!t||Jh(this,this[n],n,t)))}return!1},delete:function(e,t){const n=this;let r=!1;function i(o){if(o=ui(o),o){const a=ei(n,o);a&&(!t||Jh(n,n[a],a,t))&&(delete n[a],r=!0)}}return S.isArray(e)?e.forEach(i):i(e),r},clear:function(){return Object.keys(this).forEach(this.delete.bind(this))},normalize:function(e){const t=this,n={};return S.forEach(this,(r,i)=>{const o=ei(n,i);if(o){t[o]=ga(r),delete t[i];return}const a=e?pI(i):String(i).trim();a!==i&&delete t[i],t[a]=ga(r),n[a]=!0}),this},toJSON:function(e){const t=Object.create(null);return S.forEach(Object.assign({},this[dy]||null,this),(n,r)=>{n==null||n===!1||(t[r]=e&&S.isArray(n)?n.join(", "):n)}),t}});Object.assign(We,{from:function(e){return S.isString(e)?new this(dI(e)):e instanceof this?e:new this(e)},accessor:function(e){const n=(this[qh]=this[qh]={accessors:{}}).accessors,r=this.prototype;function i(o){const a=ui(o);n[a]||(mI(r,o),n[a]=!0)}return S.isArray(e)?e.forEach(i):i(e),this}});We.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);S.freezeMethods(We.prototype);S.freezeMethods(We);function gI(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,a;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),c=r[o];a||(a=u),n[i]=l,r[i]=u;let f=o,h=0;for(;f!==i;)h+=n[f++],f=f%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-a<t)return;const g=c&&u-c;return g?Math.round(h*1e3/g):void 0}}function Xh(e,t){let n=0;const r=gI(50,250);return i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,s=o-n,l=r(s),u=o<=a;n=o;const c={loaded:o,total:a,progress:a?o/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&u?(a-o)/l:void 0};c[t?"download":"upload"]=!0,e(c)}}function Zh(e){return new Promise(function(n,r){let i=e.data;const o=We.from(e.headers).normalize(),a=e.responseType;let s;function l(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}S.isFormData(i)&&_t.isStandardBrowserEnv&&o.setContentType(!1);let u=new XMLHttpRequest;if(e.auth){const g=e.auth.username||"",v=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(g+":"+v))}const c=fy(e.baseURL,e.url);u.open(e.method.toUpperCase(),ly(c,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function f(){if(!u)return;const g=We.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),w={data:!a||a==="text"||a==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:g,config:e,request:u};oI(function(p){n(p),l()},function(p){r(p),l()},w),u=null}if("onloadend"in u?u.onloadend=f:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(f)},u.onabort=function(){!u||(r(new B("Request aborted",B.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new B("Network Error",B.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let v=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const w=e.transitional||uy;e.timeoutErrorMessage&&(v=e.timeoutErrorMessage),r(new B(v,w.clarifyTimeoutError?B.ETIMEDOUT:B.ECONNABORTED,e,u)),u=null},_t.isStandardBrowserEnv){const g=(e.withCredentials||uI(c))&&e.xsrfCookieName&&aI.read(e.xsrfCookieName);g&&o.set(e.xsrfHeaderName,g)}i===void 0&&o.setContentType(null),"setRequestHeader"in u&&S.forEach(o.toJSON(),function(v,w){u.setRequestHeader(w,v)}),S.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&a!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",Xh(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Xh(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=g=>{!u||(r(!g||g.type?new So(null,e,u):g),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const h=cI(c);if(h&&_t.protocols.indexOf(h)===-1){r(new B("Unsupported protocol "+h+":",B.ERR_BAD_REQUEST,e));return}u.send(i||null)})}const ep={http:Zh,xhr:Zh},tp={getAdapter:e=>{if(S.isString(e)){const t=ep[e];if(!e)throw Error(S.hasOwnProp(e)?`Adapter '${e}' is not available in the build`:`Can not resolve adapter '${e}'`);return t}if(!S.isFunction(e))throw new TypeError("adapter is not a function");return e},adapters:ep},vI={"Content-Type":"application/x-www-form-urlencoded"};function yI(){let e;return typeof XMLHttpRequest<"u"?e=tp.getAdapter("xhr"):typeof process<"u"&&S.kindOf(process)==="process"&&(e=tp.getAdapter("http")),e}function wI(e,t,n){if(S.isString(e))try{return(t||JSON.parse)(e),S.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Hr={transitional:uy,adapter:yI(),transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=S.isObject(t);if(o&&S.isHTMLForm(t)&&(t=new FormData(t)),S.isFormData(t))return i&&i?JSON.stringify(cy(t)):t;if(S.isArrayBuffer(t)||S.isBuffer(t)||S.isStream(t)||S.isFile(t)||S.isBlob(t))return t;if(S.isArrayBufferView(t))return t.buffer;if(S.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return nI(t,this.formSerializer).toString();if((s=S.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Ps(s?{"files[]":t}:t,l&&new l,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),wI(t)):t}],transformResponse:[function(t){const n=this.transitional||Hr.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&S.isString(t)&&(r&&!this.responseType||i)){const a=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(s){if(a)throw s.name==="SyntaxError"?B.from(s,B.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:_t.classes.FormData,Blob:_t.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};S.forEach(["delete","get","head"],function(t){Hr.headers[t]={}});S.forEach(["post","put","patch"],function(t){Hr.headers[t]=S.merge(vI)});function _l(e,t){const n=this||Hr,r=t||n,i=We.from(r.headers);let o=r.data;return S.forEach(e,function(s){o=s.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function hy(e){return!!(e&&e.__CANCEL__)}function Sl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new So}function np(e){return Sl(e),e.headers=We.from(e.headers),e.data=_l.call(e,e.transformRequest),(e.adapter||Hr.adapter)(e).then(function(r){return Sl(e),r.data=_l.call(e,e.transformResponse,r),r.headers=We.from(r.headers),r},function(r){return hy(r)||(Sl(e),r&&r.response&&(r.response.data=_l.call(e,e.transformResponse,r.response),r.response.headers=We.from(r.response.headers))),Promise.reject(r)})}function Xi(e,t){t=t||{};const n={};function r(u,c){return S.isPlainObject(u)&&S.isPlainObject(c)?S.merge(u,c):S.isPlainObject(c)?S.merge({},c):S.isArray(c)?c.slice():c}function i(u){if(S.isUndefined(t[u])){if(!S.isUndefined(e[u]))return r(void 0,e[u])}else return r(e[u],t[u])}function o(u){if(!S.isUndefined(t[u]))return r(void 0,t[u])}function a(u){if(S.isUndefined(t[u])){if(!S.isUndefined(e[u]))return r(void 0,e[u])}else return r(void 0,t[u])}function s(u){if(u in t)return r(e[u],t[u]);if(u in e)return r(void 0,e[u])}const l={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s};return S.forEach(Object.keys(e).concat(Object.keys(t)),function(c){const f=l[c]||i,h=f(c);S.isUndefined(h)&&f!==s||(n[c]=h)}),n}const py="1.1.3",Cf={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Cf[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const rp={};Cf.transitional=function(t,n,r){function i(o,a){return"[Axios v"+py+"] Transitional option '"+o+"'"+a+(r?". "+r:"")}return(o,a,s)=>{if(t===!1)throw new B(i(a," has been removed"+(n?" in "+n:"")),B.ERR_DEPRECATED);return n&&!rp[a]&&(rp[a]=!0,console.warn(i(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,a,s):!0}};function _I(e,t,n){if(typeof e!="object")throw new B("options must be an object",B.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],a=t[o];if(a){const s=e[o],l=s===void 0||a(s,o,e);if(l!==!0)throw new B("option "+o+" must be "+l,B.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new B("Unknown option "+o,B.ERR_BAD_OPTION)}}const qu={assertOptions:_I,validators:Cf},Mt=qu.validators;class On{constructor(t){this.defaults=t,this.interceptors={request:new Qh,response:new Qh}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Xi(this.defaults,n);const{transitional:r,paramsSerializer:i}=n;r!==void 0&&qu.assertOptions(r,{silentJSONParsing:Mt.transitional(Mt.boolean),forcedJSONParsing:Mt.transitional(Mt.boolean),clarifyTimeoutError:Mt.transitional(Mt.boolean)},!1),i!==void 0&&qu.assertOptions(i,{encode:Mt.function,serialize:Mt.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();const o=n.headers&&S.merge(n.headers.common,n.headers[n.method]);o&&S.forEach(["delete","get","head","post","put","patch","common"],function(v){delete n.headers[v]}),n.headers=new We(n.headers,o);const a=[];let s=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(s=s&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const l=[];this.interceptors.response.forEach(function(v){l.push(v.fulfilled,v.rejected)});let u,c=0,f;if(!s){const g=[np.bind(this),void 0];for(g.unshift.apply(g,a),g.push.apply(g,l),f=g.length,u=Promise.resolve(n);c<f;)u=u.then(g[c++],g[c++]);return u}f=a.length;let h=n;for(c=0;c<f;){const g=a[c++],v=a[c++];try{h=g(h)}catch(w){v.call(this,w);break}}try{u=np.call(this,h)}catch(g){return Promise.reject(g)}for(c=0,f=l.length;c<f;)u=u.then(l[c++],l[c++]);return u}getUri(t){t=Xi(this.defaults,t);const n=fy(t.baseURL,t.url);return ly(n,t.params,t.paramsSerializer)}}S.forEach(["delete","get","head","options"],function(t){On.prototype[t]=function(n,r){return this.request(Xi(r||{},{method:t,url:n,data:(r||{}).data}))}});S.forEach(["post","put","patch"],function(t){function n(r){return function(o,a,s){return this.request(Xi(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:a}))}}On.prototype[t]=n(),On.prototype[t+"Form"]=n(!0)});class Tf{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const a=new Promise(s=>{r.subscribe(s),o=s}).then(i);return a.cancel=function(){r.unsubscribe(o)},a},t(function(o,a,s){r.reason||(r.reason=new So(o,a,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Tf(function(i){t=i}),cancel:t}}}function SI(e){return function(n){return e.apply(null,n)}}function EI(e){return S.isObject(e)&&e.isAxiosError===!0}function my(e){const t=new On(e),n=Xv(On.prototype.request,t);return S.extend(n,On.prototype,t,{allOwnKeys:!0}),S.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return my(Xi(e,i))},n}const we=my(Hr);we.Axios=On;we.CanceledError=So;we.CancelToken=Tf;we.isCancel=hy;we.VERSION=py;we.toFormData=Ps;we.AxiosError=B;we.Cancel=we.CanceledError;we.all=function(t){return Promise.all(t)};we.spread=SI;we.isAxiosError=EI;we.formToJSON=e=>cy(S.isHTMLForm(e)?new FormData(e):e);const El="https://jsonplaceholder.typicode.com/posts";class Ju{static async getData(t=10,n=1){return await we.get(El,{params:{_limit:t,_page:n}})}static async getDataById(t){return await we.get(El+"/"+t)}static async getCommentsByPostId(t){return await we.get(El+"/"+t+"/comments")}}const kI=(e,t=10)=>Math.ceil(e/t);const bI=()=>{const[e,t]=C.exports.useState([]),[n,r]=C.exports.useState({sortParam:"",queryParam:""}),[i,o]=C.exports.useState(!1),[a,s]=C.exports.useState(10),[l,u]=C.exports.useState(1),[c,f]=C.exports.useState(0),h=zr(),[g,v,w]=Ku(async()=>{const b=await Ju.getData(a,l);t(b.data);const I=b.headers["x-total-count"];f(kI(I))}),x=wx(e,n.sortParam,n.queryParam);return C.exports.useEffect(()=>{g()},[l]),M("div",{className:"container",children:[y(kf,{visible:i,closeModal:b=>{b.target.classList.contains("modal-content")&&o(!i),b.target.classList.contains("btn")&&o(!i)},children:y(Qb,{create:b=>{t([...e,b])}})}),M("div",{className:"controls",children:[y(hx,{filter:n,setFilter:r}),M(Ae,{onClick:()=>{localStorage.getItem("isAuth")||h("/vite-react-test/sign-in"),o(!i)},className:"controls-btn",children:[y(he,{icon:Ub,className:"btn-icons",style:{color:"green",paddingRight:".3em"}}),y("span",{children:"New post"})]})]}),y("hr",{style:{width:"67vw",border:"1px solid var(--font-color)"}}),w?y("h2",{children:w}):"",v?y(Jv,{limit:a,rowsCount:3,addClass:"post-list",addInscription:!0}):y(cx,{posts:x,deletePost:b=>{t(e.filter(I=>I.id!==b.id))},isLoading:v}),y(px,{totalPages:c,limit:a,currPage:l,changePage:b=>{u(b)}})]})};const xI=()=>{const e=Nw(),[t,n]=C.exports.useState({}),[r,i]=C.exports.useState([]),[o,a,s]=Ku(async()=>{const f=await Ju.getDataById(e.id);n(f.data)}),[l,u,c]=Ku(async()=>{const f=await Ju.getCommentsByPostId(e.id);i(f.data)});return C.exports.useEffect(()=>{o(),l()},[]),M("div",{className:"container",children:[M("div",{className:"post-list",children:[y("h2",{children:"Comments by post:"}),y("h2",{style:{color:"var(--font-color)"},children:Xa(t.title)})]}),y("div",{className:"comments-wrapper",children:a?y(Jv,{limit:6,rowsCount:3,addClass:"comments-wrapper"}):y("div",{className:"comments",children:r.map((f,h)=>y("article",{className:"comment",children:M("div",{className:"comment-text",children:[M("p",{className:"comment-author",children:[h+1,". ",f.email]}),y("h3",{className:"comment-title",children:Xa(f.name)}),y("p",{className:"comment-body",children:f.body})]})},f.id))})})]})},II=(e,t)=>Xa(e.slice(5).split("-").join(" "));const gy=({btnSwitch:e,title:t,question:n,className:r,btnText:i,switchToPage:o,handleSubmit:a,errorCode:s})=>{const l=wo("form",r),[u,c]=C.exports.useState(""),[f,h]=C.exports.useState(""),[g,v]=C.exports.useState("password"),w=x=>{v(g==="password"?"text":"password")};return M("form",{className:l,children:[y("h2",{className:"form-title",children:t}),y(Bn,{className:"form-input",value:u,onChange:x=>c(x.target.value),placeholder:"Email",type:"email"}),M("div",{className:"psw-wrapper",children:[y(Bn,{className:"input-password",value:f,onChange:x=>h(x.target.value),placeholder:"Password (at least 6 characters)",type:g}),M("label",{htmlFor:t.toLowerCase()+"-checkbox",className:"vision-icon",children:[y("input",{type:"checkbox",id:t.toLowerCase()+"-checkbox",style:{display:"none"},onChange:x=>w()}),g==="password"?y(he,{icon:Ob}):y(he,{icon:Mb})]})]}),y(Ae,{onClick:x=>{x.preventDefault(),a(u,f)},className:"form-btn",children:i}),M("div",{className:"link-wrapper",children:[y("p",{children:n}),y(Pn,{className:"link",to:o,children:e})]}),y("div",{className:"error-message",children:s?y("p",{style:{color:"red"},children:II(s)}):""})]})},CI=()=>{const e=zr(),[t,n]=C.exports.useState(""),[r,i]=C.exports.useState({});return Nv(Ji,a=>{i(a)}),y(gy,{className:"signin-form",btnSwitch:"Sign up and get started!",title:"Identification",question:"Don't have an account?",btnText:"Sign In",switchToPage:"/vite-react-test/sign-up",handleSubmit:async(a,s)=>{try{const l=await uk(Ji,a,s);localStorage.setItem("isAuth","true"),e("/")}catch(l){const u=l.code;n(u)}},errorCode:t})},TI=()=>{const e=zr(),[t,n]=C.exports.useState(""),[r,i]=C.exports.useState({});return Nv(Ji,a=>{i(a)}),y(gy,{className:"signup-form",btnSwitch:"Sign in and keep going!",title:"Registration",question:"Already have an account?",btnText:"Sign Up",switchToPage:"/vite-react-test/sign-in",handleSubmit:async(a,s)=>{try{const l=await lk(Ji,a,s);localStorage.setItem("isAuth","true"),e("/")}catch(l){const u=l.code;n(u)}},errorCode:t})},PI=[{path:"/vite-react-test/home",element:Bv},{path:"/vite-react-test/about",element:Gb,exact:!0},{path:"/vite-react-test/content",element:bI,exact:!0},{path:"/vite-react-test/content/:id",element:xI,exact:!0},{path:"/vite-react-test/sign-in",element:CI,exact:!0},{path:"/vite-react-test/sign-up",element:TI,exact:!0}],NI=()=>M(zw,{children:[PI.map(e=>{const t=e.element;return y(_u,{path:e.path,element:y(t,{}),exact:e.exact},e.path)}),y(_u,{path:"*",element:y(Bv,{to:"/vite-react-test/home",replace:!0})})]});const OI=()=>y("main",{children:y(NI,{})}),RI=()=>(C.exports.useState(""),y(gs,{children:M(gx,{baseColor:"var(--bg-color-dark)",highlightColor:"var(--bg-color-light)",children:[y(Vb,{}),y(OI,{}),y(K_,{})]})}));bl.createRoot(document.getElementById("root")).render(y(Lr.StrictMode,{children:y(Ww,{children:y(RI,{})})}));
