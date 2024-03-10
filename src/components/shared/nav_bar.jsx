import React from 'react';
import Logo from '../../assets/images/logo_transparent.png'
import { Link } from 'react-router-dom';




function NavBar () {
     return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-bottom shadow-sm">
        <img className="my-0 mr-md-auto font-weight-normal ml-5" width="200" height="150" src={Logo} alt="ResponsiveImage"/>
        <nav className="my-2 my-md-0 mr-md-5 pr-5">
        <Link to="/" className="nav text-decoration-none text-secondary">Disney App</Link>
        </nav>
      </div>
    );
}


export default NavBar;
