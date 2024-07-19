import React from 'react'
import ProductDetails from './ProductDetails'
import './css/Product.css'

const ProductLists = ({products}) => {
  return (
    <div className='cart-flex'>
      {products.map((product)=>(
        <ProductDetails key={product.id} product={product}/>
      ))}
    </div>
  )
}

export default ProductLists
