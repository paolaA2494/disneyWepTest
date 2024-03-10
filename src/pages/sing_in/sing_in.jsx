import React, { Component } from "react";
import '../../styles/sing_in.scss';
import Login from '../../components/login/login'

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
      <div className="sing-in">
      <div className="sing-in_content1">
        <h1 className="sing-in_content1--title">El mejor entretenimiento ¡Descúbrelo!</h1>
      </div>
      <div className="sing-in_content2">
        <Login />
      </div>
      </div>
    );
  }
}

export default SingIn;