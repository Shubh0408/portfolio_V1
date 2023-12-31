import React, { Component } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LayersIcon from '@mui/icons-material/Layers';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import InstagramIcon from '@mui/icons-material/Instagram';

export default class extends Component {
    render() {
        return (
            <main className="text-center bg-slate-800  ">
                <h1 className="pt-4"><a className="text-slate-200 no-underline" href="#">𝕾𝖍𝖚𝖇𝖍</a></h1>
                <span className="pt-2 justify-center text-xs text-white font-poppin sm:text-lg">Get in touch with me ➙ <a className="italic no-underline text-white">shubhamverma9982@gmail.com</a></span>
                <span className="pt-1 justify-center text-slate-400">Or find me on: </span>
                <div className="flex justify-center gap-6 hidden sm:flex">
                    <div className="italic"><a className="text-slate-400 hover:text-white no-underline hover:not-italic" href="https://www.linkedin.com/in/shubham-verma-717331232/">Linkedin</a></div>
                    <div className="italic"><a className="text-slate-400 hover:text-white no-underline hover:not-italic" href="https://codepen.io/shubh-v">Codepen</a></div>
                    <div className="italic"><a className="text-slate-400 hover:text-white no-underline hover:not-italic" href="https://github.com/shubhamverma9982">Github</a></div>
                    <div className="italic"><a className="text-slate-400 hover:text-white no-underline hover:not-italic" href="https://dev.to/shubh040810">Dev Community</a></div>
                    <div className="italic"><a className="text-slate-400 hover:text-white no-underline hover:not-italic" href="https://twitter.com/Shubh040810">Twitter</a></div>
                    <div className="italic"><a className="text-slate-400 hover:text-white no-underline hover:not-italic" href="https://www.instagram.com/shubham.040/">Instagram</a></div>
                </div>
                <div className="justify-center flex gap-2 sm:hidden">
                    <div><a className="text-slate-400 hover:text-white" href="https://www.linkedin.com/in/shubham-verma-717331232/"><LinkedInIcon/></a></div>
                    <div><a className="text-slate-400 hover:text-white" href="https://codepen.io/shubh-v"><LayersIcon/></a></div>
                    <div><a className="text-slate-400 hover:text-white" href="https://github.com/shubhamverma9982"><GitHubIcon/></a></div>
                    <div><a className="text-slate-400 hover:text-white" href="https://dev.to/shubh040810"><LogoDevIcon/></a></div>
                    <div><a className="text-slate-400 hover:text-white" href="https://twitter.com/Shubh040810"><TwitterIcon/></a></div>
                    <div><a className="text-slate-400 hover:text-white" href="https://www.instagram.com/shubham.040/"><InstagramIcon/></a></div>

                </div>
                <div className="text-center py-4 ">
                    <span className="font-poppin text-white text-xs sm:text-lg">Copyright ©2023 All rights reserved | Made with &#9829; by SHUBHAM </span>
                </div>
            </main>
        )
    }
}