import React, { Component } from "react";
import "./style.css";

class Home extends Component {
    render() {
        return(
            <section className="home">
                <div className="container">
                    <div className="text1">
                        <h1>we are digital agency</h1>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                        <button>get started</button>
                    </div>
                    <div className="image">
                        <div className="text2">
                            <div>Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it.</div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Home;