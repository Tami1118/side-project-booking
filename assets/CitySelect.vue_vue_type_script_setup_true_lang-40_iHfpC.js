import{d as w,s as D,o as I,v as x,w as C,c as r,e as i,f as d,C as _,K as h,j as v,F as y,m as g,t as b,u as $,n as z,A as S}from"./index-wIY0i8YO.js";import{u as N}from"./userStore-2EhaLznF.js";import{t as f}from"./taiwanCities-y_p8gqPp.js";const A=d("label",{for:"birthdate",class:"form-label"},"生日",-1),B={class:"flex gap-2"},F=["value"],L=["value"],M=["value"],G=w({__name:"DateSelect",setup(U){const k=N(),{birthdate:t,userInfo:u}=D(k);I(()=>{var e;console.log("birthdate",t.value),console.log("userInfo",u.value);let a=(((e=u.value)==null?void 0:e.birthday)??"").match(/^(\d{4})-(\d{2})-(\d{2})/);a&&(t.value.year=parseInt(a[1]),t.value.month=parseInt(a[2]),t.value.day=parseInt(a[3]),console.log(t.value))});const n=x(()=>{const l=t.value.year,a=t.value.month;return a===2?l%400===0||l%100!==0&&l%4===0?29:28:[4,6,9,11].includes(a)?30:31}),m=()=>{const l=n.value;t.value.day>l&&(t.value.day=l)};return C(()=>t.value.year,m),C(()=>t.value.month,m),(l,a)=>(r(),i("div",null,[A,d("div",B,[_(d("select",{"onUpdate:modelValue":a[0]||(a[0]=e=>v(t).year=e),class:"form-input",onChange:m},[(r(!0),i(y,null,g(Array.from({length:new Date().getFullYear()-1899},(e,p)=>p+1900).reverse(),e=>(r(),i("option",{key:e,value:e},b(e)+" 年",9,F))),128))],544),[[h,v(t).year]]),_(d("select",{"onUpdate:modelValue":a[1]||(a[1]=e=>v(t).month=e),class:"form-input",onChange:m},[(r(!0),i(y,null,g(Array.from({length:12},(e,p)=>p+1),e=>(r(),i("option",{key:e,value:e},b(e)+" 月",9,L))),128))],544),[[h,v(t).month]]),_(d("select",{"onUpdate:modelValue":a[2]||(a[2]=e=>v(t).day=e),class:"form-input"},[(r(!0),i(y,null,g(n.value,e=>(r(),i("option",{key:e,value:e},b(e)+" 日",9,M))),128))],512),[[h,v(t).day]])])]))}}),R={class:"flex flex-col space-y-1"},Y={class:""},Z={class:"flex space-x-2"},j=["value"],E=["value"],H=w({__name:"CitySelect",setup(U){const k=$(),t=N(),{selectedCity:u,selectedDistrict:n,detailedAddress:m,selectedZip:l,userInfo:a}=D(t),e=x(()=>f.map(c=>c.name)),p=x(()=>{const c=f.find(s=>s.name===u.value);return c?c.districts:[]}),V=()=>{n.value=p.value.length>0?p.value[0].name??"":""};return C(n,()=>{console.log(l.value,u.value,n.value);const c=f.find(s=>s.name===u.value);if(c){const s=c.districts.find(o=>o.name===n.value);s?l.value=Number(s.zip):l.value=NaN}else l.value=NaN;console.log(l.value)}),I(()=>{if(console.log(123131321321),k.fullPath==="/user"){console.log(a.value),l.value=a.value.address.zipcode,console.log(l.value);for(const c of f){const s=c.districts.find(o=>o.zip===l.value.toString());if(s){console.log(s),u.value=c.name,n.value=s.name;break}}m.value=a.value.address.detail.replace(u.value,""),m.value=m.value.replace(n.value,"")}else console.log(f[0]),u.value=f[0].name,n.value=f[0].districts[0].name}),console.log(123131321321),(c,s)=>(r(),i("div",R,[d("label",{for:"district",class:z(["form-label",v(k).name==="booking"?"text-neutral":"text-white"])},"地區",2),d("div",Y,[d("div",Z,[_(d("select",{"onUpdate:modelValue":s[0]||(s[0]=o=>S(u)?u.value=o:null),class:"form-input block w-full mt-1",onChange:V},[(r(!0),i(y,null,g(e.value,o=>(r(),i("option",{key:o,value:o},b(o),9,j))),128))],544),[[h,v(u)]]),_(d("select",{"onUpdate:modelValue":s[1]||(s[1]=o=>S(n)?n.value=o:null),class:"form-input block w-full mt-1"},[(r(!0),i(y,null,g(p.value,o=>(r(),i("option",{key:o.zip,value:o.name},b(o.name),9,E))),128))],512),[[h,v(n)]])])])]))}});export{G as _,H as a};
