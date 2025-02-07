import React, { useState } from 'react'
import Link from 'next/link'
import { Squash as Hamburger } from 'hamburger-react'
import { auth, signOut, signIn } from '@/auth'
import { SearchForm } from './SearchForm'
import * as ReactModal from "react-modal"
import { RegisterModal } from './registerModal'

export const Header = async() => {
    const session = await auth()
    const [hamburger, setHamburger] = useState(false)
    const [inscriptionModal, setInscriptionModal] = useState(false)
    
    const switchInscription = () => {
      setInscriptionModal(!inscriptionModal) 
    }

  return (
    <div className='bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 bg-cover'>
      <h1 className='text-gray-400 font-serif text-center'>
        Metalibaba 
      </h1>
      <nav className='hidden sticky flex-row justify-around mt-2 sm:flex'>
        <Link href={"/"} className ="text-gray-100 font-serif text-xl">Accueil</Link>

        { !session && !session?.user ? (
          <li>         
            <form action={async() => {
              "use server"
              await signIn()}
            }><button type='submit'>Connexion</button></form> 
            <span onClick={switchInscription}>S'inscrire</span>          
          </li>
        ):
        (
          <>
            <li>
              <form action={async() => {
                "use server"
                await signOut()
              }}><button type='submit'></button></form>

              <Link href={`/user/${session.id}`}>
              <span>{session?.user?.name}</span>
              </Link>            
            </li>

            {inscriptionModal ? (
              <ReactModal ariaHideApp={false} className= "max-w-[100%] p-2"
              shouldCloseOnOverlayClick={true}
              shouldCloseOnEsc={true} isOpen={inscriptionModal ? true : false}>
                <span className='bg-slate-50 py-2 px-4 mx-[75%] mt-[20%] rounded-md cursor-pointer'
                onClick={switchInscription}>
                  X
                </span>
                <RegisterModal/>
              </ReactModal>
            ) : ""}          
          </>
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

            {!session && session?.user ? (
              <li>
                  <form action={async() => {
                    "use server"
                    await signIn()}
                  }><button type='submit'>Connexion</button></form>           
              </li>
            ): (
              <li>                
                  <form action={signOut()}><button type='submit'></button></form>

                  <Link href={`/user/${session.id}`}>
                    <span>{session?.user?.name}</span>
                  </Link>               
              </li>
              )}             
        </nav>
      ):""}
    </div>
  )
}
