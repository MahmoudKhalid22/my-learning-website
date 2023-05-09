import React from "react";
import "./collections.css";
import Measurements from "../Measurements/Measurements";
import DSP from "../DSP/DSP";

function CollectionS() {
  return (
    <>
      <div className="subs">
        <DSP />
        <Measurements />
      </div>
    </>
  );
}

export default CollectionS;
