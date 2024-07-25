import { useState } from "react";

function Login(){
  return(
    <>
      <fieldset>
        <h1>Logar</h1>
        <forms>
          <label>Usuário:
            <input type="text" name="name" />
          </label>
          <label>Senha:
            <input type="text" name="job" />
          </label>
          <br />
          <button>Acessar</button>
        </forms>
      </fieldset>
    
    </>
  )
}

export default Login