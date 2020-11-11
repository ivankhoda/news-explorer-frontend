export default class SearchForm {
  constructor(searchForm) {
    this.searchForm = searchForm;
  }

  validate() {
    if ((this.searchForm.querySelector('.form__search').validity.valueMissing) || (this.searchForm.querySelector('.form__search').value.trim().length === 0)) {
      this.searchForm.querySelector('.form__search').setCustomValidity('Нужно ввести ключевое слово');
      this.searchForm.querySelector('.form__search').reportValidity();
    }
    if ((!this.searchForm.querySelector('.form__search').validity.valueMissing) && (!this.searchForm.querySelector('.form__search').value.trim().length === 0)) {
      this.searchForm.querySelector('.form-button__search').removeAttribute('disabled');
      this.getKeyword();
    } else {

    }
  }

  getKeyword() {
    if (this.searchForm.querySelector('.form__search').value.trim().length === 0) {
      this.searchForm.querySelector('.form__search').setCustomValidity('Нужно ввести ключевое слово');
      this.searchForm.querySelector('.form__search').reportValidity();
      return false;
    }
    return this.searchForm.querySelector('.form__search').value;
  }

  addEventListeners() {
    this.searchForm.querySelector('.form-button__search').addEventListener('click', () => {
      this.validate();
    });
  }
}
