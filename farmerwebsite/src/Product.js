import React from 'react'
import './Product.css'

function Product({name,price,rating,description,img}) {
    return (
        <div>
            <div className='layout1'>
            <div>
                <img id='img' src={img}></img>
            </div>
            <div className='layout2'>
                <h2>{name}</h2>
                <h2>{price}</h2>
                <h3>{rating}</h3>
                <h4>{description}</h4>
                <button>Add to cart</button>
            </div>
            </div>
        </div>
    )
}

export default Product
