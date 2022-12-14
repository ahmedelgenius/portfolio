import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { IoMdPerson } from "react-icons/io";
import { MdDesignServices } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";
import { ImStatsDots } from "react-icons/im";

const Nav = () => {
  const [activeNew, setActiveNew] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNew("#")}
        className={activeNew === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNew("#about")}
        className={activeNew === "#about" ? "active" : ""}
      >
        <IoMdPerson />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNew("#experience")}
        className={activeNew === "#experience" ? "active" : ""}
      >
        <MdDesignServices />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNew("#portfolio")}
        className={activeNew === "#portfolio" ? "active" : ""}
      >
        <ImStatsDots />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNew("#contact")}
        className={activeNew === "#contact" ? "active" : ""}
      >
        <MdContactPhone />
      </a>
    </nav>
  );
};

export default Nav;
