import React from "react";
import AirQuality from "../AirQuality/AirQuality";
import Graph from "../Graph/Graph";
import Sunrise from "../Sunrise/Sunrise";
import { HighlightCard, HighlightHeading } from "./Highlight.style";

const Highlight = () => {
  return (
    <>
      <HighlightHeading>Today's Highlight</HighlightHeading>
      <HighlightCard>
        <Sunrise />
        <Graph />
        <AirQuality />
      </HighlightCard>
    </>
  );
};

export default Highlight;
