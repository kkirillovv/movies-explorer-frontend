import './Movies.css'
// import Preloader from './Preloader/Preloader'
import SearchForm from './SearchForm/SearchForm'
import MoviesCardList from './MoviesCardList/MoviesCardList'
import { moviesData } from '../../utils/datas'

export default function Movies () {
  return (
    <main className='movies'>
      <section className='movies__search'>
        <SearchForm />
      </section>

      <section className='movies__card-list-container'>
        <MoviesCardList moviesData = { moviesData } />

        <div className='movies__card-list-more'>
          <button className='movies__card-list-more-button' type='button'>Ещё</button>
        </div>
      </section>
    </main>
  )
}