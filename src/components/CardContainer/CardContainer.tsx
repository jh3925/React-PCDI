import React from 'react';
import './CardContainer.css'

import DefaultLogo from '../../assets/pcdi-logo-dark.png'

interface CardProps {
    title?: string;
    description?: string;
    image?: string;
    link?: string;
    linkString?: string;
}

function CardContianer({ title, description, image = DefaultLogo, link, linkString = "Learn more"}: CardProps): JSX.Element {
    return (
        <div className="card-container">
            <div className="card-container-img">
                <img className="img" src={image} alt="logo"></img>
            </div>
            <div className="card-container-text">
                <h1>{title}</h1>
                <p>{description}</p>
                {link ? <a href={link}>{linkString}</a> : false}
            </div>
        </div>
    )
  }

  export default CardContianer;