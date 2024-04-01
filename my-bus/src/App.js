import React from "react";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import About from "./components/About.js";
import Interest from "./components/Interest.js";
import Img from "./components/Img.js";
import Contact2 from "./components/Contact2.js"
import Footer2 from "./components/Footer2.js";
import Contact3 from "./components/Contact3.js";
import Footer3 from "./components/Footer3.js";
import Contact4 from "./components/Contact4.js";
import Footer4 from "./components/Footer4.js";

export default function App (){
    return(
        <div className="details">
            <div className="info">
                <Img />
                <div className="info1">
                    <Contact />
                    <About />
                    <Interest />
                </div>
                <Footer />
            </div>
            <div className="info">
                <Img />     
                <div className="info1">
                    <Contact2 />
                    <About />
                    <Interest />
                </div>
                <Footer2 />
            </div>
            <div className="info">
                <Img />
                <div className="info2">
                    <Contact3 />
                    <About />
                    <Interest />
                 </div>
                <Footer3 />
            </div>
            <div className="info">
                <Img />
                <div className="info2">
                    <Contact4 />
                    <About />
                    <Interest />
                 </div>
                <Footer4 />
            </div>
        </div>
    )
}