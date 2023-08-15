import Navigation from "../Components/Produits/Navigation";
import PageNavigation from "../Components/Produits/Paginations";
import ListProducts from "../Components/Produits/Produits";
import FiltrePrix from '../Components/Produits/FiltrePrix';
import { useState } from 'react';
import FiltreCouleur from "../Components/Produits/FiltreCouleur";

export default function Produits(){
    const [prods, setProds] =  useState([]);
    const [maxPrice, setmaxPrice] =  useState(0);

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
                            <FiltrePrix maxPrix= {maxPrice} />
                            <FiltreCouleur />
                        </div>
                        <div className="col-lg-9 mx-0 px-0">
                            <ListProducts onListProduit= {handleListProduit}/>
                            <PageNavigation />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

