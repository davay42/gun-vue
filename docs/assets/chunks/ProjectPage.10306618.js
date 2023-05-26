import{x as _,f as P,w as z,J as D,o as n,c as i,E as a,G as E,e,I as x,t as v,L as u,M as L,as as N,at as S}from"./framework.088f8093.js";import{a as G,F as H,ad as I,aA as q,aY as U,aZ as A,a_ as J}from"./components.845a6cfb.js";import"../app.bd6bdc69.js";import{q as O}from"./theme.3d7ce0ac.js";const Y={class:"flex flex-col max-w-65ch"},Z=["value"],K={class:"rounded p-2 bg-light-100 bg-opacity-80 dark-bg-dark-300 dark-bg-opacity-60 flex items-center"},Q={class:"flex flex-col"},R={class:"flex items-center gap-2"},W={class:"capitalize font-mono text-xs"},X={class:"px-2 px-1 bg-light-300 dark-bg-dark-300 rounded-lg font-mono text-xs"},ee={class:"px-2 px-1 bg-light-700 dark-bg-dark-700 rounded-lg font-mono text-xs mr-auto"},te=a("div",{class:"flex-1"},null,-1),oe={class:"flex flex-col gap-2 px-4 bg-light-200 dark-bg-dark-400 relative"},se=["innerHTML"],ae={class:"text-xs max-w-full overflow-scroll"},ue={__name:"ProjectPage",props:{path:{type:String,default:""}},emits:["gift","user"],setup(r,{emit:le}){const b=r,{user:$}=G(),M=H(),{project:s,updateField:d,updateCover:T}=I(b.path),l=_(()=>b.path.includes($.pub)),g=P(!1),c=P(s.content);z(()=>s.content,p=>{c.value=p});const B=O(d,1e3);return(p,t)=>{var m,f,k,y,h,F,j,w,C;const V=D("account-badge");return n(),i("div",Y,[a("div",{class:"p-2 relative",style:L({background:`url(${e(s).cover}) center`,backgroundColor:(m=e(s))==null?void 0:m.color,paddingTop:(f=e(s))!=null&&f.cover||(k=e(s))!=null&&k.color?"220px":"60px"})},[l.value?(n(),E(e(q),{key:0,class:"absolute top-2",onUpdate:t[0]||(t[0]=o=>e(T)(o))})):x("",!0),l.value?(n(),i("input",{key:1,class:"absolute top-4 right-4",type:"color",value:(y=e(s))==null?void 0:y.color,onInput:t[1]||(t[1]=o=>e(d)("color",o.target.value))},null,40,Z)):x("",!0),a("div",K,[a("div",Q,[a("div",R,[a("div",W,v((h=e(s))==null?void 0:h.type),1),a("div",X,v((F=e(s))==null?void 0:F.id),1),a("div",ee,v((j=e(s))==null?void 0:j.status),1)]),u(e(U),{class:"text-2xl font-bold",text:(w=e(s))==null?void 0:w.title,editable:l.value,onUpdate:t[2]||(t[2]=o=>e(d)("title",o))},null,8,["text","editable"]),u(e(U),{class:"text-md",text:(C=e(s))==null?void 0:C.description,editable:l.value,onUpdate:t[3]||(t[3]=o=>e(d)("description",o))},null,8,["text","editable"])]),te,u(V,{pub:r.path.slice(-87),onClick:t[4]||(t[4]=o=>p.$emit("user",r.path.slice(-87)))},null,8,["pub"])])],4),a("div",oe,[l.value?(n(),i("div",{key:0,class:"i-la-pen cursor-pointer text-2xl absolute top-2 right-2 z-2",onClick:t[5]||(t[5]=o=>g.value=!g.value)})):x("",!0),!g.value||!l.value?(n(),i("div",{key:1,class:"p-2 text-base prose prose-truegray dark-prose-light dark-bg-dark-400",innerHTML:e(M).render(c.value||"")},null,8,se)):N((n(),i("textarea",{key:2,class:"dark-bg-dark-400","onUpdate:modelValue":[t[6]||(t[6]=o=>c.value=o),t[7]||(t[7]=o=>e(B)("content",o))]},null,512)),[[S,c.value]]),a("pre",ae,v(Object.keys(e(s))),1)]),u(e(A),{path:r.path,enabled:!!e(s).funding,onEnable:t[8]||(t[8]=o=>e(d)("funding","true")),onGift:t[9]||(t[9]=o=>p.$emit("gift",o))},null,8,["path","enabled"]),u(e(J),{source:r.path},null,8,["source"])])}}};export{ue as default};