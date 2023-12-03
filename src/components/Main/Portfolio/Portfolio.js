import './Portfolio.css'
import { HashLink as Link } from 'react-router-hash-link'

export default function Portfolio() {
  return(
    <section className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <div className='portfolio__items'>
        <Link to='https://github.com/kkirillovv/how-to-learn' target='_blank' className='portfolio__item'>
          <div className='portfolio__item-name'>Статичный сайт</div>
          <p className='portfolio__item-icon'>↗</p>
        </Link>
        <Link to='https://github.com/kkirillovv/russian-travel' target='_blank' className='portfolio__item'>
          <div className='portfolio__item-name'>Адаптивный сайт</div>
          <p className='portfolio__item-icon'>↗</p>
        </Link>
        <Link to='https://github.com/kkirillovv/mesto' target='_blank' className='portfolio__item'>
          <div className='portfolio__item-name'>Одностраничное приложение</div>
          <p className='portfolio__item-icon'>↗</p>
        </Link>
      </div>
    </section>
  )
}