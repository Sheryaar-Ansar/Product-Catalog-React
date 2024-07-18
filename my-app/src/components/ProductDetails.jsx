import React from 'react'

const ProductDetails = ({product}) => {
    const {title, price,thumbnail, category} = product
  return (
    <div>
      <img src={thumbnail} alt="" />
      <h2>{title}</h2>
      <p>Category:{category}</p>
      <p>{price}$</p>
    </div>
  )
}

export default ProductDetails
