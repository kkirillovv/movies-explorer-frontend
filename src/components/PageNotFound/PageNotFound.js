import './PageNotFound.css'
import { NavLink } from 'react-router-dom'

function PageNotFound() {
  return(
      <div className='page-not-found'>
        <h2 className='page-not-found__error'>404</h2>
        <p className='page-not-found__text'>Страница не найдена</p>
        <NavLink to='/' className={'page-not-found__link'}>Назад</NavLink>
      </div>
  )
}

export default PageNotFound