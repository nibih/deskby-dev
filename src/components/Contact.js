import React from "react"
import Head from "../images/head.jpg"
import { Button } from "react-bootstrap"
export default () => (
  <div className="p-0 row m-0 bg-light" id="contact-us">
    <div className="col-sm-6 p-0 smol-hid">
      <img src={Head} alt="head" className="img-fluid" />
    </div>
    <div className="col-sm-6 p-5 m-auto">
      <div className="w-75">
        <h1>Planning something big?</h1>
        <p>
          For large and complex events, out team of experts can help you every
          step of the way.
        </p>
        <Button variant="danger" className="rounded-0">
          Contact Us
        </Button>
      </div>
    </div>
  </div>
)
