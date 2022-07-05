import React from 'react';
import Troll from '../img/troll_face_alt.png'

export default function Navbar(){

    return(
        <nav className="navbar">
            <div className="nav-logo-sub">
                <img src={Troll} className="nav-logo"></img>
                <h2 className="nav-sub">Meme Generator</h2>
            </div>            
            <h3 className="nav-title">React Course - Project 3</h3>
        </nav>
        
    )
    
}