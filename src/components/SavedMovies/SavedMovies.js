import {  useEffect, useState } from 'react'
import './SavedMovies.css'
import SearchForm from './SearchForm/SearchForm'
import MoviesCardList from './MoviesCardList/MoviesCardList'
// import { savedMoviesData } from '../../utils/datas' 
import { filterFilms } from '../../utils/func'

export default function SavedMovies () {

  const [searchFilms, setSearchFilms] = useState('')      // то, что ищем
  const [shortFilm, setShortFilm] = useState(false)       // короткометражки?
  const [searchResults, setSearchResults] = useState([])  // результаты поиска

  const savedMovies = JSON.parse(localStorage.getItem('savedMovies')) || []

  useEffect(() => {
    setSearchResults(savedMovies)
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    setSearchFilms(e.target.movie.value)
    setShortFilm(e.target.shortfilms.checked)
    const movies = filterFilms(savedMovies, searchFilms, shortFilm) 
    setSearchResults(movies)
  }

  return (
    <main className='saved-movies'>
      <section className='saved-movies__search'>
        <SearchForm handleSubmit = { handleSubmit } />
      </section>

      <section className='saved-movies__card-list-container'>
        <MoviesCardList moviesData = { searchResults } />
      </section>
    </main>
  )
}