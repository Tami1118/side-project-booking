import{J as m,r as d,D as o,M as D}from"./index-EXT9bJu_.js";const w=m("dateStore",()=>{const n={start:new Date,end:new Date},e=d({...n}),r=new Date;r.setDate(r.getDate()+1),e.value.end=r;const u=()=>{e.value={...n};const t=new Date;t.setDate(t.getDate()+1),e.value.end=t},s=o(()=>{const t=D.getLocalDateFormat(e.value.start),a=D.getLocalDateFormat(e.value.end);return{startDate:t,endDate:a}}),c=o(()=>s.value.startDate===s.value.endDate),l=o(()=>{const t=new Date(e.value.start),a=new Date(e.value.end);t.setHours(0,0,0,0),a.setHours(0,0,0,0);const g=a.getTime()-t.getTime();return Math.ceil(g/(1e3*60*60*24))});return{reserveDate:e,resetDate:u,reserveDateRange:s,sameDate:c,nightNum:l,setStorageDate:()=>{localStorage.setItem("storageDate",JSON.stringify(e.value))}}});export{w as u};
