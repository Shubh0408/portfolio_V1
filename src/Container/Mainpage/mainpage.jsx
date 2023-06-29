import React, { Component } from "react";
import NavigationBar from "../../Component/Navbar/navbar";
import Footer from "../../Component/Footer/footer";
import About from "../About/about";
import Feature from "../Feature/feature";
import Profile from "../Profile/profile";

export default class extends Component {
    render() {
        return (
            <main>
                <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet' />

                <NavigationBar />
                <Profile />
                <About />
                <Feature />

                <div className="bg-slate-400 h-96">
                    <h1 >Mainpage</h1>
                    <p>liermhfsfk !jfwlfnwlfljv hvjfmhjhu
                        lsyrfhwkfjn liwjfwiljf ljiejw uhubqwd audi uqdhoqudk udiwgduwhxwhdd  ouhqohoqhdd odhd
                    </p>
                    <p>
                        <i class='bx bxl-adobe bx-lg' title="Adobe"></i>
                    </p>
                </div>
                
                <Footer />
            </main>
        )
    }
}