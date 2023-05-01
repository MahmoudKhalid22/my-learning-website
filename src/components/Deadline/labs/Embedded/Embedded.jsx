import React from "react";
import "./embedded.css";

function Embedded() {
  return (
    <div className="embedded">
      <div className="task">
        <h1>Embedded</h1>
        <h3>Task</h3>
        <p className="info">
          <p className="one">هيتسلم السميوليشن و الكود 🚶🏻‍♀️</p>
          <p className="two one">
            <a
              href="https://drive.google.com/drive/folders/1I1JFeJ0GjBq7QafsSY9dZKkkoUsD-tz8"
              target={"_blank"}
            >
              data , task
            </a>
          </p>
        </p>
        <p className="toWhom">online eng/ mahmoud khalid</p>
        <p className="date">الخميس 4/5/2023</p>
      </div>
    </div>
  );
}

export default Embedded;
