import{d as f,c as n,e as c,f as e,t as s,i as o,g as d,k as m,q as r,s as h,w as v,o as k,j as i,h as $,M as I}from"./index-IWXpTEn3.js";import{_ as g}from"./RoomInfoProvide.vue_vue_type_script_setup_true_lang-zAAgbx2a.js";import{u as w}from"./orderStore-Opbb9po7.js";import{u as y}from"./userStore-2CLhXFjz.js";import"./swal-MzZ19o4Z.js";const N="/side-project-booking/svg/check.svg",D={class:"bg-white rounded-5 p-4 lg:p-10"},S={key:0,class:"flex flex-col gap-6 lg:gap-10"},O={class:"text-neutral-60 mb-2 text-3h lg:text-4"},T=e("h3",{class:"text-4 lg:text-6"},"即將來的行程",-1),C=["src"],B={class:"flex flex-col gap-6 text-3h lg:text-4 text-neutral-80 font-bold pb-6 border-b border-neutral-40"},V={class:"flex gap-4 lg:text-5"},j={class:"pe-4 border-r border-neutral-60"},R={class:"title-deco ps-4 mb-2"},F={class:"title-deco ps-4"},M=e("h3",{class:"title-deco text-3h lg:text-4 ps-4 mb-6"},"房內設備",-1),U=e("h3",{class:"title-deco text-3h lg:text-4 ps-4 mb-6"},"備品提供",-1),q=f({__name:"OrderRoomInfo",props:["order","price"],setup(t){return(a,l)=>(n(),c("div",D,[t.order?(n(),c("div",S,[e("div",null,[e("p",O,"預定參考編號："+s(t.order._id),1),T]),e("img",{class:"h-[200px] w-full rounded-5 object-cover",src:t.order.roomId.imageUrl,alt:""},null,8,C),e("div",B,[e("div",V,[e("p",j,s(t.order.roomId.name)+"，"+s(o(r).getNightNum(t.order.checkInDate,t.order.checkOutDate))+"晚",1),e("p",null,"住宿人數："+s(t.order.peopleNum)+" 位",1)]),e("div",null,[e("div",R,"入住："+s(o(r).getTradDateSecondary(t.order.checkInDate))+"，15:00 可入住",1),e("div",F,"退房："+s(o(r).getTradDateSecondary(t.order.checkOutDate))+"，12:00 前退房",1)]),e("div",null,"NT$ "+s(o(r).toThousands(t.price)),1)]),e("div",null,[M,d(g,{info:t.order.roomId.amenityInfo},null,8,["info"])]),e("div",null,[U,d(g,{info:t.order.roomId.facilityInfo},null,8,["info"])])])):m("",!0)]))}}),E={class:"bg-neutral"},L={class:"container mx-auto px-4 py-10 lg:py-30"},P={class:"flex flex-col lg:flex-row gap-15 lg:gap-18 duration-300"},z={key:0,class:"basis-full lg:basis-7/12"},A={class:"flex flex-col text-white gap-10 lg:gap-20"},G={class:"pb-10 lg:pb-20 border-b border-neutral-40"},H={class:"flex flex-col lg:flex-row gap-4 lg:gap-10 lg:items-center mb-8 lg:mb-10 duration-300"},J=e("img",{src:N,class:"w-10",alt:"check"},null,-1),K={class:"text-8"},Q=e("br",null,null,-1),W=e("p",{class:"font-500"},"我們已發送訂房資訊及詳細內容至你的電子信箱，入住時需向櫃檯人員出示訂房人證件。",-1),X={class:"pb-10 lg:pb-20 border-b border-neutral-40"},Y=e("h2",{class:"mb-6 lg:mb-10 text-4 lg:text-6"},"立即查看你的訂單記錄",-1),Z=e("h2",{class:"mb-8 text-6"},"訂房人資訊",-1),ee={class:"flex flex-col gap-6"},te=e("p",null,"姓名",-1),oe=e("p",null,"手機號碼",-1),se=e("p",null,"電子信箱",-1),le={class:"basis-full lg:basis-5/12"},ue=f({__name:"BookingComplete",setup(t){const a=w(),{order:l,totalPrice:p}=h(a),u=a.getFrontOrder,x=y(),{isChecked:b}=h(x);return v(b,_=>{_&&u()}),k(async()=>{await u()}),(_,re)=>(n(),c("div",E,[e("div",L,[e("div",P,[o(l)?(n(),c("div",z,[e("div",A,[e("div",G,[e("div",H,[J,e("h1",K,[i("恭喜，"+s(o(l).userInfo.name)+"！",1),Q,i("您已預訂成功")])]),W]),e("div",X,[Y,d(o(I),{to:"/user-order",class:"btn btn-primary lg:w-fit"},{default:$(()=>[i("前往我的訂單")]),_:1})]),e("div",null,[Z,e("div",ee,[e("div",null,[te,e("p",null,s(o(l).userInfo.name),1)]),e("div",null,[oe,e("p",null,s(o(l).userInfo.phone),1)]),e("div",null,[se,e("p",null,s(o(l).userInfo.email),1)])])])])])):m("",!0),e("div",le,[d(q,{order:o(l),price:o(p)},null,8,["order","price"])])])])]))}});export{ue as default};
