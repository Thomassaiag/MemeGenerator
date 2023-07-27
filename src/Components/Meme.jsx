import React from "react";
import memesData from '../assets/memeData.js'

export default function Meme(){
    
    const [meme, setMeme]=React.useState(
        {
            topText:'',
            bottomText:'',
            randomImage: "http://i.imgflip.com/1bij.jpg"
        }
    )      
    
    const[allMemeImages, setAllMemeImages]=React.useState(memesData)


    const getMemeImage=() => {
        let memesTable=allMemeImages['data']['memes']
        let randomInt=Math.floor(Math.random()*memesTable.length)
        setMeme(prevMeme=>{
            return {
                ...prevMeme,
                randomImage:memesTable[randomInt]['url']
            }
        })
        console.log(meme.randomImage)
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
        <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">One does not simply</h2>
                <h2 className="meme--text bottom">Walk into Mordor</h2>
            </div>
        </main>
    )
}