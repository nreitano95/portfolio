import React from 'react';
import { Link, scroller } from 'react-scroll';
import './footer.css'

class Footer extends React.Component {

  scrollTo() {
     scroller.scrollTo('scroll-to-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
     })
  }

  render() {
    return (
      <footer className="footer">
        <div>
          <nav className="footerNav">
            <ul>
              <li>
                <a className="grow dib" href="#home">
                  Home
                </a>
                <a className="grow dib" href="#portfolio">
                  Portfolio
                </a>
                <a className="grow dib" href="#resume">
                  Resume
                </a>
                <a className="grow dib" href="#about">
                  About
                </a>
                <a className="grow dib" id="lastFooterNav" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div id="copywrite">
            All Rights Reserved - 2019
          </div>
        <div id="go-top">
        <p className="smoothscroll">
            <Link activeClass="active" className="icon-up-open" to="home" spy={true} smooth={true} duration={500}></Link> 
         </p>
          {/* <a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a> */}
          
          </div>
      </div>
    </footer>
    );
  }
}
  export default Footer; 