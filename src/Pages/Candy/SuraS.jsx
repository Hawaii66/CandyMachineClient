import React, {useEffect, useState} from 'react'

import CandySpecial from "./CandySpecial.jsx"


function SuraS() {
    console.log("TEST123");
    const [name, setName] = useState("Sura S");
    const [image, setImage] = useState("https://d1hr6nb56yyl1.cloudfront.net/product-images/79911-560.jpg");
    const [cost, setCost] = useState(16);
    let candyId = 3

    useEffect(()=>{
        console.log("WHAT");
        fetch("https://candy-machine.herokuapp.com/CandySort",{
            method:"GET"
        }).then(results=>results.json())
        .then(results => {
            setImage(results[2].image);
            setName(results[2].name);
            setCost(results[2].cost);
            candyId = 3;
            console.log("TEST");
            console.log(name);
        })
    }, [])

    return (
        <div>
            <CandySpecial header={name} image={image} cost={cost} candyID={candyId}/>
        </div>
    )
}

export default SuraS
