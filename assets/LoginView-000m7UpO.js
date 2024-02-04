import{d as g,s as v,z as f,o as h,a as m,b as w,c as V,f as o,e,w as S,n as p,u as a,p as y,N as M,q as k,g as N,F as C}from"./index-EXT9bJu_.js";import{L as E,B as F,_ as I}from"./BgWave-oJVzFGaE.js";import{u as J}from"./userStore-H5QsE48K.js";import"./logo-white-B19EASvB.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./swal-MzZ19o4Z.js";const O={class:"grid grid-cols-1 md:grid-cols-2 bg-neutral-100 h-screen"},B=e("div",{class:"col hidden md:block"},[e("img",{class:"h-screen w-full object-cover object-center overflow-hidden",src:I})],-1),j={class:"col relative overflow-hidden"},U={class:"h-full flex justify-center items-center px-5 lg:px-0"},$={class:"basis-full lg:basis-1/2 flex flex-col gap-10 duration-300"},q=e("div",{class:"text-bold z-10"},[e("div",{class:"text-primary-100 font-bold text-3h md:text-4 mb-2"},"享樂酒店，誠摯歡迎"),e("h1",{class:"text-white font-bold text-8 xl:text-12 duration-300"},"立即開始旅程")],-1),z={class:"flex flex-col gap-4"},L={class:"flex flex-col gap-2"},D=e("label",{for:"email",class:"font-bold text-white"}," 電子信箱 ",-1),R={class:"flex flex-col gap-2"},T=e("label",{for:"password",class:"font-bold text-white"}," 密碼 ",-1),H={class:"flex justify-between items-center"},W={class:"flex items-center"},A=e("label",{for:"remember",class:"font-bold text-3h md:text-4 text-white"},"記住帳號",-1),G=e("button",{type:"submit",class:"btn-primary font-bold btn text-center mt-10"}," 會員登入 ",-1),K={class:"text-white flex"},se=g({__name:"LoginView",setup(P){const d=J(),{loginData:s,rememberMe:i}=v(d),b=d.login,x=d.verifyEmail;return f(i,l=>{console.log(l),l?(localStorage.setItem("rememberMe_email",JSON.stringify(s.value.email)),localStorage.setItem("rememberMe",JSON.stringify(!0))):localStorage.setItem("rememberMe",JSON.stringify(!1))}),f(s,()=>{localStorage.setItem("rememberMe_email",JSON.stringify(s.value.email))},{deep:!0}),h(()=>{const l=localStorage.getItem("rememberMe");if(l!==null&&(i.value=JSON.parse(l)),i.value){const t=localStorage.getItem("rememberMe_email");t!==null&&(s.value.email=JSON.parse(t))}}),(l,t)=>{const c=m("VField"),u=m("ErrorMessage"),_=m("VForm");return w(),V(C,null,[o(E),e("div",O,[B,e("div",j,[o(F),e("div",U,[e("div",$,[q,o(_,{onSubmit:t[4]||(t[4]=n=>a(b)())},{default:S(({errors:n})=>[e("div",z,[e("div",L,[D,o(c,{name:"email",id:"email",type:"email",rules:"required|email",class:p(["p-4 rounded-2",{"is-invalid":n.email}]),placeholder:"請輸入電子信箱",modelValue:a(s).email,"onUpdate:modelValue":t[0]||(t[0]=r=>a(s).email=r)},null,8,["class","modelValue"]),o(u,{class:"invalid-feedback text-red-600",name:"email"})]),e("div",R,[T,o(c,{name:"密碼",id:"password",type:"password",rules:"required|min:8",class:p(["p-4 rounded-2",{"is-invalid":n.密碼}]),placeholder:"請輸入密碼",modelValue:a(s).password,"onUpdate:modelValue":t[1]||(t[1]=r=>a(s).password=r)},null,8,["class","modelValue"]),o(u,{class:"invalid-feedback text-red-600",name:"密碼"})]),e("div",H,[e("div",W,[y(e("input",{type:"checkbox",id:"remember",class:"p-4 rounded-2 me-2","onUpdate:modelValue":t[2]||(t[2]=r=>k(i)?i.value=r:null)},null,512),[[M,a(i)]]),A]),e("span",{class:"block btn-text text-3h md:text-4 underline decoration-1",onClick:t[3]||(t[3]=r=>a(x)())},"忘記密碼")])]),G]),_:1}),e("div",K,[N(" 還沒有會員嗎？ "),e("span",{class:"btn-text underline decoration-1 ms-2",onClick:t[5]||(t[5]=n=>l.$router.push("/signup"))}," 前往註冊 ")])])])])])],64)}}});export{se as default};
