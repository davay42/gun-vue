import{I as m,a as x,b2 as R,bf as w,bg as C,D as $}from"./components.845a6cfb.js";import{x as g,o as e,c as n,e as o,I as _,E as t}from"./framework.088f8093.js";import"../app.bd6bdc69.js";import"./theme.3d7ce0ac.js";const B={class:"flex flex-wrap items-center gap-2"},E=t("div",{class:"i-la-tools"},null,-1),N=t("div",{class:"ml-2"},"Renew",-1),j=[E,N],I=t("div",{class:"i-la-download"},null,-1),S=t("div",{class:"ml-2"},"Keys",-1),V=[I,S],A={key:2,class:"flex flex-wrap py-4"},D=t("div",{class:"i-ion-enter-outline"},null,-1),F=t("div",{class:"ml-2"},"Enter",-1),J=[D,F],K=t("div",{class:"i-ion-exit-outline"},null,-1),L=t("div",{class:"ml-2"},"Leave",-1),O=[K,L],G={__name:"RoomActions",props:{pub:{type:String,default:m.pub}},setup(f){const r=f,{user:l}=x(),{room:i,leaveRoom:h,enterRoom:k}=R(r.pub),d=g(()=>r.pub?r.pub:m.pub);async function y(b){var a;const s=await l.decrypt(b);$(JSON.stringify(s),"application/json",`room-${(a=i.profile)==null?void 0:a.name}.json`)}return(b,s)=>{var a,v;return e(),n("div",B,[(a=o(i).hosts)!=null&&a[o(l).pub]?(e(),n("button",{key:0,class:"button",onClick:s[0]||(s[0]=p=>{var u,c;return o(w)((c=(u=o(i).hosts)==null?void 0:u[o(l).pub])==null?void 0:c.enc)})},j)):_("",!0),(v=o(i).hosts)!=null&&v[o(l).pub]?(e(),n("button",{key:1,class:"button",onClick:s[1]||(s[1]=p=>{var u,c;return y((c=(u=o(i).hosts)==null?void 0:u[o(l).pub])==null?void 0:c.enc)})},V)):_("",!0),d.value!=o(C).pub?(e(),n("div",A,[o(m).pub!==d.value?(e(),n("button",{key:0,class:"button",onClick:s[2]||(s[2]=p=>o(k)(d.value))},J)):(e(),n("button",{key:1,class:"button",onClick:s[3]||(s[3]=p=>o(h)())},O))])):_("",!0)])}}};export{G as default};