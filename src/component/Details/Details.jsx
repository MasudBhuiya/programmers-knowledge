import React from 'react';
import SingleCart from '../SingleCart/SingleCart';


const Details = ({ cart, handleTime }) => {
    // console.log(handleTime)
    return (
        <div>
            {
                cart.map(singleData => <SingleCart singleData ={singleData} key={singleData.id} handleTime = {handleTime}></SingleCart>)
            }
        </div>
    );
};

export default Details;