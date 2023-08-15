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
    let [prodsFilter, setProdsFilter] =  useState([]);
    const [filter, setFilter] = useState({category: [], color: [], price:{min:0, max:0}});

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

    function filterColor(produit1, colors=[]){
        let produits2= [];

        if (colors.length > 0){
            for (const item of produit1){
                const isExist = (element) => element === item.color.id;
                const index= colors.findIndex(isExist);
                if (index !== -1){
                    produits2.push(item);
                }
            }
        } else produits2= produit1.slice(0);
        return produits2;
    }

    function filterPrice(produit1, price={min:0, max:0}){
        let produits2= [];

        if (price.min > 0 || price.max > 0){
            for (const item of produit1){
                if (price.min < item.price && item.price < price.max){
                    produits2.push(item);
                }
            }
        } else produits2= produit1.slice(0);

        return produits2;
    }

    function filterCategory(produit1, category=[]){
        let produits2= [];

        if (category.length > 0){
            for (const item of produit1){
                const isExist = (element) => element === item.category.id;
                const index= category.findIndex(isExist);
                if (index !== -1){
                    produits2.push(item);
                }
            }
        } else produits2= produit1.slice(0);
        return produits2;
    }


    function handleFilterCategory(filtre){
        filter.category= filtre;
        setFilter(filter);
        
        prodsFilter= prods.slice(0);
        setProdsFilter(prodsFilter);

        let p= filterCategory(prodsFilter.slice(0), filter.category);
        p= filterPrice(p.slice(0), filter.price);
        p= filterColor(p.slice(0), filter.color);

        prodsFilter= p.slice(0);
        setProdsFilter(p.slice(0));
    }

    function handleFilterPrice(filtre){
        filter.price.min= filtre.min;
        filter.price.max= filtre.max;
        setFilter(filter);

        prodsFilter= prods.slice(0);
        setProdsFilter(prodsFilter);

        let p= filterCategory(prodsFilter.slice(0), filter.category);
        p= filterPrice(p.slice(0), filter.price);
        p= filterColor(p.slice(0), filter.color);

        prodsFilter= p.slice(0);
        setProdsFilter(p.slice(0));
    }

    function handleFilterColor(filtre){
        filter.color= filtre;
        setFilter(filter);

        prodsFilter= prods.slice(0);
        setProdsFilter(prodsFilter);

        let p= filterCategory(prodsFilter.slice(0), filter.category);
        p= filterPrice(p.slice(0), filter.price);
        p= filterColor(p.slice(0), filter.color);

        prodsFilter= p.slice(0);
        setProdsFilter(p.slice(0));
    }

    return(
        <>
            <div style={{height: '100%'}}>
                <div style={{height: 'calc(100vh - 200px)', overflowY: 'scroll', overflowX: 'hidden'}}>
                    <Navigation />
                    <div className="row mx-4">
                        <div className="col-lg-3 mx-0 px-0">
                            <FiltreCategorie onFilter={handleFilterCategory}/>
                            <FiltrePrix onFilter={handleFilterPrice} />
                            <FiltreCouleur onFilter={handleFilterColor} />
                        </div>
                        <div className="col-lg-9 mx-0 px-0">
                            <ListProduits lists= {prodsFilter} />
                            <PageNavigation />
                        </div>
                    </div>
                </div>
            </div>

            <Alerts Etat={Alert.Etat} Type={Alert.Type} Titre={Alert.Titre}  Message={Alert.Message} onFermer= {onFermerAlert}/>
        </>
    )
}

