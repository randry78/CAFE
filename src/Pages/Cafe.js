import React,{useEffect, useState} from 'react';
import {Card, } from 'react-bootstrap';
import './Styles/produits.css';


const Cafe = () => {
    const[items,setItems]=useState([])


    const fetchUserData = ()=>{
        fetch("https://insta-api-api.0vxq7h.easypanel.host/coffees")
        .then(response=>{
            return response.json()
        })
        .then(data=>{
            setItems(data)
        })
    }

    useEffect(() => {
        fetchUserData()
      }, [])

    return (
     <div className='d-flex flex-row flex-wrap justify-content-evenly'>
     {items.map(item=>(
         <Card key={item.id} className='mx-2 my-3 border-0 border-top border-start border-primary border-3 fiche rounded-4' style={{ cursor: 'pointer', width: '16rem', height: '20rem', maxHeight: '20rem',
                                                                                                                     boxShadow: '15px 10px 15px 0px rgba(0,0,0,0.2)' }}>
             <Card.Img className='d-flex align-items-start mt-2' variant="top" src= {item.pictureUrl} style={{width: '100%', height: '40%', objectFit: 'contain'}} />
             <Card.Body className='d-flex flex-column justify-content-between px-2 py-2'>
                 <Card.Title className='text-center fw-bold text-primary my-0 py-0' style={{height: '50px'}}>{item.name}</Card.Title>
                 <div className='text-center my-0 description' style={{display: '-webkit-box', maxWidth: '100%', height: '30px', overflow:' hidden'}}>
                     {item.description}
                 </div>
                 </Card.Body>
                 </Card>
     ))}
    </div>
    );
};

export default Cafe;