import React from 'react'
import './css/Product.css'




const ProductDetails = ({product}) => {
    const {title, price,thumbnail, category} = product


  return (
    <div className='cart-list'>
      <img src={thumbnail} alt="" />
      <h2>{title}</h2>
      <p>Category: <span>{category}</span></p>
      <p>Price: <span>{price}$</span></p>
      <button>Add To Cart</button>
    </div>
  )
}

export default ProductDetails
