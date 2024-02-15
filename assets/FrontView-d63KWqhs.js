import{r as h,o as $,a as L,d as C,s as N,u as R,w as B,b as m,c as i,e as c,f as e,g as s,h as n,n as k,i as a,j as p,t as E,k as y,l as z,R as A}from"./index-IWXpTEn3.js";import{_ as S}from"./logo-white-B19EASvB.js";import{u as F}from"./userStore-2CLhXFjz.js";import{_ as M}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./swal-MzZ19o4Z.js";function P(){const u=h(!1),o=()=>{window.scrollY>700?u.value=!0:u.value=!1};return $(()=>{window.addEventListener("scroll",o)}),L(()=>{window.removeEventListener("scroll",o)}),{isScroll:u}}const T={class:"max-w-[1860px] mx-auto px-3 py-4"},I={class:"flex items-center justify-between text-white"},D=e("img",{src:S,alt:"享樂飯店 Logo"},null,-1),H={class:"max-lg:fixed top-0 right-0 max-lg:w-full max-lg:h-full bg-neutral lg:bg-transparent z-20 flex justify-center items-center px-5 lg:p-0"},W={class:"group-hover:text-primary-100"},X={class:"flex flex-col lg:items-center lg:flex-row w-full lg:w-fit gap-4"},Y={class:"group"},q={key:0,class:"group"},G={key:1,class:"group hidden lg:block relative"},J={class:"hidden md:group-hover:flex flex-col absolute top-100 right-0 w-[260px] bg-white py-3 rounded-5 overflow-hidden"},K={key:2,class:"group lg:hidden"},O={key:3,class:"group lg:hidden"},Q=C({__name:"UserHeader",setup(u){const o=h(!1),l=F(),{userInfo:f,isChecked:g}=N(l),U=l.checkUser,V=l.getUser,v=l.logout,b=R(),x=h(""),w=()=>{x.value=b.path};B(()=>b.path,()=>{w()});const{isScroll:j}=P();return $(()=>{U(),V(),w()}),(me,t)=>{const d=m("router-link"),_=m("font-awesome-icon");return i(),c("header",{class:k(["top-0 left-0 w-full z-10 duration-800",{fixed:x.value==="/"||x.value==="/room","sticky bg-neutral":x.value!=="/"&&x.value!=="/room","bg-neutral":a(j)}])},[e("div",T,[e("div",I,[s(d,{to:"/",class:"max-w-[109px] lg:max-w-[196px] duration-200"},{default:n(()=>[D]),_:1}),e("button",{onClick:t[0]||(t[0]=r=>o.value=!o.value),class:"lg:hidden"},[s(_,{icon:"fa-solid fa-bars",class:"text-6"})]),e("div",{class:k(["lg:block",o.value?"":"hidden"])},[e("div",H,[e("div",{onClick:t[1]||(t[1]=r=>o.value=!o.value),class:"absolute top-0 right-0 p-5 group lg:hidden"},[e("button",W,[s(_,{icon:"fa-solid fa-xmark",class:"text-12"})])]),e("ul",X,[e("li",Y,[s(d,{to:"/room",onClick:t[2]||(t[2]=r=>o.value=!1),class:"block text-center p-4 group-hover:text-primary-100"},{default:n(()=>[p("房客旅宿")]),_:1})]),a(g)?(i(),c("li",G,[e("button",{onClick:t[4]||(t[4]=r=>o.value=!1),class:"block text-center p-4 group-hover:text-primary-100"},[s(_,{icon:"fa-regular fa-circle-user",class:"me-2"}),p(" "+E(a(f).name),1)]),e("ul",J,[e("li",null,[s(d,{to:"/user-order",class:"block py-4 px-8 text-nowrap hover:bg-primary-10 text-neutral-80 hover:text-primary-100"},{default:n(()=>[p("我的訂單")]),_:1})]),e("li",null,[e("button",{class:"w-full py-4 px-8 text-nowrap text-start hover:bg-primary-10 text-neutral-80 hover:text-primary-100",onClick:t[5]||(t[5]=r=>a(v)())},"登出")])])])):(i(),c("li",q,[s(d,{to:"/login",onClick:t[3]||(t[3]=r=>o.value=!1),class:"block text-center p-4 group-hover:text-primary-100"},{default:n(()=>[p("會員登入")]),_:1})])),a(g)?(i(),c("li",K,[s(d,{to:"/user",onClick:t[6]||(t[6]=r=>o.value=!1),class:"block text-center p-4 group-hover:text-primary-100"},{default:n(()=>[p("我的帳戶")]),_:1})])):y("",!0),a(g)?(i(),c("li",O,[e("button",{onClick:t[7]||(t[7]=r=>(o.value=!1,a(v)())),class:"block w-full text-center p-4 group-hover:text-primary-100"},"帳戶登出")])):y("",!0),e("li",null,[s(d,{to:"/room",onClick:t[8]||(t[8]=r=>o.value=!1),class:"block text-center py-4 px-8 btn-primary rounded-2"},{default:n(()=>[p("立即訂房")]),_:1})])])])],2)])])],2)}}}),Z={},ee={class:"bg-neutral"},te={class:"container mx-auto px-4 lg:px-0"},oe={class:"py-20 text-white"},se={class:"flex flex-col lg:flex-row lg:justify-between mb-20"},le=e("img",{src:S,alt:"享樂酒店 Logo"},null,-1),re={class:"flex justify-start gap-4 mb-10"},ae={href:"#",class:"group"},ne={class:"rounded-full border group-hover:border-primary-100 p-2"},ie={href:"#",class:"group"},ce={class:"rounded-full border group-hover:border-primary-100 p-2"},ue=z('<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-x-20 lg:gap-y-10"><div><span class="block mb-2">TEL</span><a class="hover:text-primary-100 text-3h lg:text-4" href="tel:+886-7-1234567">+886-7-1234567</a></div><div><span class="block mb-2">FAX</span><a class="hover:text-primary-100 text-3h lg:text-4" href="tel:+886-7-1234567">+886-7-1234567</a></div><div><span class="block mb-2">MAIL</span><a class="hover:text-primary-100 text-3h lg:text-4" href="mailto:elh@hexschool.com">elh@hexschool.com</a></div><div><span class="block mb-2">WEB</span><a class="hover:text-primary-100 text-3h lg:text-4" href="/">www.elhhexschool.com.tw</a></div></div>',1),de=e("div",{class:"flex flex-col lg:flex-row lg:justify-between text-3h lg:text-4"},[e("span",null,"806023 台灣高雄市新興區六角路123號"),e("span",null,"© 享樂酒店 2023 All Rights Reserved")],-1);function pe(u,o){const l=m("router-link"),f=m("font-awesome-icon");return i(),c("div",ee,[e("div",te,[e("div",oe,[e("div",se,[e("div",null,[s(l,{to:"/",class:"flex flex-col max-w-[196px] mb-10"},{default:n(()=>[le]),_:1}),e("div",re,[e("a",ae,[e("div",ne,[s(f,{icon:"fa-brands fa-line",class:"text-white group-hover:text-primary-100 text-6"})])]),e("a",ie,[e("div",ce,[s(f,{icon:"fa-brands fa-instagram",class:"text-white group-hover:text-primary-100 text-6"})])])])]),ue]),de])])])}const xe=M(Z,[["render",pe]]),fe={class:"relative"},we=C({__name:"FrontView",setup(u){return(o,l)=>(i(),c("div",fe,[s(Q),s(a(A)),s(xe)]))}});export{we as default};
