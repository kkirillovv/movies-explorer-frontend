import React, {useEffect, useState} from 'react'
import './Movies.css'
import Preloader from './Preloader/Preloader'
import SearchForm from './SearchForm/SearchForm'
import MoviesCardList from './MoviesCardList/MoviesCardList'
import { moviesApi } from '../../utils/MoviesApi'
import { filterFilms, mathCauntCards, mathAddCards } from '../../utils/func'

export default function Movies ({ mainApi } ) {

  const [hasSearched, setHasSearched] = useState(false)   // состояние предпоиска
  const [preloader, setPreloader] = useState(false)       // состояние прелоадера
  const [searchResults, setSearchResults] = useState([])  // результаты поиска
  const [searchError, setSearchError] = useState('')      // ошибка поиска
  const [countCard, setCountCard] = useState(12)          // количество выводимых карточек
  const [error, setError] = useState("")

  const visibleCard = searchResults.slice(0, countCard)
  const savedMovies = JSON.parse(localStorage.getItem('savedMovies')) || []

  useEffect(() => {
    const count = mathCauntCards(window.innerWidth)
    setCountCard(count)
    const searchFilms = localStorage.getItem('searchFilms')
    const shortFilm = localStorage.getItem('shortFilm') === 'true' ? true : false
    const movies = filterFilms(JSON.parse(localStorage.getItem('getFilms')) || [], searchFilms, shortFilm)
    if (movies.length !== 0 ) {
      setLike(movies, savedMovies)
      setHasSearched(true)
      setSearchResults(movies)
    }
  }, [])

  function getFilms(searchFilms, shortFilm) {
    moviesApi.getPageData()
      .then(([allMovies]) => {
        setLike(allMovies, savedMovies)
        const movies = filterFilms(allMovies, searchFilms, shortFilm)
        setSearchResults(movies)
        localStorage.setItem('searchFilms', searchFilms)
        localStorage.setItem('shortFilm', shortFilm)
        localStorage.setItem('getFilms', JSON.stringify(filterFilms(allMovies, searchFilms, false)))
      })
      .catch((err) => {
        setSearchError(`Во время запроса произошла ошибка: ${err}. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.`)
      })
      .finally(() => {
        setPreloader(false)
      })
  }

  function setLike(getFilms, savedMovies) {
    getFilms.forEach((item) => {
      if (savedMovies.some(savedMovie => savedMovie.movieId === item.id)) {
        item.savedStatus = true // прибавляем лайк
      } else {
        item.savedStatus = false // убираем лайк
      }
    })
  }

  function handleChangeSwtich(e) {
    const allMovies = JSON.parse(localStorage.getItem('getFilms')) || []
    const earchFilms = localStorage.getItem('searchFilms')
    const movies = filterFilms(allMovies, earchFilms, e.target.checked)
    setSearchResults(movies)
    localStorage.setItem('shortFilm', e.target.checked)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (e.target.movie.value !== "") {
      setHasSearched(true)
      setPreloader(true)
      setError("")
      getFilms(e.target.movie.value, e.target.shortfilms.checked)
    }
    else setError('Нужно ввести ключевое слово')
  }

  function loadMore () {
    setCountCard(count => count + mathAddCards(window.innerWidth))
  }

  return (
    <main className='movies'>
      <section className='movies__search'>
        <SearchForm handleChangeSwtich = { handleChangeSwtich } handleSubmit = { handleSubmit } error = { error } />
      </section>
      { hasSearched
        ? preloader
          ? <Preloader />
          : searchError
            ? <p className='movies__error'>{searchError}</p>
            : searchResults.length === 0
              ? <p className='movies__error'>Ничего не найдено</p>
              : <section className='movies__card-list-container'>
                  <MoviesCardList visibleCard = { visibleCard } mainApi = { mainApi } />
                  <div className='movies__card-list-more'>
                  {
                    countCard < searchResults.length && (<button className='movies__card-list-more-button' onClick={ loadMore } type='button'>Ещё</button>)
                  }
                  </div>
                </section>
        : <></>
      }
    </main>
  )
}
