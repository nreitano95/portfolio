import React from 'react';
import Card from './Card';
import projectOneImage from "../Portfolio/images/projectOneImage.jpg";
import projectTwoImage from "../Portfolio/images/projectTwoImage.jpg";
import projectThreeImage from "../Portfolio/images/projectThreeImage.jpg";
// import projectFourImage from "../Portfolio/images/projectFourImage.jpg";

 
import './portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <section className="portfolio-wrapper">
        <div id='portfolio-title'>
          <h1>Check Out Some of My Works</h1>
        </div>
        <div id="card-container">
          <Card id="card"
            projectName={'Just Ok Clothing'}
            projectLink='#'
            codeLinkText="View Code"
            projectLinkText="View Site"
            imageURL={projectOneImage}
          />
          <Card id="card"
            projectName={'gifFlix'}
            projectLink='#'
            codeLinkText="View Code"
            projectLinkText="View Site"
            imageURL={projectTwoImage}
          />
          <Card id="card"
            projectName={'Project 3'}
            projectLink='#'
            codeLinkText="View Code"
            projectLinkText="View Site"
            imageURL={projectThreeImage} 
          />
                    <Card id="card"
            projectName={'Project 3'}
            projectLink='#'
            codeLinkText="View Code"
            projectLinkText="View Site"
            imageURL={projectThreeImage} 
          />
          {/* <Card id="card"
            projectName={'Project 4'}
            projectLink='#'
            codeLinkText="View Code"
            projectLinkText="View Site"
            imageURL={projectFourImage} 
          /> */}
        </div>
      </section>
    </section>
    );
  };

export default Portfolio