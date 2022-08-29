import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userAction";

import '../components/css/navbar.css';
import logo from './images/logo.svg';
import location from './images/location_on.svg';
import search from './images/search.svg';
import arrow from './images/keyboard_arrow_down.svg';
import cart from './images/shopping_cart.svg';
import { Link } from "react-router-dom";

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="Navbar">
      <div className="Navbar-main-container">
        <Link to="/"><img src={logo} alt="Fashion-Farik-logo" className="logo" /></Link>
        <div className="location-on">
          <img src={location} alt="location-on" className="location" />
          <p>Hello</p>
          <h6>Select your Address</h6>
        </div>
        <div className="Search-bar">
          <input type="text" placeholder="Search Your Product" />
          <div className="search-button">
            <img src={search} alt="search-button" />
          </div>
        </div>
        <div className="my-account" >
          {userInfo ? (
            <div className="account" >
              <Link to="/profile" className="profile">My Profile</Link>
              <Link onClick={logoutHandler}>Logout</Link>
            </div>
            // <NavDropdown title={userInfo.name}>
            // <LinkContainer to="/profile">
            //   <NavDropdown.Item>Profile</NavDropdown.Item>
            // </LinkContainer>
            //   <NavDropdown.Item onClick={logoutHandler}>
            //     Logout
            //   </NavDropdown.Item>
            // </NavDropdown>
          ) : (<>
            <h4>My Account</h4>
            <Link to="/login"><p>Login/Signup</p></Link>
            <img src={arrow} alt="keyboard-arrow-down" />
          </>
          )}
          {/* <h4>My Account</h4>
            <Link to="/login"><p>Login/Signup</p></Link>
            <img src={arrow} alt="keyboard-arrow-down" /> */}
        </div>
        <div className="shopping-cart">
          <Link to="/cart">
            <img src={cart} alt="shopping-cart" />
          </Link>
        </div>
      </div>
      <div className="Navbar-category-container">
        <div className="category">
          <ul>
            <li>Fashion</li>
            <li>Shoes</li>
            <li>Sportsgadgets</li>
            <li>mobile</li>
            <li>laptop</li>
            <li>electronic</li>
            <li>Home</li>
            <li>Books</li>
            <li>toys</li>
            <li>appliances</li>
            <li>beauty</li>
            <li>medicines</li>

          </ul>
        </div>
      </div>
    </div>

    // <>
    //   <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
    //     <Container>
    //       <LinkContainer to="/">
    //         <Navbar.Brand>Online Shop</Navbar.Brand>
    //       </LinkContainer>

    //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //       <Navbar.Collapse id="basic-navbar-nav">
    //         <Nav className="ml-auto">
    //           <LinkContainer to="/cart">
    //             <Nav.Link>
    //               <i className="fas fa-shopping-cart"></i>
    //               &nbsp; cart
    //             </Nav.Link>
    //           </LinkContainer>
    //           {userInfo ? (
    //             <NavDropdown title={userInfo.name}>
    //               <LinkContainer to="/profile">
    //                 <NavDropdown.Item>Profile</NavDropdown.Item>
    //               </LinkContainer>
    //               <NavDropdown.Item onClick={logoutHandler}>
    //                 Logout
    //               </NavDropdown.Item>
    //             </NavDropdown>
    //           ) : (
    //             <LinkContainer to="/login">
    //               <Nav.Link>
    //                 <i className="fas fa-user"></i>
    //                 &nbsp; singin
    //               </Nav.Link>
    //             </LinkContainer>
    //           )}
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>
    // </>
  );
};

export default Header;
