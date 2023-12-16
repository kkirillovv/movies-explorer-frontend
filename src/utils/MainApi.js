class MainApi {
  constructor(options) { // инициировали this, сконструировали и вернули его
    this._url = options.baseUrl
    this._headers = options.headers
    this._authorization = options.headers.authorization
  }

  _getStatusData(res) {
    if (res.ok) {
      return res.json() // если все окей, забираем данные в формате json
    } else {
      return Promise.reject(`Ошибка: ${res.status}`) // если ошибка, отклоняем промис
    }
  }

  async addNewSavedMovie(card) { // добавляем карточку в БД сервера
    const res = await fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        country: card.country,
        director: card.director,
        duration: card.duration.toString(),
        year: card.year,
        description: card.description,
        image: card.image,
        trailerLink: card.trailerLink,
        thumbnail: card.thumbnail,
        owner: card.owner,
        movieId: card.movieId,
        nameRU: card.nameRU,
        nameEN: card.nameEN,
      })
    })
    return this._getStatusData(res)
  }

  async deleteSavedMovie (cardId) { // удаляем карточку из БД сервера
    const res = await fetch(`${this._url}/movies/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._authorization
      }
    })
    return this._getStatusData(res)
  }

  async editUserInfo (user) { // редактирование профиля пользователя в БД сервера
    const res = await fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: user.name,
        email: user.email,
      })
    })
    return this._getStatusData(res)
  }

  async getSavedMovies() { // получаем карточки с БД сервера
    const res = await fetch(`${this._url}/movies`, {
      headers: {
        authorization: this._authorization
      }
    })
    return this._getStatusData(res)
  }

  async getUserInfo () { // загрузка информации о пользователе из БД сервера
    const res = await fetch(`${this._url}/users/me`, {
      headers: {
        authorization: this._authorization
      }
    })
    return this._getStatusData(res)
  }

  getPageData () {
    return Promise.all([this.getUserInfo(), this.getSavedMovies()])
  }
}

// C. Объявляем Api --------------------------------------------------------
const token = localStorage.getItem('jwt')

export const mainApi = new MainApi({
  baseUrl: 'http://localhost:3000',
  // baseUrl: 'https://api.kme.nomoredomainsmonster.ru',
  headers: {
    authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
})