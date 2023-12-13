import { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom"
import './Profile.css'
import Header from '../Header/Header'
import { UseFormAndValidation } from '../../hooks/useFormAndValidation'
import { CurrentUserContext } from '../../context/CurrentUserContext'
import { mainApi } from '../../utils/MainApi'

export default function Profile({element: Component, loggedOut, ...props}) {
	
  const { currentUser, getUserInfo } = useContext(CurrentUserContext)   // контекст текущего юзера
  const { values, handleChange, errors } = UseFormAndValidation({name: '', email: ''}) // валидация вводимых данных
  const history = useNavigate()
  const [ editUser, setEditUser ] = useState(currentUser)
  const [ buttonActive, setButtonActive ] = useState(false)

	function signOut () {
	  localStorage.removeItem('jwt')
    localStorage.removeItem('savedMovies')
    loggedOut(false)
	  history('/')
	}

  function handleEditUser (e) {
    setEditUser({
      name: e.target.previousSibling[0].value,
      email: e.target.previousSibling[1].value
    })
  }

  function handleSubmit (e) {
    e.preventDefault()
    handleEditUser(e)
    mainApi.editUserInfo(editUser).then((user) => {
      console.log (editUser.name + ' ' + editUser.email)
      getUserInfo(user)
      console.log (user.name + ' ' + user.email)
    }).catch((err) => {
      console.log(err)
    })
  }

  function showButtonSubmit (e) {
    handleChange(e)
    const {name, value} = e.target
    setEditUser ({...editUser, [name]: value })
    if (errors.name !== "" || errors.email !== "") setButtonActive(false)
    else if (editUser.name === currentUser.name && editUser.email === currentUser.email) setButtonActive(false)
    else if (editUser.name === "" || editUser.email === "") setButtonActive(false)
    else setButtonActive(true)
  }

  return (
		<>
			<Header loggedIn={props.loggedIn} />
			<main className='profile__content'>
				<h2 className='profile__title'>Привет, { currentUser.name }!</h2>
				<form className='profile'>
          <label className='profile__elements'>
            <p className='profile__element'>Имя</p>
            <input  type='text' name='name' value={editUser.name}  onChange={ showButtonSubmit } className='profile__element' placeholder='Имя' required minLength="2" maxLength="40"  id='name-input'/>
          </label>
          <span className={`profile__input-error email-input-error ${errors.name && "profile__input-error_active"}`}>{errors.name || ""}</span>
          <label className='profile__elements'>
            <p className='profile__element'>E-mail</p>
            <input type='email' name="email" value={editUser.email} onChange={ showButtonSubmit } className='profile__element' placeholder="E-mail" required minLength="2" maxLength="40" id="email-input" />
          </label>
          <span className={`profile__input-error email-input-error ${errors.email && "profile__input-error_active"}`}>{errors.email || ""}</span>
				</form>
        <button type='submit' disabled={!buttonActive} className={buttonActive ? 'profile__link' : 'profile__link profile__link_type_white'} onClick={ handleSubmit }>Редактировать</button><br />
				<button type='button' className='profile__link profile__link_type_red' onClick={ signOut }>Выйти из аккаунта</button>
			</main>
		</>
  )
}