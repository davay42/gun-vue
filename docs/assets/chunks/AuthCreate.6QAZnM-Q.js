import{d as h,h as p,m as o,o as l,c as i,b as _,O as v,e as r,k as s,aE as C,aF as g,P as w}from"./framework.rP7snUOj.js";import{m as f,a as A,y as B,A as E,S as P,z as $}from"./components.lsXtGw5O.js";import"../app.xYDEA0S0.js";import"./theme.kNHa_nSU.js";const z=s("div",{class:"text-xl font-bold"},"Create a new account",-1),S=s("div",{class:"mb-4 mt-2"},"Tap the circle to generate a new key",-1),T={class:"flex flex-col"},U={class:"flex justify-center my-4"},V=s("div",{class:"i-la-undo text-2xl"},null,-1),j=[V],D=s("div",{class:"i-fad-random-1dice text-3xl"},null,-1),N=[D],I=h({__name:"AuthCreate",setup(F){const c=f("deep");f("light");const{user:d,auth:x}=A(),a=p(""),t=p(null),{history:b,undo:k,redo:H}=B(t);async function u(){t.value=await P.pair()}u();function y(){x(t.value,()=>w(()=>{$("name",a.value)}))}return(M,e)=>{var m;return o(d).is?r("",!0):(l(),i("div",{key:0,class:"flex flex-col items-center flex-1 p-2 bg-light-700 dark-bg-dark-200 rounded-3xl shadow-lg text-center p-4 transition duration-300ms ease-in",style:v({backgroundColor:o(c).hex(((m=t.value)==null?void 0:m.pub)||"")})},[z,S,t.value?(l(),_(o(E),{key:0,class:"cursor-pointer rounded-full shadow-xl border-8",pub:t.value.pub,size:200,style:v({borderColor:o(c).hex(t.value.pub)}),onClick:e[0]||(e[0]=n=>u())},null,8,["pub","style"])):r("",!0),s("div",T,[s("div",U,[o(b).length>2?(l(),i("button",{key:0,class:"m-2 button items-center",onClick:e[1]||(e[1]=n=>o(k)())},j)):r("",!0),s("button",{class:"m-2 button items-center",onClick:e[2]||(e[2]=n=>u())},N)]),C(s("input",{class:"p-4 rounded-2xl my-2 dark-bg-dark-200","onUpdate:modelValue":e[3]||(e[3]=n=>a.value=n),placeholder:"Enter your name or nickname"},null,512),[[g,a.value]]),t.value&&!o(d).is&&a.value?(l(),i("button",{key:0,class:"button w-full flex justify-center items-center",onClick:e[4]||(e[4]=n=>y())},"Authenticate")):r("",!0)])],4))}}});export{I as default};
