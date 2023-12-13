import './Navigation.css'
import { NavLink } from 'react-router-dom'

export default function Navigation ({ statusBurger, menuOnLeft }) {
  return (
    <nav className='navigation'>
      <div className= { statusBurger ? 'navigation__menu-left-container' : 'navigation__menu-left-container navigation__menu-left-container_closed' }>
        <button className='navigation__menu-left-close-button' type='button' onClick={() =>{ menuOnLeft(false)}}></button>
          <div className='navigation__links-container'>
            <NavLink 
              to='/'
              className={({ isActive }) => (isActive ? 'navigation__link navigation__link_active' : 'navigation__link') + ' navigation__link_off'}
              onClick={() =>{ menuOnLeft(false)}}
            >Главная</NavLink>
            <NavLink 
              to='/movies'
              className={({ isActive }) => (isActive ? 'navigation__link navigation__link_active' : 'navigation__link')}
              onClick={() =>{ menuOnLeft(false)}}
            >Фильмы</NavLink>
            <NavLink 
              to='/saved-movies' 
              className={({ isActive }) => (isActive ? 'navigation__link navigation__link_active' : 'navigation__link')}
              onClick={() =>{ menuOnLeft(false)}}
            >Сохранённые фильмы</NavLink>
          </div>
          <NavLink to='/profile' className={'navigation__button-profile ' + (window.location.pathname === '/' && !statusBurger ? 'navigation__button-profile_color_darkblue' : 'navigation__button-profile_color_darkgrey') } />
      </div>
      <button className='navigation__burger-icon' type='button' onClick={() =>{ menuOnLeft(true)}}></button>
    </nav>
  )
}