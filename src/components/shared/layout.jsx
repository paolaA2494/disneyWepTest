import React from 'react';
import Navbar from './nav_bar';



const Layout = props => {
  return (
    <React.Fragment>
      <Navbar />
        {props.children}
    </React.Fragment>
  );
};

export default Layout;