import { useEffect } from "react"
import { Carts } from "../Backends/Carts";
import { useState } from "react";
import { Alerts } from '../Components/Communs/Alerts';
import {Table, Button, Form} from 'react-bootstrap';
import './Styles/paniers.css';
import { MdCancel } from "react-icons/md";
import { useCallback } from "react";

export default function Paniers(){
    const urlBase= 'https://insta-api-api.0vxq7h.easypanel.host/';

    let [carts, setCarts] = useState([]);
    const [Alert, setAlert]=useState({Etat: false, Titre: '', Type: '', Message: ''});
    /*const [qte, setQte] = useState(1);*/
    const [qt, setQt] = useState(1);
    const [quantity, setQuantity] = useState([]);

    function onFermerAlert(){
        setAlert({Etat: false});
    }

    useEffect(()=>{
        function initQuantity(){
            if (carts.length !== quantity.length && quantity.length === 0){
                for (const item of carts){
                    addQuantity(item.quantity);
                }
            }
        }

        const paniers= new Carts(urlBase);
        paniers.getAll().then(p=>{
            carts= p.splice(0);
            setCarts(carts);
            initQuantity();
        }).catch(error=>{
            setAlert({Etat: true, Titre: 'CATÉGORIE - Error list all products', Type: 'ERROR', Message: error.message});
            console.log(error);
        });
    }, []);

    function handleMoinsQte(){
        /*let q= qte;
        --q;
        if (q > 0){ 
            /*setQte(q);
        }*/
    }

    function handlePlusQte(index){
        /*initQuantity();*/
        let q= quantity[index];
        ++q;
        quantity[index]= q;
    };
        

    function handleChange(event){
        if (event.target.value === ''){
            /*let q= qte;
            setQt(q);*/
        }

        /*setQte(event.target.value);*/

        if (event.target.value > 0){
            setQt(event.target.value);    
        }
    }

    function handleFocusOut(event){
        /*setQte(qt);*/
    }

    function addQuantity(q){
        quantity.push(q);
        setQuantity(quantity);
    }

    return(
        <>
            <div style={{height: '100%'}}>
                <div style={{height: 'calc(100vh - 200px)', overflowY: 'scroll', overflowX: 'hidden'}}>
                    <h3 className="text-center w-100 my-4">Votre Panier (<span className="text-dark">{carts.length} articles</span>)</h3>
                    <Table hover responsive>
                        <thead>
                            <tr >
                                <th className="text-center" style={{width: '50%'}}><h4>Item</h4></th>
                                <th className="text-center " style={{width: '16%'}}><h4>Prix</h4></th>
                                <th className="text-center" style={{width: '16%'}}><h4>Quantité</h4></th>
                                <th className="text-center" style={{width: '16%'}}><h4>Total</h4></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {carts.map((item, index)=>(
                                <tr key={index} >
                                    <td className="d-flex">
                                        <div style={{height: '5rem', width: '10rem'}}>
                                            <img src={item.image} alt="" style={{height: '5rem', width: '10rem', objectFit: 'contain'}}/>
                                        </div>
                                        <div className="d-flex flex-column justify-content-between">
                                            <div>
                                                <h5 className="mb-0">{item.name}</h5>
                                                <span className='description my-0' style={{display: '-webkit-box', width: '100%', height: '25px', overflow:' hidden'}}>
                                                    {item.description}
                                                </span>
                                            </div>
                                            <div className="d-flex">
                                                <span className="fw-bold">Couleur: </span><span className="mx-2" style={{color: item.color.hexCode}}>{item.color.name}</span><span className='px-2 ms-2' style={{width: '15px', height: '20px', border: '1px solid', color: item.color.hexCode, backgroundColor: item.color.hexCode}}>C</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-center align-middle fs-6">{new Intl.NumberFormat().format(item.price)} $</td>
                                    <td className="text-center align-middle">
                                        <div className="d-flex w-100 justify-content-center align-items-center" style={{height: '100%'}}>
                                            <div className='d-flex me-4' style={{height: '35px'}} >
                                                <Button variant="primary" className='rounded-0 fw-bold fs-5 py-0' style={{cursor: 'pointer', width: '40px'}} >-</Button>
                                                <Form.Control value={quantity[index]} className='rounded-0' style={{width: '55px', textAlign: 'center'}} type="number" />
                                                <Button variant="primary" className='rounded-0 fw-bold fs-5 py-0' style={{cursor: 'pointer', width: '40px'}} onClick={handlePlusQte(index)}>+</Button>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-center align-middle fs-6 fw-bold">{new Intl.NumberFormat().format(item.price * item.quantity)} $</td>
                                    <td className="text-center align-middle"><Button variant="danger"><MdCancel style={{fontSize:"25px"}} /></Button></td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr className="active">
                                <td></td>
                                <td></td>
                                <td className="fw-bold">SOUS-TOTAL: </td>
                                <td className="text-center"><h6 className="text-dark fw-bold">40 000</h6></td>
                                <td></td>
                            </tr>
                            <tr className="active">
                                <td></td>
                                <td></td>
                                <td className="fw-bold">Taxe: </td>
                                <td className="text-center"><span>40 000</span></td>
                                <td></td>
                            </tr>
                            <tr className="active">
                                <td></td>
                                <td></td>
                                <td className="fw-bold"><h5 className="align-middle my-0">GRAND-TOTAL: </h5></td>
                                <td className="text-center align-middle"><h5 className="align-middle my-0 fw-bold">40 000</h5></td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </Table>
                </div>
            </div>
            <Alerts Etat={Alert.Etat} Type={Alert.Type} Titre={Alert.Titre}  Message={Alert.Message} onFermer= {onFermerAlert}/>
        </>
    )
}