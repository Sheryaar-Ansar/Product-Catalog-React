import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import './css/Product.css'
import ProductApp from './ProductApp';
import { Link } from 'react-router-dom';


const ProductNavbar = ({cart}) => {
    return (
        <div className='nav'>
            <Link to={'/'} className='h1'> Product Catalog</Link>
            <Link to={'/cartlist'} className='cart'>
                <div className="cart-logo">
                    <FaShoppingCart />
                    <span>{cart}</span>

                </div>
            </Link>
        </div>
    )
}

export default ProductNavbar
