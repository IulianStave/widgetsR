import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components'
  },
];


const options = [
  {
    label: "The color Red",
    color: 'red'
  },
  {
    label: "The color Green ",
    color: 'green'
  },
  {
    label: "The color Blue",
    color: 'blue'
  },
]

export default () => {
  return (
    <div className="ui container">
      {/* <Search /> */}
      {/* <Accordion items={items} /> */}
      <Dropdown options={options}/>
    </div>
  ) 

};
