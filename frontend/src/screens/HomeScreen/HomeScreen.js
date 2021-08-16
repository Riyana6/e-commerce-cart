import React from 'react'
import './HomeScreen.css'

import Product from '../../components/Product/Product'

export default function HomeScreen() {
    return (
        <div className="homescreen">
            <h2 className="homescreen__title">Latest Products</h2>
            <div className="homescreen__products">
                <Product/>
            </div>
        </div>
    )
}
