import React from "react";
import "./dsp.css";
import { FaRegLightbulb } from "react-icons/fa";

function DSP() {
  return (
    <div className="dsp-sub">
      <h3>We have 6 lectures and 10 assignments</h3>
      <p className="lectuers">
        Part 1 & 2
        <a href="https://drive.google.com/file/d/18d5X1JB2qV1MvQf7yEzTPTxLGmZQExj9q/view?usp=drive_open">
          Go to them
          <FaRegLightbulb className="bulb" />
        </a>
      </p>
      <p className="assignments"></p>
    </div>
  );
}

export default DSP;
