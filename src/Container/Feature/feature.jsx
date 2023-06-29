import React, { Component } from "react";

export default class extends Component {
    render() {
        return (
            <main className="bg-gray-200" id="feature">
                <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet' />
                <div className="sm:flex sm:p-7">
                    <div></div>
                    <div className="text-center px-5 pt-3">
                        <i className='bx bx-code-block bx-lg sm:py-5 sm:px-3'></i>
                        <h6 className="font-bold">Front-end</h6>
                        <p className="font-poppin text-sm tracking-wide">Web Page Design, Make design easy so you can focus on building your business.focuses on creating intuitive and visually appealing interfaces that enhance user engagement and satisfaction.</p>
                    </div>
                    <div className="text-center px-5 py-3">
                        <i className="bx bx-code-alt bx-lg sm:py-5 sm:px-3"></i>
                        <h6 className="font-bold">Desktop & Web Applications</h6>
                        <p className="font-poppin text-sm tracking-wide">Web Development and Interactive Pages, Make development easy so you can focus on building your business.</p>
                    </div>
                    <div className="text-center px-5 py-3">
                        <i className="bx bxs-data bx-lg sm:py-5 sm:px-3 "></i>
                        <h6 className="font-bold">Database</h6>
                        <p className="font-poppin text-sm tracking-wide">Managing database, adjusting their settings, and ready them. Powering various sectors such as e-commerce, finance, healthcare, and more.</p>
                    </div>
                </div>
            </main>
        )
    }
}