import './AuthPage.css'
import headerLogo from '../../images/logo/logo.svg'
import { NavLink } from 'react-router-dom'

export default function AuthPage ({ name, title, children, button, note, link, linkText, handleSubmit }) {
  return (
    <main className='auth-page' id={ name }>
      <NavLink to='/'>
        <img className='auth-page__logo' src= { headerLogo } alt='Логотип' />
      </NavLink>

			<h2 className='auth-page__title auth-page__title_type_white'>{ title }</h2>
			<form className='auth-page__form' name={ name } method='post' onSubmit={ handleSubmit }>
				<fieldset className='auth-page__form-set'>
					{ children }
				</fieldset>				
				<button className='auth-page__button auth-page__button_type_white' type='submit' aria-label={ `${ name }` }>{ button }</button>
			</form>
			<p className='auth-page__note'>{ note } <NavLink to={ link } className="auth-page__note-link">{ linkText }</NavLink></p>
    </main>
  )
}