import React from "react";
import Navbar from "../../components/Navbar/Navbar";

function Error() {
  return (
    <div>
      <Navbar />
      <main>
        <h1>An error occured !</h1>
        <p>Could not find this page .</p>
      </main>
    </div>
  );
}

export default Error;
