import{s as l,o as r,c as d,j as c,t as p,a0 as v,a1 as b,e as u}from"./framework.2DHwbLKR.js";const y={key:0,class:"flex mb-2 items-center gap-4"},x=["contenteditable"],g={__name:"FormTitle",props:{text:{type:String,default:""},editable:{type:Boolean,default:!1}},emits:["update"],setup(t,{emit:f}){const m=f,o=l(""),a=l(!1);function i(s){m("update",s.target.innerText),s.target.blur(),a.value=!1}return(s,e)=>t.text||t.editable?(r(),d("div",y,[c("div",{class:"p-0",ref_key:"content",ref:o,contenteditable:t.editable,onFocus:e[0]||(e[0]=n=>a.value=!0),onBlur:e[1]||(e[1]=n=>i(n)),onKeydown:e[2]||(e[2]=v(b(n=>i(n),["prevent","stop"]),["enter"]))},p(t.text||""),41,x),t.editable&&!a.value?(r(),d("div",{key:0,class:"i-la-pen",onClick:e[3]||(e[3]=n=>o.value.focus())})):u("",!0)])):u("",!0)}};export{g as default};
