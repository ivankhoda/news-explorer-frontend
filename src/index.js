import './pages/index.css';
//
// import {
//   BASE_URL,
//   SIGNUP_FORM,
//   SIGNUP_EMAIL,
//   SIGNUP_PASSWORD,
//   SIGNUP_NAME,
//   REGISTRATION_BUTTON,
//   POPUP_SIGNIN,
//   POPUP_SIGNUP,
//   SIGNIN_FORM,
//   HEADER_AUTHORIZATION_BUTTON,
//   HEADER_BUTTONS,
//   HEADER_STRIPS_BUTTON,
// } from './js/constants/Constants';
//
// import Popup from './js/components/Popup';
// import FormValidator from './js/components/FormValidator';
// import Api from './js/api/Api';
//
// const api = new Api({ BASE_URL });
// const popupSignin = new Popup(POPUP_SIGNIN);
// const formSignin = new FormValidator(SIGNIN_FORM);
// formSignin.setEventListeners();
// const formSignup = new FormValidator(SIGNUP_FORM);
// formSignup.setEventListeners();
//
// REGISTRATION_BUTTON.addEventListener('click', () => {
//   api.signup(document.forms.signup.name_signup.value,
//     document.forms.signup.email_signup.value,
//     document.forms.signup.password_signup.value)
//     .then((res) => {
//       console.log('succes');
//       if (res.ok) {
//         console.log(res);
//         return res.json();
//       }
//       return Promise.reject(`Error: ${res.status}`);
//     })
//     .catch((err) => Promise.reject(`Error: ${err.status}`));
// });
//
// HEADER_AUTHORIZATION_BUTTON
//   .addEventListener('click',
//     () => {
//       HEADER_BUTTONS.setAttribute('style', 'display:none')
//       , popupSignin.open();
//     });
// HEADER_STRIPS_BUTTON
//   .addEventListener('click',
//     () => {
//       HEADER_BUTTONS.setAttribute('style', 'display:none')
//       , popupSignin.open();
//     });
//
// const popupSignup = new Popup(POPUP_SIGNUP);
// function openSignup() {
//   popupSignin.close();
//   event.preventDefault();
//   popupSignup.open();
// }
// document.querySelector('.popup__singup-link_reg')
//   .addEventListener('click',
//     () => openSignup());
//
// function openSignin() {
//   popupSignup.close();
//   event.preventDefault();
//   popupSignin.open();
// }
// document.querySelector('.popup__singup-link_in')
//   .addEventListener('click',
//     () => openSignin());
//
// function formReset() {
//   document.forms.signup.reset();
//   document.forms.signin.reset();
//   document.querySelectorAll('.warn')
//     .forEach((warning) => {
//       warning.textContent = '';
//     });
// }
// function closePopups() {
//   popupSignup.clear();
//   popupSignin.clear();
//   // formReset();
//   popupSignin.close();
//   popupSignup.close();
//   document.querySelector('.header__buttons').removeAttribute('style');
// }
// document.querySelectorAll('.popup__close')
//   .forEach((X) => X.addEventListener('click',
//     () => closePopups()));
