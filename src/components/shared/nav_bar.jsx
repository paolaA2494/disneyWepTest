import React from 'react';
import Logo from '../../assets/images/logo_transparent.png';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap';




function NavBar () {
     return (
        <Navbar className="d-flex flex-column flex-md-row justify-content-between align-items-center p-3 px-md-3 bg-white border-bottom shadow-sm">
        <img className="my-0 mr-md-auto font-weight-normal ml-5" width="130" height="100" src={Logo} alt="ResponsiveImage"/>
        <Nav className="d-flex flex-row my-2 my-md-0 mr-md-5 pr-5">
        <Nav.Link  href="/home" className="mx-4">Home</Nav.Link >
        <Nav.Link  href="/about" className="mx-4">Sobre Nosotros</Nav.Link >
        <Nav.Link href='https://www.disneyplus.com/en-co?cid=DSS-Search-Google-71700000112295590-&s_kwcid=AL!8468!3!665166946015!e!!g!!disney&gad_source=1&gclid=CjwKCAiA0bWvBhBjEiwAtEsoW1alSzim0RfZz2ZupnEt6qkWB9Cjh2C_XbNAjj_z105qFRdPCVPiExoCg-EQAvD_BwE&gclsrc=aw.ds' target="_blank" className="mx-4">Disney Page</Nav.Link>
        </Nav>
      </Navbar>
    );
}


export default NavBar;
