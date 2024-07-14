import { useState } from 'react'
import "./NavegacaoAbas.css"

const conteudos = [
  [
    "conteudo 1", "conteudo 2", "conteudo 3"
  ],
  [
      "conteudo 4", "conteudo 5", "conteudo 6"
  ],
  [
      "conteudo 7", "conteudo 8", "conteudo 9"
  ]
]
function NavegacaoAbas(){
  const [atual, setState] = useState(0)
  
  return(
 <>
    <div>
      <header>
        <img src="" alt="" />
        <h1> +PraTI - React.js</h1>
        <p>Exercício sobre UseState</p>
      </header>
    </div>
    <div id="abas">
      <nav className="menu">
        <button className={atual === 0 ? "active" : ''} onClick={()=> setState(0)}>Aba 1</button>
        <button className={atual === 1 ? "active" : ''} onClick={()=> setState(1)}>Aba 2</button>
        <button className={atual === 2 ? "active" : ''} onClick={()=> setState(2)}>Aba 3</button>
      </nav>
    </div>
    <div id="conteudo">
      <ul>
        {conteudos[atual].map((item) =>(
          <li className="active" key={item}>{item}</li>
        ))}
      </ul>
    </div>
 </>
  )

}

export default NavegacaoAbas