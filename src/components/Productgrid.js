import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBRipple } from "mdb-react-ui-kit";
import img1 from '../images/sam1.jpg';
import img2 from '../images/sam2.jpg';
import img3 from '../images/sam4.jpg';
import img4 from '../images/sam20.jpg';
import img5 from '../images/sam5.jpg';
import img6 from '../images/sam6.jpg';

export default function Grid() {
  return (
    <MDBContainer fluid className="my-5 text-center">

      <h4 className="mt-4 mb-5"></h4>

      <MDBRow>
        <MDBCol md="12" lg="4" className="mb-4">
          <MDBRipple rippleColor="dark" rippleTag="div" className="bg-image rounded hover-zoom shadow-1-strong">
            <img src={img1} className="fluid w-100"/>
            <a href="/shop">
              <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }} >
                <div className="d-flex justify-content-start align-items-start h-100">
                  <h5>
                    <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">Bracelet</span>
                  </h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
              </div>
            </a>
          </MDBRipple>
        </MDBCol>

        <MDBCol md="6" lg="4" className="mb-4">
          <MDBRipple rippleColor="dark" rippleTag="div" className="bg-image rounded hover-zoom shadow-1-strong">
            <img src={img2} className="fluid w-100"/>
            <a href="/shop">
              <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
                <div className="d-flex justify-content-start align-items-start h-100">
                  <h5>
                    <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">Rings</span>
                  </h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
              </div>
            </a>
          </MDBRipple>
        </MDBCol>

        <MDBCol md="6" lg="4" className="mb-4">
          <MDBRipple rippleColor="dark" rippleTag="div" className="bg-image rounded hover-zoom shadow-1-strong">
            <img src={img3} className="fluid w-100" />
            <a href="/shop">
              <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
                <div className="d-flex justify-content-start align-items-start h-100">
                  <h5>
                    <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">Necklace</span>
                  </h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
              </div>
            </a>
          </MDBRipple>
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol md="12" lg="4" className="mb-4">
          <MDBRipple rippleColor="dark" rippleTag="div" className="bg-image rounded hover-zoom shadow-1-strong">
            <img src={img4} className="fluid w-100" />
            <a href="/shop">
              <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
                <div className="d-flex justify-content-start align-items-start h-100">
                  <h5>
                    <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">Earings</span>
                  </h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
              </div>
            </a>
          </MDBRipple>
        </MDBCol>

        <MDBCol md="6" lg="4" className="mb-4">
          <MDBRipple rippleColor="dark" rippleTag="div" className="bg-image rounded hover-zoom shadow-1-strong">
            <img src={img6} className="fluid w-100"/>
            <a href="/shop">
              <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
                <div className="d-flex justify-content-start align-items-start h-100">
                  <h5>
                    <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">18k Gold</span>
                  </h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
              </div>
            </a>
          </MDBRipple>
        </MDBCol>

        <MDBCol md="6" lg="4" className="mb-4">
          <MDBRipple rippleColor="dark" rippleTag="div" className="bg-image rounded hover-zoom shadow-1-strong">
            <img src={img5} className="fluid w-100"/>
            <a href="/shop">
              <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
                <div className="d-flex justify-content-start align-items-start h-100">
                  <h5>
                    <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">24k Gold</span>
                  </h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
              </div>
            </a>
          </MDBRipple>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}