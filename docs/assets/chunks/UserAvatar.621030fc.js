import{d,o as t,c as a,H as i,l as e,w as m,k as f,$ as v}from"./framework.4eb5045b.js";import{a as b,bp as x,A as _,aA as k}from"./components.175bfd8d.js";import"../app.145f5e9a.js";import"./theme.9a7457db.js";const A={class:"flex flex-col relative items-center justify-center"},y={class:"text-2xl"},z={key:0,class:"i-la-camera"},C=d({__name:"UserAvatar",props:{size:{type:Number,default:120},pic:{type:Number,default:200}},setup(o){const l=o,{user:n}=b(),{remove:p,upload:c,avatar:u}=x();return(N,s)=>(t(),a("div",A,[i(e(_),{pub:e(n).pub,size:o.size},null,8,["pub","size"]),i(e(k),{class:"absolute",options:{picSize:l.pic,preserveRatio:!1},onUpdate:s[1]||(s[1]=r=>e(c)(r))},{default:m(()=>[f("div",y,[e(u)?(t(),a("div",{key:1,class:"i-la-trash-alt",onClick:s[0]||(s[0]=v(r=>e(p)(),["stop","prevent"]))})):(t(),a("div",z))])]),_:1},8,["options"])]))}});export{C as default};
