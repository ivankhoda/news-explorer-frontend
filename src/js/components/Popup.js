export default class Popup {
  constructor(popup) {
    this.popup = popup;
  }

  open() {
    this.popup.classList.add('popup_is-opened');
  }

  close() {
    this.popup.classList.remove('popup_is-opened');
    document.forms.signup.reset();
    document.forms.signin.reset();
    document.querySelectorAll('.warn')
      .forEach((warning) => {
        warning.textContent = '';
      });
  }

  openMobile() {
    this.popup.classList.add('popup_is-opened');
  }

  showWarn(e) {
    this.popup.classList.add('popup_is-opened');
    console.log(e)
    if (e === 'Error: 401') {
      this.popup.querySelector('.popup__title').textContent = `Имя пользователя или пароль неверны`;
      this.popup.querySelector('.popup__singup-link_sc').textContent = `Попробовать еще раз`
    }
    if (e === 'Error: 409') {
      this.popup.querySelector('.popup__title').textContent = `Пользователь с таким имейл уже зарегистрировался`;
      this.popup.querySelector('.popup__singup-link_sc').textContent = ``
    }
    else {
      this.popup.querySelector('.popup__title').textContent = `Произошла ошибка`;
      this.popup.querySelector('.popup__singup-link_sc').textContent = ``
    }

    // console.log(this.popup.querySelector('.popup__title').innerText)
  }
}
