const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/jsQR.CJ-CnpOk.js","assets/chunks/components.DFZHOas0.js","assets/chunks/theme.Csbo3uRm.js","assets/chunks/framework.2DHwbLKR.js"])))=>i.map(i=>d[i]);
import{X as d,o as m,c as u,k as l}from"./framework.2DHwbLKR.js";function g(){return{processFile:_}}async function _(t,e){const n=await f(t),a=(await d(async()=>{const{default:o}=await import("./jsQR.CJ-CnpOk.js").then(s=>s.j);return{default:o}},__vite__mapDeps([0,1,2,3]))).default,i=a(n.data,n.width,n.height);console.log(i.data),e==null||e(i==null?void 0:i.data)}async function f(t){var e;if(/image.*/.test(t.type)){const n=new FileReader;n.readAsDataURL(t);const a=await c(n,"load");return h((e=a==null?void 0:a.target)==null?void 0:e.result)}else console.log("File is not an image")}async function h(t){if(!t)return;const e=document.createElement("img");return e.src=t,await c(e,"load"),p(e)}function p(t){const e=t.naturalWidth,n=t.naturalHeight;return w(t,e,n)}function w(t,e,n){const a=document.createElement("canvas"),i=a.getContext("2d");a.width=1920,a.height=1080;const o=Math.min(1,a.width/e,a.height/n),s=o*e,r=o*n;return i.drawImage(t,0,0,s,r),i.getImageData(0,0,s,r)}function c(t,e,n){let a,i;const o=new Promise((s,r)=>{a=s,i=r});return t.addEventListener(e,a),t.addEventListener(n,i),o.finally(()=>{t.removeEventListener(e,a),t.removeEventListener(n,i)}),o}const F={__name:"QrLoad",emits:["loaded"],setup(t,{emit:e}){const{processFile:n}=g();return(a,i)=>(m(),u("input",{id:"qr-input",type:"file",accept:"image/*",onChange:i[0]||(i[0]=o=>l(n)(o.target.files[0],s=>a.$emit("loaded",s)))},null,32))}};export{F as default};