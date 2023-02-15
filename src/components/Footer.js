import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


export default function Foot() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted mt-4'>
    
      <section className='py-4'>
        <MDBContainer className='text-center text-md-start'>
          <MDBRow className='mt-3 footerfont'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Ju.Welry
              </h6>
              <p>
                For inquiries, please contact us!
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <Link to='/shop/bracelet' className='text-reset'>Bracelet</Link>
              </p>
              <p>
                <Link to='/shop/rings' className='text-reset'>Rings</Link>
              </p>
              <p>
                <Link to='/shop/necklace' className='text-reset'>Necklace</Link>
              </p>
              <p>
                <Link to='/shop/earings' className='text-reset'>Earings</Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <Link to='/contact' className='text-reset'>Contact Us</Link>
              </p>
              <p>
                <Link to='#' className='text-reset'>Terms &amp; Condition</Link>
              </p>
              <p>
                <Link to='#' className='text-reset'>Shipping</Link>
              </p>
              <p>
                <Link href='#!' className='text-reset'>FAQs</Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Tarlac City, PH
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@juwelry.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +63 234 567 8910
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +63 234 567 9101
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <section className='d-flex container justify-content-center justify-content-lg-between py-4 border-bottom'>
        
          <div className='me-5 d-none d-lg-block'>
            <span>Get connected with us:</span>
          </div>

          <div>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="twitter" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="instagram" />
            </a>
          </div>
        
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='http://juwelry.com/'>
          www.juwelry.com
        </a>
      </div>
    </MDBFooter>
  );
}