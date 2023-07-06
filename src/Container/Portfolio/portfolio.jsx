import React, { Component } from "react";
import img2 from "../../Assets/img2.jpg";

export default class extends Component {
    render() {
        return (
            <div className="sm:flex " id="portfolio">
                <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet' />
                {/* left */}
                <div className="bg-gray-300 text-center sm:w-1/2">
                    <a href="https://github.com/shubhamverma9982?tab=repositories"><i class='bx bxs-folder-open bx-lg text-gray-800 p-4'>
                        <div className="text-base font-bold tracking-wider">Projects</div>
                    </i></a>
                </div>
                {/* right */}
                <div className="bg-gray-300 text-center sm:w-1/2">
                    <a href="https://codepen.io/your-work"><i class='bx bxs-file bx-lg text-gray-800 p-4'>
                        <div className="text-base font-bold tracking-wider">Elements</div>
                    </i></a>
                </div>
            </div>
        )
    }
}