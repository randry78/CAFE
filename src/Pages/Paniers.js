import { useEffect } from "react"
import { Carts } from "../Backends/Carts";
import { useState } from "react";
import { Alerts } from '../Components/Communs/Alerts';
import Table from 'react-bootstrap/Table';
import './Styles/paniers.css';

export default function Paniers(){
    const urlBase= 'https://insta-api-api.0vxq7h.easypanel.host/';

    const [carts, setCarts] =  useState([]);
    const [Alert, setAlert]=useState({Etat: false, Titre: '', Type: '', Message: ''});

    function onFermerAlert(){
        setAlert({Etat: false});
    }

    useEffect(()=>{
        const paniers= new Carts(urlBase);
        paniers.getAll().then(p=>{
            setCarts(p);
        }).catch(error=>{
            setAlert({Etat: true, Titre: 'CATÉGORIE - Error list all products', Type: 'ERROR', Message: error.message});
            console.log(error);
        });
    }, []);

    return(
        <>
            <div style={{height: '90vh'}}>
            <div className="d-flex justify-content-evenly" style={{overflowY: 'scroll'}}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th className="text-center" style={{width: '50%'}}><h4>Item</h4></th>
                            <th className="text-center " style={{width: '16%'}}><h4>Prix</h4></th>
                            <th className="text-center" style={{width: '16%'}}><h4>Quantité</h4></th>
                            <th className="text-center" style={{width: '16%'}}><h4>Total</h4></th>
                        </tr>
                    </thead>
                    <tbody>
                        {carts.map(item=>(
                            <tr key={item.id}>
                                <td className="d-flex">
                                    <img src={item.image} alt="" style={{height: '5rem', width: '10rem'}}/>
                                    <div className="d-flex flex-column">
                                        <h5>{item.name}</h5>
                                        <span className='description' style={{display: '-webkit-box', width: '100%', height: '25px', overflow:' hidden'}}>
                                            {item.description}
                                        </span>
                                        <span>Couleur: {item.color.name}</span>
                                    </div>
                                </td>
                                <td className="text-center">{item.price}</td>
                                <td className="text-center">{item.quantity}</td>
                                <td className="text-center">{item.price * item.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            </div>
            <Alerts Etat={Alert.Etat} Type={Alert.Type} Titre={Alert.Titre}  Message={Alert.Message} onFermer= {onFermerAlert}/>
        </>
    )
}