import{d as p,f,o,c as i,E as t,t as d,at as m,au as x,a2 as k}from"./framework.e76a7413.js";import{y as _,l as y}from"./components.5cea098c.js";import"../app.0201bdfc.js";import"./theme.10cdc4d6.js";const h={class:"p-2 flex items-center break-all flex-wrap"},b={class:"mr-2 font-bold"},g={class:"flex items-center flex-wrap"},w={key:0,class:"text-md flex items-center"},C={key:0,class:"p-0"},$=["href"],B=t("div",{class:"i-la-pen"},null,-1),S=[B],D={key:1,class:"p-1 flex items-center flex-1"},E={class:"-ml-16"},K=t("div",{class:"i-la-check"},null,-1),P=[K],U=t("div",{class:"i-la-times"},null,-1),V=[U],R=p({__name:"UserProfileField",props:{field:{type:String,default:""},content:{type:String,default:""}},setup(s){const c=s,a=f(!1),n=f(c.content);function r(){_(c.field,n.value),a.value=!1,n.value=""}function v(u){return y({exact:!0}).test(u)}return(u,e)=>(o(),i("div",h,[t("div",b,d(s.field),1),t("div",g,[a.value?(o(),i("div",D,[m(t("input",{class:"p-2 rounded-xl pr-16 dark-bg-dark-400","onUpdate:modelValue":e[1]||(e[1]=l=>n.value=l),type:"text",onKeydown:e[2]||(e[2]=k(l=>r(),["enter"]))},null,544),[[x,n.value]]),t("div",E,[t("button",{class:"p-1",type:"submit",onClick:e[3]||(e[3]=l=>r())},P),t("button",{class:"p-1",onClick:e[4]||(e[4]=l=>{n.value="",a.value=!1})},V)])])):(o(),i("div",w,[v(s.content)?(o(),i("a",{key:1,class:"font-bold underline",href:s.content,target:"_blank"},d(s.content),9,$)):(o(),i("div",C,d(s.content),1)),t("button",{class:"p-1",onClick:e[0]||(e[0]=l=>a.value=!0)},S)]))])]))}});export{R as default};