import React, { Component } from "react";
//import axios from "axios";
import logo from "../../assets/images/logo.png";

class SingIn extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
   
  }

  render() {
    return (
      <div className="product">

        
        <div className="search">
          <div className="search-content">
            <div className="search-content__logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="search-content__searhbar">
             
              <button className="search-content__searhbar--icon">
              </button>
            </div>
          </div>
        </div>
        <div className="routerIndicator">
        </div>
      </div>
    );
  }
}

export default SingIn;