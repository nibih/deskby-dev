import React from "react"
import Logo from "../images/deskby-logo.png"
import { Navbar, Nav, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"

export default props => (
  <Navbar className="bg-transparent" expand="lg" variant="dark">
    <Navbar.Brand href="#home" className="mx-4">
      <img src={Logo} alt="logo" height="20rem"></img>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="text-white">
      <Nav className="mr-auto ">
        <Nav.Link href="#find-a-space" className="mx-3 text-white">
          Find a space
        </Nav.Link>
        <Nav.Link href="#how-it-works" className="mx-3 text-white">
          How it works
        </Nav.Link>
        <Nav.Link href="#contact-us" className="mx-3 text-white">
          Need help?
        </Nav.Link>
      </Nav>
      <Nav className="ml-auto mr-4">
        <Nav.Link href="#login" className="mx-3 text-white">
          Login
        </Nav.Link>
        <Nav.Link href="#cart" className="mx-3 text-white">
          <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
          Cart(0)
        </Nav.Link>
        <div style={{ width: "8rem" }} className="my-auto">
          <Button variant="danger" className="btn-sm btn-block ">
            Add a space
          </Button>
        </div>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
