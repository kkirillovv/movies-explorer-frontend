import './Movies.css'
// import Preloader from './Preloader/Preloader'
import SearchForm from './SearchForm/SearchForm'
import MoviesCardList from './MoviesCardList/MoviesCardList'
import { moviesData } from '../../utils/datas'

export default function Movies () {
  return (
    <main className='movie__content'>
      <section className='movie__search'>
        <SearchForm />
      </section>

      <section className='movies__card-list-container'>
        <MoviesCardList moviesData = { moviesData } />

        <div className='movies-card-list__more'>
          <button className='movies-card-list__more-button' type='button'>Ещё</button>
        </div>
      </section>
    </main>
  )
}