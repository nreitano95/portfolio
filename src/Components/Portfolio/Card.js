import React from 'react';
import './card.css';
 
const Card = (props) => {
    return (
        <section id="portfolio">
            <div className="portfolio-card">
                <div className="portfolio-card-inner">
                    <div className="portfolio-card-front">
                        <h1>{props.projectName}</h1>
                        <img src={props.imageURL} alt="People Say I am the Best Boss"></img>
                    </div>
                    <div className="portfolio-card-back">
                        <h1>{props.projectName}</h1>
                        <form action={props.projectLink}>
                            <input id="view-btn" type="submit" value={props.projectLinkText} />
                        </form> 
                        <form action={props.codeLink}>
                            <input id="view-btn" type="submit" value={props.codeLinkText} />
                        </form>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Card;