import React, { useState } from "react";
import "./navbar.css";
// import { AiOutlineMenu } from "react-icons/Ai";
import { FaBars, FaBookOpen } from "react-icons/fa";
import { FiAlertTriangle } from "react-icons/fi";

import logo from "../../assets/logo.jpg";

function Navbar() {
  const [menu, setMenu] = useState(false);

  function handleMenu() {
    !menu ? setMenu(true) : setMenu(false);
  }
  return (
    <div className="navbar">
      <div className="logo">
        <a href="#logo">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <ul className="nav">
        <li>
          <a href="/" className="home">
            Home
          </a>
        </li>
        <li className="farsh">
          <a
            href="https://drive.google.com/open?id=13aGUbeGPWiGNYs_r6mjEk8BXdfF5ufxF&authuser=0"
            className="nav-link quraat"
            target={"_blank"}
          >
            فرش حروف الإمام عاصم
          </a>
          <FaBookOpen className="open" />
        </li>
        <li>
          <a
            href="https://drive.google.com/drive/folders/1IAjLZr76U-oMvTLDGpvvBXjl2pYGFmVz"
            className="nav-link drive"
            target={"_blank"}
          >
            Drive 1
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/drive/folders/1ZAstJ9wz1shqdJPGZ7nO_ioAc8gV7z9r"
            className="nav-link drive"
            target={"_blank"}
          >
            Drive 2
          </a>
        </li>
        <li>
          <a href="/subjects" className="nav-link subjects">
            Subjects
          </a>
        </li>
        <li className="hurry">
          <a className="nav-link deadline" href="/deadline">
            Deadline. Hurry!
          </a>
          <FiAlertTriangle className="alert" />
        </li>
      </ul>
      <div className="icon">
        <FaBars onClick={handleMenu} />
      </div>
      {menu && (
        <ul className="nav-mobile">
          <li className="home">
            <a href="/" className="nav-link home">
              Home
            </a>
          </li>
          <li className="farsh">
            <a
              href="https://drive.google.com/open?id=13aGUbeGPWiGNYs_r6mjEk8BXdfF5ufxF&authuser=0"
              className="nav-link quraat"
              target={"_blank"}
            >
              فرش حروف الإمام عاصم
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/drive/folders/1IAjLZr76U-oMvTLDGpvvBXjl2pYGFmVz"
              className="nav-link drive"
              target={"_blank"}
            >
              Drive 1
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/drive/folders/1ZAstJ9wz1shqdJPGZ7nO_ioAc8gV7z9r"
              className="nav-link drive"
              target={"_blank"}
            >
              Drive 2
            </a>
          </li>
          <li>
            <a href="/subjects" className="nav-link subjects">
              Subjects
            </a>
          </li>
          <li>
            <a className="nav-link deadline hurry" href="/deadline">
              Deadline. Hurry!
              <FiAlertTriangle className="alert" />
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
