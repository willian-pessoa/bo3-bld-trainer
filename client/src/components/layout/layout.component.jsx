import React from "react";
import "./layout.styles.scss";

import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import NavLink from "react-bootstrap/NavLink";
import { NavItem } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <div className="nav-container">
        <Nav className="custom-nav" fill variant="tabs">
          <Nav.Item>
            <Nav.Link className="custom-nav" href="/home">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="custom-nav" href="/profile" eventKey="profile">
              Profile
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="custom-nav" href="/ranking" eventKey="ranking">
              Ranking
            </Nav.Link>
          </Nav.Item>
          <Dropdown as={NavItem} className="custom-nav">
            <Dropdown.Toggle className="custom-nav" as={NavLink}>
              Practice Rooms
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/bld" eventKey="BLD">
                BLD
              </Dropdown.Item>
              <Dropdown.Item href="/edges" eventKey="Edges">
                Edges
              </Dropdown.Item>
              <Dropdown.Item href="/corners" eventKey="Corners">
                Corners
              </Dropdown.Item>
              <Dropdown.Item href="/mbld" eventKey="MBLD">
                MBLD
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Item>
            <Nav.Link className="custom-nav" href="/login" eventKey="login">
              Login
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      {children}
      <div className="footer-container">
        @Willian Pessoa
      </div>
    </div>
  );
};

export default Layout;
