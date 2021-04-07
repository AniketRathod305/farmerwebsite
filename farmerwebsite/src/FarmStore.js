import React from 'react'
import Product from './Product'
import './Product.css'


function FarmStore() {
    return (
        <div id='final'>
            <Product name='acrobat insecticide' price='Rs.300' rating='*****' description='insecticide to protect crops' img='https://cdn.shopify.com/s/files/1/0722/2059/products/Acrobat_200x.jpg?v=1607507891' />
            <Product name='benevia fungicide' price='Rs.600' rating='****' description='fungicide to protect crops' img='https://cdn.shopify.com/s/files/1/0722/2059/products/BENEVIA-INSECTICIDE_200x.jpg?v=1601730131' />
            <Product name='round up herbicide' price='Rs.800' rating='*****' description='herbicide to protect crops' img='https://cdn.shopify.com/s/files/1/0722/2059/products/ROUNDUP-HERBICIDE_720x.jpg?v=1601734266' />
            <Product name='v-bind viricide' price='Rs.500' rating='****' description='viricide to protect crops' img='https://cdn.shopify.com/s/files/1/0722/2059/products/V-BIND_720x.jpg?v=1601735427' />
            <Product name='yellakai banana saplings' price='Rs.300' rating='*****' description='banana saplings' img='https://cdn.shopify.com/s/files/1/0722/2059/products/banana_sapling2_720x.jpg?v=1601735647' />
        </div>
    )
}

export default FarmStore
