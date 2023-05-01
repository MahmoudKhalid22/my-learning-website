import React, { useState } from "react";
import "./navbar.css";
// import { AiOutlineMenu } from "react-icons/Ai";
import { FaBars } from "react-icons/fa";
function Navbar() {
  const [menu, setMenu] = useState(false);

  function handleMenu() {
    !menu ? setMenu(true) : setMenu(false);
  }
  return (
    <div className="navbar">
      <div className="logo">
        <a href="#logo">College</a>
      </div>
      <ul className="nav">
        <li className="farsh">
          <a
            href="https://drive.google.com/open?id=13aGUbeGPWiGNYs_r6mjEk8BXdfF5ufxF&authuser=0"
            className="drive"
            target={"_blank"}
          >
            فرش حروف الإمام عاصم
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/drive/folders/1IAjLZr76U-oMvTLDGpvvBXjl2pYGFmVz"
            className="drive"
            target={"_blank"}
          >
            Drive 1
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/drive/folders/1ZAstJ9wz1shqdJPGZ7nO_ioAc8gV7z9r"
            className="drive"
            target={"_blank"}
          >
            Drive 2
          </a>
        </li>
        <li>
          <a href="/subjects" className="subjects">
            Subjects
          </a>
        </li>
        <li>
          <a className="deadline" href="/deadline">
            Deadline. Hurry!
          </a>
        </li>
      </ul>
      <div className="icon">
        <FaBars onClick={handleMenu} />
      </div>
      {menu && (
        <ul className="nav-mobile">
          <li className="farsh">
            <a
              href="https://drive.google.com/open?id=13aGUbeGPWiGNYs_r6mjEk8BXdfF5ufxF&authuser=0"
              className="drive"
              target={"_blank"}
            >
              فرش حروف الإمام عاصم
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/drive/folders/1IAjLZr76U-oMvTLDGpvvBXjl2pYGFmVz"
              className="drive"
              target={"_blank"}
            >
              Drive 1
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/drive/folders/1ZAstJ9wz1shqdJPGZ7nO_ioAc8gV7z9r"
              className="drive"
              target={"_blank"}
            >
              Drive 2
            </a>
          </li>
          <li>
            <a href="/subjects" className="subjects">
              Subjects
            </a>
          </li>
          <li>
            <a className="deadline" href="/deadline">
              Deadline. Hurry!
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
