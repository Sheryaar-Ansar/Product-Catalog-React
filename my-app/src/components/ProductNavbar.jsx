import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import './css/Product.css'

const ProductNavbar = () => {
    return (
        <div className='nav'>
            <h1>Product Catalog</h1>
            <div className="cart-logo">
                <FaShoppingCart/>
                <span>0</span>
            </div>
        </div>
    )
}

export default ProductNavbar
