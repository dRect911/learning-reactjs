import React from "react";
import CardImage from "../img/img_no_radius.png"
import Star from "../img/Star 1.png"

export default function Card(props){
    return(
        <div className="card">
            <img className="card--img" src={CardImage}></img>
            <div className="card--desc">
                <img className="card--star" src={Star}></img>
                <span className="card--rate"> {props.rate} </span>
                <span className="card--reviews"> ({props.reviews}) •</span>
                <span className="card--country"> {props.country}</span><br/>
                <span className="card--title">{props.title}</span><br/>
                <span className="card--cost"><b>From ${props.cost}</b></span> / person
            </div><br/>
            
        </div>
    )
}