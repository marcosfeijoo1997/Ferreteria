import React,{useEffect,useState} from "react"
import { Link, useParams } from "react-router-dom"
import {getFirestore,collection,getDocs, DocumentSnapshot,where,query} from 'firebase/firestore'
import './Categoria.css' 


const Category=()=>{
    const [products,setProducts]=useState([]);
    const {categoriaId}=useParams()

    useEffect(()=>{
        const db=getFirestore();
        const itemsCollection=collection(db,'Ferreteria');

        if (categoriaId){
        
        const q=query(itemsCollection,where("Categoria","==",categoriaId))
        getDocs(q).then((snapshot)=>{
        const ArrProducts=snapshot.docs.map((doc)=>({
            id:doc.id,
            ...doc.data(),
        }));
        setProducts(ArrProducts)})}
else 
return (<div>cargando...</div>)
   
      
},[categoriaId]);
return <div className="Card-container"> {products.map(products=>
<div className="Card" key={products.id}>
<img src={products.Imagen}/><ul>


    <a>{products.Titulo}</a>

  <br/>
    <a className="Precio"> ${products.Precio}</a>
    
    </ul>
    </div>
    )}</div> ;
}
  


export default Category