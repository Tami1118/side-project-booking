import{d as F,s as $,r as z,b as m,e as w,f as g,h as l,g as e,j as c,c as a,i as V,n,z as r,k as U,B as L,M,t as N,F as B}from"./index-D7joAqCD.js";import{_ as E,a as R}from"./bgwave-zj1l6dP5.js";import{L as D}from"./LoginHeader-fd2IUOn7.js";import{_ as P,a as T}from"./CitySelect.vue_vue_type_script_setup_true_lang-0cOKxBs8.js";import{u as A}from"./userStore-B-xb6qbS.js";import"./logo-white-B19EASvB.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./taiwanCities-y_p8gqPp.js";import"./swal-jtAPSmEf.js";const H={class:"bg-neutral"},G={class:"flex overflow-hidden"},I=e("div",{class:"hidden lg:w-1/2 shrink-0 lg:block"},[e("img",{src:E,class:"h-full w-full object-cover"})],-1),J={class:"w-full lg:w-1/2 shrink-0 flex relative"},K=e("div",{class:"absolute top-0 left-0 w-full pt-8 z-10"},[e("img",{src:R,class:"w-full",alt:"bg wave"})],-1),O={class:"w-full px-5 lg:px-0 py-6 xl:py-0 flex justify-center items-center z-20"},Q={class:"w-full lg:w-2/3 xl:w-1/2 mx-auto flex flex-col gap-10 duration-300"},W=e("div",{class:"font-bold"},[e("h1",{class:"text-primary-100 text-3h md:text-4 mb-2"},"享樂酒店，誠摯歡迎"),e("p",{class:"text-white text-8 xl:text-12"},"立即註冊")],-1),X={class:"flex justify-around items-center z-10"},Y={class:"text-white flex flex-col items-center"},Z=e("div",{class:"bg-white h-[1px] grow mx-3"},null,-1),ee={class:"text-white flex flex-col items-center"},se={key:0},le={class:"flex flex-col gap-4"},te={class:"flex flex-col gap-2"},oe=e("label",{for:"email",class:"font-bold text-white"},"電子信箱",-1),ae={class:"flex flex-col gap-2"},ne=e("label",{for:"password",class:"font-bold text-white"},"密碼",-1),de={class:"flex flex-col gap-2"},ie=e("label",{for:"password2",class:"font-bold text-white"},"確認密碼",-1),re=e("button",{type:"submit",class:"btn btn-primary mt-10 disabled:bg-neutral-40 w-full"}," 下一步 ",-1),ue={key:1},me={class:"flex flex-col gap-4"},ce={class:"flex flex-col gap-2"},pe=e("label",{for:"user-name",class:"font-bold text-white"},"姓名",-1),fe={class:"flex flex-col gap-2"},xe=e("label",{for:"user-phone",class:"font-bold text-white"},"手機號碼",-1),_e={for:"remember",class:"flex items-center text-white mb-0"},be=["disabled"],he={class:"text-white flex"},Fe=F({__name:"SignupView",setup(ve){const y=A(),S=y.signup,{signupStep:u,passwordConfirm:p,detailedAddress:f,signupLoading:k,signupName:x,signupEmail:_,signupPassword:b,signupPhone:h}=$(y),v=z(!1);return(we,s)=>{const d=m("VField"),i=m("ErrorMessage"),C=m("VForm"),j=m("font-awesome-icon"),q=m("RouterLink");return w(),g(B,null,[l(D),e("div",H,[e("div",G,[I,e("div",J,[K,e("div",O,[e("div",Q,[W,e("div",X,[e("div",Y,[e("span",{class:"text-center w-8 h-8 bg-primary-100 flex items-center justify-center rounded-full",onClick:s[0]||(s[0]=o=>u.value=1)},"1"),c(" 輸入信箱及密碼 ")]),Z,e("div",ee,[e("span",{class:"text-center w-8 h-8 bg-primary-100 flex items-center justify-center rounded-full",onClick:s[1]||(s[1]=o=>u.value=1)},"2"),c(" 填寫基本資料 ")])]),a(u)===1?(w(),g("div",se,[l(C,{onSubmit:s[5]||(s[5]=o=>u.value=2)},{default:V(({errors:o})=>[e("div",le,[e("div",te,[oe,l(d,{name:"email",id:"email",type:"email",rules:"required|email",class:n(["form-input",{"border border-red-600":o.email}]),placeholder:"hello@exsample.com",modelValue:a(_),"onUpdate:modelValue":s[2]||(s[2]=t=>r(_)?_.value=t:null)},null,8,["class","modelValue"]),l(i,{class:"text-red-600",name:"email"})]),e("div",ae,[ne,l(d,{name:"密碼",id:"password",type:"password",rules:"required|min:8",class:n(["form-input",{"border border-red-600":o.密碼}]),placeholder:"請輸入密碼",modelValue:a(b),"onUpdate:modelValue":s[3]||(s[3]=t=>r(b)?b.value=t:null),ref:"password"},null,8,["class","modelValue"]),l(i,{class:"text-red-600",name:"密碼"})]),e("div",de,[ie,l(d,{name:"確認密碼",id:"password2",type:"password",rules:"required|min:8|confirmed:@密碼",class:n(["form-input",{"border border-red-600":o.確認密碼}]),placeholder:"請再輸入一次密碼",modelValue:a(p),"onUpdate:modelValue":s[4]||(s[4]=t=>r(p)?p.value=t:null),"data-vv-as":"password"},null,8,["class","modelValue"]),l(i,{class:"text-red-600",name:"確認密碼"})])]),re]),_:1})])):U("",!0),a(u)===2?(w(),g("div",ue,[l(C,{onSubmit:s[10]||(s[10]=o=>a(S)())},{default:V(({errors:o})=>[e("div",me,[e("div",ce,[pe,l(d,{name:"姓名",type:"text",id:"user-name",rules:"required|min:2",class:n(["form-input",{"border border-red-600":o.姓名}]),placeholder:"請輸入姓名",modelValue:a(x),"onUpdate:modelValue":s[6]||(s[6]=t=>r(x)?x.value=t:null)},null,8,["class","modelValue"]),l(i,{class:"text-red-600",name:"姓名"})]),e("div",fe,[xe,l(d,{name:"手機號碼",type:"tel",id:"user-phone",rules:"required|numeric|min:10|mobile",class:n(["form-input",{"border border-red-600":o.手機號碼}]),placeholder:"請輸入手機號碼",modelValue:a(h),"onUpdate:modelValue":s[7]||(s[7]=t=>r(h)?h.value=t:null)},null,8,["class","modelValue"]),l(i,{class:"text-red-600",name:"手機號碼"})]),l(P),l(T),e("div",null,[l(d,{name:"詳細地址",type:"text",rules:"required",modelValue:a(f),"onUpdate:modelValue":s[8]||(s[8]=t=>r(f)?f.value=t:null),class:n(["form-input",{"border border-red-600":o.詳細地址}]),placeholder:"請輸入詳細地址"},null,8,["modelValue","class"]),l(i,{class:"text-red-600",name:"詳細地址"})]),e("label",_e,[L(e("input",{type:"checkbox",id:"remember","onUpdate:modelValue":s[9]||(s[9]=t=>v.value=t)},null,512),[[M,v.value]]),e("span",null,[l(j,{icon:"fa-solid fa-check",class:n(v.value?"block text-white text-3":"hidden")},null,8,["class"])]),c(" 我已閱讀並同意本網站個資使用規範 ")])]),e("button",{class:"btn btn-primary mt-10 disabled:bg-neutral-40 w-full",disabled:a(k),type:"submit"},N(a(k)?"驗證中":"完成註冊"),9,be)]),_:1})])):U("",!0),e("div",he,[c(" 已經有會員了嗎？ "),l(q,{to:"/login",class:"btn-text underline decoration-1 ms-2"},{default:V(()=>[c(" 立即登入 ")]),_:1})])])])])])])],64)}}});export{Fe as default};
