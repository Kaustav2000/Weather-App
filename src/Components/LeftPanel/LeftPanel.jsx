import React from "react";
import { TiWeatherPartlySunny, TiHome } from "react-icons/ti";
import { FiSettings } from "react-icons/fi";
import { Left, Logo } from "./LeftPanel.style";

const LeftPanel = () => {
  return (
    <Left>
      <Logo color={"gold"}>
        <TiWeatherPartlySunny />
      </Logo>
      <Logo color={"gold"}>
        <TiHome />
      </Logo>
      <Logo color={"purple"}>
        <FiSettings />
      </Logo>
    </Left>
  );
};

export default LeftPanel;
