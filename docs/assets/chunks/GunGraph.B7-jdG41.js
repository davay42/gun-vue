import{s as f,az as w,o as s,c as t,F as u,E as d,P as x,k as r,j as n,b as y,e as h,t as c,I as b,w as C,aA as g,aK as B,T as A}from"./framework.2DHwbLKR.js";import{o as _,h as z,t as D,A as G}from"./components.vhzIzXJf.js";import"./theme.CJUnx4L9.js";const I={class:"overflow-hidden m-4 rounded-xl break-all"},N=["onClick"],S={class:"item"},V={key:0},E={class:"font-bold"},F={class:"content"},q={__name:"GunGraph",setup(L){const l=f({}),p=_("light"),m=_("deep"),v=z(),k=setInterval(()=>{l.value={...v._.graph}},1e3);return w(()=>{clearInterval(k)}),(T,K)=>(s(),t("article",I,[(s(!0),t(u,null,d(l.value,(o,e)=>(s(),t("div",{class:"p-2px text-sm",key:e,style:x({backgroundColor:r(D).dark?r(m).hex(e):r(p).hex(e)})},[n("div",{class:"flex cursor-pointer",onClick:i=>o.show=!o.show},[e[0]=="~"?(s(),y(r(G),{key:0,pub:e.slice(1,88),size:20},null,8,["pub"])):h("",!0),n("div",S,c(e[0]=="~"?e.slice(88):e),1)],8,N),b(A,{name:"fade"},{default:C(()=>[o.show?(s(),t("section",V,[(s(!0),t(u,null,d(o,(i,a)=>g((s(),t("div",{class:"p-2",key:a},[n("div",E,c(a),1),n("div",F,c(i),1)])),[[B,a!="_"&&a!="show"]])),128))])):h("",!0)]),_:2},1024)],4))),128))]))}};export{q as default};
