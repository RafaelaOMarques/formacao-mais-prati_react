import axios from "axios";
import { useState } from "react";

function DeleteUser(){

  const [id, setId] = useState('')
  const deleteUser = ()=>{
    axios.delete(`https://reqres.in/api/users/${id}`)
    .then(response =>{
      console.log('Usuário deletado com sucesso ', response.status)
      alert('Usuário deletado com sucesso ' + response.status)
    })

    .catch(error =>{
      console.error('Não existe usuário com id informado ', error)
      alert('Não existe usuário com id informado ')
    })
  }

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return(
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Id Usuário
          <input type="number" name="id" value={id} onChange={handleChange}/>
        </label>
      </form>
      <button onClick={deleteUser}>Deletar Usuário</button>
    </>
  )
}

export default DeleteUser