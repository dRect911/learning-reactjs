import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAirbnb } from '@fortawesome/free-brands-svg-icons'

export default function Navbar(){
    return(
        <nav className="navbar">
            <FontAwesomeIcon icon={faAirbnb} className="navbar--logo" />
            <h1 className="navbar--text">airbnb</h1>
        </nav>
    )
}