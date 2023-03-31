import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import './Cart.css'

const Cart = ({handleTime, time, handleTitle, title}) => {
    console.log(title)
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
            <Details cart ={cart} handleTime={handleTime} handleTitle={handleTitle} title={title}></Details>
            </div>
            <div className='sidebar'>
            <h5 className='spend-time'>Spent time on read: <span>{totalTime}</span></h5>
            <div>
            <h4>BookMarked Blogs:  </h4>
            <p ><span >{title}</span></p>
            <br />
            </div>
            </div>
        </div>
    );
};

export default Cart;