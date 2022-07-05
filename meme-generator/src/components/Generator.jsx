import React from 'react';
import Troll from '../img/troll_face_alt.png'

export default function Generator(){

    return(
        <div className="generator">
            <div className="generator-form">
                <input type="text" className="generator-field field-1" placeholder="Shut up" />
                <input type="text" className="generator-field field-2" placeholder="and take my money" />
            </div>
            <button className="generator-btn">Get a new image meme</button>            
            <img className="generator-meme" />
        </div>
        
    )
    
}