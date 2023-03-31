import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import './Cart.css'
import Blog from '../Blog/Blog';

const Cart = ({ handleTime, time, handleTitle, title, bookmark }) => {
    // console.log(title)
    const [cart, setCart] = useState([])
    const [totalTime, setTotalTime] = useState(time)

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setCart(data))
    }, [])
    useEffect(() => {
        const totalTimes = localStorage.getItem('totalTime')
        setTotalTime(totalTimes);
    }, [time])

    return (
        <div className='cart-container'>
            <div className='col'>
                <Details cart={cart} handleTime={handleTime} key={cart.id} handleTitle={handleTitle} title={title}></Details>
            </div>
            <div className='sidebar'>
                <h5 className='spend-time'>Spent time on read: <span>{totalTime}</span></h5>
                <div >
                    <h4 style={{ color: 'black' }}>BookMarked Blogs: {bookmark} </h4>
                    <p style={{ backgroundColor: 'aliceblue', color: 'black', paddingBottom: '10px' }}><span >{title}</span></p>
                </div>
            </div>
            <Blog></Blog>
        </div>
    );
};

export default Cart;