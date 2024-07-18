import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductLists from './ProductLists'

const ProductApp = () => {
    const [product, setProduct] = useState([])
    useEffect(()=>{
        const fetchData = async () => {
            const url = 'https://dummyjson.com/products';
            const response = await fetch(url);
            const result = await response.json()
            setProduct(result.products)
        }
        
        fetchData()
    })
  return (
    <div>
      <ProductLists products={product}/>
    </div>
  )
}

export default ProductApp
