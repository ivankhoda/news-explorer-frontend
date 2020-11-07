export default class Api {
  constructor(options) {
    this.options = options;
  }

  signup(email, password, name) {
    return fetch(`${this.options.BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => Promise.reject(`Error: ${err.status}`));
  }

  signin(email, password) {
    return fetch(`${this.options.BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email, password,
      }),
    })
      .then((res) => {
        console.log(res);
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((response) => {
        localStorage.setItem('token', `${response.token}`);
      })
      .catch((err) => Promise.reject(`Error: ${err.status}`));
  }

  logout() {
    return fetch(`${this.options.BASE_URL}/logout`, {
      redirect: 'follow',
      //credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify({
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => Promise.reject(`Error: ${err.status}`));
  }

  getUserData() {
    return fetch(`${this.options.BASE_URL}/users/me`, {
      redirect: 'follow',
     // credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })

      .catch((err) => Promise.reject(`Error: ${err.status}`));
  }

  getArticles() {
    return fetch(`${this.options.BASE_URL}/articles`, {
      redirect: 'follow',
    //  credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => Promise.reject(`Error: ${err.status}`));
  }

  createArticle(
    keyword, title, text, date, source, link, image,
  ) {
    return fetch(`${this.options.BASE_URL}/articles`, {
      redirect: 'follow',
     // credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify({
        keyword,
        title,
        text,
        date,
        source,
        link,
        image,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => Promise.reject(`Error: ${err.status}`));
  }

  removeArticle(articleId) {
    return fetch(`${this.options.BASE_URL}/articles/${articleId}`, {
      redirect: 'follow',
     // credentials: 'include',
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => Promise.reject(`Error: ${err.status}`));
  }
}
