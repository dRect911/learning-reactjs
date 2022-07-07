import React from 'react';
import Troll from '../img/troll_face_alt.png'
import memesData from "../memesData.js"

export default function Generator(){

    const [memeImage, setMemeImage] = React.useState("")
    
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)        
    }


    return(
        <div className="generator">
            <div className="generator-form">
                <input type="text" className="generator-field field-1" placeholder="Shut up" />
                <input type="text" className="generator-field field-2" placeholder="and take my money" />
            </div>
            <button className="generator-btn" onClick={getMemeImage} >Get a new image meme 🖼</button>            
            <img src={memeImage} className="generator-meme" />
        </div>
        
    )
    
}