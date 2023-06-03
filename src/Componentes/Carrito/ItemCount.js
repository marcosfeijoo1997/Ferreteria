import React from 'react'
import { useState } from 'react'
import './Cart.css'



    export const ItemCount = ({onAdd}) => {
        const [count,setCount]=useState(1)
        const crece=()=>{setCount(count+1)}
        const decrece=()=>{setCount(count-1)}


        return (
        <div><div className='Contador'>
            <button onClick={decrece}  disabled={count <= 1}>-</button>
            <p>{count}</p>
            <button onClick={crece} disabled={count >= 5}>+</button>  
        
         
        </div><br/>
           <button className='Agregar' onClick={()=>onAdd(count)}>Agregar al carrito</button>
           </div>
      )
      
    }

  

