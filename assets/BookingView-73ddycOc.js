import{d as z,s as y,v as A,r as D,w as H,c as u,e as _,j as t,f as e,B as F,J as I,F as N,m as O,z as P,C as Q,k as E,t as m,b as S,g as r,h as U,n as T,K as W,l as X,A as Y,u as ee,o as te,i as w,p as se}from"./index-VUWRmG3B.js";import{A as oe}from"./swal-Op3Jh1cP.js";import{f as b}from"./format-ue8EY1kP.js";import{_ as le}from"./RoomInfoMain.vue_vue_type_script_setup_true_lang--RDz5mV8.js";import{u as B}from"./orderStore-8HbStuvj.js";import{t as V}from"./taiwanCities-y_p8gqPp.js";import{u as q}from"./userStore-yEjCii5z.js";import{_ as ae}from"./logo-primary-RekCkdNo.js";import{_ as ne}from"./_plugin-vue_export-helper-x3n3nnut.js";import{u as re}from"./roomStore-vKmbspdn.js";import"./RoomInfoBasic.vue_vue_type_script_setup_true_lang-IQxVWoNn.js";import"./RoomInfoProvide.vue_vue_type_script_setup_true_lang-8DF6aSRn.js";const ie=e("label",{for:"userAddress"},"地址",-1),de={key:0,class:"grid grid-cols-2 gap-2"},ce={class:"relative"},ue=e("option",{value:"",selected:""},"請選擇縣市",-1),pe=["value"],me=e("div",{class:"absolute top-0 bottom-0 right-0 m-auto p-4 pointer-events-none"},[e("span",{class:"material-icons"},"keyboard_arrow_down")],-1),_e={class:"relative"},fe=e("option",{value:"",selected:""},"請選擇行政區",-1),ve=["value"],xe=e("div",{class:"absolute top-0 bottom-0 right-0 m-auto p-4 pointer-events-none"},[e("span",{class:"material-icons"},"keyboard_arrow_down")],-1),ge={class:"col-span-2"},he=z({__name:"AddressForm",setup(C,{expose:$}){const g=B(),{selectDistrict:l,addressDetail:p}=y(g),i=A(()=>V.map(d=>d.name)),k=A(()=>{const d=V.find(s=>s.name===n.value);return d?d.districts:[]}),n=D(""),a=D(),v=D(),h=()=>{l.value=(k.value.length>0,"")};H(l,()=>{const d=V.find(s=>s.name===n.value);if(d){const s=d.districts.find(o=>o.name===l.value);s?a.value=Number(s.zip):a.value=NaN}else a.value=NaN});const x=q(),{userInfo:c}=y(x);return $({getAddress:()=>{n.value=c.value.address.zipcode;for(const d of V){const s=d.districts.find(o=>o.zip===n.value.toString());if(s){n.value=d.name,l.value=s.zip,v.value=s.name;break}}p.value=c.value.address.detail.replace(n.value,""),p.value=p.value.replace(v.value,"")}}),(d,s)=>(u(),_(N,null,[ie,t(V)?(u(),_("div",de,[e("div",ce,[F(e("select",{name:"縣市",id:"","onUpdate:modelValue":s[0]||(s[0]=o=>n.value=o),class:"form-input",onChange:s[1]||(s[1]=o=>h())},[ue,(u(!0),_(N,null,O(i.value,o=>(u(),_("option",{key:o,value:o},m(o),9,pe))),128))],544),[[I,n.value]]),me]),e("div",null,[e("div",_e,[F(e("select",{name:"行政區",id:"","onUpdate:modelValue":s[2]||(s[2]=o=>P(l)?l.value=o:null),class:"form-input"},[fe,(u(!0),_(N,null,O(k.value,o=>(u(),_("option",{key:o.zip,value:o.zip},m(o.name),9,ve))),128))],512),[[I,t(l)]]),xe])]),e("div",ge,[F(e("input",{type:"text","onUpdate:modelValue":s[3]||(s[3]=o=>P(p)?p.value=o:null),placeholder:"請輸入詳細地址",class:"p-4 rounded-2 w-full"},null,512),[[Q,t(p)]])])])):E("",!0)],64))}});var be={VITE_URL:"https://freyja-g4ow.onrender.com",BASE_URL:"/side-project-booking/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const $e={class:"flex mb-8 lg:mb-10"},ke=e("h2",{class:"text-5 lg:text-7 text-black"},"訂房人資訊",-1),ye={class:"flex flex-col gap-2"},we=e("label",{for:"userName"},"姓名",-1),Ve={class:"flex flex-col gap-2"},Ne=e("label",{for:"userPhone"},"手機號碼",-1),Se={class:"flex flex-col gap-2"},De=e("label",{for:"userEmail"},"電子信箱",-1),Ue=z({__name:"BookingForm",setup(C){const{VITE_URL:$}=be,g=B(),{userInfo:l}=y(g),p=n=>/^(09)[0-9]{8}$/.test(n)?!0:"請輸入正確電話號碼格式，例如 0987654321",i=D(),k=()=>{const n=`${$}/api/v1/user`;W.get(n).then(a=>{l.value=a.data.result,i.value.getAddress(),console.log("getUser 成功",l.value)}).catch(a=>{console.log("getUser 失敗",a)})};return(n,a)=>{const v=S("VField"),h=S("ErrorMessage"),f=S("VForm");return u(),_(N,null,[e("div",$e,[ke,e("button",{class:"btn-text ms-auto underline",onClick:a[0]||(a[0]=x=>k())},"套用會員資料")]),r(f,{class:"flex flex-col gap-4"},{default:U(({errors:x})=>[e("div",ye,[we,r(v,{type:"text",name:"姓名",class:T([{"border border-red-600":x.姓名},"p-4 rounded-2"]),rules:"required",modelValue:t(l).name,"onUpdate:modelValue":a[1]||(a[1]=c=>t(l).name=c),placeholder:"請輸入姓名"},null,8,["class","modelValue"]),r(h,{class:"text-red-600",name:"姓名"})]),e("div",Ve,[Ne,r(v,{type:"tel",name:"手機號碼",class:T([{"border border-red-600":x.手機號碼},"p-4 rounded-2"]),rules:p,modelValue:t(l).phone,"onUpdate:modelValue":a[2]||(a[2]=c=>t(l).phone=c),placeholder:"請輸入手機號碼"},null,8,["class","modelValue"]),r(h,{class:"text-red-600",name:"手機號碼"})]),e("div",Se,[De,r(v,{type:"email",name:"Email",class:T([{"border border-red-600":x.Email},"p-4 rounded-2"]),rules:"required|email",modelValue:t(l).email,"onUpdate:modelValue":a[3]||(a[3]=c=>t(l).email=c),placeholder:"請輸入有效電子信箱"},null,8,["class","modelValue"]),r(h,{class:"text-red-600",name:"Email"})]),r(he,{ref_key:"userAddressRef",ref:i},null,512)]),_:1})],64)}}}),Ce={},Re={class:"fixed top-0 left-0 w-full h-full bg-black/40 backdrop-blur-[10px]"},Fe=X('<div class="flex justify-center items-center h-full"><div class="w-[765px] h-[600px] bg-white rounded-[20px]"><div class="flex flex-col justify-center items-center h-full"><div class="flex gap-3 mb-[60px]"><span class="block w-[12px] h-[12px] rounded-full bg-neutral-100"></span><span class="block w-[12px] h-[12px] rounded-full bg-neutral-80"></span><span class="block w-[12px] h-[12px] rounded-full bg-neutral-60"></span></div><div class="w-[144px] mb-4"><img class="mb-[5.88px]" src="'+ae+'" alt="享樂飯店 Logo"></div><p class="text-6 font-bold">正在處理你的預定</p></div></div></div>',1),Te=[Fe];function Ae(C,$){return u(),_("div",Re,Te)}const Ee=ne(Ce,[["render",Ae]]),ze={key:0,class:"bg-primary-10"},Be={class:"container mx-auto px-4 xl:px-0 py-10 lg:py-30"},Le={class:"flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-18"},je={class:"basis-full lg:basis-7/12 flex flex-col gap-10"},Me=e("h2",{class:"text-5 lg:text-7 text-black mb-8 lg:mb-10"},"訂房資訊",-1),Ie={class:"flex flex-col gap-6 pb-10 lg:pb-[47px] border-b border-neutral-60"},Oe=e("h3",{class:"title-deco ps-4 text-4 mb-2"},"選擇房型",-1),Pe={class:"flex items-center"},qe=e("h3",{class:"title-deco ps-4 text-4 mb-2"},"訂房日期",-1),Ze={class:"mb-2"},Je={class:"flex items-center"},Ke=e("h3",{class:"title-deco ps-4 text-4 mb-2"},"房客人數",-1),Ge={class:"pb-10 lg:pb-[47px] border-b border-neutral-60"},He=e("h2",{class:"text-5 lg:text-7 text-black mb-8 lg:mb-10"},"房間資訊",-1),Qe={class:"flex flex-col gap-6"},We={class:"basis-full lg:basis-5/12"},Xe={class:"sticky top-[120px]"},Ye={class:"bg-white p-6 lg:p-10 rounded-[20px]"},et={class:"flex flex-col gap-6 lg:gap-10"},tt=["src","alt"],st={class:"flex flex-col gap-6"},ot=e("h2",{class:"text-5 lg:text-7"},"價格詳情",-1),lt={class:"flex flex-col gap-4"},at={class:"flex"},nt={class:"ms-auto"},rt=e("div",{class:"flex pb-4 border-b border-neutral-40"},[e("p",null,"住宿折扣")],-1),it={class:"flex font-bold"},dt=e("p",null,"總價",-1),ct={class:"ms-auto"},ut=["disabled"],Nt=z({__name:"BookingView",setup(C){const $=Y(),g=ee(),l=re(),p=l.getFrontRoom,{roomDetail:i,roomLayout:k}=y(l),n=B(),a=n.getStorageData,v=n.createOrder,{peopleNum:h,bookingDate:f,isLoading:x,userInfo:c,selectDistrict:L,addressDetail:d}=y(n),s=A(()=>c.value.name&&c.value.phone&&c.value.email&&L.value&&d.value),o=q(),{isChecked:Z}=y(o),J=o.checkUser,K=()=>{Z.value?p():($.push("/login"),oe.fire({title:"訂房前請先登入會員"}))},G=async()=>{await J(),K()};return te(()=>{G(),a()}),(pt,j)=>{const M=S("font-awesome-icon"),R=S("router-link");return u(),_(N,null,[t(i)?(u(),_("main",ze,[e("div",Be,[e("div",Le,[e("div",je,[r(R,{to:`/room/${t(g).params.id}`,class:"text-6 lg:text-8 flex items-center"},{default:U(()=>[r(M,{icon:"fa-solid fa-chevron-left",class:"text-6 lg:text-8 me-2"}),w("確認訂房資訊 ")]),_:1},8,["to"]),e("div",null,[Me,e("div",Ie,[e("div",null,[Oe,e("p",null,m(t(i).name),1)]),e("div",Pe,[e("div",null,[qe,e("p",Ze,"入住："+m(t(b).getTradDateFormat(new Date(t(f).start))),1),e("p",null,"退房："+m(t(b).getTradDateFormat(new Date(t(f).end))),1)]),r(R,{to:`/room/${t(g).params.id}`,class:"underline ms-auto hover:text-primary-100"},{default:U(()=>[w("編輯")]),_:1},8,["to"])]),e("div",Je,[e("div",null,[Ke,e("p",null,m(t(h))+"人",1)]),r(R,{to:`/room/${t(g).params.id}`,class:"underline ms-auto hover:text-primary-100"},{default:U(()=>[w("編輯")]),_:1},8,["to"])])])]),e("div",Ge,[r(Ue)]),e("div",null,[He,e("div",Qe,[r(le,{info:t(i),layout:t(k)},null,8,["info","layout"])])])]),e("div",We,[e("div",Xe,[e("div",Ye,[e("div",et,[e("img",{src:t(i).imageUrl,class:"rounded-2 w-full h-[180px] lg:h-[272px] object-cover",alt:t(i).name},null,8,tt),e("div",st,[ot,e("div",lt,[e("div",at,[e("p",null,[w("NT$ "+m(t(b).toThousands(t(i).price))+" ",1),r(M,{icon:"fa-solid fa-xmark"}),w(" "+m(t(b).getNightNum(t(f).start,t(f).end))+" 晚",1)]),e("p",nt,"NT$ "+m(t(b).toThousands(t(i).price*t(b).getNightNum(t(f).start,t(f).end))),1)]),rt,e("div",it,[dt,e("p",ct," NT$ "+m(t(b).toThousands(t(i).price)),1)])])]),e("button",{type:"button",class:"p-4 text-bold rounded-2 bg-primary-100 text-white disabled:bg-neutral-40 disabled:text-neutral-60",disabled:!s.value,onClick:j[0]||(j[0]=mt=>t(v)())},"確認訂房",8,ut)])])])])])])])):E("",!0),t(x)?(u(),se(Ee,{key:1})):E("",!0)],64)}}});export{Nt as default};
