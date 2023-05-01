import React from "react";
import "./measurements.css";

function Measurements() {
  return (
    <div className="measure">
      <div className="report">
        <h1>Measurements</h1>
        <h3>Report</h3>
        <p className="info">
          sheet 3 <span>7,8,9,10</span>
          sheet 4 <span>3,4</span>
        </p>
        <p className="toWhom">للمهندسة ءالاء في مكتبها</p>
        <p className="date">Monday 1/5/2023</p>
      </div>

      <a
        className="sheet"
        href="https://drive.google.com/file/d/1AosEiUrt-5OGp_ZIZxy1QCPKkXVtNdkQ/view?usp=drive_open"
        target={"_blank"}
      >
        sheet 3
      </a>
      <a
        className="sheet"
        href="https://drive.google.com/file/d/1wcvQZy-Lv2uZIWxR5AjLWROJgJINbBtG/view?usp=drive_open"
        target={"_blank"}
      >
        Answer of sheet 3
      </a>
      <a
        className="sheet"
        href="https://drive.google.com/drive/folders/10s3P5qFnBtZNZBqJbGckEmIdDyBhka1f"
        target={"_blank"}
      >
        sheet 4
      </a>
    </div>
  );
}

export default Measurements;
