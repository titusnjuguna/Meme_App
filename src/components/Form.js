import React from "react";
import meme from "../memedata";

//console.log(meme[1].url)
export default function Form(){

    //const [memeImage, setMemeImage] = React.useState("https://media.istockphoto.com/photos/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised-picture-id1361394182?b=1&k=20&m=1361394182&s=170667a&w=0&h=cW_NDV-D-jrWBVcEPclIU9vRipFQZQC0armvGMN7w-c=")
    const [memeImage, setMeme]= React.useState(
        {
             bottomText: "",
             topText:"",
             randomImage :"https://media.istockphoto.com/photos/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised-picture-id1361394182?b=1&k=20&m=1361394182&s=170667a&w=0&h=cW_NDV-D-jrWBVcEPclIU9vRipFQZQC0armvGMN7w-c="
        }
    )
    const [allMemeImages]= React.useState(meme)
    //console.log(allMemeImages);
    
    function getMemeImage(){
        const memeArray = allMemeImages
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        console.log(randomNumber)
        const url = memeArray[randomNumber].url 
        console.log(url)
        //memeArray.map(({ url }) => url[randomNumber]);
        //[ for(let T of meme){console.log( T.url)}]
            //memeArray.map(item => item[randomNumber].url)//memeArray[randomNumber].url
        setMeme(prevMeme => ({...prevMeme,randomImage:url}) )
      
    }
    function handleChange(event){
        const { name ,value}=event.target
        setMeme(prevMeme => ({...prevMeme, [name]:value}))
    }

    return(
        <main>
            <div className="form">
                <input
                 type='text' 
                 placeholder="Top Text"
                 className="form-input"
                 name="topText"
                 value={memeImage.topText}
                 onChange={handleChange}
                 />
                <input 
                type='text'
                placeholder="Bottom Text"
                className="form-input" 
                name="bottomText"
                value={memeImage.bottomText}
                onChange={handleChange}
                />
                <button 
                className="form-button" 
                onClick={getMemeImage}>

                    Get New Meme Image

                </button>
            </div>
            <div className="meme">
                <img src={memeImage.randomImage} alt="mpya" className="imfield"/>
                <h2 className="meme--text-top">{memeImage.topText}</h2>
                <h2 className="meme--text-bottom">{memeImage.bottomText}</h2>
            </div>
        </main>
    )
}