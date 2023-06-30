import React, { Component } from "react";
import ProjectTemplate from "./projectTemplate";
import image from "../../Assets/img2.jpg";

export default class extends Component {
    render() {
        return (
            <div className="wrapper bg-slate-800 pt-4">
            <div className="flex justify-center items-center"><ProjectTemplate image={image} heading="Restaurant Website" description="Build using HTML,CSS & Javascript" viewcodelink="viewcodetest" trylivelink="trylivetest"/></div>
            <div className="flex justify-center items-center"><ProjectTemplate image={image} heading="Restaurant Website" description="Build using HTML,CSS & Javascript" viewcodelink="viewcodetest" trylivelink="trylivetest"/></div>
            <div className="flex justify-center items-center"><ProjectTemplate image={image} heading="Restaurant Website" description="Build using HTML,CSS & Javascript" viewcodelink="viewcodetest" trylivelink="trylivetest"/></div>
            <div className="flex justify-center items-center"><ProjectTemplate image={image} heading="Restaurant Website" description="Build using HTML,CSS & Javascript" viewcodelink="viewcodetest" trylivelink="trylivetest"/></div>
            <div className="flex justify-center items-center"><ProjectTemplate image={image} heading="Restaurant Website" description="Build using HTML,CSS & Javascript" viewcodelink="viewcodetest" trylivelink="trylivetest"/></div>

          </div>          
        )
    }
}