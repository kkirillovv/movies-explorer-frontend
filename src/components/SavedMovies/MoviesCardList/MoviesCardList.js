import './MoviesCardList.css'
import MoviesCard from './MoviesCard/MoviesCard'

export default function MoviesCardList({ moviesData }) {
  return(
		<ul className='movies-card-list list'>
      { moviesData.map((card) => {
        return(<MoviesCard card = { card } key = { card.id } />)
      }) }			
		</ul>
  )
}