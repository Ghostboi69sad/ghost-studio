import{r as t,u,a as x,j as e,N as c,s as p}from"./index-DCysjo5h.js";import{N as j}from"./Navbar-Dhe82GLW.js";import{F as N}from"./Footer-BUBFhDjT.js";const b=()=>{const[a,n]=t.useState(""),[r,m]=t.useState(""),[o,i]=t.useState(""),d=u(),_=x(),h=async s=>{s.preventDefault(),i("");try{await p(_,a,r),d("/")}catch(l){i(l instanceof Error?l.message:"Failed to login")}};return e.jsx(t.Fragment,{children:e.jsxs("div",{className:"overflow-hidden bg__purple",children:[e.jsx(j,{}),e.jsx("section",{className:"pt-5",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row justify-content-center",children:e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"wrapper__form-auth",children:[e.jsx("h2",{className:"bold font__size--42 text__40-1024 text__40-md text__40-mm color__white mb-4",children:"Welcome Back"}),o&&e.jsx("p",{className:"alert alert-danger",children:o}),e.jsxs("form",{onSubmit:h,children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"email",className:"medium font__size--14 text__14-1024 color__white",children:"Email"}),e.jsx("input",{type:"email",className:"form-control",id:"email",value:a,onChange:s=>n(s.target.value),required:!0})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"password",className:"medium font__size--14 text__14-1024 color__white",children:"Password"}),e.jsx("input",{type:"password",className:"form-control",id:"password",value:r,onChange:s=>m(s.target.value),required:!0})]}),e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[e.jsxs("div",{className:"form-check",children:[e.jsx("input",{type:"checkbox",className:"form-check-input",id:"rememberMe"}),e.jsx("label",{className:"form-check-label medium font__size--14 text__14-1024 color__white",htmlFor:"rememberMe",children:"Remember me"})]}),e.jsx(c,{to:"/forgot-password",className:"medium font__size--14 text__14-1024 color__white",children:"Forgot Password?"})]}),e.jsx("button",{type:"submit",className:"btn btn__white color__purple shadow w-100",children:"Log In"})]}),e.jsxs("p",{className:"medium font__size--14 text__14-1024 color__white mt-4 text-center",children:["Don't have an account? ",e.jsx(c,{to:"/register",className:"color__white",children:"Sign up"})]})]})})})})}),e.jsx(N,{})]})})};export{b as default};