import{s as L,b as $,e as n,f as i,g as e,t as u,c as o,h as r,i as P,n as h,F as g,m as V,L as T,B as j,j as f,k as y,C as F,M,d as D,o as B,p as q}from"./index-76dnDRcX.js";import{f as J}from"./format-ue8EY1kP.js";import{u as S}from"./roomStore-lToHZxgB.js";import{u as O}from"./userStore-Ie69Ua6O.js";import"./userApi-YNycpMYI.js";const E={class:"sticky top-0 px-5 py-4 z-10 border-b border-primary flex justify-between bg-primary-40 text-primary"},z={class:"text-5"},A={class:"p-8"},G={class:"flex flex-col lg:flex-row gap-4 lg:gap-10"},H={class:"w-full lg:w-7/12 flex flex-col gap-4 lg:order-1"},K=e("label",{for:"room-name",class:"font-bold"},"房型名稱",-1),Q={class:"grid grid-cols-2 gap-4"},W=e("label",{for:"room-area",class:"font-bold"},"坪數",-1),X=e("label",{for:"room-bed",class:"font-bold"},"床數",-1),Y={class:"relative"},Z=e("option",{value:"",selected:""},"請選擇床數",-1),ee=["value"],oe=e("div",{class:"absolute top-0 bottom-0 right-0 m-auto p-4 pointer-events-none"},[e("span",{class:"material-icons"},"keyboard_arrow_down")],-1),te=e("label",{for:"room-people",class:"font-bold"},"最大人數",-1),le=e("label",{for:"room-price",class:"font-bold"},"價格",-1),se=e("label",{for:"room-name",class:"font-bold"},"描述",-1),ae=e("p",{class:"font-bold mb-2"},"房內設備",-1),ne={class:"grid grid-cols-3 border border-neutral-40 p-4 rounded-2"},re=["for"],ie=["value","id","name","onUpdate:modelValue"],de=e("p",{class:"font-bold mb-2"},"備品提供",-1),ce={class:"grid grid-cols-3 border border-neutral-40 p-4 rounded-2"},ue=["for"],me=["value","id","name","onUpdate:modelValue"],pe={class:"flex gap-2 justify-end"},fe={type:"submit",class:"btn btn-primary"},_e={class:"w-full lg:w-5/12"},be={class:"flex flex-col gap-6"},ve={class:"pb-6 border-b border-neutral-40"},he=e("label",{for:"room-img",class:"font-bold"},"房型主圖",-1),xe=["src"],ge=e("label",{for:"room-imgs",class:"font-bold"},"多圖設置",-1),ye={class:"flex flex-col gap-2"},ke={class:"flex border border-neutral-40 rounded-4"},we=["onUpdate:modelValue"],$e=["onClick"],Ve=["src","alt"],Ue={key:0},Re={__name:"RoomModal",setup(I){const m=S(),{showRoomModal:_,updateRoomType:p,tempRoom:l,bedType:k}=L(m),d=m.createRoom,x=m.editRoom,U=m.closeRoomModal;return(R,s)=>{const b=$("VField"),v=$("ErrorMessage"),w=$("font-awesome-icon"),N=$("VForm");return n(),i("div",{onClick:s[13]||(s[13]=M(c=>o(U)(),["stop"])),class:"fixed top-0 left-0 w-full h-full bg-neutral-100/50 backdrop-blur-sm flex justify-end"},[e("div",{onClick:s[12]||(s[12]=M(()=>{},["stop"])),"data-aos":"fade-left","data-aos-delay":"50","data-aos-duration":"300",class:"bg-white w-full lg:w-3/5 duration-300 h-full overflow-scroll"},[e("div",E,[e("h1",z,u(o(p)==="create"?"新增":"編輯")+"房型",1),e("span",{class:"material-icons cursor-pointer",onClick:s[0]||(s[0]=c=>o(U)())},"close")]),e("div",A,[r(N,{class:"flex flex-col gap-4",onSubmit:s[11]||(s[11]=c=>(o(p)==="create"?o(d)():o(x)(),_.value=!1))},{default:P(({errors:c})=>[e("div",G,[e("div",H,[e("div",null,[K,r(b,{type:"text",id:"room-name",name:"房型名稱",class:h([{"is-invalid":c.房型名稱},"form-input"]),rules:"required",modelValue:o(l).name,"onUpdate:modelValue":s[1]||(s[1]=t=>o(l).name=t),placeholder:"請輸入房型名稱"},null,8,["class","modelValue"]),r(v,{name:"房型名稱",class:"text-alert-100 text-3h"})]),e("div",Q,[e("div",null,[W,r(b,{type:"number",id:"room-area",name:"坪數",class:h([{"is-invalid":c.坪數},"form-input"]),rules:"required|min_value:3|max_value:100",modelValue:o(l).areaInfo,"onUpdate:modelValue":s[2]||(s[2]=t=>o(l).areaInfo=t),placeholder:"請輸入坪數"},null,8,["class","modelValue"]),r(v,{name:"坪數",class:"text-alert-100 text-3h"})]),e("div",null,[X,e("div",Y,[r(b,{as:"select",id:"room-bed",name:"床數",class:h([{"is-invalid":c.床數},"p-4 rounded-2 form-select w-full"]),modelValue:o(l).bedInfo,"onUpdate:modelValue":s[3]||(s[3]=t=>o(l).bedInfo=t)},{default:P(()=>[Z,(n(!0),i(g,null,V(o(k),t=>(n(),i("option",{key:t,value:t},u(t),9,ee))),128))]),_:2},1032,["class","modelValue"]),oe]),r(v,{name:"床數",class:"text-alert-100 text-3h"})]),e("div",null,[te,r(b,{type:"number",id:"room-people",name:"最大人數",class:h([{"is-invalid":c.最大人數},"form-input"]),rules:"required|min_value:1|max_value:20",modelValue:o(l).maxPeople,"onUpdate:modelValue":s[4]||(s[4]=t=>o(l).maxPeople=t),placeholder:"請輸入最大人數"},null,8,["class","modelValue"]),r(v,{name:"最大人數",class:"text-alert-100 text-3h"})]),e("div",null,[le,r(b,{type:"number",id:"room-price",name:"價格",class:h([{"is-invalid":c.價格},"form-input"]),rules:"required|min_value:100|max_value:1000000",modelValue:o(l).price,"onUpdate:modelValue":s[5]||(s[5]=t=>o(l).price=t),placeholder:"請輸入價格"},null,8,["class","modelValue"]),r(v,{name:"價格",class:"text-alert-100"})])]),e("div",null,[se,r(b,{as:"textarea",id:"room-name",name:"描述",class:h([{"is-invalid":c.描述},"form-input"]),rules:"required",modelValue:o(l).description,"onUpdate:modelValue":s[6]||(s[6]=t=>o(l).description=t),placeholder:"請輸入描述"},null,8,["class","modelValue"]),r(v,{class:"text-alert-100",name:"描述"})]),e("div",null,[ae,e("div",ne,[(n(!0),i(g,null,V(o(l).facilityInfo,t=>(n(),i("div",{key:t.title,class:"flex items-center"},[e("label",{for:t.title,class:"flex items-center"},[j(e("input",{type:"checkbox",class:"",value:t.title,id:t.title,name:t.title,"onUpdate:modelValue":a=>t.isProvide=a},null,8,ie),[[T,t.isProvide]]),e("span",null,[r(w,{icon:"fa-solid fa-check",class:h(t.isProvide?"text-white text-3":"hidden")},null,8,["class"])]),f(" "+u(t.title),1)],8,re)]))),128))])]),e("div",null,[de,e("div",ce,[(n(!0),i(g,null,V(o(l).amenityInfo,t=>(n(),i("div",{key:t.title,class:"flex items-center"},[e("label",{for:t.title,class:"flex items-center"},[j(e("input",{type:"checkbox",class:"",value:t.title,id:t.title,name:t.title,"onUpdate:modelValue":a=>t.isProvide=a},null,8,me),[[T,t.isProvide]]),e("span",null,[r(w,{icon:"fa-solid fa-check",class:h(t.isProvide?"text-white text-3":"hidden")},null,8,["class"])]),f(" "+u(t.title),1)],8,ue)]))),128))])]),e("div",pe,[e("button",{type:"button",class:"btn btn-secondary",onClick:s[7]||(s[7]=t=>(_.value=!1,R.resetTempRoom()))},"取消"),e("button",fe,"確認"+u(o(p)==="create"?"新增":"更新"),1)])]),e("div",_e,[e("div",be,[e("div",ve,[he,r(b,{type:"text",id:"room-img",name:"房型圖片",class:h([{"is-invalid":c.房型圖片},"form-input"]),rules:"required",modelValue:o(l).imageUrl,"onUpdate:modelValue":s[8]||(s[8]=t=>o(l).imageUrl=t),placeholder:"請輸入房型圖片連結"},null,8,["class","modelValue"]),r(v,{name:"房型圖片",class:"text-alert-100 text-3h"}),o(l).imageUrl?(n(),i("img",{key:0,src:o(l).imageUrl,class:"mt-2 rounded-2 h-[200px] w-full object-cover",alt:""},null,8,xe)):y("",!0)]),e("div",null,[ge,e("div",ye,[o(l).imageUrlList.length?(n(),i(g,{key:0},[(n(!0),i(g,null,V(o(l).imageUrlList,(t,a)=>(n(),i("div",{key:`${o(l).name} + ${a}`},[e("div",ke,[j(e("input",{type:"text",class:"p-4 grow rounded-l-4","onUpdate:modelValue":C=>o(l).imageUrlList[a]=C,placeholder:"請輸入房型圖片連結"},null,8,we),[[F,o(l).imageUrlList[a]]]),e("button",{class:"p-4 rounded-r-4 hover:bg-primary-40 hover:text-primary",onClick:C=>o(l).imageUrlList.splice(a,1)},[r(w,{icon:"fa-solid fa-xmark"})],8,$e)]),o(l).imageUrlList[a]?(n(),i("img",{key:0,class:"mt-2 rounded-2 h-[200px] w-full object-cover",src:o(l).imageUrlList[a],alt:`${o(l).name} + ${a}`},null,8,Ve)):y("",!0)]))),128)),o(l).imageUrlList[o(l).imageUrlList.length-1]?(n(),i("div",Ue,[e("button",{onClick:s[9]||(s[9]=t=>o(l).imageUrlList.push("")),class:"btn btn-primary w-full"},"新增圖片")])):y("",!0)],64)):(n(),i("button",{key:1,class:"btn btn-primary",onClick:s[10]||(s[10]=t=>o(l).imageUrlList.push(""))},"新增圖片"))])])])])])]),_:1})])])])}}},Ce={class:"w-full h-[30vh] lg:h-[24vh] flex justify-center items-center px-6"},Le={class:"text-5 font-bold text-justify"},Me={class:"text-primary-100"},je={class:"p-3 flex gap-4 border-t border-primary-60"},Se=D({__name:"RoomDelete",setup(I){const m=S(),{tempRoom:_}=L(m),p=m.closeRoomDelModal,l=m.deleteRoom;return(k,d)=>(n(),i("div",{onClick:d[3]||(d[3]=M(x=>o(p)(),["stop"])),class:"fixed top-0 left-0 w-full h-full bg-black/40 backdrop-blur-sm flex justify-center items-end lg:items-center"},[e("div",{onClick:d[2]||(d[2]=M(()=>{},["stop"])),class:"bg-white rounded-t-[16px] lg:rounded-[16px] w-full lg:w-[36vw]"},[e("div",Ce,[e("p",Le,[f(" 刪除後無法復原，確定要刪除 "),e("span",Me,u(o(_).name),1),f(" 嗎？ ")])]),e("div",je,[e("button",{class:"btn btn-secondary w-full",onClick:d[0]||(d[0]=x=>o(p)())},"關閉視窗"),e("button",{class:"btn btn-primary w-full",onClick:d[1]||(d[1]=x=>(o(l)(),o(p)()))},"刪除")])])]))}}),Ie={class:"p-10 flex flex-col gap-6"},Ne={class:"flex items-end"},Pe=e("h1",{class:"text-7"},"房型管理",-1),Te={key:0,class:"font-bold ms-2"},qe={class:"text-primary-100"},De={key:0,class:"text-primary-100 text-7 font-bold w-full h-[70vh] flex justify-center items-center"},Fe={key:1,class:"w-full admin-table"},Be=e("thead",null,[e("tr",{class:"border-y border-primary-60"},[e("th"),e("th",{class:"text-start"},"房型名稱"),e("th",null,"床數"),e("th",null,"坪數"),e("th",null,"容納人數"),e("th",{class:"text-end"},"價格"),e("th",{class:"text-center"},"管理")])],-1),Je=["src","alt"],Oe={class:"font-bold"},Ee={class:"text-center"},ze={class:"text-center"},Ae={class:"text-center"},Ge={class:"text-end"},He={class:"flex flex-wrap justify-center gap-2"},Ke=["onClick"],Qe=["onClick"],oo=D({__name:"RoomAdmin",setup(I){const m=S(),{roomList:_,tempRoom:p,updateRoomType:l,editRoomId:k,showRoomModal:d,showDelModal:x}=L(m),U=m.getRooms,R=O(),{isChecked:s}=L(R),b=R.checkUser,v=()=>{s.value&&U()},w=async()=>{await b(),v()};return B(()=>{w()}),(N,c)=>{const t=$("font-awesome-icon");return n(),i(g,null,[e("div",Ie,[e("div",Ne,[Pe,o(_)?(n(),i("p",Te,[f("(共 "),e("span",qe,u(o(_).length),1),f(" 筆資料)")])):y("",!0)]),e("button",{class:"btn btn-primary ms-auto",onClick:c[0]||(c[0]=a=>(d.value=!0,l.value="create"))},[r(t,{icon:"fa-solid fa-plus",class:"me-2"}),f(" 新增房型 ")]),o(_)?(n(),i("table",Fe,[Be,e("tbody",null,[(n(!0),i(g,null,V(o(_),a=>(n(),i("tr",{key:a._id,class:"border-b border-primary-60 hover:bg-primary-40"},[e("td",null,[a.imageUrl?(n(),i("img",{key:0,class:"w-full h-[120px] object-cover rounded-2",src:a.imageUrl,alt:a.name},null,8,Je)):y("",!0)]),e("td",Oe,u(a.name),1),e("td",Ee,u(a.bedInfo),1),e("td",ze,u(a.areaInfo)+" 坪",1),e("td",Ae,u(a.maxPeople)+" 人",1),e("td",Ge,"NT$ "+u(o(J).toThousands(a.price)),1),e("td",null,[e("div",He,[e("button",{onClick:C=>(d.value=!0,p.value=JSON.parse(JSON.stringify(a)),l.value="edit",k.value=a._id),class:"btn btn-primary text-4h"},[r(t,{icon:"fa-solid fa-pencil",class:"me-2"}),f(" 編輯 ")],8,Ke),e("button",{onClick:C=>(x.value=!0,p.value=JSON.parse(JSON.stringify(a)),k.value=a._id),class:"btn text-primary-100 text-4h hover:text-primary border border-primary-100 hover:border-primary bg-transparent hover:bg-primary-60"},[r(t,{icon:"fa-solid fa-trash-can",class:"me-2"}),f(" 刪除 ")],8,Qe)])])]))),128))])])):(n(),i("div",De,[r(t,{icon:"fa-solid fa-bed",class:"me-2"}),f(" 目前還沒有任何房型，快去新增吧！ ")]))]),o(d)?(n(),q(Re,{key:0})):y("",!0),o(x)?(n(),q(Se,{key:1})):y("",!0)],64)}}});export{oo as default};
