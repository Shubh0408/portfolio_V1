import React, { Component } from "react";

export default class extends Component {
    render() {
        return (
            <main className="bg-gray-200">
                <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet' />
                <div className="sm:flex sm:p-7">
                    <div className="text-center px-5 pt-3">
                        <i className='bx bx-code-block bx-lg sm:py-5 sm:px-3'></i>
                        <h6 className="font-bold">Front-end</h6>
                        <p className="font-poppin text-sm tracking-wide">Web Page Design, Make design easy so you can focus on building your business.</p>
                    </div>
                    <div className="text-center px-5 py-3">
                        <i className="bx bxl-wordpress bx-lg sm:py-5 sm:px-3 "></i>
                        <h6 className="font-bold">Wordpress</h6>
                        <p className="font-poppin text-sm tracking-wide">Installing websites, adjusting their settings, and them ready. Page design with Page Builder plugins. Build Templates And Plugin Developer.</p>
                    </div>
                    <div className="text-center px-5 py-3">
                        <i className="bx bx-code-alt bx-lg sm:py-5 sm:px-3"></i>
                        <h6 className="font-bold">Desktop & Web Applications</h6>
                        <p className="font-poppin text-sm tracking-wide">Web Development and Interactive Pages, Make development easy so you can focus on building your business.</p>
                    </div>
                </div>
            </main>
        )
    }
}