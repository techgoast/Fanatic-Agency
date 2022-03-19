import React, { Component } from "react";
import "./style.css";

class Header extends Component {
    state = {
        active: false
    }

    handleClick = () => {
        this.setState({
            active: !this.state.active
        })
    }
    render() {
        return (
            <header>
                <div className="container">
                    <div className={this.state.active? "logo active" : "logo"}>
                        <div className="shapes">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div>fantastic</div>
                    </div>
                    <ul className={this.state.active? "active" : ""}>
                        <li><a href="#home">home</a></li>
                        <li><a href="#srvs">services</a></li>
                        <li><a href="#projects">projects</a></li>
                        <li><a href="#blog">blog</a></li>
                        <li><a href="#pricing">pricing</a></li>
                        <li><a href="#contact">contact</a></li>
                        <li><a href="#contact">login</a></li>
                        <li><a href="#projects">get started</a></li>
                    </ul>
                    <div className="menu" onClick={this.handleClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;