import React from "react";
import "../styles/initial.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import  login   from "../redux/slices/userSlice";
import { useState } from "react";
import { Link } from "react-router-dom";

const Initial = () => { 
  return (

    <div className="banner-container">
    <div className="banner">
      <p className="title">Welcome to Prime Video </p>
      <p className="content">
        Watch the latest movies, TV shows, and award-winning Amazon Originals
      </p>
      <Link to='/login'> <div><button className="sign-btn">Sign In To Join Prime</button></div></Link>

    </div>

    <div>
      <div>
        <img
          className="heaven"
          src="https://m.media-amazon.com/images/G/31/AmazonVideo/2019/MLP._SX1440_CR575,0,865,675_QL80_AC_FP_.jpg"
        ></img>
      </div>
    </div>

    <div>
      <img
        className="rent"
        src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/TVOD/TVOD_MLP_Left._SX1440_CR0,0,865,675_QL80_AC_FP_.jpg"
      ></img>
    </div>

    <div className="ban2">
      <p className="title2"> Movie rentals on Prime Video</p>
      <p className="content2">
        Early Access to new movies, before digital subscription
      </p>
      <p className="rent-btn">Rent Now</p>
    </div>

    <div>
      <p className="cards">Your favorite channels all in one place</p>
    </div>

    <div>
      <p className="ban3">
        With Prime Video Channels, find shows and movies
      </p>
      <p className="ban-3">
        from your favorite Channels all in one place. Enjoy with an add-
      </p>
      <p className="bann-3"> on subscription to Channelsof your choice</p>
    </div>

    <div>
      <img
        className="LionsgatePlay"
        src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/LionsgatePlay-426X2946_V1.jpg"
      />
    </div>

    <div>
      <img
        className="Discovery"
        src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_Discovery.jpg"
      />
    </div>
    <div>
      <img
        className="Erosnow"
        src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Erosnow-426X2948_V1.jpg"
      />
    </div>
    <div>
      <img
        className="MANORAMAMAX"
        src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_MANORAMAMAX.jpg"
      />
    </div>
    <div>
      <img
        className="hoichoi"
        src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/hoichoi-426X2946_V1.jpg"
      />
    </div>
    <div>
      <img
        className="Vrott"
        src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/Vrott.png"
      />
    </div>
    <div>
      <img
        className="Amc"
        src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/Amc.png"
      />
    </div>
    <div>
      <img
        className="Docubay"
        src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Docubay-426X2947_V1.jpg"
      />
    </div>
    <div>
      <img
        className="Mubi"
        src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Mubi-426X2946_V1.jpg"
      />
    </div>
    <div>
      <img
        className="iWonder"
        src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/iWonder.png"
      />
    </div>

    <div>
      <img
        className="Stingray"
        src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/Stingray.png"
      />
    </div>

    <div>
      <img
        className="CuriosityStream"
        src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/426x294_CuriosityStream.png"
      />
    </div>

    <div>
      <img
        className="stick"
        src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/MLP_Template_Image_Left._SX1440_CR0,0,865,675_QL80_AC_FP_.jpg"
      />
    </div>

    <div>
      <div>
        <p className="stick-1">Even better with Fire TV Stick</p>
      </div>
    </div>

    <div className="bn4">
      <p className="ban4">
        The biggest movies and TV shows are always better on a big screen.
        Simply plug in your Amazon Fire TV Stick and stream onany HDTV. Press
        the voice button on the remote and say the name of the title you want
        to watch to find it in seconds.{" "}
      </p>
      <p className="get-btn">Get started</p>
    </div>

    <div className="bn5">
      <p className="friendly">Family Friendly</p>
    </div>

    <div className="family">
      <p className="ban-5">
        With easy to use Parental Controls and a dedicated kids page, enjoy
        secure, ad-free kids entertainment. Kids can enjoy popular TV shows
        like Peppa Pig, Powerpuff Girls, and Chhota Bheem.
      </p>
      <p className="Get-btn">Get started</p>
    </div>

    <div>
      <img
        className="ban5"
        src="https://m.media-amazon.com/images/G/01/digital/video/Magellan_MLP/IN-kids-30Jan._SX1440_CR575,0,865,675_QL80_AC_FP_.jpg"
      />
    </div>

    <div className="end">
      <img
        className="pvl"
        src="https://m.media-amazon.com/images/G/01/digital/video/acquisition/web_footer_logo._CB462908456_.png"
      />
      <p className="help">Terms and Privacy NoticeSend us feedbackHelp</p>
      <p className="inc">© 1996-2023, Amazon.com, Inc. or its affiliates</p>
    </div>
  </div>
);
}


export default Initial