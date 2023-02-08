import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavScroll from './components/Navbar';
import HeroImage from './components/Hero';
import App  from './components/Carousel'
import Grid  from './components/Productgrid'
import Foot  from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavScroll />
    <HeroImage />
    <App />
    <Grid />
    <Foot />
  </React.StrictMode>
);
