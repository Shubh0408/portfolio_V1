import React, { Component } from "react";
import ElementsTemplate from "./elementsTemplate";
import image1 from "../../Assets/img2.jpg";
import rasengan from "../../Assets/rasengan.gif";
import photoflip from "../../Assets/photoflip.gif"
import electromonster from "../../Assets/electromonster.gif";

export default class extends Component {
    render() {
        return (
            <div className="wrapper bg-slate-800 p-2 flex gap-4">
                <div className="flex justify-center items-center"><ElementsTemplate image={rasengan} heading="Rasengan Ball" description="Build using only HTML & CSS" trynowlink="https://codepen.io/shubh-v/full/ExOmdyZ" viewsourcelink="dfghj"  /></div>
                <div className="flex justify-center items-center"><ElementsTemplate image={photoflip} heading="Lover Photoflip" description="Build using only HTML & CSS" trynowlink="https://codepen.io/shubh-v/full/jOQmemO" /></div>
                <div className="flex justify-center items-center"><ElementsTemplate image={electromonster} heading="Electro Monster" description="Build using HTML, CSS & Javascript" trynowlink="https://codepen.io/shubh-v/full/poQPxpg" /></div>
                <div className="flex justify-center items-center"><ElementsTemplate image={image1} heading="website" description="qwertyuiop asdfghjk zxcvbnm" /></div>
                <div className="flex justify-center items-center"><ElementsTemplate image={image1} heading="website" description="qwertyuiop asdfghjk zxcvbnm" /></div>
            </div>
        )
    }
}