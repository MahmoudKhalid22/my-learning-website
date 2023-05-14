import React from "react";
import { deadline_data } from "../../../data/Data";
function Communication() {
  const communication = deadline_data.filter((a) => a.name === "communication");

  return (
    <div className="deadline_container">
      <div className="report">
        <h2>{communication[0].name}</h2>
        <h3>{communication[0].task}</h3>
        <p className="info">
          <p className="one">{communication[0].data}</p>
        </p>
        <p className="toWhom">{communication[0].how}</p>
        <p className="date">
          {communication[0].deadline} {communication[0].day}
        </p>
      </div>
    </div>
  );
}

export default Communication;
