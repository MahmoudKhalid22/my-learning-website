import React from "react";
import "./dsp.css";
import { deadline_data } from "../../../../data/Data";

function DSP() {
  const dsp = deadline_data.filter((e) => e.name === "DSP_Labs");
  return (
    <div className="deadline_container">
      <div className="name">
        <h2>{dsp[0].name}</h2>
        <h3>{dsp[0].task}</h3>
        <p className="info">
          <p className="one">{dsp[0].data.one}</p>
          <p className="one">{dsp[0].data.two}</p>
          <p className="one">{dsp[0].data.three}</p>
          <p className="one">{dsp[0].data.four} </p>
          <p className="one">{dsp[0].data.five}</p>
          <p className="one">{dsp[0].data.six}</p>
          <p className="one">
            <a href={dsp[0].data.seven.link} target={"_blank"}>
              {dsp[0].data.seven.data}
            </a>
          </p>
          <p className="one">
            <a href={dsp[0].data.eight.link} target={"_blank"}>
              {dsp[0].data.eight.data}
            </a>
          </p>
        </p>
        <p className="toWhom">{dsp[0].how}</p>
        <p className="date">
          {dsp[0].deadline}
          {dsp[0].day}
        </p>
      </div>
    </div>
  );
}

export default DSP;
