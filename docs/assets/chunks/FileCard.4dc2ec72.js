import{F as n}from"./theme.7b41b406.js";import{a7 as i}from"./components.ff545abb.js";import{f as r,p as f,o as d,c as m,E as e,t,e as a}from"./framework.e76a7413.js";import"../app.1dbdb34a.js";const p={class:"p-2 border-1 gap-4 flex flex-col"},u={class:"flex flex-wrap gap-4"},_={class:"font-bold"},b={class:"text-sm"},h={class:"font-mono"},x=["src"],k={__name:"FileCard",props:{file:{type:Object,default:null}},setup(s){const l=s,o=r();f(async()=>{o.value=await l.file.blob()});const c=n(o);return(g,v)=>(d(),m("div",p,[e("div",u,[e("div",_,t(s.file.name),1),e("div",b,t(s.file.type),1),e("div",h,t(a(i)(s.file.length)),1)]),e("img",{class:"w-full",src:a(c)},null,8,x)]))}};export{k as default};