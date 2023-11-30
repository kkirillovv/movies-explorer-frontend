import './SearchForm.css'
import FilterCheckbox from './FilterCheckbox/FilterCheckbox'

function SearchForm () {
  return (
		<>
		<form className="search-form" name='SearchForm' method="post">
			<label className="search-form__field">
				<input type="text" className="search-form__input" id="search-form-input" placeholder="Фильм" name="searchForm" required />
			</label>
			<button type='submit' className='search-form__button'></button>
		</form>
		<FilterCheckbox />
		</>
  )
}

export default SearchForm