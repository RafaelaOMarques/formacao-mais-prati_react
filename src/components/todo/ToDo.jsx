import { useState } from "react"
function ToDo(){
  const [tarefas, setToDo] = useState([])
  const [inputvalue, setInputValue] = useState('')

  const addToDo = ()=>{
    setToDo([... tarefas, inputvalue])
    setInputValue('')
  }
  return(
    <div>
      <input type="text" value={inputvalue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={addToDo}>Adicionar Tarefa</button>
      <ul>
        {tarefas.map((tarefas, index) =>(
          <li key={index}>{tarefas}</li>
        ))}
      </ul>
    </div>
  )
}

export default ToDo;