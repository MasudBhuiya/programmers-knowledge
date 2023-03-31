import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import './Cart.css'

const Cart = ({handleTime, time}) => {
    // console.log(time)
    const [cart, setCart] = useState([])
    const [totalTime, setTotalTime] = useState(time)
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setCart(data))
    },[])
    useEffect(()=>{
        const totalTimes = localStorage.getItem('totalTime')
        setTotalTime(totalTimes)
    },[time])
    return (
        <div className='cart-container'>
            <div>
            <Details cart ={cart} handleTime={handleTime}></Details>
            </div>
            <div className='spend-time'>
            <h5>Spent time on read: <span>{totalTime}</span></h5>
            </div>
        </div>
    );
};

export default Cart;