import React from "react";
import ReactLogo from '../img/react-logo-text.png'

export default function Header(){
    return(
        <header>
            <nav className="nav">
                <img 
                src={ReactLogo}
                alt="ReactLogo"
                className="logo"
                />
                <ul className="nav-items">
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>               
            </nav>            
        </header>
    )
}