import React from "react";
import MiddlePanel from "../MiddlePanel/MiddlePanel";
import RightPanel from "../RightPanel/RightPanel";
import LeftPanel from "../LeftPanel/LeftPanel";
import { Partition } from "./WeatherContainer.style";

const WeatherContainer = () => {
  return (
    <Partition>
      <LeftPanel></LeftPanel>
      <MiddlePanel></MiddlePanel>
      <RightPanel></RightPanel>
    </Partition>
  );
};

export default WeatherContainer;
