import{h as tt,O as pt,b4 as gt,j as et,z as mt,l as o,d as vt,x as yt,aE as wt,aF as bt,b5 as St,ai as _t,C as xt,o as v,c as S,N as Tt,e as Dt,H as W,k as g,t as It,F as G,D as U,n as kt,b as K,L as Et,w as Ct}from"./framework.4eb5045b.js";import{a as Ot,m as Pt,bi as Mt,bj as At,o as x,bk as Lt,bl as $t,J as zt,bm as Gt,U as Ut}from"./components.175bfd8d.js";import"../app.145f5e9a.js";import"./theme.9a7457db.js";function Kt(){try{return"constructor"in GestureEvent}catch{return!1}}function st(){return typeof window<"u"&&"ontouchstart"in window}function nt(e){return"pointerId"in e?null:e.type==="touchend"?e.changedTouches:e.targetTouches}function rt(e){return Array.from(nt(e)).map(t=>t.identifier)}function Y(e){const t="buttons"in e?e.buttons:0,{shiftKey:s,altKey:n,metaKey:r,ctrlKey:i}=e;return{buttons:t,shiftKey:s,altKey:n,metaKey:r,ctrlKey:i}}const jt=e=>e;function F(e,t=jt){const s=nt(e),{clientX:n,clientY:r}=s?s[0]:e;return t([n,r])}function it(){}function ot(...e){return e.length===0?it:e.length===1?e[0]:function(){var t;for(let s of e)t=s.apply(this,arguments)||t;return t}}function _(e,t){if(e===void 0){if(t===void 0)throw new Error("Must define fallback value if undefined is expected");e=t}return Array.isArray(e)?e:[e,e]}function H(e,...t){return typeof e=="function"?e(...t):e}function C(e){return{_active:!1,_blocked:!1,_intentional:[!1,!1],_movement:[0,0],_initial:[0,0],_bounds:[[-1/0,1/0],[-1/0,1/0]],_lastEventType:void 0,_dragStarted:!1,_dragPreventScroll:!1,_dragIsTap:!0,_dragDelayed:!1,event:void 0,intentional:!1,values:[0,0],velocities:[0,0],delta:[0,0],movement:[0,0],offset:[0,0],lastOffset:[0,0],direction:[0,0],initial:[0,0],previous:[0,0],first:!1,last:!1,active:!1,timeStamp:0,startTime:0,elapsedTime:0,cancel:it,canceled:!1,memo:void 0,args:void 0,...e}}function at(){const e={hovering:!1,scrolling:!1,wheeling:!1,dragging:!1,moving:!1,pinching:!1,touches:0,buttons:0,down:!1,shiftKey:!1,altKey:!1,metaKey:!1,ctrlKey:!1,locked:!1},t=C({_pointerId:void 0,axis:void 0,xy:[0,0],vxvy:[0,0],velocity:0,distance:0,tap:!1,swipe:[0,0]}),s=C({_pointerIds:[],da:[0,0],vdva:[0,0],origin:void 0,turns:0}),n=C({axis:void 0,xy:[0,0],vxvy:[0,0],velocity:0,distance:0}),r=C({axis:void 0,xy:[0,0],vxvy:[0,0],velocity:0,distance:0}),i=C({axis:void 0,xy:[0,0],vxvy:[0,0],velocity:0,distance:0});return{shared:e,drag:t,pinch:s,wheel:n,move:r,scroll:i}}class Bt{constructor(t){this.classes=t,this.pointerIds=new Set,this.touchIds=new Set,this.supportsTouchEvents=st(),this.supportsGestureEvents=Kt(),this.bind=(...s)=>{const n={};for(let r of this.classes)new r(this,s).addBindings(n);for(let r in this.nativeRefs)y(n,r,i=>this.nativeRefs[r]({...this.state.shared,event:i,args:s}));return this.config.domTarget?Ft(this,n):Ht(this,n)},this.clean=()=>{const{eventOptions:s,domTarget:n}=this.config,r=o(n);r&&O(r,lt(this.domListeners),s),Object.values(this.timeouts).forEach(clearTimeout),Vt(this)},this.classes=t,this.state=at(),this.timeouts={},this.domListeners=[],this.windowListeners={}}}function Nt(e,t){"pointerId"in t?e.pointerIds.add(t.pointerId):e.touchIds=new Set(rt(t))}function Rt(e,t){"pointerId"in t?e.pointerIds.delete(t.pointerId):rt(t).forEach(s=>e.touchIds.delete(s))}function Vt(e){const{config:{window:t,eventOptions:s},windowListeners:n}=e,r=o(t);if(r){for(let i in n){const l=n[i];O(r,l,s)}e.windowListeners={}}}function Wt({config:e,windowListeners:t},s,n=e.eventOptions){const r=o(e.window);r&&(O(r,t[s],n),delete t[s])}function Yt({config:e,windowListeners:t},s,n=[],r=e.eventOptions){const i=o(e.window);i&&(O(i,t[s],r),ct(i,t[s]=n,r))}function Ft({config:e,domListeners:t},s){const{eventOptions:n,domTarget:r}=e,i=o(r);if(!i)throw new Error("domTarget must be defined");O(i,lt(t),n);for(let[l,a]of Object.entries(s)){const c=l.slice(2).toLowerCase();t.push([c,ot(...a)])}ct(i,t,n)}function Ht({config:e},t){const s={},n=e.eventOptions.capture?"Capture":"";for(let[r,i]of Object.entries(t)){const l=Array.isArray(i)?i:[i],a=r+n;s[a]=ot(...l)}return s}function lt(e=[]){return e.splice(0,e.length)}function y(e,t,s){e[t]||(e[t]=[]),e[t].push(s)}function ct(e,t=[],s={}){if(e)for(let[n,r]of t)e.addEventListener(n,r,s)}function O(e,t=[],s={}){if(e)for(let[n,r]of t)e.removeEventListener(n,r,s)}function B(e,t){return e.map((s,n)=>s+t[n])}function ut(e,t){return e.map((s,n)=>s-t[n])}function N(e){return Math.hypot(...e)}function Xt(e,t,s){const n=N(t),r=n===0?0:1/n,i=s===0?0:1/s,l=i*n,a=t.map(h=>i*h),c=t.map(h=>r*h),f=N(e);return{velocities:a,velocity:l,distance:f,direction:c}}function R(e){return Math.sign?Math.sign(e):+(e>0)-+(e<0)||+e}function qt(e,t,s){return Math.max(t,Math.min(e,s))}function Jt(e,t){return Math.pow(e,t*5)}function X(e,t,s){return t===0||Math.abs(t)===1/0?Jt(e,s):e*t*s/(t+s*e)}function q(e,t,s,n=.15){return n===0?qt(e,t,s):e<t?-X(t-e,s-t,n)+t:e>s?+X(e-s,s-t,n)+s:e}const T=new Map,Qt=e=>e;class Zt{constructor(t,s=[]){this.controller=t,this.args=s,this.debounced=!0,this.setTimeout=(n,r=140,...i)=>{clearTimeout(this.controller.timeouts[this.stateKey]),this.controller.timeouts[this.stateKey]=window.setTimeout(n,r,...i)},this.clearTimeout=()=>{clearTimeout(this.controller.timeouts[this.stateKey])},this.fireGestureHandler=(n=!1)=>{if(this.state._blocked)return this.debounced||(this.state._active=!1,this.clean()),null;if(!n&&!this.state.intentional&&!this.config.triggerAllEvents)return null;if(this.state.intentional){const c=this.state.active,f=this.state._active;this.state.active=f,this.state.first=f&&!c,this.state.last=c&&!f,this.controller.state.shared[this.ingKey]=f}const r=this.controller.pointerIds.size||this.controller.touchIds.size,i=this.controller.state.shared.buttons>0||r>0,l={...this.controller.state.shared,...this.state,...this.mapStateValues(this.state),locked:!!document.pointerLockElement,touches:r,down:i},a=this.handler(l);return this.state.memo=a!==void 0?a:this.state.memo,l},this.controller=t,this.args=s}get config(){return this.controller.config[this.stateKey]}get enabled(){return this.controller.config.enabled&&this.config.enabled}get state(){return this.controller.state[this.stateKey]}get handler(){return this.controller.handlers[this.stateKey]}get transform(){return this.config.transform||this.controller.config.transform||Qt}updateSharedState(t){Object.assign(this.controller.state.shared,t)}updateGestureState(t){Object.assign(this.state,t)}checkIntentionality(t,s){return{_intentional:t,_blocked:!1}}getMovement(t){const{rubberband:s,threshold:n}=this.config,{_bounds:r,_initial:i,_active:l,_intentional:a,lastOffset:c,movement:f}=this.state,h=this.getInternalMovement(t,this.state),D=this.transform(n).map(Math.abs),k=a[0]===!1?J(h[0],D[0]):a[0],E=a[1]===!1?J(h[1],D[1]):a[1],w=this.checkIntentionality([k,E],h);if(w._blocked)return{...w,_movement:h,delta:[0,0]};const m=w._intentional,$=h;let b=[m[0]!==!1?h[0]-m[0]:0,m[1]!==!1?h[1]-m[1]:0];const P=B(b,c),I=l?s:[0,0];return b=Q(r,B(b,i),I),{...w,intentional:m[0]!==!1||m[1]!==!1,_initial:i,_movement:$,movement:b,values:t,offset:Q(r,P,I),delta:ut(b,f)}}clean(){this.clearTimeout()}}function J(e,t){return Math.abs(e)>=t?R(e)*t:!1}function Q(e,[t,s],[n,r]){const[[i,l],[a,c]]=e;return[q(t,i,l,n),q(s,a,c,r)]}function j({state:e},t,s){const{timeStamp:n,type:r}=t,i=e.values,l=s?0:n-e.startTime;return{_lastEventType:r,event:t,timeStamp:n,elapsedTime:l,previous:i}}function te({state:e,config:t,stateKey:s,args:n},r,i){const l=e.offset,a=i.timeStamp,{initial:c,bounds:f}=t,h={...at()[s],_active:!0,args:n,values:r,initial:r,offset:l,lastOffset:l,startTime:a};return{...h,_initial:H(c,h),_bounds:H(f,h)}}class ee extends Zt{getInternalMovement(t,s){return ut(t,s.initial)}checkIntentionality(t,s){if(t[0]===!1&&t[1]===!1)return{_intentional:t,axis:this.state.axis};const[n,r]=s.map(Math.abs),i=this.state.axis||(n>r?"x":n<r?"y":void 0);return!this.config.axis&&!this.config.lockDirection?{_intentional:t,_blocked:!1,axis:i}:i?this.config.axis&&i!==this.config.axis?{_intentional:t,_blocked:!0,axis:i}:(t[i==="x"?1:0]=!1,{_intentional:t,_blocked:!1,axis:i}):{_intentional:[!1,!1],_blocked:!1,axis:i}}getKinematics(t,s){const n=this.getMovement(t);if(!n._blocked){const r=s.timeStamp-this.state.timeStamp;Object.assign(n,Xt(n.movement,n.delta,r))}return n}mapStateValues(t){return{xy:t.values,vxvy:t.velocities}}}const se=3;function Z(e){"persist"in e&&typeof e.persist=="function"&&e.persist()}class ne extends ee{constructor(){super(...arguments),this.ingKey="dragging",this.stateKey="drag",this.setPointerCapture=t=>{if(this.config.useTouch||document.pointerLockElement)return;const{target:s,pointerId:n}=t;s&&"setPointerCapture"in s&&s.setPointerCapture(n),this.updateGestureState({_dragTarget:s,_dragPointerId:n})},this.releasePointerCapture=()=>{if(this.config.useTouch||document.pointerLockElement)return;const{_dragTarget:t,_dragPointerId:s}=this.state;if(s&&t&&"releasePointerCapture"in t&&(!("hasPointerCapture"in t)||t.hasPointerCapture(s)))try{t.releasePointerCapture(s)}catch{}},this.preventScroll=t=>{this.state._dragPreventScroll&&t.cancelable&&t.preventDefault()},this.getEventId=t=>this.config.useTouch?t.changedTouches[0].identifier:t.pointerId,this.isValidEvent=t=>this.state._pointerId===this.getEventId(t),this.shouldPreventWindowScrollY=this.config.preventWindowScrollY&&this.controller.supportsTouchEvents,this.setUpWindowScrollDetection=t=>{Z(t),Yt(this.controller,this.stateKey,[["touchmove",this.preventScroll],["touchend",this.clean.bind(this)],["touchcancel",this.clean.bind(this)]],{passive:!1}),this.setTimeout(this.startDrag.bind(this),250,t)},this.setUpDelayedDragTrigger=t=>{this.state._dragDelayed=!0,Z(t),this.setTimeout(this.startDrag.bind(this),this.config.delay,t)},this.setStartState=t=>{const s=F(t,this.transform);this.updateSharedState(Y(t)),this.updateGestureState({...te(this,s,t),...j(this,t,!0),_pointerId:this.getEventId(t)}),this.updateGestureState(this.getMovement(s))},this.onDragStart=t=>{Nt(this.controller,t),!(!this.enabled||this.state._active)&&(this.setStartState(t),this.setPointerCapture(t),this.shouldPreventWindowScrollY?this.setUpWindowScrollDetection(t):this.config.delay>0?this.setUpDelayedDragTrigger(t):this.startDrag(t,!0))},this.onDragChange=t=>{if(this.state.canceled||!this.state._active||!this.isValidEvent(t)||this.state._lastEventType===t.type&&t.timeStamp===this.state.timeStamp)return;let s;if(document.pointerLockElement){const{movementX:c,movementY:f}=t;s=B(this.transform([c,f]),this.state.values)}else s=F(t,this.transform);const n=this.getKinematics(s,t);if(!this.state._dragStarted){if(this.state._dragDelayed){this.startDrag(t);return}if(this.shouldPreventWindowScrollY)if(!this.state._dragPreventScroll&&n.axis)if(n.axis==="x")this.startDrag(t);else{this.state._active=!1;return}else return;else return}const r=Y(t);this.updateSharedState(r);const i=j(this,t),l=N(n._movement);let{_dragIsTap:a}=this.state;a&&l>=se&&(a=!1),this.updateGestureState({...i,...n,_dragIsTap:a}),this.fireGestureHandler()},this.onDragEnd=t=>{if(Rt(this.controller,t),!this.isValidEvent(t)||(this.clean(),!this.state._active))return;this.state._active=!1;const s=this.state._dragIsTap,[n,r]=this.state.velocities,[i,l]=this.state.movement,[a,c]=this.state._intentional,[f,h]=this.config.swipeVelocity,[D,k]=this.config.swipeDistance,E=this.config.swipeDuration,w={...j(this,t),...this.getMovement(this.state.values)},m=[0,0];w.elapsedTime<E&&(a!==!1&&Math.abs(n)>f&&Math.abs(i)>D&&(m[0]=R(n)),c!==!1&&Math.abs(r)>h&&Math.abs(l)>k&&(m[1]=R(r))),this.updateSharedState({buttons:0}),this.updateGestureState({...w,tap:s,swipe:m}),this.fireGestureHandler(this.config.filterTaps&&s===!0)},this.clean=()=>{super.clean(),this.state._dragStarted=!1,this.releasePointerCapture(),Wt(this.controller,this.stateKey)},this.onCancel=()=>{this.state.canceled||(this.updateGestureState({canceled:!0,_active:!1}),this.updateSharedState({buttons:0}),pt(this.fireGestureHandler))},this.onClick=t=>{this.state._dragIsTap||t.stopPropagation()}}startDrag(t,s=!1){!this.state._active||this.state._dragStarted||(s||this.setStartState(t),this.updateGestureState({_dragStarted:!0,_dragPreventScroll:!0,cancel:this.onCancel}),this.clearTimeout(),this.fireGestureHandler())}addBindings(t){if(this.config.useTouch?(y(t,"onTouchStart",this.onDragStart),y(t,"onTouchMove",this.onDragChange),y(t,"onTouchEnd",this.onDragEnd),y(t,"onTouchCancel",this.onDragEnd)):(y(t,"onPointerDown",this.onDragStart),y(t,"onPointerMove",this.onDragChange),y(t,"onPointerUp",this.onDragEnd),y(t,"onPointerCancel",this.onDragEnd)),this.config.filterTaps){const s=this.controller.config.eventOptions.capture?"onClick":"onClickCapture";y(t,s,this.onClick)}}}function re(e,t){let s,n=[],r,i=!1;function l(...a){return i&&s===this&&t(a,n)||(r=e.apply(this,a),i=!0,s=this,n=a),r}return l}function L(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;let s,n,r;if(Array.isArray(e)){if(s=e.length,s!==t.length)return!1;for(n=s;n--!==0;)if(!L(e[n],t[n]))return!1;return!0}let i;if(typeof Map=="function"&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i=e.entries();!(n=i.next()).done;)if(!t.has(n.value[0]))return!1;for(i=e.entries();!(n=i.next()).done;)if(!L(n.value[1],t.get(n.value[0])))return!1;return!0}if(typeof Set=="function"&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i=e.entries();!(n=i.next()).done;)if(!t.has(n.value[0]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(r=Object.keys(e),s=r.length,s!==Object.keys(t).length)return!1;for(n=s;n--!==0;)if(!Object.prototype.hasOwnProperty.call(t,r[n]))return!1;if(typeof Element<"u"&&e instanceof Element)return!1;for(n=s;n--!==0;)if(!(r[n]==="_owner"&&e.$$typeof)&&!L(e[r[n]],t[r[n]]))return!1;return!0}return e!==e&&t!==t}function ie(e,t){try{return L(e,t)}catch(s){if((s.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw s}}function V(e={},t){const s={};for(const[n,r]of Object.entries(t))switch(typeof r){case"function":s[n]=r.call(s,e[n],n,e);break;case"object":s[n]=V(e[n],r);break;case"boolean":r&&(s[n]=e[n]);break}return s}const oe=180,ae=.15,le=.5,ce=50,ue=250,fe={threshold(e=0){return _(e)},rubberband(e=0){switch(e){case!0:return _(ae);case!1:return _(0);default:return _(e)}},enabled(e=!0){return e},triggerAllEvents(e=!1){return e},initial(e=0){return typeof e=="function"?e:_(e)},transform:!0},ft={...fe,axis:!0,lockDirection(e=!1){return e},bounds(e={}){if(typeof e=="function")return i=>ft.bounds(e(i));const{left:t=-1/0,right:s=1/0,top:n=-1/0,bottom:r=1/0}=e;return[[t,s],[n,r]]}},de=typeof window<"u"&&window.document&&window.document.createElement,he={enabled(e=!0){return e},domTarget:!0,window(e=de?window:void 0){return e},eventOptions({passive:e=!0,capture:t=!1}={}){return{passive:e,capture:t}},transform:!0},pe={...ft,useTouch(e=!0){return e&&st()},preventWindowScrollY(e=!1){return e},threshold(e,t,{filterTaps:s=!1,lockDirection:n=!1,axis:r=void 0}){const i=_(e,s?3:n||r?1:0);return this.filterTaps=s,i},swipeVelocity(e=le){return _(e)},swipeDistance(e=ce){return _(e)},swipeDuration(e=ue){return e},delay(e=0){switch(e){case!0:return oe;case!1:return 0;default:return e}}};function ge(e){return V(e,he)}function me(e={}){return V(e,pe)}function ve({domTarget:e,eventOptions:t,window:s,enabled:n,...r}){const i=ge({domTarget:e,eventOptions:t,window:s,enabled:n});return i.drag=me(r),i}function ye(e,t,s={}){const n=we(e),r=new Bt(n);return r.config=t,r.handlers=e,r.nativeRefs=s,gt()&&!t.manual&&(et(r.bind),mt(r.clean)),r}function we(e){const t=new Set;return e.drag&&t.add(T.get("drag")),e.wheel&&t.add(T.get("wheel")),e.scroll&&t.add(T.get("scroll")),e.move&&t.add(T.get("move")),e.pinch&&t.add(T.get("pinch")),e.hover&&t.add(T.get("hover")),t}function be(e,t={}){T.set("drag",ne);const s=tt();return s.value||(s.value=re(ve,ie)),ye({drag:e},s.value(t))}const Se={class:"flex flex-col items-center"},_e=["viewBox"],xe=g("defs",null,[g("filter",{id:"shadowButton",x:"-50%",height:"200%",width:"300%"},[g("feDropShadow",{dx:"0",dy:"3",stdDeviation:"3","flood-color":"#2225"})]),g("clipPath",{id:"mask",clipPathUnits:"objectBoundingBox"},[g("circle",{r:".5",cx:".5",cy:".5"})])],-1),Te=["transform"],De=["innerHTML"],Ie=["x","y","viewBox"],ke=["x","y","width","height"],Ee={class:"link"},Ce=["x1","x2","y1","y2","stroke"],Oe=["transform"],Pe={class:"mouse"},Me=["fill"],Ae={class:"arrows"},Le={class:"guests"},Ke=vt({__name:"SpacePlane",props:{pad:{type:Number,default:50},coord:{type:String,default:""}},emits:["user","enter","leave","chat","update:coord"],setup(e,{emit:t}){const{user:s}=Ot();Pt("deep");const{space:n,plane:r,pos:i,zoom:l,links:a,width:c,height:f,guests:h,guestCount:D,area:k,join:E,place:w,setStatus:m}=Mt({TIMEOUT:1e4});yt(D,(p,d)=>{p>d?t("enter"):t("leave")});const $=wt(p=>{w({x:p[0],y:p[1]}),t("update:coord",`${p[0]},${p[1]}`)},200);be(p=>{if(!(p.delta[0]&&p.delta[1])||I.ing)return;const[d,z]=p.delta;i[0]-=d,i[1]-=z,$(i)},{domTarget:r});const b=tt(),{drauu:P,draw:I,loadCanvas:dt}=At();return et(()=>{P.mount(b.value,b.value.parentElement),dt()}),bt(()=>{console.log("activated")}),St(()=>{console.log("deactivated")}),_t(()=>{P.unmount()}),(p,d)=>{const z=xt("space-draw");return v(),S("div",Se,[!o(n).joined&&o(s).is?(v(),S("div",{key:0,class:"text-2xl p-8 top-15vh cursor-pointer absolute rounded-3xl shadow-xl border-4",style:Tt({borderColor:o(s).color}),onClick:d[0]||(d[0]=u=>{o(E)()})},"Click anywhere to join the space",4)):Dt("",!0),W(z,{class:"z-500"}),(v(),S("svg",{class:"h-full w-full z-200 bg-dark-100 bg-opacity-5 touch-none cursor-grab active-cursor-grabbing",ref_key:"plane",ref:r,xmlns:"http://www.w3.org/2000/svg",version:"1.1",baseProfile:"full","font-family":"Commissioner , sans-serif","text-anchor":"middle","dominant-baseline":"middle",viewBox:`${-e.pad+o(i)[0]-o(c)/2} ${-e.pad+o(i)[1]-o(f)/2} ${o(c)*o(l)+2*e.pad} ${o(f)*o(l)+2*e.pad}`,onClick:d[3]||(d[3]=u=>{o(s).is||(o(s).auth=!0)})},[xe,g("text",{class:"text-xs","text-anchor":"end",fill:"currentColor",transform:`translate(${o(i)[0]+o(c)/2-10} ${o(i)[1]-o(f)/2+20})`},It(o(i)),9,Te),(v(!0),S(G,null,U(o(h),u=>(v(),S("g",{class:"opacity-90",key:u.draw,innerHTML:u.draw},null,8,De))),128)),(v(),S("svg",{class:kt(["opacity-70",{"pointer-events-none":!o(I).enabled,"touch-none":o(I).enabled}]),ref_key:"paper",ref:b,x:o(i)[0]-o(c)/2-e.pad,y:o(i)[1]-o(f)/2-e.pad,viewBox:`${-e.pad+o(i)[0]-o(c)/2} ${-e.pad+o(i)[1]-o(f)/2} ${o(c)+2*e.pad} ${o(f)+2*e.pad}`},null,10,Ie)),g("rect",{ref_key:"area",ref:k,x:o(i)[0]-o(c)/2,y:o(i)[1]-o(f)/2,rx:"12",width:o(c),height:o(f),fill:"none",stroke:"#3333","stroke-width":"1"},null,8,ke),g("g",Ee,[g("line",{x1:o(i)[0],x2:o(n).my.mouse.x,y1:o(i)[1],y2:o(n).my.mouse.y,stroke:o(s).color,"stroke-dasharray":"6"},null,8,Ce)]),g("g",{class:"pointer",transform:`translate(${o(i)[0]} ${o(i)[1]})`},[g("g",Pe,[g("circle",{style:{filter:"url(#shadowButton)"},fill:o(s).color,r:"8"},null,8,Me)])],8,Oe),g("g",Ae,[(v(!0),S(G,null,U(o(a),(u,M)=>(v(),K(o(Lt),{key:M,link:u,onUser:d[1]||(d[1]=A=>o(x).pub=A)},null,8,["link"]))),128))]),g("g",Le,[(v(!0),S(G,null,U(o(h),u=>{var M,A;return v(),K(o($t),Et({class:"cursor-pointer transition-all ease-out duration-600",key:u==null?void 0:u.pub},u,{style:{transform:`translate(${(M=u==null?void 0:u.pos)==null?void 0:M.x}px, ${(A=u==null?void 0:u.pos)==null?void 0:A.y}px)`},onUpdateStatus:d[2]||(d[2]=ht=>o(m)(ht))}),null,16,["style"])}),128))])],8,_e)),W(o(Ut),{class:"z-4000",open:!!o(x).pub,onClose:d[8]||(d[8]=u=>o(x).pub=null)},{default:Ct(()=>[(v(),K(o(zt),{class:"max-w-600px",key:o(x).pub,pub:o(x).pub,onUser:d[4]||(d[4]=u=>p.$emit("user",u)),onPost:d[5]||(d[5]=u=>p.$emit("post",String(o(Gt)(u)))),onChat:d[6]||(d[6]=u=>p.$emit("chat",o(x).pub)),onClose:d[7]||(d[7]=u=>o(x).pub=null)},null,8,["pub"]))]),_:1},8,["open"])])}}});export{Ke as default};