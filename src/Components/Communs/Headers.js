import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { GiCoffeeBeans, GiCoffeeCup, GiHearts } from "react-icons/gi";
import { BsFillExclamationCircleFill, BsCart4 } from "react-icons/bs";
import { BiSolidUserCircle, BiSolidUserRectangle } from "react-icons/bi";
import { MdStyle } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";


export default function Header({onMonProfil, onUserDisConnect, onChangeThemeStyle}) {
    const navigate= useNavigate();
    return (
        <>
                <Navbar bg="primary" variant="dark" sticky='top' expand='xl' className='py-0 px-0'>
                    <Container fluid className='mx-0 px-0'>
                        <Nav.Link onClick={()=>{navigate('/HOME')}}>
                            <Navbar.Brand className='py-0 d-flex align-items-center'>
                                <GiCoffeeBeans style={{fontSize:'50px'}} />
                                <h2 className='fw-bold my-0 mx-3'>E-COMMERCE</h2>
                            </Navbar.Brand>
                        </Nav.Link>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse className="justify-content-end" id="navbarScroll">
                            <Nav className="me-auto mx-5">
                                <Nav.Link onClick={()=>{navigate('/PRODUCTS')}} className='d-flex justify-content-center align-items-center flex-wrap'><GiCoffeeCup className="mx-2" style={{fontSize:'25px'}}/>PRODUITS</Nav.Link>
                                <Nav.Link onClick={()=>{navigate('/WISHLIST')}} className='d-flex justify-content-center align-items-center flex-wrap'><GiHearts className="mx-2" style={{fontSize:'25px'}}/>LISTE SOUHAITE</Nav.Link>
                                <Nav.Link onClick={()=>{navigate('/ABOUTS')}} className='d-flex justify-content-center align-items-center flex-wrap'><BsFillExclamationCircleFill className="mx-2" style={{fontSize:'25px'}} />A PROPOS</Nav.Link>
                            </Nav>
                            <Nav className="d-flex">
                                <Nav.Link className='d-flex justify-content-center align-items-center flex-wrap'><BsCart4 className="mx-1" style={{fontSize:'40px'}} /></Nav.Link>
                                <NavDropdown align='end' title={<BiSolidUserCircle style={{fontSize:'40px'}}><span className='fs-5 me-0 ms-1'>UTILISATEURS</span></BiSolidUserCircle>} id="navbarScrollingDropdown" className='fw-bold'>
                                    <NavDropdown.Item href="#" onClick={onMonProfil} className='d-flex align-items-center'><BiSolidUserRectangle className="mx-2" style={{fontSize:'25px'}}/>Mon Profil</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#" onClick={onChangeThemeStyle} className='d-flex align-items-center'><MdStyle className="mx-2" style={{fontSize:'25px'}} />Théme Style</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#" onClick={onUserDisConnect} className='text-danger fw-bold d-flex align-items-center'><IoLogOut className="mx-2 text-danger" style={{fontSize:'25px'}} />DéConnecter</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        </>
    );
  }