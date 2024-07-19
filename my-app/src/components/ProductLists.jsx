import React from 'react'
import ProductDetails from './ProductDetails'
import './css/Product.css'
import { Link } from 'react-router-dom'


const ProductLists = ({ products }) => {



  return (
    <div className='cart-flex'>
      {products.map((product) => (
        <Link to={`/${product.id}`} className='link'>
          <ProductDetails key={product.id} product={product} />
        </Link>
      ))}
    </div>
  )
}

export default ProductLists
