import React from 'react';
import './footer.css'

const Footer = () => {
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
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      </div>
    </footer>
    );
  }

  export default Footer; 