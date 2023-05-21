
import './App.css';
import Category from './Componentes/Body/Category';
import Navbar from './Componentes/Navbar/Navbar';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Footer from './Componentes/Footer/Footer'




function App() {
  return (
    <div className="App">
      
    <BrowserRouter>
      <Navbar/>

      
      
   
 
        <Routes>
        <Route
						path="/Category/:categoriaId"
						element={<Category/>}
            
            
					/>
           <Route
						path="/Category/:categoriaId/:subCategoria"
						element={<Category/>}
            
            
					/>
          </Routes>


        
        
        </BrowserRouter>
        <Footer/>
      
    </div>
  );
}

export default App;
