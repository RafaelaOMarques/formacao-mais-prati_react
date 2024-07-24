import { createContext, useContext } from "react";

export const MyContext = createContext()



export const MyProvider = (props) =>{
  return(
    <MyContext.Provider value={{ name: 'Rafaela'}}>
      {props.children}
    </MyContext.Provider>
  )
} 
 