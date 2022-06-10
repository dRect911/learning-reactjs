import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faFacebookSquare, faInstagramSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return(
        <div className="footer">
            <FontAwesomeIcon icon={faTwitterSquare}  className="footer--icon" />
            <FontAwesomeIcon icon={faFacebookSquare} className="footer--icon" />
            <FontAwesomeIcon icon={faInstagramSquare} className="footer--icon" />
            <FontAwesomeIcon icon={faGithubSquare} className="footer--icon" />
        </div>
    )
}