export default class Header {
  constructor(header) {
    this.header = header;
  }

  setLoginState(name) {
    this.header.querySelector('.header__button-link_inactive').style.display = 'unset';
    this.header.querySelector('.header__button-auth').childNodes[0].textContent = `${name}`;
    this.header.querySelector('.header__button-img').style.display = 'unset';
  }

  setLogoutSate() {
    this.header.querySelector('.header__button-link_inactive').style.display = 'none';
    this.header.querySelector('.header__button-img').style.display = 'none';
    this.header.querySelector('.header__button-auth').childNodes[0].textContent = 'Авторизоваться';
  }

  getName() {
    return this.header.querySelector('.header__button-auth').childNodes[0].textContent;
  }

  close() {

  }

  mobileMenu() {
    console.log(this);
  }

  clear() {

  }
}
