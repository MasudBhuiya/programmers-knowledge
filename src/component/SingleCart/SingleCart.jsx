import React from 'react';
import './SingleCart.css'

const SingleCart = ({ singleData }) => {
    console.log(singleData)
    return (
        <div className='single-data'>
            <img src={singleData.img} alt="" />
            <div>
                <div className='user-detail'>
                    <div className='user-img'>
                    <img src={singleData.userImg} alt="" />
                    <div>
                        <h3>{singleData.name}</h3>
                        <p>{singleData.publishDate}</p>
                    </div>
                    </div>
                    <p>{singleData.readTime}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleCart;