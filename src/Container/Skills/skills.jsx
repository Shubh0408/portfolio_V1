import React, { Component } from "react";
import logo from "../../Assets/profile.jpeg";
import "./skills.css";
import Percentage from "./percentagecomponent";

export default class extends Component {
    render() {
        return (
            <div className="main sm:flex " id="skills">
                <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet' />
                {/* left container */}
                <div className="right sm:w-1/2 bg-slate-700 h-auto">
                    <div className="top text-center pt-8 font-extrabold text-4xl text-blue-200"> About Me</div>
                    <section className="img mt-6 flex justify-center"><img src={logo} className="img rounded-full w-1/3" /></section>
                    <div className="rest px-4 py-4 mt-12 text-sm md:text-lg font-poppin tracking-wide lg:tracking-widest lg:font-semibold text-white">I'm Shubham, a passionate web developer with 1 year of professional experience. I specialize in front-end development and have a strong foundation in HTML, CSS, and JavaScript. I enjoy crafting responsive and user-friendly websites that deliver an exceptional user experience.<br />I am proficient in using popular front-end frameworks like React and have a good understanding of modern web development practices.</div>
                </div>
                {/* right container */}
                <div className="left sm:w-1/2 bg-slate-700 h-auto">
                    <div className="top text-center pt-8 font-extrabold text-4xl text-blue-200"> Skills</div>
                    {/* icons section  */}
                    {/* for icons ->  https://icon-sets.iconify.design/ */}
                    <div className="flex justify-center">
                        <p className="mt-4 space-x-3 md:space-x-7">
                            <i></i>
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
                        <div className=" text-white px-4 py-4 space-y-4 sm:hidden">
                            <div className="flex justify-around px-10" >
                                <div><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 200 200">
                                    <circle cx="100" cy="100" r="90" fill="#E5E7EB" />
                                    <circle cx="100" cy="100" r="85" fill="none" stroke="#334155" stroke-width="5" stroke-dasharray="510" stroke-dashoffset="0" transform="rotate(-90 100 100)" />
                                    <text x="50%" y="50%" text-anchor="middle"  font-size="30" fill="#334155">HTML</text>
                                    <text x="50%" y="60%" text-anchor="middle" dy="7" font-size="18" fill="#334155">95%</text>
                                </svg>
                                </div>
                                <div><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 200 200">
                                    <circle cx="100" cy="100" r="90" fill="#E5E7EB" />
                                    <circle cx="100" cy="100" r="85" fill="none" stroke="#334155" stroke-width="5" stroke-dasharray="480" stroke-dashoffset="0" transform="rotate(-90 100 100)" />
                                    <text x="50%" y="50%" text-anchor="middle" font-size="30" fill="#334155">CSS</text>
                                    <text x="50%" y="60%" text-anchor="middle" dy="7" font-size="18" fill="#334155">85%</text>
                                </svg>
                                </div>
                                <div><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 200 200">
                                    <circle cx="100" cy="100" r="90" fill="#E5E7EB" />
                                    <circle cx="100" cy="100" r="85" fill="none" stroke="#334155" stroke-width="5" stroke-dasharray="450" stroke-dashoffset="0" transform="rotate(-90 100 100)" />
                                    <text x="50%" y="50%" text-anchor="middle" font-size="30" fill="#334155">Javascript</text>
                                    <text x="50%" y="60%" text-anchor="middle" dy="7" font-size="18" fill="#334155">80%</text>
                                </svg>
                                </div>

                            </div>
                            <div className="flex justify-around px-10" >
                                <div><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 200 200">
                                    <circle cx="100" cy="100" r="90" fill="#E5E7EB" />
                                    <circle cx="100" cy="100" r="85" fill="none" stroke="#334155" stroke-width="5" stroke-dasharray="480" stroke-dashoffset="0" transform="rotate(-90 100 100)" />
                                    <text x="50%" y="50%" text-anchor="middle" font-size="30" fill="#334155">React Js</text>
                                    <text x="50%" y="60%" text-anchor="middle" dy="7" font-size="18" fill="#334155">85%</text>
                                </svg></div>
                                <div><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 200 200">
                                    <circle cx="100" cy="100" r="90" fill="#E5E7EB" />
                                    <circle cx="100" cy="100" r="85" fill="none" stroke="#334155" stroke-width="5" stroke-dasharray="480" stroke-dashoffset="0" transform="rotate(-90 100 100)" />
                                    <text x="50%" y="50%" text-anchor="middle" font-size="30" fill="#334155">Tailwind</text>
                                    <text x="50%" y="60%" text-anchor="middle" dy="7" font-size="18" fill="#334155">85</text>
                                </svg></div>
                                <div><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 200 200">
                                    <circle cx="100" cy="100" r="90" fill="#E5E7EB" />
                                    <circle cx="100" cy="100" r="85" fill="none" stroke="#334155" stroke-width="5" stroke-dasharray="435" stroke-dashoffset="0" transform="rotate(-90 100 100)" />
                                    <text x="50%" y="50%" text-anchor="middle" font-size="30" fill="#334155">Bootstarp</text>
                                    <text x="50%" y="60%" text-anchor="middle" dy="7" font-size="18" fill="#334155">83%</text>
                                </svg></div>
                            </div>
                            <div className="flex justify-around px-10" >
                                <div><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 200 200">
                                    <circle cx="100" cy="100" r="90" fill="#E5E7EB" />
                                    <circle cx="100" cy="100" r="85" fill="none" stroke="#334155" stroke-width="5" stroke-dasharray="470" stroke-dashoffset="0" transform="rotate(-90 100 100)" />
                                    <text x="50%" y="50%" text-anchor="middle" font-size="30" fill="#334155">PHP</text>
                                    <text x="50%" y="60%" text-anchor="middle" dy="7" font-size="18" fill="#334155">84%</text>
                                </svg></div>
                                <div><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 200 200">
                                    <circle cx="100" cy="100" r="90" fill="#E5E7EB" />
                                    <circle cx="100" cy="100" r="85" fill="none" stroke="#334155" stroke-width="5" stroke-dasharray="480" stroke-dashoffset="0" transform="rotate(-90 100 100)" />
                                    <text x="50%" y="50%" text-anchor="middle"  font-size="30" fill="#334155">MySQL</text>
                                    <text x="50%" y="60%" text-anchor="middle" dy="7" font-size="18" fill="#334155">85%</text>
                                </svg></div>
                                <div><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 200 200">
                                    <circle cx="100" cy="100" r="90" fill="#E5E7EB" />
                                    <circle cx="100" cy="100" r="85" fill="none" stroke="#334155" stroke-width="5" stroke-dasharray="385" stroke-dashoffset="0" transform="rotate(-90 100 100)" />
                                    <text x="50%" y="50%" text-anchor="middle" font-size="30" fill="#334155">Node js</text>
                                    <text x="50%" y="60%" text-anchor="middle" dy="7" font-size="18" fill="#334155">70%</text>
                                </svg></div>
                            </div>
                        </div>
                    {/* Percentage bar large */}
                    <div className="hidden sm:block py-4">
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