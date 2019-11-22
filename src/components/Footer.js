import React from "react"
import { Nav, Dropdown } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

export default () => (
  <div className="p-5 m-auto widen">
    <div className="row">
      <div className="col-sm">
        <h6>Airbnb</h6>
        <ul className="list-unstyled">
          <li>
            <a href="#contact-us" className="text-secondary">
              About us
            </a>
          </li>
          <li>
            <a href="#contact-us" className="text-secondary">
              Careers
            </a>
          </li>
          <li>
            <a href="#contact-us" className="text-secondary">
              Press
            </a>
          </li>
          <li>
            <a href="#contact-us" className="text-secondary">
              Policies
            </a>
          </li>
          <li>
            <a href="#contact-us" className="text-secondary">
              Help
            </a>
          </li>
          <li>
            <a href="#contact-us" className="text-secondary">
              Diversity & Belonging
            </a>
          </li>
        </ul>
      </div>
      <div className="col-sm">
        <h6>Discover</h6>
        <ul className="list-unstyled">
          <li>
            <a href="#contact-us" className="text-secondary">
              Trust & Safety
            </a>
          </li>
          <li>
            <a href="#contact-us" className="text-secondary">
              Travel Credit
            </a>
          </li>
          <li>
            <a href="#contact-us" className="text-secondary">
              Gift Cards
            </a>
          </li>
          <li>
            <a href="#contact-us" className="text-secondary">
              Airbnb Citizen
            </a>
          </li>
          <li>
            <a href="#contact-us" className="text-secondary">
              Business Travel
            </a>
          </li>
          <li>
            <a href="#contact-us" className="text-secondary">
              Guidebooks
            </a>
          </li>
          <li>
            <a href="#contact-us" className="text-secondary">
              Airbnbmag
            </a>
          </li>
        </ul>
      </div>
      <div className="col-sm">
        <h6>Hosting</h6>
        <ul className="list-unstyled">
          <li>
            {" "}
            <a href="#contact-us" className="text-secondary">
              Why Host
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#contact-us" className="text-secondary">
              Hospitality
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#contact-us" className="text-secondary">
              Responsible Hosting
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#contact-us" className="text-secondary">
              Comunity Center
            </a>{" "}
          </li>
        </ul>
      </div>
      <div className="col-sm d-flex flex-column">
        <Dropdown className="my-3">
          <Dropdown.Toggle
            variant="outline-dark"
            id="dropdown-basic"
            style={{ width: "100%" }}
          >
            English
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">English</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Indonesian</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="my-3">
          <Dropdown.Toggle
            variant="outline-dark"
            id="dropdown-basic"
            style={{ width: "100%" }}
          >
            IDR
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">IDR</Dropdown.Item>
            <Dropdown.Item href="#/action-2">USD</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
    <hr />
    <div className="d-flex flex-row justify-content-between align-items-center">
      <p className="text-secondary my-auto p-auto text-middle">©Airbnb, Inc.</p>
      <Nav className="p-2 d-flex justify-content-end">
        <Nav.Item>
          <Nav.Link href="#terms" className="text-secondary px-1">
            Terms
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#privacy" className="text-secondary px-1">
            Privacy
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#site-map" className="text-secondary px-1">
            Site map
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="https://web.facebook.com/Deskby"
            target="_blank"
            className="text-secondary"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="https://twitter.com/DeskbyID"
            target="_blank"
            className="text-secondary"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="https://www.instagram.com/deskby/"
            target="_blank"
            className="text-secondary"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  </div>
)
