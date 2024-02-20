import{s as N,b as g,c as n,e as c,f as e,t as h,j as t,g as i,h as B,n as $,k as y,d as U,i as p,N as S,o as J,F as M,m as O,p as F}from"./index-_3h-oLcu.js";import{u as C}from"./newsStore-RS_J56If.js";import{u as T}from"./userStore-Gs78NrJG.js";import"./swal-szYjbNcO.js";const q={class:"fixed top-0 left-0 w-full h-full bg-neutral-100/50 backdrop-blur-sm flex justify-center items-center"},z={"data-aos":"fade-up","data-aos-delay":"50","data-aos-duration":"300",class:"bg-white w-full md:w-2/3 xl:w-1/3 h-full md:h-fit md:max-h-[80vh] xl:max-h-[70vh] md:rounded-4 overflow-scroll duration-500 ease-in"},E={class:"sticky top-0 px-5 py-4 z-10 border-b border-primary flex justify-between bg-primary-40 text-primary"},L={class:"text-5"},A={class:"p-4 flex flex-col gap-4"},I=e("label",{for:"news-title",class:"font-bold"},"名稱",-1),R=e("label",{for:"news-description",class:"font-bold"},"內容",-1),G=e("label",{for:"news-image",class:"font-bold"},"圖片",-1),H=["src"],K={class:"bg-white sticky bottom-0 z-10 border-t border-primary-60 p-4 flex gap-2 justify-end"},P={type:"submit",class:"btn btn-primary"},Q={__name:"NewsModal",setup(V){const a=C(),{updateNewsType:d,tempNews:o}=N(a),f=a.createNews,w=a.editNews,s=a.closeNewsModal;return(_,l)=>{const b=g("VField"),x=g("ErrorMessage"),k=g("VForm");return n(),c("div",q,[e("div",z,[e("div",E,[e("h1",L,h(t(d)==="create"?"新增":"編輯")+"消息",1),e("span",{class:"material-icons cursor-pointer",onClick:l[0]||(l[0]=m=>t(s)())},"close")]),i(k,{class:"flex flex-col",onSubmit:l[5]||(l[5]=m=>(t(d)==="create"?t(f)():t(w)(),t(s)()))},{default:B(({errors:m})=>[e("div",A,[e("div",null,[I,i(b,{type:"text",id:"news-title",name:"名稱",class:$([{"is-invalid":m.名稱},"form-input"]),rules:"required",modelValue:t(o).title,"onUpdate:modelValue":l[1]||(l[1]=u=>t(o).title=u),placeholder:"請輸入名稱"},null,8,["class","modelValue"]),i(x,{name:"名稱",class:"text-alert-100 text-3h"})]),e("div",null,[R,i(b,{as:"textarea",id:"news-description",name:"內容",class:$([{"is-invalid":m.內容},"form-input"]),rules:"required",modelValue:t(o).description,"onUpdate:modelValue":l[2]||(l[2]=u=>t(o).description=u),placeholder:"請輸入內容"},null,8,["class","modelValue"]),i(x,{name:"內容",class:"text-alert-100 text-3h"})]),e("div",null,[G,i(b,{type:"text",id:"news-image",name:"圖片",class:$([{"is-invalid":m.圖片},"form-input"]),rules:"required",modelValue:t(o).image,"onUpdate:modelValue":l[3]||(l[3]=u=>t(o).image=u),placeholder:"請輸入圖片連結"},null,8,["class","modelValue"]),i(x,{name:"圖片",class:"text-alert-100 text-3h"}),t(o).image?(n(),c("img",{key:0,src:t(o).image,class:"mt-2 rounded-2 h-[200px] w-full object-cover",alt:""},null,8,H)):y("",!0)])]),e("div",K,[e("button",{type:"button",class:"btn btn-secondary",onClick:l[4]||(l[4]=u=>t(s)())},"取消"),e("button",P,"確認"+h(t(d)==="create"?"新增":"更新"),1)])]),_:1})])])}}},W={class:"w-full h-[30vh] lg:h-[24vh] flex justify-center items-center px-6"},X={class:"text-5 font-bold text-justify"},Y={class:"text-primary-100"},Z={class:"p-3 flex gap-4 border-t border-primary-60"},ee=U({__name:"NewsDelete",setup(V){const a=C(),{tempNews:d}=N(a),o=a.closeNewsDelModal,f=a.deleteNews;return(w,s)=>(n(),c("div",{onClick:s[3]||(s[3]=S(_=>t(o)(),["stop"])),class:"fixed top-0 left-0 w-full h-full bg-black/40 backdrop-blur-sm flex justify-center items-end lg:items-center"},[e("div",{onClick:s[2]||(s[2]=S(()=>{},["stop"])),class:"bg-white rounded-t-[16px] lg:rounded-[16px] w-full lg:w-[36vw]"},[e("div",W,[e("p",X,[p(" 刪除後無法復原，確定要刪除 "),e("span",Y,h(t(d).title),1),p(" 嗎？ ")])]),e("div",Z,[e("button",{class:"btn btn-secondary w-full",onClick:s[0]||(s[0]=_=>t(o)())},"關閉視窗"),e("button",{class:"btn btn-primary w-full",onClick:s[1]||(s[1]=_=>(t(f)(),t(o)()))},"刪除")])])]))}}),te={class:"p-10 flex flex-col gap-6"},se={class:"flex items-end"},oe=e("h1",{class:"text-7"},"消息管理",-1),le={key:0,class:"font-bold ms-2"},ne={class:"text-primary-100"},ae={key:0,class:"text-primary-100 text-7 font-bold w-full h-[70vh] flex justify-center items-center"},re={key:1,class:"w-full admin-table"},ie=e("thead",null,[e("tr",{class:"border-y border-primary-60"},[e("th",{class:"text-start",width:"15%"}),e("th",{class:"text-center",width:"20%"},"名稱"),e("th",{class:"text-center",width:"30%"},"內容"),e("th",{class:"text-center",width:"25%"},"管理")])],-1),de=["src","alt"],ce={class:"text-center"},ue={class:"text-justify"},pe={class:"flex flex-wrap justify-center gap-2"},me=["onClick"],fe=["onClick"],ye=U({__name:"NewsAdmin",setup(V){const a=C(),{newsList:d,tempNews:o,editNewsId:f,updateNewsType:w,showNewsModal:s,showDelModal:_}=N(a),l=a.getNews,b=T(),{isChecked:x}=N(b),k=b.checkUser,m=()=>{x.value&&l()},u=async()=>{await k(),m()};return J(()=>{u()}),(_e,j)=>{const v=g("font-awesome-icon");return n(),c(M,null,[e("div",te,[e("div",se,[oe,t(d)?(n(),c("p",le,[p("(共 "),e("span",ne,h(t(d).length),1),p(" 筆資料)")])):y("",!0)]),e("button",{class:"btn btn-primary ms-auto",onClick:j[0]||(j[0]=r=>(s.value=!0,w.value="create"))},[i(v,{icon:"fa-solid fa-plus",class:"me-2"}),p(" 新增消息 ")]),t(d)?(n(),c("table",re,[ie,e("tbody",null,[(n(!0),c(M,null,O(t(d),r=>(n(),c("tr",{key:r._id,class:"border-b border-primary-60 hover:bg-primary-40"},[e("th",null,[r.image?(n(),c("img",{key:0,class:"w-full h-[120px] object-cover rounded-2",src:r.image,alt:r.title},null,8,de)):y("",!0)]),e("th",ce,h(r.title),1),e("th",ue,h(r.description),1),e("th",null,[e("div",pe,[e("button",{onClick:D=>(s.value=!0,o.value=JSON.parse(JSON.stringify(r)),w.value="edit",f.value=r._id),class:"btn btn-primary text-4h"},[i(v,{icon:"fa-solid fa-pencil",class:"me-2"}),p(" 編輯 ")],8,me),e("button",{onClick:D=>(_.value=!0,o.value=JSON.parse(JSON.stringify(r)),f.value=r._id),class:"btn text-primary-100 text-4h hover:text-primary border border-primary-100 hover:border-primary bg-transparent hover:bg-primary-60"},[i(v,{icon:"fa-solid fa-trash-can",class:"me-2"}),p(" 刪除 ")],8,fe)])])]))),128))])])):(n(),c("div",ae,[i(v,{icon:"fa-solid fa-bed",class:"me-2"}),p(" 目前還沒有任何消息，快去新增吧！ ")]))]),t(s)?(n(),F(Q,{key:0})):y("",!0),t(_)?(n(),F(ee,{key:1})):y("",!0)],64)}}});export{ye as default};
