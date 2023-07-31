import React from 'react'
import Category from './Category'
import CategoryList from './CategoryList'
import { Link } from 'react-router-dom'
import { useState,useEffect} from 'react'

const Categoryjsx = ({isLoading,products,setPriceMax,setPriceMin}) => {

  const [priceMinjsx,setPriceMinjsx]=useState('')
  const [priceMaxjsx,setPriceMaxjsx]=useState('')
  useEffect(() => {
    setPriceMax(priceMaxjsx);
    setPriceMin(priceMinjsx);

  }, [priceMaxjsx,priceMinjsx]);



  return (
    <div className="Container">
      
  
  
    <div className="Filtros-Container">
    <CategoryList setPriceMinjsx={setPriceMinjsx} setPriceMaxjsx={setPriceMaxjsx}/>
   </div>
      
      <div className="Card-container">
          {isLoading ? ( // Mostrar el cartel de carga si isLoading es true
            <div>Cargando...</div>
          ) : (
            products.map((product) => (
              <Link className="Card" key={product.id} to={`/Detalle/${product.id}`}>
                <img src={product.imagen}/>
                <span>{product.titulo}</span>
                <br />
                <span className="Precio"> ${product.precio},00</span>
            
                
              </Link>
            ))
          )}
        </div></div> 
  )
}
export default Categoryjsx