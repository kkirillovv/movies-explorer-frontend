import './AboutProject.css'

export default function AboutProject() {
  return(
    <section className='about-project' id="about">
      <h2 className='about-project__title'>О проекте</h2>
      <ul className='about-project__items'>
        <li className='about-project__item'>
          <p className='about-project__item-title'>Дипломный проект включал 5 этапов</p>
          <p className='about-project__item-subtitle'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className='about-project__item'>
          <p className='about-project__item-title'>На выполнение диплома ушло 5 недель</p>
          <p className='about-project__item-subtitle'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <div className='about-project__chart'>
        <p className='about-project__chart-text about-project__chart-text_type_green'>1 неделя</p>
        <p className='about-project__chart-text about-project__chart-text_type_grey'>4 недели</p>
        <p className='about-project__chart-subtext'>Back-end</p>
        <p className='about-project__chart-subtext'>Front-end</p>
      </div>
    </section>
  )
}