import React from "react";
import Card from "../Card/Card";
import ModeBox from "../ModelBox/ModeBox";
import { CardWrapper, ForecastBox } from "./Forecast.style";

const Forecast = () => {
  return (
    <ForecastBox>
      <ModeBox />
      <CardWrapper>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardWrapper>
    </ForecastBox>
  );
};

export default Forecast;
