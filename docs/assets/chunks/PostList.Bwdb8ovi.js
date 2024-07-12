import{s as p,h as D,o as e,c as a,j as s,t as b,k as l,e as n,b as v,I as k,w as x,T as h,r as w,F as A,E as F,aA as L,P as N,aK as T,aI as U}from"./framework.2DHwbLKR.js";import{a as V,aJ as j,aK as E,aL as I}from"./components.vhzIzXJf.js";import{u as K}from"./usePosts.Bc8WYGK4.js";import{c as g}from"./useReactions.DC5EAhGa.js";import"./theme.CJUnx4L9.js";import"./useZip.CIvN632J.js";import"./useMd.CAoPU01z.js";import"./useGift.DQB8G44K.js";import"./composables.DXZhoCUW.js";const G={class:"flex flex-col z-10 items-start justify-items-stretch"},H={key:0,class:"flex flex-wrap items-center p-2 text-xl sticky z-100 top-0 shadow-lg bg-light-700 w-full"},J=s("div",{class:"flex-1"},null,-1),Q={class:"p-2 font-bold mx-2"},R={class:"flex flex-col bg-dark-50 bg-opacity-20 backdrop-filter backdrop-blur-md flex-1 p-2 w-full gap-8"},q={key:0,class:"p-2 flex flex-wrap z-300 text-sm bg-light-300 bg-opacity-40 dark-bg-dark-500 rounded-2xl m-2 flex-1",style:{order:"-2147483647",flex:"1000 100%"}},M={key:1,class:"flex flex-wrap gap-2"},O={key:0,class:"i-la-plus"},W={key:1,class:"i-la-times"},X=s("div",{class:"ml-2 mr-1"},"Add",-1),Y=s("label",{class:"button",title:"Upload feed",for:"import-feed"},[s("div",{class:"i-la-file-upload"}),s("div",{class:"ml-2 mr-1"},"Upload")],-1),Z={key:0,class:"i-la-eye"},tt={key:1,class:"i-la-eye-slash"},et=s("div",{class:"ml-2"},"Show hidden",-1),st={key:0,class:"i-la-file-download"},lt={key:1,class:"i-la-redo-alt animate-spin"},ot=s("div",{class:"ml-2 mr-1"},"Download",-1),at={key:1,class:"p-2 flex items-center gap-2",style:{order:"-2147483647",flex:"1000 100%"}},it={class:"flex flex-wrap gap-4 p-2"},yt={__name:"PostList",props:{tag:{type:String,default:""},header:{type:Boolean,default:!0}},emits:["close","browse","user"],setup(i,{emit:_}){const{user:u}=V(),C=i,$=_,{posts:m,backlinks:nt,countPosts:y,countBacklinks:dt,downloadPosts:P,downloading:S,uploadPosts:z}=K(C.tag),r=p();p(!1);const c=p(!1),B=D(()=>{const d={};for(let t in m){const o=g(m[t]);(c.value||o>0)&&(d[t]=m[t])}return d});return(d,t)=>(e(),a("div",G,[i.header?(e(),a("div",H,[s("div",{class:"text-xl ml-2 font-bold cursor-pointer",style:{flex:"1 100px"},onClick:t[0]||(t[0]=o=>d.$emit("close"))},"# "+b(i.tag),1),J,s("div",Q,b(l(y)),1)])):n("",!0),s("div",R,[l(u).pub?(e(),a("div",q,[i.header?(e(),v(l(j),{key:0})):n("",!0),l(u).pub?(e(),a("div",M,[s("button",{class:"button",onClick:t[1]||(t[1]=o=>r.value=!r.value)},[k(h,{name:"fade",mode:"out-in"},{default:x(()=>[r.value?(e(),a("div",W)):(e(),a("div",O))]),_:1}),X]),Y,s("button",{class:"button",onClick:t[2]||(t[2]=o=>c.value=!c.value)},[c.value?(e(),a("div",Z)):(e(),a("div",tt)),et]),0<l(y)?(e(),a("button",{key:0,class:"button",title:"Download feed",onClick:t[3]||(t[3]=o=>l(P)())},[l(S)?(e(),a("div",lt)):(e(),a("div",st)),ot])):n("",!0),w(d.$slots,"default")])):n("",!0),s("input",{class:"hidden",id:"import-feed",ref:"file",tabindex:"-1",type:"file",accept:".zip",multiple:"",onChange:t[4]||(t[4]=o=>l(z)(o.target.files))},null,544),k(h,{name:"fade"},{default:x(()=>[r.value?(e(),v(l(E),{key:0,tag:i.tag,onClose:t[5]||(t[5]=o=>r.value=!1)},null,8,["tag"])):n("",!0)]),_:1})])):n("",!0),l(u).pub?n("",!0):(e(),a("div",at,[s("button",{class:"button",onClick:t[6]||(t[6]=o=>l(u).auth=!0)},"Authorize to post here"),w(d.$slots,"default")]))]),s("div",it,[k(U,{name:"list"},{default:x(()=>[(e(!0),a(A,null,F(B.value,(o,f)=>L((e(),v(l(I),{class:"max-w-xl flex-1 shadow-xl",key:f,style:N({order:-l(g)(o),opacity:l(g)(o)>0?1:.3}),hash:f,tag:i.tag,authors:o,onClick:rt=>$("browse",f)},null,8,["style","hash","tag","authors","onClick"])),[[T,i.tag!=f]])),128))]),_:1})])]))}};export{yt as default};
