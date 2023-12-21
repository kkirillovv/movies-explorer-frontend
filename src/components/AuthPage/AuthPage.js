import './AuthPage.css'
import headerLogo from '../../images/logo/logo.svg'
import { NavLink } from 'react-router-dom'

export default function AuthPage ({ name, title, children, button, buttonType, note, link, linkText, handleSubmit, errorApi }) {

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
				<button className={buttonType ? 'auth-page__button auth-page__button_type_white' : 'auth-page__button'} type='submit' aria-label={ `${ name }`} disabled={buttonType}>{ button }</button>
			</form>
			<span className={ errorApi ? 'auth-page__error auth-page__error_active' : 'auth-page__error'}>{ errorApi }</span>
			<p className='auth-page__note'>{ note } <NavLink to={ link } className="auth-page__note-link">{ linkText }</NavLink></p>
    </main>
  )
}