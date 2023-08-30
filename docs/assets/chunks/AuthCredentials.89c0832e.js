import{d as S,h as m,aU as g,aV as $,g as k,l as t,o as a,c as o,H as p,k as e,t as N,N as P,n as B,e as c,w as x,T,b as q,aS as V,r as j}from"./framework.4eb5045b.js";import{a as z,z as A,B as E,D,E as J}from"./components.175bfd8d.js";import"../app.145f5e9a.js";import"./theme.9a7457db.js";const O={key:0,class:"flex flex-col items-stretch pb-4 border-1 border-dark-100 border-opacity-10 max-w-120 mx-auto dark-bg-dark-200"},Q=e("div",{class:"mt-4 mx-6"},"Please make sure to safely store your cryptographic keypair to be able to use it again later",-1),U={key:0,class:"flex p-4 items-center bg-dark-100 bg-opacity-20 mt-2 shadow-inset"},F={key:0,class:"i-la-lock"},G={key:1,class:"i-la-unlock"},H={class:"text-sm"},K=e("div",{class:"text-m"},"Key Pair",-1),L={class:"flex flex-wrap"},R=e("div",{class:"i-la-share"},null,-1),Y=e("div",{class:"px-1"},"Share",-1),I=[R,Y],M=e("div",{class:"i-la-copy"},null,-1),W={key:0,class:"px-2"},X={key:1,class:"px-2"},Z=["href"],ee=e("div",{class:"i-la-link"},null,-1),se=e("div",{class:"px-2"},"Link",-1),te=[ee,se],ae=e("div",{class:"i-la-qrcode"},null,-1),oe=e("div",{class:"px-2"},"QR",-1),le=[ae,oe],ne=e("div",{class:"i-la-envelope-open-text"},null,-1),ie=e("div",{class:"px-2"},"Text",-1),re=[ne,ie],ce=e("div",{class:"i-la-file-code"},null,-1),de=e("div",{class:"px-2"},"JSON",-1),ue=[ce,de],ve={key:1,class:"flex w-full justify-center mt-4"},_e=["value"],be=S({__name:"AuthCredentials",emits:["close"],setup(pe,{emit:me}){const l=m("pass"),{user:v}=z();function _(r){l.value!=r?l.value=r:l.value=null}const{pass:i}=A(),{text:ke,copy:f,copied:h,isSupported:y}=g(),{share:b,isSupported:C}=$(),n=m(!0),u=k(()=>{var r;return n.value?(r=i==null?void 0:i.safe)==null?void 0:r.enc:JSON.stringify(v.pair())}),w=k(()=>n.value?i.links.pass:i.links.pair);return(r,s)=>t(v).is?(a(),o("div",O,[Q,p(t(E)),u.value?(a(),o("div",U,[e("div",{class:"flex flex-col w-34 items-center",style:P({color:n.value?"green":"red"})},[e("button",{class:"m-2 button text-2xl",onClick:s[0]||(s[0]=d=>n.value=!n.value)},[n.value?(a(),o("div",F)):(a(),o("div",G))]),e("div",H,N(n.value?"Encrypted":"Plain Text"),1),K],4),e("div",L,[t(C)?(a(),o("button",{key:0,class:B(["m-2 button items-center",{active:l.value=="pass"}]),onClick:s[1]||(s[1]=d=>t(b)({title:"Your key pair",text:u.value}))},I,2)):c("",!0),t(y)?(a(),o("button",{key:1,class:"m-2 button items-center",onClick:s[2]||(s[2]=d=>t(f)(u.value))},[M,p(T,{name:"fade"},{default:x(()=>[t(h)?(a(),o("div",W,"Copied!")):(a(),o("div",X,"Copy"))]),_:1})])):c("",!0),e("a",{class:"m-2 button items-center",href:w.value,target:"_blank",onClick:s[3]||(s[3]=d=>_("links"))},te,8,Z),e("button",{class:"m-2 button items-center",onClick:s[4]||(s[4]=d=>_("qr"))},le),e("button",{class:"m-2 button items-center",onClick:s[5]||(s[5]=d=>_("key"))},re),e("button",{class:"m-2 button items-center",onClick:s[6]||(s[6]=d=>{t(D)(u.value,"text/json",(t(v).name||"account")+".json",!1),l.value=null})},ue)])])):c("",!0),l.value?(a(),o("div",ve,[p(V,{name:"fade"},{default:x(()=>[l.value=="key"?(a(),o("textarea",{class:"p-4 text-sm flex-1 rounded-xl",key:"text",rows:"9",value:u.value},null,8,_e)):c("",!0),l.value=="qr"?(a(),q(t(J),{class:"max-w-600px",key:"qr",data:n.value?t(i).links.pass:t(i).links.pair},null,8,["data"])):c("",!0)]),_:1})])):c("",!0),j(r.$slots,"default")])):c("",!0)}});export{be as default};
