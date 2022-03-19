import React, { Component } from "react";
import "./style.css";
import About from "../about";
class About1 extends Component {
    render() {
        return (
            <section className="about1">
                <div className="container">
                    <About />
                    <div className="images">
                        <div className="row">
                            <div className="one"></div>
                            <div className="two"></div>
                        </div>
                        <div className="row">
                            <div className="three"></div>
                            <div className="four"></div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default About1;