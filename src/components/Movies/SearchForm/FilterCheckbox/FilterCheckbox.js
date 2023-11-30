import './FilterCheckbox.css'

export default function FilterCheckbox () {
  return (
		<div className='filter-checkbox'>
			<label htmlFor="short-films">
				<input type="checkbox" name="short-films" className="filter-checkbox__switch" id="short-films" value="Короткометражки" defaultChecked />
				<span className="filter-checkbox__psevdo-switch filter-checkbox__pseudo_type_checkbox"></span><span className="filter-checkbox__text">Короткометражки</span>
			</label>
		</div>
  )
}