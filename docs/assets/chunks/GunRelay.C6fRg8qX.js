import{_ as m,s as b,o as r,c as d,j as t,t as a,e as u,P as c,k as e,I as p,w as _,a as x,aA as y,aB as k,p as w,l as h}from"./framework.2DHwbLKR.js";import{as as g,at as C,Y as S}from"./components.DFZHOas0.js";import"./theme.Csbo3uRm.js";const R=l=>(w("data-v-eb12b5b3"),l=l(),h(),l),I={class:"cursor-pointer relative text-left"},V=R(()=>t("div",{class:"i-carbon-bare-metal-server-01 text-xl -mt-1"},null,-1)),B={key:0,class:"ml-2 font-bold"},D={class:"p-4 min-w-60vw max-w-full"},N={class:"flex flex-col items-start"},P={class:"p-0 flex items-center flex-wrap w-full"},$={key:0,class:"info"},G={class:"p-0"},A={class:"num p-0"},L={class:"num p-0"},T={class:"num p-0"},U={class:"p-0"},j={__name:"GunRelay",props:{text:{type:String,default:""}},setup(l){const{relay:s,setPeer:v,resetPeer:f}=g(),i=b(!1);return(z,o)=>(r(),d("div",I,[t("button",{class:"flex",onClick:o[0]||(o[0]=n=>i.value=!0)},[V,l.text?(r(),d("div",B,a(l.text),1)):u("",!0),t("div",{class:"p-1 bottom-0 left-2 rounded-full transition duration-300ms ease-in-out opacity-50 absolute",style:c({backgroundColor:e(s).blink?"white":"black"})},null,4)]),p(e(S),{open:i.value,onClose:o[4]||(o[4]=n=>i.value=!1)},{default:_(()=>[t("div",D,[t("div",{class:"h-2 w-full mb-2 rounded-full transition-all duration-300 ease-in-out opacity-40",style:c({backgroundColor:e(s).blink?"white":"black"})},null,4),t("div",N,[t("div",P,[x(" Host: "),y(t("input",{class:"mx-1 p-2 rounded-lg flex-auto dark-bg-dark-800","onUpdate:modelValue":o[1]||(o[1]=n=>e(s).peer=n)},null,512),[[k,e(s).peer]]),t("button",{class:"button m-1",onClick:o[2]||(o[2]=n=>e(v)(e(s).peer))},"Set"),t("button",{class:"button m-1",onClick:o[3]||(o[3]=n=>e(f)())},"Reset")]),e(s).status!="offline"?(r(),d("div",$,[t("div",G,"Relay server is "+a(e(s).status)+" for "+a(e(s).age),1),t("div",A,"Delay: "+a(e(s).delay)+" ms",1),t("div",L,"Pulse drift: "+a(e(s).lag)+" ms",1),t("div",T,"Active wires: "+a(e(s).activeWires)+" / "+a(e(s).totalConnections),1),t("div",U,"Data storage is "+a(e(s).store?"enabled":"disabled"),1)])):u("",!0)]),p(e(C))])]),_:1},8,["open"])]))}},W=m(j,[["__scopeId","data-v-eb12b5b3"]]);export{W as default};