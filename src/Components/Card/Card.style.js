import styled from "styled-components";

export const CardBox = styled.div`
  width: 180px;
  height: 120px;
  position: relative;
  border: 2px solid pink;
  border-radius: 20px;
  /* padding: 20px; */
  margin: 5px;
`;
export const Day = styled.h3`
  font-weight: bolder;
  position: absolute;
  top: 10px;
  left: 20px;
`;
export const Weather = styled.h6`
  font-weight: 400;
  font-size: 400;
  color: grey;
  position: absolute;
  top: 35px;
  left: 20px;
`;
export const WeatherIcon = styled.span`
  position: absolute;
  top: 25px;
  right: 20px;
  /* font-size: 2000; */
`;

export const WindBox = styled.div`
  display: flex;
  position: absolute;
  bottom: 30px;
  left: 20px;
`;
export const Wind = styled.h6`
  margin-left: 10px;
`;
export const HumidityBox = styled.div`
  display: flex;
  position: absolute;
  bottom: 10px;
  left: 20px;
`;
export const Humidity = styled.h6`
  margin-left: 10px;
`;

export const Temperature = styled.h2`
  font-weight: 600;
  position: absolute;
  bottom: 15px;
  right: 20px;
`;
