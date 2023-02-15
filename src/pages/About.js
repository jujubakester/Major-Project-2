import React from "react";
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardGroup,
    MDBContainer
  } from 'mdb-react-ui-kit';
  import { Link } from 'react-router-dom';
  

  import Myabout from '../images/ban8.jpg';
  import Mod1 from '../images/model1.jpg';
  import Mod2 from '../images/sam9.jpg';
  import Mod3 from '../images/sam4.jpg';

  const divStyle = {
    backgroundImage: 'url(' + Myabout + ')',
    height: '250px'
  };

  export default function About(){
    return (
        <header style={{ paddingLeft: 0 }}>
        <div
        className='p-5 text-center bg-image'
        style={divStyle}
        >
                 <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className='text-white myiconic'>
                <h1 className='mb-3 fst-italic text-danger'>25% off</h1>
                <h4 className='mb-3'>Love Month Sale. Sitewide!!</h4>
                <Link className='btn btn-outline-light btn-lg' to='/shop' role='button'>
                  Shop now!
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <MDBContainer className='my-5 text-dark myiconic '>
        <p className="text-center fs-2">Our Mission</p>

        <p className="text-center fs-1">REDEFINE LUXURY, YOUR WAY.</p>
        
        </MDBContainer>
       
        <MDBCardGroup className="my-5 text-dark models">
      <MDBCard>
        <MDBCardImage src={Mod1} />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This
            content is a little bit longer.
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage src={Mod2} />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content.
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage src={Mod3} />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This
            card has even longer content than the first to show that equal height action.
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>

       

      </header>

      
      
    );
}

