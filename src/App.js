import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import ColoredLine from "./components/ColoredLine";

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

  const colorLabel = 'Select a color';
  const color = 'lightblue';
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
          label={colorLabel}
        />
      ) : null}
    <hr/>
    <ColoredLine lineColor='red'/>
    <ColoredLine lineColor={color}/>
    <div className="ui segment">
      <Translate />
    </div>
    </div>
  );
};
