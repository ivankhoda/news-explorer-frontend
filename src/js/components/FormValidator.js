export default class FormValidator {
  constructor(form) {
    this.form = form;
  }

  checkInputValidity(event) {
    if (event.target.value.length === 0) {
      document.querySelector(`.error-${event.target.name}`).textContent = 'Это обязательное поле';
      document.querySelector('.form-lockedbutton').setAttribute('disabled', 'disabled');
    } else if ((event.target.value.length <= 7) && event.target.type === 'password') {
      document.querySelector(`.error-${event.target.name}`).textContent = 'Пароль должен быть не менее 8 символов';
      document.querySelector('.form-lockedbutton').setAttribute('disabled', 'disabled');
    } else if ((event.target.validity.typeMismatch) && (event.target.validity.patternMismatch) && event.target.type === 'email') {
      // console.log(event.target)
      document.querySelector(`.error-${event.target.name}`).textContent = 'Неправильный формат Email';
      document.querySelector('.form-lockedbutton').setAttribute('disabled', 'disabled');
    } else if ((event.target.value.length <= 1 || event.target.value.length > 30) && event.target.name === 'name_signup') {
      document.querySelector(`.error-${event.target.name}`).textContent = 'Имя должно быть от 2 до 30 символов';
      document.querySelector('.form-lockedbutton').setAttribute('disabled', 'disabled');
    } else {
      document.querySelector(`.error-${event.target.name}`).textContent = '';
    }
  }

  setSubmitButtonState() {
    const inactiveButton = Array.from(document.querySelectorAll('.form-lockedbutton'));
    const regButton = document.querySelector('.form-lockedbutton_reg');
    const signinButton = document.querySelector('.form-lockedbutton_signin');
    const signupForm = document.forms.signup;
    const email = signupForm.elements.email_signup;
    const password = signupForm.elements.password_signup;
    const name = signupForm.elements.name_signup;
    const signinForm = document.forms.signin;
    const emailSignin = signinForm.elements.email;
    const passwordSignin = signinForm.elements.password;

    inactiveButton.forEach(() => {
      if ((!email.validity.typeMismatch)
    && (!email.validity.patternMismatch)
    && (password.value.length >= 8)
    && (name.value.length !== 0 && name.value.length > 1 && name.value.length < 30)) {
        regButton.classList.add('form-lockedbutton_unlocked');
        regButton.classList.remove('form-lockedbutton_blocked');
        regButton.removeAttribute('disabled');
      } else {
        regButton.classList.remove('form-lockedbutton_unlocked');
        regButton.classList.add('form-lockedbutton_blocked');
        regButton.setAttribute('disabled', 'disabled');
      }
    });
    inactiveButton.forEach(() => {
      if ((!emailSignin.validity.typeMismatch)
        && (!email.validity.patternMismatch)
        && (passwordSignin.value.length >= 8)
      ) {
        signinButton.classList.add('form-lockedbutton_unlocked');
        signinButton.classList.remove('form-lockedbutton_blocked');
        signinButton.removeAttribute('disabled');
      } else {
        signinButton.classList.remove('form-lockedbutton_unlocked');
        signinButton.classList.add('form-lockedbutton_blocked');
        signinButton.setAttribute('disabled', 'disabled');
      }
    });
  }

  setEventListeners() {
    this
      .form
      .querySelectorAll('.popup__input')
      .forEach((input) => { input.addEventListener('input', this.checkInputValidity); });

    this
      .form
      .querySelectorAll('.popup__input')
      .forEach((input) => { input.addEventListener('input', this.setSubmitButtonState); });
  }
}
