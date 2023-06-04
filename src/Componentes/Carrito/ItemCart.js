import React from 'react'
import { useCartContext } from './CartContext'
import './Cart.css'

const ItemCart = ({product}) => {
  const {removerProduct,quantity}=useCartContext()
  return (
 
  <div className='Container'>
   <div className='Head'>

  soy head
   </div>
   <br/>
   
   <div className='Body'>

  soy body
   </div>
   </div>
  )
}

export default ItemCart