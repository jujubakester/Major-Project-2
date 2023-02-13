import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import Ban1 from '../images/ban8.jpg';
import Ban from '../images/ban00.jpg';
import Ban2 from '../images/ban2.jpg';
import Ban3 from '../images/ban13.jpg';


export default function Mycarousel() {
  return (
    <MDBCarousel className="Homecarousel" showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={Ban1}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={Ban}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={Ban2}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src={Ban3}
        alt='...'
      />
    </MDBCarousel>
  );
}