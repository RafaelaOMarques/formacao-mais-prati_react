import { useState } from "react";
import axios from "axios";

function PostUser(){

  const [user, setUser] = useState({
    name: '',
    job: ''
  })

  const handleChange = (event)=>{
     const {name, value} = event.target
     setUser({
      ...user,
      [name]: value
     })
  }

  const handleSubmit = async (event) =>{
    event.preventDefault()

    try {
      const response = await axios.post('https://reqres.in/api/users', user)
      console.log(response.data)
      alert(`Usuário criado com sucesso! ID ${response.data.id}`)

    } catch (error) {
      console.log(error)
      alert(`Erro ao criar o usuário`)

    }

  }
  

  return(
    <>
      <fieldset>
        <h1>Registrar Usuário</h1>
        <form onSubmit={handleSubmit}>
          <label>Nome:
            <input type="text" name="name" value={user.name} onChange={handleChange}/>
          </label>
          <label>Profissão:
            <input type="text" name="job" value={user.job} onChange={handleChange}/>
          </label>
          <br />
          <button type="submit">Enviar</button>
        </form>
      </fieldset>
    
    </>
  )
}

export default PostUser