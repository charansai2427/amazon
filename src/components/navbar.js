import React from 'react';
import { useState } from 'react';
import { BsSearch } from "react-icons/bs"
import { BiUserCircle } from "react-icons/bi"

import "../styles/navbar.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


import { baseurl } from '../utils/api';
const Navbar = () => {

    const [isOpen, setIsopen] = useState(false);
    const navigate = useNavigate();
    const handleNav = async(e) => {
        try{
            const {data} = await axios.post(baseurl + '/payment/checkout', {
                title: "tvshows",
                desc: "payment of movie",
                price: 3000,
    
                _id: "8698635669",
                duration: "1 year"
    
            })
            window.location.assign(data.url)
        }
        catch(e){console.log(e)}
        
    }

    return (

        <div className='parent-class'>

            <div className='nav-parent'>

                <div><b style={{ color: 'white' }}>PrimeVideos</b></div>


                <div>
                    <select>
                        <option>Home</option>
                        <option>ALL</option>
                        <option>Movies</option>
                        <option>Tv Shows</option>
                    </select>
                </div>

                <div>
                    <select>
                        <option>Store</option>
                        <option>ALL</option>
                        <option>Rent</option>
                        <option>Channels</option>
                    </select>
                </div>

                <div> <b>Live Tv</b></div>

                <div>
                    <select>
                        <option>Categories</option>
                        <option>Adventure</option>
                        <option>Romance</option>
                        <option>Kids</option>
                        <option>Thriller</option>
                        <option>Love</option>
                        <option>Kids</option>
                    </select>
                </div>

                <div>
                    <select>
                        <option>MyStuff</option>
                        <option>ALL</option>
                        <option>Wishlist</option>
                        <option>Rentals</option>
                    </select>
                </div>


                <div className='nav-search'>

                    <div>
                        <BsSearch onClick={() => setIsopen(!isOpen)} type='button' className='search-btn' />
                    </div>

                    <div className='nav-end'>

                        <div><BiUserCircle className='user' /></div>
                    </div>


                    <div>
                        <select onChange={(e) => handleNav(e)}>
                            <option value="/payment">susbscribe</option>
                            <option value="/payment">Help</option>
                            <option value="/payment">Accounts</option>
                            <option value="/payment"> settings</option>
                            <option value="/payment">Signout</option>
                        </select>
                    </div>



                </div>

            </div>


            <div className={`inpsearch ${isOpen ? "open" : "notopen"}`}>

                <div className='inp-search'>
                    <BsSearch className='searchbar' />
                    <input type='text' placeholder='Search' className='input-search' />
                </div>
            </div>



        </div>


    )
}

export default Navbar;