//Elemento en navbar

import React from 'react'
import { useCartContext } from './CartContext'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Cart.css'

const CartWidget = () => {
    const {totalProducts,totalPrice}=useCartContext();
  return (
    <div className='cartWidgetStyle'>
            <i class="bi bi-cart3" style={{'font-size':'30px'}}>   </i>
            <span>{totalProducts() || ""}</span>
   
       
 </div>
  )
}

export default CartWidget