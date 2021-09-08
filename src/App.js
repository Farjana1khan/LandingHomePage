import React, { Component } from "react";
import "./index.css";
export default class App extends Component {
  render() {
    return (
      <div className="bg-img">
        <div className="logo"> Qubi</div>
        <div className="navbar-brand">
          <div className="topnav">
            <ul className="nav navbar-nav navbar-right">
              <a href="#home">Home</a>
              <a href="#about">About us</a>
              <a href="#product">Products</a>
              <a href="#get">Get a qubi</a>
              <a href="#contact">contact us</a>
            </ul>
          </div>

          <div className="btm ">
            <h3>Bored or exhauted </h3>
            <h3>Sad or happy</h3> <h3>Grab a Coffee !</h3>
          </div>
          <div className="desc">
            <h5 className="btn">EXPLORE</h5>
          </div>
        </div>
      </div>
    );
  }
}
