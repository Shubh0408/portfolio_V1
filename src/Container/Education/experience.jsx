import React, { Component } from "react";

export default class extends Component {
    render() {
        return (
            <div className=" text-white">
                <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet' />
                    <div className="bx bx-briefcase-alt bx-md bg-gray-200 text-black font-bold text-3xl tracking-wider py-2 pl-10 font-poppin w-full">Experience</div>
                    <div className="bg-slate-800 text-white w-auto p-5">
                        <h4>Information Technology</h4>
                        <h2>Ninealgo Pvt. Ltd. | <span className="text-sm">April 2022 » April 2023</span></h2>
                        <span className="bg-blue-500 px-6 py-1 font-bold">Web Developer</span><hr />
                        <ul className="text-sm text-justify">
                            <li className='bx bx-code-alt'> Programming & development.</li><br />
                            <li className='bx bxs-share-alt'> E-Marketing & publishing.</li><br />
                            <li className='bx bx-edit-alt'> Writing content.</li><br />
                            <li className='bx bx-image-add'> Video production & graphic design.</li>
                        </ul>
                    </div>
            </div>
        )
    }
}