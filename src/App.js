
import './App.css';
import Category from './Componentes/Navbar/Category';
import Navbar from './Componentes/Navbar/Navbar';
import { BrowserRouter, Routes,Route,Router } from 'react-router-dom';
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
          </Routes>
        
        </BrowserRouter>
        <Footer/>
      
    </div>
  );
}

export default App;
