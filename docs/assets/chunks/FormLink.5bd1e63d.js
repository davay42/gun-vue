import{_ as p,h as o,y as _,o as m,c as f,k as e,n as x,H as k,w as b,aN as h,aO as y,l as w,p as C,m as L}from"./framework.4eb5045b.js";import"../app.145f5e9a.js";import{U as g}from"./components.175bfd8d.js";import"./theme.9a7457db.js";const c=n=>(C("data-v-d9417bae"),n=n(),L(),n),I={class:"flex flex-wrap"},U=c(()=>e("div",{class:"i-la-link"},null,-1)),V=[U],$={class:"p-4 max-w-600px"},B={class:"flex items-center gap-4"},F=c(()=>e("div",{class:"i-la-link text-2xl"},null,-1)),N=c(()=>e("div",{class:"text-lg"},"Add a link",-1)),S={class:"button text-xl"},E={class:"button text-xl"},z={__name:"FormLink",emits:["update"],setup(n,{emit:r}){const s=o(),a=o(),i=o(),v=o(!1),d=o();return _(()=>{var u;a.value?(v.value=(u=i==null?void 0:i.value)==null?void 0:u.checkValidity(),v.value&&(d.value=a.value,r("update",a.value))):d.value=null}),(u,t)=>(m(),f("div",I,[e("button",{class:x(["button m-1",{active:d.value}]),onClick:t[0]||(t[0]=l=>s.value=!s.value)},V,2),k(w(g),{class:"mt-20",open:s.value,onClose:t[4]||(t[4]=l=>s.value=!1)},{default:b(()=>[e("div",$,[e("div",B,[F,N,e("button",S,[e("div",{class:"i-la-check",onClick:t[1]||(t[1]=l=>s.value=!1)})]),e("button",E,[e("div",{class:"i-la-trash-alt",onClick:t[2]||(t[2]=l=>{a.value=null,s.value=!1})})])]),h(e("input",{class:"text-sm p-4 my-4 dark-bg-dark-200",ref_key:"input",ref:i,"onUpdate:modelValue":t[3]||(t[3]=l=>a.value=l),type:"url",placeholder:"Paste a URL"},null,512),[[y,a.value]])])]),_:1},8,["open"])]))}},O=p(z,[["__scopeId","data-v-d9417bae"]]);export{O as default};
