import{d as g,e as n,f as c,g as e,t as s,c as o,h as d,k as f,s as _,w as v,o as k,j as i,i as $,L as I}from"./index-ZqzRWSCL.js";import{f as r}from"./format-ue8EY1kP.js";import{_ as m}from"./RoomInfoProvide.vue_vue_type_script_setup_true_lang-E6NWslPh.js";import{u as w}from"./orderStore-dM0Kz7MH.js";import{u as y}from"./userStore-d18P0GkM.js";import"./swal-Imie3hvR.js";const N="/side-project-booking/svg/check.svg",D={class:"bg-white rounded-5 p-4 lg:p-10"},S={key:0,class:"flex flex-col gap-6 lg:gap-10"},O={class:"text-neutral-60 mb-2 text-3h lg:text-4"},T=e("h3",{class:"text-4 lg:text-6"},"即將來的行程",-1),C=["src","alt"],B={class:"flex flex-col gap-6 text-3h lg:text-4 text-neutral-80 font-bold pb-6 border-b border-neutral-40"},V={class:"flex gap-4 lg:text-5"},j={class:"pe-4 border-r border-neutral-60"},R={class:"title-deco ps-4 mb-2"},F={class:"title-deco ps-4"},L=e("h3",{class:"title-deco text-3h lg:text-4 ps-4 mb-6"},"房內設備",-1),U=e("h3",{class:"title-deco text-3h lg:text-4 ps-4 mb-6"},"備品提供",-1),E=g({__name:"OrderRoomInfo",props:["order","price"],setup(t){return(a,l)=>(n(),c("div",D,[t.order?(n(),c("div",S,[e("div",null,[e("p",O,"預定參考編號："+s(t.order._id),1),T]),e("img",{class:"h-[200px] w-full rounded-5 object-cover",src:t.order.roomId.imageUrl,alt:t.order.roomId.name},null,8,C),e("div",B,[e("div",V,[e("p",j,s(t.order.roomId.name)+"，"+s(o(r).getNightNum(t.order.checkInDate,t.order.checkOutDate))+"晚",1),e("p",null,"住宿人數："+s(t.order.peopleNum)+" 位",1)]),e("div",null,[e("div",R,"入住："+s(o(r).getTradDateSecondary(t.order.checkInDate))+"，15:00 可入住",1),e("div",F,"退房："+s(o(r).getTradDateSecondary(t.order.checkOutDate))+"，12:00 前退房",1)]),e("div",null,"NT$ "+s(o(r).toThousands(t.price)),1)]),e("div",null,[L,d(m,{info:t.order.roomId.amenityInfo},null,8,["info"])]),e("div",null,[U,d(m,{info:t.order.roomId.facilityInfo},null,8,["info"])])])):f("",!0)]))}}),M={class:"bg-neutral"},P={class:"container mx-auto px-4 py-10 lg:py-30"},q={class:"flex flex-col lg:flex-row gap-15 lg:gap-18 duration-300"},z={key:0,class:"basis-full lg:basis-7/12"},A={class:"flex flex-col text-white gap-10 lg:gap-20"},G={class:"pb-10 lg:pb-20 border-b border-neutral-40"},H={class:"flex flex-col lg:flex-row gap-4 lg:gap-10 lg:items-center mb-8 lg:mb-10 duration-300"},J=e("img",{src:N,class:"w-10",alt:"check"},null,-1),K={class:"text-8"},Q=e("br",null,null,-1),W=e("p",{class:"font-500"},"我們已發送訂房資訊及詳細內容至你的電子信箱，入住時需向櫃檯人員出示訂房人證件。",-1),X={class:"pb-10 lg:pb-20 border-b border-neutral-40"},Y=e("h2",{class:"mb-6 lg:mb-10 text-4 lg:text-6"},"立即查看你的訂單記錄",-1),Z=e("h2",{class:"mb-8 text-6"},"訂房人資訊",-1),ee={class:"flex flex-col gap-6"},te=e("p",null,"姓名",-1),oe=e("p",null,"手機號碼",-1),se=e("p",null,"電子信箱",-1),le={class:"basis-full lg:basis-5/12"},he=g({__name:"BookingComplete",setup(t){const a=w(),{order:l,totalPrice:x}=_(a),u=a.getFrontOrder,p=y(),{isChecked:b}=_(p);return v(b,h=>{h&&u()}),k(async()=>{await u()}),(h,re)=>(n(),c("div",M,[e("div",P,[e("div",q,[o(l)?(n(),c("div",z,[e("div",A,[e("div",G,[e("div",H,[J,e("h1",K,[i("恭喜，"+s(o(l).userInfo.name)+"！",1),Q,i("您已預訂成功")])]),W]),e("div",X,[Y,d(o(I),{to:"/user-order",class:"btn btn-primary lg:w-fit"},{default:$(()=>[i("前往我的訂單")]),_:1})]),e("div",null,[Z,e("div",ee,[e("div",null,[te,e("p",null,s(o(l).userInfo.name),1)]),e("div",null,[oe,e("p",null,s(o(l).userInfo.phone),1)]),e("div",null,[se,e("p",null,s(o(l).userInfo.email),1)])])])])])):f("",!0),e("div",le,[d(E,{order:o(l),price:o(x)},null,8,["order","price"])])])])]))}});export{he as default};
