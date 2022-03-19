import React, { Component } from "react";
import "./style.css";
import Image from "../../images/awesome projects/pexels-los-muertos-crew-8030147.jpg";
import Image1 from "../../images/awesome projects/pexels-steve-johnson-1047524.jpg";

class Projects extends Component {
    render() {
        return(
            <section className="projects" id="projects">
                <div className="container">
                    <h2>Our Awesome Projects</h2>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    <div className="items">
                        <div className="item">
                            <div className="image">
                                <img src={Image} alt="project"/>
                                <p>Photo by Los Muertos Crew from Pexels</p>
                            </div>
                            <h3>Awesome Project</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
                        </div>
                        <div className="item">
                            <div className="image">
                                <img src={Image1} alt="project"/>
                                <p>Photo by Steve Johnson from Pexels</p>
                            </div>
                            <h3>Awesome Project</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
                        </div>
                        <div className="item">
                            <div className="image">
                                <img src={Image} alt="project"/>
                                <p>Photo by Los Muertos Crew from Pexels</p>
                            </div>
                            <h3>Awesome Project</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
                        </div>
                        <div className="item">
                            <div className="image">
                                <img src={Image1} alt="project"/>
                                <p>Photo by Steve Johnson from Pexels</p>
                            </div>
                            <h3>Awesome Project</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
                        </div>
                        <div className="item">
                            <div className="image">
                                <img src={Image} alt="project"/>
                                <p>Photo by Los Muertos Crew from Pexels</p>
                            </div>
                            <h3>Awesome Project</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
                        </div>
                        <div className="item">
                            <div className="image">
                                <img src={Image1} alt="project"/>
                                <p>Photo by Steve Johnson from Pexels</p>
                            </div>
                            <h3>Awesome Project</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
                        </div>
                    </div>
                        <button>learn more</button>
                </div>
            </section>
        )
    }
}
export default Projects;