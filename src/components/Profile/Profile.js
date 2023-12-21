import { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom"
import './Profile.css'
import Header from '../Header/Header'
import { UseFormAndValidation } from '../../hooks/useFormAndValidation'
import { CurrentUserContext } from '../../context/CurrentUserContext'

export default function Profile({element: Component, loggedOut, ...props}) {
	
  const { currentUser, getUserInfo } = useContext(CurrentUserContext)   // контекст текущего юзера
  const { values, handleChange, errors } = UseFormAndValidation({name: currentUser.name, email: currentUser.email}) // валидация вводимых данных
  const history = useNavigate()
  const [ editUser, setEditUser ] = useState(currentUser)
  const [ buttonActive, setButtonActive ] = useState(false)
  const [errorApi, setErrorApi] = useState('')

  function handleSubmit (e) {
    e.preventDefault()
    props.mainApi.editUserInfo(values).then((user) => {
      getUserInfo(user)
      setEditUser(user)
      setButtonActive(false)
      setErrorApi('')
    }).catch((err) => {
      console.log(err)
      setErrorApi('Такой адрес уже существует в базе')
    })
  }

  function showButtonSubmit (e) {
    handleChange(e)
    const {name, value} = e.target
    const changeEditUser = {...editUser, [name]: value }
    setEditUser (changeEditUser)
    JSON.stringify(changeEditUser) !== JSON.stringify(currentUser) && e.target.validationMessage === ""
      ? setButtonActive(true)
      : setButtonActive(false)
  }

	function signOut () {
	  localStorage.removeItem('jwt')
    localStorage.removeItem('savedMovies')
    localStorage.removeItem('searchFilms')
    localStorage.removeItem('shortFilm')
    localStorage.removeItem('getFilms')
    loggedOut(false)
	  history('/')
	}

  return (
		<>
			<Header loggedIn={props.loggedIn} />
			<main className='profile__content'>
				<h2 className='profile__title'>Привет, { currentUser.name }!</h2>
				<form className='profile'>
          <label className='profile__elements'>
            <p className='profile__element'>Имя</p>
            <input  type='text' name='name' value={editUser.name || ""}  onChange={ showButtonSubmit } className='profile__element' placeholder='Имя' required minLength="2" maxLength="40"  id='name-input'/>
          </label>
          <span className={`profile__input-error email-input-error ${errors.name && "profile__input-error_active"}`}>{errors.name || ""}</span>
          <label className='profile__elements'>
            <p className='profile__element'>E-mail</p>
            <input type='email' name="email" value={editUser.email || ""} onChange={ showButtonSubmit } className='profile__element' placeholder="E-mail" required minLength="2" maxLength="40" id="email-input" />
          </label>
          <span className={`profile__input-error email-input-error ${errors.email && "profile__input-error_active"}`}>{errors.email || ""}</span>
				</form>
        <span className={ errorApi ? 'profile__input-error profile__input-error_active' : 'profile__input-error'}>{ errorApi }</span>
        <button type='submit' disabled={!buttonActive} className={buttonActive ? 'profile__link' : 'profile__link profile__link_type_white'} onClick={ handleSubmit }>Редактировать</button><br />
				<button type='button' className='profile__link profile__link_type_red' onClick={ signOut }>Выйти из аккаунта</button>
			</main>
		</>
  )
}