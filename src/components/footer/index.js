import React, { Component } from "react";
import "./style.css";

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="logo">fanatic</div>
                    <div className="copy"> &copy; 2020 - <span>fanatic</span> All Right Reserved</div>
                    <div className="top">Back to top</div>
                </div>
            </footer>
        )
    }
}
export default Footer;