import { useState } from "react";
import data from "./data";
export default function Accordion() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  return (
    <div className="wrapper">
      {data && data.length > 0 ? (
        data.map((dataItem) => (
          <div className="item" key={dataItem.id}>
            <div
              onClick={() => handleSingleSelection(dataItem.id)}
              className="title"
            >
              <h3>{dataItem.question}</h3>
              <span>{selected === dataItem.id ? "-" : "+"}</span>
              {selected === dataItem.id ? (
                <div className="answer">{dataItem.answer}</div>
              ) : null}
            </div>
          </div>
        ))
      ) : (
        <div>No Data Found !</div>
      )}
    </div>
  );
}
