import React from "react";
import CardImage from "../img/img_no_radius.png"
import Star from "../img/Star 1.png"

export default function Card(){
    return(
        <div className="card">
            <img className="card--img" src={CardImage}></img>
            <div className="card--desc">
                <img className="card--star" src={Star}></img>
                <span className="card--rate"> 5.0 </span>
                <span className="card--reviews"> (6) •</span>
                <span className="card--country"> USA</span><br/>
                <span className="card--title">Life lessons with Katie Zaferes</span><br/>
                <span className="card--cost"><b>From $136</b></span> / person
            </div><br/>
            
        </div>
    )
}