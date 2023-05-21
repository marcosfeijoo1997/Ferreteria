
import './App.css';
import Category from './Componentes/Body/Category';
import Navbar from './Componentes/Navbar/Navbar';
import { BrowserRouter, Routes,Route,Router } from 'react-router-dom';
import Footer from './Componentes/Footer/Footer'
import CategoryList from './Componentes/Body/CategoryList';



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
