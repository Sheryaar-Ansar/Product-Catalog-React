import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import './css/Product.css'
import ProductApp from './ProductApp';
import { Link } from 'react-router-dom';


const ProductNavbar = () => {
    return (
        <div className='nav'>
            <Link to={'/'} className='h1'> Product Catalog</Link>
            <div className="cart-logo">
                <FaShoppingCart/>
                <span>0</span>
            </div>
        </div>
    )
}

export default ProductNavbar
