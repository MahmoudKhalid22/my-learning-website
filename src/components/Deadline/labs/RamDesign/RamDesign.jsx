import React from "react";
import "./ram.css";

function RamDesign() {
  return (
    <div className="ram">
      <div className="task">
        <h1>Ram Design</h1>
        <h3>Task</h3>
        <p className="info">
          <p className="one">
            pdf التيم يتكون من 5 يعملوا السيميوليشن ويحلوا الأسئلة في{" "}
          </p>
          <p className="two one">
            <a
              href="https://drive.google.com/drive/folders/1TWxv-dA3Y-s9K8QIB90mVFwV3ExZOGHO"
              target={"_blank"}
            >
              انظر هنا
            </a>
          </p>
          <p className="two one">
            <a href="https://youtu.be/mnqCOkw3jOs" target={"_blank"}>
              فيديو قديم للمعمل
            </a>
          </p>
        </p>
        <p className="toWhom">هنتسأل فيه في الكلية</p>
        <p className="date">3/5 يوم الأربعاء</p>
      </div>
    </div>
  );
}

export default RamDesign;
