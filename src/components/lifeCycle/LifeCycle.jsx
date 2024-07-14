import { useState, useEffect } from "react";
import './../timer/TimerComponent.css'

function TimerLifeComponent(){
  const [count, setCount] = useState(0)

  useEffect(()=>{
    const timerId = setInterval(()=>{
      setCount(prevCount=> prevCount + 1)
    }, 1000)
    return ()=>{
      clearInterval(timerId)
      console.log('Timer foi limpo')
    }
  }, [count])

  return <h1 className="timer">{count}</h1>
}

export default TimerLifeComponent