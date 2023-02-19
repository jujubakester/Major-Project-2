import React from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBListGroup,
    MDBListGroupItem,
    MDBRipple,
    MDBRow,
    MDBTooltip,
    MDBTypography,
    } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Cart() {

  const updateCart = (e) => {

    let targetValue = e.target.value;
    let targetOldVal = e.target.dataset.oldval;
    let targetId = e.target.id;
    let targetPrice = parseInt(e.target.dataset.price);
    let currentSubPrice = parseInt(document.getElementById('s-price-'+targetId).innerHTML);
    let newPrice = '';
    let prod_sum = parseInt(document.getElementById('product_sum').innerHTML);
    let grand_total = parseInt(document.getElementById('grand_total').innerHTML);

    if (targetValue > targetOldVal) {
      newPrice = currentSubPrice + targetPrice;
      prod_sum = prod_sum + targetPrice;
      grand_total = grand_total + targetPrice;
    } else {
      newPrice = currentSubPrice - targetPrice;
      prod_sum = prod_sum - targetPrice;
      grand_total = grand_total - targetPrice;
    }

    e.target.dataset.oldval = targetValue;
    document.getElementById('s-price-'+e.target.id).innerHTML = newPrice;
    document.getElementById('product_sum').innerHTML = prod_sum;
    document.getElementById('grand_total').innerHTML = grand_total;
  }

  let count=0, sum=0, cartItems='';
  if(localStorage.getItem("count")){
    count = parseInt(localStorage.getItem("count"));
  }
  if(localStorage.getItem("sum")){
    sum = parseInt(localStorage.getItem("sum"));
  }
  if(localStorage.getItem("cart")){
    cartItems = JSON.parse(localStorage.getItem("cart"));
  }
  let arr_cartItems = Object.values(cartItems);

console.log(arr_cartItems);
      
      return ( 
        <section className="h-100">
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center my-4">
              <MDBCol md="8">
                <MDBCard className="mb-4">
                  <MDBCardHeader className="py-3">
                    <MDBTypography tag="h5" className="mb-0">
                      Cart - {count} items
                    </MDBTypography>
                  </MDBCardHeader>
                  <MDBCardBody>

                  {arr_cartItems.map(item => ( 

                    <MDBRow className="mb-3">
                      <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                        <MDBRipple rippleTag="div" rippleColor="light"
                          className="bg-image rounded hover-zoom hover-overlay">
                          <img
                            src={item.image}
                            className="w-100" />
                          <a href="#!">
                            <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" , }}>
                            </div>
                          </a>
                        </MDBRipple>
                      </MDBCol>
        
                      <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                        <p>
                          <strong>{item.title}</strong>
                        </p>
                        <p>
                          ₱{item.price}
                        </p>
                        
                        <MDBTooltip wrapperProps={{ size: "sm" }} wrapperClass="me-1 mb-2"
                          title="Remove item">
                          <MDBIcon fas icon="trash" />
                        </MDBTooltip>
        
                        {/* <MDBTooltip wrapperProps={{ size: "sm" , color: "danger" }} wrapperClass="me-1 mb-2"
                          title="Move to the wish list">
                          <MDBIcon fas icon="heart" />
                  </MDBTooltip> */}
                      </MDBCol>
                      <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                        <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                          
                          <MDBInput onChange={updateCart} data-oldval={item.qty} data-price={item.price} id={item.title} defaultValue={item.qty} min={0} type="number" label="Quantity" />
        
                        </div>
        
                        <p className="text-start text-md-center">
                          <strong>
                            <span>₱</span>
                            <span id={'s-price-'+item.title}>{item.price * item.qty}</span>
                          </strong>
                        </p>
                      </MDBCol>
                    </MDBRow>
                    
                    ))}
                    
                    <hr className="my-4" />
                  </MDBCardBody>
                </MDBCard>
        
                <MDBCard className="mb-4">
                  <MDBCardBody>
                    <p>
                      <strong>Expected shipping delivery</strong>
                    </p>
                    <p className="mb-0">5-7 business days</p>
                  </MDBCardBody>
                </MDBCard>
        
                <MDBCard className="mb-4 mb-lg-0">
                  <MDBCardBody>
                    <p>
                      <strong>We accept</strong>
                    </p>
                    <MDBCardImage className="me-2" width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                      alt="Visa" />
                    <MDBCardImage className="me-2" width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                      alt="American Express" />
                    <MDBCardImage className="me-2" width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                      alt="Mastercard" />
                    <MDBCardImage className="me-2" width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                      alt="PayPal acceptance mark" />
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-4">
                  <MDBCardHeader>
                    <MDBTypography tag="h5" className="mb-0">
                      Summary
                    </MDBTypography>
                  </MDBCardHeader>
                  <MDBCardBody>
                    <MDBListGroup flush>
                      <MDBListGroupItem
                        className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Products
                        <span>
                          <span>₱</span>
                          <span id="product_sum">{sum}</span>
                        </span>
                      </MDBListGroupItem>
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0">
                        Shipping
                        <span>Free</span>
                      </MDBListGroupItem>
                      <MDBListGroupItem
                        className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                          {/*<strong>
                            <p className="mb-0">(including VAT)</p>
                          </strong>*/}
                        </div>
                        <span>
                          <strong>
                            <span>₱</span>
                            <span id="grand_total">{sum}</span>
                          </strong>
                        </span>
                      </MDBListGroupItem>
                    </MDBListGroup>
        
                    <Link to='/checkout' className="btn btn-primary btn-lg">
                      Go to checkout
                    </Link>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      );
    }