import React, { Component } from "react";
import "./style.css";
import About from "../about";

class About2 extends Component {
    render() {
        return(
            <section className="about2">
                <div className="container">
                    <div className="image"></div>
                    <About />
                </div>
            </section>
        )
    }
}
export default About2;