!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"t",(function(){return o})),n.d(t,"h",(function(){return f})),n.d(t,"o",(function(){return a})),n.d(t,"r",(function(){return i})),n.d(t,"m",(function(){return m})),n.d(t,"l",(function(){return c})),n.d(t,"n",(function(){return h})),n.d(t,"s",(function(){return s})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return d})),n.d(t,"k",(function(){return g})),n.d(t,"a",(function(){return y})),n.d(t,"c",(function(){return v})),n.d(t,"g",(function(){return p})),n.d(t,"p",(function(){return k})),n.d(t,"q",(function(){return _})),n.d(t,"j",(function(){return q})),n.d(t,"i",(function(){return j})),n.d(t,"y",(function(){return b})),n.d(t,"u",(function(){return S})),n.d(t,"v",(function(){return E})),n.d(t,"x",(function(){return w})),n.d(t,"w",(function(){return L}));var r="https://explorenews.ml",o=document.forms.signup,a=document.querySelector(".form-lockedbutton_reg"),i=document.querySelector(".form-lockedbutton_signin"),c=document.querySelector(".popup_signin"),s=document.querySelector(".signin-form"),u=document.querySelector(".header__button-auth"),l=document.querySelector(".header__buttons_desc"),d=document.querySelector(".header__button-strips"),f=document.querySelector(".popup__close_theme-dark"),m=document.querySelector(".popup_signup"),h=document.querySelector(".popup_success"),v=document.querySelector(".header__main-login"),p=document.querySelector(".header_theme-white"),y=document.querySelector(".form-lockedbutton_theme-dark"),g=document.querySelectorAll(".popup__close"),k=document.querySelector(".popup__singup-link_reg"),_=document.querySelector(".form-field"),b="true"===localStorage.loginState,S=/^(?:http(s)?:\/\/)?[\\w.-]+(?:\\.[\\w-]+)+[\\w\\-_~:/?#[\\]@!&',;=]+$/,E="https://banner2.cleanpng.com/20180517/lse/kisspng-satanism-bear-kumamon-religion-5afd7b2514dbd7.6841840115265615730854.jpg",w=/^(?:http(s)?:\/\/)?[\\w.-]+(?:\\.[\\w-]+)+[\\w\\-_~:/?#[\\]@!&',;=]+$/,L="https://www.whitehouse.gov/",q={baseUrl:"https://nomoreparties.co/news/v2/everything?",sortBy:"popularity",apiKey:"523dd8db7c754cf083592152f0d59290",pageSize:100},j=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"]},function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var r=n(0);function o(){return{last:new Date(Date.now()-6048e5),now:new Date(Date.now())}}var a=function(e){if(!e.includes("".concat(r.i))){var t=new Date(e),n=t.getDate(),o=t.getMonth(),a=t.getFullYear();return"".concat(n," ").concat(r.i[o],", ").concat(a)}if(e.includes("".concat(r.i)))return e}},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.d(t,"a",(function(){return o}));var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t}var t,n,o;return t=e,(n=[{key:"signup",value:function(e,t,n){return fetch("".concat(this.options.BASE_URL,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,email:e,password:t})}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){return Promise.reject("Error: ".concat(e.status))}))}},{key:"signin",value:function(e,t){return fetch("".concat(this.options.BASE_URL,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return console.log(e),e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).then((function(e){localStorage.setItem("token","".concat(e.token))})).catch((function(e){return Promise.reject("Error: ".concat(e.status))}))}},{key:"logout",value:function(){return fetch("".concat(this.options.BASE_URL,"/logout"),{redirect:"follow",method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.token)},body:JSON.stringify({})}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){return Promise.reject("Error: ".concat(e.status))}))}},{key:"getUserData",value:function(){return fetch("".concat(this.options.BASE_URL,"/users/me"),{redirect:"follow",method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){return Promise.reject("Error: ".concat(e.status))}))}},{key:"getArticles",value:function(){return fetch("".concat(this.options.BASE_URL,"/articles"),{redirect:"follow",method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){return Promise.reject("Error: ".concat(e.status))}))}},{key:"createArticle",value:function(e,t,n,r,o,a,i){return fetch("".concat(this.options.BASE_URL,"/articles"),{redirect:"follow",method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.token)},body:JSON.stringify({keyword:e,title:t,text:n,date:r,source:o,link:a,image:i})}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){return Promise.reject("Error: ".concat(e.status))}))}},{key:"removeArticle",value:function(e){return fetch("".concat(this.options.BASE_URL,"/articles/").concat(e),{redirect:"follow",method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return console.log(e),e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){return Promise.reject("Error: ".concat(e.status))}))}}])&&r(t.prototype,n),o&&r(t,o),e}()},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.d(t,"a",(function(){return o}));var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.header=t}var t,n,o;return t=e,(n=[{key:"setLoginState",value:function(e){this.header.querySelector(".header__button-link_inactive").style.display="unset",this.header.querySelector(".header__button-auth").childNodes[0].textContent="".concat(e),this.header.querySelector(".header__button-img").style.display="unset"}},{key:"setLogoutSate",value:function(){this.header.querySelector(".header__button-link_inactive").style.display="none",this.header.querySelector(".header__button-img").style.display="none",this.header.querySelector(".header__button-auth").childNodes[0].textContent="Авторизоваться"}},{key:"getName",value:function(){return this.header.querySelector(".header__button-auth").childNodes[0].textContent}},{key:"close",value:function(){}},{key:"mobileMenu",value:function(){console.log(this)}},{key:"clear",value:function(){}}])&&r(t.prototype,n),o&&r(t,o),e}()},function(e,t,n){"use strict";function r(e){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.d(t,"a",(function(){return i}));var i=function(){function e(t,n,o){r(n);!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=t,this.cards=[],this.savedCards=[],this.button=o}var t,n,o;return t=e,(n=[{key:"addCard",value:function(e){this.cards.push(e)}},{key:"addToSaved",value:function(e){this.savedCards.push(e)}},{key:"setName",value:function(e,t){1===t&&(this.container.querySelector(".results__title_saved").innerText="".concat(e," у Вас ").concat(t," статья")),t<=4&&1!==t&&(this.container.querySelector(".results__title_saved").innerText="".concat(e," у Вас ").concat(t," статьи")),t>4&&(this.container.querySelector(".results__title_saved").innerText="".concat(e," у Вас ").concat(t," статей"))}},{key:"setKeywords",value:function(e){this.container.querySelector(".results__saved-tags").innerHTML="".concat(e)}},{key:"renderSelf",value:function(){0!==this.cards.length?this.container.classList.remove("results_hide"):this.container.classList.add("results_hide")}},{key:"render",value:function(){var e=this;this.cards.splice(0,3).forEach((function(t){e.container.querySelector(".results__cards").appendChild(t.create())}))}},{key:"renderSaved",value:function(){var e=this;this.savedCards.splice(0,3).forEach((function(t){e.container.querySelector(".results__cards").appendChild(t.create())}))}},{key:"addThreeMoreCards",value:function(){var e=this;this.button.addEventListener("click",(function(){e.render()}))}},{key:"cleanUp",value:function(){0!==this.cards.length&&(this.cards=[])}},{key:"removeCards",value:function(){var e=Array.from(this.container.querySelectorAll(".card"));0!==e.length&&e.forEach((function(e){e.remove()}))}},{key:"preloader",value:function(e){var t=document.querySelector(".preloader-container_search");e?t.classList.add("preloader-container_is-opened"):t.classList.remove("preloader-container_is-opened")}},{key:"notFound",value:function(){var e=document.querySelector(".preloader-container_not-found");0===Array.from(this.container.querySelectorAll(".card")).length?e.classList.add("preloader-container_is-opened"):e.classList.remove("preloader-container_is-opened")}},{key:"showError",value:function(e){var t=document.querySelector(".preloader-container_not-found");e?(t.classList.add("preloader-container_is-opened"),t.innerText="Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"):t.classList.remove("preloader-container_is-opened")}}])&&a(t.prototype,n),o&&a(t,o),e}()},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(1),o=n(0),a=new RegExp(o.u);var i=new RegExp(o.x);function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t,n,r,o,a,i,c,s,u,l){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t,this._api=n,this.keyword=r,this.title=o,this.description=a,this.publishedAt=i,this.source=c,this.url=s,this.urlToImage=u,this.dataSet={keyword:r,title:o,text:a,date:i,source:c,link:s,image:u,id:void 0},this.savedCards=l}var t,n,s;return t=e,(n=[{key:"save",value:function(){var e,t=this,n=event.target;n.classList.contains("marker-image_active")||(n.removeEventListener("click",this.save),this._api.createArticle(this.dataSet.keyword,this.dataSet.title,this.dataSet.text,this.dataSet.date,this.dataSet.source,(e=this.dataSet.link,i.test(e)?e:o.w),function(e){return a.test(e)?e:o.v}(this.dataSet.image)).then((function(e){t.dataSet.id=e.data._id,n.addEventListener("click",(function(){t.remove()}))})).finally((function(){n.classList.add("marker-image_active")})).catch((function(e){return console.error(e)})))}},{key:"showInfo",value:function(){var e=this;this.card.querySelector(".card__image").insertAdjacentHTML("afterend",'<div class="marker-frame marker-frame_info">\n       <p class="marker marker-info">Войдите, чтобы сохранять статьи</p> </div>'),setTimeout((function(){e.card.querySelector(".marker-frame_info").remove()}),1500)}},{key:"showWarn",value:function(){this.card.querySelector(".card__image").insertAdjacentHTML("beforebegin",'<div class="marker-frame marker-frame_info">\n       <p class="marker marker-info"><b>Нажмите, чтобы удалить</b></p> </div>')}},{key:"removeWarn",value:function(){this.card.removeChild(this.card.querySelector(".marker-frame_info"))}},{key:"remove",value:function(){var e,t=this,n=event.target;e=this.options._id?this.options._id:this.dataSet.id?this.dataSet.id:this.savedCards.find((function(e){return e.title===t.title}))._id,(n.classList.contains("marker-image_active")||n.classList.contains("marker-image_saved"))&&(n.classList.remove("marker-image_active"),n.removeEventListener("click",this.remove,!0),this._api.removeArticle(e).then((function(r){if(console.log(r),n.classList.remove("marker-image_active"),n.removeEventListener("click",t.remove),t.savedCards){var o=t.savedCards.indexOf(e);o>-1&&t.savedCards.splice(o,1)}})).finally((function(){t.options._id&&t.card.remove(),n.classList.remove("marker-image_active"),n.addEventListener("click",(function(){t.save}))})).catch((function(e){return console.error(e)})))}},{key:"create",value:function(){var e,t=this.options,n=(t.keyword,t.title);t.description,t.publishedAt,t.source,t.url,t.urlToImage,e=null===this.urlToImage?o.v:this.urlToImage;var a=document.createElement("div");return a.classList.add("card"),a.innerHTML='<img class="card__image" src='.concat(e,' alt="Фото-иллюстрация новости.">\n                                    <div class="marker-frame"><button class="marker marker-image"></button></div>\n                              <div class="card__description">\n                                    <p class="card__date">').concat(Object(r.a)(this.publishedAt),'</p>\n                                    <h3 class="card__title">').concat(this.title,'</h3>\n                                        <p class="card__text"> ').concat(this.description,'</p>\n                              </div>\n                              <p class="card__source">').concat(this.source,"</p>"),o.y&&this.savedCards&&this.savedCards.find((function(e){return e.title===n}))&&a.querySelector(".marker-image").classList.add("marker-image_active"),this.options._id&&(a.querySelector(".marker-image").classList.add("marker-image_saved"),a.querySelector(".card__image").insertAdjacentHTML("afterend",'<div class="marker-frame marker-frame_tag">\n                <p class="marker marker-info marker marker-info_saved"><b>'.concat(this.keyword,"</b></p></div>"))),this.card=a,this._eventsListeners(),a}},{key:"_eventsListeners",value:function(){var e=this;!o.y||this.options._id||this.card.querySelector(".marker-image").classList.contains("marker-image_active")||this.card.querySelector(".marker-image").addEventListener("click",(function(t){e.save(t)})),o.y&&this.options._id&&(this.card.querySelector(".marker-image").addEventListener("mouseover",(function(t){e.showWarn()})),this.card.querySelector(".marker-image").addEventListener("mouseout",(function(t){e.removeWarn()})),this.card.querySelector(".marker-image_saved").addEventListener("click",(function(t){e.remove(t)}))),o.y&&this.card.querySelector(".marker-image").classList.contains("marker-image_active")&&(this.card.querySelector(".marker-image").removeEventListener("click",this.save),this.card.querySelector(".marker-image").addEventListener("click",(function(t){e.remove(t)}))),o.y&&this.card.querySelector(".marker-image").classList.contains("marker-image_active")&&(this.card.querySelector(".marker-image").removeEventListener("click",this.save),this.card.querySelector(".marker-image").addEventListener("click",(function(t){e.remove(t)}))),o.y||this.card.querySelector(".marker-image").addEventListener("click",(function(){e.showInfo()}))}}])&&c(t.prototype,n),s&&c(t,s),e}()},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);n(6);var r=n(0);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.popup=t}var t,n,r;return t=e,(n=[{key:"open",value:function(){this.popup.classList.add("popup_is-opened")}},{key:"close",value:function(){this.popup.classList.remove("popup_is-opened"),document.forms.signup.reset(),document.forms.signin.reset(),document.querySelectorAll(".warn").forEach((function(e){e.textContent=""}))}},{key:"openMobile",value:function(){this.popup.classList.add("popup_is-opened")}}])&&o(t.prototype,n),r&&o(t,r),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.form=t}var t,n,r;return t=e,(n=[{key:"checkInputValidity",value:function(e){0===e.target.value.length?(document.querySelector(".error-".concat(e.target.name)).textContent="Это обязательное поле",document.querySelector(".form-lockedbutton").setAttribute("disabled","disabled")):e.target.value.length<=7&&"password"===e.target.type?(document.querySelector(".error-".concat(e.target.name)).textContent="Пароль должен быть не менее 8 символов",document.querySelector(".form-lockedbutton").setAttribute("disabled","disabled")):e.target.validity.typeMismatch&&e.target.validity.patternMismatch&&"email"===e.target.type?(document.querySelector(".error-".concat(e.target.name)).textContent="Неправильный формат Email",document.querySelector(".form-lockedbutton").setAttribute("disabled","disabled")):(e.target.value.length<=1||e.target.value.length>30)&&"name_signup"===e.target.name?(document.querySelector(".error-".concat(e.target.name)).textContent="Имя должно быть от 2 до 30 символов",document.querySelector(".form-lockedbutton").setAttribute("disabled","disabled")):document.querySelector(".error-".concat(e.target.name)).textContent=""}},{key:"setSubmitButtonState",value:function(){var e=Array.from(document.querySelectorAll(".form-lockedbutton")),t=document.querySelector(".form-lockedbutton_reg"),n=document.querySelector(".form-lockedbutton_signin"),r=document.forms.signup,o=r.elements.email_signup,a=r.elements.password_signup,i=r.elements.name_signup,c=document.forms.signin,s=c.elements.email,u=c.elements.password;e.forEach((function(){!o.validity.typeMismatch&&!o.validity.patternMismatch&&a.value.length>=8&&0!==i.value.length&&i.value.length>1&&i.value.length<30?(t.classList.add("form-lockedbutton_unlocked"),t.classList.remove("form-lockedbutton_blocked"),t.removeAttribute("disabled")):(t.classList.remove("form-lockedbutton_unlocked"),t.classList.add("form-lockedbutton_blocked"),t.setAttribute("disabled","disabled"))})),e.forEach((function(){!s.validity.typeMismatch&&!o.validity.patternMismatch&&u.value.length>=8?(n.classList.add("form-lockedbutton_unlocked"),n.classList.remove("form-lockedbutton_blocked"),n.removeAttribute("disabled")):(n.classList.remove("form-lockedbutton_unlocked"),n.classList.add("form-lockedbutton_blocked"),n.setAttribute("disabled","disabled"))}))}},{key:"setEventListeners",value:function(){var e=this;this.form&&(this.form.querySelectorAll(".popup__input").forEach((function(t){t.addEventListener("input",e.checkInputValidity)})),this.form.querySelectorAll(".popup__input").forEach((function(t){t.addEventListener("input",e.setSubmitButtonState)})),this.form.querySelectorAll(".form__search").forEach((function(e){e.addEventListener("input",console.log("Yasss"))})))}}])&&i(t.prototype,n),r&&i(t,r),e}(),s=n(2);function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t}var t,n,r;return t=e,(n=[{key:"getNews",value:function(e,t){var n=t.last,r=t.now,o=this.options,a=o.baseUrl,i=o.sortBy,c=o.apiKey,s=o.pageSize;return fetch("".concat(a,"q=").concat(e,"&from=").concat(n,"&to=").concat(r,"&sortBy=").concat(i,"&pageSize=").concat(s,"&apiKey=").concat(c),{method:"GET"}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){return Promise.reject("Error: ".concat(e.status))}))}}])&&u(t.prototype,n),r&&u(t,r),e}(),d=n(3);function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.searchForm=t}var t,n,r;return t=e,(n=[{key:"validate",value:function(){this.searchForm.querySelector(".form__search").validity.valueMissing&&(this.searchForm.querySelector(".form__search").setCustomValidity("Нужно ввести ключевое слово"),this.searchForm.querySelector(".form__search").reportValidity())}},{key:"_addEventListeners",value:function(){var e=this;this.searchForm&&this.searchForm.querySelector(".form-button__search").addEventListener("click",(function(t){t.preventDefault(),e.validate()}))}}])&&f(t.prototype,n),r&&f(t,r),e}(),h=n(5),v=n(4),p=n(1);var y=new s.a({BASE_URL:r.b}),g=new a(r.l);new c(r.s).setEventListeners();var k=new a(r.m);new c(r.t).setEventListeners();var _=new d.a(r.c),b=new a(r.n),S=new l(r.j,Object(p.b)());new m(r.q)._addEventListeners();var E=new v.a(document.querySelector(".results"),[],document.querySelector(".buttons-showmorebutton"));function w(){"true"===localStorage.loginState?(console.log("loggedIn"),y.getUserData().then((function(e){_.setLoginState(e.data.name)})),r.d.addEventListener("click",(function(){_.setLogoutSate(),localStorage.clear(),document.location.reload()}))):(console.log("no log in"),r.d.addEventListener("click",(function(){r.e.setAttribute("style","display:none"),g.open()})))}w();var L=new a(document.querySelector(".popup_signin_theme-dark"));r.f.addEventListener("click",(function(){L.openMobile()})),r.h.addEventListener("click",(function(){return L.close()}));r.o&&r.o.addEventListener("click",(function(){event.preventDefault(),y.signup(document.forms.signup.name_signup.value,document.forms.signup.email_signup.value,document.forms.signup.password_signup.value).then((function(){k.close(),b.open()})).catch((function(e){return Promise.reject("Error: ".concat(e.status))}))})),r.a.addEventListener("click",(function(){g.open(),L.close()})),r.r.addEventListener("click",(function(){event.preventDefault(),y.signin(document.forms.signin.email.value,document.forms.signin.password.value).then((function(){localStorage.setItem("loginState","true"),location.reload(),w()})).catch((function(e){return Promise.reject("Error: ".concat(e.status))})),document.forms.signup.reset(),document.forms.signin.reset(),document.querySelectorAll(".warn").forEach((function(e){e.textContent=""})),g.close()})),r.p.addEventListener("click",(function(){return g.close(),event.preventDefault(),void k.open()})),document.querySelector(".popup__singup-link_in").addEventListener("click",(function(){return k.close(),event.preventDefault(),void g.open()})),document.querySelector(".popup__singup-link_sc").addEventListener("click",(function(){b.close(),g.open()})),r.k.forEach((function(e){return e.addEventListener("click",(function(){return g.close(),k.close(),void document.querySelector(".header__buttons").removeAttribute("style")}))}));r.y&&y.getArticles().then((function(e){e.data.forEach((function(e){E.addToSaved(e)}))})),E.addThreeMoreCards(),E.renderSelf(),document.querySelector(".form-button__search").addEventListener("click",(function(){E.preloader(!0);var e=document.querySelector(".form__search").value;S.getNews("".concat(e),Object(p.b)()).then((function(t){E.cleanUp(),E.removeCards(),t.articles.forEach((function(t){var n,r=new h.a(t,y,(n=e).split(" ")[0].charAt(0).toUpperCase()+n.split(" ")[0].substring(1),t.title,t.description,t.publishedAt,t.source.name,t.url,t.urlToImage,E.savedCards);E.addCard(r)})),E.renderSelf(),E.render()})).finally((function(){E.preloader(!1),E.notFound()})).catch((function(e){E.showError(e)}))})),E.renderSelf(),E.render()}]);