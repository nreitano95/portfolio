import React from 'react';
import './header.css';


const under_dev = () => {
    return (
      <header id="home">
         <div className="banner">
            <div className="banner-text">
               <h1 className="grow dib">Hello, World!</h1><br/>
               <h2 className="grow dib">Portfolio Under Development</h2><hr></hr>
            </div>
            <div className="grow dib">
               <a href="https://www.linkedin.com/in/nickreitano/">
                  <img src="LI-In-Bug.png" width="40px" height="30px"></img>
               </a>
            </div>
         </div>
      </header>
    );
  }

export default under_dev;