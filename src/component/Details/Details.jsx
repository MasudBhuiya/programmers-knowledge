import React from 'react';
import SingleCart from '../SingleCart/SingleCart';


const Details = ({ cart, handleTime, handleTitle, title }) => {
    // console.log(handleTime)
    return (
        <div>
            {
                cart.map(singleData => <SingleCart singleData ={singleData} key={singleData.id} handleTime = {handleTime} handleTitle={handleTitle} title={title}></SingleCart>)
            }
        </div>
    );
};

export default Details;