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
          <MDBCardTitle>THE BRAND</MDBCardTitle>
          <MDBCardText>
            Ju.wel.ry designs a variety of beautiful and high quality 18k gold coated and gold jewelry. Ju.wel.ry is style and comfort as you venture through the modern world. Every piece manifesting every single one of today's hustlers; authentic, bold and classy.

            Allow us to accompany in your daily aesthetic ideals—as your share of daily luxury, your confidence in gold. 
            <br/>
            <br/>
            <MDBCardText>Ju.wel.ry  -“It is you who inspire us to strive & exceed standards by curating timeless pieces that sparks the fiery soul.</MDBCardText>
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Last updated a month ago</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage src={Mod2} />
        <MDBCardBody>
          <MDBCardTitle>DESIGN AND CRAFTSMANSHIP</MDBCardTitle>
          <MDBCardText>
              Each piece in our assortment starts with our in-house design team. We’re inspired by sleek, modern sculptural designs and patterns; we celebrate the pop of a gemstone, the subtle sparkle of a diamond; and we’re energized by your personal style. Each design goes through countless versions in partnership with our master jewelers to perfect settings, lengths, chain links, clasps, ring comfort, earring fit—no detail goes unnoticed or undiscussed—until the piece is exactly right.          </MDBCardText>
              <br/>
            
              <MDBCardText>
            <small className='text-muted'>Last updated a month ago</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage src={Mod3} />
        <MDBCardBody>
                <MDBCardTitle>SUSTAINABILITY</MDBCardTitle>
                 <MDBCardText>HOW WE CONSIDER OUR IMPACT<MDBCardText>
      
                <MDBCardText>“Fine jewelry for my damn self” is our mantra, but in creating the pieces that you love, it is just as important to us that you feel good about where they come from. Our entire production ecosystem—including sourcing, manufacturing, and branding—aims to mitigate our impact on the environment, support and empower our partners, and give back to our communities. We know how our materials are sourced and processed, and the working conditions that they were made in.
                   </MDBCardText>
        </MDBCardText>
            <small className='text-muted'>Last updated a month ago</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>

       

      </header>

      
      
    );
}

