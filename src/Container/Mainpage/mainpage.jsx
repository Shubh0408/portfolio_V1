import React, { Component } from "react";
import NavigationBar from "../../Component/Navbar/navbar";
import Footer from "../../Component/Footer/footer";
import About from "../Skills/skills";
import Feature from "../Feature/feature";
import Profile from "../Landing/landingpage";
import Landingpage from "../Landing/landingpage";
import Skills from "../Skills/skills";
import Eduction from "../Education/eduction";
import Experience from "../Education/experience";

export default class extends Component {
    render() {
        return (
            <main>
                <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet' />

                <NavigationBar />
                <Landingpage />
                <Skills />
                <Feature />
                <Eduction />
                <Experience/>


                <div className="bg-slate-400 h-96">
                    <h1 >Mainpage</h1>
                    <p>liermhfsfk !jfwlfnwlfljv hvjfmhjhu
                        lsyrfhwkfjn liwjfwiljf ljiejw uhubqwd audi uqdhoqudk udiwgduwhxwhdd  ouhqohoqhdd odhd
                    </p>
                    <p>
                        <i class='bx bxl-adobe bx-lg' title="Adobe"></i>
                    </p>
                    <svg viewbox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" fill="#4b4b4b" />
                      <path fill="none" stroke-linecap="round" stroke-width="5" stroke-dasharray="205"
                        d="M50 10
                                    a 40 40 0 0 1 0 80
                                    a 40 40 0 0 1 0 -80"/>
                      <text x="50" y="50" text-anchor="middle" dy="7" font-size="20">80%</text>
                    </svg>
                </div>
                
                <Footer />
            </main>
        )
    }
}