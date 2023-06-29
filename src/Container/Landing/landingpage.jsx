import React, { Component } from "react";
import "./landingpage.css";

export default class extends Component {
    render() {
        return (
            <div className="landing" >
                <div className="intro-text text-center py-2">
                    <h1 className="font-semibold text-3xl md:font-extrabold md:text-6xl">ℍ𝕖𝕝𝕝𝕠 𝕋𝕙𝕖𝕣𝕖</h1>
                    <h3 className="px-6 text-xl font-poppin md:tracking-wider">Explore My Portfolio as a Skilled and Creative Developer</h3>
                </div>
            </div>
        )
    }
}