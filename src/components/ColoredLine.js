import React from "react";

const ColoredLine = ({ lineColor }) => (
  <hr
    style={{
      color: lineColor,
      borderColor: lineColor,
      backgroundColor: lineColor,
    }}
  />
);

export default ColoredLine;
