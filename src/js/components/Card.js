import { formatCardDate } from '../utils/CalculateDates';
import { loggedIn, linkToDefaultImage } from '../constants/Constants';
import { checkImageUrl, checkPageUrl } from '../utils/CheckImageUrl';

export default class Card {
  constructor(options, api, keyword, title, description, publishedAt, source, url, urlToImage, savedCards) {
    this.options = options;
    this._api = api;
    this.keyword = keyword;
    this.title = title;
    this.description = description;
    this.publishedAt = publishedAt;
    this.source = source;
    this.url = url;
    this.urlToImage = urlToImage;
    this.dataSet = {
      keyword,
      title,
      text: description,
      date: publishedAt,
      source,
      link: url,
      image: urlToImage,
      id: undefined,
    };
    this.savedCards = savedCards;
  }

  save() {
    const icon = event.target;
    if (icon.classList.contains('marker-image_active')) {
    } else {
      icon.removeEventListener('click', this.save);
      this._api.createArticle(
        this.dataSet.keyword,
        this.dataSet.title,
        this.dataSet.text,
        this.dataSet.date,
        this.dataSet.source,
        checkPageUrl(this.dataSet.link),
        checkImageUrl(this.dataSet.image),
      )
        .then((res) => {
          this.dataSet.id = res.data._id;
          icon.addEventListener('click', () => { this.remove(); });
        })
        .finally(() => {
          icon.classList.add('marker-image_active');
        })
        .catch((err) => console.error(err));
    }
  }

  showInfo() {
    this.card.querySelector('.card__image').insertAdjacentHTML('afterend', `<div class="marker-frame marker-frame_info">
       <p class="marker marker-info">Войдите, чтобы сохранять статьи</p> </div>`);
    setTimeout(() => { this.card.querySelector('.marker-frame_info').remove(); }, 1500);
  }

  showWarn() {
    this.card.querySelector('.card__image').insertAdjacentHTML('beforebegin', `<div class="marker-frame marker-frame_info">
       <p class="marker marker-info"><b>Нажмите, чтобы удалить</b></p> </div>`);
  }

  removeWarn() {
    this.card.removeChild(this.card.querySelector('.marker-frame_info'));
  }

  remove() {
    const icon = event.target;
    let cardId;
    if (this.options._id) {
      cardId = this.options._id;
    } else if (this.dataSet.id) {
      cardId = this.dataSet.id;
    } else {
      cardId = this.savedCards.find((card) => card.title === this.title)._id;
    }
    if ((icon.classList.contains('marker-image_active')) || (icon.classList.contains('marker-image_saved'))) {
      icon.classList.remove('marker-image_active');
      icon.removeEventListener('click', this.remove, true);

      this._api.removeArticle(cardId)
        .then((res) => {
          console.log(res);
          icon.classList.remove('marker-image_active');
          icon.removeEventListener('click', this.remove);
          if (this.savedCards) {
            const index = this.savedCards.indexOf(cardId);
            if (index > -1) {
              this.savedCards.splice(index, 1);
            }
          }
        })
        .finally(() => {
          if (this.options._id) {
            this.card.remove();
          }

          icon.classList.remove('marker-image_active');

          icon.addEventListener('click', () => { this.save; });
        })
        .catch((err) => console.error(err));
    }
  }

  create() {
    const {
      keyword, title, description, publishedAt, source, url, urlToImage,
    } = this.options;
    let image;
    if (this.urlToImage === null) {
      image = linkToDefaultImage;
    } else {
      image = this.urlToImage;
    }
    const cardTemplate = document.createElement('div');
    cardTemplate.classList.add('card');
    cardTemplate.innerHTML = `<img class="card__image" src=${image} alt="Фото-иллюстрация новости.">
                                    <div class="marker-frame"><button class="marker marker-image"></button></div>
                              <div class="card__description">
                                    <p class="card__date">${formatCardDate(this.publishedAt)}</p>
                                    <h3 class="card__title">${this.title}</h3>
                                        <p class="card__text"> ${this.description}</p>
                              </div>
                              <p class="card__source">${this.source}</p>`;
    if ((loggedIn) && (this.savedCards)) {
      if (this.savedCards.find((card) => card.title === title)) {
        cardTemplate.querySelector('.marker-image').classList.add('marker-image_active');
      }
    }
    if (this.options._id) {
      cardTemplate
        .querySelector('.marker-image')
        .classList.add('marker-image_saved');
      cardTemplate
        .querySelector('.card__image')
        .insertAdjacentHTML(
          'afterend',
          `<div class="marker-frame marker-frame_tag">
                <p class="marker marker-info marker marker-info_saved"><b>${this.keyword}</b></p></div>`,
        );
    }
    this.card = cardTemplate;
    this._eventsListeners();
    return cardTemplate;
  }

  _eventsListeners() {
    if ((loggedIn) && (!this.options._id) && (!this.card.querySelector('.marker-image').classList.contains('marker-image_active'))) {
      this
        .card
        .querySelector('.marker-image')
        .addEventListener('click', (event) => { this.save(event); });
    }
    if ((loggedIn) && (this.options._id)) {
      this
        .card
        .querySelector('.marker-image')
        .addEventListener('mouseover', (event) => { this.showWarn(); });
      this
        .card
        .querySelector('.marker-image')
        .addEventListener('mouseout', (event) => { this.removeWarn(); });
      this
        .card
        .querySelector('.marker-image_saved')
        .addEventListener('click', (event) => { this.remove(event); });
    }
    if ((loggedIn) && (this.card.querySelector('.marker-image').classList.contains('marker-image_active'))) {
      this
        .card
        .querySelector('.marker-image')
        .removeEventListener('click', this.save);
      this
        .card
        .querySelector('.marker-image')
        .addEventListener('click', (event) => { this.remove(event); });
    }
    if ((loggedIn) && (this.card.querySelector('.marker-image').classList.contains('marker-image_active'))) {
      this
        .card
        .querySelector('.marker-image')
        .removeEventListener('click', this.save);
      this
        .card
        .querySelector('.marker-image')
        .addEventListener('click', (event) => { this.remove(event); });
    }
    if (!loggedIn) {
      this
        .card
        .querySelector('.marker-image')
        .addEventListener('click', () => { this.showInfo(); });
    }
  }
}
