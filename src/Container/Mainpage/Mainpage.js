import React from "react";

export default function Mainpage(){
    return(
        <>
            <div>
                <nav className="bg-slate-700 text-white h-8 flex justify-between h-10" >
                    <span className="text-xl mx-10 my-1 text-2xl flex ">𝕾𝖍𝖚𝖇𝖍</span>
                    <ul className="flex justify-end mx-11 py-1 space-x-8">
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">About</li>
                        <li className="cursor-pointer">Projects</li>
                        <li className="cursor-pointer">Contact</li>
                    </ul>
                </nav>
            </div>
        </>
    )
}