import React from "react";
import { deadline_data } from "../../../data/Data";

function OS() {
  const os = deadline_data.filter((e) => e.name === "os");

  return (
    <div className="dsp">
      <div className="report">
        <h2>{os[0].name}</h2>
        <h3>{os[0].task}</h3>
        <p className="info">
          <p className="one">{os[0].data}</p>
        </p>
        <p className="toWhom">{os[0].how}</p>
        <p className="date">
          {os[0].deadline} {os[0].day}
        </p>
      </div>
    </div>
  );
}

export default OS;
