import{o,c as i,j as n,I as p,w as k,k as e,b as l,e as $,T as x,aA as D,aB as b,ai as g,F as c,E as h,P as B,aI as W}from"./framework.2DHwbLKR.js";import{a as T,ad as V,a6 as u,aa as E,a9 as v}from"./components.DFZHOas0.js";import"./theme.Csbo3uRm.js";const N={class:"flex flex-col gap-2"},A={class:"flex gap-2"},F={class:"flex flex-wrap gap-2"},j={__name:"DictWordList",emits:["word","root","def"],setup(I){const{user:f}=T(),{input:d,found:w,linked:C,addWord:y}=V();return(r,t)=>(o(),i("div",N,[n("div",{class:"font-bold text-xl mb-2 cursor-pointer",onClick:t[0]||(t[0]=s=>r.$emit("root","words"))},"Words"),p(x,{name:"fade",mode:"out-in"},{default:k(()=>[e(u).def?(o(),l(e(E),{key:e(u).def,hash:e(u).def},null,8,["hash"])):$("",!0)]),_:1}),n("div",A,[D(n("input",{class:"p-2 rounded-lg flex-1 dark-bg-dark-400","onUpdate:modelValue":t[1]||(t[1]=s=>g(d)?d.value=s:null),placeholder:"Enter a word"},null,512),[[b,e(d)]]),n("button",{class:"button",onClick:t[2]||(t[2]=s=>e(f).is?e(y)():e(f).auth=!0)},"Add")]),n("div",F,[p(W,{name:"list"},{default:k(()=>[e(d)?(o(!0),i(c,{key:1},h(e(w),s=>(o(),l(e(v),{key:s.item.hash,style:B({opacity:1-s.score}),hash:s.item.hash,onDef:t[4]||(t[4]=a=>r.$emit("def",a)),onClick:a=>r.$emit("word",s.item.hash)},null,8,["style","hash","onClick"]))),128)):(o(!0),i(c,{key:0},h(e(C),(s,a)=>(o(),l(e(v),{key:a,hash:a,onDef:t[3]||(t[3]=m=>r.$emit("def",m)),onClick:m=>r.$emit("word",a)},null,8,["hash","onClick"]))),128))]),_:1})])]))}};export{j as default};