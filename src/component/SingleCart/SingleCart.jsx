import React from 'react';
import './SingleCart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SingleCart({singleData}) {
    console.log(singleData)
  return (
    <Card className='mx-auto' style={{ width: '75%', margin:"20px"}}>
      <Card.Img variant="top" src={singleData.img} />
      <Card.Body>
        <div className='single-data'>
        <div className='user-name'>
        <img style={{width:"45px", borderRadius:"50%"}} src={singleData.userImg} alt="" />
        <div>
            <h5>{singleData.name}</h5>
            <p>{singleData.publishDate}</p>
        </div>
        </div>
        <p>{singleData.readTime}</p>
        </div>
        <Card.Title>{singleData.title}</Card.Title>
        <div style={{display:"flex", gap:"17px"}}>
            <p>#beginners</p>
            <p>#programming</p>
        </div>
        <u style={{backgroundColor:'white', color:'blue'}}>Mark as read</u>

      </Card.Body>
    </Card>
  );
}

export default SingleCart;