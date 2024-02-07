import{L as w,B as V,_ as y}from"./BgWave-he714QPm.js";import{_ as k,a as C}from"./CitySelect.vue_vue_type_script_setup_true_lang-lGvDfhpj.js";import{d as $,s as j,a as u,b as p,c as f,f as t,e,u as l,w as v,n as c,q,h,g as F,F as S}from"./index-OCEZUO5G.js";import{u as U}from"./userStore-viLa1phf.js";import"./logo-white-B19EASvB.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./swal-MzZ19o4Z.js";const B={class:"grid grid-cols-1 md:grid-cols-2 bg-neutral-100 h-screen"},N=e("div",{class:"col hidden md:block"},[e("img",{class:"h-screen w-full object-cover object-center overflow-hidden",src:y})],-1),z={class:"col relative overflow-hidden"},E={class:"absolute top-0 left-0 pt-8 md:pt-18"},L={class:"h-full flex justify-center items-center px-5 lg:px-0"},M={class:"basis-full lg:basis-1/2 flex flex-col gap-10 duration-300"},R=e("div",{class:"text-bold z-10"},[e("div",{class:"text-primary-100 font-bold text-3h md:text-4 mb-2"},"享樂酒店，誠摯歡迎"),e("h1",{class:"text-white font-bold text-8 xl:text-12 duration-300"},"立即註冊")],-1),T={class:"flex justify-around items-center z-10"},D={class:"text-white flex flex-col items-center"},H=e("div",{class:""},"輸入信箱及密碼",-1),W=e("div",{class:"bg-white h-[1px] grow mx-3"},null,-1),A={class:"text-white flex flex-col items-center"},G=e("div",{class:""},"填寫基本資料",-1),I={key:0},J={class:"flex flex-col gap-4"},K={class:"flex flex-col gap-2"},O=e("label",{for:"email",class:"font-bold text-white"}," 電子信箱 ",-1),P={class:"flex flex-col gap-2"},Q=e("label",{for:"password",class:"font-bold text-white"}," 密碼 ",-1),X={class:"flex flex-col gap-2"},Y=e("label",{for:"password2",class:"font-bold text-white"}," 確認密碼 ",-1),Z=e("button",{class:"btn-primary font-bold btn text-center mt-10",type:"submit"}," 下一步 ",-1),ee={key:1},se={class:"flex flex-col gap-4"},te={class:"flex flex-col gap-2"},le=e("label",{for:"user-name",class:"font-bold text-white"},"姓名",-1),oe={class:"flex flex-col gap-2"},ae=e("label",{for:"user-phone",class:"font-bold text-white"},"手機號碼",-1),ne=e("button",{class:"btn-primary font-bold btn text-center mt-10",type:"submit"}," 完成註冊 ",-1),de={class:"text-white flex"},_e=$({__name:"SignupView",setup(ie){const x=U(),{signupStep:d,signupData:n,passwordConfirm:m}=j(x),b=x.signup;return(g,s)=>{const i=u("VField"),r=u("ErrorMessage"),_=u("VForm");return p(),f(S,null,[t(w),e("div",B,[N,e("div",z,[e("div",E,[t(V)]),e("div",L,[e("div",M,[R,e("div",T,[e("div",D,[e("span",{class:"text-center w-[32px] h-[32px] bg-primary-100 flex items-center justify-center rounded-full",onClick:s[0]||(s[0]=o=>d.value=1)},"1"),H]),W,e("div",A,[e("span",{class:"text-center w-[32px] h-[32px] bg-primary-100 flex items-center justify-center rounded-full",onClick:s[1]||(s[1]=o=>d.value=1)},"2"),G])]),l(d)===1?(p(),f("div",I,[t(_,{onSubmit:s[5]||(s[5]=o=>d.value=2)},{default:v(({errors:o})=>[e("div",J,[e("div",K,[O,t(i,{name:"email",id:"email",type:"email",rules:"required|email",class:c(["p-4 rounded-2",{"is-invalid":o.email}]),placeholder:"請輸入電子信箱",modelValue:l(n).email,"onUpdate:modelValue":s[2]||(s[2]=a=>l(n).email=a)},null,8,["class","modelValue"]),t(r,{class:"invalid-feedback text-red-600",name:"email"})]),e("div",P,[Q,t(i,{name:"密碼",id:"password",type:"password",rules:"required|min:8",class:c(["p-4 rounded-2",{"is-invalid":o.密碼}]),placeholder:"請輸入密碼",modelValue:l(n).password,"onUpdate:modelValue":s[3]||(s[3]=a=>l(n).password=a),ref:"password"},null,8,["class","modelValue"]),t(r,{class:"invalid-feedback text-red-600",name:"密碼"})]),e("div",X,[Y,t(i,{name:"確認密碼",id:"password2",type:"password",rules:"required|min:8|confirmed:@密碼",class:c(["p-4 rounded-2",{"is-invalid":o.確認密碼}]),placeholder:"請再輸入一次密碼",modelValue:l(m),"onUpdate:modelValue":s[4]||(s[4]=a=>q(m)?m.value=a:null),"data-vv-as":"password"},null,8,["class","modelValue"]),t(r,{class:"invalid-feedback text-red-600",name:"確認密碼"})])]),Z]),_:1})])):h("",!0),l(d)===2?(p(),f("div",ee,[t(_,{onSubmit:s[8]||(s[8]=o=>l(b)())},{default:v(({errors:o})=>[e("div",se,[e("div",te,[le,t(i,{name:"姓名",type:"text",id:"user-name",rules:"required|min:2",class:c(["p-4 rounded-2",{"is-invalid":o.姓名}]),placeholder:"請輸入姓名",modelValue:l(n).name,"onUpdate:modelValue":s[6]||(s[6]=a=>l(n).name=a)},null,8,["class","modelValue"]),t(r,{class:"invalid-feedback text-red-600",name:"姓名"})]),e("div",oe,[ae,t(i,{name:"手機",type:"phone",id:"user-phone",rules:"required|numeric",class:c(["p-4 rounded-2",{"is-invalid":o.手機}]),placeholder:"請輸入手機號碼",modelValue:l(n).phone,"onUpdate:modelValue":s[7]||(s[7]=a=>l(n).phone=a)},null,8,["class","modelValue"]),t(r,{class:"invalid-feedback text-red-600",name:"手機"})]),t(k),t(C)]),ne]),_:1})])):h("",!0),e("div",de,[F(" 已經有會員了嗎？ "),e("span",{class:"btn-text underline decoration-1 ms-2",onClick:s[9]||(s[9]=o=>g.$router.push("/login"))}," 立即登入 ")])])])])])],64)}}});export{_e as default};
