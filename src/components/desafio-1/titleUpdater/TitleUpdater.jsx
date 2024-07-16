import { useState } from "react";
import './TitleUpdater.css'

function TitleUpdater(){
  const [count, setCount] = useState(0)


  return(
    <>
      <head>
        <title>Clicou {count}</title>
      </head>
      <main className="main-desafio-1">
        <fieldset>
        <p>Desafio 1 - Exercicio 1</p>
          <h1>Você clicou, então o contador mudou para {count}</h1>
          <button className="btn-desafio-1" onClick={()=> setCount(count + 1)}>Aumentando</button>
          <button className="btn-desafio-1" onClick={()=> setCount(count - 1)}>Reduzindo</button>
        </fieldset>
      </main>
    </>
  )
}

export default TitleUpdater