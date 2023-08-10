import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

export function Header({onMonProfil, onUserDisConnect, onChangeThemeStyle}) {

    return (
      <>
            <Navbar bg="primary" variant="dark" sticky='top' expand='xl' className='py-0'>
                <Container fluid >
                    <Navbar.Brand className='py-0 d-flex align-items-center'>
                        <i className="bi bi-journals" style={{fontSize:'50px'}} />
                        <h2 className='fw-bold my-0 mx-3'>MA BIBLIOTHÉQUE</h2>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse className="justify-content-end" id="navbarScroll">
                        <Nav className="me-auto mx-5">
                            <Nav.Link className='d-flex justify-content-center align-items-center flex-wrap'><i className="bi bi-journal-text mx-2" style={{fontSize:'25px'}}/>PRODUITS</Nav.Link>
                            <Nav.Link className='d-flex justify-content-center align-items-center flex-wrap'><i className="bi bi-people mx-2" style={{fontSize:'25px'}}/>LISTE SOUHAITE</Nav.Link>
                            <Nav.Link className='d-flex justify-content-center align-items-center flex-wrap'><i className="bi bi-question-circle mx-2" style={{fontSize:'25px'}} />A PROPOS</Nav.Link>
                        </Nav>
                        <Nav className="d-flex">
                            <NavDropdown title={<span className="bi bi-person-circle" style={{fontSize:'40px'}}><span className='fs-5 mx-3'>UTILISATEURS</span></span>} id="navbarScrollingDropdown" className='fw-bold'>
                                <NavDropdown.Item href="#" onClick={onMonProfil} className='d-flex align-items-center'><i className="bi bi-person-vcard mx-2" style={{fontSize:'25px'}}/>Mon Profil</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#" onClick={onChangeThemeStyle} className='d-flex align-items-center'><i className="bi bi-border-style mx-2" style={{fontSize:'25px'}} />Théme Style</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#" onClick={onUserDisConnect} className='text-danger fw-bold d-flex align-items-center'><i className="bi bi-box-arrow-right mx-2 text-danger" style={{fontSize:'25px'}} />DéConnecter</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
      </>
    );
  }