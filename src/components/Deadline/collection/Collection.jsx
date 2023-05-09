import React, { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import Communication from "../communication/Communication";
import DSP from "../labs/DSP/DSP";
import Embedded from "../labs/Embedded/Embedded";
import Interrupt from "../labs/Interrupt/Interrupt";
import RamDesign from "../labs/RamDesign/RamDesign";
import Measurements from "../Measurements/Measurements";
import Organization from "../Organization/Organization";
import OS from "../os/OS";
import "./collection.css";

function Collection() {
  const [activeButton, setActiveButton] = useState("button1");
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    !isActive ? setIsActive(true) : setIsActive(false);
  };

  const handleButtonClick = (b) => {
    handleClick();
    setActiveButton(b);
  };

  return (
    <>
      <div className="buttons flex">
        <button
          onClick={() => handleButtonClick("button1")}
          className="submitted"
          style={{ backgroundColor: !isActive ? "blueviolet" : "#ececec" }}
        >
          تم تسليمه
        </button>
        <button
          onClick={() => handleButtonClick("button2")}
          className="progress"
          style={{ backgroundColor: isActive ? "blueviolet" : "#ececec" }}
        >
          لم يسلم
        </button>
      </div>
      <div className="flex-column">
        {/* تم تسليمه */}
        {activeButton === "button1" && <Measurements />}
        {activeButton === "button1" && <Organization />}
        {activeButton === "button1" && <RamDesign />}
        {activeButton === "button1" && <Embedded />}
        {/* لم يسلم */}
        {activeButton === "button2" && <DSP />}
        {activeButton === "button2" && <Interrupt />}
        {activeButton === "button2" && <Communication />}
        {activeButton === "button2" && <OS />}
      </div>
    </>
  );
}

export default Collection;
