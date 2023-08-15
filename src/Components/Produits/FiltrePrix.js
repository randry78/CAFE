import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { RiMoneyDollarCircleFill } from "react-icons/ri";

export default function FiltrePrix({maxPrix}) {

    const [prix, setPrix] =  useState(0);
    const [minmax, setMinMax] = useState({min:1, max:1});
    const [checkAllPrix, setcheckAllPrix] =  useState(true);

    useEffect(()=>{
        setMinMax({min:1, max: (maxPrix * 2 / 100) + maxPrix});
        setPrix(maxPrix/2);
    }, [maxPrix]);

    return (
        <div className='my-5'>
            <h4 className='text-nowrap my-0'><RiMoneyDollarCircleFill className='me-2'/>FILTRAGE PAR PRIX</h4>
            <div className='border'>
                <Form.Check className='fw-bold ms-3 my-3' type='checkbox' id= 'id-prix' label= 'Toutes les prix' defaultChecked= {true} onChange={(event)=>{setcheckAllPrix(event.target.checked)}}/>
                <div className='px-3 pt-2'>
                    <Form.Label>Prix Minimum: {new Intl.NumberFormat().format(prix)} $</Form.Label>
                    <div className='d-flex'>
                        <Form.Label className='me-2'>{minmax.min}</Form.Label>
                        <Form.Range disabled= {checkAllPrix} min={minmax.min} max={minmax.max} defaultRange={prix} step="10" onChange={(event)=>{setPrix(event.target.value)}}/>
                        <Form.Label className='ms-2 text-nowrap'>{new Intl.NumberFormat().format(minmax.max)} $</Form.Label>
                    </div>
                </div>
                <div className='px-3 pt-2'>
                    <Form.Label>Prix Maximum: {new Intl.NumberFormat().format(prix)} $</Form.Label>
                    <div className='d-flex'>
                        <Form.Label className='me-2'>{minmax.min}</Form.Label>
                        <Form.Range disabled= {checkAllPrix} min={minmax.min} max={minmax.max} defaultValue={prix} step="10" onChange={(event)=>{setPrix(event.target.value)}}/>
                        <Form.Label className='ms-2 text-nowrap'>{new Intl.NumberFormat().format(minmax.max)} $</Form.Label>
                    </div>
                </div>
            </div>
        </div>
    );
}