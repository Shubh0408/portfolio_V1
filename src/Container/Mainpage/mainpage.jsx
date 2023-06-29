import React, { Component } from "react";
import NavigationBar from "../../Component/Navbar/navbar";
import Footer from "../../Component/Footer/footer";
import Feature from "../Feature/feature";
import Landingpage from "../Landing/landingpage";
import Skills from "../Skills/skills";
import Eduction from "../Education/eduction";
import Experience from "../Education/experience";
import Portfolio from "../Portfolio/portfolio";
import ScrollToTop from "react-scroll-to-top";

export default class extends Component {
    render() {
        
        return (
            <main className="">
                <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet' />
                <ScrollToTop className="pl-2" width="24" height="18"/>
                <NavigationBar />
                <Landingpage />
                <Skills />
                <Feature />
                <Eduction />
                <Experience />
                <Portfolio />
                <Footer />
            </main>
        )
    }
}