import './pages/index.css';

// import Popup from '../js/Popup';
// import FormValidator from '../js/FormValidator';
// import Api from '../js/Api';
//
// const baseURL = 'https://api.explorenews.ml';
//
// const api = new Api({ baseURL });
//
// document.querySelector('.form-lockedbutton_reg').addEventListener('click', () => {
//   const signinForm = document.forms.signup;
//   const email = signinForm.email_signup.value;
//   const password = signinForm.password_signup.value;
//   const name = signinForm.name_signup.value;
//   api.signup(email, password, name)
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
// const popupSignin = new Popup(document.querySelector('.popup_signin'));
// document.querySelector('.header__button-auth')
//   .addEventListener('click',
//     () => {
//       document.querySelector('.header__buttons').setAttribute('style', 'display:none')
//       , popupSignin.open();
//     });
// document.querySelector('.header__button-strips')
//   .addEventListener('click',
//     () => {
//       document.querySelector('.header__buttons').setAttribute('style', 'display:none')
//         , popupSignin.open();
//     });
//
// const formSignin = new FormValidator(document.querySelector('.signin-form'));
// formSignin.setEventListeners();
//
// const formSignup = new FormValidator(document.querySelector('.signup-form'));
// formSignup.setEventListeners();
//
// const popupSignup = new Popup(document.querySelector('.popup_signup'));
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
//   formReset();
//   popupSignin.close();
//   popupSignup.close();
//   document.querySelector('.header__buttons').removeAttribute('style');
// }
// document.querySelectorAll('.popup__close')
//   .forEach((X) => X.addEventListener('click',
//     () => closePopups()));
