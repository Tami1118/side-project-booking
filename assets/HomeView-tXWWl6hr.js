import{P as N,S as g,a as b}from"./pagination-_1qTXesQ.js";import{A as S,b as E,N as P}from"./navigation-pH5JSH3j.js";import{d as v,r as C,b as y,c as e,e as n,g as o,h as c,F as u,m as f,j as a,i as d,f as t,p as w,s as $,o as k,t as i,l as V,k as T}from"./index-_3h-oLcu.js";import{u as A}from"./newsStore-RS_J56If.js";import{_ as L}from"./_plugin-vue_export-helper-x3n3nnut.js";import{f as D}from"./format-ue8EY1kP.js";import{u as I}from"./roomStore-ZscCTvwU.js";import{u as M}from"./foodStore-LkGe0vdx.js";import"./swal-szYjbNcO.js";const O={class:"bg-neutral-100/60 absolute top-0 left-0 w-full h-full px-5 lg:px-[4.166vw]"},U={class:"flex flex-col lg:flex-row lg:items-center lg:justify-between gap-[4.926vh] lg:gap-0 h-full pt-[13.793vh]"},q=t("div",{class:"w-full lg:max-w-[33.125vw]"},[t("div",{class:"flex flex-col items-center lg:items-start",style:{color:"#be9c7c"}},[t("h1",{class:"text-7 lg:text-[2.083vw] font-bold"},"享樂酒店"),t("p",{class:"lg:text-[1.25vw] font-bold"},"Enjoyment Luxury Hotel"),t("span",{class:"block w-[2px] lg:w-full h-[10.221vh] lg:h-[2px] bg-gradient-to-b from-primary-100 mt-[4.926vh] lg:mt-8"})])],-1),z={class:"w-full lg:max-w-[48.125vw]"},G={class:"py-[4.926vh] lg:py-[8.888vh] rounded-[40px] lg:rounded-[80px] border-t-2 border-r-2 border-white bg-gradient-to-b from-white/0 to-primary-10/30 backdrop-blur-sm text-white ms-[10.133vw] lg:ms-auto"},J={class:"-translate-x-[10.133vw] lg:-translate-x-[2.5vw] w-fit"},K=t("h2",{class:"text-12 lg:text-[5.208vw] font-bold mb-[2.22vh] sm:text-nowrap"},[d("高雄"),t("br"),d("豪華住宿之選")],-1),Q=t("p",{class:"mb-[4.926vh] lg:mb-[5.555vh] lg:text-[1.6667vw]"},"我們致力於為您提供無與倫比的奢華體驗與優質服務",-1),W=t("span",{class:"block ms-4 w-[80px] lg:w-[150px] group-hover:w-[60px] lg:group-hover:w-[120px] h-[1px] bg-neutral group-hover:bg-white duration-500"},null,-1),X=["src"],Y=v({__name:"HomeBanner",setup(_){const l=[N,S],r={clickable:!0},p=C(E);return(m,h)=>{const s=y("RouterLink");return e(),n("section",null,[o(a(b),{class:"home-banner h-screen",pagination:r,autoplay:{delay:2e3,disableOnInteraction:!1},modules:l,loop:!0},{default:c(()=>[(e(!0),n(u,null,f(p.value,(j,F)=>(e(),w(a(g),{key:F},{default:c(()=>[t("div",O,[t("div",U,[q,t("div",z,[t("div",G,[t("div",J,[K,Q,o(s,{to:"/room",class:"group rounded-2 bg-white p-5 lg:p-10 flex w-full items-center justify-end lg:text-6 font-bold text-neutral hover:bg-primary-100 hover:text-white duration-500"},{default:c(()=>[d(" 立即訂房"),W]),_:1})])])])])]),t("img",{class:"h-full w-full object-cover",src:j,alt:"Home Banner"},null,8,X)]),_:2},1024))),128))]),_:1})])}}}),Z={class:"bg-primary-10"},tt={class:"container mx-auto px-3 xl:px-0 py-20 lg:py-30"},et={class:"flex flex-col lg:flex-row gap-10"},st=t("div",{class:"w-full lg:w-2/12","data-aos":"fade-right"},[t("h2",{class:"text-primary-100 text-8 lg:text-12 font-bold mb-6 lg:mb-10"},[d("最新"),t("br"),d("消息")]),t("span",{class:"block h-[2px] w-[140px] bg-gradient-to-r from-primary-100"})],-1),ot={class:"w-full lg:w-10/12"},lt={class:"flex flex-col gap-10","data-aos":"fade-left"},at=["src","alt"],nt={class:"text-7 lg:text-8 font-bold text-neutral-100 mb-2 lg:mb-6"},rt={class:"text-3h lg:text-4 text-500 text-justify"},ct=v({__name:"HomeNews",setup(_){const l=A(),{newsList:r}=$(l),p=l.getFrontNews;return k(()=>{p()}),(m,h)=>(e(),n("section",Z,[t("div",tt,[t("div",et,[st,t("div",ot,[t("ul",lt,[(e(!0),n(u,null,f(a(r),s=>(e(),n("li",{class:"flex flex-col lg:flex-row gap-6 lg:items-center",key:s._id},[t("img",{src:s.image,class:"rounded-2 h-[291px] lg:w-[474px] object-cover w-full",alt:s.title},null,8,at),t("div",null,[t("h3",nt,i(s.title),1),t("p",rt,i(s.description),1)])]))),128))])])])])]))}}),it={},dt={class:"bg-neutral"},pt=V('<div class="pt-20 lg:pt-30 pb-40 lg:pb-50"><div class="about-bg"><div class="container mx-auto ps-10 pe-5 xl:p-0 flex justify-end"><div class="translate-y-[80px] max-w-[1044px] about-rounded border border-white bg-gradient-to-b from-neutral-100/80 to-primary-100/80 backdrop-blur text-white p-6 lg:p-10"><div class="flex gap-10 items-center mb-10 lg:mb-20" data-aos="fade-up"><h2 class="text-8 lg:text-12 text-nowrap">關於<br>我們</h2><span class="block h-[2px] w-[160px] bg-white"></span></div><div class="text-3h lg:text-4 flex flex-col gap-4 lg:gap-10 text-justify" data-aos="fade-up"><p>享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。<br> 我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。 </p><p>我們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿著藝術與設計的精緻。 我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。 </p><p>在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；您也可以舒適地坐在我們的餐廳，品嚐精緻的佳餚，體驗無與倫比的味覺盛宴。 </p><p>享樂酒店，不僅是您在高雄的住宿之選，更是您感受高雄魅力的最佳舞台。我們期待著您的蒞臨，讓我們共同編織一段難忘的高雄故事。</p></div></div></div></div></div>',1),_t=[pt];function xt(_,l){return e(),n("section",dt,_t)}const ut=L(it,[["render",xt]]),mt={key:0,class:"bg-neutral"},ht={class:"home-container py-20 lg:py-30 px-4 lg:px-0 text-white"},ft=t("div",{class:"home-room-swiper-navigation"},[t("div",{class:"swiper-button-prev"},[t("span",{class:"material-symbols-outlined text-primary-100"},"arrow_back")]),t("div",{class:"swiper-button-next"},[t("span",{class:"material-symbols-outlined text-primary-100"},"arrow_forward")])],-1),gt={class:"flex flex-col lg:flex-row gap-6 lg:gap-20"},bt={class:"w-full lg:w-[700px] xl:w-[900px] h-[300px] lg:h-[700px] xl:h-[900px]"},wt=["src"],vt={class:"flex flex-col gap-6 lg:gap-10 grow justify-end pb-[80px] lg:pb-[96px]"},yt={class:"text-white"},$t={class:"text-7 lg:text-10 font-bold mb-2"},kt={class:"text-3h lg:text-4"},jt={class:"text-6 lg:text-8 font-bold"},Ft=t("button",{type:"button",class:"group rounded-2 bg-white p-5 lg:p-10 flex items-center justify-end text-6 font-bold text-neutral hover:bg-primary-100 hover:text-white duration-500"},[d(" 立即訂房 "),t("span",{class:"block ms-4 w-[159px] group-hover:w-[120px] h-[1px] bg-neutral group-hover:bg-white duration-500"})],-1),Nt=v({__name:"HomeRoom",setup(_){const l=[N,P,S],r={clickable:!0},p={nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},m=I(),{roomList:h}=$(m),s=m.getFrontRooms;return k(async()=>{await s()}),(j,F)=>{const R=y("RouterLink");return a(h)?(e(),n("section",mt,[t("div",ht,[o(a(b),{navigation:p,spaceBetween:30,modules:l,class:"home-room-swiper"},{default:c(()=>[ft,(e(!0),n(u,null,f(a(h),x=>(e(),w(a(g),{key:x._id},{default:c(()=>[t("div",gt,[t("div",bt,[o(a(b),{pagination:r,slidesPerView:"auto",modules:l,class:"home-room-swiper-content w-full h-full"},{default:c(()=>[(e(!0),n(u,null,f(x.imageUrlList,(H,B)=>(e(),w(a(g),{key:B},{default:c(()=>[t("img",{src:H,class:"w-full h-full object-cover rounded-r-2 overflow-hidden",alt:"Room Image"},null,8,wt)]),_:2},1024))),128))]),_:2},1024)]),t("div",vt,[t("div",yt,[t("h3",$t,i(x.name),1),t("p",kt,i(x.description),1)]),t("p",jt,"NT$ "+i(a(D).toThousands(x.price)),1),o(R,{to:`/room/${x._id}`,class:"flex flex-col gap-4"},{default:c(()=>[Ft]),_:2},1032,["to"])])])]),_:2},1024))),128))]),_:1})])])):T("",!0)}}}),St={class:"bg-primary-10"},Vt={class:"home-container ms-auto py-20 lg:py-30 ps-4 xl:ps-0 overflow-hidden"},Lt=t("div",{class:"flex gap-6 items-center mb-10 lg:mb-20"},[t("h2",{class:"text-primary-100 text-8 lg:text-12 font-bold"},[d("佳餚"),t("br"),d("美饌")]),t("span",{class:"block h-[2px] w-[200px] bg-gradient-to-r from-primary-100"})],-1),Rt={class:"h-[480px] md:h-[560px] xl:h-[600px] relatvie rounded-2 overflow-hidden duration-200"},Ht=["src","alt"],Bt={class:"absolute bottom-0 left-0 w-full p-4 text-white bg-gradient-to-b from-white/0 to-neutral/80 backdrop-blur-sm rounded-b-2 overflow-hidden"},Et={class:"flex justify-between items-center mb-4 lg:mb-6"},Pt={class:"text-6 font-bold"},Ct={class:"text-3h lg:text-4 font-bold"},Tt={class:"text-justify text-3h lg:text-4 font-500 ellipsis"},At=v({__name:"HomeCulinary",setup(_){const l=M(),{foodList:r}=$(l),p=l.getFrontFoods;return k(()=>{p()}),(m,h)=>(e(),n("section",St,[t("div",Vt,[Lt,o(a(b),{slidesPerView:1.2,spaceBetween:24,breakpoints:{1280:{slidesPerView:3.5},992:{slidesPerView:2.7},767:{slidesPerView:2.2}},class:"home-food-swiper"},{default:c(()=>[(e(!0),n(u,null,f(a(r),s=>(e(),w(a(g),{key:s._id},{default:c(()=>[t("div",Rt,[t("img",{src:s.image,class:"w-full h-full object-cover",alt:s.title},null,8,Ht),t("div",Bt,[t("div",Et,[t("h3",Pt,i(s.title),1),t("p",Ct,i(s.diningTime),1)]),t("p",Tt,i(s.description),1)])])]),_:2},1024))),128))]),_:1})])]))}}),Dt="/side-project-booking/svg/home-wave.svg",It={},Mt={class:"bg-neutral text-white overflow-hidden"},Ot={class:"container mx-auto px-3 md:px-0 pt-20 md:pt-30 pb-10 md:pb-20"},Ut=V('<div class="flex items-center gap-10 mb-10 md:mb-20"><h2 class="text-primary-100 text-8 md:text-12 font-bold">交通<br>方式</h2><span class="h-[2px] w-[194px] bg-gradient-to-r from-primary-100 to-transparent"></span></div><div class="mb-6"><p class="mb-4">台灣高雄市新興區六角路123號</p><img class="h-[360px] w-full object-cover rounded-2" src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/map.png?raw=true" alt=""></div>',2),qt={class:"grid grid-cols-1 md:grid-cols-3 gap-6"},zt={class:"flex flex-col gap-2"},Gt=t("h3",{class:"md:text-6 font-bold"},"自行開車",-1),Jt=t("p",{class:"text-[14px] md:text-4 text-justify"},"如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。",-1),Kt={class:"flex flex-col gap-2"},Qt=t("h3",{class:"md:text-6 font-bold"},"高鐵/火車",-1),Wt=t("p",{class:"text-[14px] md:text-4 text-justify"},"如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘捷運紅線至中央公園站下車，步行約10分鐘便可抵達。",-1),Xt={class:"flex flex-col gap-2"},Yt=t("h3",{class:"md:text-6 font-bold"},"禮賓車服務",-1),Zt=t("p",{class:"text-[14px] md:text-4 text-justify"},"承億酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：(07)123-4567",-1),te=t("img",{class:"w-full",src:Dt,alt:"bg wave"},null,-1);function ee(_,l){const r=y("font-awesome-icon");return e(),n("section",Mt,[t("div",Ot,[Ut,t("div",qt,[t("div",zt,[o(r,{icon:"fa-solid fa-car",class:"w-fit text-primary-100 text-8 lg:mb-2"}),Gt,Jt]),t("div",Kt,[o(r,{icon:"fa-solid fa-train",class:"w-fit text-primary-100 text-8 lg:mb-2"}),Qt,Wt]),t("div",Xt,[o(r,{icon:"fa-solid fa-car-side",class:"w-fit text-primary-100 text-8 lg:mb-2"}),Yt,Zt])])]),te])}const se=L(It,[["render",ee]]),_e={__name:"HomeView",setup(_){return(l,r)=>(e(),n(u,null,[o(Y),o(ct),o(ut),o(Nt),o(At),o(se)],64))}};export{_e as default};
