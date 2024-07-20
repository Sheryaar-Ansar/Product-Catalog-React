import React from 'react'
import './css/Product.css'
import ProductCart from './ProductCart'
import { Link } from 'react-router-dom'




const ProductDetails = ({ product, handleClick }) => {
  const { title, price, thumbnail, category, id } = product


  return (
    <div className='cart-list'>
      <Link to={`/${id}`} className='link'>
      <img src={thumbnail} alt="" />
      <h2>{title}</h2>
      <p>Category: <span>{category}</span></p>
      <p>Price: <span>{price}$</span></p>
      </Link>
      <button onClick={()=>handleClick(product)}>Add To Cart</button>
    </div>
  )
}

export default ProductDetails
