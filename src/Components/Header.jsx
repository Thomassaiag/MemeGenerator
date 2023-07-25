import React from "react";
import trollFace from '../assets/trollFace.png'


export default function Header(){
    return (
        <div className="header">
            <img src={trollFace}className="header--image"></img>
            <h2 className="header--title">Meme Generator</h2>
            <h3 className="header--project">React Course - Project 3</h3>
            
        </div>

    )
}