import{d as u,s as p,u as x,b as m,c as f,e as _,f as e,t as d,j as t,g as a,h as r,i as l,n,F as h}from"./index-VUWRmG3B.js";import{u as g}from"./userStore-yEjCii5z.js";const b="/side-project-booking/svg/userImage.svg",w={class:"h-[206px] lg:h-[384px] relative"},v=e("img",{class:"w-full h-full object-cover",src:"https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"user account banner"},null,-1),y={class:"absolute top-0 left-0 w-full h-full my-auto"},j={class:"container mx-auto h-full flex flex-col justify-center lg:flex-row lg:justify-start lg:items-center gap-4 lg:gap-6 px-4 sm:px-0 duration-300"},B=e("div",{class:"w-[72px] h-[72px] lg:w-[144px] lg:h-[144px] rounded-full duration-300"},[e("img",{src:b,alt:"user image"})],-1),k={class:"text-white text-8 lg:text-12"},D={class:"container mx-auto px-4 lg:px-0 my-10 lg:my-20 flex"},S=u({__name:"UserBanner",setup(C){const c=g(),{userInfo:i}=p(c),s=x();return(H,V)=>{const o=m("router-link");return f(),_(h,null,[e("div",w,[v,e("div",y,[e("div",j,[B,e("h1",k,"Hello，"+d(t(i).name),1)])])]),e("div",D,[a(o,{to:"/user",class:n(["user-btn-action px-6 pt-4 pb-1",t(s).name==="user"?"text-primary-100 active":"text-white"])},{default:r(()=>[l("個人資料")]),_:1},8,["class"]),a(o,{to:"/user-order",class:n(["user-btn-action px-6 pt-4 pb-1",t(s).name==="user-order"?"text-primary-100 active":"text-white"])},{default:r(()=>[l("我的訂單")]),_:1},8,["class"])])],64)}}});export{S as _};
