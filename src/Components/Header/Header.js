import React from 'react';
import './header.css';


const Header = () => {
    return (
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll grow dib" href="#home">Home</a></li>
               <li><a className="smoothscroll grow dib" href="#portfolio">Portfolio</a></li>
               <li><a className="smoothscroll grow dib" href="#resume">Resume</a></li>
               <li><a className="smoothscroll grow dib" href="#about">About</a></li>
               <li><a className="smoothscroll grow dib" href="#contact">Contact</a></li>
            </ul>
         </nav>

         <div className="banner">
            <div className="banner-text">
               <h1 className="grow dib">Hi, I am Nick Reitano</h1><br/>
               <h2 className="grow dib">And I Like Technology</h2><hr></hr>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#portfolio"><i className="icon-down-circle"></i></a>
         </p>
         
      </header>
    );
  }

export default Header;