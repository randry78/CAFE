import React, { useState} from 'react';
import { Container } from "react-bootstrap";
import {Form} from 'react-bootstrap';
function Ajout()
{
  const [formvalue, setFormvalue]= useState({name:"",description:"", pictureUrl:"" });

  const handleInput =(e)=>{
    const { name, value}= e.target;
    setFormvalue({...formvalue, [name]:value});
   // console.log(formvalue);
  }
  const handleFormsubmit= async (e)=>{
    e.preventDefault();
   
   await fetch('https://insta-api-api.0vxq7h.easypanel.host/coffees', {
      method: 'POST', body: JSON.stringify({
      name:formvalue.name,
      description: formvalue.description,
      pictureUrl: formvalue.pictureUrl
    }),

      headers: { 'content-type': 'application/json; charset=utf-8' },
     
    });
   
    console.log(formvalue);
  }

    return(
        <React.Fragment>
             <Container>
          
            <h2>
            AJOUTER VOTRE CAFÉ PREFERÉ

            </h2>
            
            <Form className='row' onSubmit={ handleFormsubmit}>            
                <div className="col-md-3">  
                <Form.Label className="form-label text-white">Name</Form.Label>              
                <Form.Control  type="text" name='name' value={formvalue.name} onChange={ handleInput}  className='form-control'  placeholder='Name...' />
              </div>

              <div className="col-md-3">  
                <Form.Label className="form-label text-white">Description</Form.Label>              
                <Form.Control   type="text" name='description' value={formvalue.description } onChange={ handleInput}  className='form-control'  placeholder='Description...' />
              </div>

              <div className="col-md-3">  
                <Form.Label className="form-label text-white">PictureUrl</Form.Label>              
                <Form.Control  type='text' name='pictureUrl' value={formvalue.pictureUrl} onChange={ handleInput}  className='form-control'  placeholder='PictureUrl...' />
              </div>
              <div className="col-md-2">  
                <label className="form-label text-white">Action</label>              
                <button className='form-control btn btn-success '>Submit</button>
              </div>


               </Form>

        
        </Container>
        </React.Fragment>
    );
}

export default Ajout;