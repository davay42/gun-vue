import{_ as r,o as a,b as c,w as n,aN as u,k as i,H as f,aS as p,c as s,e as l,N as m,r as b,aX as k,T as y,p as v,m as _}from"./framework.4eb5045b.js";const h=e=>(v("data-v-84b63989"),e=e(),_(),e),B={class:"fixed w-full h-full top-0 left-0 z-500 flex flex-col items-end"},S=h(()=>i("div",{class:"i-la-times"},null,-1)),w=[S],g={__name:"UiPanel",props:{open:{type:Boolean,default:!1},offset:{type:String,default:""},closeButton:{type:Boolean,default:!0},back:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:x}){return(o,t)=>(a(),c(y,{name:"fade"},{default:n(()=>[u(i("div",B,[f(p,{name:"slide"},{default:n(()=>[e.open&&e.back?(a(),s("div",{class:"bg-dark-200 bg-opacity-30 w-full h-full absolute z-2 cursor-pointer backdrop-filter backdrop-blur-sm",key:"bg",onClick:t[0]||(t[0]=d=>o.$emit("close"))})):l("",!0),e.open?(a(),s("div",{class:"layer mr-2",key:"layer",style:m({top:e.offset||"8vh"})},[e.closeButton?(a(),s("button",{key:0,class:"button fixed right-4 top-4",onClick:t[1]||(t[1]=d=>o.$emit("close"))},w)):l("",!0),b(o.$slots,"default",{},void 0,!0)],4)):l("",!0)]),_:3})],512),[[k,e.open]])]),_:3}))}},$=r(g,[["__scopeId","data-v-84b63989"]]);export{$ as default};