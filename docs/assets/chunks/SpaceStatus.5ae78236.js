import{x as s,o as h,c as g,e as c,E as x}from"./framework.e76a7413.js";const b=["width","height"],R=["cols","rows","disabled","value"],L={__name:"SpaceStatus",props:{content:{type:String,required:!0},maxRowLength:{type:Number,default:50},lineHeight:{type:Number,default:26},editable:{type:Boolean,default:!1}},emits:["update"],setup(n,{emit:d}){const e=n,o=s(()=>{var i;const t=e.content.length;if(t<1)return[];const a=Math.ceil(t/e.maxRowLength),r=[];for(let l=0;l<a;l++){const u=l*e.maxRowLength,f=u+e.maxRowLength;r.push((i=e.content)==null?void 0:i.slice(u,f))}return r}),m=s(()=>o.value.length<1?100:(Math.max(...o.value.map(a=>a.length))+2)*e.lineHeight*.42),w=s(()=>e.lineHeight+o.value.length*e.lineHeight);function p(t){d("update",t.target.value)}return(t,a)=>(h(),g("g",null,[(h(),g("foreignObject",{x:"-30",y:"20",width:c(m),height:c(w)*2},[x("textarea",{cols:n.maxRowLength,rows:c(o).length,disabled:!n.editable,onInput:p,value:n.content},null,40,R)],8,b))]))}};export{L as default};