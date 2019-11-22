import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMapMarkedAlt,
  faCalendarAlt,
  faBusinessTime,
} from "@fortawesome/free-solid-svg-icons"

export default () => (
  <div className="bg-light p-2" id="how-it-works">
    <h3 className="font-weight-normal my-auto text-center m-auto">
      How it works
    </h3>
    <div className="row m-4">
      <div className="col-sm text-center">
        <FontAwesomeIcon
          icon={faMapMarkedAlt}
          className="text-danger"
          size="5x"
        />
        <p className="mt-2 mb-0">
          <b>1. Browse unique spaces</b>
        </p>
        <p className="m-0" style={{ fontSize: "80%" }}>
          Explore the marketplace to find a space that fits your needs. From
          urban lofts and studios to modern meeting spaces, we've got you
          covered.
        </p>
      </div>
      <div className="col-sm text-center">
        <FontAwesomeIcon
          icon={faCalendarAlt}
          className="text-danger"
          size="5x"
        />
        <p className="mt-2 mb-0">
          <b>2. Connect with hosts</b>
        </p>
        <p className="m-0" style={{ fontSize: "80%" }}>
          We've designed Peerspace to save you time and hassle. Narrow your
          search, message hosts directly and confirm details through our website
          or mobile app.
        </p>
      </div>
      <div className="col-sm text-center">
        <FontAwesomeIcon
          icon={faBusinessTime}
          className="text-danger"
          size="5x"
        />
        <p className="mt-2 mb-0">
          <b>3. Book & Enjoy</b>
        </p>
        <p className="m-0" style={{ fontSize: "80%" }}>
          Finalize your reservation using our secure online booking process and
          make the most of your creative space. We'll make sure your offsite,
          event or production is memorable.
        </p>
      </div>
    </div>
  </div>
)
