import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import * as auth from '../../utils/Auth'
import './Register.css'
import AuthPage from '../AuthPage/AuthPage'
import { UseFormAndValidation } from '../../hooks/useFormAndValidation'

export default function Register({ handleAuth }) {

  const {values, handleChange, errors, buttonType} = UseFormAndValidation({name: '', email: '', password: ''})
  const [errorApi, setErrorApi] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!values.email || !values.password || !values.name) { // если один из инпутов пустой
      return // вышли
    }
    auth.register(values.name, values.email, values.password).then((res) => {
      const token = auth.login(values.email, values.password)
        if (token) { // если все отлично
          localStorage.setItem('jwt', token)
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
			name = { 'register' }
			title = { 'Добро пожаловать!' }
			button = { 'Зарегистрироваться' }
      buttonType = { buttonType }
			note = { 'Уже зарегистрированы? ' }
			link = { '/signin' }
			linkText = { 'Войти' }
			handleSubmit = { handleSubmit }
			errorApi = { errorApi }
		>
			<p className='auth-page__input-name'>Имя</p>
			<label className='auth-page__field'>
				<input type='text' name='name' value={values.name || ""}  onChange={ handleChange } className='auth-page__input' placeholder='Имя' required minLength="2" maxLength="40"  id='name-input' />
        <span className={`auth-page__input-error email-input-error ${errors.name && "auth-page__input-error_active"}`}>{errors.name || ""}</span>
			</label>
			<p className='auth-page__input-name'>E-mail</p>			
			<label className='auth-page__field'>
				<input type='email' name="email" value={values.email || ""} onChange={ handleChange } className='auth-page__input' placeholder="E-mail" required minLength="2" maxLength="40" id="email-input" />
				<span className={`auth-page__input-error email-input-error ${errors.email && "auth-page__input-error_active"}`}>{errors.email || ""}</span>
			</label>
			<p className='auth-page__input-name'>Пароль</p>			
			<label className='auth-page__label'>
				<input type='password' name='password' value={values.password || ""} onChange={ handleChange } className={'auth-page__input ' + (values.password !== "" && errors.password ? 'auth-page__input_error' : 'auth-page__input_correct')} placeholder="Пароль"  required minLength="6" maxLength="20" id="password-input" />
				<span className={`auth-page__input-error password-input-error ${errors.password && "auth-page__input-error_active"}`}>{errors.password || ""}</span>
			</label>
    </AuthPage>
  )
}