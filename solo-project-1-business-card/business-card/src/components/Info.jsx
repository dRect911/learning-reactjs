import React from 'react';
import dummy from '../img/dummy-profile-pic.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


export default function Info(){
    return(
        <div className="info">
            <img src={dummy}></img>
            <h1 className="info--name">Kenneth</h1>
            <h2 className="info--description">Junior Web developer</h2>
            <h3 className="info--website">potato.sh</h3>
            <div className="info--btns">
                <button className="info--mail" href="mailto:kennethprinceagbodjan@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} /> {/* <a href="mailto:kennethprinceagbodjan@gmail.com">  Email</a> */} Email
                </button>
                <button className="info--linkedin">
                <FontAwesomeIcon icon={faLinkedin} />  Linkedin
                </button>
            </div>

        </div>
    )
}