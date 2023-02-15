import React from 'react';
import { Link } from 'react-router-dom';
import Myhero from '../images/Hero1.jpg';

const divStyle = {
  backgroundImage: 'url(' + Myhero + ')',
  height: '400px'
};

export default function HeroImage() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div className='p-5 text-center bg-image' style={divStyle}>
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white myiconic '>
              <h1 className='mb-3 fst-italic' >Find your sparkle. Find your style.</h1>
              <Link className='btn btn-outline-light btn-lg' to='/shop' role='button'>Shop Now!</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}