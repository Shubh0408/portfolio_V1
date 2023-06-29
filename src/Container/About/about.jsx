import React, { Component } from "react";
import logo from "../../Assets/profile.jpeg";
import "./about.css";
import Percentage from "./percentagecomponent";

export default class extends Component {
    render() {
        return (
            <div className="main sm:flex ">
                <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet' />
                {/* left container */}
                <div className="right sm:w-1/2 bg-slate-700 h-auto">
                    <div className="top text-center pt-8 font-extrabold text-4xl text-blue-200"> About Me</div>
                    <section className="img mt-6 flex justify-center"><img src={logo} className="img rounded-full w-1/3" /></section>
                    <div className="rest px-4 py-4 mt-12 font-poppin tracking-wide lg:tracking-widest lg:font-semibold text-white">I'm Shubham, a passionate web developer with 1 year of professional experience. I specialize in front-end development and have a strong foundation in HTML, CSS, and JavaScript. I enjoy crafting responsive and user-friendly websites that deliver an exceptional user experience.<br />I am proficient in using popular front-end frameworks like React and have a good understanding of modern web development practices.</div>
                </div> 
                {/* right container */}
                <div className="left sm:w-1/2 bg-slate-700 h-auto">
                    <div className="top text-center pt-8 font-extrabold text-4xl text-blue-200"> Skills</div>
                    {/* icons section  */}
                    {/* for icons ->  https://icon-sets.iconify.design/ */}
                    <div className="flex justify-center">
                        <p className="mt-4">
                            <i class='bx bxl-html5 bx-lg  text-gray-400 hover:text-teal-400' title="HTML5"></i>
                            <i class='bx bxl-css3 bx-lg text-gray-400 hover:text-teal-400' title="CSS3"></i>
                            <i class='bx bxl-javascript bx-lg text-gray-400 hover:text-teal-400' title="JavaScript"></i>
                            <i class='bx bxl-react bx-lg text-gray-400 hover:text-teal-400' title="react"></i>
                            <br />
                            <i class='bx bxl-bootstrap bx-lg text-gray-400 hover:text-teal-400' title="BootStrap"></i>
                            <i class='bx bxl-tailwind-css bx-lg text-gray-400 hover:text-teal-400' title="Tailwind"></i>
                            <i class='bx bxl-git bx-lg text-gray-400 hover:text-teal-400' title="Git"></i>
                            <i class='bx bxl-github bx-lg text-gray-400 hover:text-teal-400' title="github"></i>
                            <br />
                            <i class='bx bxl-php bx-lg text-gray-400 hover:text-teal-400' title="php"></i>
                            <i class='bx bxl-nodejs bx-lg text-gray-400 hover:text-teal-400' title="node"></i>
                            <i class='bx bxl-wordpress bx-lg text-gray-400 hover:text-teal-400' title="WordPress"></i>
                            <i class='bx bxs-data bx-lg text-gray-400 hover:text-teal-400' title="Data Bases"></i>
                            <br />
                            <i class='bx bxl-python bx-lg text-gray-400 hover:text-teal-400' title="Python"></i>
                            <i class='bx bxl-adobe bx-lg text-gray-400 hover:text-teal-400' title="Adobe"></i>
                            <i class='bx bxs-component bx-lg text-gray-400 hover:text-teal-400' title="3D"></i>
                            <i class='bx bxl-unity bx-lg text-gray-400 hover:text-teal-400' title="Unity"></i>
                        </p>
                    </div>
                    {/* Percentage bar mobile */}
                    <div className="">
                        <div class="container text-white px-4 py-4 md:hidden">
                            <div class="row  space-y-4">
                                <div></div>
                                <div class="col text-teal-300 italic">HTML&emsp;&emsp;<span className="text-sm text-white not-italic">80%</span></div>
                                <div class="col text-teal-300 italic">CSS &emsp;&emsp;<span className="text-sm text-white">80%</span></div>
                                <div class="w-100"></div>
                                <div class="col text-teal-300 italic">Javascript &emsp;&emsp;<span className="text-sm text-white">80%</span></div>
                                <div class="col text-teal-300 italic">React Js &emsp;&emsp;<span className="text-sm text-white">80%</span></div>
                                <div class="w-100"></div>
                                <div class="col text-teal-300 italic">Tailwind &emsp;&emsp;<span className="text-sm text-white">80%</span></div>
                                <div class="col text-teal-300 italic">Bootstrap &emsp;&emsp;<span className="text-sm text-white">80%</span></div>
                                <div class="w-100"></div>
                                <div class="col text-teal-300 italic">GIT &emsp;&emsp;<span className="text-sm text-white">80%</span></div>
                                <div class="col text-teal-300 italic">PHP &emsp;&emsp;<span className="text-sm text-white">80%</span></div>
                                <div class="w-100"></div>
                                <div class="col text-teal-300 italic">MySQL &emsp;&emsp;<span className="text-sm text-white">80%</span></div>
                                <div class="col text-teal-300 italic">Node Js &emsp;&emsp;<span className="text-sm text-white">80%</span></div>
                            </div>

                        </div>
                    </div>
                    {/* Percentage bar large */}
                    <div className="hidden md:block py-4">
                        <div className="w"><Percentage skill="HTML" /></div>
                        <div className="w-11/12"><Percentage skill="CSS" /></div>
                        <div className="w-10/12"><Percentage skill="Javascript" /></div>
                        <div className="w-4/5"><Percentage skill="React Js" /></div>
                        <div className="w-10/12"><Percentage skill="Tailwind CSS" /></div>
                        <div className="w-9/12"><Percentage skill="Bootstrap" /></div>
                        <div className="w-10/12"><Percentage skill="GIT" /></div>
                        <div className="w-4/5"><Percentage skill="PHP" /></div>
                        <div className="w-3/4"><Percentage skill="CakePHP" /></div>
                        <div className="w-5/6"><Percentage skill="MySQL" /></div>
                        <div className="w-2/3"><Percentage skill="Node." /></div>
                    </div>
                </div>
            </div>
        )
    }
}