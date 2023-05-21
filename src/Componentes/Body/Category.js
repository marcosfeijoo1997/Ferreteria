import React,{useEffect,useState} from "react"
import { useParams } from "react-router-dom"
import {getFirestore,collection,getDocs, DocumentSnapshot,where,query} from 'firebase/firestore'
import './Categoria.css' 
import CategoryList from "./CategoryList"


const Category=()=>{
    const [products,setProducts]=useState([]);
    const {categoriaId}=useParams()
    const {subCategoriaId}=useParams()

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
        setProducts(ArrProducts)})}/*
        
        if (subCategoriaId){
        
            const q=query(itemsCollection,where("ubcategoria","==",subCategoriaId))
            getDocs(q).then((snapshot)=>{
            const ArrProducts=snapshot.docs.map((doc)=>({
                id:doc.id,
                ...doc.data(),
            }));
            setProducts(ArrProducts)})}*/
else {
return (console.log('no tengo categoria'))
}
      
},[categoriaId]);
return (<div className="Container"><div className="Category-container"><CategoryList/></div><div className="Card-container"> {products.map(products=>
<div className="Card" key={products.id}>
  
<img src={products.Imagen}/>


    <span>{products.Titulo}</span>

  <br/>
    <span className="Precio"> ${products.Precio},00</span>
    

    </div>
    )}</div></div> );
}
  


export default Category