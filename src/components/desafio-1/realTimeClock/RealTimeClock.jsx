import { useState, useEffect } from "react";
import './RealTimeClock.css'

function RealTimeClock(){
  const [timer, setTimer] = useState(new Date())

  useEffect(()=>{
    const timerId = setInterval(()=>{
      setTimer(new Date())
    }, 1000)
    return ()=>{
      clearInterval(timerId)
    }
  }, [])

  return (
    <>
    <p>Desafio 1 - Exercicio 4</p>
    <h1 className="time-real">{timer.toLocaleTimeString()}</h1>
    </>
  )
  
  
}

export default RealTimeClock