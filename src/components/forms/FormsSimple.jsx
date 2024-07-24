import { useState } from "react";
import Forms2 from './Forms2'
import Forms3 from './Forms3'
function FormsSimple(){
  const [name, setName] = useState('')

  const handleChange = (event) =>{
    setName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`Olá ${name}`)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Nome">Nome: <input type="text" id="Nome" onChange={handleChange} value={name}/></label>
        <button type="submit">Enviar</button>
      </form>
      <Forms2/>
      <Forms3/>
    </>
  )
}

export default FormsSimple