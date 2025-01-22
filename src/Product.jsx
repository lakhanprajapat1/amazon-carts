import React from 'react'
import './stylesheets/Product.css'
import Title from './Ttle'
import Image from './Image'
import Price from './Price'

export default function Product({title ,src ,idx}){
    let oldPrice= ["2999", "9999", "5990","3999"]
    let newPrice= ["1999", "8999","4799","2999"]
    let discription = ["Standart Quality ", "Best Deal", "New Arrived","Reliable"]
    return(
        <div className='product'>
            <Title title={title}/>
            <Image src={src}/>
            <p>{discription[idx]}</p>
            <Price oldPrice={<s>$ {oldPrice[idx]}</s>} newPrice={newPrice[idx]}/>
            <button className='add-cart' >Add To Cart</button>
        </div>
    )
}