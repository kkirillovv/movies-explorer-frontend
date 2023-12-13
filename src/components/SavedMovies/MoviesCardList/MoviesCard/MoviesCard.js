import { useState } from 'react'
import './MoviesCard.css'
import { mainApi } from '../../../../utils/MainApi'
import { toHoursAndMinutes } from '../../../../utils/func'

export default function MoviesCard({ card }) {

  const [savedStatus, setSavedStatus ] = useState(true)  // состояние сохрангения карточки

  function onDelete () {
    let savedMovies = JSON.parse(localStorage.getItem('savedMovies')) || [] // забираем массив сохраненных фильмов
    const isMovieSaved = savedMovies.some(savedMovie => savedMovie.movieId === card.movieId)
    isMovieSaved && handleDeletedMovie (savedMovies)
  }

  function handleDeletedMovie (savedMovies) {
    mainApi.deleteSavedMovie(card._id)
      .then((res) => {
        savedMovies = savedMovies.filter(savedMovie => savedMovie.movieId !== card.movieId)
        setSavedStatus(false)
        localStorage.setItem('savedMovies', JSON.stringify(savedMovies))
      })
      .catch((err) => {
        console.error(`Что-то пошло не так: ${err}`)
      })
  }

  return (
    savedStatus && (
    <li className='movies-card'>
      <img className='movies-card__image' src={ card.image} alt={`Постер к фильму - ${ card.nameRU }`} />
      <h3 className='movies-card__name'>{ card.nameRU }</h3>
      <p className='movies-card__length'>{ toHoursAndMinutes(card.duration) }</p>
      <button type='button' className='movies-card__delete' onClick={ onDelete }></button>
    </li>)
  )
}