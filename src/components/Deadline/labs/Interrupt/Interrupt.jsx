import React from "react";
import "./interrupt.css";
import { deadline_data } from "../../../../data/Data";

function Interrupt() {
  const interrupt = deadline_data.filter(
    (e) => e.name === "Interrupt_handling"
  );

  return (
    <div className="deadline_container">
      <div className="name">
        <h2>{interrupt[0].name}</h2>
        <h3>{interrupt[0].task}</h3>
        <p className="info">
          <p className="one">{interrupt[0].data.one}</p>
          <p className="one">
            <a href={interrupt[0].data.two.link} target={"_blank"}>
              {interrupt[0].data.two.data}
            </a>
          </p>
          <p className="one">
            <a href={interrupt[0].data.three.link} target={"_blank"}>
              {interrupt[0].data.three.data}
            </a>
          </p>
        </p>
        <p className="toWhom">{interrupt[0].how}</p>
        <p className="date">
          {interrupt[0].deadline}
          {interrupt[0].day}
        </p>
      </div>
    </div>
  );
}

export default Interrupt;
