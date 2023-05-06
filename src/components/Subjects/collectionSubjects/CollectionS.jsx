import React from "react";
import "./collections.css";
import Measurements from "../Measurements/Measurements";
import Navbar from "../../Navbar/Navbar";
import DSP from "../DSP/DSP";

function CollectionS() {
  return (
    <>
      <Navbar />
      <div className="subs">
        <DSP />
        <Measurements />
      </div>
    </>
  );
}

export default CollectionS;
