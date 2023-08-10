import './App.css';

import { Button } from 'react-bootstrap';

import {WishList} from './Backends/Wishlist';

import '../src/ThemeStyle/Bootswatch_bootstrap.min.css';
import { useEffect, useState } from 'react';

function App() {

  const urlBase= 'https://insta-api-api.0vxq7h.easypanel.host/';

  const [mess, setMess] =  useState({});

  function handleClick(){
      const wishlist= new WishList(urlBase);
      wishlist.clear().then(()=>{
          //setMess('Vidange avec succés !!');
      }).catch(error=>{
          console.log(error);
          setMess(error);
      });
  }

  return (
    <div className="App">
        <Button onClick={handleClick.bind(this)} variant="primary">Primary</Button>
       <p>{mess.message}</p> 
    </div>
  );
}

export default App;
