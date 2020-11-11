import './pages/index.css';

import {
  BASE_URL,
  SIGNUP_FORM,
  REGISTRATION_BUTTON,
  SIGNIN_BUTTON,
  POPUP_SIGNIN,
  POPUP_SIGNUP,
  POPUP_SUCCESS,
  SIGNIN_FORM,
  HEADER_AUTHORIZATION_BUTTON,
  HEADER_BUTTONS,
  HEADER_STRIPS_BUTTON,
  HEADER,
  SEARCH_FORM,
  NEWS_API_OPTIONS,
  MOBILE_CLOSE,
  AUTH_BUTTON_MOBILE,
  REG_BUTTON,
  loggedIn,
  POPUP_CLOSE_BUTTON,
  IN_BUTTON,
  SUCCES_BUTTON, SEARCH_BUTTON, MOBILE_POPUP, SEARCH_FIELD,
} from './js/constants/Constants';

import Popup from './js/components/Popup';
import FormValidator from './js/components/FormValidator';
import Api from './js/api/Api';
import NewsApi from './js/api/NewsApi';
import Header from './js/components/Header';
import SearchForm from './js/components/SearchForm';
import Card from './js/components/Card';
import CardList from './js/components/CardList';

import { sevenDays } from './js/utils/CalculateDates';
import { capitalize } from './js/utils/CapitalizeKeyword';

const api = new Api({ BASE_URL });
const popupSignin = new Popup(POPUP_SIGNIN);
const formSignin = new FormValidator(SIGNIN_FORM);
const handleSignin = () => {
  formSignin.setEventListeners();
};
handleSignin();
const popupSignup = new Popup(POPUP_SIGNUP);
const formSignup = new FormValidator(SIGNUP_FORM);
const handleSignup = () => {
  formSignup.setEventListeners();
};
handleSignup();
const header = new Header(HEADER);
const popupSuccess = new Popup(POPUP_SUCCESS);
const newsApi = new NewsApi(NEWS_API_OPTIONS, sevenDays());

const searchForm = new SearchForm(SEARCH_FORM);
const handleSearch = () => {
  searchForm.addEventListeners();
};
handleSearch();
const cardList = new CardList(document.querySelector('.results'), [], document.querySelector('.buttons-showmorebutton'));
// Проверяем заллогинен ли пользователь, и от этого устанавливаем состояние кнопок
function checkLoginState() {
  if (localStorage.loginState === 'true') {
    console.log('loggedIn');
    api.getUserData().then((info) => {
      header.setLoginState(info.data.name);
    });
    HEADER_AUTHORIZATION_BUTTON
      .addEventListener('click',
        () => {
          header.setLogoutSate();
          localStorage.clear();
          document.location.reload();
        });
  } else {
    console.log('no log in');
    HEADER_AUTHORIZATION_BUTTON
      .addEventListener('click',
        () => {
          HEADER_BUTTONS.setAttribute('style', 'display:none'),
          popupSignin.open();
        });
  }
}
checkLoginState();
// comment

const mobilePopup = new Popup(MOBILE_POPUP);
HEADER_STRIPS_BUTTON
  .addEventListener('click',
    () => {
      mobilePopup.openMobile();
    });

MOBILE_CLOSE.addEventListener('click', () => mobilePopup.close());
// registration
const handleRegistration = () => {
  if (REGISTRATION_BUTTON) {
    REGISTRATION_BUTTON.addEventListener('click', (event) => {
      event.preventDefault();
      api.signup(
        document.forms.signup.email_signup.value,
        document.forms.signup.password_signup.value,
        document.forms.signup.name_signup.value,
      )
        .then(() => {
          popupSignup.close();
        })
        .finally(() => {
          popupSuccess.open();
        })
        .catch((err) => {
          popupSuccess.showWarn(err);
          Promise.reject(`Error: ${err.status}`);
        });
    });
  }
};
handleRegistration();
// comment
AUTH_BUTTON_MOBILE.addEventListener('click', () => {
  popupSignin.open();
  mobilePopup.close();
});
// sign in
function signin() {
  event.preventDefault();
  api.signin(document.forms.signin.email.value,
    document.forms.signin.password.value)
    .then(() => {
      localStorage.setItem('loginState', 'true');
      location.reload();
      checkLoginState();
    })
    .catch((err) => {
      popupSuccess.showWarn(err);
      Promise.reject(`Error: ${err.status}`);
    });
}
SIGNIN_BUTTON.addEventListener('click', () => {
  event.preventDefault();
  signin(),
  formReset(),
  popupSignin.close();
});
// comment

function openSignup() {
  popupSignin.close();
  event.preventDefault();
  popupSignup.open();
}
REG_BUTTON
  .addEventListener('click',
    () => openSignup());

function openSignin() {
  popupSignup.close();
  event.preventDefault();
  popupSignin.open();
}
IN_BUTTON
  .addEventListener('click',
    () => openSignin());
SUCCES_BUTTON
  .addEventListener('click',
    () => {
      event.preventDefault();
      popupSuccess.close(),
      popupSignin.open();
    });

function formReset() {
  document.forms.signup.reset();
  document.forms.signin.reset();
  document.querySelectorAll('.warn')
    .forEach((warning) => {
      warning.textContent = '';
    });
}
function closePopups() {
  popupSignin.close();
  popupSignup.close();
  popupSuccess.close();
  document.querySelector('.header__buttons').removeAttribute('style');
}
POPUP_CLOSE_BUTTON
  .forEach((X) => X.addEventListener('click',
    () => closePopups()));

// Форма поиска и ее валидация
const getSavedCards = () => {
  api.getArticles()
    .then((res) => {
      res.data.forEach((card) => { cardList.addToSaved(card); });
    });
};
if (loggedIn) {
  getSavedCards();
}
cardList.addThreeMoreCards();
cardList.renderSelf();
SEARCH_BUTTON
  .addEventListener('click', () => {
    // searchForm.addEventListeners()
    event.preventDefault();
    const keyword = searchForm.getKeyword();
    if (keyword) {
      cardList.preloader(true);
      newsApi.getNews(`${keyword}`, sevenDays())
        .then((news) => {
          cardList.cleanUp();
          cardList.removeCards();

          news.articles.forEach((article) => {
            const card = new Card(article, api,
              capitalize(keyword),
              article.title,
              article.description, article.publishedAt,
              article.source.name, article.url, article.urlToImage, cardList.savedCards);
            cardList.addCard(card);
          });
          cardList.renderSelf();
          cardList.render();
        })
        .finally(() => {
          cardList.preloader(false);
          cardList.notFound();
        })
        .catch((err) => {
          cardList.showError(err);
        });
    } else {

    }
  });
cardList.renderSelf();
cardList.render();
