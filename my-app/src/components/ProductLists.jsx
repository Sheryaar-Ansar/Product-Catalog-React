import React from 'react'
import ProductDetails from './ProductDetails'

const ProductLists = ({products}) => {
  return (
    <div>
      {products.map((product)=>(
        <ProductDetails key={product.id} product={product}/>
      ))}
    </div>
  )
}

export default ProductLists
