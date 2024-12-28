
import './Navbar.css'

import {NavLink,Link} from 'react-router-dom';
import Carrousel from './Carrousel';
import CartWidget from '../Carrito/CartWidget';
import Searcher from './Searcher';
import { useSearchContext } from './SearchContext';
import { useState } from 'react';
import imagen from '../../Assets/logo_ferreteria-removebg-preview.png'



const Navbar = () => {
const {setSearch}=useSearchContext()

  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleButtonClick = (menuNumber) => {
    setSelectedMenu(menuNumber);
    if (menuNumber===selectedMenu){
   setSelectedMenu(null)
    }
  };






    return (
        <div className="Navbar">
            <div className="PrimerBar">
                        
<nav role="navigation" className='navigation'>
    <div id="menuToggle">
    <input type="checkbox" />
  

    
 
    <span></span>

    <span></span>
    <span></span>
    
  
    <ul id="menu" className='menu'>
    <div className="dropdown elemento-desplegable">
                                  <NavLink to="/Category/ferreteria">
  <button  className='dropdown-toggle' onClick={() => handleButtonClick(1)} >
Ferreteria
  </button>
  
  </NavLink>
  {selectedMenu === 1 && (
  
  <div aria-labelledby="dropdownMenuButton">
      
  <Link to="/Category/ferreteria/bocallaves"><p className="dropdown-item">Set de bocallaves</p></Link>
  <Link to="/Category/ferreteria/alambres"><p className="dropdown-item">Alambres</p></Link>
  <Link to="/Category/ferreteria/mechas"><p className="dropdown-item">Mechas</p></Link>

  </div>)}
</div>

<div className="dropdown">
                        <NavLink to="/Category/maquinas">
               
  <button className='dropdown-toggle' onClick={() => handleButtonClick(2)}>
Máquinas
  </button>  </NavLink>
  {selectedMenu === 2 && (
    <div  aria-labelledby="dropdownMenuButton">
    <Link to="/Category/maquinas/taladros" className='Link'> <p className="dropdown-item" href="#">Taladros</p></Link>
  <Link to="/Category/maquinas/amoladoras">    <p className="dropdown-item" href="#">Amoladoras</p></Link>
  <Link to="/Category/maquinas/soldadoras">  <p className="dropdown-item" href="#">Soldadoras</p></Link>
  </div>)}

                      </div>
                      <div className="dropdown">
                    
                    <NavLink to="/Category/electricidad">
               
                  
<button className="dropdown-toggle" onClick={() => handleButtonClick(3)}>
Electricidad
</button>     </NavLink>  {selectedMenu === 3 && (

<div aria-labelledby="dropdownMenuButton">
<Link to="/Category/electricidad/tomas">  <p className="dropdown-item" href="#">Tomas</p></Link>
<Link to="/Category/electricidad/cables"> <p className="dropdown-item" href="#">Cables</p></Link>
<Link to="/Category/electricidad/luces">   <p className="dropdown-item" href="#">Luces</p></Link>
</div>
  )     }   


               
                    </div>
                              <div className="dropdown">
                
                <NavLink to="/Category/pinturas">
        
<button className="dropdown-toggle" onClick={() => handleButtonClick(4)}>
Pintureria
</button>       </NavLink>
{selectedMenu===4&&(
<div aria-labelledby="dropdownMenuButton">
<p className="dropdown-item" href="#">Esmaltes sinteticos</p>
<p className="dropdown-item" href="#">Pinturas latex</p>
<p className="dropdown-item" href="#">Barnices</p>
</div>)}
</div>
                  
         
<div className="dropdown">
        
                <NavLink>
          
<button className=" dropdown-toggle" onClick={() => handleButtonClick(5)}>
Seguridad
</button>       </NavLink>

{selectedMenu===5&&(
<div aria-labelledby="dropdownMenuButton">
<p className="dropdown-item" href="#">Proteccion ocular</p>
<p className="dropdown-item" href="#">Indumentaria</p>

</div>)}
</div>
                
    
    </ul>
  </div>
</nav>
              
                <NavLink className='logo' to='/'>
              <div className='logo'>
                <img src={imagen}/></div></NavLink>
           
             <Searcher  setSearch={setSearch}/>
         
      <NavLink to='/Cart'className="CartIcon">
                <div className='cartStyle'>
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
