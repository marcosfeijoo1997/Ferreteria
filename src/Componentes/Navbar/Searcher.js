import React from 'react'
import { useState } from 'react'

const Searcher = ({setSearch}) => {
    const [valorInput,setValorInput]=useState("")
    const filtrar=(e)=>{
      const inputValue=e.target.value
        setValorInput(inputValue)
        setSearch(inputValue)
       
    

    }
    

  return (
    <div><input placeholder='buscar productos' value={valorInput} onChange={filtrar} /></div>
  )
}

export default Searcher