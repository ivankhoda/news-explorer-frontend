export default class NewsApi {
  constructor(options) {
    this.options = options;
  }

  getNews(key, date) {
    const { last, now } = date;
    const {
      baseUrl, sortBy, apiKey, pageSize,
    } = this.options;
    return fetch(`${baseUrl}q=${key}&from=${last}&to=${now}&sortBy=${sortBy}&pageSize=${pageSize}&apiKey=${apiKey}`, {
      method: 'GET',
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })

      .catch((err) => Promise.reject(`Error: ${err.status}`));
  }
}
