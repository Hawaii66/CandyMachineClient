import React from 'react'

import CandySpecial from "./CandySpecial.jsx"


function FerrariColaBilar() {
    const image = "https://assets.partyking.org/img/products/1300/ferrari-cola-i-pase-1.jpg"
    const name = "Ferrari Cola Bilar"
    const cost = 15
    const candyID = 1;

    fetch("https://candy-machine.herokuapp.com/CandySort",{
        method:"GET"
    }).then(results=>results.json())
    .then(results => {
        image = results[0].image;
        name = results[0].name;
        cost = results[0].cost;
        candyID = 1;
    })
    return (
        <div>
            <CandySpecial header={name} image={image} cost={cost} candyID={candyID}/>
        </div>
    )
    
}

export default FerrariColaBilar
