import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
  MDBRipple
} from "mdb-react-ui-kit";
import Mygifts from '../images/ban8.jpg';

import G1 from '../images/18k5.jpg';
import G2 from '../images/18k4.jpg';
import G3 from '../images/18k3.jpg';
import G4 from '../images/forher6.jpg';
import G5 from '../images/forher5.jpg';
import G6 from '../images/forher4.jpg';
import G7 from '../images/er0.jpg';
import G8 from '../images/er1.jpg';
import G9 from '../images/er14.jpg';
import G0 from '../images/forhim1.jpg';
import G01 from '../images/forhim2.jpg';
import G02 from '../images/forhim3.jpg';

import Giftsidebar from '../components/Giftsidebar';


const divStyle = {
  backgroundImage: 'url(' + Mygifts + ')',
  height: '250px'
};

export default function Gifts() {
  return (
    <React.Fragment>
    <header style={{ paddingLeft: 0 }}>
      <div
      className='p-5 text-center bg-image'
      style={divStyle}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
            <h1 className='mb-3 Herofont text-danger fst-italic'>Valentines Gifts</h1>
              <p className='mb-3 myiconic'>Let your style shine</p>
            </div>
          </div>
        </div>
        
      </div>
    </header>

    <MDBContainer className='text-center text-md-start mt-5 mycart'>
    
      <MDBRow>
        <MDBCol md='2'>
          <Giftsidebar/>
        </MDBCol>
        <MDBCol md='10'>
          
        <MDBContainer fluid className="text-center shopwrap">

        <MDBRow>
          <MDBCol md="12" lg="4" className="mb-4">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom"
              >
                <MDBCardImage
                  src={G1}
                  fluid
                  className="w-100"
                />
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start align-items-end h-100">
                      <h5>
                        <span className="badge bg-primary ms-2">21k Gold</span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <a href="#!" className="text-reset">
                  <h5 className="card-title mb-3">Heartstrings</h5>
                </a>
                <a href="#!" className="text-reset">
                  <p>For her</p>
                </a>
                <h6 className="mb-3">₱8,375</h6>
                <MDBBtn>Add to Cart</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom"
              >
                <MDBCardImage
                  src={G2}
                  fluid
                  className="w-100"
                />
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start align-items-end h-100">
                      <h5>
                        <span className="badge bg-primary ms-2">21k Gold</span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <a href="#!" className="text-reset">
                  <h5 className="card-title mb-3">Sphere</h5>
                </a>
                <a href="#!" className="text-reset">
                  <p>For her</p>
                </a>
                <h6 className="mb-3">₱6,365</h6>
                <MDBBtn>Add to Cart</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom"
              >
                <MDBCardImage
                  src= {G3}
                  fluid
                  className="w-100"
                />
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start align-items-end h-100">
                    <h5>
                    <span className="badge bg-primary ms-2">21k Gold</span>
                  </h5>
                 </div>
                  </div>
                  <div class="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <a href="#!" className="text-reset">
                  <h5 className="card-title mb-3">Octalove</h5>
                </a>
                <a href="#!" className="text-reset">
                  <p>For her</p>
                </a>
                <h6 className="mb-3">
                <h6 className="mb-3">₱11,089</h6>
                
                </h6>
                <MDBBtn>Add to Cart</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="12" lg="4" className="mb-4">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom"
              >
                <MDBCardImage
                  src= {G4}
                  fluid
                  className="w-100"
                />
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start align-items-end h-100">
                    <h5>
                        <span className="badge bg-primary ms-2">Bundle</span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <a href="#!" className="text-reset">
                  <h5 className="card-title mb-3">Sparkle</h5>
                </a>
                <a href="#!" className="text-reset">
                  <p>For her</p>
                </a>
                <h6 className="mb-3">₱14,405</h6>
                <MDBBtn>Add to Cart</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom"
              >
                <MDBCardImage
                  src={G5}
                  fluid
                  className="w-100"
                />
                <a href="#!">
                  <div className="mask">
                    <div class="d-flex justify-content-start align-items-end h-100">
                       <h5>
                          <span className="badge bg-primary ms-2">Bundle</span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <a href="#!" className="text-reset">
                  <h5 className="card-title mb-3">Doclove</h5>
                  
                </a>
                <a href="#!" className="text-reset">
                  <p>For her</p>
                </a>
                <h6 className="mb-3">₱6,868</h6>
                <MDBBtn>Add to Cart</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom"
              >
                <MDBCardImage
                  src={G6}
                  fluid
                  className="w-100"
                />
                <a href="#!">
                  <div className="mask">
                    <div class="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          <span className="badge bg-primary ms-2">Bundle</span>
                        </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <a href="#!" className="text-reset">
                  <h5 className="card-title mb-3">Spherelove</h5>
                </a>
                <a href="#!" className="text-reset">
                  <p>For her</p>
                </a>
                <h6 className="mb-3">₱6,863</h6>
                <MDBBtn>Add to Cart</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="12" lg="4" className="mb-4">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom"
              >
              <MDBCardImage
              src={G7}
              fluid
              className="w-100"
            />
            <a href="#!">
              <div className="mask">
                <div class="d-flex justify-content-start align-items-end h-100">
                    <h5>
                      <span className="badge bg-primary ms-2">Diamonds</span>
                    </h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <a href="#!" className="text-reset">
              <h5 className="card-title mb-3">Bright</h5>
            </a>
            <h6 className="mb-3">₱22,250</h6>
            <MDBBtn>Add to Cart</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md="12" lg="4" className="mb-4">
        <MDBCard>
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image rounded hover-zoom"
          >
          <MDBCardImage
          src={G8}
          fluid
          className="w-100"
        />
        <a href="#!">
          <div className="mask">
            <div class="d-flex justify-content-start align-items-end h-100">
                <h5>
                  <span className="badge bg-primary ms-2">Diamonds</span>
                </h5>
            </div>
          </div>
          <div className="hover-overlay">
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            ></div>
          </div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <a href="#!" className="text-reset">
          <h5 className="card-title mb-3">Bebu</h5>
        </a>
          <h6 className="mb-3">₱8,045</h6>
        <MDBBtn>Add to Cart</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  </MDBCol>
  <MDBCol md="12" lg="4" className="mb-4">
    <MDBCard>
      <MDBRipple
        rippleColor="light"
        rippleTag="div"
        className="bg-image rounded hover-zoom"
      >
      <MDBCardImage
      src={G9}
      fluid
      className="w-100"
    />
    <a href="#!">
      <div className="mask">
        <div class="d-flex justify-content-start align-items-end h-100">
            <h5>
              <span className="badge bg-primary ms-2">Diamonds</span>
            </h5>
        </div>
      </div>
      <div className="hover-overlay">
        <div
          className="mask"
          style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
        ></div>
      </div>
    </a>
  </MDBRipple>
  <MDBCardBody>
    <a href="#!" className="text-reset">
      <h5 className="card-title mb-3">Bae</h5>
    </a>
     <h6 className="mb-3">₱6,700</h6>
    <MDBBtn>Add to Cart</MDBBtn>
  </MDBCardBody>
</MDBCard>
</MDBCol>
<MDBCol md="12" lg="4" className="mb-4">
<MDBCard>
  <MDBRipple
    rippleColor="light"
    rippleTag="div"
    className="bg-image rounded hover-zoom"
  >
  <MDBCardImage
  src={G0}
  fluid
  className="w-100"
/>
<a href="#!">
  <div className="mask">
    <div class="d-flex justify-content-start align-items-end h-100">
        <h5>
          <span className="badge bg-primary ms-2">18k Gold</span>
        </h5>
    </div>
  </div>
  <div className="hover-overlay">
    <div
      className="mask"
      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
    ></div>
  </div>
</a>
</MDBRipple>
<MDBCardBody>
<a href="#!" className="text-reset">
  <h5 className="card-title mb-3">Heaven</h5>
</a>
<a href="#!" className="text-reset">
  <p>For him</p>
</a>
<h6 className="mb-3">₱27,805</h6>
<MDBBtn>Add to Cart</MDBBtn>
</MDBCardBody>
</MDBCard>
</MDBCol>
<MDBCol md="12" lg="4" className="mb-4">
<MDBCard>
<MDBRipple
rippleColor="light"
rippleTag="div"
className="bg-image rounded hover-zoom"
>
<MDBCardImage
src={G01}
fluid
className="w-100"
/>
<a href="#!">
<div className="mask">
  <div class="d-flex justify-content-start align-items-end h-100">
      <h5>
        <span className="badge bg-primary ms-2">18k Gold</span>
      </h5>
  </div>
</div>
<div className="hover-overlay">
  <div
    className="mask"
    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
  ></div>
</div>
</a>
</MDBRipple>
<MDBCardBody>
<a href="#!" className="text-reset">
<h5 className="card-title mb-3">Dazzled</h5>
</a>
<a href="#!" className="text-reset">
<p>For him</p>
</a>
<h6 className="mb-3">₱25,125</h6>
<MDBBtn>Add to Cart</MDBBtn>
</MDBCardBody>
</MDBCard>
</MDBCol>
<MDBCol md="12" lg="4" className="mb-4">
<MDBCard>
<MDBRipple
rippleColor="light"
rippleTag="div"
className="bg-image rounded hover-zoom"
>
                <MDBCardImage
                  src={G02}
                  fluid
                  className="w-100"
                />
                <a href="#!">
                  <div className="mask">
                    <div class="d-flex justify-content-start align-items-end h-100">
                      <h5>
                      <span className="badge bg-primary ms-2">18k Gold</span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <a href="#!" className="text-reset">
                  <h5 className="card-title mb-3">Hold</h5>
                </a>
                <a href="#!" className="text-reset">
                  <p>For him</p>
                </a>
                <h6 className="mb-3">
                <h6 className="mb-3">₱25,125</h6>
                </h6>
                <MDBBtn>Add to Cart</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>


        </MDBCol>
      </MDBRow>
      </MDBContainer>
      </React.Fragment>
  );
}