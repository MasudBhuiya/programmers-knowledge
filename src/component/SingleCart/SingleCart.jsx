import React, { useState } from 'react';
import './SingleCart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark, faBookmark, faCoffee, faFile, faFileText, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function SingleCart({singleData, handleTime, handleTitle}) {
    // console.log(singleData)
    const [title, setTitle] = useState([])
    
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
        <p>{singleData.readTime} min read  <span onClick={()=>handleTitle(singleData.title)}><FontAwesomeIcon icon={faBookmark} /></span></p>
        </div>
        <Card.Title>{singleData.title}</Card.Title>
        <div style={{display:"flex", gap:"17px"}}>
            <p>#beginners</p>
            <p>#programming</p>
        </div>
        <button onClick={()=>handleTime(singleData.readTime)} style={{backgroundColor:'white', border:'0px'}}><u style={{ color:'blue'}}>Mark as read</u></button>

      </Card.Body>
    </Card>
  );
}

export default SingleCart;