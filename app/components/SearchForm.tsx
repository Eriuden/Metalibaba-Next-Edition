import React from 'react'
import Form from "next/form"
import { SearchFormReset } from './SearchFormReset'
import {Search} from "lucide-react"

export const SearchForm = (query: {query?: string}) => {
  
  return (
    <Form action="/" scroll={false} className="search-form">
        <input 
            name='query'
            defaultValue=""
            placeholder='Que chercher vous ?'
        />

        <div className='flex gap-2'>
            {query && <SearchFormReset/>}
            <button type='submit'><Search/></button>
        </div>
    </Form>
  )
}
