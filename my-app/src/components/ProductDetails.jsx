import React from 'react'
import './css/Product.css'
import { useNavigate, useParams } from 'react-router-dom'




const ProductDetails = ({product}) => {
    const {title, price,thumbnail, category} = product
    const { id } = useParams()
    const navigate = useNavigate()

    const handleProductPage = () =>{
      navigate(`/${id}`)
    }


  return (
    <div className='cart-list' onClick={handleProductPage}>
      <img src={thumbnail} alt="" />
      <h2>{title}</h2>
      <p>Category: <span>{category}</span></p>
      <p>Price: <span>{price}$</span></p>
      <button>Add To Cart</button>
    </div>
  )
}

export default ProductDetails
