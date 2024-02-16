import{v as j,B as F,r as t,L as l}from"./index-0Nk66x3t.js";import{T as m,A as w,S as d}from"./swal-bFiefLkh.js";const n="https://freyja-g4ow.onrender.com",Y=j("userStore",()=>{const y=F(),$=t({email:"",password:""}),u=t({}),z=t(!1),I=()=>{const s=`${n}/api/v1/user/login`;l.post(s,$.value).then(e=>{const{token:o}=e.data;document.cookie=`typescript=${o}`,l.defaults.headers.common.Authorization=o,u.value=e.data.result,$.value={email:"",password:""},console.log(u.value),m.fire({icon:"success",title:"登入成功"}),y.push("/")}).catch(()=>{w.fire({icon:"error",title:"登入失敗"})})},E=()=>{document.cookie='typescript=""',r.value=!1,m.fire({icon:"success",title:"已成功"}),y.push("/")},U=t(1),a=t({name:"",email:"",password:"",phone:"",birthday:"",address:{zipcode:0,detail:"",city:"",county:""}}),k=t(""),c=t({year:new Date().getFullYear(),month:1,day:1}),v=t(""),h=t(""),f=t(0),g=t(""),x=()=>{a.value.address.zipcode=f.value,a.value.address.city=v.value,a.value.address.county=h.value,a.value.address.detail=g.value,a.value.birthday=`${c.value.year}/${c.value.month}/${c.value.day}`,console.log(a.value.address,a.value.birthday);const s=`${n}/api/v1/user/signup`;l.post(s,a.value).then(e=>{console.log(e),a.value={name:"",email:"",password:"",phone:"",birthday:"",address:{zipcode:0,detail:"",city:"",county:""}},U.value=1,k.value="",g.value="",v.value="",h.value="",f.value=0,y.push("/login"),w.fire({title:"註冊成功，請登入會員",icon:"success"})}).catch(e=>{console.log(e),alert(e.response.data.message)})},r=t(!1),A=async()=>{const s=document.cookie.replace(/(?:(?:^|.*;\s*)typescript\s*=\s*([^;]*).*$)|^.*$/,"$1");l.defaults.headers.common.Authorization=s;const e=`${n}/api/v1/user/check`;try{const o=await l.get(e);r.value=o.data.status,console.log("checkUser 驗證成功",r.value),console.log(o)}catch{r.value=!1,console.log("checkUser 驗證失敗",r.value)}},i=t({userId:"",name:"",phone:"",birthday:"",address:{zipcode:0,detail:""},oldPassword:"",newPassword:""}),b=t(""),C=t(!1),P=t(!1),p=t(!1),S=async()=>{const s=`${n}/api/v1/user`;l.get(s).then(e=>{console.log("getUser 成功",e),u.value=e.data.result,p.value=e.data.status,console.log(p.value)}).catch(e=>{console.log("getUser 失敗",e),p.value=e.response.data.status,console.log(p.value)})},D=async()=>{if(i.value.newPassword!==b.value){alert("密碼不一致");return}const s=`${n}/api/v1/user`;l.put(s,i.value).then(e=>{console.log("修改資料 成功",e),u.value=e.data.result,C.value=!1,m.fire({icon:"success",title:"修改資料成功"}),i.value={userId:"",name:"",phone:"",birthday:"",address:{zipcode:0,detail:""},oldPassword:"",newPassword:""},b.value=""}).catch(e=>{console.log("login 失敗",e),w.fire({icon:"error",title:"修改資料失敗"})})},L=async()=>{const s={userId:"",name:"",phone:"",birthday:"",address:{zipcode:0,detail:""}};s.userId=i.value.userId,s.name=i.value.name,s.phone=i.value.phone,s.birthday=`${c.value.year}/${c.value.month}/${c.value.day}`,s.address.zipcode=f.value,s.address.detail=`${v.value}${h.value}${g.value}`,console.log(s);const e=`${n}/api/v1/user`;l.put(e,s).then(o=>{console.log("修改資料 成功",o),u.value=o.data.result,P.value=!1,m.fire({icon:"success",title:"修改資料成功"})}).catch(o=>{console.log("修改資料失敗",o),w.fire({icon:"error",title:"修改資料失敗"})})},B=async()=>{d.fire({title:"請輸入您的Email",input:"text",inputAttributes:{autocapitalize:"off"},confirmButtonText:"送出",showLoaderOnConfirm:!0,preConfirm:async s=>{console.log(s),T(s)},allowOutsideClick:()=>!d.isLoading()})},T=async s=>{const e=`${n}/api/v1/verify/generateEmailCode`;l.post(e,s).then(o=>{console.log("已將驗證信發送到您的信箱",o),d.fire({title:"已將驗證信發送到您的信箱",text:"請設定新密碼",icon:"success",preConfirm:()=>{d.fire({title:"請輸入新密碼及驗證碼",html:`
            <label for="swal-input1">請輸入驗證碼</label>
            <input id="swal-input1" class="swal2-input">
            <label for="swal-input2">請輸入新密碼</label>
            <input id="swal-input2" class="swal2-input" type="password">
          `,inputAttributes:{autocapitalize:"off"},confirmButtonText:"送出",showLoaderOnConfirm:!0,preConfirm:()=>{const O=document.getElementById("swal-input1"),R=document.getElementById("swal-input2");console.log(R.value,O.value)},allowOutsideClick:()=>!d.isLoading()})}})}).catch(o=>{console.log("checkUser 驗證失敗",o),d.fire({title:"驗證失敗，請確認Email",text:o.response.data.message,icon:"error"})})};return{loginData:$,userInfo:u,rememberMe:z,login:I,logout:E,signupData:a,signupStep:U,passwordConfirm:k,birthdate:c,selectedCity:v,detailedAddress:g,selectedDistrict:h,selectedZip:f,signup:x,isChecked:r,checkUser:A,editUserData:i,newPassword2:b,showEditPassword:C,showEditUserInfo:P,userStatus:p,getUser:S,editUserPass:D,editUserInfo:L,verifyEmail:B,forgotPassword:async()=>{const s=`${n}/api/v1/user/forgot`;l.get(s,{}).then(e=>{console.log("checkUser 驗證成功",e),r.value=!0}).catch(e=>{console.log("checkUser 驗證失敗",e)})}}});export{Y as u};
