import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

import Ban from '../images/ban8.jpg';
import Ban1 from '../images/ban00.jpg';
import Ban2 from '../images/ban2.jpg';
import Ban3 from '../images/ban13.jpg';


export default function Mycarousel() {
  return (
    <MDBCarousel className="Homecarousel" showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={Ban}
        alt='...'
      >
          <h5 className="text-start  fs-1 fst-italic fw-bold myiconic text-danger">Special Offers!</h5>
        <p  className="text-start fs-2 text-dark fw-bold">Buy 2 items, get your next item for 40% discount!</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={Ban1}
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