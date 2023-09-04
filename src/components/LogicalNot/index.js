import React, { useState } from 'react';
import './style.css';


const LogicalNot = () => {
  const [toggle, setToggle] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const items = [
    'Burgess',
    'Johnson',
    'Galloway',
    'Griffiths',
    'Fagotti',
    'Bolt',
    'CSTB',
  ];

  const toggleList = () => {
    setToggle(!toggle);
  };

  const handleItemClick = (index) => {
    setSelectedItem(index);
    toggleList(); // Oculta a lista ao clicar em um item
  };

  const selectedButtonText = selectedItem !== null ? items[selectedItem] : items[0];

  return (
    <>
      <button onClick={toggleList} className="btn">
        {selectedButtonText}
      </button>
      {toggle && (
        <ul className="list-group">
          {items.map((item, index) => {
            const isActive = selectedItem === index;
            return (
              <li
                key={index}
                className={`list-group-item ${isActive ? 'active' : ''}`}
                onClick={() => handleItemClick(index)}
              >
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default LogicalNot;
