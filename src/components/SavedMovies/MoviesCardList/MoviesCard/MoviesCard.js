import './MoviesCard.css'

export default function MoviesCard({ image, name, length, savedStatus }) {

  return (
		<li className='movies-card'>
			<img className='movies-card__image' src={ image } alt={`Постер к фильму - ${ name }`} />
			<h3 className='movies-card__name'>{ name }</h3>
			<p className='movies-card__length'>{ length }</p>
			<button type='button' className='movies-card__delete'></button>
		</li>
  )
}