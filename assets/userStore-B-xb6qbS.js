import{K as _,q as H,A as J,r as t,v as h}from"./index-D7joAqCD.js";import{A as x,T as u,S as d}from"./swal-jtAPSmEf.js";const Q="https://freyja-g4ow.onrender.com",o=_.create({baseURL:`${Q}/api/v1`,headers:{"Content-Type":"application/json"}});o.interceptors.request.use(e=>{const a=document.cookie.replace(/(?:(?:^|.*;\s*)typescript\s*=\s*([^;]*).*$)|^.*$/,"$1");return a&&(e.headers.Authorization=a),e},e=>Promise.reject(e));o.interceptors.response.use(e=>e,e=>{var a;return x.fire({icon:"error",title:"操作失败",text:(a=e.response)==null?void 0:a.data.message}),Promise.reject(e)});const W=e=>o.post("/user/login",e),X=e=>o.post("/user/signup",e),ee=()=>o.get("/user/check"),se=()=>o.get("/user"),z=e=>o.put("/user",e),te=e=>o.post("/verify/email",{email:e}),ae=e=>o.post("/verify/generateEmailCode",{email:e}),ne=H("userStore",()=>{const e=J(),a=t({email:"",password:""}),w=t(!1),l=t({}),A=t(!1),D=async()=>{w.value=!0;try{const s=await W(a.value);document.cookie=`typescript=${s.data.token}`,l.value=s.data.result,a.value={email:"",password:""},console.log(l.value),u.fire({icon:"success",title:"登入成功"}),e.push("/")}catch{}finally{w.value=!1}},T=()=>{document.cookie="typescript=",c.value=!1,u.fire({icon:"success",title:"已登出"}),e.push("/")},E=t(1),y=t(!1),U=t(""),C=t(""),b=t(""),P=t(""),$=t(""),r=t({year:new Date().getFullYear(),month:1,day:1}),j=h(()=>`${r.value.year}/${r.value.month}/${r.value.day}`),p=t(""),v=t(""),f=t(0),m=t(""),B=h(()=>({zipcode:f.value,detail:m.value,city:p.value,county:v.value})),k=h(()=>({name:C.value,email:b.value,password:P.value,phone:$.value,birthday:j.value,address:B.value})),O=async()=>{y.value=!0;try{await X(k.value),u.fire({icon:"success",title:"註冊成功，請登入"}),F(),e.push("/login")}catch{}finally{y.value=!1}},F=()=>{E.value=1,U.value="",m.value="",p.value="",v.value="",f.value=0,r.value={year:new Date().getFullYear(),month:1,day:1}},c=t(!1),R=async()=>{try{const s=await ee();c.value=s.data.status,console.log("checkUser 驗證成功",c.value)}catch{c.value=!1,console.log("checkUser 驗證失敗",c.value)}},i=t({userId:"",name:"",phone:"",birthday:"",address:{zipcode:0,detail:""},oldPassword:"",newPassword:""}),g=t(""),I=t(!1),L=t(!1),q=t(!1),G=async()=>{const s=await se();l.value=s.data.result},V=async()=>{if(i.value.newPassword!==g.value){alert("密碼不一致");return}try{const s=await z(i.value);console.log("修改資料 成功",s),l.value=s.data.result,I.value=!1,u.fire({icon:"success",title:"修改資料成功"}),i.value={userId:"",name:"",phone:"",birthday:"",address:{zipcode:0,detail:""},oldPassword:"",newPassword:""},g.value=""}catch(s){console.log("修改密码失败",s),x.fire({icon:"error",title:"修改資料失敗"})}},Y=async()=>{const s={userId:i.value.userId,name:i.value.name,phone:i.value.phone,birthday:`${r.value.year}/${r.value.month}/${r.value.day}`,address:{zipcode:f.value,detail:`${p.value}${v.value}${m.value}`}};try{const n=await z(s);console.log("修改資料成功",n),l.value=n.data.result,L.value=!1,u.fire({icon:"success",title:"修改資料成功"})}catch(n){console.log("修改資料失敗",n),x.fire({icon:"error",title:"修改資料失敗"})}},K=async()=>{d.fire({title:"請輸入您的Email",input:"text",inputAttributes:{autocapitalize:"off"},confirmButtonText:"送出",showLoaderOnConfirm:!0,preConfirm:async s=>{console.log(s),(await te(s)).data.result.isEmailExists?M(s):d.fire({title:"Email不存在",text:"請確認Email",icon:"error"})},allowOutsideClick:()=>!d.isLoading()})},M=async s=>{try{const n=await ae(s);console.log("已將驗證信發送到您的信箱",n),d.fire({title:"已將驗證信發送到您的信箱",text:"請設定新密碼",icon:"success",preConfirm:()=>{d.fire({title:"請輸入新密碼及驗證碼",html:`
            <label for="swal-input1">請輸入驗證碼</label>
            <input id="swal-input1" class="swal2-input">
            <label for="swal-input2">請輸入新密碼</label>
            <input id="swal-input2" class="swal2-input" type="password">
          `,inputAttributes:{autocapitalize:"off"},confirmButtonText:"送出",showLoaderOnConfirm:!0,preConfirm:()=>{const N=document.getElementById("swal-input1"),Z=document.getElementById("swal-input2");console.log(Z.value,N.value)},allowOutsideClick:()=>!d.isLoading()})}})}catch{}},S=async()=>{try{await S(),u.fire({icon:"success",title:"重置密碼郵件已發送，請檢查您的郵箱。"})}catch{}};return{loginLoading:w,loginData:a,userInfo:l,rememberMe:A,login:D,logout:T,signupLoading:y,signupName:C,signupEmail:b,signupPassword:P,passwordConfirm:U,signupPhone:$,signupData:k,signupStep:E,birthdate:r,selectedCity:p,detailedAddress:m,selectedDistrict:v,selectedZip:f,signup:O,isChecked:c,checkUser:R,editUserData:i,newPassword2:g,showEditPassword:I,showEditUserInfo:L,userStatus:q,getUser:G,editUserPass:V,editUserInfo:Y,verifyEmail:K,forgotPassword:S}});export{ne as u};
