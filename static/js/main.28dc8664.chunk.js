(this.webpackJsonpformvalidation=this.webpackJsonpformvalidation||[]).push([[0],{33:function(e,t,c){},34:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),r=c(23),o=c.n(r),d=(c(33),c(4)),n=(c(34),c(9)),l=c(1);function i(e){return Object(l.jsxs)("div",{className:"navbar py-1 px-3 bg-".concat(e.mode," d-flex justify-content-between flex-").concat(e.flexDirection),children:[Object(l.jsxs)("ul",{className:"nav justify-content-center",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(n.b,{className:"nav-link active text-".concat(e.txtMode),"aria-current":"page",to:"/React-App/",children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(n.b,{className:"nav-link text-".concat(e.txtMode),to:"/projects",children:"Projects"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(n.b,{className:"nav-link text-".concat(e.txtMode),to:"/textconverter",children:"Text convertor"})})]}),Object(l.jsxs)("div",{className:"d-flex justify-content-between ",children:[Object(l.jsx)("button",{className:"btn btn-light bg-transparent border border-".concat(e.txtMode," border-1 p-2 py-0 m-1 text-").concat(e.txtMode," nav-link"),onClick:e.toggleMode,children:"dark"===e.mode?"Light":"Dark"}),Object(l.jsx)(n.b,{className:"nav-link text-".concat(e.txtMode," border border-").concat(e.txtMode," border-1 p-2 py-0 m-1 rounded"),to:"/login",children:"Login"})]})]})}function b(e){return Object(l.jsxs)("div",{id:"carouselExampleCaptions",className:"carousel slide ",children:[Object(l.jsxs)("div",{className:"carousel-indicators",children:[Object(l.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"0",className:"active","aria-current":"true","aria-label":"Slide 1"}),Object(l.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"1","aria-label":"Slide 2"}),Object(l.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"2","aria-label":"Slide 3"})]}),Object(l.jsxs)("div",{className:"carousel-inner",children:[Object(l.jsxs)("div",{className:"carousel-item active",children:[Object(l.jsx)("img",{src:"https://picsum.photos/1250/600",className:"d-block ",alt:"Not found",style:{minWidth:"17rem"}}),Object(l.jsxs)("div",{className:"carousel-caption d-none d-md-block",children:[Object(l.jsx)("h5",{className:"bg-dark rounded-3 opacity-75",children:"First slide label"}),Object(l.jsx)("p",{className:"bg-dark rounded-3 opacity-75",children:"Some representative placeholder content for the first slide."})]})]}),Object(l.jsxs)("div",{className:"carousel-item",children:[Object(l.jsx)("img",{src:"https://picsum.photos/1250/600 ",className:"d-block ",alt:"Not found",style:{minWidth:"17rem"}}),Object(l.jsxs)("div",{className:"carousel-caption d-none d-md-block",children:[Object(l.jsx)("h5",{className:"bg-dark rounded-3 opacity-75",children:"Second slide label"}),Object(l.jsx)("p",{className:"bg-dark rounded-3 opacity-75",children:"Some representative placeholder content for the second slide."})]})]}),Object(l.jsxs)("div",{className:"carousel-item",children:[Object(l.jsx)("img",{src:"https://picsum.photos/1250/600",className:"d-block ",alt:"Not found",style:{minWidth:"17rem"}}),Object(l.jsxs)("div",{className:"carousel-caption d-none d-md-block",children:[Object(l.jsx)("h5",{className:"bg-dark rounded-3 opacity-75",children:"Third slide label"}),Object(l.jsx)("p",{className:"bg-dark rounded-3 opacity-75",children:"Some representative placeholder content for the third slide."})]})]})]}),Object(l.jsxs)("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"prev",children:[Object(l.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(l.jsx)("span",{className:"visually-hidden",children:"Previous"})]}),Object(l.jsxs)("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"next",children:[Object(l.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(l.jsx)("span",{className:"visually-hidden",children:"Next"})]})]})}function j(e){var t=Object(s.useState)(""),c=Object(d.a)(t,2),a=c[0],r=c[1],o=Object(s.useState)(""),n=Object(d.a)(o,2),i=n[0],b=n[1],j=Object(s.useState)(""),m=Object(d.a)(j,2),h=m[0],x=m[1],u=Object(s.useState)(""),p=Object(d.a)(u,2),O=p[0],y=p[1];return Object(l.jsxs)("form",{className:"text-".concat(e.txtMode),children:[Object(l.jsx)("div",{children:Object(l.jsx)("h1",{className:"text-center mb-3",children:"Login here"})}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Email address"}),Object(l.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",value:a,name:"user-email",onChange:function(e){r(e.target.value),null!==e.target.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)||""===e.target.value?x(""):x("Invalid E-mail!")}}),Object(l.jsx)("div",{id:"emailHelp",className:"form-text text-".concat(e.txtMode),children:"We'll never share your email with anyone else."}),Object(l.jsx)("div",{id:"emailHelp",className:"form-text text-danger fs-4",children:h})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsxs)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:["Password ",e.passInfo]}),Object(l.jsx)("input",{type:"password",className:"form-control",name:"user-password",id:"exampleInputPassword1",value:i,onChange:function(e){var t=e.target.value;b(t),!1===/[A-Z]/.test(t)?y("Your password must contain at least one uppercase letter."):!1===/[a-z]/.test(t)?y("Your password must contain at least one lowercase letter."):!1===/[!@#$%^&*]/.test(t)?y("Your password must contain at least one special letter."):!1===/[0-9]/.test(t)?y("Your password must contain at least one digit letter."):t.length<8?y("Your password must contain more the 8 characters."):y("")}})]}),Object(l.jsx)("div",{id:"emailHelp",className:"form-text text-danger fs-4",children:O}),Object(l.jsxs)("div",{className:"mb-3 form-check",children:[Object(l.jsx)("input",{type:"checkbox",className:"form-check-input",id:"exampleCheck1",onChange:function(){var e=document.getElementById("exampleInputPassword1");document.getElementById("exampleCheck1").checked?e.type="text":e.type="password"}}),Object(l.jsx)("label",{className:"form-check-label",htmlFor:"exampleCheck1",children:"show password"})]}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){""!==a&&""!==i&&""===O||e.preventDefault()},children:"Submit"})]})}function m(e){return Object(l.jsxs)("div",{className:"container d-grid overflow-hidden",style:{gridTemplateColumns:"repeat(auto-fit, minmax(17rem, 1fr))",gridRowGap:"3rem",gridColumnGap:"6rem"},children:[Object(l.jsxs)("div",{class:"card rounded-4 border-3 bg-".concat("body-secondary"===e.mode?"light":"secondary"),style:{flex:"1 1 100%",minWidth:"17rem"},children:[Object(l.jsx)("img",{src:"https://picsum.photos/315/250",class:"card-img-top rounded rounded-top-4 object-fit-cover",alt:"..."}),Object(l.jsxs)("div",{class:"card-body border-top border-5 text-".concat("body-secondary"===e.mode?"black":"white"),children:[Object(l.jsx)("h5",{class:"card-title",children:"Card title"}),Object(l.jsx)("p",{class:"card-text",children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),Object(l.jsx)("a",{href:"/",class:"btn btn-primary",children:"Go somewhere"})]})]}),Object(l.jsxs)("div",{class:"card rounded-4 border-3 bg-".concat("body-secondary"===e.mode?"light":"secondary"),style:{flex:"1 1 100%",minWidth:"17rem"},children:[Object(l.jsx)("img",{src:"https://picsum.photos/315/250",class:"card-img-top rounded rounded-top-4 object-fit-cover",alt:"..."}),Object(l.jsxs)("div",{class:"card-body border-top border-5 text-".concat("body-secondary"===e.mode?"black":"white"),children:[Object(l.jsx)("h5",{class:"card-title",children:"Card title"}),Object(l.jsx)("p",{class:"card-text",children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),Object(l.jsx)("a",{href:"/",class:"btn btn-primary",children:"Go somewhere"})]})]}),Object(l.jsxs)("div",{class:"card rounded-4 border-3 bg-".concat("body-secondary"===e.mode?"light":"secondary"),style:{flex:"1 1 100%",minWidth:"17rem"},children:[Object(l.jsx)("img",{src:"https://picsum.photos/315/250",class:"card-img-top rounded rounded-top-4 object-fit-cover",alt:"..."}),Object(l.jsxs)("div",{class:"card-body border-top border-5 text-".concat("body-secondary"===e.mode?"black":"white"),children:[Object(l.jsx)("h5",{class:"card-title",children:"Card title"}),Object(l.jsx)("p",{class:"card-text",children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),Object(l.jsx)("a",{href:"/",class:"btn btn-primary",children:"Go somewhere"})]})]}),Object(l.jsxs)("div",{class:"card rounded-4 border-3 bg-".concat("body-secondary"===e.mode?"light":"secondary"),style:{flex:"1 1 100%",minWidth:"17rem"},children:[Object(l.jsx)("img",{src:"https://picsum.photos/315/250",class:"card-img-top rounded rounded-top-4 object-fit-cover",alt:"..."}),Object(l.jsxs)("div",{class:"card-body border-top border-5 text-".concat("body-secondary"===e.mode?"black":"white"),children:[Object(l.jsx)("h5",{class:"card-title",children:"Card title"}),Object(l.jsx)("p",{class:"card-text",children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),Object(l.jsx)("a",{href:"/",class:"btn btn-primary",children:"Go somewhere"})]})]}),Object(l.jsxs)("div",{class:"card rounded-4 border-3 bg-".concat("body-secondary"===e.mode?"light":"secondary"),style:{flex:"1 1 100%",minWidth:"17rem"},children:[Object(l.jsx)("img",{src:"https://picsum.photos/315/250",class:"card-img-top rounded rounded-top-4 object-fit-cover",alt:"..."}),Object(l.jsxs)("div",{class:"card-body border-top border-5 text-".concat("body-secondary"===e.mode?"black":"white"),children:[Object(l.jsx)("h5",{class:"card-title",children:"Card title"}),Object(l.jsx)("p",{class:"card-text",children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),Object(l.jsx)("a",{href:"/",class:"btn btn-primary",children:"Go somewhere"})]})]}),Object(l.jsxs)("div",{class:"card rounded-4 border-3 bg-".concat("body-secondary"===e.mode?"light":"secondary"),style:{flex:"1 1 100%",minWidth:"17rem"},children:[Object(l.jsx)("img",{src:"https://picsum.photos/315/250",class:"card-img-top rounded rounded-top-4 object-fit-cover",alt:"..."}),Object(l.jsxs)("div",{class:"card-body border-top border-5 text-".concat("body-secondary"===e.mode?"black":"white"),children:[Object(l.jsx)("h5",{class:"card-title",children:"Card title"}),Object(l.jsx)("p",{class:"card-text",children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),Object(l.jsx)("a",{href:"/",class:"btn btn-primary",children:"Go somewhere"})]})]}),Object(l.jsxs)("div",{class:"card rounded-4 border-3 bg-".concat("body-secondary"===e.mode?"light":"secondary"),style:{flex:"1 1 100%",minWidth:"17rem"},children:[Object(l.jsx)("img",{src:"https://picsum.photos/315/250",class:"card-img-top rounded rounded-top-4 object-fit-cover",alt:"..."}),Object(l.jsxs)("div",{class:"card-body border-top border-5 text-".concat("body-secondary"===e.mode?"black":"white"),children:[Object(l.jsx)("h5",{class:"card-title",children:"Card title"}),Object(l.jsx)("p",{class:"card-text",children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),Object(l.jsx)("a",{href:"/",class:"btn btn-primary",children:"Go somewhere"})]})]}),Object(l.jsxs)("div",{class:"card rounded-4 border-3 bg-".concat("body-secondary"===e.mode?"light":"secondary"),style:{flex:"1 1 100%",minWidth:"17rem"},children:[Object(l.jsx)("img",{src:"https://picsum.photos/315/250",class:"card-img-top rounded rounded-top-4 object-fit-cover",alt:"..."}),Object(l.jsxs)("div",{class:"card-body border-top border-5 text-".concat("body-secondary"===e.mode?"black":"white"),children:[Object(l.jsx)("h5",{class:"card-title",children:"Card title"}),Object(l.jsx)("p",{class:"card-text",children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),Object(l.jsx)("a",{href:"/",class:"btn btn-primary",children:"Go somewhere"})]})]}),Object(l.jsxs)("div",{class:"card rounded-4 border-3 bg-".concat("body-secondary"===e.mode?"light":"secondary"),style:{flex:"1 1 100%",minWidth:"17rem"},children:[Object(l.jsx)("img",{src:"https://picsum.photos/315/250",class:"card-img-top rounded rounded-top-4 object-fit-cover",alt:"..."}),Object(l.jsxs)("div",{class:"card-body border-top border-5 text-".concat("body-secondary"===e.mode?"black":"white"),children:[Object(l.jsx)("h5",{class:"card-title",children:"Card title"}),Object(l.jsx)("p",{class:"card-text",children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),Object(l.jsx)("a",{href:"/",class:"btn btn-primary",children:"Go somewhere"})]})]})]})}var h=c(24),x=c.n(h);function u(e){var t=Object(s.useState)("Enter your text here"),c=Object(d.a)(t,2),a=c[0],r=c[1],o=Object(s.useState)("No E-mails currently"),n=Object(d.a)(o,2),i=n[0],b=n[1],j=Object(s.useState)("No Numbers currently"),m=Object(d.a)(j,2),h=m[0],x=m[1],u=Object(s.useState)(0),p=Object(d.a)(u,2),O=p[0],y=p[1];return Object(l.jsxs)("div",{className:"container text-".concat(e.textMode),id:"text-area-div",children:[Object(l.jsx)("h1",{style:{fontSize:"1.3rem"},children:e.heading}),Object(l.jsx)("div",{className:"my-3",children:Object(l.jsx)("textarea",{className:"form-control bg-".concat("body-secondary"===e.mode?"white":"secondary"," text-").concat(e.textMode),value:a,onChange:function(e){var t=e.target.value;r(t),y(t.split(" ").filter((function(e){return 0!==e.length})).length)},onClick:function(){"Enter your text here"===a&&r("")},id:"myBox",rows:"8"})}),Object(l.jsxs)("div",{className:"d-flex flex-".concat(e.flexDirection),children:[Object(l.jsx)("button",{className:"btn btn-primary m-2",onClick:function(){if(""===a)return 0;var t=a.toUpperCase();r(t),e.showAlert("Text is converted!","success")},children:"Convert to uppercase"}),Object(l.jsx)("button",{className:"btn btn-primary m-2",onClick:function(){if(""===a)return 0;var t=a.toLowerCase();r(t),e.showAlert("Text is converted!","success")},children:"Convert to lowercase"}),Object(l.jsx)("button",{className:"btn btn-primary m-2",onClick:function(){var t=/[a-z]*@[a-z]*.com/gm,c="";return""===a?0:null===a.match(t)?(b("No E-mail's Found."),e.showAlert("No E-mail's Found","warning"),0):(a.match(t).forEach((function(e){c=c+e+" "})),b(c),void e.showAlert("E-mail's has been extracted","success"))},children:"Extract Email's"}),Object(l.jsx)("button",{className:"btn btn-primary m-2",onClick:function(){var t=/((\d{3}|\(\d{3}\))\s\d{3}\s\d{4})|(\d{10})/gm,c="";return""===a?0:null===a.match(t)?(x("No Mobile Numbers Found."),e.showAlert("No Mobile Numbers Found","warning"),0):(a.match(t).forEach((function(e){c=c+e+" "})),void x(c))},children:"Extract Number"})]}),Object(l.jsxs)("div",{className:"my-4",children:[Object(l.jsx)("h1",{style:{fontSize:"1.3rem"},children:"Text Summary :"}),Object(l.jsxs)("p",{children:["Characters: ",a.length," Words: ",O]}),Object(l.jsxs)("p",{children:["Reading time: ",.008*O]}),Object(l.jsx)("h2",{style:{fontSize:"1.3rem"},children:"Preview"}),Object(l.jsx)("p",{className:"w-100",children:"Enter your text here"===a||""===a?"Enter text above to see preview.":a}),Object(l.jsxs)("div",{className:"my-3",children:[Object(l.jsx)("h2",{style:{fontSize:"1.3rem"},children:"Emails:-"}),Object(l.jsx)("p",{className:"w-100",children:i})]}),Object(l.jsxs)("div",{className:"my-3",children:[Object(l.jsx)("h2",{style:{fontSize:"1.3rem"},children:"Numbers:-"}),Object(l.jsx)("p",{className:"w-100",children:h})]})]})]})}function p(e){return e.alertObj&&Object(l.jsxs)("div",{className:"alert alert-".concat(e.alertObj.type," alert-dismissible fade show"),role:"alert",children:[Object(l.jsx)("strong",{children:e.alertObj.type.charAt(0).toUpperCase()+e.alertObj.type.slice(1)}),": ",e.alertObj.msg]})}u.prototype={heading:x.a.string},u.defaultProps={heading:"Write your heading here :"};var O=c(3);var y=function(){var e=Object(s.useState)(null),t=Object(d.a)(e,2),c=t[0],a=t[1],r=Object(s.useState)("body-secondary"),o=Object(d.a)(r,2),h=o[0],x=o[1],y=Object(s.useState)("dark"),v=Object(d.a)(y,2),f=v[0],g=v[1],N=Object(s.useState)(window.innerWidth<1e3?"column":"row"),k=Object(d.a)(N,2),w=k[0],C=k[1],S=Object(s.useState)(window.innerWidth<1e3?"":"(must contain one uppercase, lowercase, number and special character)"),E=Object(d.a)(S,2),M=E[0],W=E[1];return window.addEventListener("resize",(function(){window.innerWidth<1e3?(C("column"),W("")):(C("row"),W("(must contain one uppercase, lowercase, number and special character)"))})),Object(l.jsx)(n.a,{children:Object(l.jsxs)("div",{id:"main",style:{boxSizing:"border-box"},children:[Object(l.jsx)(i,{mode:h,toggleMode:function(){"dark"===h?(x("body-secondary"),document.body.style.backgroundColor="white",g("dark")):(x("dark"),document.body.style.backgroundColor="black",g("light"))},txtMode:f,flexDirection:w}),Object(l.jsx)("div",{className:"container my-1",style:{height:"30px",width:"100%"},children:Object(l.jsx)(p,{alertObj:c})}),Object(l.jsx)("div",{style:{boxSizing:"border-box",padding:"20px"},children:Object(l.jsx)("div",{className:"container my-5 bg-".concat(h," p-4 rounded-5 "),style:{boxShadow:".1px .1px 26px ".concat("body-secondary"===h?"grey":"white")},children:Object(l.jsxs)(O.c,{children:[Object(l.jsx)(O.a,{exact:!0,path:"/login",element:Object(l.jsx)(j,{txtMode:f,passInfo:M})}),Object(l.jsx)(O.a,{exact:!0,path:"/projects",element:Object(l.jsx)(m,{txtMode:f,mode:h})}),Object(l.jsx)(O.a,{exact:!0,path:"/React-App/",element:Object(l.jsx)(b,{mode:h,textMode:f})}),Object(l.jsx)(O.a,{exact:!0,path:"/textconverter",element:Object(l.jsx)(u,{heading:"Enter your text below :",showAlert:function(e,t){a({msg:e,type:t}),setTimeout((function(){a(null)}),2500)},mode:h,textMode:f,flexDirection:w})})]})})})]})})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,39)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;c(e),s(e),a(e),r(e),o(e)}))};o.a.createRoot(document.getElementById("root")).render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(y,{})})),v()}},[[38,1,2]]]);
//# sourceMappingURL=main.28dc8664.chunk.js.map