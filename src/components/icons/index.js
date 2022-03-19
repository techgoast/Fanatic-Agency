import React, { Component } from "react";
import "./style.css";
import Img1 from "../../images/brands/01.png";
import Img2 from "../../images/brands/02.png";
import Img3 from "../../images/brands/03.png";
import Img4 from "../../images/brands/04.png";
import Img5 from "../../images/brands/05.png";
import Img6 from "../../images/brands/06.png";

class Icons extends Component {
    render() {
        return(
            <section className="brands">
                <div className="container">
                    <div><img src={Img1} alt="img1" /></div>
                    <div><img src={Img2} alt="img2" /></div>
                    <div><img src={Img3} alt="img3" /></div>
                    <div><img src={Img4} alt="img4" /></div>
                    <div><img src={Img5} alt="img5" /></div>
                    <div><img src={Img6} alt="img6" /></div>
                </div>
            </section>
        )
    }
}
export default Icons;