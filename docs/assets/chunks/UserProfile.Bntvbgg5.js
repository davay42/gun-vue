import{d as u,s as f,o as a,c as n,j as t,F as p,E as m,b as _,k as l,aC as v,aD as k,a0 as x}from"./framework.HF1qYBJ2.js";import{a as b,u as w,bb as h,bc as r}from"./components.BVdgfkYk.js";import"./theme.BDQwQt02.js";const F={class:"flex flex-col"},g={class:"flex flex-col p-2"},B={class:"flex items-center flex-wrap"},U=t("div",{class:"i-la-plus"},null,-1),y=t("div",{class:"p-1 text-sm"},"Add",-1),C=[U,y],K=u({__name:"UserProfile",setup(P){const{user:d}=b(),{account:i}=w(d.pub),o=f("");return($,e)=>(a(),n("div",F,[t("div",g,[(a(!0),n(p,null,m(l(i).profile,(s,c)=>(a(),_(l(h),{key:s,field:`${c}`,content:s},null,8,["field","content"]))),128)),t("div",B,[v(t("input",{class:"p-2 rounded-lg shadow-md dark-bg-dark-400","onUpdate:modelValue":e[0]||(e[0]=s=>o.value=s),placeholder:"New profile field",onKeydown:e[1]||(e[1]=x(s=>l(r)(o.value),["enter"]))},null,544),[[k,o.value]]),t("button",{class:"m-2 button items-center dark-bg-dark-400",onClick:e[2]||(e[2]=s=>l(r)(o.value))},C)])])]))}});export{K as default};
