import React from 'react'
import { useCartContext } from './CartContext';
import ItemCart from './ItemCart'
import './Cart.css'
import { NavLink } from "react-router-dom";
import {getFirestore,addDoc,collection} from 'firebase/firestore'
import Swal from 'sweetalert2';
import { useState } from 'react';

const Cart = () => {
    const {cart,clearCart,totalPrice}=useCartContext()
    
    const [buyer, setBuyer] = useState({
      name: "",
      email: "",
      phone: "",
      address: "",
  });
   const order = {
        buyer: {
        name: buyer.name,
        email: buyer.email,
        phone: buyer.phone,
        address: buyer.address,
        },
        items: cart.map((producto) => ({
        id: producto.id,
        title: producto.titulo,
        price: producto.precio,
    
        })),
        total: totalPrice(),
    };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setBuyer((state) => ({
    ...state,
    [name]: value,
    }));
};

  const handleClick=(e)=>{
    e.preventDefault(); 
    if (!buyer.name || !buyer.email || !buyer.phone || !buyer.address) {
      Swal.fire("Por favor, complete todos los campos.");
      return;
  }
    const db=getFirestore();
    const orderCollection=collection(db,'orders');
    addDoc(orderCollection,order)
    .then(({id})=>{Swal.fire(`Su compra ${id} ha sido realizada!`)
 ;}
    )
    .catch((error) => {
      console.error("Error al enviar la orden:", error);
      Swal.fire("Hubo un error al enviar la orden. Por favor, intente nuevamente.");
  })
  }
    
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
<p className='centrar' onClick={()=> clearCart()}>Borrar todo</p>
<NavLink to="/"className='NavLink'>
<p>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left " viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>
Seguir comprando</p></NavLink>


Total:${totalPrice()},00
<div className="contenido2">
    
            <form>
            <input
                type="text"
                placeholder="Ingrese su nombre"
                name="name"
                value={buyer.name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Ingrese su email"
                value={buyer.email}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="phone"
                placeholder="Ingrese su celu"
                value={buyer.phone}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                placeholder="Ingrese su direccion"
                name="address"
                value={buyer.address}
                onChange={handleChange}
                required
            />
            <button className='emitir' onClick={handleClick}>Emitir orden de compra</button>
            </form>
        </div>

 </div>
 
  
 </div>
 )
}}

export default Cart