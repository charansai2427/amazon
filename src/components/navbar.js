import React from 'react';
import { useState } from 'react';
import { BsSearch } from "react-icons/bs"
import { login } from '../redux/slices/userSlice';

import "../styles/navbar.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';


import { baseurl } from '../utils/api';
const Navbar = () => {
    const [userDetails, setUserDetails]= useState({});
    const [isOpen, setIsopen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
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
    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(login({userDetails, navigate}))
      }

    return (

        <div className='navbar'>
        <div className='img'>
            <h3 className='logo' >prime video</h3>
        </div>
        
    
            <div className="dropdown">
                <p className="dropbtn">Home </p>
                <div className="dropdown-content">
                  <a href="#">All</a>
                  <a href="/home">Movies</a>
                  <a href="/home">Tv Shows</a>
                </div>
              </div>
              
              <div className="drop">
                <p className="downbtn">Store</p>
                <div className="drop-content">
                  <a href="#">All</a>
                  <a href="#">Rent</a>
                  <a href="#">Channels</a>
                </div>
              </div>
    
              <div>
                <p className='tv'>Live TV</p>
              </div>
    
        <div className="drop2">
        <h3 className="downbtn2">Categories</h3>
        <div className="drop2-content">
            <div className="column">
              <h3 className='gen'>Genres</h3>
              <a href="#">Action and adventure</a>
              <a href="#">Anime</a>
              <a href="#">Comedy</a>
              <a href="#">Documentary</a>
              <a href="#">Drama</a>
              <a href="#">Fantasy</a>
    
            </div>
            <div className="column">
            <a href="#">Horror</a>
              <a href="#">International</a>
              <a href="#">Kids</a>
              <a href="#">Music videos and concerts</a>
              <a href="#">Mystery and thrillers</a>
              <a href="#">Romance</a>
            </div>
            <div className="column">
              <h3 className='feature'>Featured collections </h3>
              <a href="#">Hindi</a>
              <a href="#">English</a>
              <a href="#">Telugu</a>
              <a href="#">Tamil</a>
              <a href="#">Malayalam</a>
    
            </div>
            <div className="column">
              <a href="#">Kannada</a>
              <a href="#">Marathi</a>
              <a href="#">Punjabi</a>
              <a href="#">Gujarati</a>
              <a href="#">Bengali</a>
    
            </div>
          </div>
        </div>
    
                  <h3 className='try'>Try for free</h3>
                
        <div className="drop3">
        <h3 className="downbtn3">EN</h3>
        <div className="drop3-content">
    
         
            <div className="column">
              <a href="#">Bahasa Indonesia</a>
              <a href="#">Bahasa Melayu</a>
              <a href="#">Dansk</a>
              <a href="#">Deutsch</a>
              <a href="#">English</a>
              <a href="#">Español</a>
              <a href="#">Français</a>
              <a href="#">Italiano</a>
            </div>
    
            <div className="column">
            <a href="#">Magyar</a>
              <a href="#">Nederlands</a>
              <a href="#">Norsk</a>
              <a href="#">Polski</a>
              <a href="#">Português (Brasil)</a>
              <a href="#">Português (Portugal)</a>
              <a href="#">Română</a>
              <a href="#">Suomi</a>
    
            </div>
    
            <div className="column">
              <a href="#">Svenska</a>
              <a href="#">Türkçe</a>
              <a href="#">Wikang Filipino</a>
              <a href="#">Čeština</a>
              <a href="#">Ελληνικά</a>
              <a href="#">Русский</a>
              <a href="#">עברית</a>
              <a href="#">العربية</a>
    
            </div>
    
            <div className="column">
              <a href="#">हिन्दी</a>
              <a href="#">தமிழ்</a>
              <a href="#">తెలుగు</a>
              <a href="#">ไทย</a>
              <a href="#">日本語</a>
              <a href="#">简体中文</a>
              <a href="#">繁體中文</a>
              <a href="#">한국어</a>
    
            </div>
        </div>
      </div>
    
            <div className="profile">
                <img className='profile-btn' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTAgMTAwYzI3LjYxNCAwIDUwLTIyLjM4NiA1MC01MFM3Ny42MTQgMCA1MCAwIDAgMjIuMzg2IDAgNTBzMjIuMzg2IDUwIDUwIDUwWiIgZmlsbD0idXJsKCNhKSIvPjxwYXRoIGQ9Ik04Ni43MTggODMuOTM5Qzc3LjU4MyA5My44MTYgNjQuNTE0IDEwMCA1MCAxMDBjLTE0LjczIDAtMjcuOTc0LTYuMzctMzcuMTI0LTE2LjUwNiAxLjIxMi0zLjA5IDIuOTIyLTUuOTAyIDUuMzA0LTguMjI4QzI1LjQ2IDY4LjE1NyAzOC40MjUgNjUuMjM1IDUwIDY1LjIzNWMxMS41NTQgMCAyMy42NTUgMi45MDYgMzAuOTMzIDkuOTkzIDIuNTEyIDIuNDQ2IDQuNDA1IDUuNDMgNS43ODUgOC43MVoiIGZpbGw9InVybCgjYikiLz48cGF0aCBkPSJNNjkuNTIgMzcuMTFjLjc5NC0xMi4yMTMtNS44OS0yMi4yNjYtMTkuNDY4LTIyLjI2Ni0xMy41NzkgMC0yMC4yNjMgMTAuMDUzLTE5LjQ2OCAyMi4yNjUuNzk1IDEyLjIxMyA4Ljc5NCAyMC43MDMgMTkuNDY4IDIwLjcwMyAxMC42NzMgMCAxOC42NzMtOC40OSAxOS40NjgtMjAuNzAzWiIgZmlsbD0idXJsKCNjKSIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAiIHkxPSIwIiB4Mj0iMTAwIiB5Mj0iMTAwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzRDNzE4RSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzJCNDA1MyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJiIiB4MT0iNDEuNTU0IiB5MT0iMzAuMzQ3IiB4Mj0iODIuNzEyIiB5Mj0iNzEuNTM5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIuODUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJjIiB4MT0iNDEuNTU0IiB5MT0iMzAuMzQ3IiB4Mj0iODIuNzEyIiB5Mj0iNzEuNTM5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIuODUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg=="/>
                <div className="profile-content">
                  <a href="/login" onClick={handleSubmit}>Sign In</a>
                  <a href="#">Help</a>
                  <a href="#">Watch Anywhere</a>
                </div>
              </div>
              <div className='nav-search'>

<div>
    <BsSearch onClick={() => setIsopen(!isOpen)} type='button' className='search-btn' />
</div>

<div className='pay'>
    <select onChange={(e) => handleNav(e)}>
        <option value="/payment">susbscribe</option>
        <option value="/payment">Help</option>
        <option value="/payment">Accounts</option>
        <option value="/payment"> settings</option>
        <option value="/payment">Signout</option>
    </select>
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
