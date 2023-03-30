import React from 'react';
import SingleCart from '../SingleCart/SingleCart';
import './Details.css'

const Details = ({ cart }) => {
    // console.log(cart)
    return (
        <div>
            {
                cart.map(singleData => <SingleCart singleData ={singleData} key={singleData.id}></SingleCart>)
            }
        </div>
    );
};

export default Details;