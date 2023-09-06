import React from 'react'
import { useCartContext } from './CartContext'
import './Cart.css'

const ItemCart = ({product,}) => {
  const {removerProduct,quantity,totalPrice}=useCartContext()
  return (
 
  <div className='CartContainerMap'>


  <div className='Productos'>
    <div onClick={() => removerProduct(product.id)}>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-circle centrar" viewBox="0 0 16 16" >
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg> </div><img src={product.imagen} alt='productImg2'></img>
    <p>{product.titulo}</p></div>
  <div><p>${product.precio},00</p></div>
  <div><p>{product.quantity}</p></div>
  <div><p>${product.quantity*product.precio},00</p></div>
  
   </div>
  )

}

export default ItemCart