import {Form, Button} from 'react-bootstrap';
import { MdOutlineAlternateEmail, MdEmail, MdLocalPhone, MdHome, MdStyle } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { GiCoffeeCup, GiHearts } from "react-icons/gi";
import { BiCategoryAlt, BiSolidUserCircle } from "react-icons/bi";
import { BsCart4, BsFillExclamationCircleFill } from "react-icons/bs";

import { HashLink as Link } from 'react-router-hash-link';


export default function Foots(){
    return(
        <>
            <div className="d-flex justify-content-between bg-primary py-5 px-5 mb-5 flex-wrap">
                <div>
                    <h5>ENTRER EN CONTACT</h5>
                    <div className='d-flex align-items-center'>
                        <ImLocation2 className=' me-3 text-dark' style={{fontSize:"25px"}} />
                        <div className='d-flex flex-wrap flex-column'>
                            <p className='my-0'>123, boulevard Seminaire Nord,</p>
                            <p className='my-0'>Saint Jean sur Richelieu,</p> 
                            <p className='mt-0'>J3B 8L4, Quebec</p>
                        </div>
                    </div>
                    <p><MdEmail className=' me-3 text-dark' style={{fontSize:"25px"}} />info@e-cafe.ca</p>
                    <p><MdLocalPhone className=' me-3 text-dark' style={{fontSize:"25px"}} />+1 438 226 9031</p>
                </div>
                <div className='d-flex flex-column'>
                    <h5>ACCÉS RAPIDE</h5>
                    <Link to='/Home' className='text-dark my-2'><MdHome className=' me-3 text-dark' style={{fontSize:"25px"}} />Accueil</Link>
                    <Link to='/Products' className='text-dark my-2'><GiCoffeeCup className=' me-3 text-dark' style={{fontSize:"25px"}} />Nos produits</Link>
                    <Link to='/#' className='text-dark my-2'><BiCategoryAlt className=' me-3 text-dark' style={{fontSize:"25px"}} />Catégories</Link>
                    <Link to='/Abouts' className='text-dark my-2'><BsFillExclamationCircleFill className=' me-3 text-dark' style={{fontSize:"25px"}} />A propos</Link>
                </div>
                <div className='d-flex flex-column'>
                    <h5>MON COMPTE</h5>
                    <Link to='/Home' className='text-dark my-2'><BiSolidUserCircle className=' me-3 text-dark' style={{fontSize:"25px"}} />Mon profil</Link>
                    <Link to='/#' className='text-dark my-2'><BsCart4 className=' me-3 text-dark' style={{fontSize:"25px"}} />Mon panier</Link>
                    <Link to='/#' className='text-dark my-2'><GiHearts className=' me-3 text-dark' style={{fontSize:"25px"}} />Mes coups de coeur</Link>
                    <Link to='/Home' className='text-dark my-2'><MdStyle className=' me-3 text-dark' style={{fontSize:"25px"}} />Style Théme</Link>
                </div>
                <div className='d-flex justify-content-start flex-column'>
                    <h5>LETTRE D'INFORMATION</h5>
                    <p>Abonnez vous de notre lettre d'information</p>
                    <Form className="d-flex">
                        <Form.Control type="email" placeholder="Recherche des produits" className="border-primary me-0 rounded-0" aria-label="Recherche"/>
                        <Button variant="dark" className='rounded-0 ms-0 d-flex'><MdOutlineAlternateEmail className=' me-2 text-primary' style={{fontSize:"25px"}} />S'inscrire</Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

