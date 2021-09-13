import React from "react";
import Header from "../Header/Header";
import ImageBox from "../ImageBox/ImageBox";
import { Middle } from "./MiddlePanel.style";

const MiddlePanel = () => {
  return (
    <Middle>
      <Header />
      <ImageBox />
      {/* <Forecast />
      <Highlight /> */}
    </Middle>
  );
};

export default MiddlePanel;
