import React from 'react'

import {
Link,
} from "react-router-dom"

import HomePageCandy from "../Components/HomePageCandy.jsx";

//Candy
import ColaBilar from "./Candy/FerrariColaBilar.jsx"; //1
import FruktNappar from "./Candy/SuraS.jsx"; //2
import SuraS from "./Candy/FruktNappar.jsx";

function index() {
    return (
        <div class="HomePage">
            <div class="HomePageCandy">
                <div className="Default">
                    <HomePageCandy buttonLink="/Candy/SuraS" header={"Sura S"} image={"https://d1hr6nb56yyl1.cloudfront.net/product-images/79911-560.jpg"} cost={16}/>                
                </div>
                <div className="Default">
                    <HomePageCandy buttonLink="/Candy/FerrariColaBilar" header={"Cola bilar"} image={"https://assets.partyking.org/img/products/1300/ferrari-cola-i-pase-1.jpg"} cost={15}/>
                </div>
                <div className="Rea">
                <div className="ReaText">
                        <h1>REA</h1>
                    </div>
                    <HomePageCandy buttonLink="/Candy/FruktNappar" header={"Frukt Nappar"} image={"https://www.staples.se/content/images/product/142267_1_xnl.jpg"} cost={12}/>
                    
                </div>
            </div>
            <Link to="/About">
                <button>About</button>
            </Link>
            <Link to="/HowTo">
                <button>Hur gör man</button>
            </Link>
        </div>
    )
}

export default index
