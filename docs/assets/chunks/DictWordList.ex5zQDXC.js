import{o as a,c as i,j as n,I as p,w as k,k as e,b as l,e as $,T as D,aC as x,aD as b,aE as g,F as c,E as h,P as W,aM as B}from"./framework.HF1qYBJ2.js";import{a as E,a5 as T,_ as u,a2 as V,a1 as v}from"./components.BVdgfkYk.js";import"./theme.BDQwQt02.js";const N={class:"flex flex-col gap-2"},F={class:"flex gap-2"},L={class:"flex flex-wrap gap-2"},j={__name:"DictWordList",emits:["word","root","def"],setup(M){const{user:f}=E(),{input:d,found:C,linked:w,addWord:y}=T();return(r,t)=>(a(),i("div",N,[n("div",{class:"font-bold text-xl mb-2 cursor-pointer",onClick:t[0]||(t[0]=s=>r.$emit("root","words"))},"Words"),p(D,{name:"fade",mode:"out-in"},{default:k(()=>[e(u).def?(a(),l(e(V),{key:e(u).def,hash:e(u).def},null,8,["hash"])):$("",!0)]),_:1}),n("div",F,[x(n("input",{class:"p-2 rounded-lg flex-1 dark-bg-dark-400","onUpdate:modelValue":t[1]||(t[1]=s=>g(d)?d.value=s:null),placeholder:"Enter a word"},null,512),[[b,e(d)]]),n("button",{class:"button",onClick:t[2]||(t[2]=s=>e(f).is?e(y)():e(f).auth=!0)},"Add")]),n("div",L,[p(B,{name:"list"},{default:k(()=>[e(d)?(a(!0),i(c,{key:1},h(e(C),s=>(a(),l(e(v),{key:s.item.hash,style:W({opacity:1-s.score}),hash:s.item.hash,onDef:t[4]||(t[4]=o=>r.$emit("def",o)),onClick:o=>r.$emit("word",s.item.hash)},null,8,["style","hash","onClick"]))),128)):(a(!0),i(c,{key:0},h(e(w),(s,o)=>(a(),l(e(v),{key:o,hash:o,onDef:t[3]||(t[3]=m=>r.$emit("def",m)),onClick:m=>r.$emit("word",o)},null,8,["hash","onClick"]))),128))]),_:1})])]))}};export{j as default};
