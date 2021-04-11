import React, {useState} from 'react'

import {Redirect} from "react-router-dom";

import "../Styles/CandyCancel.css";

function Cancel() {
    const [redirect, setRedirect] = useState(0);

    const onRedirect = ()=>{
        console.log("TEST");
        setRedirect(1);
    }

    if(redirect === 1){
        return(
            <Redirect to="/"/>
        )
    }

    return (
        <div className="CandyCancel">
            <h1>Något gick fel</h1>
            <p>Något gick fel vid betalningen</p>
            <p>Försök igen genom att trycka på knappen nedan eller skanna koden igen</p>
            <button onClick={()=>(onRedirect())}>Home</button>
        </div>
    )
}

export default Cancel
