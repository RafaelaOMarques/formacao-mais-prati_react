import {useState} from 'react'
import './ToggleText.css'

function ToggleText(){

  const [visible, setVisible] = useState()
  const text = "Agora você me vê hahahahahahaha"

  return(
    <>
      <fieldset>
      <p>Desafio 1 - Exercicio 5</p>
      <div>{visible ? text : null}</div>
      <button className='alternar' onClick={()=>setVisible(!visible)}>Alternar</button>
      </fieldset>
    
    </>
  )

}

export default ToggleText