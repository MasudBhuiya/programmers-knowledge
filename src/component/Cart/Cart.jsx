import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import './Cart.css'

const Cart = () => {
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setCart(data))
    },[])
    return (
        <div className='cart-container'>
            <div>
            <Details cart ={cart} ></Details>
            </div>
            <div>
            <h1>hello</h1>
            </div>
        </div>
    );
};

export default Cart;