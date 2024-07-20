import React, { useState } from 'react'

const ProductCart = () => {
    const [cart, setCart] = useState('')
  return (
    <div>
      <h1>Add To Cart List</h1>
      <div>
        {(cart == '')?(
            <div>
                <p>Cart List Is Empty</p>
            </div>
        ):(
            <div>
                <h2>Work is in progress...</h2>
            </div>
        )}
      </div>
    </div>
  )
}

export default ProductCart
