"use strict";(self.webpackChunkdm_trade=self.webpackChunkdm_trade||[]).push([[539],{443:(e,r,t)=>{t.d(r,{A:()=>n});const n={section:"auth-module__section__xAy95",section__title:"auth-module__section__title__Cew8G",section__link:"auth-module__section__link___7crY","section__login-container":"auth-module__section__login-container__BBpzb",form:"auth-module__form__CpE0w",form__fieldset:"auth-module__form__fieldset__xxxtW",form__error:"auth-module__form__error__gIzF5",form__input:"auth-module__form__input__ypyuB","form__input-error":"auth-module__form__input-error__Ka9Tv","form__auth-error":"auth-module__form__auth-error__EQSBF","form__auth-warning":"auth-module__form__auth-warning__xZ75f",form__button:"auth-module__form__button__NWlI_","form__button-container":"auth-module__form__button-container__khesB"}},539:(e,r,t)=>{t.r(r),t.d(r,{default:()=>h});var n=t(848),o=t(443),s=t(540),a=t(767),i=t(976),c=t(364),l=t(919),_=t(255),u=function(){return u=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},u.apply(this,arguments)},f=function(e,r,t,n){return new(t||(t=Promise))((function(o,s){function a(e){try{c(n.next(e))}catch(e){s(e)}}function i(e){try{c(n.throw(e))}catch(e){s(e)}}function c(e){var r;e.done?o(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(a,i)}c((n=n.apply(e,r||[])).next())}))},m=function(e,r){var t,n,o,s,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;s&&(s=0,i[0]&&(a=0)),a;)try{if(t=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=r.call(e,a)}catch(e){i=[6,e],n=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};function h(){var e=this,r=(0,s.useState)(""),t=r[0],h=r[1],d=(0,s.useState)(""),p=d[0],b=d[1],x=(0,s.useState)(!1),g=x[0],w=x[1],y=(0,s.useState)({}),A=y[0],j=y[1],v={},N=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,k=/^(\+7|8)\d{10}$/,E=(0,a.Zp)(),S=(0,c.wA)();return(0,n.jsxs)("section",{className:o.A.section,children:[(0,n.jsx)("h1",{className:o.A.section__title,children:"Вход в личный кабинет"}),(0,n.jsxs)("form",{onSubmit:function(r){return f(e,void 0,void 0,(function(){return m(this,(function(e){switch(e.label){case 0:if(r.preventDefault(),t?N.test(t)||k.test(t)||(v.loginError="Неверный формат email или номера телефона"):v.loginError="Введите email или номер телефона",p||(v.passwordError="Введите пароль"),j(v),0!==Object.keys(v).length)return[2];w(!0),e.label=1;case 1:return e.trys.push([1,3,4,5]),[4,S((0,l.hB)({login:t,password:p})).unwrap()];case 2:return e.sent(),E("/"),[3,5];case 3:return e.sent(),j((function(e){return u(u({},e),{checkLoginError:"Неверный логин или пароль"})})),[3,5];case 4:return w(!1),[7];case 5:return[2]}}))}))},className:o.A.form,children:[(0,n.jsxs)("fieldset",{className:o.A.form__filedset,children:[(0,n.jsx)("input",{name:"login",type:"text",placeholder:"Е-mail или номер телефона",value:t,onChange:function(e){return h(e.target.value)},className:o.A.form__input}),A.loginError&&(0,n.jsx)("p",{className:"".concat(o.A["form__input-error"]," ").concat(o.A.form__error),children:A.loginError})]}),(0,n.jsxs)("fieldset",{className:o.A.form__filedset,children:[(0,n.jsx)("input",{name:"password",type:"password",placeholder:"Пароль",value:p,onChange:function(e){return b(e.target.value)},className:o.A.form__input}),A.passwordError&&(0,n.jsx)("p",{className:"".concat(o.A["form__input-error"]," ").concat(o.A.form__error),children:A.passwordError})]}),A.checkLoginError&&(0,n.jsx)("p",{className:"".concat(o.A["form__login-error"]," ").concat(o.A.form__error),children:A.checkLoginError}),g?(0,n.jsxs)("div",{className:o.A["form__button-container"],children:[(0,n.jsx)("button",{type:"submit",disabled:g,className:"".concat(o.A.form__button," button"),children:"Войти"}),(0,n.jsx)(_.A,{})]}):(0,n.jsx)("button",{type:"submit",disabled:g,className:"".concat(o.A.form__button," button"),children:"Войти"})]}),(0,n.jsxs)("ul",{className:o.A["section__login-container"],children:[(0,n.jsxs)("li",{className:o.A.section__login,children:[(0,n.jsx)("h4",{children:"Новый клиент?"}),(0,n.jsx)(i.N_,{to:"/register",className:o.A.section__link,children:"Зарегистрироваться"})]}),(0,n.jsxs)("li",{className:o.A.section__login,children:[(0,n.jsx)("h4",{children:"Забыли пароль?"}),(0,n.jsx)(i.N_,{to:"/forgot-password",className:o.A.section__link,children:"Восстановить пароль"})]})]})]})}}}]);