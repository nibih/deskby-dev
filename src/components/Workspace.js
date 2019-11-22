import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import Workingdesk from "../images/Working-desk.png"
import Meetingroom from "../images/Meeting-room.png"
import Conferenceroom from "../images/Conference-room.png"
import Privateoffice from "../images/Private-office.png"
import Corporatedining from "../images/Corporate-dining.png"
import Eventspace from "../images/Event-space.png"
import Virtualoffice from "../images/Virtual-office.png"
import I1 from "../images/1.png"
import I2 from "../images/2.png"
import I3 from "../images/3.png"
import I4 from "../images/4.png"

export default () => (
  <div className="container p-2" id="find-a-space">
    <h3 className="font-weight-normal my-auto text-center m-auto">
      Find your workspace
    </h3>
    <div className="row m-4">
      <div className="col-sm-3">
        <img src={Workingdesk} alt="working desk" className="img-fluid" />
        <p className="text-center m-2">Working Desk</p>
      </div>
      <div className="col-sm-3">
        <img src={Meetingroom} alt="meeting room" className="img-fluid" />
        <p className="text-center m-2">Meeting Room</p>
      </div>
      <div className="col-sm-3">
        <img src={Conferenceroom} alt="conference room" className="img-fluid" />
        <p className="text-center m-2">Conference Room</p>
      </div>
      <div className="col-sm-3">
        <img src={Privateoffice} alt="private office" className="img-fluid" />
        <p className="text-center m-2">Private Office</p>
      </div>
    </div>
    <div className="row m-4">
      <div className="col-sm-3">
        <img
          src={Corporatedining}
          alt="corporate dining"
          className="img-fluid"
        />
        <p className="text-center m-2">Corporate Dining</p>
      </div>
      <div className="col-sm-6">
        <img src={Eventspace} alt="event space" className="img-fluid" />
        <p className="text-center m-2">Event Space</p>
      </div>
      <div className="col-sm-3">
        <img src={Virtualoffice} alt="virtual office" className="img-fluid" />
        <p className="text-center m-2">Virtual Office</p>
      </div>
    </div>
    <h3 className="font-weight-normal my-auto text-center m-auto">
      Top Listings
    </h3>
    <div className="row m-4">
      <div className="col-sm-3">
        <img src={I1} alt="room 1" className="img-fluid" />
        <p className="text-left mt-2 mb-0" style={{ fontSize: "80%" }}>
          <b>Rp 590.000</b> Nice meeting room ...
        </p>
        <p className="text-left m-0" style={{ fontSize: "80%" }}>
          Jakarta · Meeting Room
        </p>
        <p style={{ fontSize: "80%" }}>
          <FontAwesomeIcon
            icon={faStar}
            className="mr-2 text-danger"
            size="xs"
          />
          <FontAwesomeIcon
            icon={faStar}
            className="mr-2 text-danger"
            size="xs"
          />
          <FontAwesomeIcon
            icon={faStar}
            className="mr-2 text-danger"
            size="xs"
          />
          <FontAwesomeIcon
            icon={faStar}
            className="mr-2 text-danger"
            size="xs"
          />
          <FontAwesomeIcon
            icon={faStar}
            className="mr-2 text-danger"
            size="xs"
          />
          8 Reviews
        </p>
      </div>
      <div className="col-sm-3">
        <img src={I2} alt="room 2" className="img-fluid" />
        <p className="text-left mt-2 mb-0" style={{ fontSize: "80%" }}>
          <b>Rp 590.000</b> Nice meeting room ...
        </p>
        <p className="text-left m-0" style={{ fontSize: "80%" }}>
          Jakarta · Meeting Room
        </p>
        <p style={{ fontSize: "80%" }}>
          <FontAwesomeIcon
            icon={faStar}
            className="mr-2 text-danger"
            size="xs"
          />
          <FontAwesomeIcon
            icon={faStar}
            className="mr-2 text-danger"
            size="xs"
          />
          <FontAwesomeIcon
            icon={faStar}
            className="mr-2 text-danger"
            size="xs"
          />
          <FontAwesomeIcon
            icon={faStar}
            className="mr-2 text-danger"
            size="xs"
          />
          <FontAwesomeIcon
            icon={faStar}
            className="mr-2 text-danger"
            size="xs"
          />
          8 Reviews
        </p>
      </div>
      <div className="col-sm-3">
        <img src={I3} alt="room 3" className="img-fluid" />
        <p className="text-left mt-2 mb-0" style={{ fontSize: "80%" }}>
          <b>Rp 590.000</b> Nice meeting room ...
        </p>
        <p className="text-left m-0" style={{ fontSize: "80%" }}>
          Jakarta · Meeting Room
        </p>
        <p style={{ fontSize: "80%" }}>
          <FontAwesomeIcon
            icon={faStar}
            className="mr-2 text-danger"
            size="xs"
          />
          <FontAwesomeIcon
            icon={faStar}
            className="mr-2 text-danger"
            size="xs"
          />
          <FontAwesomeIcon
            icon={faStar}
            className="mr-2 text-danger"
            size="xs"
          />
          <FontAwesomeIcon
            icon={faStar}
            className="mr-2 text-danger"
            size="xs"
          />
          <FontAwesomeIcon
            icon={faStar}
            className="mr-2 text-danger"
            size="xs"
          />
          8 Reviews
        </p>
      </div>
      <div className="col-sm-3">
        <img src={I4} alt="room 4" className="img-fluid" />
        <p className="text-left mt-2 mb-0" style={{ fontSize: "80%" }}>
          <b>Rp 590.000</b> Nice meeting room ...
        </p>
        <p className="text-left m-0" style={{ fontSize: "80%" }}>
          Jakarta · Meeting Room
        </p>
        <p style={{ fontSize: "80%" }}>
          <FontAwesomeIcon
            icon={faStar}
            className="mr-2 text-danger"
            size="xs"
          />
          <FontAwesomeIcon
            icon={faStar}
            className="mr-2 text-danger"
            size="xs"
          />
          <FontAwesomeIcon
            icon={faStar}
            className="mr-2 text-danger"
            size="xs"
          />
          <FontAwesomeIcon
            icon={faStar}
            className="mr-2 text-danger"
            size="xs"
          />
          <FontAwesomeIcon
            icon={faStar}
            className="mr-2 text-danger"
            size="xs"
          />
          8 Reviews
        </p>
      </div>
    </div>
  </div>
)
