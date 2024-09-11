import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png'; // Update the path as needed
import Accounticona from '../assets/accounticona.svg'; // Update the path as needed
import { Dropdown } from 'react-bootstrap';
import languageIcon from '../assets/language-icon.svg'; // Adjust the path to your icon

const Navbar = () => {
  return (
    <>
      <div className="navbar-content">
        <div className="container">
          <p>Happy Employees, Effortless HR: Experience the introdo Advantage. <span>Try it for Free!</span></p>
        </div>
      </div>

      <header className="navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="Introdo Logo" className="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Dropdown>
                    <Dropdown.Toggle className="nav-link" variant="link" id="dropdown-products">
                      Products
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Product 1</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Product 2</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Product 3</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li className="nav-item">
                  <Dropdown>
                    <Dropdown.Toggle className="nav-link" variant="link" id="dropdown-solutions">
                      Solutions
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Solution 1</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Solution 2</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Solution 3</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Pricing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Partner Program</a>
                </li>
                <li className="nav-item">
                  <Dropdown>
                    <Dropdown.Toggle className="nav-link" variant="link" id="dropdown-resources">
                      Resources
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Resource 1</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Resource 2</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Resource 3</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li className="nav-item">
                  <Dropdown>
                    <Dropdown.Toggle className="nav-link" variant="link" id="dropdown-about-us">
                      About Us
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Our Story</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Team</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Careers</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </ul>
              <Dropdown>
                <Dropdown.Toggle variant="outline-primary menu-button me-2" id="dropdown-language">
                  <img src={languageIcon} alt="Language Icon" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Spanish</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">French</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <button className="btn btn-outline-primary menu-button ms-2">Log In <img src={Accounticona} alt="Introdo Logo" className="img-fluid" /></button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
