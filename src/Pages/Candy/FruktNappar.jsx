import React from 'react'

import CandySpecial from "./CandySpecial.jsx"


function FruktNappar() {
    const image = "https://www.staples.se/content/images/product/142267_1_xnl.jpg"
    const name = "FruktNappar"
    const cost = 12
    const candyId = 2
    return (
        <div>
            <CandySpecial header={name} image={image} cost={cost} candyID={candyId}/>
        </div>
    )
}

export default FruktNappar
