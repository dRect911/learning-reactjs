import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEarthAmericas} from '@fortawesome/free-solid-svg-icons'

export default function Navbar(){
    return(
        <nav className="navbar">
            <FontAwesomeIcon icon={faEarthAmericas} className="navbar--icon" />
            <span className="navbar--title"> my travel journal.</span>
        </nav>
    )
}