import React,{useEffect,useState} from "react"
import { useParams } from "react-router-dom"
import {getFirestore,collection,getDocs, DocumentSnapshot,where,query} from 'firebase/firestore'
import { Link } from "react-router-dom"
import CategoryList from "./CategoryList"
import './Categoria.css'


const Category=()=>{
    const [products,setProducts]=useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {categoriaId}=useParams()
    const {subCategoriaId}=useParams()
    
    useEffect(()=>{
        const db=getFirestore();
        const itemsCollection=collection(db,'Ferreteria');

        if (categoriaId){
        
        const q=query(itemsCollection,where("categoria","==",categoriaId))
        getDocs(q).then((snapshot)=>{
        const ArrProducts=snapshot.docs.map((doc)=>({
            id:doc.id,
            ...doc.data(),
        }));
        setProducts(ArrProducts)})
        .finally(() => {
            setIsLoading(false); // Ocultar el cartel de carga después de cargar los datos
          });}
        
        if (subCategoriaId){
        
            const q=query(itemsCollection,where("subcategoria","==",subCategoriaId))
            setIsLoading(true); 
            getDocs(q).then((snapshot)=>{
            const ArrProducts=snapshot.docs.map((doc)=>({
                id:doc.id,
                ...doc.data(),
            }));
            setProducts(ArrProducts)})}
            if (!subCategoriaId || !categoriaId) {
                getDocs(itemsCollection)
                  .then((snapshot) => {
                    const ArrProducts = snapshot.docs.map((doc) => ({
                      id: doc.id,
                      ...doc.data(),
                    }));
                    setProducts(ArrProducts);
                  })
                  .finally(() => {
                    setIsLoading(false);
                  });
              }

            

      
},[categoriaId,subCategoriaId]);
return (


<div className="Container">
  
  
  <div className="Filtros-Container">
  <CategoryList/>
 </div>
    
    <div className="Card-container">
        {isLoading ? ( // Mostrar el cartel de carga si isLoading es true
          <div>Cargando...</div>
        ) : (
          products.map((product) => (
            <Link className="Card" key={product.id} to={`/Detalle/${product.id}`}>
              <img src={product.imagen}/>
              <span>{product.titulo}</span>
              <br />
              <span className="Precio"> ${product.precio},00</span>
              
            </Link>
          ))
        )}
      </div></div> );
}
  


export default Category