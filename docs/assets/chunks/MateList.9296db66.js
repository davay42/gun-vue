import{d as c,h as m,o,c as i,k as e,t as d,l as t,H as u,w as f,F as p,D as b,b as _,aS as k}from"./framework.4eb5045b.js";import{at as h,au as x,av as g}from"./components.175bfd8d.js";import"../app.145f5e9a.js";import"./theme.9a7457db.js";const v={class:"flex flex-col"},w={class:"flex p-4 bg-light-900 dark-bg-dark-200 rounded-xl mb-2 items-center cursor-pointer shadow-sm hover-shadow-md transition"},y={class:"text-lg font-bold"},B=e("div",{class:"flex-1"},null,-1),C={class:"mr-2 font-bold"},D={class:"flex flex-wrap bg-light-500 dark-bg-dark-200 rounded-xl p-2"},V=c({__name:"MateList",props:{pub:{type:String,default:"OKrDaDeD8VeA27d673RqlodSnebnaDq6Ci23Ys_ABWE.q8fI2lkxO46R8TMjeUeAf7I0yBS5mdH_Cb9_285Wkqk"}},emits:["browse"],setup(s){const r=h(s.pub);return m(!0),(l,j)=>(o(),i("div",v,[e("div",w,[e("div",y,d(s.pub==t(x).pub?"My mates":"Mates"),1),B,e("div",C,d(Object.keys(t(r)).length),1)]),e("div",D,[u(k,{name:"fade"},{default:f(()=>[(o(!0),i(p,null,b(t(r),(n,a)=>(o(),_(t(g),{key:a,emoji:n.emoji,back:n.back,to:a,from:s.pub,onClick:S=>l.$emit("browse",a)},null,8,["emoji","back","to","from","onClick"]))),128))]),_:1})])]))}});export{V as default};