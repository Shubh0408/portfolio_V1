import React from "react";
import "./element.css";

export default function ElementsTemplate({image,heading,description,trynowlink,viewsourcelink}) {
    return (
        <div class="cardl p-1">
            <img src={image} ></img>
            <div class="card__contentl">
                <p class="card__titlel">{heading}</p>
                <p class="card__descriptionl">{description}</p>
                <div className="text-white flex gap-3 absolute top-32">
                    <button className="bg-slate-800 px-2"><a href={trynowlink} className="text-white no-underline">Try Now</a></button>
                    <button className="bg-slate-800 px-2"><a href={viewsourcelink} className="text-white no-underline">View Source</a></button>
                </div>
            </div>
        </div>
    )
}