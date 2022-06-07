import React from 'react';
import ReactLogo from '../img/react.svg'

export default function Navbar(){

    return(
        <nav className="navbar">
            <div className="nav-logo">
                <img src={ReactLogo} className="nav-logo-svg"></img>
                <h2 className="nav-logo-text">ReactFacts</h2>
            </div>            
            <h3 className="nav-title">React Course - Project 1</h3>
        </nav>
        
    )
    
}