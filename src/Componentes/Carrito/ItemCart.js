import React from 'react'

const ItemCart = ({product}) => {
  return (<div className='cardDetail'>
    <div>{product.titulo}</div>
    <img src={product.imagen}/>
    </div>
  )
}

export default ItemCart