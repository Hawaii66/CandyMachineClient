import React from 'react'

import CandySpecial from "./CandySpecial.jsx"


function FruktNappar() {
    const image = "https://www.staples.se/content/images/product/142267_1_xnl.jpg"
    const name = "FruktNappar"
    const cost = 12
    const candyId = 2

    fetch("https://candy-machine.herokuapp.com/CandySort",{
        method:"GET"
    }).then(results=>results.json())
    .then(results => {
        image = results[1].image;
        name = results[1].name;
        cost = results[1].cost;
        candyId = 2;
    })
    return (
        <div>
            <CandySpecial header={name} image={image} cost={cost} candyID={candyId}/>
        </div>
    )
}

export default FruktNappar
