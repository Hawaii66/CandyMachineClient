import React, {useState}from 'react'
import {PayPalButton} from "react-paypal-button-v2"
import {Redirect} from "react-router-dom"

import "./CandyStyle.css";

import loading from "../../Images/loading.gif";

function CandySpecial({header, image, cost, candyID}) {
    const [isLoading, setIsLoading] = useState(false);
    const [redirectToNew, setRedirect] = useState(0);
    
    //const clientID = "AezRs31DI2zXFA6GfN8aKz5YfssItd4jJZ39DouREOQ1X8ml64ZNuhG-mlybKo5cKEdCrEabfABYlCsm";
    const clientID = "ARN6jFBUODiFsmleeCBVahDWBjvC6hLLA6RVK5wnKxFU08rWFbmBes54HlnKQ66w_IMMGQxlqq5a1CDj";
    const onSuccess = (details, data)=>{
        //alert("Transaction Completed by " + details.payer.name.given_name);
        setIsLoading(true);
        OnSucces(details, data, setIsLoading, setRedirect, candyID, cost);
    }

    const onError = ()=>{
        setRedirect(2);
    }

    if(redirectToNew === 1){
        return(
            <Redirect to="/Candy/Success"/>
        )
    }
    if(redirectToNew === 2){
        return(
            <Redirect to="/Candy/Cancel"/>
        )
    }

    if(isLoading){
        return(
            <img src={loading} alt="Loading"/>
        )
    } else 
    {
        return (
            <div className="CandySpecial">
                <h1 className="Header">{header}</h1>
                <img className="Image" src={image} alt={header}/>
                <h2 className="Cost">{cost} kr</h2>
                <PayPalButton amount={cost} onSuccess={onSuccess} onCancel={onError} onError={onError} shippingPreference="NO_SHIPPING" options={{clientId:clientID,currency:"SEK"}} />
            </div>
        )
    }
}

function OnSucces(details, data, setIsLoading, setRedirectTo, candyID, cost){
    console.log(details);
    console.log(data);

    const finalData = {
        candyId: candyID,
        cost:cost
    }
    //"https://candy-machine.herokuapp.com/CandySuccess"
    fetch("https://candy-machine.herokuapp.com/CandySuccess",{ //"http://localhost:5000/CandySuccess"
        method:"POST",
        body:JSON.stringify(finalData),
        headers: {
            "content-type": "application/json"
        }
    }).then(res => res.json())
    .then(res=>{
        console.log(res);
        setIsLoading(false);
        setRedirectTo(1);
    })
}

export default CandySpecial
