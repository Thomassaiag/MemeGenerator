import React from "react";

export default function Meme(){
    return(
        <main>
        <form className="form">
            
                <input
                    type="text"
                    placeholder="top text"
                    className="form--input"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
            
            <button className="form--button"type="submit">Get a new meme image 🖼</button>
        </form>
        </main>
    )
}