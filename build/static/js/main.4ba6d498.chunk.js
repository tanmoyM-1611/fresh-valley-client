(this["webpackJsonpfresh-valley-main"]=this["webpackJsonpfresh-valley-main"]||[]).push([[0],{108:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(42),r=c.n(a),i=(c(50),c(4)),o=(c(51),c(7)),l=c(6),d=c(0),j=function(){var e=Object(n.useContext)(D),t=Object(i.a)(e,1)[0];return Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light h-100",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsxs)(o.b,{to:"/",className:"navbar-brand",style:{fontFamily:"cursive"},children:[Object(d.jsx)("b",{children:"ChalDal"})," "]}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse ",id:"navbarNav",children:Object(d.jsxs)("ul",{className:"navbar-nav ms-auto",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(o.b,{to:"/home",className:"nav-link",style:{fontFamily:"cursive"},children:Object(d.jsx)("b",{children:"Home"})})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsxs)(o.b,{to:"/orders",className:"nav-link",style:{fontFamily:"cursive"},children:[Object(d.jsx)("b",{children:"Orders"})," "]})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(o.b,{to:"/admin",className:"nav-link",style:{fontFamily:"cursive"},children:Object(d.jsx)("b",{children:"Admin"})})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(o.b,{to:"/details",className:"nav-link",style:{fontFamily:"cursive"},children:Object(d.jsx)("b",{children:"Details"})})}),Object(d.jsx)("li",{className:"nav-item",children:t.success?Object(d.jsx)("p",{className:"m-2",children:Object(d.jsx)("strong",{children:t.name})}):Object(d.jsx)(o.b,{to:"/login",children:Object(d.jsx)("button",{type:"button",class:"btn btn-success ms-2",children:"Log in"})})})]})})]})})},b=c(111),u=c(112),h=(c(57),function(e){var t=e.product,c=t.name,n=t.imageURL,s=t.price,a=t._id;return Object(d.jsxs)(b.a,{className:"m-3 card-container",style:{width:"17rem"},children:[Object(d.jsx)(b.a.Img,{className:"card-img border-bottom p-3  mt-2",variant:"top",src:n}),Object(d.jsxs)(b.a.Body,{children:[Object(d.jsx)(b.a.Title,{style:{fontSize:"18px"},children:Object(d.jsx)("strong",{children:c})}),Object(d.jsxs)("div",{className:"d-flex mt-3",children:[Object(d.jsx)("div",{className:"price-part ",children:Object(d.jsxs)("h5",{children:["$",s]})}),Object(d.jsx)("div",{className:"button-part",children:Object(d.jsxs)(o.b,{to:"/checkout",children:[" ",Object(d.jsxs)(u.a,{style:{padding:"5px"},onClick:function(){return e=a,console.log(e),void sessionStorage.setItem("id",e);var e},className:"rounded",variant:"success",children:[" ",Object(d.jsx)("span",{style:{fontSize:"15px"},children:"Buy Now"})," "]})]})})]})]})]})}),m=(c(58),function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){fetch("https://enigmatic-meadow-19132.herokuapp.com/products").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]),Object(d.jsx)("section",{className:"home container-fluid ",children:Object(d.jsxs)("div",{className:"d-flex  row row-cols-1  row-cols-md-3  justify-content-center  ",children:[0===c.length&&Object(d.jsx)("div",{class:"spinner-border text-info",role:"status",children:" "}),c.map((function(e){return Object(d.jsx)(h,{product:e})}))]})})}),O=c(2),p=c(17),x=(c(59),c(60),{apiKey:"AIzaSyA3Wi2Mynem31Q4LEZDRRul0nJfpE4OQeg",authDomain:"fresh-valley-75b0d.firebaseapp.com",projectId:"fresh-valley-75b0d",storageBucket:"fresh-valley-75b0d.appspot.com",messagingSenderId:"970440791639",appId:"1:970440791639:web:7611e03fffcdd945c03512"});p.a.apps.length||p.a.initializeApp(x);var f=function(){var e=Object(n.useContext)(D),t=Object(i.a)(e,2)[1],c=Object(n.useState)({success:!1,name:"",email:"",password:"",error:"",photo:""}),s=Object(i.a)(c,2),a=s[0],r=s[1],o=Object(n.useState)(!0),j=Object(i.a)(o,2),b=j[0],u=j[1],h=Object(l.g)(),m=(Object(l.h)().state||{from:{pathname:"/"}}).from,x=new p.a.auth.GoogleAuthProvider,f=function(e){var t=!0;if("email"===e.target.name&&(t=/\S+@\S+\.\S+/.test(e.target.value)),"password"===e.target.name&&"password2"===e.target.name){var c=e.target.value.length>6,n=/\d{1}/.test(e.target.value);t=c&&n}if(t){var s=Object(O.a)({},a);s[e.target.name]=e.target.value,r(s)}},g=function(e){p.a.auth().currentUser.updateProfile({displayName:e}).then((function(c){var n=p.a.auth().currentUser;e=n.displayName;var s=Object(O.a)({},a);s.name=e,s.error="",s.success=!0,r(s),t(s)})).catch((function(e){}))},v=function(){p.a.auth().currentUser.getIdToken(!0).then((function(e){sessionStorage.setItem("token",e)})).catch((function(e){}))};return Object(d.jsx)("section",{className:"home",children:Object(d.jsxs)("div",{id:"login-box",children:[Object(d.jsxs)("div",{class:"left",children:[Object(d.jsx)("h1",{children:b?"Sign up":"Log in"}),Object(d.jsx)("br",{}),Object(d.jsxs)("form",{action:"",onSubmit:function(e){b&&a.email&&a.password&&(a.password!==a.password2?alert("Password don't match"):p.a.auth().createUserWithEmailAndPassword(a.email,a.password).then((function(e){g(a.name)})).catch((function(e){var t=e.message;alert(t)}))),!b&&a.email&&a.password&&p.a.auth().signInWithEmailAndPassword(a.email,a.password).then((function(e){var c=e.user.displayName,n=Object(O.a)({},a);n.name=c,n.error="",n.success=!0,r(n),t(n),v(),h.replace(m)})).catch((function(e){var t=e.message;alert(t)})),e.preventDefault()},children:[b&&Object(d.jsx)("input",{type:"text",name:"name",placeholder:"Name",onBlur:f}),Object(d.jsx)("input",{type:"text",name:"email",placeholder:"E-mail",required:!0,onBlur:f}),Object(d.jsx)("input",{type:"password",name:"password",placeholder:"Password",required:!0,onBlur:f}),b&&Object(d.jsx)("input",{type:"password",name:"password2",placeholder:"Retype password",required:!0,onBlur:f}),b&&Object(d.jsxs)("div",{className:"d-flex",children:[Object(d.jsx)("label",{style:{paddingRight:"5px"},for:"birthday",children:"Birthday:"}),Object(d.jsx)("input",{type:"date",name:"birthday",placeholder:"Birthday",required:!0,onBlur:f})]}),Object(d.jsx)("input",{type:"submit",name:"signup_submit",value:b?"Sign me up":"Log In"})]})]}),Object(d.jsxs)("div",{class:"right",children:[Object(d.jsxs)("span",{class:"loginwith",children:[Object(d.jsx)("br",{}),"Social network"]}),Object(d.jsx)("button",{onClick:function(){p.a.auth().signInWithPopup(x).then((function(e){var c=e.user;console.log(c);var n={success:!0,name:c.displayName,email:c.email};r(n),t(n),v(),h.replace(m)})).catch((function(e){var t=e.message;alert(t)}))},class:"social-signin google",children:"Log in with Google+"})]}),Object(d.jsx)("div",{class:"or",children:"OR"}),Object(d.jsx)("div",{className:"bottom",children:Object(d.jsxs)("p",{children:[b?"Already have an account,":"Have no account?"," ",Object(d.jsx)("strong",{style:{cursor:"pointer",color:"green"},onClick:function(){return u(!b)},children:b?"Log in":"Register"})," "]})})]})})},g=c(9),v=["children"],y=function(e){var t=e.children,c=Object(g.a)(e,v),s=Object(n.useContext)(D),a=Object(i.a)(s,1)[0];return Object(d.jsx)(l.b,Object(O.a)(Object(O.a)({},c),{},{render:function(e){var c=e.location;return a.email?t:Object(d.jsx)(l.a,{to:{pathname:"/login",state:{from:c}}})}}))},N=c(44),w=c.n(N),S=c(21),P=function(){var e=Object(S.a)(),t=e.register,c=e.handleSubmit,s=Object(n.useState)(null),a=Object(i.a)(s,2),r=a[0],o=a[1],l=Object(n.useContext)(D),j=Object(i.a)(l,1)[0];return Object(d.jsxs)("section",{style:{border:"1px solid black"},className:"m-5 p-5",children:[Object(d.jsx)("h2",{style:{textAlign:"center",color:"black"},children:"Add Your Product Here !"}),Object(d.jsx)("div",{className:"d-flex justify-content-center mt-4",children:Object(d.jsxs)("form",{onSubmit:c((function(e){console.log(e);var t={email:j.email,name:e.name,price:e.price,imageURL:r};console.log(t);fetch("https://enigmatic-meadow-19132.herokuapp.com/addProduct",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return console.log("server side response",e)})),document.getElementById("product-name").value=null,document.getElementById("price").value=null,document.getElementById("file").value=null,alert("Product Submit Successfully")})),children:[Object(d.jsx)("h5",{children:"Product Name : "}),Object(d.jsx)("input",Object(O.a)({className:"form-control",id:"product-name",name:"name",placeholder:"Product Name"},t("name",{required:!0,maxLength:500}))),Object(d.jsx)("br",{}),Object(d.jsx)("h5",{children:"Add Price : "}),Object(d.jsx)("input",Object(O.a)({className:"form-control",id:"price",type:"number",name:"price",placeholder:"price"},t("price"))),Object(d.jsx)("br",{}),Object(d.jsx)("h5",{children:"Add Photo : "}),Object(d.jsx)("input",{className:"form-control",name:"exampleRequired",id:"file",type:"file",onChange:function(e){console.log(e.target.files[0]);var t=new FormData;t.set("key","678c62c1b5789908df29cec372ffb8ce"),t.append("image",e.target.files[0]),w.a.post("https://api.imgbb.com/1/upload",t).then((function(e){o(e.data.data.display_url)})).catch((function(e){console.log(e)}))}}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"submit"})]})})]})},k=function(){var e=Object(l.i)().id;console.log(e);var t=Object(S.a)(),c=t.register,s=t.handleSubmit,a=Object(n.useState)({}),r=Object(i.a)(a,2),o=r[0],j=r[1];Object(n.useEffect)((function(){fetch("https://enigmatic-meadow-19132.herokuapp.com/product/".concat(e)).then((function(e){return e.json()})).then((function(e){return j(e)}))}),[e]);return Object(d.jsxs)("section",{style:{border:"1px solid black"},className:"m-5 p-5",children:[Object(d.jsx)("h2",{style:{textAlign:"center",color:"gray"},children:"Edit Your Product Here !"}),Object(d.jsx)("div",{className:"d-flex justify-content-center mt-4",children:Object(d.jsxs)("form",{onSubmit:s((function(t){console.log(t);var c={name:t.name,price:t.price};console.log(c),fetch("https://enigmatic-meadow-19132.herokuapp.com/updateProduct/".concat(e),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(e){console.log("update")})),document.getElementById("product-name").value=null,document.getElementById("price").value=null,alert("Product Update Successfully")})),children:[Object(d.jsxs)("h4",{style:{color:"red"},children:["Product Name : ",o.name," "]}),Object(d.jsx)("h6",{style:{color:"green"},children:"Edit Product Name : "}),Object(d.jsx)("input",Object(O.a)({className:"form-control",id:"product-name",name:"name"},c("name",{required:!0,maxLength:5e3}))),Object(d.jsx)("br",{}),Object(d.jsxs)("h4",{style:{color:"red"},children:["Product Price : ",o.price," "]}),Object(d.jsx)("h6",{style:{color:"green"},children:"Edit Price : "}),Object(d.jsx)("input",Object(O.a)({className:"form-control",id:"price",type:"number",name:"price"},c("price"))),Object(d.jsx)("input",{type:"submit"})]})})]})},E=function(){var e=Object(l.g)(),t=Object(n.useState)([]),c=Object(i.a)(t,2),s=c[0],a=c[1],r=Object(n.useContext)(D),j=Object(i.a)(r,1)[0];Object(n.useEffect)((function(){fetch("https://enigmatic-meadow-19132.herokuapp.com/manageProducts?email="+j.email,{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(sessionStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(e){return a(e)}))}),[j.email]);return Object(d.jsx)("section",{className:"container-fluid ",children:Object(d.jsxs)("div",{children:[0===s.length&&Object(d.jsx)("div",{class:"spinner-border text-info",role:"status",children:" "}),Object(d.jsx)("div",{className:"row row-cols-1  row-cols-md-3  justify-content-center  products-container",children:s.map((function(t){return Object(d.jsxs)(b.a,{id:"card",className:"m-3 card-container",style:{width:"17rem"},children:[Object(d.jsx)(b.a.Img,{className:"card-img border-bottom p-3  mt-2",variant:"top",src:t.imageURL}),Object(d.jsxs)(b.a.Body,{children:[Object(d.jsx)(b.a.Title,{style:{fontSize:"18px"},children:Object(d.jsx)("strong",{children:t.name})}),Object(d.jsxs)("b",{children:["Price : $",t.price]}),Object(d.jsxs)("div",{className:"d-flex mt-3",children:[Object(d.jsx)("div",{className:"price-part ",children:Object(d.jsx)(o.b,{to:"/editProduct/"+t._id,children:Object(d.jsxs)(u.a,{style:{padding:"5px"},className:"rounded",variant:"success",children:[" ",Object(d.jsx)("span",{style:{fontSize:"15px"},children:"EDIT"})," "]})})}),Object(d.jsx)("div",{className:"button-part",children:Object(d.jsxs)(u.a,{onClick:function(){return c=t._id,console.log(c),fetch("https://enigmatic-meadow-19132.herokuapp.com/deleteProduct/".concat(c),{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){console.log("delete successfully"),alert("Delete Successfully")})),void e.push("/admin");var c},style:{padding:"5px"},className:"rounded",variant:"danger",children:[" ",Object(d.jsx)("span",{style:{fontSize:"15px"},children:"DELETE"})," "]})})]})]})]})}))})]})})},C=function(){return Object(d.jsx)(o.a,{children:Object(d.jsxs)("section",{className:"home",children:[Object(d.jsxs)("nav",{className:"d-flex justify-content-between",children:[Object(d.jsx)(o.b,{to:"/addProduct",children:Object(d.jsx)("button",{type:"button",class:"btn btn-success m-2",children:"ADD PRODUCT"})}),Object(d.jsx)(o.b,{to:"/manageProduct",children:Object(d.jsx)("button",{type:"button",class:"btn btn-success m-2",children:"MANAGE PRODUCT"})}),Object(d.jsx)("br",{})]}),Object(d.jsx)("div",{className:"m-5",children:Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.b,{path:"/addProduct",children:Object(d.jsx)(P,{})}),Object(d.jsx)(l.b,{path:"/manageProduct",children:Object(d.jsx)(E,{})}),Object(d.jsx)(l.b,{path:"/editProduct/:id",children:Object(d.jsx)(k,{})})]})})]})})},A=(c(81),function(e){console.log(e);var t=e.order,c=t.name,n=t.price;return console.log(n,c),Object(d.jsx)("div",{className:"order",children:Object(d.jsxs)("h3",{style:{backgroundColor:"yellow"},children:[Object(d.jsx)("b",{children:"Name : "})," ",c,Object(d.jsx)("b",{className:"ms-2",children:"Price:"})," $",n]})})}),I=(c(82),function(){var e=Object(n.useContext)(D),t=Object(i.a)(e,1)[0],c=Object(n.useState)([]),s=Object(i.a)(c,2),a=s[0],r=s[1];Object(n.useEffect)((function(){fetch("https://enigmatic-meadow-19132.herokuapp.com/getOrders?email="+t.email,{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(sessionStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(e){return r(e)}))}),[t.email]);for(var o=0,l=0;l<a.length;l++){var j=a[l].product;o+=Number(j.price)}return Object(d.jsx)("section",{className:"home",children:a.length>0?Object(d.jsxs)("div",{style:{border:"1px solid green"},children:[0===a.length&&Object(d.jsx)("div",{class:"spinner-border text-info",role:"status",children:" "}),Object(d.jsx)("div",{className:"m-5 p-5 ",children:a.map((function(e){return Object(d.jsx)(A,{order:e.product})}))}),Object(d.jsx)("div",{children:Object(d.jsxs)("h2",{style:{textAlign:"center",backgroundColor:"red",color:"white"},children:[" ",Object(d.jsxs)("strong",{children:["Total : $ ",o]})," "]})})]}):Object(d.jsx)("div",{children:Object(d.jsx)("h2",{style:{color:"white"},children:"No Orders Here..."})})})}),T=(c(83),function(){var e=Object(S.a)(),t=e.register,c=e.handleSubmit,s=e.formState.errors,a=Object(n.useContext)(D),r=Object(i.a)(a,1)[0],o=Object(n.useState)({}),j=Object(i.a)(o,2),b=j[0],u=j[1],h=Object(l.g)(),m=sessionStorage.getItem("id");Object(n.useEffect)((function(){fetch("https://enigmatic-meadow-19132.herokuapp.com/product/".concat(m)).then((function(e){return e.json()})).then((function(e){return u(e)}))}),[m]);return Object(d.jsxs)("section",{style:{border:"1px solid black"},className:"m-5 p-3",children:[Object(d.jsx)("h2",{style:{textAlign:"center",color:"gray"},children:"Checkout Here !"}),Object(d.jsx)("div",{className:"d-flex justify-content-center",children:Object(d.jsxs)("form",{className:"ship-form",onSubmit:c((function(e){console.log(m);var t=Object(O.a)(Object(O.a)({},r),{},{product:b,shipment:e,orderTime:new Date});fetch("https://enigmatic-meadow-19132.herokuapp.com/addOrder",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}),alert("Submit Successfully"),h.push("/home")})),children:[Object(d.jsx)("h5",{children:"Name : "}),Object(d.jsx)("input",Object(O.a)(Object(O.a)({defaultValue:r.name},t("name",{required:!0})),{},{placeholder:"Your Name"})),s.name&&Object(d.jsx)("span",{className:"error",children:"Name is required"}),Object(d.jsx)("h5",{children:"Email: "}),Object(d.jsx)("input",Object(O.a)(Object(O.a)({defaultValue:r.email},t("email",{required:!0})),{},{placeholder:"Your Email"})),s.email&&Object(d.jsx)("span",{className:"error",children:"Name is required"}),Object(d.jsx)("h5",{children:"Address : "}),Object(d.jsx)("input",Object(O.a)(Object(O.a)({},t("address",{required:!0})),{},{placeholder:"Your Address"})),s.address&&Object(d.jsx)("span",{className:"error",children:"Name is required"}),Object(d.jsx)("h5",{children:"Phone: "}),Object(d.jsx)("input",Object(O.a)(Object(O.a)({},t("phone",{required:!0})),{},{placeholder:"Your Phone-Number"})),s.phone&&Object(d.jsx)("span",{className:"error",children:"Name is required"}),Object(d.jsx)("input",{type:"submit"})]})})]})}),B=function(){return Object(d.jsx)("div",{className:"home",children:Object(d.jsx)("h1",{style:{backgroundColor:"yellow"},children:"No Details Here..."})})},D=Object(n.createContext)();var q=function(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),c=t[0],s=t[1];return Object(d.jsx)(D.Provider,{value:[c,s],children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)("div",{className:"header-part",children:Object(d.jsx)(j,{})}),Object(d.jsx)("div",{className:"router-part",children:Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.b,{path:"/home",children:Object(d.jsx)(m,{})}),Object(d.jsx)(l.b,{exact:!0,path:"/",children:Object(d.jsx)(m,{})}),Object(d.jsx)(l.b,{path:"/login",children:Object(d.jsx)(f,{})}),Object(d.jsx)(l.b,{path:"/details",children:Object(d.jsx)(B,{})}),Object(d.jsx)(y,{path:"/orders",children:Object(d.jsx)(I,{})}),Object(d.jsx)(y,{path:"/checkout",children:Object(d.jsx)(T,{})}),Object(d.jsx)(y,{path:"/admin",children:Object(d.jsx)(C,{})})]})})]})})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,113)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};c(84),c(85);r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(q,{})}),document.getElementById("root")),L()},50:function(e,t,c){},51:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){}},[[108,1,2]]]);
//# sourceMappingURL=main.4ba6d498.chunk.js.map