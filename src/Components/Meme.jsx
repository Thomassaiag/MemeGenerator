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
    
    const[allMemes, setAllMemes]=React.useState([])

    function handleChange(event){
        const{name, value}=event.target
        setMeme((prevMeme)=>{
            return{
                ...prevMeme,
                [name]: value
            }

        })
    }

    

    // React.useEffect(()=>{
    //     fetch("https://api.imgflip.com/get_memes")
    //     .then(res=> res.json())
    //     .then(data=>setAllMemes(data.data.memes))
    // },[])


    React.useEffect(()=>{
        async function getMemes(){
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data= await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    },[])



    const getMemeImage=() => {
        
        let randomInt=Math.floor(Math.random()*allMemes.length)
        setMeme(prevMeme=>{
            return {
                ...prevMeme,
                randomImage:allMemes[randomInt]['url']
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
                    onChange={handleChange}
                    name="topText"
                    value={meme.topText}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    onChange={handleChange}
                    name="bottomText"
                    value={meme.bottomText}
                />
            
            <button onClick={getMemeImage} className="form--button"type="submit">Get a new meme image 🖼</button>
        </div>
        <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}