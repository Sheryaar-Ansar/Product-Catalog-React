import React from 'react'
import ProductDetails from './ProductDetails'
import './css/Product.css'
import { Link } from 'react-router-dom'
import ProductNavbar from './ProductNavbar'


const ProductLists = ({ products, numberShow }) => {



  return (
    <div>
      <div className='cart-flex'>
        {products.map((product) => (
          // <Link to={`/${product.id}`} className='link'>
          // </Link>
            <ProductDetails key={product.id} product={product} handleClick={numberShow} />
        ))}
      </div>
    </div>
  )
}

export default ProductLists
