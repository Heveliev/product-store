"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[686],{6686:function(e,n,t){t.r(n),t.d(n,{default:function(){return se}});var r=t(4087),i=t(9229),s=t(5442),c=t(9434),o=t(5653),a=t(6907),l=t(2435),u=t(4363),d=t(9135),x=function(e){return e.sort},h=t(2447),j=t(184),f=function(){var e=(0,c.I0)(),n=(0,c.v9)(x),t=function(n){e((0,h.D)(n))};return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(a.h,{variant:"outline",spacing:4,children:[(0,j.jsx)(l.z,{leftIcon:(0,j.jsx)(u.J,{as:"priceAsc"===n?d.ZF:d.r_}),onClick:function(){return t("priceAsc"===n?"priceDesc":"priceAsc")},children:"Sort by Price"}),(0,j.jsx)(l.z,{leftIcon:(0,j.jsx)(u.J,{as:"ratingAsc"===n?d.ZF:d.r_}),onClick:function(){return t("ratingAsc"===n?"ratingDesc":"ratingAsc")},children:"Sort by Rating"}),(0,j.jsx)(l.z,{leftIcon:(0,j.jsx)(u.J,{as:"stockAsc"===n?d.ZF:d.r_}),onClick:function(){return t("stockAsc"===n?"stockDesc":"stockAsc")},children:"Sort by Stock"})]})})},p=function(){var e=(0,c.I0)();return(0,j.jsxs)(r.xu,{p:4,children:[(0,j.jsx)(i.x,{fontSize:"xl",mt:2,children:"Enter the name or category of the product you are looking for:"}),(0,j.jsx)(s.I,{onChange:function(n){var t=n.currentTarget.value.toLowerCase();e((0,o.h)(t))},type:"text",name:"name",placeholder:"Search products",mb:4}),"     ",(0,j.jsx)(f,{})]})},g=t(3204),m=t(5946),v=t(3433),b=t(9439),k=t(3269),y=t(176),C=t(3790),S=t(4464),F=t(7885),I=t(2720),Z=function(e){return e.filter},w=function(e){return e.products.items},A=function(e){return e.products.isLoading},z=t(4799),D=t(114),_=t(4993),E=function(e){return e.modal},P=t(2791),L=t(7810),N=t(1820),R=t(3380),T=t(8789),q=t(7693),J=t(7521),K=t(2392),X=t(8208),B=t(4653),V=t(1686);function W(e){var n=e.id,t=e.values,r=(0,c.v9)(E),i=(0,c.I0)(),o=t.title;return(0,j.jsxs)(N.u_,{isOpen:r,onClose:function(){return i((0,L.F)())},children:[(0,j.jsx)(R.Z,{}),(0,j.jsxs)(T.h,{children:[(0,j.jsx)(q.x,{children:"Please make changes"}),(0,j.jsx)(J.f,{children:(0,j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements.title.value;t?(i((0,_.zG)({title:t,id:n})),i((0,L.F)())):V.Notify.failure("Sorry, but you didn&#180;t enter a value in the field")},children:[(0,j.jsxs)(K.NI,{children:[(0,j.jsx)(X.l,{children:"Title"}),(0,j.jsx)(s.I,{placeholder:"Title",type:"text",name:"title",defaultValue:o})]}),(0,j.jsxs)("div",{style:{display:"flex",justifyContent:"end",gap:"10px",margin:"10px"},children:[(0,j.jsx)(l.z,{type:"submit",colorScheme:"blue",children:"Save"}),(0,j.jsx)(l.z,{variant:"outline",mr:3,onClick:function(){return i((0,L.F)())},children:"Cancel"})]})]})}),(0,j.jsx)(B.m,{})]})]})}var $,G,O=function(){var e=(0,P.useState)(),n=(0,b.Z)(e,2),t=n[0],s=n[1],o=(0,c.I0)(),a=(0,c.v9)(w),l=(0,c.v9)(Z),u=(0,c.v9)(E),d=(0,c.v9)(x),h=function(e,n){switch(n){case"priceAsc":return(0,v.Z)(e).sort((function(e,n){return e.price-n.price}));case"priceDesc":return(0,v.Z)(e).sort((function(e,n){return n.price-e.price}));case"ratingAsc":return(0,v.Z)(e).sort((function(e,n){return e.rating-n.rating}));case"ratingDesc":return(0,v.Z)(e).sort((function(e,n){return n.rating-e.rating}));case"stockAsc":return(0,v.Z)(e).sort((function(e,n){return e.stock-n.stock}));case"stockDesc":return(0,v.Z)(e).sort((function(e,n){return n.stock-e.stock}));default:return e}}(a,d);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(k.K,{padding:"10px",spacing:4,children:(null===h||void 0===h?void 0:h.filter((function(e){var n;return e.title.toLowerCase().includes(l)||(null===(n=e.category)||void 0===n?void 0:n.toLowerCase().includes(l))}))).map((function(e){return(0,j.jsxs)(y.k,{align:"center",position:"relative",children:[e.images.length&&(0,j.jsx)(C.E,{border:"green 3px solid",boxSize:"100px",objectFit:"cover",src:e.images[0],alt:e.title}),(0,j.jsxs)(r.xu,{ml:4,children:[(0,j.jsx)(i.x,{fontWeight:"bold",children:e.title}),e.description&&(0,j.jsx)(i.x,{children:e.description}),e.price&&(0,j.jsxs)(i.x,{fontSize:"xl",fontWeight:"bold",mt:2,children:["$",e.price]}),e.rating&&(0,j.jsxs)(i.x,{children:["Rating: ",e.rating]}),e.stock&&(0,j.jsxs)(i.x,{children:["Stock: ",e.stock]}),e.category&&(0,j.jsxs)(i.x,{children:["Category: ",e.category]})]}),(0,j.jsx)(S.L,{}),(0,j.jsxs)(r.xu,{children:[(0,j.jsx)(F.h,{width:"100px",position:"absolute",top:"50%",right:"0",icon:(0,j.jsx)(z.T,{}),"aria-label":"Delete Product",variant:"ghost",onClick:function(){return o((0,_.Ir)(e.id))}}),(0,j.jsx)(F.h,{"data-id":e.id,width:"100px",position:"absolute",bottom:"0",right:"0",icon:(0,j.jsx)(D.d,{}),"aria-label":"Edit Product",variant:"ghost",onClick:function(){o((0,L.F)()),s(e.id)}})]})]},e.id)}))}),(0,j.jsx)(I.h,{children:u&&(0,j.jsx)(W,{id:t,values:function(e){return null===a||void 0===a?void 0:a.find((function(n){return n.id===e}))}(t)})})]})},Y=t(5705),H=t(168),M=t(225),Q=(0,M.Z)(Y.gN)($||($=(0,H.Z)(["\n width: 100%;\n  height: 8;\n  font-size: 16px;\n  padding: 0;\n  background-color: #EDF2F7; \n  border: 1px solid #E2E8F0; \n  border-radius: 0;\n  outline: none;\n  box-sizing: border-box;\n   padding: 2 3;\n  border-color: #CBD5E0;\n  color:black;\n  border-radius:4px;\n"]))),U=M.Z.p(G||(G=(0,H.Z)(["\ncolor:red;"]))),ee=t(8007),ne=ee.Ry().shape({title:ee.Z_().required(),author:ee.Z_().required(),year:ee.Rx().required(),rating:ee.Rx().required()}),te={title:"",author:"",year:1995,rating:1},re=function(e){var n=e.name;return(0,j.jsx)(Y.Bc,{name:n,render:function(e){return(0,j.jsx)(U,{children:e})}})},ie=function(){var e=(0,c.I0)();return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(m.X,{fontSize:"30px",children:"Please, enter values in the fields to add a new product:"}),(0,j.jsx)(Y.J9,{initialValues:te,onSubmit:function(n,t){var r=t.resetForm,i=n.title,s=n.author,c=n.year,o=n.rating;e((0,_.gK)({title:i,author:s,year:c,rating:o})),r()},validationSchema:ne,children:(0,j.jsx)(Y.l0,{children:(0,j.jsxs)(k.K,{padding:"15px",spacing:"4",children:[(0,j.jsxs)(y.k,{justifyContent:"space-between",children:[(0,j.jsx)(K.NI,{flex:"1",children:(0,j.jsxs)(X.l,{children:["Title",(0,j.jsx)(Q,{name:"title",type:"text"}),(0,j.jsx)(re,{name:"title"})]})}),(0,j.jsx)(K.NI,{flex:"1",marginLeft:"10px",children:(0,j.jsxs)(X.l,{children:["Author",(0,j.jsx)(Q,{name:"author",type:"text"}),(0,j.jsx)(re,{name:"author"})]})})]}),(0,j.jsxs)(y.k,{justifyContent:"space-between",children:[(0,j.jsx)(K.NI,{flex:"1",children:(0,j.jsxs)(X.l,{children:["Year",(0,j.jsx)(Q,{name:"year",type:"number"}),(0,j.jsx)(re,{name:"year"})]})}),(0,j.jsx)(K.NI,{flex:"1",marginLeft:"10px",children:(0,j.jsxs)(X.l,{children:["Rating",(0,j.jsx)(Q,{name:"rating"}),(0,j.jsx)(re,{name:"rating"})]})})]}),(0,j.jsx)(l.z,{type:"submit",children:"Add Product"})]})})})]})},se=function(){var e=(0,c.I0)(),n=(0,c.v9)(w),t=(0,c.v9)(A);return(0,P.useEffect)((function(){e((0,_.aP)())}),[e]),(0,j.jsx)(j.Fragment,{children:t?(0,j.jsx)(r.xu,{position:"fixed",left:"50%",top:"50%",transform:"translate(-50%,-50%)",children:(0,j.jsx)(g.$,{thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"blue.500",size:"xl"})}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(ie,{}),(0,j.jsx)(m.X,{textAlign:"center",children:"Products list:"}),(0,j.jsx)(p,{}),null!==n&&void 0!==n&&n.length?(0,j.jsx)(O,{}):(0,j.jsx)(m.X,{margin:"20px",children:"Sorry, but we have sold all the products"})]})})}}}]);
//# sourceMappingURL=686.e1533469.chunk.js.map