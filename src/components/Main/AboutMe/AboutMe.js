import './AboutMe.css'
import { HashLink as Link } from 'react-router-hash-link'

export default function AboutMe() {
  return(
    <section className='about-me' id='iam'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__container'>
        <div className='about-me__info'>
          <h3 className='about-me__name'>Алексей</h3>
          <h4 className='about-me__activity'>Фронтенд-разработчик, 26 лет</h4>
          <p className='about-me__description'>Родился в Томске. Имею образование и работаю по специальности инженер-конструктор химических и ядерных производств. О смене направления специальности в сторону IT задумался достаточно давно, подумал, что сейчас самое время! Так же я занимаюсь музыкой и очень люблю сноубординг.</p>
          <Link to='https://github.com/kkirillovv' className='about-me__link' target='_blank'>Github</Link>
        </div>
        <div className='about-me__photo'></div>
      </div>
    </section>
  )
}