import{d as c,h as m,o,c as i,k as e,t as d,m as t,I as f,w as p,F as u,b,E as _,aJ as k}from"./framework.rP7snUOj.js";import{aB as h,aC as x,aD as g}from"./components.lsXtGw5O.js";import"../app.xYDEA0S0.js";import"./theme.kNHa_nSU.js";const v={class:"flex flex-col"},w={class:"flex p-4 bg-light-900 dark-bg-dark-200 rounded-xl mb-2 items-center cursor-pointer shadow-sm hover-shadow-md transition"},B={class:"text-lg font-bold"},C=e("div",{class:"flex-1"},null,-1),y={class:"mr-2 font-bold"},D={class:"flex flex-wrap bg-light-500 dark-bg-dark-200 rounded-xl p-2"},L=c({__name:"MateList",props:{pub:{type:String,default:"OKrDaDeD8VeA27d673RqlodSnebnaDq6Ci23Ys_ABWE.q8fI2lkxO46R8TMjeUeAf7I0yBS5mdH_Cb9_285Wkqk"}},emits:["browse"],setup(s){const r=h(s.pub);return m(!0),(l,j)=>(o(),i("div",v,[e("div",w,[e("div",B,d(s.pub==t(x).pub?"My mates":"Mates"),1),C,e("div",y,d(Object.keys(t(r)).length),1)]),e("div",D,[f(k,{name:"fade"},{default:p(()=>[(o(!0),i(u,null,_(t(r),(n,a)=>(o(),b(t(g),{key:a,emoji:n.emoji,back:n.back,to:a,from:s.pub,onClick:q=>l.$emit("browse",a)},null,8,["emoji","back","to","from","onClick"]))),128))]),_:1})])]))}});export{L as default};
