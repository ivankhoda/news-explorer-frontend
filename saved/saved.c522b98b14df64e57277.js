!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=9)}([function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"t",(function(){return o})),r.d(t,"h",(function(){return f})),r.d(t,"o",(function(){return a})),r.d(t,"r",(function(){return i})),r.d(t,"m",(function(){return h})),r.d(t,"l",(function(){return c})),r.d(t,"n",(function(){return m})),r.d(t,"s",(function(){return s})),r.d(t,"d",(function(){return u})),r.d(t,"e",(function(){return l})),r.d(t,"f",(function(){return d})),r.d(t,"k",(function(){return k})),r.d(t,"a",(function(){return p})),r.d(t,"c",(function(){return y})),r.d(t,"g",(function(){return v})),r.d(t,"p",(function(){return g})),r.d(t,"q",(function(){return _})),r.d(t,"j",(function(){return q})),r.d(t,"i",(function(){return j})),r.d(t,"y",(function(){return b})),r.d(t,"u",(function(){return S})),r.d(t,"v",(function(){return w})),r.d(t,"x",(function(){return E})),r.d(t,"w",(function(){return L}));var n="https://explorenews.ml/api",o=document.forms.signup,a=document.querySelector(".form-lockedbutton_reg"),i=document.querySelector(".form-lockedbutton_signin"),c=document.querySelector(".popup_signin"),s=document.querySelector(".signin-form"),u=document.querySelector(".header__button-auth"),l=document.querySelector(".header__buttons_desc"),d=document.querySelector(".header__button-strips"),f=document.querySelector(".popup__close_theme-dark"),h=document.querySelector(".popup_signup"),m=document.querySelector(".popup_success"),y=document.querySelector(".header__main-login"),v=document.querySelector(".header_theme-white"),p=document.querySelector(".form-lockedbutton_theme-dark"),k=document.querySelectorAll(".popup__close"),g=document.querySelector(".popup__singup-link_reg"),_=document.querySelector(".form-field"),b="true"===localStorage.loginState,S=/^(?:http(s)?:\/\/)?[\\w.-]+(?:\\.[\\w-]+)+[\\w\\-_~:/?#[\\]@!&',;=]+$/,w="https://banner2.cleanpng.com/20180517/lse/kisspng-satanism-bear-kumamon-religion-5afd7b2514dbd7.6841840115265615730854.jpg",E=/^(?:http(s)?:\/\/)?[\\w.-]+(?:\\.[\\w-]+)+[\\w\\-_~:/?#[\\]@!&',;=]+$/,L="https://www.whitehouse.gov/",q={baseUrl:"https://nomoreparties.co/news/v2/everything?",sortBy:"popularity",apiKey:"523dd8db7c754cf083592152f0d59290",pageSize:100},j=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"]},function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return a}));var n=r(0);function o(){return{last:new Date(Date.now()-6048e5),now:new Date(Date.now())}}var a=function(e){if(!e.includes("".concat(n.i))){var t=new Date(e),r=t.getDate(),o=t.getMonth(),a=t.getFullYear();return"".concat(r," ").concat(n.i[o],", ").concat(a)}if(e.includes("".concat(n.i)))return e}},function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}r.d(t,"a",(function(){return o}));var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t}var t,r,o;return t=e,(r=[{key:"signup",value:function(e,t,r){return fetch("".concat(this.options.BASE_URL,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r,email:e,password:t})}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){return Promise.reject("Error: ".concat(e.status))}))}},{key:"signin",value:function(e,t){return fetch("".concat(this.options.BASE_URL,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return console.log(e),e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).then((function(e){localStorage.setItem("token","".concat(e.token))})).catch((function(e){return Promise.reject("Error: ".concat(e.status))}))}},{key:"logout",value:function(){return fetch("".concat(this.options.BASE_URL,"/logout"),{redirect:"follow",method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.token)},body:JSON.stringify({})}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){return Promise.reject("Error: ".concat(e.status))}))}},{key:"getUserData",value:function(){return fetch("".concat(this.options.BASE_URL,"/users/me"),{redirect:"follow",method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){return Promise.reject("Error: ".concat(e.status))}))}},{key:"getArticles",value:function(){return fetch("".concat(this.options.BASE_URL,"/articles"),{redirect:"follow",method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){return Promise.reject("Error: ".concat(e.status))}))}},{key:"createArticle",value:function(e,t,r,n,o,a,i){return fetch("".concat(this.options.BASE_URL,"/articles"),{redirect:"follow",method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.token)},body:JSON.stringify({keyword:e,title:t,text:r,date:n,source:o,link:a,image:i})}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){return Promise.reject("Error: ".concat(e.status))}))}},{key:"removeArticle",value:function(e){return fetch("".concat(this.options.BASE_URL,"/articles/").concat(e),{redirect:"follow",method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return console.log(e),e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){return Promise.reject("Error: ".concat(e.status))}))}}])&&n(t.prototype,r),o&&n(t,o),e}()},function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}r.d(t,"a",(function(){return o}));var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.header=t}var t,r,o;return t=e,(r=[{key:"setLoginState",value:function(e){this.header.querySelector(".header__button-link_inactive").style.display="unset",this.header.querySelector(".header__button-auth").childNodes[0].textContent="".concat(e),this.header.querySelector(".header__button-img").style.display="unset"}},{key:"setLogoutSate",value:function(){this.header.querySelector(".header__button-link_inactive").style.display="none",this.header.querySelector(".header__button-img").style.display="none",this.header.querySelector(".header__button-auth").childNodes[0].textContent="Авторизоваться"}},{key:"getName",value:function(){return this.header.querySelector(".header__button-auth").childNodes[0].textContent}},{key:"close",value:function(){}},{key:"mobileMenu",value:function(){console.log(this)}},{key:"clear",value:function(){}}])&&n(t.prototype,r),o&&n(t,o),e}()},function(e,t,r){"use strict";function n(e){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}r.d(t,"a",(function(){return i}));var i=function(){function e(t,r,o){n(r);!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=t,this.cards=[],this.savedCards=[],this.button=o}var t,r,o;return t=e,(r=[{key:"addCard",value:function(e){this.cards.push(e)}},{key:"addToSaved",value:function(e){this.savedCards.push(e)}},{key:"setName",value:function(e,t){1===t&&(this.container.querySelector(".results__title_saved").innerText="".concat(e," у Вас ").concat(t," статья")),t<=4&&1!==t&&(this.container.querySelector(".results__title_saved").innerText="".concat(e," у Вас ").concat(t," статьи")),t>4&&(this.container.querySelector(".results__title_saved").innerText="".concat(e," у Вас ").concat(t," статей"))}},{key:"setKeywords",value:function(e){this.container.querySelector(".results__saved-tags").innerHTML="".concat(e)}},{key:"renderSelf",value:function(){0!==this.cards.length?this.container.classList.remove("results_hide"):this.container.classList.add("results_hide")}},{key:"render",value:function(){var e=this;this.cards.splice(0,3).forEach((function(t){e.container.querySelector(".results__cards").appendChild(t.create())}))}},{key:"renderSaved",value:function(){var e=this;this.savedCards.splice(0,3).forEach((function(t){e.container.querySelector(".results__cards").appendChild(t.create())}))}},{key:"addThreeMoreCards",value:function(){var e=this;this.button.addEventListener("click",(function(){e.render()}))}},{key:"cleanUp",value:function(){0!==this.cards.length&&(this.cards=[])}},{key:"removeCards",value:function(){var e=Array.from(this.container.querySelectorAll(".card"));0!==e.length&&e.forEach((function(e){e.remove()}))}},{key:"preloader",value:function(e){var t=document.querySelector(".preloader-container_search");e?t.classList.add("preloader-container_is-opened"):t.classList.remove("preloader-container_is-opened")}},{key:"notFound",value:function(){var e=document.querySelector(".preloader-container_not-found");0===Array.from(this.container.querySelectorAll(".card")).length?e.classList.add("preloader-container_is-opened"):e.classList.remove("preloader-container_is-opened")}},{key:"showError",value:function(e){var t=document.querySelector(".preloader-container_not-found");e?(t.classList.add("preloader-container_is-opened"),t.innerText="Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"):t.classList.remove("preloader-container_is-opened")}}])&&a(t.prototype,r),o&&a(t,o),e}()},function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(1),o=r(0),a=new RegExp(o.u);var i=new RegExp(o.x);function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var s=function(){function e(t,r,n,o,a,i,c,s,u,l){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t,this._api=r,this.keyword=n,this.title=o,this.description=a,this.publishedAt=i,this.source=c,this.url=s,this.urlToImage=u,this.dataSet={keyword:n,title:o,text:a,date:i,source:c,link:s,image:u,id:void 0},this.savedCards=l}var t,r,s;return t=e,(r=[{key:"save",value:function(){var e,t=this,r=event.target;r.classList.contains("marker-image_active")||(r.removeEventListener("click",this.save),this._api.createArticle(this.dataSet.keyword,this.dataSet.title,this.dataSet.text,this.dataSet.date,this.dataSet.source,(e=this.dataSet.link,i.test(e)?e:o.w),function(e){return a.test(e)?e:o.v}(this.dataSet.image)).then((function(e){t.dataSet.id=e.data._id,r.addEventListener("click",(function(){t.remove()}))})).finally((function(){r.classList.add("marker-image_active")})).catch((function(e){return console.error(e)})))}},{key:"showInfo",value:function(){var e=this;this.card.querySelector(".card__image").insertAdjacentHTML("afterend",'<div class="marker-frame marker-frame_info">\n       <p class="marker marker-info">Войдите, чтобы сохранять статьи</p> </div>'),setTimeout((function(){e.card.querySelector(".marker-frame_info").remove()}),1500)}},{key:"showWarn",value:function(){this.card.querySelector(".card__image").insertAdjacentHTML("beforebegin",'<div class="marker-frame marker-frame_info">\n       <p class="marker marker-info"><b>Нажмите, чтобы удалить</b></p> </div>')}},{key:"removeWarn",value:function(){this.card.removeChild(this.card.querySelector(".marker-frame_info"))}},{key:"remove",value:function(){var e,t=this,r=event.target;e=this.options._id?this.options._id:this.dataSet.id?this.dataSet.id:this.savedCards.find((function(e){return e.title===t.title}))._id,(r.classList.contains("marker-image_active")||r.classList.contains("marker-image_saved"))&&(r.classList.remove("marker-image_active"),r.removeEventListener("click",this.remove,!0),this._api.removeArticle(e).then((function(n){if(console.log(n),r.classList.remove("marker-image_active"),r.removeEventListener("click",t.remove),t.savedCards){var o=t.savedCards.indexOf(e);o>-1&&t.savedCards.splice(o,1)}})).finally((function(){t.options._id&&t.card.remove(),r.classList.remove("marker-image_active"),r.addEventListener("click",(function(){t.save}))})).catch((function(e){return console.error(e)})))}},{key:"create",value:function(){var e,t=this.options,r=(t.keyword,t.title);t.description,t.publishedAt,t.source,t.url,t.urlToImage,e=null===this.urlToImage?o.v:this.urlToImage;var a=document.createElement("div");return a.classList.add("card"),a.innerHTML='<img class="card__image" src='.concat(e,' alt="Фото-иллюстрация новости.">\n                                    <div class="marker-frame"><button class="marker marker-image"></button></div>\n                              <div class="card__description">\n                                    <p class="card__date">').concat(Object(n.a)(this.publishedAt),'</p>\n                                    <h3 class="card__title">').concat(this.title,'</h3>\n                                        <p class="card__text"> ').concat(this.description,'</p>\n                              </div>\n                              <p class="card__source">').concat(this.source,"</p>"),o.y&&this.savedCards&&this.savedCards.find((function(e){return e.title===r}))&&a.querySelector(".marker-image").classList.add("marker-image_active"),this.options._id&&(a.querySelector(".marker-image").classList.add("marker-image_saved"),a.querySelector(".card__image").insertAdjacentHTML("afterend",'<div class="marker-frame marker-frame_tag">\n                <p class="marker marker-info marker marker-info_saved"><b>'.concat(this.keyword,"</b></p></div>"))),this.card=a,this._eventsListeners(),a}},{key:"_eventsListeners",value:function(){var e=this;!o.y||this.options._id||this.card.querySelector(".marker-image").classList.contains("marker-image_active")||this.card.querySelector(".marker-image").addEventListener("click",(function(t){e.save(t)})),o.y&&this.options._id&&(this.card.querySelector(".marker-image").addEventListener("mouseover",(function(t){e.showWarn()})),this.card.querySelector(".marker-image").addEventListener("mouseout",(function(t){e.removeWarn()})),this.card.querySelector(".marker-image_saved").addEventListener("click",(function(t){e.remove(t)}))),o.y&&this.card.querySelector(".marker-image").classList.contains("marker-image_active")&&(this.card.querySelector(".marker-image").removeEventListener("click",this.save),this.card.querySelector(".marker-image").addEventListener("click",(function(t){e.remove(t)}))),o.y&&this.card.querySelector(".marker-image").classList.contains("marker-image_active")&&(this.card.querySelector(".marker-image").removeEventListener("click",this.save),this.card.querySelector(".marker-image").addEventListener("click",(function(t){e.remove(t)}))),o.y||this.card.querySelector(".marker-image").addEventListener("click",(function(){e.showInfo()}))}}])&&c(t.prototype,r),s&&c(t,s),e}()},,function(e,t,r){},,function(e,t,r){"use strict";r.r(t);r(7);var n=r(0),o=r(4),a=r(2),i=r(3);function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._keywords=t,this._keywordsArray=[]}var t,r,n;return t=e,(r=[{key:"setKeywords",value:function(e){this._keywordsArray.push(e)}},{key:"getTopKeywords",value:function(){var e=this._keywordsArray.reduce((function(e,t){return e[t]=e[t]?e[t]+1:1,e}),{}),t=Object.keys(e).map((function(t){return{key:t,occurs:e[t]}})).sort((function(e,t){return t.occurs-e.occurs==0?e.key-t.key:t.occurs-e.occurs}));return t.length>3?"По ключевым словам <b>".concat(t[0].key,"</b>, <b>").concat(t[1].key,"</b>, и ").concat(t.length-2," другим"):4===t.length?"По ключевым словам <b>".concat(t[0].key,"</b>, <b>").concat(t[1].key,"</b>, <b>").concat(t[2].key,"</b> и ").concat(t.length-3," другому"):3===t.length?"По ключевым словам <b>".concat(t[0].key,"</b>, <b>").concat(t[1].key,"</b>, <b>").concat(t[2].key,"</b>"):2===t.length?"По ключевым словам <b>".concat(t[0].key,"</b>, <b>").concat(t[1].key,"</b>"):1===t.length?"По ключевому слову <b>".concat(t[0].key,"</b>"):void 0}}])&&c(t.prototype,r),n&&c(t,n),e}(),u=r(5),l=new o.a(document.querySelector(".results_saved"),[],document.querySelector(".buttons-showmorebutton")),d=new a.a({BASE_URL:n.b}),f=new i.a(n.g),h=new s;"true"===localStorage.loginState&&d.getUserData().then((function(e){f.setLoginState(e.data.name)})),n.d.addEventListener("click",(function(){f.setLogoutSate(),localStorage.clear(),document.location.reload(),window.location.replace("index.html")})),d.getArticles().then((function(e){e.data.forEach((function(e){l.addToSaved(e);var t=new u.a(e,d,e.keyword,e.title,e.text,e.date,e.source,e.link,e.image);l.addCard(t)})),l.savedCards.forEach((function(e){h.setKeywords(e.keyword)})),l.render(),l.setName(f.getName(),l.savedCards.length),l.setKeywords(h.getTopKeywords())})).catch((function(e){console.log(e)})),l.addThreeMoreCards()}]);