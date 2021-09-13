import React from "react";
import { City, Country, Image, Temp } from "./ImageBox.style";

const ImageBox = () => {
  return (
    <Image>
      <City>Kolkata</City>
      <Country>India</Country>
      <Temp>30*</Temp>
    </Image>
  );
};

export default ImageBox;
