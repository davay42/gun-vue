import"./theme.Csbo3uRm.js";import{a as m,o as p,bt as _,M as f}from"./components.DFZHOas0.js";import{u as v}from"./useBackground.DzDDFnUg.js";import{d as b,h as k,k as e,o as a,c as l,j as t,I as i,t as x,P as r,e as g}from"./framework.2DHwbLKR.js";const h={class:"flex items-center"},y={class:"text-2xl mx-2 font-bold"},C=t("div",{class:"flex-1"},null,-1),B={key:0,class:"i-la-lock"},w={key:1,class:"i-la-unlock"},z=t("div",{class:"i-ion-exit-outline"},null,-1),N=[z],A=b({__name:"UserPanel",emits:["browse"],setup(U,{emit:V}){const{user:s,leave:c}=m();p("deep");const u=k(()=>v({pub:s.pub,size:600,light:.5,draw:"circles"}));return(M,o)=>{var n;return e(s).is?(a(),l("div",{key:0,class:"p-4 flex items-center w-full",style:r({...u.value})},[t("div",h,[i(e(_),{size:120}),t("div",y,x((n=e(s))==null?void 0:n.name),1)]),i(e(f),{pub:e(s).pub},null,8,["pub"]),C,t("div",{class:"p-1 m-1 rounded-full transition-all duration-300 ease-in-out",style:r({backgroundColor:e(s).blink?"white":"black"})},null,4),t("button",{class:"p-2 text-2xl",onClick:o[0]||(o[0]=d=>e(s).db.get("safe").get("saved").put(!e(s).safe.saved))},[e(s).safe.saved?(a(),l("div",B)):(a(),l("div",w))]),t("button",{class:"text-2xl ml-1 p-2",onClick:o[1]||(o[1]=d=>e(c)())},N)],4)):g("",!0)}}});export{A as default};