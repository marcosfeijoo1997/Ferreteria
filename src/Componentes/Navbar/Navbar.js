import Logo from '../../Assets/logo_ferreteria-removebg-preview.png';
import './Navbar.css'
import {useState} from 'react';
import {NavLink,Link} from 'react-router-dom';
import Carrousel from './Carrousel';



const Navbar = () => {
 

    return (
        <div className="Navbar">
            <div className="PrimerBar">
                <NavLink className='logo' to='/'>
                <img src={Logo}/></NavLink>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-search Lupa" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
                <input
                
                    placeholder="Buscar productos..."
                    className="Buscador"
                ></input>
      <NavLink to='/Cart'>
                <div className="Cart">
                    Carrito/Precio         
                   
                </div></NavLink>
            </div>
            <div className="SegundaBar">
                <ul className="Categorias">
                  
                     
                                  <div className="dropdown elemento-desplegable">
                                  <NavLink to="/Category/ferreteria">
  <button className=" dropdown-toggle  menu-desplegable" >
Ferreteria
  </button>
  </NavLink>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      
  <Link to="/Category/ferreteria/bocallaves"><p className="dropdown-item">Set de bocallaves</p></Link>
  <Link to="/Category/ferreteria/alambres"><p className="dropdown-item">Alambres</p></Link>
  <Link to="/Category/ferreteria/mechas"><p className="dropdown-item">Mechas</p></Link>

  </div>
</div>
                       

                    
                 
         
                  

                
                        <NavLink to="/Category/Herramientas-manuales">
                        <div className="dropdown">
  <button className=" dropdown-toggle" >
Máquinas
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <p className="dropdown-item" href="#">Action</p>
    <p className="dropdown-item" href="#">Another action</p>
    <p className="dropdown-item" href="#">Something else here</p>
  </div>
</div>
                        </NavLink>
                    
                    
                        <NavLink to="/Category/Herramientas-electricas">
                        <div className="dropdown">
  <button className=" dropdown-toggle" >
Electricidad
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <p className="dropdown-item" href="#">Action</p>
    <p className="dropdown-item" href="#">Another action</p>
    <p className="dropdown-item" href="#">Something else here</p>
  </div>
</div>
                        </NavLink>
                    
                
                        <NavLink>
                        <div className="dropdown">
  <button className=" dropdown-toggle" >
Jardín y piletas
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <p className="dropdown-item" href="#">Action</p>
    <p className="dropdown-item" href="#">Another action</p>
    <p className="dropdown-item" href="#">Something else here</p>
    <p className="dropdown-item" href="#">Action</p>
    <p className="dropdown-item" href="#">Another action</p>
    <p className="dropdown-item" href="#">Something else here</p>
    <p className="dropdown-item" href="#">Action</p>
    <p className="dropdown-item" href="#">Another action</p>
    <p className="dropdown-item" href="#">Something else here</p>
  </div>
</div>
                        </NavLink>
                
                
                        <NavLink>
                        <div className="dropdown">
  <button className=" dropdown-toggle" >
Pintureria
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <p className="dropdown-item" href="#">Action</p>
    <p className="dropdown-item" href="#">Another action</p>
    <p className="dropdown-item" href="#">Something else here</p>
  </div>
</div>
                          
                        </NavLink>
                    
                    
                        <NavLink>
                        <div className="dropdown">
  <button className=" dropdown-toggle" >
Sanitarios
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <p className="dropdown-item" href="#">Action</p>
    <p className="dropdown-item" href="#">Another action</p>
    <p className="dropdown-item" href="#">Something else here</p>
  </div>
</div>
                        </NavLink>
                    
                
                        <NavLink>
                        <div className="dropdown">
  <button className=" dropdown-toggle" >
Seguridad
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <p className="dropdown-item" href="#">Action</p>
    <p className="dropdown-item" href="#">Another action</p>
    <p className="dropdown-item" href="#">Something else here</p>
  </div>
</div>
                        </NavLink>
                    
                
                        <NavLink>
                        <div className="dropdown">
  <button className=" dropdown-toggle" >
Climatización
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <p className="dropdown-item" href="#">Action</p>
    <p className="dropdown-item" href="#">Another action</p>
    <p className="dropdown-item" href="#">Something else here</p>
  </div>
</div>
                        </NavLink>
                    
                    
                        <NavLink>
                        <div className="dropdown">
  <button className=" dropdown-toggle" >
Camping
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <p className="dropdown-item" href="#">Action</p>
    <p className="dropdown-item" href="#">Another action</p>
    <p className="dropdown-item" href="#">Something else here</p>
  </div>
</div>
                        </NavLink>
                    
                    <div></div>
                </ul>
            </div>
            <Carrousel />
        </div>
    );
};
export default Navbar;
