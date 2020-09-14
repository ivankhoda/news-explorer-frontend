export default class Api {
  constructor(options) {
    this.options = options;
    console.log(this.options);
  }

  signup(email, password, name) {
    console.log(this.options.baseURL);
    return fetch(`${this.options.baseURL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: `${name}`,
        email: `${email}`,
        password: `${password}`,
      }),
    })
      .then((res) => {
        if (res.ok) {
          console.log(res);
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => Promise.reject(`Error: ${err.status}`));
  }
}
// var options = {
//   'method': 'POST',
//   'url': 'https://api.explorenews.ml/signup',
//   'headers': {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({"email":"xxx2@xxx.com","name":"Name","password":"password"})
//
// };
// request(options, function (error, response) {
//   if (error) throw new Error(error);
//   console.log(response.body);
// });
