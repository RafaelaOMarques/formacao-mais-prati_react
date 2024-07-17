import { useState } from "react";
import './LimitedCounter.css'

function LimitedCounter(){
  const [counter, setCounter] = useState(0)
  const limite = 10;

  return(
    <>
      <fieldset>
        <p>Desafio 1 - Exercicio 6</p>
        <div className="buttons">
        <button className="btn" onClick={counter<10 ? ()=>setCounter(counter+1) : null}>Incrementar</button>
        <p className="contador">{counter}</p>
        <button className="btn" onClick={counter>0 ? ()=>setCounter(counter-1) : null}>Decrementar</button>
        </div>
      </fieldset>
    </>
  )
}

export default LimitedCounter