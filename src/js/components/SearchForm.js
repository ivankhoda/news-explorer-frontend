export default class SearchForm {
  constructor(searchForm) {
    this.searchForm = searchForm;
  }

  validate() {
    if (this.searchForm.querySelector('.form__search').validity.valueMissing) {
      this.searchForm.querySelector('.form__search').setCustomValidity('Нужно ввести ключевое слово');
      this.searchForm.querySelector('.form__search').reportValidity();
    } else {
    }
  }

  _addEventListeners() {
    if (this.searchForm) {
      this.searchForm.querySelector('.form-button__search').addEventListener('click', (event) => {
        event.preventDefault();
        this.validate();
      });
    }
  }
}
