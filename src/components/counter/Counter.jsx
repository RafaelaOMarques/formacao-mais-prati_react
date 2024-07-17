import { useState } from "react"
import React from "react";
import "./Counter.css"

function Counter(){
  const [count, setCount] = useState(0);
  return(
    <fieldset>
      <div>
      <p>Exemplo de Contador</p>
      <p> Você clicou {count} vezes</p>
      <div className="btn">
        <button className="btn-counter"  onClick={()=> setCount(count + 1 )}>Clique Aqui</button>
      </div>
    </div>
    </fieldset>
  )
};

export default Counter