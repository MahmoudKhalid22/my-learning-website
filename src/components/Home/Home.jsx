import React from "react";
import "./home.css";
function Home() {
  return (
    <div>
      <div className="container">
        <h1>أهلا بك في موقع جامعتك نرجو لك رحلة تعليمية سعيدة</h1>
        <p>
          حتى تكون ناجحا في كليتك يجب عليك حفظ هذه الست نصائح جيدا والعمل بها
        </p>
        <ol>
          <li>ابتعد عن طريق النساء ابتعادا تاما فإن نور الله لا يهدى لعاصي</li>
          <li>حاوط نفسك بالناجحين يرفعوك</li>
          <li>لازم لازم لازم كل يوم درس شرعي سواء قراءة من الصحيح أو سيرة</li>
          <li>
            صل كل يوم ركعتين لله يوفقك أنت أصلا تبتعد عن الحرام طالبا في ذلك رضا
            الله وتوفيقه
          </li>
          <li>ذاكر ذاكر ذاكر خذ بالأسباب والله يعينك</li>
          <li>العب رياضة واهتم بصحتك وتغذيتك واقرأ عن التغذية</li>
        </ol>
        <p>
          تذكر أن كل هذا لنفسك أنت المحتاج إن ذاكرت وتعبت وسهرت متوكلا على الله
          رأيت نتيجة تفرحك . وفقك الله لما يحبه ويرضاه
        </p>
      </div>
    </div>
  );
}

export default Home;
