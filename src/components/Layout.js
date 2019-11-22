import React from "react"
import Header from "./Header"
import { Form, Dropdown, Button } from "react-bootstrap"
import Footer from "./Footer"

export default ({ children }) => (
  <div>
    <div className="landing-container">
      <Header />

      <div className="p-md-5 p-2 spacer mx-auto">
        <div className="container my-5">
          <h1 className="text-white font-weight-light my-auto text-center m-auto">
            Find your next Working Desk,
          </h1>
          <h1 className="text-white font-weight-light my-auto text-center m-auto">
            Private Office or Event Space
          </h1>
        </div>
        <div className="w-100 d-flex flex-wrap justify-content-between">
          <Form.Control
            type="text"
            placeholder="&#128269; Find a space"
            className="rounded-0 mx-sm-2 vw-50 mq"
          />

          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              className="rounded-0 flex-fill mx-sm-2 vw-75"
            >
              Space type
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#action/">Working Desk</Dropdown.Item>
              <Dropdown.Item href="#action/">Meeting Room</Dropdown.Item>
              <Dropdown.Item href="#action/">Conference Room</Dropdown.Item>
              <Dropdown.Item href="#action/">Private Office</Dropdown.Item>
              <Dropdown.Item href="#action/">Corporate Dining</Dropdown.Item>
              <Dropdown.Item href="#action/">Event Space</Dropdown.Item>
              <Dropdown.Item href="#action/">Virtual Office</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="danger" className="rounded-0 flex-fill mx-sm-2 ">
            Search
          </Button>
        </div>
      </div>
    </div>
    <div>{children}</div>
    <Footer />
  </div>
)
