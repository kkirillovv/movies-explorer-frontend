import React, {useEffect, useState} from 'react'
import './Movies.css'
import Preloader from './Preloader/Preloader'
import SearchForm from './SearchForm/SearchForm'
import MoviesCardList from './MoviesCardList/MoviesCardList'
import { moviesApi } from '../../utils/MoviesApi'
import { filterFilms, mathCauntCards, mathAddCards } from '../../utils/func'

export default function Movies () {

  const [hasSearched, setHasSearched] = useState(false)   // состояние предпоиска
  const [preloader, setPreloader] = useState(false)       // состояние прелоадера
  const [searchFilms, setSearchFilms] = useState('')      // то, что ищем
  const [shortFilm, setShortFilm] = useState(false)       // короткометражки?
  const [searchResults, setSearchResults] = useState([])  // результаты поиска
  const [searchError, setSearchError] = useState('')      // ошибка поиска
  const [countCard, setCountCard] = useState(12)          // количество выводимых карточек

  const visibleCard = searchResults.slice(0, countCard)
  const savedMovies = JSON.parse(localStorage.getItem('savedMovies')) || []
  
  useEffect(() => {
    const count = mathCauntCards(window.innerWidth)
    setCountCard(count)
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    setHasSearched(true)
    setPreloader(true)
    setSearchFilms(e.target.movie.value)
    setShortFilm(e.target.shortfilms.checked)
    moviesApi.getPageData()
      .then(([allMovies]) => {
        allMovies.forEach((item) => {
          if (savedMovies.some(savedMovie => savedMovie.movieId === item.id)) item.savedStatus = true // прибавляем лайки
        }) 
        const movies = filterFilms(allMovies, searchFilms, shortFilm) 
        setSearchResults(movies)
      })
      .catch((err) => {
        setSearchError(`Во время запроса произошла ошибка: ${err}. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.`)
      })
      .finally(() => {
        setPreloader(false)
      })
  }

  function loadMore () {
    setCountCard(count => count + mathAddCards(window.innerWidth))
  }

  return (
    <main className='movies'>
      <section className='movies__search'>
        <SearchForm handleSubmit = { handleSubmit } />
      </section>
      { hasSearched
        ? preloader 
          ? <Preloader />
          : searchError 
            ? <p className='movies__error'>{searchError}</p>
            : searchResults.length === 0 
              ? <p className='movies__error'>Ничего не найдено</p>
              : <section className='movies__card-list-container'>
                  <MoviesCardList visibleCard = { visibleCard }  />
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