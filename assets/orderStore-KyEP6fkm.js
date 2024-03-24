import{q as U,u as q,A as J,r as t,v as _}from"./index-5zW-ksle.js";import{a,T as d,A as u}from"./userApi--yMtzZvb.js";import{f as h}from"./format-ue8EY1kP.js";const K=U("order",()=>{const D=q(),F=J(),v=t(""),I=t({...{checkInDate:"",checkOutDate:"",peopleNum:0,roomId:{name:"",description:"",imageUrl:"",imageUrlList:[],areaInfo:"",bedInfo:"",maxPeople:0,price:0,facilityInfo:[{title:"平面電視",isProvide:!0},{title:"吹風機",isProvide:!0},{title:"冰箱",isProvide:!0},{title:"熱水壺",isProvide:!0},{title:"檯燈",isProvide:!0},{title:"衣櫃",isProvide:!0},{title:"除濕機",isProvide:!0},{title:"浴缸",isProvide:!0},{title:"書桌",isProvide:!0},{title:"音響",isProvide:!0}],amenityInfo:[{title:"衛生紙",isProvide:!0},{title:"拖鞋",isProvide:!0},{title:"沐浴用品",isProvide:!0},{title:"清潔用品",isProvide:!0},{title:"刮鬍刀",isProvide:!0},{title:"吊衣架",isProvide:!0},{title:"浴巾",isProvide:!0},{title:"刷牙用品",isProvide:!0},{title:"罐裝水",isProvide:!0},{title:"梳子",isProvide:!0}]},userInfo:{name:"",phone:"",email:"",address:{zipcode:0,detail:""}}}}),s=t({start:"",end:""}),l=t(2),i=t({name:"",phone:"",email:""}),m=t(""),g=t(""),p=t(!1),M=async()=>{const e={checkInDate:h.getLocalDateFormat(new Date(s.value.start)),checkOutDate:h.getLocalDateFormat(new Date(s.value.end)),peopleNum:l.value,roomId:D.params.id,userInfo:{name:i.value.name,phone:i.value.phone,email:i.value.email,address:{zipcode:parseInt(m.value),detail:g.value}}};try{p.value=!0;const r=await a.post("/orders/",e);console.log("createOrder 新增成功",r),w(),F.push(`/booking-complete/${r.data.result._id}`),n(),d.fire({title:"已建立訂單",icon:"success"})}catch(r){console.log("createOrder 失敗",r),u.fire({title:"請填寫正確格式",icon:"error"})}finally{p.value=!1}},n=()=>{s.value={start:"",end:""},l.value=2,i.value={name:"",phone:"",email:""},m.value="",g.value=""},o=t(null),k=async()=>{try{console.log("getFrontOrder 取得資料",o.value);const e=await a.get(`/orders/${D.params.id}`);o.value=e.data.result}catch(e){console.log("getFrontOrder 失敗",e)}},N=_(()=>o.value?h.getNightNum(o.value.checkInDate,o.value.checkOutDate)*o.value.roomId.price:0),f=t([]),y=async()=>{try{const e=await a.get("/orders/");f.value=e.data.result}catch{}},L=async e=>{try{await a.delete(`/orders/${e}`),y(),d.fire({icon:"success",title:"成功刪除訂單"})}catch(r){console.log("deleteFrontOrder 失敗",r),u.fire({icon:"error",title:"請重新再試一次"})}},O=async()=>{try{const e=await a.get("/admin/orders/");f.value=e.data.result}catch(e){console.log("getOrders 失敗",e)}},$=async()=>{try{await a.put(`/admin/orders/${v.value}`,I.value),d.fire({icon:"success",title:"更新訂單成功"}),O()}catch(e){console.log("editOrder 失敗",e),u.fire({icon:"error",title:"更新失敗，請稍後再試一次"})}},b=async()=>{try{await a.delete(`/admin/orders/${v.value}`),d.fire({icon:"success",title:"成功刪除訂單"}),O()}catch(e){console.log("deleteOrder 失敗",e),u.fire({icon:"error",title:"刪除失敗，請稍後再試一次"})}},x=()=>{localStorage.setItem("storagePeople",l.value.toString())},A=()=>{const e=localStorage.getItem("storageDate"),r=JSON.parse(e),S=localStorage.getItem("storagePeople");r&&S&&(s.value=r,l.value=Number(S))},w=()=>{localStorage.clear()},c=t(!1),T=()=>{c.value=!0},z=()=>{c.value=!1,n()},R=()=>{c.value=!c.value},P=t(!1);return{tempOrder:I,resetTempOrder:n,editOrderId:v,bookingDate:s,peopleNum:l,userInfo:i,selectDistrict:m,addressDetail:g,isLoading:p,orderList:f,getFrontOrder:k,createOrder:M,order:o,getFrontOrders:y,totalPrice:N,deleteFrontOrder:L,getOrders:O,editOrder:$,deleteOrder:b,setStoragePeople:x,getStorageData:A,cleanStorageData:w,showOrderModal:c,openOrderModal:T,closeOrderModal:z,toggleModal:R,showDelModal:P,openOrderDelModal:()=>{P.value=!0},closeOrderDelModal:()=>{P.value=!1,n()}}});export{K as u};
