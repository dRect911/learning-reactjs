import React from "react";
import HeroGrid from "../img/Group 77.png"

export default function Hero(){
    return(
        <div className="hero">
            <img src={HeroGrid} className="hero--grid"></img>
            <div className="hero--text">
                <h1>Online Experiences</h1>
                <h3>
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </h3>
            </div>
        </div>
    )
}