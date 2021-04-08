import React from 'react'

import CandySpecial from "./CandySpecial.jsx"


function GottBlandat() {
    const image = "https://candypeople.se/wp-content/uploads/2017/10/50135_Originals_SuraColanappar_80g.jpg"
    const name = "Cola Nappar"
    const cost = "20"
    const candyId = 2
    return (
        <div>
            <CandySpecial header={name} image={image} cost={cost} candyID={candyId}/>
        </div>
    )
}

export default GottBlandat
