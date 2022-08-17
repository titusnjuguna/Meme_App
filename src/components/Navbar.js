import React from "react";
import logo from '../logoKEt.png';


export default function Navbar(){

    return(
        <header className="header--main">
                <img src={logo} className="logo" alt="logo" />
                <h2 className="header--title">Meme Generator</h2>
                           
                <h4 className="header--project">Meme A Day Keeps Stress Away</h4>
             
        </header>
    )
}