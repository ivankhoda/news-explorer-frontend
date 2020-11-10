const BASE_URL = 'https://explorenews.ml/api'
//  'http://explorenews.ml'
  //'http://localhost:3000'
 // 'http://explorenews.ml';
  //'https://explorenews.ml/api'

const SIGNUP_FORM = document.forms.signup;
const REGISTRATION_BUTTON = document.querySelector('.form-lockedbutton_reg');
const SIGNIN_BUTTON = document.querySelector('.form-lockedbutton_signin');
const POPUP_SIGNIN = document.querySelector('.popup_signin');
const SIGNIN_FORM = document.querySelector('.signin-form');
const HEADER_AUTHORIZATION_BUTTON = document.querySelector('.header__button-auth');
const HEADER_BUTTONS = document.querySelector('.header__buttons_desc');
const HEADER_STRIPS_BUTTON = document.querySelector('.header__button-strips');
const MOBILE_CLOSE = document.querySelector('.popup__close_theme-dark');
const POPUP_SIGNUP = document.querySelector('.popup_signup');
const POPUP_SUCCESS = document.querySelector('.popup_success');
const HEADER = document.querySelector('.header__main-login');
const SEARCH_BUTTON = document.querySelector('.form-button__search');
const SEARCH_FIELD = document.querySelector('.form__search');
const HEADER_WHITE = document.querySelector('.header_theme-white');
const AUTH_BUTTON_MOBILE = document.querySelector('.form-lockedbutton_theme-dark');
const MOBILE_POPUP = document.querySelector('.popup_signin_theme-dark');
const IN_BUTTON = document.querySelector('.popup__singup-link_in');
const POPUP_CLOSE_BUTTON = document.querySelectorAll('.popup__close');
const REG_BUTTON = document.querySelector('.popup__singup-link_reg');
const SUCCES_BUTTON = document.querySelector('.popup__singup-link_sc');
const SEARCH_FORM = document.querySelector('.form-field');
const loggedIn = localStorage.loginState === 'true';
const imageUrlBackendRegex = /^(?:http(s)?:\/\/)?[\\w.-]+(?:\\.[\\w-]+)+[\\w\\-_~:/?#[\\]@!&',;=]+$/;
const linkToDefaultImage = 'https://banner2.cleanpng.com/20180517/lse/kisspng-satanism-bear-kumamon-religion-5afd7b2514dbd7.6841840115265615730854.jpg';
const linkUrlBackendRegex = /^(?:http(s)?:\/\/)?[\\w.-]+(?:\\.[\\w-]+)+[\\w\\-_~:/?#[\\]@!&',;=]+$/;
const linkToDefaultPage = 'https://www.whitehouse.gov/';
const NEWS_API_OPTIONS = {
  baseUrl: 'https://nomoreparties.co/news/v2/everything?',
  sortBy: 'popularity',
  apiKey: '523dd8db7c754cf083592152f0d59290',
  pageSize: 100,
};
const MONTH = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

export {
  BASE_URL,
  SIGNUP_FORM,
  MOBILE_CLOSE,
  REGISTRATION_BUTTON,
  SIGNIN_BUTTON,
  POPUP_SIGNUP,
  POPUP_SIGNIN,
  POPUP_SUCCESS,
  SIGNIN_FORM,
  HEADER_AUTHORIZATION_BUTTON,
  HEADER_BUTTONS,
  SEARCH_FIELD,
  IN_BUTTON,
  SUCCES_BUTTON,
  HEADER_STRIPS_BUTTON,
  POPUP_CLOSE_BUTTON,
  AUTH_BUTTON_MOBILE,
  HEADER,
  HEADER_WHITE,
  REG_BUTTON,
  SEARCH_FORM,
  SEARCH_BUTTON,
  MOBILE_POPUP,
  NEWS_API_OPTIONS,
  MONTH,
  loggedIn,
  imageUrlBackendRegex,
  linkToDefaultImage,
  linkUrlBackendRegex,
  linkToDefaultPage,
};
