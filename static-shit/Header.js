import React from "react";

export default function Header(){
    return(
        <header>
            <nav className="nav">
                <img src="./react-logo-text.png" className="logo"/>
                <ul className="nav-items">
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>               
            </nav>            
        </header>
    )
}