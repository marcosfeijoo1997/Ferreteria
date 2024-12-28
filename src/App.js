
import './App.css';
import Category from './Componentes/Body/Category';
import Navbar from './Componentes/Navbar/Navbar';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Footer from './Componentes/Footer/Footer';
import ItemDetailContainer from './Componentes/ItemDetail/ItemDetailContainer';
import CartProvider from './Componentes/Carrito/CartContext';
import Cart from './Componentes/Carrito/Cart'
import { SearchProvider } from './Componentes/Navbar/SearchContext';
import Slider from './Componentes/Slider/Slider';

function App() {
  return (
    <div className="App">
      <Slider/>
      
      
    <BrowserRouter>
    <SearchProvider>

      
  <CartProvider>
      <Navbar/>

   
 
        <Routes>
        <Route
						path="/"
						element={<Category/>}
            
            
					/>
      
        <Route
						path="/Category/:categoriaId"
						element={<Category/>}
            
            
            
					/>
            <Route
						path="/Cart"
						element={<Cart/>}
            
            
					/>
           
           <Route
						path="/Category/:categoriaId/:subCategoriaId"
						element={<Category/>}
            
            
					/>

<Route
						path="/Detalle/:detalleId"
						element={<ItemDetailContainer/>}
            
            
					/>
       
     
            
					
          </Routes>
       

          </CartProvider>
          </SearchProvider>
        
        </BrowserRouter>
        <Footer/>
      
    </div>
  );
}

export default App;
