import { useState, useCallback } from 'react'

export function UseFormAndValidation(inputValues) {

	const [ values, setValues] = useState(inputValues)
	const [ errors, setErrors ] = useState({})
	const [ isValid, setIsValid ] = useState(true)
	const [ buttonType, setButtonType ] = useState(true)

	function isValidReg(value, type) {
    switch(type) {
      case 'name':
        return /^[A-ZА-ЯЁ\s-]+$/i.test(value)
      case 'email': 
        return /^\S+@\S+\.\S+$/i.test(value) 
      default:
        return /^[A-ZА-ЯЁ\s\S]+$/i.test(value)
    }
	}

	const handleChange = (e) => {
		const {name, value} = e.target
		setValues({...values, [name]: value })
    e.target.validationMessage  
      ? setErrors({...errors, [name]: e.target.validationMessage})
      : !isValidReg(value, name) 
        ? setErrors({...errors, [name]: 'Пожалуйста, правильно заполните поле'}) 
        : setErrors({...errors, [name]: ''})
    setIsValid(e.target.closest('form').checkValidity())
    e.target.validationMessage || !isValidReg(value, name) || JSON.stringify(values).includes('""')
      ? setButtonType(true) 
      : setButtonType(false)
	}

	const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
		setValues(newValues)
		setErrors(newErrors)
		setIsValid(newIsValid)
	}, [setValues, setErrors, setIsValid])

	return { values, handleChange, errors, buttonType, isValid, resetForm, setValues, setIsValid }
}