import{d as I,s as R,a as $,b as r,c as i,e,t as m,u as o,f as a,w as C,n as f,F as h,k as U,N as j,p as b,v as x,z as D,o as N,g as q,j as F,h as T}from"./index-EXT9bJu_.js";import{u as S}from"./roomStore-jd1KYgYJ.js";import{u as P}from"./userStore-H5QsE48K.js";import"./swal-MzZ19o4Z.js";const z={class:"fixed top-0 left-0 w-full h-full bg-neutral-100/50 z-10"},B={class:"flex justify-center items-center h-full px-0 sm:px-4"},E={class:"bg-white w-[1024px] h-[600px] overflow-scroll"},J={class:"sticky top-0 z-10 px-5 py-4 border-b border-primary flex justify-between bg-primary-40 text-primary"},O={class:"text-5"},A={class:"p-5"},G={class:"flex flex-col lg:flex-row gap-6"},H={class:"basis-full lg:basis-7/12 flex flex-col gap-4 lg:order-1"},K=e("label",{for:"room-name",class:"font-bold"},"房型名稱",-1),Q={class:"grid grid-cols-2 gap-4"},W=e("label",{for:"room-area",class:"font-bold"},"坪數",-1),X=e("label",{for:"room-bed",class:"font-bold"},"床數",-1),Y={class:"relative"},Z=e("option",{value:"",selected:""},"請選擇床數",-1),ee=["value"],le=e("div",{class:"absolute top-0 bottom-0 right-0 m-auto p-4"},[e("span",{class:"material-icons"},"keyboard_arrow_down")],-1),oe=e("label",{for:"room-people",class:"font-bold"},"最大人數",-1),te=e("label",{for:"room-price",class:"font-bold"},"價格",-1),se=e("label",{for:"room-name",class:"font-bold"},"描述",-1),ae=e("p",{class:"font-bold mb-2"},"房內設備",-1),ne={class:"grid grid-cols-3 border border-neutral-40 p-4 rounded-2"},re=["value","id","name","onUpdate:modelValue"],de=["for"],ie=e("p",{class:"font-bold mb-2"},"備品提供",-1),ce={class:"grid grid-cols-3 border border-neutral-40 p-4 rounded-2"},ue=["value","id","name","onUpdate:modelValue"],me=["for"],pe={class:"basis-full lg:basis-5/12"},_e={class:"flex flex-col gap-6"},fe={class:"pb-6 border-b border-neutral-40"},be=e("label",{for:"room-img",class:"font-bold"},"房型主圖",-1),ve=["src"],xe=e("label",{for:"room-imgs",class:"font-bold"},"多圖設置",-1),he={class:"flex flex-col gap-2"},ge=["src"],ye=["src"],Ve=["src"],Ue=["src"],we=["src"],ke={class:"flex gap-2 justify-end"},$e=e("button",{type:"submit",class:"btn btn-primary"},"確認",-1),Re=I({__name:"RoomModal",setup(M){const p=S(),{showRoomModal:_,updateRoomType:g,roomDataTemp:t,bedType:w}=R(p),v=p.createRoom,y=p.editRoom,V=p.resetRoomDataTemp;return(L,s)=>{const c=$("VField"),u=$("ErrorMessage"),n=$("VForm");return r(),i("div",z,[e("div",B,[e("div",E,[e("div",J,[e("h1",O,m(o(g)==="create"?"新增":"編輯")+"房型 ",1),e("span",{class:"material-icons cursor-pointer",onClick:s[0]||(s[0]=d=>(_.value=!1,o(V)()))},"close")]),e("div",A,[a(n,{class:"flex flex-col gap-4",onSubmit:s[14]||(s[14]=d=>(o(g)==="create"?o(v)():o(y)(),_.value=!1))},{default:C(({errors:d})=>[e("div",G,[e("div",H,[e("div",null,[K,a(c,{type:"text",id:"room-name",name:"房型名稱",class:f([{"is-invalid":d.房型名稱},"form-input"]),rules:"required",modelValue:o(t).name,"onUpdate:modelValue":s[1]||(s[1]=l=>o(t).name=l),placeholder:"請輸入房型名稱"},null,8,["class","modelValue"]),a(u,{name:"房型名稱",class:"text-alert-100 text-3h"})]),e("div",Q,[e("div",null,[W,a(c,{type:"number",id:"room-area",name:"坪數",class:f([{"is-invalid":d.坪數},"form-input"]),rules:"required|min_value:3|max_value:100",modelValue:o(t).areaInfo,"onUpdate:modelValue":s[2]||(s[2]=l=>o(t).areaInfo=l),placeholder:"請輸入坪數"},null,8,["class","modelValue"]),a(u,{name:"坪數",class:"text-alert-100 text-3h"})]),e("div",null,[X,e("div",Y,[a(c,{as:"select",id:"room-bed",name:"床數",class:f([{"is-invalid":d.床數},"p-4 rounded-2 form-select w-full"]),modelValue:o(t).bedInfo,"onUpdate:modelValue":s[3]||(s[3]=l=>o(t).bedInfo=l)},{default:C(()=>[Z,(r(!0),i(h,null,U(o(w),l=>(r(),i("option",{key:l,value:l},m(l),9,ee))),128))]),_:2},1032,["class","modelValue"]),le]),a(u,{name:"床數",class:"text-alert-100 text-3h"})]),e("div",null,[oe,a(c,{type:"number",id:"room-people",name:"最大人數",class:f([{"is-invalid":d.最大人數},"form-input"]),rules:"required|min_value:1|max_value:20",modelValue:o(t).maxPeople,"onUpdate:modelValue":s[4]||(s[4]=l=>o(t).maxPeople=l),placeholder:"請輸入最大人數"},null,8,["class","modelValue"]),a(u,{name:"最大人數",class:"text-alert-100 text-3h"})]),e("div",null,[te,a(c,{type:"number",id:"room-price",name:"價格",class:f([{"is-invalid":d.價格},"form-input"]),rules:"required|min_value:100|max_value:1000000",modelValue:o(t).price,"onUpdate:modelValue":s[5]||(s[5]=l=>o(t).price=l),placeholder:"請輸入價格"},null,8,["class","modelValue"]),a(u,{name:"價格",class:"text-alert-100"})])]),e("div",null,[se,a(c,{as:"textarea",id:"room-name",name:"描述",class:f([{"is-invalid":d.描述},"form-input"]),rules:"required",modelValue:o(t).description,"onUpdate:modelValue":s[6]||(s[6]=l=>o(t).description=l),placeholder:"請輸入描述"},null,8,["class","modelValue"]),a(u,{class:"text-alert-100",name:"描述"})]),e("div",null,[ae,e("div",ne,[(r(!0),i(h,null,U(o(t).facilityInfo,l=>(r(),i("div",{key:l.title,class:"flex items-center"},[b(e("input",{type:"checkbox",class:"w-[16px]",value:l.title,id:l.title,name:l.title,"onUpdate:modelValue":k=>l.isProvide=k},null,8,re),[[j,l.isProvide]]),e("label",{for:l.title},m(l.title),9,de)]))),128))])]),e("div",null,[ie,e("div",ce,[(r(!0),i(h,null,U(o(t).amenityInfo,l=>(r(),i("div",{key:l.title,class:"flex items-center"},[b(e("input",{type:"checkbox",class:"w-[16px]",value:l.title,id:l.title,name:l.title,"onUpdate:modelValue":k=>l.isProvide=k},null,8,ue),[[j,l.isProvide]]),e("label",{for:l.title},m(l.title),9,me)]))),128))])])]),e("div",pe,[e("div",_e,[e("div",fe,[be,a(c,{type:"text",id:"room-img",name:"房型圖片",class:f([{"is-invalid":d.房型圖片},"form-input"]),rules:"required",modelValue:o(t).imageUrl,"onUpdate:modelValue":s[7]||(s[7]=l=>o(t).imageUrl=l),placeholder:"請輸入房型圖片連結"},null,8,["class","modelValue"]),a(u,{name:"房型圖片",class:"text-alert-100 text-3h"}),e("img",{src:o(t).imageUrl,class:"mt-2 rounded-2 h-[200px] w-full object-cover",alt:""},null,8,ve)]),e("div",null,[xe,e("div",he,[e("div",null,[b(e("input",{type:"text",class:"form-input mb-2",placeholder:"請輸入其他圖片連結","onUpdate:modelValue":s[8]||(s[8]=l=>o(t).imageUrlList[0]=l)},null,512),[[x,o(t).imageUrlList[0]]]),e("img",{src:o(t).imageUrlList[0],class:"rounded-2 h-[200px] w-full object-cover",alt:""},null,8,ge)]),e("div",null,[b(e("input",{type:"text",class:"form-input mb-2",placeholder:"請輸入其他圖片連結","onUpdate:modelValue":s[9]||(s[9]=l=>o(t).imageUrlList[1]=l)},null,512),[[x,o(t).imageUrlList[1]]]),e("img",{src:o(t).imageUrlList[1],class:"rounded-2 h-[200px] w-full object-cover",alt:""},null,8,ye)]),e("div",null,[b(e("input",{type:"text",class:"form-input mb-2",placeholder:"請輸入其他圖片連結","onUpdate:modelValue":s[10]||(s[10]=l=>o(t).imageUrlList[2]=l)},null,512),[[x,o(t).imageUrlList[2]]]),e("img",{src:o(t).imageUrlList[2],class:"rounded-2 h-[200px] w-full object-cover",alt:""},null,8,Ve)]),e("div",null,[b(e("input",{type:"text",class:"form-input mb-2",placeholder:"請輸入其他圖片連結","onUpdate:modelValue":s[11]||(s[11]=l=>o(t).imageUrlList[3]=l)},null,512),[[x,o(t).imageUrlList[3]]]),e("img",{src:o(t).imageUrlList[3],class:"rounded-2 h-[200px] w-full object-cover",alt:""},null,8,Ue)]),e("div",null,[b(e("input",{type:"text",class:"form-input mb-2",placeholder:"請輸入其他圖片連結","onUpdate:modelValue":s[12]||(s[12]=l=>o(t).imageUrlList[4]=l)},null,512),[[x,o(t).imageUrlList[4]]]),e("img",{src:o(t).imageUrlList[4],class:"rounded-2 h-[200px] w-full object-cover",alt:""},null,8,we)])])])])])]),e("div",ke,[e("button",{type:"button",class:"btn btn-secondary",onClick:s[13]||(s[13]=l=>(_.value=!1,o(V)()))},"取消"),$e])]),_:1})])])])])}}}),Le={class:"container mx-auto px-4 xl:px-0 py-10 lg:py-20"},Ce={class:"flex justify-between items-center mb-6"},je=e("h1",{class:"text-6"},"房型管理",-1),Te={class:"w-full"},Ie=e("thead",null,[e("tr",{class:"border-y border-neutral-40"},[e("th",{class:"p-2",colspan:"2"},"房型名稱"),e("th",{class:"p-2"},"床數"),e("th",{class:"p-2"},"坪數"),e("th",{class:"p-2 text-end"},"價格"),e("th",{class:"p-2 text-start"},"管理")])],-1),Se={class:"p-2"},Me=["src","alt"],De={class:"p-2"},Ne={class:"p-2 text-center"},qe={class:"p-2 text-center"},Fe={class:"p-2 text-end"},Pe={class:"p-2"},ze={class:"flex flex-wrap gap-2"},Be=["onClick"],Ee=["onClick"],Je={colspan:"6",class:"text-end border-y border-neutral-40"},Ke=I({__name:"RoomAdmin",setup(M){const p=S(),{roomData:_,roomDataTemp:g,updateRoomType:t,editRoomId:w,showRoomModal:v}=R(p),y=p.getRooms,V=p.deleteRoom,L=P(),{isChecked:s}=R(L);return D(s,c=>{c&&y()}),N(()=>{s&&y()}),(c,u)=>(r(),i(h,null,[e("div",Le,[e("div",Ce,[je,e("button",{class:"p-3 btn-primary text-white",onClick:u[0]||(u[0]=n=>(v.value=!0,t.value="create"))}," 新增房型 ")]),e("table",Te,[Ie,e("tbody",null,[(r(!0),i(h,null,U(o(_),n=>(r(),i("tr",{key:n._id,class:"border-b border-neutral-40"},[e("td",Se,[n.imageUrl?(r(),i("img",{key:0,class:"w-[80px] h-[80px] object-cover rounded-2",src:n.imageUrl,alt:n.name},null,8,Me)):T("",!0)]),e("td",De,m(n.name),1),e("td",Ne,m(n.bedInfo),1),e("td",qe,m(n.areaInfo)+" 坪",1),e("td",Fe,m(n.price),1),e("td",Pe,[e("div",ze,[e("button",{class:"p-3 btn-primary",onClick:d=>(v.value=!0,g.value=JSON.parse(JSON.stringify(n)),t.value="edit",w.value=n._id)}," 編輯 ",8,Be),e("button",{class:"p-3 btn-secondary",onClick:d=>o(V)(n._id)}," 刪除 ",8,Ee)])])]))),128))]),e("tfoot",null,[e("tr",null,[e("td",Je," 共 "+m(o(_).length)+" 筆資料 ",1)])])])]),q(" "+m(o(_)[0])+" ",1),o(v)?(r(),F(Re,{key:0})):T("",!0)],64))}});export{Ke as default};
