import{r as u,d as b,o as x,c as V,i as e,f as t,bZ as w,b_ as h,a as o,j as s,b$ as v,p as i,bY as p,bW as y,c0 as g}from"./index-a733b375.js";import{_ as C}from"./AuthProvider-f22e788d.js";import{l as k}from"./logo-f6354108.js";import{b as j,V as c,c as T}from"./VTextField-1e1c4ebe.js";import{V as L,a as n}from"./VRow-80d77f8c.js";import{V as f}from"./VDivider-35a9afe8.js";import"./index-568a04b5.js";const $={class:"auth-wrapper d-flex align-center justify-center pa-4"},B={class:"d-flex"},N=["innerHTML"],P=o("h5",{class:"text-h5 mb-1"}," Welcome to sneat! 👋🏻 ",-1),R=o("p",{class:"mb-0"}," Please sign-in to your account and start the adventure ",-1),F={class:"d-flex align-center justify-space-between flex-wrap mt-1 mb-4"},M=o("span",null,"New on our platform?",-1),U=o("span",{class:"mx-4"},"or",-1),q={__name:"login",setup(E){const r=u({email:"",password:"",remember:!1}),d=u(!1);return(_,a)=>{const m=b("RouterLink");return x(),V("div",$,[e(w,{class:"auth-card pa-4 pt-7","max-width":"448"},{default:t(()=>[e(h,{class:"justify-center"},{prepend:t(()=>[o("div",B,[o("div",{class:"d-flex text-primary",innerHTML:s(k)},null,8,N)])]),default:t(()=>[e(v,{class:"text-2xl font-weight-bold"},{default:t(()=>[i(" sneat ")]),_:1})]),_:1}),e(p,{class:"pt-2"},{default:t(()=>[P,R]),_:1}),e(p,null,{default:t(()=>[e(j,{onSubmit:a[4]||(a[4]=y(l=>_.$router.push("/"),["prevent"]))},{default:t(()=>[e(L,null,{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(c,{modelValue:s(r).email,"onUpdate:modelValue":a[0]||(a[0]=l=>s(r).email=l),autofocus:"",placeholder:"johndoe@email.com",label:"Email",type:"email"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:t(()=>[e(c,{modelValue:s(r).password,"onUpdate:modelValue":a[1]||(a[1]=l=>s(r).password=l),label:"Password",placeholder:"············",type:s(d)?"text":"password","append-inner-icon":s(d)?"bx-hide":"bx-show","onClick:appendInner":a[2]||(a[2]=l=>d.value=!s(d))},null,8,["modelValue","type","append-inner-icon"]),o("div",F,[e(T,{modelValue:s(r).remember,"onUpdate:modelValue":a[3]||(a[3]=l=>s(r).remember=l),label:"Remember me"},null,8,["modelValue"]),e(m,{class:"text-primary ms-2 mb-1",to:"javascript:void(0)"},{default:t(()=>[i(" Forgot Password? ")]),_:1})]),e(g,{block:"",type:"submit"},{default:t(()=>[i(" Login ")]),_:1})]),_:1}),e(n,{cols:"12",class:"text-center text-base"},{default:t(()=>[M,e(m,{class:"text-primary ms-2",to:"/register"},{default:t(()=>[i(" Create an account ")]),_:1})]),_:1}),e(n,{cols:"12",class:"d-flex align-center"},{default:t(()=>[e(f),U,e(f)]),_:1}),e(n,{cols:"12",class:"text-center"},{default:t(()=>[e(C)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}}};export{q as default};