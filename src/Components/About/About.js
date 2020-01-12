import React from 'react';
import './about.css'

const About = () => {
    return (
      <section id="about">
        <div className="about-wrapper">
          <h1>ABOUT ME</h1>
          <p>I am an engineer that turns ideas into reality. I am most concerned with designing elegant solutions in order to create modern and efficient user experiences. I design functional web applications using the following principles:</p>
          <ul>
            <li>What is the big picture?</li>
            <li>Clean and efficient code = clean and efficient user-experience</li>
            <li>Code should be readable for a beginner to understand</li>
            <li>Spend more time sharpening the axe of design before cutting down the tree of code.</li>
          </ul>
        </div>
      </section>
    );
  }

export default About;