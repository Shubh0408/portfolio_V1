import React, { Component } from "react";
import logo from "../../Assets/avatar.png";

export default class extends Component {
    render(){
        return(
            <div className="main sm:flex ">
                {/* right container */}
                <div className="right sm:w-1/2 bg-slate-500 h-screen">
                    <div className="top text-center pt-8 font-extrabold text-4xl text-blue-200"> About Me</div>
                    <div className="img mt-6 flex justify-center"><img src={logo} className="rounded-full w-1/3"/></div>
                    <div className="rest px-4 mt-12 font-bold text-white">I'm Shubham, a passionate web developer with 1 year of professional experience. I specialize in front-end development and have a strong foundation in HTML, CSS, and JavaScript. I enjoy crafting responsive and user-friendly websites that deliver an exceptional user experience.<br/>I am proficient in using popular front-end frameworks like React and have a good understanding of modern web development practices.</div>
                </div>
                {/* left container */}
                <div className="left sm:w-1/2 bg-slate-700 h-screen">
                <div className="top text-center pt-8 font-extrabold text-4xl text-blue-200"> Skills</div>
                </div>
            </div>
        )
    }
}