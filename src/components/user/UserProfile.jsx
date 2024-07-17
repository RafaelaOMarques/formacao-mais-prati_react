import { useState, useEffect } from "react";
import './UserProfile.css'

function UserProfile(){
  const [user, setUser] = useState(null)
  useEffect(()=>{
    const fetchUserData = async()=>{
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/1`)
      const userData = await response.json()
      setUser(userData)
    }

    fetchUserData()

    return() => setUser(null)
  }, [])

  return(
    <div className="user-profile">
      {user ? (
        <div>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
      ) : (<p>Carregando perfil de usuário</p>) }
    </div>
  )

}

export default UserProfile