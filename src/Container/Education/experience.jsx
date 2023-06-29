import React, { Component } from "react";

export default class extends Component {
    render() {
        return (
            <div className=" text-white">
                <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet' />
                    <div className="bg-gray-200 text-black font-bold text-3xl tracking-widest py-1 pl-4 font-poppin">Experience</div>
                    <div className="bg-slate-800 text-white w-auto p-4">
                        <h4>Information Technology</h4>
                        <h2>Ninealgo Pvt. Ltd. | <span className="text-sm">April 2022 » April 2023</span></h2>
                        <span className="bg-blue-500 px-6 py-1 font-bold">Web Developer</span><hr />
                        <ul className="text-sm text-justify">
                            <li class='bx bx-code-alt'> Programming & development.</li><br />
                            <li class='bx bxs-share-alt'> E-Marketing & publishing.</li><br />
                            <li class='bx bx-edit-alt'> Writing content.</li><br />
                            <li class='bx bx-image-add'> Video production & graphic design.</li>
                        </ul>
                    </div>
            </div>
        )
    }
}