import{m as g,n as v,a as y,W as D,X as b,Y as k,Z as S,_ as w}from"./components.ff545abb.js";import{_ as C,f as B,o as I,c as L,E as s,t as l,N,e,r as V,L as _,V as E,W as O}from"./framework.e76a7413.js";import"../app.1dbdb34a.js";import"./theme.7b41b406.js";const R=t=>(E("data-v-bd8a1c3b"),t=t(),O(),t),W={class:"flex flex-col rounded-xl text-xl p-2 bg-light-800 dark-bg-dark-400"},j={class:"flex flex-wrap items-center"},z={class:"inline-flex text-sm gap-1"},F={class:"font-bold"},G=R(()=>s("div",{class:"flex-1"},null,-1)),J={__name:"DictDefCard",props:{hash:{type:String,default:""},authors:{type:Object,default:()=>({})}},setup(t){const c=t,h=g("light"),x=v(),{user:m}=y(),a=B();x.get("dict").get("#def").get(c.hash).once(o=>{a.value=JSON.parse(o)});const n=D(c.hash);return(o,P)=>{var r,d,i,u,p,f;return I(),L("div",W,[s("div",{class:"text-lg flex items-center flex-wrap",style:N([{"text-decoration-line":"underline"},{textDecorationStyle:(d=e(b)[(r=a.value)==null?void 0:r.part])==null?void 0:d.underline,textDecorationColor:e(h).hex(t.hash)}])},l((i=a.value)==null?void 0:i.text),5),s("div",j,[s("div",z,[s("div",F,l((u=a.value)==null?void 0:u.lang),1),s("p",null,l((p=a.value)==null?void 0:p.part),1)]),V(o.$slots,"default",{},void 0,!0),G,_(e(k),{links:e(n),type:"word"},null,8,["links"]),_(e(w),{hash:t.hash,type:"def",my:(f=e(n)[e(S).word])==null?void 0:f[e(m).pub]},null,8,["hash","my"])])])}}},$=C(J,[["__scopeId","data-v-bd8a1c3b"]]);export{$ as default};