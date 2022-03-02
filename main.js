(()=>{"use strict";var e=document.querySelector(".profile__avatar-edit"),t=document.querySelector(".profile__edit-button"),n=document.querySelector(".profile__add-button"),r=document.querySelector(".modal__input_type_name"),o=document.querySelector(".modal__input_type_job");function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n,r,o,i,a,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=t,this._cardTemplate=n,this._userId=r,this._cardId=t._id,this._cardOwnerId=t.owner._id,this._imagePopup=o,this._element=this._getTemplate(),this._likeButton=this._element.querySelector(".element__like"),this._deleteButton=this._element.querySelector(".element__delete"),this._likeCounter=this._element.querySelector(".element__counter"),this._deleteCard=u,this._addCardLike=i,this._deleteCardLike=a}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplate).content.querySelector(".element").cloneNode(!0)}},{key:"renderCard",value:function(){this._setEventListeners();var e=this._element.querySelector(".element__img");return e.src=this._data.link,e.alt=this._data.alt,this._element.querySelector(".element__caption").textContent=this._data.name,this._likeCounter.textContent=this._data.likes.length,this._checkLikes(),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._cardOwnerId===this._userId&&(this._deleteButton.classList.add("element__delete_active"),this._deleteButton.addEventListener("click",(function(){return e._deleteButtonClick()}))),this._likeButton.addEventListener("click",(function(){return e._toggleLikeState()})),this._element.querySelector(".element__img").addEventListener("click",this._imagePopup)}},{key:"_toggleLikeState",value:function(){var e=this;this._likeButton.classList.contains("element__like_active")?this._deleteCardLike(this._cardId).then((function(t){e._data=t,e._likeCounter.textContent=t.likes.length,e._likeButton.classList.remove("element__like_active")})).catch((function(e){return console.log(e)})):this._addCardLike(this._cardId).then((function(t){e._data=t,e._likeCounter.textContent=t.likes.length,e._likeButton.classList.add("element__like_active")})).catch((function(e){return console.log(e)}))}},{key:"_checkLikes",value:function(){var e=this;this._data.likes.some((function(t){return t._id===e._userId}))&&this._likeButton.classList.add("element__like_active")}},{key:"_deleteButtonClick",value:function(){var e={card:this._element,cardId:this._cardId};this._deleteCard(e)}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._buttonElement=this._form.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"Error"));e.classList.add(this._inputErrorClass),t.classList.add(this._errorClass),t.textContent=e.validationMessage}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"Error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_hideError",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideError(t)}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.disabled=!0,this._buttonElement.classList.add(this._inactiveButtonClass)):(this._buttonElement.disabled=!1,this._buttonElement.classList.remove(this._inactiveButtonClass))}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){var e=this;this._setEventListeners(),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._toggleButtonState()}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t,n){var r=t.renderItems;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("modal_active"),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("modal_active"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target.classList.contains("modal")||t.target.classList.contains("modal__close"))&&e.close()}))}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=y(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},_.apply(this,arguments)}function y(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function v(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(o){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popup.querySelector(".modal__img"),t._caption=t._popup.querySelector(".modal__caption"),t}return t=a,(n=[{key:"open",value:function(e){_(b(a.prototype),"open",this).call(this),this._image.src=e.image,this._image.alt=e.text,this._caption.textContent=e.text}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(h);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=w(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},E.apply(this,arguments)}function w(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}function O(e,t){return O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},O(e,t)}function C(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return L(e)}function L(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function a(e,t){var n,r=t.handleSubmitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSubmitForm=r,n._formSubmit=n._formSubmit.bind(L(n)),n._formElement=n._popup.querySelector(".form"),n._inputList=Array.from(n._formElement.querySelectorAll(".modal__input")),n._button=n._formElement.querySelector(".modal__submit"),n}return t=a,(n=[{key:"_formSubmit",value:function(e){e.preventDefault(),this._handleSubmitForm(this._getInputValues())}},{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){E(j(a.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",this._formSubmit)}},{key:"close",value:function(){E(j(a.prototype),"close",this).call(this),this._formElement.reset()}},{key:"loadData",value:function(e){this._button.textContent=!0===e?"Сохранение...":"Сохранить"}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(h);function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var R=function(){function e(t,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(t),this._job=document.querySelector(n),this._avatar=document.querySelector(r),this._profileId=o}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,job:this._job.textContent}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._job.textContent=e.about}},{key:"setUserAvatar",value:function(e){this._avatar.src=e.avatar}}],n&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_checkResult",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"users/me"),{headers:this._headers}).then((function(t){return e._checkResult(t)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"cards"),{headers:this._headers}).then((function(t){return e._checkResult(t)}))}},{key:"editProfile",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.job})}).then((function(e){return t._checkResult(e)}))}},{key:"addNewCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._checkResult(e)}))}},{key:"removeCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkResult(e)}))}},{key:"addCardLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return t._checkResult(e)}))}},{key:"removeCardLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkResult(e)}))}},{key:"updateAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._checkResult(e)}))}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(){return U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=A(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},U.apply(this,arguments)}function A(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=N(e)););return e}function D(e,t){return D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},D(e,t)}function F(e,t){if(t&&("object"===T(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return V(e)}function V(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e){return N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},N(e)}var J=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&D(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=N(r);if(o){var n=N(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return F(this,e)});function a(e,t){var n,r=t.handleSubmitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSubmitForm=r,n._formElement=n._popup.querySelector(".form"),n._formSubmit=n._formSubmit.bind(V(n)),n}return t=a,(n=[{key:"_formSubmit",value:function(e){e.preventDefault(),this._handleSubmitForm(this.data)}},{key:"setEventListeners",value:function(){U(N(a.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",this._formSubmit)}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(h);function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var M=new q({baseUrl:"https://mesto.nomoreparties.co/v1/cohort36/",headers:{authorization:"8c8ed8aa-4046-4be0-b3e7-9f814b718ab1","Content-Type":"application/json"}}),z=new R(".profile__title",".profile__subtitle",".profile__avatar"),$=new P(".modal-edit",{handleSubmitForm:function(e){$.loadData(!0),M.editProfile(e).then((function(e){z.setUserInfo(e),$.close()})).catch((function(e){return console.log(e)})).finally((function(){$.loadData(!1)}))}});$.setEventListeners(),t.addEventListener("click",(function(){$.open();var e=z.getUserInfo();r.value=e.name,o.value=e.job,oe.editForm.resetValidation()}));var G=new P(".modal-add",{handleSubmitForm:function(e){G.loadData(!0);var t={name:e.title,link:e.link};M.addNewCard(t).then((function(e){te.addItem(Z(e),!0),G.close()})).catch((function(e){return console.log(e)})).finally((function(){G.loadData(!1)}))}});G.setEventListeners(),n.addEventListener("click",(function(){G.open(),oe.addForm.resetValidation()}));var K=new P(".modal-avatar",{handleSubmitForm:function(e){K.loadData(!0),M.updateAvatar(e).then((function(e){z.setUserAvatar(e),K.close()})).catch((function(e){return console.log(e)})).finally((function(){K.loadData(!1)}))}});K.setEventListeners(),e.addEventListener("click",(function(){K.open(),oe.avatarForm.resetValidation()}));var Q,W=new k(".modal-img");function X(e){var t={image:e.target.src,text:e.target.closest(".element").querySelector(".element__caption").textContent};W.open(t)}function Y(e){ee.data=e,ee.open()}function Z(e){var t=new a(e,".template__element",Q,X,(function(e){return M.addCardLike(e)}),(function(e){return M.removeCardLike(e)}),Y);return t.renderCard(e)}W.setEventListeners();var ee=new J(".modal-confirm",{handleSubmitForm:function(e){M.removeCard(e.cardId).then((function(){e.card.remove(),ee.close()})).catch((function(e){return console.log(e)}))}});ee.setEventListeners();var te=new s({renderItems:function(e){te.addItem(Z(e))}},".elements"),ne=[M.getUserInfo(),M.getInitialCards()];Promise.all(ne).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Q=o._id,z.setUserInfo(o),z.setUserAvatar(o),te.renderItems(i.reverse())})).catch((function(e){return console.log(e)}));var re,oe={};re={formSelector:".form",inputSelector:".modal__input",submitButtonSelector:".modal__submit",inactiveButtonClass:"modal__submit_disabled",inputErrorClass:"modal__input_type_error",errorClass:"modal__error_visible"},Array.from(document.querySelectorAll(re.formSelector)).forEach((function(e){var t=new c(re,e),n=e.getAttribute("name");oe[n]=t,t.enableValidation()}))})();