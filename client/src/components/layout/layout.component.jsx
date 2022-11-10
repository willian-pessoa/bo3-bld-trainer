import React from "react";
import "./layout.styles.scss";

import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import NavLink from "react-bootstrap/NavLink";
import { NavItem } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const isLogged = useSelector((state) => state.user.logged);
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(route);
  };

  return (
    <div className="layout-container">
      <div className="nav-container">
        <Nav className="custom-nav" fill variant="tabs">
          <Nav.Item>
            <Nav.Link
              className="custom-nav"
              onClick={() => handleNavigate("/home")}
              eventKey="home"
            >
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="custom-nav"
              onClick={() => handleNavigate("/profile")}
              eventKey="profile"
            >
              Profile
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="custom-nav"
              onClick={() => handleNavigate("/ranking")}
              eventKey="ranking"
            >
              Ranking
            </Nav.Link>
          </Nav.Item>
          <Dropdown as={NavItem} className="custom-nav">
            <Dropdown.Toggle className="custom-nav" as={NavLink}>
              Practice Rooms
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => handleNavigate("/bld")}
                eventKey="BLD"
              >
                BLD
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => handleNavigate("/edges")}
                eventKey="Edges"
              >
                Edges
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => handleNavigate("/corners")}
                eventKey="Corners"
              >
                Corners
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => handleNavigate("/mbld")}
                eventKey="MBLD"
              >
                MBLD
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Item>
            <Nav.Link
              className="custom-nav"
              onClick={() => handleNavigate("/login")}
              eventKey="login"
            >
              {isLogged ? "Logout" : "Login"}
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div className="layout-body">{children}</div>
      <div className="footer-container">@Willian Pessoa</div>
    </div>
  );
};

export default Layout;
