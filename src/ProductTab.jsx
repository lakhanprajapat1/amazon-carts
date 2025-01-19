import React from 'react'
import './stylesheets/ProductTab.css'
import Product from './product'

const ProductTab = () => {
  return (
    <>
      <div className='product-section' >
        <Product 
        title="Logitech Mouse" 
        src="https://i.pinimg.com/736x/24/e4/b0/24e4b0050744ef3e1e69e5cb50125195.jpg"  
        idx={0} 
        />
        <Product 
        title="Apple Pencil (Pro 2)"
        src="https://i.pinimg.com/736x/88/f1/d3/88f1d33c5f070953b04897c2729b5a50.jpg" 
        idx={1}
        />
        <Product 
        title="Keyboard" 
        src="https://i.pinimg.com/736x/76/68/2f/76682fec478ff5fdf31d0730c9316a2a.jpg" 
        idx={2}
        />
        <Product 
        title="Air Buds" 
        src="https://i.pinimg.com/736x/62/f0/12/62f01259947ea03fbf4af992ef7d0aaa.jpg" 
        idx={3}
        />
      </div>
    </>
    
    
  )
}

export default ProductTab