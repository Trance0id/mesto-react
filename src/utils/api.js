const API_CONFIG = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-60/',
  headers: {
    authorization: 'fac9339f-e6fd-4202-9057-cf36536b9501'
  }
};

class Api {

_baseUrl;
_headers;

  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _callFetch(endpoint, method, body, contentType) {
    const headers = this._headers;
    headers['Content-Type'] = contentType;
    return fetch(this._baseUrl + endpoint, { method, headers, body: JSON.stringify(body) })
    .then(res => {
      if(res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка! Статус: ${res.status}`);
      }
    });
  }

  getUserInfo() {
    return this._callFetch('users/me');
  }

  getInitialCards() {
    return this._callFetch('cards');
  }
}

const api = new Api(API_CONFIG);

export default api;
