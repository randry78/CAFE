import Navigation from "../Components/Produits/Navigation";
import PageNavigation from "../Components/Produits/Paginations";
import ListProduits from "../Components/Produits/Produits";
import FiltrePrix from '../Components/Produits/FiltrePrix';
import FiltreCouleur from "../Components/Produits/FiltreCouleur";
import FiltreCategorie from "../Components/Produits/FiltreCategorie";
import Produits from '../Backends/Produits';
import { Alerts } from '../Components/Communs/Alerts';
import { useEffect, useState } from 'react';

export default function Products(){
    const [prods, setProds] =  useState([]);
    const [maxPrice, setmaxPrice] =  useState(0);

    const urlBase= 'https://insta-api-api.0vxq7h.easypanel.host/';

    const [Alert, setAlert]=useState({Etat: false, Titre: '', Type: '', Message: ''});

    useEffect(()=>{
        const produits= new Produits(urlBase);
        produits.getProducts().then(p=>{
            setProds(p);
        }).catch(error=>{
            setAlert({Etat: true, Titre: 'PRODUITS - Error list all products', Type: 'ERROR', Message: error.message});
            console.log(error);
        });
    }, [prods]);

    
    function onFermerAlert(){
        setAlert({Etat: false});
    }

    function maxPrix(produit){
        let maxPrix= [];
        for (const item of produit){
            if (maxPrix < item.price){
                maxPrix= item.price;
            }
        }
        return maxPrix;
    }

    function handleListProduit(p){
        setProds(p);
        setmaxPrice(maxPrix(prods));
    }

    return(
        <>
            <div style={{height: '100%'}}>
                <div style={{height: 'calc(100vh - 200px)', overflowY: 'scroll', overflowX: 'hidden'}}>
                    <Navigation />
                    <div className="row mx-4">
                        <div className="col-lg-3 mx-0 px-0">
                            <FiltreCategorie />
                            <FiltrePrix maxPrix= {maxPrice} />
                            <FiltreCouleur />
                        </div>
                        <div className="col-lg-9 mx-0 px-0">
                            <ListProduits lists= {prods} />
                            <PageNavigation />
                        </div>
                    </div>
                </div>
            </div>

            <Alerts Etat={Alert.Etat} Type={Alert.Type} Titre={Alert.Titre}  Message={Alert.Message} onFermer= {onFermerAlert}/>
        </>
    )
}

