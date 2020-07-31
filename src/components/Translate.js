import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabi",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];
const Translate = () => {
  return (
    <div>
      <Dropdown options={options} />
    </div>
  );
};

export default Translate;
