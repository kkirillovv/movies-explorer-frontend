import './FilterCheckbox.css'

export default function FilterCheckbox () {

  const shortFilm = localStorage.getItem('shortFilm')

  return (
		<div className='filter-checkbox'>
			<label htmlFor="short-films">
				<input type="checkbox" name="shortfilms" className="filter-checkbox__switch" id="short-films" form="SearchForm" value="shortfilms" checked={shortFilm} />
				<span className="filter-checkbox__psevdo-switch filter-checkbox__psevdo-switch_type_checkbox"></span><span className="filter-checkbox__text">Короткометражки</span>
			</label>
		</div>
  )
}