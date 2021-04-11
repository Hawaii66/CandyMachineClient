import React, {useState, useEffect} from 'react'

import CandySpecial from "./CandySpecial.jsx"


function FerrariColaBilar() {
    const [image, setImage] = useState("https://assets.partyking.org/img/products/1300/ferrari-cola-i-pase-1.jpg");
    const [name, setName] = useState("Ferrari Cola Bilar");
    const [cost, setCost] = useState(15);
    let candyID = 1;

    fetch("https://candy-machine.herokuapp.com/CandySort",{
        method:"GET"
    }).then(results=>results.json())
    .then(results => {
        setImage(results[0].image);
        setName(results[0].name);
        setCost(results[0].cost);
        candyID = 1;
        console.log("TESTESTSETSET");
    })
    return (
        <div>
            <CandySpecial header={name} image={image} cost={cost} candyID={candyID}/>
        </div>
    )
    
}

export default FerrariColaBilar
