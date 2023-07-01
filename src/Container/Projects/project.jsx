import React, { Component } from "react";
import ProjectTemplate from "./projectTemplate";
import image from "../../Assets/img2.jpg";
import image1 from "../../Assets/hospital_management.png";
import image2 from "../../Assets/online_birth_certificate.png";

export default class extends Component {
    render() {
        return (
            <div className="wrapper bg-slate-800 pt-4">
            <div className="flex justify-center items-center"><ProjectTemplate image={image1} heading="Hospital Management" description="Build using PHP and MySQL is used as Database" viewcodelink="https://github.com/shubhamverma9982/hospital-management" trylivelink="trylivetest"/></div>
            <div className="flex justify-center items-center"><ProjectTemplate image={image2} heading="Online Birth Certificate" description="Build using PHP and MySQL" viewcodelink="https://github.com/shubhamverma9982/online-birth-certificate" trylivelink="trylivetest"/></div>
            <div className="flex justify-center items-center"><ProjectTemplate image={image} heading="Restaurant Website" description="Build using HTML,CSS & Javascript" viewcodelink="viewcodetest" trylivelink="trylivetest"/></div>
            <div className="flex justify-center items-center"><ProjectTemplate image={image} heading="Restaurant Website" description="Build using HTML,CSS & Javascript" viewcodelink="viewcodetest" trylivelink="trylivetest"/></div>
            <div className="flex justify-center items-center"><ProjectTemplate image={image} heading="Restaurant Website" description="Build using HTML,CSS & Javascript" viewcodelink="viewcodetest" trylivelink="trylivetest"/></div>

          </div>          
        )
    }
}