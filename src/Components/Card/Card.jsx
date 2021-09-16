import React from "react";
import { FaCloudSun } from "react-icons/fa";
import { WiHumidity, WiStrongWind } from "react-icons/wi";
import {
  CardBox,
  Day,
  Humidity,
  HumidityBox,
  Temperature,
  Weather,
  WeatherIcon,
  Wind,
  WindBox,
} from "./Card.style";

const Card = () => {
  return (
    <CardBox>
      <Day>Monday</Day>
      <Weather>Partly Cloudy</Weather>
      <WeatherIcon>
        <FaCloudSun />
      </WeatherIcon>
      <WindBox>
        <span>
          <WiStrongWind />
        </span>
        <Wind>10 km/h</Wind>
      </WindBox>
      <HumidityBox>
        <span>
          <WiHumidity />
        </span>
        <Humidity>60%</Humidity>
      </HumidityBox>
      <Temperature>32*</Temperature>
    </CardBox>
  );
};

export default Card;
