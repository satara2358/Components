import React from 'react'
import { useState } from 'react'
// comentarios de prueba para git
function AddTarea() {

  const [first, setfirst] = useState('')
  const onInputChange = (event) => {
    setfirst(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(first);
  }
  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Algo que entra a la lista'
        value={first}
        onChange={ (event) => onInputChange(event) }
      />
    </form>
    
  )
}

export default AddTarea