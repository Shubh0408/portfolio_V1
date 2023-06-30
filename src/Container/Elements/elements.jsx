import React, { Component } from "react";
import ElementsTemplate from "./elementsTemplate";
import image1 from "../../Assets/img2.jpg";

export default class extends Component {
    render() {
        return (
            <div className="wrapper bg-slate-800 p-2 flex gap-4">
                <div className="flex justify-center items-center"><ElementsTemplate image={image1} heading="Website" description="qwertyuiop asdfghjk zxcvbnm" trynowlink="qwerty" viewsourcelink="dfghj"  /></div>
                <div className="flex justify-center items-center"><ElementsTemplate image={image1} heading="website" description="qwertyuiop asdfghjk zxcvbnm" /></div>
                <div className="flex justify-center items-center"><ElementsTemplate image={image1} heading="website" description="qwertyuiop asdfghjk zxcvbnm" /></div>
                <div className="flex justify-center items-center"><ElementsTemplate image={image1} heading="website" description="qwertyuiop asdfghjk zxcvbnm" /></div>
                <div className="flex justify-center items-center"><ElementsTemplate image={image1} heading="website" description="qwertyuiop asdfghjk zxcvbnm" /></div>
            </div>
        )
    }
}