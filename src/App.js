import React, {Component} from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import Icons from "./components/icons";
import Services from "./components/services";
import About1 from "./components/about1";
import Projects from "./components/projects";
import About2 from "./components/about2";
import Blog from "./components/blog";
import Testimonials from "./components/testimonials";
import Pricing from "./components/pricing";
import Contact from "./components/contacts";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Home />
        <Icons />
        <Services />
        <About1 />
        <Projects />
        <About2 />
        <Blog />
        <Testimonials />
        <Pricing />
        <Contact />
        <Footer />
      </div>
    )
  }
}
export default App;
