import React, { useEffect, useState } from 'react'
import ProductLists from './ProductLists'
import './css/Product.css'
import { BiSearch } from 'react-icons/bi'
import ProductNavbar from './ProductNavbar'

const ProductApp = () => {
  const [product, setProduct] = useState([])
  const [search, setSearch] = useState('')
  const [cart, setCart] = useState([])


  const fetchData = async () => {
    if (search) {
      const url = `https://dummyjson.com/products/search?q=${search}`
      const response = await fetch(url);
      const result = await response.json()
      setProduct(result.products)
    }
    else {
      const url = 'https://dummyjson.com/products';
      const response = await fetch(url)
      const result = await response.json()
      setProduct(result.products)




    }
  }
  useEffect(() => {
    fetchData()
  }, [search])



  const onChange = (e) => {
    setSearch(e.target.value)
  }
  const handleClick = (product) => {
    setCart([...cart, product])
  }

  return (
    <div>
      <ProductNavbar cart={cart.length}/>
      <div className='search-box'>
        <form>
          <input type="text"
            placeholder='Enter Your Product Name'
            onChange={onChange}
          />
          <BiSearch className='search-logo'/>
        </form>
      </div>
        {(product =='')?(
          <div>
            <h2>Data Is Fetching, Please Wait, Or Try Again!</h2>
          </div>
        ):(
          <ProductLists products={product} numberShow={handleClick}/>

        )}
    </div>
  )
}

export default ProductApp
