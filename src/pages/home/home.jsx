import React, { Component } from 'react';
import "../../styles/home.scss";
import Card from "../../components/shared/card";
import { data } from "../../utils/mocks/categories";


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {}
}

  render() {
  return (
    <div className="home">
       <h1>Categorias</h1>
      <div className="home__main">
        <Card data = {data.categories}/>
      </div>
    </div>
  );
}}

export default Home;
