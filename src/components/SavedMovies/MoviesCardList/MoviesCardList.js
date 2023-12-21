import './MoviesCardList.css'
import MoviesCard from './MoviesCard/MoviesCard'

export default function MoviesCardList({ moviesData, mainApi }) {
  return(
		<ul className='movies-card-list list'>
      { moviesData.map((card, i) => {
        return(<MoviesCard mainApi = { mainApi } card = { card } key = { i } />)
      }) }			
		</ul>
  )
}