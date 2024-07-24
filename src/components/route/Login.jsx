import { useState } from "react";

function Login(){
  return(
    <>
      <fieldset>
        <forms>
          <label>Usuário
            <input type="text" />
          </label>
          <label>Senha
            <input type="password" />
          </label>
          <button>Entrar</button>
        </forms>
      </fieldset>
    
    </>
  )
}

export default Login