import { useState } from 'react'
import './Categoria.css'

const CategoryList=({setPriceMinjsx,setPriceMaxjsx})=>{
    const [min,setMin]=useState('')
    const [max,setMax]=useState('')

    const precioMin=(e)=>{
        setMin(e.target.value)
        setPriceMinjsx(e.target.value)
        
    }
    const precioMax=(e)=>{
        setMax(e.target.value)
        setPriceMaxjsx(e.target.value)
    }
   
    return (<div className='Filtros'>
     
      <h3>Precio</h3>
      $
<input className='filtro-precio' placeholder='Mínimo' value={min} onChange={precioMin}></input>$
<input className='filtro-precio' placeholder='Máximo' value={max} onChange={precioMax}></input>
<hr/>




    </div>)
}
export default CategoryList