import {useState} from 'react'

function Forms2(){
  const [address, setAddress] = useState({
    street: '',
    city: '',
    postalCode: '',
  })

  const handleChange = (event) =>{
    const {name, value} = event.target;
    setAddress({...address, [name]:value})

  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if(!address.street || !address.city || !address.postalCode){
      alert("Necessário preencher todos os campos")
    } else {
      alert(`Endereço enviado: \nRua: ${address.street}\nCidade: ${address.city}`)
    }
  }

  return(
    <>
      <form onSubmit={handleSubmit}>

        <label>Rua
          <input type="text" name="street" onChange={handleChange}/>
        </label>
        <br />

        <label>Cidade
          <input type="text" name="city" onChange={handleChange}/>
        </label>
        <br />

        <label>CEP
          <input type="text" name="postalCode" onChange={handleChange}/>
        </label>
        <br />
        
        <button type='submit'>Submeter</button>
      </form>
    </>
  )
}

export default Forms2