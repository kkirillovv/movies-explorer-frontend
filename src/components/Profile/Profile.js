import './Profile.css'
import Header from '../Header/Header'

export default function Profile() {
  return (
		<>
			<Header />
			<main className='profile__content'>
				<h2 className='profile__title'>Привет, Виталий!</h2>
				<ul className='profile'>
					<li className='profile__elements'>
						<p className='profile__element'>Имя</p>
						<p className='profile__element'>Виталий</p>
					</li>
					<li className='profile__elements'>
						<p className='profile__element'>E-mail</p>
						<p className='profile__element'>pochta@yandex.ru</p>
					</li>
				</ul>	
				<p className='profile__link'>Редактировать</p>
				<button  type='button' className='profile__link profile__link_type_red'>Выйти из аккаунта</button>
			</main>
		</>
  )
}