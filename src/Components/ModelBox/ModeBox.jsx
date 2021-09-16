import React from "react";
import {
  C,
  F,
  ModeBoxWrapper,
  SwitchModeBox,
  TempMode,
  Today,
  Week,
} from "./ModeBox.style";

const ModeBox = () => {
  return (
    <ModeBoxWrapper>
      <SwitchModeBox>
        <Today>Today</Today>
        <Week>Week</Week>
      </SwitchModeBox>
      <TempMode>
        <C>*C</C>
        <F>*F</F>
      </TempMode>
    </ModeBoxWrapper>
  );
};

export default ModeBox;
