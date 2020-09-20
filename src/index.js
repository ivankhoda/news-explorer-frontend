import './pages/index.css';

import Popup from './js/components/Popup';
import FormValidator from './js/components/FormValidator';
import Api from './js/api/Api';

import {
  BASE_URL,
  SIGNUP_FORM,
  SIGNUP_EMAIL,
  SIGNUP_PASSWORD,
  SIGNUP_NAME,
  REGISTRATION_BUTTON,
  POPUP_SIGNIN,
  HEADER_AUTHORIZATION_BUTTON,
  HEADER_BUTTONS,
  HEADER_STRIPS_BUTTON,
} from './js/constants/Constants';

const api = new Api({ BASE_URL });
const popupSignin = new Popup(POPUP_SIGNIN);

REGISTRATION_BUTTON.addEventListener('click', () => {
  api.signup(SIGNUP_EMAIL, SIGNUP_PASSWORD, SIGNUP_NAME)
    .then((res) => {
      console.log('succes');
      if (res.ok) {
        console.log(res);
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    })
    .catch((err) => Promise.reject(`Error: ${err.status}`));
});

HEADER_AUTHORIZATION_BUTTON
  .addEventListener('click',
    () => {
      HEADER_BUTTONS.setAttribute('style', 'display:none')
      , popupSignin.open();
    });
HEADER_STRIPS_BUTTON
  .addEventListener('click',
    () => {
      HEADER_BUTTONS.setAttribute('style', 'display:none')
      , popupSignin.open();
    });

const formSignin = new FormValidator(document.querySelector('.signin-form'));
formSignin.setEventListeners();

const formSignup = new FormValidator(document.querySelector('.signup-form'));
formSignup.setEventListeners();

const popupSignup = new Popup(document.querySelector('.popup_signup'));
function openSignup() {
  popupSignin.close();
  event.preventDefault();
  popupSignup.open();
}
document.querySelector('.popup__singup-link_reg')
  .addEventListener('click',
    () => openSignup());

function openSignin() {
  popupSignup.close();
  event.preventDefault();
  popupSignin.open();
}
document.querySelector('.popup__singup-link_in')
  .addEventListener('click',
    () => openSignin());

function formReset() {
  document.forms.signup.reset();
  document.forms.signin.reset();
  document.querySelectorAll('.warn')
    .forEach((warning) => {
      warning.textContent = '';
    });
}
function closePopups() {
  formReset();
  popupSignin.close();
  popupSignup.close();
  document.querySelector('.header__buttons').removeAttribute('style');
}
document.querySelectorAll('.popup__close')
  .forEach((X) => X.addEventListener('click',
    () => closePopups()));
