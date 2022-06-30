import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEarthAmericas} from '@fortawesome/free-solid-svg-icons'

export default function Destination(props){
    return(
        <div className="destination">
            <img src={props.img_src} alt='img' className="destination--img"></img>
            <div className="destination--details">
                <FontAwesomeIcon icon={faLocationDot} className="destination--icon" />
                <span className="destination--location">{props.location}</span>
                <span ><a href="#" className="destination--link">View on Google Maps</a></span><br/>
                <h1 className="destination--title">{props.title}</h1>
                <span className="destination--date">{props.start_date} - {props.end_date}</span><br/>
                <span className="destination--desc">{props.description}</span>
            </div>
        </div>
    )
}