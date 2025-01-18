import React from 'react'
import './stylesheets/ProductTab.css'
import Product from './product'

const ProductTab = () => {
  return (
    <>
      <div className='product-section' >
        <Product title="Logitech Mouse" idx={0}/>
        <Product title="Apple Pencil (Pro 2)" idx={1}/>
        <Product title="Keyboard" idx={2}/>
        <Product title="Air Buds" idx={3}/>
      </div>
    </>
    
    
  )
}

export default ProductTab