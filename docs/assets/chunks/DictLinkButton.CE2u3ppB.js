import{_ as o,k as t,o as i,c as l,n as r,P as c,a1 as m,e as u}from"./framework.2DHwbLKR.js";import{a as d,a6 as a}from"./components.DFZHOas0.js";import"./theme.Csbo3uRm.js";const y={__name:"DictLinkButton",props:{type:{type:String,default:""},hash:{type:String,default:""},my:Boolean},setup(e){const{user:s}=d();return(f,n)=>t(s).is?(i(),l("div",{key:0,class:r(["i-la-link link",{active:t(a)[e.type]==e.hash}]),style:c({color:e.my?"red":""}),onClick:n[0]||(n[0]=m(k=>t(a)[e.type]=t(a)[e.type]==e.hash?null:e.hash,["stop","prevent"]))},null,6)):u("",!0)}},B=o(y,[["__scopeId","data-v-21b7a062"]]);export{B as default};