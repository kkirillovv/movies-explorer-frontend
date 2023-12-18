import {  useEffect, useState } from 'react'
import './SavedMovies.css'
import SearchForm from './SearchForm/SearchForm'
import MoviesCardList from './MoviesCardList/MoviesCardList'
import { filterFilms } from '../../utils/func'

export default function SavedMovies ({ mainApi }) {

  const [Results, setResults] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies')) || []
    setResults(savedMovies)
    setSearchResults(savedMovies)
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    
    const movies = filterFilms(Results, e.target.movie.value, e.target.shortfilms.checked) 
    setSearchResults(movies)
  }

  return (
    <main className='saved-movies'>
      <section className='saved-movies__search'>
        <SearchForm handleSubmit = { handleSubmit } />
      </section>

      <section className='saved-movies__card-list-container'>
        <MoviesCardList moviesData = { searchResults } mainApi = { mainApi } />
      </section>
    </main>
  )
}