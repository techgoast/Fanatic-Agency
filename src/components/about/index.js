import React, { Component } from "react";
import "./style.css";

class About extends Component {
    render() {
        return (
            <div className="about">
                <p>A few words about company</p>
                <h2>A Study of Creativity</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                <button>get started</button>
                <button>contact us</button>
            </div>
        )
    }
}
export default About;