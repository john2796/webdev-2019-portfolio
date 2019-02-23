import React, { Component, Fragment } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import NavBar from "./components/Nav/NavBar";
import Sticky from "react-sticky-el";
import Alert from "react-s-alert";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Home />
        <Sticky className="Sticky">
          <NavBar />
        </Sticky>
        <About />
        <Projects />
        <Contact />

        <Alert
          stack={{ limit: 3, spacing: 50 }}
          position="top-right"
          effect="slide"
        />
      </Fragment>
    );
  }
}

export default App;
