import React from "react";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
import { Arrange, ArrowColour, Readings, SunriseBorder } from "./Sunrise.style";

const Sunrise = () => {
  return (
    <SunriseBorder>
      <h5>Sunrise and Sunset</h5>
      <Readings>
        <Arrange>
          <ArrowColour>
            <FaArrowCircleUp />
          </ArrowColour>
          <div style={{ padding: "10px 0 0 3px" }}>
            <h6>5:40AM</h6>
            <p style={{ fontSize: "small" }}>+1m 20s</p>
          </div>
        </Arrange>
        <Arrange>
          <ArrowColour>
            <FaArrowCircleDown />
          </ArrowColour>
          <div style={{ padding: "10px 0 0 3px" }}>
            <h6>5:25PM</h6>
            <p style={{ fontSize: "small" }}>+1m 20s</p>
          </div>
        </Arrange>
        <div></div>
      </Readings>
    </SunriseBorder>
  );
};

export default Sunrise;
