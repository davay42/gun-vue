import{a as p,m as _,a2 as f,W as h,a3 as m,Y as k,Z as g,_ as y}from"./components.175bfd8d.js";import{_ as D,o as x,c as v,k as W,t as B,l as s,r as C,H as n}from"./framework.4eb5045b.js";import"../app.145f5e9a.js";import"./theme.9a7457db.js";const b={class:"flex items-center px-2 py-1 rounded-lg bg-light-700 dark-bg-dark-400 cursor-pointer capitalize"},L={class:"text-xl"},S={__name:"DictWordCard",props:{hash:{type:String,default:""}},emits:["def"],setup(e){const t=e,{user:c}=p();_("light");const{word:l}=f(t.hash),a=h(t.hash);return(o,r)=>{var i,d;return x(),v("div",b,[W("div",L,B(s(m)(s(l))),1),C(o.$slots,"default",{},void 0,!0),n(s(k),{links:s(a),onDef:r[0]||(r[0]=u=>o.$emit("def",u))},null,8,["links"]),n(s(y),{hash:e.hash,type:"word",my:(d=(i=s(a))==null?void 0:i[s(g).def])==null?void 0:d[s(c).pub]},null,8,["hash","my"])])}}},V=D(S,[["__scopeId","data-v-4f46251a"]]);export{V as default};