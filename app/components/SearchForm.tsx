import React from 'react'
import Form from "next/form"

export const SearchForm = () => {
  const query=""
  const reset = () => {
    document.querySelector(".search-form") as HTMLFormElement

    if(form) form.reset()
  }
  return (
    <Form action="/" scroll={false} className="search-form">
        <input 
            name='query'
            defaultValue=""
            placeholder='Que chercher vous ?'
        />

        <div className='flex gap-2'>
            {query && (
                <button type='reset' onClick={reset}></button>
            )} :""
        </div>
    </Form>
  )
}
