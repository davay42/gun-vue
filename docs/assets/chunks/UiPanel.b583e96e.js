import{_ as r,o as a,G as c,H as n,at as u,E as i,L as f,az as p,c as s,I as l,N as m,r as b,aB as y,T as k,V as v,W as _}from"./framework.e76a7413.js";const B=e=>(v("data-v-84b63989"),e=e(),_(),e),h={class:"fixed w-full h-full top-0 left-0 z-500 flex flex-col items-end"},S=B(()=>i("div",{class:"i-la-times"},null,-1)),g=[S],w={__name:"UiPanel",props:{open:{type:Boolean,default:!1},offset:{type:String,default:""},closeButton:{type:Boolean,default:!0},back:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:x}){return(o,t)=>(a(),c(k,{name:"fade"},{default:n(()=>[u(i("div",h,[f(p,{name:"slide"},{default:n(()=>[e.open&&e.back?(a(),s("div",{class:"bg-dark-200 bg-opacity-30 w-full h-full absolute z-2 cursor-pointer backdrop-filter backdrop-blur-sm",key:"bg",onClick:t[0]||(t[0]=d=>o.$emit("close"))})):l("",!0),e.open?(a(),s("div",{class:"layer mr-2",key:"layer",style:m({top:e.offset||"8vh"})},[e.closeButton?(a(),s("button",{key:0,class:"button fixed right-4 top-4",onClick:t[1]||(t[1]=d=>o.$emit("close"))},g)):l("",!0),b(o.$slots,"default",{},void 0,!0)],4)):l("",!0)]),_:3})],512),[[y,e.open]])]),_:3}))}},$=r(w,[["__scopeId","data-v-84b63989"]]);export{$ as default};