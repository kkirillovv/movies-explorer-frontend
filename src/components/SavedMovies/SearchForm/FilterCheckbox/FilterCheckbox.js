import './FilterCheckbox.css'

export default function FilterCheckbox () {
  return (
		<div className='filter-checkbox'>
			<label htmlFor="short-films">
				<input type="checkbox" name="shortfilms" className="filter-checkbox__switch" id="short-films" form="SearchForm" value="shortfilms" />
				<span className="filter-checkbox__psevdo-switch filter-checkbox__psevdo-switch_type_checkbox"></span><span className="filter-checkbox__text">Короткометражки</span>
			</label>
		</div>
  )
}