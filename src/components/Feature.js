import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Feature () {
  return (
    <React.Fragment>
      <div className="homefeature">
        <div className="row">
          <div className="col">  
          <i class="fas fa-lg fa-shipping-fast"></i>
            <p>Free Shipping On Orders over ₱1500</p>
          </div>
          <div className="col">
          <i class="fas fa-lg fa-hand-holding-usd"></i>
          <p>Money back guarantee!</p>
          </div>
          <div className="col"> 
          <i class="fas fa-lg fa-money-bill"></i>
          <p>Open for layaway with terms and condition</p>
          </div>
          <div className="col">
          <i className="fas fa-lg fa-money-bill-wave"></i>
          <p>5% discount on your next order!</p>
          </div>
        </div>
    </div>
    </React.Fragment>
  )
}


