import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../assets/logo.png";
import { FaSearch, FaBell, FaUser } from "react-icons/fa";

const MyNavbar = () => {
  return (
    <Navbar expand="lg" variant="dark" className="justify-content-between align-items-center px-4">
        <div className="d-flex align-items-center font-weight-bold"> 
           <Navbar.Brand href="#">
            <img src={Logo} alt="Logo" style={{ width: "100px", height: "55px" }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="mr-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">TV Shows</Nav.Link>
                <Nav.Link href="#">Movies</Nav.Link>
                <Nav.Link href="#">Recently Added</Nav.Link>
                <Nav.Link href="#">My List</Nav.Link>
            </Nav> 
        </div>

        <div className="d-flex justify-content-between align-items-baseline">
            <a href="#">
                <Navbar.Text className="text-light fs-5"><FaSearch /></Navbar.Text>
            </a>
            <a href="#" className="text-decoration-none">
                <div id="kids" className="text-light mx-3">KIDS</div>
            </a>
            <a href="#">
                <Navbar.Text className="text-light fs-5"><FaBell /></Navbar.Text>
            </a>
            <a href="#">
                <Navbar.Text className="text-light ms-4 fs-5"><FaUser /></Navbar.Text>
            </a>
        </div>
    </Navbar>
  );
};

export default MyNavbar;