import{a as V,n as j,F as D,m as N,ax as H,aG as I,aL as T,ay as A,aI as Q,aM as Y,ab as q,aN as J}from"./components.ff545abb.js";import"../app.1dbdb34a.js";import{x as S,o as l,c as a,E as e,F as K,U as O,G as u,e as s,t as m,I as n,N as R,L as U}from"./framework.e76a7413.js";import"./theme.7b41b406.js";const W={class:"rounded-lg max-w-65ch flex flex-col items-stretch justify-center w-full overscroll-contain bg-light-200 dark-bg-dark-500"},X={class:"flex flex-wrap"},Z={class:"z-30 flex flex-wrap items-center w-full px-4 py-2 sticky top-0 shadow-xl filter grayscale-70 hover-grayscale-0 transition duration-400ms"},ss=e("div",{class:"p-0"},"#",-1),es=[ss],ts={class:"ml-1 break-all font-bold"},ls=e("div",{class:"flex-1"},null,-1),os=e("div",{class:"i-la-angle-left"},null,-1),as=[os],is=e("div",{class:"i-la-times"},null,-1),ns=[is],rs={class:"flex-1 flex flex-col items-stretch",style:{flex:"10 1 300px"}},ds={key:0,class:"z-1 max-w-100vw"},cs=["src"],us={class:"flex flex-wrap items-start w-full justify-start"},hs={class:"w-full flex flex-col items-stretch"},ms={class:"p-2"},fs=["src"],xs={key:1,class:"text-2xl font-bold m-2"},ks={key:3,class:"m-2"},ps=e("div",{class:"flex-auto"},null,-1),vs={class:"flex flex-wrap p-4 bg-dark-50 bg-opacity-25 dark-bg-dark-400 w-full items-center gap-1 text-sm"},ys={key:0,class:"i-la-file-download"},_s={key:1,class:"i-la-redo-alt animate-spin"},bs=["innerHTML"],Ps={__name:"PostPage",props:{tag:{type:String,default:""},hash:{type:String,default:""}},emits:["close","browse","user"],setup(d){const c=d;V(),j();const M=D();S(()=>N("light").hex(c.hash));const z=S(()=>N("deep").hex(c.hash)),{post:t,download:E,downloading:F}=H({hash:c.hash}),{posts:gs,backlinks:G}=I(c.hash);return(r,o)=>{var f,x,k,p,v,y,_,b,g,w,$,C,L,P;return l(),a("div",W,[e("div",X,[(l(!0),a(K,null,O(s(G),(i,h)=>(l(),u(s(T),{key:h,style:{flex:"1 1 220px"},hash:h,tag:d.tag,authors:i,back:!0,onUser:o[0]||(o[0]=B=>r.$emit("user",B)),onClick:B=>r.$emit("browse",h)},null,8,["hash","tag","authors","onClick"]))),128))]),e("div",Z,[e("div",{class:"hover-underline text-md cursor-pointer font-bold flex",onClick:o[1]||(o[1]=i=>r.$emit("close"))},es),e("div",ts,m((f=s(t))==null?void 0:f.title),1),ls,e("button",{class:"p-2",onClick:o[2]||(o[2]=i=>r.$router.back())},as),e("button",{class:"p-2",onClick:o[3]||(o[3]=i=>r.$emit("close"))},ns)]),e("div",rs,[(x=s(t))!=null&&x.cover||(k=s(t))!=null&&k.youtube||(p=s(t))!=null&&p.text?(l(),a("div",ds,[e("img",{class:"sticky top-0",src:s(t).cover},null,8,cs)])):n("",!0),e("div",us,[e("div",hs,[e("div",ms,[s(t).icon?(l(),a("img",{key:0,class:"w-20 h-20 rounded-full m-2",style:R([{flex:"0 1 40px"},{borderColor:s(z)}]),src:s(t).icon},null,12,fs)):n("",!0),(v=s(t))!=null&&v.title?(l(),a("div",xs,m((y=s(t))==null?void 0:y.title),1)):n("",!0),(_=s(t))!=null&&_.link?(l(),u(s(A),{key:2,url:(b=s(t))==null?void 0:b.link},null,8,["url"])):n("",!0),(g=s(t))!=null&&g.statement?(l(),a("div",ks,m((w=s(t))==null?void 0:w.statement),1)):n("",!0)]),ps,e("div",vs,[U(s(Q)),U(s(Y),{hash:d.hash},null,8,["hash"]),e("button",{class:"button flex items-center",onClick:o[4]||(o[4]=i=>s(E)())},[s(F)?(l(),a("div",_s)):(l(),a("div",ys))])])])]),($=s(t))!=null&&$.youtube?(l(),u(s(q),{key:1,class:"mb-6 shadow-xl flex-1",video:(C=s(t))==null?void 0:C.youtube},null,8,["video"])):n("",!0),(L=s(t))!=null&&L.text?(l(),a("div",{key:2,class:"text-md markdown-body m-1 px-4 py-4 leading-relaxed",innerHTML:s(M).render((P=s(t))==null?void 0:P.text)},null,8,bs)):n("",!0),(l(),u(s(J),{key:d.tag,tag:d.hash,header:!1,onBrowse:o[5]||(o[5]=i=>r.$emit("browse",i))},null,8,["tag"]))])])}}};export{Ps as default};