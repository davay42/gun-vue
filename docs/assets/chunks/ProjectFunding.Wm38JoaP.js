import{o as e,c as s,k as o,F as r,m as t,b,E as m,t as u,w as _,aE as w,aL as B,e as y}from"./framework.rP7snUOj.js";import{b8 as C,a as F,b9 as $,k as j,ap as E}from"./components.lsXtGw5O.js";import"../app.xYDEA0S0.js";import"./theme.kNHa_nSU.js";const S={class:"flex flex-col"},G={class:"text-xl my-4 p-2 flex items-center"},P=o("div",{class:"font-bold"},"Project funding",-1),D=o("div",{class:"flex-1"},null,-1),L={key:1,class:"text-xs"},V={key:0,class:"p-2 flex flex-col gap-4"},A={class:"p-2 w-full flex items-center gap-2"},U={class:"text-xl font-bold"},z={class:"text-xl"},H=o("div",{class:"opacity-50"},"by",-1),I={class:"flex flex-wrap gap-2"},J={class:"mr-2"},W={__name:"ProjectFunding",props:{path:{type:String,default:""},enabled:{type:Boolean,default:!1}},emits:["enable","gift","open"],setup(n,{emit:K}){const v=n,{gifts:M,collections:h}=C(v.path),{user:l}=F();return(f,d)=>(e(),s("div",S,[o("div",G,[P,D,n.enabled?(e(),b(t($),{key:1,gift:{project:n.path,to:n.path.slice(-87)},onSent:d[1]||(d[1]=a=>f.$emit("gift",a))},null,8,["gift"])):(e(),s(r,{key:0},[n.path.includes(t(l).pub)?(e(),s("button",{key:0,class:"button",onClick:d[0]||(d[0]=a=>f.$emit("enable"))},"Enable Funding")):(e(),s("div",L,"Funding not yet enabled by the author"))],64))]),n.enabled?(e(),s("div",V,[(e(!0),s(r,null,m(t(h),(a,p)=>{var x,g,k;return e(),s("div",{class:"flex flex-col gap-2 p-2 bg-dark-50 rounded-xl bg-opacity-10 shadow-xl",key:a},[o("div",A,[o("div",U,u(a.sum),1),o("div",z,u(p),1),H,o("div",I,[(e(!0),s(r,null,m(a.from,(i,c)=>(e(),b(t(j),{key:i,pub:c},{default:_(()=>[o("div",J,u(i)+" "+u(p),1)]),_:2},1032,["pub"]))),128))])]),(k=(g=(x=t(h))==null?void 0:x[p])==null?void 0:g.from)!=null&&k[t(l).pub]||n.path.includes(t(l).pub)?(e(!0),s(r,{key:0},m(a.list,(i,c)=>w((e(),b(t(E),{class:"cursor-pointer",key:c,hash:c,onClick:N=>f.$emit("open",c)},null,8,["hash","onClick"])),[[B,i.from==t(l).pub||i.to==t(l).pub]])),128)):y("",!0)])}),128))])):y("",!0)]))}};export{W as default};
