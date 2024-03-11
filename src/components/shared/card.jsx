import React, { Component } from 'react';
import '../../styles/card.scss';
import { Link } from 'react-router-dom';


class Card extends Component {


  constructor(props) {
    super(props);
    this.state = {}
}

render() {
  return (
    <div className='cards'>
      {this.props.data.map((item, index) => {
        return (
          <Link to={`/category/${item.name}`} className='text-decoration-none'>
          <div className="card w-100 h-74 slide-up">
            <img src={item.image} class="card-img-top rounded w-100 h-75" alt="imagecard" />
            <div className="card-body">
              <h5 className="card-title text-secondary">
                {item.name}
              </h5>
              <p className="card-text  text-secondary">
                {item.description}
              </p>
            </div>
          </div>
          </Link>
        );
      })}
    </div>
  );

  }


};

export default Card;
