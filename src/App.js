import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Communs/Headers';
import Footer from './Components/Communs/Footers';

import Home from './Pages/Home';
import Products from './Pages/Products';

import '../src/ThemeStyle/Bootswatch_bootstrap.min.css';
import Abouts from './Pages/Abouts';
import WishList from './Pages/WishList';


function App() {

  /*const urlBase= 'https://insta-api-api.0vxq7h.easypanel.host/';

  const [mess, setMess] =  useState({});

  function handleClick(){
      const wishlist= new Carts(urlBase);
      wishlist.clear().then(()=>{
          //setMess('Vidange avec succés !!');
      }).catch(error=>{
          console.log(error);
          setMess(error);
      });
  }
*/
  return (
      <BrowserRouter>
          <Header/>
          <Routes>
              <Route index element={<Home />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/Wishlist" element={<WishList />} />
              <Route path="/Abouts" element={<Abouts />} />
              <Route path="*" element={<Home />} />
          </Routes>
          <Footer/>
      </BrowserRouter>
  );
}

export default App;
