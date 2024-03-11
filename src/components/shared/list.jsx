import React, { Component } from "react";
import "../../styles/list.scss";
import { Link } from "react-router-dom";
import castle  from '../../assets/images/castle.png';


class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;
    return (
      <div className="lists">
       {data.map((item) => {
        return (
            <Link to={`/detail/${item.id}`} className="text-decoration-none">
              <div className="card mb-3 w-100 h-20" >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={castle} className="img-fluid rounded w-100 h-20" alt="imgMovie" />
                  </div>
                  <div className="col-md-8 h-20">
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">
                        {item.overview}
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                         {item.release_date}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
        );
        })}
      </div>
    );
  }
}

export default List;
