import React from 'react';
import { Link, scroller } from 'react-scroll';
import './header.css';


class Header extends React.Component {

   scrollTo() {
      scroller.scrollTo('scroll-to-element', {
         duration: 800,
         delay: 0,
         smooth: 'easeInOutQuart'
      })
   }

   render() {
    return (
      <header id="home">
         <nav id="nav-wrap">
            {/* <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a> */}
            <ul id="nav" className="nav">
               <li><Link activeClass="active" className="Home" to="home" spy={true} smooth={true} duration={500}>Home</Link></li>
               <li><Link activeClass="active" className="Portfolio" to="portfolio" spy={true} smooth={true} duration={500}>Portfolio</Link></li>
               <li><Link activeClass="active" className="Resume" to="resume" spy={true} smooth={true} duration={500}>Resume</Link></li>
               <li><Link activeClass="active" className="About" to="about" spy={true} smooth={true} duration={500}>About</Link></li>
               <li><Link activeClass="active" className="Contact" to="contact" spy={true} smooth={true} duration={500}>Contact</Link></li>
            </ul>
         </nav>

         <div className="banner">
            <div className="banner-text">
               <h1 className="grow dib">Hello, World!</h1><br/><hr></hr>
            </div>
         </div>

         <p className="scrolldown">
            <Link activeClass="active" className="icon-down-circle" to="portfolio" spy={true} smooth={true} duration={500}></Link> 
         </p>
      </header>
    );
  }
}

export default Header;