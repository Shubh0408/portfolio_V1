import React from "react";

export default function Percentage({skill}) {
    return (
        <main className="px-8">
            <span className="text-base text-white">{skill}</span>
            <div className="">
                <div className="bg-slate-300 h-1"></div>
            </div>
        </main>
    )
}