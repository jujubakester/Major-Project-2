import React from "react";
import HeroImage from '../components/Hero';
import Mycarousel  from '../components/Carousel';
import Grid  from '../components/Productgrid';
import {MDBContainer} from "mdb-react-ui-kit";
import Feature from '../components/Feature';

export default function Myhomepage (){
    return (
      <React.Fragment>
        <Mycarousel />
        <MDBContainer fluid className="container-lg text-center">
          <Grid />
        </MDBContainer>
        <HeroImage />
        <Feature />
      </React.Fragment>
    );
}

 

