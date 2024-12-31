import React from 'react'
import SignOut from 'next-auth'
import useSession from "next-auth"

export const userProfile = async() => {
  const {data:session} = useSession()
  

  return (
    <div>
        <div>
            <h1>Profil de <span>{session?.user?.name}</span></h1>
        </div>

        <div>
            <h3>mail: <span>{session?.user?.email}</span></h3>
        </div>

        <div>
            <h3>adresse: <span>{session?.user?.address}</span></h3>
        </div>

        <button onClick={SignOut()}>Déconnexion</button>
    </div>
  )
}
