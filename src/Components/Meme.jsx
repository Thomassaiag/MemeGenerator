import React from "react";
import memesData from '../assets/memeData.js'

export default function Meme(){
    
    const [memeImageUrl, setMemeImageUrl]=React.useState("")

    const getMemeImage=() => {
        let memesTable=memesData['data']['memes']
        let randomInt=Math.floor(Math.random()*memesTable.length)
        let url
        url=memesTable[randomInt]['url']
        setMemeImageUrl(url)
        console.log(memeImageUrl)
    }
    
    return(
        <main>
        <div className="form">
            
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
            
            <button onClick={getMemeImage} className="form--button"type="submit">Get a new meme image 🖼</button>
        </div>
        <img src={memeImageUrl} className="meme--image"></img>
        </main>
    )
}