import React from 'react';
import Navbar from './nav_bar';
import { Outlet } from "react-router-dom";


const Layout = props => {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
    </React.Fragment>
  );
};

export default Layout;