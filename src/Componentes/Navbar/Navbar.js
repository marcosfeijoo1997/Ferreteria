import Logo from '../../Assets/logo_ferreteria-removebg-preview.png';
import './Navbar.css'
import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import Carrousel from './Carrousel';

const Navbar = () => {
    const [
        mostrarLista,
        setMostrarLista,
    ] = useState(false);

    const toggleLista = () => {
        setMostrarLista(true);
    };
    const ocultarLista = () => {
        setMostrarLista(false);
    };

    return (
        <div className="Navbar">
            <div className="PrimerBar">
                <img src={Logo} />
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-search Lupa" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
                <input
                
                    placeholder="Buscar productos..."
                    className="Buscador"
                ></input>
                
                <div className="Cart">
                    Carrito/Precio
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        class="bi bi-cart-fill"
                        viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13
                         12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 
                         1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                </div>
            </div>
            <div className="SegundaBar">
                <ul className="Categorias">
                    <li
                        className="padre"
                        onMouseOver={
                            toggleLista
                        }
                        onMouseLeave={
                            ocultarLista
                        }
                    >
                        <NavLink to="/Category/Pinturas">
                            Ferreteria{' '}
                        </NavLink>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="black"
                            class="bi bi-caret-down-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg>
                    </li>

                    {mostrarLista && (
                        <div>
                            <ul
                                className="lista-hija"
                                onMouseOver={
                                    toggleLista
                                }
                                onMouseLeave={
                                    ocultarLista
                                }
                            >
                                <li>
                                    Set
                                    bocallaves
                                </li>
                                <li>
                                    Herramientas
                                    de
                                    mano
                                </li>
                                <li>
                                    Cajas
                                    y
                                    sets
                                    de
                                    herramientas
                                </li>
                            </ul>
                        </div>
                    )}

                    <li>
                        <NavLink to="/Category/Herramientas-manuales">
                            Maquinas{' '}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="black"
                                class="bi bi-caret-down-fill"
                                viewBox="0 0 16 16"
                            >
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Category/Herramientas-electricas">
                            Electricidad
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            Jardin y
                            pileta
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            Pinturería{' '}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="black"
                                class="bi bi-caret-down-fill"
                                viewBox="0 0 16 16"
                            >
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            Sanitarios
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            Seguridad
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            Climatizacion
                        </NavLink>
                    </li>

                    <li>
                        <NavLink>
                            Camping
                        </NavLink>
                    </li>
                    <div></div>
                </ul>
            </div>
            <Carrousel />
        </div>
    );
};
export default Navbar;
