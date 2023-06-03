
import './App.css';
import Category from './Componentes/Body/Category';
import Navbar from './Componentes/Navbar/Navbar';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Footer from './Componentes/Footer/Footer';
import ItemDetailContainer from './Componentes/ItemDetail/ItemDetailContainer';
import CartProvider from './Componentes/Carrito/CartContext';
import Cart from './Componentes/Carrito/Cart'

function App() {
  return (
    <div className="App">
      
    <BrowserRouter>
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
        
        </BrowserRouter>
        <Footer/>
      
    </div>
  );
}

export default App;
