import{d as x,g as i,h as b,o as t,c as s,k as l,t as g,I as a,m as u,w as d,aJ as h,F as k,E as y,e as P,T}from"./framework.rP7snUOj.js";import{a as B,h as C,i as N}from"./components.lsXtGw5O.js";import"../app.xYDEA0S0.js";import"./theme.kNHa_nSU.js";const R={class:"flex flex-col"},U={class:"text-xl font-bold mb-2"},V={class:"flex flex-col gap-4"},w={key:0,class:"flex flex-col bg-light-800 dark-bg-dark-200 rounded-2xl gap-4"},D=x({__name:"AccountReactions",props:{pub:{default:"",type:String}},emits:["post"],setup(p,{emit:E}){const o=p,{user:m}=B(),f=i(()=>o.pub==m.pub),e=b(),r=C(o.pub),_=i(()=>r[e.value]||[]);return(F,n)=>(t(),s("div",R,[l("div",U,g(f.value?"My ":"")+" Posts",1),l("div",V,[a(u(N),{current:e.value,"onUpdate:current":n[0]||(n[0]=c=>e.value=c),reactions:u(r)},null,8,["current","reactions"]),a(T,{name:"fade"},{default:d(()=>[e.value?(t(),s("div",w,[a(h,{name:"fade"},{default:d(()=>[(t(!0),s(k,null,y(_.value,(c,v)=>(t(),s("div",{class:"p-0 relative",key:v}))),128))]),_:1})])):P("",!0)]),_:1})])]))}});export{D as default};
