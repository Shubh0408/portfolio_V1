import React, { Component } from "react";

export default class extends Component {
    render() {
        return (
            <main className="md:flex-row">
                {/* first container */}
                <div className="bg-slate-800 font-poppin text-white p-4 md:w-1/2">
                    <h2>MCA <span className="text-sm">Masters of Computer Application </span></h2>
                    <h2>Apex University | <span className="text-sm">2021 » 2023</span></h2>
                    <span className="bg-blue-500 px-6">65%</span>
                    <div>I am recently passed Masters of Computer Applications</div>
                </div>
                {/* second container */}
                <div className="bg-slate-800 text-white p-4 md:w-1/2">
                    <h2>BCA <span className="text-sm">Bachelors of Computer Application </span></h2>
                    <h2>Rajasthan University | <span className="text-sm">2019 » 2021</span></h2>
                    <span className="bg-blue-500 px-6">64%</span>
                    <div>I am recently passed Masters of Computer Applications</div>
                </div>
            </main>
        )
    }
}