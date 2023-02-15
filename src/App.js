import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"; 
import { useState } from "react";

import NavScroll from './components/Navbar';
import Foot  from './components/Footer';

import Myhomepage from './pages/Myhomepage';
import About from "./pages/About";
import Signup from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Shopall from './pages/Shopall';
import Gifts from './pages/Gifts';
import Contact from './pages/Contact';
import Account from './pages/Account';

export default function App(){

  const[counter, setCounter] = useState(0);

  return (
    <Router>
        <NavScroll ctr={counter} />
        <Routes>
            <Route path='/' element={ <Myhomepage/> } />
            <Route path='/shop/*' element={ <Shopall updateCounter={() => setCounter(counter+1)} /> } />
            <Route path='/cart' element={ <Cart/> } />
            <Route path='/about' element={ <About/> } />
            <Route path='/register' element={ <Signup/> } />
            <Route path='/login' element={ <Login/> } />
            <Route path='/gifts' element={ <Gifts/> } />
            <Route path='/contact' element={ <Contact/> } />
            <Route path='/my-account' element={ <Account/> } />
            <Route path='*' element={ <Navigate to = '/' /> } />
        </Routes>
        <Foot />
    </Router>
  );
}