import './Register.css'
import AuthPage from '../AuthPage/AuthPage'
import { UseFormAndValidation } from '../../hooks/useFormAndValidation'

export default function register() {

  const {values, handleChange, errors} = UseFormAndValidation({name: '', email: '', password: ''})

  return (
    <AuthPage
			name = { 'register' }
			title = { 'Добро пожаловать!' }
			button = { 'Зарегистрироваться' }
			note = { 'Уже зарегистрированы? ' }
			link = { '/signin' }
			linkText = { 'Войти' }
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