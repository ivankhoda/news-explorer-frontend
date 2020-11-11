export default class CardList {
  constructor(container, [], button) {
    this.container = container;
    this.cards = [];
    this.savedCards = [];
    this.button = button;
  }

  addCard(card) {
    this.cards.push(card);
  }

  addToSaved(card) {
    this.savedCards.push(card);
  }

  setName(name, number) {
    if (number === 1) {
      this.container.querySelector('.results__title_saved').innerText = `${name} у Вас ${number} статья`;
    }
    if (number <= 4 && number !== 1) {
      this.container.querySelector('.results__title_saved').innerText = `${name} у Вас ${number} статьи`;
    }
    if (number > 4) {
      this.container.querySelector('.results__title_saved').innerText = `${name} у Вас ${number} статей`;
    }
  }

  setKeywords(keyword) {
    this.container.querySelector('.results__saved-tags').innerHTML = `${keyword}`;
  }

  renderSelf() {
    if (this.cards.length !== 0) {
      this.container.classList.remove('results_hide');
    } else {
      this.container.classList.add('results_hide');
    }
  }

  render() {
    const renderArr = this.cards.splice(0, 3);
    renderArr.forEach((card) => {
      this.container.querySelector('.results__cards').appendChild(card.create());
    });
  }

  renderSaved() {
    const renderArr = this.savedCards.splice(0, 3);
    renderArr.forEach((card) => {
      this.container.querySelector('.results__cards').appendChild(card.create());
    });
  }

  addThreeMoreCards() {
    this.button.addEventListener('click', () => {
      this.render();
    });
  }

  cleanUp() {
    if (this.cards.length !== 0) {
      this.cards = [];
    }
  }

  removeCards() {
    const arr = Array.from(this.container.querySelectorAll('.card'));
    if (arr.length !== 0) {
      arr.forEach((card) => {
        card.remove();
      });
    }
  }

  preloader(loading) {
    const preloader = document.querySelector('.preloader-container_search');
    if (loading) {
      preloader.classList.add('preloader-container_is-opened');
    } else {
      preloader.classList.remove('preloader-container_is-opened');
    }
  }

  notFound() {
    const notFound = document.querySelector('.preloader-container_not-found');
    const arr = Array.from(this.container.querySelectorAll('.card'));
    if (arr.length === 0) {
      notFound.classList.add('preloader-container_is-opened');
    } else {
      notFound.classList.remove('preloader-container_is-opened');
    }
  }

  showError(error) {
    const showError = document.querySelector('.preloader-container_not-found');
    if (error) {
      showError.classList.add('preloader-container_is-opened');
      showError.innerText = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен.'
        + ' Подождите немного и попробуйте ещё раз';
    } else {
      showError.classList.remove('preloader-container_is-opened');
    }
  }
}
