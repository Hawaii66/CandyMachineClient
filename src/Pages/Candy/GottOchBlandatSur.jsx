import React from 'react'

import CandySpecial from "./CandySpecial.jsx"


function GottBlandat() {
    const image = "https://www.cloetta.se/imagecache/jxzm1xv6r5z4dzhxkn99/07310350116256_C1N1.jpg"
    const name = "Gott & Blandat Sur"
    const cost = "20"
    const candyID = 1;
    return (
        <div>
            <CandySpecial header={name} image={image} cost={cost} candyID={candyID}/>
        </div>
    )
    
}

export default GottBlandat
