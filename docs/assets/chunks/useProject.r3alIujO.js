import{a as g,am as j,j as c,h as a,i as f,an as l,q as h}from"./components.vhzIzXJf.js";import{aj as d,h as i}from"./framework.2DHwbLKR.js";function w(u){const{user:r}=g(),e=d({id:j(6),title:u,type:"project",status:"new",public:!0,funding:!1,room:i(()=>c.pub),author:i(()=>r.pub)});async function n(s){const t=a(),o=t.user().get("projects").get(e.id).put(e,()=>{var p;e.public&&(t.user(c.pub).get("projects").get(e.id+"@"+r.pub).put(o,()=>{console.log("added project"),s&&(s==null||s())},{opt:{cert:(p=c.features)==null?void 0:p.projects}}),e.title="",e.id="")})}return{newProject:e,addProject:n}}function m(u,r,e){const s=a().user().get("projects").get(u);s.get(r).put(e,()=>{s.get("updated").put(Date.now())})}function b(u){const r=a(),e=d({id:"0",type:"event"});r.user(c.pub).get("projects").get(u).map().on(async(t,o)=>{o=="cover"&&f(t)?e[o]=await r.get("#cover").get(t).then():e[o]=t});function n(t,o){m(u.slice(0,-88),t,o)}async function s(t){const o=await h(t);o&&(r.get("#cover").get(o).put(t),n("cover",o))}return{project:e,updateField:n,updateCover:s}}async function P(u){var s;const r=a(),e=l(),{user:n}=g();if(u.includes(n.pub))r.user(c.pub).get("projects").get(u).put(null,void 0,{opt:{cert:(s=c.features)==null?void 0:s.projects}});else if(c.hosts[n.pub]){const t=await n.decrypt(c.hosts[n.pub].enc);e.user().auth(t,()=>{e.user().get("projects").get(u).put(null)})}console.error("Can't delete the project")}export{w as a,P as r,b as u};
