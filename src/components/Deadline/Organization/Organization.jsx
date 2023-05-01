import React from "react";
import "./organization.css";
function Organization() {
  return (
    <div>
      <div className="organization">
        <div className="report">
          <h1>Organization</h1>
          <h3>Quiz</h3>
          <p className="info">Ch 5</p>
          <p className="toWhom">المهندسة دعاء في السكشن</p>
          <p className="date">Monday 1/5/2023</p>
        </div>
        <a
          className="information"
          href="https://drive.google.com/file/d/1-cvpfm5mGDgW_zG8fW7zT8HGKT23On2p/view"
          target={"_blank"}
        >
          الــمرجــع
        </a>
        <a
          className="information"
          href="https://drive.google.com/drive/folders/1LXLX1jPdXEvruaXjBjvEoPIgPERM914C"
          target={"_blank"}
        >
          مراجعات
        </a>
        <a className="information">
          اسم الشابتر Internal memory ابحث عنه في يوتيوب أو chatgpt
        </a>
        <a
          className="information"
          href="https://youtu.be/yrxLtLj8sJQ"
          target={"_blank"}
        >
          فيديو لكن مش ثقة
        </a>
      </div>
    </div>
  );
}

export default Organization;
