import './MoviesCardList.css'
import MoviesCard from './MoviesCard/MoviesCard'

function MoviesCardList({ moviesData }) {
  return(
		<ul className='movies-card-list list'>
      { moviesData.map((card, i) => {
        return(<MoviesCard image={card.image} name={card.name} length={card.length} savedStatus={card.savedStatus} key = {i}/>)
      }) }			
		</ul>
  )
}

export default MoviesCardList