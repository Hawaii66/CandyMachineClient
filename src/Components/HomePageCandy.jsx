import React from 'react'

import {
    Link,
    } from "react-router-dom"
    

import "./HomePageCandy.css";

function HomePageCandy({header, image, cost, buttonLink}) {
    return (
        <div className="CandySpecial">
            <h1 className="Header">{header}</h1>
            <Link to={buttonLink}>
                <button>Köp</button>
            </Link>
            <img className="Image" src={image} alt={header}/>
            <h2 className="Cost">{cost} kr</h2>
            
        </div>
    )
}

export default HomePageCandy
