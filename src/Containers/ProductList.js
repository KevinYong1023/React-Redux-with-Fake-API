import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import ProductComponent from './ProductComponent'
import axios from 'axios'
import {setProducts} from '../Redux/Actions/productActions'

export default function ProductList() {
 const products = useSelector((state) => state) 
 console.log("Products",products)

 const dispatch = useDispatch()
 
  const getProducts = async () => {
       const response = await axios.get("https://fakestoreapi.com/products")
       .catch((err)=>{
             alert("Error", err)
       })
     dispatch(setProducts(response.data));
 }

 useEffect(() =>{
      getProducts();
 },[])
      return (
            <div className="ui grid container">
                  <ProductComponent/>
            </div>
      )
}
