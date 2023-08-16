import { Routes, Route } from "react-router-dom";
import Heads from './Components/Communs/Heads';
import Header from './Components/Communs/Headers';
import Footer from './Components/Communs/Footers';

import { ModalStyleTheme } from './Components/Communs/Theme';
import { Alerts } from './Components/Communs/Alerts';

import Home from './Pages/Home';
import Products from './Pages/Products';

import '../src/ThemeStyle/Bootswatch_bootstrap.min.css';
import Abouts from './Pages/Abouts';
import WishList from './Pages/WishList';
import Cafe from "./Pages/Cafe";
import Ajout from "./Pages/Ajout";
import { useEffect, useState } from 'react';
import ProductDetail from "./Pages/ProductDetail";
import Paniers from "./Pages/Paniers";



function App() {
  
    const [ThemeStyle, setThemeStyle]= useState('Cerulean_bootstrap.min.css');
    const [ModalStyle, setModalStyle]= useState({Etat: false, Theme:''});
    const [Alert, setAlert]=useState({Etat: false, Titre: '', Type: '', Message: ''});
    const [panier, setPanier] = useState(0);

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

    function onFermerAlert(){
        setAlert({Etat: false});
    }

    return (
        <>
                <Heads />
                <Header  panier={panier} onChangeThemeStyle={handleChangeThemeStyle}/>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/Products" element={<Products />} />
                    <Route path="/Products/:CategoryId" element={<Products />} />
                    <Route path="/Wishlist" element={<WishList />} />
                    <Route path="/Carts" element={<Paniers panier= {panier}/>} />
                    <Route path="/Abouts" element={<Abouts />} />
                    <Route path="/ProductDetail/:id" element={<ProductDetail />} />
                    <Route path="*" element={<Home />} />
                    <Route path="/CAFE" element={<Cafe/>}/>
                    <Route path="/AJOUTCAFE" element={<Ajout/>}/>
                </Routes>
                <Footer/>

                <Alerts Etat={Alert.Etat} Type={Alert.Type} Titre={Alert.Titre}  Message={Alert.Message} onFermer= {onFermerAlert}/>            
                <ModalStyleTheme Etat={ModalStyle.Etat} Theme={ModalStyle.Theme} onChangeTheme={handleModalChangeTheme} onConfirmer={handleModalConfirmer} onAnnuler={handleModalAnnuler}/>
        </>
    );
}

export default App;
