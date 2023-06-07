import React from 'react'
import { useCartContext } from './CartContext';
import ItemCart from './ItemCart'
import './Cart.css'
import { NavLink } from "react-router-dom";

const Cart = () => {
    const {cart,clearCart}=useCartContext()
    
    if(cart.length===0)
  {
    return (<>
    <div>Carrito vacio</div></>
  )}
  else {return (
 <div> 
 <div className='CartContainer'>
 <div className='Productos'>
   <p className='Head'>Producto</p>
   </div>
 <div><p className='Head'>Precio</p></div>
 <div><p className='Head'>Cantidad</p></div>
 <div><p className='Head'> Subtotal</p></div>

 </div>
{cart.map(product=><ItemCart key={product.id} product={product}/>)
 }
 <div className='Cart'>
<p className='centrar ' onClick={()=> clearCart()}>Borrar todo</p>
<NavLink to="/" style={{ textDecoration: 'none' }}>
<p className='centrar'>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left " viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>Seguir comprando</p></NavLink>

 </div>
 
  
 </div>)
}}

export default Cart