import React from "react"
import Google from "../images/google.png"
import Unilever from "../images/unilever.jpg"
import Uber from "../images/Uber.png"
import Foodpanda from "../images/foodpanda.png"
import Mediacorp from "../images/Mediacorp.png"

export default () => (
  <div className="container p-2">
    <h3 className="font-weight-normal my-auto text-center m-auto">
      Our Clients
    </h3>
    <div className="d-flex flex-row justify-content-around m-auto flex-wrap">
      <div className="align-self-center m-2" style={{ width: "8rem" }}>
        <img src={Google} alt="google" className="img-fluid" />
      </div>
      <div className="align-self-center m-2" style={{ width: "8rem" }}>
        <img src={Unilever} alt="Unilever" className="img-fluid" />
      </div>
      <div className="align-self-center m-2" style={{ width: "8rem" }}>
        <img src={Uber} alt="Uber" className="img-fluid" />
      </div>
      <div className="align-self-center m-2" style={{ width: "8rem" }}>
        <img src={Foodpanda} alt="Foodpanda" className="img-fluid" />
      </div>
      <div className="align-self-center m-2" style={{ width: "8rem" }}>
        <img src={Mediacorp} alt="Mediacorp" className="img-fluid" />
      </div>
    </div>
  </div>
)
