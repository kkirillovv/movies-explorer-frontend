import './MoviesCardList.css'
import MoviesCard from './MoviesCard/MoviesCard'

export default function MoviesCardList({ visibleCard }) {
  return (
		<ul className='movies-card-list list'>
      { visibleCard.map((card) => {
        return(<MoviesCard card = { card } key = { card.id } />)
      }) }			
		</ul>
  )
}