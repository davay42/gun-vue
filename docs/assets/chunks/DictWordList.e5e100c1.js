import{o as a,c as i,k as n,H as p,w as k,l as e,b as l,e as $,T as D,aN as x,aO as b,aP as g,F as c,D as h,N,aS as W}from"./framework.4eb5045b.js";import{a as B,a4 as T,Z as u,a1 as V,a0 as v}from"./components.175bfd8d.js";import"../app.145f5e9a.js";import"./theme.9a7457db.js";const E={class:"flex flex-col gap-2"},F={class:"flex gap-2"},L={class:"flex flex-wrap gap-2"},G={__name:"DictWordList",emits:["word","root","def"],setup(R){const{user:m}=B(),{input:d,found:w,linked:C,addWord:y}=T();return(r,t)=>(a(),i("div",E,[n("div",{class:"font-bold text-xl mb-2 cursor-pointer",onClick:t[0]||(t[0]=s=>r.$emit("root","words"))},"Words"),p(D,{name:"fade",mode:"out-in"},{default:k(()=>[e(u).def?(a(),l(e(V),{key:e(u).def,hash:e(u).def},null,8,["hash"])):$("",!0)]),_:1}),n("div",F,[x(n("input",{class:"p-2 rounded-lg flex-1 dark-bg-dark-400","onUpdate:modelValue":t[1]||(t[1]=s=>g(d)?d.value=s:null),placeholder:"Enter a word"},null,512),[[b,e(d)]]),n("button",{class:"button",onClick:t[2]||(t[2]=s=>e(m).is?e(y)():e(m).auth=!0)},"Add")]),n("div",L,[p(W,{name:"list"},{default:k(()=>[e(d)?(a(!0),i(c,{key:1},h(e(w),s=>(a(),l(e(v),{key:s.item.hash,style:N({opacity:1-s.score}),hash:s.item.hash,onDef:t[4]||(t[4]=o=>r.$emit("def",o)),onClick:o=>r.$emit("word",s.item.hash)},null,8,["style","hash","onClick"]))),128)):(a(!0),i(c,{key:0},h(e(C),(s,o)=>(a(),l(e(v),{key:o,hash:o,onDef:t[3]||(t[3]=f=>r.$emit("def",f)),onClick:f=>r.$emit("word",o)},null,8,["hash","onClick"]))),128))]),_:1})])]))}};export{G as default};
