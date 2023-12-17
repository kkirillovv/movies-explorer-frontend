import {useState} from 'react'
import './SearchForm.css'
import FilterCheckbox from './FilterCheckbox/FilterCheckbox'
// import { UseFormAndValidation } from '../../../hooks/useFormAndValidation'

export default function SearchForm ({ handleSubmit, error }) {

  // const {values, handleChange, errors} = UseFormAndValidation({movie: `${localStorage.getItem('searchFilms') || ""}`})
  const [ value, setValues] = useState(localStorage.getItem('searchFilms') || "")

  function handleChange (e) {
    const value = e.target.value
    setValues(value)
  }

  return (
		<>
		<form className="search-form" name='SearchForm' id='SearchForm' method="post" onSubmit={ handleSubmit }>
			<label className="search-form__field">
				<input type="text" name="movie" value={value || ""} onChange={handleChange} className="search-form__input" placeholder="Фильм" id="search-form-input"/>
     		<span className={`auth-page__input-error search-form-input-error ${error && "auth-page__input-error_active"}`}>{error || ""}</span>
			</label>
			<button type='submit' className='search-form__button'></button>
		</form>
		<FilterCheckbox />
		</>
  )
}