import{o as s,c as n,k as r,H as p,w as k,l as e,b as c,e as x,T as D,F as u,D as f,n as g,t as w,aN as $,aO as b,N,aS as B}from"./framework.4eb5045b.js";import{a as T,$ as V,Z as m,a0 as z,X as S,a1 as h}from"./components.175bfd8d.js";import"../app.145f5e9a.js";import"./theme.9a7457db.js";const E={class:"flex flex-col gap-2"},F={class:"flex w-full gap-2 flex-wrap"},L={key:0,class:"flex flex-1 gap-2 m-2"},U=["onClick"],A={class:"flex gap-2 flex-1"},G={class:"flex flex-wrap gap-2"},W={__name:"DictDefList",emits:["def","root"],setup(H){const{user:l}=T(),{def:i,addDef:v,found:C,linked:_}=V();return(d,o)=>(s(),n("div",E,[r("div",{class:"font-bold text-xl mb-2 cursor-pointer",onClick:o[0]||(o[0]=t=>d.$emit("root","defs"))},"Definitions"),p(D,{name:"fade",mode:"out-in"},{default:k(()=>{var t;return[(t=e(m))!=null&&t.word?(s(),c(e(z),{key:e(m).word,hash:e(m).word},null,8,["hash"])):x("",!0)]}),_:1}),r("div",F,[e(l).is?(s(),n("div",L,[(s(!0),n(u,null,f(e(S),(t,a)=>(s(),n("button",{class:g(["button capitalize text-xs",{active:e(i).part==a}]),key:t,onClick:y=>e(i).part=a},w(a),11,U))),128))])):x("",!0),r("div",A,[$(r("textarea",{class:"p-2 rounded-lg flex-auto dark-bg-dark-400","onUpdate:modelValue":o[1]||(o[1]=t=>e(i).text=t),placeholder:"Enter a definition"},null,512),[[b,e(i).text]]),r("button",{class:"button",onClick:o[2]||(o[2]=t=>e(l).is?e(v)():e(l).auth=!0)},"Add")])]),r("div",G,[p(B,{name:"list"},{default:k(()=>[e(i).text?(s(!0),n(u,{key:1},f(e(C),t=>(s(),c(e(h),{class:"cursor-pointer",key:t.item.hash,style:N({opacity:1-t.score}),hash:t.item.hash,onClick:a=>d.$emit("def",t.item.hash)},null,8,["style","hash","onClick"]))),128)):(s(!0),n(u,{key:0},f(e(_),(t,a)=>(s(),c(e(h),{class:"cursor-pointer",key:a,hash:a,onClick:y=>d.$emit("def",a)},null,8,["hash","onClick"]))),128))]),_:1})])]))}};export{W as default};