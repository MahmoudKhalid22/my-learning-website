import React from "react";
import "./interrupt.css";
function Interrupt() {
  return (
    <div className="interrupt">
      <div className="task">
        <h1>Interrupt</h1>
        <h3>Task</h3>
        <p className="info">
          <p className="one"> pdf المعمل ع الدرايف</p>
          <p className="one">
            <a
              href="https://www.youtube.com/playlist?list=PLODeD_CG5z3UBpjDHX5yLdzzfnEnzR-8U"
              target={"_blank"}
            >
              Playlist
            </a>
          </p>
          <p className="one">
            <a
              href="https://github.com/Mahmoud-Ibrahim-93/Interrupt-handling-With-PIC-microController"
              target={"_blank"}
            >
              Github link
            </a>
          </p>
        </p>
        <p className="toWhom"></p>
        <p className="date">الثلاثاء 9/5/2023</p>
      </div>
    </div>
  );
}

export default Interrupt;
