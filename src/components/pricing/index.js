import React, { Component } from "react";
import "./style.css";
import "./all.min.css";
import Roll from "../../images/icons/roll.png";
import Screen from "../../images/icons/screen.png";
import Device from "../../images/icons/device.png";

class Pricing extends Component {
    render() {
        return(
            <section className="pricing" id="pricing">
                <div className="container">
                    <h2>Check Our Pricing</h2>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna </p>
                    <div className="plans">
                        <div className="starter">
                            <div className="price">
                                <img src={Roll} alt="roll"/>
                                <span>$ 29.99 /mo</span>
                            </div>
                            <h3>starter</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
                            <ul>
                                <li className="yes">Product Offer</li>
                                <li className="yes">Offer</li>
                                <li>Product Offer #2</li>
                                <li>Product</li>
                                <li>Product Offer</li>
                            </ul>
                            <button>Buy</button>
                        </div>
                        <div className="basic">
                            <div className="price">
                                <img src={Screen} alt="roll"/>
                                <span>$ 29.99 /mo</span>
                            </div>
                            <h3>Basic</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
                            <ul>
                                <li className="yes">Product Offer</li>
                                <li className="yes">Offer</li>
                                <li className="yes">Product Offer #2</li>
                                <li className="yes">Product</li>
                                <li>Product Offer</li>
                            </ul>
                            <button>Buy</button>
                        </div>
                        <div className="golden">
                            <div className="price">
                                <img src={Device} alt="roll"/>
                                <span>$ 29.99 /mo</span>
                            </div>
                            <h3>Golden</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
                            <ul>
                                <li className="yes">Product Offer</li>
                                <li className="yes">Offer</li>
                                <li className="yes">Product Offer #2</li>
                                <li className="yes">Product</li>
                                <li className="yes">Product Offer</li>
                            </ul>
                            <button>Buy</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Pricing;