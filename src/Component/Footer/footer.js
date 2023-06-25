import React, { Component } from "react";
import "./footer.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from "react-router-dom";



export default class extends Component {
    render() {
        return (
            <main className="text-center bg-slate-600  ">
                    <h1 className=" text-white pt-4">𝕾𝖍𝖚𝖇𝖍</h1>
                    <nav className="flex justify-center">
                        <ul className="flex text-xs sm:text-lg space-x-4 ">
                            <li className="font-poppin" >Home</li>
                            <li className="font-poppin" >About</li>
                            <li className="font-poppin" >Blog</li>
                            <li className="font-poppin" >Projects</li>
                            <li className="font-poppin" >Contact</li>
                        </ul>
                    </nav>
                    <div className="flex justify-center space-x-2">
                        <div className=""><a href="https://github.com/shubhamverma9982" target="blank"><GitHubIcon /></a></div>
                        <div><a href="#" target="blank"><TwitterIcon /></a></div>
                        <div><a href="#" target="blank"><LinkedInIcon /></a></div>
                        <div className=""><a href="https://facebook.com" target="blank"><FacebookIcon /></a></div>
                    </div>
                    <div className="text-center py-2 ">
                        <span className="font-poppin text-xs sm:text-lg">Copyright ©2023 All rights reserved | Made with &#9829; by SHUBHAM </span>
                    </div>
            </main>
        )
    }
}