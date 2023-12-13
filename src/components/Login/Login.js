import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import * as auth from '../../utils/Auth'
import './Login.css'
import AuthPage from '../AuthPage/AuthPage'
import { UseFormAndValidation } from '../../hooks/useFormAndValidation.js'

export default function Login({ handleAuth }) {

	const {values, handleChange, errors, buttonType} = UseFormAndValidation({email: '', password: ''})
  const [errorApi, setErrorApi] = useState('')
  const navigate = useNavigate()

  function handleSubmit (e) {
    e.preventDefault()
    if (!values.email || !values.password) { // если один из инпутов пустой
      return // вышли
    }
    auth.login(values.email, values.password).then((data) => {
      if (data.token) { // если все отлично
        localStorage.setItem('jwt', data.token)
        handleAuth() // передали
        navigate('/movies', {replace: true}) // перешли
      } else {
        return Promise.reject("Токен не предоставлен!")
      }
    }).catch((err) => {
      setErrorApi(err)
    })
  }

  return (
    <AuthPage
			name = { 'login' }
			title = { 'Рады видеть!' }
			button = { 'Войти' }
			buttonType = { buttonType }
			note = { 'Ещё не зарегистрированы? ' }
			link = { '/signup' }
			linkText = {'Регистрация'}
      handleSubmit = { handleSubmit }
			errorApi = { errorApi }
    >
			<p className='auth-page__input-name'>E-mail</p>
			<label className='auth-page__field'>
				<input type='email' name="email" value={values.email || ""} onChange={ handleChange } className='auth-page__input' placeholder="E-mail" required minLength="2" maxLength="40" id="email-input" />
				<span className={`auth-page__input-error email-input-error ${errors.email && "auth-page__input-error_active"}`}>{errors.email || ""}</span>
			</label>
      <p className='auth-page__input-name'>Пароль</p>
			<label className='auth-page__label'>
				<input type='password' name='password' value={values.password || ""} onChange={ handleChange } className='auth-page__input'
				placeholder="Пароль"  required minLength="6" maxLength="20" id="password-input" />
				<span className={`auth-page__input-error password-input-error ${errors.password && "auth-page__input-error_active"}`}>{errors.password || ""}</span>
			</label>
    </AuthPage>
  )
}