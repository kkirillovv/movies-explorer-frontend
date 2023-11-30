import './NavTab.css'
import { HashLink as Link } from 'react-router-hash-link'

function NavTab() {
  return(
    <section className='nav-tab'>
      <Link to="/#about" className='nav-tab__link'>О проекте</Link>
      <Link to="/#techs" className='nav-tab__link'>Технологии</Link>
      <Link to="/#iam" className='nav-tab__link'>Студент</Link>
    </section>
  )
}

export default NavTab