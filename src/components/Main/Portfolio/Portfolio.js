import './Portfolio.css'

export default function Portfolio() {
  return(
    <section className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__items'>
        <li className='portfolio__item'>
          <div className='portfolio__item-name'>Статичный сайт</div>
          <p className='portfolio__item-icon'>↗</p>
        </li>
        <li className='portfolio__item'>
          <div className='portfolio__item-name'>Адаптивный сайт</div>
          <p className='portfolio__item-icon'>↗</p>
        </li>
        <li className='portfolio__item'>
          <div className='portfolio__item-name'>Одностраничное приложение</div>
          <p className='portfolio__item-icon'>↗</p>
        </li>
      </ul>
    </section>
  )
}