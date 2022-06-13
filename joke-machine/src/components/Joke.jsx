import React from 'react'


export default function Joke(props){
    if (props.setup == null){
        return(
            <div className="joke">
                <span className="joke--punch">{props.punch}</span>
            </div>
        )
    }
    else{
        return(
            <div className="joke">
                <span className="joke--setup">{props.setup}</span><br/>
                <span className="joke--punch">{props.punch}</span>
            </div>
        )
    }
    
}