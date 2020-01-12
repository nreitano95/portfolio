import React from 'react';
import './resume.css';

const Resume = () => {
    return (
      <section id="resume">
        <h1>Resume</h1> 
        <form action="https://drive.google.com/file/d/15_YfsvzKCrJUk5kppkAios7chQWmu_OB/view?usp=sharing">
          <input id="view-btn" type="submit" value="View" />
        </form>    
      </section>
    );
  }

export default Resume;