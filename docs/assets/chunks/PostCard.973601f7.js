import{m as g,ax as N,ay as V,az as $}from"./components.175bfd8d.js";import"../app.145f5e9a.js";import{_ as z,g as D,C as T,o as a,c as o,k as c,N as b,l as t,e as l,t as v,H as w,b as U,r as j,p as A,m as E}from"./framework.4eb5045b.js";import"./theme.9a7457db.js";const H=s=>(A("data-v-452f279b"),s=s(),E(),s),L={class:"flex flex-wrap items-center max-w-full w-full backdrop-blur-lg rounded-2xl bg-light-100 bg-opacity-80 dark-bg-dark-400 dark-bg-opacity-80 backdrop-blur-sm backdrop-filter shadow-md",style:{flex:"14 1 620px"}},O={key:0,class:"p-0",style:{flex:"1 1 40px"}},R=["src"],q={key:1,class:"flex flex-col p-2 overflow-hidden",style:{flex:"10 1 280px"}},F={class:"px-2"},G={class:"flex items-center"},J={class:"flex flex-col"},K={key:0,class:"text-xl font-bold my-2"},M={key:1,class:"statement"},Q=H(()=>c("div",{class:"flex-1"},null,-1)),W={class:"flex items-center flex-wrap items-center mt-2 gap-2"},X={key:0,class:"i-la-youtube mx-1"},Y={key:1,class:"i-mdi-text-long mx-1"},Z={key:2,class:"flex gap-1 rounded-xl p-1 bg-dark-50 bg-opacity-20 flex-wrap items-center",style:{flex:"1 1 230px"}},ee={__name:"PostCard",props:{hash:{type:String,default:""},authors:{type:Object,default:()=>({})},tag:{type:[String,Boolean],default:""},back:Boolean,actions:{type:Boolean,default:!0}},emits:["user"],setup(s){const C=s;g("light");const S=g("deep"),{post:e}=N({hash:C.hash}),B=D(()=>e.icon||e.title||e.statement||e.link);return(n,d)=>{var i,r,u,h,p,m,f,x,_,k,y;const I=T("post-link");return a(),o("div",{class:"card",style:b({backgroundImage:`url(${((i=t(e))==null?void 0:i.cover)||((r=t(e))==null?void 0:r.raw)})`,backgroundColor:t(S).hex(s.hash)})},[c("div",{class:"p-0",style:b({paddingTop:(u=t(e))!=null&&u.cover||(h=t(e))!=null&&h.raw?"18em":"0"})},null,4),c("div",L,[(p=t(e))!=null&&p.icon?(a(),o("div",O,[c("img",{class:"w-20 max-h-20 rounded-full m-2",src:t(e).icon,width:"40px"},null,8,R)])):l("",!0),B.value?(a(),o("div",q,[c("div",F,[c("div",G,[c("div",J,[(m=t(e))!=null&&m.title?(a(),o("div",K,v(t(e).title),1)):l("",!0),(f=t(e))!=null&&f.statement?(a(),o("div",M,v(t(e).statement),1)):l("",!0)]),Q,w(I,{hash:s.hash},null,8,["hash"])])]),c("div",W,[(x=t(e))!=null&&x.youtube?(a(),o("div",X)):l("",!0),(_=t(e))!=null&&_.text?(a(),o("div",Y)):l("",!0),(k=t(e))!=null&&k.link?(a(),U(t(V),{key:2,url:(y=t(e))==null?void 0:y.link},null,8,["url"])):l("",!0),j(n.$slots,"default",{},void 0,!0)])])):l("",!0),s.actions?(a(),o("div",Z,[w(t($),{authors:s.authors,hash:s.hash,tag:s.tag,back:s.back,onUser:d[0]||(d[0]=P=>n.$emit("user",P))},null,8,["authors","hash","tag","back"])])):l("",!0)])],4)}}},le=z(ee,[["__scopeId","data-v-452f279b"]]);export{le as default};
