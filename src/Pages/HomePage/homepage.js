import React, { Component } from 'react';

import Header from '../../Components/Header/Header';
import About from '../../Components/About/About';
import Resume from '../../Components/Resume/Resume';
import Portfolio from '../../Components/Portfolio/Portfolio';
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';

class HomePage extends Component {

  render() {
    return (
      <div className='App'>
        <Header />
        <Portfolio />
        <Resume />        
        <About />
        <Contact />
        <Footer />
      </div>
    );
  };
}

export default HomePage;