import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The color Red",
    value: "red",
  },
  {
    label: "The color Green ",
    value: "green",
  },
  {
    label: "The color Blue",
    value: "blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div className="ui container">
      <div className="ui header ">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="ui button"
        >  <i className="settings icon"></i>
          Toggle Dropdown
        </button>
      </div>
      {/* <Search /> */}
      {/* <Accordion items={items} /> */}
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null}
    <div className="ui segement">
      <Translate />
    </div>
    </div>
  );
};
