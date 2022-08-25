import React from "react";

import { Container, Row, Col} from "react-bootstrap";


import { useRef } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

import { useRef } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <Container className="header ">
        <Container className="p-3 pt-0 ">
          <Row>
            <Col md={{ offset: 1 }} className="nav">
              <ul>
                  <CustomLink className="nav_btn" to="/">Home</CustomLink>
                  <CustomLink className="nav_btn" to="/map">Map</CustomLink>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
//comopnet to highlight the tab
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)//get path
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })//check if our path match with resolvedPath
  //returns link component with "active" class
  return (
    <li >
      <Link to={to} {...props} className={isActive ? "active" : ""}>
        {children}
      </Link>
    </li>
  );
}
