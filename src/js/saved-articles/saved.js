import '../../pages/saved.css';

import {
  BASE_URL, HEADER_AUTHORIZATION_BUTTON,
  HEADER_WHITE,
} from '../constants/Constants';
import CardList from '../components/CardList';
import Api from '../api/Api';
import Header from '../components/Header';
import Keyword from '../utils/Keywords';
import Card from '../components/Card';

const savedCardList = new CardList(document.querySelector('.results_saved'), [], document.querySelector('.buttons-showmorebutton'));
const api = new Api({ BASE_URL });
const header = new Header(HEADER_WHITE);
const keywords = new Keyword();
// Проверяем заллогинен ли пользователь, и от этого устанавливаем состояние кнопок
function checkLoginState() {
  if (localStorage.loginState === 'true') {
    api.getUserData().then((info) => {
      header.setLoginState(info.data.name);
    });
  }
}
checkLoginState();
// comment
HEADER_AUTHORIZATION_BUTTON
  .addEventListener('click',
    () => {
      header.setLogoutSate();
      localStorage.clear();
      document.location.reload();
      window.location.replace('index.html');
    });

function show() {
  api.getArticles()
    .then((cards) => {
      cards.data.forEach((data) => {
        savedCardList.addToSaved(data);
        const card = new Card(data, api,
          data.keyword,
          data.title,
          data.text,
          data.date,
          data.source,
          data.link,
          data.image);
        savedCardList.addCard(card);
      });
      savedCardList.savedCards.forEach((saveCard) => {
        keywords.setKeywords(saveCard.keyword);
      });
      savedCardList.render();
      savedCardList.setName(header.getName(), savedCardList.savedCards.length);
      savedCardList.setKeywords(keywords.getTopKeywords());
    })
    .catch((err) => { console.log(err); });
}
show();
savedCardList.addThreeMoreCards();
