import { useState } from "react"
import React from "react";
import style from "./Counter.module.css"

function Counter(){
  const [count, setCount] = useState(0);
  return(
    <div>
      <p> Você clicou {count} vezes</p>
      <button onClick={()=> setCount(count + 1 )}>Clique Aqui</button>
    </div>
  )
};

export default Counter