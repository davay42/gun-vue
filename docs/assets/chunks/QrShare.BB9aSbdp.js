import{aX as x,E as h,G as k,J as y,Y as C}from"./components.vhzIzXJf.js";import"./theme.CJUnx4L9.js";import{d as b,s as S,h as g,o,c as a,j as t,r as w,I as c,w as $,k as s,t as B,e as d}from"./framework.2DHwbLKR.js";const L={class:"flex"},N=t("div",{class:"i-ion-share-outline"},null,-1),V={class:"flex flex-col items-center mb-4"},j={class:"text-md mx-4 my-2 break-all max-w-420px"},E={class:"flex text-lg mt-2"},Q={key:0,class:"button text-lg font-normal items-center"},A={key:0,class:"ml-2"},D={key:1,class:"ml-2"},G={key:1,class:"button text-lg font-normal items-center"},I=t("div",{class:"ml-2"},"Send",-1),z=b({__name:"QrShare",setup(J){const r=x(),l=S(!1),{text:U,copy:u,copied:m,isSupported:p}=h(),{share:v,isSupported:f}=k(),n=g(()=>r.value.href+r.value.search);return(_,e)=>(o(),a("div",L,[t("button",{class:"button p-4 transition shadow-lg flex items-center justify-center",onClick:e[0]||(e[0]=i=>l.value=!l.value)},[N,w(_.$slots,"default")]),c(s(C),{class:"text-center",open:l.value,onClose:e[3]||(e[3]=i=>l.value=!1)},{default:$(()=>[c(s(y),{class:"max-w-full",data:n.value},null,8,["data"]),t("div",V,[t("div",j,B(n.value),1),t("div",E,[s(p)?(o(),a("button",Q,[t("div",{class:"i-la-copy",onClick:e[1]||(e[1]=i=>s(u)(n.value))}),s(m)?(o(),a("div",A,"Copied!")):(o(),a("div",D,"Copy"))])):d("",!0),s(f)?(o(),a("button",G,[t("div",{class:"i-la-share",onClick:e[2]||(e[2]=i=>s(v)({title:"Look at this",text:"A gun-vue page",url:n.value}))}),I])):d("",!0)])])]),_:1},8,["open"])]))}});export{z as default};
