import React from "react";
import Forecast from "../Forecast/Forecast";
import Header from "../Header/Header";
import Highlight from "../Highlight/Highlight";
import ImageBox from "../ImageBox/ImageBox";
import { Middle } from "./MiddlePanel.style";

const MiddlePanel = () => {
  return (
    <Middle>
      <Header />
      <ImageBox />
      <Forecast />
      <Highlight />
    </Middle>
  );
};

export default MiddlePanel;
