import{r as s,a as h,u,j as e,e as x}from"./index-DCysjo5h.js";import{N as _}from"./Navbar-Dhe82GLW.js";import{F as p}from"./Footer-BUBFhDjT.js";const w=()=>{const[a,n]=s.useState(""),[r,l]=s.useState(""),[o,i]=s.useState(""),c=h(),m=u(),d=async t=>{t.preventDefault();try{await x(c,a),l("Check your email for the password reset link."),i(""),setTimeout(()=>m("/login"),5e3)}catch{i("Error sending password reset email. Please try again."),l("")}};return e.jsx(s.Fragment,{children:e.jsxs("div",{className:"overflow-hidden bg__purple",children:[e.jsx(_,{}),e.jsx("section",{className:"pt-5",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row justify-content-center",children:e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"wrapper__form-auth",children:[e.jsx("h2",{className:"bold font__size--42 text__40-1024 text__40-md text__40-mm color__white mb-4",children:"Reset Password"}),r&&e.jsx("p",{className:"alert alert-success",children:r}),o&&e.jsx("p",{className:"alert alert-danger",children:o}),e.jsxs("form",{onSubmit:d,children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"email",className:"medium font__size--14 text__14-1024 color__white",children:"Email Address"}),e.jsx("input",{type:"email",className:"form-control",id:"email",value:a,onChange:t=>n(t.target.value),required:!0})]}),e.jsx("button",{type:"submit",className:"btn btn__white color__purple shadow w-100 mt-4",children:"Send Reset Link"})]})]})})})})}),e.jsx(p,{})]})})};export{w as default};
