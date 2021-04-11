import React from 'react'

import CandySpecial from "./CandySpecial.jsx"


function SuraS() {
    const image = "https://d1hr6nb56yyl1.cloudfront.net/product-images/79911-560.jpg"
    const name = "Sura S"
    const cost = 16
    const candyId = 3

    fetch("https://candy-machine.herokuapp.com/CandySort",{
        method:"GET"
    }).then(results=>results.json())
    .then(results => {
        image = results[2].image;
        name = results[2].name;
        cost = results[2].cost;
        candyId = 3;
    })
    return (
        <div>
            <CandySpecial header={name} image={image} cost={cost} candyID={candyId}/>
        </div>
    )
}

export default SuraS
