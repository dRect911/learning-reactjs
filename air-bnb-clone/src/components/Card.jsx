import React from "react";
import CardImage from "../img/img_no_radius.png"
import Star from "../img/Star 1.png"

export default function Card(props){

    let badgeText
    if (props.openSpots === 0){
        badgeText = "SOLD OUT"
    }
    else if (props.location === "Online"){
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--img" src={props.img}></img>
            <div className="card--stats">
                <img className="card--star" src={Star}></img>
                <span className="card--rate"> {props.rate} </span>
                <span className="card--reviews"> ({props.reviews}) • </span>
                <span className="card--location"> {props.location}</span><br/>
            </div>
            <span className="card--title">{props.title}</span><br/><br/>
            <span className="card--cost"><b>From ${props.cost}</b></span> / person
            
        
        </div>
    )
}