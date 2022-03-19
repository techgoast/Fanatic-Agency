import React, { Component } from "react";
import "./style.css";

class Testimonials extends Component {
    render() {
        return(
            <section className="testimonials">
                <div className="container">
                <h2>What They Say?</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna </p>
                <div className="talks">
                    <div className="talk">Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it.</div>
                    <div className="talk">Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it.</div>
                    <div className="talk">Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it.</div>
                </div>
                </div>
            </section>
        )
    }
}
export default Testimonials;