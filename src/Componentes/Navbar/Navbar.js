import Logo from '../../Assets/logo_ferreteria-removebg-preview.png';
import './Navbar.css'

import {NavLink,Link} from 'react-router-dom';
import Carrousel from './Carrousel';
import CartWidget from '../Carrito/CartWidget';
import Searcher from './Searcher';
import { useSearchContext } from './SearchContext';



const Navbar = () => {
const {setSearch}=useSearchContext()


    return (
        <div className="Navbar">
            <div className="PrimerBar">
                <NavLink className='logo' to='/'>
                <img src={Logo}/></NavLink>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-search Lupa" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
             <Searcher  setSearch={setSearch}/>
         
      <NavLink to='/Cart'>
                <div className="Cart">
                    <CartWidget/>      
                   
                </div></NavLink>
            </div>
            <div className="SegundaBar">
                <ul className="Categorias">
                  
                     
                                  <div className="dropdown elemento-desplegable">
                                  <NavLink to="/Category/ferreteria">
  <button className="dropdown-toggle  menu-desplegable" >
Ferreteria
  </button>
  </NavLink>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      
  <Link to="/Category/ferreteria/bocallaves"><p className="dropdown-item">Set de bocallaves</p></Link>
  <Link to="/Category/ferreteria/alambres"><p className="dropdown-item">Alambres</p></Link>
  <Link to="/Category/ferreteria/mechas"><p className="dropdown-item">Mechas</p></Link>

  </div>
</div>
                       

                    
                 
         
                  

<div className="dropdown">
                        <NavLink to="/Category/maquinas">
               
  <button className=" dropdown-toggle" >
Máquinas
  </button>  </NavLink>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <Link to="/Category/maquinas/taladros" className='Link'> <p className="dropdown-item" href="#">Taladros</p></Link>
  <Link to="/Category/maquinas/amoladoras">    <p className="dropdown-item" href="#">Amoladoras</p></Link>
  <Link to="/Category/maquinas/soldadoras">  <p className="dropdown-item" href="#">Soldadoras</p></Link>
  </div>

                      </div>
                        <div className="dropdown">
                    
                        <NavLink to="/Category/electricidad">
                   
                      
  <button className=" dropdown-toggle" >
Electricidad
  </button>     </NavLink>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <Link to="/Category/electricidad/tomas">  <p className="dropdown-item" href="#">Tomas</p></Link>
  <Link to="/Category/electricidad/cables"> <p className="dropdown-item" href="#">Cables</p></Link>
  <Link to="/Category/electricidad/luces">   <p className="dropdown-item" href="#">Luces</p></Link>
  </div>
  


                   
                        </div>
                    
                
                        <div className="dropdown">
                
                        <NavLink to="/Category/pinturas">
                
  <button className=" dropdown-toggle" >
Pintureria
  </button>       </NavLink>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <p className="dropdown-item" href="#">Esmaltes sinteticos</p>
    <p className="dropdown-item" href="#">Pinturas latex</p>
    <p className="dropdown-item" href="#">Barnices</p>
  </div>
</div>
                          
                 
<div className="dropdown">
                
                        <NavLink>
                  
  <button className=" dropdown-toggle" >
Seguridad
  </button>       </NavLink>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <p className="dropdown-item" href="#">Proteccion ocular</p>
    <p className="dropdown-item" href="#">Indumentaria</p>

  </div>
</div>
                 
                    
                
                
                    
                    
                    
                
                </ul>
            </div>
            <Carrousel />
        </div>
    );
};
export default Navbar;
