import './Login.css'
import AuthPage from '../AuthPage/AuthPage'
import { UseFormAndValidation } from '../../hooks/useFormAndValidation.js'

export default function Login() {

	const {values, handleChange, errors} = UseFormAndValidation({email: '', password: ''})

  return (
    <AuthPage
			name = { 'login' }
			title = { 'Рады видеть!' }
			button = { 'Войти' }
			note = { 'Ещё не зарегистрированы? ' }
			link = { '/signup' }
			linkText = {'Регистрация'}
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