import React from "react"
import './Header.css'
import headerLogo from '../../images/logo/logo.svg'
import { NavLink } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'

export default function Header({ loggedIn }) {

  const [statusBurger, onMenu] = React.useState(false)

  return(
    <header className='header'>
      <div className='header__nav-container'>
        <NavLink to='/' className="header__logo-link"><img className='header__logo' src= {headerLogo} alt='Логотип'/></NavLink>
      { loggedIn
      ? <Navigation statusBurger={ statusBurger } menuOnLeft={ onMenu } />
      : <div className='header__container-auth'>
          <NavLink to='/signup' className={'header__auth-button'}>Регистрация</NavLink>
          <NavLink to='/signin' className={'header__auth-button header__auth-button_type_green'}>Войти</NavLink>
        </div>
      }
      </div>
    </header>
  )
}