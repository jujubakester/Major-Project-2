import React, { useState, useEffect } from 'react';
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

import Shopsidebar from '../components/Shopsidebar';

import E1 from '../images/eee1.jpg';
import E2 from '../images/eee4.jpg';
import E3 from '../images/eee5.jpg';
import B1 from '../images/bb15.jpg';
import B2 from '../images/bb11.jpg';
import B3 from '../images/bb0.jpg';
import N1 from '../images/n25.jpg';
import N2 from '../images/n24.jpg';
import N3 from '../images/n22.jpg';
import R1 from '../images/wed17.jpg';
import R2 from '../images/wed14.jpg';
import R3 from '../images/wed19.jpg';
import Myhero from '../images/Hero1.jpg';

const divStyle = {
  backgroundImage: 'url(' + Myhero + ')',
  height: '250px'
};


export default function Shopall({updateCounter}) {

  const categoryClicked = (e) => {

    e.preventDefault();
    const targetCatWrap = '.shop-'+e.target.name;
    document.querySelectorAll('#shopwrap div.row > div').forEach(el => {el.style.display="block"});

    if(e.target.name != 'all'){
      document.querySelectorAll("#shopwrap div.row > div:not("+targetCatWrap+")").forEach(el => {el.style.display="none"});
    }
  }

  let count = 0, sum = 0, cart = {};

  if(localStorage.getItem("count")){
    count = parseInt(localStorage.getItem("count"));
  }
  if(localStorage.getItem("sum")){
    sum = parseInt(localStorage.getItem("sum"));
  }
  if(localStorage.getItem("cart")){
  cart = JSON.parse(localStorage.getItem("cart"));
  }

  const addToCart = (event) => {
    
    updateCounter();

    let price = Number(event.target.dataset.price);
    let image = event.target.dataset.image;
    let title = event.target.dataset.prodname;
    let id = event.target.dataset.id;

    if(id in cart)
    {
      cart[id].qty++;
    } else 
    {
        let cartItem = {
            title: title,
            image: image,
            price: price,
            qty: 1
        };
        cart[id] = cartItem
    }

    count++;
    sum += price;
      
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("sum", sum);
    localStorage.setItem("count", count);
  }


  return (
    <React.Fragment>
    
    <header style={{ paddingLeft: 0 }}>
      <div className='p-5 text-center bg-image' style={divStyle}>
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100 '>
            <div className='text-white myiconic'>
              <h1 className='mb-3 fst-italic'>Iconic. Trendy. Wear it with style.</h1>
             </div>
          </div>
        </div>
      </div>
    </header>

    <MDBContainer className='text-center text-md-start mt-5 mycart'>
    
      <MDBRow>
        <MDBCol md='2'>
          <Shopsidebar categoryClicked={categoryClicked}/>
        </MDBCol>
        <MDBCol md='10'>
          
        <MDBContainer fluid id="shopwrap" className="text-center shopwrap">

        <MDBRow>
          <MDBCol md="12" lg="4" className="mb-4 shop-earrings">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom"
              >
                <MDBCardImage
                  src={E1}
                  fluid
                  className="w-100"
                />
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start align-items-end h-100">
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
                  <h5 className="card-title mb-3">Heart</h5>
                </a>
                <a href="#!" className="text-reset">
                  <p>Earings</p>
                </a>
                <h6 className="mb-3">₱4,690</h6>
                <MDBBtn data-id="1" data-price='4690' data-prodname="Heart" data-image={E1} onClick={addToCart}>Add to Cart</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4 shop-earrings">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom"
              >
                <MDBCardImage
                  src={E2}
                  fluid
                  className="w-100"
                />
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start align-items-end h-100">
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
                  <h5 className="card-title mb-3">Tree</h5>
                </a>
                <a href="#!" className="text-reset">
                  <p>Earings</p>
                </a>
                <h6 className="mb-3">₱6,365</h6>
                <MDBBtn data-id="2" data-price='6365' data-prodname="Tree" data-image={E2} onClick={addToCart}>Add to Cart</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4 shop-earrings">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom"
              >
                <MDBCardImage
                  src= {E3}
                  fluid
                  className="w-100"
                />
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start align-items-end h-100">
                    <h5>
                    <span className="badge bg-primary ms-2">18k Gold</span>
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
                  <h5 className="card-title mb-3">Butterfly</h5>
                </a>
                <a href="#!" className="text-reset">
                  <p>Earings</p>
                </a>
                <h6 className="mb-3">
                <h6 className="mb-3">₱8,375</h6>
                
                </h6>
                <MDBBtn data-id="3" data-price='8375' data-prodname="Butterfly" data-image={E3} onClick={addToCart}>Add to Cart</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="12" lg="4" className="mb-4 shop-bracelet">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom"
              >
                <MDBCardImage
                  src= {B1}
                  fluid
                  className="w-100"
                />
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start align-items-end h-100">
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
                  <h5 className="card-title mb-3">Bang</h5>
                </a>
                <a href="#!" className="text-reset">
                  <p>Bracelet</p>
                </a>
                <h6 className="mb-3">₱14,405</h6>
                <MDBBtn>Add to Cart</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4 shop-bracelet">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom"
              >
                <MDBCardImage
                  src={B2}
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
                  <h5 className="card-title mb-3">Brilliant</h5>
                  
                </a>
                <a href="#!" className="text-reset">
                  <p>Bracelet</p>
                </a>
                <h6 className="mb-3">₱53,935</h6>
                <MDBBtn>Add to Cart</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4 shop-bracelet">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom"
              >
                <MDBCardImage
                  src={B3}
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
                  <h5 className="card-title mb-3">Swirl</h5>
                </a>
                <a href="#!" className="text-reset">
                  <p>Bracelet</p>
                </a>
                <h6 className="mb-3">₱10,050</h6>
                <MDBBtn>Add to Cart</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="12" lg="4" className="mb-4 shop-necklace">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom"
              >
              <MDBCardImage
              src={N1}
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
              <h5 className="card-title mb-3">Turtle</h5>
            </a>
            <a href="#!" className="text-reset">
              <p>Necklace</p>
            </a>
            <h6 className="mb-3">₱8,710</h6>
            <MDBBtn>Add to Cart</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md="12" lg="4" className="mb-4 shop-necklace">
        <MDBCard>
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image rounded hover-zoom"
          >
          <MDBCardImage
          src={N2}
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
          <h5 className="card-title mb-3">Iconic</h5>
        </a>
        <a href="#!" className="text-reset">
          <p>Necklace</p>
        </a>
        <h6 className="mb-3">₱9,045</h6>
        <MDBBtn>Add to Cart</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  </MDBCol>
  <MDBCol md="12" lg="4" className="mb-4 shop-necklace">
    <MDBCard>
      <MDBRipple
        rippleColor="light"
        rippleTag="div"
        className="bg-image rounded hover-zoom"
      >
      <MDBCardImage
      src={N3}
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
      <h5 className="card-title mb-3">Strings</h5>
    </a>
    <a href="#!" className="text-reset">
      <p>Necklace</p>
    </a>
    <h6 className="mb-3">₱6,700</h6>
    <MDBBtn>Add to Cart</MDBBtn>
  </MDBCardBody>
</MDBCard>
</MDBCol>
<MDBCol md="12" lg="4" className="mb-4 shop-rings">
<MDBCard>
  <MDBRipple
    rippleColor="light"
    rippleTag="div"
    className="bg-image rounded hover-zoom"
  >
  <MDBCardImage
  src={R1}
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
  <h5 className="card-title mb-3">Everlasting</h5>
</a>
<a href="#!" className="text-reset">
  <p>Wedding Band</p>
</a>
<h6 className="mb-3">₱5,360</h6>
<MDBBtn>Add to Cart</MDBBtn>
</MDBCardBody>
</MDBCard>
</MDBCol>
<MDBCol md="12" lg="4" className="mb-4 shop-rings">
<MDBCard>
<MDBRipple
rippleColor="light"
rippleTag="div"
className="bg-image rounded hover-zoom"
>
<MDBCardImage
src={R2}
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
<h5 className="card-title mb-3">Infinity</h5>
</a>
<a href="#!" className="text-reset">
<p>Wedding Band</p>
</a>
<h6 className="mb-3">₱12,395</h6>
<MDBBtn>Add to Cart</MDBBtn>
</MDBCardBody>
</MDBCard>
</MDBCol>
<MDBCol md="12" lg="4" className="mb-4 shop-rings">
<MDBCard>
<MDBRipple
rippleColor="light"
rippleTag="div"
className="bg-image rounded hover-zoom"
>
                <MDBCardImage
                  src={R3}
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
                  <h5 className="card-title mb-3">Forever</h5>
                </a>
                <a href="#!" className="text-reset">
                  <p>Wedding Band</p>
                </a>
                <h6 className="mb-3">
                <h6 className="mb-3">₱12,395</h6>
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