import React from 'react'
import {useCartContext} from '../Carrito/CartContext'
import ItemCart from './ItemCart'

const Cart = () => {
    const {cart}=useCartContext()
    
    if(cart.length===0)
  {
    return (<>
    <div>Carrito vacio</div></>
  )}
  else {return (
 <>{cart.map(product=><ItemCart key={product.id} product={product}/>)}
 </>)
}}

export default Cart