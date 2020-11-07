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
}
