import React from 'react'
import Link from 'next/link'
import useSession from "next-auth"
import SignIn from "next-auth"
import SignOut from "next-auth"

export const Header = () => {
    const [session, loading] = useSession()
  return (
    <div className='bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 bg-cover'>
      <h1 className='text-gray-400 font-serif text-center'>
        Metalibaba 
      </h1>
      <nav className='hidden sticky flex-row justify-around mt-2 sm:flex'>
        <Link href={"/"} className ="text-gray-100 font-serif text-xl">Accueil</Link>

        {!loading && !session && (
          <li>
          <Link href="/api/auth/signin">
            <a onClick={e => {
              e.preventDefault()
              SignIn()
            }}>Connexion</a>
          </Link>
        </li>
        )}
      
        {session && (
          <li>
            <Link href="/api/auth/signout">
              <a onClick={e => {
                e.preventDefault()
                SignOut()
              }}>Déconnexion</a>
            </Link>
          </li>
        )}

        
      </nav>
    </div>
  )
}
