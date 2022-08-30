import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { MdOutlineFolderSpecial } from "react-icons/md";
import Me from "../../assets/backgrond.jpg";
import CV from "../../assets/Ahmed_Hany_Resume.pdf";
import { FiDownload } from "react-icons/fi";

const About = () => {
  return (
    <section id="about">
      <h5 className="section-subtitil">My interduction</h5>
      <h2 className="section-title">About Me</h2>
      <div className="about__container container grid">
        <img src={Me} alt="" className="about__img" />
        <div className="about__data">
          <p className="about__description">
            I'm Ahmed, a Junior MERN stack Developer, and l can build
            applications with frontend and backend operations.
          </p>
          <a download="" href={CV} className="btn button--flex">
            Download CV
            <FiDownload className="about__icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
