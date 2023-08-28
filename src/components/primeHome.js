import React from 'react'
import Home from "../components/home";
import Navbar from '../components/navbar';
import Slides from '../utils/carousel';
import CardCarousel from '../components/cardCarousel';
import { Outlet } from 'react-router-dom';

const PrimeHome = () => {
    return (

        <div className='prime-parent'>

            <Navbar className="navbar-parent" />
            <Slides />
            <CardCarousel />
            <Home />

<Outlet/>
        </div>
    )
}

export default PrimeHome