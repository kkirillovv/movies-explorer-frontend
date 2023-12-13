import './Footer.css'

export default function Footer() {
  return(
    <footer className='footer'>
      <p className='footer__text footer__text_grey'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__conteiner'>
        <div className='footer__content footer__content_copyright'>
          <p className='footer__text'>© 2023</p>          
        </div>
        <div className='footer__content footer__content_links'>
          <p className='footer__text'>Яндекс.Практикум</p>
          <p className='footer__text'>Github</p>
        </div>
      </div>
    </footer>
  )
}