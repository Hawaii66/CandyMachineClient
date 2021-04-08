import React from 'react'

import CandySpecial from "./CandySpecial.jsx"


function SuraS() {
    const image = "https://d1hr6nb56yyl1.cloudfront.net/product-images/79911-560.jpg"
    const name = "Sura S"
    const cost = 16
    const candyId = 3
    return (
        <div>
            <CandySpecial header={name} image={image} cost={cost} candyID={candyId}/>
        </div>
    )
}

export default SuraS
