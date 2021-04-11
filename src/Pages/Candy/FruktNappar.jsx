import React, {useState, useEffect} from 'react'

import CandySpecial from "./CandySpecial.jsx"


function FruktNappar() {
    const [image, setImage] = useState("https://www.staples.se/content/images/product/142267_1_xnl.jpg");
    const [name, setName] = useState("FruktNappar");
    const [cost, setCost] = useState(12);
    let candyId = 2
    useEffect(()=>{
        fetch("https://candy-machine.herokuapp.com/CandySort",{
            method:"GET"
        }).then(results=>results.json())
        .then(results => {
            setImage(results[1].image);
            setName(results[1].name);
            setCost(results[1].cost);
            candyId = 2;
        })
    },[])
    
    return (
        <div>
            <CandySpecial header={name} image={image} cost={cost} candyID={candyId}/>
        </div>
    )
}

export default FruktNappar
