class MoviesApi {
  constructor(options) { // инициировали this, сконструировали и вернули его
    this._url = options.baseUrl
    this._headers = options.headers
  }

  _getStatusData (res) {
    if (res.ok && res.status !== 204) {
      return res.json() // если все окей, забираем данные в формате json
    } else if (res.ok && res.status === 204) {
      return {}
    } else {
      return Promise.reject(`Ошибка: ${res.status}`) // если ошибка, отклоняем промис
    }
  }
  
  async getInitialMovies () { // получаем карточки фильмов с БД сервера
    const res = await fetch(this._url, {
      headers:  this._headers
    })
    return this._getStatusData(res)
  }

  getPageData() {
    return Promise.all([this.getInitialMovies()])
  }
}

// C. Объявляем moviesApi --------------------------------------------------------

export const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json',
  }
})