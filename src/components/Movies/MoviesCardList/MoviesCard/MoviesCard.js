import {useContext, useState} from 'react'
import './MoviesCard.css'
import { toHoursAndMinutes } from '../../../../utils/func'
import { imagePathUrl } from '../../../../utils/const'
import { CurrentUserContext } from '../../../../context/CurrentUserContext'

export default function MoviesCard ({ mainApi, card }) {

  const currentUser = useContext(CurrentUserContext)   // контекст текущего юзера
  const [savedStatus, setSavedStatus ] = useState(card.savedStatus)  // состояние сердечка

  function onSavedStatus () {
    let savedMovies = JSON.parse(localStorage.getItem('savedMovies')) || [] // забираем массив сохраненных фильмов
    const isMovieSaved = savedMovies.some(savedMovie => savedMovie.movieId === card.id)
    isMovieSaved ? handleDeletedMovie (savedMovies) : handleSavedMovie (savedMovies)
  }

  function handleDeletedMovie (savedMovies) {
    const deleteCard = savedMovies.find(savedMovie => savedMovie.movieId === card.id)
    mainApi.deleteSavedMovie(deleteCard._id)
      .then((res) => {
        savedMovies = savedMovies.filter(savedMovie => savedMovie.movieId !== card.id)
        setSavedStatus(false)
        localStorage.setItem('savedMovies', JSON.stringify(savedMovies))
      })
      .catch((err) => {
        console.error(`Что-то пошло не так: ${err}`)
      })
  }

  function handleSavedMovie (savedMovies) {
    const newMovieSaved = {
      country: card.country,
      director: card.director,
      duration: card.duration,
      year: card.year,
      description: card.description,
      image: imagePathUrl + card.image.url,
      trailerLink: card.trailerLink,
      thumbnail: imagePathUrl + card.image.formats.thumbnail.url,
      owner: currentUser._id,
      movieId: card.id,
      nameRU: card.nameRU,
      nameEN: card.nameEN,
    }
    mainApi.addNewSavedMovie(newMovieSaved)
      .then((newCard) => {
        savedMovies.push(newCard)
        setSavedStatus(true)
        localStorage.setItem('savedMovies', JSON.stringify(savedMovies))
      })
      .catch((err) => {
        console.error(`Что-то пошло не так: ${err}`)
      })
  }

  return (
		<li className='movies-card'>
      <a className='movies-card__trailer-link' href={card.trailerLink} target='_blank' rel='noreferrer'>
			  <img className='movies-card__image' src={ imagePathUrl + card.image.url } alt={`Постер к фильму - ${ card.nameRU }`} />
      </a>
			<h3 className='movies-card__name'>{ card.nameRU }</h3>
			<p className='movies-card__length'>{ toHoursAndMinutes(card.duration) }</p>
			<button type='button' className={ savedStatus ? 'movies-card__saved' : 'movies-card__unsaved' } onClick={ onSavedStatus } onTouchStart={onSavedStatus}></button>
		</li>
  )
}