import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import React, { Component } from "react";


function NavbarSection({ handleShow, session, handleSignOut, account }) {
  console.log({ handleSignOut });
  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="text-white">
          Chiko Movie Streaming Web
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Film" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Popular</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Currently playing
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Top Rating</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Movie Series" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Popular</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Currently playing
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Top Rating</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Discussion</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Leaderboard
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Support</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {!session && (
          <Button onClick={handleShow} className="buttonnsignin">
            Sign In
          </Button>
        )}
        {account?.username && (
          <div className=" BsFillAlarmFill"> {account?.username}</div>
        )}
        {session && (
          <Button onClick={handleSignOut} className="buttonsignout">
            Sign Out
          </Button>
        )}
      </Container>
    </Navbar>
  );
}

export default NavbarSection;
