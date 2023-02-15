import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import jujuLogo from '../images/navlogo.png';
import Modal from 'react-bootstrap/Modal';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';


export default function NavScroll() {

  const [lgShow, setLgShow] = useState(false); 
  const [loginShow, setLoginShow] = useState(false);
  const [Regshow, setRegShow] = useState(false);
  const [isLoggedIn, setLogInfo] = useState(false);

  var count = 0;

  return (

  <Navbar bg="dark" expand="lg">
    <Container className="fluid">
      <Link className="navbar-brand" to="/"><img src={jujuLogo} /></Link>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto my-2 my-lg-0 mynavbar" style={{ maxHeight: '100px' }} navbarScroll>
          <Link to="/shop" className='nav-link text-white'>Shop</Link>
          <Link to="/gifts" className='nav-link text-white'>Gifts</Link>
          <Link to="/about" className='nav-link text-white'>About</Link>
          <Link to="/contact" className='nav-link text-white'>Contact</Link>         
        </Nav>
        
        <div className="d-flex mynavbar">
          {
            isLoggedIn ? 
              <React.Fragment>
                <Link to="/my-account" className='nav-link text-white'>My Account</Link> 
                <Link to="#" className='nav-link text-white' onClick={() => setLogInfo(false)}>Logout</Link>
              </React.Fragment>
              : 
              <React.Fragment>
                <Link to="#" className='nav-link text-white'  onClick={() => setRegShow(true)}>Register</Link>
                <Link to="#" className='nav-link text-white' onClick={() => setLoginShow(true)}>Login</Link>
              </React.Fragment>
          }
          
          
          <Link to='/cart' className='nav-link text-white'>
            <Icon.Bag />
            <span className="badge bg-dark text-white ms-1 rounded-pill">{count}</span>
          </Link>
          <Link to='#' className='nav-link text-white' onClick={() => setLgShow(true)}>
            <Icon.Search />
          </Link>
        </div>
      </Navbar.Collapse>
    </Container>

    <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Looking for?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="d-flex">
          <Form.Control type="search" placeholder="Type here to search" className="me-2" aria-label="Search"/>
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Modal.Body>
    </Modal>  
      
      
    <Modal size="sm" show={loginShow} onHide={() => setLoginShow(false)} onShow={() => setRegShow(false)} aria-labelledby="login-modal">
      <Modal.Header closeButton>
        <Modal.Title id="login-modal">
          Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          
        <MDBCard className='text-black'>
          <MDBCardBody>
            <MDBRow>
              <MDBCol className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Hi there! Please log in here.</p>
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="user me-3" size='lg'/>
                  <MDBInput label='Username' id='form2' type='text' />
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size='lg'/>
                  <MDBInput label='Password' id='form3' type='password' />
                </div>
                <MDBBtn className='mb-4' size='md' onClick={() => {setLogInfo(true); setLoginShow(false);}}>Log in</MDBBtn>

                <Link className="btn btn-sm btn-primary" style={{backGroundColor: '#3b5998'}} to="#!" role="button">
                  <i className="fab fa-facebook-f"></i>&nbsp;&nbsp;&nbsp;Login using Facebook
                </Link>

              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>

      </Modal.Body>
    </Modal>  





    <Modal show={Regshow} onHide={() => setRegShow(false)} aria-labelledby="Register-Modal">
    <Modal.Header closeButton>
      <Modal.Title id="Register-Modal">
        Sign up here
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        
      

      <MDBCard className='text-black'>
        <MDBCardBody>
          <MDBRow>
            <MDBCol className='order-2 order-lg-1 d-flex flex-column align-items-center'>

            <div className="d-flex flex-row align-items-center mb-4 ">
              <MDBIcon fas icon="user me-3" size='lg'/>
              <MDBInput label='Your Name' id='form1' type='text' className='w-100'/>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="envelope me-3" size='lg'/>
              <MDBInput label='Your Email' id='form2' type='email'/>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="lock me-3" size='lg'/>
              <MDBInput label='Password' id='form3' type='password'/>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="key me-3" size='lg'/>
              <MDBInput label='Repeat your password' id='form4' type='password'/>
            </div>

            <div className='mb-4'>
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
            </div>

            <MDBBtn className='mb-4' size='md' onClick={() => setLoginShow(true)}>Register</MDBBtn>
              

            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </Modal.Body>
  </Modal>  

    </Navbar>


  );
}
