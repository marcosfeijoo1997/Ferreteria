import React,{useEffect,useState} from "react"
import { useParams } from "react-router-dom"
import {getFirestore,collection,getDocs, DocumentSnapshot,where,query} from 'firebase/firestore'
import { Link } from "react-router-dom"
import './Categoria.css'
import Categoryjsx from "./Categoryjsx"
import { useSearchContext } from "../Navbar/SearchContext"



const Category=()=>{
    const [products,setProducts]=useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const {categoriaId}=useParams()
    const {subCategoriaId}=useParams()
    const {search} = useSearchContext();
    const [priceMin,setPriceMin]=useState('')
    const [priceMax,setPriceMax]=useState('')
  
    useEffect(()=>{
      
        const db=getFirestore();
        const itemsCollection=collection(db,'Ferreteria');
      
        

        if (categoriaId && subCategoriaId) {
          const q = query(
            itemsCollection,
            where("categoria", "==", categoriaId),
            where("subcategoria", "==", subCategoriaId)
          );
          setIsLoading(true);
          getDocs(q)
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
        } else if (categoriaId) {
          const q = query(itemsCollection, where("categoria", "==", categoriaId));
          setIsLoading(true);
          getDocs(q)
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
        } else if (subCategoriaId) {
          const q = query(itemsCollection, where("subcategoria", "==", subCategoriaId));
          setIsLoading(true);
          getDocs(q)
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
        } else {
          // Si no hay filtros, obtener todos los productos
          setIsLoading(true);
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
        
             if (search){
              const searchQuery = search.toLowerCase()
             
          
              
        
              const q=query(itemsCollection,where('tituloToLowerCase', '>=', searchQuery),
              where('tituloToLowerCase', '<=', searchQuery+ '\uf8ff'))
       
              getDocs(q).then((snapshot)=>{
              const ArrProducts=snapshot.docs.map((doc)=>({
                  id:doc.id,
                  ...doc.data(),
              }));
           setProducts(ArrProducts)


              })
              
            }
          
            if (priceMin)
            
              {
                const priceMintoNumber=parseFloat(priceMin)        
      
          
                const q=query(itemsCollection,where('precio', '>=',priceMintoNumber))
             
         
                getDocs(q).then((snapshot)=>{
                const ArrProducts=snapshot.docs.map((doc)=>({
                    id:doc.id,
                    ...doc.data(),
                }));
             setProducts(ArrProducts)
  
  
                })
            
                
              }
              if (priceMax)
            
              {
                const priceMaxtoNumber=parseFloat(priceMax)        
      
          
                const q=query(itemsCollection,where('precio', '<=',priceMaxtoNumber))
             
         
                getDocs(q).then((snapshot)=>{
                const ArrProducts=snapshot.docs.map((doc)=>({
                    id:doc.id,
                    ...doc.data(),
                }));
             setProducts(ArrProducts)
  
  
                })
            
                
              }
              if (priceMin&&priceMax)
            
              {
                const priceMintoNumber=parseFloat(priceMin)  
                const priceMaxtoNumber=parseFloat(priceMax)        
      
          
                const q=query(itemsCollection,
                  where('precio', '>=',priceMintoNumber),
                  where('precio', '<=',priceMaxtoNumber)  )
             
         
                getDocs(q).then((snapshot)=>{
                const ArrProducts=snapshot.docs.map((doc)=>({
                    id:doc.id,
                    ...doc.data(),
                }));
             setProducts(ArrProducts)
  
  
                })
            
                
              }
             
                  
              
           
},[categoriaId,subCategoriaId,search,priceMax,priceMin]);


return (

<div>
<Categoryjsx products={products} isLoading={isLoading} setPriceMin={setPriceMin} setPriceMax={setPriceMax}/>


</div>
);

}
  


export default Category