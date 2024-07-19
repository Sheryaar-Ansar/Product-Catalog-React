import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './css/Product.css'

const ProductId = () => {

  const { id } = useParams()
  const [data, setData] = useState([])

  const productApi = async () => {
    const url = `https://dummyjson.com/products/${id}`
    const response = await fetch(url)
    const result = await response.json()
    setData(result)
    console.log(result);
  }
  useEffect(() => {
    setInterval(()=>{
      productApi()
    },4000)
  }, [])

  return (

    <div className="main-wrapper">
      {(data =='') ?(
        <div>
          <h1>Loading...</h1>
        </div>
      ):(
        <div className='product-wrapper'>
        <div className="product-image">
          <img src={data.thumbnail} alt="" width={'600px'} />

        </div>
        <div className="product-info">
          <h2>{data.title}</h2>
          <p>Description: <span>{data.description}</span></p>
          <p>Brand: <span>{data.brand}</span></p>
          <p>Category: <span>{data.category}</span></p>
          <p>Minimum Orders: <span>{data.minimumOrderQuantity}</span></p>
          <p>Shipping: <span>{data.shippingInformation}</span></p>
          <p>Price: <span>{data.price}$</span></p>
          <p>SKU: <span>{data.sku}</span></p>
          <p>Stock: <span>{data.stock}</span></p>
          <p>Warranty: <span>{data.warrantyInformation}</span></p>
          <p>Availability: <span>{data.availabilityStatus}</span></p>
        </div>
      </div>
      )}


    </div>



  )
}

export default ProductId
