import React, { Component } from "react";
import "./style.css";
import Roll from "../../images/icons/roll.png";
import Screen from "../../images/icons/screen.png";
import Device from "../../images/icons/device.png";
import Printer from "../../images/icons/printer.png";

class Services extends Component {
    render() {
        return(
            <section className="services">
                <div className="container">
                    <h2>our awesome services</h2>
                    <p className="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    <div className="items">
                        <div className="item">
                            <img src={Roll} alt="roll" />
                            <h3>graphic design</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        </div>
                        <div className="item">
                            <img src={Screen} alt="screen" />
                            <h3>web design</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        </div>
                        <div className="item">
                            <img src={Device} alt="device" />
                            <h3>development</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        </div>
                        <div className="item">
                            <img src={Printer} alt="printer" />
                            <h3>print</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Services;