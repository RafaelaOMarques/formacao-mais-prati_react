import axios from "axios";

function PutUser(){
  const userData = {
    user: 'Rafaela',
    job: 'Estudante'
  }

  const sendRequest = ()=>{
    axios.put('https://reqres.in/api/users/2', userData)
    .then(response =>{
      console.log('Usuário atualizado: ', response.data.user)
      alert(`Usuário atualizado: ` + JSON.stringify(response.data))
    })
    .catch(error =>{
      console.error(`Erro ao tentar atualizar usuário.`, error )
      alert(`Error ao tentar atualizar dados do usuário.`)
    })
  }

  return(
    <button onClick={sendRequest}>Atualizar dados</button>
  )
}

export default PutUser