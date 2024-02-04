import{J as k,r as b,y as O,K as V,L as C,D as _,d as E,s as w,a as q,u as a,b as A,c as P,e as o,t as f,f as B,q as $,h as L}from"./index-EXT9bJu_.js";import{u as N}from"./dateStore-53Tgv4kV.js";const Y=k("modalStore",()=>{const n=b(!1);return{isModalOpen:n,openModal:()=>{n.value=!0},closeModal:()=>{n.value=!1}}});function z(){return typeof window<"u"}function K(n){return z()&&n in window}function v({"min-width":n,min:e=n,max:s,raw:r}={}){return{min:e,max:s,raw:r}}function g(n,e=!0){return Array.isArray(n)?n.map(s=>{if(e&&Array.isArray(s))throw new Error("The tuple syntax is not supported for `screens`.");if(typeof s=="string")return{name:s.toString(),values:[{min:s,max:void 0}]};let[r,d]=s;return r=r.toString(),typeof d=="string"?{name:r,values:[{min:d,max:void 0}]}:Array.isArray(d)?{name:r,values:d.map(m=>v(m))}:{name:r,values:[v(d)]}}):g(Object.entries(n??{}),!1)}function R(n){return n.map(e=>e.raw!==void 0?e.raw:[e.min&&`(min-width: ${e.min})`,e.max&&`(max-width: ${e.max})`].filter(Boolean).join(" and ")).join(", ")}var Q={xs:"0px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px"};const T="$screens";function U(n){const e=C({screens:g(n||Q),queries:{},matches:{},hasSetup:!1});function s(){Object.entries(e.queries).forEach(([t,i])=>{e.matches[t]=i.matches})}function r(t){return _(()=>Object.keys(e.matches).filter(i=>e.matches[i]===!0&&t.hasOwnProperty(i)).map(i=>t[i]))}const d=_(()=>Object.keys(e.matches).filter(t=>e.matches[t]));function m(t,i){return _(()=>{const l=p.value;return l&&t.hasOwnProperty(l)?t[l]:i})}const p=_(()=>{const t=d.value;return t.length?t[t.length-1]:""});function h(){Object.values(e.queries).forEach(t=>t.removeEventListener("change",s)),e.queries={},e.matches={}}return!e.hasSetup&&K("matchMedia")&&(h(),e.queries=e.screens.reduce((t,{name:i,values:l})=>{const c=window.matchMedia(R(l));return c.addEventListener("change",s),t[i]=c,t},{}),s(),e.hasSetup=!0),{matches:e.matches,list:d,mapList:r,current:p,mapCurrent:m,cleanup:h}}function F(n,e){const s=U(n);return O((e==null?void 0:e.injectKey)||T,s),V(()=>s.cleanup()),s}const H={key:0,class:"fixed top-0 left-0 w-full h-full bg-neutral-100/50 backdrop-blur-sm z-50"},I={class:"container mx-auto h-full flex justify-center items-center"},J={class:"w-full max-w-[740px]"},G={class:"bg-white border border-neutral-40 rounded-5 overflow-hidden z-10"},W={class:"p-6 md:p-8 flex flex-col gap-10"},X={class:"hidden md:flex md:items-center"},Z={class:"w-5/12"},ee={class:"text-6 font-bold"},te={class:"text-neutral-80"},se={class:"w-7/12 flex gap-2"},ne={class:"grow border border-neutral-100 rounded-2 p-4 font-500"},oe=o("p",{class:"text-3"},"入住",-1),re={class:"text-neutral-100"},ae={class:"grow border border-neutral-100 rounded-2 p-4 font-500"},ie=o("p",{class:"text-3"},"退房",-1),de={class:"text-neutral-100"},le={class:"hidden md:flex justify-between md:justify-end gap-4"},ce=["disabled"],pe=E({__name:"BookingDatePick",setup(n){const e=N(),{reserveDate:s,reserveDateRange:r,nightNum:d,sameDate:m}=w(e),p=e.resetDate,h=e.setStorageDate,t=Y(),{isModalOpen:i}=w(t),l=t.closeModal,{mapCurrent:c}=F({xs:"0px",sm:"640px",md:"768px",lg:"1024px"}),y=b("gray"),D=c({md:2,lg:2},1),S=c({md:1,lg:1},2),M=c({md:"center",lg:"center"},"left");return(ue,u)=>{const j=q("VDatePicker");return a(i)?(A(),P("div",H,[o("div",I,[o("div",J,[o("div",G,[o("div",W,[o("div",X,[o("div",Z,[o("p",ee,f(a(d))+" 晚",1),o("p",te,f(a(r).endDate)+" - "+f(a(r).startDate),1)]),o("div",se,[o("div",ne,[oe,o("p",re,f(a(r).startDate),1)]),o("div",ae,[ie,o("p",de,f(a(r).endDate),1)])])]),B(j,{modelValue:a(s),"onUpdate:modelValue":u[0]||(u[0]=x=>$(s)?s.value=x:null),modelModifiers:{range:!0},mode:"date",color:y.value,columns:a(D),rows:a(S),"title-position":a(M),masks:{title:"YYYY 年 MMM"},"min-date":new Date,expanded:"expanded",borderless:""},null,8,["modelValue","color","columns","rows","title-position","min-date"]),o("div",le,[o("button",{class:"btn hover:bg-neutral-40",onClick:u[1]||(u[1]=x=>a(p)())},"清除日期"),o("button",{class:"btn btn-primary",onClick:u[2]||(u[2]=x=>(a(l)(),a(h)())),disabled:a(m)},"確定日期",8,ce)])])])])])])):L("",!0)}}});export{pe as _,Y as u};
