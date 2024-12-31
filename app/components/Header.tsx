import React, { useState } from 'react'
import Link from 'next/link'
import useSession from "next-auth"
import SignIn from "next-auth"
import SignOut from "next-auth"
import { Squash as Hamburger } from 'hamburger-react'

export const Header = () => {
    const [session, loading] = useSession()
    const [hamburger, setHamburger] = useState(second)
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

      <h2 className='flex m-3 sm:hidden sticky text-white' onClick={()=> setHamburger(!hamburger)}>
        <Hamburger/>
      </h2>

      {hamburger ? (
        <nav className='flex flex-col items-start justify-start
        ml-2 py-2  absolute border-2 border-black opacity-100 border-l-4 border-b-4
        sm:hidden rounded-s max-w-[50%] min-w-[25%]
        bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400'>
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
      ):""}
    </div>
  )
}
