import{_ as b,h as N,C as $,o as l,c as r,k as s,N as g,l as e,a as B,t as u,n as I,$ as P,e as C,F as V,D as F,b as z,w as O,H as R,p as W,m as j}from"./framework.4eb5045b.js";import{m as E,n as G,a as H,W as J,X as L,Z as d,a0 as M}from"./components.175bfd8d.js";import"../app.145f5e9a.js";import"./theme.9a7457db.js";const y=t=>(W("data-v-731d254c"),t=t(),j(),t),T={class:"flex flex-col mb-4"},U=y(()=>s("div",{class:"flex-1"},null,-1)),X=y(()=>s("div",{class:"i-la-times text-xl"},null,-1)),Z=[X],q={class:"flex"},A={class:"inline-flex text-sm gap-2"},K={class:"font-bold"},Q={class:"flex flex-wrap gap-2"},Y={__name:"DictDefPage",props:{hash:{type:String,default:""}},emits:["word","close"],setup(t){const p=t,f=E("light"),D=G(),{user:w}=H(),a=N();D.get("dict").get("#def").get(p.hash).once(o=>{a.value=JSON.parse(o)});const h=J(p.hash);return(o,n)=>{var x,v,_,m,k;const S=$("dict-link-list");return l(),r("div",{class:"flex flex-col rounded-xl text-xl p-4",style:g({backgroundColor:e(f).hex(t.hash)})},[s("div",T,[s("div",{class:"text-xl flex flex-wrap items-center",style:g([{"text-decoration-line":"underline"},{textDecorationStyle:(v=e(L)[(x=a.value)==null?void 0:x.part])==null?void 0:v.underline,textDecorationColor:e(f).hex(t.hash)}])},[B(u((_=a.value)==null?void 0:_.text),1),e(w).is?(l(),r("div",{key:0,class:I(["i-la-link link",{active:e(d).def==t.hash||e(h)[e(d).word]}]),onClick:n[0]||(n[0]=P(i=>e(d).def=e(d).def==t.hash?null:t.hash,["stop","prevent"]))},null,2)):C("",!0),U,s("button",{class:"cursor-pointer p-2",onClick:n[1]||(n[1]=i=>o.$emit("close"))},Z)],4),s("div",q,[s("div",A,[s("div",K,u((m=a.value)==null?void 0:m.lang),1),s("p",null,u((k=a.value)==null?void 0:k.part),1)])])]),s("div",Q,[(l(!0),r(V,null,F(e(h),(i,c)=>(l(),r("div",{class:"p-0",key:c},[Object.keys(i).length>0?(l(),z(e(M),{key:0,class:"cursor-pointer",hash:c,onClick:ee=>o.$emit("word",c)},{default:O(()=>[R(S,{links:{[c]:i},avatar:!0},null,8,["links"])]),_:2},1032,["hash","onClick"])):C("",!0)]))),128))])],4)}}},oe=b(Y,[["__scopeId","data-v-731d254c"]]);export{oe as default};
