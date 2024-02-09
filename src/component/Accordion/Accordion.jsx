import { useState } from "react";
import data from "./data";
import "./Accordion.css";
export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMultiple);
  }

  console.log(multiple);

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      {data && data.length > 0 ? (
        data.map((dataItem) => (
          <div className="item" key={dataItem.id}>
            <div
              onClick={
                enableMultiSelection
                  ? () => handleMultiSelection(dataItem.id)
                  : () => handleSingleSelection(dataItem.id)
              }
              className="title"
            >
              <h3>{dataItem.question}</h3>
              <span>{selected === dataItem.id ? "-" : "+"}</span>
            </div>
            {selected === dataItem.id ? (
              <div className="answer">{dataItem.answer}</div>
            ) : null}
          </div>
        ))
      ) : (
        <div>No Data Found !</div>
      )}
    </div>
  );
}
