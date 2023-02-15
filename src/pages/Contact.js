import React from "react";
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
    MDBCheckbox,
    MDBTextArea
  } from 'mdb-react-ui-kit';

import Myhero from '../images/ban6.jpg';
import Mapsamp from '../images/map-sample.png';

const divStyle = {
    backgroundImage: 'url(' + Myhero + ')',
    height: '250px'
  };

export default function Contact (){
    return (
        <React.Fragment>
            <header>
                <div className='p-5 text-center bg-image' style={divStyle}>
                    <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                        <div className='d-flex justify-content-center align-items-center h-100'>
                            <div className='text-white'>
                                <h1 className='mb-3 models '>We'd love to hear from you!</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        

            <MDBContainer className='text-black my-5 m-auto'>
                
                <MDBRow>
                    <MDBCol className='order-2 order-lg-1 models '>
                        <p>You can reach us with our following contact information below or use our contact form.</p>
                        <p><MDBIcon icon="home" className="me-2" />Tarlac City, PH</p>
                        <p><MDBIcon icon="envelope" className="me-2" /> info@juwelry.com</p>
                        <p><MDBIcon icon="phone" className="me-2" />+63 234 567 8910</p>
                        <p><MDBIcon icon="print" className="me-2" />+63 234 567 9101</p>
                        <p>Or visit our branches near you.</p>
                        <p><img src={Mapsamp} style={{display:'block', width:'100%'}} /></p>
                    </MDBCol>

                    <MDBCol className='order-2 order-lg-1 models '>
                        <form id='form' className='text-center'>
                            
                            <MDBInput label='Name' v-model='name' wrapperClass='mb-4' />

                            <MDBInput label='Contact Number' v-model='contactnum' wrapperClass='mb-4' />
                    
                            <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' />
                    
                            <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' />
                    
                            <MDBTextArea wrapperClass='mb-4' rows={12} label='Message' />
                    
                            <MDBBtn color='primary' block className='my-4'>
                            Send
                            </MDBBtn>
                        </form>
                    </MDBCol>
                </MDBRow>
                
            </MDBContainer>
        
        </React.Fragment>
    );
}

 

