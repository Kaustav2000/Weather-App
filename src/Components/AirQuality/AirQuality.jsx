import React from "react";
import { Air, Box } from "./AirQuality.style";

const AirQuality = () => {
  return (
    <Air>
      <h5>Air Quality Index</h5>
      <Box>
        <div>95*</div>
        <div style={{ fontWeight: "bold" }}>Moderate</div>
      </Box>
    </Air>
  );
};

export default AirQuality;
