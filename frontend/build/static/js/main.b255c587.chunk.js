(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),c=n(20),s=n.n(c),i=(n(30),n(24)),r=n(2),l=n(0);var u=function(){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("p",{className:"footer__text",children:"\xa92020 Mesto Russia"})})},p=Object(o.createContext)();var d=function(e){return Object(l.jsx)("section",{className:"popup popup_card ".concat(""!==e.card&&"popup_is-opened"),children:Object(l.jsxs)("div",{className:"popup__window popup__window_type_image",children:[Object(l.jsx)("button",{className:"popup__btn-close popup__btn-close_card",type:"button",onClick:e.onClose}),Object(l.jsxs)("div",{className:"popup__element",children:[Object(l.jsx)("img",{src:"".concat(e.card.link),alt:e.card.name,className:"popup__image"}),Object(l.jsx)("p",{className:"popup__text popup__text_type_image",children:e.card.name})]})]})})},j=function(e){var t=Object(o.useContext)(p);var n=e.card.owner===t._id,a="element__btn-delete ".concat(n&&"element__btn-delete_my-card"),c=e.card.likes.some((function(e){return e._id===t._id})),s="".concat(c?"element__heart element__heart_active":"element__heart");return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"element",children:[Object(l.jsx)("img",{alt:e.card.name,src:e.card.link,className:"element__image",onClick:function(){e.onCardClick(e.card)}}),Object(l.jsx)("button",{className:a,type:"button",onClick:function(){e.onCardDelete(e.card._id)}}),Object(l.jsxs)("div",{className:"element__footer",children:[Object(l.jsx)("h2",{className:"element__text",children:e.card.name}),Object(l.jsxs)("div",{className:"element__like-group",children:[Object(l.jsx)("button",{className:s,onClick:function(){e.onCardLike(e.card)},type:"button"}),Object(l.jsx)("p",{className:"element__like-number",children:e.card.likes.length})]})]})]})})},m=n(8);var b=function(e){return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)("div",{className:"logo"}),e.children]})};var h=function(e){return Object(l.jsx)("section",{className:"popup popup_".concat(e.name," ").concat(e.isOpen&&"popup_is-opened"),children:Object(l.jsxs)("div",{className:"popup__window popup__window_type_form",children:[Object(l.jsx)("button",{onClick:e.onClose,className:"popup__btn-close popup__btn-close_".concat(e.name),type:"button"}),Object(l.jsxs)("form",{className:"popup__list popup__list_".concat(e.name),onSubmit:e.submitForm,name:"formEdit",children:[Object(l.jsx)("h2",{className:"popup__text popup__text_type_form",children:e.title}),e.children]})]})})};var _=function(e){var t=Object(o.useContext)(p),n=Object(o.useState)(""),a=Object(r.a)(n,2),c=a[0],s=a[1],i=Object(o.useState)(""),u=Object(r.a)(i,2),d=u[0],j=u[1];return Object(o.useEffect)((function(){s(t.name||""),j(t.about||"")}),[t]),Object(l.jsx)(h,{isOpen:e.isOpen,onClose:e.onClose,name:"edit",submitForm:function(t){t.preventDefault(),e.onUpdateUser({name:c,about:d}),e.onClose()},title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",children:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"popup__input-area",children:[Object(l.jsx)("input",{required:!0,minLength:"2",value:c,maxLength:"40",onChange:function(e){s(e.target.value)},type:"text",className:"popup__input popup__input_value_name",id:"name",name:"name",placeholder:"\u0418\u043c\u044f"}),Object(l.jsx)("span",{id:"name-error",className:"popup__error"})]}),Object(l.jsxs)("div",{className:"popup__input-area",children:[Object(l.jsx)("input",{required:!0,minLength:"2",value:d,maxLength:"200",onChange:function(e){j(e.target.value)},type:"text",className:"popup__input popup__input_value_job",id:"about",name:"about",placeholder:"\u041e \u0441\u0435\u0431\u0435"}),Object(l.jsx)("span",{id:"about-error",className:"popup__error"})]}),Object(l.jsx)("button",{className:"popup__btn-save",value:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",type:"submit",name:"closeEdit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})};var f=function(e){var t=Object(o.useRef)();return Object(l.jsx)(h,{name:"avatar",onClose:e.onClose,isOpen:e.isOpen,submitForm:function(n){n.preventDefault(),e.onUpdateAvatar(t.current.value),e.onClose()},title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",children:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"popup__input-area",children:[Object(l.jsx)("input",{required:!0,type:"url",className:"popup__input popup__input_value_url",name:"imgAvatar",id:"imgAvatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0443",ref:t}),Object(l.jsx)("span",{id:"imgAvatar-error",className:"popup__error"})]}),Object(l.jsx)("button",{className:"popup__btn-save",type:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})};var O=function(e){var t=Object(o.useState)(""),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(o.useState)(""),i=Object(r.a)(s,2),u=i[0],p=i[1];return Object(l.jsx)(h,{name:"add",onClose:e.onClose,isOpen:e.isOpen,submitForm:function(t){t.preventDefault(),e.onUpdateCard({name:a,link:u}),e.onClose()},title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",children:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"popup__input-area",children:[Object(l.jsx)("input",{required:!0,minLength:"2",maxLength:"30",value:a,onChange:function(e){c(e.target.value)},type:"text",className:"popup__input popup__input_value_name-image",name:"nameCard",id:"nameCard",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(l.jsx)("span",{id:"nameCard-error",className:"popup__error"})]}),Object(l.jsxs)("div",{className:"popup__input-area",children:[Object(l.jsx)("input",{required:!0,value:u,onChange:function(e){p(e.target.value)},type:"url",className:"popup__input popup__input_value_url",name:"imgCard",id:"imgCard",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"}),Object(l.jsx)("span",{id:"imgCard-error",className:"popup__error"})]}),Object(l.jsx)("button",{className:"popup__btn-save",value:"",type:"submit",id:"addButton",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})})};var g=function(e){return Object(l.jsx)(h,{name:"InfoTooltip",onClose:e.onClose,isOpen:e.isOpenInfoTooltip,children:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:e.image?"info-tooltip__image info-tooltip__image_right":"info-tooltip__image info-tooltip__image_wrong"}),Object(l.jsx)("h2",{className:"popup__text popup__text_type_form",children:e.text})]})})};var x=function(e){var t=Object(o.useContext)(p),n=Object(o.useState)(!1),a=Object(r.a)(n,2),c=a[0],s=a[1],i=Object(o.useState)(!1),u=Object(r.a)(i,2),h=u[0],x=u[1],v=Object(o.useState)(!1),C=Object(r.a)(v,2),N=C[0],k=C[1],T=Object(o.useState)({name:"",link:""}),y=Object(r.a)(T,2),S=y[0],w=y[1],I=function(){s(!0)},P=function(){x(!0)},U=function(){k(!0)},E=function(e){w(e)},F=function(){k(!1),x(!1),s(!1),w({name:"",link:""})};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b,{children:Object(l.jsxs)("div",{className:"profile__user-content",children:[Object(l.jsx)("p",{className:"profile__email",children:t.email}),Object(l.jsx)(m.b,{className:"login__link",onClick:e.signOut,to:"/signin",children:"\u0412\u044b\u0439\u0442\u0438"})]})}),Object(l.jsxs)("div",{className:"main",children:[Object(l.jsxs)("section",{className:"profile",children:[Object(l.jsxs)("div",{className:"profile__information",children:[Object(l.jsx)("div",{className:"profile__image-avatar",style:{backgroundImage:"url(".concat(t.avatar,")")}}),Object(l.jsx)("div",{className:"profile__image-avatar-effects",onClick:function(){I()}}),Object(l.jsxs)("div",{className:"profile__intro",children:[Object(l.jsxs)("div",{className:"profile__top-row",children:[Object(l.jsx)("h1",{className:"profile__name",children:t.name}),Object(l.jsx)("button",{className:"profile__btn-edit",type:"button",onClick:function(){P()}})]}),Object(l.jsx)("p",{className:"profile__job",children:t.about})]})]}),Object(l.jsx)("button",{className:"profile__btn-add",type:"button",onClick:function(){U()}}),Object(l.jsx)(_,{isOpen:h,onClose:F,onUpdateUser:e.handleUpdateUser}),Object(l.jsx)(f,{isOpen:c,onClose:F,onUpdateAvatar:e.handleUpdateAvatar}),Object(l.jsx)(O,{isOpen:N,onClose:F,onUpdateCard:e.handleUpdateCard}),Object(l.jsx)(g,{onClose:e.closeInfoTooltipPopup,image:e.infoTooltipImage,text:e.infoTooltipText,isOpenInfoTooltip:e.isOpenInfoTooltip}),Object(l.jsx)(d,{card:""!==S.link?S:"",onClose:F})]}),Object(l.jsx)("section",{className:"elements",children:e.cards.map((function(t){return Object(l.jsx)(j,{onCardClick:E,card:t,onCardLike:e.onHandleCardLike,onCardDelete:e.onHandleCardDelete},t._id)}))})]})]})},v=n(11),C=n(9);var N=function(e){var t=Object(o.useState)({email:"",password:""}),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(o.useState)(""),i=Object(r.a)(s,2),u=(i[0],i[1]),p=function(e){var t=e.target,n=t.name,o=t.value;c(Object(C.a)(Object(C.a)({},a),{},Object(v.a)({},n,o)))};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b,{children:Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(m.b,{className:"login__link login__link_header",to:"/signup",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})}),Object(l.jsxs)("div",{className:"login",children:[Object(l.jsx)("h1",{className:"login__header",children:"\u0412\u0445\u043e\u0434"}),Object(l.jsxs)("form",{className:"login__form",onSubmit:function(t){t.preventDefault(),e.onLogin(a).catch((function(e){return u(e.message||"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a")}))},children:[Object(l.jsx)("input",{id:"email",type:"email",name:"email",className:"login__input",onChange:p,value:a.email,placeholder:"Email"}),Object(l.jsx)("input",{id:"password",type:"password",name:"password",className:"login__input",onChange:p,value:a.password,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(l.jsx)("button",{className:"login__button",children:"\u0412\u043e\u0439\u0442\u0438"})]})]}),Object(l.jsx)(g,{onClose:e.closeInfoTooltipPopup,image:e.infoTooltipImage,text:e.infoTooltipText,isOpenInfoTooltip:e.isOpenInfoTooltip})]})},k=function(e){var t=Object(o.useState)({email:"",password:""}),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(o.useState)(),i=Object(r.a)(s,2),u=(i[0],i[1]),p=function(e){var t=e.target,n=t.name,o=t.value;c(Object(C.a)(Object(C.a)({},a),{},Object(v.a)({},n,o)))};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b,{children:Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(m.b,{className:"login__link login__link_header",to:"/signin",children:"\u0412\u043e\u0439\u0442\u0438"})})}),Object(l.jsxs)("div",{className:"login",children:[Object(l.jsx)("h1",{className:"login__header",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(l.jsxs)("form",{onSubmit:function(t){var n=a.password,o=a.email;t.preventDefault(),e.onRegister({password:n,email:o}).catch((function(e){return u(e.message||"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a")}))},className:"login__form",children:[Object(l.jsx)("input",{id:"email",name:"email",className:"login__input",type:"email",value:a.email,placeholder:"Email",onChange:p}),Object(l.jsx)("input",{id:"password",name:"password",className:"login__input",type:"password",value:a.password,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:p}),Object(l.jsx)("button",{className:"login__button",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(l.jsxs)("p",{className:"login__registr",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? ",Object(l.jsx)(m.b,{className:"login__link",to:"/signin",children:"\u0412\u043e\u0439\u0442\u0438"})," "]})]}),Object(l.jsx)(g,{onClose:e.closeInfoTooltipPopup,image:e.infoTooltipImage,text:e.infoTooltipText,isOpenInfoTooltip:e.isOpenInfoTooltip})]})},T=n(3),y=n(25),S=function(e){var t=e.component,n=Object(y.a)(e,["component"]);return Object(l.jsx)(T.b,{children:function(){return n.loggedIn?Object(l.jsx)(t,Object(C.a)({},n)):Object(l.jsx)(T.a,{to:"./login"})}})},w=n(22),I=n(23),P=new(function(){function e(t){Object(w.a)(this,e),this._address=t.address,this._token="Bearer ".concat(localStorage.getItem("token"))}return Object(I.a)(e,[{key:"getInformation",value:function(){return fetch("".concat(this._address,"/users/me"),{headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getCards",value:function(){return fetch("".concat(this._address,"/cards"),{headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"changeProfile",value:function(e){return fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"postCard",value:function(e){return fetch("".concat(this._address,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"postLike",value:function(e,t){return t?fetch("".concat(this._address,"/cards/").concat(e,"/likes"),{method:"PUT",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})):fetch("".concat(this._address,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._address,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}}]),e}())({address:"https://vasilyevir-mesto-backend.nomoredomains.icu"}),U=Object(o.createContext)(),E="https://vasilyevir-mesto-backend.nomoredomains.icu",F=function(e){return fetch("".concat(E,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(L)},L=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.statusText))};var A=function(){var e=Object(o.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(o.useState)({}),s=Object(r.a)(c,2),d=s[0],j=s[1],m=Object(o.useState)([]),b=Object(r.a)(m,2),h=b[0],_=b[1],f=Object(o.useState)(!1),O=Object(r.a)(f,2),g=O[0],v=O[1],C=Object(o.useState)(""),y=Object(r.a)(C,2),w=y[0],I=y[1],A=Object(o.useState)(""),D=Object(r.a)(A,2),z=D[0],J=D[1],B=function(e){console.log(e),console.log(e.message),e.message?(console.log(11,w),a(!0),I("url(../images/Union.png)"),J("\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"),console.log(12,z,w)):(R(),console.log(21,n,z,w),I("../images/NotUnion.png"),J("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."),console.log(22,z,w))},H=Object(T.g)();Object(o.useEffect)((function(){q()}),[]);var q=function(){if(localStorage.getItem("token")){var e=localStorage.getItem("token");F(e).then((function(e){var t=e.data;t._id&&(v(!0),j(t))}))}};Object(o.useEffect)((function(){g&&H.push("/main")}),[g]);var R=function(){console.log(3),a(!0)},G=function(){a(!1)},M=function(e){R(),localStorage.token||e.message?(I("url(../images/Union.png)"),J("\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"),console.log(12,w)):(console.log(2),I("../images/NotUnion.png"),J("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."))};return Object(o.useEffect)((function(){P.getCards().then((function(e){_(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(l.jsx)("div",{className:"root",children:Object(l.jsx)(p.Provider,{value:d,children:Object(l.jsxs)(U.Provider,{value:[h,_],children:[Object(l.jsxs)(T.d,{children:[Object(l.jsx)(S,{path:"/main",loggedIn:g,signOut:function(){localStorage.removeItem("token"),H.push("/singin"),v(!1)},component:x,onHandleCardLike:function(e){var t=e.likes.some((function(e){return e._id===d._id}));P.postLike(e._id,!t).then((function(t){_((function(n){return n.map((function(n){return n._id===e._id?t.data:n}))}))})).catch((function(e){console.log(e)}))},onHandleCardDelete:function(e){var t=h.filter((function(t){return t._id!==e}));P.deleteCard(e).then((function(){_(t)}))},cards:h,handleUpdateUser:function(e){P.changeProfile(e).then((function(e){j(e)})).catch((function(e){console.log(e)}))},handleUpdateAvatar:function(e){P.changeAvatar(e).then((function(e){j(e)})).catch((function(e){console.log(e)}))},handleUpdateCard:function(e){P.postCard(e).then((function(e){_([e.data].concat(Object(i.a)(h)))})).catch((function(e){console.log(e)}))},infoTooltipImage:w,infoTooltipText:z,isOpenInfoTooltip:n,closeInfoTooltipPopup:G}),Object(l.jsx)(T.b,{exact:!0,path:"/signin",children:Object(l.jsx)(N,{onLogin:function(e){return function(e,t){return fetch("".concat(E,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then(L)}(e.password,e.email).then((function(e){if(!e)throw new Error("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0435 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c");if(e.token)return v(!0),localStorage.setItem("token",e.token),M(e),F(e.token).then((function(e){j(e.data)})).catch((function(e){console.log(e)})),void(t=e.token,fetch("".concat(E,"/cards"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then(L)).then((function(e){_(e.data)})).catch((function(e){console.log(e)}));var t})).catch((function(e){return M(e)}))},infoTooltipImage:w,infoTooltipText:z,isOpenInfoTooltip:n,closeInfoTooltipPopup:G})}),Object(l.jsx)(T.b,{path:"/signup",children:Object(l.jsx)(k,{onRegister:function(e){return function(e){var t=e.password,n=e.email;return fetch("".concat(E,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:t,email:n})}).then(L).catch()}({password:e.password,email:e.email}).then((function(e){if(!e||400===e.statusCode)throw new Error("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");return H.push("/signin"),B(e),e})).catch((function(e){B(e)}))},infoTooltipImage:w,infoTooltipText:z,isOpenInfoTooltip:n,closeInfoTooltipPopup:G})}),Object(l.jsx)(T.b,{children:g?Object(l.jsx)(T.a,{to:"/main"}):Object(l.jsx)(T.a,{to:"/signin"})})]}),Object(l.jsx)(u,{})]})})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),o(e),a(e),c(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(m.a,{children:Object(l.jsx)(A,{})})}),document.getElementById("root")),D()}},[[37,1,2]]]);
//# sourceMappingURL=main.b255c587.chunk.js.map