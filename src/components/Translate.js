import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [

  {
    label: "Russian",
    value: "ru",
  },
  {
    label: "French",
    value: "fr",
  },
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
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  const translateLabel = "Select a language";

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter text: </label>
          <input
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
      </div>
      <Dropdown
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
        label={translateLabel}
      />
      <hr/>
      <h3 className="ui header">Output</h3>
      <Convert language={language} text ={text}/>
    </div>
  );
};

export default Translate;
