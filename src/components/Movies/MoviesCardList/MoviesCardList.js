import './MoviesCardList.css'
import MoviesCard from './MoviesCard/MoviesCard'

export default function MoviesCardList({ visibleCard, mainApi }) {
  return (
		<ul className='movies-card-list list'>
      { visibleCard.map((card) => {
        // console.log(card.nameRU + ' - ' + card.savedStatus)
        return(<MoviesCard mainApi = { mainApi } card = { card } key = { card.id } />)
      }) }			
		</ul>
  )
}