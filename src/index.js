import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"; 

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import Myhomepage from './pages/Myhomepage';
import About from "./pages/About";
import Signup from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Shopall from './pages/Shopall';
import Gifts from './pages/Gifts';

import NavScroll from './components/Navbar';
import Foot  from './components/Footer';

{/* import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import Homepage from './pages/Myhomepage';
import About from "./pages/About";*/ }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>  
      <NavScroll />
    
      <Routes>
        <Route path='/' element={ <Myhomepage/> } />
        <Route path='/shop' element={ <Shopall/> } />
        <Route path='/cart' element={ <Cart/> } />
        <Route path='/about' element={ <About/> } />
        <Route path='/register' element={ <Signup/> } />
        <Route path='/login' element={ <Login/> } />
        <Route path='/gifts' element={ <Gifts/> } />
        <Route path='*' element={ <Navigate to = '/' /> } />
      </Routes>
    
      <Foot />
    </Router>
  </React.StrictMode>
);
