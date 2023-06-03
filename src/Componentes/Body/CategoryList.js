import './Categoria.css'

const CategoryList=()=>{
    return (<div className='Filtros'>
        <h3>Marcas</h3>
        <select>
            <option>Cualquier Marca</option>
            <option>Marca 1</option>
            <option>Marca 2</option>
            <option>Marca 3</option>
        </select>
        <hr/>
      
      <h3>Precio</h3>
<input className='filtro-precio' placeholder='Precio mínimo'></input>-
<input className='filtro-precio' placeholder='Precio máximo'></input>
<hr/>
<h3>Ordenar por</h3>
<select> 
    <option>Predeterminado</option>
    <option>Menor precio</option>
    <option>Mayor precio</option>
</select>



    </div>)
}
export default CategoryList