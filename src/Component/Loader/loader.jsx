import React, { Component } from "react";
import "./loader.css";

export default class extends Component {
    render() {
        return (
            <div className="bg-slate-950 h-screen w-screen flex justify-center items-center">
                <div class="loader">
                    <div data-glitch="Loading..." class="glitch">Loading...</div>
                </div>
            </div>
        )
    }
}