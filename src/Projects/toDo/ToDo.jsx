import React, { useState } from "react";
import "./ToDo.scss";

const ToDo = () => {
  const [inputList, setInputList] = useState("buy apple");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [inputList, ...oldItems];
    });
    setInputList("");
  };

  const deleteItems = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div className="ToDo">
      <div className="wrapper">
        <h1>ToDo List</h1>
        <div className="add-item">
          <input
            type="text"
            placeholder="Add an item"
            value={inputList}
            onChange={itemEvent}
          />
          <button className="plus-button" onClick={listOfItems}>
            +
          </button>
        </div>
        <ol>
          {/* <li>{inputList}</li> */}
          {items.map((itemVal, index) => {
            return (
              <div className="list-style" key={index} id="index">
                <li>{itemVal}</li>
                <span onClick={() => deleteItems(index)}>x</span>
              </div>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default ToDo;
