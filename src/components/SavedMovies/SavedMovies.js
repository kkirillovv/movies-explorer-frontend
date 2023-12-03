import './SavedMovies.css'
import SearchForm from './SearchForm/SearchForm'
import MoviesCardList from './MoviesCardList/MoviesCardList'
import { savedMoviesData } from '../../utils/datas'

export default function SavedMovies () {
  return (
    <main className='saved-movies'>
      <section className='saved-movies__search'>
        <SearchForm />
      </section>

      <section className='saved-movies__card-list-container'>
        <MoviesCardList moviesData = { savedMoviesData } />
      </section>
    </main>
  )
}