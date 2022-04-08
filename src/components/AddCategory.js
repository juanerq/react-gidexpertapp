import { useState } from "react"
import PropTypes from 'prop-types'

const AddCategory = ({setCategory}) => {

  const [inputValue, setInputValue] = useState('')

  const handleInputValue = (e) => {
    setInputValue( e.target.value )
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (inputValue.trim().length > 2) {
      setCategory( cats => [inputValue, ...cats])
      setInputValue('')
    }
  }

  return (
    <form onSubmit={ handleSubmit }>
      <p>{ inputValue }</p>
      <input 
        type='text'
        value={ inputValue }
        onChange={ handleInputValue }
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategory: PropTypes.func.isRequired
}

export default AddCategory