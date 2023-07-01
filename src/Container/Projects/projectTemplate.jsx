import React from "react";
import "./project.css";

export default function ProjectTemplate({image,heading,description,viewcodelink,trylivelink}) {
    return (
            <div className="card">
                <div className="card-info">
                    <div className="card-avatar"><img src={image}/></div>
                    <div className="card-title">{heading}</div>
                    <div className="card-subtitle">{description}</div>
                </div>
                <div className="card-social gap-2 text-white">
                    <button className="bg-slate-700 text-xs p-1"><a className="text-white no-underline" target="blank" href={viewcodelink}>View Code</a></button>
                    <button className="bg-slate-700 text-xs p-1"><a className="text-white no-underline" target="blank" href={trylivelink}>Try Live</a></button>
                </div>
            </div>
    )
}