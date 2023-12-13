import './SearchForm.css'
import FilterCheckbox from './FilterCheckbox/FilterCheckbox'
import { UseFormAndValidation } from '../../../hooks/useFormAndValidation'

export default function SearchForm ({ handleSubmit }) {

	const {values, handleChange, errors} = UseFormAndValidation({name: '', email: '', password: ''})

  return (
		<>
    <form className="search-form" name='SearchForm' id='SearchForm' method="post" onSubmit={ handleSubmit }>
			<label className="search-form__field">
        <input type="text" name="movie" value={values.movie || ""} onChange={ handleChange } className="search-form__input" placeholder="Фильм" required minLength="2" maxLength="140" id="search-form-input"/>
     		<span className={`auth-page__input-error search-form-input-error ${errors.movie && "auth-page__input-error_active"}`}>{errors.movie || ""}</span>
			</label>
			<button type='submit' className='search-form__button'></button>
		</form>
		<FilterCheckbox />
		</>
  )
}