import React,{useContext, useEffect,useState} from "react"
import {ItemCount} from "../Carrito/ItemCount"
import './ItemDetail.css'
import { useCartContext } from "../Carrito/CartContext"







const ItemDetail =({product})=>{
    const [goToCart,setGotoCart]=useState(false);
    const {addProduct}=useCartContext();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      
        setTimeout(() => {
          setIsLoading(false); // Cambiar el estado de carga a falso después de un cierto tiempo
        }, 1000);},[]);

   const onAdd=(quantity)=>{setGotoCart(true);
    addProduct(product,quantity)}
    return (isLoading?(<div>cargando...</div>):(
        <div className="detailContainer">
             <img src={product.imagen}/>
        <div className="TextContainer">
        <h1>{product.titulo}</h1>
        <p>{product.descripcion}</p>
        <h2>${product.precio},00</h2>
        <ItemCount onAdd={onAdd}/></div>
        <br/>
       
        
        </div>)

    )
}
export default ItemDetail