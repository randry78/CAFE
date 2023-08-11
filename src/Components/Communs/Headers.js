import {Container, Nav, Navbar, NavDropdown, Badge} from 'react-bootstrap';

import { useNavigate } from "react-router-dom";
import { GiCoffeeBeans, GiCoffeeCup, GiHearts } from "react-icons/gi";
import { BsFillExclamationCircleFill, BsCart4 } from "react-icons/bs";
import { BiSolidUserCircle, BiSolidUserRectangle, BiCategoryAlt } from "react-icons/bi";
import { MdStyle } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";


export default function Header({onMonProfil, onUserDisConnect, onChangeThemeStyle}) {
    const navigate= useNavigate();
    return (
        <>
                <Navbar bg="primary" variant="dark" sticky='top' expand='xl' className='py-0 px-0 border-0'>
                    <Container fluid className='border-0'>
                        <Nav.Link onClick={()=>{navigate('/HOME')}}>
                            <Navbar.Brand className='py-0 my-2 d-flex d-lg-none align-items-center'>
                                <GiCoffeeBeans style={{fontSize:'50px'}} />
                                <h2 className='fw-bold my-0 mx-3'>E-CAFE</h2>
                            </Navbar.Brand>
                        </Nav.Link>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="me-auto border-0">
                                <div className='bg-black mx-lg-5 px-lg-5'>
                                    <Nav.Link onClick={()=>{navigate('/CATEGORY')}} className='text-light text-left rounded-0 border-0'><BiCategoryAlt className="mx-2" style={{fontSize:'40px'}}/>CATÉGORIES</Nav.Link>
                                </div>
                                <Nav.Link onClick={()=>{navigate('/PRODUCTS')}} className='mx-3 d-flex justify-content-start text-black align-items-center flex-wrap'><GiCoffeeCup className="mx-2" style={{fontSize:'40px'}}/>PRODUITS</Nav.Link>
                                <Nav.Link onClick={()=>{navigate('/ABOUTS')}} className='d-flex justify-content-start align-items-center flex-wrap'><BsFillExclamationCircleFill className="mx-2" style={{fontSize:'40px'}} />A PROPOS</Nav.Link>
                            </Nav>
                            <Nav className="d-flex justify-content-start">
                                <Nav.Link className='d-flex justify-content-start align-items-center flex-wrap'><Badge bg="black"><GiHearts className="mx-1 text-danger" style={{fontSize:'25px'}} /><span className='text-primary d-flex align-items-end justify-content-end'>3</span></Badge><span className='d-lg-none ms-2'>COUP DE COEUR</span></Nav.Link>
                                <Nav.Link className='d-flex justify-content-start align-items-center flex-wrap'><Badge bg="black"><BsCart4 className="mx-1 text-ligth" style={{fontSize:'25px'}} /><span className='text-primary d-flex align-items-end justify-content-end'>5</span></Badge><span className='d-lg-none ms-2'>PANIER</span></Nav.Link>
                                <NavDropdown align='end' title={<span><BiSolidUserCircle style={{fontSize:"40px"}} /><span className="d-lg-none">UTILISATEURS</span></span>} id="navbarScrollingDropdown" className='fw-bold mx-0 my-0'>
                                    <NavDropdown.Item disabled href="#" onClick={onMonProfil} className='d-flex align-items-center'><BiSolidUserRectangle className="me-2" style={{fontSize:'25px'}}/>Mon Profil</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#" onClick={onChangeThemeStyle} className='d-flex align-items-center'><MdStyle className="me-2" style={{fontSize:'25px'}} />Théme Style</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item disabled href="#" onClick={onUserDisConnect} className='fw-bold d-flex align-items-center'><IoLogOut className="me-2" style={{fontSize:'25px'}} />DéConnecter</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        </>
    );
  }