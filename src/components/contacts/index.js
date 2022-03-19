import React, { Component } from "react";
import "./style.css";
import Image1 from "../../images/about1/pexels-canva-studio-3153198.jpg";
import Image2 from "../../images/about1/pexels-designecologist-1751279.jpg";
import Image3 from "../../images/about1/pexels-skitterphoto-19043.jpg";

class Contact extends Component {
    render() {
        return (
            <section className="contact">
                <div className="container">
                    <h2>Let's get in touch</h2>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna </p>
                    <div className="content">
                        <form>
                            <label for="name">Full Name</label>
                            <input type="text" id="name" placeholder="Product Offer" />
                            <label for="email">Email</label>
                            <input type="email" id="email" placeholder="lopremipusm@mail.comt" />
                            <label for="subject">Subject</label>
                            <input type="text" id="subject" placeholder="Subject" />
                            <textarea placeholder="Your Message here" />
                            <input type="submit" value="Send Message" />
                        </form>
                        <div className="images">
                            <div className="col">
                                <div className="img"><img src={Image1} alt="Image1"/></div>
                                <div className="img"><img src={Image2} alt="Image2"/></div>
                            </div>
                            <div className="col">
                                <div className="img"><img src={Image3} alt="Image3"/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;