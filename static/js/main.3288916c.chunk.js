(this["webpackJsonpreact-snickers"]=this["webpackJsonpreact-snickers"]||[]).push([[0],{35:function(e,t,r){e.exports={infoBlock:"Info_infoBlock__34Ys-"}},42:function(e,t,r){},6:function(e,t){e.exports={baseUrl:"https://60ec0862e9647b0017cde002.mockapi.io"}},68:function(e,t,r){},69:function(e,t,r){},70:function(e,t,r){"use strict";r.r(t);var c=r(1),n=r.n(c),i=r(32),a=r.n(i),s=r(11),o=(r(41),r(42),r(15)),l=r(16),d=r(4),j=r(2),u=r(5),m=r.n(u),b=r(0),h=function(e){var t=e.currentSum,r=e.countOfLikedItems,c=e.onClickCart;return Object(b.jsxs)("header",{className:"d-flex align-center justify-between p-40 header",children:[Object(b.jsx)(s.b,{to:"/",children:Object(b.jsxs)("div",{className:"d-flex align-center header__left",children:[Object(b.jsx)("img",{className:"mr-15",width:40,height:40,src:"/img/logo.svg",alt:"Logo"}),Object(b.jsxs)("div",{className:"header__info",children:[Object(b.jsx)("h3",{className:"text-uppercase header__name",children:"React sneakers"}),Object(b.jsx)("p",{className:"opacity-5 header__subtext",children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043b\u0443\u0447\u0448\u0438\u0445 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a"})]})]})}),Object(b.jsxs)("div",{className:"clear d-flex header__right",children:[Object(b.jsxs)("div",{onClick:c,className:"mr-30 d-flex align-center cu-p",children:[Object(b.jsx)("img",{className:"mr-10",width:20,height:20,src:"/img/cart.svg",alt:"Cart"}),Object(b.jsxs)("span",{className:"header__price",children:[t," \u0440\u0443\u0431."]})]}),Object(b.jsx)("div",{className:"mr-30 favorite-link",children:Object(b.jsxs)(s.b,{className:"cu-p",to:"/favorites",children:[Object(b.jsx)("span",{className:"favorites-count",children:r>0&&r}),r<=0?Object(b.jsx)("img",{width:20,height:20,src:"/img/like.svg",alt:"Like"}):Object(b.jsx)("img",{width:20,height:20,src:"/img/like-colored.svg",alt:"Like colored"})]})}),Object(b.jsx)(s.b,{to:"/orders",className:"cu-p",children:Object(b.jsx)("div",{children:Object(b.jsx)("img",{width:20,height:20,src:"/img/user.svg",alt:"User"})})})]})]})},x=r(22),f=r.n(x),O=r(34),v=function(e){var t=e.title,r=e.price,c=e.imgSrc,n=e.removeItem;return Object(b.jsxs)("div",{className:"d-flex justify-between align-center drawer__card",children:[Object(b.jsx)("img",{width:70,height:70,src:c,alt:"Sneakers"}),Object(b.jsxs)("div",{className:"drawer__text",children:[Object(b.jsx)("p",{children:t}),Object(b.jsxs)("b",{children:[r," \u0440\u0443\u0431."]})]}),Object(b.jsx)("button",{onClick:n,className:"d-flex justify-center align-center drawer__btn main-btn",children:Object(b.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(b.jsx)("path",{d:"M12.0799 10.6155L9.6311 8.16673L12.0798 5.71801C13.0241 4.77376 11.5596 3.30934 10.6154 4.25359L8.16668 6.70231L5.71787 4.2535C4.77384 3.30947 3.30947 4.77384 4.2535 5.71787L6.70231 8.16668L4.25359 10.6154C3.30934 11.5596 4.77376 13.0241 5.71801 12.0798L8.16673 9.6311L10.6155 12.0799C11.5597 13.0241 13.0241 11.5597 12.0799 10.6155Z",fill:"#B5B5B5"})})})]})},g=r(35),p=r.n(g),w=(r(68),function(e){var t=e.text,r=e.link,c=e.onClick;return Object(b.jsxs)(s.b,{className:"action-btn follow-btn",to:r,onClick:c,children:[Object(b.jsx)("img",{width:16,height:16,src:"/img/arrow-left.svg",alt:"Arrow"}),Object(b.jsx)("span",{children:t})]})}),C=function(e){var t=e.image,r=void 0===t?{}:t,c=e.title,n=void 0===c?"":c,i=e.parag,a=void 0===i?"":i,s=e.btn,o=void 0===s?{}:s,l=r.url,d=void 0===l?"":l,j=r.width,u=void 0===j?70:j,m=r.height,h=void 0===m?70:m,x=o.text,f=void 0===x?"":x,O=o.link,v=void 0===O?null:O,g=o.onClick;return Object(b.jsxs)("div",{className:p.a.infoBlock,children:[""!==d.trim()&&Object(b.jsx)("img",{src:d,width:u,height:h,alt:""}),""!==n.trim()&&Object(b.jsx)("h2",{children:n}),""!==a.trim()&&Object(b.jsx)("p",{children:a}),""!==f.trim()&&v&&Object(b.jsx)(w,{text:f,link:v,onClick:g})]})},N=n.a.createContext({}),_=r(6),k=function(e){var t=e.currentSum,r=e.removeItem,c=e.onClose,i=n.a.useContext(N),a=i.cartItems,s=i.setCartItems,o=n.a.useState(null),l=Object(d.a)(o,2),j=l[0],u=l[1],h=n.a.useState(!1),x=Object(d.a)(h,2),g=x[0],p=x[1],w=n.a.useState(!1),k=Object(d.a)(w,2),F=k[0],L=k[1],I=function(e){return new Promise((function(t,r){return setTimeout(t,e)}))};return Object(b.jsxs)("div",{className:"drawer",children:[Object(b.jsx)("div",{className:"drawer__dimmer"}),Object(b.jsxs)("div",{className:"d-flex flex-column justify-between drawer__sidebar",children:[Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"d-flex justify-between align-center mb-30 mt-30",children:[Object(b.jsx)("h2",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(b.jsx)("button",{onClick:c,className:"d-flex justify-center align-center drawer__btn main-btn",children:Object(b.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(b.jsx)("path",{d:"M12.0799 10.6155L9.6311 8.16673L12.0798 5.71801C13.0241 4.77376 11.5596 3.30934 10.6154 4.25359L8.16668 6.70231L5.71787 4.2535C4.77384 3.30947 3.30947 4.77384 4.2535 5.71787L6.70231 8.16668L4.25359 10.6154C3.30934 11.5596 4.77376 13.0241 5.71801 12.0798L8.16673 9.6311L10.6155 12.0799C11.5597 13.0241 13.0241 11.5597 12.0799 10.6155Z",fill:"#B5B5B5"})})})]}),Object(b.jsx)("div",{className:"drawer__cards",children:a.length>0&&!g&&a.map((function(e){return Object(b.jsx)(v,{title:e.title,price:e.price,imgSrc:e.imgSrc,removeItem:function(){return r(e.id)}},e.id)}))})]}),a.length>0&&!g&&Object(b.jsxs)("ul",{className:"drawer__order mb-30",children:[Object(b.jsxs)("li",{className:"mb-20 justify-between d-flex drawer__total",children:[Object(b.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(b.jsx)("div",{}),Object(b.jsxs)("b",{children:[t," \u0440\u0443\u0431."]})]}),Object(b.jsxs)("li",{className:"mb-25 justify-between d-flex drawer__tax",children:[Object(b.jsx)("span",{children:"\u041d\u0430\u043b\u043e\u0433 5%:"}),Object(b.jsx)("div",{}),Object(b.jsxs)("b",{children:[Math.ceil(.05*t)," \u0440\u0443\u0431."]})]}),Object(b.jsx)("li",{className:"d-flex justify-center",children:Object(b.jsxs)("button",{disabled:F,onClick:function(){L(!0),m.a.post("".concat(_.baseUrl,"/orders"),{items:a}).then(function(){var e=Object(O.a)(f.a.mark((function e(t){var r,c,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.data,u(r.id),p(!0),s([]),c=0;case 5:if(!(c<r.items.length)){e.next=20;break}return e.prev=6,n=r.items[c],e.next=10,m.a.delete("".concat(_.baseUrl,"/cart/").concat(n.id));case 10:return e.next=12,I(1e3);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(6),console.error(e.t0);case 17:c++,e.next=5;break;case 20:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.error(e)})).finally((function(){return L(!1)}))},className:"drawer__actionBtn action-btn",children:[Object(b.jsx)("span",{children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"}),Object(b.jsx)("img",{src:"/img/arrow-right.svg",alt:"Arrow Right"})]})})]}),a.length<=0&&!g&&Object(b.jsx)(C,{image:{url:"/img/empty-box.svg",width:120,height:120},title:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f",parag:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u043f\u0430\u0440\u0443 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437.",btn:{link:"/",text:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e",onClick:c}}),g&&Object(b.jsx)(C,{image:{url:"/img/order-created.svg",width:83,height:120},title:"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d!",parag:"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 #".concat(j," \u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435."),btn:{link:"/",text:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e",onClick:c}})]})]})},F=r(36),L=function(){return Object(b.jsxs)(F.a,{speed:2,width:153,height:205,viewBox:"0 0 150 187",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(b.jsx)("rect",{x:"0",y:"0",rx:"10",ry:"10",width:"150",height:"91"}),Object(b.jsx)("rect",{x:"0",y:"107",rx:"3",ry:"3",width:"150",height:"15"}),Object(b.jsx)("rect",{x:"0",y:"126",rx:"3",ry:"3",width:"93",height:"15"}),Object(b.jsx)("rect",{x:"0",y:"163",rx:"8",ry:"8",width:"80",height:"24"}),Object(b.jsx)("rect",{x:"114",y:"155",rx:"8",ry:"8",width:"32",height:"32"})]})},I=(r(69),function(e){var t=e.id,r=e.title,c=e.price,i=e.imgSrc,a=e.isLoading,s=void 0!==a&&a,o=e.isAddingToCartDisabled,l=void 0!==o&&o,d=e.isAddingToFavoriteDisabled,j=void 0!==d&&d,u=e.addToFavorite,m=e.removeFromFavorite,h=e.addToCart,x=e.removeFromCart,f=n.a.useContext(N),O=f.isItemAdded,v=f.isItemFavorite;return Object(b.jsxs)("div",{className:"card d-flex flex-column",children:[s&&Object(b.jsx)(L,{}),!s&&Object(b.jsxs)(n.a.Fragment,{children:[Object(b.jsx)("div",{className:"card__favorite",children:!j&&(v(t)?Object(b.jsx)("img",{className:"cu-p",src:"/img/heart-liked.svg",alt:"Heart-liked",onClick:m}):Object(b.jsx)("img",{className:"cu-p",src:"/img/heart-unliked.svg",alt:"Heart-unliked",onClick:u}))}),Object(b.jsx)("img",{src:i,width:133,height:112,alt:"Sneakers"}),Object(b.jsx)("p",{children:r}),Object(b.jsxs)("div",{className:"d-flex justify-between align-center",children:[Object(b.jsxs)("div",{className:"d-flex flex-column",children:[Object(b.jsx)("span",{className:"text-uppercase card__tag",children:"\u0426\u0435\u043d\u0430:"}),Object(b.jsxs)("b",{className:"card__price",children:[c," \u0440\u0443\u0431."]})]}),!l&&(O(t)?Object(b.jsx)("img",{onClick:x,className:"check-btn cu-p",width:32,height:32,src:"/img/button-checked.svg",alt:"Checked"}):Object(b.jsx)("img",{onClick:h,className:"plus-btn",width:32,height:32,src:"/img/button-unchecked.svg",alt:"Plus"}))]})]})]})}),S=function(e){var t=e.children;return Object(b.jsx)("div",{className:"content__cards",children:t})},y=function(e){var t=e.searchValue,r=e.isLoading,c=e.onChangeSearchInput,i=e.clearSearchInput,a=e.onAddToFavorite,s=e.onRemoveFromFavorite,l=e.onAddToCart,d=e.onRemoveFromCart,j=n.a.useContext(N),u=j.items,m=j.cartItems,h=j.favoriteItems;return Object(b.jsxs)("section",{className:"content p-40",children:[Object(b.jsxs)("div",{className:"mb-40 d-flex justify-between align-center content__top",children:[Object(b.jsx)("h1",{className:"content__title",children:""===t?"\u0412\u0441\u0435 \u043a\u0440\u043e\u0441\u043e\u0432\u043a\u0438":'\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443: "'.concat(t,'"')}),Object(b.jsxs)("div",{className:"d-flex align-center content__search",children:[Object(b.jsx)("img",{className:"mr-15",src:"/img/search.svg",alt:"Search icon"}),Object(b.jsx)("input",{value:t,onChange:c,type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a..."}),""!==t&&Object(b.jsx)("img",{onClick:i,className:"cu-p",src:"/img/cross.svg",alt:"Clear"})]})]}),Object(b.jsxs)(S,{children:[!r&&u.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())})).map((function(e){return Object(b.jsx)(I,{id:e.id,title:e.title,price:e.price,imgSrc:e.imgSrc,isLoading:!1,removeFromFavorite:function(){return s((t=e.id,h.find((function(e){return Number(e.itemId)===Number(t)})).id));var t},addToFavorite:function(){return a(e)},addToCart:function(){return l(e)},removeFromCart:function(){return d((t=e.id,m.find((function(e){return Number(e.itemId)===Number(t)})).id));var t}},e.id)})),r&&Object(o.a)(Array(8)).map((function(e,t){return Object(b.jsx)(I,{id:t,title:"",price:0,imgSrc:"",isLoading:!0,removeFromFavorite:function(){},addToFavorite:function(){},addToCart:function(){},removeFromCart:function(){}},t)}))]})]})},T=function(e){var t=e.onAddToFavorite,r=e.onRemoveFromFavorite,c=e.onAddToCart,i=e.onRemoveFromCart,a=n.a.useContext(N),s=a.favoriteItems,o=a.cartItems;return Object(b.jsxs)("section",{className:"content p-40",children:[Object(b.jsx)("h1",{className:"content__title mb-40",children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"}),Object(b.jsx)(S,{children:s.length?s.map((function(e){return Object(b.jsx)(I,{id:e.itemId,title:e.title,price:e.price,imgSrc:e.imgSrc,addToFavorite:function(){return t(e)},removeFromFavorite:function(){return r(e.id)},addToCart:function(){return c(e)},removeFromCart:function(){return i((t=e.itemId,o.find((function(e){return Number(e.itemId)===Number(t)})).id));var t}},e.id)})):Object(b.jsx)("p",{children:"\u041f\u043e\u043a\u0430 \u0443 \u0412\u0430\u0441 \u043d\u0435\u0442 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0445 \u0442\u043e\u0432\u0430\u0440\u043e\u0432"})})]})},B=function(e){var t=e.id,r=e.items,c=e.deleteOrder;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("h2",{className:"d-flex",children:[Object(b.jsxs)("span",{className:"mr-30",children:["\u0417\u0430\u043a\u0430\u0437 #",t]}),Object(b.jsx)("button",{title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437 #".concat(t),onClick:c,className:"d-flex justify-center align-center drawer__btn main-btn",children:Object(b.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(b.jsx)("path",{d:"M12.0799 10.6155L9.6311 8.16673L12.0798 5.71801C13.0241 4.77376 11.5596 3.30934 10.6154 4.25359L8.16668 6.70231L5.71787 4.2535C4.77384 3.30947 3.30947 4.77384 4.2535 5.71787L6.70231 8.16668L4.25359 10.6154C3.30934 11.5596 4.77376 13.0241 5.71801 12.0798L8.16673 9.6311L10.6155 12.0799C11.5597 13.0241 13.0241 11.5597 12.0799 10.6155Z",fill:"#B5B5B5"})})})]}),Object(b.jsx)(S,{children:r.map((function(e){return Object(b.jsx)(I,{id:e.id,title:e.title,price:e.price,imgSrc:e.imgSrc,isAddingToCartDisabled:!0,isAddingToFavoriteDisabled:!0,addToFavorite:function(){},removeFromFavorite:function(){},addToCart:function(){},removeFromCart:function(){}},e.id)}))})]})},A=function(){var e=n.a.useState([]),t=Object(d.a)(e,2),r=t[0],c=t[1],i=n.a.useState(!1),a=Object(d.a)(i,2),s=a[0],o=a[1];n.a.useEffect((function(){o(!0),m.a.get("".concat(_.baseUrl,"/orders")).then((function(e){var t=e.data;c(t),o(!1)})).catch((function(e){return console.error(e)}))}),[]);return Object(b.jsxs)("section",{className:"content p-40",children:[Object(b.jsx)("h1",{className:"content__title mb-40",children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b"}),Object(b.jsx)("div",{className:"orders",children:s?Object(b.jsx)("p",{children:"\u0418\u0449\u0435\u043c \u0412\u0430\u0448\u0438 \u0437\u0430\u043a\u0430\u0437\u044b..."}):r.length>0?r.map((function(e){var t=e.id,n=e.items;return Object(b.jsx)(B,{id:t,items:n,deleteOrder:function(){return function(e){m.a.delete("".concat(_.baseUrl,"/orders/").concat(e)).then((function(){return c((function(){return r.filter((function(t){return t.id!==e}))}))})).catch((function(e){return console.error(e)}))}(t)}},t)})):Object(b.jsx)("p",{children:"\u041f\u043e\u043a\u0430 \u0443 \u0412\u0430\u0441 \u043d\u0435\u0442 \u0437\u0430\u043a\u0430\u0437\u043e\u0432."})})]})};var U=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),r=t[0],n=t[1],i=Object(c.useState)([]),a=Object(d.a)(i,2),s=a[0],u=a[1],x=Object(c.useState)([]),f=Object(d.a)(x,2),O=f[0],v=f[1],g=Object(c.useState)(!1),p=Object(d.a)(g,2),w=p[0],C=p[1],F=Object(c.useState)(""),L=Object(d.a)(F,2),I=L[0],S=L[1],B=Object(c.useState)(0),U=Object(d.a)(B,2),R=U[0],P=U[1],E=Object(c.useState)(!0),M=Object(d.a)(E,2),D=M[0],Z=M[1];Object(c.useEffect)((function(){var e=new Promise((function(e,t){return m.a.get("".concat(_.baseUrl,"/items")).then((function(t){return e(t.data)})).catch((function(e){return t(e)}))})),t=new Promise((function(e,t){return m.a.get("".concat(_.baseUrl,"/cart")).then((function(t){return e(t.data)})).catch((function(e){return t(e)}))})),r=new Promise((function(e,t){return m.a.get("".concat(_.baseUrl,"/favorites")).then((function(t){return e(t.data)})).catch((function(e){return t(e)}))}));Promise.all([e,t,r]).then((function(e){v(e[2]),u(e[1]),n(e[0]),Z(!1)})).catch((function(e){return console.error(e)}))}),[]),Object(c.useEffect)((function(){var e=0;s.forEach((function(t){return e+=t.price})),P(e)}),[s]);var H=function(e){var t=e.hasOwnProperty("itemId")?e:Object(l.a)(Object(l.a)({},e),{},{itemId:e.id});m.a.post("".concat(_.baseUrl,"/cart"),t).then((function(e){return u((function(t){return[].concat(Object(o.a)(t),[e.data])}))})).catch((function(e){return console.error(e)}))},J=function(e){m.a.delete("".concat(_.baseUrl,"/cart/").concat(e)).then((function(){return u((function(t){return t.filter((function(t){return t.id!==e}))}))})).catch((function(e){return console.error(e)}))},V=function(e){m.a.post("".concat(_.baseUrl,"/favorites"),Object(l.a)(Object(l.a)({},e),{},{itemId:e.id})).then((function(e){return v((function(t){return[].concat(Object(o.a)(t),[e.data])}))}))},Y=function(e){m.a.delete("".concat(_.baseUrl,"/favorites/").concat(e)).then((function(){return v((function(t){return t.filter((function(t){return t.id!==e}))}))})).catch((function(e){return console.error(e)}))};return Object(b.jsx)("div",{className:"wrapper clear",children:Object(b.jsxs)(N.Provider,{value:{items:r,cartItems:s,favoriteItems:O,setCartItems:u,onRemoveFromCart:J,isItemAdded:function(e){return s.some((function(t){return Number(t.itemId)===Number(e)}))},isItemFavorite:function(e){return O.some((function(t){return Number(t.itemId)===Number(e)}))}},children:[w&&Object(b.jsx)(k,{currentSum:R,removeItem:J,onClose:function(){return C(!1)}}),Object(b.jsx)(h,{currentSum:R,countOfLikedItems:O.length,onClickCart:function(){return C(!0)}}),Object(b.jsx)(j.a,{path:"/",exact:!0,children:Object(b.jsx)(y,{searchValue:I,isLoading:D,onChangeSearchInput:function(e){S(e.target.value)},clearSearchInput:function(){S("")},onAddToFavorite:V,onRemoveFromFavorite:Y,onAddToCart:H,onRemoveFromCart:J})}),Object(b.jsx)(j.a,{path:"/favorites",exact:!0,children:Object(b.jsx)(T,{onAddToFavorite:V,onRemoveFromFavorite:Y,onAddToCart:H,onRemoveFromCart:J})}),Object(b.jsx)(j.a,{path:"/orders",children:Object(b.jsx)(A,{})})]})})};a.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(s.a,{children:Object(b.jsx)(U,{})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.3288916c.chunk.js.map