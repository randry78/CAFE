import './App.css';

import { Routes, Route } from "react-router-dom";
import Heads from './Components/Communs/Heads';
import Header from './Components/Communs/Headers';
import Footer from './Components/Communs/Footers';

import { ModalStyleTheme } from './Components/Utility/Theme';

import Home from './Pages/Home';
import Products from './Pages/Products';

import '../src/ThemeStyle/Bootswatch_bootstrap.min.css';
import Abouts from './Pages/Abouts';
import WishList from './Pages/WishList';
import { useEffect, useState } from 'react';


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

  const [ThemeStyle, setThemeStyle]= useState('Cerulean_bootstrap.min.css');
  const [ModalStyle, setModalStyle]= useState({Etat: false, Theme:''});

  useEffect(()=>{
      import ('./ThemeStyle/'+ThemeStyle);
  }, [ThemeStyle]);


  function handleChangeThemeStyle(){
      setModalStyle({Etat: true, Theme: ThemeStyle});
  }

  function handleModalChangeTheme(event){
      setModalStyle({Etat: true, Theme: event.target.value});
  }

  function handleModalConfirmer(Action){
      setModalStyle({Etat: false});
      setThemeStyle(ModalStyle.Theme);
      //setSessionTheme(ModalStyle.Theme);
      //window.location.reload(true);
      //window.location.assign(window.location.href);
  }

  function handleModalAnnuler(Action){
      setModalStyle({Etat: false});
  }

  return (
      <>
              <Heads />
              <Header  onChangeThemeStyle={handleChangeThemeStyle}/>
              <Routes>
                  <Route index element={<Home />} />
                  <Route path="/Products" element={<Products />} />
                  <Route path="/Wishlist" element={<WishList />} />
                  <Route path="/Abouts" element={<Abouts />} />
                  <Route path="*" element={<Home />} />
              </Routes>
              <Footer/>

          <ModalStyleTheme Etat={ModalStyle.Etat} Theme={ModalStyle.Theme} onChangeTheme={handleModalChangeTheme} onConfirmer={handleModalConfirmer} onAnnuler={handleModalAnnuler}/>
      </>
  );
}

export default App;
