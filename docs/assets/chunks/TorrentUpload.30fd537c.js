import{d as F,h,g as L,aU as T,aV as V,o as l,c,k as e,t as p,l as n,$ as D,H as y,w as C,e as _,T as E,b as $,F as N,D as Q,x as R}from"./framework.4eb5045b.js";import{a5 as q,E as G,a6 as M,U as j,a7 as z,n as A,a as I}from"./components.175bfd8d.js";import"../app.145f5e9a.js";import"./theme.9a7457db.js";const J={class:"flex flex-col gap-4 p-4 break-all"},K={key:0,class:"p-2 flex flex-wrap gap-2 bg-light-100 dark-bg-dark-400 rounded cursor-pointer items-center"},O=e("div",{class:"font-bold"},"Share a file",-1),P=e("div",{class:"font-bold"},"Sharing a file:",-1),W={class:"text-md max-w-55ch"},X={class:"flex-1 font-mono text-xs min-w-10"},Y={class:"p-0"},Z={class:"flex flex-wrap gap-2 p-4 items-start"},ee={key:0,class:"flex flex-col gap-2"},se=e("div",{class:"text-xl"},"Sharing the torrent",-1),te={class:"font-mono text-sm"},ae=["href"],oe=e("div",{class:"i-la-link"},null,-1),le=e("div",{class:"p-0"},"Download URL",-1),ne=[oe,le],ie=e("div",{class:"i-la-copy"},null,-1),re={class:"p-0"},de=e("div",{class:"i-la-share"},null,-1),ue=e("div",{class:"p-0"}," Share",-1),ce=[de,ue],pe=e("div",{class:"i-la-qrcode"},null,-1),ve={class:"p-0"},fe=e("div",{class:"i-la-file"},null,-1),he={class:"p-0"},xe=F({__name:"TorrentUpload",emits:["uploaded"],setup(_e,{emit:S}){const t=h();h();const v=h(!1),m=h(!1),g=h(!1);function H(a){var i;const{torrent:s}=z((i=a==null?void 0:a.target)==null?void 0:i.files);A();const{user:d}=I();R(s,async u=>{t.value=u,v.value=!0;const o={infoHash:u.infoHash,length:u.length,name:u.name,author:d.pub};S("uploaded",o)})}const f=L(()=>{var s,d,i;if(!((s=t.value)!=null&&s.infoHash))return"";let a=new URL((d=window==null?void 0:window.location)==null?void 0:d.href);return`${a.protocol}//${a.hostname}${a.port?`:${a.port}`:""}/#/files/${(i=t.value)==null?void 0:i.infoHash}`}),k=T({source:f}),{share:U,isSupported:B}=V();return(a,s)=>{var d,i,u;return l(),c("div",J,[t.value?(l(),c("div",{key:1,class:"p-2 flex flex-wrap gap-2 bg-light-100 dark-bg-dark-400 rounded cursor-pointer items-center break-all",onClick:s[2]||(s[2]=o=>v.value=!v.value)},[P,e("div",W,p((d=t.value)==null?void 0:d.name),1),e("div",X,p((i=t.value)==null?void 0:i.infoHash),1),e("div",Y,p(n(q)((u=t.value)==null?void 0:u.length)),1),e("div",{class:"i-la-times",onClick:s[1]||(s[1]=D(o=>t.value=null,["prevent","stop"]))})])):(l(),c("label",K,[O,e("input",{class:"max-w-30",type:"file",accept:"image/*",onChange:s[0]||(s[0]=o=>H(o))},null,32)])),y(n(j),{open:v.value,onClose:s[7]||(s[7]=o=>v.value=!1)},{default:C(()=>{var o,b,x;return[e("div",Z,[t.value?(l(),c("div",ee,[se,e("div",te,p((o=t.value)==null?void 0:o.infoHash),1),e("a",{class:"gap-2 button underline font-bold break-all",href:f.value,target:"_blank"},ne,8,ae),n(k).isSupported.value?(l(),c("button",{key:0,class:"p-2 button gap-2",onClick:s[3]||(s[3]=r=>n(k).copy())},[ie,e("div",re,p((b=n(k))!=null&&b.copied.value?"Copied!":"Copy"),1)])):_("",!0),n(B)?(l(),c("button",{key:1,class:"p-2 button gap-2",onClick:s[4]||(s[4]=r=>{var w;return n(U)({title:(w=t.value)==null?void 0:w.name,url:f.value})})},ce)):_("",!0),e("button",{class:"button p-2 gap-2",onClick:s[5]||(s[5]=r=>m.value=!m.value)},[pe,e("div",ve,p(m.value?"Hide":"Show")+" QR ",1)]),e("button",{class:"button p-2 gap-2",onClick:s[6]||(s[6]=r=>g.value=!g.value)},[fe,e("div",he,p(g.value?"Hide":"Show")+" file ",1)])])):_("",!0),y(E,{name:"fade"},{default:C(()=>[f.value&&m.value?(l(),$(n(G),{key:0,data:f.value},null,8,["data"])):_("",!0)]),_:1}),g.value?(l(!0),c(N,{key:1},Q((x=t.value)==null?void 0:x.files,r=>(l(),$(n(M),{class:"flex-auto",key:r==null?void 0:r.name,file:r},null,8,["file"]))),128)):_("",!0)])]}),_:1},8,["open"])])}}});export{xe as default};